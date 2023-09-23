var images = [];
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}
preload(
    "https://s3.timeweb.com/a3d1c97f-maps/Assets/skins.svg",
	"https://s3.timeweb.com/a3d1c97f-maps/Assets/cryptos2.svg",
	"https://s3.timeweb.com/a3d1c97f-maps/Assets/paypal.svg"
)
let tebexURL = "https://rusty-life.tebex.io/checkout/packages/add/5060061/single";
let telegramURL = "https://t.me/rusty_life";
var curcontent = new Array();
//#region contents
curcontent["rules"] = {
	xhead: 'Правила',
	xcon: '<div class="xbox_custom_rules"><ul><p class="MsoNormal"><span>Основная информация</span></p>\
<p><li>Не знание правил не освобождает Вас от ответственности.</li></p>\
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
<p><li>Чрезмерно частая смена тиммейтов будет считаться за нарушение.</li></p>\
<p><li>Запрещено рейдить/антирейдить или убивать в 1+/2+/3+ и т.д., в зависимости от максимально разрешенного количества игроков в команде, а так-же нельзя в целом каким-либо образом кооперироваться с игроками, если Ваша команда полная.</li></p><br>\
<p class="MsoNormal"><span>Игровой Чат</span></li></p>\
<p><li>Запрещены ссылки в чате на сторонние сервисы и сайты.</li></p>\
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
</ul><div class="unban" style="background: #333; border-radius: 10px; padding: 20px;"><p class="MsoNormal2" style="font-weight: bold; margin-bottom: 5px;">Возможность разблокировки</p><span>Не менее, чем через месяц после блокировки можно подать апелляцию, но только в том случае, если бан был получен не за читы или макросы. Писать апелляцию нужно в личные сообщения отдельной группы: <a href="https://vk.com/rusty_life_moder">vk.com/rusty_life_moder</a></span></div></div></div>'
};

curcontent["kit-prem"] = {
	xhead: 'Платные киты',
	xcon: '<div class="store-categories">\
	<button class="btn btn-secondary" onclick="Open(\'kit-free\', false);">Стандартные</button>\
	<button class="btn btn-secondary active">PREM</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-elite\', false);">ELITE</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-life\', false);">LIFE</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-rusty\', false);">RUSTY</button>\
	<button class="btn btn-secondary2" onclick="Open(\'kit-prem2\', false);">X5 КИТЫ</button>\
	<div class="xbox_custom_kits" ><div class="serverheader">Кит "PVP" - <span>Откат 3ч</span></div>\
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
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Ресурсы" - <span>Откат 24ч</span></div>\
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
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Компоненты" - <span>Откат 24ч</span></div>\
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
</div></div></div>'
};

curcontent["kit-elite"] = {
	xhead: 'Платные киты',
	xcon: '<div class="store-categories">\
	<button class="btn btn-secondary" onclick="Open(\'kit-free\', false);">Стандартные</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-prem\', false);">PREM</button>\
	<button class="btn btn-secondary active">ELITE</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-life\', false);">LIFE</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-rusty\', false);">RUSTY</button>\
	<button class="btn btn-secondary2" onclick="Open(\'kit-elite2\', false);">X5 КИТЫ</button>\
	<div class="xbox_custom_kits" ><div class="serverheader">Кит "PVP" - <span>Откат 3ч</span></div>\
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
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Ресурсы" - <span>Откат 24ч</span></div>\
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
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Компоненты" - <span>Откат 24ч</span></div>\
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
</div></div></div>'
};


curcontent["kit-life"] = {
	xhead: 'Платные киты',
	xcon: '<div class="store-categories">\
	<button class="btn btn-secondary" onclick="Open(\'kit-free\', false);">Стандартные</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-prem\', false);">PREM</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-elite\', false);">ELITE</button>\
	<button class="btn btn-secondary active">LIFE</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-rusty\', false);">RUSTY</button>\
	<button class="btn btn-secondary2" onclick="Open(\'kit-life2\', false);">X5 КИТЫ</button>\
	<div class="xbox_custom_kits" ><div class="serverheader">Кит "PVP" - <span>Откат 3ч</span></div>\
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
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Ресурсы" - <span>Откат 24ч</span></div>\
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
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Компоненты" - <span>Откат 24ч</span></div>\
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
</div></div></div>'
};


curcontent["kit-rusty"] = {
	xhead: 'Платные киты',
	xcon: '<div class="store-categories">\
	<button class="btn btn-secondary" onclick="Open(\'kit-free\', false);">Стандартные</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-prem\', false);">PREM</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-elite\', false);">ELITE</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-life\', false);">LIFE</button>\
	<button class="btn btn-secondary active">RUSTY</button>\
	<button class="btn btn-secondary2" onclick="Open(\'kit-rusty2\', false);">X5 КИТЫ</button>\
	<div class="xbox_custom_kits" ><div class="serverheader">Кит "PVP" - <span>Откат 3ч</span></div>\
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
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Ресурсы" - <span>Откат 24ч</span></div>\
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
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Компоненты" - <span>Откат 24ч</span></div>\
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
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Дополнительный" - <span>1 Раз в вайп</span></div>\
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
</div></div></div>'
};


curcontent["kit-free"] = {
	xhead: 'Стандартные киты',
	xcon: '<div class="store-categories">\
	<button class="btn btn-secondary active">Стандартные</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-prem\', false);">PREM</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-elite\', false);">ELITE</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-life\', false);">LIFE</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-rusty\', false);">RUSTY</button>\
	<button class="btn btn-secondary2" onclick="Open(\'kit-free2\', false);">X5 КИТЫ</button>\
<div class="xbox_custom_kits" >\
<div class="serverheader">Кит "Дом" - <span>Откат 12ч</span></div>\
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
<div class="serverheader">Кит "Охотник" - <span>Откат 10м</span></div>\
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
<div class="serverheader">Кит "Медицина" - <span>Откат 10м</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/bandage.png">\
<div class="kit-item__quantity">x5</div></div></div>\
</div></div>\
<div class="serverheader">Кит "Еда" - <span>Откат 10м</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/blueberries.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/bearmeat.cooked.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/smallwaterbottle.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div>\
<div class="serverheader">Кит за "#rustylife" в нике - <span>1 раз в вайп</span></div>\
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
</div></div></div>'
};

curcontent["kit-prem2"] = {
	xhead: 'Платные киты',
	xcon: '<div class="store-categories">\
	<button class="btn btn-secondary" onclick="Open(\'kit-free2\', false);">Стандартные</button>\
	<button class="btn btn-secondary active">PREM</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-elite2\', false);">ELITE</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-life2\', false);">LIFE</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-rusty2\', false);">RUSTY</button>\
	<button class="btn btn-secondary2" onclick="Open(\'kit-prem\', false);">X1.5 КИТЫ</button>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "PVP" - <span>Откат 3ч</span></div>\
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
<div class="blocktimer">Блокировка после вайпа - 2 часа </div>\
</div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Инструменты" - <span>Откат 2ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pickaxe.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/hatchet.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Ресурсы" - <span>Откат 23ч</span></div>\
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
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Компоненты" - <span>Откат 23ч</span></div>\
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
</div></div></div>'
};

curcontent["kit-elite2"] = {
	xhead: 'Платные киты',
	xcon: '<div class="store-categories">\
	<button class="btn btn-secondary" onclick="Open(\'kit-free2\', false);">Стандартные</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-prem2\', false);">PREM</button>\
	<button class="btn btn-secondary active">ELITE</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-life2\', false);">LIFE</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-rusty2\', false);">RUSTY</button>\
	<button class="btn btn-secondary2" onclick="Open(\'kit-elite\', false);">X1.5 КИТЫ</button>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "PVP" - <span>Откат 3ч</span></div>\
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
<div class="blocktimer">Блокировка после вайпа - 3 часа </div>\
</div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Инструменты" - <span>Откат 2ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/icepick.salvaged.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/axe.salvaged.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Ресурсы" - <span>Откат 23ч</span></div>\
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
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Компоненты" - <span>Откат 23ч</span></div>\
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
</div></div></div>'
};


curcontent["kit-life2"] = {
	xhead: 'Платные киты',
	xcon: '<div class="store-categories">\
	<button class="btn btn-secondary" onclick="Open(\'kit-free2\', false);">Стандартные</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-prem2\', false);">PREM</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-elite2\', false);">ELITE</button>\
	<button class="btn btn-secondary active">LIFE</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-rusty2\', false);">RUSTY</button>\
	<button class="btn btn-secondary2" onclick="Open(\'kit-life\', false);">X1.5 КИТЫ</button>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "PVP" - <span>Откат 3ч</span></div>\
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
<div class="blocktimer">Блокировка после вайпа - 3 часа </div>\
</div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Инструменты" - <span>Откат 2ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/icepick.salvaged.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/axe.salvaged.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Ресурсы" - <span>Откат 23ч</span></div>\
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
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Компоненты" - <span>Откат 23ч</span></div>\
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
</div></div></div>'
};


curcontent["kit-rusty2"] = {
	xhead: 'Платные киты',
	xcon: '<div class="store-categories">\
	<button class="btn btn-secondary" onclick="Open(\'kit-free2\', false);">Стандартные</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-prem2\', false);">PREM</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-elite2\', false);">ELITE</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-life2\', false);">LIFE</button>\
	<button class="btn btn-secondary active">RUSTY</button>\
	<button class="btn btn-secondary2" onclick="Open(\'kit-rusty\', false);">X1.5 КИТЫ</button>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "PVP" - <span>Откат 3ч</span></div>\
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
<div class="blocktimer">Блокировка после вайпа - 6 часа </div>\
</div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Инструменты" - <span>Откат 2ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/jackhammer.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/chainsaw.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Ресурсы" - <span>Откат 23ч</span></div>\
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
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Компоненты" - <span>Откат 23ч</span></div>\
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
</div></div></div>'
};


curcontent["kit-free2"] = {
	xhead: 'Стандартные киты',
	xcon: '<div class="store-categories">\
	<button class="btn btn-secondary active">Стандартные</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-prem2\', false);">PREM</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-elite2\', false);">ELITE</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-life2\', false);">LIFE</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-rusty2\', false);">RUSTY</button>\
	<button class="btn btn-secondary2" onclick="Open(\'kit-free\', false);">X1.5 КИТЫ</button>\
<div class="xbox_custom_kits" >\
<div class="serverheader">Кит за "#rustylife" в нике - <span>Откат 23 часа</span></div>\
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
</div></div></div>'
};


curcontent["block"] = {
	xhead: 'Блокировка предметов после вайпа', 
	xcon: '<div class="xbox_custom_block"><div class="kit-items">'
	
};

var BlockListArrays = [
['shotgun.waterpipe', 'pistol.revolver'],
['pistol.python', 'pistol.semiauto', 'pistol.prototype17', 'pistol.m92', 'shotgun.double', 'coffeecan.helmet', 'roadsign.jacket', 'roadsign.kilt'], 
['shotgun.pump', 'shotgun.spas12', 'smg.2', 'smg.thompson', 'smg.mp5', 'rifle.semiauto', 'rifle.m39'],
['rifle.ak', 'rifle.lr300', 'rifle.bolt', 'rifle.l96', 'hmlmg', 'metal.facemask', 'metal.plate.torso', 'heavy.plate.helmet', 'heavy.plate.jacket', 'heavy.plate.pants'], 
['lmg.m249', 'grenade.f1', 'grenade.beancan'], 
['explosive.satchel', 'ammo.rifle.explosive', 'ammo.grenadelauncher.he'],
['rocket.launcher', 'explosive.timed']];

