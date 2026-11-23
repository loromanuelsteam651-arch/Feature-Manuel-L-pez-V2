import {header, footer} from "./templates/templates.js";
const mainHeader = document.querySelector("#mainHeader")
const mainFooter = document.querySelector("#mainFooter")

if (mainHeader){
    mainHeader.innerHTML = header
}
if (mainFooter){
    mainFooter.innerHTML = footer
}