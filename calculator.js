document.addEventListener("DOMContentLoaded", function() 
{
  let buttons = document.getElementsByTagName("button");

  for (let i = 0; i < buttons.length; i++) 
  {
    buttons[i].addEventListener("click", function() 
    {
      if (this.textContent === "=") 
      {
        try 
        {
          display.textContent = eval(display.textContent);
          if (!isFinite(display.textContent))
              throw "Math Error";
        } 
        catch (error) 
        {
          display.textContent = "Math Error";
        }
      }
      else if (this.textContent === "C")
        display.textContent = "";
      else
      {
        if (display.textContent === "Math Error" || display.textContent === "Hello World")
          display.textContent = this.textContent;
        else
        display.textContent += this.textContent;
      }
  });
  }
});