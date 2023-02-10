const applicationState = {
    bookings: [],
    clowns: []
}


const API = "http://localhost:8088"

const mainContainer = document.querySelector("#container")

export const fetchBookings = () => {
    return fetch(`${API}/bookings`)
        .then(response => response.json())
        .then(
            (serviceBookings) => {
                // Store the external state in application state
                applicationState.bookings = serviceBookings
            }
        )
}

export const getBookings = () => {
    return applicationState.bookings.map(booking => ({...booking}))
}

export const sendBooking = (userServiceBooking) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceBooking)
    }


    return fetch(`${API}/bookings`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}

export const getClowns = () => {
    return applicationState.clowns.map(clown => ({...clown}))
}


export const denyBooking = (id) => {
    return fetch(`${API}/bookings/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

export const fetchClowns = () => {
    return fetch(`${API}/clowns`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.clowns = data
            }
        )
}

export const saveCompletion = (clownCompletion) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(clownCompletion)
    }


    return fetch(`${API}/completions`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}

export const fetchCompletions = () => {
    return fetch(`${API}/completions`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.completions = data
            }
        )
}