const menuProducts = [
    {
        id: "draining", type: "Pisos Drenantes", src: "./assets/drenante.png", info: `
    O piso drenante Molbra possui uma textura porosa que elimina o
    acúmulo de água na superfície do piso e proporciona ambientes
    totalmente permeáveis, com conforto e beleza. é perfeito para áreas
    externas e fácil de instalar, pois dispensa contrapiso.
    `},
    {
        id: "massive", type: "Pisos Maciços", src: "./assets/macico.png", info: `
    As placas maciças Molbra podem ser utilizadas como piso (no chão) ou
    revestimentos (nas paredes), em ambinentes internos e externos. Ficam
    oerfeitas quando usadas em conjunto com pisos drenantes, pois as cores
    e acabamentos são compatíveis.
    `},
    {
        id: "edge", type: "Borda de Piscina", src: "./assets/borda.png", info: `
    São o acabamento perfeito para sua piscina e combina
    perfeitamentamente com nossos drenantes e maciços.
    `},
    {
        id: "pisogram", type: "Pisograma", src: "./assets/pisograma.png", info: `
    O pisograma Molbra é uma alternativa de piso permeável que preserva
    áreas verdes, possibilitando o tráfego de pedestreer e veículos,
    sempre mantendo a grama bonita.
    `},
    {
        id: "accessories", type: "Acessórios", src: "./assets/podotatil.png", info: `
    Meio fio, podotatil alerta e podotatil direcional para o acabamento e
    para acessibilidade dos pedestres.
    `}
]

const img = document.querySelector(".img-floor")
const type = document.querySelector(".type-floor")
const info = document.querySelector(".info-floor")

const drainingButton = document.querySelector("#draining")
const massiveButton = document.querySelector("#massive")
const edgeButton = document.querySelector("#edge")
const pisogramButton = document.querySelector("#pisogram")
const accessoriesButton = document.querySelector("#accessories")

function showProduct(id) {
    menuProducts.map(piso => {
        if (piso.id === id) {
            img.src = piso.src
            type.innerHTML = piso.type
            info.innerHTML = piso.info
            return
        }
    })
}

drainingButton.addEventListener("click", () => showProduct(drainingButton.id))
massiveButton.addEventListener("click", () => showProduct(massiveButton.id))
edgeButton.addEventListener("click", () => showProduct(edgeButton.id))
pisogramButton.addEventListener("click", () => showProduct(pisogramButton.id))
accessoriesButton.addEventListener("click", () => showProduct(accessoriesButton.id))