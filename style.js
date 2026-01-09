let fname;
let lname;
let dates;
let gend;
let Email;
let phoneno;
let home;
let space;

let result,main;
let name;
function check()
{
   name = document.getElementById("res");
   name.style.display="block";
   name.innerText="Checking...";
   setTimeout(validate,3000);
}

function validate()
{
   name.innerText="Validating...";
   setTimeout(output,3000); 
}

function output()
{
  
    fname = document.getElementById("fnm").value;
    lname = document.getElementById("lnm").value;
    dates = document.getElementById("dat").value;
    gend = document.querySelector('input[name="gender"]:checked').value;
    Email = document.getElementById("mal").value;
    phoneno = document.getElementById("phon").value;
    home = document.getElementById("addr").value;
    space = " ";

    result = document.getElementById("res");


    result.innerText=(`Name: ${fname}${space}${lname}\n
        D.O.B: ${dates}\n
        Gender: ${gend}\n
        E-Mail: ${Email}\n
        Mobile No: ${phoneno}\n
        Address: ${home}`);
    document.getElementById("res").style.display="block";    
       
}
let resett = document.getElementById("rese");
  
resett.addEventListener("click", function(){

    location.reload();
})
