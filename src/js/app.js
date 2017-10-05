// JS Goes here - ES6 supported
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

var btn = document.getElementById("show-more-btn");

var message = document.getElementById("izquiero-message");

btn.addEventListener("click", function() {
  if (message.classList.contains("show-less")){
    message.classList.remove("show-less");
    btn.innerHTML = "Show less" + "<img src='/img/icons/down-white-arrow.svg' class='down-white-arrow show-mobile-only rotate'/>";
  } else {
    message.classList.add("show-less");
    btn.innerHTML = "Keep reading" + "<img src='/img/icons/down-white-arrow.svg' class='down-white-arrow show-mobile-only'/>";
  }
});
