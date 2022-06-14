// 10 metodos de array que devemos dominar

// 1 - reverse

const data = [{name:'igor',age:24,sallary:2000,license:true},{name:'tiago',age:24,sallary:2000,license:true},{name:'denis',age:24,sallary:2000,license:true},{name:'cristiano',age:24,sallary:2000,license:true}]


let reversedData = data.reverse()

console.log(reversedData)

// [
//     { name: 'cristiano', age: 24, sallary: 2000, license: true },
//     { name: 'denis', age: 24, sallary: 2000, license: true },
//     { name: 'tiago', age: 24, sallary: 2000, license: true },
//     { name: 'igor', age: 24, sallary: 2000, license: true }
//   ]




// 2 find

const names = ['igor','tales','vinicius','victor','tiago']

const name = names.find((user) => {
    return user === 'tales'
})

// 3 findINedx

const numbers = [1,2,3,4,53,5,6,67,7,34,24,44]

const num = numbers.findIndex((data) => {
    return data === 53
})


console.log(num)

// 4 includes


const OtherNames = ['maria','mario','talia','joao']

const ashesOfNames = OtherNames.includes('mario')

console.log(ashesOfNames)


// 5 map

const anyData = ['lara','larissa','lavinia','lero']

const mapData = anyData.map((names) => {
    console.log(names)
})


// 6 filter

const filt = ['clara','clarissa','carlos','matheus']

const filterData = filt.filter((values) => {
    return values.length >= 6
})

console.log(filterData) //[ 'clarissa', 'carlos', 'matheus' ]

// 7 reduce --> reduz qualquer dado a um dado unico

const sallaries = [25000,25000,25000]

const sallariesData = sallaries.reduce((totalSallary, user) => {
    return totalSallary += user,0
})

console.log(sallariesData)


// 8 forEach

const tableData = [1,2,4,5,6,7,8,9,0,10,12]

const arrayVazio = []

const tableDataFor = tableData.forEach((values) => {
    arrayVazio.push(values)
})

console.log(arrayVazio)


// 9 some

let news = [{name:'igor',news:true}, {name:'tiago',news:false}]


const newsData = news.some((values) => {
    console.log(values.news)

    // true
    // false
})


// 10 every --> verifica se todos tem a condição que estamos buscando


const newsEv = news.every((values) => {
    return values.news === true
})

console.log(newsEv) //false