//#endregion
curcontent["Oplata"] = {
	xcon: '\
    	<div class="refill-window__header">\
    		<div class="refill-window__title">Пополнение баланса\
			<div class="svgrep"><svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 24"><g  fill="#fff"><path d="M3.138 24h19.724C24.61 24 26 22.647 26 20.945V6.11c0-1.702-1.39-3.054-3.138-3.054h-2.241v2.618h2.241c.269 0 .448.174.448.436v9.164H2.69V6.109c0-.262.179-.436.448-.436h2.241V3.055H3.138C1.39 3.055 0 4.407 0 6.109v14.836C0 22.648 1.39 24 3.138 24zm20.172-6.11v3.055c0 .262-.179.437-.448.437H3.138c-.269 0-.448-.175-.448-.437v-3.054h20.62z"></path><path d="M11.655 0v8.204l-2.69-2.619-1.882 1.833 4.976 4.844c.538.523 1.39.523 1.882 0l4.976-4.844-1.883-1.833-2.69 2.619V0h-2.689z"></path></g><defs><clipPath id="clip0"><path fill="#fff" transform="rotate(-180 13 12)" d="M0 0h26v24H0z"></path></clipPath></defs></svg></div>\
		</div>\
    		<button class="refill-window__close">×</button>\
    	</div>\
    	<div class="refill-window__footer"><div class="refill-window__content">\
    		<div class="refill-window__payments">\
    			<ul class="refill-window__payments-list">\
    				<li class="refill-window__payment" onclick="OnClickElement1(this)">\
    					<button class="refill-window__payment-btn" id="element1">\
    						<svg class="refill-window__payment-icon" viewBox="0 0 140 80" fill="none" version="1.1" id="svg25" sodipodi:docname="cards_qiwi.svg" inkscape:version="1.3 (0e150ed6c4, 2023-07-21)" xml:space="preserve" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><sodipodi:namedview id="namedview25" pagecolor="#505050" bordercolor="#eeeeee" borderopacity="1" inkscape:showpageshadow="0" inkscape:pageopacity="0" inkscape:pagecheckerboard="0" inkscape:deskcolor="#505050" inkscape:zoom="10.071221" inkscape:cx="63.894935" inkscape:cy="40.56112" inkscape:window-width="2560" inkscape:window-height="1361" inkscape:window-x="-9" inkscape:window-y="-9" inkscape:window-maximized="1" inkscape:current-layer="g25" /><path d="m 35.518947,-11.045649 c 1.4644,4.7380002 5.9937,8.1930002 11.3533,8.1930002 6.545497,0 11.851697,-5.1488 11.851697,-11.5000002 0,-6.3512 -5.3062,-11.5 -11.851697,-11.5 -6.2807,0 -11.4203,4.7412 -11.8262,10.736 0.7681,1.2495 1.0662,2.0225 0.4722,4.071 z" fill="url(#paint0_linear_2654_286127)" id="path1" style="fill:url(#paint0_linear_2654_286127)" /><path d="m 46.261547,-17.233049 10e-4,0.0567 -2.9,4.0879 c -0.4696,-0.0208 -0.9407,0.0593 -1.3881,0.2379 -0.1948,0.0768 -0.3807,0.1732 -0.5548,0.2875 l -6.3685,-2.5468 c 0,0 -0.1474,2.3524 0.4667,4.1055 l 4.5022,1.8026002 c 0.2222,0.9804 0.9185,1.84 1.9414,2.2533 0.8048,0.3244 1.7094,0.3257 2.5152,0.0035 0.8057,-0.3222 1.4467,-0.9416 1.7822,-1.7221 0.179,-0.4157 0.2653,-0.8635 0.2533,-1.3138 l 4.145597,-2.8768002 0.1018,0.0018 c 2.4833,0 4.5018,-1.9644 4.5018,-4.3772 0,-2.4129 -2.0148,-4.37 -4.5018,-4.3751 -2.482197,0 -4.501797,1.9622 -4.501797,4.3751 z m -0.6963,8.2836002 c -0.5385,1.2578 -2.0244,1.8497 -3.3159,1.3275 -0.5731,-0.2337 -1.0376,-0.6637 -1.3052,-1.2082 l 1.4656,0.5893 c 0.2264,0.0915 0.4691,0.1388 0.7144,0.1391 0.2452,4e-4 0.4881,-0.0461 0.7148,-0.1368 0.2267,-0.0908 0.4327,-0.224 0.6063,-0.392 0.1737,-0.1681 0.3115,-0.3677 0.4056,-0.5874 0.1905,-0.444 0.1917,-0.9432002 0.003,-1.3880002 -0.1885,-0.4448 -0.5513,-0.7988 -1.0087,-0.9842 l -1.5185,-0.6092 c 0.5845,-0.2156 1.2489,-0.2228 1.8704,0.0277 0.6296,0.2526 1.1111,0.7285 1.3689,1.3369 0.2577,0.6084 0.2562,1.2794002 -0.004,1.8853002 m 5.201497,-5.3673002 c -0.7958,-0.0021 -1.5582,-0.3101 -2.120397,-0.8566 -0.5621,-0.5465 -0.8782,-1.2869 -0.8788,-2.059 8e-4,-0.772 0.317,-1.5122 0.8791,-2.0586 0.562097,-0.5463 1.324497,-0.8542 2.120097,-0.8563 0.7957,0.0019 1.5583,0.3097 2.1206,0.8561 0.5623,0.5463 0.8785,1.2867 0.8794,2.0588 -7e-4,0.7722 -0.3168,1.5127 -0.8792,2.0593 -0.5623,0.5465 -1.3249,0.8544 -2.1208,0.8563 z m -2.247397,-2.9203 c -5e-4,-0.5801 0.2364,-1.1367 0.658697,-1.5474 0.4222,-0.4108 0.9953,-0.642 1.5931,-0.643 1.2426,0 2.2534,0.9811 2.2534,2.1904 3e-4,0.5803 -0.2369,1.1369 -0.6595,1.5475 -0.4225,0.4106 -0.9958,0.6416 -1.5939,0.6422 -0.5978,-9e-4 -1.1708,-0.232 -1.5931,-0.6426 -0.422297,-0.4105 -0.658997,-0.967 -0.658697,-1.5471 z" fill="#ffffff" id="path2" /><path d="m 76.297644,-12.561749 c 0,-1.168 -0.7222,-1.8532 -1.7654,-2.1802 l -4.5741,-1.4016 c -0.4815,-0.1557 -0.8025,-0.4672 -0.8025,-0.9344 v -0.2336 c 0,-0.7007 0.4013,-1.0901 1.1235,-1.0901 h 2.7284 c 0.7222,0 1.1234,0.3894 1.1234,1.0901 v 0.4672 c 0,0.2336 0.1605,0.3894 0.4013,0.3894 h 1.2036 c 0.2408,0 0.4013,-0.1558 0.4013,-0.3894 v -0.545 c 0,-1.8688 -0.963,-2.8031 -2.8889,-2.8031 h -3.2098 c -1.926,0 -2.8889,0.9343 -2.8889,2.8031 v 0.6229 c 0,1.168 0.7222,1.8687 1.7654,2.1802 l 4.574,1.4016 c 0.4815,0.1401 0.8025,0.4672 0.8025,0.9343 v 0.3894 c 0,0.7007 -0.4012,1.0901 -1.1234,1.0901 h -3.1296 c -0.7223,0 -1.1235,-0.3894 -1.1235,-1.0901 v -0.4672 c 0,-0.2336 -0.1605,-0.3893 -0.4012,-0.3893 h -1.2037 c -0.2408,0 -0.4013,0.1557 -0.4013,0.3893 v 0.545 c 0,1.8688002 0.963,2.8032002 2.8889,2.8032002 h 3.6111 c 1.9259,0 2.8889,-0.9344 2.8889,-2.8032002 z" fill="#ffffff" id="path3" /><path d="m 81.354344,-13.885449 h 2.7284 l 2.4074,4.3604002 c 0.1284,0.2336 0.321,0.3893 0.642,0.3893 h 1.4444 c 0.321,0 0.321,-0.2336 0.2408,-0.3893 l -3.0494,-5.3727002 2.7284,-4.7497 c 0.0802,-0.1557 0.0802,-0.3893 -0.2408,-0.3893 h -1.4444 c -0.321,0 -0.5136,0.1557 -0.642,0.3893 l -2.1666,3.9711 h -2.6482 v -3.9711 c 0,-0.2336 -0.1604,-0.3893 -0.4012,-0.3893 h -1.2037 c -0.2407,0 -0.4012,0.1557 -0.4012,0.3893 v 10.1224002 c 0,0.2336 0.1605,0.3893 0.4012,0.3893 h 1.2037 c 0.2408,0 0.4012,-0.1557 0.4012,-0.3893 z" fill="#ffffff" id="path4" /><path d="m 91.274844,-9.5250488 c 0,0.2336 0.1605,0.3893 0.4012,0.3893 h 1.2037 c 0.2408,0 0.4013,-0.1557 0.4013,-0.3893 V -19.647449 c 0,-0.2336 -0.1605,-0.3893 -0.4013,-0.3893 h -1.2037 c -0.2407,0 -0.4012,0.1557 -0.4012,0.3893 z" fill="#ffffff" id="path5" /><path d="m 104.51044,-12.094549 -5.055496,-7.5529 c -0.1605,-0.2336 -0.321,-0.3893 -0.642,-0.3893 h -1.6049 c -0.2407,0 -0.4012,0.1557 -0.4012,0.3893 v 10.1224002 c 0,0.2336 0.1605,0.3893 0.4012,0.3893 h 1.2037 c 0.2407,0 0.4012,-0.1557 0.4012,-0.3893 v -7.5529002 h 0.0803 l 5.055496,7.5529002 c 0.1605,0.2336 0.321,0.3893 0.642,0.3893 h 1.60491 c 0.2407,0 0.4012,-0.1557 0.4012,-0.3893 V -19.647449 c 0,-0.2336 -0.1605,-0.3893 -0.4012,-0.3893 h -1.2037 c -0.24071,0 -0.40121,0.1557 -0.40121,0.3893 v 7.5529 z" fill="#ffffff" id="path6" /><path d="m 119.03575,-12.561749 c 0,-1.168 -0.722,-1.8532 -1.765,-2.1802 l -4.575,-1.4016 c -0.481,-0.1557 -0.802,-0.4672 -0.802,-0.9344 v -0.2336 c 0,-0.7007 0.401,-1.0901 1.123,-1.0901 h 2.729 c 0.722,0 1.123,0.3894 1.123,1.0901 v 0.4672 c 0,0.2336 0.161,0.3894 0.402,0.3894 h 1.203 c 0.241,0 0.401,-0.1558 0.401,-0.3894 v -0.545 c 0,-1.8688 -0.962,-2.8031 -2.888,-2.8031 h -3.21 c -1.926,0 -2.889,0.9343 -2.889,2.8031 v 0.6229 c 0,1.168 0.722,1.8687 1.765,2.1802 l 4.574,1.4016 c 0.482,0.1401 0.803,0.4672 0.803,0.9343 v 0.3894 c 0,0.7007 -0.401,1.0901 -1.124,1.0901 h -3.129 c -0.722,0 -1.124,-0.3894 -1.124,-1.0901 v -0.4672 c 0,-0.2336 -0.16,-0.3893 -0.401,-0.3893 h -1.204 c -0.24,0 -0.401,0.1557 -0.401,0.3893 v 0.545 c 0,1.8688002 0.963,2.8032002 2.889,2.8032002 h 3.611 c 1.926,0 2.889,-0.9344 2.889,-2.8032002 z" fill="#ffffff" id="path7" /><defs id="defs25"><linearGradient id="paint0_linear_2654_286127" x1="39.6665" y1="46.8203" x2="39.6665" y2="69.8203" gradientUnits="userSpaceOnUse" gradientTransform="translate(7.0357466,-72.852649)"><stop stop-color="#111D2E" id="stop19" /><stop offset="0.212" stop-color="#051839" id="stop20" /><stop offset="0.407" stop-color="#0A1B48" id="stop21" /><stop offset="0.581" stop-color="#132E62" id="stop22" /><stop offset="0.738" stop-color="#144B7E" id="stop23" /><stop offset="0.873" stop-color="#136497" id="stop24" /><stop offset="1" stop-color="#1387B8" id="stop25" /></linearGradient><clipPath id="clip0"><path fill="#fff" d="M0 0h35v22H0z" id="path6-1" /></clipPath><clipPath id="clip1"><path fill="#fff" transform="translate(41 4)" d="M0 0h49v14H0z" id="path7-0" /></clipPath><clipPath id="clip0-4"><path fill="#fff" d="M0 0h35v22H0z" id="path8" /></clipPath><clipPath id="clip1-2"><path fill="#fff" transform="translate(41 4)" d="M0 0h49v14H0z" id="path9" /></clipPath><linearGradient id="paint0_linear" x1="70.4073" y1="34.012" x2="54.75" y2="34.012" gradientUnits="userSpaceOnUse"><stop stop-color="#1F5CD7" id="stop9" /><stop offset="1" stop-color="#02AEFF" id="stop10" /></linearGradient></defs><g style="fill:none" id="g25" transform="translate(25.0209,17.3695)"><g id="g3"><path d="m 13.3828,11.0071 c 0,-3.4997 1.6053,-6.6043 4.0964,-8.6222 C 15.6386,0.889 13.3136,0 10.7948,0 4.83,0 0,4.925 0,11.0071 c 0,6.0821 4.83,11.007 10.7948,11.007 2.5326,0 4.8576,-0.889 6.6983,-2.3707 -2.505,-2.0321 -4.1103,-5.1508 -4.1103,-8.6363 z" fill="#e30d17" id="path1-4" /><path d="m 13.3828,11.0072 c 0,3.4997 1.6054,6.6042 4.0965,8.6222 2.4911,-2.018 4.0965,-5.1225 4.0965,-8.6222 0,-3.4997 -1.6054,-6.6042 -4.0965,-8.6222 -2.4911,2.0039 -4.0965,5.1225 -4.0965,8.6222 z" fill="#eb610a" id="path2-4" /><path d="m 34.2388,16.9481 v -0.3246 h -0.1245 v -0.0847 h 0.3459 v 0.0847 h -0.1384 v 0.3246 z m 0.6643,0 v -0.2823 l -0.0969,0.2399 h -0.0968 l -0.0969,-0.2399 v 0.2823 h -0.0969 v -0.4093 h 0.1384 l 0.0969,0.2681 0.0969,-0.2681 h 0.1383 v 0.4093 z M 24.1778,0 c -2.5326,0 -4.8577,0.889 -6.6983,2.3708 2.4911,2.018 4.0965,5.1225 4.0965,8.6221 0,3.4997 -1.6054,6.6043 -4.0965,8.6222 1.8406,1.4818 4.1657,2.3708 6.6983,2.3708 5.9648,0 10.7948,-4.925 10.7948,-11.0071 C 34.9726,4.8968 30.1288,0 24.1778,0 Z" fill="#f69f00" id="path3-3" /></g><g id="g5"><path d="M 62.2341,17.7826 H 58.25 L 60.7554,4.2529 h 3.9841 z M 54.8826,4.253 51.0629,13.55 50.6111,11.5604 49.2557,5.4467 c 0,0 -0.1643,-1.23 -1.8894,-1.23 H 41.0821 L 41,4.47 c 0,0 1.9304,0.3618 4.1894,1.5556 l 3.4912,11.7571 H 52.829 L 59.1953,4.253 Z m 31.4202,13.5296 h 3.6554 L 86.7546,4.2529 h -3.2037 c -1.4787,0 -1.8483,1.013 -1.8483,1.013 l -5.9145,12.5167 h 4.1484 l 0.8214,-2.0258 h 5.0931 z m -4.3948,-4.8113 2.0947,-5.0646 1.1911,5.0646 z M 76.0764,7.509 76.6514,4.615 c 0,0 -1.7661,-0.5789 -3.6144,-0.5789 -1.9715,0 -6.6949,0.7597 -6.6949,4.4858 0,3.5091 5.5449,3.5452 5.5449,5.3902 0,1.845 -4.9698,1.5194 -6.6128,0.3618 l -0.575,3.0387 c 0,0 1.7662,0.7597 4.518,0.7597 2.7108,0 6.8592,-1.23 6.8592,-4.6305 0,-3.509 -5.5859,-3.8346 -5.5859,-5.3902 0,-1.5917 3.9019,-1.3746 5.5859,-0.5426 z" fill="#ffffff" id="path4-1" /><path d="M 50.6111,11.5243 49.2557,5.4468 c 0,0 -0.1643,-1.23 -1.8894,-1.23 H 41.0821 L 41,4.47 c 0,0 3.0394,0.5427 5.9145,2.6409 2.793,1.9534 3.6966,4.4134 3.6966,4.4134 z" fill="#f7a823" id="path5-6" /></g><g id="g28" transform="translate(-31.541455)"><g id="g27"><path fill-rule="evenodd" clip-rule="evenodd" d="m 21.6915,30.0609 c 0.4796,-0.0029 1.9048,-0.1362 2.5085,1.9793 0.4067,1.425 1.0545,3.7592 1.9434,7.0026 h 0.362 c 0.9533,-3.4195 1.6082,-5.7537 1.9646,-7.0026 0.61,-2.1375 2.135,-1.9792 2.745,-1.9792 h 4.7063 v 15.2 h -4.7967 v -8.9576 h -0.3217 l -2.674,8.9576 H 24.52 l -2.674,-8.9643 h -0.3217 v 8.9643 h -4.7968 v -15.2 z m 21.1179,10e-5 v 8.9643 h 0.3827 l 3.2526,-7.3713 c 0.6314,-1.4669 1.9771,-1.593 1.9771,-1.593 h 4.6419 v 15.2 h -4.897 v -8.9643 h -0.3826 l -3.1889,7.3713 c -0.6314,1.4602 -2.0409,1.593 -2.0409,1.593 h -4.6418 v -15.2 z m 27.1804,7.2231 c -0.6831,2.0097 -2.8282,3.449 -5.2032,3.449 h -5.1354 v 4.5279 h -4.6567 v -7.9769 z" fill="#67c09e" id="path6-5" /><path fill-rule="evenodd" clip-rule="evenodd" d="M 65.0109,30.061 H 54.75 c 0.2442,3.3841 3.0511,6.281 5.9568,6.281 h 9.6063 c 0.5543,-2.8125 -1.3541,-6.281 -5.3022,-6.281 z" fill="url(#paint0_linear)" id="path7-2" style="fill:url(#paint0_linear)" /></g><path d="m 116.47361,31.412592 v 10.1 c 0,0.16 -0.12,0.28 -0.28,0.28 h -2.06 c -0.16,0 -0.28,-0.12 -0.28,-0.28 v -10.1 c 0,-0.16 0.12,-0.28 0.28,-0.28 h 2.06 c 0.16,0 0.28,0.12 0.28,0.28 z m 16.08,-0.28 h -2.3 c -0.12,0 -0.22001,0.08 -0.26001,0.2 l -1.82,5.98 -1.99999,-5.98 c -0.04,-0.12 -0.14,-0.18 -0.26,-0.18 h -1.62 c -0.12,0 -0.22,0.08 -0.26,0.18 l -2,5.98 -1.86,-5.98 c -0.04,-0.12 -0.14,-0.2 -0.26,-0.2 h -2.3 c -0.08,0 -0.18,0.04 -0.22,0.12 -0.06,0.08 -0.06,0.16 -0.04,0.24 l 3.4,10.12 c 0.04,0.12 0.14,0.18 0.26,0.18 h 1.84 c 0.12,0 0.22,-0.08 0.26,-0.18 l 1.98,-5.9 1.98,5.9 c 0.04,0.12 0.14,0.18 0.26,0.18 h 1.83999 c 0.12,0 0.22,-0.08 0.26,-0.18 l 3.40001,-10.12 c 0.02,-0.08 0.02,-0.18 -0.04,-0.24 -0.06,-0.08 -0.14,-0.12 -0.24,-0.12 z m 3.48,0 h -2.06 c -0.16,0 -0.28,0.12 -0.28,0.28 v 10.1 c 0,0.16 0.12,0.28 0.28,0.28 h 2.06 c 0.16,0 0.28,-0.12 0.28,-0.28 v -10.1 c 0,-0.16 -0.14,-0.28 -0.28,-0.28 z m -23.36,10.32 c 0.12,0.14 0.02,0.34 -0.16,0.34 h -2.54 c -0.1,0 -0.2,-0.04 -0.26,-0.12 l -0.42,-0.52 c -0.88,0.56 -1.92,0.9 -3.02,0.9 -3.08,0 -5.58,-2.5 -5.58,-5.58 0,-3.08 2.5,-5.58 5.58,-5.58 3.08,0 5.58,2.5 5.58,5.58 0,1.1 -0.32,2.14 -0.88,3.02 z m -5.02,-2.26 -1.1,-1.34 c -0.12,-0.14 -0.02,-0.36 0.16,-0.36 h 2.32 c 0.12,-0.32 0.18,-0.68 0.18,-1.04 0,-1.66 -1.24,-3.1 -2.94,-3.1 -1.7,0 -2.94,1.44 -2.94,3.1 0,1.66 1.24,3.08 2.94,3.08 0.5,0.02 0.96,-0.12 1.38,-0.34 z m -13.32,2.2 c 0.06,0.42 -0.08,0.6 -0.2,0.6 -0.14,0 -0.32,-0.18 -0.54,-0.5 -0.22,-0.34 -0.3,-0.72 -0.18,-0.9 0.06,-0.12 0.22,-0.18 0.4,-0.12 0.34,0.12 0.48,0.66 0.52,0.92 z m -1.98,0.92 c 0.42,0.36 0.56,0.8 0.34,1.1 -0.12,0.16 -0.32,0.26 -0.58,0.26 -0.24,0 -0.48,-0.08 -0.66,-0.24 -0.38,-0.34 -0.5,-0.9 -0.24,-1.2 0.1,-0.12 0.26,-0.18 0.46,-0.18 0.22,-0.02 0.46,0.08 0.68,0.26 z m -0.72,3.48 c 1.84,0 3.84,0.64 6.06,2.6 0.22,0.2 0.52,-0.04 0.32,-0.3 -2.18,-2.74 -4.18,-3.26 -6.18,-3.7 -2.46,-0.54 -3.72,-1.92 -4.6,-3.44 -0.18,-0.3 -0.26,-0.24 -0.26,0.14 -0.02,0.48 0.02,1.1 0.12,1.72 h -0.3 c -3.5,0 -6.36,-2.84 -6.36,-6.36 0,-3.52 2.84,-6.36 6.36,-6.36 3.5,0 6.36,2.84 6.36,6.36 0,0.24 -0.02,0.5 -0.04,0.74 -0.46,-0.08 -1.38,-0.1 -2.02,-0.04 -0.24,0.02 -0.2,0.14 -0.02,0.16 2.1,0.38 3.54,1.68 3.88,4.04 0,0.06 0.08,0.08 0.1,0.02 0.86,-1.44 1.36,-3.12 1.36,-4.94 -0.02,-5.28 -4.32,-9.58 -9.62,-9.58 -5.32,0 -9.62,4.3 -9.62,9.62 0,5.32 4.3,9.62 9.62,9.62 1.4,-0.02 2.8,-0.3 4.84,-0.3 z" fill="#ff8c00" id="path1-5" style="stroke-width:0.2" /></g></g></svg>\
							<div class="refill-window__payment-label">#1</div>\
    					</button>\
    				</li>\
    				<li class="refill-window__payment" onclick="OnClickElement2(this)">\
    					<button class="refill-window__payment-btn" id="element2">\
    						<svg class="refill-window__payment-icon" viewBox="0 0 140 80" fill="none" version="1.1" id="svg25" sodipodi:docname="cards_qiwi.svg" inkscape:version="1.3 (0e150ed6c4, 2023-07-21)" xml:space="preserve" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><sodipodi:namedview id="namedview25" pagecolor="#505050" bordercolor="#eeeeee" borderopacity="1" inkscape:showpageshadow="0" inkscape:pageopacity="0" inkscape:pagecheckerboard="0" inkscape:deskcolor="#505050" inkscape:zoom="10.071221" inkscape:cx="63.894935" inkscape:cy="40.56112" inkscape:window-width="2560" inkscape:window-height="1361" inkscape:window-x="-9" inkscape:window-y="-9" inkscape:window-maximized="1" inkscape:current-layer="g25" /><path d="m 35.518947,-11.045649 c 1.4644,4.7380002 5.9937,8.1930002 11.3533,8.1930002 6.545497,0 11.851697,-5.1488 11.851697,-11.5000002 0,-6.3512 -5.3062,-11.5 -11.851697,-11.5 -6.2807,0 -11.4203,4.7412 -11.8262,10.736 0.7681,1.2495 1.0662,2.0225 0.4722,4.071 z" fill="url(#paint0_linear_2654_286127)" id="path1" style="fill:url(#paint0_linear_2654_286127)" /><path d="m 46.261547,-17.233049 10e-4,0.0567 -2.9,4.0879 c -0.4696,-0.0208 -0.9407,0.0593 -1.3881,0.2379 -0.1948,0.0768 -0.3807,0.1732 -0.5548,0.2875 l -6.3685,-2.5468 c 0,0 -0.1474,2.3524 0.4667,4.1055 l 4.5022,1.8026002 c 0.2222,0.9804 0.9185,1.84 1.9414,2.2533 0.8048,0.3244 1.7094,0.3257 2.5152,0.0035 0.8057,-0.3222 1.4467,-0.9416 1.7822,-1.7221 0.179,-0.4157 0.2653,-0.8635 0.2533,-1.3138 l 4.145597,-2.8768002 0.1018,0.0018 c 2.4833,0 4.5018,-1.9644 4.5018,-4.3772 0,-2.4129 -2.0148,-4.37 -4.5018,-4.3751 -2.482197,0 -4.501797,1.9622 -4.501797,4.3751 z m -0.6963,8.2836002 c -0.5385,1.2578 -2.0244,1.8497 -3.3159,1.3275 -0.5731,-0.2337 -1.0376,-0.6637 -1.3052,-1.2082 l 1.4656,0.5893 c 0.2264,0.0915 0.4691,0.1388 0.7144,0.1391 0.2452,4e-4 0.4881,-0.0461 0.7148,-0.1368 0.2267,-0.0908 0.4327,-0.224 0.6063,-0.392 0.1737,-0.1681 0.3115,-0.3677 0.4056,-0.5874 0.1905,-0.444 0.1917,-0.9432002 0.003,-1.3880002 -0.1885,-0.4448 -0.5513,-0.7988 -1.0087,-0.9842 l -1.5185,-0.6092 c 0.5845,-0.2156 1.2489,-0.2228 1.8704,0.0277 0.6296,0.2526 1.1111,0.7285 1.3689,1.3369 0.2577,0.6084 0.2562,1.2794002 -0.004,1.8853002 m 5.201497,-5.3673002 c -0.7958,-0.0021 -1.5582,-0.3101 -2.120397,-0.8566 -0.5621,-0.5465 -0.8782,-1.2869 -0.8788,-2.059 8e-4,-0.772 0.317,-1.5122 0.8791,-2.0586 0.562097,-0.5463 1.324497,-0.8542 2.120097,-0.8563 0.7957,0.0019 1.5583,0.3097 2.1206,0.8561 0.5623,0.5463 0.8785,1.2867 0.8794,2.0588 -7e-4,0.7722 -0.3168,1.5127 -0.8792,2.0593 -0.5623,0.5465 -1.3249,0.8544 -2.1208,0.8563 z m -2.247397,-2.9203 c -5e-4,-0.5801 0.2364,-1.1367 0.658697,-1.5474 0.4222,-0.4108 0.9953,-0.642 1.5931,-0.643 1.2426,0 2.2534,0.9811 2.2534,2.1904 3e-4,0.5803 -0.2369,1.1369 -0.6595,1.5475 -0.4225,0.4106 -0.9958,0.6416 -1.5939,0.6422 -0.5978,-9e-4 -1.1708,-0.232 -1.5931,-0.6426 -0.422297,-0.4105 -0.658997,-0.967 -0.658697,-1.5471 z" fill="#ffffff" id="path2" /><path d="m 76.297644,-12.561749 c 0,-1.168 -0.7222,-1.8532 -1.7654,-2.1802 l -4.5741,-1.4016 c -0.4815,-0.1557 -0.8025,-0.4672 -0.8025,-0.9344 v -0.2336 c 0,-0.7007 0.4013,-1.0901 1.1235,-1.0901 h 2.7284 c 0.7222,0 1.1234,0.3894 1.1234,1.0901 v 0.4672 c 0,0.2336 0.1605,0.3894 0.4013,0.3894 h 1.2036 c 0.2408,0 0.4013,-0.1558 0.4013,-0.3894 v -0.545 c 0,-1.8688 -0.963,-2.8031 -2.8889,-2.8031 h -3.2098 c -1.926,0 -2.8889,0.9343 -2.8889,2.8031 v 0.6229 c 0,1.168 0.7222,1.8687 1.7654,2.1802 l 4.574,1.4016 c 0.4815,0.1401 0.8025,0.4672 0.8025,0.9343 v 0.3894 c 0,0.7007 -0.4012,1.0901 -1.1234,1.0901 h -3.1296 c -0.7223,0 -1.1235,-0.3894 -1.1235,-1.0901 v -0.4672 c 0,-0.2336 -0.1605,-0.3893 -0.4012,-0.3893 h -1.2037 c -0.2408,0 -0.4013,0.1557 -0.4013,0.3893 v 0.545 c 0,1.8688002 0.963,2.8032002 2.8889,2.8032002 h 3.6111 c 1.9259,0 2.8889,-0.9344 2.8889,-2.8032002 z" fill="#ffffff" id="path3" /><path d="m 81.354344,-13.885449 h 2.7284 l 2.4074,4.3604002 c 0.1284,0.2336 0.321,0.3893 0.642,0.3893 h 1.4444 c 0.321,0 0.321,-0.2336 0.2408,-0.3893 l -3.0494,-5.3727002 2.7284,-4.7497 c 0.0802,-0.1557 0.0802,-0.3893 -0.2408,-0.3893 h -1.4444 c -0.321,0 -0.5136,0.1557 -0.642,0.3893 l -2.1666,3.9711 h -2.6482 v -3.9711 c 0,-0.2336 -0.1604,-0.3893 -0.4012,-0.3893 h -1.2037 c -0.2407,0 -0.4012,0.1557 -0.4012,0.3893 v 10.1224002 c 0,0.2336 0.1605,0.3893 0.4012,0.3893 h 1.2037 c 0.2408,0 0.4012,-0.1557 0.4012,-0.3893 z" fill="#ffffff" id="path4" /><path d="m 91.274844,-9.5250488 c 0,0.2336 0.1605,0.3893 0.4012,0.3893 h 1.2037 c 0.2408,0 0.4013,-0.1557 0.4013,-0.3893 V -19.647449 c 0,-0.2336 -0.1605,-0.3893 -0.4013,-0.3893 h -1.2037 c -0.2407,0 -0.4012,0.1557 -0.4012,0.3893 z" fill="#ffffff" id="path5" /><path d="m 104.51044,-12.094549 -5.055496,-7.5529 c -0.1605,-0.2336 -0.321,-0.3893 -0.642,-0.3893 h -1.6049 c -0.2407,0 -0.4012,0.1557 -0.4012,0.3893 v 10.1224002 c 0,0.2336 0.1605,0.3893 0.4012,0.3893 h 1.2037 c 0.2407,0 0.4012,-0.1557 0.4012,-0.3893 v -7.5529002 h 0.0803 l 5.055496,7.5529002 c 0.1605,0.2336 0.321,0.3893 0.642,0.3893 h 1.60491 c 0.2407,0 0.4012,-0.1557 0.4012,-0.3893 V -19.647449 c 0,-0.2336 -0.1605,-0.3893 -0.4012,-0.3893 h -1.2037 c -0.24071,0 -0.40121,0.1557 -0.40121,0.3893 v 7.5529 z" fill="#ffffff" id="path6" /><path d="m 119.03575,-12.561749 c 0,-1.168 -0.722,-1.8532 -1.765,-2.1802 l -4.575,-1.4016 c -0.481,-0.1557 -0.802,-0.4672 -0.802,-0.9344 v -0.2336 c 0,-0.7007 0.401,-1.0901 1.123,-1.0901 h 2.729 c 0.722,0 1.123,0.3894 1.123,1.0901 v 0.4672 c 0,0.2336 0.161,0.3894 0.402,0.3894 h 1.203 c 0.241,0 0.401,-0.1558 0.401,-0.3894 v -0.545 c 0,-1.8688 -0.962,-2.8031 -2.888,-2.8031 h -3.21 c -1.926,0 -2.889,0.9343 -2.889,2.8031 v 0.6229 c 0,1.168 0.722,1.8687 1.765,2.1802 l 4.574,1.4016 c 0.482,0.1401 0.803,0.4672 0.803,0.9343 v 0.3894 c 0,0.7007 -0.401,1.0901 -1.124,1.0901 h -3.129 c -0.722,0 -1.124,-0.3894 -1.124,-1.0901 v -0.4672 c 0,-0.2336 -0.16,-0.3893 -0.401,-0.3893 h -1.204 c -0.24,0 -0.401,0.1557 -0.401,0.3893 v 0.545 c 0,1.8688002 0.963,2.8032002 2.889,2.8032002 h 3.611 c 1.926,0 2.889,-0.9344 2.889,-2.8032002 z" fill="#ffffff" id="path7" /><defs id="defs25"><linearGradient id="paint0_linear_2654_286127" x1="39.6665" y1="46.8203" x2="39.6665" y2="69.8203" gradientUnits="userSpaceOnUse" gradientTransform="translate(7.0357466,-72.852649)"><stop stop-color="#111D2E" id="stop19" /><stop offset="0.212" stop-color="#051839" id="stop20" /><stop offset="0.407" stop-color="#0A1B48" id="stop21" /><stop offset="0.581" stop-color="#132E62" id="stop22" /><stop offset="0.738" stop-color="#144B7E" id="stop23" /><stop offset="0.873" stop-color="#136497" id="stop24" /><stop offset="1" stop-color="#1387B8" id="stop25" /></linearGradient><clipPath id="clip0"><path fill="#fff" d="M0 0h35v22H0z" id="path6-1" /></clipPath><clipPath id="clip1"><path fill="#fff" transform="translate(41 4)" d="M0 0h49v14H0z" id="path7-0" /></clipPath><clipPath id="clip0-4"><path fill="#fff" d="M0 0h35v22H0z" id="path8" /></clipPath><clipPath id="clip1-2"><path fill="#fff" transform="translate(41 4)" d="M0 0h49v14H0z" id="path9" /></clipPath><linearGradient id="paint0_linear" x1="70.4073" y1="34.012" x2="54.75" y2="34.012" gradientUnits="userSpaceOnUse"><stop stop-color="#1F5CD7" id="stop9" /><stop offset="1" stop-color="#02AEFF" id="stop10" /></linearGradient></defs><g style="fill:none" id="g25" transform="translate(25.0209,17.3695)"><g id="g3"><path d="m 13.3828,11.0071 c 0,-3.4997 1.6053,-6.6043 4.0964,-8.6222 C 15.6386,0.889 13.3136,0 10.7948,0 4.83,0 0,4.925 0,11.0071 c 0,6.0821 4.83,11.007 10.7948,11.007 2.5326,0 4.8576,-0.889 6.6983,-2.3707 -2.505,-2.0321 -4.1103,-5.1508 -4.1103,-8.6363 z" fill="#e30d17" id="path1-4" /><path d="m 13.3828,11.0072 c 0,3.4997 1.6054,6.6042 4.0965,8.6222 2.4911,-2.018 4.0965,-5.1225 4.0965,-8.6222 0,-3.4997 -1.6054,-6.6042 -4.0965,-8.6222 -2.4911,2.0039 -4.0965,5.1225 -4.0965,8.6222 z" fill="#eb610a" id="path2-4" /><path d="m 34.2388,16.9481 v -0.3246 h -0.1245 v -0.0847 h 0.3459 v 0.0847 h -0.1384 v 0.3246 z m 0.6643,0 v -0.2823 l -0.0969,0.2399 h -0.0968 l -0.0969,-0.2399 v 0.2823 h -0.0969 v -0.4093 h 0.1384 l 0.0969,0.2681 0.0969,-0.2681 h 0.1383 v 0.4093 z M 24.1778,0 c -2.5326,0 -4.8577,0.889 -6.6983,2.3708 2.4911,2.018 4.0965,5.1225 4.0965,8.6221 0,3.4997 -1.6054,6.6043 -4.0965,8.6222 1.8406,1.4818 4.1657,2.3708 6.6983,2.3708 5.9648,0 10.7948,-4.925 10.7948,-11.0071 C 34.9726,4.8968 30.1288,0 24.1778,0 Z" fill="#f69f00" id="path3-3" /></g><g id="g5"><path d="M 62.2341,17.7826 H 58.25 L 60.7554,4.2529 h 3.9841 z M 54.8826,4.253 51.0629,13.55 50.6111,11.5604 49.2557,5.4467 c 0,0 -0.1643,-1.23 -1.8894,-1.23 H 41.0821 L 41,4.47 c 0,0 1.9304,0.3618 4.1894,1.5556 l 3.4912,11.7571 H 52.829 L 59.1953,4.253 Z m 31.4202,13.5296 h 3.6554 L 86.7546,4.2529 h -3.2037 c -1.4787,0 -1.8483,1.013 -1.8483,1.013 l -5.9145,12.5167 h 4.1484 l 0.8214,-2.0258 h 5.0931 z m -4.3948,-4.8113 2.0947,-5.0646 1.1911,5.0646 z M 76.0764,7.509 76.6514,4.615 c 0,0 -1.7661,-0.5789 -3.6144,-0.5789 -1.9715,0 -6.6949,0.7597 -6.6949,4.4858 0,3.5091 5.5449,3.5452 5.5449,5.3902 0,1.845 -4.9698,1.5194 -6.6128,0.3618 l -0.575,3.0387 c 0,0 1.7662,0.7597 4.518,0.7597 2.7108,0 6.8592,-1.23 6.8592,-4.6305 0,-3.509 -5.5859,-3.8346 -5.5859,-5.3902 0,-1.5917 3.9019,-1.3746 5.5859,-0.5426 z" fill="#ffffff" id="path4-1" /><path d="M 50.6111,11.5243 49.2557,5.4468 c 0,0 -0.1643,-1.23 -1.8894,-1.23 H 41.0821 L 41,4.47 c 0,0 3.0394,0.5427 5.9145,2.6409 2.793,1.9534 3.6966,4.4134 3.6966,4.4134 z" fill="#f7a823" id="path5-6" /></g><g id="g28" transform="translate(-31.541455)"><g id="g27"><path fill-rule="evenodd" clip-rule="evenodd" d="m 21.6915,30.0609 c 0.4796,-0.0029 1.9048,-0.1362 2.5085,1.9793 0.4067,1.425 1.0545,3.7592 1.9434,7.0026 h 0.362 c 0.9533,-3.4195 1.6082,-5.7537 1.9646,-7.0026 0.61,-2.1375 2.135,-1.9792 2.745,-1.9792 h 4.7063 v 15.2 h -4.7967 v -8.9576 h -0.3217 l -2.674,8.9576 H 24.52 l -2.674,-8.9643 h -0.3217 v 8.9643 h -4.7968 v -15.2 z m 21.1179,10e-5 v 8.9643 h 0.3827 l 3.2526,-7.3713 c 0.6314,-1.4669 1.9771,-1.593 1.9771,-1.593 h 4.6419 v 15.2 h -4.897 v -8.9643 h -0.3826 l -3.1889,7.3713 c -0.6314,1.4602 -2.0409,1.593 -2.0409,1.593 h -4.6418 v -15.2 z m 27.1804,7.2231 c -0.6831,2.0097 -2.8282,3.449 -5.2032,3.449 h -5.1354 v 4.5279 h -4.6567 v -7.9769 z" fill="#67c09e" id="path6-5" /><path fill-rule="evenodd" clip-rule="evenodd" d="M 65.0109,30.061 H 54.75 c 0.2442,3.3841 3.0511,6.281 5.9568,6.281 h 9.6063 c 0.5543,-2.8125 -1.3541,-6.281 -5.3022,-6.281 z" fill="url(#paint0_linear)" id="path7-2" style="fill:url(#paint0_linear)" /></g><path d="m 116.47361,31.412592 v 10.1 c 0,0.16 -0.12,0.28 -0.28,0.28 h -2.06 c -0.16,0 -0.28,-0.12 -0.28,-0.28 v -10.1 c 0,-0.16 0.12,-0.28 0.28,-0.28 h 2.06 c 0.16,0 0.28,0.12 0.28,0.28 z m 16.08,-0.28 h -2.3 c -0.12,0 -0.22001,0.08 -0.26001,0.2 l -1.82,5.98 -1.99999,-5.98 c -0.04,-0.12 -0.14,-0.18 -0.26,-0.18 h -1.62 c -0.12,0 -0.22,0.08 -0.26,0.18 l -2,5.98 -1.86,-5.98 c -0.04,-0.12 -0.14,-0.2 -0.26,-0.2 h -2.3 c -0.08,0 -0.18,0.04 -0.22,0.12 -0.06,0.08 -0.06,0.16 -0.04,0.24 l 3.4,10.12 c 0.04,0.12 0.14,0.18 0.26,0.18 h 1.84 c 0.12,0 0.22,-0.08 0.26,-0.18 l 1.98,-5.9 1.98,5.9 c 0.04,0.12 0.14,0.18 0.26,0.18 h 1.83999 c 0.12,0 0.22,-0.08 0.26,-0.18 l 3.40001,-10.12 c 0.02,-0.08 0.02,-0.18 -0.04,-0.24 -0.06,-0.08 -0.14,-0.12 -0.24,-0.12 z m 3.48,0 h -2.06 c -0.16,0 -0.28,0.12 -0.28,0.28 v 10.1 c 0,0.16 0.12,0.28 0.28,0.28 h 2.06 c 0.16,0 0.28,-0.12 0.28,-0.28 v -10.1 c 0,-0.16 -0.14,-0.28 -0.28,-0.28 z m -23.36,10.32 c 0.12,0.14 0.02,0.34 -0.16,0.34 h -2.54 c -0.1,0 -0.2,-0.04 -0.26,-0.12 l -0.42,-0.52 c -0.88,0.56 -1.92,0.9 -3.02,0.9 -3.08,0 -5.58,-2.5 -5.58,-5.58 0,-3.08 2.5,-5.58 5.58,-5.58 3.08,0 5.58,2.5 5.58,5.58 0,1.1 -0.32,2.14 -0.88,3.02 z m -5.02,-2.26 -1.1,-1.34 c -0.12,-0.14 -0.02,-0.36 0.16,-0.36 h 2.32 c 0.12,-0.32 0.18,-0.68 0.18,-1.04 0,-1.66 -1.24,-3.1 -2.94,-3.1 -1.7,0 -2.94,1.44 -2.94,3.1 0,1.66 1.24,3.08 2.94,3.08 0.5,0.02 0.96,-0.12 1.38,-0.34 z m -13.32,2.2 c 0.06,0.42 -0.08,0.6 -0.2,0.6 -0.14,0 -0.32,-0.18 -0.54,-0.5 -0.22,-0.34 -0.3,-0.72 -0.18,-0.9 0.06,-0.12 0.22,-0.18 0.4,-0.12 0.34,0.12 0.48,0.66 0.52,0.92 z m -1.98,0.92 c 0.42,0.36 0.56,0.8 0.34,1.1 -0.12,0.16 -0.32,0.26 -0.58,0.26 -0.24,0 -0.48,-0.08 -0.66,-0.24 -0.38,-0.34 -0.5,-0.9 -0.24,-1.2 0.1,-0.12 0.26,-0.18 0.46,-0.18 0.22,-0.02 0.46,0.08 0.68,0.26 z m -0.72,3.48 c 1.84,0 3.84,0.64 6.06,2.6 0.22,0.2 0.52,-0.04 0.32,-0.3 -2.18,-2.74 -4.18,-3.26 -6.18,-3.7 -2.46,-0.54 -3.72,-1.92 -4.6,-3.44 -0.18,-0.3 -0.26,-0.24 -0.26,0.14 -0.02,0.48 0.02,1.1 0.12,1.72 h -0.3 c -3.5,0 -6.36,-2.84 -6.36,-6.36 0,-3.52 2.84,-6.36 6.36,-6.36 3.5,0 6.36,2.84 6.36,6.36 0,0.24 -0.02,0.5 -0.04,0.74 -0.46,-0.08 -1.38,-0.1 -2.02,-0.04 -0.24,0.02 -0.2,0.14 -0.02,0.16 2.1,0.38 3.54,1.68 3.88,4.04 0,0.06 0.08,0.08 0.1,0.02 0.86,-1.44 1.36,-3.12 1.36,-4.94 -0.02,-5.28 -4.32,-9.58 -9.62,-9.58 -5.32,0 -9.62,4.3 -9.62,9.62 0,5.32 4.3,9.62 9.62,9.62 1.4,-0.02 2.8,-0.3 4.84,-0.3 z" fill="#ff8c00" id="path1-5" style="stroke-width:0.2" /></g></g></svg>\
							<div class="refill-window__payment-label">#2</div>\
    					</button>\
    				</li>\
    				<li class="refill-window__payment" onclick="OnClickElement3(this)">\
    					<button class="refill-window__payment-btn" id="element3">\
    						<svg class="refill-window__payment-icon" viewBox="0 0 140 80" fill="none" version="1.1" id="svg25" sodipodi:docname="cards_yoo.svg" inkscape:version="1.3 (0e150ed6c4, 2023-07-21)" xml:space="preserve" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><sodipodi:namedview id="namedview25" pagecolor="#505050" bordercolor="#eeeeee" borderopacity="1" inkscape:showpageshadow="0" inkscape:pageopacity="0" inkscape:pagecheckerboard="0" inkscape:deskcolor="#505050" inkscape:zoom="10.071221" inkscape:cx="52.47626" inkscape:cy="32.12123" inkscape:window-width="2560" inkscape:window-height="1361" inkscape:window-x="-9" inkscape:window-y="-9" inkscape:window-maximized="1" inkscape:current-layer="g25" /><path d="m 35.518947,-11.045649 c 1.4644,4.7380002 5.9937,8.1930002 11.3533,8.1930002 6.545497,0 11.851697,-5.1488 11.851697,-11.5000002 0,-6.3512 -5.3062,-11.5 -11.851697,-11.5 -6.2807,0 -11.4203,4.7412 -11.8262,10.736 0.7681,1.2495 1.0662,2.0225 0.4722,4.071 z" fill="url(#paint0_linear_2654_286127)" id="path1" style="fill:url(#paint0_linear_2654_286127)" /><path d="m 46.261547,-17.233049 10e-4,0.0567 -2.9,4.0879 c -0.4696,-0.0208 -0.9407,0.0593 -1.3881,0.2379 -0.1948,0.0768 -0.3807,0.1732 -0.5548,0.2875 l -6.3685,-2.5468 c 0,0 -0.1474,2.3524 0.4667,4.1055 l 4.5022,1.8026002 c 0.2222,0.9804 0.9185,1.84 1.9414,2.2533 0.8048,0.3244 1.7094,0.3257 2.5152,0.0035 0.8057,-0.3222 1.4467,-0.9416 1.7822,-1.7221 0.179,-0.4157 0.2653,-0.8635 0.2533,-1.3138 l 4.145597,-2.8768002 0.1018,0.0018 c 2.4833,0 4.5018,-1.9644 4.5018,-4.3772 0,-2.4129 -2.0148,-4.37 -4.5018,-4.3751 -2.482197,0 -4.501797,1.9622 -4.501797,4.3751 z m -0.6963,8.2836002 c -0.5385,1.2578 -2.0244,1.8497 -3.3159,1.3275 -0.5731,-0.2337 -1.0376,-0.6637 -1.3052,-1.2082 l 1.4656,0.5893 c 0.2264,0.0915 0.4691,0.1388 0.7144,0.1391 0.2452,4e-4 0.4881,-0.0461 0.7148,-0.1368 0.2267,-0.0908 0.4327,-0.224 0.6063,-0.392 0.1737,-0.1681 0.3115,-0.3677 0.4056,-0.5874 0.1905,-0.444 0.1917,-0.9432002 0.003,-1.3880002 -0.1885,-0.4448 -0.5513,-0.7988 -1.0087,-0.9842 l -1.5185,-0.6092 c 0.5845,-0.2156 1.2489,-0.2228 1.8704,0.0277 0.6296,0.2526 1.1111,0.7285 1.3689,1.3369 0.2577,0.6084 0.2562,1.2794002 -0.004,1.8853002 m 5.201497,-5.3673002 c -0.7958,-0.0021 -1.5582,-0.3101 -2.120397,-0.8566 -0.5621,-0.5465 -0.8782,-1.2869 -0.8788,-2.059 8e-4,-0.772 0.317,-1.5122 0.8791,-2.0586 0.562097,-0.5463 1.324497,-0.8542 2.120097,-0.8563 0.7957,0.0019 1.5583,0.3097 2.1206,0.8561 0.5623,0.5463 0.8785,1.2867 0.8794,2.0588 -7e-4,0.7722 -0.3168,1.5127 -0.8792,2.0593 -0.5623,0.5465 -1.3249,0.8544 -2.1208,0.8563 z m -2.247397,-2.9203 c -5e-4,-0.5801 0.2364,-1.1367 0.658697,-1.5474 0.4222,-0.4108 0.9953,-0.642 1.5931,-0.643 1.2426,0 2.2534,0.9811 2.2534,2.1904 3e-4,0.5803 -0.2369,1.1369 -0.6595,1.5475 -0.4225,0.4106 -0.9958,0.6416 -1.5939,0.6422 -0.5978,-9e-4 -1.1708,-0.232 -1.5931,-0.6426 -0.422297,-0.4105 -0.658997,-0.967 -0.658697,-1.5471 z" fill="#ffffff" id="path2" /><path d="m 76.297644,-12.561749 c 0,-1.168 -0.7222,-1.8532 -1.7654,-2.1802 l -4.5741,-1.4016 c -0.4815,-0.1557 -0.8025,-0.4672 -0.8025,-0.9344 v -0.2336 c 0,-0.7007 0.4013,-1.0901 1.1235,-1.0901 h 2.7284 c 0.7222,0 1.1234,0.3894 1.1234,1.0901 v 0.4672 c 0,0.2336 0.1605,0.3894 0.4013,0.3894 h 1.2036 c 0.2408,0 0.4013,-0.1558 0.4013,-0.3894 v -0.545 c 0,-1.8688 -0.963,-2.8031 -2.8889,-2.8031 h -3.2098 c -1.926,0 -2.8889,0.9343 -2.8889,2.8031 v 0.6229 c 0,1.168 0.7222,1.8687 1.7654,2.1802 l 4.574,1.4016 c 0.4815,0.1401 0.8025,0.4672 0.8025,0.9343 v 0.3894 c 0,0.7007 -0.4012,1.0901 -1.1234,1.0901 h -3.1296 c -0.7223,0 -1.1235,-0.3894 -1.1235,-1.0901 v -0.4672 c 0,-0.2336 -0.1605,-0.3893 -0.4012,-0.3893 h -1.2037 c -0.2408,0 -0.4013,0.1557 -0.4013,0.3893 v 0.545 c 0,1.8688002 0.963,2.8032002 2.8889,2.8032002 h 3.6111 c 1.9259,0 2.8889,-0.9344 2.8889,-2.8032002 z" fill="#ffffff" id="path3" /><path d="m 81.354344,-13.885449 h 2.7284 l 2.4074,4.3604002 c 0.1284,0.2336 0.321,0.3893 0.642,0.3893 h 1.4444 c 0.321,0 0.321,-0.2336 0.2408,-0.3893 l -3.0494,-5.3727002 2.7284,-4.7497 c 0.0802,-0.1557 0.0802,-0.3893 -0.2408,-0.3893 h -1.4444 c -0.321,0 -0.5136,0.1557 -0.642,0.3893 l -2.1666,3.9711 h -2.6482 v -3.9711 c 0,-0.2336 -0.1604,-0.3893 -0.4012,-0.3893 h -1.2037 c -0.2407,0 -0.4012,0.1557 -0.4012,0.3893 v 10.1224002 c 0,0.2336 0.1605,0.3893 0.4012,0.3893 h 1.2037 c 0.2408,0 0.4012,-0.1557 0.4012,-0.3893 z" fill="#ffffff" id="path4" /><path d="m 91.274844,-9.5250488 c 0,0.2336 0.1605,0.3893 0.4012,0.3893 h 1.2037 c 0.2408,0 0.4013,-0.1557 0.4013,-0.3893 V -19.647449 c 0,-0.2336 -0.1605,-0.3893 -0.4013,-0.3893 h -1.2037 c -0.2407,0 -0.4012,0.1557 -0.4012,0.3893 z" fill="#ffffff" id="path5" /><path d="m 104.51044,-12.094549 -5.055496,-7.5529 c -0.1605,-0.2336 -0.321,-0.3893 -0.642,-0.3893 h -1.6049 c -0.2407,0 -0.4012,0.1557 -0.4012,0.3893 v 10.1224002 c 0,0.2336 0.1605,0.3893 0.4012,0.3893 h 1.2037 c 0.2407,0 0.4012,-0.1557 0.4012,-0.3893 v -7.5529002 h 0.0803 l 5.055496,7.5529002 c 0.1605,0.2336 0.321,0.3893 0.642,0.3893 h 1.60491 c 0.2407,0 0.4012,-0.1557 0.4012,-0.3893 V -19.647449 c 0,-0.2336 -0.1605,-0.3893 -0.4012,-0.3893 h -1.2037 c -0.24071,0 -0.40121,0.1557 -0.40121,0.3893 v 7.5529 z" fill="#ffffff" id="path6" /><path d="m 119.03575,-12.561749 c 0,-1.168 -0.722,-1.8532 -1.765,-2.1802 l -4.575,-1.4016 c -0.481,-0.1557 -0.802,-0.4672 -0.802,-0.9344 v -0.2336 c 0,-0.7007 0.401,-1.0901 1.123,-1.0901 h 2.729 c 0.722,0 1.123,0.3894 1.123,1.0901 v 0.4672 c 0,0.2336 0.161,0.3894 0.402,0.3894 h 1.203 c 0.241,0 0.401,-0.1558 0.401,-0.3894 v -0.545 c 0,-1.8688 -0.962,-2.8031 -2.888,-2.8031 h -3.21 c -1.926,0 -2.889,0.9343 -2.889,2.8031 v 0.6229 c 0,1.168 0.722,1.8687 1.765,2.1802 l 4.574,1.4016 c 0.482,0.1401 0.803,0.4672 0.803,0.9343 v 0.3894 c 0,0.7007 -0.401,1.0901 -1.124,1.0901 h -3.129 c -0.722,0 -1.124,-0.3894 -1.124,-1.0901 v -0.4672 c 0,-0.2336 -0.16,-0.3893 -0.401,-0.3893 h -1.204 c -0.24,0 -0.401,0.1557 -0.401,0.3893 v 0.545 c 0,1.8688002 0.963,2.8032002 2.889,2.8032002 h 3.611 c 1.926,0 2.889,-0.9344 2.889,-2.8032002 z" fill="#ffffff" id="path7" /><defs id="defs25"><linearGradient id="paint0_linear_2654_286127" x1="39.6665" y1="46.8203" x2="39.6665" y2="69.8203" gradientUnits="userSpaceOnUse" gradientTransform="translate(7.0357466,-72.852649)"><stop stop-color="#111D2E" id="stop19" /><stop offset="0.212" stop-color="#051839" id="stop20" /><stop offset="0.407" stop-color="#0A1B48" id="stop21" /><stop offset="0.581" stop-color="#132E62" id="stop22" /><stop offset="0.738" stop-color="#144B7E" id="stop23" /><stop offset="0.873" stop-color="#136497" id="stop24" /><stop offset="1" stop-color="#1387B8" id="stop25" /></linearGradient><clipPath id="clip0"><path fill="#fff" d="M0 0h35v22H0z" id="path6-1" /></clipPath><clipPath id="clip1"><path fill="#fff" transform="translate(41 4)" d="M0 0h49v14H0z" id="path7-0" /></clipPath><clipPath id="clip0-4"><path fill="#fff" d="M0 0h35v22H0z" id="path8" /></clipPath><clipPath id="clip1-2"><path fill="#fff" transform="translate(41 4)" d="M0 0h49v14H0z" id="path9" /></clipPath><linearGradient id="paint0_linear" x1="70.4073" y1="34.012" x2="54.75" y2="34.012" gradientUnits="userSpaceOnUse"><stop stop-color="#1F5CD7" id="stop9" /><stop offset="1" stop-color="#02AEFF" id="stop10" /></linearGradient><linearGradient inkscape:collect="always" xlink:href="#paint0_linear" id="linearGradient31" gradientUnits="userSpaceOnUse" x1="70.4073" y1="34.012" x2="54.75" y2="34.012" /><linearGradient inkscape:collect="always" xlink:href="#paint0_linear" id="linearGradient32" gradientUnits="userSpaceOnUse" x1="70.4073" y1="34.012" x2="54.75" y2="34.012" /></defs><g style="fill:none" id="g25" transform="translate(25.0209,17.3695)"><g id="g3"><path d="m 13.3828,11.0071 c 0,-3.4997 1.6053,-6.6043 4.0964,-8.6222 C 15.6386,0.889 13.3136,0 10.7948,0 4.83,0 0,4.925 0,11.0071 c 0,6.0821 4.83,11.007 10.7948,11.007 2.5326,0 4.8576,-0.889 6.6983,-2.3707 -2.505,-2.0321 -4.1103,-5.1508 -4.1103,-8.6363 z" fill="#e30d17" id="path1-4" /><path d="m 13.3828,11.0072 c 0,3.4997 1.6054,6.6042 4.0965,8.6222 2.4911,-2.018 4.0965,-5.1225 4.0965,-8.6222 0,-3.4997 -1.6054,-6.6042 -4.0965,-8.6222 -2.4911,2.0039 -4.0965,5.1225 -4.0965,8.6222 z" fill="#eb610a" id="path2-4" /><path d="m 34.2388,16.9481 v -0.3246 h -0.1245 v -0.0847 h 0.3459 v 0.0847 h -0.1384 v 0.3246 z m 0.6643,0 v -0.2823 l -0.0969,0.2399 h -0.0968 l -0.0969,-0.2399 v 0.2823 h -0.0969 v -0.4093 h 0.1384 l 0.0969,0.2681 0.0969,-0.2681 h 0.1383 v 0.4093 z M 24.1778,0 c -2.5326,0 -4.8577,0.889 -6.6983,2.3708 2.4911,2.018 4.0965,5.1225 4.0965,8.6221 0,3.4997 -1.6054,6.6043 -4.0965,8.6222 1.8406,1.4818 4.1657,2.3708 6.6983,2.3708 5.9648,0 10.7948,-4.925 10.7948,-11.0071 C 34.9726,4.8968 30.1288,0 24.1778,0 Z" fill="#f69f00" id="path3-3" /></g><g id="g5"><path d="M 62.2341,17.7826 H 58.25 L 60.7554,4.2529 h 3.9841 z M 54.8826,4.253 51.0629,13.55 50.6111,11.5604 49.2557,5.4467 c 0,0 -0.1643,-1.23 -1.8894,-1.23 H 41.0821 L 41,4.47 c 0,0 1.9304,0.3618 4.1894,1.5556 l 3.4912,11.7571 H 52.829 L 59.1953,4.253 Z m 31.4202,13.5296 h 3.6554 L 86.7546,4.2529 h -3.2037 c -1.4787,0 -1.8483,1.013 -1.8483,1.013 l -5.9145,12.5167 h 4.1484 l 0.8214,-2.0258 h 5.0931 z m -4.3948,-4.8113 2.0947,-5.0646 1.1911,5.0646 z M 76.0764,7.509 76.6514,4.615 c 0,0 -1.7661,-0.5789 -3.6144,-0.5789 -1.9715,0 -6.6949,0.7597 -6.6949,4.4858 0,3.5091 5.5449,3.5452 5.5449,5.3902 0,1.845 -4.9698,1.5194 -6.6128,0.3618 l -0.575,3.0387 c 0,0 1.7662,0.7597 4.518,0.7597 2.7108,0 6.8592,-1.23 6.8592,-4.6305 0,-3.509 -5.5859,-3.8346 -5.5859,-5.3902 0,-1.5917 3.9019,-1.3746 5.5859,-0.5426 z" fill="#ffffff" id="path4-1" /><path d="M 50.6111,11.5243 49.2557,5.4468 c 0,0 -0.1643,-1.23 -1.8894,-1.23 H 41.0821 L 41,4.47 c 0,0 3.0394,0.5427 5.9145,2.6409 2.793,1.9534 3.6966,4.4134 3.6966,4.4134 z" fill="#f7a823" id="path5-6" /></g><g id="g32" transform="translate(-7.357032)"><g id="g27" transform="translate(-31.541455)"><path fill-rule="evenodd" clip-rule="evenodd" d="m 21.6915,30.0609 c 0.4796,-0.0029 1.9048,-0.1362 2.5085,1.9793 0.4067,1.425 1.0545,3.7592 1.9434,7.0026 h 0.362 c 0.9533,-3.4195 1.6082,-5.7537 1.9646,-7.0026 0.61,-2.1375 2.135,-1.9792 2.745,-1.9792 h 4.7063 v 15.2 h -4.7967 v -8.9576 h -0.3217 l -2.674,8.9576 H 24.52 l -2.674,-8.9643 h -0.3217 v 8.9643 h -4.7968 v -15.2 z m 21.1179,10e-5 v 8.9643 h 0.3827 l 3.2526,-7.3713 c 0.6314,-1.4669 1.9771,-1.593 1.9771,-1.593 h 4.6419 v 15.2 h -4.897 v -8.9643 h -0.3826 l -3.1889,7.3713 c -0.6314,1.4602 -2.0409,1.593 -2.0409,1.593 h -4.6418 v -15.2 z m 27.1804,7.2231 c -0.6831,2.0097 -2.8282,3.449 -5.2032,3.449 h -5.1354 v 4.5279 h -4.6567 v -7.9769 z" fill="#67c09e" id="path6-5" /><path fill-rule="evenodd" clip-rule="evenodd" d="M 65.0109,30.061 H 54.75 c 0.2442,3.3841 3.0511,6.281 5.9568,6.281 h 9.6063 c 0.5543,-2.8125 -1.3541,-6.281 -5.3022,-6.281 z" fill="url(#paint0_linear)" id="path7-2" style="fill:url(#linearGradient32)" /></g><g style="fill:none" id="g29" transform="matrix(0.576,0,0,0.576,45.417803,29.883667)"><path fill="#8b3ffd" d="m 24.523,0 c -7.52,0 -13.5,6.066 -13.5,13.5 0,7.519 6.066,13.5 13.5,13.5 7.433,0 13.5,-6.067 13.5,-13.5 C 38.108,6.066 31.956,0 24.523,0 Z m 0,18.541 c -2.735,0 -5.042,-2.307 -5.042,-5.041 0,-2.734 2.307,-5.041 5.041,-5.041 2.735,0 5.042,2.307 5.042,5.041 0,2.734 -2.222,5.041 -5.041,5.041 z M 11.022,3.93 V 23.582 H 6.152 L 0,3.93 Z" id="path1-3" /><path fill="#ffffff" d="m 124.917,7.434 -2.991,7.348 c -0.085,0.086 -0.085,0.257 -0.085,0.342 l -0.086,0.171 -0.085,-0.17 c 0,-0.086 -0.086,-0.257 -0.086,-0.343 l -2.99,-7.348 h -3.845 l 5.041,12.56 -2.136,4.785 h 3.845 L 128.591,7.434 Z M 96.55,8.117 C 95.867,7.604 95.013,7.263 93.987,7.177 92.278,7.007 90.655,7.604 89.544,8.715 V 7.348 h -3.503 v 12.56 h 3.503 V 13.33 c 0,-1.453 0.257,-1.88 0.513,-2.222 0.427,-0.683 1.196,-1.025 2.136,-1.025 0.94,0 1.794,0.427 2.221,1.111 0.257,0.513 0.342,1.196 0.342,1.538 v 7.177 h 3.503 v -7.604 c 0,-1.966 -0.598,-3.333 -1.709,-4.187 z M 79.376,7.52 c -1.709,-0.598 -3.588,-0.513 -5.297,0.256 -1.11,0.513 -2.136,1.367 -2.734,2.478 -0.598,0.94 -0.855,2.136 -0.855,3.418 0,1.281 0.257,2.477 0.855,3.417 0.598,0.94 1.367,1.795 2.392,2.307 1.025,0.513 2.222,0.855 3.332,0.855 0.598,0 1.197,-0.086 1.795,-0.257 0.512,-0.17 1.025,-0.341 1.538,-0.598 1.025,-0.598 1.88,-1.367 2.392,-2.307 0.598,-0.94 0.855,-2.136 0.855,-3.417 0.085,-2.82 -1.538,-5.212 -4.273,-6.152 z m 1.026,6.322 c -0.086,1.111 -0.428,2.051 -1.111,2.65 -0.513,0.426 -1.282,0.683 -2.222,0.768 -0.94,0 -1.623,-0.256 -2.221,-0.769 -0.684,-0.598 -1.025,-1.538 -1.11,-2.649 -0.086,-1.281 0.426,-2.306 1.366,-2.99 0.513,-0.342 1.196,-0.598 1.88,-0.598 0.769,0 1.367,0.256 1.965,0.598 1.025,0.598 1.538,1.709 1.453,2.99 z M 66.474,8.117 C 65.791,7.604 64.936,7.263 63.911,7.177 h -0.598 c -1.367,0 -2.563,0.598 -3.589,1.795 l -0.17,0.256 H 59.212 A 3.641,3.641 0 0 0 58.272,8.203 C 57.588,7.69 56.734,7.348 55.708,7.263 54.085,7.092 52.803,7.604 51.693,8.801 V 7.519 H 48.19 v 12.56 h 3.503 V 13.33 c 0,-1.368 0.17,-1.71 0.427,-2.137 0.427,-0.684 1.196,-1.11 2.05,-1.025 0.855,0 1.624,0.427 2.051,1.11 0.342,0.513 0.342,1.111 0.342,1.71 v 7.006 h 3.503 v -6.75 c 0,-1.282 0.17,-1.71 0.427,-2.136 0.427,-0.684 1.197,-1.026 2.05,-1.026 0.855,0 1.539,0.427 1.966,1.111 0.256,0.427 0.342,0.94 0.342,1.282 v 7.433 h 3.503 v -7.69 c 0,-0.683 -0.085,-1.367 -0.256,-1.965 C 67.756,9.399 67.243,8.63 66.474,8.117 Z m 44.943,8.033 c -0.513,0.512 -1.709,1.452 -3.332,1.537 -1.367,0.086 -2.393,-0.341 -3.162,-1.11 -0.341,-0.342 -0.598,-0.855 -0.769,-1.368 h 9.655 v -0.085 c 0.086,-0.513 0.171,-0.94 0.171,-1.453 0,-0.427 -0.085,-1.025 -0.256,-1.794 -0.427,-1.452 -1.282,-2.563 -2.392,-3.418 -1.282,-0.94 -2.478,-1.196 -2.82,-1.196 -2.478,-0.427 -5.298,0.684 -6.75,2.99 -1.025,1.624 -0.94,3.248 -0.94,3.76 0,0.598 0.085,2.478 1.623,4.187 1.795,1.965 4.273,2.05 5.042,2.136 3.417,0.086 5.724,-2.05 6.237,-2.478 l -2.307,-1.709 z m -5.981,-5.298 c 0.513,-0.342 1.111,-0.598 1.88,-0.598 0.769,0 1.367,0.256 1.965,0.598 0.513,0.427 0.94,0.94 1.196,1.538 h -6.152 c 0.086,-0.598 0.513,-1.196 1.111,-1.538 z" id="path2-3" /></g></g><g id="g31" transform="translate(-30.839349,-99.137412)"><g id="g30"><path fill-rule="evenodd" clip-rule="evenodd" d="m 21.6915,30.0609 c 0.4796,-0.0029 1.9048,-0.1362 2.5085,1.9793 0.4067,1.425 1.0545,3.7592 1.9434,7.0026 h 0.362 c 0.9533,-3.4195 1.6082,-5.7537 1.9646,-7.0026 0.61,-2.1375 2.135,-1.9792 2.745,-1.9792 h 4.7063 v 15.2 h -4.7967 v -8.9576 h -0.3217 l -2.674,8.9576 H 24.52 l -2.674,-8.9643 h -0.3217 v 8.9643 h -4.7968 v -15.2 z m 21.1179,10e-5 v 8.9643 h 0.3827 l 3.2526,-7.3713 c 0.6314,-1.4669 1.9771,-1.593 1.9771,-1.593 h 4.6419 v 15.2 h -4.897 v -8.9643 h -0.3826 l -3.1889,7.3713 c -0.6314,1.4602 -2.0409,1.593 -2.0409,1.593 h -4.6418 v -15.2 z m 27.1804,7.2231 c -0.6831,2.0097 -2.8282,3.449 -5.2032,3.449 h -5.1354 v 4.5279 h -4.6567 v -7.9769 z" fill="#67c09e" id="path29" /><path fill-rule="evenodd" clip-rule="evenodd" d="M 65.0109,30.061 H 54.75 c 0.2442,3.3841 3.0511,6.281 5.9568,6.281 h 9.6063 c 0.5543,-2.8125 -1.3541,-6.281 -5.3022,-6.281 z" fill="url(#paint0_linear)" id="path30" style="fill:url(#linearGradient31)" /></g><path d="m 116.47361,31.412592 v 10.1 c 0,0.16 -0.12,0.28 -0.28,0.28 h -2.06 c -0.16,0 -0.28,-0.12 -0.28,-0.28 v -10.1 c 0,-0.16 0.12,-0.28 0.28,-0.28 h 2.06 c 0.16,0 0.28,0.12 0.28,0.28 z m 16.08,-0.28 h -2.3 c -0.12,0 -0.22001,0.08 -0.26001,0.2 l -1.82,5.98 -1.99999,-5.98 c -0.04,-0.12 -0.14,-0.18 -0.26,-0.18 h -1.62 c -0.12,0 -0.22,0.08 -0.26,0.18 l -2,5.98 -1.86,-5.98 c -0.04,-0.12 -0.14,-0.2 -0.26,-0.2 h -2.3 c -0.08,0 -0.18,0.04 -0.22,0.12 -0.06,0.08 -0.06,0.16 -0.04,0.24 l 3.4,10.12 c 0.04,0.12 0.14,0.18 0.26,0.18 h 1.84 c 0.12,0 0.22,-0.08 0.26,-0.18 l 1.98,-5.9 1.98,5.9 c 0.04,0.12 0.14,0.18 0.26,0.18 h 1.83999 c 0.12,0 0.22,-0.08 0.26,-0.18 l 3.40001,-10.12 c 0.02,-0.08 0.02,-0.18 -0.04,-0.24 -0.06,-0.08 -0.14,-0.12 -0.24,-0.12 z m 3.48,0 h -2.06 c -0.16,0 -0.28,0.12 -0.28,0.28 v 10.1 c 0,0.16 0.12,0.28 0.28,0.28 h 2.06 c 0.16,0 0.28,-0.12 0.28,-0.28 v -10.1 c 0,-0.16 -0.14,-0.28 -0.28,-0.28 z m -23.36,10.32 c 0.12,0.14 0.02,0.34 -0.16,0.34 h -2.54 c -0.1,0 -0.2,-0.04 -0.26,-0.12 l -0.42,-0.52 c -0.88,0.56 -1.92,0.9 -3.02,0.9 -3.08,0 -5.58,-2.5 -5.58,-5.58 0,-3.08 2.5,-5.58 5.58,-5.58 3.08,0 5.58,2.5 5.58,5.58 0,1.1 -0.32,2.14 -0.88,3.02 z m -5.02,-2.26 -1.1,-1.34 c -0.12,-0.14 -0.02,-0.36 0.16,-0.36 h 2.32 c 0.12,-0.32 0.18,-0.68 0.18,-1.04 0,-1.66 -1.24,-3.1 -2.94,-3.1 -1.7,0 -2.94,1.44 -2.94,3.1 0,1.66 1.24,3.08 2.94,3.08 0.5,0.02 0.96,-0.12 1.38,-0.34 z m -13.32,2.2 c 0.06,0.42 -0.08,0.6 -0.2,0.6 -0.14,0 -0.32,-0.18 -0.54,-0.5 -0.22,-0.34 -0.3,-0.72 -0.18,-0.9 0.06,-0.12 0.22,-0.18 0.4,-0.12 0.34,0.12 0.48,0.66 0.52,0.92 z m -1.98,0.92 c 0.42,0.36 0.56,0.8 0.34,1.1 -0.12,0.16 -0.32,0.26 -0.58,0.26 -0.24,0 -0.48,-0.08 -0.66,-0.24 -0.38,-0.34 -0.5,-0.9 -0.24,-1.2 0.1,-0.12 0.26,-0.18 0.46,-0.18 0.22,-0.02 0.46,0.08 0.68,0.26 z m -0.72,3.48 c 1.84,0 3.84,0.64 6.06,2.6 0.22,0.2 0.52,-0.04 0.32,-0.3 -2.18,-2.74 -4.18,-3.26 -6.18,-3.7 -2.46,-0.54 -3.72,-1.92 -4.6,-3.44 -0.18,-0.3 -0.26,-0.24 -0.26,0.14 -0.02,0.48 0.02,1.1 0.12,1.72 h -0.3 c -3.5,0 -6.36,-2.84 -6.36,-6.36 0,-3.52 2.84,-6.36 6.36,-6.36 3.5,0 6.36,2.84 6.36,6.36 0,0.24 -0.02,0.5 -0.04,0.74 -0.46,-0.08 -1.38,-0.1 -2.02,-0.04 -0.24,0.02 -0.2,0.14 -0.02,0.16 2.1,0.38 3.54,1.68 3.88,4.04 0,0.06 0.08,0.08 0.1,0.02 0.86,-1.44 1.36,-3.12 1.36,-4.94 -0.02,-5.28 -4.32,-9.58 -9.62,-9.58 -5.32,0 -9.62,4.3 -9.62,9.62 0,5.32 4.3,9.62 9.62,9.62 1.4,-0.02 2.8,-0.3 4.84,-0.3 z" fill="#ff8c00" id="path31" style="stroke-width:0.2" /></g></g></svg>\
    						<div class="refill-window__payment-label">#3</div>\
    					</button>\
    				</li>\
    				<li class="refill-window__payment" onclick="OnClickElement4(this)">\
    					<button class="refill-window__payment-btn" id="element4">\
    						<svg class="refill-window__payment-icon" viewBox="0 0 140 80" fill="none" version="1.1" id="svg25" sodipodi:docname="card.svg" inkscape:version="1.3 (0e150ed6c4, 2023-07-21)" xml:space="preserve" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><sodipodi:namedview id="namedview25" pagecolor="#505050" bordercolor="#eeeeee" borderopacity="1" inkscape:showpageshadow="0" inkscape:pageopacity="0" inkscape:pagecheckerboard="0" inkscape:deskcolor="#505050" inkscape:zoom="10.071221" inkscape:cx="57.58984" inkscape:cy="38.178092" inkscape:window-width="2560" inkscape:window-height="1361" inkscape:window-x="-9" inkscape:window-y="-9" inkscape:window-maximized="1" inkscape:current-layer="g25" /><defs id="defs25"><linearGradient id="paint0_linear_2654_286127" x1="39.6665" y1="46.8203" x2="39.6665" y2="69.8203" gradientUnits="userSpaceOnUse" gradientTransform="translate(7.0357466,-72.852649)"><stop stop-color="#111D2E" id="stop19" /><stop offset="0.212" stop-color="#051839" id="stop20" /><stop offset="0.407" stop-color="#0A1B48" id="stop21" /><stop offset="0.581" stop-color="#132E62" id="stop22" /><stop offset="0.738" stop-color="#144B7E" id="stop23" /><stop offset="0.873" stop-color="#136497" id="stop24" /><stop offset="1" stop-color="#1387B8" id="stop25" /></linearGradient><clipPath id="clip0"><path fill="#fff" d="M0 0h35v22H0z" id="path6-1" /></clipPath><clipPath id="clip1"><path fill="#fff" transform="translate(41 4)" d="M0 0h49v14H0z" id="path7-0" /></clipPath><clipPath id="clip0-4"><path fill="#fff" d="M0 0h35v22H0z" id="path8" /></clipPath><clipPath id="clip1-2"><path fill="#fff" transform="translate(41 4)" d="M0 0h49v14H0z" id="path9" /></clipPath><linearGradient id="paint0_linear" x1="70.4073" y1="34.012" x2="54.75" y2="34.012" gradientUnits="userSpaceOnUse"><stop stop-color="#1F5CD7" id="stop9" /><stop offset="1" stop-color="#02AEFF" id="stop10" /></linearGradient><linearGradient inkscape:collect="always" xlink:href="#paint0_linear" id="linearGradient32" gradientUnits="userSpaceOnUse" x1="70.4073" y1="34.012" x2="54.75" y2="34.012" /><clipPath id="clip0_8_3245"><rect width="70" height="17.5389" fill="white" id="rect13" /></clipPath></defs><g style="fill:none" id="g25" transform="translate(25.0209,17.3695)"><g id="g2" transform="translate(0,0.59575746)"><g id="g1" transform="translate(-8.5391866)"><g id="g3" transform="translate(8.5391866,-0.59575746)"><path d="m 13.3828,11.0071 c 0,-3.4997 1.6053,-6.6043 4.0964,-8.6222 C 15.6386,0.889 13.3136,0 10.7948,0 4.83,0 0,4.925 0,11.0071 c 0,6.0821 4.83,11.007 10.7948,11.007 2.5326,0 4.8576,-0.889 6.6983,-2.3707 -2.505,-2.0321 -4.1103,-5.1508 -4.1103,-8.6363 z" fill="#e30d17" id="path1-4" /><path d="m 13.3828,11.0072 c 0,3.4997 1.6054,6.6042 4.0965,8.6222 2.4911,-2.018 4.0965,-5.1225 4.0965,-8.6222 0,-3.4997 -1.6054,-6.6042 -4.0965,-8.6222 -2.4911,2.0039 -4.0965,5.1225 -4.0965,8.6222 z" fill="#eb610a" id="path2-4" /><path d="m 34.2388,16.9481 v -0.3246 h -0.1245 v -0.0847 h 0.3459 v 0.0847 h -0.1384 v 0.3246 z m 0.6643,0 v -0.2823 l -0.0969,0.2399 h -0.0968 l -0.0969,-0.2399 v 0.2823 h -0.0969 v -0.4093 h 0.1384 l 0.0969,0.2681 0.0969,-0.2681 h 0.1383 v 0.4093 z M 24.1778,0 c -2.5326,0 -4.8577,0.889 -6.6983,2.3708 2.4911,2.018 4.0965,5.1225 4.0965,8.6221 0,3.4997 -1.6054,6.6043 -4.0965,8.6222 1.8406,1.4818 4.1657,2.3708 6.6983,2.3708 5.9648,0 10.7948,-4.925 10.7948,-11.0071 C 34.9726,4.8968 30.1288,0 24.1778,0 Z" fill="#f69f00" id="path3-3" /></g><g id="g5" transform="translate(8.5391866,-0.59575746)"><path d="M 62.2341,17.7826 H 58.25 L 60.7554,4.2529 h 3.9841 z M 54.8826,4.253 51.0629,13.55 50.6111,11.5604 49.2557,5.4467 c 0,0 -0.1643,-1.23 -1.8894,-1.23 H 41.0821 L 41,4.47 c 0,0 1.9304,0.3618 4.1894,1.5556 l 3.4912,11.7571 H 52.829 L 59.1953,4.253 Z m 31.4202,13.5296 h 3.6554 L 86.7546,4.2529 h -3.2037 c -1.4787,0 -1.8483,1.013 -1.8483,1.013 l -5.9145,12.5167 h 4.1484 l 0.8214,-2.0258 h 5.0931 z m -4.3948,-4.8113 2.0947,-5.0646 1.1911,5.0646 z M 76.0764,7.509 76.6514,4.615 c 0,0 -1.7661,-0.5789 -3.6144,-0.5789 -1.9715,0 -6.6949,0.7597 -6.6949,4.4858 0,3.5091 5.5449,3.5452 5.5449,5.3902 0,1.845 -4.9698,1.5194 -6.6128,0.3618 l -0.575,3.0387 c 0,0 1.7662,0.7597 4.518,0.7597 2.7108,0 6.8592,-1.23 6.8592,-4.6305 0,-3.509 -5.5859,-3.8346 -5.5859,-5.3902 0,-1.5917 3.9019,-1.3746 5.5859,-0.5426 z" fill="#ffffff" id="path4-1" /><path d="M 50.6111,11.5243 49.2557,5.4468 c 0,0 -0.1643,-1.23 -1.8894,-1.23 H 41.0821 L 41,4.47 c 0,0 3.0394,0.5427 5.9145,2.6409 2.793,1.9534 3.6966,4.4134 3.6966,4.4134 z" fill="#f7a823" id="path5-6" /></g></g><g id="g27" transform="translate(1.4117088,-0.59575746)"><path fill-rule="evenodd" clip-rule="evenodd" d="m 21.6915,30.0609 c 0.4796,-0.0029 1.9048,-0.1362 2.5085,1.9793 0.4067,1.425 1.0545,3.7592 1.9434,7.0026 h 0.362 c 0.9533,-3.4195 1.6082,-5.7537 1.9646,-7.0026 0.61,-2.1375 2.135,-1.9792 2.745,-1.9792 h 4.7063 v 15.2 h -4.7967 v -8.9576 h -0.3217 l -2.674,8.9576 H 24.52 l -2.674,-8.9643 h -0.3217 v 8.9643 h -4.7968 v -15.2 z m 21.1179,10e-5 v 8.9643 h 0.3827 l 3.2526,-7.3713 c 0.6314,-1.4669 1.9771,-1.593 1.9771,-1.593 h 4.6419 v 15.2 h -4.897 v -8.9643 h -0.3826 l -3.1889,7.3713 c -0.6314,1.4602 -2.0409,1.593 -2.0409,1.593 h -4.6418 v -15.2 z m 27.1804,7.2231 c -0.6831,2.0097 -2.8282,3.449 -5.2032,3.449 h -5.1354 v 4.5279 h -4.6567 v -7.9769 z" fill="#67c09e" id="path6-5" /><path fill-rule="evenodd" clip-rule="evenodd" d="M 65.0109,30.061 H 54.75 c 0.2442,3.3841 3.0511,6.281 5.9568,6.281 h 9.6063 c 0.5543,-2.8125 -1.3541,-6.281 -5.3022,-6.281 z" fill="url(#paint0_linear)" id="path7-2" style="fill:url(#linearGradient32)" /></g></g></g><style id="style1">.st1{fill:#fff}</style></svg>\
    						<div class="refill-window__payment-label">#4</div>\
    					</button>\
    				</li>\
    			<li class="refill-window__payment" onclick="/*OnClickElement5(this)*/">\
    				<button class="refill-window__payment-btn" id="element5">\
						<img class="refill-window__payment-icon" src="https://s3.timeweb.com/a3d1c97f-maps/Assets/paypal.svg">\
    				</button>\
    			</li>\
    			<li class="refill-window__payment" onclick="OnClickElement6(this)">\
    				<button class="refill-window__payment-btn" id="element6">\
    					<svg class="refill-window__payment-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 295.7 108.1"><path d="M196.5 22.8v50.5c0 .8-.6 1.4-1.4 1.4h-10.3c-.8 0-1.4-.6-1.4-1.4V22.8c0-.8.6-1.4 1.4-1.4h10.3c.8 0 1.4.6 1.4 1.4zm80.4-1.4h-11.5c-.6 0-1.1.4-1.3 1L255 52.3l-10-29.9c-.2-.6-.7-.9-1.3-.9h-8.1c-.6 0-1.1.4-1.3.9l-10 29.9-9.3-29.9c-.2-.6-.7-1-1.3-1h-11.5c-.4 0-.9.2-1.1.6-.3.4-.3.8-.2 1.2l17 50.6c.2.6.7.9 1.3.9h9.2c.6 0 1.1-.4 1.3-.9l9.9-29.5 9.9 29.5c.2.6.7.9 1.3.9h9.2c.6 0 1.1-.4 1.3-.9l17-50.6c.1-.4.1-.9-.2-1.2-.3-.4-.7-.6-1.2-.6zm17.4 0H284c-.8 0-1.4.6-1.4 1.4v50.5c0 .8.6 1.4 1.4 1.4h10.3c.8 0 1.4-.6 1.4-1.4V22.8c0-.8-.7-1.4-1.4-1.4zM177.5 73c.6.7.1 1.7-.8 1.7H164c-.5 0-1-.2-1.3-.6l-2.1-2.6c-4.4 2.8-9.6 4.5-15.1 4.5-15.4 0-27.9-12.5-27.9-27.9s12.5-27.9 27.9-27.9c15.4 0 27.9 12.5 27.9 27.9 0 5.5-1.6 10.7-4.4 15.1l8.5 9.8zm-25.1-11.3l-5.5-6.7c-.6-.7-.1-1.8.8-1.8h11.6c.6-1.6.9-3.4.9-5.2 0-8.3-6.2-15.5-14.7-15.5s-14.7 7.2-14.7 15.5 6.2 15.4 14.7 15.4c2.5.1 4.8-.6 6.9-1.7zm-66.6 11c.3 2.1-.4 3-1 3-.7 0-1.6-.9-2.7-2.5-1.1-1.7-1.5-3.6-.9-4.5.3-.6 1.1-.9 2-.6 1.7.6 2.4 3.3 2.6 4.6zm-9.9 4.6c2.1 1.8 2.8 4 1.7 5.5-.6.8-1.6 1.3-2.9 1.3-1.2 0-2.4-.4-3.3-1.2-1.9-1.7-2.5-4.5-1.2-6 .5-.6 1.3-.9 2.3-.9 1.1-.1 2.3.4 3.4 1.3zm-3.6 17.4c9.2 0 19.2 3.2 30.3 13 1.1 1 2.6-.2 1.6-1.5-10.9-13.7-20.9-16.3-30.9-18.5-12.3-2.7-18.6-9.6-23-17.2-.9-1.5-1.3-1.2-1.3.7-.1 2.4.1 5.5.6 8.6h-1.5c-17.5 0-31.8-14.2-31.8-31.8s14.2-31.8 31.8-31.8c17.5 0 31.8 14.2 31.8 31.8 0 1.2-.1 2.5-.2 3.7-2.3-.4-6.9-.5-10.1-.2-1.2.1-1 .7-.1.8 10.5 1.9 17.7 8.4 19.4 20.2 0 .3.4.4.5.1 4.3-7.2 6.8-15.6 6.8-24.7C96.1 21.5 74.6 0 48.1 0 21.5 0 0 21.5 0 48.1s21.5 48.1 48.1 48.1c7-.1 14-1.5 24.2-1.5z" fill="#ff8c00"/></svg>\
    				</button>\
    			</li>\
    			<li class="refill-window__payment" onclick="OnClickElement7(this)">\
    				<button class="refill-window__payment-btn" id="element7" >\
    					<svg class="refill-window__payment-icon" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 27"><path fill="#8b3ffd" d="M24.523 0c-7.52 0-13.5 6.066-13.5 13.5 0 7.519 6.066 13.5 13.5 13.5 7.433 0 13.5-6.067 13.5-13.5.085-7.434-6.067-13.5-13.5-13.5zm0 18.541c-2.735 0-5.042-2.307-5.042-5.041 0-2.734 2.307-5.041 5.041-5.041 2.735 0 5.042 2.307 5.042 5.041 0 2.734-2.222 5.041-5.041 5.041zM11.022 3.93v19.652h-4.87L0 3.93h11.022z"/><path fill="#fff" d="M124.917 7.434l-2.991 7.348c-.085.086-.085.257-.085.342l-.086.171-.085-.17c0-.086-.086-.257-.086-.343l-2.99-7.348h-3.845l5.041 12.56-2.136 4.785h3.845l7.092-17.345h-3.674zm-28.367.683c-.683-.513-1.537-.854-2.563-.94-1.709-.17-3.332.427-4.443 1.538V7.348h-3.503v12.56h3.503V13.33c0-1.453.257-1.88.513-2.222.427-.683 1.196-1.025 2.136-1.025.94 0 1.794.427 2.221 1.111.257.513.342 1.196.342 1.538v7.177h3.503v-7.604c0-1.966-.598-3.333-1.709-4.187zM79.376 7.52c-1.709-.598-3.588-.513-5.297.256-1.11.513-2.136 1.367-2.734 2.478-.598.94-.855 2.136-.855 3.418 0 1.281.257 2.477.855 3.417s1.367 1.795 2.392 2.307c1.025.513 2.222.855 3.332.855.598 0 1.197-.086 1.795-.257.512-.17 1.025-.341 1.538-.598 1.025-.598 1.88-1.367 2.392-2.307.598-.94.855-2.136.855-3.417.085-2.82-1.538-5.212-4.273-6.152zm1.026 6.322c-.086 1.111-.428 2.051-1.111 2.65-.513.426-1.282.683-2.222.768-.94 0-1.623-.256-2.221-.769-.684-.598-1.025-1.538-1.11-2.649-.086-1.281.426-2.306 1.366-2.99.513-.342 1.196-.598 1.88-.598.769 0 1.367.256 1.965.598 1.025.598 1.538 1.709 1.453 2.99zM66.474 8.117c-.683-.513-1.538-.854-2.563-.94h-.598c-1.367 0-2.563.598-3.589 1.795l-.17.256h-.342a3.641 3.641 0 00-.94-1.025c-.684-.513-1.538-.855-2.564-.94-1.623-.171-2.905.341-4.015 1.538V7.519H48.19v12.56h3.503V13.33c0-1.368.17-1.71.427-2.137.427-.684 1.196-1.11 2.05-1.025.855 0 1.624.427 2.051 1.11.342.513.342 1.111.342 1.71v7.006h3.503v-6.75c0-1.282.17-1.71.427-2.136.427-.684 1.197-1.026 2.05-1.026.855 0 1.539.427 1.966 1.111.256.427.342.94.342 1.282v7.433h3.503v-7.69c0-.683-.085-1.367-.256-1.965-.342-.854-.855-1.623-1.624-2.136zm44.943 8.033c-.513.512-1.709 1.452-3.332 1.537-1.367.086-2.393-.341-3.162-1.11-.341-.342-.598-.855-.769-1.368h9.655v-.085c.086-.513.171-.94.171-1.453 0-.427-.085-1.025-.256-1.794-.427-1.452-1.282-2.563-2.392-3.418-1.282-.94-2.478-1.196-2.82-1.196-2.478-.427-5.298.684-6.75 2.99-1.025 1.624-.94 3.248-.94 3.76 0 .598.085 2.478 1.623 4.187 1.795 1.965 4.273 2.05 5.042 2.136 3.417.086 5.724-2.05 6.237-2.478l-2.307-1.709zm-5.981-5.298c.513-.342 1.111-.598 1.88-.598.769 0 1.367.256 1.965.598.513.427.94.94 1.196 1.538h-6.152c.086-.598.513-1.196 1.111-1.538z"/></svg>\
    				</button>\
    			</li>\
    			<li class="refill-window__payment" onclick="OnClickElement8(this)">\
    				<button class="refill-window__payment-btn" id="element8">\
						<img class="refill-window__payment-icon" src="https://s3.timeweb.com/a3d1c97f-maps/Assets/cryptos2.svg">\
    				</button>\
				</li>\
    			<li class="refill-window__payment" onclick="OnClickElement9(this)">\
    				<button class="refill-window__payment-btn" id="element9">\
    					<img class="refill-window__payment-icon" src="https://s3.timeweb.com/a3d1c97f-maps/Assets/skins.svg">\
    				</button>\
    			</li>\
    			<li class="refill-window__payment" onclick="OnClickElement10(this)">\
    				<button class="refill-window__payment-btn" id="element10">\
						<img class="refill-window__payment-icon" src="https://s3.timeweb.com/a3d1c97f-maps/Assets/telegram.svg">\
    				</button>\
    			</li>\
    			</ul>\
    			</div>\
    		<div class="refill-window__bonus"><span class="refill-window__bonus-text" id="bonus-text"></span></div>\
    		<div class="refill-window__content__pay">\
    			<div class="refill-window__payment-info">\
    				<div class="refill-window__amount-wrapper" id="amount-wrapper">\
    					<div class="refill-window__amount-input-wrapper">\
    						<div class="refill-window__pre-input">₽</div>\
    							<input class="refill-window__amount-input" placeholder="Введите сумму" type="number" id="refill-window__amount-input" value="500">\
    						</div>\
    					</div>\
    				<div class="refill-window__button-wrapper" id="buybtnwrap" onclick="OnClickBuyBtn(this)">\
    					<a class="refill-window__button--disabled" id="buybtn" target="_blank">пополнить</a>\
    				</div>\
    			</div>\
    		</div>\
    	</div></div>'
};

