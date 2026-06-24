let click=document.getElementById("click");

click.addEventListener("click",
    ()=>{alert("Thank you for visiting my portfolio!")}
);

click.addEventListener("mouseover",
    ()=>{
        click.style.transitionDelay="0.1s";
        click.style.backgroundColor="rgb(58, 154, 232)";
    }
);

click.addEventListener("mouseout",
    ()=>{
        click.style.backgroundColor="blue";
    }
);
