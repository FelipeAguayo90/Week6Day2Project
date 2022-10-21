for (let i = 0; i < 16; i++) {
    $('.mainContainer').append('<div class="lightBox"></div>')
}

$('.mainContainer').css({
    'display': 'flex',
    'flex-wrap': 'wrap',
    'justify-content': 'center',
    'align-items': 'center',
    'width': '600px',
    'margin-top': '50px',
})

$('.mainContainer').on('click', '.lightBox', function() {
    let dark = $(this);
    $(dark).toggleClass('darkBox');
});


