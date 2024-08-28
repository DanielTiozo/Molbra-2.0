const showGalery = [
    {id: 1, name: "Piso Drenante Grafite", src: "../assets/drenante-instalado.jpg" },
    {id: 2, name: "Piso Drenante Grafite", src: "../assets/drenante-instalado1.jpg" },
    {id: 3, name: "Piso Drenante Grafite", src: "../assets/drenante-instalado2.jpg" },
    {id: 4, name: "Piso Drenante Cinza", src: "../assets/drenante-instalado3.jpg" },
    {id: 5, name: "Revestimento Maciço Jateado Leve Areia", src: "../assets/macico-instalado.jpg" },
    {id: 6, name: "Revestimento Maciço Jateado Âmbar", src: "../assets/macico-instalado1.jpg" },
    {id: 7, name: "Borda de Piscina Jateado Leve branco", src: "../assets/borda-instalado.jpg" },
    {id: 8, name: "Borda de Piscina Jateado Leve branco", src: "../assets/borda-instalado1.jpg" },
    {id: 9, name: "Revestimento Maciço Jateado Leve branco", src: "../assets/borda-instalado2.jpg" },
    {id: 10, name: "Pisograma Bruto Cinza", src: "../assets/pisograma-instalado.jpg" },
    {id: 11, name: "Acessórios Bruto Cinza", src: "../assets/borda-instalado2.jpg" },
]

const img = document.querySelectorAll(".galery")

img.forEach(img => {
    img.addEventListener("click", () =>{
        console.log(img.style.url)
    })
})