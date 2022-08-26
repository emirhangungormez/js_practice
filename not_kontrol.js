// 1- Bir sayinin 10-50 arasinda olup olmadigini kontrol ediniz
/*
let sayi = 20;
if (sayi > 10 && sayi < 50)
{
    console.log("sayi 10-50 arasındadir");
}
else
{
    console.log("sayi 10-50 arasında degildir");
}
*/

// 2- bir sayinin pozitif tek sayi olup olmadiğini kontrol ediniz
/*
let sayi = 20;
if ((sayi % 2) == 1 && sayi > 0)
{
    console.log("sayi pozitif bir tek sayidir.")
}
*/

// 3- x,y,z sayilarinin büyüklük karsilastirmasini yapiniz
/*
let x = 10, y = 20, z=30;

if (x > y && x > z)
{
    console.log("x en buyuk.");
}
else if(y > x && y > z)
{
    console.log("y en buyuk.");
}
else if (z > x && z > y)
{
    console.log("y en buyuk.");
}
*/

// 4- 2 vize ve 1 final notuna göre hesaplama ortalamasi icin;
/*
let vize1 = 50;
let vize2 = 60;
let final = 47;

let ortalama = (((vize1 + vize2) / 2) * 0.4) + (final * 0.6);

console.log("ortalamaniz: " + ortalama);
*/

    // a- eger ortalama 50 ve ustundeyse gecti degilse kaldi yazsin.
    /*
    if (ortalama >= 50)
    {
        console.log("gectinizç")
    }
    else
    {
        console.log("kaldiniz.")
    }
    */

    // b- gecmek icin ortalama 50 ile olsa final notu en az 50 olmalidir.
    /*
    if (ortalama >= 50 && final >= 50)
    {
        console.log("gectinizç")
    }
    else
    {
        console.log("kaldiniz.")
    }
    */

    // c- finalden 70 alindiginda ortalama 50'nin altinda olsa bile dersten gecilsin.
    /*
    if (ortalama >= 50 || final >= 70)
    {
        console.log("gectinizç")
    }
    else
    {
        console.log("kaldiniz.")
    }
    */