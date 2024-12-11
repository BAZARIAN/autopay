const apiUrl = 'https://pay.rustylifes.com/api',	
tebexURL = `${apiUrl}/tebex/pay`,
tomeUrl = `${apiUrl}/tome/pay`,
centAppUrl = `${apiUrl}/centapp/pay`,
enotUrl = `${apiUrl}/enot/pay`,
freekassaUrl = `${apiUrl}/freekassa/pay`,
cryptomusUrl = `${apiUrl}/cryptomus/pay`,
skinsbackUrl = `${apiUrl}/skinsback/pay`,
ovhBGURL = "https://pic.moscow.ovh/images/2023/11/22/18c77bbc761dfc824135c5eaeef0a3d7.png",
telegramURL = "https://t.me/rusty_life_pay";
let langSwitch = "ru";
var curcontent = new Array();
var images = [];
let lang = {
	close: "Закрыть",
    rules: "Правила",
    kits: "Киты",
    wipeBlock: "Вайпблок",
    wipeBlock_Title: "БЛОКИРОВКА ПРЕДМЕТОВ ПОСЛЕ ВАЙПА",
	hour1: "Час",
	hour2: "Часа",
	hour5: "Часов",
	refilMin: "Минимальная сумма",
	refilAmountInput: "Введите сумму",
	refilTitle: "ПОПОЛНЕНИЕ БАЛАНСА",
	refilButton: "ПОПОЛНИТЬ",
	contactButton: "СВЯЗАТЬСЯ",
	kitsStandart: "Стандартные",
	kitsStandart_Title: "СТАНДАРТНЫЕ КИТЫ",
	kitsDonate_Title: "ПЛАТНЫЕ КИТЫ",
	kits_home: "Кит \"Дом\"",
	kits_hunt: "Кит \"Охотник\"",
	kits_med: "Кит \"Медицина\"",
	kits_food: "Кит \"Еда\"",
	kits_nickname: "Кит за \"#rustylife\" в нике",
	kits_pvp: "Кит \"PVP\"",
	kits_res: "Кит \"Ресурсы\"",
	kits_comp: "Кит \"Компоненты\"",
	kits_dop: "Кит \"Дополнительный\"",
	kits_tools: "Кит \"Инструменты\"",
	kitsList_x5: "X5 КИТЫ",
	kitsList_x1point5: "X1.5 КИТЫ",
	kitsWipeBlock_2h: "Блокировка после вайпа - 2 часа",
	kitsWipeBlock_3h: "Блокировка после вайпа - 3 часа",
	kitsWipeBlock_6h: "Блокировка после вайпа - 6 часов",
	kitsCooldown_10m: "ОТКАТ 10М",
	kitsCooldown_2h: "ОТКАТ 2Ч",
	kitsCooldown_3h: "ОТКАТ 3Ч",
	kitsCooldown_12h: "ОТКАТ 12Ч",
	kitsCooldown_23h: "ОТКАТ 23Ч",
	kitsCooldown_24h: "ОТКАТ 24Ч",
	kitsCooldown_once: "1 РАЗ В ВАЙП",
	wipeBlock_1: "1 ЧАС",
	wipeBlock_2: "2 ЧАСА",
	wipeBlock_3: "3 ЧАСА",
	wipeBlock_4: "5 ЧАСОВ",
	wipeBlock_5: "23 ЧАСА",
	wipeBlock_6: "24 ЧАСА",
	wipeBlock_7: "26 ЧАСОВ",
	rules_Text: `<div class="xbox_custom_rules"><ul><p class="MsoNormal"><span>Основная информация</span></p>\
	<p><li>Незнание правил не освобождает Вас от ответственности.</li></p>\
	<p><li>Зайдя на сервер Вы автоматически соглашаетесь со всеми нижеперечисленными пунктами правил.</li></p>\
	<p><li>Вы несете ответственность за все свои аккаунты. Получив бан на одном - Вы получите его и на других. То же самое будет, если на одном из ваших аккаунтах имеется EAC блокировка.</li></p>\
	<p><li>Если Вы уже были замечены с читами / макросами на другом проекте и на вас есть доказательства - мы имеем право забанить Вас без проверки.</li></p>\
	<p><li>Администрация не компенсирует игровые ценности, утраченные по причине вашей ошибки, серверных лагов, багов игры или контактом с нарушителями.</li></p>\
	<p><li>Запрещена продажа или реклама Читов/Макросов.</li></p>\
	<p><li>Запрещено выдавать себя за Администратора, модератора или проверяющего.</li></p>\
	<p><li>Наказание для игрока зависит от степени нарушения и обстоятельств. Нарушитель может получить предупреждение, временный либо перманентный бан.</li></p>\
	<p><li>При серьезном нарушении правил, блокировка выдаётся на всех серверах проекта. За игру сверх разрешенного лимита блокировка выдается только на сервере, где было зафиксировано нарушение.</li></p><br>\
	<p class="MsoNormal"><span>Геймплей</span></li></p>\
	<p><li>Запрещено использовать/хранить/распространять Читы/Макросы или любое другое ПО, позволяющие получить преимущество над другими игроками. Наличие покупки или подписки приравнивается к хранению стороннего ПО.</li></p>\
	<p><li>Запрещена игра с читерами.</li></p>\
	<p><li>Запрещено использование багов с целью или без цели получения преимущества над другими игроками.</li></p>\
	<p><li>Запрещено использование услуг читеров.</li></p><br>\
	<p class="MsoNormal"><span>Нарушение лимита игроков в команде</span></li></p>\
	<p><li>Запрещено жить больше положенного лимита в одном доме.</li></p>\
	<p><li>Запрещено устраивать альянсы и перемирия с соседями, если в сумме Вас больше, указанного в названии сервера, максимума.</li></p>\
	<p><li>Запрещено рейдить/антирейдить или убивать в 1+/2+/3+ и т.д., в зависимости от максимально разрешенного количества игроков в команде, а так-же нельзя в целом каким-либо образом кооперироваться с игроками, если Ваша команда полная.</li></p><br>\
	<p><li>Чрезмерно частая смена тиммейтов будет считаться за нарушение.</li></p>\
	<p class="MsoNormal"><span>Игровой Чат</span></li></p>\
	<p><li>Запрещены ссылки в чате на сторонние сервисы и сайты, не относящиеся к проекту.</li></p>\
	<p><li>Запрещен флуд (многократное повторение бессмысленных фраз, символов) или многократное отправление одинаковых фраз за короткий промежуток времени.</li></p>\
	<p><li>Запрещено продавать или делать вид, что Вы продаёте Читы/Макросы.</li></p>\
	<p><li>Запрещено продавать игровые ценности за реальную валюту (RMT).</li></p>\
	<p><li>Модерация оставляет за собой право выдать мут игроку в чате, если тот нарушает правила чата.</li></p>\<br>\
	<p class="MsoNormal"><span>Проверки</span></li></p>\
	<p><li>Проверки проходят только через программу «Discord». Каждый игрок на нашем проекте, в обязательном порядке должен иметь эту программу на своём ПК.</li></p>\
	<p><li>Вы имеете полное право отказаться проходить проверку, но в этом случае Вы будете заблокированы.</li></p>\
	<p><li>Так же отказом от проверки будет считаться выход с сервера или предоставление некорректных контактных данных.</li></p>\
	<p><li>Игнорирование вызова на проверку увенчается блокировкой.</li></p>\
	<p><li>При согласии на проверку вы разрешаете устанавливать сторонние программы нужные администрации для проверки вашего ПК.</li></p>\
	<p><li>Выход с сервера во время вызова на проверку закончится блокировкой.</li></p>\
	<p><li>Запрещено чистить ПК перед проверкой.</li></p>\
	<p><li>За отказ показывать нужную для проверки информацию или неадекватное поведение — Вы будете заблокированы.</li></p>\
	<p><li>Если по итогам проверки игрок получает бан за читы — вся его команда блокируется вместе с ним.</li></p><br>\
	<p class="MsoNormal"><span>Причины банов</span></li></p>\
	<p><li>Использование читов - Бан навсегда, а также бан тиммейтов на 2 месяца.</li></p>\
	<p><li>Использование услуг просвета - Бан навсегда.</li></p>\
	<p><li>Отказ от проверки - Бан навсегда.</li></p>\
	<p><li>Использование макросов - Бан на 1 год.</li></p>\
	<p><li>Игра сверх разрешенного лимита - Бан на 1 месяц.</li></p><br>\
	</ul><div class="unban" style="background: #333; border-radius: 10px; padding: 20px;"><p class="MsoNormal2" style="font-weight: bold; margin-bottom: 5px;">Возможность разблокировки</p><span>Не менее, чем через месяц после блокировки можно подать апелляцию, но только в том случае, если бан был получен не за читы или макросы. Писать апелляцию нужно в личные сообщения отдельной группы: <a href="https://vk.com/rusty_life_moder">vk.com/rusty_life_moder</a></span></div></div></div>`
}
const langEN = {
	close: "Close",
    rules: "Rules",
    kits: "Kits",
    wipeBlock: "Wipe Block",
    wipeBlock_Title: "ITEMS BLOCK AFTER WIPE",
	hour1: "Hour",
	hour2: "Hours",
	hour5: "Hours",
	refilMin: "Minimum amount",
	refilAmountInput: "Enter the amount",
	refilTitle: "BALANCE REPLENISHMENT",
	refilButton: "DEPOSIT",
	contactButton: "CONTACT",
	kitsStandart: "Default",
	kitsStandart_Title: "STANDART KITS",
	kitsDonate_Title: "DONATE KITS",
	kits_home: "Kit \"Home\"",
	kits_hunt: "Kit \"Hunt\"",
	kits_med: "Kit \"Med\"",
	kits_food: "Kit \"Food\"",
	kits_nickname: "Kit for \"#rustylife\" in the nickname",
	kits_pvp: "Kit \"PVP\"",
	kits_res: "Kit \"Resources\"",
	kits_comp: "Kit \"Components\"",
	kits_dop: "Kit \"Additional\"",
	kits_tools: "Kit \"Tools\"",
	kitsList_x5: "X5 KITS",
	kitsList_x1point5: "X1.5 KITS",
	kitsWipeBlock_2h: "Block After Wipe - 2 hours",
	kitsWipeBlock_3h: "Block After Wipe - 3 hours",
	kitsWipeBlock_6h: "Block After Wipe - 6 hours",
	kitsCooldown_10m: "COOLDOWN 10M",
	kitsCooldown_2h: "COOLDOWN 2H",
	kitsCooldown_3h: "COOLDOWN 3H",
	kitsCooldown_12h: "COOLDOWN 12H",
	kitsCooldown_23h: "COOLDOWN 23H",
	kitsCooldown_24h: "COOLDOWN 24H",
	kitsCooldown_once: "ONCE PER WIPE",
	wipeBlock_1: "1 HOUR",
	wipeBlock_2: "2 HOURS",
	wipeBlock_3: "3 HOURS",
	wipeBlock_4: "5 HOURS",
	wipeBlock_5: "23 HOURS",
	wipeBlock_6: "24 HOURS",
	wipeBlock_7: "26 HOURS",
	rules_Text: `<div class="xbox_custom_rules"><ul><p class="MsoNormal"><span>Main Information</span></p>\
	<p><li>Ignorance of the rules does not absolve you from responsibility.</li></p>\
	<p><li>By logging on to the server, you automatically agree to all of the following points of the rules.</li></p>\
	<p><li>You are responsible for all your accounts. If you get banned on one, you will get it on the others. The same will happen if there is an EAC ban on one of your accounts.</li></p>\
	<p><li>If you have already been noticed with cheats/macros on another project and there is evidence against you, we have the right to ban you without checking.</li></p>\
	<p><li>The administration does not compensate for game values lost due to your error, server lags, game bugs or contact with violators.</li></p>\
	<p><li>The sale or advertising of Cheats and Macro is prohibited.</li></p>\
	<p><li>It is forbidden to impersonate an Administrator, Moderator.</li></p>\
	<p><li>The punishment for the player depends on the degree of violation and the circumstances. The violator may receive a warning, temporary or permanent ban.</li></p>\
	<p><li>In case of serious violation of the rules, the lock is issued on all servers of the project. For a game over the allowed limit, the lock is issued only on the server where the violation was recorded.</li></p><br>\
	<p class="MsoNormal"><span>Gameplay</span></li></p>\
	<p><li>It is forbidden to use/store/distribute Cheats/Macros or any other software that allows you to gain an advantage over other players. Having a purchase or subscription is equivalent to storing third-party software.</li></p>\
	<p><li>Playing with cheaters is prohibited.</li></p>\
	<p><li>It is forbidden to use bugs with or without the purpose of gaining an advantage over other players.</li></p>\
	<p><li>It is forbidden to use the services of cheaters.</li></p><br>\
	<p class="MsoNormal"><span>Alliances</span></li></p>\
	<p><li>It is forbidden to live more than the prescribed limit in one house.</li></p>\
	<p><li>It is forbidden to arrange alliances and truces with neighbors, if in total you are more than the maximum specified in the name of the server.</li></p>\
	<p><li>It is forbidden to raid/anti-raid or kill in 1+/2+/3+ etc., depending on the maximum allowed number of players in the team, as well as it is generally impossible to cooperate in any way with the players if your team is complete.</li></p><br>\
	<p><li>An excessively frequent change of teammates will be considered a violation.</li></p>\
	<p class="MsoNormal"><span>In-Game Chat</span></li></p>\
	<p><li>Chat links to third-party services and sites that are not related to the project are prohibited.</li></p>\
	<p><li>Flood (repeated repetition of meaningless phrases, symbols) or multiple sending of identical phrases in a short period of time is prohibited.</li></p>\
	<p><li>It is forbidden to sell or pretend that you are selling Cheats/Macros.</li></p>\
	<p><li>It is forbidden to sell game values for real currency (RMT).</li></p>\
	<p><li>Moderation reserves the right to issue a mutation to a player in the chat if he violates the chat rules.</li></p>\<br>\
	<p class="MsoNormal"><span>Verefications</span></li></p>\
	<p><li>Checks are carried out only through the program "Discord". Every player on our project must necessarily have this program on his PC.</li></p>\
	<p><li>You have every right to refuse to undergo verification, but in this case you will be blocked.</li></p>\
	<p><li>Also, the refusal of verification will be considered to be logging out of the server or providing incorrect contact data.</li></p>\
	<p><li>Ignoring the call for verification will result in blocking.</li></p>\
	<p><li>If you agree to the verification, you allow the installation of third-party programs necessary for the administration to check your PC.</li></p>\
	<p><li>Logging out of the server during a call for verification will end in blocking.</li></p>\
	<p><li>It is forbidden to clean the PC before checking.</li></p>\
	<p><li>If you refuse to show the necessary information for verification or inappropriate behavior, you will be blocked.</li></p>\
	<p><li>If, according to the results of the check, the player gets banned for cheats, his entire team is blocked along with him.</li></p><br>\
	<p class="MsoNormal"><span>Reasons For The Ban</span></li></p>\
	<p><li>Using cheats - Ban forever, as well as ban teammates for 2 months.</li></p>\
	<p><li>The use of x-ray services is banned forever.</li></p>\
	<p><li>Refusal to check - Ban forever.</li></p>\
	<p><li>Using macros is banned for 1 year.</li></p>\
	<p><li>The game over the allowed limit is banned for 1 month.</li></p><br>\
	</ul><div class="unban" style="background: #333; border-radius: 10px; padding: 20px;"><p class="MsoNormal2" style="font-weight: bold; margin-bottom: 5px;">The Ability To Unlock</p><span>At least a month after the blocking, you can appeal, but only if the ban was not received for cheats or macros. You need to write an appeal in private messages of a separate group: <a href="https://discord.gg/rusty-life-286929290132586497">Discord</a></span></div></div></div>`
}
let langWipe = ["1 ЧАС","2 ЧАСА","3 ЧАСА","5 ЧАСОВ","23 ЧАСА","24 ЧАСА","26 ЧАСОВ"];
const langWipeEN = ["1 HOUR","2 HOURS","3 HOURS","5 HOURS","23 HOURS","24 HOURS","26 HOURS"];

