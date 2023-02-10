$(document).ready(function() {
    $('.sidenav__burger').click(function(event) {
        $('.sidenav__burger,.sidenav').toggleClass('active');
        $('body').toggleClass('lock');
    });
});