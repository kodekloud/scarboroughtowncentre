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
    var month = "";
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

function load_more(num){
    var n = parseInt(num);
    for(i=n; i < n+2; i++){
        
        var id = i.toString();
        $('#show_' + id ).fadeIn();
    }
    if(i >= getAllPublishedPosts().length+1){
        $('#loaded_posts').hide();
        $('#all_loaded').show();
    }
    $('#num_loaded').val(i);
}

function load_more_2(num, l){
    var n = parseInt(num);
    for(i=n; i < n+2; i++){
        
        var id = i.toString();
        $('#show_' + id ).fadeIn();
    }
    if(i >= l+1){
        $('#loaded_posts').hide();
        $('#all_loaded').show();
    }
    $('#num_loaded').val(i);
}




            
            
function showSearchResults(){
    $('#search_results').show();
    if($('#search_input').val().length == 0){
        $('#search_results').hide();
    }else{
        var search_results = getSearchResults($('#search_input').val(),10,100);
        $('.search-results-count').html("Total Results : "+search_results.summary.count);
        renderSearchResultsTemplate('#search_results_template','#search_results_items',search_results);
        if (search_results["stores"]){
            if (search_results["stores"].length > 0){
                $("#store_results_header").html(search_results["stores"].length+" Stores <i id='store_arrow' class='fa fa-chevron-right pull-right'></i>") ;
                $("#store_results_header").show();
            }
            
        } else {
            $("#store_results_header").hide();
        }
        if (search_results["promotions"]){
            if (search_results["promotions"].length > 0){
                $("#promotions_results_header").html(search_results["promotions"].length+" Promotions <i id='promo_arrow' class='fa fa-chevron-right pull-right'></i>")    ;
                $("#promotions_results_header").show();
            }
            
        } else {
            $("#promotions_results_header").hide();
        }
        if (search_results["events"]){
            if (search_results["events"].length > 0) {
                $("#events_results_header").html(search_results["events"].length+" Events <i id='event_arrow' class='fa fa-chevron-right pull-right'></i>")
                $("#events_results_header").show();
            }
            
        } else {
            $("#events_results_header").hide();
        }
    }
}
        


function show_results(id){
    if ( $("#"+id+"_results").is(":visible")){
        $("#"+id+"_results").slideUp();
        $("#"+id+"_arrow").removeClass("fa-chevron-down", 1000);
        $("#"+id+"_arrow").addClass("fa-chevron-right", 1000);
    } else {
        $(".results_div").slideUp();
        $(".fa").removeClass("fa-chevron-down", 1000);
        $(".fa").addClass("fa-chevron-right", 1000);
        $("#"+id+"_results").slideDown();   
        $("#"+id+"_arrow").removeClass("fa-chevron-right", 1000);
        $("#"+id+"_arrow").addClass("fa-chevron-down", 1000);
    }
    
}