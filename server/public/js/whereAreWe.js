//this is the variable where the users location is stored.
var whereAreWe = {};

/*
this is a prototype I use for less ugly variable interpolation in strings. 
this is an example:
"I am {foo} and {bar}"
	.supplant(
		{
			foo:"Evan",
			bar:"not a salmon"
		}
	)
*/
String.prototype.supplant = function (o) {
	return this.replace(/{([^{}]*)}/g,
	function (a, b) {
		var r = o[b];
		return typeof r === 'string' || typeof r === 'number' ? r : a;
	});
};
function buildFlag(){
	whereAreWe.flag = "http://www.geognos.com/api/en/countries/flag/"+whereAreWe.cc+".png"
}
//This is the function that is called when the location is discovered. 
var cb = function run(){
	console.log(whereAreWe)
}

//this is the function called when the user does not/ cannot use html5 geolocation
function noGeoLocation(callback){
	o = {myIp: "324234" }
	$.ajax({
		url: 'http://smart-ip.net/geoip-json?callback=fish',
		dataType: "jsonp",
		jsonpCallback: "fish",
		success: function(data){
			whereAreWe.cc = data.countryCode;
			whereAreWe.discoveryMethod = "geoIp"
			whereAreWe.city = data.city
			buildFlag();
		},
		complete: callback,
		error: function(error){
			console.log(error);

		}
	})
}

//find me is the function called when you want to find the user
//if called with out the argument, then it finds the user. 
//If an argument is passed, then it fakes a country. 
//findMe() returns the user
//findMe(true) //returns a random country
//findMe("IN") //returns India.    
function findMe(callback, fakeIt){
	if(fakeIt===undefined){
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				function(pos){ 
					whereAreWe.lat= (pos.coords.latitude)
					whereAreWe.lon= (pos.coords.longitude)
					$.ajax({
						url: 'http://ws.geonames.org/countryCode?lat={lat}&lng={lon}&type=json'.supplant(whereAreWe),
						dataType: "jsonp",
						jsonpCallback: "doCallback",
						success: function(data){
							whereAreWe.cc = data.countryCode
							whereAreWe.discoveryMethod = "html5"
							whereAreWe.country = data.countryName
							buildFlag();
						},
						complete: callback
					}) 
				},
				function(error){
					noGeoLocation(callback);
					console.log(error)
				}
			)
		}else{
			noGeoLocation(callback);
		}
	} else {
		whereAreWe.discoveryMethod = "fakeIt"
		ccs = ["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AN", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BM", "BN", "BO", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "of", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CS", "CU", "CV", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "of", "FO", "FR", "FX", "GA", "GB", "GD", "GE", "GF", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "S.", "S.", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IO", "IQ", "IR", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "ST", "SU", "SV", "El", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TP", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UK", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "YE", "YT", "YU", "ZA", "ZM", "ZR", "ZW", "US", "US", "US" ];
		if(
			ccs.indexOf(
				(fakeIt+'').toUpperCase() 
			)!=-1  ){
			whereAreWe.cc = fakeIt.toUpperCase()
		}else{
			whereAreWe.cc = ccs[Math.round((Math.random()*100000)%ccs.length)]
		}
		buildFlag();
		callback();
	}
}

findMe();
