import { createDynamicButton } from "./utility.js";


const currentPagePath = window.location.pathname;
if(currentPagePath.includes('home.html'))
{
    createDynamicButton("home","red", "btn")
}
else if(currentPagePath.includes('login.html'))
{
    createDynamicButton("Login","green","button")
}




console.log(currentPagePath);