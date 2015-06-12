'use strict';

$(document).ready(init);

var memory = 0;
var operation = '';
var prevResult = false;

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
  if(prevResult){
    console.log('Previous Result? ', prevResult);
    var output = (display === '0') ? num : display;
  }else{
    var output = (display === '0') ? num : (display.length < 18 ? (display + num) : display);
  }
  adjustFont(output);
  $('#display').text(output);
}

function clickDecimal(){
  var display = $('#display').text();
  if(prevResult){
    var output = display;
  }else{
    var output = display.indexOf('.') !== -1 ? display : (display.length < 18 ? (display += '.') : display);
  }
  adjustFont(output);
  $('#display').text(output);
}

function clear(){
  $('#display').text('0');
  operation = '';
  prevResult = false;
  adjustFont(0);
}

function clickOperator(){
  memory = parseFloat($('#display').text());
  operation = $(this).text();
  $('#display').text('0');
  prevResult = false;
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
  prevResult = true;
}

function reverse(){
  var display = $('#display').text();
  if(display * 1 < 0 || display.length < 18){
    display = -1 * display;
  }
  adjustFont(display);
  $('#display').text(display);
}

function makePercent(){
  var display = $('#display').text();
  if(display.length <= 18){
    display = display / 100;
  }
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
    if (currentFontSize !== '4.7rem') {
      $('#display').css('font-size', '4.7rem');
      $('#display').css('padding-top', '3.2vh');
    }
  }
  else if (display.length < 15) {
    if (currentFontSize !== '2.8rem'){
      $('#display').css('font-size', '2.8rem');
      $('#display').css('padding-top', '5.8vh');
    }
  }
  else {
    if (currentFontSize !== '2.3rem'){
      $('#display').css('font-size', '2.3rem');
      $('#display').css('padding-top', '6.8vh');
    }
  }
}
