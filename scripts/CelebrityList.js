import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

export const Celebrities = () => {
    let html = "<ol>"

    for (const star of celebrities) {
        html += `<li 
                    data-id="${star.id}" 
                    data-type="celebrities"
                    data-sport="${star.sport}"
                    id="star--${star.id}">
                    ${star.name}
                </li>`
    }

    html += "</ol>"
    return html
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "celebrities") {

            for (const celeb of celebrities) {
                if (celeb.id === parseInt(itemClicked.dataset.id)) {
                    return window.alert(`${celeb.name} is a ${celeb.sport} star.`)
                }
            }
        }
    }
)
