$(document).ready(function() {
  // variables
  var delay;
  var ani_time;
  var color1 = "#FBCEAE";
  var color2 = '#84AF9C';
  var size = 0.1;
  var started = false;



  // Event listeners-------------------------------------

  // Making the colors blocks and appending to DOM
  $('#begin-button').on('click', function (e) {
    if (started == false){
      started = true;
      var i = 1
      var interval = setInterval(function () {
        $('#art-space').append('<div class="color-box" style="animation-delay:' + i +'0ms; animation-duration: 2s;" id="' + i + '"></div>');
        // $('.color-box').attr('style', 'animation-duration: 2s;')
        i++;
        if (i == 136) {
          clearInterval(interval);
        }
      }, 10);
    }
  });
  $('#start-ani-button').on('click', function(e) {
    $('.color-box').addClass('ani');
  });

  $('#pause-button').on('click', function() {
    $('.color-box').removeClass('ani');
  });
  // Need to fix
  // $('#ani_time').on('change', function() {
  //   ani_time = ($(this).val());
  //   console.log(ani_time)
  //   ani_time = 'animation-duration:' + ani_time + 's';
  //   $('.color-box').attr('style', function(){return $(this).attr('style') + ani_time})
  // });

  $('.keyframe-input').on('change', keyFrameChanger); 
  
  // End style change listeners----------------------------------

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