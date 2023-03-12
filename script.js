// Changing to Dark Theme

const body = document.body;
const darkThemeBtn = document.querySelector('.fa-sun');
const BannerImage = document.getElementById('banner');
// body.addEventListener('mouseover')
darkThemeBtn.addEventListener('click' , () => {
    body.classList.toggle('dark');
    darkThemeBtn.classList.toggle('fa-moon')
    BannerImage.classList.toggle('darkmode')
})

// Toggle Menu Button

const closeMenuBtn = document.querySelector('.fa-circle-xmark');
const openMenuBtn = document.querySelector('.fa-bars');
const menuBar = document.querySelector('nav');

openMenuBtn.addEventListener('click' , () => {
    menuBar.classList.add('active');
   
})
closeMenuBtn.addEventListener('click' , () => {
    menuBar.classList.remove('active')
})
document.addEventListener('click' , e => {
    if(e.target !== openMenuBtn){
        menuBar.classList.remove('active');  
    }
})

// Hover on Qualification sections

const cards = document.querySelectorAll('.card')
const circles = document.querySelectorAll('.circle')

cards.forEach((card ,idx) => {
    card.addEventListener("mouseover" , () => {
        circles.forEach((circle , i) => {
            if(i === idx){
                circle.classList.add('hover')
            }
        })
    })
    card.addEventListener("mouseout" , () => {
        circles.forEach((circle , i) => {
            if(i === idx){
                circle.classList.remove('hover')
            }
        })
    })
})
