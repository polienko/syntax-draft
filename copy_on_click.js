var color = document.querySelectorAll('td') //DOM selector

//Loop through all elements and attaching event listener
color.forEach(el => {
  el.addEventListener('click',copyText)
})

// function for selecting the text of an element based on the event.target (supporting IE)
function selectText() {
    var element = event.target
    var range;
    if (document.selection) {
        // IE
        range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
    } else if (window.getSelection) {
        range = document.createRange();
        range.selectNode(element);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
    }
}

// function for copying selected text in clipboard
function copyText() {
    selectText();
    alert('Color code ' + event.target.innerText + ' copied in clipboard')
    document.execCommand("copy");
}