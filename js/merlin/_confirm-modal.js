$.when($.ready).then(function () {
    $('.form-confirm').on('click', function (e) {
        e.preventDefault();
        var button = $(this);
        $('#form-confirm-modal-content').html(button.data('message'));
        $('#form-confirm-modal-label').html(button.data('title'));
        if (button.data('button-confirm')) {
            $('#form-confirm-modal-delete').html(button.data('button-confirm'));
        }
        $('#form-confirm-modal')
            .modal('show')
            .on('click', '#form-confirm-modal-delete', function (e) {
                e.preventDefault();
                button[0].form.submit();
            });
    });
});
