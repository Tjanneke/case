"use strict";

let naam;
let datum;
let tijd;
let tijdDuur;
let tel;
let email;
let gasten;
let type;
let accept;
let allesCorrectIngevuld = true;

let tijdRes;
let datumRes;
let gastenRes;
let acceptRes;

let naamBoek;
let emailBoek;
let telBoek;

let betalen;

function controleerVoorwaardenNaam() {

	if (naam.length < 2) {
		document.getElementById("name_error").innerHTML = "Gelieven meer als 2 letters in te geven.";
		allesCorrectIngevuld = false;
	}
	else {
		document.getElementById("name_error").innerHTML = "";
	}
}

function controleerVoorwaardenNaamBoek() {

	if (naamBoek.length < 2) {
		document.getElementById("nameBoek_error").innerHTML = "Gelieven meer als 2 letters in te geven.";
		allesCorrectIngevuld = false;
	}
	else {
		document.getElementById("nameBoek_error").innerHTML = "";
	}
}

function controleerVoorwaardenEmail() {

	const emailRegex = /^[a-zA-Z0-9._%+][a-zA-Z0-9._%+-]*@[a-zA-Z0-9][a-zA-Z0-9.-]*\.[a-zA-Z]{2,3}$/;

	if (!emailRegex.test(email)) {
		document.getElementById("email_error").innerHTML = "Gelieven een juist email format in te geven.";
		allesCorrectIngevuld = false;
	}
	else {
		document.getElementById("email_error").innerHTML = "";
	}
}

function controleerVoorwaardenEmailBoek() {

	const emailRegex = /^[a-zA-Z0-9._%+][a-zA-Z0-9._%+-]*@[a-zA-Z0-9][a-zA-Z0-9.-]*\.[a-zA-Z]{2,3}$/;

	if (!emailRegex.test(emailBoek)) {
		document.getElementById("emailBoek_error").innerHTML = "Gelieven een juist email format in te geven.";
		allesCorrectIngevuld = false;
	}
	else {
		document.getElementById("emailBoek_error").innerHTML = "";
	}
}

function controleerVoorwaardenDatumBoek() {
	const array = datum.split('/');
	if (array.length !== 3) {
		document.getElementById("date_error").innerHTML = "Gebruik het formaat DD/MM/YYYY.";
		allesCorrectIngevuld = false;
		return;
	}

	const dag = parseInt(array[0], 10);
	const maand = parseInt(array[1], 10) - 1;
	const jaar = parseInt(array[2], 10);

	const nieuweDatum = new Date(jaar, maand, dag);
	if (nieuweDatum.getDate() !== dag || nieuweDatum.getMonth() !== maand || nieuweDatum.getFullYear() !== jaar) {
		document.getElementById("date_error").innerHTML = "Ongeldinge datum.";
		allesCorrectIngevuld = false;
		return;
	}

	const vandaag = new Date();
	vandaag.setHours(0, 0, 0, 0);
	if (nieuweDatum < vandaag) {
		document.getElementById("date_error").innerHTML = "De datum ligt in het verleden.";
		allesCorrectIngevuld = false;
		return;
	}

	const Dagen = nieuweDatum.getDay();
	if (Dagen !== 5 && Dagen !== 6 && Dagen !== 0) {
		document.getElementById("date_error").innerHTML = "Wij zijn enkel open op: vrijdag, zaterdag en zondag.";
		allesCorrectIngevuld = false;
	}
	else {
		document.getElementById("date_error").innerHTML = "";
	}
}

function controleerVoorwaardenTel() {

	const telRegex = /^(?:\+32|0)(4[789][0-9]{7})$/;

	if (!telRegex.test(tel)) {
		document.getElementById("tel_error").innerHTML = "Gelieven een juist nummer in te geven.";
		allesCorrectIngevuld = false;
	}
	else {
		document.getElementById("tel_error").innerHTML = "";
	}
}

function controleerVoorwaardenTelBoek() {

	const telRegex = /^(?:\+32|0)(4[789][0-9]{7})$/;

	if (!telRegex.test(telBoek)) {
		document.getElementById("telBoek_error").innerHTML = "Gelieven een juist nummer in te geven.";
		allesCorrectIngevuld = false;
	}
	else {
		document.getElementById("telBoek_error").innerHTML = "";
	}
}

