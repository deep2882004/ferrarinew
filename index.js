const btnracing = document.querySelector(".racing-toogle");
const content1 = document.querySelector(".back-ground-image");
const content2 = document.querySelector(".content-2");
const cross = document.querySelector(".cross-img");

btnracing.addEventListener("click", (e) => {
  e.preventDefault();
  content1.style.display = "none";
  content2.style.display = "flex";
  document.body.style.overflow = "hidden";

  setTimeout(() => {
    content2.classList.add("show");
  }, 10);
});

cross.addEventListener("click", () => {
  content2.classList.remove("show");

  setTimeout(() => {
    content1.style.display = "block";
    content2.style.display = "none";
    document.body.style.overflow = "auto";
  }, 300);
});

// content3 sports cars toogle
const btnsportscar = document.querySelector(".sportscars-toogle");
const content11 = document.querySelector(".back-ground-image");
const content3 = document.querySelector(".content-3");
const cross1 = document.querySelector(".cross-img-3");

btnsportscar.addEventListener("click", (e) => {
  e.preventDefault();
  content11.style.display = "none";
  content3.style.display = "flex";
  document.body.style.overflow = "hidden";

  setTimeout(() => {
    content3.classList.add("show");
  }, 10);
});

cross1.addEventListener("click", () => {
  content3.classList.remove("show");
  setTimeout(() => {
    content11.style.display = "block";
    content3.style.display = "none";
    document.body.style.overflow = "auto";
  }, 300);
});

// content collection toogle

const collectiontoggle = document.querySelector(".collection-toogle");
const content111 = document.querySelector(".back-ground-image");
const content4 = document.querySelector(".content-4");
const cross2 = document.querySelector(".cross-img-4");

collectiontoggle.addEventListener("click", (e) => {
  e.preventDefault();
  content111.style.display = "none";
  content4.style.display = "flex";
  document.body.style.overflow = "hidden";

  setTimeout(() => {
    content4.classList.add("show");
  }, 10);
});

cross2.addEventListener("click", () => {
  content4.classList.remove("show");
  setTimeout(() => {
    content111.style.display = "block";
    content4.style.display = "none";
    document.body.style.overflow = "auto";
  }, 300);
});

//experiences toggle

const experiencestoggle = document.querySelector(".experiences-toggle");
const content1111 = document.querySelector(".back-ground-image");
const content5 = document.querySelector(".content-5");
const cross3 = document.querySelector(".cross-img-5");

experiencestoggle.addEventListener("click", (e) => {
  e.preventDefault();
  content1111.style.display = "none";
  content5.style.display = "flex";
  document.body.style.overflow = "hidden";

  setTimeout(() => {
    content5.classList.add("show");
  }, 10);
});

cross3.addEventListener("click", () => {
  content5.classList.remove("show");
  setTimeout(() => {
    content1111.style.display = "block";
    content5.style.display = "none";
    document.body.style.overflow = "auto";
  }, 300);
});

//about us toggle

const aboutustoggle = document.querySelector(".aboutus-toogle");
const content11111 = document.querySelector(".back-ground-image");
const content6 = document.querySelector(".content-6");
const cross4 = document.querySelector(".cross-img-6");

aboutustoggle.addEventListener("click", (e) => {
  e.preventDefault();
  content11111.style.display = "none";
  content6.style.display = "flex";
  document.body.style.overflow = "hidden";

  setTimeout(() => {
    content6.classList.add("show");
  }, 10);
});

cross4.addEventListener("click", () => {
  content6.classList.remove("show");
  setTimeout(() => {
    content11111.style.display = "block";
    content6.style.display = "none";
    document.body.style.overflow = "auto";
  }, 300);
});

ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 1500,
  delay: 300,
});

ScrollReveal().reveal(".middle-text", {
  delay: 300,
  origin: "bottom",
  interval: 200,
});

ScrollReveal().reveal(".text", { delay: 300, origin: "bottom", interval: 200 });
ScrollReveal().reveal(".car-inforamtion-container", {
  delay: 300,
  origin: "top",
});

ScrollReveal().reveal(".grid-image1", { delay: 200, origin: "top" });
ScrollReveal().reveal(".grid-image2", { delay: 200, origin: "top" });
ScrollReveal().reveal(".grid-image3", { delay: 200, origin: "top" });
ScrollReveal().reveal(".grid-image4", { delay: 200, origin: "top" });
ScrollReveal().reveal(".grid-image5", { delay: 200, origin: "top" });
ScrollReveal().reveal(".grid-image6", { delay: 200, origin: "top" });

