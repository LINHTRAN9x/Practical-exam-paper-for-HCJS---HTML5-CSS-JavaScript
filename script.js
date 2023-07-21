

$(function(){
  const navigation = $('.navigation');
  const openNav = $('.menu-btn');
  const closeNav = $('.close-nav');

  openNav.on('click', function(){
    navigation.css('display', 'block');
  });

  closeNav.on('click', function(){
    if ($(window).width() <= 1041) {
      navigation.css('display', 'none');
    }
  });

  // Kiểm tra kích thước màn hình khi resize để xử lý hiển thị navigation items
  $(window).on('resize', function() {
    if ($(window).width() > 1041) {
      navigation.css('display', 'block');
    }
  });
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
/*
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
/*
const emailInput = document.getElementById('email');

emailInput.addEventListener('mouseover', () => {
  emailInput.setCustomValidity(''); 
});

emailInput.addEventListener('mouseout', () => {
  emailInput.setCustomValidity('Please enter a valid email address');
}); */



const form = document.querySelector('form');
const dialog = document.getElementById('method');
const confirmPopup = document.getElementById('confirmPopup');
const confirmInfo = document.getElementById('confirmInfo');
const confirmBtn = document.getElementById('confirmBtn');
const closeBtn = document.getElementById('closedialog');
const closeSubmit = document.getElementById('submit');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // Ngăn chặn form submit mặc định

  // Kiểm tra xem người dùng đã nhập name, email và phone hay chưa
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  if (name && email && phone) {
    // Hiển thị thông tin người dùng đã nhập
    let userInfo = `
      <strong>Họ và tên:</strong> ${name}<br>
      <strong>Email:</strong> ${email}<br>
      <strong>Số điện thoại:</strong> ${phone}<br>
    `;

    // Kiểm tra các trường không bắt buộc và hiển thị nếu người dùng đã nhập
    const sex = document.querySelector('input[name="sex"]:checked');
    if (sex) {
      userInfo += `<strong>Giới tính:</strong> ${sex.value}<br>`;
    }

    const textarea = document.getElementById('intro');
    if (textarea.value.trim() !== '') {
      userInfo += `<strong>Giới thiệu về bạn:</strong> ${textarea.value}<br>`;
    }

    const interests = document.querySelectorAll('input[name="interests"]:checked');
    if (interests.length > 0) {
      userInfo += '<strong>Sở thích:</strong> ';
      interests.forEach((interest) => {
        userInfo += `${interest.value}, `;
      });
      userInfo = userInfo.slice(0, -2); // Xóa dấu ',' cuối cùng
      userInfo += '<br>';
    }

    // Hiển thị thông tin người dùng
    confirmInfo.innerHTML = userInfo;

    // Hiển thị popup xác nhận
    confirmPopup.style.display = 'block';
    form.style.display = 'none';
    closeSubmit.style.display = 'none';
    
  } else {
    // Hiển thị thông báo yêu cầu nhập đủ thông tin Họ và tên, Email và Số điện thoại.
    alert('Vui lòng nhập đủ thông tin Họ và tên, Email và Số điện thoại.');
  }
});

// Xử lý sự kiện đóng form khi nhấn vào nút close
closeBtn.addEventListener('click', function () {
  dialog.close();
});

// Xử lý sự kiện xác nhận người dùng sau khi hiển thị popup xác nhận
confirmBtn.addEventListener('click', function () {
  form.style.display = 'flex';
  closeSubmit.style.display = 'block';
  confirmPopup.style.display = 'none'; // Đóng popup xác nhận
  form.submit(); // Gửi form nếu người dùng xác nhận
  alert('Thông tin của bạn đã được gửi thành công!');
});

confirmBtn.addEventListener('click', () => {
  alert('Thông tin của bạn đã được gửi thành công!');
}
)







 


