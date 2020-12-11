/**
 * 
 * @authors cherish yii2 (cherish@cherish.pw)
 * @date    2020-12-10 16:48:28
 * @version v1.0
 * @description the core js of todolist project
 * 
 * ━━━━━━神兽出没━━━━━━
 * 　　   ┏┓　 ┏┓
 * 　┏━━━━┛┻━━━┛┻━━━┓
 * 　┃              ┃
 * 　┃       ━　    ┃
 * 　┃　  ┳┛ 　┗┳   ┃
 * 　┃              ┃
 * 　┃       ┻　    ┃
 * 　┃              ┃
 * 　┗━━━┓      ┏━━━┛ Code is far away from bugs with the animal protecting.
 *       ┃      ┃     神兽保佑,代码无bug。
 *       ┃      ┃
 *       ┃      ┗━━━┓
 *       ┃      　　┣┓
 *       ┃      　　┏┛
 *       ┗━┓┓┏━━┳┓┏━┛
 *     　  ┃┫┫　┃┫┫
 *     　  ┗┻┛　┗┻┛
 *
 * ━━━━━━感觉萌萌哒━━━━━━
 */

// 请根据考试说明文档中列出的需求进行作答
// 预祝各位顺利通过本次考试，see you next week！
// ...



var data = [
    {index : 1,thing:'吃饭',i:3,},
    {index : 2,thing:'睡觉',i:3,},
    {index : 3,thing:'打豆豆',i:3,},
]

bindHtnl()
function bindHtnl() {
const iAll = data.filter(item => item.i == 3).length

let str = ``
        str  += `
        <h2>正在进行 <span id="todocount">${iAll}</span></h2>
    <ol id="todolist" class="demo-box">
    `
    data.forEach(item => {
    str +=
    `
        <li>
            <input type="checkbox" class="checkbox" />
            <p onclick="edit(${item.index})">${item.thing}</p>
            <a href="javascript:remove(1)">-</a>
    `
    })
    str +=
    `</ol>
    <h2>已经完成 <span id="donecount">2</span></h2>
    <ul id="donelist">
        <li>
            <input type="checkbox" checked="checked" />
            <p onclick="edit(4)">喝酒</p>
            <a href="javascript:remove(4)">-</a>
        <li>
            <input type="checkbox" checked="checked" />
            <p onclick="edit(5)">蹦迪</p>
            <a href="javascript:remove(5)">-</a>
    </ul>
        `
    $('.sect').html(str)

}

$('.add').on('keydown',function (e) {

e = e || window.event
let code = e.keyCode || e.which

const inp = this.value.trim()
if (!inp) return
if (code == 13) {
    var add = {
        index : data.length + 1,
        thing : inp,
    }
    data.push(add)
    bindHtnl()
}

})

$('.donelist').find('input',function(){
    console.log(this)
})

