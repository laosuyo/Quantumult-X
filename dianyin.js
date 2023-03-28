/******************************

脚本功能：电音阁dj——解锁VIP
温馨提示：资源来自全网搜集，如有侵权及时与我方联系：w6666999@gmail.com
下载地址：https://dwurl.cn/lNupAh 短链被拦截就自行苹果商店搜索下载
微信公众号：夕阳技术线报
资源论坛：www.laosu.xyz
资源网盘：http://zy.laosu.xyz
TG交流群：hhttps://t.me/xyjsxb
TG订阅：https://t.me/S666699999
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

http:\/\/api\.dianyinge\.com\/apis\/user\/user_info url script-response-body https://raw.githubusercontent.com/laosuyo/Quantumult-X/main/dianyin.js

[mitm] 

hostname = api.dianyinge.com



*******************************/


var objc = JSON.parse($response.body);

    objc = 
{
  "result" : {
    "share_num" : 0,
    "login_imei" : null,
    "birthday" : "",
    "invite_code" : 40910,
    "like_path" : "",
    "all_dance_dividend_money" : "999999",
    "sex" : 1,
    "vip_level" : "vip5",
    "share_coin" : "99999",
    "intro" : null,
    "vip_status" : 1,
    "path" : "http://dyg.dianyinge.com/dianyinge/uploads/upload_face/user_path.png",
    "day_dividend_money" : 0,
    "sign_num" : 0,
    "name" : "老苏rack",
    "fans_num" : 0,
    "vip_end" : "2999-11-11 00:00:00",
    "invite_num" : 0,
    "uid" : 40910,
    "coin" : "0.00",
    "phone" : "1888888888",
    "dance_dividend_money" : "99999",
    "follow_num" : 0,
    "message_num" : 1,
    "sign_status" : 2,
    "down_path" : "",
    "play_path" : "",
    "sign_coin" : 999,
    "cash_money" : "99999",
    "order_num" : 0
  },
  "msg" : "ok",
  "code" : "200"
}


$done({body : JSON.stringify(objc)});