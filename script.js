function item(){
    let myInput=document.querySelector('input');
    let myDiv=document.createElement('div');
    myDiv.setAttribute("class","div_elem");
    document.body.append(myDiv);
    //child element
    let B1=document.createElement("button");
    B1.setAttribute("class","B1_elem")
    B1.innerHTML="Complete";

    let B2=document.createElement("button");
    B2.setAttribute("class","B2_elem")
    B2.innerHTML="Delete";

    let Span=document.createElement("span");
    Span.innerHTML=myInput.value;
   
    myDiv.appendChild(B1);
    myDiv.appendChild(B2);
    myDiv.appendChild(Span);
    //complete--> undo &&text decoration 
   // B1.addEventListener('click',function undo(){
     //   B1.innerHTML="undo";
      //  span.style.textDecorationLine="line-through";
    //})
    
    //delete
    //B2.addEventListener('click',function delet(){
     //   myDiv.style.display="none"
    //})

/// complete -->undo &&text decoration
let Button1=document.getElementsByClassName("B1_elem");
let Span1=document.getElementsByTagName("span")
for (let i=0;i<Button1.length;i++){
    Button1[i].addEventListener('click',function undo(){
        Button1[i].innerHTML="undo";
        Span1[i].style.textDecorationLine="line-through";

    })
}
//Delete
let Button2=document.getElementsByClassName("B2_elem");
let DivParent=document.getElementsByClassName("div_elem");

for (let i=0;i<Button2.length;i++){
    Button2[i].addEventListener('click',function delet(){
        DivParent[i].style.display="none"

    })
}


}