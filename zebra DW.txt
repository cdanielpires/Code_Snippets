  // // get current field with focus
            var lv_node = this.getSelection().focusNode;
            var lv_id = "";

            if (SelectDialogSU._dialog.isOpen()) {

                setTimeout(function() {
                    SelectDialogSU._searchField.setValue(data.barcode);
                    SelectDialogSU._searchField.fireSearch();
                }, 50);
                return;
            }

            if (lv_node !== null) {
                if (lv_node.firstElementChild !== null && lv_node.firstElementChild !== undefined) {
                    lv_id = lv_node.firstElementChild.id;
                    if (lv_id.includes('AppCacheNav') || lv_id.includes('oApp')) {
                        InputCopies.focus();
                        InputCopies2.focus();
                        InputCopies3.focus();
                        InputCopies4.focus();
                        InputCopies5.focus();
                        InputCopies6.focus();
                        InputCopies8.focus();
                        InputPrinter7.focus();
                        ButtonMenu.focus();
                        oApp.rerender();

                    } else {
                        var a = document.getElementById(lv_id);
                        a.value = data.barcode;
                        ButtonMenu.focus();
                        oApp.rerender();
                        return;
                    }
                }
            }