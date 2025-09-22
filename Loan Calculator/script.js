let ButtonEl = document.getElementById("btn");

ButtonEl.addEventListener("click", () => {
   let loanAmountValue = document.getElementById("loan-amount").value;
   let interestRateValue = document.getElementById("interest-rate").value;
   let MonthsToPayValue = document.getElementById("months-to-pay").value;

   let interest = (loanAmountValue * (interestRateValue * 0.01)) / MonthsToPayValue;
   let monthlyPayment = (loanAmountValue / MonthsToPayValue + interest).toFixed(2);

   let total = document.getElementById("payment").innerHTML = `Monthly Payment: ${monthlyPayment}`;
   console.log(total);
   
});