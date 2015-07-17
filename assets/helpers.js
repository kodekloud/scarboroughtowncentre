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


function convert_hour(d){
    var h = addZero(d.getUTCHours());
    var m = addZero(d.getUTCMinutes());
    var s = addZero(d.getUTCSeconds());
    if (h >= 12) {
        if ( h != 12) {
            h = h - 12;    
        }
        
        i = "PM"
    } else {
        i = "AM"
    }
    return h+":"+m+" "+i;
}



function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function get_month (id){
    switch(id) {
        case 0:
            month = "Jan";
            break;
        case 1:
            month = "Feb";
            break;
        case 2:
            month = "Mar";
            break;
        case 3:
            month = "Apr";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
            month = "July";
            break;
        case 7:
            month = "Aug";
            break;
        case 8:
            month = "Sep";
            break;
        case 9:
            month = "Oct";
            break;
        case 10:
            month = "Nov";
            break;
        case 11:
            month = "Dec";
            break;
            
    }
    return month;
}


function randomgen() {
    var rannumber='';
    for(ranNum=1; ranNum<=6; ranNum++){
        rannumber+=Math.floor(Math.random()*10).toString();
    }
    $('#verifyNum').html(rannumber);
    $('#verifyNumHidden').val(rannumber);
}

function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if( !emailReg.test( $email ) ) {
        return false;
    }
    else {
        return true;
    }
}