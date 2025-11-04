function createDynamicButton(text, backgroundColor, ContainerId)
{

   const container = document.getElementById(ContainerId);
   if(!container)
   {
    console.log(`Errror: Container with Id' ${container} no found.`);
    retun;
   }

  const button = document.createElement("button");
  button.textContent = text;
  button.style.backgroundColor = backgroundColor;
  button.style.color="white";
  button.style.padding = '10px 20px';
  button.style.borderRadius = "5px";
  button.style.cursor = "pointer";

  container.appendChild(button);



}

export {createDynamicButton};