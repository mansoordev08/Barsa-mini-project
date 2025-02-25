document.getElementById("btn").addEventListener("click", function () {
  let infoText = document.getElementById("infotext");

  if (infoText.classList.contains("show")) {
    infoText.classList.remove("show"); // Скрываем текст
    this.textContent = "Подробнее"; // Меняем текст кнопки обратно
  } else {
    infoText.classList.add("show"); // Показываем текст
    this.textContent = "Скрыть"; // Меняем текст кнопки
  }
});
