$(function() {
    $('.modal').on('show.bs.modal', function(event) {
        $(this).find('iframe').attr("src", $(event.relatedTarget).data('url'));
    });
    $('.modal').on('hidden.bs.modal', function(e) {
        $(this).find('iframe').attr("src", "");
    });
});