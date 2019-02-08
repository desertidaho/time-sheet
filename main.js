let week = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
];

function addHour(i, j) {
  if (week[i][j] < 24) {
    week[i][j]++
  }

  calculateWeek1Total()
  calculateWeek2Total()
}

function subHour(i, j) {
  if (week[i][j] != 0) {
    week[i][j]--
  }

  calculateWeek1Total()
  calculateWeek2Total()
}

let week1Total = 0
let week2Total = 0

function calculateWeek1Total() {
  let add = (a, b) => a + b
  week1Total = week[0].reduce(add);

  calculateCummulativeTotal()
}

function calculateWeek2Total() {
  let add = (a, b) => a + b
  week2Total = week[1].reduce(add);

  calculateCummulativeTotal()
}

let grand = 0;
let pay = 0;

function calculateCummulativeTotal() {
  grand = week1Total + week2Total;

  earned()
}

let input = 0

function earned() {
  input = document.getElementById('hourlyWage').value;
  pay = input * grand

  draw()
}

function draw() {
  document.getElementById('w1m').innerText = week[0][0].toString();
  document.getElementById('w1tu').innerText = week[0][1].toString();
  document.getElementById('w1w').innerText = week[0][2].toString();
  document.getElementById('w1th').innerText = week[0][3].toString();
  document.getElementById('w1f').innerText = week[0][4].toString();
  document.getElementById('week1Pay').innerText = (week1Total * input).toString();

  document.getElementById('w2m').innerText = week[1][0].toString();
  document.getElementById('w2tu').innerText = week[1][1].toString();
  document.getElementById('w2w').innerText = week[1][2].toString();
  document.getElementById('w2th').innerText = week[1][3].toString();
  document.getElementById('w2f').innerText = week[1][4].toString();
  document.getElementById('week2Pay').innerText = (week2Total * input).toString();

  document.getElementById('week1Total').innerText = week1Total.toString();
  document.getElementById('week2Total').innerText = week2Total.toString();
  document.getElementById('grandTotal').innerText = grand.toString();
  document.getElementById('grandPay').innerText = `$ ${pay.toString()}`;
  document.getElementById('rate').innerText = input.toString();
}