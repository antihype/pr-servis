var form = document.querySelector('.registration-form');
var data = new FormData(form);
var login = document.querySelector('.form__username');
var pass = document.querySelector('.form__password');
var passRepeat = document.querySelector('.form__password-repeat');
var qs = '';
var loginValue = '';
var passValue = '';

login.addEventListener('change', function() {
  loginValue = login.value;
  qs = qs + 'login' + '=' + loginValue + '&'
});

pass.addEventListener('change', function() {
  passValue = pass.value;
  qs = qs + 'pass' + '=' + passValue + '&' + 'action=registration' + '&'
});

login.focus();
 


form.addEventListener('submit', function(event) {
  if (!login.value || !pass.value) {
    event.preventDefault();
    alert('Необходимо ввести логин и пароль');
  };

  if (login.value.length < 10) {
    login.classList.add('form__username--error');
    event.preventDefault();
  };

  if (pass.value.length < 6) {
    pass.classList.add('form__password--error');
    event.preventDefault();
  };

  if (pass.value != passRepeat.value) {
    passRepeat.classList.add('form__password-repeat--error');
    event.preventDefault();
  };
});

login.addEventListener ('focus', function() {
  login.classList.remove('form__username--error');
});

pass.addEventListener ('focus', function() {
  pass.classList.remove('form__password--error');
});

passRepeat.addEventListener ('focus', function() {
  passRepeat.classList.remove('form__password-repeat--error');
});

function editTR() {
    var respText = this.responseText;
    alert(respText);
  };


  (function() {
    form.addEventListener ('submit', function(event) {
      event.preventDefault();
    var xhr = new XMLHttpRequest();

    xhr.onload = editTR;
    xhr.open('post', 'https://nanoserv.ru/work/jsonrequest.php', true);
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8");
    xhr.send(data);

      



});
  })();

