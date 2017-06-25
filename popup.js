    $user_page.find(".favorite-category-bg").on("click", function(e) {
        var $target = $(e.target);
        var parents = $target.parents(".favorite-category-popup");
        if (parents.length > 0 || $target.hasClass("favorite-category-popup")) {
            return;
        }
        else {
            $user_page.find(".favorite-category-bg").hide();

        }  
    });