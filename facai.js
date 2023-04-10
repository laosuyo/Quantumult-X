/******************************

脚本功能：发财tv（18+）+解锁VIP会员
温馨提示：资源来自全网搜集，如有侵权及时与我方联系：w6666999@gmail.com
微信公众号：夕阳助手科技
资源论坛：www.laosu.xyz
资源网盘：http://zy.laosu.xyz
TG交流群：hhttps://t.me/xyjsxb
TG订阅：https://t.me/S666699999
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

APP下载地址：

https://fctv111.com

https://fctv222.com

https://fctv333.com

https://fctv444.com

https://fctv555.com

*******************************

[rewrite_local]

^https:\/\/mdapi\.zhbt01\.com\/api\/video\/user\/info url script-response-body https://raw.githubusercontent.com/laosuyo/Quantumult-X/main/facai.js

[mitm] 
hostname = mdapi.zhbt01.com

*******************************/

var body = $response['body'];
let obj = JSON['parse']($response['body']);
obj = { "msg" : "成功", "data" : "9+5b72ccLbOPx2AJ/rMwnDrUBt0XNfeiVmUN38Gx87j8r2kK22xmQNzs9F/oEpkvuLhSOeYbAyGBUBQXib1diLaRR3S5acnWsH3E1rjOths3bkCFMN7f0Br6TNfB9z0dbo10jIjzegjj1nJXQ79luXblH1jkgikp0MRrBg8ua4kjfgglBMviUmwwJAWaaBSqPd/MVMouqVC6Yi/1+UIPRS+nmm5yHHUM1QIbS5soqOf7rNT5DvPbm1ehsJmk6qBE", "code" : 200 }
;
$done({body:JSON.stringify(obj)});
