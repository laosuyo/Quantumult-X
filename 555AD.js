/******************************

脚本功能：555去广告脚本
温馨提示：资源来自全网搜集，如有侵权及时与我方联系：w6666999@gmail.com
下载地址：自行苹果商店搜索下载
微信公众号：夕阳助手科技
资源论坛：www.laosu.xyz
资源网盘：http://zy.laosu.xyz
TG交流群：hhttps://t.me/xyjsxb
TG订阅：https://t.me/S666699999
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?:\/\/run\.api\.qyfxgd\.cn:\d+\/api\/v\d\/movie\/index_recommend url script-response-body https://raw.githubusercontent.com/laosuyo/Quantumult-X/main/555AD.js
^https?:\/\/run\.api\.qyfxgd\.cn:\d+\/api\/v\d\/advert url reject

[mitm]

hostname = run.api.qyfxgd.cn

**********************************************/

let obj=JSON.parse($response.body);obj.data=obj.data.filter(t=>"advert_self"!==t.layout),obj.data.forEach(t=>{t.list=t.list.filter(t=>3!==t.type)}),$done({body:JSON.stringify(obj)});