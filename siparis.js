/*
    1- Siparis bilgilerini obje içerisinde saklayiniz.
    2- Her siparisin ayri ayri kdv dahil toplan odenen ucretini hesaplayiniz. (kdv: %18)
    3- Tüm siparişlerin kdv dahil toplam odenen ücretini hesaplayiniz.

    siparis id: 101
    siparis tarihi: 31.12.22
    odeme sekli: kredi karti
    kargo adresi: kaplikaya mh. yıldırım bursa

    satin alinan urunler:
        urun id: 5
        urun basligi: iphone 13 pro
        urun url: www.anticverse.com
        urun fiyati: 22000

        urun id: 6
        urun basligi: iphpne 13 pro max
        urun url: www.anticverse.com
        urun fiyati: 25000

    musteri:
        musteri id: 12

    satici:
        firma id = 34
        firma adi: apple turkiye

    -----------

    siparis id: 102
    siparis tarihi: 30.12.22
    odeme sekli: kredi karti
    kargo adresi: kaplikaya mh. yıldırım bursa

    satin alinan urunler:
        urun id: 6
        urun basligi: iphone 13 pro max
        urun url: www.anticverse.com
        urun fiyati: 25000

    musteri:
        musteri id: 12

    satici:
        firma id = 34
        firma adi: apple turkiye
*/

let siparis_1 = {
    "siparis_id": 101,
    "siparis_tarihi": "30.12.2022",
    "odeme_sekli": "kredi_karti",
    "kargo_adresi": {
        "mahalle": "kaplikaya",
        "ilce": "yildirim",
        "il": "bursa"
    },
    "urunler": [
        {
            "urun_id": 5,
            "urun_adi": "iphone 13 pro",
            "urun_url": "www.anticverse.com",
            "urun_fiyat": 22000
        }, 

        {
            "urun_id": 6,
            "urun_adi": "iphone 13 pro",
            "urun_url": "www.anticverse.com",
            "urun_fiyat": 22000
        }      
    ]
};

let siparis_2 = {
    "siparis_id": 102,
    "siparis_tarihi": "30.12.2022",
    "odeme_sekli": "kredi_karti",
    "kargo_adresi": {
        "mahalle": "kaplikaya",
        "ilce": "yildirim",
        "il": "bursa"
    },
    "urunler": [
        {
            "urun_id": 6,
            "urun_adi": "iphone 13 pro",
            "urun_url": "www.anticverse.com",
            "urun_fiyat": 25000
        }      
    ]
};

let siparis1_toplam = siparis_1.urunler[0].urun_fiyat + siparis_1.urunler[1].urun_fiyat * 1.18;
let siparis2_toplam = siparis_1.urunler[0].urun_fiyat * 1.18;

let toplam_siparis = siparis1_toplam + siparis2_toplam;
let siparisler = [siparis_1, siparis_2];

console.log("Sipariş 1: " + siparis1_toplam);
console.log("Sipariş 2: " + siparis2_toplam);

console.log("Toplam ödenen miktar: " + toplam_siparis);


