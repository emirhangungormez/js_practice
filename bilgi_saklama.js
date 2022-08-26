/*
    1- İki ogrencinin asagidaki bilgilerini degiskenler icerisinde saklayiniz.

        ogrenci 1:
            isim            : Emir
            dogum tarihi    : 2001
            sinav notlari  : 57, 90, 62

        ogrenci 2:
            isim            : Han
            dogum tarihi    : 2002
            sinav notlari  : 40, 53, 12

    2- Ogrencilerin yas bilgilerini degiskende tutunuz.
    3- Ogrencilerin ders ortalama notunu degiskende saklayiniz.
    4- Ogrencilerin 50 gecme notuna göre basarı durumlarını inceleyiniz.
*/

let ogr1_isim = "Emir";
let ogr1_dogum = "2001";
let ogr1_not1 = 57;
let ogr1_not2 = 90;
let ogr1_not3 = 62;
let ogr1_ortalama = (ogr1_not1 + ogr1_not2 + ogr1_not3) / 3;
console.log("Emir'in not ortalamasi: " + parseInt(ogr1_ortalama));
console.log("Emir dersi geçti mi? = " + (ogr1_ortalama >= 50));

let ogr2_isim = "Han";
let ogr2_dogum = "2002";
let ogr2_not1 = 40;
let ogr2_not2 = 53;
let ogr2_not3 = 12;
let ogr2_ortalama = (ogr2_not1 + ogr2_not2 + ogr2_not3) / 3;
console.log("Han'in not ortalamasi: " + parseInt(ogr2_ortalama));
console.log("Han dersi geçti mi? = " + (ogr2_ortalama >= 50));


let suankiYil = new Date().getFullYear();

let ogr1_yas = suankiYil - parseInt(ogr1_dogum); // tam sayiya cevirir
let ogr2_yas = suankiYil - parseInt(ogr2_dogum); 
console.log("Emir'in yasi: " + ogr1_yas);
console.log("Han'in yasi: " + ogr2_yas);