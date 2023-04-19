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
