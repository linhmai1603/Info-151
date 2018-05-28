$(document).ready(function() {

	var getRandomNumber = function(max) {
    	var random;
    	if (!isNaN(max)) {
        	random = Math.random(); // value >= 0.0 and < 1.0
        	random = Math.floor(random * max); // value is an integer between 0 and max - 1
        	random = random + 1; // value is an integer between 1 and max
    	}
    	return random;
	};
	
	var calculateFV = function(investment,rate,years) {
		var futureValue = investment;
    	for (var i = 1; i <= years; i++ ) {
			futureValue += futureValue * rate / 100;
			if(futureValue == Infinity){
				//alert("Future value = Infinity \ni = " +i);
				i = years;
			}
    	}
		//alert("The maximum value of a javascript number is: " + Number.MAX_VALUE);
    	futureValue = futureValue.toFixed(2);
		var result = formatFV(futureValue);
		return result;
	};

	var formatFV = function(futureValue) {
		var str = futureValue.toString();
		var n = str.indexOf(".");
		if (str.length >= 10){
			str = '$' + str.substring(n-6,0) +',' +str.substring(n-3,n-6)+',' +str.substring(n,n-3)+str.substring(n);
		}else{
			str = '$' +str.substring(n-3,0)+',' +str.substring(n,n-3)+str.substring(n);
		}
		return str;
	};
	var getDate = function(){
		var dateString = 'Today is ';
		var now = new Date();
		var year = now.getFullYear();
		var month = now.getMonth() +1;
		var day = now.getDate();
		var hours = now.getHours();
		var minutes = now.getMinutes();
		if(month < 10){
			month = "0" + month;
		}
		dateString += month+"/";
		if(day < 10){
			day = "0" + day;
		}
		if(hours < 10){
			hours = "0" + hours;
		}
		if(minutes < 10){
			minutes = "0" + minutes;
		}
		dateString += day+"/"+year +" at " +hours+":"+minutes;
		return dateString;
	}
	$("#calculate").click( function() {
    	//var investment = parseFloat( $("#investment").val() );
		var investment = getRandomNumber(50000);
		document.getElementById("investment").value = investment;
    	//var rate = parseFloat( $("#annual_rate").val() );
		var rate = getRandomNumber(15);
		document.getElementById("annual_rate").value = rate;
    	//var years = parseInt( $("#years").val() );
		var years = getRandomNumber(50);
		document.getElementById("years").value = years;
		if (isNaN(investment) || investment <= 0) {
			alert("Must be > 0");
		}
		else if (isNaN(rate) || rate <= 0) {
		alert("Must be > 0");
		}	
		else if (isNaN(years) || years <= 0) {
			alert("Must be > 0");
			allValid = false;
		}
		else {
			$("#future_value").val(calculateFV(investment,rate,years));
		}
		document.getElementById("date").innerHTML = getDate();
	});
});

