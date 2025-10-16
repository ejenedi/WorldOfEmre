/* 
   Emre Jenedi
  Date: 10/12/2025
*/

 const inbox = document.getElementById('inbox');
const addBtn = document.getElementById('addBtn');
const deleteBtn = document.getElementById('deleteBtn');
const resetBtn = document.getElementById('resetBtn');
const inputField = document.getElementById('newItemText');

function addItem() {
  const text = inputField.value.trim();
  if (text === "") return;
  const div = document.createElement('div');
  div.classList.add('item');
  div.innerHTML = `
    <input type="checkbox">
    <p>${text}</p>
  `;
  inbox.appendChild(div);
  inputField.value = "";
}

function deleteSelected() {
  const checkboxes = inbox.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(box => {
    if (box.checked) {
      box.parentElement.remove();
    }
  });
}

function resetChecklist() {
  const checkboxes = inbox.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(box => {
    box.checked = false;
  });
}

addBtn.addEventListener('click', addItem);
deleteBtn.addEventListener('click', deleteSelected);
resetBtn.addEventListener('click', resetChecklist);
inputField.addEventListener('keydown', (e) => {
  if (e.key === "Enter") {
    addItem();
  }
});
