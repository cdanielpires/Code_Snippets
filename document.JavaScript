InputQuantityadd.onfocusin = function(Call) {

        let field = Call.srcControl;

        // select the text in the input field in order to overwire
        var value = field.getValue();
        var len = value.length;
        field.selectText(0, len);

        setTimeout(function() {
            var a = document.getElementById(field.sId);
            a.scrollIntoView();
        }, 1000);

    };
	
	
	
	document.activeElement.blur()
	document.activeElement.id
	document.activeElement.select()
	
	
	getobject 
	var a = sap.ui.getCore().byId('B1')
