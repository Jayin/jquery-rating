$.fn.start = function(cb) {
    var length = $(this).children().length;
    var children = $(this).children();

    for (var i = 0; i < length; i++) {

        $(children[i]).bind('mouseover', function(event) {
            var current = $(this).index(children[i]);

            for (var j = 0; j <= current; j++) {
                $(children[j]).removeClass('nomal rating').addClass('rating');
            }
            for (var j = current + 1; j < length; j++) {
                $(children[j]).removeClass('nomal rating').addClass('nomal');
            }

            if (typeof(cb) === 'function') {

                cb(current + 1);
            }
        });
    }
}

$.fn.getCurrentRating = function(){
    var length = $(this).children().length;
    var children = $(this).children();
    var resulut = 0;

    for (var i = 0; i < length; i++) {
        if($(children[i]).hasClass('rating')){
            resulut +=1;
        }else{
            break;
        }
    }
    return resulut;
}