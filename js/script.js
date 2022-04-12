var minAge = 16;
var userAge = prompt("Yoshingizni kiriting:");
var difAge = minAge - userAge;
var paragraph = document.createElement("h1");
document.body.append(paragraph);
 
if(userAge >= minAge){
  console.log("Motosikl poygasiga muvaffaqqiyatli ro'yxatdan o'tdingiz");
  paragraph.append("Motosikl poygasiga muvaffaqqiyatli ro'yxatdan o'tdingiz");
}else
{
  console.log(` Yoshingiz to'g'ri kelmas ekan. \n ${difAge} yildan keyin urinib ko'ring `);
  paragraph.append(` Yoshingiz to'g'ri kelmas ekan. \n ${difAge} yildan keyin urinib ko'ring`);
}
