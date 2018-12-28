// on page load render all kudos to list space
// render function

// on kudo button click, open our kudo modal providing to, from, body, title

// once all forms are filled out, and create kudo in modal button is clicked, close modal, send new kudo to the database and re-render our list including newest Kudo.


const render = function (kudo) {
    $('#kudo').empty();
    for (let i = 0; i < kudo.length; i++){
        $('#kudo').append(`<p>${kudo[i].body}</p>`)
    }
  
  const getkudo = function(){
      const user = sessionStorage.getkudo();
      console.log(user);

      $.get(`/kudo/${kudo[i]}`)
      .then(function(kudo){
          console.log(kudo);
          render(kudo[0].user)
      })
  }
    const kudo = function(event) {
        event.preventDefault();

        $('#newkudo').val('');
        $.post('/api/kudo', {newKudo: title, to, from, body})
        .then(function(newkudo){
            getkudo()
        })
    }
}