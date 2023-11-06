$(document).ready(function(){
 $(".small-img img").click(function(){
    const img_prev = document.querySelector("#preview_img");
    let prev_img = img_prev.getAttribute("src");
    var img_src = this.getAttribute('src')
    $(img_prev).attr("src", img_src);
    $(this).attr("src", prev_img);

    var text_prev = img_prev.getAttribute('alt')
    var text_next = this.getAttribute('alt');
    var text = $("#place-name");
    $(img_prev).attr("alt", text_next);
    text.html(text_next)
    $(this).attr("alt",text_prev)
    
 });
});