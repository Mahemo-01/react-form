let root = document.querySelector(':root')
let body = document.querySelector('body')
let darkMode = document.querySelector('#darkMode')
let cardForm = document.querySelector('#card-form')
let gradientWheel = document.querySelector('#gradient-wheel')
darkMode.addEventListener('click', changeToDarkMode)
cardForm.addEventListener('click', noMoreBlur)
gradientWheel.addEventListener('click', showOtherGradients)

window.addEventListener("load", bodyloaded)

let gradients = ['linear-gradient(rgb(208, 15, 36) 0%, rgb(56, 62, 204) 140%)', 'linear-gradient(rgb(47, 216, 86) 0%, rgb(56, 62, 204) 140%)', 'linear-gradient(rgb(7, 255, 201) 0%, rgb(40, 44, 156) 140%)', 'linear-gradient(rgb(247, 128, 116) 0%, rgb(56, 62, 204) 140%)']

  function bodyloaded() {

    if (localStorage.getItem('localGradient') === null && localStorage.getItem('localGradientTwo') === null) {
      cardForm.children[0].style.background = 'linear-gradient(rgb(247, 128, 116) 0%, rgb(56, 62, 204) 140%)'
      cardForm.children[1].style.background = 'linear-gradient(rgb(247, 128, 116) 0%, rgb(106, 112, 254) 120%);'
      gradientWheel.style.background = 'linear-gradient(rgb(247, 128, 116) 0%, rgb(56, 62, 204) 140%)'
    } else {
      cardForm.children[0].style.background = localStorage.getItem('localGradient')
      cardForm.children[1].style.background = localStorage.getItem('localGradientTwo')
      gradientWheel.style.background = localStorage.getItem('localGradient')

      let newGradient = localStorage.getItem('localGradient')

      let newGradients = gradients.filter(g => {
        return g !== newGradient
      })
      gradients = newGradients
    };
  }

  function showOtherGradients(e) {
    if (cardForm.children.length < 5) {
      let card = e.target.parentNode
      card.children[0].classList.add('blur')
      card.children[1].classList.add('blur')
      card.children[2].classList.add('blur')

      let div = document.createElement('div')
      div.className = 'gradient-options'
      let ul = document.createElement('ul')
      ul.className = 'ul-gradients'

      for (let i = 0; i < gradients.length; i++) {
        let li = document.createElement('li')
        li.className = 'gradient mt-1'
        li.style.background = `${gradients[i]}`
        li.id = `gradient-${i + 1}`
        ul.appendChild(li)
        li.addEventListener('click', gradientClicked)
      }
      ul.lastElementChild.classList.add('mb-1')

      div.appendChild(ul)
      card.appendChild(div)
    }
  }

  function gradientClicked(e) {
    let optionStyle = window.getComputedStyle(gradientWheel);
    let gradientBg = optionStyle.getPropertyValue('background-image');

    let newGradient = e.target.style.background

    let split = newGradient.split(' rgb(')
    let color = split[1].split(')')[0].split(',')
    let red = color[0]
    let green = color[1]
    let blue = color[2]
    let newColor = colorShade(fullRgbToHex(red, green, blue), 50)
    let percentage = ' 120%'
    let partTwo = newColor + percentage + ')'
    let returnColor = split[0] + ' ' + partTwo

    let newGradients = gradients.filter(g => {
      return g !== newGradient
    })

    gradients = newGradients
    gradients.push(gradientBg)

    if (e.type === 'click') {
      localStorage.setItem("localGradient", `${newGradient}`);
      localStorage.setItem("localGradientTwo", `${returnColor}`);
    };

    cardForm.children[0].style.background = localStorage.getItem('localGradient')
    cardForm.children[1].style.background = localStorage.getItem('localGradientTwo')
    gradientWheel.style.background = localStorage.getItem('localGradient')
    cardForm.children[0].classList.remove('blur')
    cardForm.children[1].classList.remove('blur')
    cardForm.children[2].classList.remove('blur')
    document.querySelector('.gradient-options').remove()
  }


function noMoreBlur(e) {
  let card = e.target.className
  if (card !== 'gradient-wheel' && card !== 'gradient-options' && card !== 'gradient mt-1' && card !== 'gradient mt-1 mb-1') {
    cardForm.children[0].classList.remove('blur')
    cardForm.children[1].classList.remove('blur')
    cardForm.children[2].classList.remove('blur')
    document.querySelector('.gradient-options').remove()
  }
}


// rgb to hex //
function rgbToHex(rgb) {
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = "0" + hex;
  }
  return hex;
};

// full rgb to hex //
function fullRgbToHex(r, g, b) {
  var red = rgbToHex(r);
  var green = rgbToHex(g);
  var blue = rgbToHex(b);
  return red + green + blue;
}

// hex to hsl //
function hexToHsl(hex) {
  hex = hex.replace(/^#/, '')
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  var r = parseInt(result[1], 16);
  var g = parseInt(result[2], 16);
  var b = parseInt(result[3], 16);

  r /= 255, g /= 255, b /= 255;
  var max = Math.max(r, g, b), min = Math.min(r, g, b);
  var h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  s = s * 100;
  s = Math.round(s);
  l = l * 100;
  l = Math.round(l);
  h = Math.round(360 * h);

  var colorInHSL = 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
  return colorInHSL
}
// shade color HEX lighten o darken n or -n //
function colorShade(col, amt) {
  col = col.replace(/^#/, '')
  if (col.length === 3) col = col[0] + col[0] + col[1] + col[1] + col[2] + col[2]

  let [r, g, b] = col.match(/.{2}/g);
  ([r, g, b] = [parseInt(r, 16) + amt, parseInt(g, 16) + amt, parseInt(b, 16) + amt])

  r = Math.max(Math.min(255, r), 0).toString(16)
  g = Math.max(Math.min(255, g), 0).toString(16)
  b = Math.max(Math.min(255, b), 0).toString(16)

  let rr = (r.length < 2 ? '0' : '') + r
  let gg = (g.length < 2 ? '0' : '') + g
  let bb = (b.length < 2 ? '0' : '') + b

  return `#${rr}${gg}${bb}`
}

function changeBtnTxtToBg() {
  let submit = document.querySelectorAll('.btn')[0]
  let submitBg = submit.classList.value.split(' ').filter(c => {
    return c.split('-')[0] === 'btn'
  })
  let bgColor = submitBg[0].split('-')[1]

  let rootColor = getComputedStyle(body).getPropertyValue(`--${bgColor}-color`).trim();

  let rootLightColor = hexToHsl(rootColor).split(' ')[2].split('%')[0]
  let switchLight = (rootLightColor - 70) * -1.5;
  let newColor = `hsl(0, 0%, ${switchLight}%)`
  submit.style.color = newColor
}

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  darkMode.setAttribute('checked', true)
  darkMode.classList.add('active')
  document.body.classList.add('is-dark-mode')
} else {
  document.body.classList.add('is-light-mode')
}

function changeToDarkMode() {
  document.body.classList.toggle('is-light-mode')
  document.body.classList.toggle('is-dark-mode')
  darkMode.classList.toggle('active')
  changeBtnTxtToBg()
}