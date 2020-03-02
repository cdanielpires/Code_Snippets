function f_keyboard(e) {
    if (window.cordova) {
        if (sap.n.currentView.sViewName === 'ZUI_NV_INVENTORY_COUNTING') {

            // event.preventDefault();

            var CurrentPage = oApp.getCurrentPage().getId();

            if (CurrentPage.includes('oPageSelection3')) {
                switch (e.keyCode) {
                    case 9:
                    case 13:
                        setTimeout(function() {

                            ButtonFirst.focus();
                        }, 200);
                        break;
                }
            }
        }
    }
}
