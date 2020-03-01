// vibrate to inform the user
function f_vibrate(value) {
    if (window.cordova) {
        navigator.vibrate(value);
    }
}


function f_set_busy(value) {
    oApp.setBusy(value);
    if (window.datawedge) {
        if (value) {
            datawedge.stop();
        } else {
            datawedge.start();
        }
    }
}


// search and display the erro msg
function showMessage(id, msgid, msgnb, w1, w2, w3, w4, w5, MStrip) {
    var message = ModelData.Find(TableMSG, ["ARBGB", "MSGNR"], [msgid, msgnb], "EQ");

    if (message) {
        var wa_message = {};

        //Delete data
        ModelData.Delete(id);

        try {
            //New message to be displayed
            wa_message.MESSAGE = message[0].TEXT;
        } catch (e) {
            //Missing translation
            wa_message.MESSAGE = msgid + " " + msgnb;
        }
        //replace the & with the respective values
        if (w1) {
            wa_message.MESSAGE = wa_message.MESSAGE.replace("&1", w1);
        }
        if (w2) {
            wa_message.MESSAGE = wa_message.MESSAGE.replace("&2", w2);
        }
        if (w3) {
            wa_message.MESSAGE = wa_message.MESSAGE.replace("&3", w3);
        }
        if (w4) {
            wa_message.MESSAGE = wa_message.MESSAGE.replace("&4", w4);
        }
        if (w5) {
            wa_message.MESSAGE = wa_message.MESSAGE.replace("&", w5);
        } else {

            if (w1) {
                wa_message.MESSAGE = wa_message.MESSAGE.replace("&", w1);
            }
            if (w2) {

                wa_message.MESSAGE = wa_message.MESSAGE.replace("&", w2);
            }
            if (w3) {

                wa_message.MESSAGE = wa_message.MESSAGE.replace("&", w3);
            }
            if (w4) {

                wa_message.MESSAGE = wa_message.MESSAGE.replace("&", w4);
            }

        }

        wa_message.TYPE = "Error";

        // //Show error message
        if (MStrip) {
            MStrip.setText(wa_message.MESSAGE);
        } else {
            // Add Data
            ModelData.Add(id, wa_message);
            id.setVisible(true);
        }
        f_vibrate(500);
    }

}


function setscreen(id) {
    var Field = [
        SimpleFormRawMaterial,
        SegButtonCustomerSpec,
        SimpleFormCustomerSpec,
        SimpleFormPackagingMRO,
        SimpleFormSU,
        SegButtonProduction,
        SimpleFormProduction,
        SimpleFormQM,
        SimpleFormLP,
        SimpleFormPreProd,
        SimpleFormPreProdEXT
    ];

    Field.some(function(field) {

        if (field.sId.includes(id) ) {
            field.setVisible(true);
        } else {
            field.setVisible(false);
        }
    });


    var Text1 =[
        TextRawMaterial,
        TextPackagingMRO,
        TextProduction,
        TextSU,
        TextCustomerSpec,
        TextQM,
        TextLP,
        TextPreProd
        ];


    Text1.some(function(field) {

        if (field.sId.includes(id) ) {
            Text.setText( field.getText());
            return true;
        }
    });


}