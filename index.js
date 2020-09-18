// Menu Section

const menu = [
  {
    title: "Bread Basket",
    category: "breakfast",
    price: "$5.50",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco."
  },
  {
    title: "Honey Almond Granola with Fruits",
    category: "breakfast",
    price: "$7.50",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco."
  },
  {
    title: "Belgian Waffle",
    category: "breakfast",
    price: "$8.50",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco."
  },
  {
    title: "Scrambled Eggs",
    category: "breakfast",
    price: "$7.50",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco."
  },
  {
    title: "Blueberry Pancakes",
    category: "breakfast",
    price: "$8.50",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco."
  },
  {
    title: "Soap and Salad",
    category: "lunch",
    price: "$8.50",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco."
  },
  {
    title: "Chicken Salad",
    category: "lunch",
    price: "$9.00",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco."
  },
  {
    title: "Veggie Pasta",
    category: "lunch",
    price: "$9.75",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco."
  },
  {
    title: "Club Sandwich",
    category: "lunch",
    price: "$9.50",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco."
  },
  {
    title: "Deluxe Burger",
    category: "lunch",
    price: "$10.50",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco."
  },
  {
    title: "Fruit Salad",
    category: "dessert",
    price: "$2.50",
    description: "Ut enim ad minim veniam."
  },
  {
    title: "Ice Cream",
    category: "dessert",
    price: "$2.00",
    description: "Ut enim ad minim veniam."
  },
  {
    title: "Chocolate Cake",
    category: "dessert",
    price: "$4.00",
    description: "Ut enim ad minim veniam."
  },
  {
    title: "Cheese Cake",
    category: "dessert",
    price: "$4.00",
    description: "Ut enim ad minim veniam."
  },
];


const sectionCenter = document.querySelector(".menu-items")
const btn = document.querySelectorAll(".btn")

window.addEventListener("DOMContentLoaded", function(){
  displayMenuItems(menu)
})

btn.forEach(function(button){
  button.addEventListener('click', function(e){
    const category = e.currentTarget.dataset.id
    const menuCategory = menu.filter(function(menuItem){
      if(menuItem.category === category){
        return menuItem
      }
    })
    if(category === 'all'){
      displayMenuItems(menu)
    } else {
      displayMenuItems(menuCategory)
    }
  })
})

function displayMenuItems(menuItems){
  let displayMenu = menuItems.map(function(item){
    return `<div><h3>${item.title}</h3>
    <hr>
    <p>${item.description}</p>
    <p><em><strong>${item.price}</strong></em></p></div>`;
  })
  displayMenu = displayMenu.join("")
  sectionCenter.innerHTML = displayMenu;
}

// Coffee Section

const accordion = document.querySelectorAll(".accordion")

accordion.forEach(function(acc) {
  acc.addEventListener('click', function(){
    this.classList.toggle('is-open')
    const content = acc.nextElementSibling
    if(content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px"
    }
  })
})

// Map Section

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 30.2672, lng: -97.7431 },
    zoom: 14
  });
}

// Contact Section;

const form = document.querySelector("form")
const name = document.querySelector(".name")
const email = document.querySelector(".email")
const phone = document.querySelector(".phone")
const message = document.querySelector(".message")

function showError(input, message){
  const formControl = input.parentElement
      formControl.className = "form-control error"
      const small = formControl.querySelector('small')
      small.innerText = message
}

function showSuccess(input){
  const formControl = input.parentElement
  formControl.className = "form-control success"
}

form.addEventListener('submit', function(e){
  e.preventDefault()
  
  if(name.value === ''){
    showError(name, 'Name is required')
  } else {
    showSuccess(name)
  }

  if(email.value === ''){
    showError(email, 'Email is required')
  } else {
    showSuccess(email)
  }

  if(phone.value === ''){
    showError(phone, 'Phone Number is required')
  } else {
    showSuccess(phone)
  }

  if(message.value === ''){
    showError(message, 'Message is required')
  } else {
    showSuccess(message)
  }
    
})