let btn_unlocked = 0;

function ResetBtns() {
	let btn1 = document.getElementById('element1');
	let btn2 = document.getElementById('element2');
	let btn3 = document.getElementById('element3');
	let btn4 = document.getElementById('element4');
	let btn5 = document.getElementById('element5');
	let btn6 = document.getElementById('element6');
	let btn7 = document.getElementById('element7');
	let btn8 = document.getElementById('element8');
	let btn9 = document.getElementById('element9');
	let btn10 = document.getElementById('element10');

	btn1.style.backgroundColor = "#1d1d26";
	btn2.style.backgroundColor = "#1d1d26";
	btn3.style.backgroundColor = "#1d1d26";
	btn4.style.backgroundColor = "#1d1d26";
	btn5.style.backgroundColor = "#1d1d26";
	btn6.style.backgroundColor = "#1d1d26";
	btn7.style.backgroundColor = "#1d1d26";
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
	   if (inputfloat < 30 || isNaN(inputfloat)) {
		   document.getElementById('bonus-text').innerText = "Минимальная сумма - 30 RUB.";
		   return false;
	   } 
	   else {
		   document.getElementById('bonus-text').innerText = "";
		   window.open(generateUrlQiwi());
	   }
	}
	if (btn_unlocked == 2) {
		appcentHandler();
	}
	if (btn_unlocked == 3) {
	   var inputval = document.getElementById('refill-window__amount-input').value;
	   var inputfloat = parseFloat(inputval);
	   if (inputfloat < 50 || isNaN(inputfloat)) {
		   document.getElementById('bonus-text').innerText = "Минимальная сумма - 50 RUB.";
		   return false;
	   } 
	   else {
		   document.getElementById('bonus-text').innerText = "";
		   window.open(generateUrlEnot());
	   }
	}
	if (btn_unlocked == 4) {
	   var inputval = document.getElementById('refill-window__amount-input').value;
	   var inputfloat = parseFloat(inputval);
	   if (inputfloat < 10 || isNaN(inputfloat)) {
		   document.getElementById('bonus-text').innerText = "Минимальная сумма - 10 RUB.";
		   document.getElementById('buybtn').removeAttribute("href");
		   return false;
	   }
	   else {
		   document.getElementById('bonus-text').innerText = "";
	       document.getElementById('buybtn').setAttribute("href", OvhPayUrl);
	   }
	}
	if (btn_unlocked == 5) {
		window.open(tebexURL);
	}
	if (btn_unlocked == 6) {
	   var inputval = document.getElementById('refill-window__amount-input').value;
	   var inputfloat = parseFloat(inputval);
	   if (inputfloat < 30 || isNaN(inputfloat)) {
		   document.getElementById('bonus-text').innerText = "Минимальная сумма - 30 RUB.";
		   return false;
	   } 
	   else {
		   document.getElementById('bonus-text').innerText = "";
		   window.open(generateUrlQiwi());
	   }
	}
	if (btn_unlocked == 7) {
	   var inputval = document.getElementById('refill-window__amount-input').value;
	   var inputfloat = parseFloat(inputval);
	   if (inputfloat < 50 || isNaN(inputfloat)) {
		   document.getElementById('bonus-text').innerText = "Минимальная сумма - 50 RUB.";
		   return false;
	   } 
	   else {
		   document.getElementById('bonus-text').innerText = "";
		   window.open(generateUrlEnot());
	   }
	}
	if (btn_unlocked == 8) {
	   var inputval = document.getElementById('refill-window__amount-input').value;
	   var inputfloat = parseFloat(inputval);
	   if (inputfloat < 1500 || isNaN(inputfloat)) {
		   document.getElementById('bonus-text').innerText = "Минимальная сумма - 1500 RUB.";
		   return false;
	   } 
	   else {
		   document.getElementById('bonus-text').innerText = "";
		   window.open(generateUrlEnot());
	   }
	}
	if (btn_unlocked == 9) {
		generateUrlSkinback();
	}
	if (btn_unlocked == 10) {
		window.open(telegramURL);
	}
}
var MD5 = function (d) { result = M(V(Y(X(d), 8 * d.length))); return result.toLowerCase() }; function M(d) { for (var _, m = "0123456789ABCDEF", f = "", r = 0; r < d.length; r++)_ = d.charCodeAt(r), f += m.charAt(_ >>> 4 & 15) + m.charAt(15 & _); return f } function X(d) { for (var _ = Array(d.length >> 2), m = 0; m < _.length; m++)_[m] = 0; for (m = 0; m < 8 * d.length; m += 8)_[m >> 5] |= (255 & d.charCodeAt(m / 8)) << m % 32; return _ } function V(d) { for (var _ = "", m = 0; m < 32 * d.length; m += 8)_ += String.fromCharCode(d[m >> 5] >>> m % 32 & 255); return _ } function Y(d, _) { d[_ >> 5] |= 128 << _ % 32, d[14 + (_ + 64 >>> 9 << 4)] = _; for (var m = 1732584193, f = -271733879, r = -1732584194, i = 271733878, n = 0; n < d.length; n += 16) { var h = m, t = f, g = r, e = i; f = md5_ii(f = md5_ii(f = md5_ii(f = md5_ii(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_ff(f = md5_ff(f = md5_ff(f = md5_ff(f, r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 0], 7, -680876936), f, r, d[n + 1], 12, -389564586), m, f, d[n + 2], 17, 606105819), i, m, d[n + 3], 22, -1044525330), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 4], 7, -176418897), f, r, d[n + 5], 12, 1200080426), m, f, d[n + 6], 17, -1473231341), i, m, d[n + 7], 22, -45705983), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 8], 7, 1770035416), f, r, d[n + 9], 12, -1958414417), m, f, d[n + 10], 17, -42063), i, m, d[n + 11], 22, -1990404162), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 12], 7, 1804603682), f, r, d[n + 13], 12, -40341101), m, f, d[n + 14], 17, -1502002290), i, m, d[n + 15], 22, 1236535329), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 1], 5, -165796510), f, r, d[n + 6], 9, -1069501632), m, f, d[n + 11], 14, 643717713), i, m, d[n + 0], 20, -373897302), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 5], 5, -701558691), f, r, d[n + 10], 9, 38016083), m, f, d[n + 15], 14, -660478335), i, m, d[n + 4], 20, -405537848), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 9], 5, 568446438), f, r, d[n + 14], 9, -1019803690), m, f, d[n + 3], 14, -187363961), i, m, d[n + 8], 20, 1163531501), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 13], 5, -1444681467), f, r, d[n + 2], 9, -51403784), m, f, d[n + 7], 14, 1735328473), i, m, d[n + 12], 20, -1926607734), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 5], 4, -378558), f, r, d[n + 8], 11, -2022574463), m, f, d[n + 11], 16, 1839030562), i, m, d[n + 14], 23, -35309556), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 1], 4, -1530992060), f, r, d[n + 4], 11, 1272893353), m, f, d[n + 7], 16, -155497632), i, m, d[n + 10], 23, -1094730640), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 13], 4, 681279174), f, r, d[n + 0], 11, -358537222), m, f, d[n + 3], 16, -722521979), i, m, d[n + 6], 23, 76029189), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 9], 4, -640364487), f, r, d[n + 12], 11, -421815835), m, f, d[n + 15], 16, 530742520), i, m, d[n + 2], 23, -995338651), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 0], 6, -198630844), f, r, d[n + 7], 10, 1126891415), m, f, d[n + 14], 15, -1416354905), i, m, d[n + 5], 21, -57434055), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 12], 6, 1700485571), f, r, d[n + 3], 10, -1894986606), m, f, d[n + 10], 15, -1051523), i, m, d[n + 1], 21, -2054922799), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 8], 6, 1873313359), f, r, d[n + 15], 10, -30611744), m, f, d[n + 6], 15, -1560198380), i, m, d[n + 13], 21, 1309151649), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 4], 6, -145523070), f, r, d[n + 11], 10, -1120210379), m, f, d[n + 2], 15, 718787259), i, m, d[n + 9], 21, -343485551), m = safe_add(m, h), f = safe_add(f, t), r = safe_add(r, g), i = safe_add(i, e) } return Array(m, f, r, i) } function md5_cmn(d, _, m, f, r, i) { return safe_add(bit_rol(safe_add(safe_add(_, d), safe_add(f, i)), r), m) } function md5_ff(d, _, m, f, r, i, n) { return md5_cmn(_ & m | ~_ & f, d, _, r, i, n) } function md5_gg(d, _, m, f, r, i, n) { return md5_cmn(_ & f | m & ~f, d, _, r, i, n) } function md5_hh(d, _, m, f, r, i, n) { return md5_cmn(_ ^ m ^ f, d, _, r, i, n) } function md5_ii(d, _, m, f, r, i, n) { return md5_cmn(m ^ (_ | ~f), d, _, r, i, n) } function safe_add(d, _) { var m = (65535 & d) + (65535 & _); return (d >> 16) + (_ >> 16) + (m >> 16) << 16 | 65535 & m } function bit_rol(d, _) { return d << _ | d >>> 32 - _ }
var skinbackProxyAddress = "https://monitoring.rustylifes.com:8085";
/**
 * Получение ссылки для skinsback
 * @returns {string}
 */

