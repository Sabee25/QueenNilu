const _0x49ebaa=_0x8d15;function _0x8d15(_0x5df90c,_0x5a3fb3){const _0x4acd33=_0x5221();return _0x8d15=function(_0x316786,_0x184195){_0x316786=_0x316786-0x89;let _0x522188=_0x4acd33[_0x316786];return _0x522188;},_0x8d15(_0x5df90c,_0x5a3fb3);}(function(_0x2e0222,_0xe3267c){const _0x222815=_0x8d15,_0x5b3d39=_0x2e0222();while(!![]){try{const _0x183767=-parseInt(_0x222815(0x153))/0x1+parseInt(_0x222815(0xd8))/0x2*(parseInt(_0x222815(0xb7))/0x3)+-parseInt(_0x222815(0xfa))/0x4+parseInt(_0x222815(0x8e))/0x5*(parseInt(_0x222815(0xb4))/0x6)+parseInt(_0x222815(0xe7))/0x7*(-parseInt(_0x222815(0x119))/0x8)+parseInt(_0x222815(0xd9))/0x9*(parseInt(_0x222815(0x124))/0xa)+parseInt(_0x222815(0x12a))/0xb*(parseInt(_0x222815(0x149))/0xc);if(_0x183767===_0xe3267c)break;else _0x5b3d39['push'](_0x5b3d39['shift']());}catch(_0x37b72b){_0x5b3d39['push'](_0x5b3d39['shift']());}}}(_0x5221,0xb6b78));const _0x184195=(function(){let _0x5d2918=!![];return function(_0x34904a,_0x2f92ab){const _0x63808f=_0x5d2918?function(){const _0x3e8792=_0x8d15;if(_0x2f92ab){const _0x210084=_0x2f92ab[_0x3e8792(0xf2)](_0x34904a,arguments);return _0x2f92ab=null,_0x210084;}}:function(){};return _0x5d2918=![],_0x63808f;};}()),_0x316786=_0x184195(this,function(){const _0x337f39=_0x8d15;return _0x316786['toString']()[_0x337f39(0x122)](_0x337f39(0xd5))[_0x337f39(0xa0)]()['constructor'](_0x316786)[_0x337f39(0x122)](_0x337f39(0xd5));});_0x316786(),require(_0x49ebaa(0x147));const {default:NiluBotMdConnect,useSingleFileAuthState,DisconnectReason,fetchLatestBaileysVersion,generateForwardMessageContent,prepareWAMessageMedia,generateWAMessageFromContent,generateMessageID,downloadContentFromMessage,makeInMemoryStore,jidDecode,proto}=require(_0x49ebaa(0x162)),{state,saveState}=useSingleFileAuthState(sessionName+_0x49ebaa(0xfb)),pino=require(_0x49ebaa(0xe8)),{Boom}=require(_0x49ebaa(0x101)),fs=require('fs'),yargs=require('yargs/yargs'),chalk=require(_0x49ebaa(0x156)),FileType=require('file-type'),path=require(_0x49ebaa(0x8a)),_=require(_0x49ebaa(0xdb)),axios=require('axios'),PhoneNumber=require(_0x49ebaa(0x14c)),{imageToWebp,videoToWebp,writeExifImg,writeExifVid}=require(_0x49ebaa(0x135)),{smsg,isUrl,generateMessageTag,getBuffer,getSizeMedia,fetchJson,await,sleep}=require(_0x49ebaa(0x108)),{TelegraPh}=require(_0x49ebaa(0xd1)),moment=require('moment-timezone'),express=require(_0x49ebaa(0x10f)),app=express(),PORT=0x1f40,getRandom=_0xbe8b07=>{const _0x36aa46=_0x49ebaa;return''+Math[_0x36aa46(0xde)](Math[_0x36aa46(0xb3)]()*0x2710)+_0xbe8b07;};var low;try{low=require(_0x49ebaa(0xce));}catch(_0x906b2e){low=require(_0x49ebaa(0x138));}const {Low,JSONFile}=low,mongoDB=require('./lib/mongoDB');global[_0x49ebaa(0x161)]=(_0x5b9304,_0x417faa='/',_0x49e20d={},_0x31c079)=>(_0x5b9304 in global[_0x49ebaa(0x131)]?global['APIs'][_0x5b9304]:_0x5b9304)+_0x417faa+(_0x49e20d||_0x31c079?'?'+new URLSearchParams(Object[_0x49ebaa(0xd3)]({..._0x49e20d,..._0x31c079?{[_0x31c079]:global[_0x49ebaa(0xd2)][_0x5b9304 in global['APIs']?global[_0x49ebaa(0x131)][_0x5b9304]:_0x5b9304]}:{}})):'');const store=makeInMemoryStore({'logger':pino()[_0x49ebaa(0x13b)]({'level':_0x49ebaa(0xae),'stream':_0x49ebaa(0x128)})});global[_0x49ebaa(0xb6)]=new Object(yargs(process[_0x49ebaa(0x9d)]['slice'](0x2))[_0x49ebaa(0xeb)](![])[_0x49ebaa(0x11a)]()),global['db']=new Low(/https?:\/\//[_0x49ebaa(0xcf)](opts['db']||'')?new cloudDBAdapter(opts['db']):/mongodb/[_0x49ebaa(0xcf)](opts['db'])?new mongoDB(opts['db']):new JSONFile(_0x49ebaa(0x8f))),global['DATABASE']=global['db'],global[_0x49ebaa(0xf4)]=async function loadDatabase(){const _0x1162e0=_0x49ebaa;if(global['db']['READ'])return new Promise(_0x389a52=>setInterval(function(){const _0x18c9c9=_0x8d15;!global['db']['READ']?(clearInterval(this),_0x389a52(global['db'][_0x18c9c9(0xcb)]==null?global[_0x18c9c9(0xf4)]():global['db'][_0x18c9c9(0xcb)])):null;},0x1*0x3e8));if(global['db'][_0x1162e0(0xcb)]!==null)return;global['db'][_0x1162e0(0x113)]=!![],await global['db'][_0x1162e0(0x13c)](),global['db']['READ']=![],global['db']['data']={'users':{},'chats':{},'database':{},'game':{},'settings':{},'others':{},'sticker':{},...global['db'][_0x1162e0(0xcb)]||{}},global['db'][_0x1162e0(0x8c)]=_[_0x1162e0(0x8c)](global['db'][_0x1162e0(0xcb)]);},loadDatabase(),process['on'](_0x49ebaa(0xe3),console[_0x49ebaa(0xf7)]);if(global['db'])setInterval(async()=>{const _0x47ef82=_0x49ebaa;if(global['db'][_0x47ef82(0xcb)])await global['db']['write']();},0x1e*0x3e8);async function startQueenNiluBot(){const _0x754418=_0x49ebaa,_0xa4b058=NiluBotMdConnect({'logger':pino({'level':_0x754418(0xae)}),'printQRInTerminal':!![],'browser':[_0x754418(0xfd),'Safari',_0x754418(0xac)],'auth':state});return store['bind'](_0xa4b058['ev']),_0xa4b058['ev']['on'](_0x754418(0xe4),async _0x86d1d=>{const _0x3c6e17=_0x754418;global['BOT_OFFLINE']==_0x3c6e17(0xab)&&_0xa4b058[_0x3c6e17(0xc8)](_0x3c6e17(0x16d));try{mek=_0x86d1d[_0x3c6e17(0xee)][0x0];if(!mek[_0x3c6e17(0x15a)])return;mek['message']=Object[_0x3c6e17(0xf1)](mek[_0x3c6e17(0x15a)])[0x0]===_0x3c6e17(0x115)?mek[_0x3c6e17(0x15a)]['ephemeralMessage'][_0x3c6e17(0x15a)]:mek[_0x3c6e17(0x15a)];if(mek['key']&&mek[_0x3c6e17(0x99)]['remoteJid']==='status@broadcast')return;if(!_0xa4b058[_0x3c6e17(0x105)]&&!mek[_0x3c6e17(0x99)][_0x3c6e17(0xc7)]&&_0x86d1d[_0x3c6e17(0x164)]===_0x3c6e17(0x102))return;if(mek[_0x3c6e17(0x99)]['id'][_0x3c6e17(0xc5)]('BAE5')&&mek['key']['id'][_0x3c6e17(0xc9)]===0x10)return;m=smsg(_0xa4b058,mek,store),require(_0x3c6e17(0xea))(_0xa4b058,m,_0x86d1d,store),READ_MASSAGE=='true'&&_0xa4b058[_0x3c6e17(0x92)]([mek['key']]);}catch(_0x278ce8){console['log'](_0x278ce8);}}),_0xa4b058['ev']['on'](_0x754418(0x16e),async _0xc91d73=>{const _0xe3c385=_0x754418;if(_0xc91d73['id']==_0xe3c385(0xd7))return;if(_0xc91d73['id']==_0xe3c385(0x93))return;if(_0xc91d73['id']==_0xe3c385(0x11d))return;const _0x1a2624=JSON['parse'](fs[_0xe3c385(0x13f)](_0xe3c385(0x132)));for(any in _0x1a2624){if(_0xc91d73['id'][_0xe3c385(0xff)](_0x1a2624[any]))return;}const _0x253967=global[_0xe3c385(0x111)]||db['data'][_0xe3c385(0xc1)][_0xc91d73['id']]['welcome'];if(!_0x253967)return;console[_0xe3c385(0x9e)](_0xc91d73);try{let _0x3c0ea0=await _0xa4b058[_0xe3c385(0x114)](_0xc91d73['id']),_0x579beb=_0xc91d73[_0xe3c385(0x12f)];for(let _0x16f220 of _0x579beb){try{ppuser=await _0xa4b058[_0xe3c385(0x100)](_0x16f220,_0xe3c385(0x14f));}catch{ppuser=_0xe3c385(0xca);}try{ppgroup=await _0xa4b058['profilePictureUrl'](_0xc91d73['id'],_0xe3c385(0x14f));}catch{ppgroup='https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg';}if(_0xc91d73[_0xe3c385(0xe1)]==_0xe3c385(0xc0)){var _0xbd112c=await getBuffer(ppuser);const _0x3cf620=_0xe3c385(0xbe)+_0x3c0ea0['subject']+'\x20@'+_0x16f220[_0xe3c385(0x104)]('@')[0x0]+'\x0a\x0a'+_0x3c0ea0[_0xe3c385(0xf0)],_0x56937=_0xe3c385(0xad),_0x4b813e=db[_0xe3c385(0xcb)][_0xe3c385(0xc1)][_0xc91d73['id']][_0xe3c385(0x13a)]||global['WELCOME']||_0x3cf620,_0x43bc1e=db['data'][_0xe3c385(0xc1)][_0xc91d73['id']][_0xe3c385(0x159)]||global[_0xe3c385(0x8d)]||ppuser,_0x1bc269=[{'index':0x1,'urlButton':{'displayText':_0xe3c385(0xb8),'url':_0xe3c385(0x90)}}],_0x246529={'image':{'url':_0x43bc1e},'caption':_0x4b813e,'footer':_0xe3c385(0xc4),'templateButtons':_0x1bc269,'headerType':0x4};_0xa4b058[_0xe3c385(0x10d)](_0xc91d73['id'],_0x246529);}else{if(_0xc91d73[_0xe3c385(0xe1)]=='remove'){const _0x1f4587='He/She\x20is\x20gone\x20bro\x20'+_0x3c0ea0[_0xe3c385(0x167)]+'\x20@'+_0x16f220[_0xe3c385(0x104)]('@')[0x0]+'\x0a\x0a'+_0x3c0ea0[_0xe3c385(0xf0)],_0xabcdf6=_0xe3c385(0xad),_0x4bd26c=db['data'][_0xe3c385(0xc1)][_0xc91d73['id']]['goodbye_message']||global[_0xe3c385(0x14e)]||_0x1f4587,_0x4288f6=db[_0xe3c385(0xcb)][_0xe3c385(0xc1)][_0xc91d73['id']][_0xe3c385(0x127)]||global[_0xe3c385(0x163)]||ppuser,_0x397863=[{'index':0x1,'urlButton':{'displayText':_0xe3c385(0xf3),'url':'https://youtube.com/c/Janithsadanuwan'}}],_0x26a78d={'image':{'url':_0x4288f6},'caption':_0x4bd26c,'footer':'ǫᴜᴇᴇɴ\x20ɴɪʟᴜ\x20ᴡᴀ\x20ʙᴏᴛ\x20ᴍᴅ','templateButtons':_0x397863,'headerType':0x4};_0xa4b058['sendMessage'](_0xc91d73['id'],_0x26a78d);}}}}catch(_0x5af4d9){console[_0xe3c385(0x9e)](_0x5af4d9);}}),_0xa4b058[_0x754418(0x89)]=_0xf53f1b=>{const _0x2815b4=_0x754418;if(!_0xf53f1b)return _0xf53f1b;if(/:\d+@/gi[_0x2815b4(0xcf)](_0xf53f1b)){let _0x1e57a6=jidDecode(_0xf53f1b)||{};return _0x1e57a6[_0x2815b4(0xf6)]&&_0x1e57a6['server']&&_0x1e57a6['user']+'@'+_0x1e57a6[_0x2815b4(0xf9)]||_0xf53f1b;}else return _0xf53f1b;},_0xa4b058['ev']['on'](_0x754418(0x160),_0x475332=>{const _0x2ec761=_0x754418;for(let _0x32e0c1 of _0x475332){let _0x2e2fcc=_0xa4b058[_0x2ec761(0x89)](_0x32e0c1['id']);if(store&&store[_0x2ec761(0x137)])store['contacts'][_0x2e2fcc]={'id':_0x2e2fcc,'name':_0x32e0c1[_0x2ec761(0x102)]};}}),_0xa4b058[_0x754418(0xaf)]=(_0x5e7784,_0x38715b=![])=>{const _0x576d5e=_0x754418;id=_0xa4b058[_0x576d5e(0x89)](_0x5e7784),_0x38715b=_0xa4b058[_0x576d5e(0xcc)]||_0x38715b;let _0x55183d;if(id[_0x576d5e(0xa4)](_0x576d5e(0x15c)))return new Promise(async _0x48a89a=>{const _0x857ed7=_0x576d5e;_0x55183d=store[_0x857ed7(0x137)][id]||{};if(!(_0x55183d['name']||_0x55183d[_0x857ed7(0x167)]))_0x55183d=_0xa4b058[_0x857ed7(0x114)](id)||{};_0x48a89a(_0x55183d['name']||_0x55183d['subject']||PhoneNumber('+'+id[_0x857ed7(0x11b)](_0x857ed7(0xec),''))['getNumber'](_0x857ed7(0x96)));});else _0x55183d=id===_0x576d5e(0x107)?{'id':id,'name':_0x576d5e(0x158)}:id===_0xa4b058[_0x576d5e(0x89)](_0xa4b058[_0x576d5e(0xf6)]['id'])?_0xa4b058[_0x576d5e(0xf6)]:store['contacts'][id]||{};return(_0x38715b?'':_0x55183d[_0x576d5e(0x98)])||_0x55183d[_0x576d5e(0x167)]||_0x55183d[_0x576d5e(0xdf)]||PhoneNumber('+'+_0x5e7784[_0x576d5e(0x11b)]('@s.whatsapp.net',''))[_0x576d5e(0xb0)](_0x576d5e(0x96));},_0xa4b058[_0x754418(0xfe)]=async(_0x52d0d8,_0x1730d3,_0x4f7038='',_0x1fa868={})=>{const _0x3c0d3b=_0x754418;let _0x1c4589=[];for(let _0xeafe56 of _0x1730d3){_0x1c4589[_0x3c0d3b(0x16b)]({'displayName':await _0xa4b058[_0x3c0d3b(0xaf)](_0xeafe56+'@s.whatsapp.net'),'vcard':'BEGIN:VCARD\x0aVERSION:3.0\x0aN:'+await _0xa4b058[_0x3c0d3b(0xaf)](_0xeafe56+_0x3c0d3b(0xec))+_0x3c0d3b(0xbf)+await _0xa4b058[_0x3c0d3b(0xaf)](_0xeafe56+_0x3c0d3b(0xec))+_0x3c0d3b(0x16f)+_0xeafe56+':'+_0xeafe56+_0x3c0d3b(0xb9)});}_0xa4b058['sendMessage'](_0x52d0d8,{'contacts':{'displayName':_0x1c4589[_0x3c0d3b(0xc9)]+'\x20Contact','contacts':_0x1c4589},..._0x1fa868},{'quoted':_0x4f7038});},_0xa4b058['setStatus']=_0x58b786=>{const _0xd14fac=_0x754418;return _0xa4b058[_0xd14fac(0xd4)]({'tag':'iq','attrs':{'to':_0xd14fac(0xec),'type':_0xd14fac(0x126),'xmlns':_0xd14fac(0x136)},'content':[{'tag':'status','attrs':{},'content':Buffer['from'](_0x58b786,_0xd14fac(0x142))}]}),_0x58b786;},_0xa4b058[_0x754418(0x105)]=!![],_0xa4b058[_0x754418(0x129)]=_0x205f3c=>smsg(_0xa4b058,_0x205f3c,store),_0xa4b058['ev']['on'](_0x754418(0x110),async _0x142b0a=>{const _0x450bd1=_0x754418,{connection:_0x99980d,lastDisconnect:_0xb8a65b}=_0x142b0a;if(_0x99980d===_0x450bd1(0xa8)){let _0x22dcad=new Boom(_0xb8a65b?.[_0x450bd1(0xf7)])?.[_0x450bd1(0x12b)][_0x450bd1(0xf5)];if(_0x22dcad===DisconnectReason[_0x450bd1(0xdc)])console[_0x450bd1(0x9e)](_0x450bd1(0x12e)),_0xa4b058[_0x450bd1(0xa5)]();else{if(_0x22dcad===DisconnectReason['connectionClosed'])console['log']('Connection\x20closed,\x20reconnecting....'),startQueenNiluBot();else{if(_0x22dcad===DisconnectReason[_0x450bd1(0xd0)])console[_0x450bd1(0x9e)](_0x450bd1(0xa9)),startQueenNiluBot();else{if(_0x22dcad===DisconnectReason[_0x450bd1(0x15f)])console[_0x450bd1(0x9e)](_0x450bd1(0x130)),_0xa4b058[_0x450bd1(0xa5)]();else{if(_0x22dcad===DisconnectReason[_0x450bd1(0x14d)])console[_0x450bd1(0x9e)]('Device\x20Logged\x20Out,\x20Please\x20Scan\x20Again\x20And\x20Run.'),_0xa4b058['logout']();else{if(_0x22dcad===DisconnectReason[_0x450bd1(0x106)])console[_0x450bd1(0x9e)]('Restart\x20Required,\x20Restarting...'),startQueenNiluBot();else{if(_0x22dcad===DisconnectReason[_0x450bd1(0x15d)])console[_0x450bd1(0x9e)](_0x450bd1(0x154)),startQueenNiluBot();else _0xa4b058[_0x450bd1(0xe2)]('Unknown\x20DisconnectReason:\x20'+_0x22dcad+'|'+_0x99980d);}}}}}}}_0x142b0a[_0x450bd1(0xbb)]==_0x450bd1(0xef)&&(await console[_0x450bd1(0x9e)](chalk[_0x450bd1(0x166)][_0x450bd1(0xc3)](_0x450bd1(0x10e))),await _0xa4b058['groupAcceptInvite'](_0x450bd1(0x152))[_0x450bd1(0x9b)](_0x5d49d6=>console['log'](_0x450bd1(0x94)))[_0x450bd1(0xe0)](_0x2193e5=>console[_0x450bd1(0x9e)](_0x450bd1(0xf7)))),_0x142b0a[_0x450bd1(0x109)]&&await console[_0x450bd1(0x9e)](chalk['green'][_0x450bd1(0xc3)](_0x450bd1(0xbd)));}),_0xa4b058['ev']['on']('creds.update',saveState),_0xa4b058[_0x754418(0x117)]=async(_0x3d39e7,_0x89f651,_0x575f81,_0x8987c1,_0x52e017={})=>{const _0x44c311=_0x754418;let _0x439709='',_0x5f1e9d=await axios['head'](_0x89f651);_0x439709=_0x5f1e9d[_0x44c311(0x14b)][_0x44c311(0x145)];if(_0x439709[_0x44c311(0x104)]('/')[0x1]===_0x44c311(0xda))return _0xa4b058['sendMessage'](_0x3d39e7,{'video':await getBuffer(_0x89f651),'caption':_0x575f81,'gifPlayback':!![],..._0x52e017},{'quoted':_0x8987c1,..._0x52e017});let _0x38b35e=_0x439709[_0x44c311(0x104)]('/')[0x0]+_0x44c311(0x157);if(_0x439709===_0x44c311(0xb5))return _0xa4b058['sendMessage'](_0x3d39e7,{'document':await getBuffer(_0x89f651),'mimetype':_0x44c311(0xb5),'caption':_0x575f81,..._0x52e017},{'quoted':_0x8987c1,..._0x52e017});if(_0x439709[_0x44c311(0x104)]('/')[0x0]===_0x44c311(0x14f))return _0xa4b058['sendMessage'](_0x3d39e7,{'image':await getBuffer(_0x89f651),'caption':_0x575f81,..._0x52e017},{'quoted':_0x8987c1,..._0x52e017});if(_0x439709[_0x44c311(0x104)]('/')[0x0]===_0x44c311(0x112))return _0xa4b058[_0x44c311(0x10d)](_0x3d39e7,{'video':await getBuffer(_0x89f651),'caption':_0x575f81,'mimetype':'video/mp4',..._0x52e017},{'quoted':_0x8987c1,..._0x52e017});if(_0x439709['split']('/')[0x0]===_0x44c311(0x143))return _0xa4b058[_0x44c311(0x10d)](_0x3d39e7,{'audio':await getBuffer(_0x89f651),'caption':_0x575f81,'mimetype':'audio/mpeg',..._0x52e017},{'quoted':_0x8987c1,..._0x52e017});},_0xa4b058['sendListMsg']=(_0x2d4495,_0xc2c4a6='',_0x37e841='',_0x39c25b='',_0x49cdef='',_0x407345=[],_0x223367)=>{const _0x10809c=_0x754418;let _0x3734db=_0x407345;var _0xd0721b={'text':_0xc2c4a6,'footer':_0x37e841,'title':_0x39c25b,'buttonText':_0x49cdef,'sections':_0x3734db};_0xa4b058[_0x10809c(0x10d)](_0x2d4495,_0xd0721b,{'quoted':_0x223367});},_0xa4b058[_0x754418(0x9a)]=(_0x592365,_0xd7961c='',_0x38c167='',_0x33d84a=[])=>{const _0x3c044c=_0x754418;let _0x173cb0=_0x33d84a;var _0x106160={'text':_0xd7961c,'footer':_0x38c167,'templateButtons':_0x173cb0};_0xa4b058[_0x3c044c(0x10d)](_0x592365,_0x106160);},_0xa4b058[_0x754418(0x168)]=async(_0x545a48,_0x40d7cc='',_0x428a0b='',_0x535d77,_0x5d489f=[],_0x396b68={})=>{const _0x1263f8=_0x754418;let _0x1b07f2=await prepareWAMessageMedia({'image':_0x535d77},{'upload':_0xa4b058['waUploadToServer']});var _0xe5a6f9=generateWAMessageFromContent(_0x545a48,proto['Message'][_0x1263f8(0x95)]({'templateMessage':{'hydratedTemplate':{'imageMessage':_0x1b07f2[_0x1263f8(0x140)],'hydratedContentText':_0x40d7cc,'hydratedFooterText':_0x428a0b,'hydratedButtons':_0x5d489f}}}),_0x396b68);_0xa4b058[_0x1263f8(0x16a)](_0x545a48,_0xe5a6f9[_0x1263f8(0x15a)],{'messageId':_0xe5a6f9[_0x1263f8(0x99)]['id']});},_0xa4b058[_0x754418(0x103)]=async(_0x2153f9,_0xb5f163='',_0x10c591='',_0x217b6a,_0x1203c6=[],_0x3faeef={})=>{const _0x525dd5=_0x754418;let _0x308045=await prepareWAMessageMedia({'video':_0x217b6a},{'upload':_0xa4b058[_0x525dd5(0x141)]});var _0x1981ad=generateWAMessageFromContent(_0x2153f9,proto[_0x525dd5(0x157)][_0x525dd5(0x95)]({'templateMessage':{'hydratedTemplate':{'videoMessage':_0x308045[_0x525dd5(0x8b)],'hydratedContentText':_0xb5f163,'hydratedFooterText':_0x10c591,'hydratedButtons':_0x1203c6}}}),_0x3faeef);_0xa4b058[_0x525dd5(0x16a)](_0x2153f9,_0x1981ad[_0x525dd5(0x15a)],{'messageId':_0x1981ad[_0x525dd5(0x99)]['id']});},_0xa4b058[_0x754418(0x13d)]=async(_0x1165b1,_0x5f0b4a='',_0x38b48c='',_0x2ab8f7,_0x11666a=[],_0xb72ff={})=>{const _0x5b1e0c=_0x754418;let _0x4335aa=await prepareWAMessageMedia({'video':_0x2ab8f7,'gifPlayback':!![]},{'upload':_0xa4b058[_0x5b1e0c(0x141)]});var _0x5858ad=generateWAMessageFromContent(_0x1165b1,proto[_0x5b1e0c(0x157)][_0x5b1e0c(0x95)]({'templateMessage':{'hydratedTemplate':{'videoMessage':_0x4335aa[_0x5b1e0c(0x8b)],'hydratedContentText':_0x5f0b4a,'hydratedFooterText':_0x38b48c,'hydratedButtons':_0x11666a}}}),_0xb72ff);_0xa4b058[_0x5b1e0c(0x16a)](_0x1165b1,_0x5858ad['message'],{'messageId':_0x5858ad[_0x5b1e0c(0x99)]['id']});},_0xa4b058[_0x754418(0x10a)]=(_0x4cb675,_0xb86522=[],_0x42347b,_0x52c99b,_0x58c312='',_0x4249d6={})=>{const _0xb6c4c4=_0x754418;let _0x4bb7d8={'text':_0x42347b,'footer':_0x52c99b,'buttons':_0xb86522,'headerType':0x2,..._0x4249d6};_0xa4b058[_0xb6c4c4(0x10d)](_0x4cb675,_0x4bb7d8,{'quoted':_0x58c312,..._0x4249d6});},_0xa4b058['sendText']=(_0x46336e,_0x26f11e,_0x222650='',_0x5bc402)=>_0xa4b058[_0x754418(0x10d)](_0x46336e,{'text':_0x26f11e,..._0x5bc402},{'quoted':_0x222650}),_0xa4b058['sendImage']=async(_0x205ef1,_0xcfe0b9,_0x120fa5='',_0x4becde='',_0x585548)=>{const _0x40e173=_0x754418;let _0x4b5ba1=Buffer[_0x40e173(0xdd)](_0xcfe0b9)?_0xcfe0b9:/^data:.*?\/.*?;base64,/i['test'](_0xcfe0b9)?Buffer['from'](_0xcfe0b9['split']`,`[0x1],_0x40e173(0x118)):/^https?:\/\//[_0x40e173(0xcf)](_0xcfe0b9)?await await getBuffer(_0xcfe0b9):fs[_0x40e173(0xa2)](_0xcfe0b9)?fs['readFileSync'](_0xcfe0b9):Buffer[_0x40e173(0xa3)](0x0);return await _0xa4b058[_0x40e173(0x10d)](_0x205ef1,{'image':_0x4b5ba1,'caption':_0x120fa5,..._0x585548},{'quoted':_0x4becde});},_0xa4b058[_0x754418(0xfc)]=async(_0x435d52,_0x19da4a,_0x207fb3='',_0xd5729c='',_0x202f75=![],_0x3d12db)=>{const _0x57b9bd=_0x754418;let _0x233f48=Buffer[_0x57b9bd(0xdd)](_0x19da4a)?_0x19da4a:/^data:.*?\/.*?;base64,/i[_0x57b9bd(0xcf)](_0x19da4a)?Buffer['from'](_0x19da4a[_0x57b9bd(0x104)]`,`[0x1],_0x57b9bd(0x118)):/^https?:\/\//[_0x57b9bd(0xcf)](_0x19da4a)?await await getBuffer(_0x19da4a):fs[_0x57b9bd(0xa2)](_0x19da4a)?fs[_0x57b9bd(0x13f)](_0x19da4a):Buffer[_0x57b9bd(0xa3)](0x0);return await _0xa4b058[_0x57b9bd(0x10d)](_0x435d52,{'video':_0x233f48,'caption':_0x207fb3,'gifPlayback':_0x202f75,..._0x3d12db},{'quoted':_0xd5729c});},_0xa4b058[_0x754418(0xe9)]=async(_0x5a9e4e,_0x34836a,_0x4f24b3='',_0x44d72c=![],_0x15c16a)=>{const _0x46885e=_0x754418;let _0x165ef4=Buffer['isBuffer'](_0x34836a)?_0x34836a:/^data:.*?\/.*?;base64,/i[_0x46885e(0xcf)](_0x34836a)?Buffer[_0x46885e(0xbc)](_0x34836a[_0x46885e(0x104)]`,`[0x1],_0x46885e(0x118)):/^https?:\/\//['test'](_0x34836a)?await await getBuffer(_0x34836a):fs[_0x46885e(0xa2)](_0x34836a)?fs['readFileSync'](_0x34836a):Buffer[_0x46885e(0xa3)](0x0);return await _0xa4b058[_0x46885e(0x10d)](_0x5a9e4e,{'audio':_0x165ef4,'ptt':_0x44d72c,..._0x15c16a},{'quoted':_0x4f24b3});},_0xa4b058['sendTextWithMentions']=async(_0x2b0b81,_0x258b8e,_0x38cdd5,_0x10790b={})=>_0xa4b058[_0x754418(0x10d)](_0x2b0b81,{'text':_0x258b8e,'contextInfo':{'mentionedJid':[..._0x258b8e[_0x754418(0x9c)](/@(\d{0,16})/g)][_0x754418(0xb1)](_0x50b3e5=>_0x50b3e5[0x1]+_0x754418(0xec))},..._0x10790b},{'quoted':_0x38cdd5}),_0xa4b058[_0x754418(0x146)]=async(_0x3459e4,_0xad4ff5,_0x3c4e65,_0x1aab42={})=>{const _0x5b70d4=_0x754418;let _0x1ea364=Buffer[_0x5b70d4(0xdd)](_0xad4ff5)?_0xad4ff5:/^data:.*?\/.*?;base64,/i['test'](_0xad4ff5)?Buffer[_0x5b70d4(0xbc)](_0xad4ff5[_0x5b70d4(0x104)]`,`[0x1],_0x5b70d4(0x118)):/^https?:\/\//[_0x5b70d4(0xcf)](_0xad4ff5)?await await getBuffer(_0xad4ff5):fs[_0x5b70d4(0xa2)](_0xad4ff5)?fs['readFileSync'](_0xad4ff5):Buffer['alloc'](0x0),_0x3015f7;return _0x1aab42&&(_0x1aab42[_0x5b70d4(0xba)]||_0x1aab42['author'])?_0x3015f7=await writeExifImg(_0x1ea364,_0x1aab42):_0x3015f7=await imageToWebp(_0x1ea364),await _0xa4b058['sendMessage'](_0x3459e4,{'sticker':{'url':_0x3015f7},..._0x1aab42},{'quoted':_0x3c4e65}),_0x3015f7;},_0xa4b058[_0x754418(0x14a)]=async(_0x54b222,_0x4c9e17,_0x4abb0a,_0x543967={})=>{const _0x4c25fb=_0x754418;let _0x1529ff=Buffer[_0x4c25fb(0xdd)](_0x4c9e17)?_0x4c9e17:/^data:.*?\/.*?;base64,/i['test'](_0x4c9e17)?Buffer[_0x4c25fb(0xbc)](_0x4c9e17[_0x4c25fb(0x104)]`,`[0x1],_0x4c25fb(0x118)):/^https?:\/\//[_0x4c25fb(0xcf)](_0x4c9e17)?await await getBuffer(_0x4c9e17):fs['existsSync'](_0x4c9e17)?fs[_0x4c25fb(0x13f)](_0x4c9e17):Buffer[_0x4c25fb(0xa3)](0x0),_0x29bbbe;return _0x543967&&(_0x543967['packname']||_0x543967['author'])?_0x29bbbe=await writeExifVid(_0x1529ff,_0x543967):_0x29bbbe=await videoToWebp(_0x1529ff),await _0xa4b058[_0x4c25fb(0x10d)](_0x54b222,{'sticker':{'url':_0x29bbbe},..._0x543967},{'quoted':_0x4abb0a}),_0x29bbbe;},_0xa4b058[_0x754418(0x148)]=async(_0x582590,_0x477408,_0x518bc0=!![])=>{const _0x3ad975=_0x754418;let _0x2e5c2b=_0x582590['msg']?_0x582590[_0x3ad975(0x120)]:_0x582590,_0x5891ca=(_0x582590[_0x3ad975(0x120)]||_0x582590)[_0x3ad975(0xc6)]||'',_0x1fe784=_0x582590[_0x3ad975(0xe5)]?_0x582590[_0x3ad975(0xe5)][_0x3ad975(0x11b)](/Message/gi,''):_0x5891ca[_0x3ad975(0x104)]('/')[0x0];const _0x5b3715=await downloadContentFromMessage(_0x2e5c2b,_0x1fe784);let _0x7b9884=Buffer['from']([]);for await(const _0xaac95a of _0x5b3715){_0x7b9884=Buffer[_0x3ad975(0x151)]([_0x7b9884,_0xaac95a]);}let _0x27df17=await FileType[_0x3ad975(0x15e)](_0x7b9884);return trueFileName=_0x518bc0?_0x477408+'.'+_0x27df17[_0x3ad975(0xd6)]:_0x477408,await fs[_0x3ad975(0x144)](trueFileName,_0x7b9884),trueFileName;},_0xa4b058[_0x754418(0x16c)]=async _0x3c673d=>{const _0x20dd77=_0x754418;let _0x3c5f26=(_0x3c673d[_0x20dd77(0x120)]||_0x3c673d)[_0x20dd77(0xc6)]||'',_0x1892eb=_0x3c673d[_0x20dd77(0xe5)]?_0x3c673d[_0x20dd77(0xe5)][_0x20dd77(0x11b)](/Message/gi,''):_0x3c5f26[_0x20dd77(0x104)]('/')[0x0];const _0x35def0=await downloadContentFromMessage(_0x3c673d,_0x1892eb);let _0x331ff0=Buffer['from']([]);for await(const _0x1d39aa of _0x35def0){_0x331ff0=Buffer[_0x20dd77(0x151)]([_0x331ff0,_0x1d39aa]);}return _0x331ff0;},_0xa4b058[_0x754418(0xa6)]=async(_0x5518be,_0x13f63f,_0xa8a63f='',_0x1f0582='',_0x5bd01d='',_0x3bbe79={})=>{const _0x58ea86=_0x754418;let _0x50246e=await _0xa4b058[_0x58ea86(0x155)](_0x13f63f,!![]),{mime:_0x43c527,ext:_0x1c0450,res:_0x984e2a,data:_0x5b1af3,filename:_0x4345b7}=_0x50246e;if(_0x984e2a&&_0x984e2a[_0x58ea86(0x136)]!==0xc8||file['length']<=0x10000)try{throw{'json':JSON['parse'](file[_0x58ea86(0xa0)]())};}catch(_0x13b233){if(_0x13b233['json'])throw _0x13b233[_0x58ea86(0x125)];}let _0x548f02='',_0x594aab=_0x43c527,_0x103c7b=_0x4345b7;if(_0x3bbe79[_0x58ea86(0xc2)])_0x548f02=_0x58ea86(0x11e);if(_0x3bbe79['asSticker']||/webp/['test'](_0x43c527)){let {writeExif:_0x41b875}=require(_0x58ea86(0x135)),_0x3523bb={'mimetype':_0x43c527,'data':_0x5b1af3};_0x103c7b=await _0x41b875(_0x3523bb,{'packname':_0x3bbe79[_0x58ea86(0xba)]?_0x3bbe79['packname']:global['packname'],'author':_0x3bbe79['author']?_0x3bbe79['author']:global['author'],'categories':_0x3bbe79['categories']?_0x3bbe79[_0x58ea86(0x116)]:[]}),await fs['promises']['unlink'](_0x4345b7),_0x548f02=_0x58ea86(0x10c),_0x594aab=_0x58ea86(0xf8);}else{if(/image/[_0x58ea86(0xcf)](_0x43c527))_0x548f02=_0x58ea86(0x14f);else{if(/video/['test'](_0x43c527))_0x548f02=_0x58ea86(0x112);else{if(/audio/['test'](_0x43c527))_0x548f02=_0x58ea86(0x143);else _0x548f02='document';}}}return await _0xa4b058[_0x58ea86(0x10d)](_0x5518be,{[_0x548f02]:{'url':_0x103c7b},'caption':_0x1f0582,'mimetype':_0x594aab,'fileName':_0xa8a63f,..._0x3bbe79},{'quoted':_0x5bd01d,..._0x3bbe79}),fs['promises'][_0x58ea86(0x169)](_0x103c7b);},_0xa4b058['copyNForward']=async(_0x519b98,_0x3710fe,_0x23790d=![],_0x35e22a={})=>{const _0x3d3f77=_0x754418;let _0x39e8b5;_0x35e22a[_0x3d3f77(0x91)]&&(_0x3710fe['message']=_0x3710fe[_0x3d3f77(0x15a)]&&_0x3710fe[_0x3d3f77(0x15a)][_0x3d3f77(0x115)]&&_0x3710fe[_0x3d3f77(0x15a)][_0x3d3f77(0x115)][_0x3d3f77(0x15a)]?_0x3710fe[_0x3d3f77(0x15a)][_0x3d3f77(0x115)][_0x3d3f77(0x15a)]:_0x3710fe[_0x3d3f77(0x15a)]||undefined,_0x39e8b5=Object[_0x3d3f77(0xf1)](_0x3710fe[_0x3d3f77(0x15a)]['viewOnceMessage'][_0x3d3f77(0x15a)])[0x0],delete(_0x3710fe['message']&&_0x3710fe[_0x3d3f77(0x15a)][_0x3d3f77(0x97)]?_0x3710fe[_0x3d3f77(0x15a)]['ignore']:_0x3710fe[_0x3d3f77(0x15a)]||undefined),delete _0x3710fe[_0x3d3f77(0x15a)]['viewOnceMessage']['message'][_0x39e8b5][_0x3d3f77(0x133)],_0x3710fe[_0x3d3f77(0x15a)]={..._0x3710fe[_0x3d3f77(0x15a)][_0x3d3f77(0xa7)][_0x3d3f77(0x15a)]});let _0x5a4532=Object[_0x3d3f77(0xf1)](_0x3710fe[_0x3d3f77(0x15a)])[0x0],_0x22c96f=await generateForwardMessageContent(_0x3710fe,_0x23790d),_0x5d2e81=Object[_0x3d3f77(0xf1)](_0x22c96f)[0x0],_0x430341={};if(_0x5a4532!=_0x3d3f77(0xed))_0x430341=_0x3710fe[_0x3d3f77(0x15a)][_0x5a4532]['contextInfo'];_0x22c96f[_0x5d2e81][_0x3d3f77(0xcd)]={..._0x430341,..._0x22c96f[_0x5d2e81]['contextInfo']};const _0x467f47=await generateWAMessageFromContent(_0x519b98,_0x22c96f,_0x35e22a?{..._0x22c96f[_0x5d2e81],..._0x35e22a,..._0x35e22a['contextInfo']?{'contextInfo':{..._0x22c96f[_0x5d2e81][_0x3d3f77(0xcd)],..._0x35e22a['contextInfo']}}:{}}:{});return await _0xa4b058[_0x3d3f77(0x16a)](_0x519b98,_0x467f47[_0x3d3f77(0x15a)],{'messageId':_0x467f47[_0x3d3f77(0x99)]['id']}),_0x467f47;},_0xa4b058['cMod']=(_0x4e4b87,_0x30c55a,_0x4e5306='',_0x115f23=_0xa4b058[_0x754418(0xf6)]['id'],_0x593f87={})=>{const _0x5a45ee=_0x754418;let _0x23c860=Object[_0x5a45ee(0xf1)](_0x30c55a[_0x5a45ee(0x15a)])[0x0],_0x1347ba=_0x23c860==='ephemeralMessage';_0x1347ba&&(_0x23c860=Object['keys'](_0x30c55a[_0x5a45ee(0x15a)][_0x5a45ee(0x115)][_0x5a45ee(0x15a)])[0x0]);let _0x30c634=_0x1347ba?_0x30c55a[_0x5a45ee(0x15a)][_0x5a45ee(0x115)]['message']:_0x30c55a['message'],_0x2756c8=_0x30c634[_0x23c860];if(typeof _0x2756c8===_0x5a45ee(0x139))_0x30c634[_0x23c860]=_0x4e5306||_0x2756c8;else{if(_0x2756c8[_0x5a45ee(0x12c)])_0x2756c8['caption']=_0x4e5306||_0x2756c8['caption'];else{if(_0x2756c8[_0x5a45ee(0xb2)])_0x2756c8[_0x5a45ee(0xb2)]=_0x4e5306||_0x2756c8[_0x5a45ee(0xb2)];}}if(typeof _0x2756c8!==_0x5a45ee(0x139))_0x30c634[_0x23c860]={..._0x2756c8,..._0x593f87};if(_0x30c55a[_0x5a45ee(0x99)][_0x5a45ee(0x12d)])_0x115f23=_0x30c55a[_0x5a45ee(0x99)]['participant']=_0x115f23||_0x30c55a[_0x5a45ee(0x99)][_0x5a45ee(0x12d)];else{if(_0x30c55a[_0x5a45ee(0x99)]['participant'])_0x115f23=_0x30c55a[_0x5a45ee(0x99)][_0x5a45ee(0x12d)]=_0x115f23||_0x30c55a[_0x5a45ee(0x99)]['participant'];}if(_0x30c55a[_0x5a45ee(0x99)][_0x5a45ee(0x150)]['includes']('@s.whatsapp.net'))_0x115f23=_0x115f23||_0x30c55a[_0x5a45ee(0x99)][_0x5a45ee(0x150)];else{if(_0x30c55a['key']['remoteJid'][_0x5a45ee(0xff)]('@broadcast'))_0x115f23=_0x115f23||_0x30c55a[_0x5a45ee(0x99)][_0x5a45ee(0x150)];}return _0x30c55a[_0x5a45ee(0x99)][_0x5a45ee(0x150)]=_0x4e4b87,_0x30c55a[_0x5a45ee(0x99)]['fromMe']=_0x115f23===_0xa4b058[_0x5a45ee(0xf6)]['id'],proto[_0x5a45ee(0x10b)]['fromObject'](_0x30c55a);},_0xa4b058[_0x754418(0x155)]=async(_0x359521,_0x3a6590)=>{const _0x18b70e=_0x754418;let _0x1f4595,_0x4de6dc=Buffer['isBuffer'](_0x359521)?_0x359521:/^data:.*?\/.*?;base64,/i['test'](_0x359521)?Buffer[_0x18b70e(0xbc)](_0x359521['split']`,`[0x1],'base64'):/^https?:\/\//[_0x18b70e(0xcf)](_0x359521)?await(_0x1f4595=await getBuffer(_0x359521)):fs[_0x18b70e(0xa2)](_0x359521)?(filename=_0x359521,fs['readFileSync'](_0x359521)):typeof _0x359521==='string'?_0x359521:Buffer[_0x18b70e(0xa3)](0x0),_0x43bb0e=await FileType[_0x18b70e(0x15e)](_0x4de6dc)||{'mime':_0x18b70e(0x121),'ext':_0x18b70e(0x11c)};filename=path[_0x18b70e(0xaa)](__filename,_0x18b70e(0xe6)+new Date()*0x1+'.'+_0x43bb0e[_0x18b70e(0xd6)]);if(_0x4de6dc&&_0x3a6590)fs[_0x18b70e(0x9f)][_0x18b70e(0x15b)](filename,_0x4de6dc);return{'res':_0x1f4595,'filename':filename,'size':await getSizeMedia(_0x4de6dc),..._0x43bb0e,'data':_0x4de6dc};},_0xa4b058;}function _0x5221(){const _0x41904c=['./lib/lowdb','string','welcome_message','child','read','send5ButGif','redBright','readFileSync','imageMessage','waUploadToServer','utf-8','audio','writeFileSync','content-type','sendImageAsSticker','./settings','downloadAndSaveMediaMessage','252ErgthJ','sendVideoAsSticker','headers','awesome-phonenumber','loggedOut','GOODBYE','image','remoteJid','concat','IFYFKvFZcATAiu8DIOXz0A','148819HExovp','Connection\x20TimedOut,\x20Reconnecting...','getFile','chalk','Message','WhatsApp','welcome_image','message','writeFile','@g.us','timedOut','fromBuffer','connectionReplaced','contacts.update','api','@adiwajshing/baileys','GOODBYE_IMAGE','type','cache','red','subject','send5ButImg','unlink','relayMessage','push','downloadMediaMessage','unavailable','group-participants.update','\x0aitem1.TEL;waid=','decodeJid','path','videoMessage','chain','WELCOME_IMAGE','125phVJxG','src/database.json','https://youtube.com/c/Janithsadanuwan','readViewOnce','readMessages','120363045997170007@g.us','joined\x20support\x20new\x20group','fromObject','international','ignore','name','key','send5ButMsg','then','matchAll','argv','log','promises','toString','unwatchFile','existsSync','alloc','endsWith','logout','sendMedia','viewOnceMessage','close','Connection\x20Lost\x20from\x20Server,\x20reconnecting...','join','true','1.0.0','https://youtu.be/cvj3054O5NU','silent','getName','getNumber','map','text','random','46272iHvRTP','application/pdf','opts','950658PMkfHW','💗\x20𝐖𝐄𝐋𝐂𝐎𝐌𝐄\x20💗','\x0aitem1.X-ABLabel:Nilu\x20BOT\x20MD\x202022\x0aitem2.EMAIL;type=INTERNET:GitHub:\x20Nilu-BOT\x0aEND:VCARD','packname','connection','from','\x0a✅👸\x20QUEEN\x20Nilu\x20IS\x20CONECTED.','Welcome\x20To\x20','\x0aFN:','add','chats','asDocument','bold','ǫᴜᴇᴇɴ\x20ɴɪʟᴜ\x20ᴡᴀ\x20ʙᴏᴛ\x20ᴍᴅ','startsWith','mimetype','fromMe','sendPresenceUpdate','length','https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg','data','withoutContact','contextInfo','lowdb','test','connectionLost','./lib/uploader','APIKeys','entries','query','(((.+)+)+)+$','ext','120363045997170007@g.us','2QMbKmb','34326UpsJNO','gif','lodash','badSession','isBuffer','floor','verifiedName','catch','action','end','uncaughtException','messages.upsert','mtype','./src/','35gSyGca','pino','sendAudio','./QueenNilu','exitProcess','@s.whatsapp.net','conversation','messages','open','desc','keys','apply','💔\x20𝐆𝐎𝐎𝐃\x20𝐁𝐘𝐄\x20💔','loadDatabase','statusCode','user','error','image/webp','server','2916904UJTvjU','.json','sendVideo','Nilu\x20BOT\x203.5.0-V','sendContact','includes','profilePictureUrl','@hapi/boom','notify','send5ButVid','split','public','restartRequired','0@s.whatsapp.net','./lib/myfunc','receivedPendingNotifications','sendButtonText','WebMessageInfo','sticker','sendMessage','🔄👸\x20QUEEN\x20Nilu\x20CONNECTING...','express','connection.update','SEND_WELCOME','video','READ','groupMetadata','ephemeralMessage','categories','sendFileUrl','base64','1692400CVLkYB','parse','replace','.bin','120363045997170007@g.us','document','Update\x20','msg','application/octet-stream','search','resolve','330TXufMj','json','set','goodbye_image','store','serializeM','1073105JIWEdO','output','caption','participant','Bad\x20Session\x20File,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again','participants','Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Close\x20Current\x20Session\x20First','APIs','./database/BLOCK_CHAT.json','viewOnce','App\x20listened\x20on\x20port','./lib/exif','status','contacts'];_0x5221=function(){return _0x41904c;};return _0x5221();}startQueenNiluBot(),app['listen'](PORT,()=>console[_0x49ebaa(0x9e)](_0x49ebaa(0x134),PORT));let file=require[_0x49ebaa(0x123)](__filename);fs['watchFile'](file,()=>{const _0x2b4e2b=_0x49ebaa;fs[_0x2b4e2b(0xa1)](file),console[_0x2b4e2b(0x9e)](chalk[_0x2b4e2b(0x13e)](_0x2b4e2b(0x11f)+__filename)),delete require[_0x2b4e2b(0x165)][file],require(file);});