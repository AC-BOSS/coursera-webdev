var $nav = $('button+div');

$('button').on('blur', function(){
    $(this).attr('aria-expanded', 'false');
    $nav.collapse('toggle');
})