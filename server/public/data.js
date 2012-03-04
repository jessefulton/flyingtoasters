
pc.content.data['application'] = {
    "fillWindow": true,
    "width": 800,
    "height": 450,
};
pc.content.data["ad31b804-d834-460a-9ff4-6c6c0c5b0f2f"] = {
    "resource_id": "ad31b804-d834-460a-9ff4-6c6c0c5b0f2f",
    "_id": "7d234eda-6570-11e1-84ca-fefdb24fbd4d",
    "name": "toasters",
    "parent": null,
    "children": ["8cb1975a-5166-406f-84a9-13066ce62736", "aff88709-9ccc-4820-b6a3-992d49edea5d", "124ed70c-2cde-43e0-8134-2d097e2c1c3a"],
    "labels": [],
    "transform": [1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0],
    "type": "entity",
    "subtype": "entity",
    "components": {"pack": {}}
};
pc.content.data["8cb1975a-5166-406f-84a9-13066ce62736"] = {
    "resource_id": "8cb1975a-5166-406f-84a9-13066ce62736",
    "_id": "d65cc670-6570-11e1-b378-fefdb24fbd4d",
    "name": "Camera",
    "parent": "ad31b804-d834-460a-9ff4-6c6c0c5b0f2f",
    "children": [],
    "labels": [],
    "transform": [0.70710678118654757, 0.0, -0.70710678118654746, 0.0, -0.49999999999999989, 0.70710678118654757, -0.5, 0.0, 0.5, 0.70710678118654746, 0.50000000000000011, 0.0, 10.0, 10.0, 10.0, 1.0],
    "type": "entity",
    "subtype": "entity",
    "components": {"camera": {"offscreen": true, "viewWindowX": 1, "viewWindowY": 1, "projection": 0, "clearColor": "0x000000ff", "fov": 45, "farClip": 100000, "activate": true, "nearClip": 1}, "bloom": {"baseIntensity": 1, "blurAmount": 4, "baseSaturation": 1, "bloomIntensity": 1.25, "bloomSaturation": 1, "bloomThreshold": 0}, "audiosource": {"activate": true, "assets": [], "volume": 1, "rollOffFactor": 1, "minDistance": 1, "maxDistance": 10000, "loop": false, "3d": true}}
};
pc.content.data["aff88709-9ccc-4820-b6a3-992d49edea5d"] = {
    "resource_id": "aff88709-9ccc-4820-b6a3-992d49edea5d",
    "_id": "d709aee4-6570-11e1-b378-fefdb24fbd4d",
    "name": "Light",
    "parent": "ad31b804-d834-460a-9ff4-6c6c0c5b0f2f",
    "children": [],
    "labels": [],
    "transform": [-0.36314449589693959, -0.82233157095750775, 0.43806034117038622, 0.0, -0.31538383029030914, 0.5508912999340343, 0.77269128068615045, 0.0, -0.87673206550871119, 0.14244143731213671, -0.4594032240257806, 0.0, 0.0, 5.305572509765625, 0.0, 1.0],
    "type": "entity",
    "subtype": "entity",
    "components": {"directionallight": {"color": "0xffffff", "intensity": 1.6500000000000001, "enable": true, "castShadows": false}}
};
pc.content.data["124ed70c-2cde-43e0-8134-2d097e2c1c3a"] = {
    "resource_id": "124ed70c-2cde-43e0-8134-2d097e2c1c3a",
    "_id": "d6767160-6570-11e1-b378-fefdb24fbd4d",
    "name": "Toasters",
    "parent": "ad31b804-d834-460a-9ff4-6c6c0c5b0f2f",
    "children": ["02fc15d3-2875-4f05-84e6-eede1ecd94b4", "649d3a64-cedb-4ec3-a16f-f5866589877a", "b9f735f5-8d95-44c5-994a-462afd54fdf1", "202733b2-a3bb-4ece-a810-d2d4d92825c8", "c195356a-f5f0-4dad-a10f-6e3bfe9d507b", "d1425474-ccc5-4faf-b7ad-fac5fe1783f9", "f060bddd-3e2e-4324-a90c-4e950ec9b549", "ddbdb07e-f81b-410c-83e7-5e1c47967496", "2784c5d9-a4e3-4f13-abcb-03a3ff75ffd3"],
    "labels": [],
    "transform": [1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0],
    "type": "entity",
    "subtype": "entity",
    "components": {}
};
pc.content.data["02fc15d3-2875-4f05-84e6-eede1ecd94b4"] = {
    "resource_id": "02fc15d3-2875-4f05-84e6-eede1ecd94b4",
    "_id": "d60694da-6570-11e1-b378-fefdb24fbd4d",
    "name": "Toaster",
    "parent": "124ed70c-2cde-43e0-8134-2d097e2c1c3a",
    "children": [],
    "labels": [],
    "transform": [-1.0, 0.0, -1.2246063538223773e-16, 0.0, 0.0, 1.0, 0.0, 0.0, 1.2246063538223773e-16, 0.0, -1.0, 0.0, 0.0, 0.0, 0.0, 1.0],
    "type": "entity",
    "subtype": "entity",
    "components": {"model": {"receiveShadows": true, "asset": "2d369d78-6570-11e1-a9e3-fefdb24fbd4d", "castShadows": false}, "script": {"urls": "boid.js"}}
};
pc.content.data["649d3a64-cedb-4ec3-a16f-f5866589877a"] = {
    "resource_id": "649d3a64-cedb-4ec3-a16f-f5866589877a",
    "_id": "d61c3eb6-6570-11e1-b378-fefdb24fbd4d",
    "name": "Toaster",
    "parent": "124ed70c-2cde-43e0-8134-2d097e2c1c3a",
    "children": [],
    "labels": [],
    "transform": [-1.0, 0.0, -1.2246063538223773e-16, 0.0, 0.0, 1.0, 0.0, 0.0, 1.2246063538223773e-16, 0.0, -1.0, 0.0, 0.0, 0.0, 0.0, 1.0],
    "type": "entity",
    "subtype": "entity",
    "components": {"model": {"receiveShadows": true, "asset": "2d369d78-6570-11e1-a9e3-fefdb24fbd4d", "castShadows": false}, "script": {"urls": "boid.js"}}
};
pc.content.data["b9f735f5-8d95-44c5-994a-462afd54fdf1"] = {
    "resource_id": "b9f735f5-8d95-44c5-994a-462afd54fdf1",
    "_id": "d6a36da0-6570-11e1-b378-fefdb24fbd4d",
    "name": "Toaster",
    "parent": "124ed70c-2cde-43e0-8134-2d097e2c1c3a",
    "children": [],
    "labels": [],
    "transform": [-1.0, 0.0, -1.2246063538223773e-16, 0.0, 0.0, 1.0, 0.0, 0.0, 1.2246063538223773e-16, 0.0, -1.0, 0.0, 0.0, 0.0, 0.0, 1.0],
    "type": "entity",
    "subtype": "entity",
    "components": {"model": {"receiveShadows": true, "asset": "2d369d78-6570-11e1-a9e3-fefdb24fbd4d", "castShadows": false}, "script": {"urls": "boid.js"}}
};
pc.content.data["202733b2-a3bb-4ece-a810-d2d4d92825c8"] = {
    "resource_id": "202733b2-a3bb-4ece-a810-d2d4d92825c8",
    "_id": "d6c35034-6570-11e1-b378-fefdb24fbd4d",
    "name": "Toaster",
    "parent": "124ed70c-2cde-43e0-8134-2d097e2c1c3a",
    "children": [],
    "labels": [],
    "transform": [-1.0, 0.0, -1.2246063538223773e-16, 0.0, 0.0, 1.0, 0.0, 0.0, 1.2246063538223773e-16, 0.0, -1.0, 0.0, 0.0, 0.0, 0.0, 1.0],
    "type": "entity",
    "subtype": "entity",
    "components": {"model": {"receiveShadows": true, "asset": "2d369d78-6570-11e1-a9e3-fefdb24fbd4d", "castShadows": false}, "script": {"urls": "boid.js"}}
};
pc.content.data["c195356a-f5f0-4dad-a10f-6e3bfe9d507b"] = {
    "resource_id": "c195356a-f5f0-4dad-a10f-6e3bfe9d507b",
    "_id": "d7234da4-6570-11e1-b378-fefdb24fbd4d",
    "name": "Toaster",
    "parent": "124ed70c-2cde-43e0-8134-2d097e2c1c3a",
    "children": [],
    "labels": [],
    "transform": [-1.0, 0.0, -1.2246063538223773e-16, 0.0, 0.0, 1.0, 0.0, 0.0, 1.2246063538223773e-16, 0.0, -1.0, 0.0, 0.0, 0.0, 0.0, 1.0],
    "type": "entity",
    "subtype": "entity",
    "components": {"model": {"receiveShadows": true, "asset": "2d369d78-6570-11e1-a9e3-fefdb24fbd4d", "castShadows": false}, "script": {"urls": "boid.js"}}
};
pc.content.data["d1425474-ccc5-4faf-b7ad-fac5fe1783f9"] = {
    "resource_id": "d1425474-ccc5-4faf-b7ad-fac5fe1783f9",
    "_id": "d6430208-6570-11e1-b378-fefdb24fbd4d",
    "name": "Toaster",
    "parent": "124ed70c-2cde-43e0-8134-2d097e2c1c3a",
    "children": [],
    "labels": [],
    "transform": [-1.0, 0.0, -1.2246063538223773e-16, 0.0, 0.0, 1.0, 0.0, 0.0, 1.2246063538223773e-16, 0.0, -1.0, 0.0, 0.0, 0.0, 0.0, 1.0],
    "type": "entity",
    "subtype": "entity",
    "components": {"model": {"receiveShadows": true, "asset": "2d369d78-6570-11e1-a9e3-fefdb24fbd4d", "castShadows": false}, "script": {"urls": "boid.js"}}
};
pc.content.data["f060bddd-3e2e-4324-a90c-4e950ec9b549"] = {
    "resource_id": "f060bddd-3e2e-4324-a90c-4e950ec9b549",
    "_id": "d6e33a48-6570-11e1-b378-fefdb24fbd4d",
    "name": "Toaster",
    "parent": "124ed70c-2cde-43e0-8134-2d097e2c1c3a",
    "children": [],
    "labels": [],
    "transform": [-1.0, 0.0, -1.2246063538223773e-16, 0.0, 0.0, 1.0, 0.0, 0.0, 1.2246063538223773e-16, 0.0, -1.0, 0.0, 0.0, 0.0, 0.0, 1.0],
    "type": "entity",
    "subtype": "entity",
    "components": {"model": {"receiveShadows": true, "asset": "2d369d78-6570-11e1-a9e3-fefdb24fbd4d", "castShadows": false}, "script": {"urls": "boid.js"}}
};
pc.content.data["ddbdb07e-f81b-410c-83e7-5e1c47967496"] = {
    "resource_id": "ddbdb07e-f81b-410c-83e7-5e1c47967496",
    "_id": "d689cbc0-6570-11e1-b378-fefdb24fbd4d",
    "name": "Toaster",
    "parent": "124ed70c-2cde-43e0-8134-2d097e2c1c3a",
    "children": [],
    "labels": [],
    "transform": [-1.0, 0.0, -1.2246063538223773e-16, 0.0, 0.0, 1.0, 0.0, 0.0, 1.2246063538223773e-16, 0.0, -1.0, 0.0, 0.0, 0.0, 0.0, 1.0],
    "type": "entity",
    "subtype": "entity",
    "components": {"model": {"receiveShadows": true, "asset": "2d369d78-6570-11e1-a9e3-fefdb24fbd4d", "castShadows": false}, "script": {"urls": "boid.js"}}
};
pc.content.data["2784c5d9-a4e3-4f13-abcb-03a3ff75ffd3"] = {
    "resource_id": "2784c5d9-a4e3-4f13-abcb-03a3ff75ffd3",
    "_id": "d6f67180-6570-11e1-b378-fefdb24fbd4d",
    "name": "Toaster",
    "parent": "124ed70c-2cde-43e0-8134-2d097e2c1c3a",
    "children": [],
    "labels": [],
    "transform": [-1.0, 0.0, -1.2246063538223773e-16, 0.0, 0.0, 1.0, 0.0, 0.0, 1.2246063538223773e-16, 0.0, -1.0, 0.0, 0.0, 0.0, 0.0, 1.0],
    "type": "entity",
    "subtype": "entity",
    "components": {"model": {"receiveShadows": true, "asset": "2d369d78-6570-11e1-a9e3-fefdb24fbd4d", "castShadows": false}, "script": {"urls": "boid.js"}}
};
pc.content.data["2d369d78-6570-11e1-a9e3-fefdb24fbd4d"] = {
    "resource_id": "2d369d78-6570-11e1-a9e3-fefdb24fbd4d",
    "_id": "2d36a0ca-6570-11e1-a9e3-fefdb24fbd4d",
    "name": "toaster.json",
    "subasset_files": [],
    "subtype": "model",
    "file": {
        "resource_id": "2d4b241e-6570-11e1-a9e3-fefdb24fbd4d",
        "_id": "2d4b20f4-6570-11e1-a9e3-fefdb24fbd4d",    
        "hash": "7b4e89af85da3d5dabf2fd05f7395ae1",
        "exported": true,
        "url": "assets/will/arthacksf/2d/2d369d78-6570-11e1-a9e3-fefdb24fbd4d/toaster.json",    
        "asset": "2d369d78-6570-11e1-a9e3-fefdb24fbd4d",    
        "type": "file",    
        "subtype": "model",    
    },
    "type": "asset"
};
pc.content.data["2d369d78-6570-11e1-a9e3-fefdb24fbd4d"] = {
    "resource_id": "2d369d78-6570-11e1-a9e3-fefdb24fbd4d",
    "_id": "2d36a0ca-6570-11e1-a9e3-fefdb24fbd4d",
    "name": "toaster.json",
    "subasset_files": [],
    "subtype": "model",
    "file": {
        "resource_id": "2d4b241e-6570-11e1-a9e3-fefdb24fbd4d",
        "_id": "2d4b20f4-6570-11e1-a9e3-fefdb24fbd4d",    
        "hash": "7b4e89af85da3d5dabf2fd05f7395ae1",
        "exported": true,
        "url": "assets/will/arthacksf/2d/2d369d78-6570-11e1-a9e3-fefdb24fbd4d/toaster.json",    
        "asset": "2d369d78-6570-11e1-a9e3-fefdb24fbd4d",    
        "type": "file",    
        "subtype": "model",    
    },
    "type": "asset"
};
pc.content.data["2d369d78-6570-11e1-a9e3-fefdb24fbd4d"] = {
    "resource_id": "2d369d78-6570-11e1-a9e3-fefdb24fbd4d",
    "_id": "2d36a0ca-6570-11e1-a9e3-fefdb24fbd4d",
    "name": "toaster.json",
    "subasset_files": [],
    "subtype": "model",
    "file": {
        "resource_id": "2d4b241e-6570-11e1-a9e3-fefdb24fbd4d",
        "_id": "2d4b20f4-6570-11e1-a9e3-fefdb24fbd4d",    
        "hash": "7b4e89af85da3d5dabf2fd05f7395ae1",
        "exported": true,
        "url": "assets/will/arthacksf/2d/2d369d78-6570-11e1-a9e3-fefdb24fbd4d/toaster.json",    
        "asset": "2d369d78-6570-11e1-a9e3-fefdb24fbd4d",    
        "type": "file",    
        "subtype": "model",    
    },
    "type": "asset"
};
pc.content.data["2d369d78-6570-11e1-a9e3-fefdb24fbd4d"] = {
    "resource_id": "2d369d78-6570-11e1-a9e3-fefdb24fbd4d",
    "_id": "2d36a0ca-6570-11e1-a9e3-fefdb24fbd4d",
    "name": "toaster.json",
    "subasset_files": [],
    "subtype": "model",
    "file": {
        "resource_id": "2d4b241e-6570-11e1-a9e3-fefdb24fbd4d",
        "_id": "2d4b20f4-6570-11e1-a9e3-fefdb24fbd4d",    
        "hash": "7b4e89af85da3d5dabf2fd05f7395ae1",
        "exported": true,
        "url": "assets/will/arthacksf/2d/2d369d78-6570-11e1-a9e3-fefdb24fbd4d/toaster.json",    
        "asset": "2d369d78-6570-11e1-a9e3-fefdb24fbd4d",    
        "type": "file",    
        "subtype": "model",    
    },
    "type": "asset"
};
pc.content.data["2d369d78-6570-11e1-a9e3-fefdb24fbd4d"] = {
    "resource_id": "2d369d78-6570-11e1-a9e3-fefdb24fbd4d",
    "_id": "2d36a0ca-6570-11e1-a9e3-fefdb24fbd4d",
    "name": "toaster.json",
    "subasset_files": [],
    "subtype": "model",
    "file": {
        "resource_id": "2d4b241e-6570-11e1-a9e3-fefdb24fbd4d",
        "_id": "2d4b20f4-6570-11e1-a9e3-fefdb24fbd4d",    
        "hash": "7b4e89af85da3d5dabf2fd05f7395ae1",
        "exported": true,
        "url": "assets/will/arthacksf/2d/2d369d78-6570-11e1-a9e3-fefdb24fbd4d/toaster.json",    
        "asset": "2d369d78-6570-11e1-a9e3-fefdb24fbd4d",    
        "type": "file",    
        "subtype": "model",    
    },
    "type": "asset"
};
pc.content.data["2d369d78-6570-11e1-a9e3-fefdb24fbd4d"] = {
    "resource_id": "2d369d78-6570-11e1-a9e3-fefdb24fbd4d",
    "_id": "2d36a0ca-6570-11e1-a9e3-fefdb24fbd4d",
    "name": "toaster.json",
    "subasset_files": [],
    "subtype": "model",
    "file": {
        "resource_id": "2d4b241e-6570-11e1-a9e3-fefdb24fbd4d",
        "_id": "2d4b20f4-6570-11e1-a9e3-fefdb24fbd4d",    
        "hash": "7b4e89af85da3d5dabf2fd05f7395ae1",
        "exported": true,
        "url": "assets/will/arthacksf/2d/2d369d78-6570-11e1-a9e3-fefdb24fbd4d/toaster.json",    
        "asset": "2d369d78-6570-11e1-a9e3-fefdb24fbd4d",    
        "type": "file",    
        "subtype": "model",    
    },
    "type": "asset"
};
pc.content.data["2d369d78-6570-11e1-a9e3-fefdb24fbd4d"] = {
    "resource_id": "2d369d78-6570-11e1-a9e3-fefdb24fbd4d",
    "_id": "2d36a0ca-6570-11e1-a9e3-fefdb24fbd4d",
    "name": "toaster.json",
    "subasset_files": [],
    "subtype": "model",
    "file": {
        "resource_id": "2d4b241e-6570-11e1-a9e3-fefdb24fbd4d",
        "_id": "2d4b20f4-6570-11e1-a9e3-fefdb24fbd4d",    
        "hash": "7b4e89af85da3d5dabf2fd05f7395ae1",
        "exported": true,
        "url": "assets/will/arthacksf/2d/2d369d78-6570-11e1-a9e3-fefdb24fbd4d/toaster.json",    
        "asset": "2d369d78-6570-11e1-a9e3-fefdb24fbd4d",    
        "type": "file",    
        "subtype": "model",    
    },
    "type": "asset"
};
pc.content.data["2d369d78-6570-11e1-a9e3-fefdb24fbd4d"] = {
    "resource_id": "2d369d78-6570-11e1-a9e3-fefdb24fbd4d",
    "_id": "2d36a0ca-6570-11e1-a9e3-fefdb24fbd4d",
    "name": "toaster.json",
    "subasset_files": [],
    "subtype": "model",
    "file": {
        "resource_id": "2d4b241e-6570-11e1-a9e3-fefdb24fbd4d",
        "_id": "2d4b20f4-6570-11e1-a9e3-fefdb24fbd4d",    
        "hash": "7b4e89af85da3d5dabf2fd05f7395ae1",
        "exported": true,
        "url": "assets/will/arthacksf/2d/2d369d78-6570-11e1-a9e3-fefdb24fbd4d/toaster.json",    
        "asset": "2d369d78-6570-11e1-a9e3-fefdb24fbd4d",    
        "type": "file",    
        "subtype": "model",    
    },
    "type": "asset"
};
pc.content.data["2d369d78-6570-11e1-a9e3-fefdb24fbd4d"] = {
    "resource_id": "2d369d78-6570-11e1-a9e3-fefdb24fbd4d",
    "_id": "2d36a0ca-6570-11e1-a9e3-fefdb24fbd4d",
    "name": "toaster.json",
    "subasset_files": [],
    "subtype": "model",
    "file": {
        "resource_id": "2d4b241e-6570-11e1-a9e3-fefdb24fbd4d",
        "_id": "2d4b20f4-6570-11e1-a9e3-fefdb24fbd4d",    
        "hash": "7b4e89af85da3d5dabf2fd05f7395ae1",
        "exported": true,
        "url": "assets/will/arthacksf/2d/2d369d78-6570-11e1-a9e3-fefdb24fbd4d/toaster.json",    
        "asset": "2d369d78-6570-11e1-a9e3-fefdb24fbd4d",    
        "type": "file",    
        "subtype": "model",    
    },
    "type": "asset"
};