/******************************

脚本功能：夸克/vip功能
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
https?:\/\/drive.*\.quark\.cn\/.+\/clouddrive\/(member.+|distribute\/detail.+|capacity\/growth\/info) url script-response-body https://raw.githubusercontent.com/laosuyo/Quantumult-X/main/kuake.js

[mitm]
hostname = drive*.quark.cn

*************************************/

var body = $response.body;
var chxm1023 = JSON.parse(body);

const vipa = '/clouddrive/member';
const vipb = '/clouddrive/distribute/detail';
const vipc = '/clouddrive/capacity/growth/info';

if ($request.url.indexOf(vipa) != -1){
  chxm1023.data = {
    "member_type": "SUPER_VIP",
    "image_backup": 1,
    "deep_recycle_stat": {
      "recycle_normal_serve_days": 10,
      "recycle_pay_serve_days": 30,
      "deep_recycle_serve_days": 180
    },
    "member_info": {
      "video_save_to_uses": 0,
      "video_save_to_remains": -1,
      "file_save_to_remains": -1,
      "offline_download_remains": -1,
      "member_type_map": {
        "MINI_VIP": {
          "video_save_to_total": 10
        }
      }
    },
    "acc_status": 0,
    "secret_use_capacity": 55042952572,
    "super_vip_exp_at": 4092599349000,
    "use_capacity": 55042952572,
    "video_backup": 1,
    "extend_capacity_composition": {},
    "is_new_user": false,
    "member_status": {
      "Z_VIP": "UNPAID",
      "VIP": "UNPAID",
      "SUPER_VIP": "UNPAID",
      "MINI_VIP": "UNPAID"
    },
    "secret_total_capacity": 109951162777600,
    "subscribe_pay_channel_map": {},
    "fr_subscribe_status_map": {},
    "exp_at": 4092599349000,
    "subscribe_status_map": {},
    "total_capacity": 109951162777600
  };
}

if ($request.url.indexOf(vipb) != -1){
  chxm1023.data = {
    "last_id": 0,
    "last_page": true,
    "distribute_detail": [{
      "title": "SVIP会员",
      "product_category": "MEMBER",
      "member_detail": {
        "member_type": "SUPER_VIP",
        "capacity": 109951162777600
      },
      "expired_at": 4092599349000
    }]
  };
}

if ($request.url.indexOf(vipc) != -1){
  chxm1023.data = {
    "member_type": "SUPER_VIP",
    "super_vip_exp_at": 4092599349000,
    "use_capacity": 55029395707,
    "cap_growth": {
      "cur_total_cap": 0
    },
    "88VIP": true,
    "member_status": {
      "Z_VIP": "UNPAID",
      "SUPER_VIP": "UNPAID",
      "MINI_VIP": "UNPAID",
      "VIP": "UNPAID"
    },
    "cap_sign": {
      "sign_daily": false,
      "sign_target": 7,
      "sign_daily_reward": 104857600,
      "sign_progress": 0,
      "sign_rewards": [{
        "name": "+100MB",
        "reward_cap": 104857600
      }, {
        "name": "+200MB",
        "highlight": "翻倍",
        "reward_cap": 209715200
      }, {
        "name": "+100MB",
        "reward_cap": 104857600
      }, {
        "name": "+100MB",
        "reward_cap": 104857600
      }, {
        "name": "+100MB",
        "reward_cap": 104857600
      }, {
        "name": "+100MB",
        "reward_cap": 104857600
      }, {
        "name": "+1024MB",
        "highlight": "翻十倍",
        "reward_cap": 1073741824
      }]
    },
    "cap_composition": {
      "other": 0,
      "member_own": 109951162777600
    },
    "total_capacity": 109951162777600
  };
}

$done({body : JSON.stringify(chxm1023)});