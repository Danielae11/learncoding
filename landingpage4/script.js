//CARAOUSEL DOCTOR STRANGE
function carouselAction() {
    const dotAction = document.querySelectorAll(".dot-action");
    const sliderAction = document.querySelectorAll(".slider-action");

    let current = 0;

    dotAction.forEach((slide, index) => {
        slide.addEventListener("click", function() {
            changeDots(this);
            nextSlide(index);
        });
    });

    function changeDots(dots) {
        dotAction.forEach(slide => {
            slide.classList.remove("active");
        });
        dots.classList.add("active");
    }

    function nextSlide(pageNumber) {
        const nextPage = sliderAction[pageNumber];
        const currentPage = sliderAction[current];

        nextPage.style.transform = "translateX(0%)";
        currentPage.style.transform = "translateX(-100%)";

        current = pageNumber;
    }
}
carouselAction();
function carouselAdventure() {
    const dotAdventure = document.querySelectorAll(".dot-adventure");
    const sliderAdventure = document.querySelectorAll(".slider-adventure");

    let current = 0;

    dotAdventure.forEach((slide, index) => {
        slide.addEventListener("click", function() {
            changeDots(this);
            nextSlide(index);
        });
    });

    function changeDots(dots) {
        dotAdventure.forEach(slide => {
            slide.classList.remove("active");
        });
        dots.classList.add("active");
    }

    function nextSlide(pageNumber) {
        const nextPage = sliderAdventure[pageNumber];
        const currentPage = sliderAdventure[current];

        nextPage.style.transform = "translateX(0%)";
        currentPage.style.transform = "translateX(-100%)";

        current = pageNumber;
    }
}
carouselAdventure();
function carouselComedy() {
    const dotComedy = document.querySelectorAll(".dot-comedy");
    const sliderComedy = document.querySelectorAll(".slider-comedy");

    let current = 0;

    dotComedy.forEach((slide, index) => {
        slide.addEventListener("click", function() {
            changeDots(this);
            nextSlide(index);
        });
    });

    function changeDots(dots) {
        dotComedy.forEach(slide => {
            slide.classList.remove("active");
        });
        dots.classList.add("active");
    }

    function nextSlide(pageNumber) {
        const nextPage = sliderComedy[pageNumber];
        const currentPage = sliderComedy[current];

        nextPage.style.transform = "translateX(0%)";
        currentPage.style.transform = "translateX(-100%)";

        current = pageNumber;
    }
}
carouselComedy();
function carouselHorror() {
    const dotHorror = document.querySelectorAll(".dot-horror");
    const sliderHorror = document.querySelectorAll(".slider-horror");

    let current = 0;

    dotHorror.forEach((slide, index) => {
        slide.addEventListener("click", function() {
            changeDots(this);
            nextSlide(index);
        });
    });

    function changeDots(dots) {
        dotHorror.forEach(slide => {
            slide.classList.remove("active");
        });
        dots.classList.add("active");
    }

    function nextSlide(pageNumber) {
        const nextPage = sliderHorror[pageNumber];
        const currentPage = sliderHorror[current];

        nextPage.style.transform = "translateX(0%)";
        currentPage.style.transform = "translateX(-100%)";

        current = pageNumber;
    }
}
carouselHorror();
//CARAOUSEL RECOMENDED

var slideIndex = 1;
showSlide(slideIndex);

function onSlide(n) {
    showSlide(slideIndex += n)
}

function showSlide(n) {
    var i;
    var slidesAction = document.getElementsByClassName("recomended-slider-action");
    var slidesAdventure = document.getElementsByClassName("recomended-slider-adventure");
    var slidesComedy = document.getElementsByClassName("recomended-slider-comedy");
    var slidesHorror = document.getElementsByClassName("recomended-slider-horror");
//ACTION    
    if (n > slidesAction.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slidesAction.length;
    }

    for (i = 0; i < slidesAction.length; i++) {
        slidesAction[i].style.display = "none";
    }

    slidesAction[slideIndex - 1].style.display = "block";

//ADVENTURE
    if (n > slidesAdventure.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slidesAdventure.length;
    }

    for (i = 0; i < slidesAdventure.length; i++) {
        slidesAdventure[i].style.display = "none";
    }

    slidesAdventure[slideIndex - 1].style.display = "block";

//COMEDY
    if (n > slidesComedy.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slidesComedy.length;
    }

    for (i = 0; i < slidesComedy.length; i++) {
        slidesComedy[i].style.display = "none";
    }

    slidesComedy[slideIndex - 1].style.display = "block";

//HORROR
    if (n > slidesHorror.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slidesHorror.length;
    }

    for (i = 0; i < slidesHorror.length; i++) {
        slidesHorror[i].style.display = "none";
    }

    slidesHorror[slideIndex - 1].style.display = "block";

}

//INDICATOR COLOR NAV-CONTENT MENU

