var whereAreWe = {};
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
function run(){
	console.log(whereAreWe)
}
function noGeoLocation(){
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
		complete: run(),
		error: function(error){
			console.log(error);

		}
	})
}
function findMe(fakeIt){
	if(fakeIt===undefined){
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				function(pos){ 
					whereAreWe.lat= (pos.coords.latitude)
					whereAreWe.lon= (pos.coords.longitude)
					$.ajax({
						url: 'http://ws.geonames.org/countryCode?lat={lat}&lng={lon}&type=json'.supplant(whereAreWe),
						dataType: "jsonp",
						jsonpCallback: "callback",
						success: function(data){
							whereAreWe.cc = data.countryCode
							whereAreWe.discoveryMethod = "html5"
							whereAreWe.country = data.countryName
							buildFlag();
						},
						complete: run(),
					}) 
				},
				function(error){
					noGeoLocation();
					console.log(error)
				}
			)
		}else{
			noGeoLocation();
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
		buildFlag()
	}
}
