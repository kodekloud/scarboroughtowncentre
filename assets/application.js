/*Created 2015-06-12  by Rajbir Karan Singh*/

function init(e){
    $('#open_search').click(function(){
        $('#open_search').hide();
        $('#close_search').css('display','inline-block');
        $('#search').show('slow');
        $('#search').focus();
        e.preventDefault();
    });
    $('#close_search').click(function(){
        $('#close_search').hide();
        $('#open_search').css('display','inline-block');
        $('#search').hide('slow');
        e.preventDefault();
    });

}