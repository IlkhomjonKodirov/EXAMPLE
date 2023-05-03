// Modul package lar 3 xil: CORE, EXTERNAL, FILE

/********************************* CORE MODULE ***********************************************/ 

// setTimeout - funksiyani nechadir sekunddan so'ng ishga tushiradi
/* setTimeout(function() {
    console.log("Ishga tushdi");
   }, 5000);*/

// setInterval - funksiyani har nechadir sekundda ishga tushiradi
/* 
let number=0;
setInterval(function() {
    console.log("hisob", number);
    number++;
   }, 1000);*/

// File system -fs
/*
const fs = require('fs'); // file system objectini olib beradi
const data = fs.readFileSync('./input.txt', 'utf8');
console.log(data);

console.log('***************');

fs.writeFileSync('./input.txt', `${data} \n\t\t by BekzodAli`);
const new_data = fs.readFileSync('./input.txt', 'utf8');
console.log(new_data);
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

/******************************************EXTERNAL MODULE************************************************* */

// EXTERNAL Modul Package - nodeni o'zida mavjud bo'lmagan tashqaridan ustanovka qilinadigan npm packagelardir

/* // 1. moment package

const moment = require("moment");
const time = moment().format(); 
console.log(time); //-> Hozirgi sana va vaqt. Masalan: 2023-05-03T23:39:42-07:00
const time2 = moment().format('YYYY-MM-DD');
console.log(time2); //-> Bugungi kun sanasi. Masalan:  2023-05-03

/*
setInterval(()=> {
  const time = moment().format();
  console.log(`Hozirgi vaqt : ${time}`);
}, 5000); // -> Har 5 sekundda vaqtni ko'rsatib turadi
*/ 

// 2. inquirer package : install qilish uchun -> npm install --save inquirer

/*
const inquirer = require("inquirer");
inquirer
.prompt([{type: "input", name: "raqam", message: "raqamni kiriting:"}])
.then(answer => {
  console.log('Men kiritgan raqam qiyamati: ', answer.raqam);
})
.catch((err) => console.log(err));
*/

//  3. validator package : ma'lumotlarni validate(tasdiqlash) qilib beradi
// ustanovkasi: npm i validator
/*
const validator = require("validator");
// const test = validator.isEmail('foo@bar.com');
// const test = validator.isInt("100");
const test = validator.isIP("165.229.144.80");
console.log("test: ", test); // -> test:  true
*/

//  4. uuid package : turli xil stringlarni random orqali olish
// ustanovkasi: npm i uuid
/*
const { v4: uuidv4 } = require('uuid');
const random = uuidv4();
console.log('random: ', random);
*/


// mkdirp package - file system bilan bog'liq npm package. Bu  biz aytgan manzilda bizga rekursiv usulda folder ochib beradi.


//  5. chalk - terminalda boshqacha yo'sinda log qilish imkonini beradi
// ustanovkasi: npm i chalk
/*
const chalk = require('chalk');
const log = console.log;
const { v4: uuidv4 } = require('uuid');
const random = uuidv4();

// log(chalk.blue('Hello') + random + chalk.red('!'));
log(chalk.red(`uuid creates ${random}`));
*/


/////////////////////////////////////////////////////////////////////////////////////////

/***********************************FILE MODULE***************************************/

/*
const calculate = require('./hisob');

const natija =  calculate.kopaytirish(80, 20);
console.log('Natija: ', natija);
console.log('*************');

const natija2 =  calculate.bolish(80, 20);
console.log('Natija: ', natija2);
console.log('*************');

const natija3 =  calculate.qoshish(80, 20);
console.log('Natija: ', natija3);
console.log('*************');

const natija4 =  calculate.ayirish(80, 20);
console.log('Natija: ', natija4);
console.log('*************');
*/

// console.log(require("module").wrapper);
// console.log(arguments);



/////////////////////////////////////////////////////////////////////////////////////////

//account.js da yasagan file packageni ishlatish
const Account = require("./account");
Account.tellMeAboutClass(); //-> Bu class accountlarni yasash uchun xizmat qiladi.
Account.tellMeTime(); //-> Hozirgi vaqtni ko'rsatadi
// Account.giveMeDetails();// -> Error(Chunki giveMeDetails() classning static metodi emas)

console.log('===============');

const myAccount = new Account('Martin', 200000, 97455587457854);
myAccount.giveMeDetails();

myAccount.makeDeposit(1000000);

//bugatto chiron 2.4mln usd
myAccount.withdrawMoney(2400000);
//ferarri 400000 usd
myAccount.withdrawMoney(400000);

myAccount.makeDeposit(200000);









