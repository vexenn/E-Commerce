// product constructor
function Weed(name, size, color, stock, image) {
	this.name  = name
	this.size  = size
	this.color = color
	this.stock = stock
	this.image = image
}

// create new products from the product constructor
var premiumjack  = new Weed("Premium Jack", "Sativa", "1/8th", 55.00, "https://images.weedmaps.com/photos/products/000/036/587/large/60433_nug-flower-plantium-jack-1.jpg")
var lemonadehaze  = new Weed("Lemonade Haze", "Sativa", "1/8th", 50.00, "https://images.weedmaps.com/photos/products/000/047/543/large/86599_170803_Nug_Premium-Lemonade-Haze-2.jpg")
var strawberrybanana    = new Weed("Strawberry Banana", "Indica Hybrid", "1/8th", 45.00, "https://images.weedmaps.com/photos/products/000/047/541/large/86597_170803_Nug_Premium-SB-2.jpg")
var ogwhite   = new Weed("OG White Buffalo", "Indica", "1/8th", 70, "https://images.weedmaps.com/photos/products/000/036/598/large/60428_nug-flower-white-buffalo-og-1.jpg")
var twentyfourk  = new Weed("24K", "Indica Dom", "1/8th", 55.00, "https://images.weedmaps.com/photos/products/000/085/301/large/183234_NUG_flower_-_ANYTIME__-_24K_NUG__800X800_.png")
var ggfour = new Weed("GG4", "Hybrid", "1/8th", 44.00, "https://images.weedmaps.com/photos/products/000/036/592/large/182479_NUG_flower_-_Anytime_-_GG4_-___800x800_.png")

// create an array to add products to
var weedArray = new Array

// add products to array of products
weedArray.push(premiumjack, lemonadehaze, strawberrybanana, ogwhite, twentyfourk, ggfour)

// loop through products array
for(var i = 0; i < weedArray.length; i++) {
	// create new elements for each product
	var newItem  = document.createElement("div")
	var newDiv   = document.createElement("div")
	var nameH1   = document.createElement("h1")
	var sizeH4   = document.createElement("h4")
	var colorH4  = document.createElement("h4")
	var stockH4  = document.createElement("h4")
	var btn      = document.createElement("button")
	var image    = document.createElement("img")

	// create text for new elements
	var tName   = document.createTextNode(weedArray[i].name)
	var tSize   = document.createTextNode("Strain: " + weedArray[i].size)
	var tColor  = document.createTextNode("Quantity: " + weedArray[i].color)
	var tStock  = document.createTextNode("Price: " + weedArray[i].stock)
	var tButton = document.createTextNode("Buy Now!")

	// update source attribute
	image.src = weedArray[i].image

	// update class attributes
	image.className = "img-responsive"
	btn.className = "btn btn-primary btn-lg"
	newItem.className = "col-sm-4"
	newDiv.className = "tshirt shirtName" + [i] + " thumbnail"
	
	// add text to elements
	nameH1.appendChild(tName)
	sizeH4.appendChild(tSize)
	colorH4.appendChild(tColor)
	stockH4.appendChild(tStock)
	btn.appendChild(tButton)

	// add elements to new div
	newDiv.appendChild(nameH1)
	newDiv.appendChild(image)
	newDiv.appendChild(sizeH4)
	newDiv.appendChild(colorH4)
	newDiv.appendChild(stockH4)
	newDiv.appendChild(btn)

	// add new div to new item div
	newItem.appendChild(newDiv)

	// add new item to the element with id="shirts"
	document.getElementById("products").appendChild(newItem)
}
