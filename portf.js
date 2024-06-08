const menubar = document.querySelector('#menu');
const Navbar = document.querySelector('.navbar');
menubar.onclick=()=>{
    menubar.classList.toggle('bx-x');
    Navbar.classList.toggle('active')
}
const section=document.querySelectorAll('section');
const navlink = document.querySelectorAll('header nav a')
window.onscroll = ()=>{
    section.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        if(top>offset && top < offset + height){
            sec.classList.add('start-animation');
            navlink.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
              
            })
        }
    })
    var header = document.querySelector('.header');
    header.classList.toggle('sticky',window.scrollY>100)
    menubar.classList.remove('bx-x');
    Navbar.classList.remove('active')
}
document.getElementById('submitButton').addEventListener('click', function() {
    // Get the form values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Save the data (you can replace this with actual storage logic, e.g., sending data to a server)
    const formData = {
        fullName,
        email,
        mobileNumber,
        subject,
        message
    };
    console.log('Form Data:', formData);

    // Display the success message
    document.getElementById('successMessage').style.display = 'block';

    // Optionally, clear the form fields
    document.getElementById('contactForm').reset();
});


