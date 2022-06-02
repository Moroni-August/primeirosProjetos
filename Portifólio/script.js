const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark')

})

document.querySelector('.switcherBtn').onclick = () => {
  document.querySelector('.colorSwitcher').classList.toggle('active');
  document.querySelector('.label').classList.toggle('active');
}

let themeButtons = document.querySelectorAll('.themeButtons');

themeButtons.forEach(color => {

  color.addEventListener('click', () => {
    let dataColor = color.getAttribute('data-color');
    document.querySelector(':root').style.setProperty('--switcher', dataColor);
  });

});

// ta feio mas fazer oq

let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let btn4 = document.querySelector('#btn4');
let btn5 = document.querySelector('#btn5');
let home = document.querySelector('.home');
let about = document.querySelector('.about');
let services = document.querySelector('.services');
let port = document.querySelector('.port');
let ctt = document.querySelector('.ctt');

btn1.addEventListener('click', function () {
  btn1.style.color = 'var(--switcher)';
  btn2.style.color = 'var(--color)';
  btn3.style.color = 'var(--color)';
  btn4.style.color = 'var(--color)';
  btn5.style.color = 'var(--color)';
  home.style.display = 'block'
  about.style.display = 'none';
  services.style.display = 'none';
  port.style.display = 'none';
  ctt.style.display = 'none';
});

btn2.addEventListener('click', function () {
  btn2.style.color = 'var(--switcher)';
  btn1.style.color = 'var(--color)';
  btn3.style.color = 'var(--color)';
  btn4.style.color = 'var(--color)';
  btn5.style.color = 'var(--color)';
  home.style.display = 'none'
  about.style.display = 'block';
  services.style.display = 'none';
  port.style.display = 'none';
  ctt.style.display = 'none';
});

btn3.addEventListener('click', function () {
  btn3.style.color = 'var(--switcher)';
  btn1.style.color = 'var(--color)';
  btn2.style.color = 'var(--color)';
  btn4.style.color = 'var(--color)';
  btn5.style.color = 'var(--color)';
  home.style.display = 'none'
  about.style.display = 'none';
  services.style.display = 'block';
  port.style.display = 'none';
  ctt.style.display = 'none';
});

btn4.addEventListener('click', function () {
  btn4.style.color = 'var(--switcher)';
  btn1.style.color = 'var(--color)';
  btn3.style.color = 'var(--color)';
  btn2.style.color = 'var(--color)';
  btn5.style.color = 'var(--color)';
  home.style.display = 'none'
  about.style.display = 'none';
  services.style.display = 'none';
  port.style.display = 'block';
  ctt.style.display = 'none';
});

btn5.addEventListener('click', function () {
  btn5.style.color = 'var(--switcher)';
  btn1.style.color = 'var(--color)';
  btn3.style.color = 'var(--color)';
  btn4.style.color = 'var(--color)';
  btn2.style.color = 'var(--color)';
  home.style.display = 'none'
  about.style.display = 'none';
  services.style.display = 'none';
  port.style.display = 'none';
  ctt.style.display = 'block';
});
