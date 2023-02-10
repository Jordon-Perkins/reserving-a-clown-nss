import { BookingForm } from "./bookingForm.js"
import { Bookings } from "./Reservations.js"

export const ClowningAround = () => {
    return `
        <h1>Hire Buttons and Lollipop the Clowns</h1>
        <section class="bookingForm">
            ${BookingForm()}
        </section>

        <section class="serviceBooking">
            <h2>Book Your Clown</h2>
            ${Bookings()}
           
        </section>
    `
}
