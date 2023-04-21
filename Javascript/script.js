"user strict";

function scrollUp() {
  const scrollStep = -window.scrollY / (500 / 10);
  const scrollInterval = setInterval(() => {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
}


const checkbox = document.querySelector("#checkbox");
checkbox.addEventListener("change", function () {
  if (this.checked) {
    if (window.innerWidth < 768) {
      document.body.style.overflow = "hidden";
      document.addEventListener("wheel", preventScroll);
    }
  } else {
    if (window.innerWidth < 768) {
      document.body.style.overflow = "auto";
      document.removeEventListener("wheel", preventScroll);
    }
  }
});

function preventScroll(e) {
  e.preventDefault();
}

window.addEventListener("resize", function () {
  if (window.innerWidth >= 768) {
    document.body.style.overflow = "auto";
    document.removeEventListener("wheel", preventScroll);
    checkbox.checked = false;
  } else {
    if (checkbox.checked) {
      document.body.style.overflow = "hidden";
      document.addEventListener("wheel", preventScroll);
    }
  }
});

