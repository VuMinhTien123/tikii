'use strict';function _0x2884(){var _0x5c8f56=['design:returntype','default','fetchAccount','jwtService','login','delay','Không\x20tồn\x20tại\x20refresh_token\x20ở\x20cookies.\x20Please\x20do\x20login\x20again.','8898pqXsEF','JWT_REFRESH_SECRET','KPLkW','bcryptjs','__decorate','sign','cookie','design:type','sub','object','email','handleUserLogout','UserService','Hết\x20hạn\x20refresh_token.\x20Please\x20do\x20login\x20again.','metadata','findUserByToken','__esModule','body','userService','1675822oMIJeq','phone','refresh_token','defineProperty','prototype','password','BadRequestException','dotenv','avatar','__importDefault','Không\x20tồn\x20tại\x20refresh_token\x20ở\x20database.\x20Please\x20do\x20login\x20again.','JwtService','logout','clearCookie','Res','_id','getOwnPropertyDescriptor','function','@nestjs/jwt','../user/user.service','Tygxn','TNaax','178923kcMKNa','handleRefreshToken','1880049Xovxtz','AuthService','4143160Femcud','decorate','205iNrbVz','YacQk','design:paramtypes','fullName','Thông\x20tin\x20đăng\x20nhập\x20không\x20chính\x20xác','env','findByUsername','compareSync','__param','@nestjs/common','cookies','role','createRefreshToken','c21f969b5f03d33d43e04f8f136e7682.png','3275584qYmwFi','validateUser','Logout\x20success.','verify','config','14883584RZJFJK','__metadata','BenFG','JWT_REFRESH_EXPIRE_IN','updateUserToken','length'];_0x2884=function(){return _0x5c8f56;};return _0x2884();}var _0x1161a7=_0x4af2;(function(_0x2795e5,_0x1e3bb6){var _0x16044e=_0x4af2,_0x927cb3=_0x2795e5();while(!![]){try{var _0x27b243=-parseInt(_0x16044e(0x14d))/0x1+parseInt(_0x16044e(0x137))/0x2+-parseInt(_0x16044e(0x14f))/0x3+-parseInt(_0x16044e(0x161))/0x4+-parseInt(_0x16044e(0x153))/0x5*(parseInt(_0x16044e(0x173))/0x6)+-parseInt(_0x16044e(0x151))/0x7+parseInt(_0x16044e(0x166))/0x8;if(_0x27b243===_0x1e3bb6)break;else _0x927cb3['push'](_0x927cb3['shift']());}catch(_0x195bf0){_0x927cb3['push'](_0x927cb3['shift']());}}}(_0x2884,0x66d36));function _0x4af2(_0x5d1631,_0x28ecbb){var _0x288445=_0x2884();return _0x4af2=function(_0x4af2cf,_0x8774b2){_0x4af2cf=_0x4af2cf-0x133;var _0xbe07d4=_0x288445[_0x4af2cf];return _0xbe07d4;},_0x4af2(_0x5d1631,_0x28ecbb);}var __decorate=this&&this[_0x1161a7(0x177)]||function(_0x2a7483,_0x5e4d14,_0x2d1e94,_0x664311){var _0xefd82a=_0x1161a7,_0x38ffaa,_0x502a53=arguments[_0xefd82a(0x16b)],_0x255b54=_0x502a53<0x3?_0x5e4d14:null===_0x664311?_0x664311=Object[_0xefd82a(0x147)](_0x5e4d14,_0x2d1e94):_0x664311;if('object'==typeof Reflect&&_0xefd82a(0x148)==typeof Reflect[_0xefd82a(0x152)])_0x255b54=Reflect['decorate'](_0x2a7483,_0x5e4d14,_0x2d1e94,_0x664311);else{for(var _0x22baf2=_0x2a7483[_0xefd82a(0x16b)]-0x1;0x0<=_0x22baf2;_0x22baf2--)(_0x38ffaa=_0x2a7483[_0x22baf2])&&(_0x255b54=(_0x502a53<0x3?_0x38ffaa(_0x255b54):0x3<_0x502a53?_0x38ffaa(_0x5e4d14,_0x2d1e94,_0x255b54):_0x38ffaa(_0x5e4d14,_0x2d1e94))||_0x255b54);}return 0x3<_0x502a53&&_0x255b54&&Object['defineProperty'](_0x5e4d14,_0x2d1e94,_0x255b54),_0x255b54;},__metadata=this&&this[_0x1161a7(0x167)]||function(_0x1be3d4,_0x7b7eb5){var _0x5573bb=_0x1161a7;if(_0x5573bb(0x17c)==typeof Reflect&&'function'==typeof Reflect[_0x5573bb(0x181)])return Reflect[_0x5573bb(0x181)](_0x1be3d4,_0x7b7eb5);},__param=this&&this[_0x1161a7(0x15b)]||function(_0x3fc4e2,_0xca5c1a){return function(_0x5e2ccc,_0x4de579){_0xca5c1a(_0x5e2ccc,_0x4de579,_0x3fc4e2);};},__importDefault=this&&this[_0x1161a7(0x140)]||function(_0x585b47){var _0x1920ce=_0x1161a7;return _0x585b47&&_0x585b47[_0x1920ce(0x134)]?_0x585b47:{'default':_0x585b47};};Object[_0x1161a7(0x13a)](exports,_0x1161a7(0x134),{'value':!0x0}),exports[_0x1161a7(0x150)]=void 0x0;const common_1=require(_0x1161a7(0x15c)),user_service_1=require(_0x1161a7(0x14a)),jwt_1=require(_0x1161a7(0x149)),ms_1=__importDefault(require('ms')),bcrypt=(require(_0x1161a7(0x13e))[_0x1161a7(0x165)](),require(_0x1161a7(0x176)));let AuthService=class{constructor(_0x373bf6,_0x57abc7){var _0x35f6bb=_0x1161a7;this[_0x35f6bb(0x136)]=_0x373bf6,this[_0x35f6bb(0x16f)]=_0x57abc7;}async[_0x1161a7(0x162)](_0x28baf8,_0x39aed0){var _0x1e6461=_0x1161a7;_0x28baf8=await this[_0x1e6461(0x136)][_0x1e6461(0x159)](_0x28baf8);if(_0x28baf8&&bcrypt[_0x1e6461(0x15a)](_0x39aed0,_0x28baf8[_0x1e6461(0x13c)]))return _0x28baf8[_0x1e6461(0x13c)]=void 0x0,_0x28baf8;throw new common_1[(_0x1e6461(0x13d))](_0x1e6461(0x157));}async[_0x1161a7(0x170)](_0x44c10a,_0x4cff2a,_0x22863b){var _0x2344d1=_0x1161a7;const _0x590e18={'email':_0x44c10a[_0x2344d1(0x17d)],'phone':_0x44c10a[_0x2344d1(0x138)],'fullName':_0x44c10a[_0x2344d1(0x156)],'role':_0x44c10a[_0x2344d1(0x15e)],'sub':_0x44c10a['_id'],'avatar':_0x44c10a&&_0x44c10a[_0x2344d1(0x13f)]?_0x44c10a[_0x2344d1(0x13f)]:_0x2344d1(0x160)};var _0x247978=this[_0x2344d1(0x15f)](_0x590e18);return await this[_0x2344d1(0x136)]['updateUserToken'](_0x44c10a[_0x2344d1(0x146)],_0x247978),_0x4cff2a[_0x2344d1(0x179)](_0x2344d1(0x139),_0x247978,{'maxAge':(0x0,ms_1[_0x2344d1(0x16d)])(process[_0x2344d1(0x158)][_0x2344d1(0x169)]),'httpOnly':!0x0}),null!=(_0x4cff2a=null==_0x22863b?void 0x0:_0x22863b[_0x2344d1(0x135)])&&_0x4cff2a[_0x2344d1(0x171)]?new Promise((_0x3df534,_0x298a4c)=>{var _0x452030=_0x2344d1;if(_0x452030(0x154)===_0x452030(0x154)){var _0x2f23bd;setTimeout(()=>{var _0x16e4f5=_0x452030;if(_0x16e4f5(0x175)!==_0x16e4f5(0x168))_0x3df534({'access_token':this['jwtService'][_0x16e4f5(0x178)](_0x590e18),'user':{'email':_0x44c10a[_0x16e4f5(0x17d)],'phone':_0x44c10a[_0x16e4f5(0x138)],'fullName':_0x44c10a[_0x16e4f5(0x156)],'role':_0x44c10a[_0x16e4f5(0x15e)],'avatar':_0x44c10a[_0x16e4f5(0x13f)],'id':_0x44c10a[_0x16e4f5(0x146)]}});else{if(_0x16e4f5(0x17c)==typeof _0x1cfeb2&&_0x16e4f5(0x148)==typeof _0x19f08a[_0x16e4f5(0x181)])return _0x472d2b['metadata'](_0x449f87,_0x11e7eb);}},+(null==(_0x2f23bd=null==_0x22863b?void 0x0:_0x22863b[_0x452030(0x135)])?void 0x0:_0x2f23bd['delay']));}else{var _0x14f100;_0x95cc44(()=>{var _0x46c966=_0x452030;_0x1a83a1({'access_token':this[_0x46c966(0x16f)][_0x46c966(0x178)](_0x98cb6f),'user':{'email':_0x427ab6[_0x46c966(0x17d)],'phone':_0x283fda[_0x46c966(0x138)],'fullName':_0x433543[_0x46c966(0x156)],'role':_0x3db8d0[_0x46c966(0x15e)],'avatar':_0x59c7d1[_0x46c966(0x13f)],'id':_0x4f8d55[_0x46c966(0x146)]}});},+(null==(_0x14f100=null==_0x209555?void 0x0:_0x1b97af[_0x452030(0x135)])?void 0x0:_0x14f100['delay']));}}):{'access_token':this[_0x2344d1(0x16f)][_0x2344d1(0x178)](_0x590e18),'user':{'email':_0x44c10a['email'],'phone':_0x44c10a[_0x2344d1(0x138)],'fullName':_0x44c10a[_0x2344d1(0x156)],'role':_0x44c10a[_0x2344d1(0x15e)],'avatar':_0x44c10a[_0x2344d1(0x13f)],'id':_0x44c10a[_0x2344d1(0x146)]}};}[_0x1161a7(0x15f)](_0x371eca){var _0x1bfd51=_0x1161a7;return this[_0x1bfd51(0x16f)][_0x1bfd51(0x178)](_0x371eca,{'secret':process[_0x1bfd51(0x158)]['JWT_REFRESH_SECRET'],'expiresIn':process['env']['JWT_REFRESH_EXPIRE_IN']});}async[_0x1161a7(0x16e)](_0x5c0be1){var {_id:_0x5c0be1,phone:_0x100edf,email:_0x206476,fullName:_0x181c59,role:_0x3e58ed,avatar:_0x2255c0}=_0x5c0be1;return{'user':{'id':_0x5c0be1,'email':_0x206476,'phone':_0x100edf,'fullName':_0x181c59,'role':_0x3e58ed,'avatar':_0x2255c0}};}async[_0x1161a7(0x143)](_0x467444,_0x2e049a){var _0x1781aa=_0x1161a7;return _0x2e049a[_0x1781aa(0x144)](_0x1781aa(0x139)),await this['userService'][_0x1781aa(0x17e)](_0x467444),_0x1781aa(0x163);}async['handleRefreshToken'](_0x5c6f2e,_0x492751){var _0x24b04f=_0x1161a7;if(null==(_0x7e8a11=_0x5c6f2e[_0x24b04f(0x15d)])||!_0x7e8a11[_0x24b04f(0x139)])throw new common_1[(_0x24b04f(0x13d))](_0x24b04f(0x172));const _0x2ed72f=_0x5c6f2e[_0x24b04f(0x15d)][_0x24b04f(0x139)];var _0x7e8a11=await this[_0x24b04f(0x136)][_0x24b04f(0x133)](_0x2ed72f);if(!_0x7e8a11)throw new common_1[(_0x24b04f(0x13d))](_0x24b04f(0x141));try{if(_0x24b04f(0x14b)!==_0x24b04f(0x14b))throw _0xae8006[_0x24b04f(0x144)]('refresh_token'),new _0x121856[(_0x24b04f(0x13d))](_0x24b04f(0x180));else{var _0x5db607=this[_0x24b04f(0x16f)][_0x24b04f(0x164)](_0x2ed72f,{'secret':process[_0x24b04f(0x158)][_0x24b04f(0x174)]});if(_0x5db607){var _0x866071={'email':_0x5db607[_0x24b04f(0x17d)],'phone':_0x7e8a11['phone'],'fullName':_0x7e8a11[_0x24b04f(0x156)],'role':_0x5db607[_0x24b04f(0x15e)],'sub':_0x5db607['sub'],'avatar':_0x7e8a11&&_0x7e8a11['avatar']?_0x7e8a11[_0x24b04f(0x13f)]:_0x24b04f(0x160)};const _0x496e84=this[_0x24b04f(0x15f)](_0x866071);return await this[_0x24b04f(0x136)][_0x24b04f(0x16a)](_0x5db607[_0x24b04f(0x17b)],_0x496e84),_0x492751['cookie'](_0x24b04f(0x139),_0x496e84,{'maxAge':(0x0,ms_1[_0x24b04f(0x16d)])(process['env'][_0x24b04f(0x169)]),'httpOnly':!0x0}),{'access_token':this[_0x24b04f(0x16f)][_0x24b04f(0x178)](_0x866071),'user':{'email':_0x5db607[_0x24b04f(0x17d)],'phone':_0x5db607[_0x24b04f(0x138)],'fullName':_0x5db607[_0x24b04f(0x156)],'role':_0x5db607[_0x24b04f(0x15e)],'avatar':_0x5db607['avatar'],'id':_0x5db607[_0x24b04f(0x17b)]}};}}}catch(_0x475f0b){if(_0x24b04f(0x14c)!==_0x24b04f(0x14c))_0x58308f({'access_token':this['jwtService'][_0x24b04f(0x178)](_0x59f2f2),'user':{'email':_0x1f3571[_0x24b04f(0x17d)],'phone':_0x45c7d2['phone'],'fullName':_0x122337['fullName'],'role':_0x200e40[_0x24b04f(0x15e)],'avatar':_0x468d13['avatar'],'id':_0x250ba9[_0x24b04f(0x146)]}});else throw _0x492751[_0x24b04f(0x144)](_0x24b04f(0x139)),new common_1['BadRequestException'](_0x24b04f(0x180));}}};__decorate([__param(0x1,(0x0,common_1['Res'])({'passthrough':!0x0})),__param(0x2,(0x0,common_1['Req'])()),__metadata(_0x1161a7(0x17a),Function),__metadata(_0x1161a7(0x155),[Object,Object,Object]),__metadata(_0x1161a7(0x16c),Promise)],AuthService[_0x1161a7(0x13b)],_0x1161a7(0x170),null),__decorate([__param(0x1,(0x0,common_1[_0x1161a7(0x145)])({'passthrough':!0x0})),__metadata(_0x1161a7(0x17a),Function),__metadata(_0x1161a7(0x155),[String,Object]),__metadata(_0x1161a7(0x16c),Promise)],AuthService['prototype'],_0x1161a7(0x143),null),__decorate([__param(0x1,(0x0,common_1[_0x1161a7(0x145)])({'passthrough':!0x0})),__metadata(_0x1161a7(0x17a),Function),__metadata(_0x1161a7(0x155),[Object,Object]),__metadata(_0x1161a7(0x16c),Promise)],AuthService['prototype'],_0x1161a7(0x14e),null),AuthService=__decorate([(0x0,common_1['Injectable'])(),__metadata(_0x1161a7(0x155),[user_service_1[_0x1161a7(0x17f)],jwt_1[_0x1161a7(0x142)]])],AuthService),exports['AuthService']=AuthService;