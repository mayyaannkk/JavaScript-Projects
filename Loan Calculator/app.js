const loan = document
  .querySelector("#loan-form")
  .addEventListener("submit", calculate);

function calculate(e) {
  e.preventDefault();

  const loading = document.querySelector("#loading");
  const results = document.querySelector("#results");
  results.style.display = "none";
  loading.style.display = "block";
  setTimeout(calculateResults, 2000);
}

function calculateResults() {
  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");
  const monthlyPayment = document.getElementById("monthly-payment");
  const totalPayment = document.getElementById("total-payment");
  const totalInterest = document.getElementById("total-interest");

  let principal = parseFloat(amount.value);
  let calculatedInterest = parseFloat(interest.value) / 100 / 12;
  let calculatedPayments = parseFloat(years.value) * 12;

  let x = Math.pow(1 + calculatedInterest, calculatedPayments);
  let monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    document.querySelector("#loading").style.display = "none";
    document.querySelector("#results").style.display = "block";
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);
  } else {
    showError("Please check your numbers");
  }
}

function showError(error) {
  document.querySelector("#loading").style.display = "none";
  const errorDiv = document.createElement("div");
  errorDiv.className = "alert alert-danger";
  errorDiv.appendChild(document.createTextNode(error));
  const card = document.querySelector(".card");
  card.insertBefore(errorDiv, card.firstChild);

  setTimeout(removeError, 3000);
}

function removeError() {
  document.querySelector(".alert").remove();
}
