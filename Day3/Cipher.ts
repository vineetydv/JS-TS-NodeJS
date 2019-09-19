class BasicCipher{
    encrypt(message : string ): string{
        let encMessage: string = '';
        encMessage =  message
                            .split('')
                            .map((char) => { if(char !== ' ') 
                                                return String.fromCharCode((((char.charCodeAt(0)-96)+1)%26)+96)
                                             else
                                                return ' ';
                                            })
                            .join('');
        return encMessage;
    }

    decrypt(message : string): string{
        let decMessage: string = '';
        decMessage = message
                           .split('')
                           .map((char) => {if(char==="a"){
                                                return String.fromCharCode((((char.charCodeAt(0)-96)+25))+96)
                                            }
                                            else if(char !== ' '){
                                                return String.fromCharCode((((char.charCodeAt(0)-96)-1))+96)
                                            }
                                            else
                                                return ' ';
                                            })
                           .join('');

        return decMessage;
    }
}

class ComplexCipher extends BasicCipher{
    encrypt(message : string ): string{
        let encMessage: string = '';
        encMessage =  message
                            .split('')
                            .map((char) => (String.fromCharCode((((char.charCodeAt(0)-96)+1)%26)+96)))
                            .join('');
        return encMessage;
    }

    decrypt(message : string): string{
        let decMessage: string = '';
        decMessage = message
                           .split('')
                           .map((char) => (String.fromCharCode((((char.charCodeAt(0)-96)+25)%26)+97)))
                           .join('');

        return decMessage;
    }
}

let cipher1 = new BasicCipher();
let word = cipher1.encrypt("hello world");
console.log(word);
word = cipher1.decrypt(word);
console.log(word);
