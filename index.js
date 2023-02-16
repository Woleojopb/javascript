const cardArry = [
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

cardArry.sort(()=>0.5-Math.random())


const displayGrid = document.querySelector("#grid")


function createBoard(){
    for (i=0; i<cardArry.length; i++){
        const card = document.createElement("img")
        card.setAttribute("src","images/blank.png")
        card.setAttribute("data-id",i)
        console.log(card);
        displayGrid.append(card)
    }
}


createBoard();