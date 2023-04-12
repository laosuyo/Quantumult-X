/******************************

脚本功能：波点音乐/解锁VIP
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
https:\/\/bd-api\.kuwo\.cn url script-response-body https://raw.githubusercontent.com/laosuyo/Quantumult-X/main/bodian.js

[mitm]
hostname = bd-api.kuwo.cn

*************************************/


var body = $response.body;
body = body.replace(/\"expireDate":\d+/g, '\"expireDate":4092599349000');
body = body.replace(/\"isVip":\d+/g, '\"isVip":1');
body = body.replace(/\"vip":\d+/g, '\"vip":1');
$done({body});