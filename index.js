
let tabitem = document.querySelectorAll(".tab-item")
let tabContent = document.querySelector(".tab-Content")



tabitem.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        removeBorder()
        tabContent.style.transform = `translatex(${-100*index}vw )` 
        item.classList.add('tab-border');
    })
})

function removeBorder() {
	tabitem.forEach(item => {
		item.classList.remove('tab-border');
	});
}











