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

//Kyukami ID:0004
document.addEventListener('DOMContentLoaded', function () {
  // Set the date we're counting down to
  var countdownKyukamiDate = new Date("Feb 9, 2024 00:00:00").getTime();

  // Update the countdownKyukami every 1 second
  var x = setInterval(function() {
    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the remaining time
    var distance = countdownKyukamiDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdownKyukami
    document.getElementById("days0004").innerHTML = days + "d :";
    document.getElementById("hours0004").innerHTML = hours + "h :";
    document.getElementById("minutes0004").innerHTML = minutes + "m :";
    document.getElementById("seconds0004").innerHTML = seconds + "s ";

    // If the countdownKyukami is over, display a message
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdownKyukami").innerHTML = "EXPIRED";
    }
  }, 1000);
});

//VuDuc ID:0005
document.addEventListener('DOMContentLoaded', function () {
  // Set the date we're counting down to
  var countdownVuDucDate = new Date("Mar 8, 2024 00:00:00").getTime();

  // Update the countdownVuDuc every 1 second
  var x = setInterval(function() {
    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the remaining time
    var distance = countdownVuDucDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdownVuDuc
    document.getElementById("days0005").innerHTML = days + "d :";
    document.getElementById("hours0005").innerHTML = hours + "h :";
    document.getElementById("minutes0005").innerHTML = minutes + "m :";
    document.getElementById("seconds0005").innerHTML = seconds + "s ";

    // If the countdownVuDuc is over, display a message
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdownVuDuc").innerHTML = "EXPIRED";
    }
  }, 1000);
});

//zi7o ID:0006
document.addEventListener('DOMContentLoaded', function () {
  // Set the date we're counting down to
  var countdownzi7oDate = new Date("Feb 13, 2024 00:00:00").getTime();

  // Update the countdownzi7o every 1 second
  var x = setInterval(function() {
    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the remaining time
    var distance = countdownzi7oDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdownzi7o
    document.getElementById("days0006").innerHTML = days + "d :";
    document.getElementById("hours0006").innerHTML = hours + "h :";
    document.getElementById("minutes0006").innerHTML = minutes + "m :";
    document.getElementById("seconds0006").innerHTML = seconds + "s ";

    // If the countdownzi7o is over, display a message
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdownzi7o").innerHTML = "EXPIRED";
    }
  }, 1000);
});

//Lucas ID:0007
document.addEventListener('DOMContentLoaded', function () {
  // Set the date we're counting down to
  var countdownLucasDate = new Date("Feb 13, 2024 00:00:00").getTime();

  // Update the countdownLucas every 1 second
  var x = setInterval(function() {
    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the remaining time
    var distance = countdownLucasDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdownLucas
    document.getElementById("days0007").innerHTML = days + "d :";
    document.getElementById("hours0007").innerHTML = hours + "h :";
    document.getElementById("minutes0007").innerHTML = minutes + "m :";
    document.getElementById("seconds0007").innerHTML = seconds + "s ";

    // If the countdownLucas is over, display a message
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdownLucas").innerHTML = "EXPIRED";
    }
  }, 1000);
});

//Oreorio ID:0008
document.addEventListener('DOMContentLoaded', function () {
  // Set the date we're counting down to
  var countdownOreorioDate = new Date("Feb 14, 2024 00:00:00").getTime();

  // Update the countdownOreorio every 1 second
  var x = setInterval(function() {
    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the remaining time
    var distance = countdownOreorioDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdownOreorio
    document.getElementById("days0008").innerHTML = days + "d :";
    document.getElementById("hours0008").innerHTML = hours + "h :";
    document.getElementById("minutes0008").innerHTML = minutes + "m :";
    document.getElementById("seconds0008").innerHTML = seconds + "s ";

    // If the countdownOreorio is over, display a message
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdownOreorio").innerHTML = "EXPIRED";
    }
  }, 1000);
});

//Samson ID:0009
document.addEventListener('DOMContentLoaded', function () {
  // Set the date we're counting down to
  var countdownSamsonDate = new Date("Feb 16, 2024 00:00:00").getTime();

  // Update the countdownSamson every 1 second
  var x = setInterval(function() {
    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the remaining time
    var distance = countdownSamsonDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdownSamson
    document.getElementById("days0009").innerHTML = days + "d :";
    document.getElementById("hours0009").innerHTML = hours + "h :";
    document.getElementById("minutes0009").innerHTML = minutes + "m :";
    document.getElementById("seconds0009").innerHTML = seconds + "s ";

    // If the countdownSamson is over, display a message
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdownSamson").innerHTML = "EXPIRED";
    }
  }, 1000);
});

//Cheese ID:0010
document.addEventListener('DOMContentLoaded', function () {
  // Set the date we're counting down to
  var countdownCheeseDate = new Date("Feb 16, 2024 00:00:00").getTime();

  // Update the countdownCheese every 1 second
  var x = setInterval(function() {
    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the remaining time
    var distance = countdownCheeseDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdownCheese
    document.getElementById("days0010").innerHTML = days + "d :";
    document.getElementById("hours0010").innerHTML = hours + "h :";
    document.getElementById("minutes0010").innerHTML = minutes + "m :";
    document.getElementById("seconds0010").innerHTML = seconds + "s ";

    // If the countdownCheese is over, display a message
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdownCheese").innerHTML = "EXPIRED";
    }
  }, 1000);
});