function obtainLang(e) {
	if (e==1) {
		if (CustomerSteamId != "0" && CustomerSteamId != "") {
			return;
		}
		var xmlHttp = new XMLHttpRequest();
		if (xmlHttp != null) {
			xmlHttp.open("GET", "/api/index.php?modules=users&action=getData", true);
			xmlHttp.send(null);
		}
		xmlHttp.onload = function (gjson) {
			var gjson = JSON.parse(xmlHttp.response);
			console.log(gjson);
			var preLang = gjson.data.lang;
			if (preLang == "RU") {
				lang = langEN;
				langWipe = langWipeEN;
			}
		}
	}
	if (e==2) {
		var slides = document.getElementsByClassName("nav-link");
		for (var i = 0; i < slides.length; i++) {
			var elelink = slides.item(i);
			var urlelelink = elelink.getAttribute("href");
			if (urlelelink.startsWith('/api/lang.php')) {
				if (elelink.innerHTML == "<span>Ru</span>") {
					console.log('EN Setup');
					lang = langEN;
					langWipe = langWipeEN;
					langSwitch = "en";
					document.querySelector(":root").style.setProperty("--pseudo-content-free", `"FREE CASE"`);
				}
			}
		}
	}
}

function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

document.addEventListener("DOMContentLoaded", function() {
	try {
		obtainShopSteamId();
	} catch (e) {
		console.log('SteamID element not found ' + e);
	}
	try {
		obtainLang(2);
	} catch (e) {
		console.log('Lang element not found ' + e);
	}
	curcontent["rules"] = {
		xhead: lang.rules,
		xcon: lang.rules_Text
	};
	curcontent["kit-prem"] = {
		xhead: lang.kitsDonate_Title,
		xcon: `<div class="store-categories">\
		<button class="btn btn-secondary" onclick="Open(\'kit-free\', false);">${lang.kitsStandart}</button>\
		<button class="btn btn-secondary active">PREM</button>\
		<button class="btn btn-secondary" onclick="Open(\'kit-elite\', false);">ELITE</button>\
		<button class="btn btn-secondary" onclick="Open(\'kit-life\', false);">LIFE</button>\
		<button class="btn btn-secondary" onclick="Open(\'kit-rusty\', false);">RUSTY</button>\
		<button class="btn btn-secondary2" onclick="Open(\'kit-prem2\', false);">${lang.kitsList_x5}</button>\
		<div class="xbox_custom_kits" ><div class="serverheader">${lang.kits_pvp} - <span>${lang.kitsCooldown_3h}</span></div>\
			<div class="kit_set"><div class="kit-items">\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/smg.thompson.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/ammo.pistol.png">\
				<div class="kit-item__quantity">x200</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/coffeecan.helmet.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.jacket.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.kilt.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/tactical.gloves.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/hoodie.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pants.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/shoes.boots.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png">\
				<div class="kit-item__quantity">x10</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/largemedkit.png">\
				<div class="kit-item__quantity">x10</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/blueberries.png">\
				<div class="kit-item__quantity">x10</div></div></div>\
		</div></div></div>\
		<div class="xbox_custom_kits" ><div class="serverheader">${lang.kits_res} - <span>${lang.kitsCooldown_24h}</span></div>\
			<div class="kit_set"><div class="kit-items">\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/wood.png">\
				<div class="kit-item__quantity">x25000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/stones.png">\
				<div class="kit-item__quantity">x25000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png">\
				<div class="kit-item__quantity">x15000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.refined.png">\
				<div class="kit-item__quantity">x750</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/cloth.png">\
				<div class="kit-item__quantity">x2000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/leather.png">\
				<div class="kit-item__quantity">x2000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/lowgradefuel.png">\
				<div class="kit-item__quantity">x2000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/scrap.png">\
				<div class="kit-item__quantity">x1000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sulfur.png">\
				<div class="kit-item__quantity">x15000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/charcoal.png">\
				<div class="kit-item__quantity">x15000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/supply.signal.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
		</div></div></div>\
		<div class="xbox_custom_kits" ><div class="serverheader">${lang.kits_comp} - <span>${lang.kitsCooldown_24h}</span></div>\
			<div class="kit_set"><div class="kit-items">\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalpipe.png">\
				<div class="kit-item__quantity">x75</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/techparts.png">\
				<div class="kit-item__quantity">x25</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/riflebody.png">\
				<div class="kit-item__quantity">x5</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/smgbody.png">\
				<div class="kit-item__quantity">x5</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/semibody.png">\
				<div class="kit-item__quantity">x5</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalspring.png">\
				<div class="kit-item__quantity">x75</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sewingkit.png">\
				<div class="kit-item__quantity">x75</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rope.png">\
				<div class="kit-item__quantity">x75</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/gears.png">\
				<div class="kit-item__quantity">x75</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalblade.png">\
				<div class="kit-item__quantity">x75</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsigns.png">\
				<div class="kit-item__quantity">x75</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/tarp.png">\
				<div class="kit-item__quantity">x50</div></div></div>\
		</div></div></div>`
	};
	
	curcontent["kit-elite"] = {
		xhead: lang.kitsDonate_Title,
		xcon: `<div class="store-categories">\
		<button class="btn btn-secondary" onclick="Open(\'kit-free\', false);">${lang.kitsStandart}</button>\
		<button class="btn btn-secondary" onclick="Open(\'kit-prem\', false);">PREM</button>\
		<button class="btn btn-secondary active">ELITE</button>\
		<button class="btn btn-secondary" onclick="Open(\'kit-life\', false);">LIFE</button>\
		<button class="btn btn-secondary" onclick="Open(\'kit-rusty\', false);">RUSTY</button>\
		<button class="btn btn-secondary2" onclick="Open(\'kit-elite2\', false);">${lang.kitsList_x5}</button>\
		<div class="xbox_custom_kits" ><div class="serverheader">${lang.kits_pvp} - <span>${lang.kitsCooldown_3h}</span></div>\
			<div class="kit_set"><div class="kit-items">\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/smg.mp5.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/ammo.pistol.png">\
				<div class="kit-item__quantity">x200</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rifle.semiauto.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/ammo.rifle.png">\
				<div class="kit-item__quantity">x200</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.facemask.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.plate.torso.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.kilt.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/tactical.gloves.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/hoodie.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pants.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/shoes.boots.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png">\
				<div class="kit-item__quantity">x15</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/largemedkit.png">\
				<div class="kit-item__quantity">x15</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/blueberries.png">\
				<div class="kit-item__quantity">x25</div></div></div>\
		</div></div></div>\
		<div class="xbox_custom_kits" ><div class="serverheader">${lang.kits_res} - <span>${lang.kitsCooldown_24h}</span></div>\
			<div class="kit_set"><div class="kit-items">\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/wood.png">\
				<div class="kit-item__quantity">x50000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/stones.png">\
				<div class="kit-item__quantity">x50000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png">\
				<div class="kit-item__quantity">x30000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.refined.png">\
				<div class="kit-item__quantity">x1500</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/cloth.png">\
				<div class="kit-item__quantity">x4000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/leather.png">\
				<div class="kit-item__quantity">x4000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/lowgradefuel.png">\
				<div class="kit-item__quantity">x4000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/scrap.png">\
				<div class="kit-item__quantity">x2000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sulfur.png">\
				<div class="kit-item__quantity">x30000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/charcoal.png">\
				<div class="kit-item__quantity">x30000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/supply.signal.png">\
				<div class="kit-item__quantity">x2</div></div></div>\
		</div></div></div>\
		<div class="xbox_custom_kits" ><div class="serverheader">${lang.kits_comp} - <span>${lang.kitsCooldown_24h}</span></div>\
			<div class="kit_set"><div class="kit-items">\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalpipe.png">\
				<div class="kit-item__quantity">x125</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/techparts.png">\
				<div class="kit-item__quantity">x50</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/riflebody.png">\
				<div class="kit-item__quantity">x15</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/smgbody.png">\
				<div class="kit-item__quantity">x15</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/semibody.png">\
				<div class="kit-item__quantity">x15</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalspring.png">\
				<div class="kit-item__quantity">x125</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sewingkit.png">\
				<div class="kit-item__quantity">x125</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rope.png">\
				<div class="kit-item__quantity">x125</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/gears.png">\
				<div class="kit-item__quantity">x125</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalblade.png">\
				<div class="kit-item__quantity">x125</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsigns.png">\
				<div class="kit-item__quantity">x125</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/tarp.png">\
				<div class="kit-item__quantity">x75</div></div></div>\
		</div></div></div>`
	};
	
	
	curcontent["kit-life"] = {
		xhead: lang.kitsDonate_Title,
		xcon: `<div class="store-categories">\
		<button class="btn btn-secondary" onclick="Open(\'kit-free\', false);">${lang.kitsStandart}</button>\
		<button class="btn btn-secondary" onclick="Open(\'kit-prem\', false);">PREM</button>\
		<button class="btn btn-secondary" onclick="Open(\'kit-elite\', false);">ELITE</button>\
		<button class="btn btn-secondary active">LIFE</button>\
		<button class="btn btn-secondary" onclick="Open(\'kit-rusty\', false);">RUSTY</button>\
		<button class="btn btn-secondary2" onclick="Open(\'kit-life2\', false);">${lang.kitsList_x5}</button>\
		<div class="xbox_custom_kits" ><div class="serverheader">${lang.kits_pvp} - <span>${lang.kitsCooldown_3h}</span></div>\
			<div class="kit_set"><div class="kit-items">\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rifle.ak.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rifle.bolt.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/ammo.rifle.png">\
				<div class="kit-item__quantity">x300</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.facemask.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.plate.torso.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.kilt.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/tactical.gloves.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/hoodie.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pants.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/shoes.boots.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png">\
				<div class="kit-item__quantity">x20</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/largemedkit.png">\
				<div class="kit-item__quantity">x20</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/blueberries.png">\
				<div class="kit-item__quantity">x40</div></div></div>\
		</div></div></div>\
		<div class="xbox_custom_kits" ><div class="serverheader">${lang.kits_res} - <span>${lang.kitsCooldown_24h}</span></div>\
			<div class="kit_set"><div class="kit-items">\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/wood.png">\
				<div class="kit-item__quantity">x75000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/stones.png">\
				<div class="kit-item__quantity">x75000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png">\
				<div class="kit-item__quantity">x50000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.refined.png">\
				<div class="kit-item__quantity">x2500</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/cloth.png">\
				<div class="kit-item__quantity">x5000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/leather.png">\
				<div class="kit-item__quantity">x5000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/lowgradefuel.png">\
				<div class="kit-item__quantity">x5000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/scrap.png">\
				<div class="kit-item__quantity">x3000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sulfur.png">\
				<div class="kit-item__quantity">x50000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/charcoal.png">\
				<div class="kit-item__quantity">x50000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/supply.signal.png">\
				<div class="kit-item__quantity">x3</div></div></div>\
		</div></div></div>\
		<div class="xbox_custom_kits" ><div class="serverheader">${lang.kits_comp} - <span>${lang.kitsCooldown_24h}</span></div>\
			<div class="kit_set"><div class="kit-items">\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalpipe.png">\
				<div class="kit-item__quantity">x200</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/techparts.png">\
				<div class="kit-item__quantity">x100</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/riflebody.png">\
				<div class="kit-item__quantity">x30</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/smgbody.png">\
				<div class="kit-item__quantity">x30</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/semibody.png">\
				<div class="kit-item__quantity">x30</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalspring.png">\
				<div class="kit-item__quantity">x200</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sewingkit.png">\
				<div class="kit-item__quantity">x200</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rope.png">\
				<div class="kit-item__quantity">x200</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/gears.png">\
				<div class="kit-item__quantity">x200</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalblade.png">\
				<div class="kit-item__quantity">x200</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsigns.png">\
				<div class="kit-item__quantity">x200</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/tarp.png">\
				<div class="kit-item__quantity">x100</div></div></div>\
		</div></div></div>`
	};
	
	
	curcontent["kit-rusty"] = {
		xhead: lang.kitsDonate_Title,
		xcon: `<div class="store-categories">\
		<button class="btn btn-secondary" onclick="Open(\'kit-free\', false);">${lang.kitsStandart}</button>\
		<button class="btn btn-secondary" onclick="Open(\'kit-prem\', false);">PREM</button>\
		<button class="btn btn-secondary" onclick="Open(\'kit-elite\', false);">ELITE</button>\
		<button class="btn btn-secondary" onclick="Open(\'kit-life\', false);">LIFE</button>\
		<button class="btn btn-secondary active">RUSTY</button>\
		<button class="btn btn-secondary2" onclick="Open(\'kit-rusty2\', false);">${lang.kitsList_x5}</button>\
		<div class="xbox_custom_kits" ><div class="serverheader">${lang.kits_pvp} - <span>${lang.kitsCooldown_3h}</span></div>\
			<div class="kit_set"><div class="kit-items">\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rifle.ak.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2023/09/14/e5e6f583d2347ca82ecc9b4ec50db95a.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rifle.bolt.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/ammo.rifle.png">\
				<div class="kit-item__quantity">x500</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.facemask.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.plate.torso.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.kilt.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/tactical.gloves.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/hoodie.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pants.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/shoes.boots.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png">\
				<div class="kit-item__quantity">x20</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/largemedkit.png">\
				<div class="kit-item__quantity">x20</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/blueberries.png">\
				<div class="kit-item__quantity">x50</div></div></div>\
		</div></div></div>\
		<div class="xbox_custom_kits" ><div class="serverheader">${lang.kits_res} - <span>${lang.kitsCooldown_24h}</span></div>\
			<div class="kit_set"><div class="kit-items">\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/wood.png">\
				<div class="kit-item__quantity">x100000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/stones.png">\
				<div class="kit-item__quantity">x100000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png">\
				<div class="kit-item__quantity">x75000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.refined.png">\
				<div class="kit-item__quantity">x4000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/cloth.png">\
				<div class="kit-item__quantity">x7500</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/leather.png">\
				<div class="kit-item__quantity">x7500</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/lowgradefuel.png">\
				<div class="kit-item__quantity">x7500</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/scrap.png">\
				<div class="kit-item__quantity">x4000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sulfur.png">\
				<div class="kit-item__quantity">x65000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/charcoal.png">\
				<div class="kit-item__quantity">x65000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/supply.signal.png">\
				<div class="kit-item__quantity">x4</div></div></div>\
		</div></div></div>\
		<div class="xbox_custom_kits" ><div class="serverheader">${lang.kits_comp} - <span>${lang.kitsCooldown_24h}</span></div>\
			<div class="kit_set"><div class="kit-items">\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalpipe.png">\
				<div class="kit-item__quantity">x250</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/techparts.png">\
				<div class="kit-item__quantity">x150</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/riflebody.png">\
				<div class="kit-item__quantity">x50</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/smgbody.png">\
				<div class="kit-item__quantity">x50</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/semibody.png">\
				<div class="kit-item__quantity">x50</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalspring.png">\
				<div class="kit-item__quantity">x250</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sewingkit.png">\
				<div class="kit-item__quantity">x250</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rope.png">\
				<div class="kit-item__quantity">x250</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/gears.png">\
				<div class="kit-item__quantity">x250</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalblade.png">\
				<div class="kit-item__quantity">x250</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsigns.png">\
				<div class="kit-item__quantity">x250</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/tarp.png">\
				<div class="kit-item__quantity">x200</div></div></div>\
		</div></div>\
		<div class="xbox_custom_kits" ><div class="serverheader">${lang.kits_dop} - <span>${lang.kitsCooldown_once}</span></div>\
			<div class="kit_set"><div class="kit-items">\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/workbench3.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/workbench2.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/workbench1.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/mining.quarry.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/surveycharge.png">\
				<div class="kit-item__quantity">x50</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/autoturret.png">\
				<div class="kit-item__quantity">x5</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/coffin.storage.png">\
				<div class="kit-item__quantity">x10</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2022/07/23/ea48412ea9e6c5c530dca8a147c413e5.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2022/07/23/18792a460ae3f80eff76f080043173e6.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/black.raspberries.png">\
				<div class="kit-item__quantity">x50</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/blueberries.png">\
				<div class="kit-item__quantity">x50</div></div></div>\
		</div></div></div>`
	};
	
	
	curcontent["kit-free"] = {
		xhead: lang.kitsStandart_Title,
		xcon: `<div class="store-categories">\
		<button class="btn btn-secondary active">${lang.kitsStandart}</button>\
		<button class="btn btn-secondary" onclick="Open(\'kit-prem\', false);">PREM</button>\
		<button class="btn btn-secondary" onclick="Open(\'kit-elite\', false);">ELITE</button>\
		<button class="btn btn-secondary" onclick="Open(\'kit-life\', false);">LIFE</button>\
		<button class="btn btn-secondary" onclick="Open(\'kit-rusty\', false);">RUSTY</button>\
		<button class="btn btn-secondary2" onclick="Open(\'kit-free2\', false);">${lang.kitsList_x5}</button>\
		<div class="xbox_custom_kits" >\
			<div class="serverheader">${lang.kits_home} - <span>${lang.kitsCooldown_12h}</span></div>\
				<div class="kit_set"><div class="kit-items">\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/wood.png">\
				<div class="kit-item__quantity">x5000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/stones.png">\
				<div class="kit-item__quantity">x5000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png">\
				<div class="kit-item__quantity">x2500</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/cloth.png">\
				<div class="kit-item__quantity">x500</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/furnace.png">\
				<div class="kit-item__quantity">x2</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/box.wooden.large.png">\
				<div class="kit-item__quantity">x2</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/door.hinged.metal.png">\
				<div class="kit-item__quantity">x2</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rug.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pookie.bear.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
			</div></div>\
			<div class="xbox_custom_kits" >\
				<div class="serverheader">${lang.kits_hunt} - <span>${lang.kitsCooldown_10m}</span></div>\
					<div class="kit_set"><div class="kit-items">\
					<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/bow.hunting.png">\
					<div class="kit-item__quantity">x1</div></div></div>\
					<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/arrow.wooden.png">\
					<div class="kit-item__quantity">x50</div></div></div>\
					<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/spear.stone.png">\
					<div class="kit-item__quantity">x1</div></div></div>\
					<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/knife.bone.png">\
					<div class="kit-item__quantity">x1</div></div></div>\
			</div></div>\
				<div class="serverheader">${lang.kits_med} - <span>${lang.kitsCooldown_10m}</span></div>\
					<div class="kit_set"><div class="kit-items">\
					<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png">\
					<div class="kit-item__quantity">x5</div></div></div>\
					<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/bandage.png">\
					<div class="kit-item__quantity">x5</div></div></div>\
			</div></div>\
				<div class="serverheader">${lang.kits_food} - <span>${lang.kitsCooldown_10m}</span></div>\
					<div class="kit_set"><div class="kit-items">\
					<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/blueberries.png">\
					<div class="kit-item__quantity">x5</div></div></div>\
					<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/bearmeat.cooked.png">\
					<div class="kit-item__quantity">x5</div></div></div>\
					<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/smallwaterbottle.png">\
					<div class="kit-item__quantity">x1</div></div></div>\
					</div></div>\
			<div class="serverheader">${lang.kits_nickname} - <span>${lang.kitsCooldown_once}</span></div>\
				<div class="kit_set"><div class="kit-items">\
					<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.refined.png">\
					<div class="kit-item__quantity">x300</div></div></div>\
					<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png">\
					<div class="kit-item__quantity">x5000</div></div></div>\
					<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/gunpowder.png">\
					<div class="kit-item__quantity">x3000</div></div></div>\
					<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/workbench2.png">\
					<div class="kit-item__quantity">x1</div></div></div>\
					<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/jackhammer.png">\
					<div class="kit-item__quantity">x1</div></div></div>\
					<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/supply.signal.png">\
					<div class="kit-item__quantity">x1</div></div></div>\
		</div></div></div>`
	};
	
	curcontent["kit-prem2"] = {
		xhead: lang.kitsDonate_Title,
		xcon: `<div class="store-categories">\
		<button class="btn btn-secondary" onclick="Open(\'kit-free2\', false);">${lang.kitsStandart}</button>\
		<button class="btn btn-secondary active">PREM</button>\
		<button class="btn btn-secondary" onclick="Open(\'kit-elite2\', false);">ELITE</button>\
		<button class="btn btn-secondary" onclick="Open(\'kit-life2\', false);">LIFE</button>\
		<button class="btn btn-secondary" onclick="Open(\'kit-rusty2\', false);">RUSTY</button>\
		<button class="btn btn-secondary2" onclick="Open(\'kit-prem\', false);">${lang.kitsList_x1point5}</button>\
		<div class="xbox_custom_kits" ><div class="serverheader">${lang.kits_pvp} - <span>${lang.kitsCooldown_3h}</span></div>\
			<div class="kit_set"><div class="kit-items">\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pistol.semiauto.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/ammo.pistol.png">\
				<div class="kit-item__quantity">x100</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/hazmatsuit.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png">\
				<div class="kit-item__quantity">x5</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/bandage.png">\
				<div class="kit-item__quantity">x5</div></div></div>\
		</div></div>\
		<div class="blocktimer">${lang.kitsWipeBlock_2h}</div>\
		</div>\
		<div class="xbox_custom_kits" ><div class="serverheader">${lang.kits_tools} - <span>${lang.kitsCooldown_2h}</span></div>\
			<div class="kit_set"><div class="kit-items">\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pickaxe.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/hatchet.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
		</div></div></div>\
		<div class="xbox_custom_kits" ><div class="serverheader">${lang.kits_res} - <span>${lang.kitsCooldown_23h}</span></div>\
			<div class="kit_set"><div class="kit-items">\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/wood.png">\
				<div class="kit-item__quantity">x5000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/stones.png">\
				<div class="kit-item__quantity">x5000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png">\
				<div class="kit-item__quantity">x2000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.refined.png">\
				<div class="kit-item__quantity">x100</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/cloth.png">\
				<div class="kit-item__quantity">x400</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/leather.png">\
				<div class="kit-item__quantity">x400</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/lowgradefuel.png">\
				<div class="kit-item__quantity">x400</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/scrap.png">\
				<div class="kit-item__quantity">x100</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sulfur.png">\
				<div class="kit-item__quantity">x1000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/gunpowder.png">\
				<div class="kit-item__quantity">x1000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/charcoal.png">\
				<div class="kit-item__quantity">x1000</div></div></div>\
		</div></div></div>\
		<div class="xbox_custom_kits" ><div class="serverheader">${lang.kits_comp} - <span>${lang.kitsCooldown_23h}</span></div>\
			<div class="kit_set"><div class="kit-items">\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalpipe.png">\
				<div class="kit-item__quantity">x10</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/techparts.png">\
				<div class="kit-item__quantity">x5</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/riflebody.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/smgbody.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/semibody.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalspring.png">\
				<div class="kit-item__quantity">x10</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sewingkit.png">\
				<div class="kit-item__quantity">x10</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rope.png">\
				<div class="kit-item__quantity">x10</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/gears.png">\
				<div class="kit-item__quantity">x5</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalblade.png">\
				<div class="kit-item__quantity">x10</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsigns.png">\
				<div class="kit-item__quantity">x10</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sheetmetal.png">\
				<div class="kit-item__quantity">x5</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/propanetank.png">\
				<div class="kit-item__quantity">x5</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/tarp.png">\
				<div class="kit-item__quantity">x10</div></div></div>\
		</div></div></div>`
	};
	
	curcontent["kit-elite2"] = {
		xhead: lang.kitsDonate_Title,
		xcon: `<div class="store-categories">\
		<button class="btn btn-secondary" onclick="Open(\'kit-free2\', false);">${lang.kitsStandart}</button>\
		<button class="btn btn-secondary" onclick="Open(\'kit-prem2\', false);">PREM</button>\
		<button class="btn btn-secondary active">ELITE</button>\
		<button class="btn btn-secondary" onclick="Open(\'kit-life2\', false);">LIFE</button>\
		<button class="btn btn-secondary" onclick="Open(\'kit-rusty2\', false);">RUSTY</button>\
		<button class="btn btn-secondary2" onclick="Open(\'kit-elite\', false);">${lang.kitsList_x1point5}</button>\
		<div class="xbox_custom_kits" ><div class="serverheader">${lang.kits_pvp} - <span>${lang.kitsCooldown_3h}</span></div>\
			<div class="kit_set"><div class="kit-items">\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/smg.2.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/ammo.pistol.png">\
				<div class="kit-item__quantity">x100</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rifle.semiauto.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/ammo.rifle.png">\
				<div class="kit-item__quantity">x100</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/hazmatsuit.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png">\
				<div class="kit-item__quantity">x5</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/bandage.png">\
				<div class="kit-item__quantity">x5</div></div></div>\
		</div></div>\
		<div class="blocktimer">${lang.kitsWipeBlock_3h}</div>\
		</div>\
		<div class="xbox_custom_kits" ><div class="serverheader">${lang.kits_tools} - <span>${lang.kitsCooldown_2h}</span></div>\
		<div class="kit_set"><div class="kit-items">\
		<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/icepick.salvaged.png">\
		<div class="kit-item__quantity">x1</div></div></div>\
		<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/axe.salvaged.png">\
		<div class="kit-item__quantity">x1</div></div></div>\
		</div></div></div>\
		<div class="xbox_custom_kits" ><div class="serverheader">${lang.kits_res} - <span>${lang.kitsCooldown_23h}</span></div>\
			<div class="kit_set"><div class="kit-items">\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/wood.png">\
				<div class="kit-item__quantity">x7000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/stones.png">\
				<div class="kit-item__quantity">x7000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png">\
				<div class="kit-item__quantity">x4000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.refined.png">\
				<div class="kit-item__quantity">x150</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/cloth.png">\
				<div class="kit-item__quantity">x600</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/leather.png">\
				<div class="kit-item__quantity">x600</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/lowgradefuel.png">\
				<div class="kit-item__quantity">x600</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/scrap.png">\
				<div class="kit-item__quantity">x200</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sulfur.png">\
				<div class="kit-item__quantity">x2000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/gunpowder.png">\
				<div class="kit-item__quantity">x2000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/charcoal.png">\
				<div class="kit-item__quantity">x2000</div></div></div>\
		</div></div></div>\
		<div class="xbox_custom_kits" ><div class="serverheader">${lang.kits_comp} - <span>${lang.kitsCooldown_23h}</span></div>\
			<div class="kit_set"><div class="kit-items">\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalpipe.png">\
				<div class="kit-item__quantity">x15</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/techparts.png">\
				<div class="kit-item__quantity">x10</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/riflebody.png">\
				<div class="kit-item__quantity">x2</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/smgbody.png">\
				<div class="kit-item__quantity">x2</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/semibody.png">\
				<div class="kit-item__quantity">x2</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalspring.png">\
				<div class="kit-item__quantity">x15</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sewingkit.png">\
				<div class="kit-item__quantity">x15</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rope.png">\
				<div class="kit-item__quantity">x15</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/gears.png">\
				<div class="kit-item__quantity">x10</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalblade.png">\
				<div class="kit-item__quantity">x15</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsigns.png">\
				<div class="kit-item__quantity">x15</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sheetmetal.png">\
				<div class="kit-item__quantity">x10</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/propanetank.png">\
				<div class="kit-item__quantity">x10</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/tarp.png">\
				<div class="kit-item__quantity">x15</div></div></div>\
		</div></div></div>`
	};
	
	
	curcontent["kit-life2"] = {
		xhead: lang.kitsDonate_Title,
		xcon: `<div class="store-categories">\
		<button class="btn btn-secondary" onclick="Open(\'kit-free2\', false);">${lang.kitsStandart}</button>\
		<button class="btn btn-secondary" onclick="Open(\'kit-prem2\', false);">PREM</button>\
		<button class="btn btn-secondary" onclick="Open(\'kit-elite2\', false);">ELITE</button>\
		<button class="btn btn-secondary active">LIFE</button>\
		<button class="btn btn-secondary" onclick="Open(\'kit-rusty2\', false);">RUSTY</button>\
		<button class="btn btn-secondary2" onclick="Open(\'kit-life\', false);">${lang.kitsList_x1point5}</button>\
		<div class="xbox_custom_kits" ><div class="serverheader">${lang.kits_pvp} - <span>${lang.kitsCooldown_3h}</span></div>\
			<div class="kit_set"><div class="kit-items">\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/smg.mp5.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/ammo.pistol.png">\
				<div class="kit-item__quantity">x100</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rifle.m39.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/ammo.rifle.png">\
				<div class="kit-item__quantity">x100</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/coffeecan.helmet.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.jacket.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.kilt.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.gloves.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/hoodie.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pants.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/shoes.boots.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png">\
				<div class="kit-item__quantity">x5</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/largemedkit.png">\
				<div class="kit-item__quantity">x5</div></div></div>\
		</div></div>\
		<div class="blocktimer">${lang.kitsWipeBlock_3h}</div>\
		</div>\
		<div class="xbox_custom_kits" ><div class="serverheader">${lang.kits_tools} - <span>${lang.kitsCooldown_2h}</span></div>\
			<div class="kit_set"><div class="kit-items">\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/icepick.salvaged.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/axe.salvaged.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
		</div></div></div>\
		<div class="xbox_custom_kits" ><div class="serverheader">${lang.kits_res} - <span>${lang.kitsCooldown_23h}</span></div>\
			<div class="kit_set"><div class="kit-items">\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/wood.png">\
				<div class="kit-item__quantity">x9000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/stones.png">\
				<div class="kit-item__quantity">x9000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png">\
				<div class="kit-item__quantity">x6000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.refined.png">\
				<div class="kit-item__quantity">x200</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/cloth.png">\
				<div class="kit-item__quantity">x800</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/leather.png">\
				<div class="kit-item__quantity">x800</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/lowgradefuel.png">\
				<div class="kit-item__quantity">x800</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/scrap.png">\
				<div class="kit-item__quantity">x300</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sulfur.png">\
				<div class="kit-item__quantity">x3000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/gunpowder.png">\
				<div class="kit-item__quantity">x3000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/charcoal.png">\
				<div class="kit-item__quantity">x3000</div></div></div>\
		</div></div></div>\
		<div class="xbox_custom_kits" ><div class="serverheader">${lang.kits_comp} - <span>${lang.kitsCooldown_23h}</span></div>\
			<div class="kit_set"><div class="kit-items">\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalpipe.png">\
				<div class="kit-item__quantity">x20</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/techparts.png">\
				<div class="kit-item__quantity">x15</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/riflebody.png">\
				<div class="kit-item__quantity">x3</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/smgbody.png">\
				<div class="kit-item__quantity">x3</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/semibody.png">\
				<div class="kit-item__quantity">x3</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalspring.png">\
				<div class="kit-item__quantity">x20</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sewingkit.png">\
				<div class="kit-item__quantity">x20</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rope.png">\
				<div class="kit-item__quantity">x20</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/gears.png">\
				<div class="kit-item__quantity">x15</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalblade.png">\
				<div class="kit-item__quantity">x20</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsigns.png">\
				<div class="kit-item__quantity">x20</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sheetmetal.png">\
				<div class="kit-item__quantity">x15</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/propanetank.png">\
				<div class="kit-item__quantity">x15</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/tarp.png">\
				<div class="kit-item__quantity">x20</div></div></div>\
		</div></div></div>`
	};
	
	
	curcontent["kit-rusty2"] = {
		xhead: lang.kitsDonate_Title,
		xcon: `<div class="store-categories">\
		<button class="btn btn-secondary" onclick="Open(\'kit-free2\', false);">${lang.kitsStandart}</button>\
		<button class="btn btn-secondary" onclick="Open(\'kit-prem2\', false);">PREM</button>\
		<button class="btn btn-secondary" onclick="Open(\'kit-elite2\', false);">ELITE</button>\
		<button class="btn btn-secondary" onclick="Open(\'kit-life2\', false);">LIFE</button>\
		<button class="btn btn-secondary active">RUSTY</button>\
		<button class="btn btn-secondary2" onclick="Open(\'kit-rusty\', false);">${lang.kitsList_x1point5}</button>\
		<div class="xbox_custom_kits" ><div class="serverheader">${lang.kits_pvp} - <span>${lang.kitsCooldown_3h}</span></div>\
			<div class="kit_set"><div class="kit-items">\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rifle.ak.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rifle.l96.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/ammo.rifle.png">\
				<div class="kit-item__quantity">x200</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.facemask.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.plate.torso.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.kilt.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/tactical.gloves.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/hoodie.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pants.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/shoes.boots.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png">\
				<div class="kit-item__quantity">x5</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/largemedkit.png">\
				<div class="kit-item__quantity">x5</div></div></div>\
		</div></div>\
		<div class="blocktimer">${lang.kitsWipeBlock_6h}</div>\
		</div>\
		<div class="xbox_custom_kits" ><div class="serverheader">${lang.kits_tools} - <span>${lang.kitsCooldown_2h}</span></div>\
			<div class="kit_set"><div class="kit-items">\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/jackhammer.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/chainsaw.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
		</div></div></div>\
		<div class="xbox_custom_kits" ><div class="serverheader">${lang.kits_res} - <span>${lang.kitsCooldown_23h}</span></div>\
			<div class="kit_set"><div class="kit-items">\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/wood.png">\
				<div class="kit-item__quantity">x12000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/stones.png">\
				<div class="kit-item__quantity">x12000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png">\
				<div class="kit-item__quantity">x10000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.refined.png">\
				<div class="kit-item__quantity">x300</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/cloth.png">\
				<div class="kit-item__quantity">x1000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/leather.png">\
				<div class="kit-item__quantity">x1000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/lowgradefuel.png">\
				<div class="kit-item__quantity">x1000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/scrap.png">\
				<div class="kit-item__quantity">x500</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sulfur.png">\
				<div class="kit-item__quantity">x5000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/gunpowder.png">\
				<div class="kit-item__quantity">x5000</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/charcoal.png">\
				<div class="kit-item__quantity">x5000</div></div></div>\
		</div></div></div>\
		<div class="xbox_custom_kits" ><div class="serverheader">${lang.kits_comp} - <span>${lang.kitsCooldown_23h}</span></div>\
			<div class="kit_set"><div class="kit-items">\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalpipe.png">\
				<div class="kit-item__quantity">x30</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/techparts.png">\
				<div class="kit-item__quantity">x25</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/riflebody.png">\
				<div class="kit-item__quantity">x5</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/smgbody.png">\
				<div class="kit-item__quantity">x5</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/semibody.png">\
				<div class="kit-item__quantity">x5</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalspring.png">\
				<div class="kit-item__quantity">x30</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sewingkit.png">\
				<div class="kit-item__quantity">x30</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rope.png">\
				<div class="kit-item__quantity">x30</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/gears.png">\
				<div class="kit-item__quantity">x25</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalblade.png">\
				<div class="kit-item__quantity">x30</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsigns.png">\
				<div class="kit-item__quantity">x30</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sheetmetal.png">\
				<div class="kit-item__quantity">x25</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/propanetank.png">\
				<div class="kit-item__quantity">x25</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/tarp.png">\
				<div class="kit-item__quantity">x30</div></div></div>\
		</div></div></div>`
	};
	
	
	curcontent["kit-free2"] = {
		xhead: lang.kitsStandart_Title,
		xcon: `<div class="store-categories">\
		<button class="btn btn-secondary active">${lang.kitsStandart}</button>\
		<button class="btn btn-secondary" onclick="Open(\'kit-prem2\', false);">PREM</button>\
		<button class="btn btn-secondary" onclick="Open(\'kit-elite2\', false);">ELITE</button>\
		<button class="btn btn-secondary" onclick="Open(\'kit-life2\', false);">LIFE</button>\
		<button class="btn btn-secondary" onclick="Open(\'kit-rusty2\', false);">RUSTY</button>\
		<button class="btn btn-secondary2" onclick="Open(\'kit-free\', false);">${lang.kitsList_x1point5}</button>\
		<div class="xbox_custom_kits" >\
		<div class="serverheader">${lang.kits_nickname} - <span>${lang.kitsCooldown_23h}</span></div>\
			<div class="kit_set"><div class="kit-items">\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/workbench1.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pistol.nailgun.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/icepick.salvaged.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/axe.salvaged.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
				<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/xmas.present.large.png">\
				<div class="kit-item__quantity">x1</div></div></div>\
		</div></div></div>`
	};
	
	curcontent["block"] = {
		xhead: lang.wipeBlock_Title, 
		xcon: '<div class="xbox_custom_block"><div class="kit-items">'
		
	};
	curcontent["Oplata"] = {
		xcon: `\
			<div class="refill-window__header">\
				<div class="refill-window__title">${lang.refilTitle}\
				<div class="svgrep"><svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 24"><g  fill="#fff"><path d="M3.138 24h19.724C24.61 24 26 22.647 26 20.945V6.11c0-1.702-1.39-3.054-3.138-3.054h-2.241v2.618h2.241c.269 0 .448.174.448.436v9.164H2.69V6.109c0-.262.179-.436.448-.436h2.241V3.055H3.138C1.39 3.055 0 4.407 0 6.109v14.836C0 22.648 1.39 24 3.138 24zm20.172-6.11v3.055c0 .262-.179.437-.448.437H3.138c-.269 0-.448-.175-.448-.437v-3.054h20.62z"></path><path d="M11.655 0v8.204l-2.69-2.619-1.882 1.833 4.976 4.844c.538.523 1.39.523 1.882 0l4.976-4.844-1.883-1.833-2.69 2.619V0h-2.689z"></path></g><defs><clipPath id="clip0"><path fill="#fff" transform="rotate(-180 13 12)" d="M0 0h26v24H0z"></path></clipPath></defs></svg></div>\
			</div>\
				<button class="refill-window__close">×</button>\
			</div>\
			<div class="refill-window__footer"><div class="refill-window__content">\
				<div class="refill-window__payments">\
					<ul class="refill-window__payments-list">\
						<li class="refill-window__payment" onclick="OnClickElement(1)">\
							<button class="refill-window__payment-btn" id="element1">\
								<svg class="refill-window__payment-icon" viewBox="0 0 140 80" fill="none" version="1.1" id="svg25" xml:space="preserve" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><defs id="defs25"><clipPath id="clip0_8_3245-6"><path fill="#fff" id="rect13-4" d="M0 0h70v17.539H0z"/></clipPath><clipPath id="clip1"><path fill="#fff" transform="translate(41 4)" d="M0 0h49v14H0z" id="path7-0"/></clipPath><clipPath id="clip0-4"><path fill="#fff" d="M0 0h35v22H0z" id="path8"/></clipPath><clipPath id="clip1-2"><path fill="#fff" transform="translate(41 4)" d="M0 0h49v14H0z" id="path9"/></clipPath><clipPath id="clip0"><path fill="#fff" d="M0 0h35v22H0z" id="path6-1"/></clipPath><clipPath id="clip0_8_3245"><path fill="#fff" id="rect13" d="M0 0h70v17.539H0z"/></clipPath><clipPath id="clip0-5"><path fill="#fff" d="M0 0h35v22H0z" id="path6-1-7"/></clipPath><clipPath id="clip1-9"><path fill="#fff" transform="translate(41 4)" d="M0 0h49v14H0z" id="path7-0-8"/></clipPath><clipPath id="clip0-4-1"><path fill="#fff" d="M0 0h35v22H0z" id="path8-1"/></clipPath><clipPath id="clip1-2-7"><path fill="#fff" transform="translate(41 4)" d="M0 0h49v14H0z" id="path9-2"/></clipPath><linearGradient id="paint0_linear_2654_286127" x1="39.666" y1="46.82" x2="39.666" y2="69.82" gradientUnits="userSpaceOnUse" gradientTransform="translate(7.036 -72.853)"><stop stop-color="#111D2E" id="stop19"/><stop offset=".212" stop-color="#051839" id="stop20"/><stop offset=".407" stop-color="#0A1B48" id="stop21"/><stop offset=".581" stop-color="#132E62" id="stop22"/><stop offset=".738" stop-color="#144B7E" id="stop23"/><stop offset=".873" stop-color="#136497" id="stop24"/><stop offset="1" stop-color="#1387B8" id="stop25"/></linearGradient><linearGradient id="paint0_linear" x1="70.407" y1="34.012" x2="54.75" y2="34.012" gradientUnits="userSpaceOnUse"><stop stop-color="#1F5CD7" id="stop9"/><stop offset="1" stop-color="#02AEFF" id="stop10"/></linearGradient><linearGradient xlink:href="#paint0_linear" id="linearGradient32" gradientUnits="userSpaceOnUse" x1="70.407" y1="34.012" x2="54.75" y2="34.012"/></defs><g style="fill:none" id="g25" transform="translate(25.02 17.37)"><g id="g2" transform="translate(0 .596)"><g id="g10" transform="matrix(1.04942 0 0 1.04942 -2.223 -2.576)"><g id="g18"><g id="g1" transform="matrix(1.13991 0 0 1.13991 -16.027 -.481)"><g id="g9" transform="translate(-7.367)"><g id="g3" transform="translate(23.274 3.67) scale(.61376)"><path d="M13.383 11.007c0-3.5 1.605-6.604 4.096-8.622A10.562 10.562 0 0 0 10.795 0C4.83 0 0 4.925 0 11.007s4.83 11.007 10.795 11.007c2.532 0 4.857-.889 6.698-2.37a11.102 11.102 0 0 1-4.11-8.637z" fill="#e30d17" id="path1-4"/><path d="M13.383 11.007c0 3.5 1.605 6.604 4.096 8.622a11.062 11.062 0 0 0 4.097-8.622c0-3.5-1.606-6.604-4.097-8.622a11.04 11.04 0 0 0-4.096 8.622z" fill="#eb610a" id="path2-4"/><path d="M34.239 16.948v-.325h-.125v-.084h.346v.084h-.138v.325zm.664 0v-.282l-.097.24h-.097l-.097-.24v.282h-.096v-.41h.138l.097.269.097-.268h.138v.41zM24.178 0c-2.533 0-4.858.889-6.698 2.37a11.062 11.062 0 0 1 4.096 8.623c0 3.5-1.605 6.604-4.096 8.622a10.641 10.641 0 0 0 6.698 2.37c5.965 0 10.795-4.924 10.795-11.006S30.129 0 24.178 0z" fill="#f69f00" id="path3-3"/></g><g id="g5" transform="translate(8.54 -.596)"><path d="M62.234 17.783H58.25l2.505-13.53h3.984zm-7.351-13.53-3.82 9.297-.452-1.99-1.355-6.113s-.165-1.23-1.89-1.23h-6.284L41 4.47s1.93.362 4.19 1.556l3.49 11.757h4.149l6.366-13.53zm31.42 13.53h3.655l-3.203-13.53H83.55c-1.479 0-1.848 1.013-1.848 1.013l-5.915 12.517h4.149l.82-2.026h5.094zm-4.395-4.812 2.095-5.064 1.19 5.064zM76.076 7.51l.575-2.894s-1.766-.579-3.614-.579c-1.972 0-6.695.76-6.695 4.486 0 3.509 5.545 3.545 5.545 5.39 0 1.845-4.97 1.52-6.613.362l-.575 3.039s1.766.76 4.518.76c2.711 0 6.86-1.23 6.86-4.631 0-3.51-5.587-3.835-5.587-5.39 0-1.592 3.902-1.375 5.586-.543z" fill="#fff" id="path4-1"/><path d="m50.611 11.524-1.355-6.077s-.165-1.23-1.89-1.23h-6.284L41 4.47s3.04.543 5.915 2.64c2.793 1.954 3.696 4.414 3.696 4.414z" fill="#f7a823" id="path5-6"/></g></g></g><g id="g27" transform="matrix(1.0524 0 0 1.0524 -.871 -4.17)"><g id="g8" transform="translate(-1.29)"><g id="g17"><g id="g4" transform="translate(1.29)" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.692 30.06c.48-.002 1.904-.135 2.508 1.98a783.05 783.05 0 0 1 1.943 7.003h.362c.954-3.42 1.609-5.754 1.965-7.003.61-2.137 2.135-1.979 2.745-1.979h4.706v15.2h-4.796v-8.958h-.322l-2.674 8.958H24.52l-2.674-8.964h-.322v8.964h-4.797v-15.2zm21.117.001v8.964h.383l3.253-7.371c.631-1.467 1.977-1.593 1.977-1.593h4.642v15.2h-4.897v-8.964h-.383l-3.189 7.371c-.631 1.46-2.04 1.593-2.04 1.593h-4.642v-15.2zm27.18 7.223c-.682 2.01-2.827 3.45-5.202 3.45H59.65v4.527h-4.656v-7.977z" fill="#67c09e" id="path6-5"/><path d="M65.01 30.061H54.75c.244 3.384 3.051 6.281 5.957 6.281h9.606c.554-2.813-1.354-6.281-5.302-6.281z" fill="url(#paint0_linear)" id="path7-2" style="fill:url(#linearGradient32)"/></g></g></g></g></g></g></g></g><style id="style1"></style></svg>\
								<div class="refill-window__payment-label">#1</div>\
							</button>\
						</li>\
						<li class="refill-window__payment" onclick="OnClickElement(2)">\
							<button class="refill-window__payment-btn" id="element2">\
								<svg class="refill-window__payment-icon" viewBox="0 0 140 80" fill="none" version="1.1" id="svg25" xml:space="preserve" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><defs id="defs25"><clipPath id="clip0_8_3245-6"><path fill="#fff" id="rect13-4" d="M0 0h70v17.539H0z"/></clipPath><clipPath id="clip1"><path fill="#fff" transform="translate(41 4)" d="M0 0h49v14H0z" id="path7-0"/></clipPath><clipPath id="clip0-4"><path fill="#fff" d="M0 0h35v22H0z" id="path8"/></clipPath><clipPath id="clip1-2"><path fill="#fff" transform="translate(41 4)" d="M0 0h49v14H0z" id="path9"/></clipPath><clipPath id="clip0"><path fill="#fff" d="M0 0h35v22H0z" id="path6-1"/></clipPath><clipPath id="clip0_8_3245"><path fill="#fff" id="rect13" d="M0 0h70v17.539H0z"/></clipPath><clipPath id="clip0-5"><path fill="#fff" d="M0 0h35v22H0z" id="path6-1-7"/></clipPath><clipPath id="clip1-9"><path fill="#fff" transform="translate(41 4)" d="M0 0h49v14H0z" id="path7-0-8"/></clipPath><clipPath id="clip0-4-1"><path fill="#fff" d="M0 0h35v22H0z" id="path8-1"/></clipPath><clipPath id="clip1-2-7"><path fill="#fff" transform="translate(41 4)" d="M0 0h49v14H0z" id="path9-2"/></clipPath><linearGradient id="paint0_linear_2654_286127" x1="39.666" y1="46.82" x2="39.666" y2="69.82" gradientUnits="userSpaceOnUse" gradientTransform="translate(7.036 -72.853)"><stop stop-color="#111D2E" id="stop19"/><stop offset=".212" stop-color="#051839" id="stop20"/><stop offset=".407" stop-color="#0A1B48" id="stop21"/><stop offset=".581" stop-color="#132E62" id="stop22"/><stop offset=".738" stop-color="#144B7E" id="stop23"/><stop offset=".873" stop-color="#136497" id="stop24"/><stop offset="1" stop-color="#1387B8" id="stop25"/></linearGradient><linearGradient id="paint0_linear" x1="70.407" y1="34.012" x2="54.75" y2="34.012" gradientUnits="userSpaceOnUse"><stop stop-color="#1F5CD7" id="stop9"/><stop offset="1" stop-color="#02AEFF" id="stop10"/></linearGradient><linearGradient xlink:href="#paint0_linear" id="linearGradient32" gradientUnits="userSpaceOnUse" x1="70.407" y1="34.012" x2="54.75" y2="34.012"/></defs><g style="fill:none" id="g25" transform="translate(25.02 17.37)"><g id="g2" transform="translate(0 .596)"><g id="g10" transform="matrix(1.04942 0 0 1.04942 -2.223 -2.576)"><g id="g18"><g id="g1" transform="matrix(1.13991 0 0 1.13991 -16.027 -.481)"><g id="g9" transform="translate(-7.367)"><g id="g3" transform="translate(23.274 3.67) scale(.61376)"><path d="M13.383 11.007c0-3.5 1.605-6.604 4.096-8.622A10.562 10.562 0 0 0 10.795 0C4.83 0 0 4.925 0 11.007s4.83 11.007 10.795 11.007c2.532 0 4.857-.889 6.698-2.37a11.102 11.102 0 0 1-4.11-8.637z" fill="#e30d17" id="path1-4"/><path d="M13.383 11.007c0 3.5 1.605 6.604 4.096 8.622a11.062 11.062 0 0 0 4.097-8.622c0-3.5-1.606-6.604-4.097-8.622a11.04 11.04 0 0 0-4.096 8.622z" fill="#eb610a" id="path2-4"/><path d="M34.239 16.948v-.325h-.125v-.084h.346v.084h-.138v.325zm.664 0v-.282l-.097.24h-.097l-.097-.24v.282h-.096v-.41h.138l.097.269.097-.268h.138v.41zM24.178 0c-2.533 0-4.858.889-6.698 2.37a11.062 11.062 0 0 1 4.096 8.623c0 3.5-1.605 6.604-4.096 8.622a10.641 10.641 0 0 0 6.698 2.37c5.965 0 10.795-4.924 10.795-11.006S30.129 0 24.178 0z" fill="#f69f00" id="path3-3"/></g><g id="g5" transform="translate(8.54 -.596)"><path d="M62.234 17.783H58.25l2.505-13.53h3.984zm-7.351-13.53-3.82 9.297-.452-1.99-1.355-6.113s-.165-1.23-1.89-1.23h-6.284L41 4.47s1.93.362 4.19 1.556l3.49 11.757h4.149l6.366-13.53zm31.42 13.53h3.655l-3.203-13.53H83.55c-1.479 0-1.848 1.013-1.848 1.013l-5.915 12.517h4.149l.82-2.026h5.094zm-4.395-4.812 2.095-5.064 1.19 5.064zM76.076 7.51l.575-2.894s-1.766-.579-3.614-.579c-1.972 0-6.695.76-6.695 4.486 0 3.509 5.545 3.545 5.545 5.39 0 1.845-4.97 1.52-6.613.362l-.575 3.039s1.766.76 4.518.76c2.711 0 6.86-1.23 6.86-4.631 0-3.51-5.587-3.835-5.587-5.39 0-1.592 3.902-1.375 5.586-.543z" fill="#fff" id="path4-1"/><path d="m50.611 11.524-1.355-6.077s-.165-1.23-1.89-1.23h-6.284L41 4.47s3.04.543 5.915 2.64c2.793 1.954 3.696 4.414 3.696 4.414z" fill="#f7a823" id="path5-6"/></g></g></g><g id="g27" transform="matrix(1.0524 0 0 1.0524 -.871 -4.17)"><g id="g8" transform="translate(-1.29)"><g id="g17" transform="translate(-.01)"><g id="g4" transform="translate(-.153)" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.692 30.06c.48-.002 1.904-.135 2.508 1.98a783.05 783.05 0 0 1 1.943 7.003h.362c.954-3.42 1.609-5.754 1.965-7.003.61-2.137 2.135-1.979 2.745-1.979h4.706v15.2h-4.796v-8.958h-.322l-2.674 8.958H24.52l-2.674-8.964h-.322v8.964h-4.797v-15.2zm21.117.001v8.964h.383l3.253-7.371c.631-1.467 1.977-1.593 1.977-1.593h4.642v15.2h-4.897v-8.964h-.383l-3.189 7.371c-.631 1.46-2.04 1.593-2.04 1.593h-4.642v-15.2zm27.18 7.223c-.682 2.01-2.827 3.45-5.202 3.45H59.65v4.527h-4.656v-7.977z" fill="#67c09e" id="path6-5"/><path d="M65.01 30.061H54.75c.244 3.384 3.051 6.281 5.957 6.281h9.606c.554-2.813-1.354-6.281-5.302-6.281z" fill="url(#paint0_linear)" id="path7-2" style="fill:url(#linearGradient32)"/></g><g style="fill:none" id="g6" transform="translate(-119.608 -144.74)"><g id="g7" transform="matrix(.12643 0 0 .12643 118.754 174.83)"><path d="m0 26.12 14.532 25.975v15.844L.017 93.863z" fill="#5b57a2" id="path4"/><path d="m55.797 42.643 13.617-8.346 27.868-.026-41.485 25.414z" fill="#d90751" id="path5"/><path d="m55.72 25.967.077 34.39-14.566-8.95V0l14.49 25.967z" fill="#fab718" id="path6"/><path d="m97.282 34.271-27.869.026-13.693-8.33L41.231 0l56.05 34.271z" fill="#ed6f26" id="path7"/><path d="M55.797 94.007V77.322l-14.566-8.78.008 51.458z" fill="#63b22f" id="path8-3"/><path d="M69.38 85.737 14.531 52.095 0 26.12l97.223 59.583-27.844.034z" fill="#1487c9" id="path9-8"/><path d="m41.24 120 14.556-25.993 13.583-8.27 27.843-.034z" fill="#017f36" id="path10"/><path d="m.017 93.863 41.333-25.32-13.896-8.526-12.922 7.922z" fill="#984995" id="path11"/></g></g><g fill="none" fill-rule="evenodd" id="g1-8" transform="matrix(.47455 0 0 .47455 75.405 30.074)"><circle cx="16" cy="16" r="16" fill="#26a17b" id="circle1"/><path fill="#fff" d="M17.922 17.383v-.002c-.11.008-.677.042-1.942.042-1.01 0-1.721-.03-1.971-.042v.003c-3.888-.171-6.79-.848-6.79-1.658 0-.809 2.902-1.486 6.79-1.66v2.644c.254.018.982.061 1.988.061 1.207 0 1.812-.05 1.925-.06v-2.643c3.88.173 6.775.85 6.775 1.658 0 .81-2.895 1.485-6.775 1.657m0-3.59v-2.366h5.414V7.819H8.595v3.608h5.414v2.365c-4.4.202-7.709 1.074-7.709 2.118 0 1.044 3.309 1.915 7.709 2.118v7.582h3.913v-7.584c4.393-.202 7.694-1.073 7.694-2.116 0-1.043-3.301-1.914-7.694-2.117" id="path1"/></g></g></g></g></g></g></g></g><style id="style1"></style></svg>\
								<div class="refill-window__payment-label">#2</div>\
							</button>\
						</li>\
						<li class="refill-window__payment" onclick="OnClickElement(4)">\
							<button class="refill-window__payment-btn" id="element4">\
								<svg class="refill-window__payment-icon" viewBox="0 0 140 80" fill="none" version="1.1" id="svg25" sodipodi:docname="card.svg" inkscape:version="1.3 (0e150ed6c4, 2023-07-21)" xml:space="preserve" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><sodipodi:namedview id="namedview25" pagecolor="#505050" bordercolor="#eeeeee" borderopacity="1" inkscape:showpageshadow="0" inkscape:pageopacity="0" inkscape:pagecheckerboard="0" inkscape:deskcolor="#505050" inkscape:zoom="10.071221" inkscape:cx="57.58984" inkscape:cy="38.178092" inkscape:window-width="2560" inkscape:window-height="1361" inkscape:window-x="-9" inkscape:window-y="-9" inkscape:window-maximized="1" inkscape:current-layer="g25" /><defs id="defs25"><linearGradient id="paint0_linear_2654_286127" x1="39.6665" y1="46.8203" x2="39.6665" y2="69.8203" gradientUnits="userSpaceOnUse" gradientTransform="translate(7.0357466,-72.852649)"><stop stop-color="#111D2E" id="stop19" /><stop offset="0.212" stop-color="#051839" id="stop20" /><stop offset="0.407" stop-color="#0A1B48" id="stop21" /><stop offset="0.581" stop-color="#132E62" id="stop22" /><stop offset="0.738" stop-color="#144B7E" id="stop23" /><stop offset="0.873" stop-color="#136497" id="stop24" /><stop offset="1" stop-color="#1387B8" id="stop25" /></linearGradient><clipPath id="clip0"><path fill="#fff" d="M0 0h35v22H0z" id="path6-1" /></clipPath><clipPath id="clip1"><path fill="#fff" transform="translate(41 4)" d="M0 0h49v14H0z" id="path7-0" /></clipPath><clipPath id="clip0-4"><path fill="#fff" d="M0 0h35v22H0z" id="path8" /></clipPath><clipPath id="clip1-2"><path fill="#fff" transform="translate(41 4)" d="M0 0h49v14H0z" id="path9" /></clipPath><linearGradient id="paint0_linear" x1="70.4073" y1="34.012" x2="54.75" y2="34.012" gradientUnits="userSpaceOnUse"><stop stop-color="#1F5CD7" id="stop9" /><stop offset="1" stop-color="#02AEFF" id="stop10" /></linearGradient><linearGradient inkscape:collect="always" xlink:href="#paint0_linear" id="linearGradient32" gradientUnits="userSpaceOnUse" x1="70.4073" y1="34.012" x2="54.75" y2="34.012" /><clipPath id="clip0_8_3245"><rect width="70" height="17.5389" fill="white" id="rect13" /></clipPath></defs><g style="fill:none" id="g25" transform="translate(25.0209,17.3695)"><g id="g2" transform="translate(0,0.59575746)"><g id="g1" transform="translate(-8.5391866)"><g id="g3" transform="translate(8.5391866,-0.59575746)"><path d="m 13.3828,11.0071 c 0,-3.4997 1.6053,-6.6043 4.0964,-8.6222 C 15.6386,0.889 13.3136,0 10.7948,0 4.83,0 0,4.925 0,11.0071 c 0,6.0821 4.83,11.007 10.7948,11.007 2.5326,0 4.8576,-0.889 6.6983,-2.3707 -2.505,-2.0321 -4.1103,-5.1508 -4.1103,-8.6363 z" fill="#e30d17" id="path1-4" /><path d="m 13.3828,11.0072 c 0,3.4997 1.6054,6.6042 4.0965,8.6222 2.4911,-2.018 4.0965,-5.1225 4.0965,-8.6222 0,-3.4997 -1.6054,-6.6042 -4.0965,-8.6222 -2.4911,2.0039 -4.0965,5.1225 -4.0965,8.6222 z" fill="#eb610a" id="path2-4" /><path d="m 34.2388,16.9481 v -0.3246 h -0.1245 v -0.0847 h 0.3459 v 0.0847 h -0.1384 v 0.3246 z m 0.6643,0 v -0.2823 l -0.0969,0.2399 h -0.0968 l -0.0969,-0.2399 v 0.2823 h -0.0969 v -0.4093 h 0.1384 l 0.0969,0.2681 0.0969,-0.2681 h 0.1383 v 0.4093 z M 24.1778,0 c -2.5326,0 -4.8577,0.889 -6.6983,2.3708 2.4911,2.018 4.0965,5.1225 4.0965,8.6221 0,3.4997 -1.6054,6.6043 -4.0965,8.6222 1.8406,1.4818 4.1657,2.3708 6.6983,2.3708 5.9648,0 10.7948,-4.925 10.7948,-11.0071 C 34.9726,4.8968 30.1288,0 24.1778,0 Z" fill="#f69f00" id="path3-3" /></g><g id="g5" transform="translate(8.5391866,-0.59575746)"><path d="M 62.2341,17.7826 H 58.25 L 60.7554,4.2529 h 3.9841 z M 54.8826,4.253 51.0629,13.55 50.6111,11.5604 49.2557,5.4467 c 0,0 -0.1643,-1.23 -1.8894,-1.23 H 41.0821 L 41,4.47 c 0,0 1.9304,0.3618 4.1894,1.5556 l 3.4912,11.7571 H 52.829 L 59.1953,4.253 Z m 31.4202,13.5296 h 3.6554 L 86.7546,4.2529 h -3.2037 c -1.4787,0 -1.8483,1.013 -1.8483,1.013 l -5.9145,12.5167 h 4.1484 l 0.8214,-2.0258 h 5.0931 z m -4.3948,-4.8113 2.0947,-5.0646 1.1911,5.0646 z M 76.0764,7.509 76.6514,4.615 c 0,0 -1.7661,-0.5789 -3.6144,-0.5789 -1.9715,0 -6.6949,0.7597 -6.6949,4.4858 0,3.5091 5.5449,3.5452 5.5449,5.3902 0,1.845 -4.9698,1.5194 -6.6128,0.3618 l -0.575,3.0387 c 0,0 1.7662,0.7597 4.518,0.7597 2.7108,0 6.8592,-1.23 6.8592,-4.6305 0,-3.509 -5.5859,-3.8346 -5.5859,-5.3902 0,-1.5917 3.9019,-1.3746 5.5859,-0.5426 z" fill="#ffffff" id="path4-1" /><path d="M 50.6111,11.5243 49.2557,5.4468 c 0,0 -0.1643,-1.23 -1.8894,-1.23 H 41.0821 L 41,4.47 c 0,0 3.0394,0.5427 5.9145,2.6409 2.793,1.9534 3.6966,4.4134 3.6966,4.4134 z" fill="#f7a823" id="path5-6" /></g></g><g id="g27" transform="translate(1.4117088,-0.59575746)"><path fill-rule="evenodd" clip-rule="evenodd" d="m 21.6915,30.0609 c 0.4796,-0.0029 1.9048,-0.1362 2.5085,1.9793 0.4067,1.425 1.0545,3.7592 1.9434,7.0026 h 0.362 c 0.9533,-3.4195 1.6082,-5.7537 1.9646,-7.0026 0.61,-2.1375 2.135,-1.9792 2.745,-1.9792 h 4.7063 v 15.2 h -4.7967 v -8.9576 h -0.3217 l -2.674,8.9576 H 24.52 l -2.674,-8.9643 h -0.3217 v 8.9643 h -4.7968 v -15.2 z m 21.1179,10e-5 v 8.9643 h 0.3827 l 3.2526,-7.3713 c 0.6314,-1.4669 1.9771,-1.593 1.9771,-1.593 h 4.6419 v 15.2 h -4.897 v -8.9643 h -0.3826 l -3.1889,7.3713 c -0.6314,1.4602 -2.0409,1.593 -2.0409,1.593 h -4.6418 v -15.2 z m 27.1804,7.2231 c -0.6831,2.0097 -2.8282,3.449 -5.2032,3.449 h -5.1354 v 4.5279 h -4.6567 v -7.9769 z" fill="#67c09e" id="path6-5" /><path fill-rule="evenodd" clip-rule="evenodd" d="M 65.0109,30.061 H 54.75 c 0.2442,3.3841 3.0511,6.281 5.9568,6.281 h 9.6063 c 0.5543,-2.8125 -1.3541,-6.281 -5.3022,-6.281 z" fill="url(#paint0_linear)" id="path7-2" style="fill:url(#linearGradient32)" /></g></g></g><style id="style1">.st1{fill:#fff}</style></svg>\
								<div class="refill-window__payment-label">#3</div>\
							</button>\
						</li>\
						<li class="refill-window__payment" onclick="OnClickElement(5)">\
							<button class="refill-window__payment-btn" id="element5">\
								<img class="refill-window__payment-icon" src="https://media.rustylifes.com/img/donate/Paypal.svg">\
							</button>\
						</li>\
						<li class="refill-window__payment" onclick="OnClickElement(8)">\
							<button class="refill-window__payment-btn" id="element8">\
								<img class="refill-window__payment-icon" src="https://media.rustylifes.com/img/donate/Cryptos.svg">\
							</button>\
						</li>\
						<li class="refill-window__payment" onclick="OnClickElement(9)">\
							<button class="refill-window__payment-btn" id="element9">\
								<img class="refill-window__payment-icon" src="https://media.rustylifes.com/img/donate/Skins.svg">\
							</button>\
						</li>\
						<li class="refill-window__payment" onclick="OnClickElement(10)">\
							<button class="refill-window__payment-btn" id="element10">\
								<img class="refill-window__payment-icon" src="https://media.rustylifes.com/img/donate/Telegram.svg">\
							</button>\
						</li>\
						<li class="refill_btn-disabled refill-window__payment-btn"></li>\
					</ul>\
					</div>\
				<div class="refill-window__bonus"><span class="refill-window__bonus-text" id="bonus-text"></span></div>\
				<div class="refill-window__content__pay">\
					<div class="refill-window__payment-info">\
						<div class="refill-window__amount-wrapper" id="amount-wrapper">\
							<div class="refill-window__amount-input-wrapper">\
								<div class="refill-window__pre-input">₽</div>\
									<input class="refill-window__amount-input" placeholder="${lang.refilAmountInput}" type="number" id="refill-window__amount-input" value="500">\
								</div>\
							</div>\
						<div class="refill-window__button-wrapper" id="buybtnwrap" onclick="OnClickBuyBtn(this)">\
							<a class="refill-window__button--disabled" id="buybtn" target="_blank">${lang.refilButton}</a>\
						</div>\
					</div>\
				</div>\
			</div></div>`
	};	
});

