export function collapse_filter(ele)
{
  
    var button=document.getElementsByClassName('footer_collapsible')[ele];
var content=button.nextElementSibling;
console.log(content);
        if (content.style.display=="block"){
          content.style.display="none"
          button.firstElementChild.innerHTML="+";
        } else {
          content.style.display="block";
          button.firstElementChild.innerHTML="-";
        }
    
    
}
