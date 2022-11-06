class Button {
  constructor(width, height, type, color) {
    this.width = width;
    this.height = height;
    this.type = type;
    this.color = color;
    this.props = [this.width, this.height, this.type, this.color];
  }

  onClick() {
    console.log("Информация о кнопке:");
    console.log(this.props);
  }
}

let NewButton = new Button(57, 24, "button", "green");
NewButton.onClick();

let testButton = function () {
  if (
    NewButton.width == 57 &&
    NewButton.height == 24 &&
    NewButton.type == "button" &&
    NewButton.color == "green"
  ) {
    console.log("Cвойства экземпляра NewButton соответствуют заданным");
  } else {
    console.log("Аларм! Ошибка! Срочный дебаг!");
  }
};
testButton();
