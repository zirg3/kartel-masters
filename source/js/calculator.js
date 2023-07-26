// Калькулятор

let calculatorRange = document.querySelector(".hero__calc-area-range");

if (calculatorRange) {
  let calculatorNumber = document.querySelector(".hero__calc-area-input");
  let constructionType = document.querySelector("#construction-type");
  let repaireType = document.querySelector("#repair-type");
  let objectType = document.querySelectorAll("[name=hrepairtype]");
  let additionalType = document.querySelectorAll(".hero__calc-item--control");
  let priceFileld = document.querySelector(".hero__calc-total-js");
  let dateFromFileld = document.querySelector(".hero__calc-period-from");
  let dateToFileld = document.querySelector(".hero__calc-period-to");

  let typeCoeff = 0; //Коэффициент вид ремонта (косметический/евро/ и тд)
  let constructionCoeff = 0; //Коэффициент тип помещения (квартира/офис и тд)
  let objectCoeff = 0; // Коэффициент новотройка/вторичка
  let additionalCoeff = 0; // Коэффициент доп услуги
  let totalCoeff = 0; // Суммарный коэффициент
  let repairSpace = 0; // Площадь помещения
  let totalPrice = 0; // Стоимость
  let daysFrom = 0;
  let daysTo = 0;

  function calcUpdate() {
    typeCoeff = parseFloat(repaireType.value);
    constructionCoeff = parseFloat(constructionType.value);
    objectCoeff = parseFloat(document.querySelector("[name=hrepairtype]:checked").value);
    additionalCoeff = 1 + calculateAdditional();
    totalCoeff = typeCoeff * constructionCoeff * objectCoeff * additionalCoeff;
    repairSpace = parseInt(calculatorRange.value);
    totalPrice = (totalCoeff * repairSpace).toFixed(0);
    daysFrom = (totalPrice / 10000).toFixed(0);
    daysTo = (totalPrice / 7000).toFixed(0);
    totalPrice = (totalPrice * 0.09).toFixed(0);

    priceFileld.textContent = addSpace(totalPrice);
    dateFromFileld.textContent = daysFrom;
    dateToFileld.textContent = daysTo;
  }

  calcUpdate();

  calculatorRange.addEventListener('input', () => {
    calculatorNumber.value = calculatorRange.value;
    repairSpace = parseInt(calculatorNumber.value);
    calcUpdate();
  });

  calculatorNumber.addEventListener('input', () => {
    calculatorRange.value = calculatorNumber.value;
    repairSpace = parseInt(calculatorRange.value);
    calcUpdate();
  });

  repaireType.addEventListener('input', () => {
    typeCoeff = parseFloat(repaireType.value);
    calcUpdate();
  });

  constructionType.addEventListener('input', () => {
    constructionCoeff = parseFloat(constructionType.value);
    calcUpdate();
  });

  objectType.forEach(
    (item) => {
      item.addEventListener('input', (e) => {
        objectCoeff = parseFloat(item.value);
        calcUpdate();
      });
    });

  additionalType.forEach(
    (item) => {
      item.addEventListener('input', (e) => {
        additionalCoeff = calculateAdditional();
        calcUpdate();
      });
    });

  function calculateAdditional() {
    let coeff = 0;
    additionalType.forEach(
      (item) => {
        if (item.checked) {
          coeff += parseFloat(item.value);
        }
      });
    return coeff;
  }
}
