// VARIABLE DECLARATION

const urlEl = document.getElementById("url-el")
const itemNameEl = document.getElementById("item-name-el")
const saveInputBtn = document.getElementById("save-input-btn")
const saveTabBtn = document.getElementById("save-tab-btn")
const deleteAllBtn = document.getElementById("delete-all-btn")
const warningEl = document.getElementById("warning-el")
const ulEl = document.getElementById("ul-el")
const urlFromLocalStorage = JSON.parse(localStorage.getItem("myURLs"))
const itemFromLocalStorage = JSON.parse(localStorage.getItem("myItems"))
const currentURLFromLocalStorage = localStorage.getItem("myCurrentURL")
const currentItemFromLocalStorage = localStorage.getItem("myCurrentItem")

let myURLs = []
let myItems = []


// Load localStorage on refresh if true

if (currentURLFromLocalStorage && currentItemFromLocalStorage) {
    urlEl.value = currentURLFromLocalStorage
    itemNameEl.value = currentItemFromLocalStorage
}

if (urlFromLocalStorage && itemFromLocalStorage) {
    myURLs = urlFromLocalStorage
    myItems = itemFromLocalStorage
    render(myURLs, myItems)
}


// render() function

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


// Save input fields to localStorage

urlEl.addEventListener("input", function() {
    if (urlEl.value) {
        localStorage.setItem("myCurrentURL", urlEl.value)
    }
})

itemNameEl.addEventListener("input", function() {
    if (itemNameEl.value) {
        localStorage.setItem("myCurrentItem", itemNameEl.value)
    }
})


// "SAVE INPUT" LOGIC

function saveInput() {
    if (urlEl.value && itemNameEl.value) {
        warningEl.textContent = ""
        myURLs.push(urlEl.value)
        myItems.push(itemNameEl.value)
        urlEl.value = ""
        itemNameEl.value = ""
        localStorage.setItem("myURLs", JSON.stringify(myURLs))
        localStorage.setItem("myItems", JSON.stringify(myItems))
        render(myURLs, myItems)
    } else if (urlEl.value && !itemNameEl.value) {
        warningEl.textContent = ""
        myURLs.push(urlEl.value)
        myItems.push(urlEl.value)
        urlEl.value = ""
        localStorage.setItem("myURLs", JSON.stringify(myURLs))
        localStorage.setItem("myItems", JSON.stringify(myItems))
        render(myURLs, myItems)
    } else {
        warningEl.textContent = "Please enter a URL."
    }
    localStorage.setItem("myCurrentURL", "")
    localStorage.setItem("myCurrentItem", "")
}

saveInputBtn.addEventListener("click", function() {
    saveInput()
})

urlEl.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        saveInput()
    }
})

itemNameEl.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        saveInput()
    }
})


// "SAVE TAB" LOGIC

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


// "DELETE ALL" LOGIC

deleteAllBtn.addEventListener("dblclick", function() {
    warningEl.textContent = ""
    myURLs = []
    myItems = []
    localStorage.clear()
    render(myURLs, myItems)
})