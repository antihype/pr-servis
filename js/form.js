var link = document.querySelector('.login');
var form = document.querySelector('.form-sign');
var login = document.querySelector('.form__username');
var pass = document.querySelector('.form__password');
var popup = document.querySelector('.modal-content');
var close = document.querySelector('.modal-content__close');
var action = 'signin';

var qs = '';

qs = qs + 'login' + '=' + encodeURIComponent(login.value) + '&' + 'password' + '=' + encodeURIComponent(pass.value) + '&' + 'action' + '=' + encodeURIComponent(action.value) + '&';


link.addEventListener ('click', function(event) {
  event.preventDefault();
  popup.classList.add('modal-content-show');
  login.focus();
});

close.addEventListener ('click', function(event) {
  event.preventDefault();
  popup.classList.remove('modal-content-show');
});

window.addEventListener('keydown', function(event) {
  if (event.keyCode === 27) {
    popup.classList.remove('modal-content-show');
  };
});

form.addEventListener('submit', function(event) {
  if (!login.value || !pass.value) {
    event.preventDefault();
    alert('Необходимо ввести логин и пароль');
  }
});

(function() {
    form.addEventListener ('submit', function(event) {
      event.preventDefault();
    var xhr = new XMLHttpRequest();

    xhr.open('post', 'text.txt');

    xhr.addEventListener('readystatechange', function() {
      if (xhr.readyState == 4) {
        console.log(xhr.responseText);
      }
    });

      xhr.send(qs);

});
  })();