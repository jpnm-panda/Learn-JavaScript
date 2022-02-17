// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き"
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// let val2 = 'let変数を再宣言';

// const val3 = "const変数";
// console.log(val3);

// // val3 = "const変数を上書き";

// const val3 = "const変数を再宣言";

// const val4 = {
//     name: "Panda",
//     age: "3",
// };

// console.log(val4);

// val4.name = "Panda-san";

// console.log(val4);

// val4.address = "Ueno-Zoo";
// console.log(val4);

// const val5 = ['dog', 'cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/* 
 テンプレート文字列
*/
// const name = "Panda";
// const age = 5;
// // 「私の名前はPandaです。年齢は5歳です。」

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/* 
 アロー関数
*/

// 従来の関数
// function func1(str) {
//     return str;
// }
// const func1 = function (str) {
//     return str;
// };

// console.log(func1("func1です"));

// アロー関数
// const func2 = (str) => {
//     return str;
// };

// console.log(func2("func2です"));

// const func3 = (num1, num2) => num1 + num2;

// console.log(func3(10, 30));

/**
 * 分割代入
 */
// const myProfile = {
//     name: "Panda",
//     age: 5
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const {
//     name,
//     age
// } = myProfile;

// const message2 = `名前は${name}です。年齢は${age}歳です。`;

// console.log(message2);

const myProfile = ['Panda', 5];

const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
console.log(message3);

const [name, age] = myProfile;

const message4 = `名前は${name}です。年齢は${age}歳です。`;
console.log(message4);
