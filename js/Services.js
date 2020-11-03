
function render(data) {
    const selector=document.querySelector(".services")
    let HTML="";
    
    for ( let i=0;i<data.length;i++) {
        if (data[i].active===true) {
            HTML+=`<div class="service">
            <img src="./images/${data[i].img}" alt="service-img">
                <h2>${data[i].heading}</h2>
                <p>${data[i].description}</p>
            </div>`
        }
      else {
          HTML+="";
      }
    }
    selector.innerHTML=HTML;
   
    }
export {render}