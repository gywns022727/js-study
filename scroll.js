let observer = new IntersectionObserver((e) => {
  e.forEach((box) => {
    if (box.isIntersecting) {
      box.target.style.opacity = 1;
    } else {
      box.target.style.opacity = 0;
    }
  });
});

let p = document.querySelectorAll("p");

observer.observe(p[0]);
observer.observe(p[1]);
observer.observe(p[2]);
observer.observe(p[3]);
observer.observe(p[4]);
observer.observe(p[5]);
observer.observe(p[6]);
observer.observe(p[7]);
observer.observe(p[8]);
observer.observe(p[9]);
