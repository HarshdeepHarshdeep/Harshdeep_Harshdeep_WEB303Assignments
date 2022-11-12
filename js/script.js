$(function () {
    $('#photo-viewer').customPhotoViewer().show().on('click', '.photo-box', function (e) {
        e.preventDefault();
        var $content = $(this).clone().find('img').css({
            marginLeft: 0,
            marginTop: 0,
            width: '100%',
            height: 'auto'
        });
        

        if (!$content[0]){
            return;
        }
        var modal = (function(){
            var $window = $(window);
            var $modal = $('<div class="modal"></div>');
            var $modalHead = ('<div class="modal-head"><h2>Harshdeep Photo Gallery</h2></div>');
            var $content = $('<div class="modal-content"></div>');
            var $close = $('<button role="button" class="modal-close">close</button>');

            
            
            $modal.append($modalHead, $content, $close);
        
            $close.on('click',function(e){
                e.preventDefault();
                modal.close();
            })
        
            return {
                center: function(){
                    var top = Math.max($window.height()-$modal.outerHeight(),0)/2;
                    var left = Math.max($window.width() -$modal.outerWidth(),0)/2;
        
                    $modal.css({
                        top: top + $window.scrollTop(),
                        left: left+ $window.scrollLeft()
                    });
                },
                open: function(settings) {
                    $content.empty().append(settings.content);
        
                    $modal.css({
                        width: settings.width || 'auto',
                        height: settings.height || 'auto',
                        color:'#fff',
                        background:'skyblue'
                    }).appendTo('body');
        
                    modal.center();
                    $(window).on('resize scroll',modal.center);
                },
                close: function(){
                    $content.empty();
                    $modal.detach();
                    $window.off('resize', modal.center);
                }
            };
        
        }());

        modal.open({
            content: $content,
            width: '800px',
            height:'85%'
        })

    });
});
