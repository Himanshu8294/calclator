let string=" ";
 let buttons=document.querySelectorAll('.button'); //jin jin ki class button class button hai un sbko select kr luga
Array.from(buttons).forEach((button)=>{ //inn button se ek array banaao aur ussprforeach lagaao 
  button.addEventListener('click', (e)=>{
    if (e.target.innerHTML == '=') {
      string = eval(string);
       document.querySelector('input').value=string;
    }
      else if (e.target.innerHTML == 'C') {
      string = " ";
       document.querySelector('input').value=string;
    }
    else{ 
    console.log(e.target)
    string=string+e.target.innerHTML;
    document.querySelector('input').value=string;//input ko select kr liye hai.    
   }
  })
})