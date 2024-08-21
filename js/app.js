var magic_keys = [];
var maestro_keys = [];
window.addEventListener('keypress', function(e) {
    if (magic_keys.length >= 6) {
        magic_keys.splice(0, 1);
    }
    magic_keys.push(e.which);
    if (magic_keys.length == 6) {
        if (
            (magic_keys[0] == 109 || magic_keys[0] == 77) &&
            (magic_keys[1] == 101 || magic_keys[1] == 69) &&
            (magic_keys[2] == 114 || magic_keys[2] == 82) &&
            (magic_keys[3] == 108 || magic_keys[3] == 76) &&
            (magic_keys[4] == 105 || magic_keys[4] == 73) &&
            (magic_keys[5] == 110 || magic_keys[5] == 78)
        ) {
            var magicKey = document.getElementById('merlin-edit-container');
            console.log(magicKey);
            magicKey.classList.remove('hidden');
            magicKey.removeAttribute('hidden');
            magicKey.style.opacity = 1;
        }
    }
    if( !(this.document.activeElement.tagName == 'INPUT' || this.document.activeElement.tagName == 'TEXTAREA')) {
        if (maestro_keys.length >= 7) {
            maestro_keys.splice(0, 1);
        }
        maestro_keys.push(e.key);
        if(maestro_keys.length == 7) {
            if(maestro_keys[0] == 'm' && maestro_keys[1] == 'a' && maestro_keys[2] == 'e' && maestro_keys[3] == 's' && maestro_keys[4] == 't' && maestro_keys[5] == 'r' && maestro_keys[6] == 'o' ){
                this.window.location = '/login/maestro';
            }
        }
    }
});
