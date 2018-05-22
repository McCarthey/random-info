const Mock = require("mockjs")
const fs = require("fs")
const Random = Mock.Random

let length = 3
let result = []

for (let i = 0; i < length; i++) {
    let data = {}
    data.fakeId = `fake${i}`
    data.name = Random.cname()
    data.job = Random.csentence(2, 3)
    data.company = Random.csentence(4, 10)
    result.push(data)
}
// console.log(result)

let content = JSON.stringify(result)
console.log(content)
fs.writeFile("test.js", `export const random_info = ${content}`, err => {
	if(err){
		return console.error(err)
	}
	fs.readFile("test.js",(err,data)=>{
		if(err){
			return console.error(err)
		}
		console.log(`异步读取文件数据: ${data}`)
	})
})
