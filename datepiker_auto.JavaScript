DatePicker.onfocusin = function() {
    try {
        var view = sap.n.currentView.getId() + '--';
    } catch (err) {
        view  = '';
    }
    $('#' + view + 'DatePicker-icon').click();
    if (document.activeElement.id === view + 'DatePicker-inner') {
        document.activeElement.blur();
    }
};