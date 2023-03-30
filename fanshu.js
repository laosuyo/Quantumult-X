/******************************

脚本功能：番薯小说——解锁VIP
温馨提示：资源来自全网搜集，如有侵权及时与我方联系：w6666999@gmail.com
下载地址：https://dwurl.cn/recIzG 短链被拦截就自行苹果商店搜索下载
微信公众号：夕阳技术线报
资源论坛：www.laosu.xyz
资源网盘：http://zy.laosu.xyz
TG交流群：hhttps://t.me/xyjsxb
TG订阅：https://t.me/S666699999
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/ggs\.manmeng168\.com url script-response-body https://raw.githubusercontent.com/laosuyo/Quantumult-X/main/fanshu.js

[mitm]

hostname = ggs.manmeng168.com

*************************************/


body = $response.body.replace(/\"vip":\w+/g, '\"vip":true').replace(/\"vip_end_time":\d+/g, '\"vip_end_time":4092599349000');

$done({body});