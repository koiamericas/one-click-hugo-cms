import Instafeed from "instafeed.js";

if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", (user) => {
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
    btn.innerHTML = "<div class='text'>Show less</div><img src='/img/icons/down-white-arrow.svg' class='down-white-arrow show-mobile-only rotate'/>";
  } else {
    message.classList.add("show-less");
    btn.innerHTML = "<div class='text'>Keep reading</div><img src='/img/icons/down-white-arrow.svg' class='down-white-arrow show-mobile-only'/>";
  }
});

/*
-------------------------------------------------------------------------------

Type 1 

-------------------------------------------------------------------------------
*/

const userFeed_1 = new Instafeed({

  target: "instafeed-v1",
  get: "user",
  userId: "1720585271",
  // clientId: "02b47e1b98ce4f04adc271ffbd26611d",
  accessToken: "1720585271.1677ed0.e125bc0032d2415e8aa8a4a6a330ba53",
  resolution: "standard_resolution",
  template: '<div><div class="instagram-card"><a href="{{link}}" target="_blank"><img src="{{image}}"/></a><div class="instagram-card-container"><p class="instagram-caption">{{caption}}</p><p class="instagram-image-text-container"><img src="{{model.user.profile_picture}}" class="instagram-profile-picture"/><a href="{{link}}" target="_blank"><span class="instagram-username">{{model.user.username}} • {{model.created_time}}</span></a></p></div></div></div>',
  sortBy: "most-recent",
  limit: 12,
  links: true,
  orientation: "portrait",
  height: 200,
  filter: function(image) {

    var date = new Date(image.created_time * 1000);
    var m = date.getMonth();
    var d = date.getDate();
    var y = date.getFullYear();

    var month_names = new Array ();
    month_names[month_names.length] = "Jan";
    month_names[month_names.length] = "Feb";
    month_names[month_names.length] = "Mar";
    month_names[month_names.length] = "Apr";
    month_names[month_names.length] = "May";
    month_names[month_names.length] = "Jun";
    month_names[month_names.length] = "Jul";
    month_names[month_names.length] = "Aug";
    month_names[month_names.length] = "Sep";
    month_names[month_names.length] = "Oct";
    month_names[month_names.length] = "Nov";
    month_names[month_names.length] = "Dec";

    var thetime = month_names[m] + " " + d + " " + y;

    image.created_time = thetime;

    return true;
  }

});

userFeed_1.run();

/*
-------------------------------------------------------------------------------

Type 2

-------------------------------------------------------------------------------
*/

const userFeed_2 = new Instafeed({
  
  target: "instafeed-v2",
  get: "user",
  userId: "1720585271",
  // clientId: "02b47e1b98ce4f04adc271ffbd26611d",
  accessToken: "1720585271.1677ed0.e125bc0032d2415e8aa8a4a6a330ba53",
  resolution: "standard_resolution",
  template: '<div><div class="instagram-card"><a href="{{link}}" target="_blank"><img src="{{image}}"/></a><div class="instagram-card-container"><p class="instagram-caption">{{caption}}</p><p class="instagram-image-text-container"><img src="{{model.user.profile_picture}}" class="instagram-profile-picture"/><a href="{{link}}" target="_blank"><span class="instagram-username">{{model.user.username}} • {{model.created_time}}</span></a></p></div></div></div>',
  sortBy: "most-recent",
  limit: 12,
  links: true,
  orientation: "portrait",
  height: 200,
  filter: function(image) {

    var date = new Date(image.created_time * 1000);
    var m = date.getMonth();
    var d = date.getDate();
    var y = date.getFullYear();

    var month_names = new Array ();
    month_names[month_names.length] = "Jan";
    month_names[month_names.length] = "Feb";
    month_names[month_names.length] = "Mar";
    month_names[month_names.length] = "Apr";
    month_names[month_names.length] = "May";
    month_names[month_names.length] = "Jun";
    month_names[month_names.length] = "Jul";
    month_names[month_names.length] = "Aug";
    month_names[month_names.length] = "Sep";
    month_names[month_names.length] = "Oct";
    month_names[month_names.length] = "Nov";
    month_names[month_names.length] = "Dec";

    var thetime = month_names[m] + " " + d + " " + y;

    image.created_time = thetime;

    return true;
  }

});

userFeed_2.run();

/*
-------------------------------------------------------------------------------

Type 3

-------------------------------------------------------------------------------
*/

const userFeed_3 = new Instafeed({
  
  target: "instafeed-v3",
  get: "user",
  userId: "1720585271",
  // clientId: "02b47e1b98ce4f04adc271ffbd26611d",
  accessToken: "1720585271.1677ed0.e125bc0032d2415e8aa8a4a6a330ba53",
  resolution: "standard_resolution",
  template: '<div><div class="instagram-card"><a href="{{link}}" target="_blank"><img src="{{image}}"/></a><div class="instagram-card-container"><p class="instagram-caption">{{caption}}</p><p class="instagram-image-text-container"><img src="{{model.user.profile_picture}}" class="instagram-profile-picture"/><a href="{{link}}" target="_blank"><span class="instagram-username">{{model.user.username}} • {{model.created_time}}</span></a></p></div></div></div>',
  sortBy: "most-recent",
  limit: 12,
  links: true,
  orientation: "portrait",
  height: 200,
  filter: function(image) {

    var date = new Date(image.created_time * 1000);
    var m = date.getMonth();
    var d = date.getDate();
    var y = date.getFullYear();

    var month_names = new Array ();
    month_names[month_names.length] = "Jan";
    month_names[month_names.length] = "Feb";
    month_names[month_names.length] = "Mar";
    month_names[month_names.length] = "Apr";
    month_names[month_names.length] = "May";
    month_names[month_names.length] = "Jun";
    month_names[month_names.length] = "Jul";
    month_names[month_names.length] = "Aug";
    month_names[month_names.length] = "Sep";
    month_names[month_names.length] = "Oct";
    month_names[month_names.length] = "Nov";
    month_names[month_names.length] = "Dec";

    var thetime = month_names[m] + " " + d + " " + y;

    image.created_time = thetime;

    return true;
  }

});

userFeed_3.run();

window.onload = function() {

  var slider_v1 = tns({
    container: "#instafeed-v1",
    items: 1,
    slideBy: "page",
    controlsText: ['', ''],
    arrowKeys: true,
    speed: 500,
    autoplay: true,
    autoplayTimeout: 7500,
    gutter: 10,
    responsive: {
      860: {
        items: 3,
      },
      650: {
        items: 2,
      }
    }
  });

  var slider_v2 = tns({
    container: "#instafeed-v2",
    items: 1,
    slideBy: "page",
    controlsText: ['', ''],
    arrowKeys: true,
    speed: 500,
    autoplay: true,
    autoplayTimeout: 7500,
    gutter: 10,
    responsive: {
      860: {
        items: 3,
      },
      650: {
        items: 2,
      }
    }
  });

  var slider_v3 = tns({
    container: "#instafeed-v3",
    items: 1,
    slideBy: "page",
    controlsText: ['', ''],
    arrowKeys: true,
    speed: 500,
    autoplay: true,
    autoplayTimeout: 7500,
    gutter: 10,
    responsive: {
      860: {
        items: 3,
      },
      650: {
        items: 2,
      }
    }
  });

  document.getElementsByClassName("tns-outer")[0].classList.add("v1");

  document.getElementsByClassName("tns-outer")[1].classList.add("v2");

  document.getElementsByClassName("tns-outer")[2].classList.add("v3");

}
