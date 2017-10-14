var form = document.querySelector('.form-sign');
var login = document.querySelector('.form__username');
var pass = document.querySelector('.form__password');
var action = 'signin';
var qs = '';
var loginValue = '';
var passValue = '';

login.focus();

login.addEventListener('change', function() {
  qs = '';
  loginValue = login.value;
  qs = qs + 'login' + '=' + loginValue + '&' + 'pass' + '=' + passValue + '&' + 'action=init' + '&'
});

pass.addEventListener('change', function() {
  qs = '';
  passValue = pass.value;
  qs = qs + 'login' + '=' + loginValue + '&' + 'pass' + '=' + passValue + '&' + 'action=init' + '&'
});

login.focus();

form.addEventListener('keydown', function(event) {
    if(event.keyCode == 13) {
       event.preventDefault();
    }
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
    xhr.send(qs);

      
});
  })();

