// Practice 1
function practiceOne(fname, lname) {
  /*
  * Instructions
  *
  * Write an if stament that checks if 'fname' and 'lname ' equal your name
  * If it matched, return true otherwise return false.
  */

  // Write your if statement below this comment
}

// Practice 2
function practiceTwo(age) {
  /*
  * Instructions
  *
  * Create an else if statment that checkes your age. Please copy
  * the text exactly as it will be used to check your function.
  * 1. 1 to 17 return "You are not an adult."
  * 2. 18 to 21 return "You're an adult just not quite there yet!"
  * 3. 21 to 100 return "Congrats! You can drink."
  * 4. Everything else return "Age Invalid!"
  */

  // Write your if statment below this comment

  return null; //Do Not Modify
}

// Practice 3
function practiceThree(randNum) {
  /*
  * Instructions
  *
  * Write a for loop that adds the sum of all the number up to
  * the number entered. Use the variable 'sum' provided.
  */

  var sum = 0; // Do Not Nodify

  //Write your for loop below this comment.

  return sum; // Do Not Nodify
}

// Practice 4
function practiceFour(subFromA) {
  /*
  * Instructions
  *
  * Write a while loop that concatenates 'very ' (Notice the space at the end),
  * to 'text' for the number entered.
  *
  * Hint: Subtract from count;
  */

  // Do Not Modify These
  var text = "JavaScript is ";
  var count = subFromA;

  // Write your for loop below this comment

  // Do Not Modify These
  text += "fun!";
  return text;
}

// Practice 5
function practiceFive(subFromB) {
  /*
  * Instructions
  *
  * Write a while do that concatenates a countdown of numbers sepreated by comas,
  * to 'text' for the number entered. It is possible to write the do loop in 4 lines.
  *
  * Hint: The number 0 does not need a comma at the end;
  */

  // Do Not Modify These
  var text = "T-Minus ";
  var count = subFromB;

  // Write your do loop below this comment

  // Do Not Modify These
  text += "LIFTOFF!!!!";
  return text;
}
// Practice 6
function practiceSix(range) {
  /*
  * Instructions
  *
  * Write a CASCADING switch statment for 5 cases. In each case, concatinate one adjective with a
  * space after below to 'text'. Write a default case with that concatinates 'fox jumped over the
  * fence.' to 'text'.
  *
  * List of adjectives in order: cute, small, fast, baby, and brown.
  */

  var text = "The "; // Do Not Modify

  // Write your switch statment below this comment

  // Do Not Modify These
  return text;
}

