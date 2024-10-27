const products = [
    { id: 1, name: "Denim", src: "./Assets/coll1.jpeg", price: "₹300", tags: ["new", "blue", "party"] },
    { id: 2, name: "The Luxe Polo", src: "./Assets/coll2.jpeg", price: "₹469", tags: ["old", "green", "summer"] },
    { id: 3, name: "Casual Classic", src: "./Assets/coll3.jpeg", price: "₹459", tags: ["old", "white", "party"] },
    { id: 4, name: "The Relaxed Fit", src: "./Assets/coll4.jpeg", price: "₹560", tags: ["new", "red", "party"] },
    { id: 5, name: "Modern Henley", src: "./Assets/coll5.jpeg", price: "₹499", tags: ["old", "green", "party"] },
    { id: 6, name: "Vintage Vibes", src: "./Assets/coll6.jpeg", price: "₹300", tags: ["new", "blue", "party"] },
    { id: 7, name: "Coastal Comfort", src: "./Assets/coll7.jpeg", price: "₹699", tags: ["old", "white", "beach"] },
    { id: 8, name: "Sundown Shirt", src: "./Assets/coll8.jpeg", price: "₹599", tags: ["new", "white", "summer"] },
    { id: 9, name: "Purely Plaid", src: "./Assets/coll9.jpeg", price: "₹590", tags: ["new", "red", "beach"] },
];

const container = document.querySelector(".products");

function displayProducts(productsToDisplay) {
    container.innerHTML = "";
    productsToDisplay.forEach((product) => {
        const createItem = document.createElement("div");
        createItem.style.cssText = `
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 20px;
        `;
        createItem.classList.add("product");
        createItem.innerHTML = `
            <img class="max-md:w-[300px]" src="${product.src}">
            <h1 class="max-md:text-[10px]">${product.name}</h1>
            <p class="max-md:text-[10px]">${product.price}</p>
            <span style="display:none;">${product.tags.join(', ')}</span>
        `;
        container.append(createItem);
    });
}

displayProducts(products);

// Get all checkboxes
const occasionCheckboxes = document.querySelectorAll('input[type="checkbox"][value="summer"], input[type="checkbox"][value="party"], input[type="checkbox"][value="beach"]');
const colorCheckboxes = document.querySelectorAll('input[type="checkbox"][value="red"], input[type="checkbox"][value="blue"], input[type="checkbox"][value="white"], input[type="checkbox"][value="green"]');
const arrivalCheckboxes = document.querySelectorAll('input[type="checkbox"][value="new"], input[type="checkbox"][value="old"]');

function filterProducts() {
    const selectedOccasions = Array.from(occasionCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
    const selectedColors = Array.from(colorCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
    const selectedArrivals = Array.from(arrivalCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    const filteredProducts = products.filter(product => {
        const matchesOccasion = selectedOccasions.length === 0 || product.tags.some(tag => selectedOccasions.includes(tag));
        const matchesColor = selectedColors.length === 0 || product.tags.some(tag => selectedColors.includes(tag));
        const matchesArrival = selectedArrivals.length === 0 || product.tags.some(tag => selectedArrivals.includes(tag));
        return matchesOccasion && matchesColor && matchesArrival;
    });

    displayProducts(filteredProducts);
}

occasionCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', filterProducts);
});
colorCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', filterProducts);
});
arrivalCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', filterProducts);
});


var nav = document.getElementById("nav");
var closenav = document.getElementById("closenav");
var mobnav = document.getElementById("mobnav");
nav.addEventListener("click",function(){
    mobnav.style.left=0;
})
closenav.addEventListener("click",function(){
    mobnav.style.left="-50%"
})

var cl = document.getElementById("close");
var offertop = document.getElementById("offertop");
cl.addEventListener("click",function(event){
    console.log(offertop);
    offertop.style.display="none";
})
