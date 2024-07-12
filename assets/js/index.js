const WALLETS = [
  "UQAQH…UHLzY",
  "UQAum…8kQrO",
  "UQB3l…JwRV8",
  "UQBBF…4nmo2",
  "UQA_A…kB8ff",
  "UQA1v…rVGQY",
  "UQA4j…JZ1-2",
  "UQA4Q…mntH0",
  "UQA8X…jr_ty",
  "UQABi…hSOD3",
];

const start = 30000;
const end = 50000;

const POINTS = [
  45783, 44621, 43097, 39872, 38129, 37291, 36012, 35892, 35451, 34821,
];

const checkMedal = (index) => {
  let stt = index + 1;
  if (stt == 1) {
    return "🥇";
  } else if (stt == 2) {
    return "🥈";
  } else if (stt == 3) {
    return "🥉";
  } else {
    return `#${stt}`;
  }
};

const leaderboardList = document.querySelector(".leaderboard-list");

if (leaderboardList) {
  leaderboardList.innerHTML = WALLETS.map(
    (wallet, index) =>
      ` <li class="leaderboard-item">
              <div class="info">
                <h4 class="wallet">${wallet}</h4>
                <p class="points"><span class="num"> ${
                  POINTS[index]
                } </span> frogs</p>
              </div>
              <p class="stt">${checkMedal(index)}</p>
            </li>`
  ).join("");
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwVWbZmA7Z_FcnYjVNwVzpFbZ2bDTbmPpkn3SLP-t310gLnWOl1lgSX2HgULGMRQ2xw/exec";

const form = document.forms["contract-form"];
const submitBtn = document.querySelector(".form .link-btn");

if (submitBtn) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) =>
        alert("Thank you! your wallet is submitted successfully.")
      )
      .then(() => {
        window.location.reload();
      })
      .catch((error) => console.error("Error!", error.message));
  });
}

const copyText = () => {
  navigator.clipboard.writeText(
    "https://t.me/+dqoMPV1lROQzYTFl. Frogs, lets see who is OG 🐸"
  );
  alert("Your invited link has been copied");
};
