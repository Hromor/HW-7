let postamat = [null, null, null, "4 - ваша посылка", null];
let perScore = 100;
let payForPocket = 100;
let smsUniqCod = "A001DFX0";

function robotPostamat(smsCod, callback) {
  console.log(
    `Ваша посылка находится в ячейке под номером 4. SMS код = ${smsCod}`
  );
  callback();
  if (smsCod === "A001DFX0") {
    perScore -= payForPocket;
    console.log(
      `Вы получили посылку из ячейки 4, и ваш счет составляет: ${perScore} р.`
    );
    console.log(postamat[3]);
  } else {
    console.log("Enter correct code =(");
  }
}

robotPostamat(smsUniqCod, function () {
  console.log(
    `Введите код ${smsUniqCod}, чтобы получить посылку. С вас спишется ${payForPocket} руб`
  );
});
