const items = []

function addItem() {
    const itenName = document.querySelector("#item").value

    const item = {
     name: itemName,
    checked: false   
    } 

    itens.push(item)

    document.querySelector("#item").value = ""
}