function login(){

let user =
document
.getElementById(
"username"
).value;

let pass =
document
.getElementById(
"password"
).value;

if(
user=="" ||
pass==""
){

alert(
"Please fill all fields"
);

return;

}

window.location.href =
"planner.html";

}

function addTask(){

let task =
document
.getElementById(
"taskInput"
).value;

if(task=="")
return;

let li =
document
.createElement(
"li"
);

li.innerHTML =

task +

" <button onclick='this.parentElement.remove()'>❌</button>";

document
.getElementById(
"list"
)

.appendChild(li);

document
.getElementById(
"taskInput"
).value="";

}
function addRow(){

let day =
document
.getElementById(
"day"
).value;

let subject =
document
.getElementById(
"subject"
).value;

if(
day=="" ||
subject==""
){

alert(
"Fill fields"
);

return;

}

let table =
document
.getElementById(
"table"
);

let row =
table.insertRow();

row.innerHTML =

`
<td>${day}</td>

<td>${subject}</td>

<td>

<button
onclick=
"this.parentElement.parentElement.remove()">

❌

</button>

</td>
`;

document
.getElementById(
"day"
).value="";

document
.getElementById(
"subject"
).value="";

}
function addGoal(){

let goal =
document
.getElementById(
"goalInput"
).value;

if(goal==""){

alert(
"Enter goal"
);

return;

}

let div =
document
.createElement(
"div"
);

div.className =
"card";

div.innerHTML =

goal +

` <button
onclick=
"this.parentElement.remove()">

❌

</button>`;

document
.getElementById(
"goalList"
)

.appendChild(
div
);

document
.getElementById(
"goalInput"
).value="";

}