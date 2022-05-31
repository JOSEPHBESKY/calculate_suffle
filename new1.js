var inputbox=document.getElementById('inputbox')
var btn1=document.getElementById('btn1')
btn1.addEventListener('click',array)
var btn2=document.getElementById('btn2')
btn2.addEventListener('click',array)
var btn3=document.getElementById('btn3')
btn3.addEventListener('click',array)
var btn4=document.getElementById('btn4')
btn4.addEventListener('click',array)
var btn5=document.getElementById('btn5')
btn5.addEventListener('click',array)
var btn6=document.getElementById('btn6')
btn6.addEventListener('click',array)
var btn7=document.getElementById('btn7')
btn7.addEventListener('click',array)
var btn8=document.getElementById('btn8')
btn8.addEventListener('click',array)
var btn9=document.getElementById('btn9')
btn9.addEventListener('click',array)
function suffle() {
  var  arr=[1,2,3,4,5,6,7,8,9]
  currentindex=arr.length
  console.log(currentindex);
  while(currentindex !=0){
      randomnumber=Math.floor(Math.random()*currentindex)
      currentindex--;
       [arr[currentindex],arr[randomnumber]]=[arr[randomnumber],arr[currentindex]]
  }
  return arr;
}
function array() {
    arr=suffle()
    btn1.value=arr[0]
    btn2.value=arr[1]
    btn3.value=arr[2]
    btn4.value=arr[3]
    btn5.value=arr[4]
    btn6.value=arr[5]
    btn7.value=arr[6]
    btn8.value=arr[7]
    btn9.value=arr[8]
}
function show(y) {
  var input=document.getElementById('inputbox')
  input.value=y
}
var btn1=document.getElementById('btn1')
btn1.addEventListener('click',bott1)
function bott1() {
  x=btn1.value;
  show(x)
}
btn2.addEventListener('click',bott2)
function bott2() {
  x=btn2.value;
  show(x)
}
btn3.addEventListener('click',bott3)
function bott3() {
  x=btn3.value;
  show(x)
}
btn4.addEventListener('click',bott4)
function bott4() {
  x=btn4.value;
  show(x)
}
btn5.addEventListener('click',bott5)
function bott5() {
  x=btn5.value;
  show(x)
}
btn6.addEventListener('click',bott6)
function bott6() {
  x=btn6.value;
  show(x)
}
btn7.addEventListener('click',bott7)
function bott7() {
  x=btn7.value;
  show(x)
}
btn8.addEventListener('click',bott8)
function bott8() {
  x=btn8.value;
  show(x)
}
btn9.addEventListener('click',bott9)
function bott9() {
  x=btn9.value;
  show(x)
}

btn10.addEventListener('click',bott10)
function bott10() {
  x=btn10.value;
  show(x)
}
var btn11=document.getElementById('btn11')
btn11.addEventListener('click',bott11)
function bott11() {
  x=btn11.value
  show(x)
}
var btn12=document.getElementById('btn12')
btn12.addEventListener('click',bott12)
function bott12() {
  var input=document.getElementById('inputbox')
  input.value=""
}