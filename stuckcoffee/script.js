gsap.registerPlugin(Flip);
function indicatorSlide() {
    const button = document.querySelectorAll(".button-nav");
    const indicatorNav = document.querySelector(".indicator-line");
    const contentSlider = document.querySelectorAll(".content");
    let current = 0;

    button.forEach((slide, index) => {
        slide.addEventListener("click", function() {
            getIndicator(this);
            nextPage(index);
        });
    });

    function getIndicator(actived) {
        button.forEach(color => {
            color.classList.remove("indicator");
        });
        actived.classList.add("indicator");
        const state = Flip.getState(indicatorNav);
            actived.appendChild(indicatorNav);
            Flip.from(state, {duration: 0.8, absolute: true, ease: "elastic.out(1,0.5)"})
    }

    function nextPage(pageNumber) {
        const currentPage = contentSlider[current];
        const nextPage = contentSlider[pageNumber];
        const tl = new TimelineMax();

        tl
            .fromTo(currentPage, 0.5, {x: "0%"}, {x: "120%"})
            .fromTo(nextPage, 0.5, {x: "120%"}, {x: "0%"})

    current = pageNumber;
    }
}
indicatorSlide();

function chooseCoffee() {
    const boxCoffee = document.querySelectorAll(".box-choose");
    const sliderCoffee = document.querySelectorAll(".slider-ourproduct");
    
    let current = 0;

    boxCoffee.forEach((slide, index) => {
        slide.addEventListener("click", function() {
            getIndicator(this);
            nextPage(index);
        });
    });

    function getIndicator(indicator) {
        boxCoffee.forEach(slide => {
            slide.classList.remove("active");
        });
        indicator.classList.add("active");
    }

    function nextPage(pageNumber) {
        const currentPage = sliderCoffee[current];
        const nextPage = sliderCoffee[pageNumber];
        const tl = new TimelineMax();

        tl
            .fromTo(currentPage, 0.5, {y: "0%"}, {y: "110%"})
            .fromTo(nextPage, 0.5, {y: "110%"}, {y: "0%"})
    
    current = pageNumber;
    }
}
chooseCoffee();

function shoppingCart() {
    let buttonCart = document.querySelector(".nav-bar i");
    let buttoncloseCart = document.querySelector(".fa-xmark");
    let containerCart = document.querySelector(".container-cart");

    buttonCart.addEventListener("click", () => {
        containerCart.classList.add("show");
        buttonCart.classList.add("get-color");
    });

    buttoncloseCart.addEventListener("click", () => {
        containerCart.classList.remove("show");
        buttonCart.classList.remove("get-color");
    });

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", ready);
    }else {
        ready()
    }
    
    function ready() {
        let trashButton = document.getElementsByClassName("trash");
        for (let i = 0; i < trashButton.length; i++) {
            trashButton[i].addEventListener("click", removeProductCart);
        }

        let quantityNumber = document.getElementsByClassName("quantity-cart");
        for (let i = 0; i < quantityNumber.length; i++) {
            quantityNumber[i].addEventListener("change", changeValue)
        }

        let buttonAddCart = document.getElementsByClassName("add-to-cart");
        for (let i = 0; i < buttonAddCart.length; i++) {
            buttonAddCart[i].addEventListener("click", addToCart)
        }
    }
    
    function removeProductCart(trash) {
        let romoveProduct = trash.target;
        romoveProduct.parentElement.remove();
        updateTotal();
    }

    function changeValue(quantity) {
        let buttonChange = quantity.target;
        if (isNaN(buttonChange.value) || buttonChange.value <= 0) {
            buttonChange.value = 1;
        }
        updateTotal();
    }

    function addToCart(cart) {
        let buttonAdd = cart.target;
        let product = buttonAdd.parentElement.parentElement.parentElement;
        let titleProduct = product.getElementsByClassName("title")[0].innerText;
        let priceProduct = product.getElementsByClassName("price-product")[0].innerText;
        let imageProduct = product.getElementsByClassName("image-product")[0].src;
        addProductToCart(titleProduct, priceProduct, imageProduct);
        updateTotal();
    }

    function addProductToCart(titleProduct, priceProduct, imageProduct) {
        let productCart = document.createElement("div");
        productCart.classList.add("product-cart")
        let contentCart = document.getElementsByClassName("content-cart")[0];
        let nameCart = contentCart.getElementsByClassName("title-cart");
        for (let i = 0; i < nameCart.length; i++) {
            if (nameCart[i].innerText === titleProduct) {
                alert("you already have this product in your cart");
                return
            }
        }
        let newContent = `<i class="fa-regular fa-trash-can trash"></i>
                            <img src="${imageProduct}" alt="" class="cappucino-cart macchiato-cart vanillaLatte-cart">
                            <div class="description-cart">
                                <h1 class="title-cart">${titleProduct}</h1>
                                <h2 class="price-cart">${priceProduct}</h2>
                                <input type="number" value="1" class="quantity-cart">
                        </div>`
        productCart.innerHTML = newContent;
        contentCart.append(productCart);
        productCart.getElementsByClassName("trash")[0].addEventListener("click", removeProductCart);
        productCart.getElementsByClassName("quantity-cart")[0].addEventListener("change", changeValue);
    }

    function updateTotal() {
        let contentCart = document.getElementsByClassName("content-cart")[0];
        let boxProduct = contentCart.getElementsByClassName("product-cart");
        let total = 0;
        for (let i = 0; i < boxProduct.length; i++) {
            let products = boxProduct[i];
            let prices = products.getElementsByClassName("price-cart")[0];
            let quantitys = products.getElementsByClassName("quantity-cart")[0];
            let price = parseFloat(prices.innerText.replace("$", ""));
            let quantity = quantitys.value;
            total = total + (price * quantity);
        }
        total = Math.round( total * 100) / 100;
        document.getElementsByClassName("total-cart")[0].innerText = '$' + total;
    }
}
shoppingCart();