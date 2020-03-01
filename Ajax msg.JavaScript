f_set_busy(false);

if (typeof modelMessageArea.oData !== 'undefined') {
    //Long vibration if error
    f_vibrate(1000);

    //Show error message
    MessageArea.setVisible(true);

} else {
     f_vibrate(100);
    MessageArea.setVisible(false);
}


*******************************************************************

ButtonPrint.setEnabled(true);

f_set_busy(false);

if (typeof modelMessageArea.oData !== 'undefined') {

    if (modelMessageArea.oData[0].TYPE !== 'Error') {
        f_vibrate(100);
        InputDoff.setValue("");
        InputWfrom.setValue("");
        InputWto.setValue("");
        InputSequence.setValue("");

    } else {

        //Long vibration if error
        f_vibrate(1000);
    }

    //Show error message
    MessageArea.setVisible(true);

} else if (modelTreeLog.oData.children.length > 0) {

    f_vibrate(500);
    oApp.to(oPageLog);

} else {

    f_vibrate(100);
    MessageArea.setVisible(false);
    InputDoff.setValue("");
    InputWfrom.setValue("");
    InputWto.setValue("");
    InputSequence.setValue("");

}