async function generateUrlSkinback() {
	var orderId = MD5(new Date() + CustomerSteamId);
	fetch(skinbackProxyAddress + '?order_id=' + orderId + '&steam_id=' + CustomerSteamId).then((res) => {
        return res.json();
    }).then((json) => {
		switch (json.status) {
			case 'success':
				window.open(json.url);
				break;
			default:
			//Обработка ошибок
		}
    });
}

/**
 * Генерация ссылки для киви
 * @returns {string}
 */
function generateUrlQiwi(){
	var publicKey = '48e7qUxn9T7RyYE1MVZswX1FRSbE6iyCj2gCRwwF3Dnh5XrasNTx3BGPiMsyXQFNKQhvukniQG8RTVhYm3iP5PFjShvHqFqVrUtjkc35pmkuQU11pX4tyARkHb4guLEqnGthNfF4EbSFbZ1kp5jEiWx1AAmd8tyboxD5rCKq7dbvhBtD2vw4QUmLcVd6T';
	var commentQiwi = `${CustomerSteamId}`;
	var successUrlQiwi = 'https://rustylife.ru';
	var inputval = document.getElementById('refill-window__amount-input').value;
	var inputfloat = parseFloat(inputval);
	return 'https://oplata.qiwi.com/create?amount='+inputfloat+'&comment='+commentQiwi+'&publicKey='+publicKey+'&account=0&customFields[themeCode]=Konstantyn-K9-lD3vkZl&successUrl='+successUrlQiwi;
}

