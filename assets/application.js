/*Created 2015-06-12  by Rajbir Karan Singh*/

function init(e){
    $('#open_search').click(function(){
        $('#open_search').hide();
        $('#close_search').css('display','inline-block');
        $('#search').show();
        $('#search').focus();
        e.preventDefault();
    });
    $('#close_search').click(function(){
        $('#close_search').hide();
        $('#open_search').css('display','inline-block');
        $('#search').hide();
        e.preventDefault();
    });
    $('#search_mobile').click(function(){
        $('#mobile_search').show();
        $('.social_icon_mobile').hide();
    });

}

function renderStoreList(container, template, collection, type,starter, breaker){
    var item_list = [];
    var item_rendered = [];
    var template_html = $(template).html();
    Mustache.parse(template_html);   // optional, speeds up future uses
    var store_initial=""
    $.each( collection , function( key, val ) {
        if (type == "stores" || type == "category_stores"){
            if(!val.store_front_url ||  val.store_front_url.indexOf('missing.png') > -1 || val.store_front_url.length === 0){
                val.alt_store_front_url = "http://kodekloud.s3.amazonaws.com/sites/54cfab316e6f6433ad020000/77c900d783abeb362232339ece231335/10dundas_default.jpg"    
            } else {
                val.alt_store_front_url = getImageURL(val.store_front_url);    
            }
            
        }
        //var categories = getStoreCategories();
        var current_initial = val.name[0];
        
        if(store_initial.toLowerCase() == current_initial.toLowerCase()){
            val.initial = "";
            val.show = "display:none;"
        }
        else{
            val.initial = current_initial;
            store_initial = current_initial;
            val.show = "display:block;"
        }
        if (val.promotions.length > 0){
            val.promotion_exist = "display:inline-block"
        }
        else{
            val.promotion_exist = "display:none"
        }
        if (val.jobs.length > 0){
            val.job_exist = "display:inline-block"
        }
        else{
            val.job_exist = "display:none"
        }
        val.block = current_initial + '-block';
        var rendered = Mustache.render(template_html,val);
        var upper_current_initial = current_initial.toUpperCase();
        if (upper_current_initial.charCodeAt(0) < breaker.charCodeAt(0) && upper_current_initial.charCodeAt(0) >= starter.charCodeAt(0)){
            item_rendered.push(rendered);
        }

    });
    
    $(container).show();
    $(container).html(item_rendered.join(''));
}

function renderStoreListCatetories(container, template, category_list,stores){
    var item_rendered = [];
    var template_html = $(template).html();
    Mustache.parse(template_html);   // optional, speeds up future use
    var initial_id = 0;
    var category_index = 0;
    $.each(category_list , function( key, category ) {
        var category_id = parseInt(category.id);
        var category_name = category.name;
        var current_id = category.id
        var count = 0;
        
        $.each( stores , function( i, store ) {
            var store_category = store.categories;
            var a = store.categories.indexOf(category_id);
            
            if(a > -1){
                if (count == 0){
                    store.show  = "display:block"; 
                }else{
                    store.show  = "display:none"; 
                }
                store.header = category_name;
                store.block = category.id;
                var rendered = Mustache.render(template_html,store);
                item_rendered.push(rendered);
                count += 1;
            }
            
        });
        category_index += 1;
    
    });
     $(container).show();
    $(container).html(item_rendered.join(''));
    
}