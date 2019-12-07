// carousel //////////////////////////////////////////

var prev = document.querySelector('div.prev');
var next = document.querySelector('div.next');
var index = 0;
var lis = document.querySelectorAll('ul.slider li');
var count = lis.length;

prev.addEventListener('click', function() {
    lis[index].classList.remove('visible');
    index--;
    if (index < 0){
        index = count-1;
    }

    lis[index].classList.add('visible');
});

next.addEventListener('click', function() {
    lis[index].classList.remove('visible');
    index++;
    if (index > count-1){
        index = 0;
    }

    lis[index].classList.add('visible');
});

// fin carousel //////////////////////////////////////////

// formulaire reservation //////////////////////////////////////////

(function($){
    function floatLabel(inputType){
        $(inputType).each(function(){
            var $this = $(this);
            // on focus add cladd active to label
            $this.focus(function(){
                $this.next().addClass("active");
            });
            //on blur check field and remove class if needed
            $this.blur(function(){
                if($this.val() === '' || $this.val() === 'blank'){
                    $this.next().removeClass();
                }
            });
        });
    }
    // just add a class of "floatLabel to the input field!"
    floatLabel(".floatLabel");
})(jQuery);

// fin formulaire reservation //////////////////////////////////////////