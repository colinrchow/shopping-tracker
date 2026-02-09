const urlEl = document.getElementById("url-el")
const itemNameEl = document.getElementById("item-name-el")
const saveInputBtn = document.getElementById("save-input-btn")
const saveTabBtn = document.getElementById("save-tab-btn")
const deleteAllBtn = document.getElementById("delete-all-btn")
const warningEl = document.getElementById("warning-el")
const ulEl = document.getElementById("ul-el")
const urlFromLocalStorage = JSON.parse(localStorage.getItem("myURLs"))
const itemFromLocalStorage = JSON.parse(localStorage.getItem("myItems"))

let myURLs = []
let myItems = []

if (urlFromLocalStorage && itemFromLocalStorage) {
    myURLs = urlFromLocalStorage
    myItems = itemFromLocalStorage
    render(myURLs, myItems)
}

function render(url, item) {
    let listUl = ""
    for (let i = 0; i < url.length; i++) {
        listUl += `
        <li>
            <a href="${url[i]}" target="_blank">
                ${item[i]}
            </a>
        `
    }
    ulEl.innerHTML = listUl
}

saveInputBtn.addEventListener("click", function() {
    warningEl.textContent = ""

    if (urlEl.value && itemNameEl.value) {
        myURLs.push(urlEl.value)
        myItems.push(itemNameEl.value)
        urlEl.value = ""
        itemNameEl.value = ""
        localStorage.setItem("myURLs", JSON.stringify(myURLs))
        localStorage.setItem("myItems", JSON.stringify(myItems))
        render(myURLs, myItems)
    } else if (urlEl.value && !itemNameEl.value) {
        warningEl.textContent = "Please enter a name for your URL."
    } else {
        warningEl.textContent = "Please enter a URL."
    }
})

saveTabBtn.addEventListener("click", function() {
    warningEl.textContent = ""

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myURLs.push(tabs[0].url)
        myItems.push(tabs[0].title)
        localStorage.setItem("myURLs", JSON.stringify(myURLs))
        localStorage.setItem("myItems", JSON.stringify(myItems))
        render(myURLs, myItems)
    })
})

deleteAllBtn.addEventListener("dblclick", function() {
    warningEl.textContent = ""
    myURLs = []
    myItems = []
    localStorage.clear()
    render(myURLs, myItems)
})