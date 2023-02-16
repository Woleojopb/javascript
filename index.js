const cardArray = [
    {
        name:"fries",
        img:"images/fries.png"
    },
    {
        name:"cheeseburger",
        img:"images/cheeseburger.png"
    },
    {
        name:"hotdog",
        img: 'images/hotdog.png'
    },
    {
        name:"ice-cream",
        img: 'images/ice-cream.png'
    },
    {
        name:"milkshake",
        img: 'images/milkshake.png'
    },
    {
        name:"pizza",
        img: 'images/pizza.png'
    },
    {
        name:"fries",
        img:"images/fries.png"
    },
    {
        name:"cheeseburger",
        img:"images/cheeseburger.png"
    },
    {
        name:"hotdog",
        img: 'images/hotdog.png'
    },
    {
        name:"ice-cream",
        img: 'images/ice-cream.png'
    },
    {
        name:"milkshake",
        img: 'images/milkshake.png'
    },
    {
        name:"pizza",
        img: 'images/pizza.png'
    },
    
]

cardArray.sort(()=>0.5-Math.random())


const displayGrid = document.querySelector("#grid")
const result = document.querySelector("#result")

let cardChosen =[]
let cardChosenId = []
const cardsWon = []


function createBoard(){
    for (i=0; i<cardArray.length; i++){
        const card = document.createElement("img")
        card.setAttribute("src","images/blank.png")
        card.setAttribute("data-id",i)
        card.addEventListener("click",flipCard)
        displayGrid.append(card)
    }
}


createBoard();

function checkMatch(){
    const cards = document.querySelectorAll('img')
    const option1 = cardChosenId[0]
    const option2 = cardChosenId[1]

    if (option1 == option2){
        cards[option1].setAttribute("src","images/blank.png")
        cards[option2].setAttribute("src","images/blank.png")
        alert("You have selected the same card")
    }

    if (cardChosen[0]==cardChosen[1]){
        alert("You have found a match!")
        cards[option1].setAttribute("src","images/white.png")
        cards[option2].setAttribute("src","images/white.png")
        cards[option1].removeEventListener("click",flipCard)
        cards[option2].removeEventListener("click",flipCard)
        cardsWon.push(cardChosen)

    }
    else {
        cards[option1].setAttribute("src","images/blank.png")
        cards[option2].setAttribute("src","images/blank.png")
    }
    
    result.innerHTML = cardsWon.length

    if(cardsWon.length==cardArray/2){
        result.innerHTML = "Congratulations, you've found it all!"
    }

    cardChosen = []
    cardChosenId = []
}

function flipCard(){
    const cardId = this.getAttribute("data-id")
    cardChosen.push(cardArray[cardId].name)
    cardChosenId.push(cardId)
    console.log(cardChosen)
    console.log(cardChosenId)
    this.setAttribute("src",cardArray[cardId].img)
    if (cardChosen.length===2){
        setTimeout(checkMatch,500)
    }
}

