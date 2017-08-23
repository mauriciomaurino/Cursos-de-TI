    $(function () {
        $("#modal01").modal({
            backdrop: false
            , keyboard: false
                //backdrop = fundo da janela escuro ou nao, keyboard = fechar modal com esc ou nao-->
        })
        $("#modal01").modal("show");
        setTimeout(function () {
            $("#modal01").modal("hide");
        }, 3000);
        //Handles the carousel thumbnails
        $('[id^=carousel-selector-]').click(function () {
            var id = this.id.substr(this.id.lastIndexOf("-") + 1);
            var id = parseInt(id);
            $('#carousel01').carousel(id);
        });
        $('#carousel01').carousel({
            interval: 2000
            , pause: "false"
        });
        $('#playButton').click(function () {
            $('#carousel01').carousel('cycle');
        });
        $('#pauseButton').click(function () {
            $('#carousel01').carousel('pause');
        });
        $(".ttp").tooltip({
            animation: false
            , delay: {
                show: 1000
                , hide: 5000
            }
            , title: "titulo padrão"
            , trigger: 'click'
        });
        $(".ppv").popover({
            animation: false
            , delay: {
                show: 1000
            }
            , title: "titulo padrão"
            , trigger: 'click'
        });
        $(".btnjs").button();
        $("#troca-estado").click(function () {
            var btn = $(this);
            btn.button("loading");
            setTimeout(function () {
                btn.button("reset");
            }, 3000)
        })
        $('#datetimepicker').data("DateTimePicker").FUNCTION();
    });