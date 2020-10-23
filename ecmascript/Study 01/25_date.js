var now = new Date();
console.log(now);

var birthday = new Date(2000, 00, 01);
console.log(birthday); //01/01/2000

var birthdayAndHour = new Date(2000, 00, 01, 10, 30, 00);
console.log(birthdayAndHour); //01/01/2000

//pegando itens de data:
console.log(birthday.getFullYear());
console.log(birthday.getMonth());
console.log(birthday.getTime());
console.log(birthday.toLocaleDateString());
console.log(birthday.toLocaleString());
console.log(birthdayAndHour.toLocaleTimeString());

//alguns metodos:
birthday.setDate(-30);
console.log(birthday); //dezembro
birthday.setDate(+60);
console.log(birthday); //fevereiro

// Não precisa se preocupar com bissexto.