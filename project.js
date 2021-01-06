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
booknow.style.display="block";
ordernow.style.display="none";
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
booknow.style.display="block";
ordernow.style.display="none";
})
let classicroom=document.getElementById("classicroom");
classicroom.addEventListener("click",()=>{
    p1.innerHTML=item;
roomsimage.src="room2.jpg";
booknow.style.display="block";
ordernow.style.display="none";
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
    booknow.style.display="block";
ordernow.style.display="none";
    selectedroomimage.style.display="block";
    selectedroomdetail.style.display="block";
    roomname.innerHTML="Deluxe room";
    persons.innerHTML="Max:4persons";
    size.innerHTML="Size: 45m2";
    bed.innerHTML="Bed:2";
})
let chickenRoast=document.getElementById('chickenroast');
let ordernow=document.getElementById('ordernow');
chickenRoast.addEventListener('click',function(){
booknow.style.display="none";
ordernow.style.display="block";
p1.innerHTML=item;
ordernow.style.display="block";
emptytext.style.display="none";
roomsimage.src="food2.jpg";
selectedroomimage.style.display="block";
selectedroomdetail.style.display="block";
roomname.innerHTML="Chicken Roast";
persons.innerHTML="Price: $3";
size.innerHTML="Honey Glazed Chicken";
bed.style.display="none";
})
let chocolatecake=document.getElementById('Cake');
chocolatecake.addEventListener('click',function(){
    booknow.style.display="none";
p1.innerHTML=item;
ordernow.style.display="block";
emptytext.style.display="none";
ordernow.style.display="block";
roomsimage.src="cake2.jpg";
selectedroomimage.style.display="block";
selectedroomdetail.style.display="block";
roomname.innerHTML="Chcolate cake";
persons.innerHTML="Price: $2.99";
bed.style.display="block";
size.innerHTML="Flavoured with melted";
bed.innerHTML="Chocolate."
})
let sodajuice=document.getElementById('Drink');
sodajuice.addEventListener('click',()=>{
    booknow.style.display="none";
    p1.innerHTML=item;
    ordernow.style.display="block";
    ordernow.style.display="block";
    emptytext.style.display="none";
    roomsimage.src="juice2.jpg";
    selectedroomimage.style.display="block";
    selectedroomdetail.style.display="block";
    roomname.innerHTML="Soda juice";
    persons.innerHTML="Price: $1.99";
    size.innerHTML="A juice with";
    bed.innerHTML="Ice cube."
})
let burger=document.getElementById('burger');
burger.addEventListener('click',function(){
    booknow.style.display="none";
    p1.innerHTML=item;
    ordernow.style.display="block";
    ordernow.style.display="block";
    emptytext.style.display="none";
    roomsimage.src="food4.jpg";
    selectedroomimage.style.display="block";
    selectedroomdetail.style.display="block";
    roomname.innerHTML="Veg Burger";
    persons.innerHTML="Price: $5.99";
    size.innerHTML="A burger with nuts,";
    bed.innerHTML="grains,seeds,etc."
})
ordernow.addEventListener('click',Ordernow);
function Ordernow(){
    alert("Your order is sucessfully added")
}

let sendmessage=document.getElementById('sendmsgbuton')
let textbox1=document.getElementById('txt1');
let textbox2=document.getElementById('txt2');
sendmessage.addEventListener('click',()=>{
    if(textbox1.value.length<3){
        alert("Please write your name");
    }
    else if(textbox2.value.indexOf("@")<2 || textbox2.value.length<4){
    alert('please write your email')
    }
    else{
        alert(textbox1.value+" "+"Thanks for your Message");
    }
})