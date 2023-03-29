/******************************

脚本功能：问真八字——解锁VIP
温馨提示：资源来自全网搜集，如有侵权及时与我方联系：w6666999@gmail.com
下载地址：https://dwurl.cn/KxqHgv 短链被拦截就自行苹果商店搜索下载
微信公众号：夕阳技术线报
资源论坛：www.laosu.xyz
资源网盘：http://zy.laosu.xyz
TG交流群：hhttps://t.me/xyjsxb
TG订阅：https://t.me/S666699999
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/bzpp2\.iwzbz\.com\/api\/v1\.1\/user\/getpwnewios_v url script-response-body https://raw.githubusercontent.com/laosuyo/Quantumult-X/main/zhouyi.js

[mitm] 

hostname = bzpp2.iwzbz.com

*******************************/


var body = $response.body.replace(/vipLevel": 0/g,'vipLevel": 3')
.replace(/expires": "1970-01-01 00:00:00"/g,'expires": "2099-01-01 00:00:00"')
.replace(/vipTipsType": -1/g,'vipTipsType": 0')
$done({ body });
