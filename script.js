const tabs = document.querySelectorAll(".tab-btn");
const allContent = document.querySelectorAll(".content");
const line = document.querySelector(".line");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    
    tab.classList.add("active");

    line.style.width = `${tab.offsetWidth}px`;
    line.style.left = `${tab.offsetLeft}px`;
    
    allContent.forEach(content=>{content.classList.remove("active");})
    allContent[index].classList.add('active')
  });
});