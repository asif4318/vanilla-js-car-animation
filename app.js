//Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Items
const title = document.querySelector('.title');
const car = document.querySelector('.car img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const models = document.querySelector('.models');

//Moving Animation Events
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 30;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 30;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    //Popout
    title.style.transform = 'translateZ(150px)';
    car.style.transform = 'translateZ(200px)';
    description.style.transform = 'translateZ(125px)';
    models.style.transform = 'translateZ(100px)';
    purchase.style.transform = 'translateZ(75px)';
  });
//Animate In
container.addEventListener('mouseenter', e => {
    card.style.transition = 'none'; 
})
//Animate Out
container.addEventListener('mouseleave', e => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`; 
    //Popback
    title.style.transform = "translateZ(0px)";
    car.style.transform = 'translateZ(0px) rotateZ(0deg)';
    description.style.transform = 'translateZ(0px)';
    models.style.transform = 'translateZ(0px)';
    purchase.style.transform = 'translateZ(0px)';

})

