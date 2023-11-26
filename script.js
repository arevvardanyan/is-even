// 1․ Ունենալ ֆունկցիա,որը ստանում է երկու թիվ
// 2․ Ստանալ երկու թվերի միջակայքում եղած բոլոր զույգ թվերը
// 3․ Ստուգել՝ արդյոք զույգ են թվի բոլոր թվանշանները
// 4․ Եթե այո՝ ավելացնել թիվը նախապես հայտարարված զանգվածում
// 5․ Եթե ոչ՝ անցնել հաջորդ թվին 


const isEven = (num)=> num % 2 === 0

const isEveryDigitEven = function(num){

    let newNum = num.toString().split("").every(isEven)

    if(newNum){

        return num

    }
}

const isAllEven = function(num1,num2){
    let arr = []

    for(let i = num1; i<= num2; i++){
            
        if(i % 2 === 0 ){

            if(isEveryDigitEven(i) ){

                arr.push(i)
            }
        }
               
    }
    return arr ? arr: "Such number doesn't exist"
}

console.log(isAllEven(15,24))