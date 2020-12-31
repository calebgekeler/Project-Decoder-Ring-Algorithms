function substitution(input, alphabet, encode = true){
    let message =[];
    const orderedAlphabet = 'abcdefghijklmnopqrstuvwxyz'
    let lowerCaseInput = input.toLowerCase()

    //checks to return false if condition is met
    if(alphabet.length !== 26){return false;}
    for(let i = 0; i<orderedAlphabet.length; i++){
        let count = 0;
        for(let j =0; j<alphabet.length; j++){
            if(orderedAlphabet[i]===alphabet[j]){
                count++
            }
            if(count > 1){return false};
        }
    }
    
    //encoding algorithm
    if(encode === true){
        for(let a = 0; a<lowerCaseInput.length; a++){
            for(let b = 0; b<alphabet.length; b++){
                if(lowerCaseInput[a]===orderedAlphabet[b]){
                    message.push(alphabet[b])
                    break;
                }
                if(input[a]=== ' '){
                    message.push(input[a])
                    break;
                }
            }
        }
    }
    //decoding algorithm
    if(encode === false){
        for(let c = 0; c<lowerCaseInput.length; c++){
            for(let d = 0; d<alphabet.length; d++){
                if(lowerCaseInput[c]===alphabet[d]){
                    message.push(orderedAlphabet[d])
                    break;
                }
                if(input[c]=== ' '){
                    message.push(input[c])
                    break;
                }
            }
        }
    }
    return message.join('');
}

module.exports = substitution;
