var targetNumber = Math.floor((Math.random() * 120) + 19);
    document.getElementById("numberToGuess").innerHTML = targetNumber;

  var totalScore = 0;
    // document.getElementById("totalScore").innerHTML = totalScore;

  var numberOptions = Math.floor((Math.random() * 120) + 19);
    document.getElementById("numberToGuess").innerHTML = numberOptions;

  // $("#numberToGuess").text();

  var crystals = $("#crystals");

  var counter = 0;
  var win = 0;
  var lose = 0;
  var resetButton = document.querySelector("#reset");
  

  // Now for the hard part. Creating multiple crystals each with their own unique number value.

  // We begin by expanding our array to include four options.
  var numberOptions1 = Math.floor((Math.random() * 12) + 1);
  var numberOptions2 = Math.floor((Math.random() * 12) + 1);
  var numberOptions3 = Math.floor((Math.random() * 12) + 1);
  var numberOptions4 = Math.floor((Math.random() * 12) + 1);

  var numberOptions = [numberOptions1,numberOptions2,numberOptions3,numberOptions4];

  // Next we create a for loop to create crystals for every numberOption.
  for (var i = 0; i < numberOptions.length; i++) {

    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    crystals.append(imageCrystal);
  }

  // This time, our click event applies to every single crystal on the page. Not just one.
  crystals.on("click", ".crystal-image", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
  
    document.getElementById("totalScore").innerHTML = counter;
    document.getElementById("numberToGuess").innerHTML = targetNumber;

    function reset(){
      // targetNumber = Math.floor((Math.random() * 120) + 19);
      counter = 0;
      // numberOptions = Math.floor((Math.random() * 120) + 19);
      totalScore = Math.floor((Math.random() * 120) + 19);
      // numberToGuess.textContent = Math.floor((Math.random() * 120) + 1);
      var numberOptions = Math.floor((Math.random() * 120) + 19);
    document.getElementById("numberToGuess").innerHTML = numberOptions;

    }

    if (counter === targetNumber) {
      alert("You win!");
      win++;
      $("#won").text("How many times you've won: " + win);
      reset();

    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
      lose++;
    $("#lose").text("How many times you've lost: " + lose);
      reset();
    }

  });

  	reset.addEventListener('click',function(){
  		// targetNumber = Math.floor((Math.random() * 120) + 19);
      	counter = Math.floor((Math.random() * 120) + 19);
    //   	numberOptions = Math.floor((Math.random() * 12) + 1);
    //   	numberOptions.textContent = Math.floor((Math.random() * 120) + 19);
    //   	numberOptions1 = Math.floor((Math.random() * 12) + 1);
  		// numberOptions2 = Math.floor((Math.random() * 12) + 1);
  		// numberOptions3 = Math.floor((Math.random() * 12) + 1);
  		// numberOptions4 = Math.floor((Math.random() * 12) + 1);
  		numberToGuess.textContent = Math.floor((Math.random() * 120) + 19);
  		 numberOptions = Math.floor((Math.random() * 120) + 19);

  	});