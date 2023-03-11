/*******************************

脚本名称:  简影——(解锁会员)v6.9.0
更新时间：2023年3月7日 下午11:36
温馨提示：资源来自全网搜集，如有侵权及时与我方联系：w6666999@gmail.com
软件地址：苹果商店搜索
更新时间：2023年3月7日
微信公众号：夕阳技术线报
资源论坛：www.laosu.xyz
资源网盘：http://zy.laosu.xyz
TG交流群：hhttps://t.me/xyjsxb
TG订阅：https://t.me/S666699999
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/api.jianmovie.com url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/jianmovie.js

[mitm] 

hostname = api.jianmovie.com

*******************************/

var body = $response.body.replace(/"vip_type":\d/g,'"vip_type":1')
.replace(/"is_vip":\d/g,'"is_vip":1')
.replace(/"vip_expire_time":\d+/g,'"vip_expire_time":4567891235')
.replace(/"balance":\d+/g,'"balance":99999')
.replace(/"success":\d/g,'"success":1')
$done({ body });