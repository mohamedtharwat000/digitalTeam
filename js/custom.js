// Add active class to the current button (highlight it)
var btnContainer = document.querySelector("#BtnContainer");
var btns = btnContainer.querySelectorAll(".btn");
btns.forEach((btn)=> {
    btn.addEventListener("click", ()=> {
        var current = btnContainer.querySelector(".active");
        current.classList.remove("active");
        this.classList.add("active");
      });
});

// filter images
var portfolioImageContainer = document.querySelector("#portfolio-image-container");
var portfolioImage = portfolioImageContainer.querySelectorAll(".portfolio-image");
function filterSelection(filter){

    function showAll() {
        portfolioImage.forEach((image)=> {
            if (image.classList.contains("d-none")) {
                image.classList.remove("d-none");
            }
        });
    };

    if (filter === "all") {
        showAll();
    } else if (filter === "html") {
        showAll();
        var notHtml = portfolioImageContainer.querySelectorAll(".portfolio-image:not(.html)");
        notHtml.forEach((item)=>{
            item.classList.add("d-none")
        });
    } else if (filter === "photoshop") {
        showAll();
        var notHtml = portfolioImageContainer.querySelectorAll(".portfolio-image:not(.photoshop)");
        notHtml.forEach((item)=> {
            item.classList.add("d-none")
        });
    } else if (filter === "wordpress") {
        showAll();
        var notHtml = portfolioImageContainer.querySelectorAll(".portfolio-image:not(.wordpress)");
        notHtml.forEach((item)=> {
            item.classList.add("d-none")
        });
    } else if (filter === "mobile") {
        showAll();
        var notHtml = portfolioImageContainer.querySelectorAll(".portfolio-image:not(.mobile)");
        notHtml.forEach((item)=> {
            item.classList.add("d-none")
        });
    }
        
};