//RayRay ID:0011
document.addEventListener('DOMContentLoaded', function () {
  // Set the date we're counting down to
  var countdownRayRayDate = new Date("Feb 14, 2024 00:00:00").getTime();

  // Update the countdownRayRay every 1 second
  var x = setInterval(function() {
    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the remaining time
    var distance = countdownRayRayDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdownRayRay
    document.getElementById("days0011").innerHTML = days + "d :";
    document.getElementById("hours0011").innerHTML = hours + "h :";
    document.getElementById("minutes0011").innerHTML = minutes + "m :";
    document.getElementById("seconds0011").innerHTML = seconds + "s ";

    // If the countdownRayRay is over, display a message
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdownRayRay").innerHTML = "EXPIRED";
    }
  }, 1000);
});

//TTsdzb ID:0012
document.addEventListener('DOMContentLoaded', function () {
  // Set the date we're counting down to
  var countdownTTsdzbDate = new Date("Mar 20, 2024 00:00:00").getTime();

  // Update the countdownTTsdzb every 1 second
  var x = setInterval(function() {
    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the remaining time
    var distance = countdownTTsdzbDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdownTTsdzb
    document.getElementById("days0012").innerHTML = days + "d :";
    document.getElementById("hours0012").innerHTML = hours + "h :";
    document.getElementById("minutes0012").innerHTML = minutes + "m :";
    document.getElementById("seconds0012").innerHTML = seconds + "s ";

    // If the countdownTTsdzb is over, display a message
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdownTTsdzb").innerHTML = "EXPIRED";
    }
  }, 1000);
});

//SunareAi ID:0013
document.addEventListener('DOMContentLoaded', function () {
  // Set the date we're counting down to
  var countdownSunareAiDate = new Date("Feb 18, 2024 00:00:00").getTime();

  // Update the countdownSunareAi every 1 second
  var x = setInterval(function() {
    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the remaining time
    var distance = countdownSunareAiDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdownSunareAi
    document.getElementById("days0013").innerHTML = days + "d :";
    document.getElementById("hours0013").innerHTML = hours + "h :";
    document.getElementById("minutes0013").innerHTML = minutes + "m :";
    document.getElementById("seconds0013").innerHTML = seconds + "s ";

    // If the countdownSunareAi is over, display a message
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdownSunareAi").innerHTML = "EXPIRED";
    }
  }, 1000);
});

//SanNgoc ID:0014
document.addEventListener('DOMContentLoaded', function () {
  // Set the date we're counting down to
  var countdownSanNgocDate = new Date("Feb 27, 2024 00:00:00").getTime();

  // Update the countdownSanNgoc every 1 second
  var x = setInterval(function() {
    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the remaining time
    var distance = countdownSanNgocDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdownSanNgoc
    document.getElementById("days0014").innerHTML = days + "d :";
    document.getElementById("hours0014").innerHTML = hours + "h :";
    document.getElementById("minutes0014").innerHTML = minutes + "m :";
    document.getElementById("seconds0014").innerHTML = seconds + "s ";

    // If the countdownSanNgoc is over, display a message
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdownSanNgoc").innerHTML = "EXPIRED";
    }
  }, 1000);
});

//NgocAnh ID:0015
document.addEventListener('DOMContentLoaded', function () {
  // Set the date we're counting down to
  var countdownNgocAnhDate = new Date("Feb 27, 2024 00:00:00").getTime();

  // Update the countdownNgocAnh every 1 second
  var x = setInterval(function() {
    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the remaining time
    var distance = countdownNgocAnhDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdownNgocAnh
    document.getElementById("days0015").innerHTML = days + "d :";
    document.getElementById("hours0015").innerHTML = hours + "h :";
    document.getElementById("minutes0015").innerHTML = minutes + "m :";
    document.getElementById("seconds0015").innerHTML = seconds + "s ";

    // If the countdownNgocAnh is over, display a message
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdownNgocAnh").innerHTML = "EXPIRED";
    }
  }, 1000);
});

//RimuruIz ID:0016
document.addEventListener('DOMContentLoaded', function () {
  // Set the date we're counting down to
  var countdownRimuruIzDate = new Date("Feb 27, 2024 00:00:00").getTime();

  // Update the countdownRimuruIz every 1 second
  var x = setInterval(function() {
    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the remaining time
    var distance = countdownRimuruIzDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdownRimuruIz
    document.getElementById("days0016").innerHTML = days + "d :";
    document.getElementById("hours0016").innerHTML = hours + "h :";
    document.getElementById("minutes0016").innerHTML = minutes + "m :";
    document.getElementById("seconds0016").innerHTML = seconds + "s ";

    // If the countdownRimuruIz is over, display a message
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdownRimuruIz").innerHTML = "EXPIRED";
    }
  }, 1000);
});

//AiNhi ID:0017
document.addEventListener('DOMContentLoaded', function () {
  // Set the date we're counting down to
  var countdownAiNhiDate = new Date("Mar 6, 2024 00:00:00").getTime();

  // Update the countdownAiNhi every 1 second
  var x = setInterval(function() {
    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the remaining time
    var distance = countdownAiNhiDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdownAiNhi
    document.getElementById("days0017").innerHTML = days + "d :";
    document.getElementById("hours0017").innerHTML = hours + "h :";
    document.getElementById("minutes0017").innerHTML = minutes + "m :";
    document.getElementById("seconds0017").innerHTML = seconds + "s ";

    // If the countdownAiNhi is over, display a message
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdownAiNhi").innerHTML = "EXPIRED";
    }
  }, 1000);
});