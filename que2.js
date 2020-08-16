function display() {
    let unam = document.querySelector("#uname").value;
    let upas = document.querySelector("#pass").value;

    const clo = document.querySelector("#container").cloneNode(true);
    clo.removeAttribute("id");
    clo.style.visibility = "visible" ;
    clo.children[0].innerHTML = unam; 
    clo.children[1].innerHTML = upas; 

    const add = document.querySelector("#outputdiv");

    add.insertBefore(clo, add.firstChild);

    // document.querySelector("#uname").value = "";
    // document.querySelector("#upas").value= "";
}


