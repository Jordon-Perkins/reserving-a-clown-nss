import { fetchBookings, fetchClowns, fetchCompletions } from "./dataAccess.js"
import { ClowningAround } from "./clowningAround.js"


const mainContainer = document.querySelector("#container")

const render = () => {
    fetchBookings()
        .then(() => fetchCompletions())
        .then(() => fetchClowns())
        .then(() => {mainContainer.innerHTML = ClowningAround()}
        )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

