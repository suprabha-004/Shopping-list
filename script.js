const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const clearBtn = document.getElementById("clear");
const itemFilter = document.getElementById("filter");

// const items = document.querySelectorAll('li')

function addItem(event) {
    event.preventDefault();

    const newValue = itemInput.value;

    if (newValue === "") {
        alert("Please enter the Item");
        return;
    }

    const li = document.createElement("li");
    li.appendChild(document.createTextNode(newValue));

    const button = createButton("remove-item btn-link text-red");

    li.appendChild(button);

    itemList.appendChild(li);

    checkUI();

    itemInput.value = "";
}

function createButton(classes) {
    const btn = document.createElement('button');
    btn.className = classes;

    const icon = createIcon("fa-solid fa-xmark");
    btn.appendChild(icon);
    return btn;
}

function createIcon(classes) {
    const icon = document.createElement("i");
    icon.className = classes;
    return icon;
}

function removeItem(event) {
    if (event.target.parentElement.classList.contains("remove-item")) {
        event.target.parentElement.parentElement.remove();
    }
    checkUI();
}

function removeItems() {
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }

    checkUI();
}

function filterItem(event) {
    const items = document.querySelectorAll("li");
    const text = event.target.value.toLowerCase();

    // document.querySelector('#button').disabled = true;

    items.forEach((item) => {
        const itemName = item.firstChild.textContent.toLowerCase();

        if (itemName.indexOf(text) != -1) {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    });
    console.log("hello")
}

function checkUI() {
    const items = document.querySelectorAll("li");
    if (items.length === 0) {
        itemFilter.style.display = "none";
        clearBtn.style.display = "none";
    } else {
        itemFilter.style.display = "block";
        clearBtn.style.display = "block";
    }
}
itemForm.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
clearBtn.addEventListener("click", removeItems);
itemFilter.addEventListener("input", filterItem);

checkUI();