//#region contents

var BlockListArrays = [
['shotgun.waterpipe', 'pistol.revolver'],
['pistol.python', 'pistol.semiauto', 'pistol.prototype17', 'pistol.m92', 'shotgun.double', 'coffeecan.helmet', 'roadsign.jacket', 'roadsign.kilt'], 
['shotgun.pump', 'shotgun.spas12', 'smg.2', 'smg.thompson', 'smg.mp5', 'rifle.semiauto', 'rifle.m39'],
['rifle.ak', 'rifle.lr300', 'rifle.bolt', 'rifle.l96', 'hmlmg', 'metal.facemask', 'metal.plate.torso', 'heavy.plate.helmet', 'heavy.plate.jacket', 'heavy.plate.pants'], 
['lmg.m249', 'grenade.f1', 'grenade.beancan'], 
['explosive.satchel', 'ammo.rifle.explosive', 'ammo.grenadelauncher.he'],
['rocket.launcher', 'explosive.timed']];

//#endregion


let btn_unlocked = 0;

function ResetBtns() {
	let btn1 = document.getElementById('element1');
	let btn2 = document.getElementById('element2');
	let btn4 = document.getElementById('element4');
	let btn5 = document.getElementById('element5');
	let btn8 = document.getElementById('element8');
	let btn9 = document.getElementById('element9');
	let btn10 = document.getElementById('element10');

	btn1.style.backgroundColor = "#1d1d26";
	btn2.style.backgroundColor = "#1d1d26";
	btn4.style.backgroundColor = "#1d1d26";
	btn5.style.backgroundColor = "#1d1d26";
	btn8.style.backgroundColor = "#1d1d26";
	btn9.style.backgroundColor = "#1d1d26";
	btn10.style.backgroundColor = "#1d1d26";
}

