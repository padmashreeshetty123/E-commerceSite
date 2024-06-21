
export function hide_show_filters()
{
    let hide__show=document.getElementsByClassName('show-filter')[0];
    hide__show.style.display="block";
    setTimeout(()=>{ hide__show.style.transition='all 300ms';
    hide__show.style.marginBottom='13px';},0);
    // hide__show.style.bottom="60px";
    var hide__show_1=document.getElementsByClassName('hide-filter')[0];
    hide__show_1.style.transition='all 200ms';
    hide__show_1.style.transform='scale(0)';
    document.getElementsByClassName("product__list__filters")[0].style.display="none";
}
export function cts(num)
{
return parseInt(num)
}
export function hide_show_filters_1()
{
    var hide__show=document.getElementsByClassName('show-filter')[0];

    hide__show.style.transition='all 300ms';
    hide__show.style.marginBottom='0px';
    setTimeout(()=>{    hide__show.style.display="none"; },100);
   
    // hide__show.style.bottom="60px";
    var hide__show_1=document.getElementsByClassName('hide-filter')[0];
    hide__show_1.style.transition='all 200ms';
    hide__show_1.style.transform='scale(1)';
    document.getElementsByClassName("product__list__filters")[0].style.display="block";
}

export function collapse_filter(ele)
{
  
    var button=document.getElementsByClassName('collapsible')[ele];
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

export default hide_show_filters;
// export hide_show_filters_1;