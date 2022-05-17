

i = 0;
j = 0;
function start()
{
    var im = ["img20.jpeg", "img40.png", "img18.jpg"];
    var x = document.getElementById("imin");
    x.src = im[i];
    i++;
    if (i >= im.length) 
        i = 0;
      
            timer = setTimeout('start()', 3000);
        
    
    
    return stop;
}
function view()
{
    var c = ["1200", "1500", "4000"];
    var y = document.getElementById("vi");
    y.innerHTML = c[j];
    j++;
    if (j >= c.length) j = 0;
    
       timer=  setTimeout('view()', 1000);
    
  
}
function stop()
{
    if (stop)
    {
        alert("do yo wand stop??? ");
        clearTimeout(timer);
        timer = 0;
        }
}
