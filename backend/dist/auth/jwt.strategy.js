'use strict';var _0x42dcdf=_0x1296;(function(_0x36b7bd,_0x3e090f){var _0x133b19=_0x1296,_0x59461d=_0x36b7bd();while(!![]){try{var _0x127f79=-parseInt(_0x133b19(0x86))/0x1+parseInt(_0x133b19(0x93))/0x2*(parseInt(_0x133b19(0xa0))/0x3)+-parseInt(_0x133b19(0x9e))/0x4*(-parseInt(_0x133b19(0x98))/0x5)+-parseInt(_0x133b19(0xa2))/0x6+parseInt(_0x133b19(0x96))/0x7+-parseInt(_0x133b19(0x92))/0x8*(parseInt(_0x133b19(0x90))/0x9)+parseInt(_0x133b19(0x9f))/0xa*(-parseInt(_0x133b19(0x89))/0xb);if(_0x127f79===_0x3e090f)break;else _0x59461d['push'](_0x59461d['shift']());}catch(_0x31445c){_0x59461d['push'](_0x59461d['shift']());}}}(_0x1c90,0xa39c1));var __decorate=this&&this[_0x42dcdf(0x8e)]||function(_0x3e30ce,_0x43dc28,_0x3e389f,_0x2dfff4){var _0x4f776e=_0x42dcdf,_0x393a25,_0x47bceb=arguments[_0x4f776e(0x8d)],_0x4749bf=_0x47bceb<0x3?_0x43dc28:null===_0x2dfff4?_0x2dfff4=Object[_0x4f776e(0x91)](_0x43dc28,_0x3e389f):_0x2dfff4;if('object'==typeof Reflect&&'function'==typeof Reflect['decorate'])_0x4749bf=Reflect[_0x4f776e(0x8b)](_0x3e30ce,_0x43dc28,_0x3e389f,_0x2dfff4);else{for(var _0xdbcb79=_0x3e30ce[_0x4f776e(0x8d)]-0x1;0x0<=_0xdbcb79;_0xdbcb79--)(_0x393a25=_0x3e30ce[_0xdbcb79])&&(_0x4749bf=(_0x47bceb<0x3?_0x393a25(_0x4749bf):0x3<_0x47bceb?_0x393a25(_0x43dc28,_0x3e389f,_0x4749bf):_0x393a25(_0x43dc28,_0x3e389f))||_0x4749bf);}return 0x3<_0x47bceb&&_0x4749bf&&Object[_0x4f776e(0x82)](_0x43dc28,_0x3e389f,_0x4749bf),_0x4749bf;},__metadata=this&&this[_0x42dcdf(0x8a)]||function(_0x3179e0,_0x2301e9){var _0x30a7a7=_0x42dcdf;if('object'==typeof Reflect&&_0x30a7a7(0x88)==typeof Reflect[_0x30a7a7(0x8f)])return Reflect['metadata'](_0x3179e0,_0x2301e9);};Object[_0x42dcdf(0x82)](exports,_0x42dcdf(0x99),{'value':!0x0}),exports[_0x42dcdf(0x87)]=void 0x0;const passport_jwt_1=require(_0x42dcdf(0xa4)),passport_1=require(_0x42dcdf(0x97)),common_1=require(_0x42dcdf(0x83));function _0x1296(_0x5c6c08,_0x4566ce){var _0x1c90e9=_0x1c90();return _0x1296=function(_0x1296d2,_0x9f6ed8){_0x1296d2=_0x1296d2-0x82;var _0x34e125=_0x1c90e9[_0x1296d2];return _0x34e125;},_0x1296(_0x5c6c08,_0x4566ce);}function _0x1c90(){var _0x401992=['passport-jwt','defineProperty','@nestjs/common','email','JWT_ACCESS_SECRET','222328ZzlMQd','JwtStrategy','function','11YMCLwU','__metadata','decorate','config','length','__decorate','metadata','3183426eeFPLm','getOwnPropertyDescriptor','24VpwSgL','37112BzHaxU','Injectable','ExtractJwt','8063027VhGziE','@nestjs/passport','815IgzIGV','__esModule','avatar','validate','env','PassportStrategy','16812eTZtKt','880550Dmpeqb','153cMcfZx','phone','4449816gGOEeN','design:paramtypes'];_0x1c90=function(){return _0x401992;};return _0x1c90();}require('dotenv')[_0x42dcdf(0x8c)]();let JwtStrategy=class extends(0x0,passport_1[_0x42dcdf(0x9d)])(passport_jwt_1['Strategy']){constructor(){var _0x56748e=_0x42dcdf;super({'jwtFromRequest':passport_jwt_1[_0x56748e(0x95)]['fromAuthHeaderAsBearerToken'](),'ignoreExpiration':!0x1,'secretOrKey':process[_0x56748e(0x9c)][_0x56748e(0x85)]});}async[_0x42dcdf(0x9b)](_0x83a4c6){var _0x21beef=_0x42dcdf;return{'_id':_0x83a4c6['sub'],'phone':_0x83a4c6[_0x21beef(0xa1)],'email':_0x83a4c6[_0x21beef(0x84)],'fullName':_0x83a4c6['fullName'],'role':_0x83a4c6['role'],'avatar':_0x83a4c6[_0x21beef(0x9a)]};}};JwtStrategy=__decorate([(0x0,common_1[_0x42dcdf(0x94)])(),__metadata(_0x42dcdf(0xa3),[])],JwtStrategy),exports[_0x42dcdf(0x87)]=JwtStrategy;