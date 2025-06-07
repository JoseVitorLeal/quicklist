let items = []

function addItem() {
    const itemName = document.querySelector("#item").value.trim()

    if (itemName === "") {
        alert("Digite um item válido!")
        return
    }

    const item = {
        name: itemName,
        checked: false
    }

    items.push(item)

    document.querySelector("#item").value = ""
    showItemsList()
}

function showItemsList() {
    const sectionList = document.querySelector(".list")
    sectionList.innerHTML = ""

    items.sort((itemA, itemB) => Number(itemA.checked) - Number(itemB.checked))

    items.forEach((item, index) => {
        sectionList.innerHTML += `
            <div class="item">
                <div>
                    <input type="checkbox" id="item-${index}" ${item.checked ? "checked" : ""} onclick="checkItem('${item.name}')">
                    <div class="custom-checkbox" onclick="checkItem('${item.name}')"></div>
                    <label for="item-${index}">${item.name}</label>
                </div>
                <button onclick="removeItem('${item.name}')">
                    <img src="./assets/trash-icon.svg" alt="trash icon">
                </button>
            </div>
        `
    })

    localStorage.setItem("items", JSON.stringify(items))
}

function removeItem(itemName) {
    const itemIndex = items.findIndex((item) => item.name === itemName)
    const divWarning = document.querySelector(".warning")

    divWarning.classList.remove("hide-warning")

    setTimeout(() => {
        divWarning.classList.add("hide-warning")
    }, 4000)

    if (itemIndex !== -1) {
        items.splice(itemIndex, 1)
    }

    showItemsList()
}

function addHideWarningClass() {
    document.querySelector(".warning").classList.add("hide-warning")
}

function checkItem(itemName) {
    const item = items.find((item) => item.name === itemName)
    item.checked = !item.checked
    showItemsList()
}

function verifyLocalStorageItems() {
    const localStorageItems = localStorage.getItem("items")

    if (localStorageItems) {
        items = JSON.parse(localStorageItems)
        showItemsList()
    }
}

verifyLocalStorageItems()
