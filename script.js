/*const dummyTransaction = [
  { id: 1, name: "Bolo de brigadeiro", amount: -20 },
  { id: 2, name: "Salário", amount: 300 },
  { id: 3, name: "Torta de frango", amount: -10 },
  { id: 3, name: "Violão", amount: -150 },
];*/

const url =
  "https://my-json-server.typicode.com/mnerisilva/fake-api/transacoes";

fetch(url)
  .then((resp) => resp.json())
  .then((data) => {
    data.map((item) => {
      addTransactionIntoDOM(item);
    });
  });

const ulTransactions = document.querySelector("#transactions");

const addTransactionIntoDOM = (transaction) => {
  const operator = transaction.amount < 0 ? "-" : "+";
  const CSSClass = transaction.amount < 0 ? "minus" : "plus";
  const li = document.createElement("li");
  li.classList.add(CSSClass);
  li.innerHTML = `${transaction.name} <span>R$ ${Math.abs(
    transaction.amount
  )}${operator}</span><button class="delete-btn">x</button>`;
  ulTransactions.append(li);
};
