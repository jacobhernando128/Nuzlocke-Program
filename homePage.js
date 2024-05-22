const newButton = document.querySelector("#SaveButton");
const loadButton = document.querySelector("#LoadButton");

newButton.addEventListener("click", () => goToNewSave());
loadButton.addEventListener("click", () => goToLoadSave());

function goToNewSave()
{
    window.location.href = 'newsave.html'; 
}

function goToLoadSave() 
{
    window.location.href = 'loadsave.html'; 
}

