$(document).ready(function() {
  'use strict';
  var $screen = $('#screen');
  var screenTxt = $screen.text();
  var num1 = null;
  var num2 = null;
  var numTwoString = '';
  var operator = null;
  var total = null;

  var totaler = function() {
    num2 = parseInt(numTwoString);
    if (operator === '+') {
      total = num1 + num2;
    }
    else if (operator === '-') {
      total = num1 - num2;
    }
    else if (operator === '*') {
      total = num1 * num2;
    }
    else if (operator === '/') {
      total = num1 / num2;
    }
    $screen.text(total);
    screenTxt = total;
    num1 = total;
    num2 = null;
    numTwoString = '';
  };

  var setOperator = function(sign) {
    if (numTwoString !== '') {
      totaler();
    }
    num1 = parseInt(screenTxt);
    $screen.text(screenTxt += sign);
    operator = sign;
  };

  $('span:not(.operator)').on('click', function() {
    var txt = $(this).text();
    var num = parseInt(txt);

    if (screenTxt === '0') {
      screenTxt = num.toString();
      $screen.text(num);
    }
    else {
      $screen.text(screenTxt += num);
      if (num1 !== null) {
        numTwoString += num;
      }
    }
  });

  $('.operator').on('click', function() {
    var txt = $(this).text();

    if (txt === 'x') {
      setOperator('*');
    }
    else if (txt === '+') {
      setOperator('+');
    }
    else if (txt === '-') {
      setOperator('-');
    }
    else if (txt === '=') {
      totaler();
    }
    else if (txt === 'C') {
      screenTxt = '0';
      $screen.text(0);
      num1 = null;
      num2 = null;
      operator = null;
      total = null;
      numTwoString = '';
    }
    else {
      setOperator('/');
    }
  });
});
