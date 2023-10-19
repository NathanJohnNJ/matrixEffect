// Initialising the canvas
let canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d');

// Setting the width and height of the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Setting up the letters
let letters = '0123456789アカタナハマヤ./,;|[]!@£$^&*()ラワイィキシチニヒミリビピウクスツヌフムユュルグズブヅプエェケセテネヘメレヱデベペオォコソトモヨョロヲゴゾッンABCDEFGHIJKLMNOPQRSTUVWXYZ'
letters = letters.split('');

// Setting up the columns
let fontSize = 10,
    columns = canvas.width / fontSize;

// Setting up the drops
let drops = [];
for (let i = 0; i < columns; i++) {
  drops[i] = 1;
}

let gradient = ctx.createLinearGradient(0,0, width, 1);
    gradient.addColorStop(0, 'yellow');
    gradient.addColorStop(0.2, 'orange');
    gradient.addColorStop(0.4, 'red');
    gradient.addColorStop(0.6, 'pink');
    gradient.addColorStop(0.8, 'cyan');
    gradient.addColorStop(1, 'green');

// Setting up the draw function
function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, .1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < drops.length; i++) {
    let text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = gradient;
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
      drops[i] = 0;
    }
  }
}
// Loop the animation
setInterval(draw, 33);