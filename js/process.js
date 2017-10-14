var form = document.querySelector('.form--process');
var surname = form.querySelector('.form__surname');
var number = form.querySelector('.form__number');
var qs = '';
var surnameValue = '';
var numberValue = '';

surname.focus();

surname.addEventListener('change', function() {
  qs = '';
  surnameValue = '';
  surnameValue = surname.value;
  qs = qs + 'surname' + '=' + surnameValue + '&' + 'number' + '=' + numberValue + '&';
});

number.addEventListener('change', function() {
  qs = '';
  numberValue = '';
  numberValue = number.value;
  qs = qs + 'surname' + '=' + surnameValue + '&' + 'number' + '=' + numberValue + '&';
});

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
    var xhr = new XMLHttpRequest();
    xhr.onload = editTR;
    xhr.open('post', 'https://nanoserv.ru/work/jsonrequest.php', true);
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8");
    xhr.send(qs);
});
  })();