const players = [
  { id: 1, name: "Ivan", scorePoints: 4500 },
  { id: 2, name: "Petr", scorePoints: 3600 },
  { id: 3, name: "Vadim", scorePoints: 3433 },
  { id: 4, name: "Olga", scorePoints: 2356 },
];

// let maxScorePoints = 0;
// for (let player of players) {
//   maxScorePoints = Math.max(maxScorePoints, player.scorePoints);
// }
// console.log(`Максимально значение scorePoints = ${maxScorePoints}`);

let scores = []; //задаем новый пустой массив и далее запушим в него нужные нам свойства
let maxScorePoints = 0;
for (let player of players) {
  maxScorePoints = player.scorePoints;
  scores.push(maxScorePoints); //пушим нужные нам свойства
}
console.log(Math.max(...scores)); //spread-оператор вливает нам значения массива в нужное меcто в нашем случае в метод, но можно влить и в новый массив)

switch (maxScorePoints) {
  case players[0].scorePoints:
    console.log("Игрок с максимальным количеством scorePoints:");
    console.log(players[0]);
    console.log("Браво");
    break;
  case players[1].scorePoints:
    console.log("Игрок с максимальным количеством scorePoints:");
    console.log(players[1]);
    console.log("Браво");
    break;
  case players[2].scorePoints:
    console.log("Игрок с максимальным количеством scorePoints:");
    console.log(players[2]);
    console.log("Браво");
    break;
  case players[3].scorePoints:
    console.log("Игрок с максимальным количеством scorePoints:");
    console.log(players[3]);
    console.log("Браво");
    break;
  default:
    console.log("Жаль, но ищите ошибку в коде");
}