/**
 * Генерация ссылки для енота
 * @returns {string}
 */
function generateUrlEnot(){
	var inputval = document.getElementById('refill-window__amount-input').value;
	var MERCHANT_ID   = 45517,             // ID магазина
	SECRET_WORD   = 'cbd73e7ff2909127ab9621e30ebf73bea02aca51',   // Секретный ключ
	ORDER_AMOUNT  = parseFloat(inputval),               // Сумма заказа
	PAYMENT_ID    = new Date().getTime(),        // ID заказа (мы используем time(), чтобы был
	SLUG = MD5(MERCHANT_ID+':'+ORDER_AMOUNT+':'+SECRET_WORD+':'+PAYMENT_ID)
	return 'https://enot.io/pay?c='+`${CustomerSteamId}`+`&cf=`+`${CustomerSteamId}`+'&m='+MERCHANT_ID+'&oa='+ORDER_AMOUNT+'&o='+PAYMENT_ID+'&s='+SLUG;
}
var colorgrayhover = "#272730";
function OnClickElement1(event) { /*QIWI*/
	ResetBtns();

	let element = document.getElementById('element1');
	element.style.backgroundColor = colorgrayhover;
	btn_unlocked = 1;
	UnLockBuyBtn();
	document.getElementById('bonus-text').innerText = "";
	document.getElementById('buybtn').removeAttribute("href");
	document.getElementById("amount-wrapper").style.display = "block";
	document.getElementById('buybtn').innerText = "Пополнить";
}