function verstuurMailBoek() {
	let link = "mailto:" + encodeURIComponent(emailBoek) +
		"&subject=" + encodeURIComponent("Reservatie Le Mirage") +
		"&body=" +
		"Beste " + encodeURIComponent(naamBoek) + encodeURIComponent("\r\n\n") +
		"Bedankt voor uw reservatie. Hieronder vindt u alle details:" + encodeURIComponent("\r\n\n") +
		"Datum: " + encodeURIComponent(datum) + encodeURIComponent("\r\n") +
		"Tijdstip: " + encodeURIComponent(tijd.value) + encodeURIComponent("\r\n") +
		"Personen: " + encodeURIComponent(gasten.value) + encodeURIComponent("\r\n\n") +
		"Tot binnenkort!" + encodeURIComponent("\r\n\n") +
		"Le Mirage";
	window.location.href = link;
}

function verstuurMailRes() {
	let link = "mailto:" + encodeURIComponent(email) +
		"&subject=" + encodeURIComponent("Reservatie evenement Le Mirage") +
		"&body=" +
		"Beste " + encodeURIComponent(naam) + encodeURIComponent("\r\n\n") +
		"Bedankt voor uw reservatie. Hieronder vindt u alle details:" + encodeURIComponent("\r\n\n") +
		"Datum: " + encodeURIComponent(datumRes.value) + encodeURIComponent("\r\n") +
		"Tijdstip: " + encodeURIComponent(tijdRes.value) + encodeURIComponent("\r\n") +
		"Duur: " + encodeURIComponent(tijdDuur.value) + encodeURIComponent("\r\n") +
		"Personen: " + encodeURIComponent(gastenRes.value) + encodeURIComponent("\r\n") +
		"Type: " + encodeURIComponent(type.value) + encodeURIComponent("\r\n\n") +
		"Tot binnenkort!" + encodeURIComponent("\r\n\n") +
		"Le Mirage";
	window.location.href = link;
}

function controleerRekeningNummer() {
	let iban = document.getElementById("nummer").value;
	iban = iban.replace(/\s+/g, '').toUpperCase();

	if (iban.length !== 16 || !iban.startsWith("BE")) {
		document.getElementById("nummer_error").innerHTML = "Ongeldige IBAN lengte en begin met BE.";
		return;
	}

	let rearranged = iban.slice(4) + iban.slice(0, 4);
	let numericIBAN = rearranged.replace(/[A-Z]/g, function (letter) {
		return letter.charCodeAt(0) - 55;
	});

	if (BigInt(numericIBAN) % 97n === 1n) {
		document.getElementById("nummer_error").innerHTML = "";
		verstuurMailBoek();
	}
	else {
		document.getElementById("nummer_error").innerHTML = "Ongeldig IBAN.";
	}
}


function verstuurBoeken() {
	allesCorrectIngevuld = true;
	naamBoek = document.getElementById("nameBoek").value;
	emailBoek = document.getElementById("emailBoek").value;
	telBoek = document.getElementById("telBoek").value;
	datum = document.getElementById("date").value;
	tijd = document.getElementById("time");
	gasten = document.getElementById("gasten");
	accept = document.getElementById("accept");
	betalen = document.getElementById("box");
	let klantNr = document.getElementById("nummerKlant");
	let klantEmail = document.getElementById("emailKlant");
	let tijdKlant = document.getElementById("tijdKlant");
	let datumKlant = document.getElementById("datumKlant");
	let name = document.getElementById("nameUser");
	let personenKlant = document.getElementById("personenKlant");

	if (naamBoek.length == 0) {
		document.getElementById("nameBoek_error").innerHTML = "Vul je naam in a.u.b.";
		allesCorrectIngevuld = false;
	}
	else {
		controleerVoorwaardenNaamBoek();
	}

	if (emailBoek.length == 0) {
		document.getElementById("emailBoek_error").innerHTML = "Vul je email in a.u.b.";
		allesCorrectIngevuld = false;
	}
	else {
		controleerVoorwaardenEmailBoek();
	}

	if (telBoek.length == 0) {
		document.getElementById("telBoek_error").innerHTML = "Vul je telefoon nummer in a.u.b.";
		allesCorrectIngevuld = false;
	}
	else {
		controleerVoorwaardenTelBoek();
	}

	if (datum.length == 0) {
		document.getElementById("date_error").innerHTML = "Vul de datum in.";
		allesCorrectIngevuld = false;
	}
	else {
		controleerVoorwaardenDatumBoek();
	}

	if (tijd.selectedIndex == 0) {
		document.getElementById("time_error").innerHTML = "Kies een tijd a.u.b.";
		allesCorrectIngevuld = false;
	}
	else {
		document.getElementById("time_error").innerHTML = "";
	}

	if (gasten.selectedIndex == 0) {
		document.getElementById("gasten_error").innerHTML = "Selecteer een aantal personen A.U.B.";
		allesCorrectIngevuld = false;
	}
	else {
		document.getElementById("gasten_error").innerHTML = "";
	}

	if (!accept.checked) {
		document.getElementById("accept_error").innerHTML = "Ga akkoord met de voorwaarden.";
		allesCorrectIngevuld = false;
	}
	else {
		document.getElementById("accept_error").innerHTML = "";
	}

	if (allesCorrectIngevuld) {
		betalen.style.display = "flex";
		klantEmail.innerHTML = emailBoek;
		klantNr.innerHTML = telBoek;
		datumKlant.innerHTML = datum;
		tijdKlant.innerHTML = tijd.value;
		name.innerHTML = naamBoek;
		personenKlant.innerHTML = gasten.value;
	}
}

