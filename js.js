$(document).ready(function() {
  // variables
  var delay;
  var ani_time;

  $('#begin-button').on('click', function(e) {
    var i = 1
      var interval = setInterval(function (){
        $('#art-space').append('<div class="color-box ani" id="btn' + i + '"></div>');
        i++;
        if (i == 100){
          clearInterval(interval);
        }
      }, 10);
    
});

  $('#ani_time').on('change', function() {
    ani_time = ($(this).val());
    console.log(ani_time)
    $('.color-box').attr('style', 'animation-duration:' + ani_time + 's;')
  });

  $('#color1').on('change', watchColorPicker); 
  
  function watchColorPicker(event) {
    console.log(event)
    var color = event.target;
    console.log(color1)

    if (color.id == 'color1') {
      $.keyframe.define({
        name: 'color',
        from:
          { 'background-color': color.value},
        to: {
          'background-color': ' rgb(0, 0, 0); transform: scale(.1)'},
      });
    } else {
      $.keyframe.define({
        name: 'color',
        from:
          { 'background-color': "rgb(0, 0, 0" },
        to: {
          'background-color': color.value + '; transform: scale(.1)'
        },
      });
    }
  }

// End document ready
  });