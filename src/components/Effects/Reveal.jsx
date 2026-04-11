import { useEffect } from "react";

function Reveal(){

useEffect(()=>{

const sections = document.querySelectorAll(".section")

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){
entry.target.classList.add("show")
}

})

})

sections.forEach(sec=>observer.observe(sec))

},[])

return null

}

export default Reveal