//Калькулятор любви
let firstName = prompt("Введите первое имя");
let secondName = prompt("Введите второе имя");

let compatibility = Math.round(Math.random() * 100);

alert(`${firstName} подходит к ${secondName} на ${compatibility}%`);

//BMI Калькулятор
let growth = prompt("Введите свой рост в сантиметрах");
let weight = prompt("Введите свой вес");

let BMI = weight / ((growth / 100) ** 2);

if (BMI <= 18.5)
{
    alert("У вас недостаток веса");
}
else if (BMI <= 25)
{
    alert("Ваш вес в норме");
}
else if (BMI <= 30)
{
    alert("У вас излишек веса");
}
else if (BMI > 30 )
{
    alert("У вас ожирение, рекомендуем обратиться к врачу");
}

//Является ли год високосным
let year = prompt("Введите год, чтобы узнать является ли он високосным")

if ((year % 4 == 0 && year % 400 == 0) || (year % 4 == 0 && year % 100 > 0))
{
    alert("Год является високосным")
}
else 
{
    alert("Год не является високосным")
}

//Кто оплачивает ужин
let names = [];
names = prompt("Введите имена через запятую, чтобы решить кто будет оплачивать").split(" " && ",");

alert(names[Math.floor(Math.random() * names.length)]);