function UnLockBuyBtn() {
	let btn_buy = document.getElementById('buybtn');
	btn_buy.classList.remove('refill-window__button--disabled');
	btn_buy.classList.add('refill-window__button--enable');
}

/**
 * Генерируем ссылку на оплату только при нажатии на оплатить
 * @param event
 * @constructor
 */
function OnClickBuyBtn(event) 
{
	if (btn_unlocked == 1) {
	   var inputval = document.getElementById('refill-window__amount-input').value;
	   var inputfloat = parseFloat(inputval);
	   if (inputfloat < 100 || isNaN(inputfloat)) {
		   document.getElementById('bonus-text').innerText = `${lang.refilMin} - 100 RUB.`;
		   return false;
	   } 
	   else {
		   document.getElementById('bonus-text').innerText = "";
		   getLink(tomeUrl);
	   }
	}
	if (btn_unlocked == 2) {
	   var inputval = document.getElementById('refill-window__amount-input').value;
	   var inputfloat = parseFloat(inputval);
	   if (inputfloat < 100 || isNaN(inputfloat)) {
		   document.getElementById('bonus-text').innerText = `${lang.refilMin} - 100 RUB.`;
		   return false;
	   } 
	   else {
		   document.getElementById('bonus-text').innerText = "";
		   getLink(centAppUrl);
	   }
	}
	if (btn_unlocked == 3) {
		var inputval = document.getElementById('refill-window__amount-input').value;
		var inputfloat = parseFloat(inputval);
		if (inputfloat < 100 || isNaN(inputfloat)) {
			document.getElementById('bonus-text').innerText = `${lang.refilMin} - 100 RUB.`;
			return false;
	   	} 
	   	else {
		   	document.getElementById('bonus-text').innerText = "";
		   	getLink(enotUrl);
	   	}
	}
	if (btn_unlocked == 4) {
		var inputval = document.getElementById('refill-window__amount-input').value;
		var inputfloat = parseFloat(inputval);
		if (inputfloat < 100 || isNaN(inputfloat)) {
			document.getElementById('bonus-text').innerText = `${lang.refilMin} - 100 RUB.`;
			return false;
		} 
		else {
			document.getElementById('bonus-text').innerText = "";
			getLink(freekassaUrl);
		}
	}

	if (btn_unlocked == 5) {
		var inputval = document.getElementById('refill-window__amount-input').value;
	   	var inputfloat = parseFloat(inputval);
	   	if (inputfloat < 500 || isNaN(inputfloat)) {
			document.getElementById('bonus-text').innerText = `${lang.refilMin} - 500 RUB.`;
			return false;
	   	} 
	   	else {
			document.getElementById('bonus-text').innerText = "";
			getLink(tebexURL);
	   	}
	}

	if (btn_unlocked == 8) {
	   var inputval = document.getElementById('refill-window__amount-input').value;
	   var inputfloat = parseFloat(inputval);
	   if (inputfloat < 1000 || isNaN(inputfloat)) {
		   document.getElementById('bonus-text').innerText = `${lang.refilMin} - 1000 RUB.`;
		   return false;
	   } 
	   else {
		   document.getElementById('bonus-text').innerText = "";
		   getLink(cryptomusUrl);
	   }
	}

	if (btn_unlocked == 9) {
		getLink(skinsbackUrl);
	}

	if (btn_unlocked == 10) {
		window.open(telegramURL);
	}
}
var MD5 = function (d) { result = M(V(Y(X(d), 8 * d.length))); return result.toLowerCase() }; function M(d) { for (var _, m = "0123456789ABCDEF", f = "", r = 0; r < d.length; r++)_ = d.charCodeAt(r), f += m.charAt(_ >>> 4 & 15) + m.charAt(15 & _); return f } function X(d) { for (var _ = Array(d.length >> 2), m = 0; m < _.length; m++)_[m] = 0; for (m = 0; m < 8 * d.length; m += 8)_[m >> 5] |= (255 & d.charCodeAt(m / 8)) << m % 32; return _ } function V(d) { for (var _ = "", m = 0; m < 32 * d.length; m += 8)_ += String.fromCharCode(d[m >> 5] >>> m % 32 & 255); return _ } function Y(d, _) { d[_ >> 5] |= 128 << _ % 32, d[14 + (_ + 64 >>> 9 << 4)] = _; for (var m = 1732584193, f = -271733879, r = -1732584194, i = 271733878, n = 0; n < d.length; n += 16) { var h = m, t = f, g = r, e = i; f = md5_ii(f = md5_ii(f = md5_ii(f = md5_ii(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_ff(f = md5_ff(f = md5_ff(f = md5_ff(f, r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 0], 7, -680876936), f, r, d[n + 1], 12, -389564586), m, f, d[n + 2], 17, 606105819), i, m, d[n + 3], 22, -1044525330), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 4], 7, -176418897), f, r, d[n + 5], 12, 1200080426), m, f, d[n + 6], 17, -1473231341), i, m, d[n + 7], 22, -45705983), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 8], 7, 1770035416), f, r, d[n + 9], 12, -1958414417), m, f, d[n + 10], 17, -42063), i, m, d[n + 11], 22, -1990404162), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 12], 7, 1804603682), f, r, d[n + 13], 12, -40341101), m, f, d[n + 14], 17, -1502002290), i, m, d[n + 15], 22, 1236535329), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 1], 5, -165796510), f, r, d[n + 6], 9, -1069501632), m, f, d[n + 11], 14, 643717713), i, m, d[n + 0], 20, -373897302), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 5], 5, -701558691), f, r, d[n + 10], 9, 38016083), m, f, d[n + 15], 14, -660478335), i, m, d[n + 4], 20, -405537848), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 9], 5, 568446438), f, r, d[n + 14], 9, -1019803690), m, f, d[n + 3], 14, -187363961), i, m, d[n + 8], 20, 1163531501), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 13], 5, -1444681467), f, r, d[n + 2], 9, -51403784), m, f, d[n + 7], 14, 1735328473), i, m, d[n + 12], 20, -1926607734), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 5], 4, -378558), f, r, d[n + 8], 11, -2022574463), m, f, d[n + 11], 16, 1839030562), i, m, d[n + 14], 23, -35309556), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 1], 4, -1530992060), f, r, d[n + 4], 11, 1272893353), m, f, d[n + 7], 16, -155497632), i, m, d[n + 10], 23, -1094730640), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 13], 4, 681279174), f, r, d[n + 0], 11, -358537222), m, f, d[n + 3], 16, -722521979), i, m, d[n + 6], 23, 76029189), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 9], 4, -640364487), f, r, d[n + 12], 11, -421815835), m, f, d[n + 15], 16, 530742520), i, m, d[n + 2], 23, -995338651), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 0], 6, -198630844), f, r, d[n + 7], 10, 1126891415), m, f, d[n + 14], 15, -1416354905), i, m, d[n + 5], 21, -57434055), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 12], 6, 1700485571), f, r, d[n + 3], 10, -1894986606), m, f, d[n + 10], 15, -1051523), i, m, d[n + 1], 21, -2054922799), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 8], 6, 1873313359), f, r, d[n + 15], 10, -30611744), m, f, d[n + 6], 15, -1560198380), i, m, d[n + 13], 21, 1309151649), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 4], 6, -145523070), f, r, d[n + 11], 10, -1120210379), m, f, d[n + 2], 15, 718787259), i, m, d[n + 9], 21, -343485551), m = safe_add(m, h), f = safe_add(f, t), r = safe_add(r, g), i = safe_add(i, e) } return Array(m, f, r, i) } function md5_cmn(d, _, m, f, r, i) { return safe_add(bit_rol(safe_add(safe_add(_, d), safe_add(f, i)), r), m) } function md5_ff(d, _, m, f, r, i, n) { return md5_cmn(_ & m | ~_ & f, d, _, r, i, n) } function md5_gg(d, _, m, f, r, i, n) { return md5_cmn(_ & f | m & ~f, d, _, r, i, n) } function md5_hh(d, _, m, f, r, i, n) { return md5_cmn(_ ^ m ^ f, d, _, r, i, n) } function md5_ii(d, _, m, f, r, i, n) { return md5_cmn(m ^ (_ | ~f), d, _, r, i, n) } function safe_add(d, _) { var m = (65535 & d) + (65535 & _); return (d >> 16) + (_ >> 16) + (m >> 16) << 16 | 65535 & m } function bit_rol(d, _) { return d << _ | d >>> 32 - _ }

