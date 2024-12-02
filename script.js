
function saveData() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    /* Save data to localStorage here  sytax goes like
     localStorage.setItem ( "new dataname", data)*/
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);

  /* redirecting the values in local storage*/
    window.location.href = 'submit.html';
}

function dispalydata() {
   /* get values from localstorage and giving it a new name to call or 
   storing it to new variable  */ 
    const name = localStorage.getItem('userName');
    const email = localStorage.getItem('userEmail');

    document.getElementById("p1").innerHTML = (name);
    document.getElementById("p2").innerHTML = (name);
    document.getElementById("e1").innerHTML = (email);
}