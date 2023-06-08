const errorPeople = document.querySelector(".hidden_p");
const errorBill = document.querySelector(".hidden_b");

// Inputs
const billInput = document.querySelector(".bill_input");
const peopleInput = document.querySelector(".people_input");
const customInput = document.querySelector(".custom");

// Amounts

const amountPerson = document.querySelector(".amount_person");
const amountTotal = document.querySelector(".amount_total");

// Buttons
const tipsButton = document.querySelector(".tips");
const reset = document.querySelector(".button");

// Tips Buttons

const cinci = document.querySelector(".cinci");
const zece = document.querySelector(".zece");
const cincisprezece = document.querySelector(".cincisprezece");
const douazecisicinci = document.querySelector(".douazecisicinci");
const cincizeci = document.querySelector(".cincizeci");
const custom = document.querySelector(".custom");

//////////////////////Function////////////////////
const switcher = function (
  amount,
  buttonName,
  buttonName1,
  buttonName2,
  buttonName3,
  buttonName4,
  buttonName5
) {
  amountTotal.textContent = `$${((amount / 100) * billInput.value).toFixed(2)}`;
  amountPerson.textContent = `$${(
    ((amount / 100) * billInput.value).toFixed(2) / peopleInput.value
  ).toFixed(2)}`;
  errorBill.classList.add("hidden");
  errorPeople.classList.add("hidden");

  if (!buttonName.classList.contains("color")) {
    buttonName.classList.add("color");

    buttonName1.classList.remove("color");
    buttonName2.classList.remove("color");
    buttonName3.classList.remove("color");
    buttonName4.classList.remove("color");
    buttonName5.classList.remove("color");
  }
};
//////////////////////Function////////////////////

tipsButton.addEventListener("click", function (e) {
  if (
    peopleInput.value > 0 &&
    billInput.value > 0 &&
    e.target.classList.contains("cinci")
  ) {
    switcher(5, cinci, zece, cincisprezece, douazecisicinci, cincizeci, custom);
  }

  if (
    peopleInput.value > 0 &&
    billInput.value > 0 &&
    e.target.classList.contains("zece")
  ) {
    switcher(
      10,
      zece,
      cinci,
      cincisprezece,
      douazecisicinci,
      cincizeci,
      custom
    );
  }

  if (
    peopleInput.value > 0 &&
    billInput.value > 0 &&
    e.target.classList.contains("cincisprezece")
  ) {
    switcher(
      15,
      cincisprezece,
      cinci,
      zece,
      douazecisicinci,
      cincizeci,
      custom
    );
  }

  if (
    peopleInput.value > 0 &&
    billInput.value > 0 &&
    e.target.classList.contains("douazecisicinci")
  ) {
    switcher(
      25,
      douazecisicinci,
      cinci,
      zece,
      cincisprezece,
      cincizeci,
      custom
    );
  }

  if (
    peopleInput.value > 0 &&
    billInput.value > 0 &&
    e.target.classList.contains("cincizeci")
  ) {
    switcher(
      50,
      cincizeci,
      cinci,
      zece,
      cincisprezece,
      douazecisicinci,
      custom
    );
  }

  if (
    peopleInput.value > 0 &&
    billInput.value > 0 &&
    e.target.classList.contains("custom")
  ) {
    switcher(
      customInput.value,
      customInput,
      cinci,
      zece,
      cincisprezece,
      douazecisicinci,
      cincizeci
    );
  }

  if (billInput.value <= 0) {
    errorBill.classList.remove("hidden");
    cinci.classList.remove("color");
    zece.classList.remove("color");
    cincisprezece.classList.remove("color");
    douazecisicinci.classList.remove("color");
    cincizeci.classList.remove("color");
  }

  if (peopleInput.value <= 0) {
    errorPeople.classList.remove("hidden");
    cinci.classList.remove("color");
    zece.classList.remove("color");
    cincisprezece.classList.remove("color");
    douazecisicinci.classList.remove("color");
    cincizeci.classList.remove("color");
  }

  if (billInput.value > 0) {
    errorBill.classList.add("hidden");
  }
  if (peopleInput.value > 0) {
    errorPeople.classList.add("hidden");
  }
});

reset.addEventListener("click", function () {
  cinci.classList.remove("color");
  zece.classList.remove("color");
  cincisprezece.classList.remove("color");
  douazecisicinci.classList.remove("color");
  cincizeci.classList.remove("color");
  custom.classList.remove("color");
  cinci.classList.remove("color");
  billInput.value = "";
  peopleInput.value = "";
  customInput.value = "";
  errorPeople.classList.add("hidden");
  errorBill.classList.add("hidden");
  amountPerson.textContent = "$0.00";
  amountTotal.textContent = "$0.00";
});
