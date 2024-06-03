var toggleDiv=document.getElementById("mobilenav")

function HamBurg(){
    console.log("hello");
    if(toggleDiv!==null){
        if(toggleDiv.style.display==="none"||toggleDiv.style.display===""){
            toggleDiv.style.display="block";
            console.log("block");
        }
    }
}

function wrong() {
    if(toggleDiv!==null){
        if(toggleDiv.style.display==="block"){
            toggleDiv.style.display="none";
            console.log("none");
        }
    }
}