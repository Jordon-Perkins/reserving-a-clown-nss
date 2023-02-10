import { sendBooking } from "./dataAccess.js"

export const BookingForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="bookingDescription">Description</label>
            <input type="text" name="bookingDescription" class="input" />
        </div>
        <div class="field">
            <label class="label" for="bookingAddress">Address</label>
            <input type="text" name="bookingAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="parentName">Parent</label>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childName">Child</label>
            <input type="text" name="childName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceHours">Hours Reserved</label>
            <input type="number" name="serviceHours" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceAttendance">Party Size</label>
            <input type="number" name="serviceAttendance" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceDate">Date needed</label>
            <input type="date" name="serviceDate" class="input" />
        </div>

        <button class="button" id="submitBooking">Submit Booking</button>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitBooking") {
        // Get what the user typed into the form fields
        const userDescription = document.querySelector("input[name='bookingDescription']").value
        const userAddress = document.querySelector("input[name='bookingAddress']").value
        const userName = document.querySelector("input[name='parentName']").value
        const userChild = document.querySelector("input[name='childName']").value
        const userAttendance = document.querySelector("input[name='serviceAttendance']").value
        const userHours = document.querySelector("input[name='serviceHours']").value
        const userDate = document.querySelector("input[name='serviceDate']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            description: userDescription,
            address: userAddress,
            hours: userHours,
            parent: userName,
            child: userChild,
            attendance: userAttendance,
            neededBy: userDate
        }

        // Send the data to the API for permanent storage
        sendBooking(dataToSendToAPI)
    }
})