//    hover

const hovertext = document.getElementById("hovertext-2");
const hovertext1 = document.getElementById("hovertext-3");
const hovertext2 = document.getElementById("hovertext-4");
const hovertext4 = document.getElementById("hovertext-1");
const hoverimage = document.querySelector(".hover-image-1");

hovertext.addEventListener("mouseover", () => {
  hoverimage.style.opacity = 0;
  setTimeout(() => {
    hoverimage.src = "/images/hoverimage2.jpg";
    hoverimage.style.opacity = 1;
  }, 400);
});

hovertext1.addEventListener("mouseover", () => {
  hoverimage.style.opacity = 0;
  setTimeout(() => {
    hoverimage.src = "/images/hoverimage3.jpg";
    hoverimage.style.opacity = 1;
  }, 400);
});
hovertext2.addEventListener("mouseover", () => {
  hoverimage.style.opacity = 0;
  setTimeout(() => {
    hoverimage.src = "/images/hoverimage4.jpg";
    hoverimage.style.opacity = 1;
  }, 400);
});

hovertext4.addEventListener("mouseover", () => {
  hoverimage.style.opacity = 0;
  setTimeout(() => {
    hoverimage.src = "/images/hoverimage1.jpg";
    hoverimage.style.opacity = 1;
  }, 400);
});
//   sports car hover

const hovertextcontent3 = document.getElementById("hovertext-content-3-2");
const hovertextcontent31 = document.getElementById("hovertext-content-3-3");
const hovertextcontent32 = document.getElementById("hovertext-content-3-4");
const hovertextcontent33 = document.getElementById("hovertext-content-3-1");
const hovertextcontent34 = document.querySelector(".hover-image-2");

hovertextcontent3.addEventListener("mouseover", () => {
  hovertextcontent34.style.opacity = 0;
  setTimeout(() => {
    hovertextcontent34.src = "/images/hoverimagecontent-2-1.jpg";
    hovertextcontent34.style.opacity = 1;
  }, 400);
});

hovertextcontent31.addEventListener("mouseover", () => {
  hovertextcontent34.style.opacity = 0;
  setTimeout(() => {
    hovertextcontent34.src = "/images/hoverimagecontent-2-2.jpg";
    hovertextcontent34.style.opacity = 1;
  }, 400);
});
hovertextcontent32.addEventListener("mouseover", () => {
  hovertextcontent34.style.opacity = 0;
  setTimeout(() => {
    hovertextcontent34.src = "/images/hoverimagecontent-2-3.jpg";
    hovertextcontent34.style.opacity = 1;
  }, 400);
});

hovertextcontent33.addEventListener("mouseover", () => {
  hovertextcontent34.style.opacity = 0;
  setTimeout(() => {
    hovertextcontent34.src = "/images/hoverimagecontent2.jpg";
    hovertextcontent34.style.opacity = 1;
  }, 400);
});

// collection hover effects

const hovertextcontent41 = document.getElementById("hovertext-content-4-2");
const hovertextcontent42 = document.getElementById("hovertext-content-4-3");
const hovertextcontent43 = document.getElementById("hovertext-content-4-4");
const hovertextcontent44 = document.getElementById("hovertext-content-4-5");
const hovertextcontent45 = document.getElementById("hovertext-content-4-6");
const hovertextcontent46 = document.getElementById("hovertext-content-4-7");
const hovertextcontent47 = document.getElementById("hovertext-content-4-8");
const hovertextcontent48 = document.getElementById("hovertext-content-4-9");
const hovertextcontent49 = document.getElementById("hovertext-content-4-1");
const hoverimagecontent4 = document.querySelector(".hover-image-3");

hovertextcontent41.addEventListener("mouseover", () => {
  hoverimagecontent4.style.opacity = 0;
  setTimeout(() => {
    hoverimagecontent4.src = "/images/collection2.jpg";
    hoverimagecontent4.style.opacity = 1;
  }, 400);
});

hovertextcontent42.addEventListener("mouseover", () => {
  hoverimagecontent4.style.opacity = 0;
  setTimeout(() => {
    hoverimagecontent4.src = "/images/collection3.jpg";
    hoverimagecontent4.style.opacity = 1;
  }, 400);
});

hovertextcontent43.addEventListener("mouseover", () => {
  hoverimagecontent4.style.opacity = 0;
  setTimeout(() => {
    hoverimagecontent4.src = "/images/collection4.jpg";
    hoverimagecontent4.style.opacity = 1;
  }, 400);
});

