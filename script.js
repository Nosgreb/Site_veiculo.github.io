let btnCarro = document.querySelector("#carro");
let btnMoto = document.querySelector("#moto");
let btnCarroExit = document.querySelector("#exit-carro");
let btnMotoExit = document.querySelector("#exit-moto");
if(btnCarro){
btnCarro.addEventListener("click", (event)=>{
    let Carro = document.querySelector("div.carro-page");
    Carro.style.display = "block";
    Carro.className = "slide-in-blurred-left mt-5 pt-5";
})}
let carros = document.querySelectorAll("p.list-names-carros");
carros.forEach(carro => {
    carro.addEventListener("click", (event)=>{
        let titleCarIMG = document.querySelector("h5.title-car-img");
        titleCarIMG.textContent = carro.textContent;
        let carroIMG = document.querySelector("img.img-carro");
        carroIMG.src = "img/" + carro.id + ".png";
    });
});
if(btnMoto){
    btnMoto.addEventListener("click", (event)=>{
        document.body.style.backgroundColor = "#030140";
        btnCarro.style.backgroundColor = "#0B99C9";
        btnMoto.style.backgroundColor = "#0B99C9";
        btnCarro.style.color = "#F0F1F2";
        btnMoto.style.color = "#F0F1F2";
        let moto = document.querySelector("div.moto-page");
        moto.style.display = "block";
        moto.className = "slide-in-blurred-left mt-5 pt-5";
    })}
    let motos = document.querySelectorAll("p.list-names-motos");
    motos.forEach(moto => {
        moto.addEventListener("click", (event)=>{
            let titleCarIMG = document.querySelector("h5.title-moto-img");
            titleCarIMG.textContent = moto.textContent;
            let motoIMG = document.querySelector("img.img-moto");
            motoIMG.src = "img/" + moto.id + ".png";
        });
    });
btnCarroExit.addEventListener("click", (event)=>{
    location.reload();
})
btnMotoExit.addEventListener("click", (event)=>{
    location.reload();
    document.body.style.backgroundColor = "#030140";
})