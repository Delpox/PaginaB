
//NAV//
const navSlide =()=> {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
   
    burger.addEventListener('click', ()=>{
        
   // Toggle Nav
        nav.classList.toggle('nav-active');
        
    //Animate links
     navLinks.forEach((link, index)=>{
        if(link.style.animation){
         link.style.animation = ' ';
        }
        else {
         link.style.animation =
          `navLinkFade 0.5s ease fowards ${index / 7 + 1.5}s`;
        }
         });
//burger animation 
burger.classList.toggle('toggle');
    });

    }
navSlide()


//POEMAS ANIMATION //

//BOTTOON//


const toTop = document.querySelector (".to-top");

window.addEventListener("scroll", ( ) => {
if (window.pageYOffset > 100){
    toTop.classList.add("active");
}
})



let productList = [];
let carrito = [];
let total = 0;
let order = {
  items: [],
};

function add(productId, price) {
  const product = productList.find((p) => p.id === productId);
  product.stock--;
  
  order.items.push(productList.find((p) => p.id === productId));

  console.log(productId, price);
  carrito.push(productId);
  total = total + price;
  document.getElementById("checkout").innerHTML = `Carrito $${total}`;
  displayProducts();
}

async function showOrder() {
  document.getElementById("all-products").style.display = "none";
  document.getElementById("order").style.display = "block";

  document.getElementById("order-total").innerHTML = `$${total}`;

  let productsHTML = `
    <tr>
        <th>Cantidad</th>
        <th>Detalle</th>
        <th>Subtotal</th>
    </tr>`;
  order.items.forEach((p) => {
    productsHTML += `<tr>
            <td>1</td>
            <td>${p.name}</td>
            <td>$${p.price}</td>
        </tr>`;
  });
  document.getElementById("order-table").innerHTML = productsHTML;
}

async function pay() {
  document.write ("Felicitaciones por tu compra!, escribime por whatsapp asi te mando el libro" )};
  
  carrito = [];
  total = 0;
  order = {
    items: [],
  };