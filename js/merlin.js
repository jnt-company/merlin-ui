import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;
import './merlin/_confirm-modal';
import './merlin/_copy';
import './merlin/_help';
import 'jnt-image-toolkit/app.js';

/* sidebar toggle */
Array.from(document.getElementsByClassName('toggle-sidebar-btn')).forEach((e) =>
    e.addEventListener('click', function () {
        document.body.classList.toggle('toggle-sidebar');
    })
);

/* header scrolled */
let selectHeader = document.getElementById('header');
if (selectHeader) {
    const headerScrolled = () => {
        if (window.scrollY > 100) {
            selectHeader.classList.add('header-scrolled');
        } else {
            selectHeader.classList.remove('header-scrolled');
        }
    };
    window.addEventListener('load', headerScrolled);
    document.addEventListener('scroll', headerScrolled);
}

/* back to top */
let backtotop = document.getElementsByClassName('back-to-top');
if (backtotop) {
    backtotop = backtotop[0];
    const toggleBacktotop = () => {
        if (window.scrollY > 100) {
            backtotop.classList.add('active');
        } else {
            backtotop.classList.remove('active');
        }
    };
    window.addEventListener('load', toggleBacktotop);
    document.addEventListener('scroll', toggleBacktotop);
}
