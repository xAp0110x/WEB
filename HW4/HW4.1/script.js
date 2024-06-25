let inputBlock = document.getElementById("name-input");

inputBlock.addEventListener("input", function(event){
    let input = event.target;
    let filteredValue = input.value.replace(/\d/g, '')
    input.value = filteredValue;
});