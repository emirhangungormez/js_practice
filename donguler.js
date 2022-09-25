let sayilar = [1,2,3,4,5,11,9,23];

// 1- Sayilar listesindeki her bir elemanin karesini yazdiriniz.

for (let sayi of sayilar) {
    // console.log(sayi*sayi);
}

// 2- Sayilar listesindeki hangi sayilar 5'in katdir?

for (let i=0; i < sayilar.length; i++) {
    if(sayilar[i] % 5 == 0){
        console.log("5 kati olan sayi/sayilar " + sayilar[i] + "'tir.");
    }
}

// 3- Sayilar listesindeki cift sayiların toplamini bulunuz.

let toplam = 0;
for (let sayi in sayilar) {
    if(sayi % 2 == 0){
        toplam += sayilar[sayi];
    }
}

console.log("cift sayiların toplamı " + toplam + "'dir.");

let urunler = ["iphone 12", "samsung s22", "iphone 13", "samsung s23"];

// 4- Urunler listesindeki tum urunleri buruk harf ile yazdiriniz.

for(let urun of urunler) {
    console.log(urun.toUpperCase());
}

// 5- Urunler listesinin içerisinde samsung geçen kaç urun vardir?

let adet = 0;

for(let urun of urunler){
    if(urun.includes("samsung")) {
        adet++;
    }
}

console.log(adet);

let ogrenciler = [
    {"ad": "emir","soyad":"han","notlar":[75,82,23]},
    {"ad": "yigit","soyad":"kagan","notlar":[30,60,40]},
    {"ad": "cagla","soyad":"merve","notlar":[12,89,55]},
];

// Ogrenciler listesindeki her ogrencinin not ortalamasi ve basari durumlarını yazdiriniz.

for(let ogrenci of ogrenciler) {
    let not_toplam = 0;
    let ortalama = 0;
    let adet = 0;
    for(let not of ogrenci.notlar) {
        not_toplam += not;
        adet++;
    }
    ortalama = not_toplam / adet;

    console.log(`${ogrenci.ad} ${ogrenci.soyad} isimli ogrencinin not ortalaması:  ${ortalama}'dır.`)

    if(ortalama >= 50) {
        console.log("Dersi basariyle gecmistir.");
    }
    else {
        console.log("Dersi gecememistir.");
    }
}