function OnClickElement2(event) { /*CENT.APP*/
	ResetBtns();
	
	let element = document.getElementById('element2');
	element.style.backgroundColor = colorgrayhover;
	btn_unlocked = 2;
	UnLockBuyBtn();
	document.getElementById('bonus-text').innerText = "";
	document.getElementById('buybtn').removeAttribute("href");
	document.getElementById("amount-wrapper").style.display = "block";
	document.getElementById('buybtn').innerText = "Пополнить";
}

function OnClickElement3(event) { /*ENOT.IO*/
	ResetBtns();
	
	let element = document.getElementById('element3');
	element.style.backgroundColor = colorgrayhover;
	btn_unlocked = 3;
	UnLockBuyBtn();
	document.getElementById('bonus-text').innerText = "";
	document.getElementById('buybtn').removeAttribute("href");
	document.getElementById("amount-wrapper").style.display = "block";
	document.getElementById('buybtn').innerText = "Пополнить";
}

function OnClickElement4(event) { /*MOSCOW.OVH x TOME*/
	ResetBtns();
	
	let element = document.getElementById('element4');
	element.style.backgroundColor = colorgrayhover;
	btn_unlocked = 4;
	UnLockBuyBtn();
	document.getElementById('bonus-text').innerText = "";
	document.getElementById("amount-wrapper").style.display = "block";
	document.getElementById('buybtn').innerText = "Пополнить";
}

