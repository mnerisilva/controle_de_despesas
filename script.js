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
    ">${transaction.name} <span>- R$ ${
      transaction.amount
    }</span><button class="delete-btn">x</button></li>`;
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
