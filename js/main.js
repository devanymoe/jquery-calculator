$(document).ready(function() {
  var $screen = $('#screen');
  var screenTxt = $screen.text();
  var num1 = null;
  var num2 = null;
  var operator = null;
  var total = null;

  $('span:not(.operator)').on('click', function() {
    var txt = $(this).text();
    var num = parseInt(txt);
    if(screenTxt === '0') {
      screenTxt = num.toString();
      $screen.text(num);
    }
    else {
      $screen.text(screenTxt += num);
      if(num1 !== null){
        num2 += num;
      }
    }
  });

  $('.operator').on('click', function() {
    var txt = $(this).text()
    if(txt === 'x') {
      num1 = parseInt(screenTxt);
      $screen.text(screenTxt += '*');
      operator = 'multiply';
    }
    else if(txt === '+') {
      num1 = parseInt(screenTxt);
      $screen.text(screenTxt += '+');
      operator = 'add';
    }
    else if(txt === '-') {
      num1 = parseInt(screenTxt);
      $screen.text(screenTxt += '-');
      operator = 'subtract';
    }
    else if(txt === '=') {
      if (operator === 'add') {
        total = num1 + num2;
      }
      else if (operator === 'subtract') {
        total = num1 - num2;
      }
      else if (operator === 'multiply') {
        total = num1 * num2;
      }
      else if (operator === 'divide') {
        total = num1 / num2;
      }
      $screen.text(total);
      screenTxt = total;
      num1 = total;
      num2 = null;
    }
    else if(txt === 'C') {
      screenTxt = '0';
      $screen.text(0);
      num1 = null;
      num2 = null;
      operator = null;
      total = null;
    }
    else {
      $screen.text(screenTxt += '/');
      num1 = parseInt(screenTxt);
      operator = 'divide';
    }
  });
});
