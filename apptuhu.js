/**************************************
作者:Zoo
日期:2023.07.13
途虎app积分签到
cookie获取:打开途虎app我的页面获取Cookie后关闭脚本

[rewrite_local]
https://cl-gateway.tuhu.cn/cl-common-api/api/member/getSignInInfo url script-request-header https://raw.githubusercontent.com/Crazy-Z7/Task/main/apptuhuCookie.js

[task_local]
50 8 * * * https://raw.githubusercontent.com/Crazy-Z7/Task/main/apptuhu.js, tag=途虎app积分签到,enabled=true
[MITM]
hostname = cl-gateway.tuhu.cn
*****************************************/

const _0x3d47ca=_0x17d5;(function(_0x2d330e,_0x4f0aba){const _0x310a20=_0x17d5,_0x184916=_0x2d330e();while(!![]){try{const _0xb57014=parseInt(_0x310a20(0xf6))/(-0xbaf*-0x1+0xf71*0x1+-0x1b1f)+-parseInt(_0x310a20(0xf7))/(0xab8+-0x4*0x91+-0x872)+parseInt(_0x310a20(0xda))/(-0x419*-0x4+-0x1*0x1079+0x8*0x3)*(parseInt(_0x310a20(0xdb))/(0x1a5d*0x1+0x63a+-0x2093))+parseInt(_0x310a20(0x103))/(0xf6a+0xad3+0x347*-0x8)*(-parseInt(_0x310a20(0x101))/(0x633*0x3+0x17db+0x2a6e*-0x1))+-parseInt(_0x310a20(0xfb))/(0x1fd1+-0x49*0x65+-0x2fd)*(-parseInt(_0x310a20(0xe3))/(0x20*-0x11e+0x1a80+-0x948*-0x1))+-parseInt(_0x310a20(0xe5))/(0x2553+0xa2d*0x1+-0x1d*0x1a3)+-parseInt(_0x310a20(0x10c))/(-0x22fd+0x7*0x4e2+0x1*0xd9)*(-parseInt(_0x310a20(0xec))/(0x6f*-0x3+0x2204+0x4*-0x82b));if(_0xb57014===_0x4f0aba)break;else _0x184916['push'](_0x184916['shift']());}catch(_0x344811){_0x184916['push'](_0x184916['shift']());}}}(_0x4b46,-0x1c*0x13f4+0x162970+-0x7bda7));function _0x4b46(){const _0x28667f=['then','1206733GlwUJT','write','SFolg','method','$httpClien','AddIntegra','途虎app','RftZU','msg','body','1463304vIqdVo','2015208zEslwA','xvmRH','POST','photonmang','128086Qkhxdl','mhmzj','Message','feBDM','签到结果:\x20','_signurl_k','1013802SHREtx','SsIrV','30RIdJND','vykax','post','i.tuhu.cn/','r_kfx','parse','积分增加:','valueForKe','fetch','110hoaRbg','setValueFo','ion1','签到结果:\x20签到成功','https://ap','User/UserC','$task','hiFJC',',\x20data:\x20','_signheade','rKey','heckInVers','63EsJYGN','16696PvYpvN','Code','getdata','log','GET','read','已连续签到:','NeedDays','464BevVSE','VjFJX','8959464IpgcCe','bHroz','done','MtMgw','get','/7天'];_0x4b46=function(){return _0x28667f;};return _0x4b46();}const cookieName=_0x3d47ca(0xf2),signurlKey=_0x3d47ca(0xfa)+_0x3d47ca(0x100)+'fx',signheaderKey=_0x3d47ca(0xfa)+_0x3d47ca(0xd7)+_0x3d47ca(0x107),photonmang=init(),signurlVal=photonmang[_0x3d47ca(0xdd)](signurlKey),signheaderVal=photonmang[_0x3d47ca(0xdd)](signheaderKey);sign();function _0x17d5(_0x5655f4,_0x5edea4){const _0x97335=_0x4b46();return _0x17d5=function(_0x48ab72,_0x20ee36){_0x48ab72=_0x48ab72-(-0x3e*-0x36+0xd*0x276+-0x367*0xd);let _0x3ccef0=_0x97335[_0x48ab72];return _0x3ccef0;},_0x17d5(_0x5655f4,_0x5edea4);}function sign(){const _0xc6542b=_0x3d47ca,_0x4e57df={'feBDM':function(_0x23f391,_0x2f9cb2){return _0x23f391==_0x2f9cb2;},'SsIrV':function(_0x410589,_0x4f4a57){return _0x410589+_0x4f4a57;},'MtMgw':function(_0x45fa1e,_0x22a6dd){return _0x45fa1e==_0x22a6dd;}},_0x53e2e9={'url':_0xc6542b(0x110)+_0xc6542b(0x106)+_0xc6542b(0x111)+_0xc6542b(0xd9)+_0xc6542b(0x10e),'headers':JSON[_0xc6542b(0x108)](signheaderVal)};_0x53e2e9[_0xc6542b(0xf5)]='{}',photonmang[_0xc6542b(0x105)](_0x53e2e9,(_0x230ac4,_0x1b1047,_0x223466)=>{const _0x5dd8b4=_0xc6542b;photonmang[_0x5dd8b4(0xde)](cookieName+_0x5dd8b4(0x114)+_0x223466);const _0x313920=''+cookieName;let _0x43cf16='',_0x32e282='';const _0x4952d9=JSON[_0x5dd8b4(0x108)](_0x223466);if(_0x4e57df[_0x5dd8b4(0xfe)](_0x4952d9[_0x5dd8b4(0xdc)],-0x1*-0x2240+-0xe9*0x5+0xe*-0x21f))_0x43cf16=_0x5dd8b4(0x10f),_0x32e282+=_0x4e57df[_0x5dd8b4(0x102)](_0x5dd8b4(0x109)+_0x4952d9[_0x5dd8b4(0xf1)+'l'],'\x0a'),_0x32e282+=_0x4e57df[_0x5dd8b4(0x102)](_0x5dd8b4(0xe1)+_0x4952d9[_0x5dd8b4(0xe2)],_0x5dd8b4(0xea));else _0x4e57df[_0x5dd8b4(0xe8)](_0x4952d9[_0x5dd8b4(0xdc)],0xd91*-0x1+0x15ba+-0x829*0x1)&&(_0x43cf16=_0x5dd8b4(0xff)+_0x4952d9[_0x5dd8b4(0xfd)]);photonmang[_0x5dd8b4(0xf4)](_0x313920,_0x43cf16,_0x32e282),photonmang[_0x5dd8b4(0xe7)]();});}function init(){const _0x96a226=_0x3d47ca,_0x5b96a5={'VjFJX':function(_0x2de7fd,_0x3308af){return _0x2de7fd===_0x3308af;},'mhmzj':function(_0x2df8f4){return _0x2df8f4();},'hiFJC':function(_0x27938e){return _0x27938e();},'RftZU':function(_0x5bd927,_0x40caf8,_0x2e498c,_0x2ca560){return _0x5bd927(_0x40caf8,_0x2e498c,_0x2ca560);},'SFolg':_0x96a226(0xdf),'bHroz':function(_0x3ebff5){return _0x3ebff5();},'vykax':_0x96a226(0xf9),'xvmRH':function(_0xd37036,_0x435c72){return _0xd37036(_0x435c72);}};return isSurge=()=>{const _0x3eb060=_0x96a226;return _0x5b96a5[_0x3eb060(0xe4)](undefined,this[_0x3eb060(0xf0)+'t'])?![]:!![];},isQuanX=()=>{const _0x49cf20=_0x96a226;return _0x5b96a5[_0x49cf20(0xe4)](undefined,this[_0x49cf20(0x112)])?![]:!![];},getdata=_0x173a4a=>{const _0xe050a4=_0x96a226;if(_0x5b96a5[_0xe050a4(0xfc)](isSurge))return $persistentStore[_0xe050a4(0xe0)](_0x173a4a);if(_0x5b96a5[_0xe050a4(0x113)](isQuanX))return $prefs[_0xe050a4(0x10a)+'y'](_0x173a4a);},setdata=(_0x182979,_0x5b02f6)=>{const _0x2ceaab=_0x96a226;if(_0x5b96a5[_0x2ceaab(0xfc)](isSurge))return $persistentStore[_0x2ceaab(0xed)](_0x182979,_0x5b02f6);if(_0x5b96a5[_0x2ceaab(0xfc)](isQuanX))return $prefs[_0x2ceaab(0x10d)+_0x2ceaab(0xd8)](_0x182979,_0x5b02f6);},msg=(_0x124c37,_0x15743d,_0x2e2dea)=>{const _0x3ab5c8=_0x96a226;if(_0x5b96a5[_0x3ab5c8(0xfc)](isSurge))$notification[_0x3ab5c8(0x105)](_0x124c37,_0x15743d,_0x2e2dea);if(_0x5b96a5[_0x3ab5c8(0xfc)](isQuanX))_0x5b96a5[_0x3ab5c8(0xf3)]($notify,_0x124c37,_0x15743d,_0x2e2dea);},log=_0x2ef9b4=>console[_0x96a226(0xde)](_0x2ef9b4),get=(_0x153f72,_0x116eec)=>{const _0x3bd0c3=_0x96a226;_0x5b96a5[_0x3bd0c3(0xfc)](isSurge)&&$httpClient[_0x3bd0c3(0xe9)](_0x153f72,_0x116eec),_0x5b96a5[_0x3bd0c3(0x113)](isQuanX)&&(_0x153f72[_0x3bd0c3(0xef)]=_0x5b96a5[_0x3bd0c3(0xee)],$task[_0x3bd0c3(0x10b)](_0x153f72)[_0x3bd0c3(0xeb)](_0x4a464c=>_0x116eec(null,{},_0x4a464c[_0x3bd0c3(0xf5)])));},post=(_0x2ac28e,_0x2f54b9)=>{const _0x146092=_0x96a226;_0x5b96a5[_0x146092(0xe6)](isSurge)&&$httpClient[_0x146092(0x105)](_0x2ac28e,_0x2f54b9),_0x5b96a5[_0x146092(0x113)](isQuanX)&&(_0x2ac28e[_0x146092(0xef)]=_0x5b96a5[_0x146092(0x104)],$task[_0x146092(0x10b)](_0x2ac28e)[_0x146092(0xeb)](_0x1b2d69=>_0x2f54b9(null,{},_0x1b2d69[_0x146092(0xf5)])));},done=(_0x3c2254={})=>{const _0x50928b=_0x96a226;_0x5b96a5[_0x50928b(0xf8)]($done,_0x3c2254);},{'isSurge':isSurge,'isQuanX':isQuanX,'msg':msg,'log':log,'getdata':getdata,'setdata':setdata,'get':get,'post':post,'done':done};}
