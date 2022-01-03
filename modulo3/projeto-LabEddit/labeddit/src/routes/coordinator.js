export const goToLogin = (history) => {
    history.push("/login")
}

export const goToAdminHome = (history) => {
    history.push("/adminHome")
}

export const goToFormPage = (history) => {
    history.push("/formPage")
}

export const goToTripPage = (history) => {
    history.push("/tripPage")
}

export const goToListPage = (history) => {
    history.push("/listPage")
}

export const goToLogin = (history, id) => {
    history.push(`/detailPage/${id}`)
}

export const goToHomePage = (history) => {
    history.push("/")
}