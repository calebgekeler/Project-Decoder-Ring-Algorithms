function caesar(input, shift, encode = true){
    //returns false if shift parameter is out of range (-25 to 25)
    if(shift === 0 || shift === 26 || shift === -26 || shift === undefined){return false};

    //inverts shift variable if encode is false
    if(encode === false){shift*=-1};

    const lowerCaseInput = input.toLowerCase();
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const indexAlphabet = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
    const inputIndex = [];
    const message = [];

    //deconstructs string into an array of index positions
    //while igoring non alphabetical characters
    for(let i = 0; i<lowerCaseInput.length; i++){
        for(let j = 0; j<alphabet.length; j++){
            if(lowerCaseInput[i] === alphabet[j]){
                inputIndex.push(j);
                break;
            }
            if(!alphabet.includes(lowerCaseInput[i])){
                inputIndex.push(lowerCaseInput[i]);
                break;
            }
        }
    }
    
    //takes the index positions and creates a shifted string
    //while adjusting for index values that surpass the index range (0 to 25)
    for(let n = 0; n<inputIndex.length; n++){
        for(let k = 0; k<alphabet.length; k++){
            if(inputIndex[n]===k){
                if((k+shift) > 25){
                    message.push(alphabet[k+shift-26]);
                    break;
                }
                if((k+shift) < 0){
                    message.push(alphabet[k+shift+26]);
                    break;
                }
                else{
                    message.push(alphabet[k+shift]);
                    break;
                }                
            }
            if(!indexAlphabet.includes(inputIndex[n])){
                message.push(inputIndex[n]);
                break;
            }
        }
    }
    //combines the characters in the message array into a single string for output
    return message.join('');
}

module.exports = caesar;
