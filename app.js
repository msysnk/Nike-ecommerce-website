const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      // {
      //   code: "lightgray",
      //   img: "./img/crater2.png",
    
      // },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
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
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
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
const closeOtp = document.querySelector(".close-otp");
const payButton = document.querySelector(".payButton");

payButton.addEventListener("click", () => {
  payment.style.display = "none";
  document.querySelector(".otp").style.display = "flex";
  document.getElementById("otp-page").classList.add("active");
});

closeOtp.addEventListener("click", () => {
  payment.style.display = "none";
  document.querySelector(".otp").style.display = "none";
});

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});


function processPayment() {
  document.getElementById("otp-page").classList.remove("active");
  document.getElementById("processing-payment").classList.add("active");

  
  setTimeout(function () {
    var enteredOTP = document.getElementById("otpInput").value;

    if (enteredOTP === "1111") {
      showPaymentSuccess();
    } else {
      showPaymentFailed();
    }
  }, 2000);
}

function showPaymentSuccess() {
  document.getElementById("processing-payment").style.display = "none";
  document.getElementById("processing-payment").classList.remove("active");
  document.getElementById("payment-success").classList.add("active");

  var countdown = 4;
  var countdownElement = document.getElementById("countdown1");

  function updateCountdown() {
    countdown--;
    countdownElement.textContent = "Redirecting in " + countdown + " seconds...";
    countdownElement.style.color = "#383839";

    if (countdown <= 0) {
      clearInterval(countdownInterval);
      document.getElementById("payment-success").classList.remove("active");
      document.querySelector(".otp").style.display = "none";
      document.getElementById("processing-payment").style.display = "";
    }

  }

  var countdownInterval = setInterval(updateCountdown, 1000);
}

function showPaymentFailed() {
  document.getElementById("processing-payment").style.display = "none";
  document.getElementById("payment-success").style.display = "none";
  document.getElementById("processing-payment").classList.remove("active");
  document.getElementById("payment-failed").classList.add("active");

  var countdown = 4;
  var countdownElement = document.getElementById("countdown2");

  function updateCountdown() {
    countdown--;
    countdownElement.textContent = "Redirecting in " + countdown + " seconds...";
    countdownElement.style.color = "#383839";

    if (countdown <= 0) {
      clearInterval(countdownInterval);
      document.getElementById("payment-failed").classList.remove("active");
      document.querySelector(".otp").style.display = "none";
      document.getElementById("processing-payment").style.display = "";
      document.getElementById("payment-success").style.display = "";
    }
  }

  var countdownInterval = setInterval(updateCountdown, 1000);
}