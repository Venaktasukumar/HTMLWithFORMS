let firstname=document.getElementById("firstname");
let lastname=document.getElementById("lastname");
let DOB=document.getElementById("DOB");
let phoneno=document.getElementById("phoneno");
let Email=document.getElementById("EMail");
let data=[];
let rowid=null;
document.getElementById("form").addEventListener("click",(e) =>{
    e.preventDefault();
});
let focuss = (obj) => {
    obj.style.border="1px solid blue";
}
let transform = () =>{
    firstname.value=firstname.value.toUpperCase();
    lastname.value=lastname.value.toUpperCase();
}
let render = () =>{
    let a="";
    for(let ans of data){
        a += "<tr> <td>"+ans.firstname+"</td> <td>"+ans.lastname+"</td> <td>"+ans.dob+"</td> <td>"+ans.phoneno+"</td> <td>"+ans.email+"</td></tr>"
    }
    document.getElementById("mytbody").innerHTML=a;

}
 let add = () => {
    if(validateform()=="valid"){
        data.push({"firstname":firstname.value,"lastname":lastname.value,"dob":DOB.value, "phoneno":phoneno.value,"email":Email.value});
        render();
        reset();
    }
    else{
        alert("not valid");
    }
}
let reset = () =>{
    firstname.value="";
    lastname.value="";
    DOB.value="";
    phoneno.value="";
    Email.value="";
}
let validateform = () =>{
    if(firstname.value=="" || !(firstname.value.match(/^[A-Za-z]+$/)) || lastname.value=="" || !( lastname.value.match(/^[A-Za-z]+$/)) || DOB.value=="" || phoneno.value=="" || !(phoneno.value.match(/^\d+$/)) || (phoneno.value.length!=10) ||Email.value==""){
        return "not valid";
    }
    return "valid";  
}
