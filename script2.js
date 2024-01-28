window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopBtn").style.opacity = "1";
  } else {
    document.getElementById("scrollToTopBtn").style.opacity = "0";
  }
}
document
  .getElementById("scrollToTopBtn")
  .addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
