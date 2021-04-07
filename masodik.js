$firstImg = $('.images img')


$imgdiv = $('#images');
$imgdiv.children().hide();


$imgdiv.children().map(function() {
    this.addEventListener('click', changeImg);
}).get();


$img = $imgdiv.children().eq(2);

$img.show();


function changeImg(e){
    const img = e.target;
    //console.log(e);

    if(e.x < 300){
        if($(img).prev().is('img')){
            $(img).hide();
            $(img).prev().show();
        }
    }
    if(e.x > 400){
        if($(img).next().is('img')){
            $(img).hide();
            $(img).next().show();
        }
    }
}