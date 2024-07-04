function change() {
    document.getElementById('demo').innerHTML = 'Hello<br> js'
}

console.log('hello js')
console.log('hello js')
console.log(typeof 10)
console.log(typeof 1.0)
console.log(typeof true)
console.log(typeof underfined)
console.log(typeof null)
console.log(typeof {})
console.log(typeof [])
console.log(typeof
    function fct() {})

function getType(data) {
    return Object.prototype.toString.call(data).slice(8, -1);
}

function getType(data) { //8인덱스부터 뒤부터 1글자 미만까지
    return Object.prototype.toString.call(data) //.slice(8, -1);
}
console.log(getType('hello'))
console.log(getType(10))
console.log(getType(1.0))
console.log(getType(true))
console.log(getType(undefined))
console.log(getType(null))
console.log(getType({}))
console.log(getType([]))
console.log(getType(function fct() {}))