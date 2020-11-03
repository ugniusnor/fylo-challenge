
class Services  {
    constructor (params) {
        this.image=params.img,
        this.heading=params.heading,
        this.description=params.description,
        this.state=params.state
    }
    render() {
        const selector=document.querySelector(".services")
       selector.innerHTML=`<div class="service">
        <img src="./images/${this.image}" alt="service-img">
        <h2>${this.heading}</h2>
        <p>${this.description}</p>
    </div>`
    }
}





export {Services}