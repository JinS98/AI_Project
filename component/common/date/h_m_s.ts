export const getDate = (value) => {
    const date = new Date(value)
    const yyyy = date.getFullYear()
    const mm = String(date.getMonth() + 1).padStart(2, "0")
    const dd = String(date.getDate()).padStart(2, "0")
    const hh = String(date.getHours())
    const minutes = String(date.getMinutes())
    const sec = String(date.getSeconds())
    return `${hh}:${minutes}:${sec}`
}