hovertextcontent44.addEventListener("mouseover", () => {
  hoverimagecontent4.style.opacity = 0;
  setTimeout(() => {
    hoverimagecontent4.src = "/images/collection5.jpg";
    hoverimagecontent4.style.opacity = 1;
  }, 400);
});

hovertextcontent45.addEventListener("mouseover", () => {
  hoverimagecontent4.style.opacity = 0;
  setTimeout(() => {
    hoverimagecontent4.src = "/images/collection6.jpg";
    hoverimagecontent4.style.opacity = 1;
  }, 400);
});
hovertextcontent46.addEventListener("mouseover", () => {
  hoverimagecontent4.style.opacity = 0;
  setTimeout(() => {
    hoverimagecontent4.src = "/images/coolection7.jpg";
    hoverimagecontent4.style.opacity = 1;
  }, 400);
});

hovertextcontent47.addEventListener("mouseover", () => {
  hoverimagecontent4.style.opacity = 0;
  setTimeout(() => {
    hoverimagecontent4.src = "/images/collection8.jpg";
    hoverimagecontent4.style.opacity = 1;
  }, 400);
});

hovertextcontent48.addEventListener("mouseover", () => {
  hoverimagecontent4.style.opacity = 0;
  setTimeout(() => {
    hoverimagecontent4.src = "/images/collection9.jpg";
    hoverimagecontent4.style.opacity = 1;
  }, 400);
});

hovertextcontent49.addEventListener("mouseover", () => {
  hoverimagecontent4.style.opacity = 0;
  setTimeout(() => {
    hoverimagecontent4.src = "/images/collection1.jpg";
    hoverimagecontent4.style.opacity = 1;
  }, 400);
});

//experiences hover effects

const hovertextcontent51 = document.getElementById("hovertext-content-5-2");
const hovertextcontent52 = document.getElementById("hovertext-content-5-3");
const hovertextcontent53 = document.getElementById("hovertext-content-5-4");
const hovertextcontent54 = document.getElementById("hovertext-content-5-5");
const hovertextcontent55 = document.getElementById("hovertext-content-5-1");
const hoverimagecontent5 = document.querySelector(".hover-image-4");

hovertextcontent51.addEventListener("mouseover", () => {
  hoverimagecontent5.style.opacity = 0;
  setTimeout(() => {
    hoverimagecontent5.src = "/images/experiences2.jpg";
    hoverimagecontent5.style.opacity = 1;
  }, 400);
});

hovertextcontent52.addEventListener("mouseover", () => {
  hoverimagecontent5.style.opacity = 0;
  setTimeout(() => {
    hoverimagecontent5.src = "/images/experiences3.jpg";
    hoverimagecontent5.style.opacity = 1;
  }, 400);
});

hovertextcontent53.addEventListener("mouseover", () => {
  hoverimagecontent5.style.opacity = 0;
  setTimeout(() => {
    hoverimagecontent5.src = "/images/experiences4.jpg";
    hoverimagecontent5.style.opacity = 1;
  }, 400);
});

hovertextcontent54.addEventListener("mouseover", () => {
  hoverimagecontent5.style.opacity = 0;
  setTimeout(() => {
    hoverimagecontent5.src = "/images/experiences5.jpg";
    hoverimagecontent5.style.opacity = 1;
  }, 400);
});

hovertextcontent55.addEventListener("mouseover", () => {
  hoverimagecontent5.style.opacity = 0;
  setTimeout(() => {
    hoverimagecontent5.src = "/images/experiences1.jpg";
    hoverimagecontent5.style.opacity = 1;
  }, 400);
});

//about us hover effects

const hovertextcontent61 = document.getElementById("hovertext-content-6-2");
const hovertextcontent62 = document.getElementById("hovertext-content-6-3");
const hovertextcontent63 = document.getElementById("hovertext-content-6-4");
const hovertextcontent64 = document.getElementById("hovertext-content-6-5");
const hovertextcontent65 = document.getElementById("hovertext-content-6-1");
const hoverimagecontent6 = document.querySelector(".hover-image-5");

hovertextcontent61.addEventListener("mouseover", () => {
  hoverimagecontent6.style.opacity = 0;
  setTimeout(() => {
    hoverimagecontent6.src = "/images/aboutus2.jpg";
    hoverimagecontent6.style.opacity = 1;
  }, 400);
});

