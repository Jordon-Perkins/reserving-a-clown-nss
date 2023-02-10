import { getBookings, getClowns, denyBooking, saveCompletion} from "./dataAccess.js"


const convertReservationsToListElement = (booking) => {
    
    const clowns = getClowns()

    return `
    <li>
        ${booking.description}
        <select class="clowns" id="clowns">
        <option value="">Choose</option>
        ${
        clowns.map(
            clown => {
                return `<option value="${booking.id}--${clown.id}">${clown.name}</option>`
            }
        ).join("")
        }</select>
        <button class="reservation__deny"
                id="booking--${booking.id}">
            Deny
        </button>

        
    </li>
`
}


export const Bookings = () => {

    const bookings = getBookings()

    let html = `
        <ul>
            ${
                bookings.map(convertReservationsToListElement).join("")
            }
    </ul>
    `

    return html
}


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("booking--")) {
        const [,bookingId] = click.target.id.split("--")
        denyBooking(parseInt(bookingId))
    }
})

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns") {
            const [bookingId, clownId] = event.target.value.split("--")
            const completion = { 
                "bookingId": bookingId, "clownId": clownId, "date_created": new Date().toLocaleDateString()}

                const saved = saveCompletion(completion)
        }
    }
)