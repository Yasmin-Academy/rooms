const url = new URL(location.href)

const roomUrl = new URL("https://yasmin-academy.whereby.com")
roomUrl.pathname = url.pathname
roomUrl.search = url.search

const root = document.getElementById("root")
const whereby = document.createElement("whereby-embed")
whereby.setAttribute("room", roomUrl.href)
whereby.setAttribute("minimal", true)
whereby.setAttribute("style", "height: 100%;")
root.appendChild(whereby)
