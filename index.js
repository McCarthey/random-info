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
// 要写入/修改的文件路径
const path = "../SPA/lemo_card/src/entries/wx_lemo_card/constant/random_info.js"

fs.writeFile(path, `export const random_info = ${content}`, err => {
    if (err) {
        return console.error(err)
    }
    fs.readFile(path, (err, data) => {
        if (err) {
            return console.error(err)
        }
        console.log(`异步读取文件数据: ${data}`)
    })
})