async function getLink(service) {
	const inputval = document.getElementById('refill-window__amount-input').value;
    const steamID64 = CustomerSteamId;
    const inputValue = inputval;
    const res = await fetch(service, {
	    method: 'POST',
	    headers: {
            'Content-Type': 'application/json'
        },
	    body: JSON.stringify({
            steamID64, 
            inputValue,
			lang: langSwitch
        })
	})
    const result = await res.json()
    window.open(result)
}

function OnClickElement(event) {
	ResetBtns();

	let element = document.getElementById(`element${event}`);
	element.style.backgroundColor = "#272730";
	btn_unlocked = event;
	UnLockBuyBtn();
	document.getElementById('bonus-text').innerText = "";
	document.getElementById('buybtn').removeAttribute("href");
	document.getElementById("amount-wrapper").style.display = [9,10].includes(event) ? 'none' : "block";
	document.getElementById('buybtn').innerText = lang.refilButton;
}

function OpenPay(el, usefade = true, zind = false) {
	closepagePay();
	var div1 = document.createElement("div");
    div1.id = 'ModalPay';
	var div2 = document.createElement("div");
	div2.className = 'modalpay modalpay-service fade';
	if(!usefade) div2.classList.add("show");
	div2.style = 'display: block; z-index: 1100;';
	div2.id = 'closer';
	var div3 = document.createElement("div");
	div3.className = "modalpay-dialog modalpay-lg";
	var div4 = document.createElement("div");
	div4.className = "modalpay-content";
	var div6 = document.createElement("div");
	div6.className = "modalpay-body";
	div6.innerHTML = curcontent[el].xcon;
	var div7 = document.createElement("div");
	var div8 = document.createElement("div");
	div8.className = "modalpay-backdrop fade show";
	div8.style = 'z-index: 1050;';
	if(el=="Oplata") {div2.style = 'display: flex; place-content: center; align-items: center; z-index: 1051;';}
	
	div1.appendChild(div2);
	div2.appendChild(div3);
	div3.appendChild(div6);
	div1.appendChild(div8);
	if(usefade) setTimeout(()=> div2.classList.add("show"), 0);
	
	var body = document.getElementsByTagName('body')[0];
	body.appendChild(div1);
	body.className = "modal-open";
}

