// 1 misol

// Sizga n soni beriladi. Uning eng kichik juft karralisini toping.

// let n = 45;
// function name(arg) {
//   if (n % 2 === 0) {
//     return n;
//   } else {
//     return 2 * n;
//   }
// }
// console.log(name(n));

// 2 misol

// Sizga to'g'ri to'rtburchakning tomonlari a va b beriladi, siz uning yuzasi va perametrini topib quyidagi shartga tekshirishingiz kerak bo'ladi.

// let a = 5;
// let b = 10;
// function sum(a, b) {
//    let yuzi = a * b;
//    let perimeter = 2 * (a + b);

//    return { yuzi, perimeter };
// }

// let { yuzi, perimeter } = sum(a, b);
// console.log(yuzi);
// console.log(perimeter);

// 3 misol
// Kirish faylida 2 ta qatorda mos ravishda poyezd ketishi kerak blgan vatq
// t(0≤t≤23)t(0≤t≤23). ikkinchi qatorda esa poyezd kechikishi soatlarda beriladi. T(1≤T≤1000)T(1≤T≤1000)

// let t = 10;
// let T = 5;
// function name(arg) {
//   return (t + T) % 24;
// }
// console.log(name(t, T));\
// 4-savol

// MINAB(A,B) - bu funksiyaga 2 ta musbat son jo'natilganda, ularni string turiga o'tkazilgandagi uzunliklarini kichigini qaytaradi.
// Yaqinda Sardor Azimjonga 
// MINAB(A,B)
// MINAB(A,B) funksiyasini o'rgatgan edi, lekin Azimjon bu funksiyani qanday ishlatishga juda qiynalmoqda.
// Shu sababdan Sardor endi unga bu funksiyani qo'llash uchun misol berishga qaror qildi. Sardor Azimjonga 
// 𝑁
// N musbat butun sonini beradi va 
// 𝐴
// ∗
// 𝐵
// =
// 𝑁
// A∗B=N shartni qanoatlantiradigan 
// 𝐴
// A va 
// 𝐵
// B juftliklarning har biri uchun 
// MINAB(A,B)
// MINAB(A,B) funksiyaning qiymatini hisoblab chiqqach ular orasidan eng kichigini topishni talab qilmoqda.
// Azimjon bu funksiyani yaxshi o'rganmaganligi sababli siz dasturchilardan yordam so'rashga qaror qildi.

// let num1 = -45;
// let num2 = -445;
// let arr1 = num1.toString();
// let arr2 = num2.toString();

// function func(arr1, arr2) {
//     if (arr1.length < arr2.length) {
//         console.log(arr1);
//     }else{
//         console.log(arr2);

//     }
// }
// func(arr1, arr2);



// 6 misol
// RoboContest.uz da yangi bo'lgan kopchilik ba'zida jarima tizimi qanday ishlashini tushunishmaydi. Bunda jarima quyidagicha baholanadi: Har bir xato yuborilgan urinish uchun 5 daqiqa jarima hisoblanadi va to'g'ri javobni yuborgan vaqtini daqiqa sifatida yaxlitlab qo'shiladi. Aytaylik foydalanuvchi to'g'ri javob yuborishdan oldin 5 ta xato urinishga yo'l qo'ydi. To'g'ri javobni esa 21-daqiqada yubordi.Unutmang 21 daqiqa deganda misol uchun "20:SS" nazarda tutuiladi. Unda bu masala uchun jarima:

// 20
// +
// 5
// ⋅
// 5
// =
// 45
// 20+5⋅5=45

// Kabi hisoblanadi.
 
// let res = 20; 
// let res1 = 1; 
// function name(res, res1) {
//     let Minutes = Number(res);
//     let Errors = res1 * 5;
//     let Penalty = Minutes + Errors;
    
//     return Penalty;
// }
// console.log(name(res, res1));




// 8 misol

// Sizga Selsiy shkalasi bo'yicha harorat beriladi. Uning Kelvin va Farangeyit shkalasi bo'yicha haroratini topuvchi dastur tuzing.

