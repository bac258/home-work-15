let sidebarBtn = document.querySelector ('.sidebarBtn') 
let sidebar = document.querySelector ('.sidebar')

function openSidebar () {
    sidebar.classList.add('active');
}

sidebarBtn.addEventListener ('click', openSidebar)

let crossBtn = document.querySelector ('.crossBtn')
let icon = document.querySelector ('.crossBtn .bi bi-x-lg')
function closeSidebar (event) {
   
 if(
     event.target.classList.contains("sidebar") ||
     event.target.classList.contains("crossBtn") ||
     event.target.classList.contains("icon")
     
   )
 sidebar.classList.remove('active')

}
crossBtn.addEventListener('click', closeSidebar )
sidebar.addEventListener('click', closeSidebar)
icon.addEventListener('click',closeSidebar )

