/**************************************
作者:Zoo
日期:2023.07.12
cookie获取:公众号搜索卡夫享氏新厨艺，右下角 参谋福利，点击会员中心注册，获取成功即可注释cookie获取脚本 积分可兑换爱奇艺 腾讯视频会员 手机话费

注意!!!:Cookie有效期7天，7天之后需要重新获取Cookie

[rewrite_local]
https://fscrm.kraftheinz.net.cn/crm/public/index.php/api/v1/getUserInfo url script-request-header https://raw.githubusercontent.com/Crazy-Z7/Task/main/KafuxiangCookie.js

[task_local]
30 8 * * * https://raw.githubusercontent.com/Crazy-Z7/Task/main/Kafuxiang.js, tag=卡夫享积分签到,enabled=true
[MITM]
hostname = fscrm.kraftheinz.net.cn
*****************************************/

const _0xb218f2=_0x493a;function _0x493a(_0x2efeb1,_0x59c676){const _0x10e5f3=_0x4da8();return _0x493a=function(_0x415c1f,_0x11c9a6){_0x415c1f=_0x415c1f-(0x61*-0xc+-0xd5*0xe+0x1206);let _0x33839b=_0x10e5f3[_0x415c1f];return _0x33839b;},_0x493a(_0x2efeb1,_0x59c676);}function _0x4da8(){const _0x302826=['hp/api/v1/','1068GhlPsz','11WvJrdm','msg','BsaQX','fetch','ABDKZ','https://fs','ic/index.p','post','/7天','then','BcaCL','6277930rytmvx','Message','247296hpYkaq','GozyF','7325811uFpbIy','log','$task','NeedDays','YfUFU','LpwLA','r_tuhu','parse','write','1948510qfCGAD','1828nEpTFI','BCkrc','getdata','GET','uhu','method','27606396dYIhjF','fqbca','body','已连续签到:','签到结果:\x20签到成功','8NrhvFD','卡夫享','done','rfSxj','AddIntegra','Code','qdldg','rKey','gRPwo','签到结果:\x20','valueForKe','setValueFo','crm.krafth','VRowC','$httpClien','n/crm/publ','21brVwEw','_signheade','get','photonmang','dailySign','POST','积分增加:','read','254310TeaRYL','eFSUM','_signurl_t','einz.net.c','8NfIQTR',',\x20data:\x20'];_0x4da8=function(){return _0x302826;};return _0x4da8();}(function(_0x44ed8c,_0x307213){const _0x8c4036=_0x493a,_0x25999d=_0x44ed8c();while(!![]){try{const _0x2ecbe0=parseInt(_0x8c4036(0x214))/(-0x556*-0x1+-0x1*-0x1f61+0x125b*-0x2)*(-parseInt(_0x8c4036(0x1ea))/(0x160d+-0x4b*0x68+0x86d))+parseInt(_0x8c4036(0x1de))/(0x1cc0+0x4*-0xa7+-0x1a21*0x1)+parseInt(_0x8c4036(0x211))/(0x326+0xa*0x1d8+-0x1592)*(-parseInt(_0x8c4036(0x1e9))/(-0x1*0x1cfd+-0x11a5*-0x1+0xb5d))+parseInt(_0x8c4036(0x20d))/(0x23c4+-0xd13+-0x16ab)*(parseInt(_0x8c4036(0x205))/(-0x1*0x11b0+-0x5d5*-0x4+0x3*-0x1df))+-parseInt(_0x8c4036(0x1f5))/(0x2*0x9fa+-0x1414+-0x2*-0x14)*(parseInt(_0x8c4036(0x1e0))/(0x1497+-0x1*-0x77b+0x1c09*-0x1))+parseInt(_0x8c4036(0x1dc))/(-0x1a*-0xaa+-0x1ded*0x1+-0xcb3*-0x1)+parseInt(_0x8c4036(0x215))/(-0x1c3d+0x25*0x9f+-0x3b*-0x17)*(parseInt(_0x8c4036(0x1f0))/(-0x9a1+0x7*-0x2a6+-0x1f*-0xe9));if(_0x2ecbe0===_0x307213)break;else _0x25999d['push'](_0x25999d['shift']());}catch(_0x3d7b00){_0x25999d['push'](_0x25999d['shift']());}}}(_0x4da8,-0x138e*0x79+0x1ae6f*-0x2+-0x154736*-0x1));const cookieName=_0xb218f2(0x1f6),signurlKey=_0xb218f2(0x208)+_0xb218f2(0x20f)+_0xb218f2(0x1ee),signheaderKey=_0xb218f2(0x208)+_0xb218f2(0x206)+_0xb218f2(0x1e6),photonmang=init(),signurlVal=photonmang[_0xb218f2(0x1ec)](signurlKey),signheaderVal=photonmang[_0xb218f2(0x1ec)](signheaderKey);sign();function sign(){const _0x288ce2=_0xb218f2,_0x4cc87e={'rfSxj':function(_0x2fea7d,_0x3ac9b0){return _0x2fea7d==_0x3ac9b0;},'BsaQX':function(_0x55d595,_0xa884ff){return _0x55d595+_0xa884ff;},'fqbca':function(_0x11ebbc,_0x4c18cd){return _0x11ebbc+_0x4c18cd;},'YfUFU':function(_0x38325b,_0x168fdf){return _0x38325b==_0x168fdf;}},_0x231909={'url':_0x288ce2(0x1d6)+_0x288ce2(0x201)+_0x288ce2(0x210)+_0x288ce2(0x204)+_0x288ce2(0x1d7)+_0x288ce2(0x213)+_0x288ce2(0x209),'headers':JSON[_0x288ce2(0x1e7)](signheaderVal)};_0x231909[_0x288ce2(0x1f2)]='{}',photonmang[_0x288ce2(0x1d8)](_0x231909,(_0x1470a5,_0xca48a0,_0x219f1b)=>{const _0x46b6fb=_0x288ce2;photonmang[_0x46b6fb(0x1e1)](cookieName+_0x46b6fb(0x212)+_0x219f1b);const _0x4a3043=''+cookieName;let _0x24987b='',_0x8de20f='';const _0x57a986=JSON[_0x46b6fb(0x1e7)](_0x219f1b);if(_0x4cc87e[_0x46b6fb(0x1f8)](_0x57a986[_0x46b6fb(0x1fa)],-0x12a9+-0x38*-0x43+0x402))_0x24987b=_0x46b6fb(0x1f4),_0x8de20f+=_0x4cc87e[_0x46b6fb(0x217)](_0x46b6fb(0x20b)+_0x57a986[_0x46b6fb(0x1f9)+'l'],'\x0a'),_0x8de20f+=_0x4cc87e[_0x46b6fb(0x1f1)](_0x46b6fb(0x1f3)+_0x57a986[_0x46b6fb(0x1e3)],_0x46b6fb(0x1d9));else _0x4cc87e[_0x46b6fb(0x1e4)](_0x57a986[_0x46b6fb(0x1fa)],-0x5*0x1d7+-0x2*0x355+-0x83*-0x1f)&&(_0x24987b=_0x46b6fb(0x1fe)+_0x57a986[_0x46b6fb(0x1dd)]);photonmang[_0x46b6fb(0x216)](_0x4a3043,_0x24987b,_0x8de20f),photonmang[_0x46b6fb(0x1f7)]();});}function init(){const _0x4e8628=_0xb218f2,_0x49e299={'qdldg':function(_0x4b6416,_0x4ca3d7){return _0x4b6416===_0x4ca3d7;},'BcaCL':function(_0x5c525c,_0x5f559c){return _0x5c525c===_0x5f559c;},'BCkrc':function(_0x46b48b){return _0x46b48b();},'eFSUM':function(_0x5580b3){return _0x5580b3();},'LpwLA':function(_0x26325e,_0x761854,_0x428a3f,_0x1a0f77){return _0x26325e(_0x761854,_0x428a3f,_0x1a0f77);},'gRPwo':_0x4e8628(0x1ed),'VRowC':function(_0x502a4a){return _0x502a4a();},'ABDKZ':_0x4e8628(0x20a),'GozyF':function(_0x488154,_0x54215d){return _0x488154(_0x54215d);}};return isSurge=()=>{const _0x411f20=_0x4e8628;return _0x49e299[_0x411f20(0x1fb)](undefined,this[_0x411f20(0x203)+'t'])?![]:!![];},isQuanX=()=>{const _0xe1a543=_0x4e8628;return _0x49e299[_0xe1a543(0x1db)](undefined,this[_0xe1a543(0x1e2)])?![]:!![];},getdata=_0x55ec4b=>{const _0x5ace93=_0x4e8628;if(_0x49e299[_0x5ace93(0x1eb)](isSurge))return $persistentStore[_0x5ace93(0x20c)](_0x55ec4b);if(_0x49e299[_0x5ace93(0x20e)](isQuanX))return $prefs[_0x5ace93(0x1ff)+'y'](_0x55ec4b);},setdata=(_0x52e48e,_0x2c7a98)=>{const _0xec2a05=_0x4e8628;if(_0x49e299[_0xec2a05(0x20e)](isSurge))return $persistentStore[_0xec2a05(0x1e8)](_0x52e48e,_0x2c7a98);if(_0x49e299[_0xec2a05(0x1eb)](isQuanX))return $prefs[_0xec2a05(0x200)+_0xec2a05(0x1fc)](_0x52e48e,_0x2c7a98);},msg=(_0x5959c1,_0x575dc0,_0x31fa1c)=>{const _0x4b73b0=_0x4e8628;if(_0x49e299[_0x4b73b0(0x20e)](isSurge))$notification[_0x4b73b0(0x1d8)](_0x5959c1,_0x575dc0,_0x31fa1c);if(_0x49e299[_0x4b73b0(0x20e)](isQuanX))_0x49e299[_0x4b73b0(0x1e5)]($notify,_0x5959c1,_0x575dc0,_0x31fa1c);},log=_0x44a0ae=>console[_0x4e8628(0x1e1)](_0x44a0ae),get=(_0x568300,_0x396496)=>{const _0x2378d2=_0x4e8628;_0x49e299[_0x2378d2(0x1eb)](isSurge)&&$httpClient[_0x2378d2(0x207)](_0x568300,_0x396496),_0x49e299[_0x2378d2(0x1eb)](isQuanX)&&(_0x568300[_0x2378d2(0x1ef)]=_0x49e299[_0x2378d2(0x1fd)],$task[_0x2378d2(0x1d4)](_0x568300)[_0x2378d2(0x1da)](_0x35e829=>_0x396496(null,{},_0x35e829[_0x2378d2(0x1f2)])));},post=(_0x44c26e,_0x67ffda)=>{const _0x5e6792=_0x4e8628;_0x49e299[_0x5e6792(0x20e)](isSurge)&&$httpClient[_0x5e6792(0x1d8)](_0x44c26e,_0x67ffda),_0x49e299[_0x5e6792(0x202)](isQuanX)&&(_0x44c26e[_0x5e6792(0x1ef)]=_0x49e299[_0x5e6792(0x1d5)],$task[_0x5e6792(0x1d4)](_0x44c26e)[_0x5e6792(0x1da)](_0x23b2ee=>_0x67ffda(null,{},_0x23b2ee[_0x5e6792(0x1f2)])));},done=(_0x32a4c5={})=>{const _0xca9024=_0x4e8628;_0x49e299[_0xca9024(0x1df)]($done,_0x32a4c5);},{'isSurge':isSurge,'isQuanX':isQuanX,'msg':msg,'log':log,'getdata':getdata,'setdata':setdata,'get':get,'post':post,'done':done};}
