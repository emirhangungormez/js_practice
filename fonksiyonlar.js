// 1- Kendisine gonderilen kelimeyi belirtilen kez ekranda yazan foksiyonu yapiniz.

function kelimeYazdir (kelime, tekrar) {
    for (let i = 0; i < tekrar; i++) {
        console.log(kelime);
    }
}

kelimeYazdir("merhaba",3);

// 2- Dikdortgenin alan ve cevresini hesaplayan fonksiyonu yaziniz.

function alanCevreHesaplama(kisa, uzun) {
    let alan = kisa * uzun;
    let cevre = (kisa + uzun) * 2;
    return `alan: ${alan}, cevre: ${cevre}`;
}

console.log(alanCevreHesaplama(11, 9));

// 3- Yazi tura uygulamasini fonksiyon kullanarak yapiniz.

function yaziTura() {
    let random = Math.random(); // 0-1

    if(random > 0.5) {
        console.log("Yazi!")
    }
    else {
        console.log("Tura!")
    }
}

yaziTura();
yaziTura();
yaziTura();

// 4- Kendisine gonderilen bir sayinin tam bolenlerini dizi seklinde donduren fonksiyonu yaziniz:

function tamBolenDizi(sayi) {
    let sayilar = [];

    for (let i=2; i < sayi; i++) {
        if(sayi % i == 0) {
            sayilar.push(i); // diziye ekler.
        }
    }

    return sayilar;
}

console.log(tamBolenDizi(10)); // 2,5

// 5- Degisken sayida parametre alan toplam isminde bir fonksiyon tanimlayiniz.

function toplam() {
    let sonuc = 0;

    for(let i = 0; i < arguments.length; i++){
        sonuc += arguments[i];
    }

    return sonuc;
}

// arguments; kendiliğinden parametre belirleme.

console.log(toplam(1,2));
