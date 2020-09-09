let num = 5;

let build = () => {
    for (let i = num; i >= 1; i--) {
        let number = ''; 
        for (let j = 1; j <= i; j++) {
            number += j
        };
        console.log(number);
    };
};


    if(typeof num != 'number'){
        console.log('Data harus number')
    }else{
        build()
    }

    