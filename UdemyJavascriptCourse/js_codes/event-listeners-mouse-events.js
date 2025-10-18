const division=document.querySelector('#first-group');
const btn=document.querySelector('#firstbtn')

//click
btn.addEventListener('click', mouseCatch);

//dbclick
division.addEventListener('dblclick',mouseCatch);

//mousedown(tıkladıgimiz an) mouseup(bıraktığımız an)

//mouseenter(fareyle elementin üzerine gitmek tıklamaya gerek yok)   mouseleave

//mouseover  mouseout

//mousemove

function mouseCatch(){
    console.log('event type: ${e.type}');
    e.preventDefault();
}
