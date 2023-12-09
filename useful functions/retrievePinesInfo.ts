const pinesInfo = {
    email: "support@pinesdental.com",
    phone: "+1 (876) 567 890",
    openingHours: [
        "Mon–Fri: 9am–6pm",
        "Sat: 10am–4pm",
        "Sun: 10am–1pm"],
    address: "Portmore Pines Plaza"
}

export function getEmail() {
    return pinesInfo.email
}

export function getPhone() {
    return pinesInfo.phone
}

export function getOpeningHours(index: number) {
    return pinesInfo.openingHours[index]
}

export function getAddress() {
    return pinesInfo.address
}





