let calcForm = document.querySelector("#calc-form");
let result = document.querySelector("#calc-res");

let calc = () => {
  let input1 = document.querySelector("#calc-input-0");
  let input2 = document.querySelector("#calc-input-1");
  let opr = document.querySelector('input[name="opr"]:checked');

  let num1 = parseFloat(input1.value);
  let num2 = parseFloat(input2.value);

  let op = opr.id;

  let result;
  switch (op) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      alert("Invalid Selection");
  }
  displayAns(num1, num2, op, result.toFixed(2));
};

let displayAns = (num1, num2, opr, ans) => {
  result.innerHTML = "";

  let col = document.createElement("div");
  col.classList.add("col-12");

  let head = document.createElement("p");
  head.classList.add("fs-5");
  head.classList.add("mb-1");
  head.innerText = "Answer";

  let subhead = document.createElement("p");
  subhead.classList.add("mb-1");
  subhead.classList.add("text-body-secondary");
  subhead.innerText = `${num1} ${opr} ${num2}`;

  let res = document.createElement("input");
  res.classList.add("form-control");
  res.classList.add("mb-3");
  res.type = "number";
  res.value = ans;
  res.disabled = true;

  col.appendChild(head);
  col.appendChild(subhead);
  col.appendChild(res);

  result.appendChild(col);
};

calcForm.addEventListener("submit", (e) => {
  e.preventDefault();

  calc();
});