hovertextcontent62.addEventListener("mouseover", () => {
  hoverimagecontent6.style.opacity = 0;
  setTimeout(() => {
    hoverimagecontent6.src = "/images/aboutus3.jpg";
    hoverimagecontent6.style.opacity = 1;
  }, 400);
});

hovertextcontent63.addEventListener("mouseover", () => {
  hoverimagecontent6.style.opacity = 0;
  setTimeout(() => {
    hoverimagecontent6.src = "/images/aboutus4.jpg";
    hoverimagecontent6.style.opacity = 1;
  }, 400);
});

hovertextcontent64.addEventListener("mouseover", () => {
  hoverimagecontent6.style.opacity = 0;
  setTimeout(() => {
    hoverimagecontent6.src = "/images/aboutus5.jpg";
    hoverimagecontent6.style.opacity = 1;
  }, 400);
});

hovertextcontent65.addEventListener("mouseover", () => {
  hoverimagecontent6.style.opacity = 0;
  setTimeout(() => {
    hoverimagecontent6.src = "/images/aboutus1.jpg";
    hoverimagecontent6.style.opacity = 1;
  }, 400);
});

//////// play video auto loop

const videos = document.querySelectorAll("video");
const controls = document.querySelectorAll(".control");
let currentIndex = 0;

const texts = [
  ["Sports cars", "Start Your Engine", "Discover"],
  ["Racing", "Scuderia Ferrari", "Discover"],
  ["Collections", "Fall/Winter Collections ", "Discover"],
];

function updateText() {
  const textElements = document.querySelectorAll(".text");
  textElements.forEach((textElement, index) => {
    textElement.textContent = texts[currentIndex][index];
  });
}

videos[currentIndex].classList.add("active");
controls[currentIndex].classList.add("active");
updateText();

function playNextVideo() {
  const previousIndex = currentIndex; // Store the previous index

  currentIndex = (currentIndex + 1) % videos.length;

  document.querySelector(".all-videos").style.transform = `translateX(-${
    100 * currentIndex
  }vw)`;

  setTimeout(() => {
    videos[previousIndex].classList.remove("active");
    videos[currentIndex].classList.add("active");
    controls[previousIndex].classList.remove("active");
    controls[currentIndex].classList.add("active");
    updateText();
  }, 50);
  videos[currentIndex].play();
}

videos.forEach((video, index) => {
  video.addEventListener("ended", playNextVideo);
});

controls.forEach((control, index) => {
  control.addEventListener("click", () => {
    const previousIndex = currentIndex;

    currentIndex = index;
    document.querySelector(".all-videos").style.transform = `translateX(-${
      100 * currentIndex
    }vw)`;

    setTimeout(() => {
      videos[previousIndex].classList.remove("active");
      videos[currentIndex].classList.add("active");
      controls[previousIndex].classList.remove("active");
      controls[currentIndex].classList.add("active");
      updateText();
    }, 50);

    videos[currentIndex].play();
  });
});

//slide image

const textss = [
  {
    title: "The american <br> triple header reaches <br> new heights",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.",
    image: "/images/textimage1.jpg",
  },
  {
    title:
      "tailor made ferrari <br> roma spider: refined <br> and elegent <br> techniques bring an <br> innovative car to life",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.",
    image: "/images/textimage2.jpeg",
  },
  {
    title: "Precise muscular <br> sensuous",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.",
    image: "images/textimage3.jpeg",
  },
];

let currentIndex1 = 0;

const titleElement = document.getElementById("slider-title");
const paragraphElement = document.getElementById("slider-paragraph");
const imageElement = document.getElementById("slider-image");

function updateContent() {
  const currentText = textss[currentIndex1];

  document.querySelector(".all-text").classList.remove("active");
  document.querySelector(".text-images").classList.remove("active");

  setTimeout(() => {
    titleElement.innerHTML = currentText.title;
    paragraphElement.textContent = currentText.paragraph;
    imageElement.src = currentText.image;

    document.querySelector(".all-text").classList.add("active");
    document.querySelector(".text-images").classList.add("active");
  }, 500);
}

document.getElementById("left-arrow").addEventListener("click", () => {
  currentIndex1 = (currentIndex1 - 1 + textss.length) % textss.length;
  updateContent();
});

document.getElementById("right-arrow").addEventListener("click", () => {
  currentIndex1 = (currentIndex1 + 1) % textss.length;
  updateContent();
});

updateContent();

// for menu btn

const meunbtn = document.querySelector(".for-phone-menu-btn");
const menubnshow = document.querySelector(".nav-link");

meunbtn.addEventListener("click", () => {
  menubnshow.classList.toggle("active");
});
