document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('#new-task').onsubmit = () => {

        // Create new item for list
        const list = document.querySelector('#list');
        list.innerHTML += "<li id='" + document.querySelector('#task').value + "li'> <input type='checkbox' id='" + document.querySelector('#task').value +
            "' onclick='markComplete(event)'>" + document.querySelector('#task').value + "<div><button id='" + document.querySelector('#task').value + "x'onclick='removeTask(event)'>X</button></div></li>";
        document.querySelector('#task').value = '';
        document.querySelector('#submit').disabled = true;
        return false;
    };


    // By default, submit button is disabled
    document.querySelector('#submit').disabled = true;

    // Enable button only if there is text in the input field
    document.querySelector('#task').onkeyup = () => {
        if (document.querySelector('#task').value.length > 0)
            document.querySelector('#submit').disabled = false;
        else
            document.querySelector('#submit').disabled = true;
    };

});

function markComplete(event) {
    var checkbox = event.currentTarget.getAttribute("id");
    // console.log(text);
    var text = document.querySelector('#' + checkbox + "li");
    var check = document.querySelector('#' + checkbox);
    if (check.checked == true)
        text.style.textDecoration = "line-through";
    else
        text.style.textDecoration = "none";
};

function removeTask(event) {
    var checkbox = event.currentTarget.getAttribute("id");
    checkbox = checkbox.slice(0, checkbox.length - 1);
    console.log(checkbox);
    var text = document.querySelector('#' + checkbox + "li");
    text.style.display = "none";
};