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
^https:\/\/180\.97\.104\.134\/order\/customer\/homeandcompany url script-response-body https://raw.githubusercontent.com/Crazy-Z7/AdGuard/main/Bduad.conf
^https:\/\/yongche\.baidu\.com\/(marketing\/activity\/activitycard|\/goorder\/passenger\/baseinfo|\/gomarketing\/api\/popup\/getentrancecordovaurl) url script-response-body https://raw.githubusercontent.com/Crazy-Z7/AdGuard/main/Bduad.conf
^https:\/\/yongche\.baidu\.com\/goorder\/passenger\/notice url script-response-body https://raw.githubusercontent.com/Crazy-Z7/AdGuard/main/Bduad.conf
^https:\/\/afd\.baidu\.com url reject-dict
^https:\/\/map-mobile-opnimg.cdn.bcebos.com/* url reject-img
^https:\/\/newclient\.map\.baidu\.com\/living\/nearby\/api url reject-dict
^https:\/\/newclient\.map\.baidu\.com\/client\/(usersystem\/mine\/page|\/phpui2\/) url script-response-body https://raw.githubusercontent.com/Crazy-Z7/AdGuard/main/Bduad.conf
hostname = 36.152.44.187,yongche.baidu.com,map-mobile-opnimg.cdn.bcebos.com,newclient.map.baidu.com,afd.baidu.com

*********************************************/