import html2canvas from 'html2canvas';
var help_keys = [];
window.addEventListener('keydown', function (e) {
    if (
        document.activeElement.id != 'tinymce' &&
        document.activeElement.localName != 'input' &&
        document.activeElement.localName != 'textarea'
    ) {
        if (help_keys.length >= 4) {
            help_keys.splice(0, 1);
        }
        help_keys.push(e.keyCode);
        if (help_keys.length == 4) {
            if (
                help_keys[0] == 72 &&
                help_keys[1] == 69 &&
                help_keys[2] == 76 &&
                help_keys[3] == 80
            ) {
                merlinHelp();
            }
        }
    }
});

window.merlinHelp = function () {
    document.getElementById('merlin-help-link').setAttribute('hidden', true);
    html2canvas(document.body).then(function (canvas) {
        var helpModal = new bootstrap.Modal(
            document.getElementById('merlin-help-modal')
        ).show();
        document.getElementById('merlin-help-screenshot').value =
            canvas.toDataURL('image/png');
    });
    document.getElementById('merlin-help-user-agent').value =
        window.navigator.userAgent;
};
