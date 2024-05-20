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
    donated: "8$/24$",
    dueDate: "Jul 8, 2024 00:00:00",
  },
  {
    id: "0002",
    userPro: true,
    displayName: "Hớn Ngủ Khò Khò",
    donated: "161K/540K ?10K",
    dueDate: "Jul 16, 2024 00:00:00",
  },
  {
    id: "0003",
    userPro: true,
    displayName: "Nguyen Truong",
    donated: "225K/540K",
    dueDate: "Aug 10, 2024 00:00:00",
  }/*,
  {
    id: "0004",
    displayName: "Kyukami",
    donated: "0$/24$",
    dueDate: "Feb 9, 2024 00:00:00",
  }*/,
  {
    id: "0005",
    userPro: true,
    displayName: "Vũ Đức",
    donated: "146K/540K",
    dueDate: "Jun 7, 2024 00:00:00",
  }/*,
  {
    id: "0006",
    displayName: "zi7o",
    donated: "0$/24$",
    dueDate: "Feb 15, 2024 00:00:00",
  }*/,
  {
    id: "0007",
    userPro: true,
    displayName: "Lucas",
    donated: "7$/24$",
    dueDate: "Jun 14, 2024 00:00:00",
  }/*,
  {
    id: "0008",
    displayName: "Oreorio",
    donated: "0$/24$",
    dueDate: "Feb 14, 2024 00:00:00",
  },
  {
    id: "0009",
    displayName: "Samson",
    donated: "0$/24$",
    dueDate: "Mar 18, 2024 00:00:00",
  },
  {
    id: "0010",
    displayName: "Cheese",
    donated: "0$/24$",
    dueDate: "Feb 16, 2024 00:00:00",
  }*/,
  {
    id: "0011",
    displayName: "そのRay..",
    userPro: true,
    donated: "5$/24$",
    dueDate: "Jul 26, 2024 00:00:00",
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
    userPro: true,
    displayName: "San Ngọc",
    donated: "126K/540K",
    dueDate: "May 29, 2024 00:00:00",
  },
  {
    id: "0015",
    userPro: true,
    displayName: "Mai Trần Ngọc Anh",
    donated: "135K/540K ?23K",
    Reward : "Win Giveaway Event 07-05 (+1 Month)",
    dueDate: "Sep 6, 2024 00:00:00",
  },
  {
    id: "0016",
    userPro: true,
    displayName: "Rimuru Izanobi",
    donated: "171K/540K",
    dueDate: "Jul 29, 2024 00:00:00",
  },
  {
    id: "0017",
    userPro: true,
    displayName: "Ái Nhi",
    donated: "Full",
  },
  {
    id: "0018",
    userPro: true,
    displayName: "Joseph Vu",
    donated: "Full",
  },
  {
    id: "0019",
    userPro: true,
    displayName: "Đặng Đạt",
    donated: "116K/540K",
    dueDate: "Jun 11, 2024 00:00:00",
  }/*,
  {
    id: "0020",
    displayName: "Christian Jay",
    donated: "0$/24$",
    dueDate: "Mar 10, 2024 00:00:00",
  }*/,
  {
    id: "0021",
    userPro: true,
    displayName: "lid.n",
    donated: "Full",
  },
  /**{
    id: "0022",
    userPro: true,
    displayName: "bagelseeker",
    donated: "4$/24$",
    dueDate: "Apr 17, 2024 00:00:00",
  },
  {
    id: "0023",
    displayName: "Re UniuM",
    donated: "2$/24$",
    dueDate: "Mar 23, 2024 00:00:00",
  }*/,
  {
    id: "0024",
    userPro: true,
    displayName: "ok boomber",
    donated: "Full",
  }/*,
  {
    id: "0025",
    displayName: "Duy Nguyen Minh Dang",
    donated: "0K/540K",
    dueDate: "Mar 1, 2024 00:00:00",
  },
  {
    id: "0026",
    displayName: "36263572 bili",
    donated: "0$/24$",
    dueDate: "Mar 29, 2024 00:00:00",
  }*/,
  {
    id: "0027",
    displayName: "Zack",
    isPro: true,
    donated: "6$/24$",
    dueDate: "Jul 10, 2024 00:00:00",
  },
  {
    id: "0028",
    userPro: true,
    displayName: "fat ccllcc",
    donated: "6$/24$",
    dueDate: "Jul 1, 2024 00:00:00",
  },
  {
    id: "0029",
    displayName: "Moeo",
    Zone: "12-05-2024",
    donated: "149K/540K",
    dueDate: "Aug 12, 2024 00:00:00",
  },
  {
    id: "0030",
    userPro: true,
    displayName: "Haruinnqv.",
    donated: "Full",
  }/*,
  {
    id: "0031",
    displayName: "jeong jimin",
    donated: "2$/24$",
    dueDate: "Apr 9, 2024 00:00:00",
  },
  {
    id: "0032",
    displayName: "Airee",
    donated: "2$/24$",
    dueDate: "Apr 10, 2024 00:00:00",
  }*/,
  {
    id: "0033",
    userPro: true,
    displayName: "Korei",
    donated: "5$/24$",
    dueDate: "Jun 11, 2024 00:00:00",
  },
  {
    id: "0034",
    userPro: true,
    displayName: "Ka non",
    donated: "6$/24$",
    dueDate: "Jul 16, 2024 00:00:00",
  },
  /*{
    id: "0035",
    displayName: "Bims",
    donated: "2$/24$",
    dueDate: "Apr 16, 2024 00:00:00",
  },
  {
    id: "0036",
    displayName: "Ch1m Hoèng",
    donated: "50K/540K",
    dueDate: "Apr 20, 2024 00:00:00",
  },
  {
    id: "0037",
    displayName: "Celes Siesta",
    donated: "40K/540K",
    dueDate: "Apr 20, 2024 00:00:00",
  },
  {
    id: "0038",
    displayName: "Lulu Deer",
    donated: "2$/24$ & 2$/24$",
    dueDate: "Apr 21, 2024 00:00:00",
  }*/,
  {
    id: "0039",
    userPro: true,
    displayName: "清风 泡柠檬",
    donated: "16$/24$",
    dueDate: "May 31, 2025 00:00:00",
  },
  /*{
    id: "0040",
    displayName: "ᕕ(◠ڼ◠)ᕗ",
    donated: "2$/24$",
    dueDate: "Apr 26, 2024 00:00:00",
  },
  {
    id: "0041",
    displayName: "Cooper King",
    donated: "2$/24$",
    dueDate: "Apr 29, 2024 00:00:00",
  }*/,
  {
    id: "0042",
    isPro: true,
    displayName: "Tan Flame",
    donated: "4$/24$",
    dueDate: "Jun 2, 2024 00:00:00",
  },
  /*{
    id: "0043",
    displayName: "愛刃",
    donated: "2$/24$",
    dueDate: "May 3, 2024 00:00:00",
  },
  {
    id: "0044",
    displayName: "A S",
    donated: "2$/24$",
    dueDate: "May 5, 2024 00:00:00",
  }*/,
  {
    id: "0045",
    displayName: "bedmoonl bedmoonl",
    userPro: true,
    donated: "5$/24$",
    dueDate: "Jul 5, 2024 00:00:00",
  },
  {
    id: "0046",
    displayName: "Trofeo Requiem",
    userPro: true,
    donated: "5$/24$",
    dueDate: "Jul 5, 2024 00:00:00",
  },
  /*{
    id: "0047",
    displayName: "Ybe",
    donated: "2$/24$",
    dueDate: "May 12, 2024 00:00:00",
  },
  {
    id: "0048",
    displayName: "Onyix Veil",
    donated: "2$/24$",
    dueDate: "May 12, 2024 00:00:00",
  }*/,
  {
    id: "0049",
    displayName: "廻り",
    donated: "6$/24$",
    dueDate: "Jul 15, 2024 00:00:00",
  },
  {
    id: "0050",
    displayName: "Lý Triệu Huy",
    donated: "80K/540K",
    dueDate: "Jun 15, 2024 00:00:00",
  },
  {
    id: "0051",
    displayName: "beartar Z",
    donated: "2$/24$",
    dueDate: "May 16, 2024 00:00:00",
  },
  {
    id: "0052",
    displayName: "HelloKeqing Hà",
    donated: "80K/540K",
    dueDate: "Jun 15, 2024 00:00:00",
  },
  {
    id: "0053",
    displayName: "jjdbd djzhuz",
    donated: "2$/24$",
    dueDate: "Jun 20, 2024 00:00:00",
  },
  {
    id: "0054",
    displayName: "80742",
    donated: "4$/24$",
    dueDate: "May 20, 2024 00:00:00",
  },
  {
    id: "0055",
    userPro: true,
    displayName: "Li frozen",
    donated: "8$/24$",
    dueDate: "Oct 18, 2024 00:00:00",
  },
  {
    id: "0056",
    userPro: false,
    displayName: "ลิงเล็บขบ Ezymoney",
    donated: "2$/24$",
    dueDate: "Jun 4, 2024 00:00:00",
  },
  {
    id: "0057",
    userPro: false,
    displayName: "DFT1",
    donated: "2$/24$",
    dueDate: "Jun 5, 2024 00:00:00",
  },
  {
    id: "0058",
    userPro: true,
    displayName: "Tùng Tôm",
    donated: "80K/540K",
    dueDate: "Jun 5, 2024 00:00:00",
  },
  {
    id: "0059",
    userPro: true,
    displayName: "Hatura",
    donated: "45K/540K",
    dueDate: "Jun 6, 2024 00:00:00",
  },
  {
    id: "0060",
    displayName: "Patrick",
    donated: "2$/24$",
    dueDate: "Jun 13, 2024 00:00:00",
  },
  {
    id: "0061",
    displayName: ". .",
    donated: "2$/24$",
    dueDate: "May 21, 2024 00:00:00",
  },
  {
    id: "0062",
    displayName: "Hunk de Various",
    donated: "180K/540K",
    dueDate: "Nov 15, 2024 00:00:00",
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


    //Add zone for user
    const isZone = document.createElement("p");
    if (player.Zone !== undefined) {
      isZone.innerHTML = `Zone Date : ${player.Zone}`;
      counts.appendChild(isZone);
    }

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
