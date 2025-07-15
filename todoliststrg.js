let courselist = localStorage.getItem("tasks")?JSON.parse( localStorage.getItem("tasks")):[];
let listformele = document.getElementById("listform"); 
let listinputele = document.getElementById("taskbox"); 

listformele.addEventListener("submit", function (event) {
    event.preventDefault();
    let enteredtask = listinputele.value.trim();

    if (enteredtask === "") {
        alert("Task cannot be empty!");
        return;
    }

    courselist.unshift(enteredtask);
    localStorage.setItem("tasks", JSON.stringify(courselist));
    displaycourse(courselist);
    listinputele.value = "";  
});

function displaycourse(courses) {
    const listEle = document.getElementById("list-ele");

    if (courses.length === 0) {
        listEle.innerHTML = "<h4>No courses added yet</h4>";
        return;
    }

    let eachcourse = "";
    courses.forEach(function (course, index) {
        eachcourse += `<li class="list-group-item list-group-item-info mb-2">
            <span class="fw-bold">${course}</span>
            <button class="float-end btn btn-danger ms-2" 
            onclick="deletecourse(${index})">
            <i class="fa-solid fa-trash"></i>
            </button>
            <button class="float-end btn btn-info" 
            onclick="updatecourse(${index})">
            <i class="fa-solid fa-pen"></i>
            </button>
        </li>`;
    });

    listEle.innerHTML = eachcourse;
}

function deletecourse(id) {
    courselist.splice(id, 1);
    localStorage.setItem("tasks", JSON.stringify(courselist));
    displaycourse(courselist);
}

function updatecourse(id) {
    listinputele.value = courselist[id];
    deletecourse(id);
}

displaycourse(courselist);