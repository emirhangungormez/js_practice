let url = "https//www.anticverse.com";
let kursAdi = "Komple Web Gelistirme Kursu";

// 1- url kac karakterlidir?

let sonuc;

sonuc = url.length;

// 2- kursAdi kac kelimeden olusmaktadir?

sonuc = kursAdi.split(" ").length;

// 3- url https ile mi baslıyor?

sonuc = url.startsWith("https"); // true/false

if (sonuc){
    console.log("evet basliyor.");
}
else {
    console.log("hayir, baslamiyor.")
}

// 4- kursAdi icerisinde "Egitimi" kelimesi var mi?

if (kursAdi.indexOf("Egitimi") > -1) { // (index degeri -1'den buyuk olma kosulu)
    console.log("evet var.")
}
else {
    console.log("hayir yok.")
}

// 5- url ve kursAdi degiskenlerini kullanarak asagidaki string bilgiyi olusturunuz.

kursAdi = kursAdi.toLowerCase();
kursAdi = kursAdi.replaceAll(" ", "-"); // tum bosluk karakterlerini -'ye cevir.
kursAdi = kursAdi.replace("ş","s").replace("ı","i");

sonuc = `${url}/${kursAdi}`;

console.log(sonuc);