const dummyTransaction = [
  { id: 1, name: "Bolo de brigadeiro", amount: -20 },
  { id: 2, name: "Salário", amount: 300 },
  { id: 3, name: "Torta de frango", amount: -10 },
  { id: 3, name: "Violão", amount: -150 },
];

const transactions = document.getElementById("transactions");

const addTransactionIntoDOM = (transaction) => {
  transactions.innerHTML =
    transactions.innerHTML +
    `<li class="
    ${valueCheck(transaction.amount) ? "plus" : "minus"}
    ">${transaction.name} <span class="moneyValue"><span>R$</span> <span>${
      transaction.amount
    }</span></span><button class="delete-btn">x</button></li>`;
  const ultimaLI = document.querySelector("#transactions li:last-child");
  const deleteBtnAtual = ultimaLI.querySelector(".delete-btn");
  deleteBtnAtual.addEventListener("click", function (e) {
    console.log("fdssdfsd");
  });
  console.log(transaction.name);
};

const valueCheck = (value) => {
  if (value > 0) {
    return true;
  }
};

//console.log(dummyTransaction[0]);

dummyTransaction.map((item) => {
  addTransactionIntoDOM(item);
});