/*
 #####################################
 #                                   #
 #    DO NOT MODIY ANYTHING BELOW    #
 #                                   #
 #####################################
*/
function startPrac() {
  $("#alert_prac1_yes").hide();
  $("#alert_prac1_no").hide();

  $("#alert_prac2").hide();

  $("#alert_prac3_yes").hide();
  $("#alert_prac3_no").hide();

  $("#alert_prac4_yes").hide();
  $("#alert_prac4_no").hide();

  $("#alert_prac5_yes").hide();
  $("#alert_prac5_no").hide();

  $("#alert_prac6_yes").hide();
  $("#alert_prac6_no").hide();
}
function checkOne(fname,lname) {
  if (practiceOne(fname,lname)) {
    $("#alert_prac1_yes").show();
    $("#alert_prac1_no").hide();
  } else {
    $("#alert_prac1_yes").hide();
    $("#alert_prac1_no").show();
  }
}
function checkTwo(age) {
  $("#alert_prac2").show();
  $("#pr2r0a").text(age);
  $("#pr2r0b").text(practiceTwo(age));

  if (practiceTwo(-99) == "Age Invalid!") {
    $("#pr2r1").addClass("fa-check");
  } else {
    $("#pr2r1").addClass("fa-times");
  }
  if (practiceTwo(17) == "You are not an adult.") {
    $("#pr2r2").addClass("fa-check");
  } else {
    $("#pr2r2").addClass("fa-times");
  }
  if (practiceTwo(18) == "You're an adult just not quite there yet!") {
    $("#pr2r3").addClass("fa-check");
  } else {
    $("#pr2r3").addClass("fa-times");
  }
  if (practiceTwo(21) == "Congrats! You can drink.") {
    $("#pr2r4").addClass("fa-check");
  } else {
    $("#pr2r4").addClass("fa-times");
  }
  if (practiceTwo(24) == "Congrats! You can drink.") {
    $("#pr2r5").addClass("fa-check");
  } else {
    $("#pr2r5").addClass("fa-times");
  }
  if (practiceTwo(1000) == "Age Invalid!") {
    $("#pr2r6").addClass("fa-check");
  } else {
    $("#pr2r6").addClass("fa-times");
  }
}
function checkThree(randNum) {
  if (randNum < 10 || randNum > 100) {
    $("#alert_prac3_no").show();
    $("#pr3r1").text("Your Number is out of bounds!");
    return;
  }

  var a = practiceThree(randNum);
  var b = 0;
  for (var i = 0; i <= randNum; i++) b += i;

  if (a == b) {
    $("#alert_prac3_yes").show();
    $("#alert_prac3_no").hide();
    $("#pr3r0").text("Great Job! Your Result: " + a + " Expected Output: " + b);
  } else {
    $("#alert_prac3_yes").hide();
    $("#alert_prac3_no").show();
    $("#pr3r1").text(
      "Something went wrong! Your Result: " + a + " Expected Output: " + b
    );
  }
}
function checkFour(subFromA) {
  if (subFromA < 1 || subFromA > 10) {
    $("#alert_prac4_no").show();
    $("#pr4r1").text("Your Number is out of bounds!");
    return;
  }

  var a = practiceFour(subFromA);
  var b = "JavaScript is ";
  var c = subFromA;
  while (c > 0) {
    b += "very ";
    c--;
  }
  b += "fun!";

  if (a == b) {
    $("#alert_prac4_yes").show();
    $("#alert_prac4_no").hide();
    $("#pr4r0").text("Great Job! Your Result: " + a + " Expected Output: " + b);
  } else {
    $("#alert_prac4_yes").hide();
    $("#alert_prac4_no").show();
    $("#pr4r1").text(
      "Something went wrong! Your Result: " + a + " Expected Output: " + b
    );
  }
}
function checkFive(subFromB) {
  if (subFromB < 3 || subFromB > 10) {
    $("#alert_prac5_no").show();
    $("#pr5r1").text("Your Number is out of bounds!");
    return;
  }

  var a = practiceFive(subFromB);
  var b = "T-Minus ";
  var c = subFromB;
  do {
    b += c == 0 ? c + " " : c + ", ";
    c--;
  } while (c >= 0);
  b += "LIFTOFF!!!!";

  if (a == b) {
    $("#alert_prac5_yes").show();
    $("#alert_prac5_no").hide();
    $("#pr5r0").text("Great Job! Your Result: " + a + " Expected Output: " + b);
  } else {
    $("#alert_prac5_yes").hide();
    $("#alert_prac5_no").show();
    $("#pr5r1").text(
      "Something went wrong! Your Result: " + a + " Expected Output: " + b
    );
  }
}
function checkSix(range) {

  var a = practiceSix(range);
  var b = "The ";
  switch (range) {
    case 1:
      b+="cute ";
    case 2:
      b+="small ";
    case 3:
      b+="fast ";
    case 4:
      b+="baby ";
    case 5:
      b+="brown ";
    default:
      b+="fox jumped over the fence.";
  }
  if (a == b) {
    $("#alert_prac6_yes").show();
    $("#alert_prac6_no").hide();
    $("#pr6r0").text("Great Job! Your Result: " + a + " Expected Output: " + b);
  } else {
    $("#alert_prac6_yes").hide();
    $("#alert_prac6_no").show();
    $("#pr6r1").text(
      "Something went wrong! Your Result: " + a + " Expected Output: " + b
    );
  }
}

startPrac();
