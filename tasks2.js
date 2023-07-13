
//*------------------------------ Уровень 2.1 задачника JavaScript ------------------------------*/

// Дана некоторая строка. Найдите позицию первого нуля в строке.

let str = 'ур0вень0';
console.log(str.indexOf('0'));


// Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.

for (let i = 1; i < 1001; i++) {
	let str = String(i);
	if (Number(str[0]) + Number(str[1]) === 5) {
		console.log(i);
	}
}


// Дан некоторый массив, например, вот такой: Найдите сумму первой половины элементов этого массива.

let arr1 = [1, 2, 3, 4, 5, 6];

let sum1 = 0;
for (i = 0; i < arr1.length / 2; i++) {
	sum1 += arr1[i];
}
console.log(sum1);



//*------------------------------ Уровень 2.2 задачника JavaScript ------------------------------*/

// Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.

let arr21 = [-1, 0, 30, -4, 47, -359, 45, -3, -9];
let q = 0;
for (let elem of arr21) {
	if (elem < 0) {
		q++;
	}
}
console.log(q);


// Дан массив с числами. Оставьте в нем только положительные числа.

let arrNew21 = arr21.filter(function (el) {
	if (el > 0) {
		return true;
	}
})
console.log(arrNew21);


// Дана строка. Удалите предпоследний символ из этой строки.

let str23 = 'string';
let str23New = str23.slice(-2, -1);
console.log(str23New);


// Дан некоторый массив, например, вот такой: Поделите сумму первой половины элементов этого массива на сумму второй половины элементов.

let arr24 = [1, 2, 3, 4, 5, 6];
let res24 = 0;
let res25 = 0;

for (let i = 0; i < arr24.length / 2; i++) {
	res24 += arr24[i];
}
for (i = arr24.length / 2; i < arr24.length; i++) {
	res25 += arr24[i];
}
let resTotal = res24 / res25;
console.log(resTotal);



//*------------------------------ Уровень 2.3 задачника JavaScript ------------------------------*/

// Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.

let str31 = 'слово';
let str32 = 'олово'
if (str31[str31.length - 1] === str32[0]) {
	console.log(true);
} else {
	console.log(false)
};


// Дана некоторая строка. Найдите позицию третьего нуля в строке.

let str33 = 'dfy23f0fjhj0schjkjhh0djlaaldf0asdflfkadslf000adfjkl00';
let z = 0;
for (let i = 0; i < str33.length; i++) {
	if (str33[i] == 0) {
		z++;
		if (z === 3) {
			console.log(i)
			break;
		}
	}
}


// Даны числа, разделенные запятыми: Найдите сумму этих чисел.

let str34 = '12,34,56';
let arr34 = str34.split(',');
let sum34 = 0;
for (let elem of arr34) {
	sum34 += Number(elem);
}
console.log(sum34);


// Дана дата в следующем формате: Преобразуйте эту дату в следующий объект:

// {
// 	year: '2025',
// 	month: '12',
// 	day: '31',
// }

let date = '2025-12-31';
let obj = {};
let arr35 = date.split('-');
obj.year = arr35[0];
obj.month = arr35[1];
obj.day = arr35[2];
console.log(obj);




//*------------------------------ Уровень 2.4 задачника JavaScript ------------------------------*/

// Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.

let str41 = 'sfye5jfh4kgj3';
for (let i = 0; i < str41.length; i++) {
	if (/[0-9]/.test(str41[i]) == true) {
		console.log(i);
		break;
	}
}

for (let i = 0; i < str41.length; i++) {
	if (str41[i] >= 0 && str41[i] < 10) {
		console.log(i);
		break;
	}
}


// Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.

let obj42 = {
	name: 'Max',
	age: 32,
	salary: 2500
}
let arr421 = [];
for (let key in obj42) {
	arr421.push(obj42[key]);
}
let objKeys = Object.keys(obj42);
console.log(arr421);
console.log(objKeys);


// Дано число. Выведите в консоль количество четных цифр в этом числе.

let num43 = 45873952854;
let w = 0;
let str43 = String(num43);

for (i = 0; i < str43.length; i++) {
	if (str43[i] % 2 == 0) {
		w++;
	}
}
console.log(w);


// Дана некоторая строка: Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее: 'AbCdE'

let str44 = 'abcde';
let arr44 = [];
let str44New = '';

for (let i = 0; i < str44.length; i++) {
	if (i % 2 == 0) {
		arr44.push(str44[i].toUpperCase());
	} else {
		arr44.push(str44[i]);
	}
	str44New = arr44.join('');
}
console.log(str44New);


// Дана некоторая строка со словами: Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее:

let str45 = 'aaa bbb ccc';
let arr45 = str45.split(' ');
let arr45New = [];

