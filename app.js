// CHANGE HEIGHT OF MENU WHEN SCROLLING
const mainHeader = document.querySelector('#main-header')
const mainHTML = document.documentElement
const mainBody = document.body
window.addEventListener('scroll', () => {
    if (mainHTML.scrollTop > 40) {
        mainHeader.classList.add('active')
    } else {
        mainHeader.classList.remove('active')
    }
})



// HIDE-SHOW HEADER ON SCROLL
let prevScrollpos = window.scrollY
let headerHeight = mainHeader.offsetHeight
window.addEventListener('scroll', () => {
    const currentScrollPos = window.scrollY
    headerHeight = mainHeader.offsetHeight
    if (prevScrollpos > currentScrollPos) {
        mainHeader.style.top = '0'
    } else {
        mainHeader.style.top = `-${headerHeight}px`
    }
    prevScrollpos = currentScrollPos
})



// HAMBURGER MENU
const hamburger = document.querySelector('.hamburger')
const navbar = document.querySelector('.nav-links')

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active')
    mainHTML.classList.toggle('no-scroll')
    mainBody.classList.toggle('no-scroll')
})



// MAGNETIC BUTTONS
const cursor = document.querySelector('.cursor')
const btns = document.querySelectorAll('.btn')

btns.forEach(el => el.addEventListener('mousemove', function(e) {
    cursor.classList.add('active')
    const pos = this.getBoundingClientRect()
    const mx = e.clientX - pos.left - pos.width/2
    const my = e.clientY - pos.top - pos.height/2
    
    this.style.transform = 'translate('+ mx * 0.1 +'px, '+ my * 0.2 +'px)'
    this.style.transform += 'rotate3d('+ mx * -0.1 +', '+ my * -0.2 +', 0, 12deg)'
    this.children[0].style.transform = 'translate('+ mx * 0.025 +'px, '+ my * 0.075 +'px)'
}))

btns.forEach(el => el.addEventListener('mouseleave', function() {
    cursor.classList.remove('active')
    this.style.transform = 'translate3d(0px, 0px, 0px)'
    this.style.transform += 'rotate3d(0, 0, 0, 0deg)'
    this.children[0].style.transform = 'translate3d(0px, 0px, 0px)'
}))

// --- CURSOR
document.addEventListener('mousemove', function(e) {
    cursor.style.left = (e.pageX - 25) + 'px'
    cursor.style.top = (e.pageY - 25) + 'px'
})






// COUNTER ANIMATION - REFERENCE
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
import {SplitText} from "./SplitText.min.js"

const items = document.querySelectorAll("#reference .data")

gsap.from(items, {
    scrollTrigger: {
        trigger: "#reference",
        start: "-300px center",
    },
  textContent: 0,
  duration: 4,
  ease: "power1.out",
  snap: { textContent: 1 },
  stagger: {
    onUpdate: function() {
      this.targets()[0].innerHTML = numberWithCommas(Math.ceil(this.targets()[0].textContent))
    },
  }
})


function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}





// TEXT REVEAL ON SCROLL
// gsap.config({ trialWarn: false })
let smoother = ScrollSmoother.create({
  smooth: 1,
  content: "main",
})

let split = new SplitText(".fill-txt h2", { type: "lines" })
let masks
function makeItHappen() {
  masks = []
  split.lines.forEach((target) => {
    let mask = document.createElement("span")
    mask.className = "mask"
    target.append(mask)
    masks.push(mask)
    gsap.to(mask, {
      scaleX: 0,
      transformOrigin: "right center",
      ease: "none",
      scrollTrigger: {
        trigger: target,
        // markers: {
        //   startColor: "white",
        //   endColor: "#42a6e0",
        //   fontSize: "12px",
        //   indent: 10
        // },
        scrub: true,
        start: "top center",
        end: "bottom center"
      }
    })
  })
}

makeItHappen()






// CLIENTS ANIMATION HOVER
const clientBoxes = document.querySelectorAll('#clients .box')
document.body.onmousemove = e => {
  for(const date of clientBoxes) {
    const rect = date.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

    date.style.setProperty("--mouse-x", `${x}px`)
    date.style.setProperty("--mouse-y", `${y}px`)
  };
}