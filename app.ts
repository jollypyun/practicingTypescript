function add(n1:number, n2:number) {
    console.log(typeof n1) // typeof 연산자를 이용해 특정 값의 타입을 알 수 있다.
    return n1+n2
}

const number1 = 5
const number2 = 2.8

const result = add(number1, number2)
console.log(result)