function closepagePay() {
  var Modal = document.getElementById('ModalPay');
  var Modalparent = null;
  try {
    Modalparent = ((Modal.parentElement) ? Modal.parentElement : ((Modal.parentNode) ? Modal.parentNode : null));
  } catch (error) {
    return;
  }
  if (Modalparent == null) return;
  Modalparent.removeChild(Modal);
  document.getElementsByTagName('body')[0].className = "";
  btn_unlocked = 0;
}

function Open(el, usefade = true, zind = false) {
	closepage();
	var div1 = document.createElement("div");
    div1.id = 'Modal';
	var div2 = document.createElement("div");
	div2.className = 'modal modal-service fade';
	if(!usefade) div2.classList.add("show");
	div2.style = 'display: block; z-index: 1100;';
	div2.id = 'closer';
	var div3 = document.createElement("div");
	div3.className = "modal-dialog modal-lg";
	if(el=="block")div3.className+=" modal-lg-block"
	if(el=="block") {div2.style = 'display: flex; align-content: center; align-items: center; z-index: 1051;';}
	var div4 = document.createElement("div");
	div4.className = "modal-content";
	var div5 = document.createElement("div");
	div5.className = "modal-header";
	div5.innerHTML = '<h4 class="modal-title">'+curcontent[el].xhead+'</h4>';
	var div6 = document.createElement("div");
	div6.className = "modal-body";
	div6.innerHTML = curcontent[el].xcon;
	var div7 = document.createElement("div");
	div7.className = "modal-footer";
	div7.innerHTML = `<button type="button" class="btn btn-secondary" id="closer" onclick="closepage()">${lang.close}</button>`;
	var div8 = document.createElement("div");
	div8.className = "modal-backdrop fade show";
	div8.style = 'z-index: 1050;';
	if(el=="Oplata") {div2.style = 'display: flex; align-content: center; align-items: center; z-index: 1051;';}
	
	div1.appendChild(div2);
	div2.appendChild(div3);
	div3.appendChild(div4);
	div4.appendChild(div5);
	div4.appendChild(div6);
	div4.appendChild(div7);
	div1.appendChild(div8);
	if(usefade) setTimeout(()=> div2.classList.add("show"), 0);
	
	var body = document.getElementsByTagName('body')[0];
	body.appendChild(div1);
	body.className = "modal-open";
}

