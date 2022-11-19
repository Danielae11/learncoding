//CARAOUSEL DOCTOR STRANGE

const dot = document.querySelectorAll(".dot");
const containerSlide = document.querySelectorAll(".container-slide");

let current = 0;

dot.forEach((slide, index) => {
    slide.addEventListener("click", function() {
        changeDots(this);
        nextSlide(index);
    });
});

function changeDots(dots) {
    dot.forEach(slide => {
        slide.classList.remove("active");
    });
    dots.classList.add("active");
}

function nextSlide(pageNumber) {
    const nextPage = containerSlide[pageNumber];
    const currentPage = containerSlide[current];

    nextPage.style.transform = "translateX(0%)";
    currentPage.style.transform = "translateX(-100%)";

    current = pageNumber;
}

//CARAOUSEL RECOMENDED

var slideIndex = 1;
showSlide(slideIndex);

function onSlide(n) {
    showSlide(slideIndex += n)
}

function showSlide(n) {
    var i;
    var slides = document.getElementsByClassName("recomended-slider");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

//INDICATOR COLOR NAV-CONTENT MENU

function navContentMenu() {
    const containerButton = document.querySelectorAll(".container-button");

    containerButton.forEach((color, index) => {
        color.addEventListener("click", function() {
            getColor(this);
        });
    });

    function getColor(get) {
        containerButton.forEach(color => {
            color.classList.remove("indicator");
        })
        get.classList.add("indicator");
    }
}
navContentMenu();

//INDICATOR COLOR NAV GENRE

function NavGenre() {
    const genre = document.querySelectorAll(".genre div");

    genre.forEach((color, index) => {
        color.addEventListener("click", function() {
            getColor(this);
        });
    });

    function getColor(get) {
        genre.forEach(color => {
            color.classList.remove("indicator");
        })
        get.classList.add("indicator");
    }
}
NavGenre();

//SEARCH ENGINE

function searchEngine() {
    const searchBox = document.querySelector(".search-box");
    const typingBox = searchBox.querySelector(".search-box input");
    const dataName = searchBox.querySelector(".search-box ul");
    let dataSearch = [
        "Avengers Infinty War",
        "Black Panther",
        "Black Widow",
        "Captain Marvel",
        "Deadpool",
        "Doctor Strange: In The Multiverse of Madness",
        "Flash: Season 8",
        "Guardians",
        "Spider-Man: No Way Home",
        "Star Wars",
        "Thor Ragnarok",
        "Thor Thunder"
    ];

    typingBox.onkeyup = (e) => {
        let userData = e.target.value;
        let emptyBox = [];
        if(userData){
            emptyBox = dataSearch.filter((data) => {
                return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
            });
            emptyBox = emptyBox.map((data) => {
                return data = '<li>' + data + '<li>';
            });
            dataName.classList.add("show");
        }else {
            dataName.classList.remove("show");
        }
        showData(emptyBox);
    }

    function showData(search) {
        let searchName;
        if(!search.length){
            userValue = typingBox.value;
            searchName =  '<li>' + userValue;
        }else {
            searchName = search.join('');
        }
        dataName.innerHTML = searchName;
    }
}
searchEngine();