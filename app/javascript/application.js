// Entry point for the build script in your package.json
import "./controllers"
import "@hotwired/turbo-rails"
import * as bootstrap from "bootstrap"
import './channels/**/*_channel.js'

document.addEventListener("turbo:load", () => {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })

  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
  })

  // var toastElList = [].slice.call(document.querySelectorAll('.toast'))
  // var toastList = toastElList.map(function (toastEl) {
  //   return new bootstrap.Toast(toastEl).show()
  // })
})