function closepage() {
  var Modal = document.getElementById('Modal');
  var Modalparent = null;
  try {
    Modalparent = ((Modal.parentElement) ? Modal.parentElement : ((Modal.parentNode) ? Modal.parentNode : null));
  } catch (error) {
    return;
  }
  if (Modalparent == null) return;
  Modalparent.removeChild(Modal);
  document.getElementsByTagName('body')[0].className = "";
}

function search(e){
	if (e.offsetX < 1) { 
		console.log(e.target.innerText + ' | ' + e.clientX);
		if (document.selection) { // IE
			var range = document.body.createTextRange();
			range.moveToElementText(e.target);
			range.select();
		} else if (window.getSelection) {
			var range = document.createRange();
			range.selectNode(e.target);
			window.getSelection().removeAllRanges();
			window.getSelection().addRange(range);
		}
		try {
			var successful = document.execCommand('copy');
			var msg = successful ? 'successful' : 'unsuccessful';
			console.log('успешно скопирован, нажмите CTRL + V чтобы вставить в консоль F1 в игре.'); 
		  } catch (err) {
			console.log('Oops, unable to copy' + err);
		  }
    }
}

window.onload = function () {
	document.body.onclick=function(event)
	{
		if(event.target.id == 'closer')closepage();
		if(event.target.id == 'closer')closepagePay();
		if(event.target.className == 'refill-window__close')closepagePay();
		if(event.target.className == 'MsoCommand')search(event);
	}
	
	for (var i = 0; i < BlockListArrays.length; i++) {
		curcontent["block"].xcon += '<div class="block_by_category block_category_'+ (i + 1) +'">';
		curcontent["block"].xcon += '<div class="block_by_category block_category_'+ (i + 1) +'_before">';
		curcontent["block"].xcon += langWipe[i];
		curcontent["block"].xcon += '</div>';
		for (var b = 0; b < BlockListArrays[i].length; b++) {
			if (BlockListArrays[i][b] == "pistol.prototype17" || BlockListArrays[i][b] == "hmlmg") {
				if (BlockListArrays[i][b] == "pistol.prototype17") {
					curcontent["block"].xcon += '<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2022/11/06/723437cdd667a17816dccdbdd75994c5.png">\
					<div class="kit-item__quantity block-lvl-'+ (i + 1) +'"></div></div></div>';
				}
				if (BlockListArrays[i][b] == "hmlmg") {
					curcontent["block"].xcon += '<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2023/09/14/e5e6f583d2347ca82ecc9b4ec50db95a.png">\
					<div class="kit-item__quantity block-lvl-'+ (i + 1) +'"></div></div></div>';
				}
			}
			else {
				curcontent["block"].xcon += '<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/'+ BlockListArrays[i][b] +'.png">\
				<div class="kit-item__quantity block-lvl-'+ (i + 1) +'"></div></div></div>';
			}
		}
		curcontent["block"].xcon += '</div>';
	}
	curcontent["block"].xcon += '</div>\<br></i></div>';
}

