import Instafeed from "instafeed.js";

/*
-------------------------------------------------------------------------------
Netlify login
-------------------------------------------------------------------------------
*/

if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", (user) => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

/*
-------------------------------------------------------------------------------
Home page show more button
-------------------------------------------------------------------------------
*/

var btn = document.getElementById("show-more-btn");

var message = document.getElementById("izquiero-message");

if (btn) {

  btn.addEventListener("click", function() {
    if (message.classList.contains("show-less")){
      message.classList.remove("show-less");
      btn.innerHTML = "<div class='text'>Show less</div><img src='/img/icons/down-white-arrow.svg' class='down-white-arrow show-mobile-only rotate'/>";
    } else {
      message.classList.add("show-less");
      btn.innerHTML = "<div class='text'>Keep reading</div><img src='/img/icons/down-white-arrow.svg' class='down-white-arrow show-mobile-only'/>";
    }
  });
}

/*
-------------------------------------------------------------------------------
Instagram feed
-------------------------------------------------------------------------------
*/

if (document.getElementById("instafeed")){

  const userFeed = new Instafeed({
    
    target: "instafeed",
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
  
  userFeed.run();
  
  window.onload = function() {
  
    var slider = tns({
      container: "#instafeed",
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
  
  }

}

/*
-------------------------------------------------------------------------------
Hotels table filter
-------------------------------------------------------------------------------
*/

var filters = document.getElementsByClassName("filter-button");

if (filters.length > 0) {

  var applyFilter = function() {

    for (var i = 0; i < filters.length; i++) {
      filters[i].classList.remove("selected");
    };

    this.classList.add("selected");

    var value = this.innerText;

    var tableRows = document.getElementsByClassName("hotel-row");

    for (var j = 0; j < tableRows.length; j++) {
      
      tableRows[j].classList.remove("hidden");

    };

    if (value != "All") {

      for (var j = 0; j < tableRows.length; j++) {

        if (tableRows[j].children[1].innerText == value.trim()) {

          tableRows[j].classList.remove("hidden");

        } else {

          tableRows[j].classList.add("hidden");

        };
        
      };
      
    };

  };

  for (var i = 0; i < filters.length; i++) {
      filters[i].addEventListener('click', applyFilter, false);
  };

};

/*
-------------------------------------------------------------------------------
Hotels table show more on mobile
-------------------------------------------------------------------------------
*/

var moreInfoButton = document.getElementsByClassName("view-info");

if (moreInfoButton.length > 0) {

  var showMoreInfoOnTable = function() {
    var info = this.nextElementSibling;
    if (this.classList.contains("down")) {
      this.classList.remove("down");
      this.classList.add("up");
      if (info.classList.contains("collapsed")) {
        info.classList.remove("collapsed");
      };
    } else {
      this.classList.remove("up");
      this.classList.add("down");
      if (!info.classList.contains("collapsed")) {
        info.classList.add("collapsed");
      };
    };
  };

  for (var i = 0; i < moreInfoButton.length; i++) {
    moreInfoButton[i].addEventListener('click', showMoreInfoOnTable, false);
  };

}