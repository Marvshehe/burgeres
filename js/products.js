/* ============================================================
   ELECTRO - Product Catalog
   All products used across the site are defined here.
   ============================================================ */

var PRODUCTS = [
	{
		id: 1,
		name: 'Classic Smash Burger',
		category: 'Burgers',
		brand: 'Burgeres',
		price: 139.00,
		oldPrice: 169.00,
		rating: 5,
		reviews: 12,
		img: 'img/product01.png',
		images: ['img/product01.png', 'img/product04.png', 'img/product07.png'],
		isNew: true,
		hotDeal: false,
		description: 'A juicy beef patty, cheddar, caramelized onions, and house sauce stacked in a toasted brioche bun for a classic burger hit.'
	},
	{
		id: 2,
		name: 'Double BBQ Burger',
		category: 'Burgers',
		brand: 'Burgeres',
		price: 189.00,
		oldPrice: 220.00,
		rating: 4,
		reviews: 8,
		img: 'img/product02.png',
		images: ['img/product02.png', 'img/product05.png', 'img/product08.png'],
		isNew: false,
		hotDeal: true,
		description: 'Two flame-grilled patties, smoky barbecue glaze, bacon strips, and crispy onions folded into a satisfying double stack.'
	},
	{
		id: 3,
		name: 'Cheese Melt Burger',
		category: 'Burgers',
		brand: 'Burgeres',
		price: 159.00,
		oldPrice: 185.00,
		rating: 4,
		reviews: 6,
		img: 'img/product03.png',
		images: ['img/product03.png', 'img/product06.png', 'img/product09.png'],
		isNew: false,
		hotDeal: false,
		description: 'Melted cheese, lettuce, tomato, and signature burger sauce bring rich flavor to every bite of this loaded favorite.'
	},
	{
		id: 4,
		name: 'Crispy Chicken Burger',
		category: 'Burgers',
		brand: 'Burgeres',
		price: 149.00,
		oldPrice: 175.00,
		rating: 5,
		reviews: 15,
		img: 'img/product04.png',
		images: ['img/product04.png', 'img/product01.png', 'img/product07.png'],
		isNew: true,
		hotDeal: false,
		description: 'Crisp chicken fillet, slaw, pickles, and spicy mayo on a soft toasted bun with a tangy, crunchy finish.'
	},
	{
		id: 5,
		name: 'Burger Meal Deal',
		category: 'Combo Meals',
		brand: 'Burgeres',
		price: 239.00,
		oldPrice: 279.00,
		rating: 5,
		reviews: 21,
		img: 'img/product05.png',
		images: ['img/product05.png', 'img/product02.png', 'img/product08.png'],
		isNew: false,
		hotDeal: true,
		description: 'A burger, fries, and drink bundled together for a complete meal at a value-packed price.'
	},
	{
		id: 6,
		name: 'Family Burger Feast',
		category: 'Combo Meals',
		brand: 'Burgeres',
		price: 499.00,
		oldPrice: 560.00,
		rating: 3,
		reviews: 5,
		img: 'img/product06.png',
		images: ['img/product06.png', 'img/product03.png', 'img/product09.png'],
		isNew: false,
		hotDeal: false,
		description: 'Four burgers, fries, dips, and drinks for a satisfying family meal made for sharing and good times.'
	},
	{
		id: 7,
		name: 'Loaded Fries Basket',
		category: 'Sides',
		brand: 'Burgeres',
		price: 109.00,
		oldPrice: 129.00,
		rating: 4,
		reviews: 9,
		img: 'img/product07.png',
		images: ['img/product07.png', 'img/product01.png', 'img/product04.png'],
		isNew: false,
		hotDeal: true,
		description: 'Crispy golden fries topped with cheddar, buttered seasoning, and a side of burger sauce for extra indulgence.'
	},
	{
		id: 8,
		name: 'Crispy Onion Rings',
		category: 'Sides',
		brand: 'Burgeres',
		price: 95.00,
		oldPrice: 120.00,
		rating: 4,
		reviews: 7,
		img: 'img/product08.png',
		images: ['img/product08.png', 'img/product02.png', 'img/product05.png'],
		isNew: true,
		hotDeal: false,
		description: 'Crunchy battered onion rings served fresh and perfectly seasoned, ideal as a side or snack.'
	},
	{
		id: 9,
		name: 'House Lemonade',
		category: 'Drinks',
		brand: 'Burgeres',
		price: 65.00,
		oldPrice: 80.00,
		rating: 5,
		reviews: 11,
		img: 'img/product09.png',
		images: ['img/product09.png', 'img/product03.png', 'img/product06.png'],
		isNew: false,
		hotDeal: true,
		description: 'Fresh, citrusy, and chilled to perfection — a crisp drink that cuts through rich burger flavors beautifully.'
	},
	{
		id: 10,
		name: 'Iced Coffee Shake',
		category: 'Drinks',
		brand: 'Burgeres',
		price: 120.00,
		oldPrice: 140.00,
		rating: 5,
		reviews: 18,
		img: 'img/product01.png',
		images: ['img/product01.png', 'img/product05.png', 'img/product09.png'],
		isNew: true,
		hotDeal: false,
		description: 'A creamy, chilled coffee shake blended with vanilla ice cream for a sweet, smooth finish.'
	},
	{
		id: 11,
		name: 'Loaded Nacho Fries',
		category: 'Sides',
		brand: 'Burgeres',
		price: 125.00,
		oldPrice: 150.00,
		rating: 4,
		reviews: 10,
		img: 'img/product02.png',
		images: ['img/product02.png', 'img/product06.png', 'img/product08.png'],
		isNew: false,
		hotDeal: false,
		description: 'Crisp fries loaded with creamy cheese sauce, salsa, and jalapeños for a punchy side snack.'
	},
	{
		id: 12,
		name: 'Burgeres Signature Combo',
		category: 'Combo Meals',
		brand: 'Burgeres',
		price: 289.00,
		oldPrice: 329.00,
		rating: 5,
		reviews: 14,
		img: 'img/product03.png',
		images: ['img/product03.png', 'img/product07.png', 'img/product01.png'],
		isNew: false,
		hotDeal: true,
		description: 'Our best-selling burger paired with fries and a chilled drink, made for a tasty quick bite any time.'
	}
];

/* Helper: find a product by id */
function getProductById(id) {
	id = parseInt(id, 10);
	for (var i = 0; i < PRODUCTS.length; i++) {
		if (PRODUCTS[i].id === id) return PRODUCTS[i];
	}
	return null;
}

/* Helper: get all distinct categories */
function getAllCategories() {
	var cats = [];
	for (var i = 0; i < PRODUCTS.length; i++) {
		if (cats.indexOf(PRODUCTS[i].category) === -1) cats.push(PRODUCTS[i].category);
	}
	return cats;
}

/* Helper: get all distinct brands */
function getAllBrands() {
	var brands = [];
	for (var i = 0; i < PRODUCTS.length; i++) {
		if (brands.indexOf(PRODUCTS[i].brand) === -1) brands.push(PRODUCTS[i].brand);
	}
	return brands.sort();
}