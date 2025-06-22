const buttons = document.querySelectorAll(".item-btn");
const topBackground = document.querySelector(".card-image");
const text = document.getElementById("productText");

const productData = {
  1: {
    image: "ac2.jpg",
    text: "Steam Iron.  1.8M Long Cable"
  },
  2: {
    image: "Ac.jpg",
    text: " Split air conditioner. Auto Voltage, 24 hour timer"
  },
  3: {
    image: "ac4.jpg",
    text: "Industrial fan for big space. we have 30 inches, and 26 inches "
  },
  4: {
    image: "ac3.jpg",
    text: "Meet the Master mix Blender. we have UB6, UB37, UB47,and UB5 "
  }
};

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.getAttribute("data-id");
    const product = productData[id];

    // Change the background image at the top
    topBackground.style.backgroundImage = `url('${product.image}')`;

    // Update product description text
    text.textContent = product.text;
  });
});

const typingElement = document.getElementById("typingText");
const titles = ["Welcome to Elbee Ghana", "Explore the Best of",
     "Our Products", "Enjoy Shopping Now"];
let index = 0;

function loopTyping() {
  typingElement.textContent = titles[index];
  index = (index + 1) % titles.length;
}

// Set initial and loop every 4 seconds
loopTyping();
setInterval(loopTyping, 4000);
