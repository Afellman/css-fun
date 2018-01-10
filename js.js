// Things to do :
//
// 1. set the size of the boxes inversely corelation to their amount. (1 boxes takes up the full
// screen, two boxes take up half each)

$(document).ready(function() {
  // variables
  var delay;
  var ani_time;
  var color1 = "#FBCEAE";
  var color2 = '#84AF9C';
  var size = 0.1;
  var started = false;
  var viewport = $(window).width()
  //Assigning the screen size to var viewport on change.
$(window).resize(function(){
  viewport = $(window).width()
});

  // Event listeners-------------------------------------

  // Making first box when add button is click
  $('#begin-button').on('click', function () {
    if (started == false){
      started = true;
      makeBoxes(viewport/3)
    }
  });

  $('#start-ani-button').on('click', function() {
    $('.color-box').addClass('ani');
  });

  $('#pause-button').on('click', function() {
    $('.color-box').removeClass('ani');
  });

  $('#box-amt-input').on('input', function() {
    console.log('amt slider clicked')
    makeBoxes($(this).val());
  });
  // Need to fix
  // $('#ani_time').on('change', function() {
  //   ani_time = ($(this).val());
  //   console.log(ani_time)
  //   ani_time = 'animation-duration:' + ani_time + 's';
  //   $('.color-box').attr('style', function(){return $(this).attr('style') + ani_time})
  // });

  $('.keyframe-input').on('input', keyFrameChanger); 
  
  // End style change listeners----------------------------------

  function makeBoxes(amt) {
    console.log('inside makeBoxes()')
    $('#art-space').empty();
    for(var i = 0; i < amt; i++){
      $('#art-space').append('<div class="color-box" style="animation-delay:' + i +'ms; animation-duration: 2s; id="' + i + '"></div>');
    };
  };

  function keyFrameChanger(event) {
    console.log(event)
    var style = event.target;
    if (style.id == 'color1') {
      color1 = style.value;
      console.log('color 1 changed')
    } else if (style.id == 'color2') {
      color2 = style.value;
      console.log('color 2 changed')
    } else if (style.id == 'size') {
      console.log('size changed')
      size = style.value/100;
    } // Need to fix this....
    // else if (style.id == 'offset') {
    //   var offset = style.value;
    //   $('#art-space').children().each(function() {
    //     var i = $(this).attr('id')
    //     $('.color-box').attr('style', 'animation-delay:' + i + 'ms;')
    //   })

    // }
  // End function keyFrameChanger
    $.keyframe.define({
      name: 'color',
      from:
        { 'background-color': color1 },
      to: {
        'background-color': color2 + '; transform: scale(' + size + ')'
      },
    });
}

// End document ready
  });