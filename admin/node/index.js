const rp = require("request-promise")
// const cheerio = require("cheerio");//引入Cheerio模块

async function getPage (URL) {
    const data = {
        url, 
        res: await rp({
            url: URL
        }) 
    }; 
    return data //这样，我们返回了一个对象，就是这个页面的url和页面内容。
}
// const $ = cheerio.load(data.res); //将html转换为可操作的节点
let url = 'http://www.mzitu.com/125685'
getPage(url).then(d => console.log(d))