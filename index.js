 


 //INDEX ORIGINAL SLIDESHOW NO CSS
/* <script language="JavaScript"> 
var i = 0; var path = new Array(); 

// LIST OF IMAGES 
path[0] = "image1A.jpg"; 
path[1] = "image2A.jpg"; 
path[2] = "image3A.jpg"; 
path[3] = "image4A.jpg";
path[4] = "image5A.jpg";
path[5] = "image6A.png";
path[6] = "image7A.jpg";
path[7] = "image8A.jpg";

function swapImage() 
{ 
document.slide.src = path[i]; 
if(i < path.length - 1) i++; 
else i = 0; 
setTimeout("swapImage()",4000); 
} 
window.onload=swapImage; 
</script> 
<img height="550" name="slide" src="image1A.jpg"  />