function OnClickElement5(event) { /*tebex*/ 
	ResetBtns();
	
	let element = document.getElementById('element5');
	element.style.backgroundColor = colorgrayhover;
	btn_unlocked = 5;
	UnLockBuyBtn();
	document.getElementById('bonus-text').innerText = "";
	document.getElementById('buybtn').removeAttribute("href");
	document.getElementById("amount-wrapper").style.display = "none";
	document.getElementById('buybtn').innerText = "Пополнить";
}

function OnClickElement6(event) { /*QIWI*/
	ResetBtns();
	
	let element = document.getElementById('element6');
	element.style.backgroundColor = colorgrayhover;
	btn_unlocked = 6;
	UnLockBuyBtn();
	document.getElementById('bonus-text').innerText = "";
	document.getElementById('buybtn').removeAttribute("href");
	document.getElementById("amount-wrapper").style.display = "block";
	document.getElementById('buybtn').innerText = "Пополнить";
}

function OnClickElement7(event) { /*ENOT.IO*/ 
	ResetBtns();
	
	let element = document.getElementById('element7');
	element.style.backgroundColor = colorgrayhover;
	btn_unlocked = 7;
	UnLockBuyBtn();
	document.getElementById('bonus-text').innerText = "";
	document.getElementById('buybtn').removeAttribute("href");
	document.getElementById("amount-wrapper").style.display = "block";
	document.getElementById('buybtn').innerText = "Пополнить";
}

