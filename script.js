const menuBtn= document.querySelector('.menu-btn');
const navigation= document.querySelector('.navigation');

menuBtn.addEventListener('click',() =>{
     menuBtn.classList.toggle('active');
     navigation.classList.toggle('active');
});


/* Slide menu */
const btns= document.querySelectorAll('.nav-btn');
const sliderVideo= document.querySelectorAll('.video-slide');
const content= document.querySelectorAll('.content');

var sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove('active');
    });

    sliderVideo.forEach((slide) => {
        slide.classList.remove('active');
    });

    content.forEach((swap) => {
        swap.classList.remove('active');
    })

    btns[manual].classList.add('active');
    sliderVideo[manual].classList.add('active');
    content[manual].classList.add('active');
};

btns.forEach((btn , i) =>{
    btn.addEventListener('click', ()=>{
        sliderNav(i);
    });
});


/* Popup menu use dialog tags */
const method = document.getElementById('method');
const openDialog= document.getElementById('button');
const closeDialog = document.getElementById('closedialog');

openDialog.addEventListener('click', ()=> {
    method.showModal();
});

closeDialog.addEventListener('click', ()=> {
    method.close();
});


/* Display arlert */
const submit = document.getElementById('submit');

submit.addEventListener('click', () => {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');

  if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || phoneInput.value.trim() === '') {
    alert('Vui lòng nhập đầy đủ thông tin!');
  } else {
    alert('Thông tin của bạn đã được tiếp nhận thành công!');
  }
});


/* Error popup */
const emailInput = document.getElementById('email');

emailInput.addEventListener('mouseover', () => {
  emailInput.setCustomValidity(''); 
});

emailInput.addEventListener('mouseout', () => {
  emailInput.setCustomValidity('Please enter a valid email address');
});

