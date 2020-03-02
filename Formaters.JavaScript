if (typeof MATNR === "undefined" || MATNR === null || MATNR === "") {
    return;
}
if (!isNaN(MATNR)) {

    var stringText = MATNR.toString();
    var formattedText = stringText.replace(/^0+/, '');

} else {

    var formattedText = MATNR;
}
return formattedText;


*****************************************************************************
*****************************************************************************


function f_zeroFill(number, width) {
    if (!isNaN(number)) {
        width -= number.toString().length;
        if (width > 0) {
            return new Array(width + (/\./.test(number) ? 2 : 1)).join('0') + number;
        }
        return number + ""; // always return a string
    } else {
        return number + ""; // always return a string}
    }
}