/******************************

温馨提示：资源来自全网搜集，如有侵权及时与我方联系：w6666999@gmail.com
脚本功能：大神水印——解锁VIP
下载地址：https://dwurl.cn/gpXw15 ，短链被拦截就自行苹果商店搜索
软件版本：1.3.0
更新时间：2023年3月7日
微信公众号：夕阳技术线报
资源论坛：www.laosu.xyz
资源网盘：http://zy.laosu.xyz
TG交流群：hhttps://t.me/xyjsxb
TG订阅：https://t.me/S666699999
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/dashen.shuiyinyu.com\/m\/user\/get_user_info url script-response-body https://raw.githubusercontent.com/laosuyo/Quantumult-X/main/dashen.js

[mitm] 

hostname = dashen.shuiyinyu.com

*******************************/

var body = $response.body.replace(/vip_expire_time": \w+/g,'vip_expire_time": 4076744128000')
.replace(/auto_subscribe_or_permanent_vip": \w+/g,'auto_subscribe_or_permanent_vip": true')
$done({ body });
