var foodItemArray = []
var FoodItem = function (name, calories, vegan, glutenFree, citrusFree) {
	this.name = name
	this.calories = calories
	this.vegan = vegan
	this.glutenFree = glutenFree
	this.citrusFree = citrusFree

	foodItemArray.push(this)
}

FoodItem.prototype.stringify = function () {
	
	var diet = []
	if (this.vegan) diet.push('Vegan')
	if (this.glutenFree) diet.push('Gluten Free')
	if (this.citrusFree) diet.push('Citrus Free')

	var description = this.name + ': has ' + this.calories +' calories, and is suitable for: '
	for (var i=0; i<diet.length; i++) {
		if (i<diet.length-1)
		description += diet[i] + ', '
		else if (diet.length === 1) description += diet[i] + ' diets.'
		else description += 'and ' + diet[i] + ' diets.'
	}
	// console.log(description)
	return description
}

var pizza = new FoodItem ('Pizza', 400, true, true, true)
var burger = new FoodItem ('Burger', 500, false, false, true)
var tacos = new FoodItem ('Tacos', 400, true, false, false)

foodItemArray.forEach(function(item) {
	item.stringify()
})


//var drinkItemArray = []
var Drink = function (name, description, price, ingredients) {
	this.name = name
	this.description = description
	this.price = price
	this.ingredients = ingredients

//	foodItemArray.push(this)
}

Drink.prototype.stringify = function () {
	var drinkDescription = '> ' + this.name + '\n Description: ' + this.description + '\n Price: $'+ this.price +  '\n Ingredients: '+ this.ingredients.join(', ')
	
	return drinkDescription
}

var Plate = function (name, description, price, ingredients) {
	this.name = name
	this.description = description
	this.price = price
	this.ingredients = ingredients

	// console.log('Plate:', this.name, '\n', 'Ingredients:', this.ingredients)
	this.isVegan = function () {
		var verification = 0
		this.ingredients.forEach(function(ingredient){ //the ingredient is a foodItem instance
			// console.log(ingredient.name, ingredient.vegan)
			if (!ingredient.vegan) {
				verification++
			}
		})
		// console.log(verification)
		if (verification) return false
			else return true
	}

	this.isGlutenFree = function () {
		var verification = 0
		this.ingredients.forEach(function(ingredient){ //the ingredient is a foodItem instance
			// console.log(ingredient.name, ingredient.vegan)
			if (!ingredient.glutenFree) {
				verification++
			}
		})
		// console.log(verification)
		if (verification) return false
			else return true
	}

	this.isCitrusFree = function () {
		var verification = 0
		this.ingredients.forEach(function(ingredient){ //the ingredient is a foodItem instance
			// console.log(ingredient.name, ingredient.vegan)
			if (!ingredient.citrusFree) {
				verification++
			}
		})
		// console.log(verification)
		if (verification) return false
			else return true
	}



}

Plate.prototype.stringify = function () {
	var ingredientDescription = ''
	
	//console.log('ingredients:', this.ingredients)

	this.ingredients.forEach(function(ingredient) {
		//console.log('ingredient individual stringify', ingredient.stringify())
		ingredientDescription += '\n >>>>' + ingredient.stringify()
		//console.log('ingredient Description:', ingredientDescription)
	})


// Drink.prototype.stringify = function () {
// 	var ingredientDescription = ''
	
// 	//console.log('ingredients:', this.ingredients)

// 	this.ingredients.forEach(function(ingredient) {
// 		//console.log('ingredient individual stringify', ingredient.stringify())
// 		ingredientDescription += '\n >>>>' + ingredient.stringify()
// 		//console.log('ingredient Description:', ingredientDescription)
// 	})	


	var plateDescription = '> ' + this.name + '\n Description: ' + this.description + '\n Price: $'+ this.price +  '\n Ingredients: '+ ingredientDescription
	return plateDescription
}



var Order = function (plates, drinks) {
	this.plates = plates
	this.drinks = drinks
}


Order.prototype.stringify = function () {
	var OrderDescription = 'This order consists of the following plates: \n'

	this.plates.forEach (function (plateItem) {
		OrderDescription += plateItem.stringify() + '\n'
	})
	
	OrderDescription += 'and includes the following Drinks: \n'
	this.drinks.forEach (function (drinkItem) {
		OrderDescription += drinkItem.stringify() + '\n'
	})


	return orderDescription
}

var Menu = function (plates, drinks) {
	this.plates = plates
	this.drinks = drinks
}

Menu.prototype.stringify = function () {
	var menuDescription = '\n This menu consists of the following plates: \n'

	this.plates.forEach (function (plateItem) {
		menuDescription += plateItem.stringify() + '\n'
	})
	
	menuDescription += '\n And includes the following Drinks: \n'
	this.drinks.forEach (function (drinkItem) {
		menuDescription += drinkItem.stringify() + '\n'
	})


	return menuDescription
}


var Restaurant = function (name, description, menu) {
	this.name = name
	this.description = description
	this.menu = menu
}

Restaurant.prototype.stringify = function () {
	return this.name + '\n' + this.menu.stringify()
}

var Cuatomer = function (dietaryPreference) {
	this.dietaryPreference = dietaryPreference
}


/////// Instantiating Items
//Ingredients -> foodItems
var avocado = new FoodItem ('Avocados', 60, true, true, true)
var garlic = new FoodItem ('Garlic', 10, true, true, true)
var onions = new FoodItem ('Onions', 5, true, true, true)
var lemons = new FoodItem ('Lemons', 5, true, true, false)
var rice = new FoodItem ('Rice', 15, true, true, true)
var beans = new FoodItem ('Beans', 10, true, true, true)
var steak = new FoodItem ('Steak', 120, false, true, true)
var salsa = new FoodItem ('Salsa', 15, true, true, true)
var lime = new FoodItem ('Lime', 5, true, true, false)

//var tequila = new DrinkItem ('Tequila', 65, true, true, true)
//Drinks
var margarita = new Drink ('Margarita', 'A Cup of Love', 10, ['Tequila', 'Cointreau', 'Lime', 'Salt'])
//Plates
var burrito = new Plate ('Burrito', 'All roled up', 6, [rice, beans, steak, salsa])
var guacamole = new Plate ('Gualcamole', 'Green goodness', 4, [avocado, garlic, onions, lemons])
//Menu
var myMenu = new Menu ([burrito, guacamole], [margarita])
//Restaurants
var threeItemRestaurant = new Restaurant ('3 Item Restaurant', 'The best restaurant ever', myMenu)





// console.log('Menu:', myMenu)
// console.log(myMenu.stringify())
// console.log('Is guacamole Vegan?', guacamole.isVegan())
// console.log('Is guacamole Gluten Free?', guacamole.isGlutenFree())
// console.log('Is guacamole Citrus free?', guacamole.isCitrusFree())
console.log('My Restaurant\'s menu: \n', threeItemRestaurant.stringify())