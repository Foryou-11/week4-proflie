import { HomePage } from './pages/home.js'
import { AdminPage } from './pages/admin.js'
import { AboutPage } from './pages/about.js'
const routes = {
'/': HomePage,
'/admin': AdminPage,
'/about': AboutPage,
}
function render() {
const path = location.hash.slice(1) || '/'
const page = routes[path] || HomePage
document.querySelector('#app').innerHTML = page()
}
window.addEventListener('hashchange', render)
render()