const isim = prompt("Lütfen isminizi girin:");
const welcomeMessage = document.getElementById("welcome-message");
const dateTimeDisplay = document.getElementById("date-time");
const historicalEvents = document.getElementById("historical-events");

welcomeMessage.textContent = `Merhaba, ${isim}! Hoşgeldiniz!`;

const now = new Date();
dateTimeDisplay.textContent = `${now.toLocaleString()}`;

const events = [
    "1923 - Türkiye Cumhuriyeti kuruldu.",
    "1938 - Mustafa Kemal Atatürk, hayatını kaybetti.",
    "1963 - İlk Türk televizyon kanalı açıldı.",
    "2000 - Türkiye, Avrupa Birliği'ne aday ülke oldu."
];

historicalEvents.innerHTML = "<strong>Bugün Tarihte:</strong><br>" + events.join("<br>");