
//slide show
var slides=setInterval(function(){changePhotos(counter+1)},4000)


//variables

var $body=$('body')
var counter=1;
var pic =[]
var photo='photos/pet'+counter+'.jpeg'
var fav = $("#fav")
var favsClicked=false;

//changing photos
function changePhotos (count){ 
counter=count
photo='photos/pet'+counter+'.jpeg'
fav.attr('src','fav.png')
$('#like').attr('src','like.png')
$body.css("background", 'aliceblue');
$('#favoritePhotos').html('')
$("#mainImg").attr("src",photo);
 }



//welcome 


function welcome() {
    var person = prompt("Please enter your name");
        $("h1").text("welcome " + person + " to our cute website") 
  }  
welcome();
	



//next button 

$('#next').on('click',function(){
	changePhotos(counter+1)
})

//prev button 
$('#prev').on('click',function(){
		if (counter===1){
			changePhotos(counter)
		}else{
			changePhotos(counter-1)

		}
})



 //favorite button;

 $('#fav').on('click',function(){
 	favsClicked=false;
 	
 	if (fav.attr('src')==='fav.png'){
 		fav.attr('src','liked.png')
 		pic.push(photo)
 	}
 	else {
 		pic.pop()
 		fav.attr('src','fav.png')
 	}
 })





//like button;

$('#like').on('click',function(){
	favsClicked=false;
	if ($('#like').attr('src')==='like.png') {
		$('#like').attr('src','likedd.png')
		$body.css("background", 'pink');
	}else {
		$('#like').attr('src','like.png')
		$body.css("background", 'aliceblue');
	}


})




//my favorite photos button 
$("#favs").on("click",function () {
	if (favsClicked===false){
	var favPhoto;
	for (var i = 0; i < pic.length; i++) {
	 
	 favPhoto= $(" <img class='favo'>");
	 favPhoto.attr("src",pic[i])
	 var $div= $("<div></div>").append(favPhoto);
	 $('#favoritePhotos').append($div)
	 favsClicked=true;
	 clearInterval(slides)
	 
	}}
	 
})






