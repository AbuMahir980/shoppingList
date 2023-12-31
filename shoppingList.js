const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
	const myItem = input.value.toLowerCase();
	input.value = "";

	const listItem = document.createElement("li");
	const listText = document.createElement("span");
	const delBtn = document.createElement("button");

	listItem.appendChild(listText);
	listText.textContent = myItem;
	listItem.appendChild(delBtn);
	delBtn.textContent = "Delete";
	list.appendChild(listItem);

	delBtn.addEventListener("click", () => {
		list.removeChild(listItem);
	});

	input.focus();
});
