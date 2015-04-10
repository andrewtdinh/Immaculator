'use strict';

$(document).ready(init);

var memory = 0;
var operation = '';

function init(){
  $('.number').click(clickNumber);
  $('#decimal').click(clickDecimal);
  $('#clear').click(clear);
  $('.operator').click(clickOperator);
  $('#equal').click(calculate);
  $('#sign').click(reverse);
  $('#percent').click(makePercent);
}

function clickNumber(){
  var num = $(this).text();
  var display = $('#display').text();
  var output = (display === '0') ? num : display + num;
  adjustFont(output);
  $('#display').text(output);
}

function clickDecimal(){
  var display = $('#display').text();
  var output = display.indexOf('.') !== -1 ? display : display += '.';
  adjustFont(output);
  $('#display').text(output);
}

function clear(){
  $('#display').text('0');
  adjustFont(0);
}

function clickOperator(){
  // debugger;
  memory = parseFloat($('#display').text());
  operation = $(this).text();
  $('#display').text('0');
  adjustFont(0);
}

function calculate(){
  var display = $('#display').text();
  // debugger;
  switch (operation){
    case '': break;
    case '+': memory += parseFloat(display); $('#display').text(memory); break;
    case '–': memory -= parseFloat(display); $('#display').text(memory); break;
    case '×': memory *= parseFloat(display); $('#display').text(memory); break;
    case '÷': memory /= parseFloat(display); $('#display').text(memory); break;
  }
  adjustFont(memory);
  operation = '';
}

function reverse(){
  var display = -1 * $('#display').text();
  adjustFont(display);
  $('#display').text(display);
}

function makePercent(){
  var display = $('#display').text() * 1 / 100;
  adjustFont(display);
  $('#display').text(display);
}

function adjustFont(stringOrNum){
  var display;
  var currentFontSize = $('#display').css('font-size');
  if (typeof stringOrNum === 'number') {display = stringOrNum.toString();}
  else {display = stringOrNum;}
  if (display.length < 9) {
    if (currentFontSize !== '50px') {
      $('#display').css('font-size', '50px');
      $('#display').css('height', '40px');
      $('#display').css('top', '30px');
    }
  }
  else if (display.length < 14) {
    if (currentFontSize !== '30px'){
      $('#display').css('font-size', '30px');
      $('#display').css('height', '30px');
      $('#display').css('top', '45px');
    }
  }
  else {
    if (currentFontSize !== '20px'){
      $('#display').css('font-size', '20px');
      $('#display').css('height', '20px');
      $('#display').css('top', '55px');
    }
  }
}
