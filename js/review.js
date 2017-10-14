var form = document.querySelector('.review-form');
var data = new FormData(form);
var elements = form.querySelector('input[type=text]');
var surname = form.querySelector('.form__surname');
var number = form.querySelector('.form__number');
var message = form.querySelector ('.review-message');
var qs = '';
var surnameValue = '';
var numberValue = '';
var messageValue = '';

var rec = form.querySelector('.radio-recommend');
var recValue = '';

var speedValue = '3';
var radioSpeed = form.querySelector('.form__radios--speed');
var speed1 = radioSpeed.querySelector('.radio-1');
var speed2 = radioSpeed.querySelector('.radio-2');
var speed3 = radioSpeed.querySelector('.radio-3');
var speed4 = radioSpeed.querySelector('.radio-4');
var speed5 = radioSpeed.querySelector('.radio-5');

speed1.addEventListener('change', function() {
	speed1.checked = true;
	speedValue = '1';

})

speed2.addEventListener('change', function() {
	speed2.checked = true;
	speedValue = '2';

})

speed3.addEventListener('change', function() {
	speed3.checked = true;
	speedValue = '3';

})

speed4.addEventListener('change', function() {
	speed4.checked = true;
	speedValue = '4';

})

speed5.addEventListener('change', function() {
	speed5.checked = true;
	speedValue = '5';

})


var qualValue = '3';
var radioQual = form.querySelector('.form__radios--qual');
var qual1 = radioQual.querySelector('.radio-1');
var qual2 = radioQual.querySelector('.radio-2');
var qual3 = radioQual.querySelector('.radio-3');
var qual4 = radioQual.querySelector('.radio-4');
var qual5 = radioQual.querySelector('.radio-5');

qual1.addEventListener('change', function() {
	qual1.checked = true;
	qualValue = '1';

})

qual2.addEventListener('change', function() {
	qual2.checked = true;
	qualValue = '2';

})

qual3.addEventListener('change', function() {
	qual3.checked = true;
	qualValue = '3';

})

qual4.addEventListener('change', function() {
	qual4.checked = true;
	qualValue = '4';

})

qual5.addEventListener('change', function() {
	qual5.checked = true;
	qualValue = '5';

})


var staffValue = '3';
var radioStaff = form.querySelector('.form__radios--staff');
var staff1 = radioStaff.querySelector('.radio-1');
var staff2 = radioStaff.querySelector('.radio-2');
var staff3 = radioStaff.querySelector('.radio-3');
var staff4 = radioStaff.querySelector('.radio-4');
var staff5 = radioStaff.querySelector('.radio-5');

staff1.addEventListener('change', function() {
	staff1.checked = true;
	staffValue = '1';

})

staff2.addEventListener('change', function() {
	staff2.checked = true;
	staffValue = '2';

})

staff3.addEventListener('change', function() {
	staff3.checked = true;
	staffValue = '3';

})

staff4.addEventListener('change', function() {
	staff4.checked = true;
	staffValue = '4';

})

staff5.addEventListener('change', function() {
	staff5.checked = true;
	staffValue = '5';

})


var costValue = '3';
var radioCost = form.querySelector('.form__radios--cost');
var cost1 = radioCost.querySelector('.radio-1');
var cost2 = radioCost.querySelector('.radio-2');
var cost3 = radioCost.querySelector('.radio-3');
var cost4 = radioCost.querySelector('.radio-4');
var cost5 = radioCost.querySelector('.radio-5');

cost1.addEventListener('change', function() {
	cost1.checked = true; 
	costValue = '1';

})

cost2.addEventListener('change', function() {
	cost2.checked = true;
	costValue = '2';

})

cost3.addEventListener('change', function() {
	cost3.checked = true;
	costValue = '3';

})

cost4.addEventListener('change', function() {
	cost4.checked = true;
	costValue = '4';

})

cost5.addEventListener('change', function() {
	cost5.checked = true;
	costValue = '5';

})

surname.addEventListener('change', function() {
	qs = '';
	surnameValue = '';
	surnameValue = surname.value;
	qs = qs + 'surname' + '=' + surnameValue + '&' + 'number' + '=' + numberValue + '&' + 'speed' + '=' + speedValue + '&' + 'qual' + '=' + qualValue + '&' + 'staff' + '=' + staffValue + '&' + 'cost' + '=' + costValue + '&' + 'message' + '=' + messageValue + '&' + 'recommend' + '=' + recValue + '&' + 'action = review' + '&';
});

number.addEventListener('change', function() {
	qs = '';
	numberValue = '';
	numberValue = number.value;
	qs = qs + 'surname' + '=' + surnameValue + '&' + 'number' + '=' + numberValue + '&' + 'speed' + '=' + speedValue + '&' + 'qual' + '=' + qualValue + '&' + 'staff' + '=' + staffValue + '&' + 'cost' + '=' + costValue + '&' + 'message' + '=' + messageValue + '&' + 'recommend' + '=' + recValue + '&' + 'action = review' + '&';
});

message.addEventListener('change', function() {
	qs = '';
	messageValue = '';
	messageValue = message.value;
	qs = qs + 'surname' + '=' + surnameValue + '&' + 'number' + '=' + numberValue + '&' + 'speed' + '=' + speedValue + '&' + 'qual' + '=' + qualValue + '&' + 'staff' + '=' + staffValue + '&' + 'cost' + '=' + costValue + '&' + 'message' + '=' + messageValue + '&' + 'recommend' + '=' + recValue + '&' + 'action = review' + '&';
});

rec.addEventListener('change', function() { 
	qs = '';
	recValue = '';
	recValue = rec.value;
	qs = qs + 'surname' + '=' + surnameValue + '&' + 'number' + '=' + numberValue + '&' + 'speed' + '=' + speedValue + '&' + 'qual' + '=' + qualValue + '&' + 'staff' + '=' + staffValue + '&' + 'cost' + '=' + costValue + '&' + 'message' + '=' + messageValue + '&' + 'recommend' + '=' + recValue + '&' + 'action = review' + '&';
})

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