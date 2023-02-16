
export default class Animal{
    constructor(){
        console.log(`this is an animal`)
    }
    getClassType(){
        return "Animal";
    }
}


export var add = (n1,n2) =>{
    return n1+n2;
}

export var subtract = (n1,n2) =>{
    return n1-n2;
}

export var divide = (n1,n2) =>{
    return n1/n2;
}

export var multiply = (n1,n2) =>{
    return n1*n2;
}

export var PI = 3.142