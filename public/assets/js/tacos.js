$(function() {
    $('.form').on('submit', function(event) {
      event.preventDefault();
  
      var newTaco = {
        taco_name: $('#inputTaco')
          .val()
          .trim(),
        picked_up: 0
      };
  
      $.ajax('/api/tacos', {
        type: 'POST',
        data: newTaco
      }).then(function() {
        console.log('New Taco Added!');
        location.reload();
      });
    });
  
    $('.eatbutton').on('click', function(event) {
      var tacoId = $(this).data('id');
      var newTaco = $(this).data('newpick_up');
  
      var tacoEaten = {
        devoured: newTaco
      };
  
      $.ajax('/api/tacos/' + tacoId, {
        type: 'PUT',
        data: tacoEaten
      }).then(function() {
        console.log('Eaten: ' + newTaco);
        location.reload();
      });
    });
  });