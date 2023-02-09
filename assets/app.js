let sums = document.getElementById('sums')
let result = document.getElementById('result')

document
  .getElementById('calculator')
  .addEventListener('click', function (event) {
    event.preventDefault()
  })

// function displaynum(n1) {
//   Calculator.text1.value = Calculator.text1.value + n1
// }

function clearAll() {
  document.getElementById('result').innerHTML = ''
}

function insert(valor) {
  document.querySelector('#result').innerHTML += valor
}

function Calc() {
  if (result.textContent != 'erro') {
    document.getElementById('result').innerHTML = eval(result.innerHTML)
  }
}

;(async () => {
  await tsParticles.load('tsparticles', {
    particles: {
      shape: {
        type: 'circle'
      }
    },
    preset: 'snow'
  })
})()
