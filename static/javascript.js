// Provide countdown data
const data = [
  {
    id: "0001",
    countdownName: "Izumi",
    dueDate: "Mar 8, 2024 00:00:00",
  },
  {
    id: "0002",
    countdownName: "Madohara",
    dueDate: "Mar 7, 2024 00:00:00",
  },
  {
    id: "0003",
    countdownName: "Truong",
    dueDate: "Mar 10, 2024 00:00:00",
  },
  {
    id: "0004",
    countdownName: "Kyukami",
    dueDate: "Feb 9, 2024 00:00:00",
  },
  {
    id: "0005",
    countdownName: "VuDuc",
    dueDate: "Mar 8, 2024 00:00:00",
  },
  {
    id: "0006",
    countdownName: "zi7o",
    dueDate: "Feb 13, 2024 00:00:00",
  },
  {
    id: "0007",
    countdownName: "Lucas",
    dueDate: "Feb 13, 2024 00:00:00",
  },
  {
    id: "0008",
    countdownName: "Oreorio",
    dueDate: "Feb 14, 2024 00:00:00",
  },
  {
    id: "0009",
    countdownName: "Samson",
    dueDate: "Feb 16, 2024 00:00:00",
  },
  {
    id: "0010",
    countdownName: "Cheese",
    dueDate: "Feb 16, 2024 00:00:00",
  },
  {
    id: "0011",
    countdownName: "RayRay",
    dueDate: "Feb 14, 2024 00:00:00",
  },
  {
    id: "0012",
    countdownName: "TTsdzb",
    dueDate: "Mar 20, 2024 00:00:00",
  },
  {
    id: "0013",
    countdownName: "SunareAi",
    dueDate: "Feb 18, 2024 00:00:00",
  },
  {
    id: "0014",
    countdownName: "SanNgoc",
    dueDate: "Feb 27, 2024 00:00:00",
  },
  {
    id: "0015",
    countdownName: "NgocAnh",
    dueDate: "Feb 27, 2024 00:00:00",
  },
  {
    id: "0016",
    countdownName: "RimuruIz",
    dueDate: "Feb 27, 2024 00:00:00",
  },
  {
    id: "0017",
    countdownName: "AiNhi",
    dueDate: "Mar 6, 2024 00:00:00",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  // Convert date string to timestamp
  data.forEach((player) => {
    player.dueDate = new Date(player.dueDate).getTime();
  });

  // Update the countdown every 1 second
  setInterval(function () {
    // Get the current date and time
    const now = new Date().getTime();

    data.forEach((player) => {
      // Calculate the remaining time
      const distance = player.dueDate - now;

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // If the countdown is over, display a message
      if (distance < 0) {
        clearInterval(x);
        document.getElementById(`countdown${player.countdownName}`).innerHTML =
          "EXPIRED";
        return;
      }

      // Display the countdown
      document.getElementById(`days${player.id}`).innerHTML = days + "d :";
      document.getElementById(`hours${player.id}`).innerHTML = hours + "h :";
      document.getElementById(`minutes${player.id}`).innerHTML =
        minutes + "m :";
      document.getElementById(`seconds${player.id}`).innerHTML = seconds + "s ";
    });
  }, 1000);
});
