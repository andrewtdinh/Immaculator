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
  console.log('current display: ', display);
  // var output = (display === '0') ? num : display + num;
  var output = (display === '0') ? num : (display.length < 18 ? (display + num) : display);
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
  console.log('currentFontSize: ', currentFontSize);
  if (typeof stringOrNum === 'number') {display = stringOrNum.toString();}
  else {display = stringOrNum;}
  if (display.length < 10) {
    if (currentFontSize !== '6rem') {
      $('#display').css('font-size', '6rem');
      $('#display').css('padding-top', '2.8vh');
      // $('#display').css('height', '40px');
      // $('#display').css('top', '30px');
    }
  }
  else if (display.length < 15) {
    if (currentFontSize !== '4rem'){
      $('#display').css('font-size', '4rem');
      $('#display').css('padding-top', '5.6vh');
      // $('#display').css('height', '30px');
      // $('#display').css('top', '45px');
    }
  }
  else {
    if (currentFontSize !== '3rem'){
      $('#display').css('font-size', '3rem');
      $('#display').css('padding-top', '6.6vh');
      // $('#display').css('height', '20px');
      // $('#display').css('top', '55px');
    }
  }
}
