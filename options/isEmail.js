
const isValidEmail = (email) => {

    const part1 = email.split('@');

    if(part1.length === 2){

        if(part1[1].includes("com")){

            return true

        }

    }

}


module.exports = isValidEmail;