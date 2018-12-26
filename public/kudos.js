// render function

const render = function() {
    $.get('/api/kudos', function(dbkudos){
        $('main-content').empty();
        for(let i = 0; i < dbkudos.length; i++) {
            $(`<div class="row">`)
        }
    })
}