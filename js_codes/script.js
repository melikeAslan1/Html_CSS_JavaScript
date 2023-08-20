// console.log("hello");
// var maasAli = 5000;
// var maasCan = 6000;
// var zam = 0.35;

// console.log(maasAli + (maasAli * zam)) // maaş ali
// console.log(maasCan + (maasCan * zam)) // maaş can

// // Türkçe karakter kullanmamalıyız.
// // Arada boşluk olmaz.
// // Sayı ile başlayamaz.

// var urunAdi = "iphone 13";  // string
// let urunFiyat = 15000;    // number

// console.log(typeof urunAdi);
// console.log(typeof urunFiyat);

// // let sayi1 = "10";
// // let sayi2 = "20";

// // console.log(Number(sayi1) + Number(sayi2));

// let sayi1 = 10;
// let sayi2 = 20;

// console.log(sayi1.toString() + sayi2.toString());

// let isim = "sena";
// let soyad = "turan";

// console.log(isim + " " + soyad);
// let sinavNotu = 40;

// let basarilimi = (sinavNotu >= 50)

// console.log(basarilimi);
// console.log(typeof basarilimi); // boolean

// let yas;


// yas;

// console.log(yas);
// console.log(typeof yas);

// sonuc = (a == b)
// sonuc = (a != b)
// sonuc = (3 === "3") // değer tip

// let ad="melike";
// console.log(ad);

let ad = "Sadık";
let soyad = "Turan";
let yas = 45;
let sehir = "Kocaeli";

//let mesaj = "Benim adım " + ad + ' ve soyadım ' + soyad + '. ' + sehir + '\'de yaşıyorum.' + 'Emekliliğe ' + (65 - yas) + ' yılım kaldı.';

// backtick  
mesaj = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir}'de yaşıyorum.Emekliliğe ${65 - yas} yılım kaldı.`;

// ternary operators
//let emeklilik = (65 - yas > 0) ? "Emekliliğe " + (65-yas) + " yıl kaldı." : "Zaten emekli oldunuz.";
//mesaj = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir}'de yaşıyorum.${emeklilik}`;

console.log(mesaj);

///////////////////////

let kursAdi = "Komple Uygulamalı Web Geliştirme Eğitimi.";

let sonuc;

sonuc = kursAdi.toLowerCase();
sonuc = kursAdi.toUpperCase();
sonuc = kursAdi.length;
sonuc = kursAdi[1];
sonuc = kursAdi.slice(0, 6);
sonuc = kursAdi.slice(10);
sonuc = kursAdi.slice(-10);
sonuc = kursAdi.slice(-10, -5);

sonuc = kursAdi.substring(0, 6);
sonuc = kursAdi.substring(10);

sonuc = kursAdi.replace("Eğitimi","Kursu");
sonuc = kursAdi.trim();
sonuc = kursAdi.trimEnd();
sonuc = kursAdi.trimStart();

sonuc = kursAdi.indexOf("Komple");
sonuc = kursAdi.split(" ");
sonuc = kursAdi.split(" ")[0];
sonuc = kursAdi.split(" ")[3];


console.log(sonuc);

////////////////

let sonuc;

sonuc = 10;
sonuc = "10";
sonuc = Number("10");
sonuc = parseInt("10.6");
sonuc = parseFloat("10.6");
sonuc = parseInt("10a");
sonuc = parseInt("a10");

sonuc = isNaN("10");

let sayi = 15.12355467;

sonuc = sayi.toPrecision(5);
sonuc = sayi.toFixed(5);

sonuc = Math.round(2.4);
sonuc = Math.round(2.6);
sonuc = Math.ceil(2.2);
sonuc = Math.floor(2.6);
sonuc = Math.sqrt(25);
sonuc = Math.pow(2,3);
sonuc = Math.abs(-10);
sonuc = Math.min(4,6,8,3,9);
sonuc = Math.max(4,6,8,3,9);
sonuc = Math.floor(Math.random() * 100) + 50;

console.log(typeof sonuc);
console.log(sonuc);

///////////
let simdi = new Date(); // şimdiki tarih - saat

// Get Methods
sonuc = simdi;
sonuc = simdi.getDate();    // gün
sonuc = simdi.getDay();     // 0: pazar 6: cumartesi
sonuc = simdi.getFullYear(); // yıl
sonuc = simdi.getHours();   // saat
sonuc = simdi.getTime();

// Set Methods
// simdi.setFullYear(2025);
simdi.setMonth(7);          // 0: Ocak
simdi.setDate(15);

sonuc = simdi;

let dogumTarihi = new Date(1990, 5, 15);

sonuc = simdi.getFullYear() - dogumTarihi.getFullYear();

let milisecond = simdi - dogumTarihi;
let saniye = milisecond / 1000;     // saniye
let dakika = saniye / 60;
let saat = dakika / 60;
let gun = saat / 24;

sonuc = gun;

console.log(sonuc);
console.log(typeof sonuc);

//// dizi metotlari
let ogrenciler = ["çınar","yiğit","ada"];

sonuc = ogrenciler.length;

// array to string
sonuc = ogrenciler.toString();
sonuc = ogrenciler.join(" ");

// eleman silme
// sonuc = ogrenciler.pop();       // son eleman silinir ve silinen eleman geri döndürülür.
// sonuc = ogrenciler.shift();     // ilk eleman silinir.

// eleman ekleme
// sonuc = ogrenciler.push("sena");    // dizinin sonuna eleman eklenir.
// sonuc = ogrenciler.unshift("sena");

let markalar1 = ["mazda","toyota"];
let markalar2 = ["opel","renault"];
let markalar3 = ["mercedes"];

// sonuc = markalar1.concat(markalar2, markalar3);
// sonuc = markalar1.splice(0, 1, "bmw","audi");
sonuc = markalar1.splice(0, 1);

console.log(sonuc);
console.log(markalar1);

