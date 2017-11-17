var express = require('express');
var _ = require('underscore');
var router = express.Router();
//var read = [];
//var reading = [];
var data = [];
var isAppdata =false;
var types=[];
var Client = require("ibmiotf");
var current_type="+";
var current_id="+";



/* GET home page. */
router.get('/', function(req, res, next) {
	 console.log("org id:"+ req.query.org_id)
	 if(req.query.auth_key && req.query.auth_token){
		data =[];
		var obj ={
		  "org": req.query.auth_key.split('-')[1],
		  "id": new Date().getTime()+"",
		  "auth-key": req.query.auth_key,
		  "auth-token": req.query.auth_token
		}
		appClient = new Client.IotfApplication(obj);
		appClient.connect();

		appClient.on("connect", function () {
			res.redirect('/status');
		});

		appClient.on("deviceStatus", function (deviceType, deviceId, payload, topic) {
			var obj = JSON.parse(payload);
			obj.id = deviceId;
			obj.type = deviceType;

			console.log("Device status from :: "+deviceType+" : "+deviceId+" is "+obj.Action+" with Close Code being "+obj.CloseCode+" and Reason being \""+obj.Reason+" "+obj.ClientAddr+"\"");
			var info = _.find(data,function(itm){return itm.id == deviceId && itm.type == deviceType});

			if(!info){
				data.push(obj);
			}
			else
			{
				info.Action = obj.Action;
				info.CloseCode= obj.CloseCode;
				info.Reason=obj.Reason;
				info.ClientAddr=obj.ClientAddr;
			}
		});

		appClient.on("error", function (err) {
				console.log("Error : "+err);
		});
	 }
	 else{
		res.render('user', { title: 'IBM Watson IoT Platform'});//,data,selected:req.query.type});
	 }

});

/* GET Device Status page. */
router.get('/status', function(req, res, next) {
	data =[];
	if(typeof appClient != 'undefined'){
		if (req.query.type && current_type != req.query.type  ){
			data =[];
			appClient.unsubscribeToDeviceStatus(current_type, current_id);
			current_type = req.query.type;
			current_id = "";
		}
		if (req.query.id && current_id != req.query.id ){
			data =[];
			appClient.unsubscribeToDeviceStatus(current_type, current_id);
			current_id = req.query.id;
		}

		appClient.subscribeToDeviceStatus(current_type||"+",current_id||"+",0);
		res.render('status', { title: 'IBM Watson IoT Platform' ,data,types,selected:current_type});
	}
	else{
		res.redirect('/');
	}

});
router.get('/status/data', function(req, res, next) {
    res.json(data);
});
router.get('/status/type', function(req, res, next) {
	appClient.getAllDeviceTypes().then (function onSuccess (response) {
		
				types = _.pluck(response.results,"id");
				res.json(types);
				
		}, function onError (error) {

			console.log("Fail");
			console.log(error);
			res.json(types)
		}
		);
});
module.exports = router;
