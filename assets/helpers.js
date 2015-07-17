function show_content(){
    $('.yield').fadeIn();
    $(".modal-backdrop").remove();
}

function check_open_time(d){
    var time = "";
    var date = new Date();
    var current_time = date.getHours();
    var open = d.getUTCHours();
    if (current_time >= open ){
        time = "OPEN NOW";
    }
    else{
        time = convert_hour(d);
    }
    return time;
}

function more_less(e){
    $('.more').click(function(e){
        var id = $(this).attr('data-id');
        $(this).hide();
        $('#show_' + id).show();
        $('#less_' + id).show();
        e.preventDefault();
    });
    
    $('.less').click(function(e){
        var id = $(this).attr('data-id');
        $(this).hide();
        $('#show_' + id).hide();
        $('#more_' + id).show();
        e.preventDefault();
    });
}
