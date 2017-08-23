$(function () {
    var menu = $('#menu-navegacao');
    var form = $('#formac');
    $.merge(menu, form).find('a').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
    $('.navbar-collapse a').click(function () {
        $(".navbar-collapse").collapse('hide');
    });
});
$(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 1, 'linear');
    $('input[maxlength]').maxlength({
        alwaysShow: true
        , threshold: 10
        , warningClass: "label label-success"
        , limitReachedClass: "label label-danger"
    });
});

function aumenta(obj) {
    obj.height = obj.height * 2;
    obj.width = obj.width * 2;
}

function diminui(obj) {
    obj.height = obj.height / 2;
    obj.width = obj.width / 2;
}
//usar em img: onMouseOver="aumenta(this)" onMouseOut="diminui(this)"