for (let el of arr45) {
	let elem = el[0].toUpperCase();
	let elemNew = el.replace(el[0], elem);
	arr45New.push(elemNew);
}
let str45New = arr45New.join(' ')
console.log(arr45New);



//*------------------------------ Уровень 2.5 задачника JavaScript ------------------------------*/

// Дана некоторая строка, например, вот такая: Получите массив позиций всех нулей в этой в строке.

let str51 = '023m0df0dfg0';
let arr51 = [];

for (let i = 0; i < str51.length; i++) {
	if (str51[i] == 0) {
		arr51.push(i);
	}
}
console.log(arr51);


// Дана некоторая строка: Удалите из этой строки каждый третий символ.

let str52 = 'abcdefghi';
let str52New = '';
let arr52 = str52.split('');
let arr52New = [];

for (let i = 0; i < arr52.length; i++) {
	if ((i + 1) % 3 !== 0) {
		arr52New.push(arr52[i]);
	}
}
console.log(arr52New.join(''));


// Дан некоторый массив, например, вот такой: 
// Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях.

let arr53 = [1, 2, 3, 4, 5, 6];

let sum51 = 0;
let sum52 = 0;
for (let i = 0; i < arr53.length; i++) {
	if (i % 2 !== 0) {
		sum52 += arr53[i];
	} else {
		sum51 += arr53[i]
	}
}
let res53 = sum52 / sum51;
console.log(res53)



//*------------------------------ Уровень 2.6 задачника JavaScript ------------------------------*/

// Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки.

let code = 'f0ehe34w6lv5ry10';
let arrcode = [];
for (let i = 0; i < code.length; i++) {
	if (code[i] >= 0 && code[i] < 10) {
		arrcode.push(i);
	}
}
console.log(arrcode);


// Дан массив с некоторыми числами, например, вот такой: 
// Напишите код, который перевернет числа в этом массиве по следующему принципу:[321, 654, 987]

let arrnum = [123, 456, 789];
let arrnumNew = [];
for (let elem of arrnum) {
	let elNew = String(elem).split('').reverse().join('')
	arrnumNew.push(+elNew);
}
console.log(arrnumNew);


// Дана некоторая строка с числом: 
// Отделите тройки цифр пробелами, начиная с конца числа. В нашем случае должно получится следующее: '1 234 567 891 011 121'

let str63 = '1234567891011121';

function createSuperStr(str) {
	let arr = str.split('').reverse();
	let arrNew = [];
	for (let i = 0; i < arr.length; i++) {
		if ((i + 1) % 3 == 0) {
			arrNew.push(arr[i]);
			arrNew.push(' ');
		} else {
			arrNew.push(arr[i]);
		}
	}
	return arrNew.reverse().join('');
}

console.log(createSuperStr(str63));


// Дана некоторая строка:
// Смените регистр букв этой строки на противоположный.

let str64 = 'AbCdE';

function changeCase(str) {
	let arr = str.split('');
	let arrNew = [];
	for (let i = 0; i < str.length; i++) {
		if (str[i] === str[i].toUpperCase()) {
			arrNew.push(str[i].toLowerCase());
		} else {
			arrNew.push(str[i].toUpperCase());
		}
	}
	return arrNew.join('');
}

console.log(changeCase(str64));


// Дан некоторый массив с числами, например, вот такой: [1, 2, 3, 4, 5, 6]. Слейте пары элементов вместе: [12, 34, 56]

let arr65 = [1, 2, 3, 4, 5, 6];

let arr65New = [];
for (let i = 0; i < arr65.length; i = i + 2) {
	arr65New.push(Number(String(arr65[i]) + String(arr65[i + 1])))
}

console.log(arr65New)


// Дана некоторая строка со словами:
// Сделайте заглавным первый символ каждого второго слова в этой строке. В нашем случае должно получится следующее: 'aaa Bbb ccc Eee fff'

let str66 = 'aaa bbb ccc eee fff';

function createStr(str) {
	let arr = str.split(' ');

	for (let i = 1; i < arr.length; i = i + 2) {
		arr[i] = arr[i].substr(0, 1).toUpperCase() + arr[i].substr(1);
		console.log(arr[i]);
	}
	return arr.join(' ');
}

console.log(createStr(str66));


//*------------------------------ Уровень 2.7 задачника JavaScript ------------------------------*/

// Дана некоторая строка: 
// Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем. В нашем случае должно получится следующее: 'A BC DEF ghij'

let str71 = 'a bc def ghij';

function stringCase(str) {

	let arrNew = [];
	let arr = str.split(' ');
	for (let elem of arr) {
		if (elem.length <= 3) {
			elem = elem.toUpperCase();
			arrNew.push(elem)
		} else {
			arrNew.push(elem);
		}
	}
	return arrNew.join(' ')
}

