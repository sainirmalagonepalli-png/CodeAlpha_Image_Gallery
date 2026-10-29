const displayEl = document.getElementById("display");
const historyEl = document.getElementById("history");
const symbols = { "+": "+", "-": "−", "*": "×", "/": "÷" };

let current = "0";     // number being typed
let previous = null;   // stored first operand
let operator = null;   // pending operator
let justEvaluated = false;

function update() {
  displayEl.textContent = current;
  historyEl.textContent = operator ? `${previous} ${symbols[operator]}` : "";
}

function inputNumber(n) {
  if (justEvaluated) { current = "0"; justEvaluated = false; }
  current = current === "0" ? n : current + n;
  update();
}

function inputDot() {
  if (justEvaluated) { current = "0"; justEvaluated = false; }
  if (!current.includes(".")) current += ".";
  update();
}

function calculate(a, b, op) {
  a = parseFloat(a); b = parseFloat(b);
  switch (op) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return b === 0 ? "Error" : a / b;
  }
}

function format(value) {
  if (value === "Error") return value;
  return String(parseFloat(value.toPrecision(12)));
}

function chooseOperator(op) {
  if (current === "Error") return;
  if (operator && !justEvaluated) {
    current = format(calculate(previous, current, operator));
    if (current === "Error") { operator = null; previous = null; update(); return; }
  }
  previous = current;
  operator = op;
  current = "0";
  justEvaluated = false;
  update();
}

function equals() {
  if (!operator) return;
  const result = format(calculate(previous, current, operator));
  historyEl.textContent = `${previous} ${symbols[operator]} ${current} =`;
  current = result;
  operator = null;
  previous = null;
  justEvaluated = true;
  displayEl.textContent = current;
}

function clearAll() {
  current = "0"; previous = null; operator = null; justEvaluated = false;
  update();
}

function backspace() {
  if (justEvaluated || current === "Error") { clearAll(); return; }
  current = current.length > 1 ? current.slice(0, -1) : "0";
  update();
}

function percent() {
  if (current === "Error") return;
  current = format(parseFloat(current) / 100);
  update();
}

// Mouse / touch support
document.querySelector(".keys").addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;
  if (btn.dataset.num !== undefined) inputNumber(btn.dataset.num);
  else if (btn.dataset.op) chooseOperator(btn.dataset.op);
  else {
    const actions = { clear: clearAll, back: backspace, dot: inputDot, equals, percent };
    actions[btn.dataset.action]();
  }
});

// Keyboard support (bonus)
function flash(selector) {
  const btn = document.querySelector(selector);
  if (!btn) return;
  btn.classList.add("pressed");
  setTimeout(() => btn.classList.remove("pressed"), 120);
}

document.addEventListener("keydown", (e) => {
  const k = e.key;
  if (k >= "0" && k <= "9") { inputNumber(k); flash(`[data-num="${k}"]`); }
  else if (["+", "-", "*", "/"].includes(k)) {
    e.preventDefault(); chooseOperator(k); flash(`[data-op="${k}"]`);
  }
  else if (k === "." ) { inputDot(); flash('[data-action="dot"]'); }
  else if (k === "Enter" || k === "=") { e.preventDefault(); equals(); flash('[data-action="equals"]'); }
  else if (k === "Backspace") { backspace(); flash('[data-action="back"]'); }
  else if (k === "Escape" || k.toLowerCase() === "c") { clearAll(); flash('[data-action="clear"]'); }
  else if (k === "%") { percent(); flash('[data-action="percent"]'); }
});

update();