function navContentMenu() {
    const containerButton = document.querySelectorAll(".container-button");
    const contentNav = document.querySelectorAll(".content-nav-menu");

    let current = 0;
    containerButton.forEach((color, index) => {
        color.addEventListener("click", function() {
            getColor(this);
            nextMenu(index);
        });
    });

    function getColor(get) {
        containerButton.forEach(color => {
            color.classList.remove("indicator");
        })
        get.classList.add("indicator");
    }

    function nextMenu(navNumber) {
        after = contentNav[navNumber];
        before = contentNav[current];

        after.style.transform = "translate(0%)";
        before.style.transform = "translate(-126%)";
        current = navNumber;
    }


}
navContentMenu();

//INDICATOR COLOR NAV GENRE 

function NavGenre() {
    const buttonGenre = document.querySelectorAll(".genre div");
    const containerMain = document.querySelectorAll(".container-main");

    let first = 0;
    buttonGenre.forEach((color, index) => {
        color.addEventListener("click", function() {
            getColor(this);
            changeGenre(index);
        });
    });

    function getColor(get) {
        buttonGenre.forEach(color => {
            color.classList.remove("indicator");
        })
        get.classList.add("indicator");
    }
    function changeGenre(genre) {
        const nextGenre = containerMain[genre];
        const currentGenre = containerMain[first];
        const nextClone = document.querySelectorAll(".container-clone")[genre];
        const currentClone = document.querySelectorAll(".container-clone")[first];

        nextGenre.style.opacity = "1";
        nextGenre.style.pointerEvents = "all";
        currentGenre.style.opacity = "0";
        currentGenre.style.pointerEvents = "none";
        nextClone.style.opacity = "1";
        nextClone.style.pointerEvents = "all";
        currentClone.style.opacity = "0";
        currentClone.style.pointerEvents = "none";
        first = genre;
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
        "Avatar", 
        "Barbarrian",
        "Black Panther",
        "Black Widow",
        "Bullet Train",
        "Captain Fantastic",
        "Captain Marvel",
        "Christmas",
        "Crocodile",
        "Crooked Man",
        "Deadpool",
        "Disenchanted",
        "Doctor Strange: In The Multiverse of Madness",
        "Dolittle",
        "Dora",
        "Dumbledore",
        "Dune",
        "Flash: Season 8",
        "Free Guy",
        "Guardians",
        "Halloween",
        "Horrible Bosses",
        "Isidious",
        "Instant Family",
        "It",
        "Jack Giant Slayer",
        "Jojo Rabbit",
        "Piggy",
        "Quite Place",
        "Slumberland",
        "Smile",
        "Spider-Man: No Way Home",
        "Star Wars",
        "Terrifer",
        "The Conjuring 1",
        "The Conjuring 2",
        "The Forest",
        "The Hobbit",
        "The Lost Lotteries",
        "The Millers",
        "The Northman",
        "The People Hate  Wedding",
        "Thor Ragnarok",
        "Thor Thunder",
        "Wanda Vision",
        "Wrong Turn",
        "Yes Day"
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

//ADD PLAYLIST

if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", ready)
}else {
    ready();
}

function ready() {
    var buttonPlaylist = document.getElementsByClassName("add-playlist");
    var buttonTrash = document.getElementsByClassName("fa-trash")
    for (var i = 0; i < buttonPlaylist.length; i++) {
        var playlist = buttonPlaylist[i];
        playlist.addEventListener("click", addPlaylist);
    }

    for (var i = 0; i < buttonTrash.length; i++) {
        buttonTrash[i].addEventListener("click", deleteBox);
    }
}

function addPlaylist(event) {
    var button = event.target;
    var movie = button.parentElement.parentElement.parentElement;
    var title = movie.getElementsByClassName("title")[0].innerText;
    var image = movie.getElementsByClassName("img-playlist")[0].src;
    console.log(title, image);
    addToPlaylist(title, image);
}

function addToPlaylist(title, image) {
    var contentPlaylist = document.createElement("div");
    contentPlaylist.classList.add("content-playlist");
    var filmPlaylist = document.getElementsByClassName("film-playlist")[0];
    var toGetAlert = filmPlaylist.getElementsByClassName("movie-name");
    for (var i = 0; i < toGetAlert.length; i++) {
        if (toGetAlert[i].innerText === title) {
            alert('You already have this movie');
            return;
        }
    }
    var newBoxPlaylist = `<img src="${image}" alt="">
                        <h1 class="movie-name">${title}</h1>
                        <i class="fa-solid fa-trash"></i>`;
    contentPlaylist.innerHTML = newBoxPlaylist;
    filmPlaylist.append(contentPlaylist);
    contentPlaylist.getElementsByClassName("fa-trash")[0].addEventListener("click", deleteBox);
}

function deleteBox(del) {
    let button = del.target;
    button.parentElement.remove();
}