function OnClickElement8(event) { /*ENOT.IO*/ 
	ResetBtns();
	
	let element = document.getElementById('element8');
	element.style.backgroundColor = colorgrayhover;
	btn_unlocked = 8;
	UnLockBuyBtn();
	document.getElementById('bonus-text').innerText = "";
	document.getElementById('buybtn').removeAttribute("href");
	document.getElementById("amount-wrapper").style.display = "block";
	document.getElementById('buybtn').innerText = "Пополнить";
}

function OnClickElement9(event) { /*SkinsBack*/ 
	ResetBtns();

	let element = document.getElementById('element9');
	element.style.backgroundColor = colorgrayhover;
	btn_unlocked = 9;
	UnLockBuyBtn();
	document.getElementById('bonus-text').innerText = "";
	document.getElementById('buybtn').removeAttribute("href");
	document.getElementById("amount-wrapper").style.display = "none";
	document.getElementById('buybtn').innerText = "Пополнить";
}

function OnClickElement10(event) { /*Telegram*/ 
	ResetBtns();
	
	let element = document.getElementById('element10');
	element.style.backgroundColor = colorgrayhover;
	btn_unlocked = 10;
	UnLockBuyBtn();
	document.getElementById('bonus-text').innerText = "";
	document.getElementById('buybtn').removeAttribute("href");
	document.getElementById("amount-wrapper").style.display = "none";
	document.getElementById('buybtn').innerText = "Связаться";
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
	div7.innerHTML = '<button type="button" class="btn btn-secondary" id="closer" onclick="closepage()">Закрыть</button>';
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

const appCentForm = document.getElementById('appcent-inp-form');

function appcentHandler() {
	var inputval = document.getElementById('refill-window__amount-input').value;
	var inputfloat = parseFloat(inputval);

	if (inputfloat < 30 || isNaN(inputfloat)) {
		document.getElementById('bonus-text').innerText = "Минимальная сумма - 30 RUB.";
		return false;
	} else {
		document.getElementById('bonus-text').innerText = "";
	}

	if (CustomerSteamId == "0" || CustomerSteamId == "") {
		//document.getElementById('appcent-error-box').innerText = "Пожалуйста авторизуйтесь в магазине!";

		//return false;
	}

	fetch('https://cent.app/api/v1/bill/create', {
		method: 'POST',
		headers: {
			'Authorization': 'Bearer 13201|BLDmFNXQQOKY9lmyKY96bKZI8jLiv9kXrui6qLmX',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			amount: inputfloat,
			shop_id: 'dk7EgAQmKW',
			order_id: `${CustomerSteamId}`,
			payer_pays_commission: '1',
			name: `Пополнение для ${CustomerSteamId}`,
		})
	})
		.then((res) => {
			if (res.ok) {
				return res.json();
			} else {
				console.log(res.status)
				return Promise.reject(`Ошибка: ${res.status}`);
			};
		})
		.then((res) => {
			window.open(res.link_page_url);
		})
}


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
	try {
		obtainShopSteamId();
	} catch (e) {
		console.log('element not found ' + e);
	}
});
