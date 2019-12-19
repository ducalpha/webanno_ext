// Add a shortcut in the context of the WebAnno annotation web page.
function addShortcuts() {
    if (typeof shortcut !== 'undefined') {
        (function init_setting() {
            shortcut.add("Shift+d",function() {
                $('input[type="button"][value="Delete"]').click();
            },{
            'disable_in_input':false,
            'type':'keydown',
            'propagate':false,
            'target':document
            });
        })();
    }
}

var script = document.createElement('script');
script.appendChild(document.createTextNode('(' + addShortcuts + ')()'));
document.body.appendChild(script);
