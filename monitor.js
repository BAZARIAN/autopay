"use strict";

const getServersData = async () => {
  try {
    const request = await fetch("https://monitoring.rustylifes.com/servers");
    const response = await request.json();

    return response;
  } catch (error) {
    console.error(
      "Ops, something went wrong!"
    );

    return [];
  }
};
const declOfNum = (n, titles) => {
  return titles[
    n % 10 === 1 && n % 100 !== 11
      ? 0
      : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)
      ? 1
      : 2
  ];
};
const updateProgress = async () => {
  try {
    const serversData = await getServersData();
    for (let i = 0; i < serversData.length; i++) {
      var serverIP = serversData[i].ip;
      var serverPort = Number(serversData[i].port);
      var shopID = Number(serversData[i].shopID);
      var players_now = Number(serversData[i].players);
      var players_max = Number(serversData[i].maxPlayers);
      var players_joining = Number(serversData[i].joiningPlayers);
      var players_queued = Number(serversData[i].queuedPlayers);
      if ((document.querySelectorAll(`.xserver__links`)[i] !== null) && (document.querySelectorAll(`.xserver__links`)[i] !== undefined)) {
        if (document.querySelectorAll(`.xserver__links`)[i].innerHTML.includes(`steam://connect/`)) {
          console.log(document.querySelectorAll(`.xserver__links`)[i].innerHTML.includes(`steam://connect/`));
          document.querySelectorAll(`.xserver__links`)[i].innerHTML = `
          <a title="Игроки сервера" href="/servers/${shopID}/players">${players_now} / ${players_max}</a>
          <div class="ml-auto">
            <a title="Статистика сервера" href="/servers/${shopID}/stats">
              <i class="fa fa-bar-chart"></i>
            </a>
            <a title="Баны сервера" href="/servers/${shopID}/bans">
              <i class="fa fa-user-times"></i>
            </a>
            <a href="steam://run/252490//+connect ${serverIP}:${serverPort}" title="Подключиться к серверу">
              <i class="fa fa-play"></i>
            </a>
          </div>
        `;
        }
      }

      let buttonElement = document.querySelector(
        `a[href="steam://run/252490//+connect ${serversData[i].ip}:${serversData[i].port}"]`
      );
      if (!buttonElement) continue;

      const progressElement = buttonElement
        .closest(".xserver")
        .querySelector(".progress");
      const descriptionElement = buttonElement
        .closest(".xserver")
        .querySelector(".xserver__links");
      
      const moreInfoArray = [];
      const elementsArray = [];
      // serversData[0].joiningPlayers+=0;
      // serversData[0].queuedPlayers+=0;
      

      progressElement.innerHTML = `<div class="progress-bar progress-bar-animated progress-bar-striped allPlayers" id="players_now_${players_now}" style="width: ${
        (players_now * 100) / players_max
      }%;"></div>`;

      if (players_joining > 0) {
        elementsArray.push(
          `<div class="progress-bar progress-bar-animated progress-bar-striped joiningPlayers" id="players_joining_${players_joining}" style="width: ${
            (players_joining * 100) / players_max
          }%;"></div>`
        );
        moreInfoArray.push(
          `${players_joining} ${declOfNum(
            players_joining,
            ["подключается", "подключаются", "подключаются"]
            // ["", "", ""]
          )}`
        );
      }
      if (players_queued > 0) {
        elementsArray.push(
          `<div class="progress-bar progress-bar-animated progress-bar-striped queuedPlayers" id="players_queued_${players_queued}" style="width: ${
            (players_queued * 100) / players_max
          }%;"></div>`
        );
        moreInfoArray.push(`${players_queued} в очереди`);
      }
      progressElement.innerHTML += elementsArray.join("");
      if (players_max !== 0 && players_max !== 3) {
        descriptionElement.innerHTML = `
        <a title="Игроки сервера" href="/servers/${shopID}/players">${players_now} / ${players_max}</a>
        <div class="ml-auto">
          <a title="Статистика сервера" href="/servers/${shopID}/stats">
            <i class="fa fa-bar-chart"></i>
          </a>
          <a title="Баны сервера" href="/servers/${shopID}/bans">
            <i class="fa fa-user-times"></i>
          </a>
          <a href="steam://run/252490//+connect ${serverIP}:${serverPort}" title="Подключиться к серверу">
            <i class="fa fa-play"></i>
          </a>
        </div>
        `;
      }
      else {
        descriptionElement.innerHTML = `
        <a title="Игроки сервера" href="/servers/${shopID}/players" style="opacity: 0.5">Offline</a>
        <div class="ml-auto">
          <a title="Статистика сервера" href="/servers/${shopID}/stats">
            <i class="fa fa-bar-chart"></i>
          </a>
          <a title="Баны сервера" href="/servers/${shopID}/bans">
            <i class="fa fa-user-times"></i>
          </a>
          <a href="steam://run/252490//+connect ${serverIP}:${serverPort}" title="Подключиться к серверу">
            <i class="fa fa-play"></i>
          </a>
        </div>
        `;
      }
    }
  } catch (error) {
    console.error(error);
  }
};
setTimeout(() => {
  updateProgress();
  // dropdownInject();
}, 750);
setInterval(() => updateProgress(), 5 * 1000);
