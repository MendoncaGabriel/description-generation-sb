function newString(string, cut=' '){
    let array = [];
    let word = ''
    for(let i = 0; i<=string.length; i++){
        if(string[i] == cut || i == string.length){
            array.push(word)
            word = ''
        }else{
            word+=string[i]
        }
    }
    return array
}

console.log(newString('Gabriel, Andrade, Mendonça,'))