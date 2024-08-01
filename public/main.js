gsap.registerPlugin(ScrollTrigger)


ScrollTrigger.create({
    trigger: ".hero",
    start: "bottom bottom",
    end: "top top",
    endTrigger: ".content",
    pin: true,
    pinSpacing: false,
  });

const splitTypes = document.querySelectorAll('.reveal-type')

splitTypes.forEach((char,i) => {
    const text = new SplitType(char, { types: 'words'})

    gsap.from(text.words, {
        scrollTrigger:{
            trigger: char,
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
            markers: false
        },
        y: 100,
        opacity: 0,
        stagger: 0.1
    })
})

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

var cursor = document.querySelector('.blob');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;

    const timeStr = hours + ':' + minutesStr + ' ' + ampm;
    timeElement.textContent = timeStr;
}

setInterval(updateTime, 1000);
updateTime();

function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        setTimeout(() => {
            menu.style.display = 'none';
        }, 500); // wait for the animation to finish
    } else {
        menu.style.display = 'flex';
        setTimeout(() => {
            menu.classList.add('show');
        }, 10); // small delay to ensure the element is displayed before animation
    }
}

function contactMe() {
    alert('Contact me clicked!');
}

document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".card", {
        scrollTrigger: {
            trigger: ".service-cards",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reset",
        },
        opacity: 0,
        y: 20,
        stagger: 0.2,
        duration: 1
    });
});
var swiper = new Swiper(".slide-container", {
    slidesPerView: 4,
    spaceBetween: 20,
    sliderPerGroup: 4,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 4,
      },
    },
  });
  document.addEventListener("DOMContentLoaded", function() {
    const words = ["logo's", "websites", "brochures", "designs", "video editing"];
    let wordIndex = 0;
    let charIndex = 0;
    const typingText = document.querySelector('.typing-text');
    const typingSpeed = 150; // Adjust typing speed
    const erasingSpeed = 100; // Adjust erasing speed
    const delayBetweenWords = 2000; // Delay between words

    function typeWord() {
        if (charIndex < words[wordIndex].length) {
            typingText.textContent += words[wordIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeWord, typingSpeed);
        } else {
            setTimeout(eraseWord, delayBetweenWords);
        }
    }

    function eraseWord() {
        if (charIndex > 0) {
            typingText.textContent = words[wordIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseWord, erasingSpeed);
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeWord, typingSpeed);
        }
    }

    typeWord();
});
