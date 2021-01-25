import '../css/rueda-color.css'

function RuedaColor() {
  // let gradients = ['linear-gradient(rgb(208, 15, 36) 0%, rgb(56, 62, 204) 140%)', 'linear-gradient(rgb(47, 216, 86) 0%, rgb(56, 62, 204) 140%)', 'linear-gradient(rgb(7, 255, 201) 0%, rgb(40, 44, 156) 140%)', 'linear-gradient(rgb(247, 128, 116) 0%, rgb(56, 62, 204) 140%)']

  // function bodyloaded() {

  //   if (localStorage.getItem('localGradient') === null && localStorage.getItem('localGradientTwo') === null) {
  //     cardForm.children[0].style.background = 'linear-gradient(rgb(247, 128, 116) 0%, rgb(56, 62, 204) 140%)'
  //     cardForm.children[1].style.background = 'linear-gradient(rgb(247, 128, 116) 0%, rgb(106, 112, 254) 120%);'
  //     gradientWheel.style.background = 'linear-gradient(rgb(247, 128, 116) 0%, rgb(56, 62, 204) 140%)'
  //   } else {
  //     cardForm.children[0].style.background = localStorage.getItem('localGradient')
  //     cardForm.children[1].style.background = localStorage.getItem('localGradientTwo')
  //     gradientWheel.style.background = localStorage.getItem('localGradient')

  //     let newGradient = localStorage.getItem('localGradient')

  //     let newGradients = gradients.filter(g => {
  //       return g !== newGradient
  //     })
  //     gradients = newGradients
  //   };
  // }

  // function showOtherGradients(e) {
  //   if (cardForm.children.length < 5) {
  //     let card = e.target.parentNode
  //     card.children[0].classList.add('blur')
  //     card.children[1].classList.add('blur')
  //     card.children[2].classList.add('blur')

  //     let div = document.createElement('div')
  //     div.className = 'gradient-options'
  //     let ul = document.createElement('ul')
  //     ul.className = 'ul-gradients'

  //     for (let i = 0; i < gradients.length; i++) {
  //       let li = document.createElement('li')
  //       li.className = 'gradient mt-1'
  //       li.style.background = `${gradients[i]}`
  //       li.id = `gradient-${i + 1}`
  //       ul.appendChild(li)
  //       li.addEventListener('click', gradientClicked)
  //     }
  //     ul.lastElementChild.classList.add('mb-1')

  //     div.appendChild(ul)
  //     card.appendChild(div)
  //   }
  // }

  // function gradientClicked(e) {
  //   let optionStyle = window.getComputedStyle(gradientWheel);
  //   let gradientBg = optionStyle.getPropertyValue('background-image');

  //   let newGradient = e.target.style.background

  //   let split = newGradient.split(' rgb(')
  //   let color = split[1].split(')')[0].split(',')
  //   let red = color[0]
  //   let green = color[1]
  //   let blue = color[2]
  //   let newColor = colorShade(fullRgbToHex(red, green, blue), 50)
  //   let percentage = ' 120%'
  //   let partTwo = newColor + percentage + ')'
  //   let returnColor = split[0] + ' ' + partTwo

  //   let newGradients = gradients.filter(g => {
  //     return g !== newGradient
  //   })

  //   gradients = newGradients
  //   gradients.push(gradientBg)

  //   if (e.type === 'click') {
  //     localStorage.setItem("localGradient", `${newGradient}`);
  //     localStorage.setItem("localGradientTwo", `${returnColor}`);
  //   };

  //   cardForm.children[0].style.background = localStorage.getItem('localGradient')
  //   cardForm.children[1].style.background = localStorage.getItem('localGradientTwo')
  //   gradientWheel.style.background = localStorage.getItem('localGradient')
  //   cardForm.children[0].classList.remove('blur')
  //   cardForm.children[1].classList.remove('blur')
  //   cardForm.children[2].classList.remove('blur')
  //   document.querySelector('.gradient-options').remove()
  // }
  return (
    <div className="gradient-wheel" id="gradient-wheel"></div>
  )
}

export default RuedaColor