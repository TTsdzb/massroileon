// Provide countdown data
const data = [
  {
    id: "0000",
    userPro: true,
    displayName: "MassroiLeon",
    donated: "Full",
  },
  {
    id: "0001",
    userPro: true,
    displayName: "Izumi",
    donated: "4$/24$",
    dueDate: "Mar 8, 2024 00:00:00",
  },
  {
    id: "0002",
    userPro: true,
    displayName: "Madohara",
    donated: "115K/512K",
    dueDate: "May 11, 2024 00:00:00",
  },
  {
    id: "0003",
    userPro: true,
    displayName: "Nguyen Truong",
    donated: "175K/512K",
    dueDate: "Apr 10, 2024 00:00:00",
  },
  {
    id: "0004",
    displayName: "Kyukami",
    donated: "2$/24$",
    dueDate: "Feb 9, 2024 00:00:00",
  },
  {
    id: "0005",
    userPro: true,
    displayName: "Vũ Đức",
    donated: "80K/512K",
    dueDate: "Mar 8, 2024 00:00:00",
  },
  {
    id: "0006",
    displayName: "zi7o",
    donated: "2$/24$",
    dueDate: "Feb 15, 2024 00:00:00",
  },
  {
    id: "0007",
    userPro: true,
    displayName: "Lucas",
    donated: "5$/24$",
    dueDate: "Apr 15, 2024 00:00:00",
  },
  {
    id: "0008",
    displayName: "Oreorio",
    donated: "2$/24$",
    dueDate: "Feb 14, 2024 00:00:00",
  },
  {
    id: "0009",
    userPro: true,
    displayName: "Samson",
    donated: "4$/24$",
    dueDate: "Mar 18, 2024 00:00:00",
  },
  {
    id: "0010",
    displayName: "Cheese",
    donated: "2$/24$",
    dueDate: "Feb 16, 2024 00:00:00",
  },
  {
    id: "0011",
    userPro: true,
    displayName: "RayRay_1112",
    donated: "4$/24$",
    dueDate: "Mar 18, 2024 00:00:00",
  },
  {
    id: "0012",
    userPro: true,
    displayName: "TTsdzb",
    donated: "Full",
  },
  {
    id: "0013",
    userPro: true,
    displayName: "Sunare Aiko Vt.",
    donated: "7$/24$",
    dueDate: "May 24, 2024 00:00:00",
  },
  {
    id: "0014",
    displayName: "San Ngọc",
    donated: "80K/512K",
    dueDate: "Mar 29, 2024 00:00:00",
  },
  {
    id: "0015",
    userPro: true,
    displayName: "Mai Trần Ngọc Anh",
    donated: "135K/512K",
    dueDate: "Jul 29, 2024 00:00:00",
  },
  {
    id: "0016",
    userPro: true,
    displayName: "Rimuru Izanobi",
    donated: "4$/24$",
    dueDate: "Mar 29, 2024 00:00:00",
  },
  {
    id: "0017",
    userPro: true,
    displayName: "Ái Nhi",
    donated: "Full",
  },
  {
    id: "0018",
    displayName: "Joseph Vu",
    donated: "2$/24$",
    dueDate: "Mar 11, 2024 00:00:00",
  },
  {
    id: "0019",
    displayName: "Đặng Đạt",
    donated: "70K/512K",
    dueDate: "Mar 9, 2024 00:00:00",
  },
  {
    id: "0020",
    displayName: "Christian Jay",
    donated: "2$/24$",
    dueDate: "Mar 10, 2024 00:00:00",
  },
  {
    id: "0021",
    userPro: true,
    displayName: "lid.n",
    donated: "Full",
  },
  {
    id: "0022",
    displayName: "bagelseeker",
    donated: "2$/24$",
    dueDate: "Mar 18, 2024 00:00:00",
  },
  {
    id: "0023",
    displayName: "Re UniuM",
    donated: "2$/24$",
    dueDate: "Mar 23, 2024 00:00:00",
  },
  {
    id: "0024",
    userPro: true,
    displayName: "ok boomber",
    donated: "Full",
  },
  {
    id: "0025",
    displayName: "Duy Nguyen Minh Dang",
    donated: "70K/512K",
    dueDate: "Mar 28, 2024 00:00:00",
  },
  {
    id: "0026",
    displayName: "36263572 bili",
    donated: "2$/24$",
    dueDate: "Mar 29, 2024 00:00:00",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  // Create a div to store countdowns
  const counts = document.createElement("div");
  counts.className = "column";

  // Prepare elements and data for each player
  data.forEach((player) => {
    const isPro = document.createElement("h2");
    const username = document.createElement("h2");

    isPro.innerHTML = `${player.userPro ? "Pro" : "New"} User: ${
      player.displayName
    } <br>ID: ${player.id}`;
    counts.appendChild(username);
    counts.appendChild(isPro);

    const isLife = document.createElement("h2");

    isLife.innerHTML = `LifeTime Status: ${
      player.dueDate === undefined ? "Yes" : "No"
    }`;
    counts.appendChild(isLife);

    // Convert date string to date
    if (player.dueDate !== undefined) player.dueDate = new Date(player.dueDate);

    const donatedcost = document.createElement("p");
    donatedcost.innerText = `Donated: ${player.donated}`;
    counts.appendChild(donatedcost);

    const expireTime = document.createElement("p");
    // If the player has lifetime privilege, simply ignore due date
    // Otherwise, format expire date from countdown data
    // This is a little complicated without third-party libraries
    expireTime.innerText = `Expired To : ${
      player.dueDate === undefined
        ? "Lifetime"
        : `${player.dueDate.getDate().toString().padStart(2, "0")}-${(
            player.dueDate.getMonth() + 1
          )
            .toString()
            .padStart(2, "0")}-${player.dueDate.getFullYear()}`
    }`;
    counts.appendChild(expireTime);

    // Convert date to timestamp
    if (player.dueDate !== undefined) player.dueDate = player.dueDate.getTime();

    counts.appendChild(document.createElement("br"));

    //Add reward for user
    const Rewarded = document.createElement("p");
    if (player.Reward !== undefined) {
      Rewarded.innerHTML = `Rewarded : ${player.Reward}`;
      counts.appendChild(Rewarded);
      counts.appendChild(document.createElement("br"));
    }

    const countdown = document.createElement("div");
    countdown.className = "countdown";
    countdown.id = `countdown${player.id}`;
    // If has lifetime privilege add an infinite char to counter
    countdown.innerHTML = `<span>Time remaining: </span><span id="time${
      player.id
    }">${player.dueDate === undefined ? "∞" : ""}</span>`;
    counts.appendChild(countdown);

    counts.appendChild(document.createElement("hr"));
  });

  // Add count container to the DOM tree
  document.getElementById("countdown-container").appendChild(counts);

  // Update the countdown every 1 second
  setInterval(function () {
    // Get the current date and time
    const now = new Date().getTime();

    data.forEach((player) => {
      // If player has lifetime privilege, ignore him
      if (player.dueDate === undefined) return;

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
        document.getElementById(`countdown${player.id}`).innerHTML =
          "<span>>>> Renewal failed: EXPIRED <<<</span><br><p>--- Account Status: Freeze ---</p>";
        return;
      }

      // Display the countdown
      document.getElementById(
        `time${player.id}`
      ).innerText = `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
    });
  }, 1000);
});
