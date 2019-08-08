function add() {
    let listed = document.getElementById('listed');
    let textArea = document.getElementById('textnote');
    if (textArea.value != "") {
        let note = textArea.value;
        let tam = 0;


        for (var i = 0; i < listed.childElementCount; i++) {
            tam += 1;
        }
        document.getElementById("listed").innerHTML += '<div id="divnote' + tam + '" class="child"><p id="spantext' + tam + '">' + note + '</p><button class="btncla" id="btnedit' + tam + '" onclick="editnote(' + tam + ')">Edit</button>' + '<button class="btncla" id="btndelete' + tam + '" onclick="deletenote(' + tam + ')">Delete</button><hr></div>';

        textArea.value = "";

    } else {
        alert('Please enter any text');
    }
}

function editnote(id) {
    let textArea = document.getElementById('textnote');

    var elementp = document.getElementById("spantext" + id);
    textArea.value = elementp.innerText;

    var elementdiv = document.getElementById("divnote" + id);
    elementdiv.parentNode.removeChild(elementdiv);
}

function deletenote(id) {
    let textArea = document.getElementById('textnote');

    var elementp = document.getElementById("divnote" + id);
    elementp.parentNode.removeChild(elementp);
    textArea.value = "";
}


