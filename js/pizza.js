	function myCalc() { ///get total function
	  var text1 = "<h3>Your Order:</h3>";
	  var runningTotal = 0; //items on the pizza--->
	  var sizeTotal = 0; //pizza price --->
	  var sizeArray = document.getElementsByClassName("size"); // create array, size section only
	  for (var i = 0; i < sizeArray.length; i += 1) { // cycle through array
	    if (sizeArray[i].checked) { // has item been checked?
	      var selectedSize = sizeArray[i].value; // made new variable called "selected size"
	      text1 = text1 + selectedSize + "<br>"; // creates a list of ordered items, separated by "+"
	    }
	  }
	  if (selectedSize === "Personal") {
	    sizeTotal = 6;
	  } else if (selectedSize === "Medium") {
	    sizeTotal = 10;
	  } else if (selectedSize === "Large") {
	    sizeTotal = 14;
	  } else if (selectedSize === "Extra-Large") {
	    sizeTotal = 16;
	  }
	  runningTotal = sizeTotal; // items on the pizza will create the price with this code.
	  console.log(selectedSize + " = $" + sizeTotal + " .00");
	  console.log("size text1: " + text1);
	  console.log("subtotal: $" + runningTotal + ".00");
	  getCheese(runningTotal, text1); //all of these variables are about to be passed on to meat.
	}

	function getCheese(runningTotal, text1) {
	  var cheeseTotal = 0;
	  var selectedCheese = [];
	  var cheeseArray = document.getElementsByClassName("cheese");
	  for (var j = 0; j < cheeseArray.length; j += 1) {
	    if (cheeseArray[j].checked) {
	      var selectedCheese = (cheeseArray[j].value);
	      console.log("selected cheese item: (" + cheeseArray[j].value + ")");
	      text1 = text1 + selectedCheese + "<br>";
	    }
	  }
	  if (selectedCheese === "Extra Cheese") {
	    cheeseTotal = 3;
	  }
	  runningTotal = (runningTotal + cheeseTotal);
	  console.log(selectedCheese + " = $" + cheeseTotal + ".00");
	  console.log("cheese text1: " + text1);
	  console.log("Purchase Total: " + "$" + runningTotal + ".00");
	  document.getElementById("showText").innerHTML = text1;
	  document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
	  getCrust(runningTotal, text1);
	}

	function getCrust(runningTotal, text1) {
	  var crustTotal = 0;
	  var selectedCrust = [];
	  var crustArray = document.getElementsByClassName("crust");
	  for (var j = 0; j < crustArray.length; j += 1) {
	    if (crustArray[j].checked) {
	      var selectedCrust = (crustArray[j].value);
	      console.log("selected crust item: (" + crustArray[j].value + ")");
	      text1 = text1 + selectedCrust + "<br>";
	    }
	  }
	  if (selectedCrust === "Cheese Stuffed Crust") {
	    crustTotal = 3;
	  }
	  runningTotal = (runningTotal + crustTotal);
	  console.log(selectedCrust + " = $" + crustTotal + ".00");
	  console.log("crust text1: " + text1);
	  console.log("Purchase Total: " + "$" + runningTotal + ".00");
	  document.getElementById("showText").innerHTML = text1;
	  document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
	  getSauce(runningTotal, text1);
	}

	function getSauce(runningTotal, text1) {
	  var sauceTotal = 0;
	  var selectedSauce = [];
	  var sauceArray = document.getElementsByClassName("sauce");
	  for (var j = 0; j < sauceArray.length; j += 1) {
	    if (sauceArray[j].checked) {
	      var selectedSauce = (sauceArray[j].value);
	      console.log("selected sauce item: (" + sauceArray[j].value + ")");
	      text1 = text1 + selectedSauce + "<br>";
	    }
	  }
	  runningTotal = (runningTotal + sauceTotal);
	  console.log(selectedSauce + " = $" + sauceTotal + ".00");
	  console.log("sauce text1: " + text1);
	  console.log("Purchase Total: " + "$" + runningTotal + ".00");
	  document.getElementById("showText").innerHTML = text1;
	  document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
	  getMeat(runningTotal, text1);
	}

	function getMeat(runningTotal, text1) {
	  var meatTotal = 0; //meat topping cost
	  var selectedMeat = []; //list of meat toppings
	  var meatArray = document.getElementsByClassName("meats"); //all possible meat options, create array.
	  for (var j = 0; j < meatArray.length; j += 1) { // cycle through array.
	    if (meatArray[j].checked) {
	      selectedMeat.push(meatArray[j].value); //THIS LINE OF CODE HAS .PUSH BECAUSE IT IS POSSIBLE TO STACK MEATS
	      console.log("selected meat item: (" + meatArray[j].value + ")"); // for the dev
	      text1 = text1 + meatArray[j].value + "<br>";
	    }
	  }
	  var meatCount = selectedMeat.length;
	  if (meatCount > 1) {
	    meatTotal = (meatCount - 1); // this is to account for the one free meat
	  } else {
	    meatTotal = 0;
	  }
	  runningTotal = (runningTotal + meatTotal);
	  console.log("total selected meat items: " + meatCount);
	  console.log(meatCount + " meat - 1 free meat = " + "$" + meatTotal + ".00");
	  console.log("meat text1: " + text1);
	  console.log("Purchase Total: " + "$" + runningTotal + ".00");
	  document.getElementById("showText").innerHTML = text1;
	  document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
	  getVeggies(runningTotal, text1);
	}
	
	function getVeggies(runningTotal, text1) {
	  var veggieTotal = 0; 
	  var selectedVeggies = []; 
	  var veggieArray = document.getElementsByClassName("veggies"); 
	  for (var j = 0; j < veggieArray.length; j += 1) { 
	    if (veggieArray[j].checked) {
	      selectedVeggies.push(veggieArray[j].value); 
	      console.log("selected veggie item: (" + veggieArray[j].value + ")"); 
	      text1 = text1 + veggieArray[j].value + "<br>";
	    }
	  }
	  var veggieCount = selectedVeggies.length;
	  if (veggieCount > 1) {
	    veggieTotal = (veggieCount - 1);
	  } else {
	    veggieTotal = 0;
	  }
	  runningTotal = (runningTotal + veggieTotal);
	  console.log("total selected veggie items: " + veggieCount);
	  console.log(veggieCount + " veggie - 1 free veggie = " + "$" + veggieTotal + ".00");
	  console.log("veggie text1: " + text1);
	  console.log("Purchase Total: " + "$" + runningTotal + ".00");
	  document.getElementById("showText").innerHTML = text1;
	  document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
	}