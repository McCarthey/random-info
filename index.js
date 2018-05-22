const Mock = require('mockjs')
const Random = Mock.Random

let length = 3
let result = []

for(let i = 0;i < length;i++){
   	let data = {}
	data.fakeId = `fake${i}`
  	data.name = Random.cname()
	data.job = Random.csentence(2,3)
	data.company = Random.csentence(4,10)
	result.push(data)
}
console.log(result)
