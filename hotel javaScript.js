//window.alert("BEM VINDO AO HOTEL ESTÁCIO!!!");
//window.prompt("QUAL SEU NOME?")
//window.confirm("VAMOS AO SITE!")

var i = 0; 
var images = [];
var time = 9000;

images[0] = 'foto 1.jpg'; 
images[1] = 'foto 2.jpg'; 
images[2] = 'foto 3.jpg'; 
images[3] = 'foto 4.jpg'; 

function changeImg(){
    var slide = document.getElementById("slide")
    slide.setAttribute('src', images[i])
    if(i < images.length - 1){
        i++;
    }   else {
        i = 0;
    
    }
    setTimeout(changeImg, time);
}
changeImg()