console.log(stringCase(str71));


// Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.

let sym = Symbol.for('sdhkuek7392');

function checkSym(data) {

	let key = Symbol.keyFor(data);
	if (key === key.toLowerCase()) {
		console.log('true')
	} else {
		console.log('false')
	}
}

checkSym(sym);


// Дано некоторое число, например, такое: Удалите из этого числа все нечетные цифры. В нашем случае получится такой результат: 28

let num71 = 123789;

function delOod(num) {

	let arrNew = [];
	let arr = num.toString().split('');
	for (let el of arr) {
		if (el % 2 == 0) {
			arrNew.push(el);
		}
	}
	return arrNew.join('');
}

console.log(delOod(num71));



//*------------------------------ Уровень 2.8 задачника JavaScript ------------------------------*/

// Дана строка с буквами. Проверьте, что в этой строке не более двух заглавных букв.

let str81 = 'gjrjoQmkkT';

function checkUppCase(str) {

	let s = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i] === str[i].toUpperCase()) {
			s++;
		}
	}
	if (s > 2) {
		console.log('false')
	} else {
		console.log('true')
	}
}

checkUppCase(str81);


// Удалите из этой строки все подстроки, в которых количество символов больше трех. В нашем случае должно получится следующее: '1 22 333 22 1'

let str82 = '1 22 333 4444 22 5555 1';

function chekThreeNum(str) {
	let arrNew = [];
	let arr = str.split(' ');
	for (let el of arr) {
		if (el.length <= 3) {
			arrNew.push(el);
		}
	}
	return arrNew.join(' ');
}

console.log(chekThreeNum(str82));


// Даны два массива: Слейте эти массивы в новый массив следующим образом: [1, 2, 'a', 'b', 'c', 3]

let arr83 = [1, 2, 3];
let arr84 = ['a', 'b', 'c'];

function joinArr(arr1, arr2) {
	let arr = [];
	for (let el of arr2) {
		arr.push(el);
	}
	for (let i = 2; i >= 0; i--) {
		if (arr1[i] < 3) {
			arr.unshift(arr1[i]);
		} else {
			arr.push(arr1[i]);
		}
	}
	return arr;
}
console.log(joinArr(arr83, arr84));



//*------------------------------ Уровень 2.9 задачника JavaScript ------------------------------*/

// Дано некоторое число: 123456. Найдите сумму пар цифр этого числа. В нашем случае имеется ввиду следующее: 12 + 34 + 56

let num91 = 123456;

function sumNum(num) {
	let str = String(num);
	let sum = 0;
	for (let i = 0; i < str.length; i = i + 2) {
		sum += Number(str[i] + str[i + 1])
	}
	return sum;
}

console.log(sumNum(num91));


// Дан массив с числами: [1, 2, 3, 4, 5] Выведите в консоль элементы этого массива в обратном порядке.

let arr92 = [1, 2, 3, 4, 5];

function revArr(arr) {
	return arr.reverse().join(', ');
}
console.log(revArr(arr92));



//*------------------------------ Уровень 3.0 задачника JavaScript ------------------------------*/

// Дана строка с буквами и цифрами. Проверьте, что в этой строке не более трех букв.

let str100 = '2ug4323334e85';

function checkMyStr(str) {
	t = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i] >= 0 && str[i] < 10) {
			t = t;
		} else {
			t++;
		}
	}
	if (t < 4) {
		return true;
	} else {
		return false;
	}
}

console.log(checkMyStr(str100));


// Дано число. Получите первую четную цифру с конца этого числа.

let num101 = 15479348547995;

function getNumEven(num) {
	let str = num.toString();
	for (let i = str.length - 1; i >= 0; i--) {
		if (str[i] % 2 == 0) {
			return str[i];
		}
	}
}

console.log(getNumEven(num101));


// Дана некоторая строка: 'abcde abcde abcde'. 
// Замените в ней первый символ каждого слова на '!': '!bcde !bcde !bcde'

let str103 = 'abcde abcde abcde';

function strReplace(str) {
	let arr = str.split(' ');
	let newArr = [];
	for (let el of arr) {
		el = el.replace(el[0], '!');
		newArr.push(el);
	}
	return newArr.join(' ')
}

console.log(strReplace(str103));


// Дан массив с числами: Проверьте, что в этом массиве есть два одинаковых элемента подряд.

let arr104 = [1, 2, 3, 3, 4, 5];

function checkTwoNum(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === arr[i + 1]) {
			return true;
		}
	}
	return false;
}
console.log(checkTwoNum(arr104));












