var canvas;
var application;


pc.extend(pc, function () {
    var CANVAS_ID = 'application-canvas';
    var CONTAINER_ID = 'application-container';
    
    /**
     * @name pc.Bootstrap
     * @class Bootstrap the application. 
     * From a configuration object download Entity data or retrieve it from export data file, create canvas, pc.fw.Application and start.
     * @constructor Create a new Bootstrap instance, call start to create and run the application
     * @param {Object} config Configuration file
     * @param {Boolean} [config.useApi] Use corazon.js to access the API on the server to load data, alternatively data should be present in the pc.content.data from an export 
     * @param {DOMElement} [config.element] Containing element for the application
     * @param {Boolean} [config.resize] If true the canvas is automatically resized to fill the window and match resolutions as it is resized, default is true
     * @param {Boolean} [config.autofocus] If true the canvas.focus() is called after the application is started, default is the same value as resize
     * @param {String} [config.entity] The resource id of the Pack Entity to load
     * @param {String} [config.username]
     * @param {String} [config.depot]
     */
    var Bootstrap = function (config) {
        pc.config = pc.config || {};
    
        this.useApi = config['useApi'] || false;
        this.element = config['element'] || document.body;
        this.resize = pc.isDefined(config['resize']) ? config['resize'] : true;
        this.autofocus = pc.isDefined(config['autofocus']) ? config['autofocus'] : this.resize;
        
        this.packId = config['entity'];
        this.username = config['username'] || null;
        this.depotName = config['depot'] || null;
        
        this.keyboard = null;
        this.mouse = null;
        this.canvas = null;

        // ensure 'this' value is correct
        this.onWindowResize = this.onWindowResize.bind(this);

        this._createCanvas(config);         
    };
    
    /**
     * @function
     * @name pc.Bootstrap#start
     * @description Start the bootstrapping process
     */
    Bootstrap.prototype.start = function () {
        this.keyboard = new pc.input.Keyboard(this.container, {
            preventDefault: true    
        });
        this.mouse = new pc.input.Mouse(this.container);
        
        if (this.useApi) {
            this._startFromAPI();
        } else {
            this._startFromData();
        }
        
    };
    
    /**
     * @function 
     * @name pc.Bootstrap#onWindowResize
     * @description Called when a window resize event is fired if the application is set to fill the window
     */
    Bootstrap.prototype.onWindowResize = function (event) {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    };
    
    /**
     * @private
     * @function
     * @name pc.BootStrap#_startFromData
     * @description Start the application using data from pc.content.data. This is used in an exported application
     */
    Bootstrap.prototype._startFromData = function () {
        // Get the canvas resolution from the Designer Component 
        var appData = this._getAppData(null, application);
        this._setResolution(appData['width'], appData['height'], appData['fillWindow'])

        this._createApplication(this.packId, null, this.keyboard, this.mouse);
    };
    
    /**
     * @private
     * @function
     * @name pc.Bootstrap#_startFromAPI
     * @description Start the application by downloading data from the server. This is used while running an application from the Designer. 
     * It requires a logged in user
     */
    Bootstrap.prototype._startFromAPI = function () {
        var self = this;
        var depot = null;
        var corazon = new pc.common.Corazon(pc.config['api_url'], pc.config['corazon']);
        corazon.authorize(self.username, function () {
            corazon.users.getOne(self.username, function (user) {
                user.depots.getOne(self.depotName, function (depot) {
                    depot.repositories.getOne(null, function (repository) {
                        // If there is a code repository enabled, replace localhost prefix with the code repository location
                        if (repository && repository.enabled) {
                            pc.config['script_prefix'] = pc.path.join(corazon.baseUrl, repository.url);
                        }
                        self._createApplication(self.packId, depot, self.keyboard, self.mouse);
                    }, function (errors) {
                        logERROR(errors.join(";"))
                    });            
                }, function (errors) {
                    logERROR(errors.join(";"));
                });
                
            }, function (errors) {
                logERROR(errors.join(";"));
            });
        });        
    };
    
    /**
     * @private
     * @function
     * @name pc.Bootstrap#_createApplication
     * @description Create the pc.fw.Application object and load the initial Pack file.
     * Handles GL errors and displays errors messages
     * @param {String} packId The GUID of the initial Pack to load
     * @param {pc.common.Depot} depot The depot object if the server API is being used or null
     * @param {pc.input.Keyboard} keyboard The keyboard handler
     * @param {pc.input.Mouse} The mouse handler
     */
    Bootstrap.prototype._createApplication = function (packId, depot, keyboard, mouse) {
        try {
            application = new pc.fw.Application(this.canvas, {
                config: pc.config || {},
                keyboard: keyboard,
                mouse: mouse,
                depot: depot || null
            });
            this._load(packId, application);
        }
        catch (e) {
            if (e instanceof pc.gfx.UnsupportedBrowserError) {
                this._displayError(
                    'This page requires a browser that supports WebGL.<br/>' +
                    '<a href="http://get.webgl.org">Click here to find out more.</a>'
                );
                
            } else if (e instanceof pc.gfx.ContextCreationError) {
                this._displayError(
                    "It doesn't appear your computer can support WebGL.<br/>" +
                    '<a href="http://get.webgl.org/troubleshooting/">Click here for more information.</a>'
                );
            }
        }
    };
    
    /**
     * @private
     * @function
     * @name pc.Bootstrap#_load
     * @description Load the Pack file
     * @param {String} guid The GUID of the pack file
     * @param {pc.fw.Application} application The application object
     */
    Bootstrap.prototype._load = function (guid, application) {
        var progressBar = new ProgressBar(this.container);
       
        pc.fw.loadPack(guid, application.context, function (pack) {
            this._setTitle(pack['name']);
             
            progressBar.setVisible(false);
            this.canvas.style.visibility = 'visible';
            if (this.autofocus) {
                this.canvas.focus();
            }
            application.start();
        }.bind(this), function (errors) {
            for(resource in errors) {
                logERROR("[" + resource + "]: " + errors[resource]);    
            }
        }, function (progress) {
            progressBar.setValue(progress);
                    
			try {
				window.playCanvasStatus(progress);
			}
			catch(e) {}
        });

    };
    
    /**
     * @function
     * @private
     * @name pc.Bootstrap#_getAppData
     * @description Get application data from the pack or pc.content.data depending on mode of loading
     */
    Bootstrap.prototype._getAppData = function (pack, application) {
        var appData = null;
        if (pc.content.data['application']) {
            appData = new pc.fw.AppData(pc.content.data['application']);
        } else {
            var children = pack.getChildren();
            var i, len = children.length;
            for (i = 0; i < len; i++) {
                var componentData = application.context.systems.designer.getComponentData(children[i]);
                if (componentData) {
                    appData = new pc.fw.AppData(componentData);
                }
            }
        }
        
        return appData;
    };
    
    /**
     * @private
     * @function 
     * @name pc.Bootstrap#_setTitle
     * @description Set the title of the window
     * @param {String} value The value to include in the title in the for "value - PlayCanvas"
     */
    Bootstrap.prototype._setTitle = function (value) {
        document.title = pc.string.format('{0} - PlayCanvas', value);
    };
    
    /**
     * @private
     * @function
     * @name pc.Bootstrap#_createCanvas
     * @description Create the canvas element and it's container
     */
    Bootstrap.prototype._createCanvas = function (config) {
        this.container = document.createElement('div');
        this.container.setAttribute('id', 'application-container');
        this.container.style.position = 'relative';

        this.container.style.width = '100%';
        this.container.style.height = '100%';

        this.canvas = document.createElement('canvas');
        this.canvas.setAttribute('id', 'application-canvas');
        this.canvas.setAttribute('tabindex', 0);
        this.canvas.style.visibility = 'hidden';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        
        // Disable I-bar cursor on click+drag
        this.canvas.onselectstart = function () { return false; };
        
        this._setResolution(config['width'] || 800, config['height'] || 450, this.resize);

        this.container.appendChild(this.canvas);
        this.element.appendChild(this.container);
    };

    /**
     * @private
     * @function
     * @name pc.Bootstrap#_setResolution
     * @description Set the initial resolution of the canvas
     * @param {Number} width The width (ignored if fillWindow = true)
     * @param {Number} height The height (ignored if fillWindow = true)
     * @param {Boolean} fillWindow Set the resolution to automatically fill the window
     * 
     */
    Bootstrap.prototype._setResolution = function (width, height, fillWindow) {
        if (fillWindow) {
            this.onWindowResize(); 
        
            window.addEventListener('resize', this.onWindowResize, false);            
        } else {
            this.canvas.width = width;
            this.canvas.height = height;
            
            this.container.style.height = this.canvas.height + "px";
            this.container.style.width  = this.canvas.width + "px";
            this.container.style.margin = "50px auto";

            window.removeEventListener('resize', this.onWindowResize);
        }
    };
    
    /**
     * @private
     * @function
     * @name pc.Bootstrap#_displayError
     * @description Show error message if application fails to load
     */
    Bootstrap.prototype._displayError = function (html) {
        var container = this.canvas.parentNode;
        if (container) {
            var block =
                '<table style="background-color: #8CE; width: 100%; height: 100%;"><tr>' +
                '<td align="center">' +
                '<div style="display: table-cell; vertical-align: middle;">' +
                '<div style="">' + html + '</div>' +
                '</div>' +
                '</td></tr></table>';
            container.innerHTML = block;
        }
    };
    
    /**
     * @description Create and show a progress bar
     */
    var ProgressBar = function (element) {
        this.div = document.createElement('div');
    
        this.div.style.display = 'block';
        this.div.style.position = 'absolute';
        this.div.style.left = '50%';
        this.div.style.top = '50%';
        this.div.style.marginLeft = '-25%';
        this.div.style.width = '50%';
        //div.style.height = '50%';
        
        this.bar = document.createElement('progress');
        this.bar.value = 0;
        this.bar.max = 100;
        this.bar.style.width = '100%';
        this.bar.style.height = '20px';
    
        this.div.appendChild(this.bar);
        element.appendChild(this.div);  
    };
    
    ProgressBar.prototype.setVisible = function (visible) {
        var value = visible ? 'visible' : 'hidden';
        var value = visible ? 'block' : 'none';
        //this.div.style.visibility = value;
        this.div.style.display = value;
    };
    
    ProgressBar.prototype.setValue = function (value) {
        this.bar.value = value;        
    };
    
    return {
        Bootstrap: Bootstrap
    }
}());


var bootstrap = new pc.Bootstrap(pc.config['bootstrap']);
bootstrap.start();
