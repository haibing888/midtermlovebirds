function filterFunction(inputID) {
    var input, filter, ul, li, a, i;
    input = document.getElementById(inputID);
    filter = input.value.toUpperCase();
    div = document.getElementById(input.parentNode.id);
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

var subject = "(nullString)";
var predicate = "(nullString)";
var adjective = "(nullString)";
var object = "(nullString)";

function setSubj (subj_val) {
	subject = subj_val;
	console.log(subject);
}

function setPred (pred_val) {
	predicate = pred_val;
	console.log(predicate);
}

function setAdj (adj_val) {
	adjective = adj_val;
	console.log(adjective);
}

function setObj (obj_val) {
	object = obj_val;
	console.log(object);
}

function submit () {
	// prefix = "History:\n";
	preObject = document.getElementById('prePartOne');
	preObject.textContent += "\n" + subject + " " + predicate+ " " + adjective + " " + object;
	// preObject.textContent = preObject.textContent +"\n" + subject + " " + predicate;
}

document.getElementById('subjOptions').addEventListener('click', function(event) {
  setSubj(event.target.id);
});

document.getElementById('predOptions').addEventListener('click', function(event) {
	console.log("event: ", event);
	console.log("typeof event", typeof event);
  setPred(event.target.id);
});

document.getElementById('adjOptions').addEventListener('click', function(event) {
	console.log("event: ", event);
	console.log("typeof event", typeof event);
  setAdj(event.target.id);
});

document.getElementById('objOptions').addEventListener('click', function(event) {
	console.log("event: ", event);
	console.log("typeof event", typeof event);
  setObj(event.target.id);
});
