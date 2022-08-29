// 1- "Elma, Armut, Muz, Cilek" elemanlarina sahip bir dizi olusturunuz.
let meyveler = ["Elma", "Armut", "Muz", "Cilek"];

// 2- Dizi kac elemanlidir?
console.log(meyveler.length);

// 3- Dizinin ilk ve son elemani nedir?
console.log(meyveler[0] + " ve " + meyveler[meyveler.length - 1]);

// 4- "Elma" dizinin bir elemani midir?
console.log(meyveler.includes("Elma"));

// 5- "Kiraz"ı listenin sonuna ekleyiniz.
meyveler[meyveler.length] = "Kiraz";

// 6- Dizinin son 2 elemanini siliniz.

/*
meyveler.pop();
meyveler.pop();
console.log(meyveler);
*/

meyveler.splice(meyveler.length - 2, 2);

// 7- Asagidaki bilgileri dizi icerisinde saklayiniz ve her ogrencinin yasini ve not ortalamasini hesaplayiniz.
    /*
        Ogrenci 1: Yigit Kagan 2010    (70,60,80)
        Ogrenci 2: Eren Gun 2012       (80,80,90)
        Ogrenci 3: Cagla Fatmanur 2009 (60,60,70)
    */

let ogr1 = [
    "Yigit",
    "Kagan",
    2010,
    [70,60,80]
];

let ogr2 = [
    "Eren",
    "Gun",
    2012,
    [80,80,90]
];

let ogr3 = [
    "Cagla",
    "Fatmanur",
    2009,
    [60,60,70]
];

let ogrenciler = [ogr1, ogr2, ogr3];

let yigit_yas = new Date().getFullYear() - ogrenciler[0][2];
let eren_yas = new Date().getFullYear() - ogrenciler[1][2];
let cagla_yas = new Date().getFullYear() - ogrenciler[2][2];

console.log(yigit_yas, eren_yas, cagla_yas);

let yigit_not = (ogrenciler[0][3][0] + ogrenciler[0][3][1] + ogrenciler[0][3][2]) / 3;
let eren_not = (ogrenciler[1][3][0] + ogrenciler[1][3][1] + ogrenciler[1][3][2]) / 3;
let cagla_not = (ogrenciler[2][3][0] + ogrenciler[2][3][1] + ogrenciler[2][3][2]) / 3;

console.log(yigit_not.toFixed(1), eren_not.toFixed(1), cagla_not.toFixed(1));


