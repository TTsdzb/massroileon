//IzumiDesu ID:0001
document.addEventListener('DOMContentLoaded', function () {
  // Set the date we're counting down to
  var countdownIzumiDate = new Date("Feb 6, 2024 00:00:00").getTime();

  // Update the countdownIzumi every 1 second
  var x = setInterval(function() {
    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the remaining time
    var distance = countdownIzumiDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdownIzumi
    document.getElementById("days0001").innerHTML = days + "d :";
    document.getElementById("hours0001").innerHTML = hours + "h :";
    document.getElementById("minutes0001").innerHTML = minutes + "m :";
    document.getElementById("seconds0001").innerHTML = seconds + "s ";

    // If the countdownIzumi is over, display a message
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdownIzumi").innerHTML = "EXPIRED";
    }
  }, 1000);
});

//Madohara ID:0002
document.addEventListener('DOMContentLoaded', function () {
  // Set the date we're counting down to
  var countdownMadoharaDate = new Date("Mar 7, 2024 00:00:00").getTime();

  // Update the countdownMadohara every 1 second
  var x = setInterval(function() {
    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the remaining time
    var distance = countdownMadoharaDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdownMadohara
    document.getElementById("days0002").innerHTML = days + "d :";
    document.getElementById("hours0002").innerHTML = hours + "h :";
    document.getElementById("minutes0002").innerHTML = minutes + "m :";
    document.getElementById("seconds0002").innerHTML = seconds + "s ";

    // If the countdownMadohara is over, display a message
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdownMadohara").innerHTML = "EXPIRED";
    }
  }, 1000);
});

//Nguyen Truong ID:0003
document.addEventListener('DOMContentLoaded', function () {
  // Set the date we're counting down to
  var countdownTruongDate = new Date("Mar 10, 2024 00:00:00").getTime();

  // Update the countdownTruong every 1 second
  var x = setInterval(function() {
    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the remaining time
    var distance = countdownTruongDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdownTruong
    document.getElementById("days0003").innerHTML = days + "d :";
    document.getElementById("hours0003").innerHTML = hours + "h :";
    document.getElementById("minutes0003").innerHTML = minutes + "m :";
    document.getElementById("seconds0003").innerHTML = seconds + "s ";

    // If the countdownTruong is over, display a message
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdownTruong").innerHTML = "EXPIRED";
    }
  }, 1000);
});