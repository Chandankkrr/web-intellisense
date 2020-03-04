function getTextAtCursorPosition(element) {
    let caretPosition = 0;   
    
    // IE Support
    if (document.selection) {
        element.focus();
        let selection = document.selection.createRange();
        selection.moveStart('character', -element.value.length);
        caretPosition = selection.text.length;
    }

    // Firefox support
    else if (element.selectionStart || element.selectionStart == '0') {
        caretPosition = element.selectionStart;
    }
    
    let previousText = element.value.substring(0, caretPosition);
    if (previousText.indexOf(" ") > 0) {
        let words = previousText.split(" ");
        return words[words.length - 1]; //return last word
    }
    else {
        return previousText;
    }
}

function populateIntellisense(inputTextArea) {
    let textAtCursorPosition = getTextAtCursorPosition(inputTextArea);

    // generate intellisense for word at current cursor position
}

function setupIntellisense(){
    let inputTextArea = document.getElementsByTagName('textarea');
    inputTextArea.addEventListener('keyup', () => populateIntellisense(inputTextArea));
}

window.addEventListener('load', setupIntellisense, false);
