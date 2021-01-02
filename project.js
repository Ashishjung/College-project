const tl=new TimelineMax();
let cart=document.getElementById('cart');
let button=document.getElementById('addtocart');
let p1=document.getElementById('p1');
let item=1;
let cartbox=document.getElementById('cart-box');
let Mainbox=document.getElementById('Main-box');
let navbar=document.getElementById('navbar')
cart.addEventListener('click',opencart)
function opencart(){
    Mainbox.style.display="none";
tl.to(cartbox,1,{height:"100vh",ease:Power2.easeInOut})
}
let removecart=document.getElementById('removecart');
removecart.addEventListener('click',()=>{
 tl.fromTo(cartbox,1,{height:"100vh"},{height:"0%",ease:Power2.easeInOut})
    Mainbox.style.display="grid";
    p1.innerHTML=0;
    })
let imagecollection=[
    "hotel1.jpg",
     "hotel2.jpg",
    "hotel3.jpg",
    "hotel1.jpg"
]
let imageindex=0;
let images=document.getElementById('homeimg');
function changeimage(){
   if(imageindex<imagecollection.length-1){
       tl.fromTo(images,1,{opacity:"0.3"},{opacity:"1",ease:Power2.easeInOut})
        imageindex++
        images.src=imagecollection[imageindex]
    }
    else{
        imageindex=0;
       }
}
setInterval(changeimage,5000);

let suiteroom=document.getElementById("suiteroom");
let selectedroomimage=document.getElementById("content-image");
let selectedroomdetail=document.getElementById("content-detail");
let emptytext=document.getElementById('p19');
let roomsimage=document.getElementById('roomsimage');
let roomname=document.getElementById('p14');
let persons=document.getElementById("p15");
let size=document.getElementById('p16');
let bed=document.getElementById('p17');
let booknow=document.getElementById('booknow');
let removedetail=document.getElementById('removedetail');
booknow.addEventListener("click",()=>{
    alert("Your room is succesfully booked")
})
removedetail.addEventListener("click",function(){
selectedroomimage.style.display="none";
selectedroomdetail.style.display="none";
emptytext.style.display="block";
})
suiteroom.addEventListener("click",function(){
     p1.innerHTML=item;
    emptytext.style.display="none";
selectedroomimage.style.display="block";
selectedroomdetail.style.display="block";
roomname.innerHTML="Suite Room";
persons.innerHTML="Max:3persons";
size.innerHTML="Size: 45m2";
bed.innerHTML="Bed:1";
roomsimage.src="room1.jpg";
})
let familyroom=document.getElementById('familyroom');
familyroom.addEventListener("click",()=>{

p1.innerHTML=item;
roomsimage.src="room5.jpg";
emptytext.style.display="none";
selectedroomimage.style.display="block";
selectedroomdetail.style.display="block";
roomname.innerHTML="Family room";
persons.innerHTML="Max:4persons";
size.innerHTML="Size: 50m2";
bed.innerHTML="Bed:2";
})
let classicroom=document.getElementById("classicroom");
classicroom.addEventListener("click",()=>{
    p1.innerHTML=item;
roomsimage.src="room2.jpg";
emptytext.style.display="none";
selectedroomimage.style.display="block";
selectedroomdetail.style.display="block";
roomname.innerHTML="Classic room";
persons.innerHTML="Max:3persons";
size.innerHTML="Size: 40m2";
bed.innerHTML="Bed:1";
})
let deluxeroom=document.getElementById('Deluxeroom');
deluxeroom.addEventListener("click",()=>{
 p1.innerHTML=item;
    roomsimage.src="room6.jpg";
    emptytext.style.display="none";
    selectedroomimage.style.display="block";
    selectedroomdetail.style.display="block";
    roomname.innerHTML="Deluxe room";
    persons.innerHTML="Max:4persons";
    size.innerHTML="Size: 45m2";
    bed.innerHTML="Bed:2";
})