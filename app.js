const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
            {
                id: 1,
                title: "PLAYSTATON 4",
                price: 550,
                colors: [
                    {
                        code: "black",
                        img: "./img/Blackps4.png",
                    },
                    {
                        code: "white",
                        img: "./img/whiteps4.png",
                    },
                ],
            },
            {
                id: 2,
                title: "VIRTUAL REALITY 5",
                price: 200,
                colors: [
                    {
                        code: "white",
                        img: "./img/virtual5.png",
                    },
                    {
                        code: "black",
                        img: "./img/virtualB.png",
                    },
                ],
            },
            {
                id: 3,
                title: "DUALSCHOCKS 4",
                price: 95,
                colors: [
                    {
                        code: "black",
                        img: "./img/dualshock4.png",
                    },
                    {
                        code: "white",
                        img: "./img/Dualschock4.png",
                    },
                ],
            },
            {
                id: 4,
                title: "DUALSENS EDGE",
                price: 110,
                colors: [
                    {
                        code: "white",
                        img: "./img/dualsensedge.png",
                    },
                    {
                        code: "black",
                        img: "./img/Blackdualens5.png",
                    },
                ],
            },
            {
                id: 5,
                title: "PLATINIUM HEADPHONE",
                price: 215,
                colors: [
                    {
                        code: "Black",
                        img: "./img/casque.png",
                    },
                    {
                        code: "white",
                        img: "./img/casqueB.png",
                    },
                ],
            },
            {
                id: 6,
                title: "HD CAMERA",
                price: 150,
                colors: [
                    {
                        code: "white",
                        img: "./img/hdcamera.png",
                    },
                    {
                        code: "black",
                        img: "./img/cameraB.png",
                    },
                ],  
            },    
     ];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
item.addEventListener("click", () => {
    // change the current slide
    wrapper.style.transform = `translateX(${-79.15 * index}vw)`;
    
    // change the article choose
    choosenProduct = products[index];

    // change the article content
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "Price : " + "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    // setting colors
    currentProductColors.forEach((color, index) => {
        color.style.backgroundColor = choosenProduct.colors[index].code;
     });
  });
});


currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display = "flex";
});

close.addEventListener("click", () => {
    payment.style.display = "none";
});