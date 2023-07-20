const menuBtn= document.querySelector('.menu-btn');
const navigation= document.querySelector('.navigation');

menuBtn.addEventListener('click',() =>{
     menuBtn.classList.toggle('active');
     navigation.classList.toggle('active');
});


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

const method = document.getElementById('method');
const openDialog= document.getElementById('button');
const closeDialog = document.getElementById('closedialog');

openDialog.addEventListener('click', ()=> {
    method.showModal();
});

closeDialog.addEventListener('click', ()=> {
    method.close();
});

const submit = document.getElementById('submit');
submit.addEventListener('click' ,() => {
    alert('Thông tin của bạn đã được tiếp nhận thành công!')
})