// Bunda ular quyidagicha bog'langan:

// Kelvin = Celsius + 273.15
// Fahrenheit = Celsius * 1.80 + 32.

// let celsius = 25;
// function Temperature(celsius) {
//     let kelvin = celsius + 273.15;
//     let fahrenheit = (celsius * 1.80) + 32.00;

//     return {
//         kelvin: kelvin,
//         fahrenheit: fahrenheit
//     };
// }
// let result = Temperature(celsius);
// console.log(result);

// 9 misol

// Sizga ikkita natural son beriladi. Sizning vazifangiz shu sonlar orasidagi 3ga bo'linadigan ammo 7 bo'linmaydigan sonlar yigindisini topish. Bunda ikkala chegara ham kiradi.

// let arg = 1;
// let arg1 = 20;
// function name(arg, arg1) {
//   let sum = 0;
//   for (let i = arg; i <= arg1; i++) {
//     if (i % 3 === 0 && i % 7 !== 0) {
//       sum += i;
//     }
//   }

//   return sum;
// }
// let result = name(arg, arg1);

// console.log(result);
// 10-savol


// function func(a, b) {
//     return (a + b) / (a * b + 4);
// }

// function test(n) {
//     let result = n;
//     for (let i = n - 1; i >= 1; i--) {
//         result = func(i, result);
//     }
//     return result;
// }

// let n = 5;
// let natija = test(n);
// console.log(natija);



// 12 misol

// Doskaga 1 dan n gacha sonlar yozib chiqildi. Ulardan faqat 3,5,7 ga karralilari qolib qolganlari o'chirib tashlandi. O'sha qolgan sonlar yig'indisini toping.

// let n = 10;
// function Sum(n) {
//   let sum = 0;

//   for (let i = 1; i <= n; i++) {
//     if (i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0) {
//       sum += i;
//     }
//   }

//   return sum;
// }
// console.log(Sum(n));

// 13-savol

// Bill Gates ajoyib ko'rsatuvga taklif qilindi. U jurnalistga eng boy odam ekanligini yana bir bor isbotlash maqsadida unga bir chek berib undagi ixtiyoriy raqamni o'zgartirishi mumkinligini va unga shu miqdordagi pulni hadya qilishini aytdi. Jurnalist imkoniyatdan maksimal foydalanmoqchi. Unga bunda yordam bering.



// ?????

// 14-savol

// Jonibek matematika darsida faktorial darsini o'tdi va u shunday dastur yaratmoqchiki, uning dasturiga ikkita n va m sonlari kiritiladi va dastur n dan m gacha bo'lgan sonlar ko'paytmasida oxirida hosil bo'lgan nollar sonini chop etishi kerak. Ammo Jonibek sizning yordamingizga muhtoj.


// let n = 5;
// let m = 10;

// function func(n, m) {
//     let sum = 1;
//     for (let i = n; i <= m; i++) {
//         sum *= i;
//     }
//     return sum;
// }

// let result = func(n, m);
// console.log(result);

// 15 misol

// Bilmasvoy ukalari Ali va Valining yoshini esidan chiqarib qo'ydi. Ali Bilmasvoyga Validan N yoshga kattaligini aytdi. Lekin Bilmasvoy ukalari/ni yoshini topa olmadi. Keyin Vali Alidan K marta kichikligni aytdi. Bilamsvoy vanihoyat ukalarining yoshini topdi. Siz ham topingchi!?
// let N = 5;
// let K = 2;
// function arg(N, K) {
//     for (let V = 1; V < 1000; V++) {
//         let A = V * K;
//         if (A === V + N) {
//             return { Ali: A, Vali: V };
//         }
//     }
// }
// let res = arg(N, K);
// console.log(res);

// 16-savol
// function F(n) {
//     return 1 + 3 * n + 3 * n * n;
// }

// function sumF(n) {
//     let sum = 0;
//     for (let i = 0; i <= n; i++) {
//         sum += F(i);
//     }
//     return sum;
// }

// let N = 5; 
// let result = sumF(N);
// console.log(result);