var CustomerSteamId = "0"; // Стандартно 0, для теста указан id
var OvhPayUrl = "";

function OvhUrlOverrite() {
	var slides = document.getElementsByClassName("nav-link");
	for (var i = 0; i < slides.length; i++) {
		var elelink = slides.item(i);
		var urlelelink = elelink.getAttribute("href");
		if (urlelelink.startsWith('https://pay.moscow.ovh')) {
			OvhPayUrl = urlelelink;
			console.log(OvhPayUrl);
			elelink.setAttribute("href", "javascript:;");
			elelink.setAttribute("onclick", "OpenOplata()");
		}
	}
}

function obtainShopSteamId() {
	if (CustomerSteamId != "0" && CustomerSteamId != "") {
		return;
	}
	var xmlHttp = new XMLHttpRequest();

	if (xmlHttp != null) {
		xmlHttp.open("GET", "/api/index.php?modules=users&action=getData", true);
		xmlHttp.send(null);
	}
	xmlHttp.onload = function (gjson) {
		var gjson = JSON.parse(xmlHttp.response);
		console.log(gjson);
		var preSteam = gjson.data.steamID;
		OvhPayUrl = "https://pay.moscow.ovh/?" + gjson.data.pay;
		if (preSteam > 76561100000000000 || !isNaN(preSteam)) {
			CustomerSteamId = preSteam.toString();
			OvhUrlOverrite();
		} else {
			console.log("error obtainShopSteamId! " + gjson);
		}
	}
}

function OpenOplata() {
	OpenPay('Oplata');
}

var DOMReady = function (a, b, c) { b = document, c = 'addEventListener'; b[c] ? b[c]('DOMContentLoaded', a) : window.attachEvent('onload', a) }

window.addEventListener("load", function () {
	if (langSwitch == "en") {
		document.querySelector('.header__image').setAttribute('src', ovhBGURL);
		if (document.getElementById('xbox_rules') != null &&
			document.getElementById('xbox_kits') != null &&
			document.getElementById('xbox_wipeblock') != null)
		{
			document.getElementById('xbox_rules').innerHTML = lang.rules;
			document.getElementById('xbox_kits').innerHTML = lang.kits;
			document.getElementById('xbox_wipeblock').innerHTML = lang.wipeBlock;
		}
	}
})
