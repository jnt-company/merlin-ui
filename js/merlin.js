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

window.livewireWysiwyg = function(selector, saveContent){
    tinymce.init({
        selector: selector,
        promotion: false,
        setup: function (editor) {
            editor.on('init change', function () {
                editor.save();
            });
            editor.on('change', function (e) {
                saveContent(editor.getContent());
            });
        },
        menubar: 'edit insert format table',
        menu: {
            format: {
                title: 'Format',
                items:
                    'strikethrough superscript subscript | formats align | forecolor backcolor | code removeformat',
            },
        },
        toolbar:
        'bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | image link',
        toolbar_mode: 'floating',
        plugins: 'code image link lists table',
        default_link_target: '_blank',
        image_caption: true,
        custom_colors: false,
        color_cols: 4,
        relative_urls: false,
        convert_urls: false,
    });
};

