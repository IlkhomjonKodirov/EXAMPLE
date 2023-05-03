// Class orqali class hosil qilamiz
// Va o'sha classni model package fayl sifatida qanday qilib index.js ni ishlatishni ko'ramiz
const moment = require('moment');

class Account{
  #amount;
  #account_id;
  constructor(name, amount, account_id ) {
    this.name = name;
    this.#amount = amount;
    this.#account_id = account_id;
  }

  tellMeBalance() {
    console.log(`Sizning hisobingizdagi qoldiq: ${this.#amount}$`);
    return this.#amount;
  }

  withdrawMoney(amount) {
    if(this.#amount > amount) {
      this.#amount -= amount;
      console.log(`Hisobdan ${amount} yechildi. Qoldiq: ${this.#amount}$`);
    }else{
      console.log(`Sizning balansingizdagi pul yetarli emas. Balansingiz: ${this.#amount}$`);
    }
  }

  makeDeposit(amount) {
    this.#amount += amount;
    console.log(`Hisobingiz to'ldirildi. Hisobingiz : ${this.#amount}$`);
  }

  giveMeDetails(){
    console.log(`Salom hurmatli ${this.name}. Sizning hisobingin ${this.#amount}$ ga teng`);
    console.log("Hisob raqamingiz: ", this.#account_id);
  }

  static tellMeAboutClass() {
    console.log("Bu class accountlarni yasash uchun xizmat qiladi.");
  }

  static tellMeTime() {
    console.log(`Hozirgi vaqt ${moment().format('YYY MM DD HH:mm:ss')}`);
  }
}

module.exports = Account;