
function multiply(){
  result = parseFloat(this.number1.value) * parseFloat(this.number2.value)
  document.getElementById('result').innerHTML = result
}

function substract(){
  result = parseFloat(this.number1.value) - parseFloat(this.number2.value)
  document.getElementById('result').innerHTML = result
}

function add(){
  result = parseFloat(this.number1.value) + parseFloat(this.number2.value)
  document.getElementById('result').innerHTML = result
}

function divide(){
  result = parseFloat(this.number1.value) / parseFloat(this.number2.value)
  document.getElementById('result').innerHTML = result
}

function reset(){
  document.getElementById('result').innerHTML = ""
 }

 function del(){
  let result = document.getElementById('result').innerHTML
  result = result.toString().slice(0,-1)
  document.getElementById('result').innerHTML = result
 }


