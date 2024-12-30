const containerEl=document.querySelector(".container");

for(let i=0; i<=20; i++)
{
    const colorContainerEl=document.createElement("div");
    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);
}

const colorContainerEls=document.querySelectorAll(".color-container");


generateColora();

function generateColora()
{
    colorContainerEls.forEach((colors)=>{
          
        const newColorCode=randomColor();
    

        colors.style.backgroundColor="#"+newColorCode;
        colors.innerText="#"+newColorCode;
    

    })
}

function randomColor()
{
    const chars="0123456789abcdef";
    const colorCodeLength=6;
    let colorCode="";

    for(let i=0;i<colorCodeLength;i++)
    {
            const randomNum=Math.floor(Math.random()*chars.length);
            colorCode +=chars.substring(randomNum,randomNum+1);
            console.log(colorCode);
    }
    
    return colorCode;

}