function hide() {
	document.getElementById("box").style.display = "none";
}

function verstuurEvent() {
	naam = document.getElementById("name").value;
	email = document.getElementById("email").value;
	tel = document.getElementById("tel").value;
	datumRes = document.getElementById("dateRes");
	tijdRes = document.getElementById("timeRes");
	tijdDuur = document.getElementById("timeDuurRes");
	gastenRes = document.getElementById("gastenRes");
	type = document.getElementById("type");
	acceptRes = document.getElementById("acceptRes");

	if (naam.length == 0) {
		document.getElementById("name_error").innerHTML = "Gelieven je voornaam in te vullen";
		allesCorrectIngevuld = false;
	}
	else {
		controleerVoorwaardenNaam();
	}

	if (email == 0) {
		document.getElementById("email_error").innerHTML = "Gelieven je email in te vullen";
		allesCorrectIngevuld = false;
	}
	else {
		controleerVoorwaardenEmail();
	}

	if (tel == 0) {
		document.getElementById("tel_error").innerHTML = "Gelieven je gsm nummer in te vullen";
		allesCorrectIngevuld = false;
	}
	else {
		controleerVoorwaardenTel();
	}

	if (datumRes.selectedIndex == 0) {
		document.getElementById("dateRes_error").innerHTML = "Vul een datum in a.u.b.";
		allesCorrectIngevuld = false;
	}
	else {
		document.getElementById("dateRes_error").innerHTML = "";
	}

	if (tijdDuur.selectedIndex == 0) {
		document.getElementById("timeDuurRes_error").innerHTML = "Kies een duur tijd.";
		allesCorrectIngevuld = false;
	}
	else {
		document.getElementById("timeDuurRes_error").innerHTML = "";
	}

	if (tijdRes.selectedIndex == 0) {
		document.getElementById("timeRes_error").innerHTML = "Kies een tijd a.u.b.";
		allesCorrectIngevuld = false;
	}
	else {
		document.getElementById("timeRes_error").innerHTML = "";
	}

	if (gastenRes.selectedIndex == 0) {
		document.getElementById("gastenRes_error").innerHTML = "Selecteer een aantal personen A.U.B.";
		allesCorrectIngevuld = false;
	}
	else {
		document.getElementById("gastenRes_error").innerHTML = "";
	}

	if (type.selectedIndex == 0) {
		document.getElementById("type_error").innerHTML = "Selecteer een evenement type A.U.B.";
		allesCorrectIngevuld = false;
	}
	else {
		document.getElementById("type_error").innerHTML = "";
	}

	if (!acceptRes.checked) {
		document.getElementById("acceptRes_error").innerHTML = "Ga akkoord met de voorwaarden.";
		allesCorrectIngevuld = false;
	}
	else {
		document.getElementById("acceptRes_error").innerHTML = "";
	}

	if (allesCorrectIngevuld) {
		verstuurMailRes();
	}
}

let divBoek = document.getElementById("divBoek");
let divRes = document.getElementById("divRes");


divBoek.addEventListener('click', () => {
	let boek = document.getElementById("formShow");
	boek.classList.toggle('visible');
});

divRes.addEventListener('click', () => {
	let res = document.getElementById("formShow2");
	res.classList.toggle('visible');
});

window.addEventListener('load', () => {
	const swipeDiv = document.getElementById("absolute");
	swipeDiv.classList.add("active");
});


const header = document.querySelector('header');
const initialHeight = 200;
const minHeight = 100;

window.addEventListener('scroll', () => {

	const scrollAmount = window.scrollY;
	const maxShrink = initialHeight - minHeight;
	const newHeight = Math.max(minHeight, initialHeight - scrollAmount);

	if (header.style.height !== `${newHeight}px`) {
		header.style.height = `${newHeight}px`;
	}
});

header.style.transition = 'height 0.3s ease';
