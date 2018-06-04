"use strict";
$(document).ready(function(){
    var isPrimeNumber = function(number) {
        var isPrime = (number < 2) ? false: true;  // set default return value
        for (var i = 2; i < number; i++) {
            if( number % i === 0 )
                isPrime = false;
                break;
        }
        return isPrime;
    };
    
    $("#calculate").click( function() {
        var number = parseInt( $("#number").val() );
        if ( isNaN(number) ) {
            $("#message").text( "Please enter a number." );
        } else {
            /*var isPrime = isPrimeNumber( number );

            if ( isPrime === true ) {
                $("#message").text( number + " is a prime number." );
            } else {
                $("#message").text( number + " is NOT a prime number." );
            }*/
			var str = '';
			$("#message").text( "" );
			for (var i = 1; i <= number; i++){
				var isPrime = isPrimeNumber(i);
				if(isPrime === true){
					str += i +" " 
					$("#message").text(str);
				}else{
					continue;
				}
			}
		}
        $("#number").focus();
        $("#number").select();
    });
    
    $("#number").focus();
});