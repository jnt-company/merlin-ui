$('.text-copy, .slug-copy').on('keyup', function () {
    var $input = $(this);
    var val = $input.val().trim();

    console.log('hi');

    if ($input.hasClass('text-copy')) {
        var $text = $('#' + $input.data('textid'));
        var maxlength = $text.attr('maxlength');
        if (typeof maxlength != 'undefined') {
            if (val.length <= maxlength) $text.val(val).trigger('change');
        } else $text.val(val).trigger('change');

        $text.on('keyup', function () {
            $input.off('keyup');
        });
    }
    if ($input.hasClass('slug-copy')) {
        val = val
            .replace(/\s+/g, '-')
            .replace(/[^a-zA-Z0-9-]/g, '')
            .replace(/-+/g, '-')
            .replace(/^-|-$/g, '')
            .toLowerCase();
        if ($input.data('slugid')) {
            var $slug = $('#' + $input.data('slugid'));
        } else {
            var $slug = $('#slug');
        }
        var maxlength = $slug.attr('maxlength');
        if (typeof maxlength != 'undefined') {
            if (val.length <= maxlength) {
                $slug.val(val).trigger('change');
            }
        } else {
            $slug.val(val).trigger('change');
        }
        $slug.on('keyup', function () {
            $input.off('keyup');
        });
    }
});
