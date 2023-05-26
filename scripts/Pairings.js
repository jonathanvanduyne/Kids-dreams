import { getChildren, getCelebrities } from "./database.js"

const kids = getChildren()
const celebrities = getCelebrities()

const findCelebrityMatch = (kidObject, celebrityArray) => {
    let pickedCelebrity = null

    for (const celebrity of celebrityArray) {
        if (celebrity.id === kidObject.celebrityId) {
            pickedCelebrity = celebrity
        }
    }

    return pickedCelebrity
}

export const Pairings = () => {
    let html = ""
    html += "<ul>"

    for (const kid of kids) {
        const kidsStar = findCelebrityMatch(kid, celebrities)
        html += `
            <li data-type="pairing" data-childname="${kid.name}" data-celebrityname="${kidsStar.name}" data-celebritysport="${kidsStar.sport}" data-kidwish="${kid.wish}">
                ${kid.name} will be making memories with ${kidsStar.name}, a ${kidsStar.sport} star, by ${kid.wish}
            </li>
        `
    }

    html += "</ul>"

    return html
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "pairing") {
            return window.alert(`${itemClicked.dataset.childname} will be making memories with ${itemClicked.dataset.celebrityname}, a ${itemClicked.dataset.celebritysport} star, by ${itemClicked.dataset.kidwish}.`)
        }
    }
)

