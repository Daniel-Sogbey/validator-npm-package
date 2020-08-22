

const isValidURL = (url) => {

    const protocol = url.split(":");

    const part2 = protocol[1].split(".");

    const part3 = part2[0].includes('//');

    const part4 = part2[0].length;

    const part5 = part2[2].includes("com");

    if (protocol.length === 2) {

        if (part2.length === 3) {

            if(part3){

                if(part4 === 5){

                    if(part5){

                    return true;

                    }

                }

            }

            
        }

    }


}


module.exports = isValidURL