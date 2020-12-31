function polybius(input, encode = true){
    const lowerCaseInput = input.toLowerCase();
    const message = []
    const cipher = [
        ['EMPTY'],
        ['EMPTY','a','f','l','q','v'],
        ['EMPTY','b','g','m','r','w'],
        ['EMPTY','c','h','n','s','x'],
        ['EMPTY','d','i','o','t','y'],//the letter j shares position 42
        ['EMPTY','e','k','p','u','z']
    ];

    //returns false when decoding a string of uneven length
    const lengthChecker = input.replace(' ', '')
    if(encode === false && lengthChecker.length % 2 !== 0){return false};

    //encoding algorithm
    const inputArray = lowerCaseInput.split('')
    if(encode === true){
        for(let i = 0; i<input.length; i++){//inputArray loop
            for(let j = 1; j<6; j++){//first position in cipher
                for(let k = 1; k<6; k++){//second position in cipher
                    if(inputArray[i]==='j'){
                        message.push(4, 2);
                        i+=1;
                        break;
                    }
                    if(inputArray[i] === ' '){
                        message.push(inputArray[i]);
                        i+=1;
                        break;
                    }
                    if(cipher[j][k]===inputArray[i]){
                        message.push(j, k)
                    }
                }
            }
        }
    }
    //decoding algorithm
    if(encode === false){
        const inputArrayFromString = input.split('')
        let inputNumArray = []
        inputArrayFromString.map(function(item){ 
            if(item === ' '){
                inputNumArray.push(item);
            }
            else{
            inputNumArray.push(Number(item))}//converts array of strings to integers
        })
        for(let n = 0; n<inputNumArray.length; n+=2){//inputNumArray
            for(let m = 1; m<6; m++){//first position of cipher
                for(let o = 1; o<6; o++){//second position of cipher
                    if(inputNumArray[n]===4 && inputNumArray[n+1]===2){
                        message.push('i/j');
                        n+=2
                    }
                    if(input[n] === ' '){
                        message.push(inputNumArray[n]);
                        n+=1;
                        break;
                    }
                    if(inputNumArray[n] === m && inputNumArray[n+1] === o){
                        message.push(cipher[m][o]);
                    }
                }
            }
        }
    }
    return message.join('');
}

module.exports = polybius;
