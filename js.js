$(document).ready(function() {
  // variables
  var delay;
  var ani_time;
  var color1 = "#FBCEAE";
  var color2 = '#84AF9C';
  var size = 0.1
  $('#begin-button').on('click', function(e) {
    var i = 1
      var interval = setInterval(function (){
        $('#art-space').append('<div class="color-box" id="' + i + '"></div>');
        $('.color-box').attr('style', 'animation-duration: 2s;')
        i++;
        if (i == 91){
          clearInterval(interval);
        }
      }, 10);
});
  // Style change listeners-------------------------------------

  $('#start-ani-button').on('click', function(e) {
    $('.color-box').addClass('ani');
  });

  $('#ani_time').on('change', function() {
    ani_time = ($(this).val());
    console.log(ani_time)
    $('.color-box').attr('style', 'animation-duration:' + ani_time + 's;')
  });

  $('.keyframe-input').on('change', keyFrameChanger); 
  
  // End style change listeners----------------------------------

  function keyFrameChanger(event) {
    console.log(event)
    var style = event.target;
    if (style.id == 'color1') {
      color1 = style.value;
      console.log('color 1 changed')
      $.keyframe.define({
        name: 'color',
        from:
          { 'background-color': color1},
        to: {
          'background-color': color2 + '; transform: scale(' + size + ')'},
      });
    } else if (style.id == 'color2') {
      color2 = style.value;
      console.log('color 2 changed')
      $.keyframe.define({
        name: 'color',
        from:
          { 'background-color': color1 },
        to: {
          'background-color': color2 + '; transform: scale('+ size + ')' }
      });
    } else if (style.id == 'size') {
      console.log('size changed')
      size = style.value/100;
      $.keyframe.define({
        name: 'color',
        from:
          { 'background-color': color1 },
        to: {
          'background-color': color2 + '; transform: scale(' + size + ')' }
      });
    } else if (style.id == 'offset') {
      var offset = style.value;
      $('#art-space').children().each(function() {
        var i = $(this).attr('id')
        $('.color-box').attr('style', 'animation-delay:' + i + 'ms;')
      })

    }

  }

// End document ready
  });