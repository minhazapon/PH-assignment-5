
function getElementValueById(elementId){
    const element = document.getElementById(elementId).innerText;
    const value = parseInt(element);
    return value;
    
}


// -----------------
getElementValueById('remain-seats');
function setValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}


