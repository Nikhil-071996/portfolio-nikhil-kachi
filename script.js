// Handle Loading 
const loading = document.querySelector('.loading')

window.addEventListener('load' , () => {
    loading.classList.add('hide')
})


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

function toggleMenu(){
    if(menuBar.classList == 'active'){
        menuBar.classList.remove('active')
    }else{
        menuBar.classList.add('active');
    }
}
openMenuBtn.addEventListener('click' ,toggleMenu)
closeMenuBtn.addEventListener('click' , toggleMenu)

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


// Handle Contact Form Functionality

// let form = document.getElementById('contact-form')
// let fullName = document.getElementById('name');
// let emailForm = document.getElementById('email');
// let subject = document.getElementById('suject');
// let message = document.getElementById('Message');

// form.addEventListener('submit' , (e) => {
//     e.preventDefault()
    
// })
