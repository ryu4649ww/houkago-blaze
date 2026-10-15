var Vu={LP:{lvl:1,s:4,a:2,r:7,dmg:32,reach:62,stun:13,bstun:9,stop:6,push:9,y:150,h:34,voice:"atk_l",hits:2,gap:3},MP:{lvl:2,s:7,a:3,r:13,dmg:58,reach:102,stun:17,bstun:12,stop:8,push:12,y:150,h:36,voice:"atk_m",hits:2,gap:4},HP:{lvl:3,s:11,a:4,r:21,dmg:94,reach:84,stun:21,bstun:15,stop:11,push:18,y:140,h:50,voice:"atk_h",hits:3,gap:4},LK:{lvl:1,s:5,a:2,r:8,dmg:36,reach:70,stun:13,bstun:9,stop:6,push:9,y:105,h:34,voice:"atk_l",hits:2,gap:3},MK:{lvl:2,s:8,a:3,r:15,dmg:62,reach:118,stun:17,bstun:12,stop:8,push:12,y:100,h:38,voice:"atk_m",hits:2,gap:4},HK:{lvl:3,s:12,a:4,r:23,dmg:98,reach:96,stun:22,bstun:15,stop:11,push:18,y:120,h:60,voice:"atk_h",hits:2,gap:5}},Zi={hinata:{L:["ladle","\u304A\u305F\u307E",1.25],M:["rollingpin","\u9EBA\u68D2",1.6],H:["board","\u307E\u306A\u677F",1.4]},miyu:{L:["trumpet","\u30C8\u30E9\u30F3\u30DA\u30C3\u30C8",1.25],M:["trombone","\u30C8\u30ED\u30F3\u30DC\u30FC\u30F3",1.75],H:["horn","\u30DB\u30EB\u30F3",1.45]},ruru:{L:["glowstick","\u30DA\u30F3\u30E9\u30A4\u30C8",1.25],M:["ribbon","\u30EA\u30DC\u30F3",1.75],H:["boombox","\u30E9\u30B8\u30AB\u30BB",1.4]},akane:{L:["shinai","\u7AF9\u5200",1.45],M:["shinai","\u7AF9\u5200\u306E\u7A81\u304D",1.8],H:["bokuto","\u6728\u5200",1.55]},yukari:{L:["telescope","\u671B\u9060\u93E1",1.3],M:["telelong","\u306E\u3073\u308B\u671B\u9060\u93E1",1.8],H:["globe","\u5929\u7403\u5100",1.45]},karen:{L:["kickboard","\u30D3\u30FC\u30C8\u677F",1.3],M:["deckbrush","\u30C7\u30C3\u30AD\u30D6\u30E9\u30B7",1.7],H:["swimring","\u6D6E\u304D\u8F2A",1.45]},reika:{L:["arrow","\u77E2",1.3],M:["bowswing","\u548C\u5F13",1.8],H:["makiwara","\u5DFB\u85C1",1.45]},sakura:{L:["fan","\u6247\u5B50",1.25],M:["pointer","\u6307\u3057\u68D2",1.7],H:["parasol","\u65E5\u5098",1.5]},reiko:{L:["book","\u51FA\u5E2D\u7C3F",1.25],M:["shinai","\u6307\u5C0E\u7528\u306E\u7AF9\u5200",1.7],H:["hurdle","\u30CF\u30FC\u30C9\u30EB",1.5]}},_n=[{id:"hinata",name:"\u5929\u91CE\u3072\u306A\u305F",short:"\u3072\u306A\u305F",club:"\u6599\u7406\u90E8",grade:"1\u5E74",hp:1e3,walk:4.4,back:3.3,dash:10,jump:17.5,height:228,reachP:1,reachK:1,weight:1,dmg:1,weapon:"ladle",quote:"\u304A\u306A\u304B\u3059\u3044\u305F\u30FC\uFF01 \u4E88\u7B97\u3067\u307F\u3093\u306A\u306B\u3054\u3061\u305D\u3046\u3059\u308B\u3088\uFF01",color:"#ff9a3c"},{id:"miyu",name:"\u767D\u77F3\u307F\u3086",short:"\u307F\u3086",club:"\u5439\u594F\u697D\u90E8",grade:"1\u5E74",hp:1030,walk:4.1,back:3.2,dash:9.4,jump:17.8,height:214,reachP:.95,reachK:.95,weight:1.12,dmg:1.09,weapon:"trumpet",quote:"\u308F\u3001\u308F\u305F\u3057\u306E\u97F3\u2026\u2026\u3061\u3083\u3093\u3068\u5C4A\u3051\u307E\u3059\uFF01",color:"#7fd0ff"},{id:"ruru",name:"\u661F\u91CE\u308B\u308B",short:"\u308B\u308B",club:"\u30C0\u30F3\u30B9\u90E8",grade:"2\u5E74",hp:1010,walk:4.8,back:3.6,dash:10.8,jump:18.5,height:232,reachP:.95,reachK:1.08,weight:1.05,dmg:1.09,weapon:null,quote:"\u30CE\u30C3\u3066\u3053\u30FC\uFF01 \u5168\u56FD\u306E\u30B9\u30C6\u30FC\u30B8\u306F\u308B\u308B\u306E\u3082\u306E\uFF01",color:"#ff6fb0"},{id:"akane",name:"\u6850\u751F\u3042\u304B\u306D",short:"\u3042\u304B\u306D",club:"\u5263\u9053\u90E8",grade:"2\u5E74",hp:1e3,walk:4.2,back:3.3,dash:10,jump:17.2,height:240,reachP:1.2,reachK:1,weight:1,dmg:.97,weapon:"shinai",quote:"\u3044\u3056\u3001\u5C0B\u5E38\u306B\u2015\u2015\u52DD\u8CA0\uFF01",color:"#c8463a"},{id:"yukari",name:"\u9727\u5CF6\u3086\u304B\u308A",short:"\u3086\u304B\u308A",club:"\u5929\u6587\u90E8",grade:"2\u5E74",hp:1060,walk:4.1,back:3.2,dash:10,jump:17,height:236,reachP:1.22,reachK:.95,weight:1.06,dmg:1.1,weapon:"telescope",quote:"\u4ECA\u591C\u3082\u3001\u661F\u304C\u304D\u308C\u3044\u3067\u3059\u306D\u301C",color:"#9b7fe0"},{id:"karen",name:"\u65E9\u4E59\u5973\u30AB\u30EC\u30F3",short:"\u30AB\u30EC\u30F3",club:"\u6C34\u6CF3\u90E8",grade:"3\u5E74",hp:1100,walk:4,back:3.1,dash:10.2,jump:16.6,height:262,reachP:1.08,reachK:1.1,weight:.9,dmg:1.04,weapon:null,quote:"\u601D\u3044\u3063\u304D\u308A\u3001\u3044\u3053\u3046\uFF01",color:"#4fb6e8"},{id:"reika",name:"\u9ED2\u5D0E\u30EC\u30A4\u30AB",short:"\u30EC\u30A4\u30AB",club:"\u5F13\u9053\u90E8",grade:"3\u5E74",hp:1050,walk:4.3,back:3.4,dash:9.6,jump:17,height:254,reachP:1,reachK:1.12,weight:1.02,dmg:1.13,weapon:"bow",quote:"\u7684\u306F\u3001\u5916\u3055\u306A\u3044\u3002",color:"#a0182a"},{id:"sakura",name:"\u4E5D\u6761\u3055\u304F\u3089",short:"\u3055\u304F\u3089",club:"\u751F\u5F92\u4F1A",grade:"3\u5E74",hp:960,walk:4.1,back:3.4,dash:9.8,jump:17,height:248,reachP:1.1,reachK:1.02,weight:1,dmg:.93,weapon:"fan",quote:"\u3054\u304D\u3052\u3093\u3088\u3046\u3002\u304A\u624B\u67D4\u3089\u304B\u306B\u3002",color:"#f08aa8"},{id:"reiko",name:"\u9DF9\u5BAE\u73B2\u5B50",short:"\u9DF9\u5BAE\u5148\u751F",club:"\u4E88\u7B97\u59D4\u54E1\u9577",grade:"\u5148\u751F",hp:1150,walk:4.5,back:3.5,dash:11,jump:17.6,height:268,reachP:1.08,reachK:1.1,weight:.92,dmg:1.12,weapon:"whistle",boss:!0,quote:"\u672C\u6C17\u306E\u90E8\u306B\u3057\u304B\u3001\u4E88\u7B97\u306F\u51FA\u3055\u306A\u3044\u308F\u3002",color:"#d8283a"}],an=Object.fromEntries(_n.map(n=>[n.id,n])),ka={hinata:[{key:"sp1",ez:"N",cmd:"dfP",name:"\u3042\u3064\u3042\u3064\u304A\u306B\u304E\u308A",t:"projectile",s:13,r:22,dmg:70,proj:{kind:"onigiri",vx:[7,9,11],vy:9,g:.42,w:34,h:30,y:150,life:120}},{key:"sp2",ez:"B",cmd:"dbK",name:"\u304F\u308B\u304F\u308B\u30AF\u30EC\u30FC\u30D7",t:"spin",s:7,hits:3,gap:7,r:18,dmg:34,vx:[5,6.5,8],reach:80,y:110,h:70,knockdown:!0},{key:"sp3",ez:"F",cmd:"ffP",name:"\u30D5\u30E9\u30A4\u30D1\u30F3\u30FB\u30C0\u30C3\u30B7\u30E5",t:"rush",s:8,a:14,r:20,dmg:105,vx:[11,13,15],reach:70,y:140,h:70,wallblow:!0},{key:"sp4",ez:"D",cmd:"ddK",name:"\u304A\u305F\u307E\u30A2\u30C3\u30D1\u30FC",t:"rising",s:3,a:14,r:22,dmg:110,vy:[15,18,21],vx:2.5,reach:60,y:150,h:120,invul:7,launch:20}],miyu:[{key:"sp1",ez:"N",cmd:"dfP",name:"\u30D5\u30A1\u30F3\u30D5\u30A1\u30FC\u30EC",t:"projectile",s:11,r:16,dmg:68,proj:{kind:"note",vx:[10,13,16],vy:0,g:0,w:46,h:40,y:145,life:140}},{key:"sp2",ez:"B",cmd:"dbP",name:"\u30D5\u30A9\u30EB\u30C6\u30C3\u30B7\u30E2",t:"blast",s:14,a:6,r:26,dmg:120,reach:150,y:150,h:150,wallblow:!0},{key:"sp3",ez:"F",cmd:"bbK",name:"\u30B9\u30BF\u30C3\u30AB\u30FC\u30C8",t:"slip",s:4,a:18,r:14,dmg:70,vx:[13,15,17],reach:60,y:100,h:60,invul:18},{key:"sp4",ez:"D",cmd:"ddP",name:"\u30CF\u30A4\u30C8\u30FC\u30F3",t:"projectile",s:8,r:24,dmg:80,invul:6,proj:{kind:"note",vx:[5,6,7],vy:11,g:0,w:50,h:50,y:200,life:50,launch:16}}],ruru:[{key:"sp1",ez:"N",cmd:"dfP",name:"\u30D3\u30FC\u30C8\u30FB\u30A6\u30A7\u30FC\u30D6",t:"projectile",s:13,r:22,dmg:64,proj:{kind:"wave",vx:[7,9,11],vy:0,g:0,w:60,h:36,y:18,life:120,low:!0}},{key:"sp2",ez:"F",cmd:"ffK",name:"\u30A6\u30A3\u30F3\u30C9\u30DF\u30EB",t:"spin",s:6,hits:5,gap:5,r:18,dmg:26,vx:[7,8.5,10],reach:90,y:60,h:70,wallblowLast:!0},{key:"sp3",ez:"B",cmd:"bbK",name:"\u30D0\u30C3\u30AF\u30D5\u30EA\u30C3\u30D7",t:"flipdive",s:10,r:18,dmg:95,vx:[6,8,10],vy:14,reach:70,y:40,h:90,overhead:!0},{key:"sp4",ez:"D",cmd:"ddK",name:"\u30D8\u30C3\u30C9\u30B9\u30D4\u30F3",t:"rising",s:4,a:22,r:22,dmg:32,hits:4,vy:[12,14,16],vx:1.5,reach:70,y:150,h:110,invul:6,launch:17}],akane:[{key:"sp1",ez:"N",cmd:"dfP",name:"\u5263\u5727\u30FB\u9762",t:"projectile",s:14,r:22,dmg:76,proj:{kind:"slash",vx:[8,10.5,13],vy:0,g:0,w:40,h:90,y:165,life:110}},{key:"sp2",ez:"B",cmd:"dbK",name:"\u8FD4\u3057\u80F4",t:"counter",s:3,a:24,r:18,dmg:130,reach:130,y:130,h:80},{key:"sp3",ez:"F",cmd:"ffP",name:"\u8AF8\u624B\u7A81\u304D",t:"rush",s:10,a:12,r:22,dmg:115,vx:[14,16.5,19],reach:120,y:160,h:40,wallblow:!0},{key:"sp4",ez:"D",cmd:"ddP",name:"\u6607\u308A\u5C0F\u624B",t:"rising",s:3,a:14,r:24,dmg:115,vy:[16,19,22],vx:3,reach:95,y:170,h:140,invul:8,launch:21}],yukari:[{key:"sp1",ez:"N",cmd:"dfP",name:"\u6D41\u661F",t:"sky",s:12,r:17,dmg:88,proj:{kind:"star",dist:[220,360,500],fall:14,w:50,h:50,life:90}},{key:"sp2",ez:"B",cmd:"dbP",name:"\u30B9\u30BF\u30FC\u30B2\u30FC\u30C8",t:"teleport",s:10,a:12,r:14,dmg:0,invul:22},{key:"sp3",ez:"F",cmd:"ffK",name:"\u5F57\u661F\u30AD\u30C3\u30AF",t:"dive",s:8,r:18,dmg:92,vx:[9,11,13],vy:10,reach:70,y:40,h:80},{key:"sp4",ez:"D",cmd:"ddP",name:"\u30AA\u30FC\u30ED\u30E9\u30FB\u30F4\u30A7\u30FC\u30EB",t:"barrier",s:5,a:18,r:20,dmg:95,reach:130,y:230,h:140,invul:8,launch:18}],karen:[{key:"sp1",ez:"N",cmd:"dfP",name:"\u30A2\u30AF\u30A2\u30FB\u30B8\u30A7\u30C3\u30C8",t:"projectile",s:12,r:21,dmg:74,proj:{kind:"water",vx:[10,12.5,15],vy:0,g:0,w:64,h:42,y:140,life:70}},{key:"sp2",ez:"B",cmd:"dbP",name:"\u30CF\u30A4\u30C9\u30ED\u30FB\u30D7\u30EC\u30B9",t:"grab",s:6,a:3,r:30,dmg:170,reach:95},{key:"sp3",ez:"F",cmd:"ffK",name:"\u30C9\u30EB\u30D5\u30A3\u30F3\u30FB\u30BF\u30C3\u30AF\u30EB",t:"rush",s:9,a:16,r:22,dmg:120,vx:[12,14,16.5],reach:80,y:130,h:90,wallblow:!0,armor:1},{key:"sp4",ez:"D",cmd:"ddK",name:"\u30BF\u30FC\u30F3\u30FB\u30AD\u30C3\u30AF",t:"rising",s:4,a:14,r:24,dmg:112,vy:[14,17,20],vx:4,reach:85,y:150,h:130,invul:6,launch:19}],reika:[{key:"sp1",ez:"N",cmd:"dfP",name:"\u7834\u9B54\u77E2",t:"projectile",s:11,r:17,dmg:78,proj:{kind:"arrow",vx:[15,18,22],vy:0,g:0,w:70,h:18,y:165,life:90}},{key:"sp2",ez:"F",cmd:"dbP",name:"\u5929\u5F13",t:"sky",s:16,r:18,dmg:80,proj:{kind:"skyarrow",target:!0,delay:[30,22,16],fall:22,w:36,h:80,life:80}},{key:"sp3",ez:"B",cmd:"bbP",name:"\u5F15\u304D\u5C04\u3061",t:"backshot",s:10,r:18,dmg:62,vx:-8,vy:9,proj:{kind:"arrow",vx:[14,16,18],vy:-3,g:0,w:70,h:18,y:170,life:80}},{key:"sp4",ez:"D",cmd:"ddK",name:"\u6B8B\u5FC3",t:"rising",s:4,a:13,r:24,dmg:105,vy:[14,17,19],vx:2,reach:80,y:150,h:130,invul:6,launch:18}],sakura:[{key:"sp1",ez:"N",cmd:"dfP",name:"\u82B1\u5439\u96EA",t:"projectile",s:14,r:24,dmg:20,proj:{kind:"petal",vx:[4,5.5,7],vy:0,g:0,w:70,h:70,y:150,life:150,hits:3,gap:10}},{key:"sp2",ez:"B",cmd:"bbP",name:"\u67F3\u53D7\u3051",t:"counter",s:2,a:20,r:22,dmg:120,reach:110,y:150,h:120,throwCounter:!0},{key:"sp3",ez:"F",cmd:"ffP",name:"\u77AC\u6B69\u30FB\u6247\u6253\u3061",t:"rush",s:6,a:10,r:20,dmg:100,vx:[15,18,21],reach:80,y:150,h:60,wallblow:!0},{key:"sp4",ez:"D",cmd:"ddK",name:"\u6708\u8F2A",t:"rising",s:4,a:14,r:24,dmg:108,vy:[14,17,20],vx:3,reach:80,y:150,h:130,invul:7,launch:19}],reiko:[{key:"sp1",ez:"N",cmd:"dfP",name:"\u30DB\u30A4\u30C3\u30B9\u30EB\u30FB\u30B7\u30E7\u30C3\u30AF",t:"projectile",s:11,r:19,dmg:78,proj:{kind:"shock",vx:[11,14,17],vy:0,g:0,w:56,h:56,y:150,life:100}},{key:"sp2",ez:"B",cmd:"dbK",name:"\u30EC\u30C3\u30C9\u30AB\u30FC\u30C9",t:"grab",s:5,a:3,r:28,dmg:180,reach:100},{key:"sp3",ez:"F",cmd:"ffK",name:"\u6307\u5C0E\u30BF\u30C3\u30AF\u30EB",t:"rush",s:8,a:16,r:20,dmg:118,vx:[13,15,18],reach:80,y:130,h:100,wallblow:!0},{key:"sp4",ez:"D",cmd:"ddP",name:"\u30B8\u30E3\u30C3\u30B8\u30E1\u30F3\u30C8\u30FB\u30A2\u30C3\u30D1\u30FC",t:"rising",s:3,a:15,r:24,dmg:122,vy:[16,19,22],vx:3,reach:80,y:160,h:140,invul:8,launch:21}]},Na={hinata:{name:"\u30D5\u30EB\u30B3\u30FC\u30B9\u30FB\u30D0\u30FC\u30CB\u30F3\u30B0",t:"superRush",dmg:340,vx:20,hits:10},miyu:{name:"\u30B0\u30E9\u30F3\u30C9\u30FB\u30B7\u30F3\u30D5\u30A9\u30CB\u30FC",t:"superBeam",dmg:320,hits:12},ruru:{name:"\u30B9\u30C6\u30FC\u30B8\u30FB\u30AA\u30F3\u30FB\u30D5\u30A1\u30A4\u30A2",t:"superRush",dmg:330,vx:21,hits:12},akane:{name:"\u4E00\u5200\u4E21\u65AD\u30FB\u70C8\u98A8",t:"superRush",dmg:350,vx:24,hits:8},yukari:{name:"\u30E1\u30C6\u30AA\u30FB\u30B7\u30E3\u30EF\u30FC",t:"superRain",dmg:330,hits:12},karen:{name:"\u30B0\u30E9\u30F3\u30D6\u30EB\u30FC\u30FB\u30C0\u30A4\u30D6",t:"superRush",dmg:360,vx:19,hits:8},reika:{name:"\u5343\u672C\u77E2\u30FB\u767E\u82B1",t:"superRain",dmg:330,hits:14},sakura:{name:"\u5343\u672C\u685C\u30FB\u4E71\u821E",t:"superRush",dmg:345,vx:22,hits:12},reiko:{name:"\u5352\u696D\u8A66\u9A13",t:"superRush",dmg:380,vx:22,hits:10}},Da={hinata:{name:"\u7279\u88FD\u30B8\u30E3\u30F3\u30DC\u304A\u306B\u304E\u308A",t:"superProj",dmg:320,hits:8,kind:"bigonigiri",vx:9},miyu:{name:"\u30DE\u30FC\u30C1\u30F3\u30B0\u30FB\u30D1\u30EC\u30FC\u30C9",t:"superRush",dmg:330,vx:18,hits:10},ruru:{name:"\u30B9\u30DD\u30C3\u30C8\u30E9\u30A4\u30C8\u30FB\u30B9\u30D4\u30F3",t:"superRise",dmg:320,hits:9},akane:{name:"\u79D8\u5263\u30FB\u5929\u7FD4\u65AC",t:"superRise",dmg:340,hits:7},yukari:{name:"\u30AE\u30E3\u30E9\u30AF\u30B7\u30FC\u30FB\u30B2\u30FC\u30C8",t:"superRush",dmg:330,vx:26,hits:10},karen:{name:"\u30BF\u30A4\u30C0\u30EB\u30FB\u30A6\u30A7\u30FC\u30D6",t:"superProj",dmg:340,hits:8,kind:"tidal",vx:8},reika:{name:"\u4E00\u77E2\u30FB\u6708\u5F71",t:"superProj",dmg:330,hits:6,kind:"bigarrow",vx:22},sakura:{name:"\u685C\u82B1\u30FB\u5929\u821E",t:"superRain",dmg:330,hits:14},reiko:{name:"\u6700\u7D42\u6307\u5C0E\u30FB\u30DB\u30A4\u30C3\u30B9\u30EB",t:"superBeam",dmg:350,hits:12}},Gu={ff:"\u2192\u2192",bb:"\u2190\u2190",dd:"\u2193\u2193",df:"\u2193\u2192",db:"\u2193\u2190"},Wu={N:"\u5FC5\u6BBA\u30DC\u30BF\u30F3",F:"\u2192\uFF0B\u5FC5\u6BBA\u30DC\u30BF\u30F3",B:"\u2190\uFF0B\u5FC5\u6BBA\u30DC\u30BF\u30F3",D:"\u2193\uFF0B\u5FC5\u6BBA\u30DC\u30BF\u30F3"};function Fa(n,e){let t=n.height;return e==="crouch"?{w:44,h:t*.62}:e==="down"?{w:70,h:40}:e==="air"?{w:40,h:t*.8}:{w:40,h:t*.95}}var $l={hinata:{intro:"\u4ECA\u5E74\u3053\u305D\u6599\u7406\u90E8\u306E\u4E88\u7B97\u3092\u30B2\u30C3\u30C8\u3057\u3066\u3001\u6587\u5316\u796D\u3067\u304A\u5E97\u3092\u51FA\u3059\u3093\u3060\uFF01",ending:["\u4E88\u7B97\u3092\u624B\u306B\u3057\u305F\u6599\u7406\u90E8\u306F\u3001\u6587\u5316\u796D\u3067\u300C\u3072\u306A\u305F\u98DF\u5802\u300D\u3092\u958B\u3044\u305F\u3002","\u884C\u5217\u306F\u6821\u9580\u307E\u3067\u7D9A\u304D\u3001\u8A66\u98DF\u306B\u6765\u305F\u9DF9\u5BAE\u5148\u751F\u304C\u3001\u3053\u3063\u305D\u308A\u304A\u304B\u308F\u308A\u3092\u3057\u305F\u306E\u306F\u5185\u7DD2\u306E\u8A71\u3002","\u300C\u6765\u5E74\u3082\u3001\u307F\u3093\u306A\u3067\u304A\u306A\u304B\u3044\u3063\u3071\u3044\u306B\u3057\u3088\u3046\u306D\uFF01\u300D"]},miyu:{intro:"\u65B0\u3057\u3044\u697D\u5668\u304C\u3042\u308C\u3070\u3001\u307F\u3093\u306A\u3067\u3082\u3063\u3068\u3044\u3044\u97F3\u304C\u51FA\u305B\u308B\u2026\u2026\u304C\u3093\u3070\u3089\u306A\u304D\u3083\u3002",ending:["\u3074\u304B\u3074\u304B\u306E\u697D\u5668\u304C\u305D\u308D\u3063\u305F\u5439\u594F\u697D\u90E8\u3002","\u5B9A\u671F\u6F14\u594F\u4F1A\u306E\u30BD\u30ED\u3067\u3001\u307F\u3086\u306E\u30C8\u30E9\u30F3\u30DA\u30C3\u30C8\u304C\u4F53\u80B2\u9928\u3044\u3063\u3071\u3044\u306B\u97FF\u3044\u305F\u3002","\u300C\u2026\u2026\u5C4A\u304D\u307E\u3057\u305F\u304B\uFF1F \u308F\u305F\u3057\u306E\u97F3\u300D"]},ruru:{intro:"\u5168\u56FD\u306E\u30B9\u30C6\u30FC\u30B8\u306B\u7ACB\u3064\u306B\u306F\u9060\u5F81\u8CBB\u304C\u3044\u308B\u306E\uFF01 \u8CA0\u3051\u3089\u3093\u306A\u3044\u3063\u3057\u3087\uFF01",ending:["\u30C0\u30F3\u30B9\u90E8\u306F\u5168\u56FD\u5927\u4F1A\u306E\u821E\u53F0\u3078\u3002","\u30B9\u30DD\u30C3\u30C8\u30E9\u30A4\u30C8\u306E\u771F\u3093\u4E2D\u3067\u3001\u308B\u308B\u306F\u6700\u9AD8\u306E\u7B11\u9854\u3092\u898B\u305B\u305F\u3002","\u300C\u3053\u3053\u307E\u3067\u6765\u308C\u305F\u306E\u3001\u307F\u3093\u306A\u306E\u304A\u304B\u3052\u3060\u3088\uFF01\u300D"]},akane:{intro:"\u5168\u56FD\u3078\u306E\u9060\u5F81\u8CBB\u3068\u65B0\u3057\u3044\u9632\u5177\u2026\u2026\u5263\u9053\u90E8\u306E\u672A\u6765\u306F\u3001\u3053\u306E\u4E00\u6226\u306B\u304B\u304B\u3063\u3066\u3044\u308B\u3002",ending:["\u65B0\u3057\u3044\u9632\u5177\u306B\u8EAB\u3092\u5305\u3093\u3060\u5263\u9053\u90E8\u306F\u3001\u5168\u56FD\u5927\u4F1A\u3067\u5FEB\u9032\u6483\u3092\u898B\u305B\u305F\u3002","\u8A66\u5408\u306E\u3042\u3068\u3001\u3042\u304B\u306D\u306F\u3053\u3063\u305D\u308A\u3042\u3093\u307F\u3064\u3092\u4E09\u676F\u305F\u3044\u3089\u3052\u305F\u3002","\u300C\u2026\u2026\u3053\u308C\u306F\u3001\u52DD\u5229\u306E\u7CD6\u5206\u88DC\u7D66\u3060\u300D"]},yukari:{intro:"\u5C4B\u4E0A\u306B\u5927\u304D\u306A\u671B\u9060\u93E1\u306E\u30C9\u30FC\u30E0\u2026\u2026\u661F\u7A7A\u3092\u3001\u307F\u3093\u306A\u306B\u898B\u305B\u3066\u3042\u3052\u305F\u3044\u306E\u3002",ending:["\u5C4B\u4E0A\u306B\u5B8C\u6210\u3057\u305F\u767D\u3044\u30C9\u30FC\u30E0\u3002","\u89B3\u6E2C\u4F1A\u306E\u591C\u3001\u3086\u304B\u308A\u306F\u305F\u304F\u3055\u3093\u306E\u751F\u5F92\u3068\u4E00\u7DD2\u306B\u6D41\u308C\u661F\u3092\u6570\u3048\u305F\u3002","\u300C\u307B\u3089\u3001\u3042\u306A\u305F\u306E\u9858\u3044\u3054\u3068\u3082\u3001\u304D\u3063\u3068\u5C4A\u304D\u307E\u3059\u3088\u301C\u300D"]},karen:{intro:"\u53E4\u3044\u30D7\u30FC\u30EB\u3092\u76F4\u3057\u3066\u3001\u5F8C\u8F29\u305F\u3061\u306B\u601D\u3044\u3063\u304D\u308A\u6CF3\u304C\u305B\u3066\u3042\u3052\u305F\u3044\u3093\u3060\u3002",ending:["\u65B0\u3057\u304F\u306A\u3063\u305F\u30D7\u30FC\u30EB\u306B\u3001\u6C34\u3057\u3076\u304D\u3068\u7B11\u3044\u58F0\u304C\u623B\u3063\u3066\u304D\u305F\u3002","\u30AB\u30EC\u30F3\u306F\u5F8C\u8F29\u305F\u3061\u306E\u30BF\u30A4\u30E0\u3092\u6E2C\u308A\u306A\u304C\u3089\u3001\u6E80\u8DB3\u305D\u3046\u306B\u7B11\u3063\u305F\u3002","\u300C\u3055\u3042\u3001\u3082\u3046\u4E00\u672C\u3044\u3053\u3046\uFF01\u300D"]},reika:{intro:"\u96E8\u6F0F\u308A\u3059\u308B\u9053\u5834\u3067\u306F\u3001\u5F13\u306F\u5F15\u3051\u306A\u3044\u3002\u2026\u2026\u52DD\u3064\u308F\u3002",ending:["\u5C4B\u6839\u306E\u76F4\u3063\u305F\u5F13\u9053\u5834\u306B\u3001\u6F84\u3093\u3060\u5F26\u97F3\u304C\u97FF\u304F\u3002","\u7DF4\u7FD2\u306E\u3042\u3068\u3001\u30EC\u30A4\u30AB\u306F\u9053\u5834\u306B\u8FF7\u3044\u8FBC\u3093\u3060\u5B50\u732B\u3092\u305D\u3063\u3068\u64AB\u3067\u305F\u3002","\u300C\u2026\u2026\u3042\u306A\u305F\u3082\u3001\u3053\u3053\u304C\u597D\u304D\uFF1F\u300D"]},sakura:{intro:"\u3059\u3079\u3066\u306E\u90E8\u306B\u516C\u5E73\u306A\u4E88\u7B97\u3092\u2015\u2015\u305D\u306E\u305F\u3081\u306B\u3001\u308F\u305F\u304F\u3057\u304C\u52DD\u3061\u307E\u3059\u3002",ending:["\u3055\u304F\u3089\u304C\u4F5C\u3063\u305F\u65B0\u3057\u3044\u4E88\u7B97\u306E\u4ED5\u7D44\u307F\u3067\u3001\u3069\u306E\u90E8\u306B\u3082\u5149\u304C\u5F53\u305F\u308B\u3088\u3046\u306B\u306A\u3063\u305F\u3002","\u751F\u5F92\u4F1A\u5BA4\u306E\u7A93\u304B\u3089\u3001\u306B\u304E\u3084\u304B\u306A\u653E\u8AB2\u5F8C\u3092\u773A\u3081\u3066\u3001\u3055\u304F\u3089\u306F\u5FAE\u7B11\u3093\u3060\u3002","\u300C\u3054\u304D\u3052\u3093\u3088\u3046\u3002\u660E\u65E5\u3082\u3001\u3059\u3066\u304D\u306A\u653E\u8AB2\u5F8C\u3092\u300D"]},reiko:{intro:"\u672C\u6C17\u3092\u898B\u305B\u3066\u307F\u306A\u3055\u3044\u3002\u305D\u308C\u304C\u4E88\u7B97\u59D4\u54E1\u9577\u3068\u3057\u3066\u306E\u3001\u79C1\u306E\u4ED5\u4E8B\u3088\u3002",ending:["\u751F\u5F92\u305F\u3061\u306E\u672C\u6C17\u3092\u78BA\u304B\u3081\u305F\u9DF9\u5BAE\u5148\u751F\u306F\u3001\u3059\u3079\u3066\u306E\u90E8\u306B\u5C11\u3057\u305A\u3064\u4E88\u7B97\u3092\u914D\u3063\u305F\u3002","\u300C\u2026\u2026\u307E\u3063\u305F\u304F\u3001\u624B\u306E\u304B\u304B\u308B\u5B50\u305F\u3061\u306D\u300D","\u305D\u3046\u8A00\u3044\u306A\u304C\u3089\u3001\u5148\u751F\u306E\u673A\u306B\u306F\u5168\u90E8\u306E\u90E8\u306E\u5FDC\u63F4\u30B0\u30C3\u30BA\u304C\u4E26\u3093\u3067\u3044\u305F\u3002"]}};function Jl(n,e,t){if(!e||e<2)return n.hits=1,n.perHit=n.dmg,n;let i=(e-1)*t+2;return n.r=Math.max(5,n.r-Math.max(0,i-n.a)),n.a=i,n.hits=e,n.gap=t,n.perHit=Math.max(1,Math.round(n.dmg/e)),n}function Ci(n,e,t={}){let i=e[e.length-2]+e[e.length-1],s=Vu[i],r=i.endsWith("P"),a=r?Zi[n.id][i[0]]:null,o=s.reach*(r?a[2]:n.reachK*1.1),l={id:e,kind:"normal",lvl:s.lvl,s:s.s,a:s.a,r:s.r,dmg:Math.round(s.dmg*n.dmg),box:{x:18+o/2,y:s.y*n.height/240,w:o,h:s.h},stun:s.stun,bstun:s.bstun,stop:s.stop,push:s.push,guard:"mid",voice:s.voice,anim:e,sfx:["","swing_l","swing_m","swing_h"][s.lvl],hitsfx:["","hit_l","hit_m","hit_h"][s.lvl],prop:a?a[0]:null,propName:a?a[1]:null,nh:s.hits,ng:s.gap};return Object.assign(l,t),Jl(l,t.hits??s.hits,t.gap??s.gap)}function Gp(n,e){let t={...n,id:"f"+n.id,anim:"f"+n.id,box:{...n.box}},i=n.lvl===2;return t.s=n.s+(i?5:2),t.dmg=Math.round(n.dmg*1.15),t.box.w=n.box.w*1.3,t.box.x=18+t.box.w/2,i&&(t.guard="high",t.overhead=!0,t.box.y+=18,t.box.h+=14),Jl(t,n.hits,n.gap)}function Wp(n){let e={...n,id:"b"+n.id,anim:"b"+n.id,box:{...n.box}};return e.s=Math.max(3,n.s-1),e.r=Math.max(4,Math.round(n.r*.65)),e.dmg=Math.round(n.dmg*.85),e.box.w=n.box.w*.75,e.box.x=18+e.box.w/2,Jl(e,n.hits,n.gap)}function Xu(n){let e=an[n],t=e.height/240,i={};for(let a of["LP","MP","HP","LK","MK","HK"])i[a]=Ci(e,a),i["f"+a]=Gp(i[a],e),i["b"+a]=Wp(i[a]);i.cLP=Ci(e,"LP",{id:"cLP",anim:"cLP"}),i.cLP.box.y=95*t,i.cMP=Ci(e,"MP",{id:"cMP",anim:"cMP"}),i.cMP.box.y=100*t,i.cHP=Ci(e,"HP",{id:"cHP",anim:"cHP",s:9,a:5,r:24,dmg:Math.round(72*e.dmg),launch:21,launcher:!0,stop:12,hits:1}),i.cHP.box={x:50,y:190*t,w:80,h:150*t},i.cLK=Ci(e,"LK",{id:"cLK",anim:"cLK",guard:"low"}),i.cLK.box.y=18,i.cLK.box.h=30,i.cMK=Ci(e,"MK",{id:"cMK",anim:"cMK",guard:"low"}),i.cMK.box.y=18,i.cMK.box.h=30,i.cMK.box.w*=1.05,i.cMK.box.x+=6,i.cHK=Ci(e,"HK",{id:"cHK",anim:"cHK",guard:"low",r:27,knockdown:!0,hits:1}),i.cHK.box={x:20+66*e.reachK,y:16,w:138*e.reachK,h:30};for(let a of["LP","MP","HP","LK","MK","HK"]){let o=Ci(e,a,{id:"j"+a,anim:"j"+a,guard:"high",air:!0,hits:a[0]==="H"?2:1,gap:4});o.box.y=(a.endsWith("K")?30:70)*t,o.box.h=a.endsWith("K")?70:60,o.box.x=12+o.box.w*.42,o.box.w*=.85,o.a=o.a+(a[0]==="H",4),o.r=Math.max(6,o.r-4),i["j"+a]=o}i.autoAir={id:"autoAir",kind:"normal",t:"autoAir",lvl:3,s:8,a:40,r:10,dmg:Math.round(48*e.dmg),dmgs:[42,52,88].map(a=>Math.round(a*e.dmg)),box:{x:58,y:70*t,w:110,h:110},stun:30,bstun:12,stop:9,push:4,guard:"high",air:!0,voice:"atk_h",anim:"jHP",sfx:"swing_h",hitsfx:"hit_h",hits:3,prop:Zi[n].H[0]},i.dashP={id:"dashP",kind:"dash",lvl:3,s:6,a:7,r:20,dmg:Math.round(82*e.dmg),box:{x:60,y:150*t,w:90,h:80},stun:30,bstun:14,stop:12,push:22,guard:"mid",wallblow:!0,voice:"atk_h",anim:"dashP",sfx:"swing_h",hitsfx:"hit_h",keepVx:7},i.dashK={id:"dashK",kind:"dash",lvl:3,s:7,a:8,r:22,dmg:Math.round(88*e.dmg),box:{x:70,y:110*t,w:100,h:90},stun:30,bstun:14,stop:12,push:22,guard:"mid",wallblow:!0,voice:"atk_h",anim:"dashK",sfx:"swing_h",hitsfx:"hit_h",keepVx:8},i.throw={id:"throw",kind:"throw",lvl:3,s:3,a:2,r:26,dmg:Math.round(115*e.dmg),reach:92,guard:"none",voice:"throw",anim:"throw",hitsfx:"hit_h"};for(let a of ka[n])i[a.key]={...a,id:a.key,kind:"special",lvl:4,a:a.a??4,stun:a.stun??26,bstun:a.bstun??18,stop:a.stop??12,push:a.push??20,guard:a.overhead?"high":"mid",voice:a.key,anim:a.key,hitsfx:"hit_h",dmg:Math.round(a.dmg*e.dmg),box:a.reach?{x:18+a.reach/2,y:a.y*t,w:a.reach,h:a.h}:null};let s=Na[n];i.super={...s,id:"super",kind:"super",lvl:5,s:8,a:26,r:34,dmg:Math.round(s.dmg*e.dmg),stun:40,bstun:22,stop:4,push:10,guard:"mid",voice:"super",anim:"super",box:{x:70,y:140*t,w:120,h:180*t},hitsfx:"hit_h"};let r=Da[n];return i.super2={...r,projKind:r.kind,id:"super2",kind:"super",lvl:5,s:8,a:26,r:34,dmg:Math.round(r.dmg*e.dmg),stun:40,bstun:22,stop:4,push:10,guard:"mid",voice:"super2",anim:"super",box:{x:70,y:140*t,w:120,h:180*t},hitsfx:"hit_h"},r.t==="superRise"&&Object.assign(i.super2,{s:6,a:r.hits*4,r:24,vy:[19,19,19],vx:2.5,box:{x:46,y:170*t,w:110,h:170*t},launch:12,perHit:Math.round(r.dmg*e.dmg/r.hits),invul:999}),r.t==="superProj"&&Object.assign(i.super2,{s:12,a:4,r:30}),i}var qu=["LP","MP","HP","LK","MK","HK","DG","SP","SP2","EZ","EC"];function on(){return{u:0,d:0,l:0,r:0,LP:0,MP:0,HP:0,LK:0,MK:0,HK:0,DG:0,SP:0,SP2:0,EZ:0,EC:0}}var Ua=class{constructor(){this.hist=[],this.prev=on(),this.frame=0,this.lastPress={}}push(e,t){let i=t>=0?1:-1,s=i>0?e.r:e.l,r=i>0?e.l:e.r,a={u:!!e.u,d:!!e.d,f:!!s&&!r,b:!!r&&!s,press:{}};for(let o of qu)a.press[o]=!!e[o]&&!this.prev[o],a.press[o]&&(this.lastPress[o]=this.frame);a.held={};for(let o of qu)a.held[o]=!!e[o];return this.hist.push(a),this.hist.length>40&&this.hist.shift(),this.prev={...e},this.frame++,a}cur(){return this.hist[this.hist.length-1]}pressedWithin(e,t){for(let i=this.hist.length-1;i>=0&&i>=this.hist.length-t;i--)for(let s of e)if(this.hist[i].press[s])return s;return null}_edges(e,t){let i=[],s=this.hist;for(let r=s.length-1;r>=0&&r>=s.length-t;r--)s[r][e]&&!(r>0&&s[r-1][e])&&i.push(r);return i}doubleTap(e,t=14,i=9){let s=this._edges(e,t+i+2);if(s.length<2)return!1;let r=s[0],a=s[1];return!(r-a>t||this.hist.length-1-r>i)}quarter(e,t=14,i=10){let s=this.hist,r=s.length,a=-1;for(let o=r-1;o>=0&&o>=r-1-i;o--)if(s[o][e]&&!s[o].d||s[o][e]&&s[o].d){a=o;break}if(a<0)return!1;for(let o=a;o>=0&&o>=a-t;o--)if(s[o].d&&!s[o][e])return!0;return!1}};function Pi(n,e,t){let i=n.cur();if(!i)return null;if(t){if(i.press.SP)return{kind:"super",n:1};if(i.press.SP2)return{kind:"super",n:2};let o=Xp(n);if(o)return{kind:"super",n:o}}let s=["LP","MP","HP"].find(o=>i.press[o]),r=["LK","MK","HK"].find(o=>i.press[o]),a=s||r;if(a){let o=s?"P":"K",l={LP:0,MP:1,HP:2,LK:0,MK:1,HK:2}[a],c=[];n.doubleTap("d",16,10)&&c.push("dd"),n.quarter("f")&&c.push("df"),n.quarter("b")&&c.push("db"),n.doubleTap("f",14,9)&&c.push("ff"),n.doubleTap("b",14,9)&&c.push("bb");for(let u of c){let h=e.find(d=>d.cmd===u+o);if(h)return{kind:"special",sp:h,str:l,btn:a}}}return null}function Ku(n){let e=n.cur();if(!e)return null;let t=n.hist,i=t.length;return i>=2&&e.f&&!t[i-2].f&&n.doubleTap("f",13,0)?"dash":i>=2&&e.b&&!t[i-2].b&&n.doubleTap("b",13,0)?"backstep":null}function Xp(n,e=5){let t=n.cur();if(!t)return 0;let i=n.frame-1,s=n.lastPress,r=h=>s[h]!==void 0&&i-s[h]<=e;if(!r("EZ"))return 0;let a=["LP","MP","HP"],o=["LK","MK","HK"],l=a.filter(r).length,c=o.filter(r).length,u=h=>t.press.EZ||h.some(d=>t.press[d]);return l>=2&&u(a)?1:c>=2&&u(o)?2:0}function Yu(n,e=4){let t=n.lastPress.EZ;return t!==void 0&&n.frame-1-t<=e}var Kn=50,jp=60,Zp=22,Ql=12,Ba=new Set(["stand","crouch","walk","land","dashstop"]);var ec=class{constructor(e=1){this.s=e>>>0||1}next(){let e=this.s;return e^=e<<13,e^=e>>>17,e^=e<<5,this.s=e>>>0,this.s/4294967296}range(e,t){return e+(t-e)*this.next()}pick(e){return e[Math.floor(this.next()*e.length)]}},za=class{constructor(e,t,i){this.id=e,this.ch=an[e],this.M=Xu(e),this.side=t,this.m=i,this.specials=Object.values(this.M).filter(s=>s.kind==="special"),this.buf=new Ua,this.raw=on(),this.wins=0,this.gauge=0,this.reset()}reset(){this.x=this.side===0?2e3/2-230:2e3/2+230,this.y=0,this.vx=0,this.vy=0,this.facing=this.side===0?1:-1,this.hp=this.ch.hp,this.redHp=this.ch.hp,this.state="stand",this.sf=0,this.mv=null,this.airJumps=1,this.invS=0,this.invT=0,this.stun=0,this.comboHits=0,this.comboDmg=0,this.juggle=0,this.jgrav=1,this.cancel=0,this.jumpCancel=0,this.blaze=0,this.lastDmg=0,this.guardFlash=0,this.guarding=!1,this.prevU=!1,this.landLag=0,this.counterFlag=0,this.armor=0,this.afterimage=0,this.voiceCd=0,this.hitCd=0,this.lockedBy=null,this.koFrames=0,this.airHits=0,this.airGuard=!1}get opp(){return this.m.f[1-this.side]}get air(){return this.y>.01||this.vy>0}posture(){return this.state==="down"||this.state==="getup"?"down":this.air?"air":this.state==="crouch"||this.mv&&this.mv.def.id&&this.mv.def.id[0]==="c"&&this.mv.def.kind==="normal"||this.state==="guard"&&this.guardLow?"crouch":"stand"}hurt(){let e=this.posture(),t=Fa(this.ch,e),i=this.x-t.w,s=this.x+t.w;if(this.mv&&this.mv.def.box&&this.mv.f>=this.mv.def.s-2&&this.mv.f<this.mv.def.s+this.mv.def.a+4){let r=Math.min(this.mv.def.box.w*.55,90);this.facing>0?s+=r:i-=r}return{x0:i,x1:s,y0:this.y,y1:this.y+t.h}}ev(e){this.m.events.push({who:this.side,...e})}voice(e,t=!1){this.voiceCd>0&&!t||(this.voiceCd=10,this.ev({type:"voice",id:this.id,key:e}))}setState(e){this.state=e,this.sf=0,e!=="attack"&&(this.mv=null)}gaugeAdd(e){this.blaze>0||(this.gauge=Math.min(120,this.gauge+e),this.gauge>=120&&(this.blaze=360,this.ev({type:"blaze"}),this.voice("superpre",!0)))}canSuper(){return this.gauge>=100||this.blaze>0}startMove(e,t=1,i={}){this.setState("attack"),this.mv={def:e,f:0,str:t,hit:!1,hitCount:0,blocked:!1,phase:0,...i},this.cancel=0,e.kind==="special"||e.kind==="super"?this.voice(e.voice,!0):e.voice&&this.m.rng.next()<(e.lvl>=3?.9:e.lvl===2?.7:.5)&&this.voice(e.voice),e.sfx&&this.ev({type:"sfx",key:e.sfx}),e.kind==="super"&&(this.blaze<=0&&(this.gauge=Math.max(0,this.gauge-100)),this.m.superFlash(this,e)),e.armor&&(this.armor=e.armor)}think(){let e=this.buf.push(this.raw,this.facing);if(this.stopPress){for(let h in this.stopPress)e.press[h]=!0;this.stopPress=null}let t=this.state;if(this.m.phase!=="fight")return;let i=e.u&&!this.prevU;this.prevU=e.u;let s=this.buf.frame-1;if(e.press.EZ)this.ezPend={at:s,dir:e.f?"F":e.b?"B":e.d?"D":"N"};else if(this.ezPend&&this.ezPend.dir==="N"&&s-this.ezPend.at<=2){let h=e.f?"F":e.b?"B":e.d?"D":"N";h!=="N"&&(this.ezPend.dir=h)}this.ezPend&&s-this.ezPend.at>12&&(this.ezPend=null);let r=()=>{if(!this.ezPend||s-this.ezPend.at<3)return null;let h=this.specials.find(d=>d.ez===this.ezPend.dir)||this.specials.find(d=>d.ez==="N");return this.ezPend=null,h?{kind:"special",sp:h,str:1}:null},a=["LP","MP","HP"].some(h=>e.press[h]),o=["LK","MK","HK"].some(h=>e.press[h]);if(t==="air_hit"&&this.airHits>=1&&(a||o)&&this.hp>0&&this.y>24){this.airTech();return}if(e.held.EC&&(a||o)&&!(this.canSuper()&&Pi(this.buf,[],!0))){let h=a?"P":"K";if(t==="attack"&&this.mv&&this.mv.ac&&this.ac&&this.ac.type===h)this.ac.q=Math.min(2,this.ac.q+1);else if(Ba.has(t)||t==="dashstop"){this.ezPend=null,this.ac={type:h,step:1,q:0},this.startMove(this.M["L"+h],1,{ac:!0});return}}if(t==="attack"&&this.mv){let h=this.mv.def;if(this.mv.ac&&this.ac){let d=this.mv.f>=h.s+h.a||this.cancel>0;if(this.ac.q>0&&this.ac.step<3&&d){this.ac.q--,this.ac.step++,this.startMove(this.M[["L","M","H"][this.ac.step-1]+this.ac.type],1,{ac:!0});return}if(this.ac.step===3&&e.press.EZ&&this.mv.f>=h.s){let p=e.f?"F":e.b?"B":e.d?"D":"N",g=this.specials.find(_=>_.ez===p)||this.specials.find(_=>_.ez==="N");if(this.ezPend=null,this.ac=null,this.doSpecial({kind:"special",sp:g,str:1},{fromCombo:!0}),this.state==="attack")return}}if(h.kind==="special"&&(this.mv.fromCombo||this.cancel>0)&&(e.held.EZ||e.press.EZ)&&(a||o)&&this.canSuper()){this.doSuper(a?1:2);return}if(h.launcher&&this.mv.hit&&e.press.HP&&this.cancel>0){this.startMove(this.M.autoAir,1,{auth:1,done:0});return}if(h.t==="autoAir"&&e.press.HP&&(this.mv.auth=Math.min(3,(this.mv.auth||1)+1)),h.kind==="normal"&&this.mv.f<=5&&this.cancel<=0){let d=Pi(this.buf,[],this.canSuper());if(d&&d.kind==="super"){this.doSuper(d.n);return}}if(this.cancel>0){let d=Pi(this.buf,this.specials,this.canSuper());if(d&&d.kind==="super"&&h.kind!=="super"){this.doSuper(d.n);return}if((h.kind==="normal"||h.kind==="dash")&&this.ezPend){let p=r();if(p){this.doSpecial(p);return}if(this.ezPend)return}if(d&&d.kind==="special"&&(h.kind==="normal"||h.kind==="dash")){this.doSpecial(d);return}if(h.kind==="normal"&&!h.air){let p=this.pickNormal(e,!0);if(p&&this.M[p].lvl>h.lvl){this.startMove(this.M[p],1);return}}if(h.air&&h.kind==="normal"){let p=this.pickNormal(e,!0,!0);if(p&&this.M[p].lvl>h.lvl){this.startMove(this.M[p],1,{airMove:!0});return}if(i&&this.airJumps>0){this.doubleJump(e);return}}}if(this.jumpCancel>0&&e.u&&h.launcher){this.superJump(e);return}return}if(t==="jump"||t==="airdash"||t==="airtech"){this.guarding=this.holdAway()&&this.threatened();let h=Pi(this.buf,[],this.canSuper()),d=this.pickNormal(e,!1,!0);if(d){this.startMove(this.M[d],1,{airMove:!0});return}if(i&&this.airJumps>0&&this.sf>4){this.doubleJump(e);return}return}if(t==="dash"){let h=Pi(this.buf,this.specials,this.canSuper());if(h&&h.kind==="super"){this.doSuper(h.n);return}if(h&&h.kind==="special"){this.doSpecial(h);return}if(this.ezPend){let p=r();if(p){this.doSpecial(p);return}return}let d=["LP","MP","HP"].some(p=>e.press[p])?"P":["LK","MK","HK"].some(p=>e.press[p])?"K":null;if(d){let p=this.vx;this.startMove(this.M["dash"+d],1,{vx0:p});return}if(i||e.u){this.jump(e,1.6,1);return}if(!e.f&&this.sf>8){this.setState("dashstop");return}return}if(t==="backstep"&&this.sf<8){let h=Pi(this.buf,this.specials,this.canSuper());if(h&&h.kind==="special"){this.vy=0,this.y=0,this.doSpecial(h);return}}if(!Ba.has(t)||t==="land"&&this.sf<this.landLag)return;let l=Pi(this.buf,this.specials,this.canSuper());if(l&&l.kind==="super"){this.doSuper(l.n);return}if(l&&l.kind==="special"){this.doSpecial(l);return}if(this.ezPend){let h=r();if(h){this.doSpecial(h);return}}if((e.press.HP||e.press.HK)&&(e.f||e.b)){let h=this.opp;if(Math.abs(h.x-this.x)<this.M.throw.reach+6&&!h.air&&this.canBeThrown(h)){this.startMove(this.M.throw,1,{back:e.b});return}}let c=Ku(this.buf);if(c==="dash"){this.setState("dash"),this.ev({type:"sfx",key:"dash"}),this.afterimage=12;return}if(c==="backstep"){this.setState("backstep"),this.vy=6.5,this.y=.02,this.ev({type:"sfx",key:"dash"}),this.afterimage=14;return}let u=this.pickNormal(e,!1);if(u){this.startMove(this.M[u],1);return}if(e.press.DG){this.setState("dodge"),this.ev({type:"sfx",key:"dodge"}),this.voice("dodge"),this.afterimage=20;return}if(e.u){this.jump(e);return}if(e.d){t!=="crouch"&&this.setState("crouch"),this.guarding=e.b&&this.threatened();return}this.guarding=e.b&&this.threatened(),e.f?(t!=="walk"&&this.setState("walk"),this.walkDir=1):e.b&&!this.guarding?(t!=="walk"&&this.setState("walk"),this.walkDir=-1):t!=="stand"&&t!=="land"&&t!=="dashstop"?this.setState("stand"):(t==="land"&&this.sf>=this.landLag||t==="dashstop"&&this.sf>6)&&this.setState("stand")}holdAway(){let e=this.raw;return this.opp.x>this.x?!!e.l&&!e.r:!!e.r&&!e.l}airTech(){let e=this.opp;this.setState("airtech"),this.facing=e.x>this.x?1:-1,this.invS=Ql,this.invT=Ql,this.vy=Math.max(this.vy,6),this.vx=-this.facing*2.6,this.airJumps=0,this.endCombo(),this.airHits=0,this.afterimage=14,this.ev({type:"tech",x:this.x,y:this.y+this.ch.height*.5}),this.ev({type:"text",key:"tech",who:this.side}),this.ev({type:"sfx",key:"dodge"}),this.voice("dodge",!0)}threatened(){let e=this.opp,t=Math.abs(e.x-this.x);if(e.state==="attack"&&t<360)return!0;for(let i of this.m.proj)if(i.owner!==this.side&&Math.abs(i.x-this.x)<320)return!0;return!1}pickNormal(e,t,i=!1){if(e.held.EZ||e.held.EC||Yu(this.buf))return null;let s=["HK","HP","MK","MP","LK","LP"];for(let r of s)if(e.press[r])return i||this.air?"j"+r:(e.d?"c":e.f?"f":e.b?"b":"")+r;return null}jump(e,t=1,i=1){this.setState("prejump"),this.jumpDir=e.f?1:e.b?-1:0,this.jumpV=this.ch.jump*i,this.jumpMult=t}superJump(e){this.jumpCancel=0,this.setState("jump"),this.vy=this.ch.jump*1.3,this.y=.02,this.vx=(e.f?3.5:e.b?-3:1.2)*this.facing,this.airJumps=1,this.ev({type:"sfx",key:"jump"}),this.voice("jump")}doubleJump(e){this.airJumps--,this.setState("jump"),this.vy=this.ch.jump*.9,this.vx=(e.f?4.4:e.b?-4.2:0)*this.facing,this.ev({type:"sfx",key:"jump2"}),this.afterimage=8,this.sf=5}doSpecial(e,t={}){let i=e.sp;(i.t==="projectile"||i.t==="sky")&&this.m.proj.some(s=>s.owner===this.side&&!s.rain)||this.startMove(i,e.str,t)}doSuper(e=1){this.ezPend=null,this.startMove(e===2?this.M.super2:this.M.super,2)}canBeThrown(e){return!(e.invT>0||e.air||["hit","guard","down","getup","thrown","ko","air_hit","wallblow","locked","backstep","prejump"].includes(e.state))}physics(){let e=this.opp,t=this.state;switch(this.sf++,this.voiceCd>0&&this.voiceCd--,this.invS>0&&this.invS--,this.invT>0&&this.invT--,this.cancel>0&&this.cancel--,this.jumpCancel>0&&this.jumpCancel--,this.afterimage>0&&this.afterimage--,this.guardFlash>0&&this.guardFlash--,this.blaze>0&&(this.blaze--,this.gauge=120*this.blaze/360,this.blaze===0&&(this.gauge=0)),(Ba.has(t)||t==="prejump"||t==="guard"&&!this.air)&&Math.abs(e.x-this.x)>4&&(this.facing=e.x>this.x?1:-1),t){case"stand":case"crouch":case"land":this.vx=0;break;case"dashstop":this.vx*=.75;break;case"walk":this.vx=this.walkDir>0?this.ch.walk*this.facing:-this.ch.back*this.facing;break;case"prejump":this.vx=0,this.sf>=3&&(this.setState("jump"),this.vy=this.jumpV,this.y=.02,this.airJumps=1,this.vx=this.jumpDir*(this.jumpDir>0?4.6:4.2)*this.facing*(this.jumpMult||1),this.ev({type:"sfx",key:"jump"}),this.m.rng.next()<.3&&this.voice("jump"));break;case"dash":this.vx=this.ch.dash*this.facing,this.sf%7===0&&this.ev({type:"dust",x:this.x,y:0});break;case"backstep":{this.vx=-11.5*this.facing*Math.max(.2,1-this.sf/20),this.sf<=12&&(this.invS=1,this.invT=1),!this.air&&this.sf>4&&(this.setState("land"),this.landLag=6);break}case"dodge":{this.vx=-1.2*this.facing,this.sf<=20&&(this.invS=1),this.sf>=30&&this.setState("stand");break}case"hit":this.vx*=.86,this.sf>=this.stun&&(this.setState(this.wasCrouch?"crouch":"stand"),this.endCombo());break;case"guard":this.vx*=this.air?.94:.86,this.sf>=this.stun&&(this.air?(this.setState("jump"),this.sf=10):this.setState(this.guardLow?"crouch":"stand"),this.airGuard=!1);break;case"airtech":this.vx*=.97,this.sf>=Ql&&(this.setState("jump"),this.sf=10);break;case"down":this.vx*=.8,this.sf>=(this.hp<=0?99999:34)&&this.setState("getup");break;case"getup":this.invS=1,this.invT=1,this.sf>=22&&(this.setState("stand"),this.invT=4,this.endCombo());break;case"thrown":break;case"locked":this.vx=0,this.vy=0;break;case"attack":this.stepMove();break;case"win":case"lose":case"intro":this.vx=0;break}if(t!=="thrown"&&t!=="locked"&&!(t==="attack"&&this.mv&&this.mv.hold)&&(this.x+=this.vx,this.air||this.vy>0)){let i=.95;(t==="air_hit"||t==="ko")&&(i=.42*this.ch.weight*this.jgrav),t==="wallblow"&&(i=.12),this.y+=this.vy,this.vy-=i,this.y<=0&&(this.y=0,this.landed())}this.x<Kn&&(this.x=Kn,this.hitWall(-1)),this.x>2e3-Kn&&(this.x=2e3-Kn,this.hitWall(1))}hitWall(e){this.state==="wallblow"&&Math.sign(this.vx)===e&&this.m.wallSplat(this,e)}landed(){let e=this.state;if(this.vy=0,e==="jump"||e==="airtech"){this.setState("land"),this.landLag=3,this.ev({type:"sfx",key:"land"});return}if(e==="guard"&&this.airGuard){this.airGuard=!1,this.setState("land"),this.landLag=4,this.ev({type:"sfx",key:"land"});return}if(e==="backstep"){this.setState("land"),this.landLag=5;return}if(e==="attack"){let t=this.mv.def;if(t.air||this.mv.airMove){this.setState("land"),this.landLag=4,this.ev({type:"sfx",key:"land"});return}if(t.t==="rising"||t.t==="superRise"||t.t==="flipdive"||t.t==="dive"||t.t==="backshot"){this.mv.landed=!0,this.vx=0;return}return}if(e==="air_hit"||e==="wallblow"||e==="ko"||e==="thrown"){this.setState("down"),this.vx*=.5,this.airHits=0,this.ev({type:"sfx",key:"down"}),this.ev({type:"dust",x:this.x,y:0,big:!0}),this.hp<=0&&(this.state="down"),this.m.shake=Math.max(this.m.shake,6);return}}endCombo(){this.comboHits=0,this.comboDmg=0,this.juggle=0,this.jgrav=1,this.airHits=0}stepMove(){let e=this.mv,t=e.def,i=e.f;e.f++;let s=(t.s||0)+(t.a||0)+(t.r||0),r=t.t||t.kind,a=this.facing,o=Math.min(2,e.str??1);switch(t.invul&&i<t.invul&&(this.invS=1),r){case"normal":case"dash":{t.kind==="dash"?this.vx=i<t.s+t.a?(e.vx0||this.ch.dash*a)*.85:this.vx*.8:this.air||(this.vx=0),t.air||e.airMove,!(t.air||e.airMove)&&i>=s?this.setState(this.mv&&t.id[0]==="c"?"crouch":"stand"):(t.air||e.airMove)&&i>=s&&(this.setState("jump"),this.sf=10);break}case"throw":{i===t.s&&this.m.tryThrow(this,t,e.back),e.grabbed?this.m.throwStep(this,e):i>=s&&this.setState("stand");break}case"grab":{this.vx=i<t.s?3*a:0,i===t.s&&this.m.tryThrow(this,t,!1),e.grabbed?this.m.throwStep(this,e):i>=s&&this.setState("stand");break}case"projectile":{this.vx=0,i===t.s&&this.m.spawnProj(this,t,o),i>=t.s+(t.r||20)&&this.setState("stand");break}case"sky":{this.vx=0,i===t.s&&this.m.spawnSky(this,t,o),i>=t.s+(t.r||20)&&this.setState("stand");break}case"backshot":{i===1&&(this.vy=t.vy,this.y=.02,this.vx=t.vx*a),i===t.s&&this.m.spawnProj(this,t,o),(e.landed||i>40)&&(this.air||(this.setState("land"),this.landLag=8));break}case"rush":{i<t.s?this.vx=0:i<t.s+t.a&&!e.hit?(this.vx=t.vx[o]*a,i%3===0&&this.ev({type:"dust",x:this.x,y:0}),this.afterimage=3):this.vx*=.7,i>=s&&this.setState("stand");break}case"spin":{let l=t.hits*t.gap+2;i<t.s?this.vx=0:i<t.s+l?this.vx=t.vx[o]*a:this.vx*=.7,i>=t.s+l+t.r&&this.setState("stand");break}case"autoAir":{let l=this.opp;i===1&&(this.y=Math.max(this.y,2),this.ev({type:"sfx",key:"jump"}),this.afterimage=10);let c=e.done||0;if(l.state==="air_hit"&&i<t.s+34&&!(c>=(e.auth||1)&&i>t.s+c*11+6)){let h=l.x-a*66,d=Math.max(1,l.y-24);this.x+=(h-this.x)*(i<t.s?.3:.5),this.y+=(d-this.y)*(i<t.s?.3:.5),this.vy=0,this.vx=0,e.hold=!0}else e.hold=!1,this.setState("jump"),this.sf=12,this.vy=Math.min(this.vy,2);break}case"superProj":{this.vx=0,i===t.s&&this.m.spawnSuperProj(this,t),i>=t.s+t.r&&this.setState("stand");break}case"rising":case"superRise":{i===t.s&&(this.vy=t.vy[o],this.y=.02,this.vx=t.vx*a,this.ev({type:"sfx",key:"swing_h"})),e.landed&&(this.setState("land"),this.landLag=t.r);break}case"flipdive":{i===1&&(this.vy=t.vy,this.y=.02,this.vx=-3*a),i===t.s&&(this.vy=-2,this.vx=t.vx[o]*a,this.ev({type:"sfx",key:"swing_h"})),i>t.s&&(this.vy=Math.min(this.vy,-6)),e.landed&&(this.setState("land"),this.landLag=t.r);break}case"dive":{i===1&&(this.vy=t.vy,this.y=.02,this.vx=3*a),i===t.s&&(this.vy=-7,this.vx=t.vx[o]*a,this.ev({type:"sfx",key:"swing_h"})),i>t.s&&(this.vy=Math.min(this.vy,-7)),e.landed&&(this.setState("land"),this.landLag=t.r);break}case"counter":{this.vx=0,e.countered?i>=e.countered+30&&this.setState("stand"):i>=s&&this.setState("stand");break}case"teleport":{if(this.vx=0,this.invS=1,this.invT=1,i===t.s&&(this.ev({type:"warp",x:this.x,y:120}),e.hidden=!0),i===t.s+t.a){let l=this.opp,c=Math.sign(l.x-this.x)||1;this.x=Math.max(Kn,Math.min(2e3-Kn,l.x+c*95)),e.hidden=!1,this.facing=l.x>this.x?1:-1,this.ev({type:"warp",x:this.x,y:120}),this.ev({type:"sfx",key:"warp"})}i>=s&&this.setState("stand");break}case"slip":{i<t.s?this.vx=0:i<t.s+t.a?(this.vx=t.vx[o]*a,this.afterimage=3,e.ghost=!0):(this.vx*=.6,e.ghost=!1,e.turned||(e.turned=!0,this.facing=this.opp.x>this.x?1:-1)),i>=s&&this.setState("stand");break}case"blast":case"barrier":{this.vx=0,i>=s&&this.setState("stand");break}case"superRush":{if(e.lock){this.m.superLockStep(this,e);break}i<t.s?this.vx=0:i<t.s+t.a?(this.vx=t.vx*a,this.afterimage=4):this.vx*=.7,i>=s&&this.setState("stand");break}case"superBeam":{this.vx=0,i>=t.s&&i<t.s+60&&(i-t.s)%5===0&&this.m.beamTick(this,t,Math.floor((i-t.s)/5)),i>=t.s+60+30&&this.setState("stand");break}case"superRain":{this.vx=0,i>=t.s&&i<t.s+t.hits*5&&(i-t.s)%5===0&&this.m.rainDrop(this,t,(i-t.s)/5),i>=t.s+t.hits*5+30&&this.setState("stand");break}}}activeBoxes(){let e=this.mv;if(!e||this.state!=="attack")return[];let t=e.def,i=e.f,s=t.t||t.kind;if(!t.box)return[];let r=!1,a=!1;switch(s){case"normal":{let u=i-t.s;t.hits>1?(r=u>=0&&u<t.a&&u%t.gap<2&&(e.hitCount||0)<t.hits&&e.lastHitF!==Math.floor(u/t.gap),a=!0):r=u>=0&&u<t.a&&!e.hit;break}case"autoAir":{let u=e.done||0,h=t.s+u*11;r=u<(e.auth||1)&&u<3&&i>=h&&i<=h+2,a=!0;break}case"dash":case"rush":case"blast":case"barrier":r=i>=t.s&&i<t.s+t.a&&!e.hit;break;case"spin":{let u=i-t.s;r=u>=0&&u<t.hits*t.gap&&u%t.gap<2&&e.hitCount<t.hits&&e.lastHitF!==Math.floor(u/t.gap),a=!0;break}case"rising":case"superRise":{let u=i-t.s,h=t.hits||1;if(h>1){let d=Math.floor(t.a/h);r=u>=0&&u<t.a&&u%d<2&&e.hitCount<h&&e.lastHitF!==Math.floor(u/d),a=!0}else r=u>=0&&u<t.a&&!e.hit;break}case"flipdive":case"dive":r=i>=t.s&&!e.hit&&!e.landed;break;case"slip":r=i>=t.s+t.a-6&&i<t.s+t.a+2&&!e.hit;break;case"superRush":r=i>=t.s&&i<t.s+t.a&&!e.hit&&!e.lock;break;default:r=!1}if(!r)return[];let o=t.box,l=this.x+this.facing*o.x,c=this.y+o.y;return[{x0:l-o.w/2,x1:l+o.w/2,y0:c-o.h/2,y1:c+o.h/2,multi:a}]}},$i=class{constructor(e){Object.assign(this,{hits:1,gap:8,cd:0,age:0,dead:!1},e)}box(){return{x0:this.x-this.w/2,x1:this.x+this.w/2,y0:this.y-this.h/2,y1:this.y+this.h/2}}};function Mr(n,e){return n.x0<e.x1&&n.x1>e.x0&&n.y0<e.y1&&n.y1>e.y0}var Ha=class{constructor(e,t,i={}){this.opts={rounds:2,time:3600,training:!1,seed:7,...i},this.rng=new ec(this.opts.seed),this.f=[new za(e,0,this),new za(t,1,this)],this.proj=[],this.events=[],this.round=1,this.frame=0,this.winner=null,this.over=!1,this.shake=0,this.flash=0,this.slow=0,this.freeze=0,this.hitstop=0,this.cut=null,this.stats={hits:0,clashes:0,maxCombo:[0,0],wallSplats:0,juggles:0,supers:0},this.startRound()}startRound(){for(let e of this.f){let t=e.gauge,i=e.wins;e.reset(),e.gauge=this.opts.training?e.gauge:t,e.wins=i}this.proj=[],this.timer=this.opts.time,this.phase="intro",this.pf=0,this.koBy=null,this.slow=0,this.round>1&&(this.pf=60),this.events.push({type:"round",n:this.round})}camX(){let e=(this.f[0].x+this.f[1].x)/2;return Math.max(640,Math.min(1360,e))}superFlash(e,t){this.freeze=48,this.cut={who:e.side,id:e.id,name:t.name,t:48},this.stats.supers++,this.events.push({type:"super",who:e.side,id:e.id,name:t.name})}step(){if(this.frame++,this.cut&&(this.cut.t--,this.cut.t<=0&&(this.cut=null)),this.freeze>0){this.freeze--;return}if(this.hitstop>0){this.hitstop--;for(let t of this.f){let i=t.buf.push(t.raw,t.facing);for(let s in i.press)i.press[s]&&((t.stopPress||(t.stopPress={}))[s]=!0)}return}if(this.slow>0&&(this.slow--,this.slow%2===1))return;this.shake>0&&this.shake--,this.flash>0&&this.flash--,this.pf++;let e=this.phase;if(e==="intro"){for(let t of this.f)t.state="intro",t.buf.push(on(),t.facing);if(this.pf===1&&this.round===1&&this.events.push({type:"voice",id:this.f[0].id,key:"intro",who:0}),this.pf===70&&this.round===1&&this.events.push({type:"voice",id:this.f[1].id,key:"intro",who:1}),this.pf===150&&this.events.push({type:"announce",key:this.round>=3?"round3":this.round===2?"round2":"round1"}),this.pf>=210){this.phase="fight",this.pf=0;for(let t of this.f)t.setState("stand");this.events.push({type:"announce",key:"fight"})}return}e==="fight"&&!this.opts.training&&this.opts.time>0&&(this.timer--,this.timer<=0&&this.timeUp());for(let t of this.f)t.think();for(let t of this.f)t.physics();if(this.pushApart(),this.separate(),this.stepProj(),this.collide(),this.opts.training)for(let t of this.f)(t.state==="stand"||t.state==="crouch")&&(t.hp<t.ch.hp&&(t.hp=Math.min(t.ch.hp,t.hp+8)),t.redHp=t.hp),this.opts.trainGauge&&(t.gauge=Math.max(t.gauge,120*.99));for(let t of this.f)t.redHp>t.hp&&t.state!=="hit"&&t.state!=="air_hit"&&t.state!=="locked"&&(t.redHp=Math.max(t.hp,t.redHp-6));if(e==="fight"){let t=this.f.filter(i=>i.hp<=0);t.length&&this.ko(t)}else if(e==="ko"){if(this.pf===90){let t=this.f.filter(i=>i.hp>0);for(let i of t)i.air||(i.setState("win"),i.voice("win",!0))}this.pf>=240&&this.endRound()}}timeUp(){let[e,t]=this.f,i=e.hp/e.ch.hp,s=t.hp/t.ch.hp;this.events.push({type:"announce",key:"timeup"}),Math.abs(i-s)<1e-6?this.finishRound(null):this.finishRound(i>s?e:t)}ko(e){this.events.push({type:"announce",key:e.length===2?"double":"ko"}),this.slow=60,this.flash=10;let t=e.length===2?null:this.f.find(i=>i.hp>0);for(let i of e)i.state!=="ko"&&i.voice("ko",!0);this.finishRound(t,!0)}finishRound(e,t=!1){if(this.phase="ko",this.pf=0,this.roundWinner=e,e)e.wins++,e.hp===e.ch.hp&&t&&this.events.push({type:"announce",key:"perfect",delay:50});else for(let i of this.f)i.wins++}endRound(){let e=this.opts.rounds,t=this.f.filter(i=>i.wins>=e);if(t.length===1||t.length===2&&this.round>=5){this.over=!0,this.winner=t.length===1?t[0]:null,this.phase="end",this.events.push({type:"matchEnd",winner:this.winner?this.winner.side:-1});return}t.length===2&&(this.f[0].wins=e-1,this.f[1].wins=e-1),this.round++,this.startRound()}pushApart(){let[e,t]=this.f;if(e.state==="thrown"||t.state==="thrown"||e.state==="locked"||t.state==="locked"||e.mv&&e.mv.ghost||t.mv&&t.mv.ghost||e.state==="attack"&&e.mv&&e.mv.hidden||t.state==="attack"&&t.mv&&t.mv.hidden)return;let i=Fa(e.ch,e.posture()).h,s=Fa(t.ch,t.posture()).h;if(!(e.y<t.y+s*.8&&t.y<e.y+i*.8))return;let a=62,o=t.x-e.x;if(Math.abs(o)<a){let l=o===0?e.facing>0?1:-1:Math.sign(o),c=(a-Math.abs(o))/2;e.x-=l*c,t.x+=l*c;for(let u of this.f)u.x=Math.max(Kn,Math.min(2e3-Kn,u.x))}}separate(){let[e,t]=this.f,i=t.x-e.x;if(Math.abs(i)<=1140)return;let s=Math.abs(i)-1140,r=Math.sign(i);for(let[l,c,u]of[[e,t,-r],[t,e,r]])if(l.state==="wallblow"){l.x-=u*-s,l.x=c.x+u*1140,this.wallSplat(l,u);return}let a=Math.sign(e.vx)===-r?Math.abs(e.vx):0,o=Math.sign(t.vx)===r?Math.abs(t.vx):0;a>=o?e.x+=r*s:t.x-=r*s}wallSplat(e,t){if(e.state!=="wallblow")return;this.stats.wallSplats++;let i=this.f[1-e.side];e.setState("air_hit"),e.vx=-t*3.2,e.vy=11.5,e.y=Math.max(e.y,60),e.jgrav=.95,this.damage(e,i,jp,{kind:"wall"}),this.shake=14,this.flash=4,this.hitstop=10,this.events.push({type:"wall",x:e.x+t*30,y:e.y+120,dir:t}),this.events.push({type:"sfx",key:"wall"}),e.voice("pain_l",!0)}spawnProj(e,t,i){let s=t.proj,r=e.facing,a=new $i({owner:e.side,id:e.id,kind:s.kind,x:e.x+r*70,y:e.y+s.y*e.ch.height/240,vx:s.vx[i]*r,vy:s.vy||0,g:s.g||0,w:s.w,h:s.h,dmg:t.dmg,life:s.life,hits:s.hits||1,gap:s.gap||8,low:!!s.low,launch:s.launch||0,facing:r});this.proj.push(a),this.events.push({type:"sfx",key:"proj_"+s.kind})}spawnSky(e,t,i){let s=t.proj,r=e.facing,a=e.opp;if(s.target){let o=new $i({owner:e.side,id:e.id,kind:s.kind,x:a.x,y:760,vx:0,vy:0,g:0,w:s.w,h:s.h,dmg:t.dmg,life:s.life+s.delay[i],delay:s.delay[i],fall:s.fall,facing:r});this.proj.push(o)}else{let o=Math.max(140,Math.min(560,Math.abs(a.x+a.vx*14-e.x))),l=e.x+r*o,c=s.fall*[.85,1,1.25][i],u=new $i({owner:e.side,id:e.id,kind:s.kind,x:l-r*260,y:560,vx:r*c*.46,vy:-c,g:0,w:s.w,h:s.h,dmg:t.dmg,life:s.life,facing:r});this.proj.push(u)}this.events.push({type:"sfx",key:"proj_"+s.kind})}spawnSuperProj(e,t){let i=e.facing,s=t.projKind,r={bigonigiri:[150,130,150],tidal:[210,230,115],bigarrow:[240,56,165]}[s]||[150,150,150];this.proj.push(new $i({owner:e.side,id:e.id,kind:s,x:e.x+i*110,y:e.y+r[2],vx:t.vx*i,vy:0,g:0,w:r[0],h:r[1],dmg:Math.round(t.dmg/t.hits),life:160,hits:t.hits,gap:5,superHit:!0,big:!0,facing:i})),this.events.push({type:"sfx",key:s==="tidal"?"proj_water":s==="bigarrow"?"proj_arrow":"proj_onigiri"}),this.shake=6}rainDrop(e,t,i){let s=e.opp,r=e.facing,a=s.x+(this.rng.next()-.5)*320+s.vx*6,o=e.id==="reika"?"skyarrow":e.id==="sakura"?"petal":"meteor";this.proj.push(new $i({owner:e.side,id:e.id,kind:o,x:a-r*140,y:820,vx:r*7,vy:-24,g:0,w:70,h:70,dmg:Math.round(t.dmg/t.hits),life:70,rain:!0,superHit:!0,facing:r,last:i===t.hits-1})),i%2===0&&this.events.push({type:"sfx",key:"proj_"+o})}beamTick(e,t,i){let s=e.opp,r=e.facing,a={x0:r>0?e.x+40:e.x-1400,x1:r>0?e.x+1400:e.x-40,y0:e.y+40,y1:e.y+260};if(this.events.push({type:"beam",who:e.side,i}),!(s.invS>0&&s.state==="dodge")&&!(s.state==="down"||s.state==="getup")&&Mr(a,s.hurt())){let o=i>=t.hits-1;this.applyHit(e,s,{...t,dmg:Math.round(t.dmg/t.hits),stun:16,bstun:8,stop:2,push:3,wallblow:o,kind:"super",superHit:!0},s.x,s.y+140)}}stepProj(){for(let e of this.proj){if(e.age++,e.delay){if(e.age<e.delay)continue;e.age===e.delay&&(e.vy=-e.fall,this.events.push({type:"sfx",key:"proj_skyarrow"}))}e.x+=e.vx,e.y+=e.vy,e.vy-=e.g,e.cd>0&&e.cd--,e.y<10&&!e.low&&(e.dead=!0,this.events.push({type:"pop",x:e.x,y:10,kind:e.kind})),(e.age>e.life||e.x<-200||e.x>2200)&&(e.dead=!0)}for(let e=0;e<this.proj.length;e++)for(let t=e+1;t<this.proj.length;t++){let i=this.proj[e],s=this.proj[t];i.dead||s.dead||i.owner===s.owner||i.rain||s.rain||Mr(i.box(),s.box())&&(i.big||i.hits--,s.big||s.hits--,i.hits<=0&&(i.dead=!0),s.hits<=0&&(s.dead=!0),this.events.push({type:"clash",x:(i.x+s.x)/2,y:(i.y+s.y)/2}),this.events.push({type:"sfx",key:"clash"}))}this.proj=this.proj.filter(e=>!e.dead)}collide(){let[e,t]=this.f,i=e.activeBoxes(),s=t.activeBoxes();if(i.length&&s.length&&Mr(i[0],s[0])&&e.mv.def.kind!=="super"&&t.mv.def.kind!=="super"){for(let a of this.f)a.mv.hit=!0,a.mv.clashed=!0,a.cancel=14;this.stats.clashes++,this.hitstop=10,this.shake=6,this.events.push({type:"clash",x:(i[0].x0+i[0].x1+s[0].x0+s[0].x1)/4,y:(i[0].y0+i[0].y1)/2,big:!0}),this.events.push({type:"sfx",key:"clash"}),this.events.push({type:"text",key:"clash"});return}let r=[];for(let[a,o,l]of[[e,t,i],[t,e,s]]){if(!l.length)continue;let c=o.hurt();if(!(o.state==="down"||o.state==="getup"||o.state==="thrown"||o.mv&&o.mv.hidden)&&Mr(l[0],c)){let u=(Math.max(l[0].x0,c.x0)+Math.min(l[0].x1,c.x1))/2,h=(Math.max(l[0].y0,c.y0)+Math.min(l[0].y1,c.y1))/2;r.push([a,o,a.mv.def,u,h,l[0].multi])}}for(let a of r)this.applyHit(...a);for(let a of this.proj){if(a.dead||a.cd>0||a.delay&&a.age<a.delay)continue;let o=this.f[1-a.owner],l=this.f[a.owner];if(!(o.state==="down"||o.state==="getup"||o.state==="thrown"||o.mv&&o.mv.hidden)&&Mr(a.box(),o.hurt())){let c={kind:a.superHit?"super":"special",dmg:a.dmg,stun:24,bstun:16,stop:a.superHit?3:9,push:a.superHit?4:16,guard:a.low?"low":"mid",launch:a.launch,hitsfx:a.big?"hit_h":"hit_m",proj:!0,wallblow:a.superHit&&(a.last||a.big&&a.hits===1),superHit:a.superHit,lvl:4};this.applyHit(l,o,c,a.x,a.y,!0,a)!=="miss"&&(a.hits--,a.cd=a.gap,a.hits<=0&&(a.dead=!0))}}}applyHit(e,t,i,s,r,a=!1,o=null){if(t.invS>0&&i.guard!=="none"||t.state==="ko"&&this.phase!=="fight")return"miss";if(t.state==="attack"&&t.mv&&t.mv.def.t==="counter"&&!t.mv.countered&&!o){let _=t.mv.def,m=t.mv.f;if(m>=_.s&&m<_.s+_.a)return t.mv.countered=t.mv.f,t.voice("sp2",!0),e.mv&&(e.mv.hit=!0),this.events.push({type:"counter",x:s,y:r}),this.events.push({type:"sfx",key:"counter"}),this.hitstop=14,this.flash=6,_.throwCounter?(e.setState("air_hit"),e.vy=15,e.vx=t.facing*5,e.y=Math.max(e.y,40),this.damage(e,t,_.dmg,{kind:"special"})):this.applyHit(t,e,{..._,kind:"special",guard:"none",launch:16,stun:30,stop:12},e.x,e.y+120),"countered"}if(e.mv&&!a&&(e.mv.hit=!0),e.mv&&a&&(e.mv.hitCount=(e.mv.hitCount||0)+1,e.mv.lastHitF=Math.floor((e.mv.f-e.mv.def.s)/(e.mv.def.gap||Math.floor(e.mv.def.a/(e.mv.def.hits||1))||1))),i.kind==="normal"&&i.hits>1&&!o&&i.t!=="autoAir"){let _=e.mv&&e.mv.hitCount>=i.hits;i={...i,dmg:i.perHit,stop:_?i.stop:Math.max(3,Math.round(i.stop*.55)),push:_?i.push:i.push*.3,stun:_?i.stun:Math.max(i.stun,(i.gap||4)+12),launch:_?i.launch:0,knockdown:_?i.knockdown:!1,lvl:_?i.lvl:Math.max(1,i.lvl-1)}}if(i.t==="autoAir"&&e.mv){let _=e.mv.done||0;e.mv.done=_+1,i={...i,dmg:i.dmgs[Math.min(2,_)],spike:_>=2,stop:_>=2?14:8,lvl:_>=2?4:3},_>=2&&(this.shake=14,this.flash=6)}if(i.t==="superRush"&&e.mv&&!e.mv.lock&&!this.canBlock(t,i,e,o))return this.beginSuperLock(e,t),"hit";if(this.canBlock(t,i,e,o)){let _=t.air;t.setState("guard"),t.stun=i.bstun||12,t.guardLow=!_&&t.raw.d,t.guardFlash=6,t.airGuard=_,_&&(t.facing=(o?o.x:e.x)>t.x?1:-1,t.vy=Math.max(t.vy,1.5),this.events.push({type:"text",key:"airguard",who:t.side}));let m=(i.push||10)*.9;return t.vx=e.facing*m*.55,this.atWall(t,e.facing)&&(e.vx=-e.facing*m*.5),(i.kind==="special"||i.kind==="super")&&this.damage(t,e,Math.round(i.dmg/8),{chip:!0}),o||(e.cancel=12),e.gaugeAdd(2),t.gaugeAdd(1),this.hitstop=Math.max(this.hitstop,Math.max(4,(i.stop||8)-2)),this.events.push({type:"guard",x:s,y:r,side:t.side}),this.events.push({type:"sfx",key:"guard"}),"block"}if(t.armor>0&&t.state==="attack"&&i.kind!=="super")return t.armor--,this.damage(t,e,Math.round(i.dmg*.5),{}),this.hitstop=8,this.events.push({type:"spark",x:s,y:r,lvl:2}),this.events.push({type:"sfx",key:"hit_m"}),"hit";let l=t.state==="attack"&&t.mv&&t.mv.f<(t.mv.def.s||0);if(i.t==="superRise"){let _=e.mv&&e.mv.hitCount>=i.hits;i={...i,dmg:i.perHit,launch:_?22:i.launch,stop:_?14:3},_&&(this.shake=18,this.flash=8,this.events.push({type:"sfx",key:"finish"}))}let c=Math.max(i.kind==="super"?.55:.3,1-.09*t.comboHits)*(l?1.15:1)*(e.blaze>0?1.1:1),u=Math.max(1,Math.round(i.dmg*c));t.comboHits++,this.stats.hits++,this.damage(t,e,u,{kind:i.kind}),l&&(this.events.push({type:"text",key:"counter",who:e.side}),this.events.push({type:"announce",key:"counter",soft:!0})),e.gaugeAdd(i.kind==="super"?0:i.kind==="special"?7:5),t.gaugeAdd(3),!o&&e.mv&&(e.cancel=16,i.launcher&&(e.jumpCancel=18)),this.hitstop=Math.max(this.hitstop,(i.stop||8)+(l?3:0));let h=i.lvl||2;h>=3&&(this.shake=Math.max(this.shake,h>=4?8:5)),this.events.push({type:"spark",x:s,y:r,lvl:h,kind:i.kind,id:e.id}),this.events.push({type:"sfx",key:i.hitsfx||"hit_m"});let d=t.air||t.state==="air_hit"||t.state==="wallblow",p=e.facing;if(t.hp<=0)return t.setState("ko"),t.vy=13,t.y=Math.max(t.y,1),t.vx=p*6,t.jgrav=1.3,this.slow=60,this.flash=8,this.shake=16,"hit";if(i.wallblow)return t.setState("wallblow"),t.vx=p*26,t.vy=2.2,t.y=Math.max(t.y,50),t.jgrav=1,t.juggle=0,t.voice("scream",!0),this.events.push({type:"blow",who:t.side}),"hit";if(i.launch||d||i.knockdown){if(t.juggle>=Zp)return t.setState("air_hit"),t.vy=Math.min(t.vy,-2),t.jgrav=3,t.invS=120,"hit";let _=t.state;return t.setState("air_hit"),t.juggle++,d&&(this.stats.juggles++,t.airHits++),t.jgrav=1+.06*t.juggle,i.spike?(t.vy=-15,t.vx=p*3,t.jgrav=2):i.launch?(t.vy=i.launch*.7,t.y=Math.max(t.y,4),t.vx=p*1.2):i.t==="autoAir"?(t.vy=9,t.vx=p*.8):i.knockdown&&!d?(t.vy=6.5,t.y=1,t.vx=p*4):(t.vy=Math.max(t.vy*.3,h>=3?8.2:h===2?7:6),t.vx=p*(h>=3?2.6:1.4)),t.juggle===1||i.launch?t.voice(h>=3?"pain_l":"pain_s"):this.rng.next()<.35&&t.voice("pain_s"),"hit"}t.setState("hit"),t.stun=(i.stun||16)+(l?6:0),t.wasCrouch=t.raw.d;let g=i.push||10;return t.vx=p*g*.55,this.atWall(t,p)&&(e.vx=-p*g*.45),t.voice(h>=3||i.kind==="special"?"pain_l":"pain_s"),"hit"}canBlock(e,t,i=null,s=null){if(t.guard==="none")return!1;if(e.air){if(!["jump","airdash","airtech"].includes(e.state)&&!(e.state==="guard"&&e.airGuard))return!1;let o=s?s.x:i?i.x:e.opp.x,l=e.raw;return o>e.x?!!l.l&&!l.r:!!l.r&&!l.l}let r=e.state;if(!(Ba.has(r)||r==="guard"||r==="prejump"&&e.sf<1))return!1;let a=e.buf.cur();return!(!a||!a.b||t.guard==="low"&&!a.d||t.guard==="high"&&a.d)}atWall(e,t){let i=this.f[1-e.side];return e.x+t*6<=Kn||e.x+t*6>=2e3-Kn||Math.abs(e.x+t*6-i.x)>1140}damage(e,t,i,s={}){s.chip&&(i=Math.min(i,e.hp-1)),this.opts.training&&this.opts.noKo&&(i=Math.min(i,e.hp-1)),!(i<=0)&&(e.hp=Math.max(0,e.hp-i),e.comboDmg+=i,e.lastDmg=i,t.combo=e.comboHits,this.stats.maxCombo[t.side]=Math.max(this.stats.maxCombo[t.side],e.comboHits),this.events.push({type:"dmg",who:e.side,dmg:i,hits:e.comboHits,total:e.comboDmg}))}tryThrow(e,t,i){let s=e.opp;return Math.abs(s.x-e.x)<=t.reach+4&&this.canThrowNow(s)?(e.mv.grabbed=!0,e.mv.gf=0,e.mv.back=i,s.setState("thrown"),s.vx=0,s.vy=0,s.y=0,this.events.push({type:"sfx",key:"grab"}),e.voice(t.kind==="special"?t.voice:"throw",!0),s.voice("pain_s",!0),!0):!1}canThrowNow(e){return e.invT>0||e.air?!1:!["hit","guard","down","getup","thrown","ko","air_hit","wallblow","locked","prejump"].includes(e.state)&&e.state!=="backstep"}throwStep(e,t){let i=e.opp;t.gf++;let s=e.facing,r=t.gf,a=e.mv.def.kind==="special"?40:30;if(r<a-8){let o=r/(a-8),l=t.back?Math.PI*o:Math.PI*.4*o;i.x=e.x+s*(60*Math.cos(l))*(t.back,1),i.y=30+90*Math.sin(l*(t.back?1:2.4)),r===Math.floor((a-8)/2)&&this.events.push({type:"sfx",key:"swing_h"})}if(r===a-8){let o=t.back?-s:s;t.back&&(e.facing=-s),i.setState("air_hit"),i.vy=7,i.vx=o*7,i.y=Math.max(i.y,30),i.juggle=6,i.jgrav=1.5,i.comboHits++,this.damage(i,e,e.mv.def.dmg,{kind:"throw"}),this.shake=12,this.hitstop=8,e.gaugeAdd(8),i.gaugeAdd(4),this.events.push({type:"spark",x:i.x,y:i.y+60,lvl:4}),this.events.push({type:"sfx",key:"hit_h"}),i.voice("scream",!0),i.hp<=0&&(i.setState("ko"),i.vy=10,i.vx=o*6,i.y=Math.max(1,i.y))}r>=a+10&&e.setState("stand")}beginSuperLock(e,t){let i=e.mv;i.lock=!0,i.lf=0,i.lockHits=0,e.vx=0,t.setState("locked"),t.lockedBy=e.side,t.vx=0,t.vy=0,t.y=Math.max(t.y,0),t.voice("pain_l",!0),this.events.push({type:"superhit",who:e.side})}superLockStep(e,t){let i=e.opp,s=t.def;t.lf++;let r=6,a=s.hits;if(e.x=i.x-e.facing*74,t.lf%r===0&&t.lockHits<a-1){t.lockHits++;let o=Math.round(s.dmg*.7/(a-1));i.comboHits++,this.damage(i,e,o,{kind:"super"}),this.hitstop=2,this.shake=4,i.x+=e.facing*3,this.events.push({type:"spark",x:i.x-e.facing*20+(this.rng.next()-.5)*50,y:i.y+80+this.rng.next()*100,lvl:3,id:e.id}),this.events.push({type:"sfx",key:t.lockHits%2?"hit_m":"hit_h"}),t.lockHits%3===1&&e.voice(["atk_l","atk_m","atk_h"][t.lockHits%3],!0),i.hp<=0&&(i.hp=1),t.pose=t.lockHits%3}if(t.lf===r*a){let o=s.dmg-Math.round(s.dmg*.7/(a-1))*(a-1);i.comboHits++,i.setState("air_hit"),this.damage(i,e,Math.max(1,o),{kind:"super"}),this.hitstop=16,this.shake=20,this.flash=10,this.events.push({type:"spark",x:i.x,y:i.y+120,lvl:5,id:e.id}),this.events.push({type:"sfx",key:"finish"}),e.voice("super",!0),i.hp<=0?(i.setState("ko"),i.vy=16,i.vx=e.facing*8,i.y=Math.max(i.y,1),i.jgrav=1.2,this.slow=70):(i.setState("wallblow"),i.vx=e.facing*26,i.vy=3,i.y=Math.max(i.y,60),i.voice("scream",!0)),t.pose=3}t.lf>=r*a+30&&e.setState("stand")}};var tc=[{name:"\u3084\u3055\u3057\u3044",tech:.05,react:22,block:.25,anti:.15,combo:2,aggr:.35,special:.15,dodge:.05,throw:.05,juggle:.3,superUse:.3},{name:"\u3075\u3064\u3046",tech:.15,react:14,block:.5,anti:.4,combo:3,aggr:.5,special:.3,dodge:.12,throw:.12,juggle:.6,superUse:.6},{name:"\u3064\u3088\u3044",tech:.3,react:9,block:.72,anti:.65,combo:4,aggr:.62,special:.4,dodge:.18,throw:.2,juggle:.85,superUse:.85},{name:"\u9B3C",tech:.5,react:5,block:.88,anti:.85,combo:5,aggr:.7,special:.45,dodge:.22,throw:.25,juggle:1,superUse:1}],Ji=class{constructor(e,t=1,i){this.f=e,this.L=tc[t],this.rng=i,this.plan=[],this.cool=0,this.blockUntil=0,this.reactAt=-1,this.seenAttack=null,this.mode=null,this.hold=null,this.t=0}r(){return this.rng.next()}dir(e,t){let i=this.f.facing;t.includes("f")&&(e[i>0?"r":"l"]=1),t.includes("b")&&(e[i>0?"l":"r"]=1),t.includes("d")&&(e.d=1),t.includes("u")&&(e.u=1)}push(e){for(let t of e)for(let i=0;i<(t.n||1);i++)this.plan.push(i===0?t:{d:t.d,b:t.hold?t.b:[]})}cmd(e,t){let i=t;switch(e){case"df":return[{d:"d",n:2},{d:"df",n:1},{d:"f",n:1},{d:"f",b:[i]}];case"db":return[{d:"d",n:2},{d:"db",n:1},{d:"b",n:1},{d:"b",b:[i]}];case"dd":return[{d:"d",n:2},{d:"",n:2},{d:"d",n:1},{d:"d",b:[i]}];case"ff":return[{d:"f",n:2},{d:"",n:2},{d:"f",n:1},{d:"f",b:[i]}];case"bb":return[{d:"b",n:2},{d:"",n:2},{d:"b",n:1},{d:"b",b:[i]}]}return[]}special(e,t=1){let i=this.f.M[e];if(!i)return!1;let s=i.cmd.slice(0,2),a=(i.cmd[2]==="P"?["LP","MP","HP"]:["LK","MK","HK"])[t];return this.push(this.cmd(s,a)),!0}update(e){this.t++;let t=on(),i=this.f,s=i.opp,r=this.L;if(e.phase!=="fight")return this.plan=[],t;if(["hit","air_hit","wallblow","down","thrown","locked"].includes(i.state)&&(this.plan=[]),i.state==="air_hit")return this.techSeen!==i.airHits&&(this.techSeen=i.airHits,this.techAt=this.t+Math.ceil(r.react*.6),this.techGo=i.airHits>=1&&this.r()<r.tech),this.techGo&&this.t>=this.techAt&&(this.techGo=!1,t.LP=1),t;if(this.plan.length){let h=this.plan.shift();this.dir(t,h.d||"");for(let d of h.b||[])t[d]=1;return t}let a=Math.abs(s.x-i.x),o=s.state==="attack"&&s.mv&&s.mv.def.kind!=="throw",l=e.proj.find(h=>h.owner!==i.side&&Math.abs(h.x-i.x)<260&&Math.sign(h.vx||i.x-h.x)===Math.sign(i.x-h.x||1));if(o&&a<330||l){let h=o?s.mv:l;if(this.seenAttack!==h&&(this.seenAttack=h,this.reactAt=this.t+r.react,this.choice=this.r()),this.t>=this.reactAt){let d=o?s.mv.def:{guard:l.low?"low":"mid"};if(this.choice<r.block)return this.dir(t,d.guard==="low"?"db":"b"),t;if(this.choice<r.block+r.dodge)return t.DG=1,t;if(l&&this.choice<r.block+r.dodge+.2&&a>200)return this.push([{d:"uf",n:3}]),t}}if(i.state==="guard")return this.dir(t,i.guardLow?"db":"b"),t;if(!["stand","crouch","walk","land","jump","dash","dashstop","attack"].includes(i.state))return t;if(i.state==="attack"&&i.cancel>0&&i.mv){let h=i.mv.def;if((s.state==="hit"||s.state==="air_hit")&&this.r()<r.combo/6){if(h.id==="LP"||h.id==="cLP")return t.MP=1,t;if(h.id==="MP"||h.id==="MK")return t.HP=1,t;if(h.id==="HP"||h.id==="HK"||h.id==="cMK"){if(i.canSuper()&&this.r()<r.superUse)return t[this.r()<.5?"SP":"SP2"]=1,t;let d=["sp3","sp1","sp2"].find(p=>i.M[p]&&["rush","spin","projectile","blast"].includes(i.M[p].t));return d&&this.special(d,2),t}if(h.launcher&&this.r()<r.juggle*.6)return this.push([{d:"",b:["HP"]},{d:"",n:5},{d:"",b:["HP"]},{d:"",n:5},{d:"",b:["HP"]},{d:"",n:5},{d:"",b:["HP"]}]),t;if(h.launcher&&this.r()<r.juggle)return this.push([{d:"u",n:4},{d:"",n:8},{d:"",b:["MP"]},{d:"",n:6},{d:"",b:["HP"]},{d:"",n:10},{d:"u",n:2},{d:"",n:5},{d:"",b:["MK"]},{d:"",n:6},{d:"",b:["HK"]}]),t;if(h.air)return t[h.id==="jLP"?"MP":h.id==="jMP"?"HP":h.id==="jMK"?"HK":"MK"]=1,t}return t}if(i.state==="attack")return t;if(s.state==="air_hit"&&a<420&&this.r()<r.juggle*.25)return i.state==="jump"?(t[this.r()<.5?"MP":"HK"]=1,t):a>160?(this.dir(t,"f"),t):(this.push([{d:"uf",n:3},{d:"",n:6},{d:"",b:["MP"]}]),t);if(s.state==="wallblow"&&this.r()<r.juggle)return this.push(this.cmd("ff",null).slice(0,3)),this.push([{d:"f",n:22}]),t;if(this.cool>0)return this.cool--,this.dir(t,this.hold||""),t;if(s.air&&s.state==="jump"&&a<230&&s.vy<4&&this.r()<r.anti){let h=["sp4","sp2","sp3","sp1"].find(d=>i.M[d]&&["rising","barrier"].includes(i.M[d].t));return h?(this.special(h,1),t):(this.dir(t,"d"),t.HP=1,t)}if(s.state==="attack"&&s.mv&&s.mv.f>(s.mv.def.s||0)+(s.mv.def.a||0)&&!s.mv.hit&&a<160&&this.r()<r.aggr)return this.push(this.r()<.5?[{d:"",b:["LP"]}]:[{d:"d",b:["HP"]}]),t;let u=this.r();if(a>520){if(u<r.special*.6){let h=["sp1","sp2"].find(d=>i.M[d]&&["projectile","sky"].includes(i.M[d].t));if(h)return this.special(h,Math.floor(this.r()*3)),this.cool=20,t}return u<.55?(this.push([{d:"f",n:2},{d:"",n:2},{d:"f",n:18}]),t):(this.hold="f",this.cool=12,this.dir(t,"f"),t)}if(a>200){if(u<r.special*.5){let h=["sp1","sp2","sp3"].find(d=>i.M[d]&&["projectile","sky","rush","dive","flipdive"].includes(i.M[d].t));if(h)return this.special(h,Math.floor(this.r()*3)),this.cool=16,t}if(u<r.special*.5+.12*r.aggr)return this.push([{d:"uf",n:3},{d:"",n:14},{d:"",b:[this.r()<.5?"HK":"MP"]}]),t;if(u<.35+.15*r.aggr)return this.push([{d:"f",n:2},{d:"",n:2},{d:"f",n:12},{d:"f",b:[this.r()<.5?"MP":"MK"]}]),t;if(u<.5){let h=this.r();return this.push([{d:h<.3?"f":"",b:[h<.6?"MP":"MK"]}]),this.cool=10,t}return this.hold=u<.85?"f":"b",this.cool=10+Math.floor(this.r()*12),this.dir(t,this.hold),t}if(u<r.throw)return this.push([{d:"f",b:["HP"]}]),t;if(u<r.throw+.35*r.aggr){let h=this.r();return h<.4?this.push([{d:"",b:["LP"]},{d:"",n:5},{d:"",b:["LP"]}]):h<.65?this.push([{d:"d",b:["LK"]}]):h<.85?this.push([{d:"d",b:["HP"]}]):this.push([{d:"",b:["MP"]}]),t}return u<.62?(this.hold=this.r()<.6?"b":"db",this.cool=12+Math.floor(this.r()*14),this.dir(t,this.hold),t):u<.7?(this.push([{d:"b",n:2},{d:"",n:2},{d:"b",n:2}]),t):(this.hold="",this.cool=6,t)}};var nc={solo:{up:["ArrowUp"],down:["ArrowDown"],left:["ArrowLeft"],right:["ArrowRight"],LP:["KeyZ"],MP:["KeyX"],HP:["KeyC"],LK:["KeyA"],MK:["KeyS"],HK:["KeyD"],DG:["Space"],EZ:["KeyF"],EC:["KeyG"],SP:["KeyV"],SP2:["KeyB"]},p1:{up:["KeyW"],down:["KeyS"],left:["KeyA"],right:["KeyD"],LP:["KeyR"],MP:["KeyT"],HP:["KeyY"],LK:["KeyF"],MK:["KeyG"],HK:["KeyH"],DG:["Space"],EZ:["KeyE"],EC:["KeyZ"],SP:["KeyQ"],SP2:["KeyV"]},p2:{up:["ArrowUp"],down:["ArrowDown"],left:["ArrowLeft"],right:["ArrowRight"],LP:["Numpad4","KeyI"],MP:["Numpad5","KeyO"],HP:["Numpad6","KeyP"],LK:["Numpad1","KeyK"],MK:["Numpad2","KeyL"],HK:["Numpad3","Semicolon"],DG:["Numpad0","KeyM"],EZ:["Numpad7","KeyU"],EC:["Numpad8","KeyJ"],SP:["NumpadEnter","Comma"],SP2:["NumpadAdd","Period"]}},Zu={LK:0,MK:1,LP:2,MP:3,DG:4,HP:5,EZ:6,HK:7,SP:10,EC:11,SP2:8},Va=class{constructor(){this.keys=new Set,this.mode="solo",this.touch=on(),this.touchOn=!1,this.inject=[],this.menuQ=[],addEventListener("keydown",e=>{["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(e.code)&&e.preventDefault(),this.keys.has(e.code)||this.menu(e.code),this.keys.add(e.code)}),addEventListener("keyup",e=>this.keys.delete(e.code)),addEventListener("blur",()=>this.keys.clear()),this.padPrev=[{},{}]}menu(e){let t={ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right",KeyW:"up",KeyS:"down",KeyA:"left",KeyD:"right",Enter:"ok",KeyZ:"ok",Space:"ok",NumpadEnter:"ok",Escape:"back",KeyX:"back",Backspace:"back",KeyR:"ok",Numpad4:"ok",KeyI:"ok"}[e];t&&this.menuQ.push({act:t,code:e})}popMenu(){return this.menuQ.shift()}fromKeys(e){let t=on(),i=s=>s.some(r=>this.keys.has(r));t.u=i(e.up),t.d=i(e.down),t.l=i(e.left),t.r=i(e.right);for(let s of["LP","MP","HP","LK","MK","HK","DG","SP","SP2","EZ","EC"])t[s]=i(e[s]||[]);return t}fromPad(e){let i=[...navigator.getGamepads?navigator.getGamepads():[]].filter(Boolean)[e],s=on();if(!i)return s;let r=u=>i.buttons[u]&&(i.buttons[u].pressed||i.buttons[u].value>.5),a=i.axes[0]||0,o=i.axes[1]||0;s.l=r(14)||a<-.5,s.r=r(15)||a>.5,s.u=r(12)||o<-.5,s.d=r(13)||o>.5;for(let u in Zu)s[u]=r(Zu[u]);let l=this.padPrev[e],c={u:s.u,d:s.d,l:s.l,r:s.r,a:r(0),bb:r(1),st:r(9)};return c.u&&!l.u&&this.menuQ.push({act:"up"}),c.d&&!l.d&&this.menuQ.push({act:"down"}),c.l&&!l.l&&this.menuQ.push({act:"left"}),c.r&&!l.r&&this.menuQ.push({act:"right"}),c.a&&!l.a&&this.menuQ.push({act:"ok"}),c.bb&&!l.bb&&this.menuQ.push({act:"back"}),c.st&&!l.st&&this.menuQ.push({act:"pause"}),this.padPrev[e]=c,s}or(e,t){let i=on();for(let s in i)i[s]=!!(e[s]||t[s]);return i}read(e){let t,i=on();if(e?(t=this.or(this.fromKeys(nc.p1),this.fromPad(0)),i=this.or(this.fromKeys(nc.p2),this.fromPad(1))):(t=this.or(this.or(this.fromKeys(nc.solo),this.fromPad(0)),this.touch),this.fromPad(1)),this.inject.length){let s=this.inject.shift();t={...this.or(t,s),u:!!s.u,d:!!s.d,l:!!s.l,r:!!s.r}}return[t,i]}};function $u(n,e,t,i){let s=n.querySelector(".stick"),r=n.querySelector(".knob"),a=null,o=0,l=0,c=(h,d)=>{let p=e.touch,g=18;p.l=h<-g,p.r=h>g,p.u=d<-g*1.4,p.d=d>g;let _=Math.hypot(h,d),m=Math.min(_,46)/(_||1);r.style.transform=`translate(${h*m}px, ${d*m}px)`};s.addEventListener("pointerdown",h=>{h.preventDefault(),a=h.pointerId,s.setPointerCapture(h.pointerId);let d=s.getBoundingClientRect();o=d.left+d.width/2,l=d.top+d.height/2,c(h.clientX-o,h.clientY-l)}),s.addEventListener("pointermove",h=>{h.pointerId===a&&(h.preventDefault(),c(h.clientX-o,h.clientY-l))});let u=h=>{h.pointerId===a&&(a=null,c(0,0))};s.addEventListener("pointerup",u),s.addEventListener("pointercancel",u);for(let h of n.querySelectorAll("[data-btn]")){let d=h.dataset.btn,p=_=>{_.preventDefault(),h.setPointerCapture?.(_.pointerId),h.classList.add("on"),d==="PAUSE"?i():e.touch[d]=!0},g=_=>{h.classList.remove("on"),d!=="PAUSE"&&(e.touch[d]=!1)};h.addEventListener("pointerdown",p),h.addEventListener("pointerup",g),h.addEventListener("pointercancel",g),h.addEventListener("pointerleave",g)}}var Ga=class{constructor(){this.ctx=null,this.buf={},this.maps={},this.music=null,this.musicName=null,this.vol={bgm:.7,se:.8,voice:.9};try{let e=JSON.parse(localStorage.getItem("hb_vol")||"null");e&&Object.assign(this.vol,e)}catch{}this.voicePlaying=[null,null]}unlock(){if(!this.ctx){let e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.ctx=new e,this.g={bgm:this.ctx.createGain(),se:this.ctx.createGain(),voice:this.ctx.createGain()};let t=this.ctx.createDynamicsCompressor();t.threshold.value=-10,t.ratio.value=4,t.connect(this.ctx.destination);for(let i in this.g)this.g[i].gain.value=this.vol[i],this.g[i].connect(t)}this.ctx.state==="suspended"&&this.ctx.resume()}setVol(e,t){this.vol[e]=t,this.g&&(this.g[e].gain.value=t);try{localStorage.setItem("hb_vol",JSON.stringify(this.vol))}catch{}}async load(e,t){if(this.buf[e])return this.buf[e];let s=await(await fetch(t)).arrayBuffer(),r=await new Promise((a,o)=>this.ctx.decodeAudioData(s,a,o));return this.buf[e]=r,r}playMusic(e,t){if(!this.ctx||!this.buf[e]){this.pending=[e,t];return}if(this.musicName===e&&this.music)return;this.stopMusic(.4);let i=this.ctx.createBufferSource();i.buffer=this.buf[e],t&&t.loopEnd?(i.loop=!0,i.loopStart=t.loopStart,i.loopEnd=Math.min(t.loopEnd,i.buffer.duration)):(!t||t.loop!==!1)&&(i.loop=!0);let s=this.ctx.createGain();s.gain.value=0,s.gain.linearRampToValueAtTime(1,this.ctx.currentTime+.25),i.connect(s).connect(this.g.bgm),i.start(),this.music={s:i,g:s},this.musicName=e}stopMusic(e=.5){if(!this.music)return;let{s:t,g:i}=this.music,s=this.ctx.currentTime;i.gain.cancelScheduledValues(s),i.gain.setValueAtTime(i.gain.value,s),i.gain.linearRampToValueAtTime(0,s+e);try{t.stop(s+e+.05)}catch{}this.music=null,this.musicName=null}sprite(e,t,i="se",s={}){if(!this.ctx)return null;let r=this.buf[e],a=this.maps[e];if(!r||!a)return null;let o=a[t];if(!o||!o.length)return null;this._rr=(this._rr||0)+1;let[l,c]=o[s.idx??Math.floor(Math.random()*o.length)],u=this.ctx.createBufferSource();u.buffer=r,s.rate&&(u.playbackRate.value=s.rate);let h=this.ctx.createGain();if(h.gain.value=s.gain??1,s.pan!==void 0&&this.ctx.createStereoPanner){let d=this.ctx.createStereoPanner();d.pan.value=s.pan,u.connect(h).connect(d).connect(this.g[i])}else u.connect(h).connect(this.g[i]);return u.start(0,l,c),{s:u,g:h}}voice(e,t,i,s){let r=this.voicePlaying[e];if(r)try{r.g.gain.setTargetAtTime(0,this.ctx.currentTime,.02),r.s.stop(this.ctx.currentTime+.08)}catch{}let a=this.sprite("v_"+t,i,"voice",{pan:s});return this.voicePlaying[e]=a,a}se(e,t={}){return this.sprite("sfx",e,"se",t)}};var Ii={base:"#ffe6d8",shade:"#f2bfae",line:"#8a5a4e"},$p={base:"#d8a07a",shade:"#b97d5a",line:"#6e4630"},Li={hinata:{skin:Ii,hair:{base:"#d9a066",shade:"#b07a46",hi:"#f3c992",style:"bob",ahoge:!0,pin:"#ffd23c"},eye:"#e0902a",top:{kind:"sailor",base:"#26325e",shade:"#1a2344",collar:"#26325e",line:"#e8ecf6",scarf:"#e33a3a",sleeve:"long"},apron:{base:"#ff9a3c",shade:"#e07a22",mark:"chick"},bottom:{kind:"pleated",base:"#26325e",shade:"#1a2344",len:.2},legs:{kind:"kneesocks",base:"#22284a"},shoes:"#6b3f26",weapon:"ladle",build:"petite"},miyu:{skin:Ii,hair:{base:"#f1ecf4",shade:"#c9c0d8",hi:"#ffffff",style:"twintail",ribbon:"#8fd6ff"},eye:"#5fb8f4",top:{kind:"blouse",base:"#fbfbff",shade:"#d8dcec",tie:"#8fd6ff",sleeve:"short"},bottom:{kind:"pinafore",base:"#2a3a6a",shade:"#1e2b50",len:.22},legs:{kind:"socks",base:"#f6f6fa"},shoes:"#3a2a26",weapon:"trumpet",build:"petite"},ruru:{skin:Ii,hair:{base:"#f7d47a",shade:"#d9ad55",hi:"#fff0b8",tip:"#ff7ab8",style:"sidepony",cap:"#1e1e26"},eye:"#ff5aa0",top:{kind:"tank",base:"#1d1d24",shade:"#111116",sleeve:"none",hoodie:"#f5f5f8"},bottom:{kind:"plaid",base:"#f29ac0",shade:"#d06a98",len:.17,shorts:"#1d1d24"},legs:{kind:"ankle",base:"#2a2a30"},shoes:"#ff8ec2",weapon:null,build:"slim",earring:"#ffd23c"},akane:{skin:Ii,hair:{base:"#1c1a24",shade:"#0d0c12",hi:"#5a3a44",streak:"#b8343a",style:"ponytail",tie:"#d03030"},eye:"#b0402a",top:{kind:"keikogi",base:"#f4f4f6",shade:"#cfd2dc",sleeve:"wide"},bottom:{kind:"hakama",base:"#202c50",shade:"#151d38"},legs:{kind:"bare"},shoes:null,weapon:"shinai",build:"slim",sharp:!0},yukari:{skin:Ii,hair:{base:"#4a3470",shade:"#2e1f4a",hi:"#7e64a8",style:"braid",bangsLong:!0},eye:"#9b7fe0",glasses:!0,top:{kind:"blazer",base:"#1f2550",shade:"#151a3a",cape:"#2b2f66",star:"#ffe08a",sleeve:"long",tie:"#ffe08a"},bottom:{kind:"long",base:"#1f2550",shade:"#151a3a",len:.42,star:"#ffe08a"},legs:{kind:"tights",base:"#1a1a24"},shoes:"#3a2a36",weapon:"telescope",build:"slim",calm:!0},karen:{skin:$p,hair:{base:"#f4d070",shade:"#d4a848",hi:"#fff0b0",style:"short"},eye:"#2ab0a8",top:{kind:"jacket",base:"#4fb6e8",shade:"#2f8fc4",inner:"#14234a",line:"#ffffff",sleeve:"long",goggles:"#ffd23c"},bottom:{kind:"shorts",base:"#14234a",shade:"#0c1630",len:.12},legs:{kind:"bare"},shoes:"#f4f4f8",weapon:null,build:"tall"},reika:{skin:Ii,hair:{base:"#14141c",shade:"#08080c",hi:"#3a3a52",style:"hime"},eye:"#a0182a",mole:!0,top:{kind:"kyudogi",base:"#f6f6f8",shade:"#d2d4dc",guard:"#26262c",sleeve:"wide"},bottom:{kind:"hakama",base:"#18181e",shade:"#0c0c10"},legs:{kind:"tabi",base:"#f4f4f6"},shoes:null,weapon:"bow",build:"tall",sharp:!0,calm:!0},sakura:{skin:Ii,hair:{base:"#f7b9cb",shade:"#e08aa6",hi:"#ffe4ec",style:"wavy",band:"#ffffff"},eye:"#e05a8a",top:{kind:"blazerW",base:"#fbf7f9",shade:"#e2d6dc",trim:"#d8b04a",sleeve:"long",tie:"#f08aa8",arm:"#d8283a"},bottom:{kind:"pleated",base:"#f08aa8",shade:"#d06a88",len:.22},legs:{kind:"tights",base:"#1c1820"},shoes:"#2a1e24",weapon:"fan",build:"slim",calm:!0},reiko:{skin:Ii,hair:{base:"#8c1c30",shade:"#5c0e1e",hi:"#c0485c",style:"updo"},eye:"#e0b040",mole:"mouth",lips:"#c83850",top:{kind:"track",base:"#17171c",shade:"#0c0c10",line:"#d8283a",sleeve:"long",whistle:"#d8dce4"},bottom:{kind:"trackpants",base:"#17171c",shade:"#0c0c10",line:"#d8283a"},legs:{kind:"none"},shoes:"#f4f4f8",weapon:"whistle",build:"tall",sharp:!0}};var Ju=new Set(["board","boombox","globe","swimring","makiwara","hurdle","parasol","horn","telelong","deckbrush","bowswing"]);function Qi(n,e,t,i,s="#c9935a"){it(n,[e,0],[t,0],i,i,s,ge,2)}function es(n,e,t,i,s,r){n.beginPath(),n.moveTo(e+r,t),n.arcTo(e+i,t,e+i,t+s,r),n.arcTo(e+i,t+s,e,t+s,r),n.arcTo(e,t+s,e,t,r),n.arcTo(e,t,e+i,t,r),n.closePath()}function ic(n,e,t){let i=n.createLinearGradient(0,e,0,t);return i.addColorStop(0,"#fff2a8"),i.addColorStop(.5,"#e0b030"),i.addColorStop(1,"#a87818"),i}function Qu(n,e,t,i){let s=ge;switch(e){case"ladle":it(n,[-4,0],[40,0],1.8,1.8,"#c8ccd6",s,t),n.beginPath(),n.ellipse(48,0,8,9,0,0,7),n.fillStyle="#e4e8f0",n.fill(),n.strokeStyle=s,n.lineWidth=t,n.stroke();break;case"rollingpin":Qi(n,-14,4,2.6,"#8a5a34"),Qi(n,4,96,5.4,"#e8c08a"),Qi(n,96,114,2.6,"#8a5a34");break;case"board":es(n,-2,-18,66,36,6),n.fillStyle="#e8c38e",n.fill(),n.strokeStyle=s,n.lineWidth=t,n.stroke(),n.fillStyle="#c99a62",n.fillRect(4,8,54,4),n.beginPath(),n.arc(54,-9,4,0,7),n.fillStyle="#5a3a24",n.fill();break;case"trumpet":at(n,[[-4,-3],[36,-3],[50,-12],[50,12],[36,3],[-4,3]],ic(n,-6,6),s,t);break;case"trombone":n.strokeStyle=s,n.lineWidth=6,n.beginPath(),n.moveTo(-6,-5),n.lineTo(128,-5),n.moveTo(-6,5),n.lineTo(128,5),n.stroke(),n.strokeStyle="#e0b030",n.lineWidth=3,n.stroke(),n.beginPath(),n.arc(128,0,5,-Math.PI/2,Math.PI/2),n.strokeStyle=s,n.lineWidth=5,n.stroke(),n.strokeStyle="#e0b030",n.lineWidth=2.5,n.stroke(),at(n,[[-4,-5],[36,-7],[50,-20],[50,6],[36,0],[-4,2]],ic(n,-20,6),s,t);break;case"horn":n.beginPath(),n.arc(30,0,22,0,7),n.strokeStyle=s,n.lineWidth=9,n.stroke(),n.strokeStyle="#e0b030",n.lineWidth=5.5,n.stroke(),n.beginPath(),n.arc(30,0,13,0,7),n.strokeStyle="#c8962a",n.lineWidth=3,n.stroke(),at(n,[[44,-6],[72,-24],[76,22],[44,8]],ic(n,-24,22),s,t);break;case"glowstick":n.save(),n.globalCompositeOperation="lighter",n.fillStyle="rgba(255,90,200,0.35)",n.beginPath(),n.ellipse(28,0,30,10,0,0,7),n.fill(),n.restore(),it(n,[-6,0],[6,0],3.4,3.4,"#2a2a30",s,t),it(n,[6,0],[52,0],3.2,3.2,"#ff8ad8",s,t);break;case"ribbon":{it(n,[-6,0],[26,0],2,2,"#f4f4f8",s,t),n.beginPath();for(let r=0;r<=30;r++){let a=26+r*4.2,o=Math.sin(r*.55+i*.35)*(4+r*.5);r?n.lineTo(a,o):n.moveTo(a,o)}n.lineCap="round",n.strokeStyle="#ff6fb0",n.lineWidth=6,n.stroke(),n.strokeStyle="rgba(255,255,255,0.6)",n.lineWidth=1.5,n.stroke();break}case"boombox":es(n,4,-22,76,42,6),n.fillStyle="#2a2a34",n.fill(),n.strokeStyle=s,n.lineWidth=t,n.stroke();for(let r of[22,62])n.beginPath(),n.arc(r,0,12,0,7),n.fillStyle="#6a6a7a",n.fill(),n.beginPath(),n.arc(r,0,5,0,7),n.fillStyle="#1a1a20",n.fill();n.fillStyle="#ff6fb0",n.fillRect(36,-16,12,6),n.strokeStyle="#9a9aaa",n.lineWidth=3,n.beginPath(),n.moveTo(12,-22),n.lineTo(16,-32),n.lineTo(68,-32),n.lineTo(72,-22),n.stroke();break;case"shinai":it(n,[-12,0],[8,0],3.2,3.2,"#f4f0e6",s,t),n.fillStyle="#b02828",n.fillRect(6,-4,4,8),it(n,[10,0],[125,0],3.4,2.6,"#e8d8a8",s,t);break;case"bokuto":n.beginPath(),n.moveTo(-12,-3),n.quadraticCurveTo(60,-10,112,-2),n.lineTo(112,3),n.quadraticCurveTo(60,-3,-12,4),n.closePath(),n.fillStyle="#6a3e22",n.fill(),n.strokeStyle=s,n.lineWidth=t,n.stroke(),n.fillStyle="#2a1a10",n.fillRect(8,-6,3,12);break;case"telescope":it(n,[-10,0],[60,0],5,6,"#24285a",s,t),n.beginPath(),n.arc(62,0,6,0,7),n.fillStyle="#9fd8ff",n.fill(),n.stroke();break;case"telelong":it(n,[-10,0],[40,0],4.5,5,"#24285a",s,t),it(n,[40,0],[100,0],4,4.5,"#2e3470",s,t),it(n,[100,0],[150,0],3.5,4,"#3a4290",s,t),n.fillStyle="#c9a24a";for(let r of[40,100])n.fillRect(r-2,-6,4,12);n.beginPath(),n.arc(152,0,5,0,7),n.fillStyle="#9fd8ff",n.fill(),n.strokeStyle=s,n.lineWidth=t,n.stroke();break;case"globe":{Qi(n,-6,40,2.6,"#c9a24a");let r=n.createRadialGradient(56,-8,4,64,0,26);r.addColorStop(0,"#9fd8ff"),r.addColorStop(1,"#24408a"),n.beginPath(),n.arc(64,0,26,0,7),n.fillStyle=r,n.fill(),n.strokeStyle=s,n.lineWidth=t,n.stroke(),n.strokeStyle="#c9a24a",n.lineWidth=3,n.beginPath(),n.ellipse(64,0,31,10,.4,0,7),n.stroke(),wn(n,58,-8,5,"#ffe08a",null);break}case"kickboard":es(n,2,-18,54,36,14),n.fillStyle="#3ab0f0",n.fill(),n.strokeStyle=s,n.lineWidth=t,n.stroke(),n.fillStyle="#ffe14a",n.fillRect(20,-17,10,34);break;case"deckbrush":Qi(n,-10,116,3,"#e8c08a"),es(n,110,-22,14,44,3),n.fillStyle="#4a7ac8",n.fill(),n.strokeStyle=s,n.lineWidth=t,n.stroke(),n.strokeStyle="#2a4a8a",n.lineWidth=1.5;for(let r=-18;r<=18;r+=5)n.beginPath(),n.moveTo(124,r),n.lineTo(132,r),n.stroke();break;case"swimring":n.beginPath(),n.arc(36,0,26,0,7),n.arc(36,0,12,0,7,!0),n.fillStyle="#ffffff",n.fill("evenodd"),n.strokeStyle=s,n.lineWidth=t,n.stroke(),n.fillStyle="#ff4a5a";for(let r=0;r<4;r++)n.beginPath(),n.arc(36,0,26,r*Math.PI/2,r*Math.PI/2+Math.PI/4),n.arc(36,0,12,r*Math.PI/2+Math.PI/4,r*Math.PI/2,!0),n.closePath(),n.fill();break;case"arrow":n.strokeStyle=s,n.lineWidth=4,n.beginPath(),n.moveTo(-14,0),n.lineTo(80,0),n.stroke(),n.strokeStyle="#d8c090",n.lineWidth=2.2,n.stroke(),n.fillStyle="#c8ccd6",n.beginPath(),n.moveTo(92,0),n.lineTo(78,-6),n.lineTo(78,6),n.fill(),n.fillStyle="#ffffff",n.beginPath(),n.moveTo(-14,0),n.lineTo(-4,-7),n.lineTo(2,0),n.lineTo(-4,7),n.fill();break;case"bowswing":n.beginPath(),n.moveTo(-40,0),n.quadraticCurveTo(40,-26,132,-4),n.strokeStyle=s,n.lineWidth=6,n.stroke(),n.strokeStyle="#7a4a24",n.lineWidth=3.4,n.stroke(),n.beginPath(),n.moveTo(-40,0),n.lineTo(132,-4),n.strokeStyle="rgba(240,240,240,0.9)",n.lineWidth=1,n.stroke();break;case"makiwara":Qi(n,-8,20,2.6,"#8a5a34"),es(n,18,-20,56,40,10),n.fillStyle="#d8b46a",n.fill(),n.strokeStyle=s,n.lineWidth=t,n.stroke(),n.strokeStyle="#8a6a3a",n.lineWidth=3;for(let r of[32,58])n.beginPath(),n.moveTo(r,-20),n.lineTo(r,20),n.stroke();break;case"fan":n.beginPath(),n.moveTo(0,0),n.arc(0,0,34,-.95,.95),n.closePath(),n.fillStyle="#ffe2ec",n.fill(),n.strokeStyle=s,n.lineWidth=t,n.stroke(),n.strokeStyle="rgba(200,80,120,0.5)",n.lineWidth=1;for(let r=-4;r<=4;r++){let a=r*.21;n.beginPath(),n.moveTo(0,0),n.lineTo(Math.cos(a)*34,Math.sin(a)*34),n.stroke()}break;case"pointer":it(n,[-8,0],[112,0],2.4,1.4,"#c8ccd6",s,t),n.beginPath(),n.arc(113,0,3.4,0,7),n.fillStyle="#ff6a8a",n.fill();break;case"parasol":Qi(n,-8,76,2.2,"#f4f4f8"),n.beginPath(),n.moveTo(76,0),n.arc(76,0,46,-Math.PI/2,Math.PI/2),n.closePath(),n.fillStyle="#ffd6e4",n.fill(),n.strokeStyle=s,n.lineWidth=t,n.stroke(),n.strokeStyle="rgba(220,100,140,0.6)",n.lineWidth=1.5;for(let r=-2;r<=2;r++){let a=r*.6;n.beginPath(),n.moveTo(76,0),n.lineTo(76+Math.cos(a)*46,Math.sin(a)*46),n.stroke()}break;case"book":es(n,0,-22,36,44,3),n.fillStyle="#2a3a6a",n.fill(),n.strokeStyle=s,n.lineWidth=t,n.stroke(),n.fillStyle="#ffffff",n.fillRect(6,-10,24,6);break;case"hurdle":n.strokeStyle=s,n.lineWidth=6,n.beginPath(),n.moveTo(14,26),n.lineTo(14,-30),n.moveTo(94,26),n.lineTo(94,-30),n.stroke(),n.strokeStyle="#c8ccd6",n.lineWidth=3.5,n.stroke(),es(n,8,-36,92,12,3),n.fillStyle="#ffffff",n.fill(),n.strokeStyle=s,n.lineWidth=t,n.stroke(),n.fillStyle="#e8283a";for(let r of[20,52,84])n.fillRect(r,-35,12,10);break}}var Mt=Math.PI/180,ge="#2a1b2e",ed={normal:{thigh:58,shin:56,torso:70,neck:7,r:27,up:38,fore:36,foot:19,lw:1},petite:{thigh:54,shin:52,torso:66,neck:6,r:29,up:36,fore:33,foot:17,lw:.9},slim:{thigh:59,shin:57,torso:70,neck:7,r:26.5,up:38,fore:36,foot:19,lw:.95},tall:{thigh:62,shin:60,torso:72,neck:8,r:25.5,up:40,fore:38,foot:20,lw:1.02}},td={normal:{thigh:62,shin:60,torso:64,neck:4,r:22,up:40,fore:38,foot:20,lw:1.16},petite:{thigh:58,shin:56,torso:62,neck:4,r:22,up:38,fore:35,foot:18,lw:1.06},slim:{thigh:63,shin:61,torso:64,neck:4,r:21,up:40,fore:38,foot:20,lw:1.1},tall:{thigh:66,shin:64,torso:64,neck:4,r:21,up:42,fore:40,foot:21,lw:1.16}},Er={};function sd(n,e){Er[n]=e}function oc(n){return!!Er[n]}function Yn(n){return Er[n]?td[Li[n].build]||td.normal:ed[Li[n].build]||ed.normal}var Tt=n=>[Math.sin(n*Mt),Math.cos(n*Mt)],ut=(n,e,t=1)=>[n[0]+e[0]*t,n[1]+e[1]*t];function Cs(n,e){let t=[n.hip[0],-(e.thigh+e.shin)+n.hip[1]],i={...n};for(let s of["lF","lB"]){let r=n[s];if(r&&r.ik){let a=r.ik[0],o=-r.ik[1],l=a-t[0],c=o-t[1],u=Math.hypot(l,c),h=e.thigh,d=e.shin;u=Math.max(8,Math.min(h+d-.01,u));let p=Math.atan2(l,c),g=Math.acos(Math.max(-1,Math.min(1,(h*h+u*u-d*d)/(2*h*u)))),_=p+g,m=[t[0]+Math.sin(_)*h,t[1]+Math.cos(_)*h],f=Math.atan2(a-m[0],o-m[1]);i[s]=[_/Mt,(_-f)/Mt]}}return i}function lc(n,e){let t=[n.hip[0],-(e.thigh+e.shin)+n.hip[1]],i=n.t*Mt,s=[Math.sin(i),-Math.cos(i)],r=[Math.cos(i),Math.sin(i)],a=(m,f)=>[t[0]+s[0]*m+r[0]*f,t[1]+s[1]*m+r[1]*f],o=a(e.torso,0),l=(n.t+n.h)*Mt,c=[Math.sin(l),-Math.cos(l)],u=[o[0]+c[0]*(e.neck+e.r*.95),o[1]+c[1]*(e.neck+e.r*.95)],h=a(e.torso-9,3),d=a(e.torso-9,-5),p=(m,f)=>{let S=n.t+f[0],w=ut(m,Tt(S),e.up),b=S+f[1],M=ut(w,Tt(b),e.fore);return{sh:m,el:w,hand:M,A:S,F:b}},g=(m,f)=>{let S=m[0],w=ut(t,Tt(S),e.thigh),b=S-m[1],M=ut(w,Tt(b),e.shin);return{hip:[t[0]+f,t[1]],knee:w,ank:M,th:S,S:b}},_={hip:t,neck:o,head:u,up:s,fw:r,t:n.t,ht:n.t+n.h,T:a,aF:p(h,n.aF),aB:p(d,n.aB),lF:g(n.lF,3),lB:g(n.lB,-3)};if(n.rot){let m=n.rot*Mt,f=Math.cos(m),S=Math.sin(m),w=M=>{let T=M[0]-t[0],R=M[1]-t[1];return[t[0]+T*f-R*S,t[1]+T*S+R*f]};_.neck=w(_.neck),_.head=w(_.head);for(let M of["aF","aB"])_[M].sh=w(_[M].sh),_[M].el=w(_[M].el),_[M].hand=w(_[M].hand),_[M].A+=n.rot,_[M].F+=n.rot;for(let M of["lF","lB"])_[M].knee=w(_[M].knee),_[M].ank=w(_[M].ank),_[M].th+=n.rot,_[M].S+=n.rot;_.t+=n.rot,_.ht+=n.rot;let b=_.t*Mt;_.up=[Math.sin(b),-Math.cos(b)],_.fw=[Math.cos(b),Math.sin(b)],_.T=(M,T)=>[t[0]+_.up[0]*M+_.fw[0]*T,t[1]+_.up[1]*M+_.fw[1]*T]}return _}function Wa(n,e,t,i,s){let r=n.createLinearGradient(e[0],e[1],t[0],t[1]);return r.addColorStop(0,i),r.addColorStop(1,s),r}function it(n,e,t,i,s,r,a=ge,o=2.2){let l=t[0]-e[0],c=t[1]-e[1],u=Math.hypot(l,c)||1,h=-c/u,d=l/u,p=()=>{n.beginPath(),n.moveTo(e[0]+h*i,e[1]+d*i),n.lineTo(t[0]+h*s,t[1]+d*s),n.arc(t[0],t[1],s,Math.atan2(d,h),Math.atan2(d,h)+Math.PI,!0),n.lineTo(e[0]-h*i,e[1]-d*i),n.arc(e[0],e[1],i,Math.atan2(-d,-h),Math.atan2(-d,-h)+Math.PI,!0),n.closePath()};if(p(),n.fillStyle=r,n.fill(),a&&u>6){n.save(),n.clip();let g=h,_=d;(g>0||g===0&&_<0)&&(g=-g,_=-_);let m=.55;n.beginPath(),n.moveTo(e[0]+g*i*2,e[1]+_*i*2),n.lineTo(t[0]+g*s*2,t[1]+_*s*2),n.lineTo(t[0]+g*s*(1-m*2),t[1]+_*s*(1-m*2)),n.lineTo(e[0]+g*i*(1-m*2),e[1]+_*i*(1-m*2)),n.closePath(),n.fillStyle="rgba(70,20,80,0.17)",n.fill(),n.beginPath(),n.moveTo(e[0]-g*i*.55,e[1]-_*i*.55),n.lineTo(t[0]-g*s*.55,t[1]-_*s*.55),n.strokeStyle="rgba(255,255,255,0.22)",n.lineWidth=Math.max(1,s*.35),n.stroke(),n.restore(),p()}a&&(n.strokeStyle=a,n.lineWidth=o,n.stroke())}function Tr(n,e,t,i,s,r,a,o,l=ge,c=2.2){let u=(m,f)=>{let S=f[0]-m[0],w=f[1]-m[1],b=Math.hypot(S,w)||1;return[-w/b,S/b]},h=u(e,t),d=u(t,i),p=[h[0]+d[0],h[1]+d[1]],g=Math.hypot(p[0],p[1])||1;p=[p[0]/g,p[1]/g];let _=()=>{n.beginPath(),n.moveTo(e[0]+h[0]*s,e[1]+h[1]*s),n.quadraticCurveTo(t[0]+p[0]*r*1.08,t[1]+p[1]*r*1.08,i[0]+d[0]*a,i[1]+d[1]*a),n.arc(i[0],i[1],a,Math.atan2(d[1],d[0]),Math.atan2(d[1],d[0])+Math.PI,!0),n.quadraticCurveTo(t[0]-p[0]*r*1.08,t[1]-p[1]*r*1.08,e[0]-h[0]*s,e[1]-h[1]*s),n.arc(e[0],e[1],s,Math.atan2(-h[1],-h[0]),Math.atan2(-h[1],-h[0])+Math.PI,!0),n.closePath()};if(_(),n.fillStyle=o,n.fill(),l){n.save(),n.clip();let m=p[0],f=p[1];(m>0||m===0&&f<0)&&(m=-m,f=-f),n.beginPath();for(let[S,w]of[[e,s],[t,r],[i,a]])n.lineTo(S[0]+m*w*.15,S[1]+f*w*.15);for(let[S,w]of[[i,a],[t,r],[e,s]])n.lineTo(S[0]+m*w*2.2,S[1]+f*w*2.2);n.closePath(),n.fillStyle="rgba(70,20,80,0.16)",n.fill(),n.beginPath(),n.moveTo(e[0]-m*s*.55,e[1]-f*s*.55),n.quadraticCurveTo(t[0]-m*r*.6,t[1]-f*r*.6,i[0]-m*a*.55,i[1]-f*a*.55),n.strokeStyle="rgba(255,255,255,0.22)",n.lineWidth=Math.max(1,a*.35),n.stroke(),n.restore(),_(),n.strokeStyle=l,n.lineWidth=c,n.stroke()}}function at(n,e,t,i=ge,s=2.2,r=!0){n.beginPath(),n.moveTo(e[0][0],e[0][1]);for(let a=1;a<e.length;a++)n.lineTo(e[a][0],e[a][1]);r&&n.closePath(),t&&(n.fillStyle=t,n.fill()),i&&(n.strokeStyle=i,n.lineWidth=s,n.lineJoin="round",n.stroke())}function Ar(n,e,t,i,s=ge,r=2.2,a){if(!t)return at(n,e,i,s,r);n.beginPath(),n.moveTo(e[0][0],e[0][1]);for(let o=1;o<e.length;o++)n.lineTo(e[o][0],e[o][1]);n.closePath(),n.fillStyle=t,n.fill(),a&&(n.fillStyle=a,n.fill()),s&&(n.strokeStyle=s,n.lineWidth=r,n.lineJoin="round",n.stroke())}function rd(n,e,t,i=ge,s=2.2){let r=e.length;n.beginPath();let a=(l,c)=>[(l[0]+c[0])/2,(l[1]+c[1])/2],o=a(e[r-1],e[0]);n.moveTo(o[0],o[1]);for(let l=0;l<r;l++){let c=e[l],u=e[(l+1)%r],h=a(c,u);n.quadraticCurveTo(c[0],c[1],h[0],h[1])}n.closePath(),t&&(n.fillStyle=t,n.fill()),i&&(n.strokeStyle=i,n.lineWidth=s,n.lineJoin="round",n.stroke())}function li(n,e){let t=parseInt(n.slice(1),16),i=t>>16,s=t>>8&255,r=t&255;return i=Math.round(i*e),s=Math.round(s*e),r=Math.round(r*e),"#"+((1<<24)+(i<<16)+(s<<8)+r).toString(16).slice(1)}var ns=class{constructor(e){this.st=Li[e],this.chains={},this.init=!1;let t=this.st.hair.style;this.spec={twintail:[{key:"t1",n:7,len:13,w:13},{key:"t2",n:7,len:13,w:12}],sidepony:[{key:"t1",n:7,len:13,w:15}],ponytail:[{key:"t1",n:8,len:14,w:15}],braid:[{key:"t1",n:6,len:12,w:10}],hime:[{key:"back",n:6,len:20,w:34}],wavy:[{key:"back",n:6,len:20,w:36}],bob:[],short:[],updo:[{key:"t1",n:3,len:10,w:5}]}[t]||[]}update(e,t,i=.8){for(let s of this.spec){let r=e[s.key];if(!r)continue;let a=this.chains[s.key];if(!a||!this.init){a=this.chains[s.key]=[];for(let l=0;l<=s.n;l++)a.push({x:r[0]-r[2]*l*s.len*t*.4,y:r[1]+l*s.len*t,px:0,py:0});for(let l of a)l.px=l.x,l.py=l.y}a[0].x=r[0],a[0].y=r[1],a[0].px=r[0],a[0].py=r[1];for(let l=1;l<a.length;l++){let c=a[l],u=(c.x-c.px)*.86,h=(c.y-c.py)*.86;c.px=c.x,c.py=c.y,c.x+=u-r[2]*.25*t,c.y+=h+i*t}let o=s.len*t;for(let l=0;l<4;l++)for(let c=1;c<a.length;c++){let u=a[c-1],h=a[c],d=h.x-u.x,p=h.y-u.y,g=Math.hypot(d,p)||1,_=(g-o)/g;c===1?(h.x-=d*_,h.y-=p*_):(u.x+=d*_*.5,u.y+=p*_*.5,h.x-=d*_*.5,h.y-=p*_*.5)}}this.init=!0}};function ts(n,e,t,i,s,r,a="tail",o){if(!e)return;let l=[],c=[];for(let p=0;p<e.length;p++){let g=e[p],_=e[Math.min(e.length-1,p+1)],m=e[Math.max(0,p-1)],f=_.x-m.x,S=_.y-m.y,w=Math.hypot(f,S)||1;f/=w,S/=w;let b=p/(e.length-1),M=a==="sheet"||a==="wave"?t*(.75+.45*Math.sin(Math.min(1,b*1.4+.15)*Math.PI))*(1-.35*b)+(a==="wave"?Math.sin(b*14)*t*.12:0):t*(.55+.6*Math.sin(Math.min(1,b*1.6+.2)*Math.PI*.95))*(1-b*.55);a==="braid"&&(M=t*(1-.3*b)),l.push([g.x-S*M,g.y+f*M]),c.push([g.x+S*M,g.y-f*M])}let u=l.concat(c.reverse());n.beginPath(),n.moveTo(u[0][0],u[0][1]);for(let p=1;p<u.length;p++){let g=u[p],_=u[p-1];n.quadraticCurveTo(_[0],_[1],(g[0]+_[0])/2,(g[1]+_[1])/2)}n.closePath();let h=e[e.length-1],d=n.createLinearGradient(e[0].x,e[0].y,h.x,h.y);if(d.addColorStop(0,i),d.addColorStop(.7,s),d.addColorStop(1,o||s),n.fillStyle=d,n.fill(),n.strokeStyle=r,n.lineWidth=2,n.lineJoin="round",n.stroke(),a==="braid"){n.strokeStyle="rgba(0,0,0,0.25)",n.lineWidth=1.5;for(let p=1;p<e.length-1;p++){let g=e[p];n.beginPath(),n.arc(g.x,g.y,t*.6,.3,Math.PI-.3),n.stroke()}}}function is(n,e){let t=Er[e.id],i=t?t.style:Li[e.id],s=Yn(e.id),r=lc(e.pose,s),a=e.k,o=e.facing,l=m=>[e.x+m[0]*a*o,e.y+m[1]*a],c=s.r,u=(m,f)=>{let S=Math.cos(r.ht*Mt),w=Math.sin(r.ht*Mt);return[r.head[0]+m*c*S-f*c*w,r.head[1]+m*c*w+f*c*S]};if(e.hair&&!t){let m=i.hair.style,f={},S=o*.6;m==="twintail"&&(f.t1=[...l(u(-.55,-.55)),S],f.t2=[...l(u(.05,-.85)),S]),m==="sidepony"&&(f.t1=[...l(u(-.75,-.25)),S]),m==="ponytail"&&(f.t1=[...l(u(-.7,-.85)),S]),m==="braid"&&(f.t1=[...l(u(.05,.65)),-S*.2]),(m==="hime"||m==="wavy")&&(f.back=[...l(u(-.55,.2)),S*.8]),m==="updo"&&(f.t1=[...l(u(.5,.35)),0]),e.hair.update(f,a,.9)}n.save(),e.alpha!==void 0&&(n.globalAlpha=e.alpha);let h=li(i.hair.shade,.55);if(e.hair&&!t){let m=e.hair.chains,f=i.hair;f.style==="twintail"&&ts(n,m.t2,12*a,f.shade,li(f.shade,.9),h),f.style==="hime"&&ts(n,m.back,21*a,f.base,f.shade,h,"sheet"),f.style==="wavy"&&ts(n,m.back,23*a,f.base,f.shade,h,"wave"),f.style==="sidepony"&&ts(n,m.t1,15*a,f.base,f.shade,h,"tail",f.tip),f.style==="ponytail"&&ts(n,m.t1,15*a,f.base,f.shade,h,"tail",f.streak),f.style==="twintail"&&ts(n,m.t1,13*a,f.base,f.shade,h)}n.translate(e.x,e.y),n.scale(o*a,a);let d=2.4/a,p=i.skin.base,g=i.skin.shade;nd(n,r.aB,i,s,d,!0,e),sc(n,r.lB,i,s,d,!0);let _=i.bottom.kind==="hakama"||i.bottom.kind==="trackpants";if(_||sc(n,r.lF,i,s,d,!1),Qp(n,r,i,s,d,e),_&&sc(n,r.lF,i,s,d,!1,!0),em(n,r,i,s,d),t?Jp(n,r,s,t,e):tm(n,r,i,s,d,e),n.restore(),e.hair&&!t&&i.hair.style==="braid"){n.save(),e.alpha!==void 0&&(n.globalAlpha=e.alpha),ts(n,e.hair.chains.t1,9*a,i.hair.base,i.hair.shade,h,"braid");let m=e.hair.chains.t1;if(m){let f=m[m.length-1];n.fillStyle="#ffe08a",n.beginPath(),n.arc(f.x,f.y,4*a,0,7),n.fill()}n.restore()}return n.save(),e.alpha!==void 0&&(n.globalAlpha=e.alpha),n.translate(e.x,e.y),n.scale(o*a,a),nd(n,r.aF,i,s,d,!1,e),n.restore(),r}function Jp(n,e,t,i,s){let r=i.meta,a=r.upp*1.13;n.save();let o=[Math.sin(e.ht*Mt),-Math.cos(e.ht*Mt)];n.translate(e.neck[0]+o[0]*t.neck,e.neck[1]+o[1]*t.neck),n.rotate(((e.ht-e.t)*.9+e.t*.85)*Mt);let l=s.face==="hurt"||s.face==="scream"||s.face==="ko";n.scale(a*(l?1.03:1),a*(l?.96:1)),n.drawImage(i.img,-r.neck[0],-r.neck[1]),l&&(n.globalCompositeOperation="source-atop"),n.restore()}function nd(n,e,t,i,s,r,a){let o=t.top,l=r?t.skin.shade:t.skin.base,c=o.sleeve,u=7.6*i.lw,h=6.2*i.lw,d=5.2*i.lw;if(r||ac(n,e,t,i,s,a,"under"),c==="wide"){it(n,e.el,e.hand,h,d,l,ge,s);let p=r?o.shade:o.base,g=[(e.sh[0]+e.el[0])/2,(e.sh[1]+e.el[1])/2];at(n,[ut(e.sh,[-7,-4]),ut(e.sh,[7,-2]),ut(e.el,[6,4]),ut(e.el,[-2,14]),ut(g,[-12,12])],p,ge,s)}else if(c==="long"){let p=t.pat&&(t.pat.sleeve||t.pat.top);if(Tr(n,e.sh,e.el,ut(e.el,Tt(e.F),i.fore*.82),u+1,h+1,d+1.2,p||(r?o.shade:o.base),ge,s),p&&r&&(it(n,e.sh,e.el,u+1,h+1,"rgba(30,10,50,0.25)",null),it(n,e.el,ut(e.el,Tt(e.F),i.fore*.82),h+1,d+1.2,"rgba(30,10,50,0.25)",null)),o.line&&o.kind==="track"&&(n.strokeStyle=o.line,n.lineWidth=2.2,n.beginPath(),n.moveTo(...e.sh),n.lineTo(...e.el),n.lineTo(...ut(e.el,Tt(e.F),i.fore*.8)),n.stroke()),o.kind==="sailor"){let _=ut(e.el,Tt(e.F),i.fore*.72),m=Tt(e.F+90);n.strokeStyle=o.line,n.lineWidth=1.6,n.beginPath(),n.moveTo(_[0]-m[0]*(d+1),_[1]-m[1]*(d+1)),n.lineTo(_[0]+m[0]*(d+1),_[1]+m[1]*(d+1)),n.stroke()}let g=ut(e.el,Tt(e.F),i.fore*.95);n.beginPath(),n.arc(g[0],g[1],5.2*i.lw,0,Math.PI*2),n.fillStyle=l,n.fill(),n.strokeStyle=ge,n.lineWidth=s,n.stroke()}else Tr(n,e.sh,e.el,e.hand,u,h,d,l,ge,s),c==="short"&&it(n,e.sh,ut(e.sh,Tt(e.A),i.up*.55),u+2.2,u+2.6,t.pat&&t.pat.top||(r?o.shade:o.base),ge,s),n.beginPath(),n.arc(e.hand[0],e.hand[1],5.4*i.lw,0,Math.PI*2),n.fillStyle=l,n.fill(),n.strokeStyle=ge,n.lineWidth=s,n.stroke();if(o.arm&&!r){let p=ut(e.sh,Tt(e.A),i.up*.35),g=ut(e.sh,Tt(e.A),i.up*.6);it(n,p,g,u+1.5,u+1.5,o.arm,ge,s*.8)}r||ac(n,e,t,i,s,a,"over")}function cc(n,e,t,i,s){let r=Er[e.id],a=r?r.style:Li[e.id],o=Yn(e.id),l=e.k,c=e.facing,u={...t.aF,hand:[(i[0]-e.x)/(c*l),(i[1]-e.y)/l]};n.save(),e.alpha!==void 0&&(n.globalAlpha=e.alpha),n.translate(e.x,e.y),n.scale(c*l,l),ac(n,u,a,o,2.4/l,e,s),n.restore()}function ac(n,e,t,i,s,r,a){if(r.prop){let u=Ju.has(r.prop);if(a==="under"!==u)return;n.save(),n.translate(e.hand[0],e.hand[1]),n.rotate(-(e.F+(r.pose.w||0)-90)*Mt),Qu(n,r.prop,s,r.time||0),n.restore();return}let o=t.weapon;if(!o)return;let l=e.F+(r.pose.w||0),c=e.hand;if(n.save(),n.translate(c[0],c[1]),o==="ladle"&&a==="over"&&(n.rotate(-l*Mt),it(n,[0,0],[0,40],1.8,1.8,"#c8ccd6",ge,s),n.beginPath(),n.ellipse(0,46,9,7,0,0,Math.PI*2),n.fillStyle="#e4e8f0",n.fill(),n.strokeStyle=ge,n.lineWidth=s,n.stroke(),n.beginPath(),n.ellipse(0,46,6,4,0,0,Math.PI),n.fillStyle="#a8b0be",n.fill()),o==="trumpet"&&a==="over"){n.rotate(-(l-90)*Mt);let u=n.createLinearGradient(0,-6,0,6);u.addColorStop(0,"#fff2a8"),u.addColorStop(.5,"#e0b030"),u.addColorStop(1,"#a87818"),at(n,[[-14,-3],[26,-3],[40,-12],[40,12],[26,3],[-14,3]],u,ge,s),n.fillStyle="#c8962a",n.fillRect(2,-9,4,6),n.fillRect(8,-9,4,6),n.fillRect(14,-9,4,6),n.strokeStyle=ge,n.lineWidth=s*.7,n.strokeRect(2,-9,16,6)}if(o==="shinai"&&a==="over"){n.rotate(-(l-90)*Mt),it(n,[-12,0],[8,0],3.2,3.2,"#f4f0e6",ge,s),n.fillStyle="#b02828",n.fillRect(6,-4,4,8),it(n,[10,0],[118,0],3.4,2.6,"#e8d8a8",ge,s),n.strokeStyle="rgba(120,90,40,0.6)",n.lineWidth=1;for(let u of[40,70,100])n.beginPath(),n.moveTo(u,-3),n.lineTo(u,3),n.stroke();n.fillStyle="#f4f0e6",n.beginPath(),n.arc(119,0,3.2,0,7),n.fill(),n.stroke()}if(o==="telescope"&&a==="under"&&(n.rotate(-(l-90)*Mt),it(n,[-40,0],[70,0],2.6,2.6,"#c9a24a",ge,s),it(n,[50,0],[96,0],5.5,7,"#24285a",ge,s),n.fillStyle="#c9a24a",n.fillRect(56,-6,3,12),n.fillRect(84,-7,3,14),n.beginPath(),n.arc(98,0,6,0,7),n.fillStyle="#9fd8ff",n.fill(),n.stroke(),wn(n,-46,0,9,"#ffe08a")),o==="bow"&&a==="under"&&(n.rotate(-((l-90)*.18+(r.pose.rot||0)*.8)*Mt),n.beginPath(),n.moveTo(4,-130),n.quadraticCurveTo(26,-60,4,0),n.quadraticCurveTo(18,40,4,70),n.strokeStyle=ge,n.lineWidth=6,n.stroke(),n.strokeStyle="#7a4a24",n.lineWidth=3.4,n.stroke(),n.beginPath(),n.moveTo(4,-130),n.lineTo(4,70),n.strokeStyle="rgba(240,240,240,0.9)",n.lineWidth=1,n.stroke()),o==="fan"&&a==="over"){n.rotate(-(l-90)*Mt),n.beginPath(),n.moveTo(0,0),n.arc(0,0,30,-.95,.95),n.closePath(),n.fillStyle="#ffe2ec",n.fill(),n.strokeStyle=ge,n.lineWidth=s,n.stroke(),n.strokeStyle="rgba(200,80,120,0.5)",n.lineWidth=1;for(let u=-4;u<=4;u++){let h=u*.21;n.beginPath(),n.moveTo(0,0),n.lineTo(Math.cos(h)*30,Math.sin(h)*30),n.stroke()}for(let[u,h]of[[18,-8],[22,8],[12,2]])hc(n,u,h,3.2,"#f48aa8")}n.restore()}function wn(n,e,t,i,s,r=ge){n.beginPath();for(let a=0;a<10;a++){let o=-Math.PI/2+a*Math.PI/5,l=a%2?i*.45:i;n.lineTo(e+Math.cos(o)*l,t+Math.sin(o)*l)}n.closePath(),n.fillStyle=s,n.fill(),r&&(n.strokeStyle=r,n.lineWidth=1.5,n.stroke())}function hc(n,e,t,i,s){n.beginPath(),n.ellipse(e,t,i*1.4,i*.8,.5,0,7),n.fillStyle=s,n.fill()}function sc(n,e,t,i,s,r,a=!1){let o=r?t.skin.shade:t.skin.base,l=t.legs||{},c=t.bottom.kind,u=c==="hakama"||c==="trackpants",h=11.2*i.lw,d=7.6*i.lw,p=5.4*i.lw;if(u){if(c==="hakama"){let f=t.pat&&t.pat.bottom||(r?t.bottom.shade:t.bottom.base);Tr(n,e.hip,e.knee,ut(e.ank,Tt(e.S),-3),11.5,12.5,13.5,f,ge,s),t.pat&&r&&(it(n,e.hip,e.knee,11.5,12.5,"rgba(30,10,50,0.22)",null),it(n,e.knee,ut(e.ank,Tt(e.S),-3),12.5,13.5,"rgba(30,10,50,0.22)",null)),n.strokeStyle="rgba(0,0,0,0.25)",n.lineWidth=1.2,n.beginPath(),n.moveTo(...ut(e.knee,[-5,0])),n.lineTo(...ut(e.ank,[-6,-2])),n.stroke(),rc(n,e,t,i,s,r,l.kind==="tabi"?r?"#d8dae2":l.base:o);return}if(c==="trackpants"){let f=r?t.bottom.shade:t.bottom.base;Tr(n,e.hip,e.knee,e.ank,h+2,d+2.5,p+3,f,ge,s),n.strokeStyle=t.bottom.line,n.lineWidth=2,n.beginPath(),n.moveTo(...e.hip),n.lineTo(...e.knee),n.lineTo(...e.ank),n.stroke(),rc(n,e,t,i,s,r);return}}let g=o,_=o;l.kind==="tights"&&(g=r?li(l.base,.8):l.base,_=g),Tr(n,e.hip,e.knee,e.ank,h,d,p,g,ge,s);let m=t.pat&&t.pat.legwear;l.kind==="kneesocks"&&it(n,ut(e.knee,Tt(e.S),6),e.ank,d+.6,p+.6,m||(r?li(l.base,.8):l.base),ge,s),l.kind==="socks"&&it(n,ut(e.knee,Tt(e.S),i.shin*.45),e.ank,d+.4,p+.6,m||(r?"#d8d8e0":l.base),ge,s),l.kind==="ankle"&&it(n,ut(e.knee,Tt(e.S),i.shin*.8),e.ank,p+.6,p+.6,l.base,ge,s),rc(n,e,t,i,s,r)}function rc(n,e,t,i,s,r,a){let o=e.ank,l=i.foot,c=a||t.shoes||t.skin.base,u=r?li(c,.82):c;n.save(),n.translate(o[0],o[1]),n.rotate(-e.S*Mt),n.beginPath(),n.moveTo(-4,-4),n.quadraticCurveTo(l*.5,-6,l,0),n.quadraticCurveTo(l+2,5,l*.6,5),n.lineTo(-5,5),n.closePath(),n.fillStyle=u,n.fill(),n.strokeStyle=ge,n.lineWidth=s,n.stroke(),n.restore()}function Qp(n,e,t,i,s,r){let a=t.bottom,o=e.T,l=o(5,-19),c=o(5,17),u=a.kind;if(u==="hakama"||u==="trackpants"){at(n,[o(14,-16),o(14,14),o(-6,16),o(-8,-17)],a.base,ge,s),u==="hakama"&&at(n,[o(14,-16),o(14,14),o(8,14),o(8,-16)],(t.top.kind==="kyudogi","#f4f4f6"),ge,s*.8);return}if(u==="shorts"){for(let A of[e.lB,e.lF])it(n,A.hip,ut(A.hip,Tt(A.th),i.thigh*.38),11,10.5,A===e.lB?a.shade:a.base,ge,s);at(n,[o(8,-15),o(8,14),o(-6,15),o(-6,-15)],a.base,ge,s);return}let h=(a.len||.2)*240*1,d=(A,C)=>C<=i.thigh?ut(A.hip,Tt(A.th),C):ut(A.knee,Tt(A.S),Math.min(i.shin,C-i.thigh)),p=d(e.lF,h),g=d(e.lB,h),_=p[0]>g[0]?p:g,m=p[0]>g[0]?g:p,f=8+Math.min(14,Math.abs(r.vx||0)*1.2+Math.max(0,r.vy||0)*.6),S=[_[0]+f*.9,_[1]+2],w=[m[0]-f,m[1]+2-(r.vy>0?4:0)],b=u==="long"?46:70,M=(l[0]+c[0])/2;S[0]-M>b&&(S=[M+b,Math.max(S[1],c[1]+30)]),M-w[0]>b&&(w=[M-b,Math.max(w[1],l[1]+30)]);let T=[(S[0]+w[0])/2,Math.max(S[1],w[1])+4],R=[l,c,[(c[0]+S[0])/2+3,(c[1]+S[1])/2],S,T,w,[(l[0]+w[0])/2-3,(l[1]+w[1])/2]],v=Wa(n,[w[0],0],[S[0],0],a.shade,a.base);Ar(n,R,t.pat&&t.pat.bottom,v,ge,s,t.pat&&Wa(n,[w[0],0],[S[0],0],"rgba(30,10,50,0.3)","rgba(255,255,255,0.03)")),n.strokeStyle="rgba(0,0,0,0.22)",n.lineWidth=1.2;for(let A=1;A<5;A++){let C=A/5,D=[l[0]+(c[0]-l[0])*C,l[1]+(c[1]-l[1])*C],z=[w[0]+(S[0]-w[0])*C,w[1]+(S[1]-w[1])*C+3];n.beginPath(),n.moveTo(...D),n.lineTo(...z),n.stroke()}if(u==="plaid"){n.save(),n.clip(),n.strokeStyle="rgba(255,255,255,0.35)",n.lineWidth=1.5;for(let C=-60;C<60;C+=9)n.beginPath(),n.moveTo(C,-140),n.lineTo(C,0),n.stroke();for(let C=-140;C<0;C+=9)n.beginPath(),n.moveTo(-60,C),n.lineTo(60,C),n.stroke();n.restore();let A=t.top;Ar(n,[o(10,-18),o(10,16),o(-2,20),[w[0]-4,w[1]-10],o(-4,-22)],t.pat&&t.pat.hoodie,A.hoodie,ge,s)}if(u==="long"&&a.star)for(let[A,C]of[[.3,.7],[.6,.85],[.8,.6]]){let D=[w[0]+(S[0]-w[0])*A,l[1]+(T[1]-l[1])*C];wn(n,D[0],D[1],3.5,a.star,null)}}function em(n,e,t,i,s){let r=t.top,a=e.T,o=i.torso,l=[a(0,-19),a(0,17),a(o*.4,15),a(o*.62,19),a(o*.82,16),a(o-4,13),a(o,6),a(o,-9),a(o-5,-19),a(o*.55,-18)];it(n,a(o-6,-1),e.neck,4.6,4.2,t.skin.shade,ge,s);let c=r.base,u=r.shade,h=Wa(n,a(o*.5,-17),a(o*.5,16),u,c);if(r.kind==="tank"||r.kind==="jacket"){if(Ar(n,l,r.kind==="tank"&&t.pat?t.pat.top:null,r.kind==="tank"?h:r.inner,ge,s),r.kind==="tank"&&at(n,[a(o-2,6),a(o+2,-2),a(o-2,-8),a(o-8,0)],t.skin.base,null),r.kind==="jacket"){at(n,[a(0,-17),a(0,4),a(o*.5,2),a(o*.8,6),a(o-2,2),a(o+2,-4),a(o-2,-15),a(o*.5,-18)],h,ge,s),n.strokeStyle=r.line,n.lineWidth=2,n.beginPath(),n.moveTo(...a(1,3)),n.lineTo(...a(o*.5,1)),n.stroke();let p=a(o-3,6);n.beginPath(),n.ellipse(p[0],p[1],6,3.2,0,0,7),n.fillStyle=r.goggles,n.fill(),n.strokeStyle=ge,n.lineWidth=s,n.stroke()}return}let d=t.pat||{};if(d.top?Ar(n,l,d.top,h,ge,s,Wa(n,a(o*.5,-17),a(o*.5,16),"rgba(30,10,50,0.32)","rgba(255,255,255,0.04)")):rd(n,l,h,ge,s),r.kind==="sailor"&&(at(n,[a(o,-6),a(o-2,-16),a(o*.7,-19),a(o*.7,-6),a(o-4,4)],r.collar,ge,s),n.strokeStyle=r.line,n.lineWidth=1.6,n.beginPath(),n.moveTo(...a(o*.73,-17)),n.lineTo(...a(o-2,-13)),n.stroke(),at(n,[a(o-3,7),a(o*.72,16),a(o*.6,12),a(o*.7,6)],r.scarf,ge,s),at(n,[a(o*.7,12),a(o*.55,18),a(o*.5,13)],r.scarf,ge,s*.8)),r.kind==="blouse"){let p=t.bottom;at(n,[a(2,-15),a(2,13),a(o*.58,15),a(o*.62,-16)],p.base,ge,s),at(n,[a(o*.62,10),a(o*.98,6),a(o*.98,-2)],p.base,null),at(n,[a(o-3,7),a(o-12,13),a(o-13,5)],r.tie,ge,s*.8),at(n,[a(o-3,7),a(o-14,4),a(o-12,9)],r.tie,ge,s*.8)}if((r.kind==="keikogi"||r.kind==="kyudogi")&&(n.strokeStyle=ge,n.lineWidth=s,n.beginPath(),n.moveTo(...a(o,4)),n.lineTo(...a(o*.45,14)),n.stroke(),at(n,[a(o-1,3),a(o-12,9),a(o-2,-2)],t.skin.base,null),r.guard&&at(n,[a(o*.85,2),a(o*.85,15),a(o*.5,16),a(o*.5,4)],r.guard,ge,s)),(r.kind==="blazer"||r.kind==="blazerW")&&(at(n,[a(o,4),a(o*.5,14),a(o*.42,15),a(o*.6,4),a(o-2,-2)],r.kind==="blazer"?"#f0f0f6":"#ffffff",ge,s*.8),r.tie&&at(n,[a(o-4,6),a(o*.62,12),a(o*.58,9)],r.tie,ge,s*.8),r.trim&&(n.strokeStyle=r.trim,n.lineWidth=2,n.beginPath(),n.moveTo(...a(o*.6,4)),n.lineTo(...a(2,12)),n.stroke()),r.cape)){at(n,[a(o+2,-8),a(o+2,8),a(o*.45,22),a(o*.3,-24)],r.cape,ge,s);for(let[p,g]of[[.6,-10],[.5,8],[.75,2]]){let _=a(o*p,g);wn(n,_[0],_[1],3.2,r.star,null)}}if(r.kind==="track"){n.strokeStyle="#c0c4cc",n.lineWidth=1.4,n.beginPath(),n.moveTo(...a(o,6)),n.lineTo(...a(2,12)),n.stroke();let p=a(o*.62,15);n.strokeStyle="#c0c4cc",n.lineWidth=1,n.beginPath(),n.moveTo(...a(o,3)),n.lineTo(...p),n.stroke(),n.beginPath(),n.ellipse(p[0],p[1],4.5,3,0,0,7),n.fillStyle=r.whistle,n.fill(),n.strokeStyle=ge,n.lineWidth=s*.8,n.stroke()}if(t.apron){let p=t.apron;Ar(n,[a(o*.78,-3),a(o*.78,17),a(o*.4,16),a(-36,26),a(-40,-6),a(2,-8)],t.pat&&t.pat.apron,p.base,ge,s),n.strokeStyle=p.shade,n.lineWidth=2,n.beginPath(),n.moveTo(...a(4,-10)),n.lineTo(...a(4,18)),n.stroke(),n.strokeStyle=p.shade,n.lineWidth=1.2,n.beginPath(),n.moveTo(...a(o*.7,6)),n.lineTo(...a(o,-6)),n.stroke();let g=a(o*.25,7);n.beginPath(),n.ellipse(g[0],g[1],6,5,0,0,7),n.fillStyle="#ffe14a",n.fill(),n.strokeStyle="#d0a020",n.lineWidth=1,n.stroke(),n.beginPath(),n.arc(g[0]+5,g[1]-6,3.4,0,7),n.fillStyle="#ffe14a",n.fill()}}function tm(n,e,t,i,s,r){let a=i.r,o=e.head,l=e.ht*Mt;n.save(),n.translate(o[0],o[1]),n.rotate(l);let c=t.hair,u=li(c.shade,.55),h={bob:[[-1,-.3],[-1.05,.5],[-.75,1],[-.25,.95],[-.15,.4],[.2,-.9],[-.6,-1]],short:[[-1,-.2],[-.95,.55],[-.6,.8],[-.1,.5],[.2,-.9],[-.6,-1]],twintail:[[-1,-.3],[-1,.45],[-.6,.8],[.1,.4],[.2,-.95],[-.6,-1]],sidepony:[[-1,-.3],[-1,.45],[-.6,.75],[.1,.4],[.2,-.95],[-.6,-1]],ponytail:[[-1,-.3],[-.95,.45],[-.6,.7],[.1,.4],[.2,-.95],[-.6,-1]],braid:[[-1,-.3],[-1.05,.6],[-.6,.95],[.1,.5],[.2,-.95],[-.6,-1]],hime:[[-1.05,-.3],[-1.1,.9],[-.7,1.2],[.1,.6],[.2,-.95],[-.6,-1.05]],wavy:[[-1.1,-.3],[-1.2,.9],[-.7,1.25],[.1,.6],[.2,-.95],[-.6,-1.1]],updo:[[-1,-.3],[-.9,.4],[-.5,.55],[.1,.4],[.2,-.95],[-.6,-1]]}[c.style];rd(n,h.map(([g,_])=>[g*a,_*a]),c.shade,u,s),c.style==="updo"&&(n.beginPath(),n.arc(-.85*a,-.75*a,.48*a,0,7),n.fillStyle=c.base,n.fill(),n.strokeStyle=u,n.lineWidth=s,n.stroke()),n.beginPath(),n.moveTo(-.3*a,-.85*a),n.bezierCurveTo(.3*a,-1.05*a,1.05*a,-.7*a,.98*a,.05*a),n.bezierCurveTo(.95*a,.45*a,.75*a,.82*a,.42*a,.95*a),n.bezierCurveTo(.1*a,1*a,-.25*a,.8*a,-.36*a,.4*a),n.closePath();let d=n.createLinearGradient(-a,0,a,0);d.addColorStop(0,t.skin.shade),d.addColorStop(.45,t.skin.base),d.addColorStop(1,t.skin.base),n.fillStyle=d,n.fill(),n.strokeStyle=ge,n.lineWidth=s,n.stroke(),n.beginPath(),n.ellipse(-.18*a,.12*a,.14*a,.2*a,0,0,7),n.fillStyle=t.skin.shade,n.fill(),n.stroke(),t.earring&&wn(n,-.18*a,.42*a,.14*a,t.earring,null),nm(n,t,a,s,r);let p=c.style==="hime"?[[-.7,-.9],[.2,-1.12],[.95,-.6],[1.06,-.05],[.98,0],[.9,-.12],[.2,-.12],[.18,.75],[.05,.8],[-.1,-.2],[-.4,-.3]]:c.style==="short"?[[-.7,-.9],[.2,-1.15],[.95,-.65],[1.05,-.25],[.8,-.35],[.7,-.1],[.55,-.4],[.3,-.15],[.1,-.45],[-.3,-.35]]:[[-.7,-.9],[.2,-1.15],[.95,-.62],[1.06,-.1],[.88,-.2],[.82,.1],[.66,-.25],[.5,.05],[.36,-.3],[.18,0],[0,-.4],[-.1,.55],[-.2,.6],[-.35,-.3]];if(at(n,p.map(([g,_])=>[g*a,_*a]),c.base,u,s),n.strokeStyle=c.hi,n.lineWidth=2.2,n.beginPath(),n.arc(.05*a,-.25*a,.62*a,-2.3,-1.2),n.stroke(),c.streak&&(n.strokeStyle=c.streak,n.lineWidth=2.4,n.beginPath(),n.moveTo(.5*a,-.95*a),n.quadraticCurveTo(.8*a,-.6*a,.7*a,-.2*a),n.stroke()),c.style!=="short"&&c.style!=="updo"){let g=(c.style==="hime"||c.style==="wavy"?1.3:c.style==="bob"?.95:.8)*a;at(n,[[-.42*a,-.5*a],[-.08*a,-.4*a],[-.02*a,g*.7],[-.14*a,g],[-.3*a,g*.8],[-.4*a,0]],c.base,u,s)}if(c.ahoge&&(n.beginPath(),n.moveTo(-.1*a,-1.05*a),n.bezierCurveTo(.1*a,-1.7*a,.6*a,-1.6*a,.35*a,-1.25*a),n.strokeStyle=u,n.lineWidth=4.5,n.stroke(),n.strokeStyle=c.base,n.lineWidth=2.6,n.stroke()),c.pin&&wn(n,.75*a,-.62*a,.2*a,c.pin),c.ribbon)for(let[g,_]of[[-.55,-.55],[.05,-.85]])id(n,g*a,_*a,.28*a,c.ribbon);c.tie&&id(n,-.7*a,-.85*a,.2*a,c.tie),c.band&&(n.strokeStyle=c.band,n.lineWidth=3.4,n.beginPath(),n.arc(.05*a,-.05*a,1*a,-2.6,-.9),n.stroke()),c.cap&&(n.beginPath(),n.ellipse(-.05*a,-.72*a,.98*a,.5*a,0,Math.PI,0),n.closePath(),n.fillStyle=c.cap,n.fill(),n.strokeStyle=ge,n.lineWidth=s,n.stroke(),at(n,[[-.9*a,-.72*a],[-1.45*a,-.62*a],[-1.4*a,-.5*a],[-.85*a,-.6*a]],c.cap,ge,s),wn(n,.1*a,-.95*a,.16*a,"#ff6fb0",null)),n.restore()}function id(n,e,t,i,s){at(n,[[e,t],[e-i*1.2,t-i*.8],[e-i*1.1,t+i*.6]],s,ge,1.6),at(n,[[e,t],[e+i*1.2,t-i*.7],[e+i*1,t+i*.7]],s,ge,1.6),n.beginPath(),n.arc(e,t,i*.35,0,7),n.fillStyle=s,n.fill(),n.strokeStyle=ge,n.stroke()}function nm(n,e,t,i,s){let r=s.face||"normal",a=s.blink&&r==="normal",o=e.eye,l=e.sharp,c=e.calm;n.fillStyle="rgba(255,120,130,0.28)",n.beginPath(),n.ellipse(.45*t,.42*t,.2*t,.1*t,0,0,7),n.fill();let u=(g,_,m,f,S)=>{if(r==="hurt"||r==="scream"||r==="ko"){n.strokeStyle=ge,n.lineWidth=2.4,n.beginPath(),r==="ko"?(n.moveTo(g-m,_-f*.2),n.lineTo(g+m,_+f*.25),n.moveTo(g-m,_+f*.25),n.lineTo(g+m,_-f*.2)):(n.moveTo(g-m,_-f*.4),n.lineTo(g+m*.6,_),n.lineTo(g-m,_+f*.35)),n.stroke();return}if(a||r==="happy"||r==="wink"&&!S){n.strokeStyle=ge,n.lineWidth=2.4,n.beginPath(),r==="happy"||r==="wink"?n.arc(g,_+f*.2,m*.9,Math.PI*1.1,Math.PI*1.9):(n.moveTo(g-m,_+f*.1),n.quadraticCurveTo(g,_+f*.35,g+m,_+f*.1)),n.stroke();return}let w=r==="sad"?f*.8:c&&r==="normal"?f*.78:f;n.beginPath(),n.ellipse(g,_,m,w,0,0,7),n.fillStyle="#ffffff",n.fill();let b=n.createLinearGradient(g,_-w,g,_+w);b.addColorStop(0,li(o,.55)),b.addColorStop(1,o),n.beginPath(),n.ellipse(g+m*.12,_+w*.06,m*.78,w*.86,0,0,7),n.fillStyle=b,n.fill(),n.beginPath(),n.ellipse(g+m*.15,_+w*.12,m*.38,w*.45,0,0,7),n.fillStyle=li(o,.3),n.fill(),n.fillStyle="#ffffff",n.beginPath(),n.ellipse(g-m*.2,_-w*.35,m*.26,w*.22,0,0,7),n.fill(),n.beginPath(),n.arc(g+m*.38,_+w*.4,m*.13,0,7),n.fill(),n.strokeStyle=ge,n.lineWidth=S?2.4:3.2,n.beginPath();let M=l||r==="shout"||r==="grit"?-.25:.1;n.moveTo(g-m*1.05,_-w*(.75-M)),n.quadraticCurveTo(g,_-w*1.15,g+m*1.1,_-w*(.7+M)),n.stroke()};u(.36*t,.12*t,.17*t,.27*t,!1),u(.86*t,.1*t,.09*t,.24*t,!0),n.strokeStyle=li(e.hair.shade,.5),n.lineWidth=2;let h=r==="shout"||r==="grit"||r==="scream";n.beginPath(),n.moveTo(.2*t,h?-.32*t:-.38*t),n.lineTo(.55*t,h?-.22*t:r==="sad"?-.32*t:-.4*t),n.stroke(),e.glasses&&(n.strokeStyle="#6a5a8a",n.lineWidth=1.6,n.beginPath(),n.ellipse(.36*t,.12*t,.24*t,.24*t,0,0,7),n.stroke(),n.beginPath(),n.moveTo(.6*t,.1*t),n.lineTo(.75*t,.08*t),n.stroke(),n.beginPath(),n.moveTo(.12*t,.08*t),n.lineTo(-.15*t,.02*t),n.stroke());let d=.6*t,p=.62*t;n.strokeStyle=ge,n.lineWidth=1.8,n.fillStyle="#c03850",r==="shout"||r==="scream"?(n.beginPath(),n.moveTo(d-.12*t,p-.05*t),n.lineTo(d+.14*t,p-.04*t),n.lineTo(d+.02*t,p+(r==="scream"?.24:.17)*t),n.closePath(),n.fill(),n.stroke()):r==="hurt"?(n.beginPath(),n.ellipse(d,p,.07*t,.08*t,0,0,7),n.fill(),n.stroke()):r==="happy"||r==="wink"?(n.beginPath(),n.arc(d,p-.04*t,.12*t,.1,Math.PI-.1),n.closePath(),n.fill(),n.stroke()):r==="grit"?(n.beginPath(),n.moveTo(d-.1*t,p),n.lineTo(d+.12*t,p-.02*t),n.stroke()):r==="sad"||r==="ko"?(n.beginPath(),n.arc(d,p+.08*t,.08*t,Math.PI*1.15,Math.PI*1.85),n.stroke()):(n.beginPath(),n.moveTo(d-.08*t,p),n.quadraticCurveTo(d,p+.05*t,d+.09*t,p-.01*t),n.stroke()),e.lips&&(r==="normal"||r==="grit")&&(n.strokeStyle=e.lips,n.lineWidth=2,n.beginPath(),n.moveTo(d-.08*t,p),n.quadraticCurveTo(d,p+.04*t,d+.09*t,p-.01*t),n.stroke()),e.mole===!0&&(n.fillStyle="#3a2830",n.beginPath(),n.arc(.42*t,.42*t,.035*t,0,7),n.fill()),e.mole==="mouth"&&(n.fillStyle="#3a2830",n.beginPath(),n.arc(.72*t,.74*t,.035*t,0,7),n.fill()),n.strokeStyle="rgba(160,90,80,0.7)",n.lineWidth=1.2,n.beginPath(),n.moveTo(.94*t,.3*t),n.lineTo(.9*t,.36*t),n.stroke()}var ad={hip:[0,10],t:6,h:-2,aF:[50,70],aB:[30,92],lF:{ik:[26,0]},lB:{ik:[-30,0]},rot:0,w:0,face:"normal"},uc={stand:{},stand2:{hip:[0,13],t:8,aF:[47,74],aB:[27,96]},crouch:{hip:[0,50],t:22,h:-6,aF:[70,92],aB:[45,100],lF:{ik:[36,0]},lB:{ik:[-26,0]}},guard:{hip:[-6,16],t:-4,h:4,aF:[112,128],aB:[100,135],face:"grit"},cguard:{hip:[-4,52],t:16,h:2,aF:[118,130],aB:[104,138],lF:{ik:[34,0]},lB:{ik:[-28,0]},face:"grit"},prejump:{hip:[0,30],t:14,aF:[40,80],aB:[25,90],lF:{ik:[24,0]},lB:{ik:[-26,0]}},jumpUp:{hip:[0,0],t:4,h:-6,aF:[100,70],aB:[60,80],lF:[72,105],lB:[12,70]},jumpDown:{hip:[0,0],t:0,aF:[85,45],aB:[45,45],lF:[40,55],lB:[-10,30]},dash:{hip:[0,22],t:34,h:-14,aF:[-35,50],aB:[65,70],lF:[62,80],lB:[-40,70],face:"grit"},backstep:{hip:[0,6],t:-20,h:6,aF:[40,70],aB:[20,50],lF:[35,45],lB:[-5,75]},dodge:{hip:[-16,34],t:-26,h:12,rot:-6,aF:[20,125],aB:[12,115],lF:{ik:[14,0]},lB:{ik:[-54,0]},face:"grit"},land:{hip:[0,28],t:16,aF:[45,70],aB:[25,80],lF:{ik:[30,0]},lB:{ik:[-30,0]}},hitHigh:{hip:[-12,16],t:-24,h:-22,aF:[25,35],aB:[12,25],face:"hurt"},hitLow:{hip:[-6,26],t:28,h:14,aF:[35,30],aB:[12,30],face:"hurt"},airHit:{hip:[0,0],t:-32,h:-22,aF:[145,30],aB:[120,20],lF:[28,45],lB:[8,55],face:"hurt"},wallblow:{hip:[0,0],t:-42,h:-26,aF:[165,10],aB:[150,0],lF:[42,0],lB:[22,12],face:"scream"},down:{hip:[0,98],t:0,h:-6,aF:[170,10],aB:[150,20],lF:[8,10],lB:[-4,25],rot:-90,face:"ko"},getup:{hip:[0,64],t:32,h:-6,aF:[60,50],aB:[20,40],lF:{ik:[30,0]},lB:[-70,110],face:"grit"},thrown:{hip:[0,0],t:-20,h:-20,aF:[150,20],aB:[130,30],lF:[40,50],lB:[10,60],face:"hurt"},win:{hip:[0,4],t:-4,h:-6,aF:[168,12],aB:[28,40],face:"happy"},lose:{hip:[0,34],t:34,h:24,aF:[10,10],aB:[6,12],lF:{ik:[20,0]},lB:{ik:[-20,0]},face:"sad"},intro:{hip:[0,6],t:0,h:-2,aF:[38,122],aB:[44,118],face:"normal"},locked:{hip:[-8,14],t:-26,h:-24,aF:[30,20],aB:[16,20],face:"hurt"}},Ps={LP:{wind:{aF:[62,105]},strike:{aF:[92,2],t:10,hip:[6,10],face:"shout"}},MP:{wind:{aF:[150,30],t:-6},strike:{aF:[96,-4],aB:[40,100],t:20,hip:[16,12],lF:{ik:[46,0]},face:"shout"}},HP:{wind:{aF:[200,10],aB:[20,110],t:-14,hip:[-10,16]},strike:{aF:[92,-6],aB:[30,100],t:28,h:-4,hip:[24,18],lF:{ik:[58,0]},lB:{ik:[-42,0]},face:"shout"}},LK:{wind:{lF:[42,85],t:-2},strike:{lF:[82,2],t:-8,aF:[55,90],face:"shout"}},MK:{wind:{lF:[60,105],t:-12,hip:[-8,10]},strike:{lF:[96,-4],lB:{ik:[-12,0]},t:-22,hip:[-10,8],aF:[40,70],aB:[20,60],face:"shout"}},HK:{wind:{lB:[-40,70],t:12},strike:{lB:[128,4],lF:{ik:[4,0]},t:-34,h:6,hip:[-4,4],aF:[45,40],aB:[18,30],face:"shout"}},cLP:{wind:{aF:[70,105]},strike:{aF:[88,0],face:"shout"},base:"crouch"},cMP:{wind:{aF:[30,110]},strike:{aF:[90,0],t:32,face:"shout"},base:"crouch"},cHP:{wind:{aF:[8,110],hip:[0,56]},strike:{aF:[168,8],aB:[40,60],t:-12,h:-22,hip:[10,4],lF:{ik:[30,0]},lB:{ik:[-26,0]},face:"shout"},base:"crouch"},cLK:{wind:{lF:[60,90]},strike:{lF:[80,-6],t:28,face:"shout"},base:"crouch"},cMK:{wind:{lF:[60,100]},strike:{lF:[86,-2],t:34,hip:[6,54],face:"shout"},base:"crouch"},cHK:{wind:{hip:[0,64],lF:[60,90]},strike:{hip:[0,76],t:42,lF:[92,-2],lB:{ik:[-22,0]},aF:[70,20],aB:[30,30],face:"shout"},base:"crouch"},jLP:{wind:{aF:[80,100]},strike:{aF:[96,0],face:"shout"},base:"jumpDown"},jMP:{wind:{aF:[40,110]},strike:{aF:[104,0],t:14,face:"shout"},base:"jumpDown"},jHP:{wind:{aF:[190,30],t:-14},strike:{aF:[72,0],aB:[60,40],t:22,face:"shout"},base:"jumpDown"},jLK:{wind:{lF:[50,90]},strike:{lF:[72,18],face:"shout"},base:"jumpUp"},jMK:{wind:{lF:[60,100]},strike:{lF:[92,0],t:-12,face:"shout"},base:"jumpDown"},jHK:{wind:{lF:[80,110],t:-8},strike:{lF:[58,-12],lB:[-8,92],t:-22,rot:14,aF:[80,40],aB:[40,30],face:"shout"},base:"jumpDown"},dashP:{wind:{t:30,aF:[40,90]},strike:{aF:[96,0],aB:[72,20],t:32,h:-10,hip:[22,22],lF:{ik:[62,0]},lB:{ik:[-52,0]},face:"shout"},base:"dash"},dashK:{wind:{lF:[60,100]},strike:{lF:[84,0],lB:[-30,95],t:-26,hip:[0,0],aF:[80,50],aB:[40,40],face:"shout"},base:"jumpDown"},throw:{wind:{aF:[92,40],aB:[82,55],t:16},strike:{aF:[160,20],aB:[150,30],t:-20,face:"shout"}}},im={projectile:{wind:{aB:[8,115],aF:[30,110],t:-12,hip:[-6,14]},strike:{aB:[98,0],aF:[82,10],t:22,hip:[16,16],lF:{ik:[52,0]},face:"shout"}},rush:{wind:{t:10,aF:[30,100],hip:[-6,22]},strike:{aF:[94,0],aB:[-30,40],t:38,h:-14,hip:[20,24],lF:[64,80],lB:[-42,60],face:"shout"}},rising:{wind:{hip:[0,46],t:24,aF:[20,120]},strike:{aF:[176,2],aB:[40,70],t:-14,h:-18,hip:[0,0],lF:[62,95],lB:[-2,22],face:"shout"}},spin:{wind:{t:4},strike:{lF:[90,0],lB:[-20,30],t:-10,aF:[100,20],aB:[80,20],face:"shout"}},counter:{wind:{aF:[80,92],aB:[52,112],t:-6,hip:[-8,22],face:"grit"},strike:{aF:[80,92],aB:[52,112],t:-6,hip:[-8,22],face:"grit"}},grab:{wind:{aF:[70,60],aB:[60,70],t:12},strike:{aF:[96,30],aB:[88,40],t:22,hip:[14,14],face:"shout"}},sky:{wind:{aF:[100,20],aB:[100,150],t:-4},strike:{aF:[160,0],aB:[140,30],t:-10,h:-16,face:"shout"}},backshot:{wind:{aF:[90,0],aB:[90,150],t:-10},strike:{aF:[92,0],aB:[80,20],t:-16,face:"shout"},base:"backstep"},teleport:{wind:{hip:[0,40],t:20,aF:[140,40],aB:[130,40]},strike:{hip:[0,10],aF:[170,10],aB:[160,10],face:"grit"}},slip:{wind:{hip:[0,30],t:30},strike:{hip:[0,36],t:44,aF:[-40,30],aB:[-30,30],lF:[70,80],lB:[-40,60],face:"grit"}},blast:{wind:{aF:[40,110],aB:[30,115],t:-16},strike:{aF:[96,-4],aB:[90,0],t:26,hip:[14,18],lF:{ik:[50,0]},face:"shout"}},barrier:{wind:{hip:[0,30],aF:[60,80]},strike:{aF:[178,-4],aB:[168,0],t:-10,h:-20,face:"shout"}},flipdive:{wind:{hip:[0,0],lF:[80,120],lB:[60,120],t:30},strike:{lF:[60,-10],lB:[-20,80],t:-24,rot:18,aF:[100,30],aB:[60,30],face:"shout"},base:"jumpUp"},dive:{wind:{lF:[80,120],lB:[50,110],t:20},strike:{lF:[52,-14],lB:[-14,90],t:-20,rot:26,aF:[110,30],aB:[70,20],face:"shout"},base:"jumpUp"},superRush:{wind:{hip:[-8,26],t:18,aF:[20,120],aB:[10,120],face:"grit"},strike:{aF:[96,0],aB:[-30,40],t:38,h:-14,hip:[20,24],lF:[64,80],lB:[-42,60],face:"shout"}},superRise:{wind:{hip:[0,48],t:26,aF:[10,120],aB:[10,120],face:"grit"},strike:{aF:[178,0],aB:[60,60],t:-16,h:-20,hip:[0,0],lF:[70,100],lB:[-4,20],face:"shout"}},superProj:{wind:{aB:[0,120],aF:[20,120],t:-16,hip:[-10,18],face:"grit"},strike:{aB:[96,0],aF:[90,0],t:26,hip:[20,20],lF:{ik:[60,0]},lB:{ik:[-50,0]},face:"shout"}},superBeam:{wind:{aF:[90,120],aB:[70,130],t:-8},strike:{aF:[92,110],aB:[76,128],t:-14,hip:[-10,18],face:"shout"}},superRain:{wind:{aF:[120,40],aB:[110,50],t:-6},strike:{aF:[178,0],aB:[166,0],t:-12,h:-20,face:"shout"}}},jn={akane:{LP:{wind:{aF:[80,30]},strike:{aF:[92,0],w:0,face:"shout"}},MP:{wind:{aF:[170,10],t:-6},strike:{aF:[96,-6],t:16,hip:[14,12],lF:{ik:[50,0]},face:"shout"}},HP:{wind:{aF:[205,0],aB:[190,10],t:-14},strike:{aF:[82,0],aB:[80,10],t:26,hip:[24,20],lF:{ik:[60,0]},face:"shout"}},cLP:{wind:{aF:[70,30]},strike:{aF:[88,0]},base:"crouch"},cMP:{wind:{aF:[120,20]},strike:{aF:[92,0],t:30},base:"crouch"},jHP:{wind:{aF:[200,0],t:-14},strike:{aF:[70,0],t:20,face:"shout"},base:"jumpDown"}},yukari:{MP:{wind:{aF:[40,60]},strike:{aF:[96,0],t:12,hip:[10,10],face:"shout"}},HP:{wind:{aF:[190,10],t:-12},strike:{aF:[86,0],t:22,hip:[16,16],lF:{ik:[54,0]},face:"shout"}}},sakura:{LP:{wind:{aF:[70,110]},strike:{aF:[92,10],face:"shout"}},MP:{wind:{aF:[150,30]},strike:{aF:[96,0],t:14,hip:[12,10],face:"shout"}}},miyu:{win:{aF:[90,125],aB:[72,132],t:-14,h:-16,hip:[0,6],face:"happy"},sp1:{wind:{aF:[90,125],aB:[72,132],t:-6},strike:{aF:[92,118],aB:[76,128],t:-12,hip:[-8,16],face:"shout"}},sp4:{wind:{aF:[90,125],aB:[72,132]},strike:{aF:[130,110],aB:[112,120],t:-24,h:-24,face:"shout"}},sp2:{wind:{aF:[90,125],aB:[72,132],t:-10},strike:{aF:[96,116],aB:[80,126],t:-18,hip:[-12,20],face:"scream"}}},reika:{sp1:{wind:{aF:[90,0],aB:[90,150],t:-2},strike:{aF:[92,0],aB:[60,30],t:4,face:"grit"}}},ruru:{win:{aF:[150,30],aB:[160,60],t:-8,hip:[6,6],lF:[50,80],lB:{ik:[-20,0]},face:"wink"}},hinata:{win:{aF:[175,0],aB:[40,120],t:-6,h:-8,hip:[0,4],lF:[40,70],lB:{ik:[-18,0]},face:"happy"}},karen:{win:{aF:[175,0],aB:[175,0],t:-6,h:-12,hip:[0,0],lF:{ik:[20,0]},lB:{ik:[-24,0]},face:"happy"}},reiko:{win:{aF:[40,125],aB:[44,120],t:-6,h:-8,hip:[0,2],lF:{ik:[20,0]},lB:{ik:[-26,0]},face:"grit"}}};jn.akane.win={aF:[60,10],aB:[55,30],t:18,h:16,hip:[0,8],lF:{ik:[14,0]},lB:{ik:[-16,0]},face:"normal"};jn.yukari.win={aF:[150,20],aB:[20,110],t:-4,h:-10,hip:[0,4],face:"happy"};jn.reika.win={aF:[90,0],aB:[20,30],t:0,h:4,hip:[0,2],lF:{ik:[16,0]},lB:{ik:[-22,0]},face:"normal"};jn.sakura.win={aF:[120,120],aB:[30,100],t:-2,h:6,hip:[0,4],lF:{ik:[10,0]},lB:{ik:[-14,0]},face:"happy"};function ss(n){return{...ad,...uc[n]||{}}}function Rr(n,e){return{...ad,...uc[e]||{},...n}}function sm(n,e,t){let i={...n.wind||{}},s={...n.strike||{}},r=s.hip||[0,10];if(e==="f"){if(t==="MP")return{base:n.base,wind:{...i,aF:[196,8],aB:[40,80],t:-10},strike:{...s,aF:[100,-8],aB:[30,60],t:28,h:-6,hip:[r[0]+16,r[1]+8],lF:{ik:[60,0]},face:"shout"}};if(t==="MK")return{base:n.base,wind:{...i,lF:[140,20],t:-16},strike:{...s,lF:[62,-4],lB:{ik:[-20,0]},t:6,hip:[r[0]+6,r[1]+4],face:"shout"}};s.t=(s.t??6)+12,s.hip=[r[0]+12,r[1]+4],i.t=(i.t??6)-6,s.lF&&s.lF.ik?s.lF={ik:[s.lF.ik[0]+14,0]}:s.lF||(s.lF={ik:[44,0]})}else s.t=(s.t??6)-4,s.hip=[r[0]-6,r[1]];return{base:n.base,wind:i,strike:s}}function od(n,e){let t=e.anim||e.id,i=(t[0]==="f"||t[0]==="b")&&Ps[t.slice(1)]?t[0]:null;if(i){let l=t.slice(1),c=jn[n]&&jn[n][l]||Ps[l],u=sm(c,i,l);return{wind:Rr(u.wind,u.base||"stand"),strike:Rr(u.strike,u.base||"stand"),base:u.base||"stand"}}let s=e.t||e.kind,a=jn[n]&&jn[n][t]||Ps[t]||im[s]||Ps.MP,o=a.base||Ps[t]&&Ps[t].base||"stand";return{wind:Rr(a.wind,o),strike:Rr(a.strike,o),base:o}}function Xa(n){return Rr(jn[n]&&jn[n].win||uc.win,"stand")}function ln(n,e,t){return n+(e-n)*t}function vt(n,e,t){return t<=0?n:t>=1?e:{hip:[ln(n.hip[0],e.hip[0],t),ln(n.hip[1],e.hip[1],t)],t:ln(n.t,e.t,t),h:ln(n.h,e.h,t),aF:[ln(n.aF[0],e.aF[0],t),ln(n.aF[1],e.aF[1],t)],aB:[ln(n.aB[0],e.aB[0],t),ln(n.aB[1],e.aB[1],t)],lF:[ln(n.lF[0],e.lF[0],t),ln(n.lF[1],e.lF[1],t)],lB:[ln(n.lB[0],e.lB[0],t),ln(n.lB[1],e.lB[1],t)],rot:ln(n.rot||0,e.rot||0,t),w:ln(n.w||0,e.w||0,t),face:t<.5?n.face:e.face}}var cn=n=>n<.5?2*n*n:1-Math.pow(-2*n+2,2)/2;var dc=new Map;function je(n,e){let t=n+":"+e+(oc(n)?":a":"");return dc.has(t)||dc.set(t,Cs(ss(e),Yn(n))),dc.get(t)}function Is(n,e){return Cs(e,Yn(n))}var fc=new Map;function ld(n,e){let t=n+":"+e.id+(oc(n)?":a":"");if(!fc.has(t)){let i=od(n,e);fc.set(t,{wind:Is(n,i.wind),strike:Is(n,i.strike),base:je(n,i.base)})}return fc.get(t)}function pc(n,e){let t=n.id,i=n.state,s=n.sf,r=(Math.sin(e*.07+n.side)+1)/2,a;switch(i){case"intro":a=vt(je(t,"intro"),je(t,"stand"),.15*r);break;case"stand":case"land":case"dashstop":if(n.guarding){a=je(t,"guard");break}a=vt(je(t,"stand"),je(t,"stand2"),r),i==="land"&&s<5&&(a=vt(je(t,"land"),a,s/5)),i==="dashstop"&&(a=vt(je(t,"land"),a,Math.min(1,s/8)));break;case"walk":{let o=e*.24*(n.walkDir||1),l={...ss("stand")};l.lF={ik:[22+Math.sin(o)*20,Math.max(0,Math.cos(o)*11)]},l.lB={ik:[-26-Math.sin(o)*20,Math.max(0,-Math.cos(o)*11)]},l.hip=[Math.sin(o)*2,12-Math.abs(Math.cos(o))*3],l.aB=[30-Math.sin(o)*12,92],n.guarding&&Object.assign(l,{aF:[112,128],aB:[100,135],face:"grit"}),a=Is(t,l);break}case"crouch":a=n.guarding?je(t,"cguard"):je(t,"crouch");break;case"prejump":a=je(t,"prejump");break;case"airtech":a={...je(t,"jumpUp"),rot:-Math.min(1,s/12)*360};break;case"jump":{if(n.guarding){a=je(t,"guard");break}let o=Math.max(0,Math.min(1,(6-n.vy)/14));a=vt(je(t,"jumpUp"),je(t,"jumpDown"),cn(o)),n.airJumps===0&&s<22&&(a={...a,rot:(s-5)/17*360*(s>5?1:0)});break}case"dash":{let o=e*.42,l={...ss("dash")};l.lF=[40+Math.sin(o)*38,60+Math.max(0,Math.cos(o))*50],l.lB=[-10-Math.sin(o)*38,60+Math.max(0,-Math.cos(o))*50],l.hip=[0,18+Math.abs(Math.sin(o))*6],l.aF=[-20-Math.sin(o)*30,70],l.aB=[60+Math.sin(o)*30,70],a=Is(t,l);break}case"backstep":a=je(t,"backstep");break;case"dodge":a=vt(je(t,"dodge"),je(t,"stand"),Math.max(0,(s-22)/8));break;case"hit":{let o=n.wasCrouch?je(t,"hitLow"):je(t,"hitHigh");a=vt(o,n.wasCrouch?je(t,"crouch"):je(t,"stand"),cn(Math.min(1,s/Math.max(1,n.stun))));break}case"guard":a=n.guardLow?je(t,"cguard"):je(t,"guard");break;case"air_hit":case"ko":case"thrown":{let o=je(t,i==="thrown"?"thrown":"airHit"),l=i==="thrown"?-s*10:Math.max(-120,Math.min(10,-28-(8-n.vy)*5));a={...o,rot:l};break}case"wallblow":a={...je(t,"wallblow"),rot:-12+Math.sin(s*.6)*4};break;case"locked":a={...je(t,"locked"),hip:[-8+Math.sin(s*1.7)*4,14]};break;case"down":a=je(t,"down");break;case"getup":a=vt(je(t,"down"),je(t,"getup"),cn(Math.min(1,s/12))),s>12&&(a=vt(je(t,"getup"),je(t,"stand"),cn((s-12)/10)));break;case"win":a=vt(je(t,"stand"),Is(t,Xa(t)),cn(Math.min(1,s/14)));break;case"lose":a=je(t,"lose");break;case"attack":a=rm(n,e);break;default:a=je(t,"stand")}return a}function rm(n,e){let t=n.mv;if(!t)return je(n.id,"stand");let i=t.def,s=ld(n.id,i.kind==="super"&&i.t==="superRush"&&t.lock?{...i,id:"superLock"+(t.pose||0),anim:["LP","MP","HK","HP"][t.pose||0],t:null,kind:"normal"}:i),r=i.s||1,a=i.a||4,o=i.r||10,l=t.f,c=i.t||i.kind,u;if(t.lock){let h=t.lf%6/6;return u=h<.4?vt(s.wind,s.strike,h/.4):s.strike,u}if(c==="autoAir"){let h=Math.min(2,t.done||0),d=r+h*11,p=ld(n.id,{id:"aa"+h,anim:["jMP","jHP","jHK"][h],kind:"normal"}),g=Math.max(0,Math.min(1,(l-(d-5))/5));return vt(p.wind,p.strike,cn(g))}if(c==="normal"&&i.hits>1&&l>=r&&l<r+a)return(l-r)%i.gap>=i.gap-1?vt(s.strike,s.wind,.35):s.strike;if(c==="spin"){let h=i.hits*i.gap;return l<r?u=vt(s.base,s.wind,cn(l/r)):l<r+h?u={...s.strike,rot:(l-r)*(360/Math.max(6,i.gap*1))*.5}:u=vt(s.strike,s.base,cn(Math.min(1,(l-r-h)/i.r))),u}if((c==="rising"||c==="superRise")&&i.hits>1&&l>=r)return{...s.strike,rot:(l-r)*40};if(c==="flipdive"&&l<r)return{...s.wind,rot:-l/r*300};if(c==="teleport")return l<r?vt(s.base,s.wind,cn(l/r)):s.strike;if(c==="counter"){if(t.countered){let h=Math.min(1,(l-t.countered)/6);return vt(s.strike,Is(n.id,{...ss("stand"),aF:[100,0],aB:[60,20],t:26,hip:[20,18],lF:{ik:[56,0]},face:"shout"}),h)}return s.strike}if((c==="throw"||c==="grab")&&t.grabbed){let h=t.gf||0;return vt(s.wind,s.strike,Math.min(1,h/18))}if(c==="superBeam"||c==="superRain")return l<r?vt(s.base,s.wind,cn(l/r)):l<r+70?s.strike:vt(s.strike,s.base,Math.min(1,(l-r-70)/20));if(["rising","superRise","flipdive","dive","backshot"].includes(c)&&l>=r)return s.strike;if(l<r){let h=r*.65;u=l<h?vt(s.base,s.wind,cn(l/h)):vt(s.wind,s.strike,cn((l-h)/(r-h)))}else l<r+a?u=s.strike:u=vt(s.strike,s.base,cn(Math.min(1,(l-r-a)/o)));return u}var Cr=class{constructor(){this.list=[],this.texts=[]}add(e){this.list.push({t:0,...e})}text(e){this.texts.push({t:0,...e})}update(){for(let e of this.list)e.t++,e.vx!==void 0&&(e.x+=e.vx,e.y+=e.vy,e.vy+=e.g||0,e.vx*=e.drag||1);this.list=this.list.filter(e=>e.t<e.life);for(let e of this.texts)e.t++;this.texts=this.texts.filter(e=>e.t<e.life)}fromEvent(e,t){switch(e.type){case"spark":{let i=e.lvl>=3;this.add({kind:"flash",x:e.x,y:e.y,life:i?10:7,r:i?70:42,lvl:e.lvl}),this.add({kind:"ring",x:e.x,y:e.y,life:14,r:i?90:55,color:e.lvl>=5?"#ffd040":"#ffffff"});let s=e.lvl>=4?16:i?11:7;for(let r=0;r<s;r++){let a=t()*Math.PI*2,o=6+t()*(i?14:9);this.add({kind:"line",x:e.x,y:e.y,vx:Math.cos(a)*o,vy:Math.sin(a)*o,drag:.86,life:12+t()*8,color:e.lvl>=4?"#ffe070":"#fff6d0",w:i?4:3})}if(e.lvl>=4)for(let r=0;r<6;r++)this.add({kind:"star",x:e.x,y:e.y,vx:(t()-.5)*16,vy:-t()*12,g:.6,life:26,r:8+t()*6,color:["#ffe14a","#ff8ac0","#8fd8ff"][r%3]});break}case"guard":this.add({kind:"guard",x:e.x,y:e.y,life:12,r:46});for(let i=0;i<5;i++){let s=t()*Math.PI*2;this.add({kind:"line",x:e.x,y:e.y,vx:Math.cos(s)*7,vy:Math.sin(s)*7,drag:.85,life:10,color:"#9fdcff",w:3})}break;case"clash":this.add({kind:"clash",x:e.x,y:e.y,life:e.big?22:14,r:e.big?120:70});for(let i=0;i<14;i++){let s=t()*Math.PI*2;this.add({kind:"line",x:e.x,y:e.y,vx:Math.cos(s)*15,vy:Math.sin(s)*15,drag:.85,life:16,color:"#ffffff",w:4})}break;case"counter":this.add({kind:"clash",x:e.x,y:e.y,life:18,r:100});break;case"dust":for(let i=0;i<(e.big?9:3);i++)this.add({kind:"dust",x:e.x+(t()-.5)*40,y:e.y+4,vx:(t()-.5)*(e.big?7:3),vy:-t()*(e.big?3:1.5),drag:.92,life:26+t()*10,r:(e.big?14:9)+t()*8});break;case"wall":this.add({kind:"crack",x:e.x,y:e.y,dir:e.dir,life:40});for(let i=0;i<18;i++){let s=(t()-.5)*Math.PI+(e.dir>0?Math.PI:0);this.add({kind:"line",x:e.x,y:e.y,vx:Math.cos(s)*16,vy:Math.sin(s)*16,drag:.86,life:18,color:"#ffffff",w:4})}for(let i=0;i<8;i++)this.add({kind:"debris",x:e.x,y:e.y,vx:-e.dir*(2+t()*6),vy:-t()*8,g:.6,life:40,r:4+t()*5,rot:t()*6});break;case"warp":this.add({kind:"warp",x:e.x,y:e.y,life:20});for(let i=0;i<10;i++)this.add({kind:"star",x:e.x+(t()-.5)*60,y:e.y+(t()-.5)*140,vx:(t()-.5)*4,vy:-t()*3,g:0,life:24,r:5+t()*4,color:"#ffe08a"});break;case"pop":this.add({kind:"ring",x:e.x,y:e.y,life:12,r:40,color:"#ffffff"});break;case"tech":this.add({kind:"ring",x:e.x,y:e.y,life:16,r:80,color:"#8fe0ff"}),this.add({kind:"ring",x:e.x,y:e.y,life:10,r:45,color:"#ffffff"});for(let i=0;i<8;i++)this.add({kind:"star",x:e.x,y:e.y,vx:(t()-.5)*12,vy:(t()-.5)*10,g:0,drag:.9,life:20,r:6+t()*4,color:i%2?"#8fe0ff":"#ffffff"});break}}draw(e,t,i,s){for(let r of this.list){let a=t(r.x),o=i(r.y),l=r.t/r.life;switch(e.save(),r.kind){case"flash":{e.globalCompositeOperation="lighter";let c=e.createRadialGradient(a,o,0,a,o,r.r*(.6+l*.6));c.addColorStop(0,`rgba(255,255,240,${1-l})`),c.addColorStop(.4,`rgba(255,${r.lvl>=4?200:230},120,${.8*(1-l)})`),c.addColorStop(1,"rgba(255,120,40,0)"),e.fillStyle=c,e.beginPath(),e.arc(a,o,r.r*(.6+l*.6),0,7),e.fill(),e.fillStyle=`rgba(255,255,255,${1-l})`,e.beginPath();let u=r.r*(1.1-l*.3),h=u*.18;for(let d=0;d<16;d++){let p=d*Math.PI/8+r.t*.05,g=d%2?h:u*(d%4===0?1:.6);e.lineTo(a+Math.cos(p)*g,o+Math.sin(p)*g)}e.fill();break}case"ring":e.strokeStyle=r.color,e.globalAlpha=1-l,e.lineWidth=6*(1-l)+1,e.beginPath(),e.arc(a,o,r.r*(.3+l),0,7),e.stroke();break;case"line":{e.globalCompositeOperation="lighter",e.strokeStyle=r.color,e.globalAlpha=1-l,e.lineWidth=r.w,e.lineCap="round",e.beginPath(),e.moveTo(a,o),e.lineTo(a-r.vx*2.2,o+r.vy*2.2),e.stroke();break}case"star":e.globalAlpha=1-l,wn(e,a,o,r.r,r.color,null);break;case"guard":{e.globalAlpha=1-l,e.strokeStyle="#8fd8ff",e.lineWidth=4,e.beginPath();for(let c=0;c<6;c++){let u=c*Math.PI/3+Math.PI/6;e.lineTo(a+Math.cos(u)*r.r*(.6+l*.4),o+Math.sin(u)*r.r*(.6+l*.4))}e.closePath(),e.stroke(),e.fillStyle="rgba(140,210,255,0.25)",e.fill();break}case"clash":{e.globalCompositeOperation="lighter",e.strokeStyle=`rgba(255,255,255,${1-l})`,e.lineWidth=10*(1-l),e.beginPath(),e.arc(a,o,r.r*l*1.4,0,7),e.stroke(),e.strokeStyle=`rgba(255,220,90,${1-l})`,e.lineWidth=5,e.beginPath(),e.arc(a,o,r.r*l,0,7),e.stroke();let c=e.createRadialGradient(a,o,0,a,o,r.r*.8);c.addColorStop(0,`rgba(255,255,255,${(1-l)*.9})`),c.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=c,e.beginPath(),e.arc(a,o,r.r*.8,0,7),e.fill();break}case"dust":e.globalAlpha=.5*(1-l),e.fillStyle="#e8e0d0",e.beginPath(),e.arc(a,o,r.r*(.6+l),0,7),e.fill();break;case"crack":{e.globalAlpha=1-l,e.strokeStyle="#fff",e.lineWidth=3;for(let c=0;c<9;c++){let u=-Math.PI/2+(c-4)*.33,h=60+c*37%50;e.beginPath(),e.moveTo(a,o),e.lineTo(a+Math.cos(u)*h*.5*-r.dir+Math.sin(c)*8,o+Math.sin(u)*h*.5),e.lineTo(a+Math.cos(u)*h*-r.dir*.3,o+Math.sin(u)*h),e.stroke()}break}case"debris":e.globalAlpha=1-l,e.fillStyle="#c8c0b0",e.translate(a,o),e.rotate(r.rot+r.t*.3),e.fillRect(-r.r/2,-r.r/2,r.r,r.r);break;case"warp":{e.globalCompositeOperation="lighter";let c=e.createRadialGradient(a,o,0,a,o,90);c.addColorStop(0,`rgba(200,170,255,${1-l})`),c.addColorStop(1,"rgba(120,80,255,0)"),e.fillStyle=c,e.beginPath(),e.ellipse(a,o,60*(1-l*.5),130*(1-l*.5),0,0,7),e.fill();break}}e.restore()}}};function cd(n,e,t,i,s){n.save(),n.translate(t,i);let r=e.facing||1;if(e.delay&&e.age<e.delay){n.globalAlpha=.5+.5*Math.sin(e.age*.5),n.strokeStyle="#ff5050",n.lineWidth=3,n.beginPath(),n.ellipse(0,600,40,10,0,0,7),n.restore();return}switch(e.kind){case"onigiri":{n.rotate(e.age*.25*r),n.beginPath(),n.moveTo(0,-20),n.quadraticCurveTo(20,10,16,14),n.quadraticCurveTo(0,20,-16,14),n.quadraticCurveTo(-20,10,0,-20),n.closePath(),n.fillStyle="#ffffff",n.fill(),n.strokeStyle="#2a1b2e",n.lineWidth=2.5,n.stroke(),n.fillStyle="#1e3a24",n.fillRect(-9,4,18,12),n.globalCompositeOperation="lighter",n.fillStyle="rgba(255,160,60,0.35)",n.beginPath(),n.arc(0,0,30,0,7),n.fill();break}case"note":{n.globalCompositeOperation="lighter";let a=n.createRadialGradient(0,0,0,0,0,40);a.addColorStop(0,"rgba(200,240,255,0.9)"),a.addColorStop(1,"rgba(80,180,255,0)"),n.fillStyle=a,n.beginPath(),n.arc(0,0,40,0,7),n.fill(),n.globalCompositeOperation="source-over";for(let o=0;o<3;o++)n.strokeStyle=`rgba(160,220,255,${.7-o*.2})`,n.lineWidth=3,n.beginPath(),n.arc(-r*18*o,0,24+o*6,-.9,.9),n.stroke();n.fillStyle="#ffffff",n.strokeStyle="#2a6aa8",n.lineWidth=2,n.beginPath(),n.ellipse(-4,8,8,6,-.4,0,7),n.fill(),n.stroke(),n.fillRect(2,-16,3,24),n.beginPath(),n.moveTo(5,-16),n.quadraticCurveTo(16,-10,12,0),n.stroke();break}case"wave":{n.globalCompositeOperation="lighter";for(let a=0;a<4;a++)n.fillStyle=`rgba(255,${120+a*30},${200-a*20},${.6-a*.12})`,n.beginPath(),n.ellipse(-r*a*14,4,30-a*4,18+Math.sin(e.age*.6+a)*6,0,Math.PI,0),n.fill();for(let a=0;a<3;a++)wn(n,-r*20+Math.sin(e.age*.3+a*2)*20,-12-a*8,5,"#fff2a0",null);break}case"slash":{n.scale(r,1),n.globalCompositeOperation="lighter";for(let a=0;a<3;a++)n.strokeStyle=`rgba(${200+a*20},230,255,${.9-a*.25})`,n.lineWidth=10-a*3,n.beginPath(),n.arc(-30-a*10,0,50,-1.1,1.1),n.stroke();break}case"star":case"meteor":{n.globalCompositeOperation="lighter";let a=Math.atan2(-e.vy,e.vx);n.rotate(-a+Math.PI);let o=n.createLinearGradient(0,0,120,0);o.addColorStop(0,e.kind==="meteor"?"rgba(255,170,80,0.9)":"rgba(255,240,160,0.9)"),o.addColorStop(1,"rgba(255,120,200,0)"),n.fillStyle=o,n.beginPath(),n.moveTo(0,-16),n.lineTo(130,0),n.lineTo(0,16),n.fill(),n.globalCompositeOperation="source-over",n.rotate(e.age*.3),wn(n,0,0,e.kind==="meteor"?26:22,e.kind==="meteor"?"#ffb040":"#ffe14a");break}case"water":{n.globalCompositeOperation="lighter";for(let a=0;a<6;a++)n.fillStyle=`rgba(90,${180+a*10},255,${.55-a*.07})`,n.beginPath(),n.ellipse(-r*a*12,Math.sin(e.age*.5+a)*4,26-a*2,18-a*1.5,0,0,7),n.fill();n.fillStyle="rgba(255,255,255,0.8)";for(let a=0;a<4;a++)n.beginPath(),n.arc(-r*(a*15+e.age*3%15),Math.sin(a*3)*14,3,0,7),n.fill();break}case"arrow":case"skyarrow":{let a=Math.atan2(-e.vy,e.vx);n.rotate(-a),n.globalCompositeOperation="lighter",n.fillStyle="rgba(255,90,90,0.35)",n.fillRect(-60,-5,50,10),n.globalCompositeOperation="source-over",n.strokeStyle="#2a1b2e",n.lineWidth=4,n.beginPath(),n.moveTo(-34,0),n.lineTo(30,0),n.stroke(),n.strokeStyle="#d8c090",n.lineWidth=2.4,n.stroke(),n.fillStyle="#c8ccd6",n.beginPath(),n.moveTo(40,0),n.lineTo(28,-6),n.lineTo(28,6),n.fill(),n.fillStyle="#ffffff",n.beginPath(),n.moveTo(-34,0),n.lineTo(-24,-8),n.lineTo(-18,0),n.lineTo(-24,8),n.fill();break}case"bigonigiri":{n.globalCompositeOperation="lighter";let a=n.createRadialGradient(0,0,10,0,0,110);a.addColorStop(0,"rgba(255,200,90,0.6)"),a.addColorStop(1,"rgba(255,90,30,0)"),n.fillStyle=a,n.beginPath(),n.arc(0,0,110,0,7),n.fill(),n.globalCompositeOperation="source-over",n.rotate(e.age*.12*r),n.scale(3.4,3.4),n.beginPath(),n.moveTo(0,-20),n.quadraticCurveTo(20,10,16,14),n.quadraticCurveTo(0,20,-16,14),n.quadraticCurveTo(-20,10,0,-20),n.closePath(),n.fillStyle="#ffffff",n.fill(),n.strokeStyle="#2a1b2e",n.lineWidth=1.4,n.stroke(),n.fillStyle="#1e3a24",n.fillRect(-9,4,18,12),n.fillStyle="#e04050",n.beginPath(),n.arc(0,-2,3.5,0,7),n.fill();break}case"tidal":{n.globalCompositeOperation="lighter";for(let a=0;a<7;a++){let o=100-a*30,l=120-a*8;n.fillStyle=`rgba(${60+a*10},${150+a*12},255,${.5-a*.05})`,n.beginPath(),n.ellipse(-r*20+Math.sin(e.age*.3+a)*10,o,l,26,0,0,7),n.fill()}n.fillStyle="rgba(255,255,255,0.85)";for(let a=0;a<12;a++){let o=e.age*.2+a;n.beginPath(),n.arc(r*(40+a*23%90),-100+a*37%200,4+a%3*2,0,7),n.fill()}break}case"bigarrow":{n.scale(r,1),n.globalCompositeOperation="lighter";let a=n.createLinearGradient(-260,0,120,0);a.addColorStop(0,"rgba(160,120,255,0)"),a.addColorStop(1,"rgba(220,200,255,0.8)"),n.fillStyle=a,n.beginPath(),n.moveTo(-260,-14),n.lineTo(110,-6),n.lineTo(110,6),n.lineTo(-260,14),n.fill(),n.globalCompositeOperation="source-over",n.strokeStyle="#2a1b2e",n.lineWidth=9,n.beginPath(),n.moveTo(-90,0),n.lineTo(80,0),n.stroke(),n.strokeStyle="#f0e0b0",n.lineWidth=5,n.stroke(),n.fillStyle="#e8ecf4",n.beginPath(),n.moveTo(118,0),n.lineTo(78,-16),n.lineTo(78,16),n.fill(),n.fillStyle="#ffffff",n.beginPath(),n.moveTo(-90,0),n.lineTo(-64,-20),n.lineTo(-50,0),n.lineTo(-64,20),n.fill(),n.globalCompositeOperation="lighter",n.strokeStyle="rgba(200,180,255,0.6)",n.lineWidth=3,n.beginPath(),n.ellipse(-20,0,60+Math.sin(e.age)*6,26,0,0,7),n.stroke();break}case"petal":{for(let a=0;a<9;a++){let o=e.age*.15+a*.7,l=18+a%3*10;hc(n,Math.cos(o)*l,Math.sin(o)*l*.8,6,a%2?"#ffb8cc":"#ff8aae")}n.globalCompositeOperation="lighter",n.fillStyle="rgba(255,150,190,0.25)",n.beginPath(),n.arc(0,0,38,0,7),n.fill();break}case"shock":{n.globalCompositeOperation="lighter";for(let a=0;a<3;a++)n.strokeStyle=`rgba(255,${80+a*50},${80+a*40},${.9-a*.25})`,n.lineWidth=6-a,n.beginPath(),n.ellipse(-r*a*12,0,14+a*4,30+a*6+Math.sin(e.age)*4,0,0,7),n.stroke();break}}n.restore()}var ki={hinata:{name:"\u8ABF\u7406\u5BA4",img:"bg_hinata",sky:["#ffe9c8","#ffd09a"],wall:"#f6e2c4",floor:["#c98f5a","#8a5a34"],light:"rgba(255,220,160,0.25)"},miyu:{name:"\u97F3\u697D\u5BA4",img:"bg_miyu",sky:["#e8f0ff","#c8d8f8"],wall:"#e4e8f4",floor:["#b07a4a","#704424"],light:"rgba(200,220,255,0.2)"},ruru:{name:"\u4F53\u80B2\u9928\u30B9\u30C6\u30FC\u30B8",img:"bg_ruru",sky:["#2a1640","#5a2a70"],wall:"#3a2050",floor:["#c89058","#7a4e2c"],light:"rgba(255,120,220,0.2)"},akane:{name:"\u5263\u9053\u5834",img:"bg_akane",sky:["#f4ead4","#e0cfa8"],wall:"#efe4c8",floor:["#d8b07a","#9a7244"],light:"rgba(255,240,200,0.2)"},yukari:{name:"\u5C4B\u4E0A\u306E\u591C\u7A7A",img:"bg_yukari",sky:["#0a0e2a","#2a2a6a"],wall:"#1a1e44",floor:["#5a6070","#2e3240"],light:"rgba(150,140,255,0.15)"},karen:{name:"\u5C4B\u5185\u30D7\u30FC\u30EB",img:"bg_karen",sky:["#d8f4ff","#9ad8f0"],wall:"#cfefff",floor:["#bfe2ee","#7ab4c8"],light:"rgba(160,230,255,0.25)"},reika:{name:"\u5F13\u9053\u5834",img:"bg_reika",sky:["#bfe0b0","#90c080"],wall:"#e8dcc0",floor:["#c8a676","#86683e"],light:"rgba(220,255,200,0.15)"},sakura:{name:"\u685C\u306E\u4E2D\u5EAD",img:"bg_sakura",sky:["#ffe4ee","#ffc8da"],wall:"#f4d8e2",floor:["#c8b8a8","#8a7868"],light:"rgba(255,200,220,0.2)"},reiko:{name:"\u5915\u66AE\u308C\u306E\u30B0\u30E9\u30A6\u30F3\u30C9",img:"bg_reiko",sky:["#ff9a5a","#7a3a6a"],wall:"#c8704a",floor:["#c88a5a","#7a4a2a"],light:"rgba(255,150,80,0.25)"}},qa=class{constructor(e){this.a=e,this.fx=new Cr,this.hair=[null,null],this.ghosts=[[],[]],this.t=0,this.combo=[null,null],this.ann=[],this.blink=[0,0],this.seed=12345}rnd(){return this.seed=this.seed*1103515245+12345&2147483647,this.seed/2147483647}reset(e){this.hair=e.f.map(t=>new ns(t.id)),this.ghosts=[[],[]],this.fx=new Cr,this.combo=[null,null],this.ann=[]}events(e,t){for(let i of t)this.fx.fromEvent(i,()=>this.rnd()),i.type==="announce"&&this.ann.push({key:i.key,t:-(i.delay||0),soft:i.soft}),i.type==="text"&&this.fx.text({key:i.key,life:50,who:i.who}),i.type==="dmg"&&i.hits>=2&&(this.combo[1-i.who]={hits:i.hits,total:i.total,t:0})}draw(e,t,i={}){this.t++;let s=t.camX(),r=t.shake>0?(this.rnd()-.5)*t.shake*1.6:0,a=t.shake>0?(this.rnd()-.5)*t.shake:0,o=1280/2-s+r,l=f=>f+o,c=f=>600-f+a,u=Math.abs(t.f[0].x-t.f[1].x),h=Math.max(t.f[0].y,t.f[1].y),d=Math.max(1.08,Math.min(1.3,1250/(u+560)-h/1400));this.zoom=this.zoom?this.zoom+(d-this.zoom)*.06:d;let p=(t.f[0].x+t.f[1].x)/2+o,g=560;e.save(),e.translate(p,g),e.scale(this.zoom,this.zoom),e.translate(-p,-g),this.drawStage(e,t,s,r,a);for(let f of t.f){let S=Math.max(.35,1-f.y/400);e.fillStyle=`rgba(0,0,0,${.28*S})`,e.beginPath(),e.ellipse(l(f.x),604+a,54*S,11*S,0,0,7),e.fill()}for(let f of t.f){let S=this.ghosts[f.side];f.afterimage>0&&this.t%2===0&&S.push({pose:pc(f,this.t),x:f.x,y:f.y,facing:f.facing,life:10});for(let w of S)w.life--;this.ghosts[f.side]=S.filter(w=>w.life>0)}let _=[...t.f].sort((f,S)=>(f.state==="attack"?1:0)-(S.state==="attack"?1:0)||f.side-S.side);for(let f of _){let S=this.a.view3d!==!1&&this.a.r3d&&this.a.r3d.has(f.id)?this.a.r3d:null;for(let v of this.ghosts[f.side]){if(S){let A=this.snap&&this.snap[f.side];A&&A.cv&&(e.save(),e.globalAlpha=.22*v.life/10,e.drawImage(A.cv,A.x+l(v.x)-A.fx,A.y+c(v.y)-A.fy,A.w,A.w),e.restore());continue}is(e,{id:f.id,pose:v.pose,x:l(v.x),y:c(v.y),facing:v.facing,k:f.ch.height/240,alpha:.18*v.life/10,face:v.pose.face})}if(f.state==="attack"&&f.mv&&f.mv.hidden)continue;let w=pc(f,this.t);this.blink[f.side]=(this.t+f.side*97)%190<7;let b=1;f.state==="dodge"&&f.sf<=20&&(b=.55+.2*Math.sin(this.t*.8)),f.state==="getup"&&this.t%4<2&&(b=.6),f.blaze>0&&this.drawAura(e,l(f.x),c(f.y),f),this.drawMoveFx(e,f,l,c,!1);let M=(f.state==="hit"||f.state==="air_hit"||f.state==="wallblow"||f.state==="locked")&&f.sf<3;M&&(e.filter="brightness(2.2) saturate(0.4)");let T=f.state==="attack"&&f.mv&&f.mv.def.prop&&f.mv.f>=(f.mv.def.s||0)-6?f.mv.def.prop:null,R={id:f.id,pose:w,x:l(f.x),y:c(f.y),facing:f.facing,k:f.ch.height/240,alpha:b,hair:this.hair[f.side],face:w.face,blink:this.blink[f.side],vx:Math.abs(f.vx),vy:f.vy,prop:T,time:this.t};if(S){let v=lc(w,Yn(f.id));e.save(),e.globalAlpha=b;let A=S.draw(e,R,v,{zoom:this.zoom});e.restore(),A&&(cc(e,R,v,A.handF,"under"),cc(e,R,v,A.handF,"over")),this.snap||(this.snap=[]);let C=this.snap[f.side]||(this.snap[f.side]={cv:document.createElement("canvas")}),D=4.6*100*R.k;C.cv.width!==256&&(C.cv.width=256,C.cv.height=256);let z=C.cv.getContext("2d");z.clearRect(0,0,256,256),z.drawImage(S.canvas,0,0,256,256),Object.assign(C,{x:R.x-D/2,y:R.y-(1.25+2.3)*100*R.k,w:D,fx:R.x,fy:R.y})}else is(e,R);M&&(e.filter="none"),this.drawMoveFx(e,f,l,c,!0),f.guardFlash>0&&(e.save(),e.globalCompositeOperation="lighter",e.fillStyle=`rgba(120,200,255,${f.guardFlash/12})`,e.beginPath(),e.ellipse(l(f.x),c(f.y+f.ch.height*.55),50,f.ch.height*.55,0,0,7),e.fill(),e.restore())}for(let f of t.proj){if(f.delay&&f.age<f.delay){e.save(),e.globalAlpha=.4+.4*Math.sin(f.age*.6),e.strokeStyle="#ff4060",e.lineWidth=3,e.beginPath(),e.ellipse(l(f.x),600+a,46,10,0,0,7),e.stroke(),e.restore();continue}cd(e,f,l(f.x),c(f.y),this.t)}if(t.f.some(f=>f.state==="attack"&&f.mv&&f.mv.def.t==="superBeam"&&f.mv.f>=f.mv.def.s&&f.mv.f<f.mv.def.s+60)){let f=t.f.find(S=>S.state==="attack"&&S.mv&&S.mv.def.t==="superBeam");this.drawBeam(e,l(f.x),c(f.y+150),f.facing,f.mv.f-f.mv.def.s,f.id)}this.fx.update(),this.fx.draw(e,l,c,this.t);let m=ki[i.stage]||ki.hinata;e.fillStyle=m.light,e.fillRect(0,0,1280,720),e.restore(),t.flash>0&&(e.fillStyle=`rgba(255,255,255,${t.flash/14})`,e.fillRect(0,0,1280,720)),i.noHud||this.drawHud(e,t,i),t.cut&&this.drawCut(e,t.cut),this.drawAnn(e,t)}drawMoveFx(e,t,i,s,r){if(t.state!=="attack"||!t.mv)return;let a=t.mv.def,o=t.mv.f,l=a.t||a.kind,c=t.facing,u=t.ch.height,h=i(t.x),d=s(t.y),p=t.ch.color;e.save();let g=a.s||0,_=a.a||4;if(r&&(l==="normal"||l==="dash")&&a.box&&o>=g-1&&o<g+_+3){let m=Math.min(1,(o-g+1)/Math.max(2,_)),f=/K$/.test(a.id),S=s(t.y+a.box.y),w=a.box.x+a.box.w*.45,b=f?-.2:-1,M=f?.9:.5;e.globalCompositeOperation="lighter",e.lineCap="round";for(let T=0;T<3;T++){e.strokeStyle=T===0?`rgba(255,255,255,${.75*(1-m*.6)})`:T===1?"rgba(255,230,160,0.45)":"rgba(255,140,200,0.3)",e.lineWidth=(a.lvl||2)*(5-T*1.3),e.beginPath();let R=b+(M-b)*Math.max(0,m-.6),v=b+(M-b)*m;c>0?e.arc(h,S,w-T*6,R,v):e.arc(h,S,w-T*6,Math.PI-v,Math.PI-R),e.stroke()}}if(!r&&(l==="rush"||l==="superRush"||l==="slip")&&o>=g&&o<g+_){e.globalCompositeOperation="lighter";for(let m=0;m<9;m++){let f=d-u*(.1+m*.09)+Math.sin(m*7+o)*6,S=80+m*37%60,w=e.createLinearGradient(h,0,h-c*S*1.6,0);w.addColorStop(0,"rgba(255,255,255,0.5)"),w.addColorStop(1,"rgba(255,255,255,0)"),e.strokeStyle=w,e.lineWidth=3,e.beginPath(),e.moveTo(h-c*20,f),e.lineTo(h-c*(20+S*1.6),f),e.stroke()}}if(!r&&(l==="rising"||l==="superRise"||l==="flipdive"||l==="dive")&&o>=g){e.globalCompositeOperation="lighter";let m=e.createLinearGradient(0,d-u*1.4,0,d);m.addColorStop(0,"rgba(255,255,255,0)"),m.addColorStop(.6,hd(p,.35)),m.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=m,e.beginPath(),e.ellipse(h,d-u*.6,46,u*.8,0,0,7),e.fill()}if(r&&l==="spin"&&o>=g&&o<g+a.hits*a.gap){e.globalCompositeOperation="lighter",e.lineWidth=6;for(let m=0;m<3;m++)e.strokeStyle=hd(p,.5-m*.12),e.beginPath(),e.ellipse(h+c*20,d-u*.45,90-m*14,26+m*6,0,o*.6+m,o*.6+m+4.2),e.stroke()}if(r&&l==="blast"&&o>=g&&o<g+_+8){let m=(o-g)/(_+8);e.globalCompositeOperation="lighter";for(let f=0;f<4;f++)e.strokeStyle=`rgba(160,220,255,${.8*(1-m)})`,e.lineWidth=8-f*1.5,e.beginPath(),e.ellipse(h+c*(60+m*120+f*18),d-u*.62,20+f*6,70+m*40,0,0,7),e.stroke()}if(r&&l==="barrier"&&o>=g&&o<g+_){e.globalCompositeOperation="lighter";for(let m=0;m<6;m++){let f=h+c*(30+m*22),S=e.createLinearGradient(0,d-u*1.5,0,d-u*.5);S.addColorStop(0,"rgba(120,255,200,0)"),S.addColorStop(.5,`hsla(${150+m*30},100%,70%,0.45)`),S.addColorStop(1,"rgba(160,120,255,0)"),e.fillStyle=S,e.fillRect(f-10+Math.sin(o*.3+m)*6,d-u*1.5,20,u)}}!r&&l==="counter"&&o>=g&&o<g+_&&!t.mv.countered&&(e.globalCompositeOperation="lighter",e.strokeStyle=`rgba(255,255,255,${.35+.25*Math.sin(o*.8)})`,e.lineWidth=4,e.beginPath(),e.ellipse(h,d-u*.5,70,u*.62,0,0,7),e.stroke()),e.restore()}drawStage(e,t,i,s,r){let a=this.stageKey,o=ki[a]||ki.hinata,l=this.a.img["bg_"+a];if(l){let p=720/l.height*1.06,g=l.width*p,_=720,m=_>0?(i-1280/2)/_:.5,f=-(g-1280)*m+s*.5;e.drawImage(l,f,-720*.06+r*.5,g,l.height*p);let S=e.createLinearGradient(0,570,0,720);S.addColorStop(0,"rgba(0,0,0,0)"),S.addColorStop(1,"rgba(0,0,0,0.25)"),e.fillStyle=S,e.fillRect(0,570,1280,720);return}let c=e.createLinearGradient(0,0,0,600);c.addColorStop(0,o.sky[0]),c.addColorStop(1,o.sky[1]),e.fillStyle=c,e.fillRect(0,0,1280,602);let u=-(i-1280/2)*.5+s;e.fillStyle=o.wall;for(let p=-2;p<12;p++){let g=p*220+u%220;e.globalAlpha=.35,e.fillRect(g,120,150,260),e.globalAlpha=1}let h=e.createLinearGradient(0,600,0,720);h.addColorStop(0,o.floor[0]),h.addColorStop(1,o.floor[1]),e.fillStyle=h,e.fillRect(0,600,1280,120),e.strokeStyle="rgba(0,0,0,0.15)",e.lineWidth=2;let d=-(i-1280/2)+s;for(let p=-10;p<30;p++){let g=p*120+d%120;e.beginPath(),e.moveTo(g,600),e.lineTo(g+(g-1280/2)*.8,720),e.stroke()}}drawAura(e,t,i,s){e.save(),e.globalCompositeOperation="lighter";let r=s.ch.height;for(let a=0;a<6;a++){let o=this.t*.2+a,l=t+Math.sin(o*1.3)*34,c=i-r*(.2+(this.t*.03+a/6)%1*.9),u=e.createRadialGradient(l,c,0,l,c,46);u.addColorStop(0,"rgba(255,200,80,0.35)"),u.addColorStop(1,"rgba(255,60,40,0)"),e.fillStyle=u,e.beginPath(),e.arc(l,c,46,0,7),e.fill()}e.restore()}drawBeam(e,t,i,s,r,a){e.save(),e.globalCompositeOperation="lighter";let o=1400,l=Math.min(1,r/6)*(r>50?(60-r)/10:1);for(let c=0;c<4;c++){let u=120-c*26+Math.sin(r*.8+c)*8,h=e.createLinearGradient(0,i-u/2,0,i+u/2);h.addColorStop(0,"rgba(80,160,255,0)"),h.addColorStop(.5,`rgba(${180+c*20},${220+c*8},255,${.5*l})`),h.addColorStop(1,"rgba(80,160,255,0)"),e.fillStyle=h,e.fillRect(s>0?t+40:t-40-o,i-u/2,o,u)}if(a==="reiko"){e.globalCompositeOperation="source-over";for(let c=0;c<7;c++){let u=t+s*(60+(r*26+c*200)%o);e.strokeStyle=`rgba(255,${60+c*20},70,${.8*l})`,e.lineWidth=6,e.beginPath(),e.ellipse(u,i,18,70,0,0,7),e.stroke()}}else for(let c=0;c<8;c++){let u=t+s*(60+(r*22+c*170)%o);e.fillStyle=`rgba(255,255,255,${.8*l})`,e.font="bold 40px sans-serif",e.fillText("\u266A",u,i+Math.sin(c+r*.3)*40)}e.restore()}drawHud(e,t,i){let[s,r]=t.f;e.save();for(let o of t.f)this.drawBar(e,o,o.side===0?70:1210,o.side===0?1:-1,t);e.fillStyle="rgba(20,10,30,0.75)",mc(e,1280/2-46,22,92,62,14),e.fill(),e.strokeStyle="#ffd060",e.lineWidth=3,e.stroke();let a=t.opts.time>0&&!t.opts.training?Math.ceil(t.timer/60):"\u221E";e.font='900 46px "Dela Gothic One", "M PLUS Rounded 1c", sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillStyle=a!=="\u221E"&&a<=10?"#ff6060":"#ffffff",e.fillText(String(a),1280/2,55);for(let o of t.f)this.drawGauge(e,o);for(let o=0;o<2;o++){let l=this.combo[o];if(!l)continue;l.t++;let c=t.f[1-o];if(c.comboHits===0&&l.t>60){this.combo[o]=null;continue}c.comboHits===0&&(l.fade=(l.fade||0)+1);let u=o===0?70:1210,h=1-Math.min(1,(l.fade||0)/40);e.globalAlpha=h,e.textAlign=o===0?"left":"right",e.font='900 54px "Dela Gothic One", sans-serif',e.lineWidth=7,e.strokeStyle="#2a0a20";let d=Math.max(0,8-l.t)*1.5;e.strokeText(l.hits+" HITS",u,210-d),e.fillStyle="#ffd040",e.fillText(l.hits+" HITS",u,210-d),e.font='800 26px "M PLUS Rounded 1c", sans-serif',e.lineWidth=5,e.strokeText(l.total+" \u30C0\u30E1\u30FC\u30B8",u,252),e.fillStyle="#ffffff",e.fillText(l.total+" \u30C0\u30E1\u30FC\u30B8",u,252),e.globalAlpha=1}for(let o of this.fx.texts){let l=o.t/o.life;e.globalAlpha=1-l,e.textAlign="center",e.font='900 48px "Dela Gothic One", sans-serif',e.lineWidth=8,e.strokeStyle="#1a0a20";let c=o.key==="clash"?"\u76F8\u6BBA\uFF01":o.key==="tech"?"\u53D7\u3051\u8EAB\uFF01":o.key==="airguard"?"\u7A7A\u4E2D\u30AC\u30FC\u30C9":"COUNTER!",u=300-l*30,h=o.key==="clash"?1280/2:o.who===0?260:1020;e.strokeText(c,h,u),e.fillStyle=o.key==="clash"?"#ffffff":o.key==="tech"||o.key==="airguard"?"#8fe0ff":"#ff6a8a",e.fillText(c,h,u),e.globalAlpha=1}e.restore()}drawBar(e,t,i,s,r){let c=s>0?i+40:i-40-470,u=this.a.img["icon_"+t.id];e.save(),e.beginPath(),e.arc(i,54,40,0,7),e.fillStyle=t.ch.color,e.fill(),e.lineWidth=4,e.strokeStyle="#ffffff",e.stroke(),u&&(e.save(),e.clip(),s<0&&(e.translate(i*2,0),e.scale(-1,1)),e.drawImage(u,i-40,14,80,80),e.restore()),e.restore(),e.fillStyle="rgba(20,10,30,0.8)",mc(e,c-4,28,478,34,8),e.fill();let h=t.hp/t.ch.hp,d=t.redHp/t.ch.hp,p=(f,S)=>{let w=470*Math.max(0,f);e.fillStyle=S,s>0?e.fillRect(c+470-w,32,w,26):e.fillRect(c,32,w,26)};p(d,"#ff3a3a");let g=e.createLinearGradient(0,32,0,58);g.addColorStop(0,h<.3?"#ffd060":"#7affb0"),g.addColorStop(1,h<.3?"#ff9a20":"#20c070"),p(h,g),e.strokeStyle="#ffffff",e.lineWidth=2,e.strokeRect(c,32,470,26),e.font='800 22px "M PLUS Rounded 1c", sans-serif',e.textBaseline="top",e.textAlign=s>0?"left":"right",e.lineWidth=5,e.strokeStyle="#1a0a20";let _=s>0?c:c+470,m=t.ch.name+"\uFF08"+t.ch.club+"\uFF09";e.strokeText(m,_,64),e.fillStyle="#ffffff",e.fillText(m,_,64);for(let f=0;f<(r.opts.training?0:r.opts.rounds);f++){let S=s>0?c+470-14-f*28:c+14+f*28;e.beginPath(),e.arc(S,78,9,0,7),e.fillStyle=f<t.wins?"#ffd040":"rgba(255,255,255,0.25)",e.fill(),e.strokeStyle="#1a0a20",e.lineWidth=2,e.stroke()}}drawGauge(e,t){let r=674,a=t.side===0?1:-1,o=a>0?40:910;e.fillStyle="rgba(20,10,30,0.8)",mc(e,o-4,r-4,338,26,6),e.fill();let c=330*(t.gauge/120),u=t.blaze>0,h=e.createLinearGradient(o,0,o+330,0);if(u){let _=this.t*.2;h.addColorStop(0,`hsl(${_*40%360},100%,60%)`),h.addColorStop(1,`hsl(${(_*40+120)%360},100%,60%)`)}else h.addColorStop(0,"#3a8cff"),h.addColorStop(.83,"#7ad0ff"),h.addColorStop(.84,"#ffd040"),h.addColorStop(1,"#ff7040");e.fillStyle=h,a>0?e.fillRect(o,r,c,18):e.fillRect(o+330-c,r,c,18);let d=a>0?o+330*100/120:o+330-330*100/120;e.fillStyle="#ffffff",e.fillRect(d-1,r-3,2,24),e.strokeStyle="rgba(255,255,255,0.8)",e.lineWidth=1.5,e.strokeRect(o,r,330,18),e.font='900 26px "Dela Gothic One", sans-serif',e.textAlign=a>0?"left":"right",e.textBaseline="bottom";let p=u?"BLAZE!!":Math.floor(t.gauge)+"%";e.lineWidth=5,e.strokeStyle="#1a0a20";let g=a>0?o:o+330;e.strokeText(p,g,r-4),e.fillStyle=u?"#ffb040":t.gauge>=100?"#ffe060":"#ffffff",e.fillText(p,g,r-4)}drawCut(e,t){let i=1-t.t/48;e.save(),e.fillStyle=`rgba(10,0,20,${.55*Math.min(1,i*4)})`,e.fillRect(0,0,1280,720);let s=t.who===0,r=210,a=220;e.save(),e.beginPath(),e.moveTo(0,r+30),e.lineTo(1280,r-30),e.lineTo(1280,r+a-30),e.lineTo(0,r+a+30),e.closePath();let o=an[t.id].color,l=e.createLinearGradient(0,0,1280,0);l.addColorStop(0,o),l.addColorStop(1,"#1a0a30"),e.fillStyle=l,e.globalAlpha=Math.min(1,i*5),e.fill(),e.clip(),e.strokeStyle="rgba(255,255,255,0.35)",e.lineWidth=3;for(let d=0;d<18;d++){let p=r-40+d*17,g=(d*137+t.t*60)%1680-200;e.beginPath(),e.moveTo(s?1280-g:g,p),e.lineTo(s?1280-g-160:g+160,p),e.stroke()}let c=this.a.img["cut_"+t.id]||this.a.img["por_"+t.id];if(c){let d=Math.min(1,i*3.2),p=560/c.height,g=c.width*p,_=s?-g+(g*.9+40)*d-40:1280-(g*.9+40)*d;e.drawImage(c,_,r-120,g,c.height*p)}e.restore(),e.globalAlpha=Math.min(1,i*4),e.font='900 68px "Dela Gothic One", sans-serif',e.textAlign=s?"right":"left",e.textBaseline="middle";let u=s?1230:50;e.lineWidth=12,e.strokeStyle="#1a0a20",e.strokeText(t.name,u,r+a/2);let h=e.createLinearGradient(0,r+70,0,r+150);h.addColorStop(0,"#ffffff"),h.addColorStop(1,"#ffd040"),e.fillStyle=h,e.fillText(t.name,u,r+a/2),e.restore()}drawAnn(e,t){let i={round1:"ROUND 1",round2:"ROUND 2",round3:"FINAL ROUND",fight:"FIGHT!",ko:"K.O.",perfect:"PERFECT!",timeup:"TIME UP",double:"DOUBLE K.O.",counter:null};for(let s of this.ann)s.t++;this.ann=this.ann.filter(s=>s.t<70);for(let s of this.ann){let r=i[s.key];if(!r||s.t<0)continue;let a=s.t/70,o=s.t<8?1.6-s.t*.075:1;e.save(),e.translate(1280/2,s.key==="perfect"?420:330),e.scale(o,o),e.globalAlpha=a>.8?(1-a)*5:1,e.font='900 110px "Dela Gothic One", sans-serif',e.textAlign="center",e.textBaseline="middle",e.lineWidth=16,e.strokeStyle="#1a0a20",e.strokeText(r,0,0);let l=e.createLinearGradient(0,-50,0,50);l.addColorStop(0,"#fff6c0"),l.addColorStop(.5,s.key==="ko"?"#ff5050":"#ffc030"),l.addColorStop(1,"#ff7020"),e.fillStyle=l,e.fillText(r,0,0),e.restore()}}};function hd(n,e){let t=parseInt(n.slice(1),16);return`rgba(${t>>16},${t>>8&255},${t&255},${e})`}function mc(n,e,t,i,s,r){n.beginPath(),n.moveTo(e+r,t),n.arcTo(e+i,t,e+i,t+s,r),n.arcTo(e+i,t+s,e,t+s,r),n.arcTo(e,t+s,e,t,r),n.arcTo(e,t,e+i,t,r),n.closePath()}var Ka={hinata:{top:{base:"#3d4a8e",shade:"#283163",collar:"#3d4a8e"},bottom:{base:"#3d4a8e",shade:"#283163"},legs:{base:"#1c1f3a"},apron:{base:"#f39a5c",shade:"#d9733a"}},miyu:{bottom:{base:"#3c4874",shade:"#2b3458"}},ruru:{top:{base:"#141418",shade:"#08080c"},bottom:{base:"#f2b2cb",shade:"#d98aa9"},top2:{hoodie:"#eef0f7"}},akane:{top:{base:"#f7f7f9",shade:"#d4d7e2"},bottom:{base:"#cdd3e0",shade:"#9ea7bd"}},yukari:{},reika:{top:{base:"#f7f6f9",shade:"#d6d6e0"},bottom:{base:"#2c2f3e",shade:"#171922"}},sakura:{bottom:{base:"#f5b8cb",shade:"#e290aa"}},reiko:{top:{base:"#4a4c5e",shade:"#24252f"},bottom:{base:"#4a4c5e",shade:"#24252f"},shoes:"#18181e"}},am={hinata:["top","apron","bottom","legwear"],miyu:["top","bottom","legwear"],ruru:["top","hoodie","bottom"],akane:["top"],yukari:["top","bottom"],reika:[],sakura:["legwear"],reiko:["bottom"]};function ud(n,e){let t={...n};for(let i in e)t[i]=e[i]&&typeof e[i]=="object"&&!Array.isArray(e[i])?ud(n[i]||{},e[i]):e[i];return t}function dd(n,e){let t=[],s=document.createElement("canvas").getContext("2d");for(let r in e){let a=n["head_"+r],o=n["tex_"+r];if(!a)continue;let l=e[r],c=ud(Li[r],Ka[r]||{});Ka[r]&&Ka[r].top2&&(c.top={...c.top,...Ka[r].top2});let u={};o&&(l.tex||[]).forEach((h,d)=>{if(!(am[r]||[]).includes(h))return;let p=document.createElement("canvas");p.width=64,p.height=64;let g=p.getContext("2d");g.filter="blur(1.2px)",g.drawImage(o,d*64,0,64,64,-4,-4,72,72),g.filter="none";let _=l.colors&&l.colors[h]||"#888888";g.globalAlpha=.62,g.fillStyle=_,g.fillRect(0,0,64,64),g.globalAlpha=1;let m=document.createElement("canvas");m.width=128,m.height=128;let f=m.getContext("2d");for(let[w,b]of[[1,1],[-1,1],[1,-1],[-1,-1]])f.save(),f.translate(w>0?0:128,b>0?0:128),f.scale(w,b),f.drawImage(p,0,0),f.restore();let S=s.createPattern(m,"repeat");S&&S.setTransform&&S.setTransform(new DOMMatrix([.36,0,0,.36,0,0])),S&&(u[h]=S)}),c={...c,pat:u},sd(r,{img:a,meta:l,pat:u,style:c}),t.push(r)}return t}var gc={hinata:{title:"\u3072\u306A\u305F\u98DF\u5802\u3001\u958B\u5E97\u3057\u307E\u3059\uFF01",pages:[{bg:"reiko",who:"reiko",text:["\u5915\u66AE\u308C\u306E\u30B0\u30E9\u30A6\u30F3\u30C9\u3002\u3072\u3056\u3092\u3064\u3044\u305F\u9DF9\u5BAE\u5148\u751F\u304C\u3001\u3086\u3063\u304F\u308A\u3068\u7ACB\u3061\u4E0A\u304C\u3063\u305F\u3002","\u9DF9\u5BAE\u5148\u751F\u300C\u2026\u2026\u5408\u683C\u3088\u3001\u5929\u91CE\u3055\u3093\u3002\u6599\u7406\u90E8\u306E\u4E88\u7B97\u3001\u78BA\u304B\u306B\u9810\u3051\u308B\u308F\u300D","\u3072\u306A\u305F\u300C\u307B\u3001\u307B\u3093\u3068\u3067\u3059\u304B!? \u3084\u3063\u305F\u3041\u2026\u2026\uFF01\u300D","\u5F35\u308A\u3064\u3081\u3066\u3044\u305F\u6C17\u6301\u3061\u304C\u3086\u308B\u3093\u3067\u3001\u3072\u306A\u305F\u306E\u76EE\u304B\u3089\u5927\u3064\u3076\u306E\u6D99\u304C\u3053\u307C\u308C\u305F\u3002","\u9DF9\u5BAE\u5148\u751F\u300C\u6CE3\u304F\u306E\u306F\u65E9\u3044\u308F\u3002\u6587\u5316\u796D\u307E\u3067\u3001\u3042\u3068\u4E09\u9031\u9593\u3088\u300D"]},{bg:"hinata",text:["\u5EC3\u90E8\u5BF8\u524D\u3060\u3063\u305F\u6599\u7406\u90E8\u306E\u90E8\u54E1\u306F\u3001\u3072\u306A\u305F\u3092\u5165\u308C\u3066\u305F\u3063\u305F\u306E\u4E09\u4EBA\u3002","\u65B0\u3057\u3044\u30AA\u30FC\u30D6\u30F3\u3068\u5927\u304D\u306A\u934B\u304C\u5C4A\u3044\u305F\u8ABF\u7406\u5BA4\u3067\u3001\u4E09\u4EBA\u306F\u6BCE\u65E5\u30E1\u30CB\u30E5\u30FC\u4F1A\u8B70\u3092\u958B\u3044\u305F\u3002","\u3072\u306A\u305F\u300C\u30AA\u30E0\u30E9\u30A4\u30B9\u3067\u3057\u3087\u3001\u30AB\u30EC\u30FC\u3067\u3057\u3087\u3001\u305D\u308C\u304B\u3089\u2026\u2026\u305C\u3093\u3076\u4F5C\u308A\u305F\u3044\uFF01\u300D","\u90E8\u54E1\u300C\u3072\u306A\u305F\u3061\u3083\u3093\u3001\u305D\u308C\u4E09\u4EBA\u3058\u3083\u7121\u7406\u3060\u3063\u3066\u3070\u301C\uFF01\u300D","\u7B11\u3044\u58F0\u3068\u304A\u3044\u3057\u3044\u5302\u3044\u304C\u3001\u653E\u8AB2\u5F8C\u306E\u5ECA\u4E0B\u307E\u3067\u3042\u3075\u308C\u3066\u3044\u305F\u3002"]},{bg:"hinata",who:"karen",text:["\u6587\u5316\u796D\u306E\u524D\u65E5\u3002\u8A66\u4F5C\u306E\u30AB\u30EC\u30FC\u3092\u3053\u304C\u3057\u3066\u3057\u307E\u3044\u3001\u3072\u306A\u305F\u306F\u934B\u306E\u524D\u3067\u7ACB\u3061\u3064\u304F\u3057\u305F\u3002","\u305D\u3053\u3078\u3001\u5302\u3044\u306B\u3064\u3089\u308C\u3066\u5263\u9053\u90E8\u306E\u3042\u304B\u306D\u3068\u6C34\u6CF3\u90E8\u306E\u30AB\u30EC\u30F3\u304C\u9854\u3092\u51FA\u3057\u305F\u3002","\u30AB\u30EC\u30F3\u300C\u306A\u306B\u306A\u306B\uFF1F \u624B\u304C\u8DB3\u308A\u306A\u3044\u306A\u3089\u3001\u3046\u3061\u306E\u90E8\u54E1\u8CB8\u3059\u3088\uFF01\u300D","\u3042\u304B\u306D\u300C\u2026\u2026\u5473\u898B\u306A\u3089\u3001\u4EFB\u305B\u3066\u307B\u3057\u3044\u3002\u7518\u53E3\u306A\u3089\u3001\u306A\u304A\u3044\u3044\u300D","\u6226\u3063\u305F\u30E9\u30A4\u30D0\u30EB\u305F\u3061\u304C\u3001\u30A8\u30D7\u30ED\u30F3\u3092\u3064\u3051\u3066\u6B21\u3005\u3068\u8ABF\u7406\u5BA4\u306B\u3084\u3063\u3066\u6765\u305F\u3002"]},{bg:"sakura",who:"sakura",text:["\u6587\u5316\u796D\u5F53\u65E5\u3002\u4E2D\u5EAD\u306B\u958B\u3044\u305F\u300C\u3072\u306A\u305F\u98DF\u5802\u300D\u306E\u524D\u306B\u306F\u3001\u671D\u304B\u3089\u9577\u3044\u884C\u5217\u304C\u3067\u304D\u305F\u3002","\u751F\u5F92\u4F1A\u9577\u306E\u3055\u304F\u3089\u304C\u6574\u7406\u5238\u3092\u914D\u308A\u3001\u307F\u3086\u305F\u3061\u5439\u594F\u697D\u90E8\u304C\u97F3\u697D\u3067\u884C\u5217\u3092\u76DB\u308A\u4E0A\u3052\u308B\u3002","\u3072\u306A\u305F\u300C\u3044\u3089\u3063\u3057\u3083\u3044\u307E\u305B\u30FC\uFF01 \u5927\u76DB\u308A\u3001\u307E\u3060\u307E\u3060\u3042\u308A\u307E\u3059\u3088\uFF01\u300D","\u7528\u610F\u3057\u305F\u4E94\u767E\u98DF\u306F\u3001\u304A\u663C\u3059\u304E\u306B\u306F\u3059\u3079\u3066\u58F2\u308A\u5207\u308C\u305F\u3002"]},{bg:"hinata",who:"reiko",text:["\u7247\u3065\u3051\u306E\u7D42\u308F\u3063\u305F\u8ABF\u7406\u5BA4\u306B\u3001\u3053\u3063\u305D\u308A\u9DF9\u5BAE\u5148\u751F\u304C\u5165\u3063\u3066\u304D\u305F\u3002","\u9DF9\u5BAE\u5148\u751F\u300C\u2026\u2026\u5929\u91CE\u3055\u3093\u3002\u30AA\u30E0\u30E9\u30A4\u30B9\u3001\u307E\u3060\u6B8B\u3063\u3066\u3044\u306A\u3044\u304B\u3057\u3089\u300D","\u3072\u306A\u305F\u300C\u5148\u751F\u3001\u3055\u3063\u304D\u3082\u304A\u304B\u308F\u308A\u3057\u3066\u307E\u3057\u305F\u3088\u306D\uFF1F\u300D","\u9DF9\u5BAE\u5148\u751F\u300C\u306A\u3063\u2026\u2026\u3044\u3001\u3044\u3044\u304B\u3089\u3002\u898B\u56DE\u308A\u3088\u3001\u898B\u56DE\u308A\u300D","\u3072\u306A\u305F\u300C\u3048\u3078\u3078\u3002\u6765\u5E74\u3082\u3001\u307F\u3093\u306A\u3067\u304A\u306A\u304B\u3044\u3063\u3071\u3044\u306B\u3057\u3088\u3046\u306D\uFF01\u300D"]}]},miyu:{title:"\u308F\u305F\u3057\u306E\u97F3\u3001\u5C4A\u304D\u307E\u3057\u305F\u304B",pages:[{bg:"reiko",who:"reiko",text:["\u6700\u5F8C\u306E\u4E00\u6483\u306E\u3042\u3068\u3001\u30B0\u30E9\u30A6\u30F3\u30C9\u306B\u306F\u9759\u3051\u3055\u304C\u623B\u3063\u305F\u3002","\u9DF9\u5BAE\u5148\u751F\u300C\u5C0F\u3055\u306A\u4F53\u3067\u3001\u3088\u304F\u6700\u5F8C\u307E\u3067\u7ACB\u3063\u3066\u3044\u305F\u308F\u306D\u3002\u767D\u77F3\u3055\u3093\u300D","\u307F\u3086\u300C\u3042\u3001\u3042\u306E\u2026\u2026\u697D\u5668\u3001\u672C\u5F53\u306B\u8CB7\u3063\u3066\u3082\u3089\u3048\u308B\u3093\u3067\u3059\u304B\u2026\u2026\uFF1F\u300D","\u9DF9\u5BAE\u5148\u751F\u300C\u7D04\u675F\u306F\u5B88\u308B\u308F\u3002\u305D\u306E\u304B\u308F\u308A\u3001\u3044\u3044\u97F3\u3092\u805E\u304B\u305B\u306A\u3055\u3044\u300D","\u307F\u3086\u306F\u3001\u30C8\u30E9\u30F3\u30DA\u30C3\u30C8\u3092\u304E\u3085\u3063\u3068\u80F8\u306B\u62B1\u304D\u3057\u3081\u305F\u3002"]},{bg:"miyu",text:["\u97F3\u697D\u5BA4\u306B\u3001\u65B0\u54C1\u306E\u697D\u5668\u304C\u305A\u3089\u308A\u3068\u4E26\u3093\u3060\u3002","\u5148\u8F29\u305F\u3061\u306F\u6B53\u58F0\u3092\u4E0A\u3052\u3066\u3001\u3074\u304B\u3074\u304B\u306E\u30DB\u30EB\u30F3\u3084\u30AF\u30E9\u30EA\u30CD\u30C3\u30C8\u3092\u624B\u306B\u53D6\u3063\u305F\u3002","\u90E8\u9577\u300C\u307F\u3086\u3061\u3083\u3093\u3001\u3042\u308A\u304C\u3068\u3046\uFF01 \u5B9A\u671F\u6F14\u594F\u4F1A\u306E\u30BD\u30ED\u3001\u3042\u306A\u305F\u306B\u4EFB\u305B\u305F\u3044\u306E\u300D","\u307F\u3086\u300C\u3048\u2026\u2026\u3048\u3001\u3048\u3047\u3047!? \u3080\u3001\u7121\u7406\u3067\u3059\u3001\u308F\u305F\u3057\u306A\u3093\u3066\u2026\u2026\uFF01\u300D","\u4EBA\u524D\u306B\u7ACB\u3064\u3068\u3001\u58F0\u3082\u8DB3\u3082\u3075\u308B\u3048\u3066\u3057\u307E\u3046\u3002\u305D\u308C\u304C\u3001\u307F\u3086\u306E\u3044\u3061\u3070\u3093\u306E\u5F31\u70B9\u3060\u3063\u305F\u3002"]},{bg:"yukari",who:"yukari",text:["\u7DF4\u7FD2\u3092\u7D42\u3048\u305F\u591C\u3001\u307F\u3086\u306F\u4E00\u4EBA\u3067\u5C4B\u4E0A\u306B\u4E0A\u304C\u3063\u305F\u3002","\u305D\u3053\u3067\u306F\u5929\u6587\u90E8\u306E\u3086\u304B\u308A\u304C\u3001\u671B\u9060\u93E1\u3067\u661F\u3092\u898B\u4E0A\u3052\u3066\u3044\u305F\u3002","\u3086\u304B\u308A\u300C\u3042\u3089\u301C\u3001\u307F\u3086\u3061\u3083\u3093\u3002\u305F\u3081\u606F\u3067\u3001\u661F\u304C\u304F\u3082\u3063\u3061\u3083\u3044\u307E\u3059\u3088\u301C\u300D","\u307F\u3086\u300C\u2026\u2026\u307F\u3093\u306A\u306E\u524D\u3060\u3068\u3001\u97F3\u304C\u3061\u3062\u3053\u307E\u3063\u3061\u3083\u3046\u3093\u3067\u3059\u300D","\u3086\u304B\u308A\u300C\u3058\u3083\u3042\u3001\u661F\u306B\u5411\u304B\u3063\u3066\u5439\u3044\u3066\u307F\u3066\u3002\u661F\u306F\u3001\u9060\u304F\u3066\u3082\u805E\u3044\u3066\u304F\u308C\u307E\u3059\u304B\u3089\u301C\u300D"]},{bg:"ruru",who:"ruru",text:["\u5B9A\u671F\u6F14\u594F\u4F1A\u306E\u65E5\u3002\u4F53\u80B2\u9928\u306F\u3001\u751F\u5F92\u3084\u5BB6\u65CF\u3067\u3044\u3063\u3071\u3044\u3060\u3063\u305F\u3002","\u5BA2\u5E2D\u306B\u306F\u3001\u6226\u3063\u305F\u30E9\u30A4\u30D0\u30EB\u305F\u3061\u306E\u9854\u3082\u3042\u308B\u3002\u308B\u308B\u304C\u5927\u304D\u304F\u624B\u3092\u3075\u3063\u3066\u3044\u305F\u3002","\u307F\u3086\u306F\u76EE\u3092\u9589\u3058\u3066\u3001\u3042\u306E\u591C\u306E\u661F\u7A7A\u3092\u601D\u3044\u6D6E\u304B\u3079\u305F\u3002","\u4E00\u97F3\u76EE\u3002\u307E\u3063\u3059\u3050\u306A\u97F3\u304C\u3001\u4F53\u80B2\u9928\u306E\u5929\u4E95\u307E\u3067\u9AD8\u304F\u4F38\u3073\u3066\u3044\u3063\u305F\u3002"]},{bg:"miyu",who:"reiko",text:["\u9CF4\u308A\u3084\u307E\u306A\u3044\u62CD\u624B\u306E\u4E2D\u3001\u307F\u3086\u306F\u4F55\u5EA6\u3082\u4F55\u5EA6\u3082\u304A\u3058\u304E\u3092\u3057\u305F\u3002","\u7D42\u6F14\u5F8C\u3001\u5ECA\u4E0B\u3067\u5F85\u3063\u3066\u3044\u305F\u306E\u306F\u9DF9\u5BAE\u5148\u751F\u3060\u3063\u305F\u3002","\u9DF9\u5BAE\u5148\u751F\u300C\u3044\u3044\u97F3\u3060\u3063\u305F\u308F\u3002\u4E88\u7B97\u3092\u51FA\u3057\u305F\u304B\u3044\u304C\u3042\u3063\u305F\u308F\u306D\u300D","\u307F\u3086\u300C\u2026\u2026\u5C4A\u304D\u307E\u3057\u305F\u304B\uFF1F \u308F\u305F\u3057\u306E\u97F3\u300D","\u9DF9\u5BAE\u5148\u751F\u300C\u3048\u3048\u3002\u3044\u3061\u3070\u3093\u5F8C\u308D\u306E\u5E2D\u307E\u3067\u3001\u3061\u3083\u3093\u3068\u306D\u300D"]}]},ruru:{title:"\u5168\u56FD\u306E\u30B9\u30C6\u30FC\u30B8\u3067\u3001\u3044\u3061\u3070\u3093\u5149\u308B",pages:[{bg:"reiko",who:"reiko",text:["\u308B\u308B\u300C\u3063\u3057\u3083\u30FC\uFF01 \u52DD\u3063\u305F\u52DD\u3063\u305F\uFF01 \u5148\u751F\u3001\u9060\u5F81\u8CBB\u30B2\u30C3\u30C8\u3067\u3044\u3044\u3063\u3057\u3087\uFF1F\u300D","\u9DF9\u5BAE\u5148\u751F\u300C\u2026\u2026\u3048\u3048\u3002\u3042\u306A\u305F\u306E\u30B9\u30C6\u30C3\u30D7\u3001\u6700\u5F8C\u307E\u3067\u8AAD\u3081\u306A\u304B\u3063\u305F\u308F\u300D","\u308B\u308B\u300C\u3067\u3057\u3087\u30FC\uFF1F \u308B\u308B\u3001\u672C\u756A\u306B\u5F37\u3044\u30BF\u30A4\u30D7\u306A\u3093\u3067\uFF01\u300D","\u9DF9\u5BAE\u5148\u751F\u300C\u306A\u3089\u3001\u5168\u56FD\u3067\u3082\u305D\u308C\u3092\u898B\u305B\u3066\u304D\u306A\u3055\u3044\u300D","\u308B\u308B\u306F\u30AD\u30E3\u30C3\u30D7\u3092\u304B\u3076\u308A\u76F4\u3057\u3066\u3001\u30D4\u30FC\u30B9\u30B5\u30A4\u30F3\u3092\u6C7A\u3081\u305F\u3002"]},{bg:"ruru",text:["\u30C0\u30F3\u30B9\u90E8\u306F\u4E94\u4EBA\u3002\u5168\u56FD\u5927\u4F1A\u307E\u3067\u3001\u6B8B\u308A\u306F\u4E00\u304B\u6708\u3002","\u65B0\u3057\u3044\u632F\u308A\u4ED8\u3051\u306E\u771F\u3093\u4E2D\u306B\u306F\u3001\u7A7A\u4E2D\u3067\u4E09\u56DE\u8EE2\u3059\u308B\u5927\u6280\u3092\u5165\u308C\u305F\u3002","\u90E8\u54E1\u300C\u308B\u308B\u3001\u3053\u308C\u672C\u5F53\u306B\u3067\u304D\u308B\u306E\uFF1F \u307E\u3060\u4E00\u56DE\u3082\u6210\u529F\u3057\u3066\u306A\u3044\u3058\u3083\u3093\uFF01\u300D","\u308B\u308B\u300C\u3067\u304D\u308B\u304B\u3058\u3083\u306A\u304F\u3066\u3001\u3084\u308B\u306E\uFF01 \u5168\u56FD\u3060\u3088\u3001\u5168\u56FD\uFF01\u300D","\u4F53\u80B2\u9928\u306E\u93E1\u306E\u524D\u3067\u3001\u4E94\u4EBA\u306F\u6BCE\u6669\u304A\u305D\u304F\u307E\u3067\u8E0A\u308A\u3064\u3065\u3051\u305F\u3002"]},{bg:"karen",who:"karen",text:["\u5927\u4F1A\u306E\u4E00\u9031\u9593\u524D\u3002\u7740\u5730\u306B\u5931\u6557\u3057\u305F\u308B\u308B\u306F\u3001\u8DB3\u9996\u3092\u3072\u306D\u3063\u3066\u3057\u307E\u3063\u305F\u3002","\u308B\u308B\u300C\u2026\u2026\u3046\u305D\u3067\u3057\u3087\u3002\u308B\u308B\u306E\u305B\u3044\u3067\u3001\u307F\u3093\u306A\u306E\u5168\u56FD\u304C\u2026\u2026\u300D","\u6D99\u3050\u3080\u308B\u308B\u306E\u80A9\u3092\u3001\u6C34\u6CF3\u90E8\u306E\u30AB\u30EC\u30F3\u304C\u307D\u3093\u3068\u305F\u305F\u3044\u305F\u3002","\u30AB\u30EC\u30F3\u300C\u6C34\u306E\u4E2D\u306A\u3089\u3001\u8DB3\u306B\u8CA0\u62C5\u3092\u304B\u3051\u305A\u306B\u7DF4\u7FD2\u3067\u304D\u308B\u3088\u3002\u3046\u3061\u306E\u30D7\u30FC\u30EB\u3001\u4F7F\u3044\u306A\uFF01\u300D","\u6B21\u306E\u65E5\u304B\u3089\u3001\u308B\u308B\u306F\u30AB\u30EC\u30F3\u3068\u4E00\u7DD2\u306B\u3001\u30D7\u30FC\u30EB\u3067\u30EA\u30CF\u30D3\u30EA\u3092\u59CB\u3081\u305F\u3002"]},{bg:"ruru",text:["\u5168\u56FD\u5927\u4F1A\u3001\u6C7A\u52DD\u306E\u30B9\u30C6\u30FC\u30B8\u3002\u5BA2\u5E2D\u306E\u660E\u304B\u308A\u304C\u6D88\u3048\u3001\u97F3\u697D\u304C\u6D41\u308C\u51FA\u3059\u3002","\u8DB3\u9996\u306B\u306F\u3001\u4EF2\u9593\u305F\u3061\u304C\u5BC4\u305B\u66F8\u304D\u3092\u3057\u3066\u304F\u308C\u305F\u30C6\u30FC\u30D4\u30F3\u30B0\u3002","\u66F2\u306E\u30B5\u30D3\u3002\u308B\u308B\u306F\u9AD8\u304F\u8DF3\u3073\u3001\u7A7A\u4E2D\u3067\u2015\u2015\u4E09\u56DE\u8EE2\u3002","\u7740\u5730\u3068\u540C\u6642\u306B\u3001\u4F1A\u5834\u304C\u5272\u308C\u308B\u3088\u3046\u306A\u6B53\u58F0\u306B\u5305\u307E\u308C\u305F\u3002"]},{bg:"sakura",who:"sakura",text:["\u7D50\u679C\u306F\u3001\u5168\u56FD\u4E09\u4F4D\u3002\u8868\u5F70\u53F0\u306E\u4E0A\u3067\u3001\u4E94\u4EBA\u306F\u62B1\u304D\u5408\u3063\u3066\u6CE3\u3044\u305F\u3002","\u308B\u308B\u300C\u4E00\u4F4D\u3058\u3083\u306A\u304B\u3063\u305F\u3051\u3069\u3055\u2026\u2026\u4ECA\u307E\u3067\u3067\u3001\u3044\u3061\u3070\u3093\u697D\u3057\u304B\u3063\u305F\uFF01\u300D","\u5B66\u6821\u306B\u5E30\u308B\u3068\u3001\u6821\u9580\u3067\u751F\u5F92\u4F1A\u9577\u306E\u3055\u304F\u3089\u304C\u6A2A\u65AD\u5E55\u3092\u5E83\u3052\u3066\u5F85\u3063\u3066\u3044\u305F\u3002","\u3055\u304F\u3089\u300C\u304A\u304B\u3048\u308A\u306A\u3055\u3044\u3002\u3059\u3066\u304D\u306A\u30B9\u30C6\u30FC\u30B8\u3067\u3057\u305F\u308F\u300D","\u308B\u308B\u300C\u3053\u3053\u307E\u3067\u6765\u308C\u305F\u306E\u3001\u307F\u3093\u306A\u306E\u304A\u304B\u3052\u3060\u3088\uFF01 \u3042\u308A\u304C\u3068\uFF01\u300D"]}]},akane:{title:"\u4E00\u672C\u306E\u91CD\u3055",pages:[{bg:"reiko",who:"reiko",text:["\u3042\u304B\u306D\u300C\u2026\u2026\u4E00\u672C\u3002\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3057\u305F\u300D","\u9DF9\u5BAE\u5148\u751F\u300C\u793C\u5100\u3082\u592A\u5200\u7B4B\u3082\u307E\u3063\u3059\u3050\u306D\u3001\u6850\u751F\u3055\u3093\u3002\u5263\u9053\u90E8\u306E\u4E88\u7B97\u306F\u9810\u3051\u308B\u308F\u300D","\u3042\u304B\u306D\u306F\u6DF1\u304F\u982D\u3092\u4E0B\u3052\u305F\u3002\u624B\u306E\u3072\u3089\u306B\u306F\u3001\u307E\u3060\u7AF9\u5200\u306E\u91CD\u3055\u304C\u6B8B\u3063\u3066\u3044\u308B\u3002","\u9DF9\u5BAE\u5148\u751F\u300C\u3068\u3053\u308D\u3067\u2026\u2026\u8A66\u5408\u306E\u524D\u3001\u3053\u3063\u305D\u308A\u5927\u798F\u3092\u98DF\u3079\u3066\u3044\u305F\u308F\u306D\uFF1F\u300D","\u3042\u304B\u306D\u300C\u306A\u3063\u2026\u2026!? \u307F\u3001\u898B\u3066\u3044\u305F\u306E\u3067\u3059\u304B\u2026\u2026\uFF01\u300D"]},{bg:"akane",text:["\u5263\u9053\u5834\u306B\u3001\u65B0\u3057\u3044\u9632\u5177\u304C\u5C4A\u3044\u305F\u3002\u7D3A\u8272\u306E\u80F4\u304C\u3001\u307E\u3076\u3057\u304F\u5149\u3063\u3066\u3044\u308B\u3002","\u5F8C\u8F29\u300C\u5148\u8F29\u3001\u3053\u308C\u3067\u5168\u56FD\u306B\u884C\u3051\u307E\u3059\u306D\uFF01\u300D","\u3042\u304B\u306D\u300C\u6D6E\u304B\u308C\u308B\u306A\u3002\u9053\u5177\u304C\u826F\u304F\u306A\u3063\u3066\u3082\u3001\u5F37\u304F\u306A\u308B\u306E\u306F\u81EA\u5206\u306E\u7A3D\u53E4\u3060\u3051\u3060\u300D","\u305D\u3046\u8A00\u3044\u306A\u304C\u3089\u3001\u3042\u304B\u306D\u306F\u65B0\u3057\u3044\u80F4\u3092\u4F55\u5EA6\u3082\u305D\u3063\u3068\u6307\u3067\u306A\u3067\u3066\u3044\u305F\u3002"]},{bg:"akane",who:"reika",text:["\u5168\u56FD\u5927\u4F1A\u306E\u524D\u306E\u6669\u3002\u3042\u304B\u306D\u306F\u4E00\u4EBA\u3001\u9053\u5834\u3067\u7D20\u632F\u308A\u3092\u7D9A\u3051\u3066\u3044\u305F\u3002","\u8FF7\u3044\u304C\u3042\u3063\u305F\u3002\u52DD\u3061\u305F\u3044\u6C17\u6301\u3061\u304C\u5F37\u3044\u307B\u3069\u3001\u7AF9\u5200\u304C\u3076\u308C\u308B\u3002","\u305D\u3053\u3078\u3001\u5F13\u9053\u90E8\u306E\u30EC\u30A4\u30AB\u304C\u9759\u304B\u306B\u5165\u3063\u3066\u304D\u305F\u3002","\u30EC\u30A4\u30AB\u300C\u2026\u2026\u7684\u3092\u898B\u3059\u304E\u308B\u3068\u3001\u77E2\u306F\u5916\u308C\u308B\u308F\u3002\u898B\u308B\u306E\u306F\u3001\u81EA\u5206\u306E\u5FC3\u3088\u300D","\u305D\u308C\u3060\u3051\u8A00\u3063\u3066\u30EC\u30A4\u30AB\u306F\u53BB\u3063\u305F\u3002\u3042\u304B\u306D\u306F\u76EE\u3092\u9589\u3058\u3001\u3082\u3046\u4E00\u5EA6\u7AF9\u5200\u3092\u304B\u307E\u3048\u305F\u3002"]},{bg:"akane",text:["\u5168\u56FD\u5927\u4F1A\u3001\u6C7A\u52DD\u3002\u76F8\u624B\u306F\u3001\u53BB\u5E74\u306E\u512A\u52DD\u8005\u3060\u3063\u305F\u3002","\u6642\u9593\u3044\u3063\u3071\u3044\u306E\u6253\u3061\u5408\u3044\u3002\u4F1A\u5834\u306E\u3060\u308C\u3082\u304C\u3001\u606F\u3092\u306E\u3093\u3067\u898B\u5B88\u3063\u3066\u3044\u308B\u3002","\u3042\u304B\u306D\uFF08\u5FC3\u3092\u3001\u307E\u3063\u3059\u3050\u306B\u2015\u2015\uFF09","\u76F8\u624B\u306E\u7AF9\u5200\u304C\u308F\u305A\u304B\u306B\u4E0A\u304C\u3063\u305F\u3001\u305D\u306E\u4E00\u77AC\u3002","\u3042\u304B\u306D\u300C\u9762\u30C3\uFF01\uFF01\u300D\u2015\u2015\u4E09\u672C\u306E\u65D7\u304C\u3001\u3044\u3063\u305B\u3044\u306B\u4E0A\u304C\u3063\u305F\u3002"]},{bg:"hinata",who:"hinata",text:["\u512A\u52DD\u65D7\u3092\u6301\u3063\u3066\u5E30\u3063\u3066\u304D\u305F\u3042\u304B\u306D\u3092\u3001\u6599\u7406\u90E8\u306E\u3072\u306A\u305F\u304C\u5F85\u3063\u3066\u3044\u305F\u3002","\u3072\u306A\u305F\u300C\u512A\u52DD\u304A\u3081\u3067\u3068\u3046\uFF01 \u304A\u795D\u3044\u306B\u3001\u7279\u88FD\u3042\u3093\u307F\u3064\u4F5C\u3063\u305F\u3088\uFF01\u300D","\u3042\u304B\u306D\u300C\u2026\u2026\u304B\u305F\u3058\u3051\u306A\u3044\u3002\u3067\u306F\u3001\u4E00\u676F\u3060\u3051\u300D","\u6C17\u304C\u3064\u304F\u3068\u3001\u3042\u304B\u306D\u306E\u524D\u306B\u306F\u7A7A\u306B\u306A\u3063\u305F\u5668\u304C\u4E09\u3064\u4E26\u3093\u3067\u3044\u305F\u3002","\u3042\u304B\u306D\u300C\u2026\u2026\u3053\u308C\u306F\u3001\u52DD\u5229\u306E\u7CD6\u5206\u88DC\u7D66\u3060\u300D"]}]},yukari:{title:"\u661F\u3092\u6570\u3048\u308B\u591C",pages:[{bg:"reiko",who:"reiko",text:["\u3086\u304B\u308A\u300C\u5148\u751F\u3001\u3060\u3044\u3058\u3087\u3046\u3076\u3067\u3059\u304B\u301C\uFF1F \u661F\u3001\u898B\u3048\u3061\u3083\u3044\u307E\u3057\u305F\uFF1F\u300D","\u9DF9\u5BAE\u5148\u751F\u300C\u2026\u2026\u3075\u3075\u3002\u306E\u3093\u3073\u308A\u3057\u305F\u9854\u3067\u3001\u3068\u3093\u3067\u3082\u306A\u3044\u5F37\u3055\u306D\u3002\u9727\u5CF6\u3055\u3093\u300D","\u9DF9\u5BAE\u5148\u751F\u300C\u5929\u6587\u90E8\u306E\u30C9\u30FC\u30E0\u3001\u4F5C\u308A\u306A\u3055\u3044\u3002\u305F\u3060\u3057\u2015\u2015\u5B8C\u6210\u3057\u305F\u3089\u3001\u79C1\u3082\u62DB\u5F85\u3059\u308B\u3053\u3068\u300D","\u3086\u304B\u308A\u300C\u306F\u3044\u301C\u3002\u7279\u7B49\u5E2D\u3001\u7528\u610F\u3057\u3066\u304A\u304D\u307E\u3059\u306D\u301C\u300D"]},{bg:"yukari",text:["\u5C4B\u4E0A\u3067\u3001\u767D\u3044\u30C9\u30FC\u30E0\u306E\u5DE5\u4E8B\u304C\u59CB\u307E\u3063\u305F\u3002","\u5929\u6587\u90E8\u306E\u90E8\u54E1\u306F\u3001\u3086\u304B\u308A\u3068\u5F8C\u8F29\u306E\u4E8C\u4EBA\u3060\u3051\u3002","\u5F8C\u8F29\u300C\u5148\u8F29\u3001\u89B3\u6E2C\u4F1A\u2026\u2026\u4F55\u4EBA\u304F\u3089\u3044\u6765\u3066\u304F\u308C\u308B\u3067\u3057\u3087\u3046\u304B\u300D","\u3086\u304B\u308A\u300C\u4E00\u4EBA\u3067\u3082\u3001\u4E8C\u4EBA\u3067\u3082\u3002\u661F\u3092\u597D\u304D\u306B\u306A\u3063\u3066\u304F\u308C\u305F\u3089\u3001\u3046\u308C\u3057\u3044\u3067\u3059\u306D\u301C\u300D","\u3086\u304B\u308A\u306F\u624B\u4F5C\u308A\u306E\u30DD\u30B9\u30BF\u30FC\u306B\u3001\u3066\u3044\u306D\u3044\u306B\u661F\u306E\u30B7\u30FC\u30EB\u3092\u8CBC\u3063\u305F\u3002"]},{bg:"yukari",who:"hinata",text:["\u89B3\u6E2C\u4F1A\u306E\u5F53\u65E5\u3002\u7A7A\u306F\u3001\u3042\u3064\u3044\u96F2\u306B\u304A\u304A\u308F\u308C\u3066\u3057\u307E\u3063\u305F\u3002","\u5F8C\u8F29\u300C\u4E2D\u6B62\u2026\u2026\u3067\u3059\u3088\u306D\u300D","\u3086\u304B\u308A\u300C\u5F85\u3061\u307E\u3057\u3087\u3046\u301C\u3002\u96F2\u306F\u3001\u3044\u3064\u304B\u6D41\u308C\u3066\u3044\u304D\u307E\u3059\u304B\u3089\u300D","\u4E00\u6642\u9593\u3001\u4E8C\u6642\u9593\u3002\u3042\u304D\u3089\u3081\u304B\u3051\u305F\u6642\u3001\u5C4B\u4E0A\u306E\u6249\u304C\u958B\u3044\u305F\u3002","\u3072\u306A\u305F\u304C\u304A\u306B\u304E\u308A\u3092\u3001\u308B\u308B\u3068\u307F\u3086\u304C\u6BDB\u5E03\u3092\u6301\u3063\u3066\u3001\u6B21\u3005\u3068\u3084\u3063\u3066\u6765\u305F\u306E\u3060\u3002"]},{bg:"yukari",who:"ruru",text:["\u591C\u5341\u6642\u3002\u98A8\u304C\u96F2\u3092\u62BC\u3057\u6D41\u3057\u3001\u7A7A\u3044\u3063\u3071\u3044\u306B\u661F\u304C\u3042\u3089\u308F\u308C\u305F\u3002","\u3072\u306A\u305F\u300C\u308F\u3041\u2026\u2026\uFF01 \u661F\u3063\u3066\u3001\u3053\u3093\u306A\u306B\u3042\u3063\u305F\u3093\u3060\u2026\u2026\uFF01\u300D","\u305D\u306E\u6642\u3001\u3072\u3068\u3059\u3058\u306E\u5149\u304C\u591C\u7A7A\u3092\u6A2A\u5207\u3063\u305F\u3002","\u308B\u308B\u300C\u6D41\u308C\u661F\uFF01 \u306D\u3048\u4ECA\u306E\u898B\u305F!? \u9858\u3044\u3054\u3068\u3001\u8A00\u3048\u306A\u304B\u3063\u305F\u30FC\uFF01\u300D","\u5C4B\u4E0A\u306F\u3001\u305F\u304F\u3055\u3093\u306E\u7B11\u3044\u58F0\u3068\u6B53\u58F0\u306B\u5305\u307E\u308C\u305F\u3002"]},{bg:"yukari",who:"reiko",text:["\u30C9\u30FC\u30E0\u306E\u7279\u7B49\u5E2D\u3067\u306F\u3001\u9DF9\u5BAE\u5148\u751F\u304C\u9759\u304B\u306B\u671B\u9060\u93E1\u3092\u306E\u305E\u3044\u3066\u3044\u305F\u3002","\u9DF9\u5BAE\u5148\u751F\u300C\u2026\u2026\u304D\u308C\u3044\u306D\u3002\u305A\u3044\u3076\u3093\u4E45\u3057\u3076\u308A\u306B\u3001\u7A7A\u3092\u898B\u4E0A\u3052\u305F\u6C17\u304C\u3059\u308B\u308F\u300D","\u3086\u304B\u308A\u300C\u5148\u751F\u3082\u3001\u3068\u304D\u3069\u304D\u306F\u661F\u3092\u898B\u3066\u304F\u3060\u3055\u3044\u306D\u301C\u300D","\u305D\u306E\u591C\u3001\u5929\u6587\u90E8\u306B\u306F\u3001\u65B0\u3057\u3044\u5165\u90E8\u5C4A\u304C\u4E94\u679A\u3082\u5C4A\u3044\u305F\u3002","\u3086\u304B\u308A\u300C\u307B\u3089\u3001\u3042\u306A\u305F\u306E\u9858\u3044\u3054\u3068\u3082\u3001\u304D\u3063\u3068\u5C4A\u304D\u307E\u3059\u3088\u301C\u300D"]}]},karen:{title:"\u3082\u3046\u4E00\u672C\u3001\u3044\u3053\u3046",pages:[{bg:"reiko",who:"reiko",text:["\u30AB\u30EC\u30F3\u300C\u306F\u3041\u3001\u306F\u3041\u2026\u2026\u3069\u3046\u3060\u3001\u5148\u751F\uFF01 \u3053\u308C\u304C\u6C34\u6CF3\u90E8\u306E\u5E95\u529B\uFF01\u300D","\u9DF9\u5BAE\u5148\u751F\u300C\u2026\u2026\u3048\u3048\u3002\u6700\u5F8C\u307E\u3067\u3001\u4E00\u6B69\u3082\u5F15\u304B\u306A\u304B\u3063\u305F\u308F\u306D\u3002\u65E9\u4E59\u5973\u3055\u3093\u300D","\u9DF9\u5BAE\u5148\u751F\u300C\u30D7\u30FC\u30EB\u306E\u6539\u4FEE\u8CBB\u3001\u51FA\u3057\u307E\u3057\u3087\u3046\u3002\u2026\u2026\u5F8C\u8F29\u306E\u305F\u3081\u3001\u3060\u3063\u305F\u308F\u306D\u300D","\u30AB\u30EC\u30F3\u300C\u305D\u3002\u3042\u305F\u3057\u306F\u4E09\u5E74\u3060\u304B\u3089\u3001\u65B0\u3057\u3044\u30D7\u30FC\u30EB\u3067\u6CF3\u3052\u308B\u306E\u306F\u5C11\u3057\u3060\u3051\u3002\u3067\u3082\u3001\u305D\u308C\u3067\u3044\u3044\u3093\u3060\u300D","\u9DF9\u5BAE\u5148\u751F\u306F\u4F55\u3082\u8A00\u308F\u305A\u3001\u30AB\u30EC\u30F3\u306E\u80A9\u306B\u305D\u3063\u3068\u624B\u3092\u7F6E\u3044\u305F\u3002"]},{bg:"karen",text:["\u590F\u4F11\u307F\u3001\u53E4\u3044\u30D7\u30FC\u30EB\u306E\u5DE5\u4E8B\u304C\u59CB\u307E\u3063\u305F\u3002","\u3072\u3073\u5272\u308C\u305F\u30BF\u30A4\u30EB\u304C\u306F\u304C\u3055\u308C\u3001\u3055\u3073\u3064\u3044\u305F\u30B9\u30BF\u30FC\u30C8\u53F0\u304C\u904B\u3073\u51FA\u3055\u308C\u3066\u3044\u304F\u3002","\u5F8C\u8F29\u300C\u5148\u8F29\u3001\u5DE5\u4E8B\u306E\u3042\u3044\u3060\u3001\u7DF4\u7FD2\u3069\u3046\u3057\u307E\u3057\u3087\u3046\u2026\u2026\u300D","\u30AB\u30EC\u30F3\u300C\u6C7A\u307E\u3063\u3066\u308B\u3058\u3083\u3093\u3002\u8D70\u3063\u3066\u3001\u7B4B\u30C8\u30EC\u3057\u3066\u3001\u9678\u3067\u6CF3\u3050\uFF01\u300D","\u305D\u306E\u65E5\u304B\u3089\u3001\u30B0\u30E9\u30A6\u30F3\u30C9\u306B\u6C34\u6CF3\u90E8\u306E\u304B\u3051\u58F0\u304C\u97FF\u304F\u3088\u3046\u306B\u306A\u3063\u305F\u3002"]},{bg:"reiko",text:["\u9678\u306E\u30C8\u30EC\u30FC\u30CB\u30F3\u30B0\u306F\u304D\u3064\u304B\u3063\u305F\u3002\u4E00\u5E74\u751F\u306E\u4F55\u4EBA\u304B\u304C\u3001\u3084\u3081\u305F\u3044\u3068\u8A00\u3044\u51FA\u3057\u305F\u3002","\u30AB\u30EC\u30F3\u306F\u6012\u3089\u306A\u304B\u3063\u305F\u3002\u305F\u3060\u3001\u6BCE\u671D\u3044\u3061\u3070\u3093\u306B\u6765\u3066\u3001\u3044\u3061\u3070\u3093\u6700\u5F8C\u307E\u3067\u8D70\u3063\u305F\u3002","\u5F8C\u8F29\u300C\u2026\u2026\u5148\u8F29\u3001\u306A\u3093\u3067\u305D\u3053\u307E\u3067\u3084\u308C\u308B\u3093\u3067\u3059\u304B\u300D","\u30AB\u30EC\u30F3\u300C\u65B0\u3057\u3044\u30D7\u30FC\u30EB\u306B\u3001\u5168\u54E1\u305D\u308D\u3063\u3066\u98DB\u3073\u3053\u307F\u305F\u3044\u304B\u3089\u3055\u300D","\u6B21\u306E\u671D\u3002\u30B0\u30E9\u30A6\u30F3\u30C9\u306B\u306F\u3001\u4E00\u4EBA\u3082\u6B20\u3051\u305A\u306B\u90E8\u54E1\u304C\u305D\u308D\u3063\u3066\u3044\u305F\u3002"]},{bg:"karen",text:["\u79CB\u3002\u751F\u307E\u308C\u5909\u308F\u3063\u305F\u30D7\u30FC\u30EB\u306B\u3001\u307E\u3063\u3055\u3089\u306A\u6C34\u304C\u6E80\u305F\u3055\u308C\u305F\u3002","\u6C34\u9762\u306B\u306F\u3001\u9752\u3044\u7A7A\u3068\u767D\u3044\u30B3\u30FC\u30B9\u30ED\u30FC\u30D7\u304C\u304F\u3063\u304D\u308A\u3068\u6620\u3063\u3066\u3044\u308B\u3002","\u30AB\u30EC\u30F3\u300C\u3088\u30FC\u3057\u3001\u5168\u54E1\u305D\u308D\u3063\u3066\u308B\u306D\uFF1F \u305B\u30FC\u306E\u3063\uFF01\u300D","\u5927\u304D\u306A\u6C34\u3057\u3076\u304D\u304C\u4E0A\u304C\u308A\u3001\u30D7\u30FC\u30EB\u306B\u7B11\u3044\u58F0\u304C\u623B\u3063\u3066\u304D\u305F\u3002"]},{bg:"karen",text:["\u5F15\u9000\u306E\u65E5\u3002\u30AB\u30EC\u30F3\u306F\u3001\u6700\u5F8C\u306E\u30BF\u30A4\u30E0\u30C8\u30E9\u30A4\u30A2\u30EB\u3092\u6CF3\u3044\u3060\u3002","\u7D50\u679C\u306F\u81EA\u5DF1\u30D9\u30B9\u30C8\u3002\u30D7\u30FC\u30EB\u30B5\u30A4\u30C9\u3067\u3001\u5F8C\u8F29\u305F\u3061\u304C\u6CE3\u304D\u306A\u304C\u3089\u62CD\u624B\u3057\u3066\u3044\u308B\u3002","\u5F8C\u8F29\u300C\u5148\u8F29\u3001\u5352\u696D\u3057\u3066\u3082\u3001\u3068\u304D\u3069\u304D\u898B\u306B\u6765\u3066\u304F\u3060\u3055\u3044\u306D\uFF01\u300D","\u30AB\u30EC\u30F3\u300C\u5F53\u305F\u308A\u524D\u3067\u3057\u3087\u3002\u30B5\u30DC\u3063\u3066\u305F\u3089\u3001\u3059\u3050\u308F\u304B\u308B\u304B\u3089\u306D\u300D","\u30AB\u30EC\u30F3\u300C\u3055\u3042\u2015\u2015\u3082\u3046\u4E00\u672C\u3001\u3044\u3053\u3046\uFF01\u300D"]}]},reika:{title:"\u5F26\u97F3\u306E\u97FF\u304F\u5834\u6240",pages:[{bg:"reiko",who:"reiko",text:["\u30EC\u30A4\u30AB\u300C\u2026\u2026\u7684\u306F\u3001\u5916\u3055\u306A\u3044\u300D","\u9DF9\u5BAE\u5148\u751F\u300C\u898B\u4E8B\u306D\u3001\u9ED2\u5D0E\u3055\u3093\u3002\u5F13\u9053\u5834\u306E\u5C4B\u6839\u3001\u76F4\u3057\u307E\u3057\u3087\u3046\u300D","\u30EC\u30A4\u30AB\u300C\u2026\u2026\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\u300D","\u77ED\u3044\u8A00\u8449\u3002\u3051\u308C\u3069\u3001\u305D\u306E\u307B\u304A\u306F\u3001\u307B\u3093\u306E\u5C11\u3057\u3060\u3051\u3086\u308B\u3093\u3067\u3044\u305F\u3002","\u9DF9\u5BAE\u5148\u751F\uFF08\u2026\u2026\u3053\u306E\u5B50\u304C\u7B11\u3046\u3068\u3053\u308D\u3001\u521D\u3081\u3066\u898B\u305F\u304B\u3082\u3057\u308C\u306A\u3044\u308F\u306D\uFF09"]},{bg:"reika",text:["\u5F13\u9053\u5834\u306E\u5C4B\u6839\u306F\u53E4\u304F\u3001\u96E8\u306E\u65E5\u306B\u306F\u3042\u3061\u3053\u3061\u304B\u3089\u6C34\u304C\u3057\u305F\u305F\u3063\u3066\u3044\u305F\u3002","\u90E8\u54E1\u306F\u30EC\u30A4\u30AB\u3092\u3075\u304F\u3081\u3066\u56DB\u4EBA\u3002\u96E8\u306E\u65E5\u306F\u3001\u7DF4\u7FD2\u304C\u3067\u304D\u306A\u304B\u3063\u305F\u3002","\u5DE5\u4E8B\u306E\u4EBA\u304C\u6765\u308B\u307E\u3067\u3001\u30EC\u30A4\u30AB\u306F\u6BCE\u65E5\u30D0\u30B1\u30C4\u3092\u4E26\u3079\u3001\u5E8A\u3092\u3075\u3044\u305F\u3002","\u5F8C\u8F29\uFF08\u9ED2\u5D0E\u5148\u8F29\u2026\u2026\u3044\u3064\u3082\u4E00\u4EBA\u3067\u3001\u305A\u3063\u3068\u3053\u3046\u3057\u3066\u3044\u305F\u3093\u3060\uFF09"]},{bg:"reika",who:"sakura",text:["\u5DE5\u4E8B\u304C\u59CB\u307E\u308B\u524D\u306E\u3001\u96E8\u306E\u5915\u65B9\u3002\u9053\u5834\u306E\u3059\u307F\u3067\u3001\u5C0F\u3055\u306A\u9CF4\u304D\u58F0\u304C\u3057\u305F\u3002","\u3073\u3057\u3087\u306C\u308C\u306E\u5B50\u732B\u304C\u3001\u3075\u308B\u3048\u306A\u304C\u3089\u3046\u305A\u304F\u307E\u3063\u3066\u3044\u305F\u3002","\u30EC\u30A4\u30AB\u306F\u8FF7\u308F\u305A\u9053\u7740\u306E\u8896\u3067\u5B50\u732B\u3092\u5305\u307F\u3001\u305D\u3063\u3068\u80F8\u306B\u62B1\u3044\u305F\u3002","\u30EC\u30A4\u30AB\u300C\u2026\u2026\u3082\u3046\u5927\u4E08\u592B\u3002\u3053\u3053\u306F\u3001\u3082\u3046\u3059\u3050\u96E8\u304C\u3082\u3089\u306A\u304F\u306A\u308B\u304B\u3089\u300D","\u305D\u306E\u59FF\u3092\u3001\u901A\u308A\u304B\u304B\u3063\u305F\u751F\u5F92\u4F1A\u9577\u306E\u3055\u304F\u3089\u304C\u3001\u307B\u307B\u3048\u3093\u3067\u898B\u3066\u3044\u305F\u3002"]},{bg:"reika",text:["\u65B0\u3057\u3044\u5C4B\u6839\u304C\u3067\u304D\u305F\u65E5\u3002\u7A7A\u306F\u3042\u3044\u306B\u304F\u306E\u96E8\u3060\u3063\u305F\u3002","\u3051\u308C\u3069\u9053\u5834\u306E\u4E2D\u306B\u306F\u3001\u4E00\u3057\u305A\u304F\u306E\u6C34\u3082\u843D\u3061\u3066\u3053\u306A\u3044\u3002","\u30EC\u30A4\u30AB\u306F\u5F13\u3092\u5F15\u304D\u3057\u307C\u308A\u3001\u9759\u304B\u306B\u606F\u3092\u5410\u3044\u305F\u3002","\u653E\u305F\u308C\u305F\u77E2\u306F\u96E8\u97F3\u3092\u5207\u308A\u3055\u3044\u3066\u2015\u2015\u7684\u306E\u771F\u3093\u4E2D\u306B\u5438\u3044\u3053\u307E\u308C\u305F\u3002","\u6F84\u3093\u3060\u5F26\u97F3\u304C\u3001\u9053\u5834\u3044\u3063\u3071\u3044\u306B\u97FF\u304D\u308F\u305F\u3063\u305F\u3002"]},{bg:"reika",who:"sakura",text:["\u305D\u308C\u304B\u3089\u3001\u5F13\u9053\u5834\u306B\u306F\u5C0F\u3055\u306A\u4EF2\u9593\u304C\u3075\u3048\u305F\u3002","\u898B\u5B66\u306B\u6765\u308B\u751F\u5F92\u3082\u3001\u5C11\u3057\u305A\u3064\u3075\u3048\u3066\u3044\u3063\u305F\u3002\u304A\u76EE\u5F53\u3066\u306F\u2026\u2026\u5B50\u732B\u3089\u3057\u3044\u3002","\u3055\u304F\u3089\u300C\u9ED2\u5D0E\u3055\u3093\u3001\u732B\u3061\u3083\u3093\u306E\u304A\u540D\u524D\u306F\uFF1F\u300D","\u30EC\u30A4\u30AB\u300C\u2026\u2026\u30C4\u30EB\u30CD\u3002\u5F26\u306E\u97F3\u3067\u3001\u3044\u3064\u3082\u8D77\u304D\u3066\u304F\u308B\u304B\u3089\u300D","\u30EC\u30A4\u30AB\u300C\u2026\u2026\u3042\u306A\u305F\u3082\u3001\u3053\u3053\u304C\u597D\u304D\uFF1F\u300D \u5B50\u732B\u306F\u5C0F\u3055\u304F\u300C\u306B\u3083\u3042\u300D\u3068\u9CF4\u3044\u305F\u3002"]}]},sakura:{title:"\u3059\u3079\u3066\u306E\u90E8\u306B\u3001\u5149\u3092",pages:[{bg:"reiko",who:"reiko",text:["\u3055\u304F\u3089\u300C\u3054\u304D\u3052\u3093\u3088\u3046\u3001\u9DF9\u5BAE\u5148\u751F\u3002\u5C11\u3057\u3001\u672C\u6C17\u3092\u51FA\u3057\u3059\u304E\u307E\u3057\u305F\u308F\u306D\u300D","\u9DF9\u5BAE\u5148\u751F\u300C\u2026\u2026\u4E5D\u6761\u3055\u3093\u3002\u4E88\u7B97\u3092\u5168\u90E8\u53D6\u3063\u3066\u3001\u3069\u3046\u3059\u308B\u3064\u3082\u308A\uFF1F\u300D","\u3055\u304F\u3089\u300C\u5168\u90E8\u306E\u90E8\u306B\u3001\u914D\u308A\u306A\u304A\u3057\u307E\u3059\u3002\u305D\u308C\u304C\u3001\u308F\u305F\u304F\u3057\u306E\u6226\u3046\u7406\u7531\u3067\u3059\u3082\u306E\u300D","\u9DF9\u5BAE\u5148\u751F\u300C\u2026\u2026\u3075\u3075\u3002\u6700\u521D\u304B\u3089\u3001\u305D\u308C\u304C\u76EE\u7684\u3060\u3063\u305F\u306E\u306D\u300D"]},{bg:"sakura",text:["\u751F\u5F92\u4F1A\u5BA4\u306E\u673A\u306B\u306F\u3001\u3059\u3079\u3066\u306E\u90E8\u306E\u8CC7\u6599\u304C\u5C71\u306E\u3088\u3046\u306B\u7A4D\u307E\u308C\u3066\u3044\u305F\u3002","\u3055\u304F\u3089\u306F\u6BCE\u6669\u304A\u305D\u304F\u307E\u3067\u3001\u90E8\u54E1\u306E\u6570\u3084\u6D3B\u52D5\u306E\u8A18\u9332\u3001\u5FC5\u8981\u306A\u9053\u5177\u3092\u8ABF\u3079\u3064\u3065\u3051\u305F\u3002","\u526F\u4F1A\u9577\u300C\u4F1A\u9577\u3001\u5C11\u3057\u306F\u4F11\u3093\u3067\u304F\u3060\u3055\u3044\u3002\u9854\u8272\u304C\u60AA\u3044\u3067\u3059\u3088\u300D","\u3055\u304F\u3089\u300C\u5927\u4E08\u592B\u3067\u3059\u308F\u3002\u307F\u306A\u3055\u3093\u304C\u898B\u305B\u3066\u304F\u308C\u305F\u672C\u6C17\u306B\u3001\u3053\u305F\u3048\u306A\u304F\u3066\u306F\u300D"]},{bg:"sakura",text:["\u3055\u304F\u3089\u306E\u300C\u65B0\u3057\u3044\u4E88\u7B97\u306E\u4ED5\u7D44\u307F\u300D\u306F\u3001\u3059\u3050\u306B\u306F\u53D7\u3051\u5165\u308C\u3089\u308C\u306A\u304B\u3063\u305F\u3002","\u751F\u5F92\u300C\u5F37\u3044\u90E8\u304C\u305F\u304F\u3055\u3093\u3082\u3089\u3046\u306E\u304C\u3001\u5F53\u305F\u308A\u524D\u3060\u308D\uFF01\u300D","\u751F\u5F92\u300C\u52DD\u3063\u305F\u306E\u306F\u4F1A\u9577\u3067\u3057\u3087\u3002\u7D50\u5C40\u3001\u751F\u5F92\u4F1A\u306E\u597D\u304D\u306B\u3059\u308B\u3093\u3058\u3083\u306A\u3044\u306E\uFF1F\u300D","\u8AAC\u660E\u4F1A\u306E\u5E30\u308A\u9053\u3001\u3055\u304F\u3089\u306F\u4E2D\u5EAD\u306E\u685C\u306E\u6728\u306E\u4E0B\u3067\u3001\u4E00\u4EBA\u7ACB\u3061\u6B62\u307E\u3063\u305F\u3002","\u305D\u3053\u3078\u3001\u6226\u3063\u305F\u30E9\u30A4\u30D0\u30EB\u305F\u3061\u304C\u3001\u305D\u308D\u3063\u3066\u3084\u3063\u3066\u6765\u305F\u3002"]},{bg:"sakura",who:"karen",text:["\u3072\u306A\u305F\u300C\u4F1A\u9577\uFF01 \u308F\u305F\u3057\u305F\u3061\u3001\u4F1A\u9577\u306E\u4ED5\u7D44\u307F\u306B\u8CDB\u6210\u3067\u3059\uFF01\u300D","\u30AB\u30EC\u30F3\u300C\u6226\u3063\u305F\u3042\u305F\u3057\u305F\u3061\u304C\u8A00\u3046\u3093\u3060\u304B\u3089\u3001\u307E\u3061\u304C\u3044\u306A\u3044\u3088\u300D","\u30EC\u30A4\u30AB\u300C\u2026\u2026\u516C\u5E73\u3060\u3068\u601D\u3046\u3002\u305D\u308C\u3060\u3051\u3088\u300D","\u4E00\u3064\u3001\u307E\u305F\u4E00\u3064\u3068\u3001\u90E8\u306E\u4EE3\u8868\u304C\u8CDB\u6210\u306E\u624B\u3092\u6319\u3052\u3066\u3044\u3063\u305F\u3002","\u751F\u5F92\u7DCF\u4F1A\u306E\u6295\u7968\u3067\u3001\u65B0\u3057\u3044\u4E88\u7B97\u306E\u4ED5\u7D44\u307F\u306F\u3001\u3064\u3044\u306B\u6C7A\u307E\u3063\u305F\u3002"]},{bg:"sakura",who:"reiko",text:["\u6625\u3002\u685C\u306E\u82B1\u3073\u3089\u304C\u821E\u3046\u4E2D\u5EAD\u306F\u3001\u65B0\u5165\u751F\u3092\u52E7\u8A98\u3059\u308B\u58F0\u3067\u306B\u304E\u308F\u3063\u3066\u3044\u305F\u3002","\u3069\u306E\u90E8\u306E\u30D6\u30FC\u30B9\u306B\u3082\u3001\u65B0\u3057\u3044\u9053\u5177\u3068\u697D\u3057\u305D\u3046\u306A\u7B11\u9854\u304C\u4E26\u3093\u3067\u3044\u308B\u3002","\u9DF9\u5BAE\u5148\u751F\u300C\u3044\u3044\u5B66\u6821\u306B\u306A\u3063\u305F\u308F\u306D\u3001\u4E5D\u6761\u3055\u3093\u300D","\u3055\u304F\u3089\u300C\u308F\u305F\u304F\u3057\u3060\u3051\u306E\u529B\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u308F\u3002\u307F\u306A\u3055\u3093\u306E\u672C\u6C17\u306E\u304A\u304B\u3052\u3067\u3059\u300D","\u3055\u304F\u3089\u300C\u3054\u304D\u3052\u3093\u3088\u3046\u3002\u660E\u65E5\u3082\u3001\u3059\u3066\u304D\u306A\u653E\u8AB2\u5F8C\u3092\u300D"]}]},reiko:{title:"\u4E88\u7B97\u59D4\u54E1\u9577\u306E\u672C\u97F3",pages:[{bg:"reiko",text:["\u6700\u5F8C\u306E\u751F\u5F92\u304C\u3001\u30B0\u30E9\u30A6\u30F3\u30C9\u306B\u5927\u306E\u5B57\u306B\u306A\u3063\u3066\u7A7A\u3092\u898B\u4E0A\u3052\u3066\u3044\u305F\u3002","\u9DF9\u5BAE\u5148\u751F\u300C\u2026\u2026\u5168\u54E1\u3001\u3088\u304F\u3084\u3063\u305F\u308F\u3002\u7ACB\u3061\u306A\u3055\u3044\u300D","\u516B\u3064\u306E\u90E8\u306E\u4EE3\u8868\u304C\u3001\u307C\u308D\u307C\u308D\u306B\u306A\u308A\u306A\u304C\u3089\u3082\u3001\u6B21\u3005\u3068\u7ACB\u3061\u4E0A\u304C\u308B\u3002","\u9DF9\u5BAE\u5148\u751F\u300C\u3060\u308C\u4E00\u4EBA\u3001\u9014\u4E2D\u3067\u3042\u304D\u3089\u3081\u306A\u304B\u3063\u305F\u3002\u305D\u308C\u304C\u3001\u3042\u306A\u305F\u305F\u3061\u306E\u7B54\u3048\u306D\u300D"]},{bg:"reiko",text:["\u305D\u306E\u591C\u3002\u8077\u54E1\u5BA4\u3067\u3001\u9DF9\u5BAE\u5148\u751F\u306F\u4E00\u4EBA\u3001\u4E88\u7B97\u306E\u66F8\u985E\u306B\u5411\u304B\u3063\u3066\u3044\u305F\u3002","\u6821\u9577\u300C\u9DF9\u5BAE\u5148\u751F\u3002\u7D50\u5C40\u3001\u3069\u306E\u90E8\u306B\u4E88\u7B97\u3092\u51FA\u3059\u306E\u3067\u3059\u304B\uFF1F\u300D","\u9DF9\u5BAE\u5148\u751F\u300C\u5168\u90E8\u3067\u3059\u3002\u2026\u2026\u5C11\u3057\u305A\u3064\u3001\u3067\u3059\u304C\u300D","\u6821\u9577\u300C\u304A\u3084\u3002\u300E\u672C\u6C17\u306E\u90E8\u306B\u3057\u304B\u51FA\u3055\u306A\u3044\u300F\u306E\u3067\u306F\uFF1F\u300D","\u9DF9\u5BAE\u5148\u751F\u300C\u3048\u3048\u3002\u3060\u304B\u3089\u5168\u90E8\u3067\u3059\u3002\u2015\u2015\u3042\u306E\u5B50\u305F\u3061\u306F\u3001\u5168\u54E1\u672C\u6C17\u3067\u3057\u305F\u304B\u3089\u300D"]},{bg:"hinata",who:"hinata",text:["\u5B9F\u306F\u9DF9\u5BAE\u5148\u751F\u306F\u3001\u6BCE\u671D\u3060\u308C\u3088\u308A\u3082\u65E9\u304F\u767B\u6821\u3057\u3001\u6821\u820E\u3092\u3072\u3068\u307E\u308F\u308A\u3057\u3066\u3044\u308B\u3002","\u6599\u7406\u90E8\u306E\u3053\u3052\u305F\u934B\u3001\u96E8\u3082\u308A\u306E\u3059\u308B\u5F13\u9053\u5834\u3001\u3072\u3073\u5272\u308C\u305F\u30D7\u30FC\u30EB\u2015\u2015\u3002","\u9DF9\u5BAE\u5148\u751F\uFF08\u2026\u2026\u5168\u90E8\u3001\u77E5\u3063\u3066\u3044\u305F\u308F\u3002\u305A\u3063\u3068\u524D\u304B\u3089\uFF09","\u751F\u5F92\u305F\u3061\u304C\u300C\u81EA\u5206\u306E\u529B\u3067\u52DD\u3061\u53D6\u3063\u305F\u300D\u3068\u80F8\u3092\u5F35\u308C\u308B\u3088\u3046\u306B\u3002","\u305D\u308C\u304C\u3001\u5148\u751F\u304C\u6700\u5F8C\u306E\u58C1\u306B\u306A\u3063\u305F\u672C\u5F53\u306E\u7406\u7531\u3060\u3063\u305F\u3002"]},{bg:"sakura",who:"hinata",text:["\u6587\u5316\u796D\u306E\u65E5\u3002\u9DF9\u5BAE\u5148\u751F\u306F\u300C\u898B\u56DE\u308A\u300D\u3068\u8A00\u3044\u306A\u304C\u3089\u3001\u6821\u5185\u3092\u6B69\u3044\u3066\u3044\u305F\u3002","\u6599\u7406\u90E8\u3067\u30AA\u30E0\u30E9\u30A4\u30B9\u3092\u304A\u304B\u308F\u308A\u3057\u3001\u30C0\u30F3\u30B9\u90E8\u306E\u30B9\u30C6\u30FC\u30B8\u3067\u306F\u624B\u62CD\u5B50\u3092\u3057\u3066\u3001","\u5929\u6587\u90E8\u306E\u30C9\u30FC\u30E0\u3067\u306F\u3001\u3060\u308C\u306B\u3082\u898B\u3089\u308C\u306A\u3044\u3088\u3046\u306B\u3001\u305D\u3063\u3068\u76EE\u5143\u3092\u306C\u3050\u3063\u305F\u3002","\u3072\u306A\u305F\u300C\u3042\u30FC\u3063\u3001\u5148\u751F\uFF01 \u3055\u3063\u304D\u3082\u304A\u304B\u308F\u308A\u3057\u3066\u307E\u3057\u305F\u3088\u306D\uFF1F\u300D","\u9DF9\u5BAE\u5148\u751F\u300C\u306A\u3063\u2026\u2026\u307F\u3001\u898B\u56DE\u308A\u3088\u3002\u898B\u56DE\u308A\u300D"]},{bg:"reiko",text:["\u6587\u5316\u796D\u304C\u7D42\u308F\u3063\u305F\u5915\u66AE\u308C\u3002\u8077\u54E1\u5BA4\u306E\u5148\u751F\u306E\u673A\u306B\u306F\u3001\u305F\u304F\u3055\u3093\u306E\u3082\u306E\u304C\u4E26\u3093\u3067\u3044\u305F\u3002","\u6599\u7406\u90E8\u306E\u30AF\u30C3\u30AD\u30FC\u3001\u5439\u594F\u697D\u90E8\u306E\u30C1\u30B1\u30C3\u30C8\u3001\u30C0\u30F3\u30B9\u90E8\u306E\u30BF\u30AA\u30EB\u3001\u5263\u9053\u90E8\u306E\u624B\u306C\u3050\u3044\u2015\u2015\u3002","\u5168\u90E8\u306E\u90E8\u304B\u3089\u5C4A\u3044\u305F\u3001\u5FDC\u63F4\u30B0\u30C3\u30BA\u3068\u304A\u793C\u306E\u624B\u7D19\u3060\u3063\u305F\u3002","\u9DF9\u5BAE\u5148\u751F\u300C\u2026\u2026\u307E\u3063\u305F\u304F\u3001\u624B\u306E\u304B\u304B\u308B\u5B50\u305F\u3061\u306D\u300D","\u305D\u3046\u8A00\u3063\u3066\u3001\u5148\u751F\u306F\u624B\u7D19\u3092\u4E00\u901A\u305A\u3064\u3001\u5927\u5207\u306B\u5F15\u304D\u51FA\u3057\u306B\u3057\u307E\u3063\u305F\u3002"]}]}};var Zd=0,Qc=1,$d=2;var ha=1,Jd=2,cr=3,ii=0,Wt=1,Rn=2,si=0,hr=1,eh=2,th=3,nh=4,Qd=5;var vs=100,ef=101,tf=102,nf=103,sf=104,rf=200,af=201,of=202,lf=203,ih=204,sh=205,cf=206,hf=207,uf=208,df=209,ff=210,pf=211,mf=212,gf=213,_f=214,Mo=0,wo=1,To=2,Ks=3,Ao=4,Eo=5,Ro=6,Co=7,rh=0,yf=1,vf=2,Bn=0,ah=1,oh=2,lh=3,ch=4,hh=5,uh=6,dh=7,Hc="attached",bf="detached",fh=300,Xi=301,bs=302,jo=303,Zo=304,ua=306,Hi=1e3,En=1001,Ys=1002,St=1003,$o=1004;var xs=1005;var Et=1006,ur=1007;var zn=1008;var gn=1009,ph=1010,mh=1011,dr=1012,Jo=1013,Hn=1014,Sn=1015,Vn=1016,Qo=1017,el=1018,fr=1020,gh=35902,_h=35899,yh=1021,vh=1022,sn=1023,Jn=1026,qi=1027,tl=1028,nl=1029,Ki=1030,il=1031;var sl=1033,da=33776,fa=33777,pa=33778,ma=33779,rl=35840,al=35841,ol=35842,ll=35843,cl=36196,hl=37492,ul=37496,dl=37488,fl=37489,ga=37490,pl=37491,ml=37808,gl=37809,_l=37810,yl=37811,vl=37812,bl=37813,xl=37814,Sl=37815,Ml=37816,wl=37817,Tl=37818,Al=37819,El=37820,Rl=37821,Cl=36492,Pl=36494,Il=36495,Ll=36283,kl=36284,_a=36285,Nl=36286;var hs=2300,us=2301,bo=2302,Vc=2303,Gc=2400,Wc=2401,Xc=2402,xf=2500;var bh=0,ya=1,pr=2,Sf=3200;var va=0,Mf=1,Mi="",At="srgb",en="srgb-linear",zr="linear",st="srgb";var xo=7680;var wf=519,Tf=512,Af=513,Ef=514,Dl=515,Rf=516,Cf=517,Fl=518,Pf=519,xh=35044;var Sh="300 es",Un=2e3,js=2001;function om(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function lm(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Zs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function If(){let n=Zs("canvas");return n.style.display="block",n}var fd={},$s=null;function Hr(...n){let e="THREE."+n.shift();$s?$s("log",e,...n):console.log(e,...n)}function Lf(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Te(...n){n=Lf(n);let e="THREE."+n.shift();if($s)$s("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ke(...n){n=Lf(n);let e="THREE."+n.shift();if($s)$s("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function cs(...n){let e=n.join(" ");e in fd||(fd[e]=!0,Te(...n))}function kf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Nf={[Mo]:wo,[To]:Ro,[Ao]:Co,[Ks]:Eo,[wo]:Mo,[Ro]:To,[Co]:Ao,[Eo]:Ks},Qn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pd=1234567,Or=Math.PI/180,ds=180/Math.PI;function On(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function Ke(n,e,t){return Math.max(e,Math.min(t,n))}function Mh(n,e){return(n%e+e)%e}function cm(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function hm(n,e,t){return n!==e?(t-n)/(e-n):0}function Br(n,e,t){return(1-t)*n+t*e}function um(n,e,t,i){return Br(n,e,1-Math.exp(-t*i))}function dm(n,e=1){return e-Math.abs(Mh(n,e*2)-e)}function fm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function pm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function mm(n,e){return n+Math.floor(Math.random()*(e-n+1))}function gm(n,e){return n+Math.random()*(e-n)}function _m(n){return n*(.5-Math.random())}function ym(n){n!==void 0&&(pd=n);let e=pd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vm(n){return n*Or}function bm(n){return n*ds}function xm(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Sm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Mm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function wm(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),u=a((e+i)/2),h=r((e-i)/2),d=a((e-i)/2),p=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*u,l*h,l*d,o*c);break;case"YZY":n.set(l*d,o*u,l*h,o*c);break;case"ZXZ":n.set(l*h,l*d,o*u,o*c);break;case"XZX":n.set(o*u,l*g,l*p,o*c);break;case"YXY":n.set(l*p,o*u,l*g,o*c);break;case"ZYZ":n.set(l*g,l*p,o*u,o*c);break;default:Te("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Fn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ot(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var wh={DEG2RAD:Or,RAD2DEG:ds,generateUUID:On,clamp:Ke,euclideanModulo:Mh,mapLinear:cm,inverseLerp:hm,lerp:Br,damp:um,pingpong:dm,smoothstep:fm,smootherstep:pm,randInt:mm,randFloat:gm,randFloatSpread:_m,seededRandom:ym,degToRad:vm,radToDeg:bm,isPowerOfTwo:xm,ceilPowerOfTwo:Sm,floorPowerOfTwo:Mm,setQuaternionFromProperEuler:wm,normalize:ot,denormalize:Fn},Ch=class Ch{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ch.prototype.isVector2=!0;var Be=Ch,tn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],d=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(h!==_||l!==d||c!==p||u!==g){let m=l*d+c*p+u*g+h*_;m<0&&(d=-d,p=-p,g=-g,_=-_,m=-m);let f=1-o;if(m<.9995){let S=Math.acos(m),w=Math.sin(S);f=Math.sin(f*S)/w,o=Math.sin(o*S)/w,l=l*f+d*o,c=c*f+p*o,u=u*f+g*o,h=h*f+_*o}else{l=l*f+d*o,c=c*f+p*o,u=u*f+g*o,h=h*f+_*o;let S=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=S,c*=S,u*=S,h*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+u*h+l*p-c*d,e[t+1]=l*g+u*d+c*h-o*p,e[t+2]=c*g+u*p+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),h=o(r/2),d=l(i/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:Te("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>h){let p=2*Math.sqrt(1+i-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>h){let p=2*Math.sqrt(1+o-i-h);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+h-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Ph=class Ph{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(md.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(md.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),h=2*(r*i-a*t);return this.x=t+l*c+a*h-o*u,this.y=i+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _c.copy(this).projectOnVector(e),this.sub(_c)}reflect(e){return this.sub(_c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ph.prototype.isVector3=!0;var F=Ph,_c=new F,md=new tn,Ih=class Ih{constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],g=i[8],_=s[0],m=s[3],f=s[6],S=s[1],w=s[4],b=s[7],M=s[2],T=s[5],R=s[8];return r[0]=a*_+o*S+l*M,r[3]=a*m+o*w+l*T,r[6]=a*f+o*b+l*R,r[1]=c*_+u*S+h*M,r[4]=c*m+u*w+h*T,r[7]=c*f+u*b+h*R,r[2]=d*_+p*S+g*M,r[5]=d*m+p*w+g*T,r[8]=d*f+p*b+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,p=c*r-a*l,g=t*h+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=h*_,e[1]=(s*c-u*i)*_,e[2]=(o*i-s*a)*_,e[3]=d*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return cs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yc.makeScale(e,t)),this}rotate(e){return cs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yc.makeRotation(-e)),this}translate(e,t){return cs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ih.prototype.isMatrix3=!0;var De=Ih,yc=new De,gd=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_d=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tm(){let n={enabled:!0,workingColorSpace:en,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===st&&(s.r=mi(s.r),s.g=mi(s.g),s.b=mi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===st&&(s.r=qs(s.r),s.g=qs(s.g),s.b=qs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Mi?zr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return cs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return cs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[en]:{primaries:e,whitePoint:i,transfer:zr,toXYZ:gd,fromXYZ:_d,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:At},outputColorSpaceConfig:{drawingBufferColorSpace:At}},[At]:{primaries:e,whitePoint:i,transfer:st,toXYZ:gd,fromXYZ:_d,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:At}}}),n}var He=Tm();function mi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function qs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ls,Po=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ls===void 0&&(Ls=Zs("canvas")),Ls.width=e.width,Ls.height=e.height;let s=Ls.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ls}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Zs("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=mi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(mi(t[i]/255)*255):t[i]=mi(t[i]);return{data:t,width:e.width,height:e.height}}else return Te("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Am=0,Js=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=On(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(vc(s[a].image)):r.push(vc(s[a]))}else r=vc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function vc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Po.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Te("Texture: Unable to serialize Texture."),{})}var Em=0,bc=new F,Ht=class n extends Qn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=En,s=En,r=Et,a=zn,o=sn,l=gn,c=n.DEFAULT_ANISOTROPY,u=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=On(),this.name="",this.source=new Js(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(bc).x}get height(){return this.source.getSize(bc).y}get depth(){return this.source.getSize(bc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Te(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Te(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hi:e.x=e.x-Math.floor(e.x);break;case En:e.x=e.x<0?0:1;break;case Ys:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hi:e.y=e.y-Math.floor(e.y);break;case En:e.y=e.y<0?0:1;break;case Ys:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=fh;Ht.DEFAULT_ANISOTROPY=1;var Lh=class Lh{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,b=(p+1)/2,M=(f+1)/2,T=(u+d)/4,R=(h+_)/4,v=(g+m)/4;return w>b&&w>M?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=T/i,r=R/i):b>M?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=T/s,r=v/s):M<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),i=R/r,s=v/r),this.set(i,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(h-_)/S,this.z=(d-u)/S,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Lh.prototype.isVector4=!0;var lt=Lh,Io=class extends Qn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Et,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new Ht(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Et,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Js(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},un=class extends Io{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Vr=class extends Ht{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=St,this.minFilter=St,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Lo=class extends Ht{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=St,this.minFilter=St,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Yo=class Yo{constructor(e,t,i,s,r,a,o,l,c,u,h,d,p,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,h,d,p,g,_,m)}set(e,t,i,s,r,a,o,l,c,u,h,d,p,g,_,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yo().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/ks.setFromMatrixColumn(e,0).length(),r=1/ks.setFromMatrixColumn(e,1).length(),a=1/ks.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=a*u,p=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*u,p=l*h,g=c*u,_=c*h;t[0]=d+_*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*u,p=l*h,g=c*u,_=c*h;t[0]=d-_*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*u,p=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-d*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+g,t[10]=d-_*h}else if(e.order==="XZY"){let d=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rm,e,Cm)}lookAt(e,t,i){let s=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Ni.crossVectors(i,yn),Ni.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Ni.crossVectors(i,yn)),Ni.normalize(),Ya.crossVectors(yn,Ni),s[0]=Ni.x,s[4]=Ya.x,s[8]=yn.x,s[1]=Ni.y,s[5]=Ya.y,s[9]=yn.y,s[2]=Ni.z,s[6]=Ya.z,s[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],g=i[2],_=i[6],m=i[10],f=i[14],S=i[3],w=i[7],b=i[11],M=i[15],T=s[0],R=s[4],v=s[8],A=s[12],C=s[1],D=s[5],z=s[9],W=s[13],N=s[2],V=s[6],Z=s[10],j=s[14],ie=s[3],q=s[7],ee=s[11],ne=s[15];return r[0]=a*T+o*C+l*N+c*ie,r[4]=a*R+o*D+l*V+c*q,r[8]=a*v+o*z+l*Z+c*ee,r[12]=a*A+o*W+l*j+c*ne,r[1]=u*T+h*C+d*N+p*ie,r[5]=u*R+h*D+d*V+p*q,r[9]=u*v+h*z+d*Z+p*ee,r[13]=u*A+h*W+d*j+p*ne,r[2]=g*T+_*C+m*N+f*ie,r[6]=g*R+_*D+m*V+f*q,r[10]=g*v+_*z+m*Z+f*ee,r[14]=g*A+_*W+m*j+f*ne,r[3]=S*T+w*C+b*N+M*ie,r[7]=S*R+w*D+b*V+M*q,r[11]=S*v+w*z+b*Z+M*ee,r[15]=S*A+w*W+b*j+M*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15],S=l*p-c*d,w=o*p-c*h,b=o*d-l*h,M=a*p-c*u,T=a*d-l*u,R=a*h-o*u;return t*(_*S-m*w+f*b)-i*(g*S-m*M+f*T)+s*(g*w-_*M+f*R)-r*(g*b-_*T+m*R)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-i*(r*u-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],S=t*o-i*a,w=t*l-s*a,b=t*c-r*a,M=i*l-s*o,T=i*c-r*o,R=s*c-r*l,v=u*_-h*g,A=u*m-d*g,C=u*f-p*g,D=h*m-d*_,z=h*f-p*_,W=d*f-p*m,N=S*W-w*z+b*D+M*C-T*A+R*v;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/N;return e[0]=(o*W-l*z+c*D)*V,e[1]=(s*z-i*W-r*D)*V,e[2]=(_*R-m*T+f*M)*V,e[3]=(d*T-h*R-p*M)*V,e[4]=(l*C-a*W-c*A)*V,e[5]=(t*W-s*C+r*A)*V,e[6]=(m*b-g*R-f*w)*V,e[7]=(u*R-d*b+p*w)*V,e[8]=(a*z-o*C+c*v)*V,e[9]=(i*C-t*z-r*v)*V,e[10]=(g*T-_*b+f*S)*V,e[11]=(h*b-u*T-p*S)*V,e[12]=(o*A-a*D-l*v)*V,e[13]=(t*D-i*A+s*v)*V,e[14]=(_*w-g*M-m*S)*V,e[15]=(u*M-h*w+d*S)*V,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,p=r*u,g=r*h,_=a*u,m=a*h,f=o*h,S=l*c,w=l*u,b=l*h,M=i.x,T=i.y,R=i.z;return s[0]=(1-(_+f))*M,s[1]=(p+b)*M,s[2]=(g-w)*M,s[3]=0,s[4]=(p-b)*T,s[5]=(1-(d+f))*T,s[6]=(m+S)*T,s[7]=0,s[8]=(g+w)*R,s[9]=(m-S)*R,s[10]=(1-(d+_))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=ks.set(s[0],s[1],s[2]).length(),o=ks.set(s[4],s[5],s[6]).length(),l=ks.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Ln.copy(this);let c=1/a,u=1/o,h=1/l;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=u,Ln.elements[5]*=u,Ln.elements[6]*=u,Ln.elements[8]*=h,Ln.elements[9]*=h,Ln.elements[10]*=h,t.setFromRotationMatrix(Ln),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=Un,l=!1){let c=this.elements,u=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),p=(i+s)/(i-s),g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===Un)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===js)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Un,l=!1){let c=this.elements,u=2/(t-e),h=2/(i-s),d=-(t+e)/(t-e),p=-(i+s)/(i-s),g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===Un)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===js)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Yo.prototype.isMatrix4=!0;var Ne=Yo,ks=new F,Ln=new Ne,Rm=new F(0,0,0),Cm=new F(1,1,1),Ni=new F,Ya=new F,yn=new F,yd=new Ne,vd=new tn,gi=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Te("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return yd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vd.setFromEuler(this),this.setFromQuaternion(vd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};gi.DEFAULT_ORDER="XYZ";var Gr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Pm=0,bd=new F,Ns=new tn,ci=new Ne,ja=new F,Pr=new F,Im=new F,Lm=new tn,xd=new F(1,0,0),Sd=new F(0,1,0),Md=new F(0,0,1),wd={type:"added"},km={type:"removed"},Ds={type:"childadded",child:null},xc={type:"childremoved",child:null},bt=class n extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new F,t=new gi,i=new tn,s=new F(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ne},normalMatrix:{value:new De}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(xd,e)}rotateY(e){return this.rotateOnAxis(Sd,e)}rotateZ(e){return this.rotateOnAxis(Md,e)}translateOnAxis(e,t){return bd.copy(e).applyQuaternion(this.quaternion),this.position.add(bd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xd,e)}translateY(e){return this.translateOnAxis(Sd,e)}translateZ(e){return this.translateOnAxis(Md,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ja.copy(e):ja.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(Pr,ja,this.up):ci.lookAt(ja,Pr,this.up),this.quaternion.setFromRotationMatrix(ci),s&&(ci.extractRotation(s.matrixWorld),Ns.setFromRotationMatrix(ci),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wd),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(km),xc.child=e,this.dispatchEvent(xc),xc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wd),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,e,Im),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,Lm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};bt.DEFAULT_UP=new F(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hn=class extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Nm={type:"move"},Qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,i),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Nm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new hn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Df={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},Za={h:0,s:0,l:0};function Sc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Pe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,He.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=He.workingColorSpace){return this.r=e,this.g=t,this.b=i,He.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=He.workingColorSpace){if(e=Mh(e,1),t=Ke(t,0,1),i=Ke(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Sc(a,r,e+1/3),this.g=Sc(a,r,e),this.b=Sc(a,r,e-1/3)}return He.colorSpaceToWorking(this,s),this}setStyle(e,t=At){function i(r){r!==void 0&&parseFloat(r)<1&&Te("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Te("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Te("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){let i=Df[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Te("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return He.workingToColorSpace(Yt.copy(this),e),Math.round(Ke(Yt.r*255,0,255))*65536+Math.round(Ke(Yt.g*255,0,255))*256+Math.round(Ke(Yt.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=He.workingColorSpace){He.workingToColorSpace(Yt.copy(this),t);let i=Yt.r,s=Yt.g,r=Yt.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=He.workingColorSpace){return He.workingToColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=At){He.workingToColorSpace(Yt.copy(this),e);let t=Yt.r,i=Yt.g,s=Yt.b;return e!==At?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+t,Di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Di),e.getHSL(Za);let i=Br(Di.h,Za.h,t),s=Br(Di.s,Za.s,t),r=Br(Di.l,Za.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Yt=new Pe;Pe.NAMES=Df;var Wr=class extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gi,this.environmentIntensity=1,this.environmentRotation=new gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},kn=new F,hi=new F,Mc=new F,ui=new F,Fs=new F,Us=new F,Td=new F,wc=new F,Tc=new F,Ac=new F,Ec=new lt,Rc=new lt,Cc=new lt,zi=class n{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),kn.subVectors(e,t),s.cross(kn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){kn.subVectors(s,t),hi.subVectors(i,t),Mc.subVectors(e,t);let a=kn.dot(kn),o=kn.dot(hi),l=kn.dot(Mc),c=hi.dot(hi),u=hi.dot(Mc),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;let d=1/h,p=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ui.x),l.addScaledVector(a,ui.y),l.addScaledVector(o,ui.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Ec.setScalar(0),Rc.setScalar(0),Cc.setScalar(0),Ec.fromBufferAttribute(e,t),Rc.fromBufferAttribute(e,i),Cc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ec,r.x),a.addScaledVector(Rc,r.y),a.addScaledVector(Cc,r.z),a}static isFrontFacing(e,t,i,s){return kn.subVectors(i,t),hi.subVectors(e,t),kn.cross(hi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),kn.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Fs.subVectors(s,i),Us.subVectors(r,i),wc.subVectors(e,i);let l=Fs.dot(wc),c=Us.dot(wc);if(l<=0&&c<=0)return t.copy(i);Tc.subVectors(e,s);let u=Fs.dot(Tc),h=Us.dot(Tc);if(u>=0&&h<=u)return t.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Fs,a);Ac.subVectors(e,r);let p=Fs.dot(Ac),g=Us.dot(Ac);if(g>=0&&p<=g)return t.copy(r);let _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Us,o);let m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Td.subVectors(r,s),o=(h-u)/(h-u+(p-g)),t.copy(s).addScaledVector(Td,o);let f=1/(m+_+d);return a=_*f,o=d*f,t.copy(i).addScaledVector(Fs,a).addScaledVector(Us,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},bn=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Nn):Nn.fromBufferAttribute(r,a),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$a.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$a.copy(i.boundingBox)),$a.applyMatrix4(e.matrixWorld),this.union($a)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ir),Ja.subVectors(this.max,Ir),Os.subVectors(e.a,Ir),Bs.subVectors(e.b,Ir),zs.subVectors(e.c,Ir),Fi.subVectors(Bs,Os),Ui.subVectors(zs,Bs),rs.subVectors(Os,zs);let t=[0,-Fi.z,Fi.y,0,-Ui.z,Ui.y,0,-rs.z,rs.y,Fi.z,0,-Fi.x,Ui.z,0,-Ui.x,rs.z,0,-rs.x,-Fi.y,Fi.x,0,-Ui.y,Ui.x,0,-rs.y,rs.x,0];return!Pc(t,Os,Bs,zs,Ja)||(t=[1,0,0,0,1,0,0,0,1],!Pc(t,Os,Bs,zs,Ja))?!1:(Qa.crossVectors(Fi,Ui),t=[Qa.x,Qa.y,Qa.z],Pc(t,Os,Bs,zs,Ja))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},di=[new F,new F,new F,new F,new F,new F,new F,new F],Nn=new F,$a=new bn,Os=new F,Bs=new F,zs=new F,Fi=new F,Ui=new F,rs=new F,Ir=new F,Ja=new F,Qa=new F,as=new F;function Pc(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){as.fromArray(n,r);let o=s.x*Math.abs(as.x)+s.y*Math.abs(as.y)+s.z*Math.abs(as.z),l=e.dot(as),c=t.dot(as),u=i.dot(as);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Lt=new F,eo=new Be,Dm=0,Dt=class extends Qn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Dm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=xh,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)eo.fromBufferAttribute(this,t),eo.applyMatrix3(e),this.setXY(t,eo.x,eo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Fn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),s=ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),s=ot(s,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Xr=class extends Dt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var qr=class extends Dt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Qt=class extends Dt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Fm=new bn,Lr=new F,Ic=new F,dn=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Fm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lr.subVectors(e,this.center);let t=Lr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Lr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ic.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lr.copy(e.center).add(Ic)),this.expandByPoint(Lr.copy(e.center).sub(Ic))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Um=0,An=new Ne,Lc=new bt,Hs=new F,vn=new bn,kr=new bn,Bt=new F,jt=class n extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(om(e)?qr:Xr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new De().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,t,i){return An.makeTranslation(e,t,i),this.applyMatrix4(An),this}scale(e,t,i){return An.makeScale(e,t,i),this.applyMatrix4(An),this}lookAt(e){return Lc.lookAt(e),Lc.updateMatrix(),this.applyMatrix4(Lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Te("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let i=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];kr.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(vn.min,kr.min),vn.expandByPoint(Bt),Bt.addVectors(vn.max,kr.max),vn.expandByPoint(Bt)):(vn.expandByPoint(kr.min),vn.expandByPoint(kr.max))}vn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Bt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Bt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Bt.fromBufferAttribute(o,c),l&&(Hs.fromBufferAttribute(e,c),Bt.add(Hs)),s=Math.max(s,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Dt(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new F,l[v]=new F;let c=new F,u=new F,h=new F,d=new Be,p=new Be,g=new Be,_=new F,m=new F;function f(v,A,C){c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,A),h.fromBufferAttribute(i,C),d.fromBufferAttribute(r,v),p.fromBufferAttribute(r,A),g.fromBufferAttribute(r,C),u.sub(c),h.sub(c),p.sub(d),g.sub(d);let D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(D),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(D),o[v].add(_),o[A].add(_),o[C].add(_),l[v].add(m),l[A].add(m),l[C].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let v=0,A=S.length;v<A;++v){let C=S[v],D=C.start,z=C.count;for(let W=D,N=D+z;W<N;W+=3)f(e.getX(W+0),e.getX(W+1),e.getX(W+2))}let w=new F,b=new F,M=new F,T=new F;function R(v){M.fromBufferAttribute(s,v),T.copy(M);let A=o[v];w.copy(A),w.sub(M.multiplyScalar(M.dot(A))).normalize(),b.crossVectors(T,A);let D=b.dot(l[v])<0?-1:1;a.setXYZW(v,w.x,w.y,w.z,D)}for(let v=0,A=S.length;v<A;++v){let C=S[v],D=C.start,z=C.count;for(let W=D,N=D+z;W<N;W+=3)R(e.getX(W+0)),R(e.getX(W+1)),R(e.getX(W+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Dt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,u=new F,h=new F;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u),p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new Dt(d,u,h)}if(this.index===null)return Te("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){let d=c[u],p=e(d,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},er=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=xh,this.updateRanges=[],this.version=0,this.uuid=On()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Jt=new F,tr=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Fn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ot(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Fn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),s=ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),s=ot(s,this.array),r=ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Hr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Dt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Hr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},kc=new F,Om=new F,Bm=new De,Dn=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=kc.subVectors(i,t).cross(Om.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(kc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Bm.getNormalMatrix(e),s=this.coplanarPoint(kc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},zm=0,nn=class extends Qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=On(),this.name="",this.type="Material",this.blending=hr,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ih,this.blendDst=sh,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xo,this.stencilZFail=xo,this.stencilZPass=xo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Te(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Te(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Pe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Dn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Be().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Be().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var fi=new F,Nc=new F,to=new F,no=new F,fs=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,t),fi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Nc.copy(e).add(t).multiplyScalar(.5),to.copy(t).sub(e).normalize(),no.copy(this.origin).sub(Nc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(to),o=no.dot(this.direction),l=-no.dot(to),c=no.lengthSq(),u=Math.abs(1-a*a),h,d,p,g;if(u>0)if(h=a*l-o,d=a*o-l,g=r*u,h>=0)if(d>=-g)if(d<=g){let _=1/u;h*=_,d*=_,p=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Nc).addScaledVector(to,d),p}intersectSphere(e,t){if(e.radius<0)return null;fi.subVectors(e.center,this.origin);let i=fi.dot(this.direction),s=fi.dot(fi)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,h=e.x-a.x,d=e.y-a.y,p=e.z-a.z,g=t.x-a.x,_=t.y-a.y,m=t.z-a.z,f=i.x-a.x,S=i.y-a.y,w=i.z-a.z,b=Math.abs(l),M=Math.abs(c),T=Math.abs(u),R,v,A,C,D,z,W,N,V,Z,j,ie;if(b>=M&&b>=T?(A=l,z=h,V=g,ie=f,l>=0?(R=c,v=u,C=d,D=p,W=_,N=m,Z=S,j=w):(R=u,v=c,C=p,D=d,W=m,N=_,Z=w,j=S)):M>=T?(A=c,z=d,V=_,ie=S,c>=0?(R=u,v=l,C=p,D=h,W=m,N=g,Z=w,j=f):(R=l,v=u,C=h,D=p,W=g,N=m,Z=f,j=w)):(A=u,z=p,V=m,ie=w,u>=0?(R=l,v=c,C=h,D=d,W=g,N=_,Z=f,j=S):(R=c,v=l,C=d,D=h,W=_,N=g,Z=S,j=f)),A===0)return null;let q=R/A,ee=v/A,ne=1/A,Ie=C-q*z,Re=D-ee*z,ft=W-q*V,Ze=N-ee*V,et=Z-q*ie,K=j-ee*ie,Q=et*Ze-K*ft,be=Ie*K-Re*et,Fe=ft*Re-Ze*Ie;if(s){if(Q<0||be<0||Fe<0)return null}else if((Q<0||be<0||Fe<0)&&(Q>0||be>0||Fe>0))return null;let ye=Q+be+Fe;if(ye===0)return null;let Ve=ne*(Q*z+be*V+Fe*ie);return(ye>0?Ve<0:Ve>0)?null:this.at(Ve/ye,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fn=class extends nn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ad=new Ne,os=new fs,io=new dn,Ed=new F,so=new F,ro=new F,ao=new F,Dc=new F,oo=new F,Rd=new F,lo=new F,Gt=class extends bt{constructor(e=new jt,t=new fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){oo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],h=r[l];u!==0&&(Dc.fromBufferAttribute(h,e),a?oo.addScaledVector(Dc,u):oo.addScaledVector(Dc.sub(t),u))}t.add(oo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),io.copy(i.boundingSphere),io.applyMatrix4(r),os.copy(e.ray).recast(e.near),!(io.containsPoint(os.origin)===!1&&(os.intersectSphere(io,Ed)===null||os.origin.distanceToSquared(Ed)>(e.far-e.near)**2))&&(Ad.copy(r).invert(),os.copy(e.ray).applyMatrix4(Ad),!(i.boundingBox!==null&&os.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,os)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let m=d[g],f=a[m.materialIndex],S=Math.max(m.start,p.start),w=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let b=S,M=w;b<M;b+=3){let T=o.getX(b),R=o.getX(b+1),v=o.getX(b+2);s=co(this,f,e,i,c,u,h,T,R,v),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let S=o.getX(m),w=o.getX(m+1),b=o.getX(m+2);s=co(this,a,e,i,c,u,h,S,w,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let m=d[g],f=a[m.materialIndex],S=Math.max(m.start,p.start),w=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=S,M=w;b<M;b+=3){let T=b,R=b+1,v=b+2;s=co(this,f,e,i,c,u,h,T,R,v),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let S=m,w=m+1,b=m+2;s=co(this,a,e,i,c,u,h,S,w,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Hm(n,e,t,i,s,r,a,o){let l;if(e.side===Wt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===ii,o),l===null)return null;lo.copy(o),lo.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(lo);return c<t.near||c>t.far?null:{distance:c,point:lo.clone(),object:n}}function co(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,so),n.getVertexPosition(l,ro),n.getVertexPosition(c,ao);let u=Hm(n,e,t,i,so,ro,ao,Rd);if(u){let h=new F;zi.getBarycoord(Rd,so,ro,ao,h),s&&(u.uv=zi.getInterpolatedAttribute(s,o,l,c,h,new Be)),r&&(u.uv1=zi.getInterpolatedAttribute(r,o,l,c,h,new Be)),a&&(u.normal=zi.getInterpolatedAttribute(a,o,l,c,h,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new F,materialIndex:0};zi.getNormal(so,ro,ao,d.normal),u.face=d,u.barycoord=h}return u}var Nr=new lt,Cd=new lt,Pd=new lt,Vm=new lt,Id=new Ne,ho=new F,Fc=new dn,Ld=new Ne,Uc=new fs,ps=class extends Gt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Hc,this.bindMatrix=new Ne,this.bindMatrixInverse=new Ne,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new bn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ho),this.boundingBox.expandByPoint(ho)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new dn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ho),this.boundingSphere.expandByPoint(ho)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fc.copy(this.boundingSphere),Fc.applyMatrix4(s),e.ray.intersectsSphere(Fc)!==!1&&(Ld.copy(s).invert(),Uc.copy(e.ray).applyMatrix4(Ld),!(this.boundingBox!==null&&Uc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Uc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new lt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Hc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===bf?this.bindMatrixInverse.copy(this.bindMatrix).invert():Te("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;Cd.fromBufferAttribute(s.attributes.skinIndex,e),Pd.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Nr.copy(t),t.set(0,0,0,0)):(Nr.set(...t,1),t.set(0,0,0)),Nr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Pd.getComponent(r);if(a!==0){let o=Cd.getComponent(r);Id.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(Vm.copy(Nr).applyMatrix4(Id),a)}}return t.isVector4&&(t.w=Nr.w),t.applyMatrix4(this.bindMatrixInverse)}},nr=class extends bt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Vi=class extends Ht{constructor(e=null,t=1,i=1,s,r,a,o,l,c=St,u=St,h,d){super(null,a,o,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},kd=new Ne,Gm=new Ne,Kr=class n{constructor(e=[],t=[]){this.uuid=On(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Te("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Ne)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Ne;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Gm;kd.multiplyMatrices(o,t[r]),kd.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Vi(t,e,e,sn,Sn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],a=t[r];a===void 0&&(Te("Skeleton: No bone found with UUID:",r),a=new nr),this.bones.push(a),this.boneInverses.push(new Ne().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=i[s];e.boneInverses.push(o.toArray())}return e}},_i=class extends Dt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Vs=new Ne,Nd=new Ne,uo=[],Dd=new bn,Wm=new Ne,Dr=new Gt,Fr=new dn,Yr=class extends Gt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _i(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Wm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Vs),Dd.copy(e.boundingBox).applyMatrix4(Vs),this.boundingBox.union(Dd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new dn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Vs),Fr.copy(e.boundingSphere).applyMatrix4(Vs),this.boundingSphere.union(Fr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Dr.geometry=this.geometry,Dr.material=this.material,Dr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fr.copy(this.boundingSphere),Fr.applyMatrix4(i),e.ray.intersectsSphere(Fr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Vs),Nd.multiplyMatrices(i,Vs),Dr.matrixWorld=Nd,Dr.raycast(e,uo);for(let a=0,o=uo.length;a<o;a++){let l=uo[a];l.instanceId=r,l.object=this,t.push(l)}uo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new _i(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Vi(new Float32Array(s*this.count),s,this.count,tl,Sn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ls=new dn,Xm=new Be(.5,.5),fo=new F,ir=class{constructor(e=new Dn,t=new Dn,i=new Dn,s=new Dn,r=new Dn,a=new Dn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Un,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],p=r[7],g=r[8],_=r[9],m=r[10],f=r[11],S=r[12],w=r[13],b=r[14],M=r[15];if(s[0].setComponents(c-a,p-u,f-g,M-S).normalize(),s[1].setComponents(c+a,p+u,f+g,M+S).normalize(),s[2].setComponents(c+o,p+h,f+_,M+w).normalize(),s[3].setComponents(c-o,p-h,f-_,M-w).normalize(),i)s[4].setComponents(l,d,m,b).normalize(),s[5].setComponents(c-l,p-d,f-m,M-b).normalize();else if(s[4].setComponents(c-l,p-d,f-m,M-b).normalize(),t===Un)s[5].setComponents(c+l,p+d,f+m,M+b).normalize();else if(t===js)s[5].setComponents(l,d,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(e){ls.center.set(0,0,0);let t=Xm.distanceTo(e.center);return ls.radius=.7071067811865476+t,ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(fo.x=s.normal.x>0?e.max.x:e.min.x,fo.y=s.normal.y>0?e.max.y:e.min.y,fo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(fo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var sr=class extends nn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ko=new F,No=new F,Fd=new Ne,Ur=new fs,po=new dn,Oc=new F,Ud=new F,ms=class extends bt{constructor(e=new jt,t=new sr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)ko.fromBufferAttribute(t,s-1),No.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=ko.distanceTo(No);e.setAttribute("lineDistance",new Qt(i,1))}else Te("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),po.copy(i.boundingSphere),po.applyMatrix4(s),po.radius+=r,e.ray.intersectsSphere(po)===!1)return;Fd.copy(s).invert(),Ur.copy(e.ray).applyMatrix4(Fd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){let p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=c){let f=u.getX(_),S=u.getX(_+1),w=mo(this,e,Ur,l,f,S,_);w&&t.push(w)}if(this.isLineLoop){let _=u.getX(g-1),m=u.getX(p),f=mo(this,e,Ur,l,_,m,g-1);f&&t.push(f)}}else{let p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=c){let f=mo(this,e,Ur,l,_,_+1,_);f&&t.push(f)}if(this.isLineLoop){let _=mo(this,e,Ur,l,g-1,p,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function mo(n,e,t,i,s,r,a){let o=n.geometry.attributes.position;if(ko.fromBufferAttribute(o,s),No.fromBufferAttribute(o,r),t.distanceSqToSegment(ko,No,Oc,Ud)>i)return;Oc.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Oc);if(!(c<e.near||c>e.far))return{distance:c,point:Ud.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var Od=new F,Bd=new F,jr=class extends ms{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Od.fromBufferAttribute(t,s),Bd.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Od.distanceTo(Bd);e.setAttribute("lineDistance",new Qt(i,1))}else Te("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Zr=class extends ms{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},rr=class extends nn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},zd=new Ne,qc=new fs,go=new dn,_o=new F,$r=class extends bt{constructor(e=new jt,t=new rr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),go.copy(i.boundingSphere),go.applyMatrix4(s),go.radius+=r,e.ray.intersectsSphere(go)===!1)return;zd.copy(s).invert(),qc.copy(e.ray).applyMatrix4(zd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,_=p;g<_;g++){let m=c.getX(g);_o.fromBufferAttribute(h,m),Hd(_o,m,l,s,e,t,this)}}else{let d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=d,_=p;g<_;g++)_o.fromBufferAttribute(h,g),Hd(_o,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Hd(n,e,t,i,s,r,a){let o=qc.distanceSqToPoint(n);if(o<t){let l=new F;qc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Jr=class extends Ht{constructor(e=[],t=Xi,i,s,r,a,o,l,c,u){super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Gi=class extends Ht{constructor(e,t,i=Hn,s,r,a,o=St,l=St,c,u=Jn,h=1){if(u!==Jn&&u!==qi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Js(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Do=class extends Gi{constructor(e,t=Hn,i=Xi,s,r,a=St,o=St,l,c=Jn){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Qr=class extends Ht{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ar=class n extends jt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],h=[],d=0,p=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(h,2));function g(_,m,f,S,w,b,M,T,R,v,A){let C=b/R,D=M/v,z=b/2,W=M/2,N=T/2,V=R+1,Z=v+1,j=0,ie=0,q=new F;for(let ee=0;ee<Z;ee++){let ne=ee*D-W;for(let Ie=0;Ie<V;Ie++){let Re=Ie*C-z;q[_]=Re*S,q[m]=ne*w,q[f]=N,c.push(q.x,q.y,q.z),q[_]=0,q[m]=0,q[f]=T>0?1:-1,u.push(q.x,q.y,q.z),h.push(Ie/R),h.push(1-ee/v),j+=1}}for(let ee=0;ee<v;ee++)for(let ne=0;ne<R;ne++){let Ie=d+ne+V*ee,Re=d+ne+V*(ee+1),ft=d+(ne+1)+V*(ee+1),Ze=d+(ne+1)+V*ee;l.push(Ie,Re,Ze),l.push(Re,ft,Ze),ie+=6}o.addGroup(p,ie,A),p+=ie,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ea=class n extends jt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,h=e/o,d=t/l,p=[],g=[],_=[],m=[];for(let f=0;f<u;f++){let S=f*d-a;for(let w=0;w<c;w++){let b=w*h-r;g.push(b,-S,0),_.push(0,0,1),m.push(w/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<o;S++){let w=S+c*f,b=S+c*(f+1),M=S+1+c*(f+1),T=S+1+c*f;p.push(w,b,T),p.push(b,M,T)}this.setIndex(p),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(_,3)),this.setAttribute("uv",new Qt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};function Ss(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Vd(s))s.isRenderTargetTexture?(Te("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Vd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Zt(n){let e={};for(let t=0;t<n.length;t++){let i=Ss(n[t]);for(let s in i)e[s]=i[s]}return e}function Vd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function qm(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Th(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:He.workingColorSpace}var Ff={clone:Ss,merge:Zt},Km=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ym=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xn=class extends nn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Km,this.fragmentShader=Ym,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ss(e.uniforms),this.uniformsGroups=qm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Pe().setHex(s.value);break;case"v2":this.uniforms[i].value=new Be().fromArray(s.value);break;case"v3":this.uniforms[i].value=new F().fromArray(s.value);break;case"v4":this.uniforms[i].value=new lt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new De().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Ne().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Fo=class extends xn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},gs=class extends nn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=va,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},pn=class extends gs{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ta=class extends nn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Pe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=va,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Uo=class extends nn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Oo=class extends nn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Bi(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function So(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function jm(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Gd(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,a=0;a!==i;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=n[o+l]}return s}function Zm(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push(...a)),r=n[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=n[s++];while(r!==void 0)}var ei=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Bo=class extends ei{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gc,endingEnd:Gc}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Wc:r=e,o=2*t-i;break;case Xc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Wc:a=e,l=2*i-t;break;case Xc:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),_=g*g,m=_*g,f=-d*m+2*d*_-d*g,S=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,w=(-1-p)*m+(1.5+p)*_+.5*g,b=p*m-p*_;for(let M=0;M!==o;++M)r[M]=f*a[u+M]+S*a[c+M]+w*a[l+M]+b*a[h+M];return r}},zo=class extends ei{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(s-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*u;return r}},Ho=class extends ei{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Vo=class extends ei{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,h=this.outTangents;if(!u||!h){let g=(i-t)/(s-t),_=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*_+a[l+m]*g;return r}let d=o*2,p=e-1;for(let g=0;g!==o;++g){let _=a[c+g],m=a[l+g],f=p*d+g*2,S=h[f],w=h[f+1],b=e*d+g*2,M=u[b],T=u[b+1],R=Jm(i,t,S,M,s);r[g]=Uf(R,_,w,T,m)}return r}};function Uf(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function $m(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function Jm(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=Uf(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let l=$m(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var mn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Bi(t,this.TimeBufferType),this.values=Bi(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Bi(e.times,Array),values:Bi(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),So(e.settings)&&(i.settings={inTangents:Bi(e.settings.inTangents,Array),outTangents:Bi(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ho(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Bo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Vo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case hs:t=this.InterpolantFactoryMethodDiscrete;break;case us:t=this.InterpolantFactoryMethodLinear;break;case bo:t=this.InterpolantFactoryMethodSmooth;break;case Vc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Te("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return hs;case this.InterpolantFactoryMethodLinear:return us;case this.InterpolantFactoryMethodSmooth:return bo;case this.InterpolantFactoryMethodBezier:return Vc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;So(this.settings)&&(Wd(this.settings.inTangents,e),Wd(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ke("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(ke("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){ke("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){ke("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&lm(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){ke("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===bo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let h=o*i,d=h-i,p=h+i;for(let g=0;g!==i;++g){let _=t[h+g];if(_!==t[d+g]||_!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*i,d=a*i;for(let p=0;p!==i;++p)t[d+p]=t[h+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,So(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Wd(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}mn.prototype.ValueTypeName="";mn.prototype.TimeBufferType=Float32Array;mn.prototype.ValueBufferType=Float32Array;mn.prototype.DefaultInterpolation=us;var yi=class extends mn{constructor(e,t,i){super(e,t,i)}};yi.prototype.ValueTypeName="bool";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=hs;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;var na=class extends mn{constructor(e,t,i,s){super(e,t,i,s)}};na.prototype.ValueTypeName="color";var vi=class extends mn{constructor(e,t,i,s){super(e,t,i,s)}};vi.prototype.ValueTypeName="number";var Go=class extends ei{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)tn.slerpFlat(r,0,a,c-o,a,c,l);return r}},bi=class extends mn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Go(this.times,this.values,this.getValueSize(),e)}};bi.prototype.ValueTypeName="quaternion";bi.prototype.InterpolantFactoryMethodSmooth=void 0;var xi=class extends mn{constructor(e,t,i){super(e,t,i)}};xi.prototype.ValueTypeName="string";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=hs;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Wi=class extends mn{constructor(e,t,i,s){super(e,t,i,s)}};Wi.prototype.ValueTypeName="vector";var ia=class{constructor(e="",t=-1,i=[],s=xf){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=On(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(e0(i[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=i.length;r!==a;++r)t.push(mn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let u=jm(l);l=Gd(l,1,u),c=Gd(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new vi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],u=c.name.match(r);if(u&&u.length>1){let h=u[1],d=s[h];d||(s[h]=d=[]),d.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,i));return a}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Qm(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return vi;case"vector":case"vector2":case"vector3":case"vector4":return Wi;case"color":return na;case"quaternion":return bi;case"bool":case"boolean":return yi;case"string":return xi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function e0(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Qm(n.type);if(n.times===void 0){let i=[],s=[];Zm(n.keys,i,s,"value"),n.times=i,n.values=s}let t;return e.parse!==void 0?t=e.parse(n):t=new e(n.name,n.times,n.values,n.interpolation),So(n.settings)&&(t.settings={inTangents:Bi(n.settings.inTangents,Float32Array),outTangents:Bi(n.settings.outTangents,Float32Array)}),t}var $n={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Xd(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Xd(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Xd(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Wo=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Of=new Wo,ti=class{constructor(e){this.manager=e!==void 0?e:Of,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ti.DEFAULT_MATERIAL_NAME="__DEFAULT";var pi={},Kc=class extends Error{constructor(e,t){super(e),this.response=t}},or=class extends ti{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=$n.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(pi[e]!==void 0){pi[e].push({onLoad:t,onProgress:i,onError:s});return}pi[e]=[],pi[e].push({onLoad:t,onProgress:i,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Te("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=pi[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0,_=0,m=new ReadableStream({start(f){S();function S(){h.read().then(({done:w,value:b})=>{if(w)f.close();else{_+=b.byteLength;let M=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let T=0,R=u.length;T<R;T++){let v=u[T];v.onProgress&&v.onProgress(M)}f.enqueue(b),S()}},w=>{f.error(w)})}}});return new Response(m)}else throw new Kc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{$n.add(`file:${e}`,c);let u=pi[e];delete pi[e];for(let h=0,d=u.length;h<d;h++){let p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{let u=pi[e];if(u===void 0)throw this.manager.itemError(e),c;delete pi[e];for(let h=0,d=u.length;h<d;h++){let p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Gs=new WeakMap,Xo=class extends ti{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=$n.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=Gs.get(a);h===void 0&&(h=[],Gs.set(a,h)),h.push({onLoad:t,onError:s})}return a}let o=Zs("img");function l(){u(),t&&t(this);let h=Gs.get(this)||[];for(let d=0;d<h.length;d++){let p=h[d];p.onLoad&&p.onLoad(this)}Gs.delete(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),$n.remove(`image:${e}`);let d=Gs.get(this)||[];for(let p=0;p<d.length;p++){let g=d[p];g.onError&&g.onError(h)}Gs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),$n.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var sa=class extends ti{constructor(e){super(e)}load(e,t,i,s){let r=new Ht,a=new Xo(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},_s=class extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ra=class extends _s{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Bc=new Ne,qd=new F,Kd=new F,lr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=gn,this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ir,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;qd.setFromMatrixPosition(e.matrixWorld),t.position.copy(qd),Kd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Bc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Bc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===js||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Bc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},yo=new F,vo=new tn,Zn=new F,aa=class extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=Un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(yo,vo,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yo,vo,Zn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(yo,vo,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yo,vo,Zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Oi=new F,Yd=new Be,jd=new Be,zt=class extends aa{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ds*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Or*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ds*2*Math.atan(Math.tan(Or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z)}getViewSize(e,t){return this.getViewBounds(e,Yd,jd),t.subVectors(jd,Yd)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Or*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Yc=class extends lr{constructor(){super(new zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=ds*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},oa=class extends _s{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Yc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},jc=class extends lr{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0}},la=class extends _s{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new jc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ni=class extends aa{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Zc=class extends lr{constructor(){super(new ni(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ys=class extends _s{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new Zc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Si=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var zc=new WeakMap,ca=class extends ti{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Te("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Te("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=$n.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{zc.has(a)===!0?(s&&s(zc.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return $n.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),zc.set(l,c),$n.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});$n.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ws=-90,Xs=1,qo=class extends bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new zt(Ws,Xs,e,t);s.layers=this.layers,this.add(s);let r=new zt(Ws,Xs,e,t);r.layers=this.layers,this.add(r);let a=new zt(Ws,Xs,e,t);a.layers=this.layers,this.add(a);let o=new zt(Ws,Xs,e,t);o.layers=this.layers,this.add(o);let l=new zt(Ws,Xs,e,t);l.layers=this.layers,this.add(l);let c=new zt(Ws,Xs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Un)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===js)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ko=class extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Ah="\\[\\]\\.:\\/",t0=new RegExp("["+Ah+"]","g"),Eh="[^"+Ah+"]",n0="[^"+Ah.replace("\\.","")+"]",i0=/((?:WC+[\/:])*)/.source.replace("WC",Eh),s0=/(WCOD+)?/.source.replace("WCOD",n0),r0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Eh),a0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Eh),o0=new RegExp("^"+i0+s0+r0+a0+"$"),l0=["material","materials","bones","map"],$c=class{constructor(e,t,i){let s=i||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},dt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(t0,"")}static parseTrackName(e){let t=o0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);l0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Te("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ke("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ke("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ke("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){ke("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){ke("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;ke("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};dt.Composite=$c;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var y1=new Float32Array(1);var kh=class kh{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};kh.prototype.isMatrix2=!0;var Jc=kh;function Rh(n,e,t,i){let s=c0(i);switch(t){case yh:return n*e;case tl:return n*e/s.components*s.byteLength;case nl:return n*e/s.components*s.byteLength;case Ki:return n*e*2/s.components*s.byteLength;case il:return n*e*2/s.components*s.byteLength;case vh:return n*e*3/s.components*s.byteLength;case sn:return n*e*4/s.components*s.byteLength;case sl:return n*e*4/s.components*s.byteLength;case da:case fa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case pa:case ma:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case al:case ll:return Math.max(n,16)*Math.max(e,8)/4;case rl:case ol:return Math.max(n,8)*Math.max(e,8)/2;case cl:case hl:case dl:case fl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ul:case ga:case pl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ml:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case gl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case _l:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case yl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case vl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case bl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case xl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Sl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ml:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case wl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Tl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Al:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case El:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Rl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Cl:case Pl:case Il:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ll:case kl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case _a:case Nl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function c0(n){switch(n){case gn:case ph:return{byteLength:1,components:1};case dr:case mh:case Vn:return{byteLength:2,components:1};case Qo:case el:return{byteLength:2,components:4};case Hn:case Jo:case Sn:return{byteLength:4,components:1};case gh:case _h:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Te("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function ap(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function u0(n){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){let u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){let g=h[d],_=h[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){let _=h[p];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var d0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,f0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,p0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,m0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,g0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,y0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,v0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,b0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,x0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,S0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,M0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,w0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,T0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,A0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,I0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,L0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,k0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,N0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,D0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,F0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,U0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,O0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,B0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,z0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,H0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,V0="gl_FragColor = linearToOutputTexel( gl_FragColor );",G0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,W0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,X0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,q0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,K0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Y0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,j0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Z0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,J0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Q0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,eg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ng=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ig=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,sg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,rg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ag=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,og=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,hg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ug=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pg=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,mg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_g=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Sg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ag=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Eg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Cg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ig=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ng=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Dg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Fg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ug=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Og=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Vg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,jg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$g=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Jg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,e_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,t_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,n_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,i_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,s_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,r_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,a_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,o_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,l_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,c_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,h_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,u_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,d_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,__=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,v_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,b_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,x_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,S_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,M_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,T_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,A_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,E_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,I_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,k_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,N_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,U_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,H_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,V_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,W_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,X_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:d0,alphahash_pars_fragment:f0,alphamap_fragment:p0,alphamap_pars_fragment:m0,alphatest_fragment:g0,alphatest_pars_fragment:_0,aomap_fragment:y0,aomap_pars_fragment:v0,batching_pars_vertex:b0,batching_vertex:x0,begin_vertex:S0,beginnormal_vertex:M0,bsdfs:w0,iridescence_fragment:T0,bumpmap_pars_fragment:A0,clipping_planes_fragment:E0,clipping_planes_pars_fragment:R0,clipping_planes_pars_vertex:C0,clipping_planes_vertex:P0,color_fragment:I0,color_pars_fragment:L0,color_pars_vertex:k0,color_vertex:N0,common:D0,cube_uv_reflection_fragment:F0,defaultnormal_vertex:U0,displacementmap_pars_vertex:O0,displacementmap_vertex:B0,emissivemap_fragment:z0,emissivemap_pars_fragment:H0,colorspace_fragment:V0,colorspace_pars_fragment:G0,envmap_fragment:W0,envmap_common_pars_fragment:X0,envmap_pars_fragment:q0,envmap_pars_vertex:K0,envmap_physical_pars_fragment:sg,envmap_vertex:Y0,fog_vertex:j0,fog_pars_vertex:Z0,fog_fragment:$0,fog_pars_fragment:J0,gradientmap_pars_fragment:Q0,lightmap_pars_fragment:eg,lights_lambert_fragment:tg,lights_lambert_pars_fragment:ng,lights_pars_begin:ig,lights_toon_fragment:rg,lights_toon_pars_fragment:ag,lights_phong_fragment:og,lights_phong_pars_fragment:lg,lights_physical_fragment:cg,lights_physical_pars_fragment:hg,lights_fragment_begin:ug,lights_fragment_maps:dg,lights_fragment_end:fg,lightprobes_pars_fragment:pg,logdepthbuf_fragment:mg,logdepthbuf_pars_fragment:gg,logdepthbuf_pars_vertex:_g,logdepthbuf_vertex:yg,map_fragment:vg,map_pars_fragment:bg,map_particle_fragment:xg,map_particle_pars_fragment:Sg,metalnessmap_fragment:Mg,metalnessmap_pars_fragment:wg,morphinstance_vertex:Tg,morphcolor_vertex:Ag,morphnormal_vertex:Eg,morphtarget_pars_vertex:Rg,morphtarget_vertex:Cg,normal_fragment_begin:Pg,normal_fragment_maps:Ig,normal_pars_fragment:Lg,normal_pars_vertex:kg,normal_vertex:Ng,normalmap_pars_fragment:Dg,clearcoat_normal_fragment_begin:Fg,clearcoat_normal_fragment_maps:Ug,clearcoat_pars_fragment:Og,iridescence_pars_fragment:Bg,opaque_fragment:zg,packing:Hg,premultiplied_alpha_fragment:Vg,project_vertex:Gg,dithering_fragment:Wg,dithering_pars_fragment:Xg,roughnessmap_fragment:qg,roughnessmap_pars_fragment:Kg,shadowmap_pars_fragment:Yg,shadowmap_pars_vertex:jg,shadowmap_vertex:Zg,shadowmask_pars_fragment:$g,skinbase_vertex:Jg,skinning_pars_vertex:Qg,skinning_vertex:e_,skinnormal_vertex:t_,specularmap_fragment:n_,specularmap_pars_fragment:i_,tonemapping_fragment:s_,tonemapping_pars_fragment:r_,transmission_fragment:a_,transmission_pars_fragment:o_,uv_pars_fragment:l_,uv_pars_vertex:c_,uv_vertex:h_,worldpos_vertex:u_,background_vert:d_,background_frag:f_,backgroundCube_vert:p_,backgroundCube_frag:m_,cube_vert:g_,cube_frag:__,depth_vert:y_,depth_frag:v_,distance_vert:b_,distance_frag:x_,equirect_vert:S_,equirect_frag:M_,linedashed_vert:w_,linedashed_frag:T_,meshbasic_vert:A_,meshbasic_frag:E_,meshlambert_vert:R_,meshlambert_frag:C_,meshmatcap_vert:P_,meshmatcap_frag:I_,meshnormal_vert:L_,meshnormal_frag:k_,meshphong_vert:N_,meshphong_frag:D_,meshphysical_vert:F_,meshphysical_frag:U_,meshtoon_vert:O_,meshtoon_frag:B_,points_vert:z_,points_frag:H_,shadow_vert:V_,shadow_frag:G_,sprite_vert:W_,sprite_frag:X_},ue={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},ai={basic:{uniforms:Zt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Zt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Pe(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Zt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Zt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Zt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Pe(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Zt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Zt([ue.points,ue.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Zt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Zt([ue.common,ue.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Zt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Zt([ue.sprite,ue.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:Zt([ue.common,ue.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:Zt([ue.lights,ue.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};ai.physical={uniforms:Zt([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};var Ul={r:0,b:0,g:0},q_=new Ne,op=new De;op.set(-1,0,0,0,1,0,0,0,1);function K_(n,e,t,i,s,r){let a=new Pe(0),o=s===!0?0:1,l,c,u=null,h=0,d=null;function p(S){let w=S.isScene===!0?S.background:null;if(w&&w.isTexture){let b=S.backgroundBlurriness>0;w=e.get(w,b)}return w}function g(S){let w=!1,b=p(S);b===null?m(a,o):b&&b.isColor&&(m(b,1),w=!0);let M=n.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(S,w){let b=p(w);b&&(b.isCubeTexture||b.mapping===ua)?(c===void 0&&(c=new Gt(new ar(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:Ss(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(q_.makeRotationFromEuler(w.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(op),c.material.toneMapped=He.getTransfer(b.colorSpace)!==st,(u!==b||h!==b.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=b,h=b.version,d=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Gt(new ea(2,2),new xn({name:"BackgroundMaterial",uniforms:Ss(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=He.getTransfer(b.colorSpace)!==st,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||h!==b.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=b,h=b.version,d=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,w){S.getRGB(Ul,Th(n)),t.buffers.color.setClear(Ul.r,Ul.g,Ul.b,w,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,w=1){a.set(S),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:g,addToRenderList:_,dispose:f}}function Y_(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,a=!1;function o(D,z,W,N,V){let Z=!1,j=h(D,N,W,z);r!==j&&(r=j,c(r.object)),Z=p(D,N,W,V),Z&&g(D,N,W,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,b(D,z,W,N),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return n.createVertexArray()}function c(D){return n.bindVertexArray(D)}function u(D){return n.deleteVertexArray(D)}function h(D,z,W,N){let V=N.wireframe===!0,Z=i[z.id];Z===void 0&&(Z={},i[z.id]=Z);let j=D.isInstancedMesh===!0?D.id:0,ie=Z[j];ie===void 0&&(ie={},Z[j]=ie);let q=ie[W.id];q===void 0&&(q={},ie[W.id]=q);let ee=q[V];return ee===void 0&&(ee=d(l()),q[V]=ee),ee}function d(D){let z=[],W=[],N=[];for(let V=0;V<t;V++)z[V]=0,W[V]=0,N[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:W,attributeDivisors:N,object:D,attributes:{},index:null}}function p(D,z,W,N){let V=r.attributes,Z=z.attributes,j=0,ie=W.getAttributes();for(let q in ie)if(ie[q].location>=0){let ne=V[q],Ie=Z[q];if(Ie===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(Ie=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(Ie=D.instanceColor)),ne===void 0||ne.attribute!==Ie||Ie&&ne.data!==Ie.data)return!0;j++}return r.attributesNum!==j||r.index!==N}function g(D,z,W,N){let V={},Z=z.attributes,j=0,ie=W.getAttributes();for(let q in ie)if(ie[q].location>=0){let ne=Z[q];ne===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(ne=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(ne=D.instanceColor));let Ie={};Ie.attribute=ne,ne&&ne.data&&(Ie.data=ne.data),V[q]=Ie,j++}r.attributes=V,r.attributesNum=j,r.index=N}function _(){let D=r.newAttributes;for(let z=0,W=D.length;z<W;z++)D[z]=0}function m(D){f(D,0)}function f(D,z){let W=r.newAttributes,N=r.enabledAttributes,V=r.attributeDivisors;W[D]=1,N[D]===0&&(n.enableVertexAttribArray(D),N[D]=1),V[D]!==z&&(n.vertexAttribDivisor(D,z),V[D]=z)}function S(){let D=r.newAttributes,z=r.enabledAttributes;for(let W=0,N=z.length;W<N;W++)z[W]!==D[W]&&(n.disableVertexAttribArray(W),z[W]=0)}function w(D,z,W,N,V,Z,j){j===!0?n.vertexAttribIPointer(D,z,W,V,Z):n.vertexAttribPointer(D,z,W,N,V,Z)}function b(D,z,W,N){_();let V=N.attributes,Z=W.getAttributes(),j=z.defaultAttributeValues;for(let ie in Z){let q=Z[ie];if(q.location>=0){let ee=V[ie];if(ee===void 0&&(ie==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),ie==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor)),ee!==void 0){let ne=ee.normalized,Ie=ee.itemSize,Re=e.get(ee);if(Re===void 0)continue;let ft=Re.buffer,Ze=Re.type,et=Re.bytesPerElement,K=Ze===n.INT||Ze===n.UNSIGNED_INT||ee.gpuType===Jo;if(ee.isInterleavedBufferAttribute){let Q=ee.data,be=Q.stride,Fe=ee.offset;if(Q.isInstancedInterleavedBuffer){for(let ye=0;ye<q.locationSize;ye++)f(q.location+ye,Q.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ye=0;ye<q.locationSize;ye++)m(q.location+ye);n.bindBuffer(n.ARRAY_BUFFER,ft);for(let ye=0;ye<q.locationSize;ye++)w(q.location+ye,Ie/q.locationSize,Ze,ne,be*et,(Fe+Ie/q.locationSize*ye)*et,K)}else{if(ee.isInstancedBufferAttribute){for(let Q=0;Q<q.locationSize;Q++)f(q.location+Q,ee.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Q=0;Q<q.locationSize;Q++)m(q.location+Q);n.bindBuffer(n.ARRAY_BUFFER,ft);for(let Q=0;Q<q.locationSize;Q++)w(q.location+Q,Ie/q.locationSize,Ze,ne,Ie*et,Ie/q.locationSize*Q*et,K)}}else if(j!==void 0){let ne=j[ie];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(q.location,ne);break;case 3:n.vertexAttrib3fv(q.location,ne);break;case 4:n.vertexAttrib4fv(q.location,ne);break;default:n.vertexAttrib1fv(q.location,ne)}}}}S()}function M(){A();for(let D in i){let z=i[D];for(let W in z){let N=z[W];for(let V in N){let Z=N[V];for(let j in Z)u(Z[j].object),delete Z[j];delete N[V]}}delete i[D]}}function T(D){if(i[D.id]===void 0)return;let z=i[D.id];for(let W in z){let N=z[W];for(let V in N){let Z=N[V];for(let j in Z)u(Z[j].object),delete Z[j];delete N[V]}}delete i[D.id]}function R(D){for(let z in i){let W=i[z];for(let N in W){let V=W[N];if(V[D.id]===void 0)continue;let Z=V[D.id];for(let j in Z)u(Z[j].object),delete Z[j];delete V[D.id]}}}function v(D){for(let z in i){let W=i[z],N=D.isInstancedMesh===!0?D.id:0,V=W[N];if(V!==void 0){for(let Z in V){let j=V[Z];for(let ie in j)u(j[ie].object),delete j[ie];delete V[Z]}delete W[N],Object.keys(W).length===0&&delete i[z]}}}function A(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:C,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function j_(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let p=0;p<u;p++)d+=c[p];t.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Z_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==sn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let v=R===Vn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==gn&&R!==Sn&&!v&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Te("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Te("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:b,maxSamples:M,samples:T}}function $_(n){let e=this,t=null,i=0,s=!1,r=!1,a=new Dn,o=new De,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let p=h.length!==0||d||i!==0||s;return s=d,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){let g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let S=r?0:i,w=S*4,b=f.clippingState||null;l.value=b,b=u(g,d,w,p);for(let M=0;M!==w;++M)b[M]=t[M];f.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,g){let _=h!==null?h.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let f=p+_*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let w=0,b=p;w!==_;++w,b+=4)a.copy(h[w]).applyMatrix4(S,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var gr=4,J_=6,Q_=20,ey=256,ba=new ni,Bf=new Pe,Nh=null,Dh=0,Fh=0,Uh=!1,ty=new F,Ms=new F,Bl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=ty}=r;Nh=this._renderer.getRenderTarget(),Dh=this._renderer.getActiveCubeFace(),Fh=this._renderer.getActiveMipmapLevel(),Uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Nh,Dh,Fh),this._renderer.xr.enabled=Uh,e.scissorTest=!1,mr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xi||e.mapping===bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nh=this._renderer.getRenderTarget(),Dh=this._renderer.getActiveCubeFace(),Fh=this._renderer.getActiveMipmapLevel(),Uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Et,minFilter:Et,generateMipmaps:!1,type:Vn,format:sn,colorSpace:en,depthBuffer:!1},s=zf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zf(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ny(r)),this._blurMaterial=sy(r,e,t),this._ggxMaterial=iy(r,e,t)}return s}_compileMaterial(e){let t=new Gt(new jt,e);this._renderer.compile(t,ba)}_sceneToCubeUV(e,t,i,s,r){let l=new zt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(Bf),h.toneMapping=Bn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Gt(new ar,new fn({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,f=!1,S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,f=!0):(m.color.copy(Bf),f=!0);for(let w=0;w<6;w++){let b=w%3;b===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[w],r.y,r.z)):b===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[w]));let M=this._cubeSize;mr(s,b*M,w>2?M:0,M,M),h.setRenderTarget(s),f&&h.render(_,l),h.render(e,l)}h.toneMapping=p,h.autoClear=d,e.background=S}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Xi||e.mapping===bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;mr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,ba)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=c*1.25,p=h*d,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-gr?i-g+gr:0),f=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-t,mr(r,m,f,3*_,2*_),s.setRenderTarget(r),s.render(o,ba),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,mr(e,m,f,3*_,2*_),s.setRenderTarget(e),s.render(o,ba)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let u=this._sizeLods[s],h=3*u*(s>this._lodMax-gr?s-this._lodMax+gr:0),d=4*(this._cubeSize-u);mr(t,h,d,3*u,2*u),a.setRenderTarget(t),a.render(l,ba)}};function ny(n){let e=[],t=[],i=n,s=n-gr+1+J_;for(let r=0;r<s;r++){let a=Math.pow(2,i);e.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,d=6,p=3,g=new Float32Array(p*d*h),_=new Float32Array(p*d*h);for(let f=0;f<h;f++){let S=f%3*2/3-1,w=f>2?0:-1,b=[S,w,0,S+2/3,w,0,S+2/3,w+1,0,S,w,0,S+2/3,w+1,0,S,w+1,0];g.set(b,p*d*f);for(let M=0;M<d;M++){let T=u[M*2]*2-1,R=u[M*2+1]*2-1;f===0?Ms.set(1,R,T):f===1?Ms.set(-T,1,-R):f===2?Ms.set(-T,R,1):f===3?Ms.set(-1,R,-T):f===4?Ms.set(-T,-1,R):Ms.set(T,R,-1),Ms.toArray(_,(f*d+M)*p)}}let m=new jt;m.setAttribute("position",new Dt(g,p)),m.setAttribute("outputDirection",new Dt(_,p)),t.push(new Gt(m,null)),i>gr&&i--}return{lodMeshes:t,sizeLods:e}}function zf(n,e,t){let i=new un(n,e,t);return i.texture.mapping=ua,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function mr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function iy(n,e,t){return new xn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ey,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Vl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function sy(n,e,t){return new xn({name:"SphericalGaussianBlur",defines:{SAMPLES:Q_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Vl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Hf(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Vf(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Vl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var zl=class extends un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Jr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ar(5,5,5),r=new xn({name:"CubemapFromEquirect",uniforms:Ss(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Wt,blending:si});r.uniforms.tEquirect.value=t;let a=new Gt(s,r),o=t.minFilter;return t.minFilter===zn&&(t.minFilter=Et),new qo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}};function ry(n){let e=new WeakMap,t=new WeakMap,i=null;function s(d,p=!1){return d==null?null:p?a(d):r(d)}function r(d){if(d&&d.isTexture){let p=d.mapping;if(p===jo||p===Zo)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let _=new zl(g.height);return _.fromEquirectangularTexture(n,d),e.set(d,_),d.addEventListener("dispose",c),o(_.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let p=d.mapping,g=p===jo||p===Zo,_=p===Xi||p===bs;if(g||_){let m=t.get(d),f=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return i===null&&(i=new Bl(n)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let S=d.image;return g&&S&&S.height>0||_&&S&&l(S)?(i===null&&(i=new Bl(n)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function o(d,p){return p===jo?d.mapping=Xi:p===Zo&&(d.mapping=bs),d}function l(d){let p=0,g=6;for(let _=0;_<g;_++)d[_]!==void 0&&p++;return p===g}function c(d){let p=d.target;p.removeEventListener("dispose",c);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(d){let p=d.target;p.removeEventListener("dispose",u);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function ay(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&cs("WebGLRenderer: "+i+" extension not supported."),s}}}function oy(n,e,t,i){let s={},r=new WeakMap;function a(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let p in d)e.update(d[p],n.ARRAY_BUFFER)}function c(h){let d=[],p=h.index,g=h.attributes.position,_=0;if(g===void 0)return;if(p!==null){let S=p.array;_=p.version;for(let w=0,b=S.length;w<b;w+=3){let M=S[w+0],T=S[w+1],R=S[w+2];d.push(M,T,T,R,R,M)}}else{let S=g.array;_=g.version;for(let w=0,b=S.length/3-1;w<b;w+=3){let M=w+0,T=w+1,R=w+2;d.push(M,T,T,R,R,M)}}let m=new(g.count>=65535?qr:Xr)(d,1);m.version=_;let f=r.get(h);f&&e.remove(f),r.set(h,m)}function u(h){let d=r.get(h);if(d){let p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function ly(n,e,t){let i;function s(h){i=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,d){n.drawElements(i,d,r,h*a),t.update(d,i,1)}function c(h,d,p){p!==0&&(n.drawElementsInstanced(i,d,r,h*a,p),t.update(d,i,p))}function u(h,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,h,0,p);let _=0;for(let m=0;m<p;m++)_+=d[m];t.update(_,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function cy(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:ke("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function hy(n,e,t){let i=new WeakMap,s=new lt;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=i.get(o);if(d===void 0||d.count!==h){let A=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",A)};d!==void 0&&d.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],w=0;p===!0&&(w=1),g===!0&&(w=2),_===!0&&(w=3);let b=o.attributes.position.count*w,M=1;b>e.maxTextureSize&&(M=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let T=new Float32Array(b*M*4*h),R=new Vr(T,b,M,h);R.type=Sn,R.needsUpdate=!0;let v=w*4;for(let C=0;C<h;C++){let D=m[C],z=f[C],W=S[C],N=b*M*4*C;for(let V=0;V<D.count;V++){let Z=V*v;p===!0&&(s.fromBufferAttribute(D,V),T[N+Z+0]=s.x,T[N+Z+1]=s.y,T[N+Z+2]=s.z,T[N+Z+3]=0),g===!0&&(s.fromBufferAttribute(z,V),T[N+Z+4]=s.x,T[N+Z+5]=s.y,T[N+Z+6]=s.z,T[N+Z+7]=0),_===!0&&(s.fromBufferAttribute(W,V),T[N+Z+8]=s.x,T[N+Z+9]=s.y,T[N+Z+10]=s.z,T[N+Z+11]=W.itemSize===4?s.w:1)}}d={count:h,texture:R,size:new Be(b,M)},i.set(o,d),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function uy(n,e,t,i,s){let r=new WeakMap;function a(c){let u=s.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return d}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var dy={[ah]:"LINEAR_TONE_MAPPING",[oh]:"REINHARD_TONE_MAPPING",[lh]:"CINEON_TONE_MAPPING",[ch]:"ACES_FILMIC_TONE_MAPPING",[uh]:"AGX_TONE_MAPPING",[dh]:"NEUTRAL_TONE_MAPPING",[hh]:"CUSTOM_TONE_MAPPING"};function fy(n,e,t,i,s,r){let a=new un(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new jt;c.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Qt([0,2,0,0,2,0],2));let u=new Fo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Gt(c,u),d=new ni(-1,1,1,-1,0,1),p=null,g=null,_=!1,m,f=null,S=[],w=!1;this.setSize=function(b,M){a.setSize(b,M),o!==null&&o.setSize(b,M),l!==null&&l.setSize(b,M);for(let T=0;T<S.length;T++){let R=S[T];R.setSize&&R.setSize(b,M)}},this.setEffects=function(b){S=b,w=S.length>0&&S[0].isRenderPass===!0;let M=a.width,T=a.height;S.length>0&&o===null&&(o=new un(M,T,{type:Vn,depthBuffer:!1,stencilBuffer:!1}),l=new un(M,T,{type:Vn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<S.length;R++){let v=S[R];v.setSize&&v.setSize(M,T)}},this.begin=function(b,M){if(_||b.toneMapping===Bn&&S.length===0)return!1;if(f=M,M!==null){let T=M.width,R=M.height;(a.width!==T||a.height!==R)&&this.setSize(T,R)}return w===!1&&b.setRenderTarget(a),m=b.toneMapping,b.toneMapping=Bn,!0},this.hasRenderPass=function(){return w},this.end=function(b,M){b.toneMapping=m,_=!0;let T=a,R=o;for(let v=0;v<S.length;v++){let A=S[v];A.enabled!==!1&&(A.render(b,R,T,M),A.needsSwap!==!1&&(T=R,R=R===o?l:o))}if(p!==b.outputColorSpace||g!==b.toneMapping){p=b.outputColorSpace,g=b.toneMapping,u.defines={},He.getTransfer(p)===st&&(u.defines.SRGB_TRANSFER="");let v=dy[g];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=T.texture,b.setRenderTarget(f),b.render(h,d),f=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var lp=new Ht,zh=new Gi(1,1),cp=new Vr,hp=new Lo,up=new Jr,Gf=[],Wf=[],Xf=new Float32Array(16),qf=new Float32Array(9),Kf=new Float32Array(4);function yr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Gf[s];if(r===void 0&&(r=new Float32Array(s),Gf[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Ft(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ut(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Gl(n,e){let t=Wf[e];t===void 0&&(t=new Int32Array(e),Wf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function py(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function my(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2fv(this.addr,e),Ut(t,e)}}function gy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;n.uniform3fv(this.addr,e),Ut(t,e)}}function _y(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4fv(this.addr,e),Ut(t,e)}}function yy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Ft(t,i))return;Kf.set(i),n.uniformMatrix2fv(this.addr,!1,Kf),Ut(t,i)}}function vy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Ft(t,i))return;qf.set(i),n.uniformMatrix3fv(this.addr,!1,qf),Ut(t,i)}}function by(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Ft(t,i))return;Xf.set(i),n.uniformMatrix4fv(this.addr,!1,Xf),Ut(t,i)}}function xy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Sy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2iv(this.addr,e),Ut(t,e)}}function My(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3iv(this.addr,e),Ut(t,e)}}function wy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4iv(this.addr,e),Ut(t,e)}}function Ty(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Ay(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2uiv(this.addr,e),Ut(t,e)}}function Ey(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3uiv(this.addr,e),Ut(t,e)}}function Ry(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4uiv(this.addr,e),Ut(t,e)}}function Cy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(zh.compareFunction=t.isReversedDepthBuffer()?Fl:Dl,r=zh):r=lp,t.setTexture2D(e||r,s)}function Py(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||hp,s)}function Iy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||up,s)}function Ly(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||cp,s)}function ky(n){switch(n){case 5126:return py;case 35664:return my;case 35665:return gy;case 35666:return _y;case 35674:return yy;case 35675:return vy;case 35676:return by;case 5124:case 35670:return xy;case 35667:case 35671:return Sy;case 35668:case 35672:return My;case 35669:case 35673:return wy;case 5125:return Ty;case 36294:return Ay;case 36295:return Ey;case 36296:return Ry;case 35678:case 36198:case 36298:case 36306:case 35682:return Cy;case 35679:case 36299:case 36307:return Py;case 35680:case 36300:case 36308:case 36293:return Iy;case 36289:case 36303:case 36311:case 36292:return Ly}}function Ny(n,e){n.uniform1fv(this.addr,e)}function Dy(n,e){let t=yr(e,this.size,2);n.uniform2fv(this.addr,t)}function Fy(n,e){let t=yr(e,this.size,3);n.uniform3fv(this.addr,t)}function Uy(n,e){let t=yr(e,this.size,4);n.uniform4fv(this.addr,t)}function Oy(n,e){let t=yr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function By(n,e){let t=yr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function zy(n,e){let t=yr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Hy(n,e){n.uniform1iv(this.addr,e)}function Vy(n,e){n.uniform2iv(this.addr,e)}function Gy(n,e){n.uniform3iv(this.addr,e)}function Wy(n,e){n.uniform4iv(this.addr,e)}function Xy(n,e){n.uniform1uiv(this.addr,e)}function qy(n,e){n.uniform2uiv(this.addr,e)}function Ky(n,e){n.uniform3uiv(this.addr,e)}function Yy(n,e){n.uniform4uiv(this.addr,e)}function jy(n,e,t){let i=this.cache,s=e.length,r=Gl(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=zh:a=lp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Zy(n,e,t){let i=this.cache,s=e.length,r=Gl(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||hp,r[a])}function $y(n,e,t){let i=this.cache,s=e.length,r=Gl(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||up,r[a])}function Jy(n,e,t){let i=this.cache,s=e.length,r=Gl(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||cp,r[a])}function Qy(n){switch(n){case 5126:return Ny;case 35664:return Dy;case 35665:return Fy;case 35666:return Uy;case 35674:return Oy;case 35675:return By;case 35676:return zy;case 5124:case 35670:return Hy;case 35667:case 35671:return Vy;case 35668:case 35672:return Gy;case 35669:case 35673:return Wy;case 5125:return Xy;case 36294:return qy;case 36295:return Ky;case 36296:return Yy;case 35678:case 36198:case 36298:case 36306:case 35682:return jy;case 35679:case 36299:case 36307:return Zy;case 35680:case 36300:case 36308:case 36293:return $y;case 36289:case 36303:case 36311:case 36292:return Jy}}var Hh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ky(t.type)}},Vh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qy(t.type)}},Gh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},Oh=/(\w+)(\])?(\[|\.)?/g;function Yf(n,e){n.seq.push(e),n.map[e.id]=e}function ev(n,e,t){let i=n.name,s=i.length;for(Oh.lastIndex=0;;){let r=Oh.exec(i),a=Oh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Yf(t,c===void 0?new Hh(o,n,e):new Vh(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new Gh(o),Yf(t,h)),t=h}}}var _r=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);ev(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function jf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var tv=37297,nv=0;function iv(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var Zf=new De;function sv(n){He._getMatrix(Zf,He.workingColorSpace,n);let e=`mat3( ${Zf.elements.map(t=>t.toFixed(4))} )`;switch(He.getTransfer(n)){case zr:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return Te("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function $f(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+iv(n.getShaderSource(e),o)}else return r}function rv(n,e){let t=sv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var av={[ah]:"Linear",[oh]:"Reinhard",[lh]:"Cineon",[ch]:"ACESFilmic",[uh]:"AgX",[dh]:"Neutral",[hh]:"Custom"};function ov(n,e){let t=av[e];return t===void 0?(Te("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ol=new F;function lv(){He.getLuminanceCoefficients(Ol);let n=Ol.x.toFixed(4),e=Ol.y.toFixed(4),t=Ol.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sa).join(`
`)}function hv(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function uv(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Sa(n){return n!==""}function Jf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var dv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wh(n){return n.replace(dv,pv)}var fv=new Map;function pv(n,e){let t=ze[e];if(t===void 0){let i=fv.get(e);if(i!==void 0)t=ze[i],Te('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Wh(t)}var mv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ep(n){return n.replace(mv,gv)}function gv(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function tp(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var _v={[ha]:"SHADOWMAP_TYPE_PCF",[cr]:"SHADOWMAP_TYPE_VSM"};function yv(n){return _v[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var vv={[Xi]:"ENVMAP_TYPE_CUBE",[bs]:"ENVMAP_TYPE_CUBE",[ua]:"ENVMAP_TYPE_CUBE_UV"};function bv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":vv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var xv={[bs]:"ENVMAP_MODE_REFRACTION"};function Sv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":xv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Mv={[rh]:"ENVMAP_BLENDING_MULTIPLY",[yf]:"ENVMAP_BLENDING_MIX",[vf]:"ENVMAP_BLENDING_ADD"};function wv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Mv[n.combine]||"ENVMAP_BLENDING_NONE"}function Tv(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Av(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=yv(t),c=bv(t),u=Sv(t),h=wv(t),d=Tv(t),p=cv(t),g=hv(r),_=s.createProgram(),m,f,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Sa).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Sa).join(`
`),f.length>0&&(f+=`
`)):(m=[tp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sa).join(`
`),f=[tp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bn?"#define TONE_MAPPING":"",t.toneMapping!==Bn?ze.tonemapping_pars_fragment:"",t.toneMapping!==Bn?ov("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,rv("linearToOutputTexel",t.outputColorSpace),lv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sa).join(`
`)),a=Wh(a),a=Jf(a,t),a=Qf(a,t),o=Wh(o),o=Jf(o,t),o=Qf(o,t),a=ep(a),o=ep(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Sh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let w=S+m+a,b=S+f+o,M=jf(s,s.VERTEX_SHADER,w),T=jf(s,s.FRAGMENT_SHADER,b);s.attachShader(_,M),s.attachShader(_,T),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(D){if(n.debug.checkShaderErrors){let z=s.getProgramInfoLog(_)||"",W=s.getShaderInfoLog(M)||"",N=s.getShaderInfoLog(T)||"",V=z.trim(),Z=W.trim(),j=N.trim(),ie=!0,q=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ie=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,M,T);else{let ee=$f(s,M,"vertex"),ne=$f(s,T,"fragment");ke("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+V+`
`+ee+`
`+ne)}else V!==""?Te("WebGLProgram: Program Info Log:",V):(Z===""||j==="")&&(q=!1);q&&(D.diagnostics={runnable:ie,programLog:V,vertexShader:{log:Z,prefix:m},fragmentShader:{log:j,prefix:f}})}s.deleteShader(M),s.deleteShader(T),v=new _r(s,_),A=uv(s,_)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(_,tv)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=T,this}var Ev=0,Xh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new qh(e),t.set(e,i)),i}},qh=class{constructor(e){this.id=Ev++,this.code=e,this.usedTimes=0}};function Rv(n){return n===Ki||n===ga||n===_a}function Cv(n,e,t,i,s,r){let a=new Gr,o=new Xh,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer,d=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,A,C,D,z,W){let N=D.fog,V=z.geometry,Z=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,j=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ie=e.get(v.envMap||Z,j),q=ie&&ie.mapping===ua?ie.image.height:null,ee=p[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&Te("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));let ne=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ie=ne!==void 0?ne.length:0,Re=0;V.morphAttributes.position!==void 0&&(Re=1),V.morphAttributes.normal!==void 0&&(Re=2),V.morphAttributes.color!==void 0&&(Re=3);let ft,Ze,et,K;if(ee){let mt=ai[ee];ft=mt.vertexShader,Ze=mt.fragmentShader}else{ft=v.vertexShader,Ze=v.fragmentShader;let mt=o.getVertexShaderStage(v),tt=o.getFragmentShaderStage(v);o.update(v,mt,tt),et=mt.id,K=tt.id}let Q=n.getRenderTarget(),be=n.state.buffers.depth.getReversed(),Fe=z.isInstancedMesh===!0,ye=z.isBatchedMesh===!0,Ve=!!v.map,Nt=!!v.matcap,We=!!ie,Je=!!v.aoMap,pt=!!v.lightMap,Ye=!!v.bumpMap&&v.wireframe===!1,yt=!!v.normalMap,Ot=!!v.displacementMap,rn=!!v.emissiveMap,xt=!!v.metalnessMap,Ct=!!v.roughnessMap,k=v.anisotropy>0,Xt=v.clearcoat>0,rt=v.dispersion>0,E=v.retroreflectivity>0,y=v.iridescence>0,U=v.sheen>0,H=v.transmission>0,X=k&&!!v.anisotropyMap,se=Xt&&!!v.clearcoatMap,re=Xt&&!!v.clearcoatNormalMap,Y=Xt&&!!v.clearcoatRoughnessMap,J=y&&!!v.iridescenceMap,ae=y&&!!v.iridescenceThicknessMap,Ae=U&&!!v.sheenColorMap,he=U&&!!v.sheenRoughnessMap,oe=!!v.specularMap,Ee=!!v.specularColorMap,Le=!!v.specularIntensityMap,Ue=H&&!!v.transmissionMap,I=H&&!!v.thicknessMap,le=!!v.gradientMap,$=!!v.alphaMap,ce=v.alphaTest>0,me=!!v.alphaHash,te=!!v.extensions,Ce=Bn;v.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ce=n.toneMapping);let Me={shaderID:ee,shaderType:v.type,shaderName:v.name,vertexShader:ft,fragmentShader:Ze,defines:v.defines,customVertexShaderID:et,customFragmentShaderID:K,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:ye,batchingColor:ye&&z._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&z.instanceColor!==null,instancingMorph:Fe&&z.morphTexture!==null,outputColorSpace:Q===null?n.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:He.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ve,matcap:Nt,envMap:We,envMapMode:We&&ie.mapping,envMapCubeUVHeight:q,aoMap:Je,lightMap:pt,bumpMap:Ye,normalMap:yt,displacementMap:Ot,emissiveMap:rn,normalMapObjectSpace:yt&&v.normalMapType===Mf,normalMapTangentSpace:yt&&v.normalMapType===va,packedNormalMap:yt&&v.normalMapType===va&&Rv(v.normalMap.format),metalnessMap:xt,roughnessMap:Ct,anisotropy:k,anisotropyMap:X,clearcoat:Xt,clearcoatMap:se,clearcoatNormalMap:re,clearcoatRoughnessMap:Y,dispersion:rt,retroreflection:E,iridescence:y,iridescenceMap:J,iridescenceThicknessMap:ae,sheen:U,sheenColorMap:Ae,sheenRoughnessMap:he,specularMap:oe,specularColorMap:Ee,specularIntensityMap:Le,transmission:H,transmissionMap:Ue,thicknessMap:I,gradientMap:le,opaque:v.transparent===!1&&v.blending===hr&&v.alphaToCoverage===!1,alphaMap:$,alphaTest:ce,alphaHash:me,combine:v.combine,mapUv:Ve&&g(v.map.channel),aoMapUv:Je&&g(v.aoMap.channel),lightMapUv:pt&&g(v.lightMap.channel),bumpMapUv:Ye&&g(v.bumpMap.channel),normalMapUv:yt&&g(v.normalMap.channel),displacementMapUv:Ot&&g(v.displacementMap.channel),emissiveMapUv:rn&&g(v.emissiveMap.channel),metalnessMapUv:xt&&g(v.metalnessMap.channel),roughnessMapUv:Ct&&g(v.roughnessMap.channel),anisotropyMapUv:X&&g(v.anisotropyMap.channel),clearcoatMapUv:se&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:re&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:he&&g(v.sheenRoughnessMap.channel),specularMapUv:oe&&g(v.specularMap.channel),specularColorMapUv:Ee&&g(v.specularColorMap.channel),specularIntensityMapUv:Le&&g(v.specularIntensityMap.channel),transmissionMapUv:Ue&&g(v.transmissionMap.channel),thicknessMapUv:I&&g(v.thicknessMap.channel),alphaMapUv:$&&g(v.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(yt||k),vertexNormals:!!V.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!V.attributes.uv&&(Ve||$),fog:!!N,useFog:v.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||V.attributes.normal===void 0&&yt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:be,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:Re,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ce,decodeVideoTexture:Ve&&v.map.isVideoTexture===!0&&He.getTransfer(v.map.colorSpace)===st,decodeVideoTextureEmissive:rn&&v.emissiveMap.isVideoTexture===!0&&He.getTransfer(v.emissiveMap.colorSpace)===st,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Rn,flipSided:v.side===Wt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:te&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&v.extensions.multiDraw===!0||ye)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Me.vertexUv1s=l.has(1),Me.vertexUv2s=l.has(2),Me.vertexUv3s=l.has(3),l.clear(),Me}function m(v){let A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(let C in v.defines)A.push(C),A.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(f(A,v),S(A,v),A.push(n.outputColorSpace)),A.push(v.customProgramCacheKey),A.join()}function f(v,A){v.push(A.precision),v.push(A.outputColorSpace),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.mapUv),v.push(A.alphaMapUv),v.push(A.lightMapUv),v.push(A.aoMapUv),v.push(A.bumpMapUv),v.push(A.normalMapUv),v.push(A.displacementMapUv),v.push(A.emissiveMapUv),v.push(A.metalnessMapUv),v.push(A.roughnessMapUv),v.push(A.anisotropyMapUv),v.push(A.clearcoatMapUv),v.push(A.clearcoatNormalMapUv),v.push(A.clearcoatRoughnessMapUv),v.push(A.iridescenceMapUv),v.push(A.iridescenceThicknessMapUv),v.push(A.sheenColorMapUv),v.push(A.sheenRoughnessMapUv),v.push(A.specularMapUv),v.push(A.specularColorMapUv),v.push(A.specularIntensityMapUv),v.push(A.transmissionMapUv),v.push(A.thicknessMapUv),v.push(A.combine),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numSunLights),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numSunLightShadows),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.numLightProbes),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function S(v,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function w(v){let A=p[v.type],C;if(A){let D=ai[A];C=Ff.clone(D.uniforms)}else C=v.uniforms;return C}function b(v,A){let C=u.get(A);return C!==void 0?++C.usedTimes:(C=new Av(n,A,v,s),c.push(C),u.set(A,C)),C}function M(v){if(--v.usedTimes===0){let A=c.indexOf(v);c[A]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function T(v){o.remove(v)}function R(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:w,acquireProgram:b,releaseProgram:M,releaseShaderCache:T,programs:c,dispose:R}}function Pv(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Iv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function np(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ip(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,g,_,m,f){let S=n[e];return S===void 0?(S={id:d.id,object:d,geometry:p,material:g,materialVariant:a(d),groupOrder:_,renderOrder:d.renderOrder,z:m,group:f},n[e]=S):(S.id=d.id,S.object=d,S.geometry=p,S.material=g,S.materialVariant=a(d),S.groupOrder=_,S.renderOrder=d.renderOrder,S.z=m,S.group=f),e++,S}function l(d,p,g,_,m,f,S){S.reversedDepth===!0&&(m=-m);let w=o(d,p,g,_,m,f);g.transmission>0?i.push(w):g.transparent===!0?s.push(w):t.push(w)}function c(d,p,g,_,m,f){let S=o(d,p,g,_,m,f);g.transmission>0?i.unshift(S):g.transparent===!0?s.unshift(S):t.unshift(S)}function u(d,p){t.length>1&&t.sort(d||Iv),i.length>1&&i.sort(p||np),s.length>1&&s.sort(p||np)}function h(){for(let d=e,p=n.length;d<p;d++){let g=n[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function Lv(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new ip,n.set(i,[a])):s>=r.length?(a=new ip,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function kv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new Pe};break;case"SpotLight":t={position:new F,direction:new F,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function Nv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Dv=0;function Fv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Uv(n){let e=new kv,t=Nv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);let s=new F,r=new Ne,a=new Ne;function o(c){let u=0,h=0,d=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,S=0,w=0,b=0,M=0,T=0,R=0,v=0,A=0,C=0;c.sort(Fv);for(let z=0,W=c.length;z<W;z++){let N=c[z],V=N.color,Z=N.intensity,j=N.distance,ie=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Ki?ie=N.shadow.map.texture:ie=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=V.r*Z,h+=V.g*Z,d+=V.b*Z;else if(N.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(N.sh.coefficients[q],Z);C++}else if(N.isSunLight){let q=e.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let ee=N.shadow,ne=t.get(N);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),i.sunShadow[g]=ne,i.sunShadowMap[g]=ie;let Ie=ee.getViewportCount();for(let Re=0;Re<Ie;Re++)i.sunShadowMatrix[_+Re]=ee.getMatrix(Re),i.sunShadowCascade[_+Re]=ee._cascadeData[Re];_+=Ie,g++}i.sun[p]=q,p++}else if(N.isDirectionalLight){let q=e.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let ee=N.shadow,ne=t.get(N);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,i.directionalShadow[m]=ne,i.directionalShadowMap[m]=ie,i.directionalShadowMatrix[m]=N.shadow.matrix,M++}i.directional[m]=q,m++}else if(N.isSpotLight){let q=e.get(N);q.position.setFromMatrixPosition(N.matrixWorld),q.color.copy(V).multiplyScalar(Z),q.distance=j,q.coneCos=Math.cos(N.angle),q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),q.decay=N.decay,i.spot[S]=q;let ee=N.shadow;if(N.map&&(i.spotLightMap[v]=N.map,v++,ee.updateMatrices(N),N.castShadow&&A++),i.spotLightMatrix[S]=ee.matrix,N.castShadow){let ne=t.get(N);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,i.spotShadow[S]=ne,i.spotShadowMap[S]=ie,R++}S++}else if(N.isRectAreaLight){let q=e.get(N);q.color.copy(V).multiplyScalar(Z),q.halfWidth.set(N.width*.5,0,0),q.halfHeight.set(0,N.height*.5,0),i.rectArea[w]=q,w++}else if(N.isPointLight){let q=e.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),q.distance=N.distance,q.decay=N.decay,N.castShadow){let ee=N.shadow,ne=t.get(N);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,ne.shadowCameraNear=ee.camera.near,ne.shadowCameraFar=ee.camera.far,i.pointShadow[f]=ne,i.pointShadowMap[f]=ie,i.pointShadowMatrix[f]=N.shadow.matrix,T++}i.point[f]=q,f++}else if(N.isHemisphereLight){let q=e.get(N);q.skyColor.copy(N.color).multiplyScalar(Z),q.groundColor.copy(N.groundColor).multiplyScalar(Z),i.hemi[b]=q,b++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;let D=i.hash;(D.sunLength!==p||D.directionalLength!==m||D.pointLength!==f||D.spotLength!==S||D.rectAreaLength!==w||D.hemiLength!==b||D.numSunShadows!==g||D.numDirectionalShadows!==M||D.numPointShadows!==T||D.numSpotShadows!==R||D.numSpotMaps!==v||D.numLightProbes!==C)&&(i.sun.length=p,i.directional.length=m,i.spot.length=S,i.rectArea.length=w,i.point.length=f,i.hemi.length=b,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.directionalShadowMatrix.length=M,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+v-A,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,D.sunLength=p,D.directionalLength=m,D.pointLength=f,D.spotLength=S,D.rectAreaLength=w,D.hemiLength=b,D.numSunShadows=g,D.numDirectionalShadows=M,D.numPointShadows=T,D.numSpotShadows=R,D.numSpotMaps=v,D.numLightProbes=C,i.version=Dv++)}function l(c,u){let h=0,d=0,p=0,g=0,_=0,m=0,f=u.matrixWorldInverse;for(let S=0,w=c.length;S<w;S++){let b=c[S];if(b.isSunLight){let M=i.sun[h];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(f),h++}else if(b.isDirectionalLight){let M=i.directional[d];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(f),d++}else if(b.isSpotLight){let M=i.spot[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(f),g++}else if(b.isRectAreaLight){let M=i.rectArea[_];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(f),a.identity(),r.copy(b.matrixWorld),r.premultiply(f),a.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){let M=i.point[p];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(f),p++}else if(b.isHemisphereLight){let M=i.hemi[m];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:i}}function sp(n){let e=new Uv(n),t=[],i=[],s=[];function r(d){h.camera=d,t.length=0,i.length=0,s.length=0}function a(d){t.push(d)}function o(d){i.push(d)}function l(d){s.push(d)}function c(){e.setup(t)}function u(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Ov(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new sp(n),e.set(s,[o])):r>=a.length?(o=new sp(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var Bv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Hv=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],Vv=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],rp=new Ne,xa=new F,Bh=new F;function Gv(n,e,t){let i=new ir,s=new Be,r=new Be,a=new lt,o=new Uo,l=new Oo,c={},u=t.maxTextureSize,h={[ii]:Wt,[Wt]:ii,[Rn]:Rn},d=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:Bv,fragmentShader:zv}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new jt;g.setAttribute("position",new Dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Gt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ha;let f=this.type;this.render=function(T,R,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Jd&&(Te("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ha);let A=n.getRenderTarget(),C=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),z=n.state;z.setBlending(si),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let W=f!==this.type;W&&R.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(V=>V.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,V=T.length;N<V;N++){let Z=T[N],j=Z.shadow;if(j===void 0){Te("WebGLShadowMap:",Z,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);let ie=j.getFrameExtents();s.multiply(ie),r.copy(j.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ie.x),s.x=r.x*ie.x,j.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ie.y),s.y=r.y*ie.y,j.mapSize.y=r.y));let q=n.state.buffers.depth.getReversed();if(j.camera._reversedDepth=q,j.map===null||W===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===cr){if(Z.isPointLight){Te("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new un(s.x,s.y,{format:Ki,type:Vn,minFilter:Et,magFilter:Et,generateMipmaps:!1}),j.map.texture.name=Z.name+".shadowMap",j.map.depthTexture=new Gi(s.x,s.y,Sn),j.map.depthTexture.name=Z.name+".shadowMapDepth",j.map.depthTexture.format=Jn,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=St,j.map.depthTexture.magFilter=St}else Z.isPointLight?(j.map=new zl(s.x),j.map.depthTexture=new Do(s.x,Hn)):(j.map=new un(s.x,s.y),j.map.depthTexture=new Gi(s.x,s.y,Hn)),j.map.depthTexture.name=Z.name+".shadowMap",j.map.depthTexture.format=Jn,this.type===ha?(j.map.depthTexture.compareFunction=q?Fl:Dl,j.map.depthTexture.minFilter=Et,j.map.depthTexture.magFilter=Et):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=St,j.map.depthTexture.magFilter=St);j.camera.updateProjectionMatrix()}j.map.isWebGLCubeRenderTarget!==!0&&(j.map.width!==s.x||j.map.height!==s.y)&&j.map.setSize(s.x,s.y);let ee=j.map.isWebGLCubeRenderTarget?6:j.getViewportCount();Z.isPointLight!==!0&&j.updateMatrices(Z,v);for(let ne=0;ne<ee;ne++){let Ie=j.getCamera(ne);if(Z.isPointLight){let Re=j.camera,ft=j.matrix,Ze=Z.distance||Re.far;Ze!==Re.far&&(Re.far=Ze,Re.updateProjectionMatrix()),xa.setFromMatrixPosition(Z.matrixWorld),Re.position.copy(xa),Bh.copy(Re.position),Bh.add(Hv[ne]),Re.up.copy(Vv[ne]),Re.lookAt(Bh),Re.updateMatrixWorld(),ft.makeTranslation(-xa.x,-xa.y,-xa.z),rp.multiplyMatrices(Re.projectionMatrix,Re.matrixWorldInverse),j._frustum.setFromProjectionMatrix(rp,Re.coordinateSystem,Re.reversedDepth)}if(j.map.isWebGLCubeRenderTarget)n.setRenderTarget(j.map,ne),n.clear();else{ne===0&&(n.setRenderTarget(j.map),n.clear());let Re=j.getViewport(ne);a.set(r.x*Re.x,r.y*Re.y,r.x*Re.z,r.y*Re.w),z.viewport(a)}i=j.getFrustum(ne),b(R,v,Ie,Z,this.type)}j.isPointLightShadow!==!0&&this.type===cr&&S(j,v),j.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(A,C,D)};function S(T,R){let v=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new un(s.x,s.y,{format:Ki,type:Vn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(R,null,v,d,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(R,null,v,p,_,null)}function w(T,R,v,A){let C=null,D=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)C=D;else if(C=v.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let z=C.uuid,W=R.uuid,N=c[z];N===void 0&&(N={},c[z]=N);let V=N[W];V===void 0&&(V=C.clone(),N[W]=V,R.addEventListener("dispose",M)),C=V}if(C.visible=R.visible,C.wireframe=R.wireframe,A===cr?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:h[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,v.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let z=n.properties.get(C);z.light=v}return C}function b(T,R,v,A,C){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&C===cr)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);let W=e.update(T),N=T.material;if(Array.isArray(N)){let V=W.groups;for(let Z=0,j=V.length;Z<j;Z++){let ie=V[Z],q=N[ie.materialIndex];if(q&&q.visible){let ee=w(T,q,A,C);T.onBeforeShadow(n,T,R,v,W,ee,ie),n.renderBufferDirect(v,null,W,ee,T,ie),T.onAfterShadow(n,T,R,v,W,ee,ie)}}}else if(N.visible){let V=w(T,N,A,C);T.onBeforeShadow(n,T,R,v,W,V,null),n.renderBufferDirect(v,null,W,V,T,null),T.onAfterShadow(n,T,R,v,W,V,null)}}let z=T.children;for(let W=0,N=z.length;W<N;W++)b(z[W],R,v,A,C)}function M(T){T.target.removeEventListener("dispose",M);for(let v in c){let A=c[v],C=T.target.uuid;C in A&&(A[C].dispose(),delete A[C])}}}function Wv(n,e){function t(){let I=!1,le=new lt,$=null,ce=new lt(0,0,0,0);return{setMask:function(me){$!==me&&!I&&(n.colorMask(me,me,me,me),$=me)},setLocked:function(me){I=me},setClear:function(me,te,Ce,Me,mt){mt===!0&&(me*=Me,te*=Me,Ce*=Me),le.set(me,te,Ce,Me),ce.equals(le)===!1&&(n.clearColor(me,te,Ce,Me),ce.copy(le))},reset:function(){I=!1,$=null,ce.set(-1,0,0,0)}}}function i(){let I=!1,le=!1,$=null,ce=null,me=null;return{setReversed:function(te){if(le!==te){let Ce=e.get("EXT_clip_control");te?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),le=te;let Me=me;me=null,this.setClear(Me)}},getReversed:function(){return le},setTest:function(te){te?Q(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(te){$!==te&&!I&&(n.depthMask(te),$=te)},setFunc:function(te){if(le&&(te=Nf[te]),ce!==te){switch(te){case Mo:n.depthFunc(n.NEVER);break;case wo:n.depthFunc(n.ALWAYS);break;case To:n.depthFunc(n.LESS);break;case Ks:n.depthFunc(n.LEQUAL);break;case Ao:n.depthFunc(n.EQUAL);break;case Eo:n.depthFunc(n.GEQUAL);break;case Ro:n.depthFunc(n.GREATER);break;case Co:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ce=te}},setLocked:function(te){I=te},setClear:function(te){me!==te&&(me=te,le&&(te=1-te),n.clearDepth(te))},reset:function(){I=!1,$=null,ce=null,me=null,le=!1}}}function s(){let I=!1,le=null,$=null,ce=null,me=null,te=null,Ce=null,Me=null,mt=null;return{setTest:function(tt){I||(tt?Q(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(tt){le!==tt&&!I&&(n.stencilMask(tt),le=tt)},setFunc:function(tt,Pn,Xn){($!==tt||ce!==Pn||me!==Xn)&&(n.stencilFunc(tt,Pn,Xn),$=tt,ce=Pn,me=Xn)},setOp:function(tt,Pn,Xn){(te!==tt||Ce!==Pn||Me!==Xn)&&(n.stencilOp(tt,Pn,Xn),te=tt,Ce=Pn,Me=Xn)},setLocked:function(tt){I=tt},setClear:function(tt){mt!==tt&&(n.clearStencil(tt),mt=tt)},reset:function(){I=!1,le=null,$=null,ce=null,me=null,te=null,Ce=null,Me=null,mt=null}}}let r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap,u={},h={},d={},p=new WeakMap,g=[],_=null,m=!1,f=null,S=null,w=null,b=null,M=null,T=null,R=null,v=new Pe(0,0,0),A=0,C=!1,D=null,z=null,W=null,N=null,V=null,Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,ie=0,q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(q)[1]),j=ie>=1):q.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),j=ie>=2);let ee=null,ne={},Ie=n.getParameter(n.SCISSOR_BOX),Re=n.getParameter(n.VIEWPORT),ft=new lt().fromArray(Ie),Ze=new lt().fromArray(Re);function et(I,le,$,ce){let me=new Uint8Array(4),te=n.createTexture();n.bindTexture(I,te),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ce=0;Ce<$;Ce++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(le,0,n.RGBA,1,1,ce,0,n.RGBA,n.UNSIGNED_BYTE,me):n.texImage2D(le+Ce,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,me);return te}let K={};K[n.TEXTURE_2D]=et(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=et(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[n.TEXTURE_2D_ARRAY]=et(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=et(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(n.DEPTH_TEST),a.setFunc(Ks),Ye(!1),yt(Qc),Q(n.CULL_FACE),Je(si);function Q(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function be(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function Fe(I,le){return d[I]!==le?(n.bindFramebuffer(I,le),d[I]=le,I===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=le),I===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=le),!0):!1}function ye(I,le){let $=g,ce=!1;if(I){$=p.get(le),$===void 0&&($=[],p.set(le,$));let me=I.textures;if($.length!==me.length||$[0]!==n.COLOR_ATTACHMENT0){for(let te=0,Ce=me.length;te<Ce;te++)$[te]=n.COLOR_ATTACHMENT0+te;$.length=me.length,ce=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,ce=!0);ce&&n.drawBuffers($)}function Ve(I){return _!==I?(n.useProgram(I),_=I,!0):!1}let Nt={[vs]:n.FUNC_ADD,[ef]:n.FUNC_SUBTRACT,[tf]:n.FUNC_REVERSE_SUBTRACT};Nt[nf]=n.MIN,Nt[sf]=n.MAX;let We={[rf]:n.ZERO,[af]:n.ONE,[of]:n.SRC_COLOR,[ih]:n.SRC_ALPHA,[ff]:n.SRC_ALPHA_SATURATE,[uf]:n.DST_COLOR,[cf]:n.DST_ALPHA,[lf]:n.ONE_MINUS_SRC_COLOR,[sh]:n.ONE_MINUS_SRC_ALPHA,[df]:n.ONE_MINUS_DST_COLOR,[hf]:n.ONE_MINUS_DST_ALPHA,[pf]:n.CONSTANT_COLOR,[mf]:n.ONE_MINUS_CONSTANT_COLOR,[gf]:n.CONSTANT_ALPHA,[_f]:n.ONE_MINUS_CONSTANT_ALPHA};function Je(I,le,$,ce,me,te,Ce,Me,mt,tt){if(I===si){m===!0&&(be(n.BLEND),m=!1);return}if(m===!1&&(Q(n.BLEND),m=!0),I!==Qd){if(I!==f||tt!==C){if((S!==vs||M!==vs)&&(n.blendEquation(n.FUNC_ADD),S=vs,M=vs),tt)switch(I){case hr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case eh:n.blendFunc(n.ONE,n.ONE);break;case th:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ke("WebGLState: Invalid blending: ",I);break}else switch(I){case hr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case eh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case th:ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nh:ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ke("WebGLState: Invalid blending: ",I);break}w=null,b=null,T=null,R=null,v.set(0,0,0),A=0,f=I,C=tt}return}me=me||le,te=te||$,Ce=Ce||ce,(le!==S||me!==M)&&(n.blendEquationSeparate(Nt[le],Nt[me]),S=le,M=me),($!==w||ce!==b||te!==T||Ce!==R)&&(n.blendFuncSeparate(We[$],We[ce],We[te],We[Ce]),w=$,b=ce,T=te,R=Ce),(Me.equals(v)===!1||mt!==A)&&(n.blendColor(Me.r,Me.g,Me.b,mt),v.copy(Me),A=mt),f=I,C=!1}function pt(I,le){I.side===Rn?be(n.CULL_FACE):Q(n.CULL_FACE);let $=I.side===Wt;le&&($=!$),Ye($),I.blending===hr&&I.transparent===!1?Je(si):Je(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let ce=I.stencilWrite;o.setTest(ce),ce&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),rn(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Q(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(I){D!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),D=I)}function yt(I){I!==Zd?(Q(n.CULL_FACE),I!==z&&(I===Qc?n.cullFace(n.BACK):I===$d?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),z=I}function Ot(I){I!==W&&(j&&n.lineWidth(I),W=I)}function rn(I,le,$){I?(Q(n.POLYGON_OFFSET_FILL),(N!==le||V!==$)&&(N=le,V=$,a.getReversed()&&(le=-le),n.polygonOffset(le,$))):be(n.POLYGON_OFFSET_FILL)}function xt(I){I?Q(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function Ct(I){I===void 0&&(I=n.TEXTURE0+Z-1),ee!==I&&(n.activeTexture(I),ee=I)}function k(I,le,$){$===void 0&&(ee===null?$=n.TEXTURE0+Z-1:$=ee);let ce=ne[$];ce===void 0&&(ce={type:void 0,texture:void 0},ne[$]=ce),(ce.type!==I||ce.texture!==le)&&(ee!==$&&(n.activeTexture($),ee=$),n.bindTexture(I,le||K[I]),ce.type=I,ce.texture=le)}function Xt(){let I=ne[ee];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function rt(){try{n.compressedTexImage2D(...arguments)}catch(I){ke("WebGLState:",I)}}function E(){try{n.compressedTexImage3D(...arguments)}catch(I){ke("WebGLState:",I)}}function y(){try{n.texSubImage2D(...arguments)}catch(I){ke("WebGLState:",I)}}function U(){try{n.texSubImage3D(...arguments)}catch(I){ke("WebGLState:",I)}}function H(){try{n.compressedTexSubImage2D(...arguments)}catch(I){ke("WebGLState:",I)}}function X(){try{n.compressedTexSubImage3D(...arguments)}catch(I){ke("WebGLState:",I)}}function se(){try{n.texStorage2D(...arguments)}catch(I){ke("WebGLState:",I)}}function re(){try{n.texStorage3D(...arguments)}catch(I){ke("WebGLState:",I)}}function Y(){try{n.texImage2D(...arguments)}catch(I){ke("WebGLState:",I)}}function J(){try{n.texImage3D(...arguments)}catch(I){ke("WebGLState:",I)}}function ae(I){return h[I]!==void 0?h[I]:n.getParameter(I)}function Ae(I,le){h[I]!==le&&(n.pixelStorei(I,le),h[I]=le)}function he(I){ft.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),ft.copy(I))}function oe(I){Ze.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Ze.copy(I))}function Ee(I,le){let $=c.get(le);$===void 0&&($=new WeakMap,c.set(le,$));let ce=$.get(I);ce===void 0&&(ce=n.getUniformBlockIndex(le,I.name),$.set(I,ce))}function Le(I,le){let ce=c.get(le).get(I);l.get(le)!==ce&&(n.uniformBlockBinding(le,ce,I.__bindingPointIndex),l.set(le,ce))}function Ue(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},ee=null,ne={},d={},p=new WeakMap,g=[],_=null,m=!1,f=null,S=null,w=null,b=null,M=null,T=null,R=null,v=new Pe(0,0,0),A=0,C=!1,D=null,z=null,W=null,N=null,V=null,ft.set(0,0,n.canvas.width,n.canvas.height),Ze.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:be,bindFramebuffer:Fe,drawBuffers:ye,useProgram:Ve,setBlending:Je,setMaterial:pt,setFlipSided:Ye,setCullFace:yt,setLineWidth:Ot,setPolygonOffset:rn,setScissorTest:xt,activeTexture:Ct,bindTexture:k,unbindTexture:Xt,compressedTexImage2D:rt,compressedTexImage3D:E,texImage2D:Y,texImage3D:J,pixelStorei:Ae,getParameter:ae,updateUBOMapping:Ee,uniformBlockBinding:Le,texStorage2D:se,texStorage3D:re,texSubImage2D:y,texSubImage3D:U,compressedTexSubImage2D:H,compressedTexSubImage3D:X,scissor:he,viewport:oe,reset:Ue}}function Xv(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Be,u=new WeakMap,h=new Set,d,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,y){return g?new OffscreenCanvas(E,y):Zs("canvas")}function m(E,y,U){let H=1,X=rt(E);if((X.width>U||X.height>U)&&(H=U/Math.max(X.width,X.height)),H<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let se=Math.floor(H*X.width),re=Math.floor(H*X.height);d===void 0&&(d=_(se,re));let Y=y?_(se,re):d;return Y.width=se,Y.height=re,Y.getContext("2d").drawImage(E,0,0,se,re),Te("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+se+"x"+re+")."),Y}else return"data"in E&&Te("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),E;return E}function f(E){return E.generateMipmaps}function S(E){n.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(E,y,U,H,X,se=!1){if(E!==null){if(n[E]!==void 0)return n[E];Te("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let re;H&&(re=e.get("EXT_texture_norm16"),re||Te("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=y;if(y===n.RED&&(U===n.FLOAT&&(Y=n.R32F),U===n.HALF_FLOAT&&(Y=n.R16F),U===n.UNSIGNED_BYTE&&(Y=n.R8),U===n.UNSIGNED_SHORT&&re&&(Y=re.R16_EXT),U===n.SHORT&&re&&(Y=re.R16_SNORM_EXT)),y===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(Y=n.R8UI),U===n.UNSIGNED_SHORT&&(Y=n.R16UI),U===n.UNSIGNED_INT&&(Y=n.R32UI),U===n.BYTE&&(Y=n.R8I),U===n.SHORT&&(Y=n.R16I),U===n.INT&&(Y=n.R32I)),y===n.RG&&(U===n.FLOAT&&(Y=n.RG32F),U===n.HALF_FLOAT&&(Y=n.RG16F),U===n.UNSIGNED_BYTE&&(Y=n.RG8),U===n.UNSIGNED_SHORT&&re&&(Y=re.RG16_EXT),U===n.SHORT&&re&&(Y=re.RG16_SNORM_EXT)),y===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(Y=n.RG8UI),U===n.UNSIGNED_SHORT&&(Y=n.RG16UI),U===n.UNSIGNED_INT&&(Y=n.RG32UI),U===n.BYTE&&(Y=n.RG8I),U===n.SHORT&&(Y=n.RG16I),U===n.INT&&(Y=n.RG32I)),y===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),U===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),U===n.UNSIGNED_INT&&(Y=n.RGB32UI),U===n.BYTE&&(Y=n.RGB8I),U===n.SHORT&&(Y=n.RGB16I),U===n.INT&&(Y=n.RGB32I)),y===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),U===n.UNSIGNED_INT&&(Y=n.RGBA32UI),U===n.BYTE&&(Y=n.RGBA8I),U===n.SHORT&&(Y=n.RGBA16I),U===n.INT&&(Y=n.RGBA32I)),y===n.RGB&&(U===n.UNSIGNED_SHORT&&re&&(Y=re.RGB16_EXT),U===n.SHORT&&re&&(Y=re.RGB16_SNORM_EXT),U===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),U===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),y===n.RGBA){let J=se?zr:He.getTransfer(X);U===n.FLOAT&&(Y=n.RGBA32F),U===n.HALF_FLOAT&&(Y=n.RGBA16F),U===n.UNSIGNED_BYTE&&(Y=J===st?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT&&re&&(Y=re.RGBA16_EXT),U===n.SHORT&&re&&(Y=re.RGBA16_SNORM_EXT),U===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function M(E,y){let U;return E?y===null||y===Hn||y===fr?U=n.DEPTH24_STENCIL8:y===Sn?U=n.DEPTH32F_STENCIL8:y===dr&&(U=n.DEPTH24_STENCIL8,Te("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Hn||y===fr?U=n.DEPTH_COMPONENT24:y===Sn?U=n.DEPTH_COMPONENT32F:y===dr&&(U=n.DEPTH_COMPONENT16),U}function T(E,y){return f(E)===!0||E.isFramebufferTexture&&E.minFilter!==St&&E.minFilter!==Et?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function R(E){let y=E.target;y.removeEventListener("dispose",R),A(y),y.isVideoTexture&&u.delete(y),y.isHTMLTexture&&h.delete(y)}function v(E){let y=E.target;y.removeEventListener("dispose",v),D(y)}function A(E){let y=i.get(E);if(y.__webglInit===void 0)return;let U=E.source,H=p.get(U);if(H){let X=H[y.__cacheKey];X.usedTimes--,X.usedTimes===0&&C(E),Object.keys(H).length===0&&p.delete(U)}i.remove(E)}function C(E){let y=i.get(E);n.deleteTexture(y.__webglTexture);let U=E.source,H=p.get(U);delete H[y.__cacheKey],a.memory.textures--}function D(E){let y=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(y.__webglFramebuffer[H]))for(let X=0;X<y.__webglFramebuffer[H].length;X++)n.deleteFramebuffer(y.__webglFramebuffer[H][X]);else n.deleteFramebuffer(y.__webglFramebuffer[H]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[H])}else{if(Array.isArray(y.__webglFramebuffer))for(let H=0;H<y.__webglFramebuffer.length;H++)n.deleteFramebuffer(y.__webglFramebuffer[H]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let H=0;H<y.__webglColorRenderbuffer.length;H++)y.__webglColorRenderbuffer[H]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[H]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let U=E.textures;for(let H=0,X=U.length;H<X;H++){let se=i.get(U[H]);se.__webglTexture&&(n.deleteTexture(se.__webglTexture),a.memory.textures--),i.remove(U[H])}i.remove(E)}let z=0;function W(){z=0}function N(){return z}function V(E){z=E}function Z(){let E=z;return E>=s.maxTextures&&Te("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,E}function j(E){let y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function ie(E,y){let U=i.get(E);if(E.isVideoTexture&&k(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&U.__version!==E.version){let H=E.image;if(H===null)Te("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Te("WebGLRenderer: Texture marked for update but image is incomplete");else{be(U,E,y);return}}else E.isExternalTexture&&(U.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+y)}function q(E,y){let U=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){be(U,E,y);return}else E.isExternalTexture&&(U.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+y)}function ee(E,y){let U=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){be(U,E,y);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+y)}function ne(E,y){let U=i.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&U.__version!==E.version){Fe(U,E,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+y)}let Ie={[Hi]:n.REPEAT,[En]:n.CLAMP_TO_EDGE,[Ys]:n.MIRRORED_REPEAT},Re={[St]:n.NEAREST,[$o]:n.NEAREST_MIPMAP_NEAREST,[xs]:n.NEAREST_MIPMAP_LINEAR,[Et]:n.LINEAR,[ur]:n.LINEAR_MIPMAP_NEAREST,[zn]:n.LINEAR_MIPMAP_LINEAR},ft={[Tf]:n.NEVER,[Pf]:n.ALWAYS,[Af]:n.LESS,[Dl]:n.LEQUAL,[Ef]:n.EQUAL,[Fl]:n.GEQUAL,[Rf]:n.GREATER,[Cf]:n.NOTEQUAL};function Ze(E,y){if(y.type===Sn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Et||y.magFilter===ur||y.magFilter===xs||y.magFilter===zn||y.minFilter===Et||y.minFilter===ur||y.minFilter===xs||y.minFilter===zn)&&Te("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,Ie[y.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,Ie[y.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,Ie[y.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,Re[y.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,Re[y.minFilter]),y.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,ft[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===St||y.minFilter!==xs&&y.minFilter!==zn||y.type===Sn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function et(E,y){let U=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",R));let H=y.source,X=p.get(H);X===void 0&&(X={},p.set(H,X));let se=j(y);if(se!==E.__cacheKey){X[se]===void 0&&(X[se]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,U=!0),X[se].usedTimes++;let re=X[E.__cacheKey];re!==void 0&&(X[E.__cacheKey].usedTimes--,re.usedTimes===0&&C(y)),E.__cacheKey=se,E.__webglTexture=X[se].texture}return U}function K(E,y,U){return Math.floor(Math.floor(E/U)/y)}function Q(E,y,U,H){let se=E.updateRanges;if(se.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,U,H,y.data);else{se.sort((Ae,he)=>Ae.start-he.start);let re=0;for(let Ae=1;Ae<se.length;Ae++){let he=se[re],oe=se[Ae],Ee=he.start+he.count,Le=K(oe.start,y.width,4),Ue=K(he.start,y.width,4);oe.start<=Ee+1&&Le===Ue&&K(oe.start+oe.count-1,y.width,4)===Le?he.count=Math.max(he.count,oe.start+oe.count-he.start):(++re,se[re]=oe)}se.length=re+1;let Y=t.getParameter(n.UNPACK_ROW_LENGTH),J=t.getParameter(n.UNPACK_SKIP_PIXELS),ae=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let Ae=0,he=se.length;Ae<he;Ae++){let oe=se[Ae],Ee=Math.floor(oe.start/4),Le=Math.ceil(oe.count/4),Ue=Ee%y.width,I=Math.floor(Ee/y.width),le=Le,$=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Ue),t.pixelStorei(n.UNPACK_SKIP_ROWS,I),t.texSubImage2D(n.TEXTURE_2D,0,Ue,I,le,$,U,H,y.data)}E.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Y),t.pixelStorei(n.UNPACK_SKIP_PIXELS,J),t.pixelStorei(n.UNPACK_SKIP_ROWS,ae)}}function be(E,y,U){let H=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(H=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(H=n.TEXTURE_3D);let X=et(E,y),se=y.source;t.bindTexture(H,E.__webglTexture,n.TEXTURE0+U);let re=i.get(se);if(se.version!==re.__version||X===!0){if(t.activeTexture(n.TEXTURE0+U),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let $=He.getPrimaries(He.workingColorSpace),ce=y.colorSpace===Mi?null:He.getPrimaries(y.colorSpace),me=y.colorSpace===Mi||$===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me)}t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment);let J=m(y.image,!1,s.maxTextureSize);J=Xt(y,J);let ae=r.convert(y.format,y.colorSpace),Ae=r.convert(y.type),he=b(y.internalFormat,ae,Ae,y.normalized,y.colorSpace,y.isVideoTexture);Ze(H,y);let oe,Ee=y.mipmaps,Le=y.isVideoTexture!==!0,Ue=re.__version===void 0||X===!0,I=se.dataReady,le=T(y,J);if(y.isDepthTexture)he=M(y.format===qi,y.type),Ue&&(Le?t.texStorage2D(n.TEXTURE_2D,1,he,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,he,J.width,J.height,0,ae,Ae,null));else if(y.isDataTexture)if(Ee.length>0){Le&&Ue&&t.texStorage2D(n.TEXTURE_2D,le,he,Ee[0].width,Ee[0].height);for(let $=0,ce=Ee.length;$<ce;$++)oe=Ee[$],Le?I&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,oe.width,oe.height,ae,Ae,oe.data):t.texImage2D(n.TEXTURE_2D,$,he,oe.width,oe.height,0,ae,Ae,oe.data);y.generateMipmaps=!1}else Le?(Ue&&t.texStorage2D(n.TEXTURE_2D,le,he,J.width,J.height),I&&Q(y,J,ae,Ae)):t.texImage2D(n.TEXTURE_2D,0,he,J.width,J.height,0,ae,Ae,J.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Le&&Ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,he,Ee[0].width,Ee[0].height,J.depth);for(let $=0,ce=Ee.length;$<ce;$++)if(oe=Ee[$],y.format!==sn)if(ae!==null)if(Le){if(I)if(y.layerUpdates.size>0){let me=Rh(oe.width,oe.height,y.format,y.type);for(let te of y.layerUpdates){let Ce=oe.data.subarray(te*me/oe.data.BYTES_PER_ELEMENT,(te+1)*me/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,te,oe.width,oe.height,1,ae,Ce)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,oe.width,oe.height,J.depth,ae,oe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,he,oe.width,oe.height,J.depth,0,oe.data,0,0);else Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?I&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,oe.width,oe.height,J.depth,ae,Ae,oe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,$,he,oe.width,oe.height,J.depth,0,ae,Ae,oe.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Le&&Ue&&t.texStorage2D(n.TEXTURE_2D,le,he,Ee[0].width,Ee[0].height);for(let $=0,ce=Ee.length;$<ce;$++)oe=Ee[$],y.format!==sn?ae!==null?Le?I&&t.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,oe.width,oe.height,ae,oe.data):t.compressedTexImage2D(n.TEXTURE_2D,$,he,oe.width,oe.height,0,oe.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?I&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,oe.width,oe.height,ae,Ae,oe.data):t.texImage2D(n.TEXTURE_2D,$,he,oe.width,oe.height,0,ae,Ae,oe.data)}else if(y.isDataArrayTexture)if(Le){if(Ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,he,J.width,J.height,J.depth),I)if(y.layerUpdates.size>0){let $=Rh(J.width,J.height,y.format,y.type);for(let ce of y.layerUpdates){let me=J.data.subarray(ce*$/J.data.BYTES_PER_ELEMENT,(ce+1)*$/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ce,J.width,J.height,1,ae,Ae,me)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ae,Ae,J.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,he,J.width,J.height,J.depth,0,ae,Ae,J.data);else if(y.isData3DTexture)Le?(Ue&&t.texStorage3D(n.TEXTURE_3D,le,he,J.width,J.height,J.depth),I&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ae,Ae,J.data)):t.texImage3D(n.TEXTURE_3D,0,he,J.width,J.height,J.depth,0,ae,Ae,J.data);else if(y.isFramebufferTexture){if(Ue)if(Le)t.texStorage2D(n.TEXTURE_2D,le,he,J.width,J.height);else{let $=J.width,ce=J.height;for(let me=0;me<le;me++)t.texImage2D(n.TEXTURE_2D,me,he,$,ce,0,ae,Ae,null),$>>=1,ce>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in n){let $=n.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),J.parentNode!==$){$.appendChild(J),h.add(y),$.onpaint=ce=>{let me=ce.changedElements;for(let te of h)me.includes(te.image)&&(te.needsUpdate=!0)},$.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,J);else{let me=n.RGBA,te=n.RGBA,Ce=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,me,te,Ce,J)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ee.length>0){if(Le&&Ue){let $=rt(Ee[0]);t.texStorage2D(n.TEXTURE_2D,le,he,$.width,$.height)}for(let $=0,ce=Ee.length;$<ce;$++)oe=Ee[$],Le?I&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,ae,Ae,oe):t.texImage2D(n.TEXTURE_2D,$,he,ae,Ae,oe);y.generateMipmaps=!1}else if(Le){if(Ue){let $=rt(J);t.texStorage2D(n.TEXTURE_2D,le,he,$.width,$.height)}I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae,Ae,J)}else t.texImage2D(n.TEXTURE_2D,0,he,ae,Ae,J);f(y)&&S(H),re.__version=se.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function Fe(E,y,U){if(y.image.length!==6)return;let H=et(E,y),X=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+U);let se=i.get(X);if(X.version!==se.__version||H===!0){t.activeTexture(n.TEXTURE0+U);let re=He.getPrimaries(He.workingColorSpace),Y=y.colorSpace===Mi?null:He.getPrimaries(y.colorSpace),J=y.colorSpace===Mi||re===Y?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let ae=y.isCompressedTexture||y.image[0].isCompressedTexture,Ae=y.image[0]&&y.image[0].isDataTexture,he=[];for(let te=0;te<6;te++)!ae&&!Ae?he[te]=m(y.image[te],!0,s.maxCubemapSize):he[te]=Ae?y.image[te].image:y.image[te],he[te]=Xt(y,he[te]);let oe=he[0],Ee=r.convert(y.format,y.colorSpace),Le=r.convert(y.type),Ue=b(y.internalFormat,Ee,Le,y.normalized,y.colorSpace),I=y.isVideoTexture!==!0,le=se.__version===void 0||H===!0,$=X.dataReady,ce=T(y,oe);Ze(n.TEXTURE_CUBE_MAP,y);let me;if(ae){I&&le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,Ue,oe.width,oe.height);for(let te=0;te<6;te++){me=he[te].mipmaps;for(let Ce=0;Ce<me.length;Ce++){let Me=me[Ce];y.format!==sn?Ee!==null?I?$&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ce,0,0,Me.width,Me.height,Ee,Me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ce,Ue,Me.width,Me.height,0,Me.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?$&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ce,0,0,Me.width,Me.height,Ee,Le,Me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ce,Ue,Me.width,Me.height,0,Ee,Le,Me.data)}}}else{if(me=y.mipmaps,I&&le){me.length>0&&ce++;let te=rt(he[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,Ue,te.width,te.height)}for(let te=0;te<6;te++)if(Ae){I?$&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,he[te].width,he[te].height,Ee,Le,he[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ue,he[te].width,he[te].height,0,Ee,Le,he[te].data);for(let Ce=0;Ce<me.length;Ce++){let mt=me[Ce].image[te].image;I?$&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ce+1,0,0,mt.width,mt.height,Ee,Le,mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ce+1,Ue,mt.width,mt.height,0,Ee,Le,mt.data)}}else{I?$&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ee,Le,he[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ue,Ee,Le,he[te]);for(let Ce=0;Ce<me.length;Ce++){let Me=me[Ce];I?$&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ce+1,0,0,Ee,Le,Me.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ce+1,Ue,Ee,Le,Me.image[te])}}}f(y)&&S(n.TEXTURE_CUBE_MAP),se.__version=X.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function ye(E,y,U,H,X,se){let re=r.convert(U.format,U.colorSpace),Y=r.convert(U.type),J=b(U.internalFormat,re,Y,U.normalized,U.colorSpace),ae=i.get(y),Ae=i.get(U);if(Ae.__renderTarget=y,!ae.__hasExternalTextures){let he=Math.max(1,y.width>>se),oe=Math.max(1,y.height>>se);X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?t.texImage3D(X,se,J,he,oe,y.depth,0,re,Y,null):t.texImage2D(X,se,J,he,oe,0,re,Y,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),Ct(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,H,X,Ae.__webglTexture,0,xt(y)):(X===n.TEXTURE_2D||X>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,H,X,Ae.__webglTexture,se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ve(E,y,U){if(n.bindRenderbuffer(n.RENDERBUFFER,E),y.depthBuffer){let H=y.depthTexture,X=H&&H.isDepthTexture?H.type:null,se=M(y.stencilBuffer,X),re=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ct(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xt(y),se,y.width,y.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,xt(y),se,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,se,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,E)}else{let H=y.textures;for(let X=0;X<H.length;X++){let se=H[X],re=r.convert(se.format,se.colorSpace),Y=r.convert(se.type),J=b(se.internalFormat,re,Y,se.normalized,se.colorSpace);Ct(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xt(y),J,y.width,y.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,xt(y),J,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,J,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Nt(E,y,U){let H=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let X=i.get(y.depthTexture);if(X.__renderTarget=y,(!X.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),H){if(X.__webglInit===void 0&&(X.__webglInit=!0,y.depthTexture.addEventListener("dispose",R)),X.__webglTexture===void 0){X.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),Ze(n.TEXTURE_CUBE_MAP,y.depthTexture);let ae=r.convert(y.depthTexture.format),Ae=r.convert(y.depthTexture.type),he;y.depthTexture.format===Jn?he=n.DEPTH_COMPONENT24:y.depthTexture.format===qi&&(he=n.DEPTH24_STENCIL8);for(let oe=0;oe<6;oe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,he,y.width,y.height,0,ae,Ae,null)}}else ie(y.depthTexture,0);let se=X.__webglTexture,re=xt(y),Y=H?n.TEXTURE_CUBE_MAP_POSITIVE_X+U:n.TEXTURE_2D,J=y.depthTexture.format===qi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===Jn)Ct(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,Y,se,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,J,Y,se,0);else if(y.depthTexture.format===qi)Ct(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,Y,se,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,J,Y,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function We(E){let y=i.get(E),U=E.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==E.depthTexture){let H=E.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),H){let X=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,H.removeEventListener("dispose",X)};H.addEventListener("dispose",X),y.__depthDisposeCallback=X}y.__boundDepthTexture=H}if(E.depthTexture&&!y.__autoAllocateDepthBuffer)if(U)for(let H=0;H<6;H++)Nt(y.__webglFramebuffer[H],E,H);else{let H=E.texture.mipmaps;H&&H.length>0?Nt(y.__webglFramebuffer[0],E,0):Nt(y.__webglFramebuffer,E,0)}else if(U){y.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[H]),y.__webglDepthbuffer[H]===void 0)y.__webglDepthbuffer[H]=n.createRenderbuffer(),Ve(y.__webglDepthbuffer[H],E,!1);else{let X=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=y.__webglDepthbuffer[H];n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,se)}}else{let H=E.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),Ve(y.__webglDepthbuffer,E,!1);else{let X=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,se)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Je(E,y,U){let H=i.get(E);y!==void 0&&ye(H.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&We(E)}function pt(E){let y=E.texture,U=i.get(E),H=i.get(y);E.addEventListener("dispose",v);let X=E.textures,se=E.isWebGLCubeRenderTarget===!0,re=X.length>1;if(re||(H.__webglTexture===void 0&&(H.__webglTexture=n.createTexture()),H.__version=y.version,a.memory.textures++),se){U.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(y.mipmaps&&y.mipmaps.length>0){U.__webglFramebuffer[Y]=[];for(let J=0;J<y.mipmaps.length;J++)U.__webglFramebuffer[Y][J]=n.createFramebuffer()}else U.__webglFramebuffer[Y]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){U.__webglFramebuffer=[];for(let Y=0;Y<y.mipmaps.length;Y++)U.__webglFramebuffer[Y]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(re)for(let Y=0,J=X.length;Y<J;Y++){let ae=i.get(X[Y]);ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture(),a.memory.textures++)}if(E.samples>0&&Ct(E)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let Y=0;Y<X.length;Y++){let J=X[Y];U.__webglColorRenderbuffer[Y]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[Y]);let ae=r.convert(J.format,J.colorSpace),Ae=r.convert(J.type),he=b(J.internalFormat,ae,Ae,J.normalized,J.colorSpace,E.isXRRenderTarget===!0),oe=xt(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,he,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,U.__webglColorRenderbuffer[Y])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),Ve(U.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(se){t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture),Ze(n.TEXTURE_CUBE_MAP,y);for(let Y=0;Y<6;Y++)if(y.mipmaps&&y.mipmaps.length>0)for(let J=0;J<y.mipmaps.length;J++)ye(U.__webglFramebuffer[Y][J],E,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,J);else ye(U.__webglFramebuffer[Y],E,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);f(y)&&S(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){for(let Y=0,J=X.length;Y<J;Y++){let ae=X[Y],Ae=i.get(ae),he=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(he=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,Ae.__webglTexture),Ze(he,ae),ye(U.__webglFramebuffer,E,ae,n.COLOR_ATTACHMENT0+Y,he,0),f(ae)&&S(he)}t.unbindTexture()}else{let Y=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Y=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Y,H.__webglTexture),Ze(Y,y),y.mipmaps&&y.mipmaps.length>0)for(let J=0;J<y.mipmaps.length;J++)ye(U.__webglFramebuffer[J],E,y,n.COLOR_ATTACHMENT0,Y,J);else ye(U.__webglFramebuffer,E,y,n.COLOR_ATTACHMENT0,Y,0);f(y)&&S(Y),t.unbindTexture()}E.depthBuffer&&We(E)}function Ye(E){let y=E.textures;for(let U=0,H=y.length;U<H;U++){let X=y[U];if(f(X)){let se=w(E),re=i.get(X).__webglTexture;t.bindTexture(se,re),S(se),t.unbindTexture()}}}let yt=[],Ot=[];function rn(E){if(E.samples>0){if(Ct(E)===!1){let y=E.textures,U=E.width,H=E.height,X=n.COLOR_BUFFER_BIT,se=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=i.get(E),Y=y.length>1;if(Y)for(let ae=0;ae<y.length;ae++)t.bindFramebuffer(n.FRAMEBUFFER,re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer);let J=E.texture.mipmaps;J&&J.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,re.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let ae=0;ae<y.length;ae++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(X|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(X|=n.STENCIL_BUFFER_BIT)),Y){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,re.__webglColorRenderbuffer[ae]);let Ae=i.get(y[ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ae,0)}n.blitFramebuffer(0,0,U,H,0,0,U,H,X,n.NEAREST),l===!0&&(yt.length=0,Ot.length=0,yt.push(n.COLOR_ATTACHMENT0+ae),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(yt.push(se),Ot.push(se),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ot)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,yt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Y)for(let ae=0;ae<y.length;ae++){t.bindFramebuffer(n.FRAMEBUFFER,re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,re.__webglColorRenderbuffer[ae]);let Ae=i.get(y[ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,Ae,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let y=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function xt(E){return Math.min(s.maxSamples,E.samples)}function Ct(E){let y=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function k(E){let y=a.render.frame;u.get(E)!==y&&(u.set(E,y),E.update())}function Xt(E,y){let U=E.colorSpace,H=E.format,X=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||U!==en&&U!==Mi&&(He.getTransfer(U)===st?(H!==sn||X!==gn)&&Te("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ke("WebGLTextures: Unsupported texture color space:",U)),y}function rt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=W,this.getTextureUnits=N,this.setTextureUnits=V,this.setTexture2D=ie,this.setTexture2DArray=q,this.setTexture3D=ee,this.setTextureCube=ne,this.rebindTextures=Je,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=rn,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Ct,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function qv(n,e){function t(i,s=Mi){let r,a=He.getTransfer(s);if(i===gn)return n.UNSIGNED_BYTE;if(i===Qo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===el)return n.UNSIGNED_SHORT_5_5_5_1;if(i===gh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===_h)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ph)return n.BYTE;if(i===mh)return n.SHORT;if(i===dr)return n.UNSIGNED_SHORT;if(i===Jo)return n.INT;if(i===Hn)return n.UNSIGNED_INT;if(i===Sn)return n.FLOAT;if(i===Vn)return n.HALF_FLOAT;if(i===yh)return n.ALPHA;if(i===vh)return n.RGB;if(i===sn)return n.RGBA;if(i===Jn)return n.DEPTH_COMPONENT;if(i===qi)return n.DEPTH_STENCIL;if(i===tl)return n.RED;if(i===nl)return n.RED_INTEGER;if(i===Ki)return n.RG;if(i===il)return n.RG_INTEGER;if(i===sl)return n.RGBA_INTEGER;if(i===da||i===fa||i===pa||i===ma)if(a===st)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===da)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===da)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===pa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ma)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===rl||i===al||i===ol||i===ll)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===rl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===al)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ol)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ll)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===cl||i===hl||i===ul||i===dl||i===fl||i===ga||i===pl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===cl||i===hl)return a===st?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ul)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===dl)return r.COMPRESSED_R11_EAC;if(i===fl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ga)return r.COMPRESSED_RG11_EAC;if(i===pl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ml||i===gl||i===_l||i===yl||i===vl||i===bl||i===xl||i===Sl||i===Ml||i===wl||i===Tl||i===Al||i===El||i===Rl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ml)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===gl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===_l)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===yl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===vl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===bl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Sl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ml)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Tl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Al)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===El)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Rl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Cl||i===Pl||i===Il)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Cl)return a===st?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Pl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Il)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ll||i===kl||i===_a||i===Nl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ll)return r.COMPRESSED_RED_RGTC1_EXT;if(i===kl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===_a)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Nl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Kv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Kh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Qr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new xn({vertexShader:Kv,fragmentShader:Yv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Gt(new ea(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Yh=class extends Qn{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null,_=typeof XRWebGLBinding<"u",m=new Kh,f={},S=t.getContextAttributes(),w=null,b=null,M=[],T=[],R=new Be,v=null,A=null,C=new zt;C.viewport=new lt;let D=new zt;D.viewport=new lt;let z=[C,D],W=new Ko,N=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let Q=M[K];return Q===void 0&&(Q=new Qs,M[K]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(K){let Q=M[K];return Q===void 0&&(Q=new Qs,M[K]=Q),Q.getGripSpace()},this.getHand=function(K){let Q=M[K];return Q===void 0&&(Q=new Qs,M[K]=Q),Q.getHandSpace()};function Z(K){let Q=T.indexOf(K.inputSource);if(Q===-1)return;let be=M[Q];be!==void 0&&(be.update(K.inputSource,K.frame,c||a),be.dispatchEvent({type:K.type,data:K.inputSource}))}function j(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",ie);for(let K=0;K<M.length;K++){let Q=T[K];Q!==null&&(T[K]=null,M[K].disconnect(Q))}N=null,V=null,m.reset();for(let K in f)delete f[K];if(e.setRenderTarget(w),p=null,d=null,h=null,s=null,b=null,et.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(R.width,R.height,!1),A!==null){let K=A.camera;K.fov=A.fov,K.zoom=A.zoom,K.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&Te("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Te("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",j),s.addEventListener("inputsourceschange",ie),S.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Fe=null,ye=null;S.depth&&(ye=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=S.stencil?qi:Jn,Fe=S.stencil?fr:Hn);let Ve={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Ve),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new un(d.textureWidth,d.textureHeight,{format:sn,type:gn,depthTexture:new Gi(d.textureWidth,d.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let be={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,be),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new un(p.framebufferWidth,p.framebufferHeight,{format:sn,type:gn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),et.setContext(s),et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ie(K){for(let Q=0;Q<K.removed.length;Q++){let be=K.removed[Q],Fe=T.indexOf(be);Fe>=0&&(T[Fe]=null,M[Fe].disconnect(be))}for(let Q=0;Q<K.added.length;Q++){let be=K.added[Q],Fe=T.indexOf(be);if(Fe===-1){for(let Ve=0;Ve<M.length;Ve++)if(Ve>=T.length){T.push(be),Fe=Ve;break}else if(T[Ve]===null){T[Ve]=be,Fe=Ve;break}if(Fe===-1)break}let ye=M[Fe];ye&&ye.connect(be)}}let q=new F,ee=new F;function ne(K,Q,be){q.setFromMatrixPosition(Q.matrixWorld),ee.setFromMatrixPosition(be.matrixWorld);let Fe=q.distanceTo(ee),ye=Q.projectionMatrix.elements,Ve=be.projectionMatrix.elements,Nt=ye[14]/(ye[10]-1),We=ye[14]/(ye[10]+1),Je=(ye[9]+1)/ye[5],pt=(ye[9]-1)/ye[5],Ye=(ye[8]-1)/ye[0],yt=(Ve[8]+1)/Ve[0],Ot=Nt*Ye,rn=Nt*yt,xt=Fe/(-Ye+yt),Ct=xt*-Ye;if(Q.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ct),K.translateZ(xt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),ye[10]===-1)K.projectionMatrix.copy(Q.projectionMatrix),K.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let k=Nt+xt,Xt=We+xt,rt=Ot-Ct,E=rn+(Fe-Ct),y=Je*We/Xt*k,U=pt*We/Xt*k;K.projectionMatrix.makePerspective(rt,E,y,U,k,Xt),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Ie(K,Q){Q===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(Q.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let Q=K.near,be=K.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(be=m.depthFar)),W.near=D.near=C.near=Q,W.far=D.far=C.far=be,(N!==W.near||V!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),N=W.near,V=W.far),W.layers.mask=K.layers.mask|6,C.layers.mask=W.layers.mask&-5,D.layers.mask=W.layers.mask&-3;let Fe=K.parent,ye=W.cameras;Ie(W,Fe);for(let Ve=0;Ve<ye.length;Ve++)Ie(ye[Ve],Fe);ye.length===2?ne(W,C,D):W.projectionMatrix.copy(C.projectionMatrix),A===null&&K.isPerspectiveCamera&&(A={camera:K,fov:K.fov,zoom:K.zoom}),Re(K,W,Fe)};function Re(K,Q,be){be===null?K.matrix.copy(Q.matrixWorld):(K.matrix.copy(be.matrixWorld),K.matrix.invert(),K.matrix.multiply(Q.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(Q.projectionMatrix),K.projectionMatrixInverse.copy(Q.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ds*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(W)},this.getCameraTexture=function(K){return f[K]};let ft=null;function Ze(K,Q){if(u=Q.getViewerPose(c||a),g=Q,u!==null){let be=u.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let Fe=!1;be.length!==W.cameras.length&&(W.cameras.length=0,Fe=!0);for(let We=0;We<be.length;We++){let Je=be[We],pt=null;if(p!==null)pt=p.getViewport(Je);else{let yt=h.getViewSubImage(d,Je);pt=yt.viewport,We===0&&(e.setRenderTargetTextures(b,yt.colorTexture,yt.depthStencilTexture),e.setRenderTarget(b))}let Ye=z[We];Ye===void 0&&(Ye=new zt,Ye.layers.enable(We),Ye.viewport=new lt,z[We]=Ye),Ye.matrix.fromArray(Je.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(Je.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(pt.x,pt.y,pt.width,pt.height),We===0&&(W.matrix.copy(Ye.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Fe===!0&&W.cameras.push(Ye)}let ye=s.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=i.getBinding();let We=h.getDepthInformation(be[0]);We&&We.isValid&&We.texture&&m.init(We,s.renderState)}if(ye&&ye.includes("camera-access")&&_){e.state.unbindTexture(),h=i.getBinding();for(let We=0;We<be.length;We++){let Je=be[We].camera;if(Je){let pt=f[Je];pt||(pt=new Qr,f[Je]=pt);let Ye=h.getCameraImage(Je);pt.sourceTexture=Ye}}}}for(let be=0;be<M.length;be++){let Fe=T[be],ye=M[be];Fe!==null&&ye!==void 0&&ye.update(Fe,Q,c||a)}ft&&ft(K,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}let et=new ap;et.setAnimationLoop(Ze),this.setAnimationLoop=function(K){ft=K},this.dispose=function(){}}},jv=new Ne,dp=new De;dp.set(-1,0,0,0,1,0,0,0,1);function Zv(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Th(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,S,w,b){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,b)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,S,w):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Wt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Wt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let S=e.get(f),w=S.envMap,b=S.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(jv.makeRotationFromEuler(b)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(dp),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,S,w){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=w*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Wt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){let S=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function $v(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){let T=M.program;i.uniformBlockBinding(b,T)}function c(b,M){let T=s[b.id];T===void 0&&(m(b),T=u(b),s[b.id]=T,b.addEventListener("dispose",S));let R=M.program;i.updateUBOMapping(b,R);let v=e.render.frame;r[b.id]!==v&&(d(b),r[b.id]=v)}function u(b){let M=h();b.__bindingPointIndex=M;let T=n.createBuffer(),R=b.__size,v=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,R,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,T),T}function h(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let M=s[b.id],T=b.uniforms,R=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let v=0,A=T.length;v<A;v++){let C=T[v];if(Array.isArray(C))for(let D=0,z=C.length;D<z;D++)p(C[D],v,D,R);else p(C,v,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(b,M,T,R){if(_(b,M,T,R)===!0){let v=b.__offset,A=b.value;if(Array.isArray(A)){let C=0;for(let D=0;D<A.length;D++){let z=A[D],W=f(z);g(z,b.__data,C),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(C+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,b.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,b.__data)}}function g(b,M,T){typeof b=="number"||typeof b=="boolean"?M[0]=b:b.isMatrix3?(M[0]=b.elements[0],M[1]=b.elements[1],M[2]=b.elements[2],M[3]=0,M[4]=b.elements[3],M[5]=b.elements[4],M[6]=b.elements[5],M[7]=0,M[8]=b.elements[6],M[9]=b.elements[7],M[10]=b.elements[8],M[11]=0):ArrayBuffer.isView(b)?M.set(new b.constructor(b.buffer,b.byteOffset,M.length)):b.toArray(M,T)}function _(b,M,T,R){let v=b.value,A=M+"_"+T;if(R[A]===void 0)return typeof v=="number"||typeof v=="boolean"?R[A]=v:ArrayBuffer.isView(v)?R[A]=v.slice():R[A]=v.clone(),!0;{let C=R[A];if(typeof v=="number"||typeof v=="boolean"){if(C!==v)return R[A]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(C.equals(v)===!1)return C.copy(v),!0}}return!1}function m(b){let M=b.uniforms,T=0,R=16;for(let A=0,C=M.length;A<C;A++){let D=Array.isArray(M[A])?M[A]:[M[A]];for(let z=0,W=D.length;z<W;z++){let N=D[z],V=Array.isArray(N.value)?N.value:[N.value];for(let Z=0,j=V.length;Z<j;Z++){let ie=V[Z],q=f(ie),ee=T%R,ne=ee%q.boundary,Ie=ee+ne;T+=ne,Ie!==0&&R-Ie<q.storage&&(T+=R-Ie),N.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=T,T+=q.storage}}}let v=T%R;return v>0&&(T+=R-v),b.__size=T,b.__cache={},this}function f(b){let M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?Te("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(M.boundary=16,M.storage=b.byteLength):Te("WebGLRenderer: Unsupported uniform value type.",b),M}function S(b){let M=b.target;M.removeEventListener("dispose",S);let T=a.indexOf(M.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function w(){for(let b in s)n.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:w}}var Jv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ri=null;function Qv(){return ri===null&&(ri=new Vi(Jv,16,16,Ki,Vn),ri.name="DFG_LUT",ri.minFilter=Et,ri.magFilter=Et,ri.wrapS=En,ri.wrapT=En,ri.generateMipmaps=!1,ri.needsUpdate=!0),ri}var Hl=class{constructor(e={}){let{canvas:t=If(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:p=gn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let _=p,m=new Set([sl,il,nl]),f=new Set([gn,Hn,dr,fr,Qo,el]),S=new Uint32Array(4),w=new Int32Array(4),b=new F,M=null,T=null,R=[],v=[],A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,D=!1,z=null,W=null,N=null,V=null;this._outputColorSpace=At;let Z=0,j=0,ie=null,q=-1,ee=null,ne=new lt,Ie=new lt,Re=null,ft=new Pe(0),Ze=0,et=t.width,K=t.height,Q=1,be=null,Fe=null,ye=new lt(0,0,et,K),Ve=new lt(0,0,et,K),Nt=!1,We=new ir,Je=!1,pt=!1,Ye=new Ne,yt=new F,Ot=new lt,rn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},xt=!1;function Ct(){return ie===null?Q:1}let k=i;function Xt(x,P){return t.getContext(x,P)}let rt,E,y,U,H,X,se,re,Y,J,ae,Ae,he,oe,Ee,Le,Ue,I,le,$,ce,me,te;try{let x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",mt,!1),t.addEventListener("webglcontextrestored",tt,!1),t.addEventListener("webglcontextcreationerror",Pn,!1),k===null){let P="webgl2";if(k=Xt(P,x),k===null)throw Xt(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ce()}catch(x){throw t.removeEventListener("webglcontextlost",mt,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",Pn,!1),ke("WebGLRenderer: "+x.message),x}function Ce(){rt=new ay(k),rt.init(),ce=new qv(k,rt),E=new Z_(k,rt,e,ce),y=new Wv(k,rt),E.reversedDepthBuffer&&d&&y.buffers.depth.setReversed(!0),W=k.createFramebuffer(),N=k.createFramebuffer(),V=k.createFramebuffer(),U=new cy(k),H=new Pv,X=new Xv(k,rt,y,H,E,ce,U),se=new ry(C),re=new u0(k),me=new Y_(k,re),Y=new oy(k,re,U,me),J=new uy(k,Y,re,me,U),I=new hy(k,E,X),Ee=new $_(H),ae=new Cv(C,se,rt,E,me,Ee),Ae=new Zv(C,H),he=new Lv,oe=new Ov(rt),Ue=new K_(C,se,y,J,g,l),Le=new Gv(C,J,E),te=new $v(k,U,E,y),le=new j_(k,rt,U),$=new ly(k,rt,U),U.programs=ae.programs,C.capabilities=E,C.extensions=rt,C.properties=H,C.renderLists=he,C.shadowMap=Le,C.state=y,C.info=U}_!==gn&&(A=new fy(_,t.width,t.height,o,s,r));let Me=new Yh(C,k);this.xr=Me,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let x=rt.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=rt.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(x){x!==void 0&&(Q=x,this.setSize(et,K,!1))},this.getSize=function(x){return x.set(et,K)},this.setSize=function(x,P,G=!0){if(Me.isPresenting){Te("WebGLRenderer: Can't change size while VR device is presenting.");return}et=x,K=P,t.width=Math.floor(x*Q),t.height=Math.floor(P*Q),G===!0&&(t.style.width=x+"px",t.style.height=P+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,x,P)},this.getDrawingBufferSize=function(x){return x.set(et*Q,K*Q).floor()},this.setDrawingBufferSize=function(x,P,G){et=x,K=P,Q=G,t.width=Math.floor(x*G),t.height=Math.floor(P*G),this.setViewport(0,0,x,P)},this.setEffects=function(x){if(_===gn){ke("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let P=0;P<x.length;P++)if(x[P].isOutputPass===!0){Te("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(ne)},this.getViewport=function(x){return x.copy(ye)},this.setViewport=function(x,P,G,O){x.isVector4?ye.set(x.x,x.y,x.z,x.w):ye.set(x,P,G,O),y.viewport(ne.copy(ye).multiplyScalar(Q).round())},this.getScissor=function(x){return x.copy(Ve)},this.setScissor=function(x,P,G,O){x.isVector4?Ve.set(x.x,x.y,x.z,x.w):Ve.set(x,P,G,O),y.scissor(Ie.copy(Ve).multiplyScalar(Q).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(x){y.setScissorTest(Nt=x)},this.setOpaqueSort=function(x){be=x},this.setTransparentSort=function(x){Fe=x},this.getClearColor=function(x){return x.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(x=!0,P=!0,G=!0){let O=0;if(x){let B=!1;if(ie!==null){let fe=ie.texture.format;B=m.has(fe)}if(B){let fe=ie.texture.type,ve=f.has(fe),de=Ue.getClearColor(),xe=Ue.getClearAlpha(),we=de.r,Oe=de.g,Xe=de.b;ve?(S[0]=we,S[1]=Oe,S[2]=Xe,S[3]=xe,k.clearBufferuiv(k.COLOR,0,S)):(w[0]=we,w[1]=Oe,w[2]=Xe,w[3]=xe,k.clearBufferiv(k.COLOR,0,w))}else O|=k.COLOR_BUFFER_BIT}P&&(O|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(O|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&k.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),z=x},this.dispose=function(){t.removeEventListener("webglcontextlost",mt,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",Pn,!1),Ue.dispose(),he.dispose(),oe.dispose(),H.dispose(),se.dispose(),J.dispose(),me.dispose(),te.dispose(),ae.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",ku),Me.removeEventListener("sessionend",Nu),ji.stop()};function mt(x){x.preventDefault(),Hr("WebGLRenderer: Context Lost."),D=!0}function tt(){Hr("WebGLRenderer: Context Restored."),D=!1;let x=U.autoReset,P=Le.enabled,G=Le.autoUpdate,O=Le.needsUpdate,B=Le.type;Ce(),U.autoReset=x,Le.enabled=P,Le.autoUpdate=G,Le.needsUpdate=O,Le.type=B}function Pn(x){ke("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Xn(x){let P=x.target;P.removeEventListener("dispose",Xn),Fp(P)}function Fp(x){Up(x),H.remove(x)}function Up(x){let P=H.get(x).programs;P!==void 0&&(P.forEach(function(G){ae.releaseProgram(G)}),x.isShaderMaterial&&ae.releaseShaderCache(x))}this.renderBufferDirect=function(x,P,G,O,B,fe){P===null&&(P=rn);let ve=B.isMesh&&B.matrixWorld.determinantAffine()<0,de=zp(x,P,G,O,B);y.setMaterial(O,ve);let xe=G.index,we=1;if(O.wireframe===!0){if(xe=Y.getWireframeAttribute(G),xe===void 0)return;we=2}let Oe=G.drawRange,Xe=G.attributes.position,Se=Oe.start*we,nt=(Oe.start+Oe.count)*we;fe!==null&&(Se=Math.max(Se,fe.start*we),nt=Math.min(nt,(fe.start+fe.count)*we)),xe!==null?(Se=Math.max(Se,0),nt=Math.min(nt,xe.count)):Xe!=null&&(Se=Math.max(Se,0),nt=Math.min(nt,Xe.count));let Pt=nt-Se;if(Pt<0||Pt===1/0)return;me.setup(B,O,de,G,xe);let _t,ht=le;if(xe!==null&&(_t=re.get(xe),ht=$,ht.setIndex(_t)),B.isMesh)O.wireframe===!0?(y.setLineWidth(O.wireframeLinewidth*Ct()),ht.setMode(k.LINES)):ht.setMode(k.TRIANGLES);else if(B.isLine){let qt=O.linewidth;qt===void 0&&(qt=1),y.setLineWidth(qt*Ct()),B.isLineSegments?ht.setMode(k.LINES):B.isLineLoop?ht.setMode(k.LINE_LOOP):ht.setMode(k.LINE_STRIP)}else B.isPoints?ht.setMode(k.POINTS):B.isSprite&&ht.setMode(k.TRIANGLES);if(B.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))ht.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let qt=B._multiDrawStarts,_e=B._multiDrawCounts,$t=B._multiDrawCount,$e=xe?re.get(xe).bytesPerElement:1,Mn=H.get(O).currentProgram.getUniforms();for(let qn=0;qn<$t;qn++)Mn.setValue(k,"_gl_DrawID",qn),ht.render(qt[qn]/$e,_e[qn])}else if(B.isInstancedMesh)ht.renderInstances(Se,Pt,B.count);else if(G.isInstancedBufferGeometry){let qt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,_e=Math.min(G.instanceCount,qt);ht.renderInstances(Se,Pt,_e)}else ht.render(Se,Pt)};function Lu(x,P,G,O){z!==null&&x.isNodeMaterial&&z.setObject(O,x),Je===!0&&Ee.setState(x,G,!1),x.transparent===!0&&x.side===Rn&&x.forceSinglePass===!1?(x.side=Wt,x.needsUpdate=!0,La(x,P,O),x.side=ii,x.needsUpdate=!0,La(x,P,O),x.side=Rn):La(x,P,O)}this.compile=function(x,P,G=null){G===null&&(G=x),z!==null&&z.renderStart(x,P,G),T=oe.get(G),T.init(P),v.push(T),G.traverseVisible(function(B){B.isLight&&B.layers.test(P.layers)&&(T.pushLight(B),B.castShadow&&T.pushShadow(B))}),x!==G&&x.traverseVisible(function(B){B.isLight&&B.layers.test(P.layers)&&(T.pushLight(B),B.castShadow&&T.pushShadow(B))}),T.setupLights(),z!==null&&z.updateLights(T.state.lightsArray),pt=this.localClippingEnabled,Je=Ee.init(this.clippingPlanes,pt),Je===!0&&Ee.setGlobalState(this.clippingPlanes,P),z!==null&&Le.render(T.state.shadowsArray,G,P);let O=new Set;return x.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let fe=B.material;if(fe)if(Array.isArray(fe))for(let ve=0;ve<fe.length;ve++){let de=fe[ve];Lu(de,G,P,B),O.add(de)}else Lu(fe,G,P,B),O.add(fe)}),T=v.pop(),z!==null&&z.renderEnd(),O},this.compileAsync=function(x,P,G=null){let O=this.compile(x,P,G);return new Promise(B=>{function fe(){if(O.forEach(function(ve){let xe=H.get(ve).currentProgram;(xe===void 0||xe.isReady())&&O.delete(ve)}),O.size===0){B(x);return}setTimeout(fe,10)}rt.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let jl=null;function Op(x){jl&&jl(x)}function ku(){ji.stop()}function Nu(){ji.start()}let ji=new ap;ji.setAnimationLoop(Op),typeof self<"u"&&ji.setContext(self),this.setAnimationLoop=function(x){jl=x,Me.setAnimationLoop(x),x===null?ji.stop():ji.start()},Me.addEventListener("sessionstart",ku),Me.addEventListener("sessionend",Nu),this.render=function(x,P){if(P!==void 0&&P.isCamera!==!0){ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;z!==null&&z.renderStart(x,P);let G=Me.enabled===!0&&Me.isPresenting===!0,O=A!==null&&(ie===null||G)&&A.begin(C,ie);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(P),P=Me.getCamera()),x.isScene===!0&&x.onBeforeRender(C,x,P,ie),T=oe.get(x,v.length),T.init(P),T.state.textureUnits=X.getTextureUnits(),v.push(T),Ye.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),We.setFromProjectionMatrix(Ye,Un,P.reversedDepth),pt=this.localClippingEnabled,Je=Ee.init(this.clippingPlanes,pt),M=he.get(x,R.length),M.init(),R.push(M),Me.enabled===!0&&Me.isPresenting===!0){let ve=C.xr.getDepthSensingMesh();ve!==null&&Zl(ve,P,-1/0,C.sortObjects)}Zl(x,P,0,C.sortObjects),M.finish(),z!==null&&z.updateLights(T.state.lightsArray),C.sortObjects===!0&&M.sort(be,Fe),xt=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,xt&&Ue.addToRenderList(M,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Je===!0&&Ee.beginShadows();let B=T.state.shadowsArray;if(Le.render(B,x,P),Je===!0&&Ee.endShadows(),(O&&A.hasRenderPass())===!1){let ve=M.opaque,de=M.transmissive;if(T.setupLights(),P.isArrayCamera){let xe=P.cameras;if(de.length>0)for(let we=0,Oe=xe.length;we<Oe;we++){let Xe=xe[we];Fu(ve,de,x,Xe)}xt&&Ue.render(x);for(let we=0,Oe=xe.length;we<Oe;we++){let Xe=xe[we];Du(M,x,Xe,Xe.viewport)}}else de.length>0&&Fu(ve,de,x,P),xt&&Ue.render(x),Du(M,x,P)}ie!==null&&j===0&&(X.updateMultisampleRenderTarget(ie),X.updateRenderTargetMipmap(ie)),O&&A.end(C),x.isScene===!0&&x.onAfterRender(C,x,P),me.resetDefaultState(),q=-1,ee=null,v.pop(),v.length>0?(T=v[v.length-1],X.setTextureUnits(T.state.textureUnits),Je===!0&&Ee.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,R.pop(),R.length>0?M=R[R.length-1]:M=null,z!==null&&z.renderEnd()};function Zl(x,P,G,O){if(x.visible===!1)return;if(x.layers.test(P.layers)){if(x.isGroup)G=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(P);else if(x.isLightProbeGrid)T.pushLightProbeGrid(x);else if(x.isLight)T.pushLight(x),x.castShadow&&T.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||x.intersectsFrustum(We)){O&&Ot.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Ye);let ve=J.update(x),de=x.material;de.visible&&M.push(x,ve,de,G,Ot.z,null,P)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||x.intersectsFrustum(We))){let ve=J.update(x),de=x.material;if(O&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ot.copy(x.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Ot.copy(ve.boundingSphere.center)),Ot.applyMatrix4(x.matrixWorld).applyMatrix4(Ye)),Array.isArray(de)){let xe=ve.groups;for(let we=0,Oe=xe.length;we<Oe;we++){let Xe=xe[we],Se=de[Xe.materialIndex];Se&&Se.visible&&M.push(x,ve,Se,G,Ot.z,Xe,P)}}else de.visible&&M.push(x,ve,de,G,Ot.z,null,P)}}let fe=x.children;for(let ve=0,de=fe.length;ve<de;ve++)Zl(fe[ve],P,G,O)}function Du(x,P,G,O){let{opaque:B,transmissive:fe,transparent:ve}=x;T.setupLightsView(G),Je===!0&&Ee.setGlobalState(C.clippingPlanes,G),O&&y.viewport(ne.copy(O)),B.length>0&&Ia(B,P,G),fe.length>0&&Ia(fe,P,G),ve.length>0&&Ia(ve,P,G),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Fu(x,P,G,O){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[O.id]===void 0){let Se=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[O.id]=new un(1,1,{generateMipmaps:!0,type:Se?Vn:gn,minFilter:zn,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:He.workingColorSpace})}let fe=T.state.transmissionRenderTarget[O.id],ve=O.viewport||ne;fe.setSize(ve.z*C.transmissionResolutionScale,ve.w*C.transmissionResolutionScale);let de=C.getRenderTarget(),xe=C.getActiveCubeFace(),we=C.getActiveMipmapLevel();C.setRenderTarget(fe),C.getClearColor(ft),Ze=C.getClearAlpha(),Ze<1&&C.setClearColor(16777215,.5),C.clear(),xt&&Ue.render(G);let Oe=C.toneMapping;C.toneMapping=Bn;let Xe=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),T.setupLightsView(O),Je===!0&&Ee.setGlobalState(C.clippingPlanes,O),Ia(x,G,O),X.updateMultisampleRenderTarget(fe),X.updateRenderTargetMipmap(fe),rt.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let nt=0,Pt=P.length;nt<Pt;nt++){let _t=P[nt],{object:ht,geometry:qt,material:_e,group:$t}=_t;if(_e.side===Rn&&ht.layers.test(O.layers)){let $e=_e.side;_e.side=Wt,_e.needsUpdate=!0,Uu(ht,G,O,qt,_e,$t),_e.side=$e,_e.needsUpdate=!0,Se=!0}}Se===!0&&(X.updateMultisampleRenderTarget(fe),X.updateRenderTargetMipmap(fe))}C.setRenderTarget(de,xe,we),C.setClearColor(ft,Ze),Xe!==void 0&&(O.viewport=Xe),C.toneMapping=Oe}function Ia(x,P,G){let O=P.isScene===!0?P.overrideMaterial:null;for(let B=0,fe=x.length;B<fe;B++){let ve=x[B],{object:de,geometry:xe,group:we}=ve,Oe=ve.material;Oe.allowOverride===!0&&O!==null&&(Oe=O),de.layers.test(G.layers)&&Uu(de,P,G,xe,Oe,we)}}function Uu(x,P,G,O,B,fe){z!==null&&B.isNodeMaterial&&z.setObject(x,B),x.onBeforeRender(C,P,G,O,B,fe),x.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),B.onBeforeRender(C,P,G,O,x,fe),B.transparent===!0&&B.side===Rn&&B.forceSinglePass===!1?(B.side=Wt,B.needsUpdate=!0,C.renderBufferDirect(G,P,O,B,x,fe),B.side=ii,B.needsUpdate=!0,C.renderBufferDirect(G,P,O,B,x,fe),B.side=Rn):C.renderBufferDirect(G,P,O,B,x,fe),x.onAfterRender(C,P,G,O,B,fe)}function La(x,P,G){P.isScene!==!0&&(P=rn);let O=H.get(x),B=T.state.lights,fe=T.state.shadowsArray,ve=B.state.version,de=ae.getParameters(x,B.state,fe,P,G,T.state.lightProbeGridArray),xe=ae.getProgramCacheKey(de),we=O.programs;O.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,O.fog=P.fog;let Oe=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;O.envMap=se.get(x.envMap||O.environment,Oe),O.envMapRotation=O.environment!==null&&x.envMap===null?P.environmentRotation:x.envMapRotation,we===void 0&&(x.addEventListener("dispose",Xn),we=new Map,O.programs=we);let Xe=we.get(xe);if(Xe!==void 0){if(O.currentProgram===Xe&&O.lightsStateVersion===ve)return Bu(x,de),Xe}else de.uniforms=ae.getUniforms(x),z!==null&&x.isNodeMaterial&&z.build(x,G,de),x.onBeforeCompile(de,C),Xe=ae.acquireProgram(de,xe),we.set(xe,Xe),O.uniforms=de.uniforms;let Se=O.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Se.clippingPlanes=Ee.uniform),Bu(x,de),O.needsLights=Vp(x),O.lightsStateVersion=ve,O.needsLights&&(Se.ambientLightColor.value=B.state.ambient,Se.lightProbe.value=B.state.probe,Se.sunLights.value=B.state.sun,Se.sunLightShadows.value=B.state.sunShadow,Se.directionalLights.value=B.state.directional,Se.directionalLightShadows.value=B.state.directionalShadow,Se.spotLights.value=B.state.spot,Se.spotLightShadows.value=B.state.spotShadow,Se.rectAreaLights.value=B.state.rectArea,Se.ltc_1.value=B.state.rectAreaLTC1,Se.ltc_2.value=B.state.rectAreaLTC2,Se.pointLights.value=B.state.point,Se.pointLightShadows.value=B.state.pointShadow,Se.hemisphereLights.value=B.state.hemi,Se.sunShadowMatrix.value=B.state.sunShadowMatrix,Se.sunShadowCascade.value=B.state.sunShadowCascade,Se.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Se.spotLightMatrix.value=B.state.spotLightMatrix,Se.spotLightMap.value=B.state.spotLightMap,Se.pointShadowMatrix.value=B.state.pointShadowMatrix),O.lightProbeGrid=T.state.lightProbeGridArray.length>0,O.currentProgram=Xe,O.uniformsList=null,Xe}function Ou(x){if(x.uniformsList===null){let P=x.currentProgram.getUniforms();x.uniformsList=_r.seqWithValue(P.seq,x.uniforms)}return x.uniformsList}function Bu(x,P){let G=H.get(x);G.outputColorSpace=P.outputColorSpace,G.batching=P.batching,G.batchingColor=P.batchingColor,G.instancing=P.instancing,G.instancingColor=P.instancingColor,G.instancingMorph=P.instancingMorph,G.skinning=P.skinning,G.morphTargets=P.morphTargets,G.morphNormals=P.morphNormals,G.morphColors=P.morphColors,G.morphTargetsCount=P.morphTargetsCount,G.numClippingPlanes=P.numClippingPlanes,G.numIntersection=P.numClipIntersection,G.vertexAlphas=P.vertexAlphas,G.vertexTangents=P.vertexTangents,G.toneMapping=P.toneMapping}function Bp(x,P){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;b.setFromMatrixPosition(P.matrixWorld);for(let G=0,O=x.length;G<O;G++){let B=x[G];if(B.texture!==null&&B.boundingBox.containsPoint(b))return B}return null}function zp(x,P,G,O,B){P.isScene!==!0&&(P=rn),X.resetTextureUnits();let fe=P.fog,ve=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?P.environment:null,de=ie===null?C.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:He.workingColorSpace,xe=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,we=se.get(O.envMap||ve,xe),Oe=O.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Xe=!!G.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Se=!!G.morphAttributes.position,nt=!!G.morphAttributes.normal,Pt=!!G.morphAttributes.color,_t=Bn;O.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(_t=C.toneMapping);let ht=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,qt=ht!==void 0?ht.length:0,_e=H.get(O),$t=T.state.lights;if(Je===!0&&(pt===!0||x!==ee)){let gt=x===ee&&O.id===q;Ee.setState(O,x,gt)}let $e=!1;O.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==$t.state.version||_e.outputColorSpace!==de||B.isBatchedMesh&&_e.batching===!1||!B.isBatchedMesh&&_e.batching===!0||B.isBatchedMesh&&_e.batchingColor===!0&&B._colorsTexture===null||B.isBatchedMesh&&_e.batchingColor===!1&&B._colorsTexture!==null||B.isInstancedMesh&&_e.instancing===!1||!B.isInstancedMesh&&_e.instancing===!0||B.isSkinnedMesh&&_e.skinning===!1||!B.isSkinnedMesh&&_e.skinning===!0||B.isInstancedMesh&&_e.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&_e.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&_e.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&_e.instancingMorph===!1&&B.morphTexture!==null||_e.envMap!==we||O.fog===!0&&_e.fog!==fe||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==Ee.numPlanes||_e.numIntersection!==Ee.numIntersection)||_e.vertexAlphas!==Oe||_e.vertexTangents!==Xe||_e.morphTargets!==Se||_e.morphNormals!==nt||_e.morphColors!==Pt||_e.toneMapping!==_t||_e.morphTargetsCount!==qt||!!_e.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&($e=!0):($e=!0,_e.__version=O.version);let Mn=_e.currentProgram;$e===!0&&(Mn=La(O,P,B),z&&O.isNodeMaterial&&z.onUpdateProgram(O,Mn,_e));let qn=!1,Ai=!1,Es=!1,ct=Mn.getUniforms(),wt=_e.uniforms;if(y.useProgram(Mn.program)&&(qn=!0,Ai=!0,Es=!0),O.id!==q&&(q=O.id,Ai=!0),_e.needsLights){let gt=Bp(T.state.lightProbeGridArray,B);_e.lightProbeGrid!==gt&&(_e.lightProbeGrid=gt,Ai=!0)}if(qn||ee!==x){y.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),ct.setValue(k,"projectionMatrix",x.projectionMatrix),ct.setValue(k,"viewMatrix",x.matrixWorldInverse);let Ri=ct.map.cameraPosition;Ri!==void 0&&Ri.setValue(k,yt.setFromMatrixPosition(x.matrixWorld)),E.logarithmicDepthBuffer&&ct.setValue(k,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ct.setValue(k,"isOrthographic",x.isOrthographicCamera===!0),ee!==x&&(ee=x,Ai=!0,Es=!0)}if(_e.needsLights&&($t.state.sunShadowMap.length>0&&ct.setValue(k,"sunShadowMap",$t.state.sunShadowMap,X),$t.state.directionalShadowMap.length>0&&ct.setValue(k,"directionalShadowMap",$t.state.directionalShadowMap,X),$t.state.spotShadowMap.length>0&&ct.setValue(k,"spotShadowMap",$t.state.spotShadowMap,X),$t.state.pointShadowMap.length>0&&ct.setValue(k,"pointShadowMap",$t.state.pointShadowMap,X)),B.isSkinnedMesh){ct.setOptional(k,B,"bindMatrix"),ct.setOptional(k,B,"bindMatrixInverse");let gt=B.skeleton;gt&&(gt.boneTexture===null&&gt.computeBoneTexture(),ct.setValue(k,"boneTexture",gt.boneTexture,X))}B.isBatchedMesh&&(ct.setOptional(k,B,"batchingTexture"),ct.setValue(k,"batchingTexture",B._matricesTexture,X),ct.setOptional(k,B,"batchingIdTexture"),ct.setValue(k,"batchingIdTexture",B._indirectTexture,X),ct.setOptional(k,B,"batchingColorTexture"),B._colorsTexture!==null&&ct.setValue(k,"batchingColorTexture",B._colorsTexture,X));let Ei=G.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0)&&I.update(B,G,Mn),(Ai||_e.receiveShadow!==B.receiveShadow)&&(_e.receiveShadow=B.receiveShadow,ct.setValue(k,"receiveShadow",B.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&P.environment!==null&&(wt.envMapIntensity.value=P.environmentIntensity),wt.dfgLUT!==void 0&&(wt.dfgLUT.value=Qv()),Ai){if(ct.setValue(k,"toneMappingExposure",C.toneMappingExposure),_e.needsLights&&Hp(wt,Es),fe&&O.fog===!0&&Ae.refreshFogUniforms(wt,fe),Ae.refreshMaterialUniforms(wt,O,Q,K,T.state.transmissionRenderTarget[x.id]),_e.needsLights&&_e.lightProbeGrid){let gt=_e.lightProbeGrid;wt.probesSH.value=gt.texture,wt.probesMin.value.copy(gt.boundingBox.min),wt.probesMax.value.copy(gt.boundingBox.max),wt.probesResolution.value.copy(gt.resolution)}_r.upload(k,Ou(_e),wt,X)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(_r.upload(k,Ou(_e),wt,X),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ct.setValue(k,"center",B.center),ct.setValue(k,"modelViewMatrix",B.modelViewMatrix),ct.setValue(k,"normalMatrix",B.normalMatrix),ct.setValue(k,"modelMatrix",B.matrixWorld),O.uniformsGroups!==void 0){let gt=O.uniformsGroups;for(let Ri=0,Rs=gt.length;Ri<Rs;Ri++){let Hu=gt[Ri];te.update(Hu,Mn),te.bind(Hu,Mn)}}return Mn}function Hp(x,P){x.ambientLightColor.needsUpdate=P,x.lightProbe.needsUpdate=P,x.sunLights.needsUpdate=P,x.sunLightShadows.needsUpdate=P,x.directionalLights.needsUpdate=P,x.directionalLightShadows.needsUpdate=P,x.pointLights.needsUpdate=P,x.pointLightShadows.needsUpdate=P,x.spotLights.needsUpdate=P,x.spotLightShadows.needsUpdate=P,x.rectAreaLights.needsUpdate=P,x.hemisphereLights.needsUpdate=P}function Vp(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(x,P,G){let O=H.get(x);O.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),H.get(x.texture).__webglTexture=P,H.get(x.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:G,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,P){let G=H.get(x);G.__webglFramebuffer=P,G.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(x,P=0,G=0){ie=x,Z=P,j=G;let O=null,B=!1,fe=!1;if(x){let de=H.get(x);if(de.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(k.FRAMEBUFFER,de.__webglFramebuffer),ne.copy(x.viewport),Ie.copy(x.scissor),Re=x.scissorTest,y.viewport(ne),y.scissor(Ie),y.setScissorTest(Re),q=-1;return}else if(de.__webglFramebuffer===void 0)X.setupRenderTarget(x);else if(de.__hasExternalTextures)X.rebindTextures(x,H.get(x.texture).__webglTexture,H.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let Oe=x.depthTexture;if(de.__boundDepthTexture!==Oe){if(Oe!==null&&H.has(Oe)&&(x.width!==Oe.image.width||x.height!==Oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(x)}}let xe=x.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(fe=!0);let we=H.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(we[P])?O=we[P][G]:O=we[P],B=!0):x.samples>0&&X.useMultisampledRTT(x)===!1?O=H.get(x).__webglMultisampledFramebuffer:Array.isArray(we)?O=we[G]:O=we,ne.copy(x.viewport),Ie.copy(x.scissor),Re=x.scissorTest}else ne.copy(ye).multiplyScalar(Q).floor(),Ie.copy(Ve).multiplyScalar(Q).floor(),Re=Nt;if(G!==0&&(O=W),y.bindFramebuffer(k.FRAMEBUFFER,O)&&y.drawBuffers(x,O),y.viewport(ne),y.scissor(Ie),y.setScissorTest(Re),B){let de=H.get(x.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+P,de.__webglTexture,G)}else if(fe){let de=P;for(let xe=0;xe<x.textures.length;xe++){let we=H.get(x.textures[xe]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+xe,we.__webglTexture,G,de)}}else if(x!==null&&G!==0){let de=H.get(x.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,de.__webglTexture,G)}q=-1};function zu(x){let P=H.get(x);return(P.__readFormat!==x.format||P.__readType!==x.type)&&(P.__readFormat=x.format,P.__readType=x.type,P.__formatReadable=E.textureFormatReadable(x.format),P.__typeReadable=E.textureTypeReadable(x.type)),P}this.readRenderTargetPixels=function(x,P,G,O,B,fe,ve,de=0){if(!(x&&x.isWebGLRenderTarget)){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=H.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ve!==void 0&&(xe=xe[ve]),xe){y.bindFramebuffer(k.FRAMEBUFFER,xe);try{let we=x.textures[de],Oe=we.format,Xe=we.type;x.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+de);let Se=zu(we);if(Se.__formatReadable===!1){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Se.__typeReadable===!1){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=x.width-O&&G>=0&&G<=x.height-B&&k.readPixels(P,G,O,B,ce.convert(Oe),ce.convert(Xe),fe)}finally{let we=ie!==null?H.get(ie).__webglFramebuffer:null;y.bindFramebuffer(k.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(x,P,G,O,B,fe,ve,de=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=H.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ve!==void 0&&(xe=xe[ve]),xe)if(P>=0&&P<=x.width-O&&G>=0&&G<=x.height-B){y.bindFramebuffer(k.FRAMEBUFFER,xe);let we=x.textures[de],Oe=we.format,Xe=we.type;x.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+de);let Se=zu(we);if(Se.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Se.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let nt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,nt),k.bufferData(k.PIXEL_PACK_BUFFER,fe.byteLength,k.STREAM_READ),k.readPixels(P,G,O,B,ce.convert(Oe),ce.convert(Xe),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let Pt=ie!==null?H.get(ie).__webglFramebuffer:null;y.bindFramebuffer(k.FRAMEBUFFER,Pt);let _t=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await kf(k,_t,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,nt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,fe),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(nt),k.deleteSync(_t),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,P=null,G=0){let O=Math.pow(2,-G),B=Math.floor(x.image.width*O),fe=Math.floor(x.image.height*O),ve=P!==null?P.x:0,de=P!==null?P.y:0;X.setTexture2D(x,0),k.copyTexSubImage2D(k.TEXTURE_2D,G,0,0,ve,de,B,fe),y.unbindTexture()},this.copyTextureToTexture=function(x,P,G=null,O=null,B=0,fe=0){let ve,de,xe,we,Oe,Xe,Se,nt,Pt,_t=x.isCompressedTexture?x.mipmaps[fe]:x.image;if(G!==null)ve=G.max.x-G.min.x,de=G.max.y-G.min.y,xe=G.isBox3?G.max.z-G.min.z:1,we=G.min.x,Oe=G.min.y,Xe=G.isBox3?G.min.z:0;else{let wt=Math.pow(2,-B);ve=Math.floor(_t.width*wt),de=Math.floor(_t.height*wt),x.isDataArrayTexture?xe=_t.depth:x.isData3DTexture?xe=Math.floor(_t.depth*wt):xe=1,we=0,Oe=0,Xe=0}O!==null?(Se=O.x,nt=O.y,Pt=O.z):(Se=0,nt=0,Pt=0);let ht=ce.convert(P.format),qt=ce.convert(P.type),_e;P.isData3DTexture?(X.setTexture3D(P,0),_e=k.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(X.setTexture2DArray(P,0),_e=k.TEXTURE_2D_ARRAY):(X.setTexture2D(P,0),_e=k.TEXTURE_2D),y.activeTexture(k.TEXTURE0),y.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,P.flipY),y.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),y.pixelStorei(k.UNPACK_ALIGNMENT,P.unpackAlignment);let $t=y.getParameter(k.UNPACK_ROW_LENGTH),$e=y.getParameter(k.UNPACK_IMAGE_HEIGHT),Mn=y.getParameter(k.UNPACK_SKIP_PIXELS),qn=y.getParameter(k.UNPACK_SKIP_ROWS),Ai=y.getParameter(k.UNPACK_SKIP_IMAGES);y.pixelStorei(k.UNPACK_ROW_LENGTH,_t.width),y.pixelStorei(k.UNPACK_IMAGE_HEIGHT,_t.height),y.pixelStorei(k.UNPACK_SKIP_PIXELS,we),y.pixelStorei(k.UNPACK_SKIP_ROWS,Oe),y.pixelStorei(k.UNPACK_SKIP_IMAGES,Xe);let Es=x.isDataArrayTexture||x.isData3DTexture,ct=P.isDataArrayTexture||P.isData3DTexture;if(x.isDepthTexture){let wt=H.get(x),Ei=H.get(P),gt=H.get(wt.__renderTarget),Ri=H.get(Ei.__renderTarget);y.bindFramebuffer(k.READ_FRAMEBUFFER,gt.__webglFramebuffer),y.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ri.__webglFramebuffer);for(let Rs=0;Rs<xe;Rs++)Es&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,H.get(x).__webglTexture,B,Xe+Rs),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,H.get(P).__webglTexture,fe,Pt+Rs)),k.blitFramebuffer(we,Oe,ve,de,Se,nt,ve,de,k.DEPTH_BUFFER_BIT,k.NEAREST);y.bindFramebuffer(k.READ_FRAMEBUFFER,null),y.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(B!==0||x.isRenderTargetTexture||H.has(x)){let wt=H.get(x),Ei=H.get(P);y.bindFramebuffer(k.READ_FRAMEBUFFER,N),y.bindFramebuffer(k.DRAW_FRAMEBUFFER,V);for(let gt=0;gt<xe;gt++)Es?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,wt.__webglTexture,B,Xe+gt):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,wt.__webglTexture,B),ct?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ei.__webglTexture,fe,Pt+gt):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ei.__webglTexture,fe),B!==0?k.blitFramebuffer(we,Oe,ve,de,Se,nt,ve,de,k.COLOR_BUFFER_BIT,k.NEAREST):ct?k.copyTexSubImage3D(_e,fe,Se,nt,Pt+gt,we,Oe,ve,de):k.copyTexSubImage2D(_e,fe,Se,nt,we,Oe,ve,de);y.bindFramebuffer(k.READ_FRAMEBUFFER,null),y.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else ct?x.isDataTexture||x.isData3DTexture?k.texSubImage3D(_e,fe,Se,nt,Pt,ve,de,xe,ht,qt,_t.data):P.isCompressedArrayTexture?k.compressedTexSubImage3D(_e,fe,Se,nt,Pt,ve,de,xe,ht,_t.data):k.texSubImage3D(_e,fe,Se,nt,Pt,ve,de,xe,ht,qt,_t):x.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,fe,Se,nt,ve,de,ht,qt,_t.data):x.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,fe,Se,nt,_t.width,_t.height,ht,_t.data):k.texSubImage2D(k.TEXTURE_2D,fe,Se,nt,ve,de,ht,qt,_t);y.pixelStorei(k.UNPACK_ROW_LENGTH,$t),y.pixelStorei(k.UNPACK_IMAGE_HEIGHT,$e),y.pixelStorei(k.UNPACK_SKIP_PIXELS,Mn),y.pixelStorei(k.UNPACK_SKIP_ROWS,qn),y.pixelStorei(k.UNPACK_SKIP_IMAGES,Ai),fe===0&&P.generateMipmaps&&k.generateMipmap(_e),y.unbindTexture()},this.initRenderTarget=function(x){H.get(x).__webglFramebuffer===void 0&&X.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?X.setTextureCube(x,0):x.isData3DTexture?X.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?X.setTexture2DArray(x,0):X.setTexture2D(x,0),y.unbindTexture()},this.resetState=function(){Z=0,j=0,ie=null,y.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=He._getDrawingBufferColorSpace(e),t.unpackColorSpace=He._getUnpackColorSpace()}};function jh(n,e){if(e===bh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===pr||e===ya){let t=n.getIndex();if(t===null){let r=[],a=n.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);n.setIndex(r),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,s=[];if(e===pr)for(let r=1;r<=i;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<i;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),n.setIndex(s),n.clearGroups(),n}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}function fp(n){let e=new Map,t=new Map,i=n.clone();return pp(n,i,function(s,r){e.set(r,s),t.set(s,r)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),i}function pp(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)pp(n.children[i],e.children[i],t)}var Wl=class extends ti{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new nu(t)}),this.register(function(t){return new iu(t)}),this.register(function(t){return new du(t)}),this.register(function(t){return new fu(t)}),this.register(function(t){return new pu(t)}),this.register(function(t){return new ru(t)}),this.register(function(t){return new au(t)}),this.register(function(t){return new ou(t)}),this.register(function(t){return new lu(t)}),this.register(function(t){return new tu(t)}),this.register(function(t){return new cu(t)}),this.register(function(t){return new su(t)}),this.register(function(t){return new uu(t)}),this.register(function(t){return new hu(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new Xl(t,Ge.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Xl(t,Ge.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new mu(t)})}load(e,t,i,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Si.extractUrlBase(e);a=Si.resolveURL(c,this.path)}else a=Si.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new or(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===vp){try{a[Ge.KHR_BINARY_GLTF]=new gu(e)}catch(h){s&&s(h);return}r=JSON.parse(a[Ge.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Mu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case Ge.KHR_MATERIALS_UNLIT:a[h]=new eu;break;case Ge.KHR_DRACO_MESH_COMPRESSION:a[h]=new _u(r,this.dracoLoader);break;case Ge.KHR_TEXTURE_TRANSFORM:a[h]=new yu;break;case Ge.KHR_MESH_QUANTIZATION:a[h]=new vu;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}};function tb(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}function Rt(n,e,t){let i=n.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}var Ge={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Qh=class{constructor(e){this.parser=e,this.name=Ge.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,s=t.cache.get(i);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new Pe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],en);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ys(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new la(u),c.distance=h;break;case"spot":c=new oa(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),oi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}},eu=class{constructor(){this.name=Ge.KHR_MATERIALS_UNLIT}getMaterialType(){return fn}extendParams(e,t,i){let s=[];e.color=new Pe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],en),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,At))}return Promise.all(s)}},tu=class{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=Rt(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}},nu=class{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?pn:null}extendMaterialParams(e,t){let i=Rt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){let r=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Be(r,r)}return Promise.all(s)}},iu=class{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?pn:null}extendMaterialParams(e,t){let i=Rt(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}},su=class{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?pn:null}extendMaterialParams(e,t){let i=Rt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(s)}},ru=class{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SHEEN}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?pn:null}extendMaterialParams(e,t){let i=Rt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(t.sheenColor=new Pe(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){let r=i.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],en)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,At)),i.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(s)}},au=class{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?pn:null}extendMaterialParams(e,t){let i=Rt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(s)}},ou=class{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_VOLUME}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?pn:null}extendMaterialParams(e,t){let i=Rt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;let r=i.attenuationColor||[1,1,1];return t.attenuationColor=new Pe().setRGB(r[0],r[1],r[2],en),Promise.all(s)}},lu=class{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IOR}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?pn:null}extendMaterialParams(e,t){let i=Rt(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},cu=class{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?pn:null}extendMaterialParams(e,t){let i=Rt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));let r=i.specularColorFactor||[1,1,1];return t.specularColor=new Pe().setRGB(r[0],r[1],r[2],en),i.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,At)),Promise.all(s)}},hu=class{constructor(e){this.parser=e,this.name=Ge.EXT_MATERIALS_BUMP}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?pn:null}extendMaterialParams(e,t){let i=Rt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(s)}},uu=class{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?pn:null}extendMaterialParams(e,t){let i=Rt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(s)}},du=class{constructor(e){this.parser=e,this.name=Ge.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},fu=class{constructor(e){this.parser=e,this.name=Ge.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}},pu=class{constructor(e){this.parser=e,this.name=Ge.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}},Xl=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(p),u,h,d,s.mode,s.filter),p})})}else return null}},mu=class{constructor(e){this.name=Ge.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=t.meshes[i.mesh];for(let c of s.primitives)if(c.mode!==Cn.TRIANGLES&&c.mode!==Cn.TRIANGLE_STRIP&&c.mode!==Cn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=i.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,p=[];for(let g of h){let _=new Ne,m=new F,f=new tn,S=new F(1,1,1),w=new Yr(g.geometry,g.material,d);for(let M=0;M<d;M++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,M),l.SCALE&&S.fromBufferAttribute(l.SCALE,M),w.setMatrixAt(M,_.compose(m,f,S));let b=null;for(let M in l)if(M==="_COLOR_0"){let T=l[M];w.instanceColor=new _i(T.array,T.itemSize,T.normalized)}else if(M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"){if(b===null){let R=w.geometry;b=new jt,b.name=R.name;for(let v in R.attributes)b.setAttribute(v,R.attributes[v]);for(let v in R.morphAttributes)b.morphAttributes[v]=R.morphAttributes[v];R.index!==null&&b.setIndex(R.index),b.morphTargetsRelative=R.morphTargetsRelative;for(let v of R.groups)b.addGroup(v.start,v.count,v.materialIndex);R.boundingBox!==null&&(b.boundingBox=R.boundingBox.clone()),R.boundingSphere!==null&&(b.boundingSphere=R.boundingSphere.clone()),b.drawRange.start=R.drawRange.start,b.drawRange.count=R.drawRange.count,b.userData=Object.assign({},R.userData),w.geometry=b}let T=l[M];b.setAttribute(M,new _i(T.array,T.itemSize,T.normalized))}bt.prototype.copy.call(w,g),this.parser.assignFinalMaterial(w),p.push(w)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}},vp="glTF",Ma=12,mp={JSON:1313821514,BIN:5130562},gu=class{constructor(e){this.name=Ge.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ma),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==vp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Ma,r=new DataView(e,Ma),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===mp.JSON){let c=new Uint8Array(e,Ma+a,o);this.content=i.decode(c)}else if(l===mp.BIN){let c=Ma+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},_u=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ge.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let u in a){let h=xu[u]||u.toLowerCase();o[h]=a[u]}for(let u in e.attributes){let h=xu[u]||u.toLowerCase();if(a[u]!==void 0){let d=i.accessors[e.attributes[u]],p=vr[d.componentType];c[h]=p.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(p){for(let g in p.attributes){let _=p.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}h(p)},o,c,en,d)})})}},yu=class{constructor(){this.name=Ge.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let i=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*i,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*i,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},vu=class{constructor(){this.name=Ge.KHR_MESH_QUANTIZATION}},ql=class extends ei{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=i[r+a];return t}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=s-t,h=(i-t)/u,d=h*h,p=d*h,g=e*c,_=g-c,m=-2*p+3*d,f=p-d,S=1-m,w=f-d+h;for(let b=0;b!==o;b++){let M=a[_+b+o],T=a[_+b+l]*u,R=a[g+b+o],v=a[g+b]*u;r[b]=S*M+w*T+m*R+f*v}return r}},nb=new tn,bu=class extends ql{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return nb.fromArray(r).normalize().toArray(r),r}},Cn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},vr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},gp={9728:St,9729:Et,9984:$o,9985:ur,9986:xs,9987:zn},_p={33071:En,33648:Ys,10497:Hi},Zh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},xu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Yi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ib={CUBICSPLINE:void 0,LINEAR:us,STEP:hs},$h={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function sb(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new gs({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ii})),n.DefaultMaterial}function ws(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function oi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function rb(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);let a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(i){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;a.push(d)}if(s){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;o.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],d=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=h),r&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function ab(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ob(n){let e,t=n.extensions&&n.extensions[Ge.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Jh(t.attributes):e=n.indices+":"+Jh(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+Jh(n.targets[i]);return e}function Jh(n){let e="",t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Su(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function lb(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var cb=new Ne,Mu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new tb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&a<98?this.textureLoader=new sa(this.options.manager):this.textureLoader=new ca(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new or(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:i,userData:{}};return ws(r,o,s),oi(o,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,u]of a.children.entries())r(u,o.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ge.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){i.load(Si.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=Zh[s.type],o=vr[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new Dt(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=Zh[s.type],c=vr[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,p=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,_,m;if(p&&p!==h){let f=Math.floor(d/p),S="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+f+":"+s.count,w=t.cache.get(S);w||(_=new c(o,f*p,s.count*p/u),w=new er(_,p/u),t.cache.add(S,w)),m=new tr(w,l,d%p/u,g)}else o===null?_=new c(s.count*l):_=new c(o,d,s.count*l),m=new Dt(_,l,g);if(s.sparse!==void 0){let f=Zh.SCALAR,S=vr[s.sparse.indices.componentType],w=s.sparse.indices.byteOffset||0,b=s.sparse.values.byteOffset||0,M=new S(a[1],w,s.sparse.count*f),T=new c(a[2],b,s.sparse.count*l);o!==null&&(m=new Dt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,v=M.length;R<v;R++){let A=M[R];if(m.setX(A,T[R*l]),l>=2&&m.setY(A,T[R*l+1]),l>=3&&m.setZ(A,T[R*l+2]),l>=4&&m.setW(A,T[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,i){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return u.magFilter=gp[d.magFilter]||Et,u.minFilter=gp[d.minFilter]||zn,u.wrapS=_p[d.wrapS]||Hi,u.wrapT=_p[d.wrapT]||Hi,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==St&&u.minFilter!==Et,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(h){c=!0;let d=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){let m=new Ht(_);m.needsUpdate=!0,d(m)}),t.load(Si.resolveURL(h,r.path),g,void 0,p)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),oi(h,a),h.userData.mimeType=a.mimeType||lb(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){let r=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),r.extensions[Ge.KHR_TEXTURE_TRANSFORM]){let o=i.extensions!==void 0?i.extensions[Ge.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[Ge.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,i=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+i.uuid,l=this.cache.get(o);l||(l=new rr,nn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){let o="LineBasicMaterial:"+i.uuid,l=this.cache.get(o);l||(l=new sr,nn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(s||r||a){let o="ClonedMaterial:"+i.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return gs}loadMaterial(e){let t=this,i=this.json,s=this.extensions,r=i.materials[e],a,o={},l=r.extensions||{},c=[];if(l[Ge.KHR_MATERIALS_UNLIT]){let h=s[Ge.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{let h=r.pbrMetallicRoughness||{};if(o.color=new Pe(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],en),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,At)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Rn);let u=r.alphaMode||$h.OPAQUE;if(u===$h.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===$h.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==fn&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Be(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==fn&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==fn){let h=r.emissiveFactor;o.emissive=new Pe().setRGB(h[0],h[1],h[2],en)}return r.emissiveTexture!==void 0&&a!==fn&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,At)),Promise.all(c).then(function(){let h=new a(o);return r.name&&(h.name=r.name),oi(h,r),t.associations.set(h,{materials:e}),r.extensions&&ws(s,h,r),h})}createUniqueName(e){let t=dt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,s=this.primitiveCache;function r(o){return i[Ge.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return yp(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],u=ob(c),h=s[u];if(h)a.push(h.promise);else{let d;c.extensions&&c.extensions[Ge.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=yp(new jt,c,t),c.mode===Cn.TRIANGLE_STRIP?d=d.then(p=>jh(p,ya)):c.mode===Cn.TRIANGLE_FAN&&(d=d.then(p=>jh(p,pr))),s[u]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,i=this.json,s=this.extensions,r=i.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let u=a[l].material===void 0?sb(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,g=u.length;p<g;p++){let _=u[p],m=a[p],f,S=c[p];if(m.mode===Cn.TRIANGLES||m.mode===Cn.TRIANGLE_STRIP||m.mode===Cn.TRIANGLE_FAN||m.mode===void 0){let w=r.isSkinnedMesh===!0,b=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");w&&b===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),f=w&&b?new ps(_,S):new Gt(_,S),f.isSkinnedMesh===!0&&f.normalizeSkinWeights()}else if(m.mode===Cn.LINES)f=new jr(_,S);else if(m.mode===Cn.LINE_STRIP)f=new ms(_,S);else if(m.mode===Cn.LINE_LOOP)f=new Zr(_,S);else if(m.mode===Cn.POINTS)f=new $r(_,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&ab(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),oi(f,r),m.extensions&&ws(s,f,m),t.assignFinalMaterial(f),h.push(f)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return r.extensions&&ws(s,h[0],r),h[0];let d=new hn;r.extensions&&ws(s,d,r),t.associations.set(d,{meshes:e});for(let p=0,g=h.length;p<g;p++)d.add(h[p]);return d})}loadCamera(e){let t,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new zt(wh.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new ni(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),oi(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,u=a.length;c<u;c++){let h=a[c];if(h){o.push(h);let d=new Ne;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Kr(o,l)})}loadAnimation(e){let t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){let p=s.channels[h],g=s.samplers[p.sampler],_=p.target,m=_.node,f=s.parameters!==void 0?s.parameters[g.input]:g.input,S=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",S)),c.push(g),u.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let d=h[0],p=h[1],g=h[2],_=h[3],m=h[4],f=[];for(let w=0,b=d.length;w<b;w++){let M=d[w],T=p[w],R=g[w],v=_[w],A=m[w];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let C=i._createAnimationTracks(M,T,R,v,A);if(C)for(let D=0;D<C.length;D++)f.push(C[D])}let S=new ia(r,void 0,f);return oi(S,s),S})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){let a=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,u=o.length;c<u;c++)a.push(i.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(d,cb)});for(let p=0,g=h.length;p<g;p++)u.add(h[p]);if(u.userData.pivot!==void 0&&h.length>0){let p=u.userData.pivot,g=h[0];u.pivot=new F().fromArray(p),u.position.x-=p[0],u.position.y-=p[1],u.position.z-=p[2],g.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new nr:c.length>1?u=new hn:c.length===1?u=c[0]:u=new bt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=a),oi(u,r),r.extensions&&ws(i,u,r),r.matrix!==void 0){let h=new Ne;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],s=this,r=new hn;i.name&&(r.name=s.createUniqueName(i.name)),oi(r,i),i.extensions&&ws(t,r,i);let a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++){let d=l[u];d.parent!==null?r.add(fp(d)):r.add(d)}let c=u=>{let h=new Map;for(let[d,p]of s.associations)(d instanceof nn||d instanceof Ht)&&h.set(d,p);return u.traverse(d=>{let p=s.associations.get(d);p!=null&&h.set(d,p)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(p){p.morphTargetInfluences&&l.push(p.name?p.name:p.uuid)}Yi[r.path]===Yi.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let u;switch(Yi[r.path]){case Yi.weights:u=vi;break;case Yi.rotation:u=bi;break;case Yi.translation:case Yi.scale:u=Wi;break;default:i.itemSize===1?u=vi:u=Wi;break}let h=s.interpolation!==void 0?ib[s.interpolation]:us,d=this._getArrayFromAccessor(i);for(let p=0,g=l.length;p<g;p++){let _=new u(l[p]+"."+Yi[r.path],t.array,d,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=Su(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof bi?bu:ql;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function hb(n,e,t){let i=e.attributes,s=new bn;if(i.POSITION!==void 0){let o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new F(l[0],l[1],l[2]),new F(c[0],c[1],c[2])),o.normalized){let u=Su(vr[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new F,l=new F;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){let _=Su(vr[d.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}n.boundingBox=s;let a=new dn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=a}function yp(n,e,t){let i=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){n.setAttribute(o,l)})}for(let a in i){let o=xu[a]||a.toLowerCase();o in n.attributes||s.push(r(i[a],o))}if(e.indices!==void 0&&!n.index){let a=t.getDependency("accessor",e.indices).then(function(o){n.setIndex(o)});s.push(a)}return He.workingColorSpace!==en&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${He.workingColorSpace}" not supported.`),oi(n,e),hb(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?rb(n,e.targets,t):n})}var Au=Math.PI/180,wu=52*Au,ub=14*Au,db=1.4,Tu=4.6,fb=.0085,pb=["hips","spine","head","upperarm_L","forearm_L","hand_L","upperarm_R","forearm_R","hand_R","thigh_L","shin_L","foot_L","thigh_R","shin_R","foot_R"];function mb(){let n=new Uint8Array([150,150,150,255,225,225,225,255,255,255,255,255]),e=new Vi(n,3,1,sn);return e.minFilter=e.magFilter=St,e.needsUpdate=!0,e}function gb(n){let e=new fn({color:n,side:Wt});return e.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <project_vertex>",`transformed += normalize(objectNormal) * ${fb.toFixed(4)};
#include <project_vertex>`)},e}var Kl=class{constructor(){this.ok=!1,this.models={},this.loading={};try{this.canvas=document.createElement("canvas"),this.renderer=new Hl({canvas:this.canvas,alpha:!0,antialias:!0,preserveDrawingBuffer:!0,premultipliedAlpha:!1}),this.renderer.outputColorSpace=At,this.renderer.setClearColor(0,0),this.size=0,this.scene=new Wr,this.cam=new ni(-1,1,1,-1,.1,50),this.cam.position.set(0,0,20),this.scene.add(new ra(16777215,14207208,1.55));let e=new ys(16777215,1.35);e.position.set(-2,4,6),this.scene.add(e),this.grad=mb(),this.loader=new Wl,this.ok=!0}catch(e){console.warn("WebGL \u304C\u4F7F\u3048\u306A\u3044\u306E\u3067 2D \u3067\u63CF\u304D\u307E\u3059",e)}}has(e){return this.ok&&!!this.models[e]}load(e,t){return!this.ok||this.models[e]||this.loading[e]?this.loading[e]:(this.loading[e]=new Promise(i=>{this.loader.load(t+"model/"+e+".glb",s=>{try{this.models[e]=this.prepare(s.scene)}catch(r){console.warn(r)}i()},void 0,()=>i())}),this.loading[e])}prepare(e){let t=new hn,i=new hn;t.add(i),i.add(e);let s=[];e.traverse(h=>{h.isSkinnedMesh&&s.push(h)});for(let h of s){let p=(Array.isArray(h.material)?h.material:[h.material]).map(_=>{let m=_.name||"",f={color:_.color.clone(),side:_.side,transparent:!1};return _.map&&(f.map=_.map,f.color=new Pe(16777215)),m.startsWith("face")?new fn(f):new ta({...f,gradientMap:this.grad})});h.material=Array.isArray(h.material)?p:p[0],h.frustumCulled=!1;let g=new ps(h.geometry,gb(2759470));g.bind(h.skeleton,h.bindMatrix),g.frustumCulled=!1,g.renderOrder=-1,h.parent.add(g)}t.updateMatrixWorld(!0);let r=s[0].skeleton,a={},o={},l={};for(let h of r.bones)a[h.name]=h,o[h.name]=h.matrixWorld.clone(),l[h.name]=new F().setFromMatrixPosition(h.matrixWorld),h.matrixAutoUpdate=!1,h.matrixWorldAutoUpdate=!1;i.rotation.y=wu,i.updateMatrix();let c=new F(1,0,0).applyAxisAngle(new F(0,1,0),-wu),u=new F(0,0,1).applyAxisAngle(new F(0,1,0),-wu);return{group:t,pivot:i,root:e,meshes:s,skeletons:[...new Set(s.map(h=>h.skeleton))],bones:a,rest:o,restPos:l,ex:c,ez:u,ey:new F(0,1,0)}}pose(e,t,i){let{ex:s,ey:r,ez:a,restPos:o}=e,l=(m,f)=>new tn().setFromAxisAngle(m,f*Au),c=new Ne,u=(m,f,S)=>new Ne().makeTranslation(f.x,f.y,f.z).multiply(new Ne().makeRotationFromQuaternion(S)).multiply(new Ne().makeTranslation(-m.x,-m.y,-m.z)),h={},d=o.hips.clone().addScaledVector(s,(i.hip[0]||0)/100).addScaledVector(r,-(i.hip[1]||0)/100),p=i.rot||0;h.hips=u(o.hips,d,l(a,-(t.t*.55+p*.45)));let g=o.spine.clone().applyMatrix4(h.hips);h.spine=u(o.spine,g,l(a,-t.t));let _=o.head.clone().applyMatrix4(h.spine);h.head=u(o.head,_,l(a,-t.ht).multiply(l(r,-ub)));for(let[m,f]of[["aF","R"],["aB","L"]]){let S=t[m],w=o["upperarm_"+f].clone().applyMatrix4(h.spine),b=l(a,S.A);h["upperarm_"+f]=u(o["upperarm_"+f],w,b);let M=o["forearm_"+f].clone().applyMatrix4(h["upperarm_"+f]),T=l(a,S.F);h["forearm_"+f]=u(o["forearm_"+f],M,T);let R=o["hand_"+f].clone().applyMatrix4(h["forearm_"+f]);h["hand_"+f]=u(o["hand_"+f],R,T)}for(let[m,f]of[["lF","R"],["lB","L"]]){let S=t[m],w=o["thigh_"+f].clone().applyMatrix4(h.hips);h["thigh_"+f]=u(o["thigh_"+f],w,l(a,S.th));let b=o["shin_"+f].clone().applyMatrix4(h["thigh_"+f]);h["shin_"+f]=u(o["shin_"+f],b,l(a,S.S));let M=o["foot_"+f].clone().applyMatrix4(h["shin_"+f]);h["foot_"+f]=u(o["foot_"+f],M,l(a,Math.max(-35,Math.min(50,S.S*.35))+p*.6))}return h}draw(e,t,i,s={}){let r=this.models[t.id];if(!r)return null;let a=t.k,o=s.zoom||1,l=Math.round(Tu*100*a*db*Math.min(1.35,o));l!==this.size&&(this.renderer.setSize(l,l,!1),this.size=l);let c=Tu/2,u=1.25;this.cam.left=-c,this.cam.right=c,this.cam.top=u+c,this.cam.bottom=u-c,this.cam.updateProjectionMatrix(),r.group.scale.set(t.facing,1,1),r.group.updateMatrixWorld(!0);let h=r.group.matrixWorld.clone().multiply(r.pivot.matrix),d=this.pose(r,i,t.pose);for(let _ of pb){let m=r.bones[_];m&&m.matrixWorld.copy(h).multiply(d[_]).multiply(r.rest[_])}for(let _ of r.skeletons)_.update();this.scene.add(r.group),this.renderer.render(this.scene,this.cam),this.scene.remove(r.group);let p=Tu*100*a;e.drawImage(this.canvas,t.x-p/2,t.y-(u+c)*100*a,p,p);let g=_=>{let m=r.restPos["hand_"+_].clone().applyMatrix4(d["hand_"+_]).applyMatrix4(h);return[t.x+m.x*100*a,t.y-m.y*100*a]};return{handF:g("R"),handB:g("L")}}};var pe=(n,e=document)=>e.querySelector(n),wi=(n,e=document)=>[...e.querySelectorAll(n)],_b=pe("#game"),Vt=_b.getContext("2d"),Qe=new Ga,Yl=new Va,kt={img:{},meta:{},r3d:null},Ea=new qa(kt),Ts="./assets/",L={screen:"boot",mode:null,match:null,cpu:[null,null],story:null,sel:null,paused:!1,t:0,opt:{level:1,rounds:2,time:60,view3d:!0},train:{dummy:"stand",gauge:!1}};try{Object.assign(L.opt,JSON.parse(localStorage.getItem("hb_opt")||"{}"))}catch{}var yb=()=>{try{localStorage.setItem("hb_opt",JSON.stringify(L.opt))}catch{}};window.__hb=L;var As=window.__hbQA={bot:null,speed:1},Ta={music:{},img:[],banks:[]};async function vb(n){try{Ta=await(await fetch(Ts+"manifest.json")).json()}catch{}let e=[];for(let s of Ta.img||[])e.push(new Promise(r=>{let a=new Image;a.onload=()=>{kt.img[s.replace(/\.\w+$/,"")]=a,r()},a.onerror=r,a.src=Ts+"img/"+s}));for(let s of Ta.banks||[])e.push((async()=>{try{Qe.maps[s]=await(await fetch(Ts+"snd/"+s+".json")).json(),await Qe.load(s,Ts+"snd/"+s+".ogg")}catch(r){console.warn("bank",s,r)}})());let t=0,i=e.length||1;await Promise.all(e.map(s=>s.then(()=>n(++t/i))));try{let s=await(await fetch(Ts+"img/heads.json")).json();L.art=dd(kt.img,s)}catch(s){console.warn("art",s)}xb(),kt.models=Ta.models||[],kt.view3d=L.opt.view3d!==!1;try{kt.r3d=new Kl,kt.r3d.ok||(kt.r3d=null)}catch{kt.r3d=null}}function Mp(n){return kt.r3d?Promise.all(n.filter(e=>kt.models.includes(e)).map(e=>kt.r3d.load(e,Ts))):Promise.resolve()}async function bb(){for(let n of kt.models)await Mp([n])}async function Sr(n){if(!n||!Qe.ctx)return;let e=Ta.music[n];if(e){L.wantMusic=n;try{await Qe.load("m_"+n,Ts+"music/"+n+".ogg")}catch(t){console.warn("music",n,t);return}L.wantMusic===n&&Qe.playMusic("m_"+n,e)}}function xb(){for(let n of _n){if(!kt.img["por_"+n.id]){let e=document.createElement("canvas");e.width=520,e.height=900;let t=e.getContext("2d"),i=Yn(n.id),s=new ns(n.id),r=Cs(Xa(n.id),i);for(let a=0;a<40;a++)is(document.createElement("canvas").getContext("2d"),{id:n.id,pose:r,x:260,y:860,facing:1,k:3.1*240/n.height,hair:s});is(t,{id:n.id,pose:r,x:260,y:860,facing:1,k:3.1*240/n.height,hair:s,face:"happy"}),kt.img["por_"+n.id]=e}if(!kt.img["icon_"+n.id]){let e=document.createElement("canvas");e.width=160,e.height=160;let t=e.getContext("2d"),i=Yn(n.id),s=new ns(n.id),r=Cs(ss("stand"),i);is(t,{id:n.id,pose:{...r,t:0,h:0},x:80,y:160+260*1,facing:1,k:2.2,hair:s,face:"normal"}),kt.img["icon_"+n.id]=e}}}var Gn=n=>{let e=kt.img[n];return e?e.src||e.toDataURL():""};function Ti(n){L.screen=n;for(let e of wi(".screen"))e.classList.toggle("on",e.id===n);pe("#touch").classList.toggle("playing",n==="fight"),document.body.dataset.screen=n}function bp(n,e){let t=wi(".mi:not(.hide)",n);if(!t.length)return;let i=t.findIndex(s=>s.classList.contains("cur"));i<0&&(i=0),(e==="up"||e==="left")&&(i=(i+t.length-1)%t.length),(e==="down"||e==="right")&&(i=(i+1)%t.length),t.forEach((s,r)=>s.classList.toggle("cur",r===i)),e==="ok"?(Qe.se("decide"),t[i].click()):Qe.se("cursor")}function Ca(n){for(let e of wi(".mi",n))e.addEventListener("pointerenter",()=>{wi(".mi",n).forEach(t=>t.classList.remove("cur")),e.classList.add("cur")})}function Wn(){Ti("title"),L.mode=null,Sr("title"),wi("#title .mi").forEach((n,e)=>n.classList.toggle("cur",e===0))}pe("#title").addEventListener("click",n=>{let e=n.target.closest("[data-go]");if(!e)return;let t=e.dataset.go;t==="story"&&Aa("story"),t==="vs"&&Aa("vs"),t==="cpu"&&Aa("cpu"),t==="training"&&Aa("training"),t==="options"&&Pu(),t==="manual"&&Pp(0)});function Aa(n){L.mode=n,Yl.mode=n==="vs"?"vs":"solo",L.sel={cur:[0,1],done:[!1,n==="story"],who:0},Ti("select"),Sr("select"),pe("#select .mode").textContent={story:"\u30B9\u30C8\u30FC\u30EA\u30FC",vs:"2\u4EBA\u3067\u5BFE\u6226",cpu:"CPU\u3068\u5BFE\u6226",training:"\u30C8\u30EC\u30FC\u30CB\u30F3\u30B0"}[n],pe("#select .hint").textContent=n==="vs"?"1P\uFF1AWASD\uFF0BR/F \u3067\u9078\u3076\u30002P\uFF1A\u77E2\u5370\uFF0B\u30C6\u30F3\u30AD\u30FC4/I \u3067\u9078\u3076":n==="story"?"\u4F7F\u3046\u30AD\u30E3\u30E9\u3092\u9078\u3093\u3067\u304F\u3060\u3055\u3044":n==="training"?"1\u4EBA\u76EE\uFF1D\u81EA\u5206\u30012\u4EBA\u76EE\uFF1D\u7DF4\u7FD2\u76F8\u624B":"1\u4EBA\u76EE\uFF1D\u81EA\u5206\u30012\u4EBA\u76EE\uFF1D\u76F8\u624B",Sb()}function Sb(){let n=pe("#grid");n.innerHTML="",_n.forEach((e,t)=>{let i=document.createElement("div");i.className="cell",i.style.setProperty("--c",e.color),i.innerHTML=`<img src="${Gn("icon_"+e.id)}" alt=""><span>${e.short}</span>`,i.addEventListener("click",()=>{let s=L.sel.done[0]?1:0;L.sel.cur[s]=t,wp(s)}),i.addEventListener("pointerenter",()=>{let s=L.sel.done[0]&&L.mode!=="vs"?1:0;L.sel.done[s]||(L.sel.cur[s]=t,br())}),n.appendChild(i)}),br()}function br(){wi("#grid .cell").forEach((e,t)=>{e.classList.toggle("p1",L.sel.cur[0]===t),e.classList.toggle("p2",L.sel.cur[1]===t&&L.mode!=="story")});for(let e of[0,1]){let t=_n[L.sel.cur[e]],i=pe("#pv"+e);if(L.mode==="story"&&e===1){i.classList.add("hide");continue}i.classList.remove("hide"),pe("img",i).src=Gn("por_"+t.id),pe(".nm",i).textContent=t.name,pe(".cl",i).textContent=t.club+"\u30FB"+t.grade,pe(".qt",i).textContent="\u300C"+t.quote+"\u300D",i.classList.toggle("done",L.sel.done[e])}}function wp(n){if(L.sel.done[n])return;L.sel.done[n]=!0;let e=_n[L.sel.cur[n]];Qe.se("decide"),Qe.voice(n,e.id,"select"),br(),L.sel.done[0]&&L.sel.done[1]&&setTimeout(()=>{let t=_n[L.sel.cur[0]].id,i=_n[L.sel.cur[1]].id;L.mode==="story"?wb(t):L.mode==="training"?Pa(t,i,{cpu:[!1,!1],training:!0,stage:t}):Ab(t,i)},700)}function Mb(n,e){let t=L.sel.done[0]?1:0;if(L.mode==="vs"&&e&&(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Numpad4","KeyI","NumpadEnter"].includes(e)&&(t=1),["KeyW","KeyA","KeyS","KeyD","KeyR","Space"].includes(e)&&(t=0)),n==="back"){if(L.sel.done[1]&&L.mode!=="story"){L.sel.done[1]=!1,br();return}if(L.sel.done[0]){L.sel.done[0]=!1,br();return}Wn();return}if(L.sel.done[t]&&(t=1-t,L.sel.done[t]))return;let i=_n.length,s=5,r=L.sel.cur[t];if(n==="left"&&(r=(r+i-1)%i),n==="right"&&(r=(r+1)%i),n==="up"&&(r=(r+i-s)%i),n==="down"&&(r=(r+s)%i),n==="ok"){wp(t);return}r!==L.sel.cur[t]&&(L.sel.cur[t]=r,Qe.se("cursor"),br())}function wb(n){let e=_n.filter(i=>i.id!==n&&i.id!=="reiko").map(i=>i.id);for(let i=e.length-1;i>0;i--){let s=Math.floor(Math.random()*(i+1));[e[i],e[s]]=[e[s],e[i]]}let t=n==="reiko"?e.slice(0,7).concat(["sakura"]).filter((i,s,r)=>r.indexOf(i)===s):e.concat(["reiko"]);L.story={me:n,order:t,idx:0,cont:0},Ru()}function Tb(n){let e=L.opt.level,t=[-1,-1,0,0,0,1,1,1][n]??1;return Math.max(0,Math.min(3,e+t))}function Ru(){let n=L.story.me,e=L.story.order[L.story.idx];Tp(n,e,`\u7B2C${L.story.idx+1}\u6226${e==="reiko"?"\uFF08\u6700\u5F8C\u306E\u76F8\u624B\uFF09":""}`,[$l[n].intro,$l[e].intro]),L.vsNext=()=>Pa(n,e,{cpu:[!1,!0],level:Tb(L.story.idx),stage:e})}function Ab(n,e){let t=L.mode==="cpu";Tp(n,e,t?"CPU\u5BFE\u6226":"2\u4EBA\u3067\u5BFE\u6226",[an[n].quote,an[e].quote]),L.vsNext=()=>Pa(n,e,{cpu:[!1,t],level:L.opt.level,stage:e})}function Tp(n,e,t,i){Ti("vs"),Qe.stopMusic(.6);let s=an[n],r=an[e];pe("#vs .l img").src=Gn("por_"+n),pe("#vs .r img").src=Gn("por_"+e),pe("#vs .l .nm").textContent=s.name,pe("#vs .r .nm").textContent=r.name,pe("#vs .l .cl").textContent=s.club,pe("#vs .r .cl").textContent=r.club,pe("#vs .l .line").textContent=i[0],pe("#vs .r .line").textContent=i[1],pe("#vs .label").textContent=t,pe("#vs .stagename").textContent="\u30B9\u30C6\u30FC\u30B8\uFF1A"+ki[e].name,pe("#vs").classList.remove("anim"),pe("#vs").offsetWidth,pe("#vs").classList.add("anim"),Qe.se("vs"),L.vsAt=performance.now(),clearTimeout(L.vsTimer),L.vsTimer=setTimeout(()=>L.screen==="vs"&&L.vsNext(),5200)}function Pa(n,e,t){Mp([n,e]);let i={rounds:t.training?99:L.opt.rounds,time:t.training?0:L.opt.time*60,training:!!t.training,noKo:!!t.training,seed:Math.random()*1e9|0};L.opt.time===0&&(i.time=0);let s=new Ha(n,e,i);L.match=s,L.fightOpts=t,L.cpu=[null,null],t.cpu[0]&&(L.cpu[0]=new Ji(s.f[0],t.level??1,s.rng)),t.cpu[1]&&(L.cpu[1]=new Ji(s.f[1],t.level??1,s.rng)),Ea.stageKey=t.stage,Ea.reset(s),L.paused=!1,L.endAt=0,Ti("fight"),Sr("st_"+t.stage),pe("#touch .easy").classList.toggle("hide",!1)}As.fight=(n,e)=>Pa(n,e,{cpu:[!0,!0],level:2,stage:e});As.ending=n=>Ap(n);As.next=()=>Cu();function Eb(n,e){let t=on(),i=L.train.dummy,s=n.facing;if(i==="crouch"&&(t.d=1),i==="jump"&&!n.air&&e.frame%50===0&&(t.u=1),i==="guard"){t[s>0?"l":"r"]=1;let r=n.opp;r.mv&&r.mv.def.guard==="low"&&(t.d=1)}return t}function Rb(){let n=L.match;if(!n||L.paused)return;let e=L.mode==="vs",[t,i]=Yl.read(e);As.bot!==null&&!L.cpu[0]?((!L.botCpu||L.botCpu.f!==n.f[0])&&(L.botCpu=new Ji(n.f[0],As.bot,n.rng)),n.f[0].raw=L.botCpu.update(n)):n.f[0].raw=L.cpu[0]?L.cpu[0].update(n):t,L.cpu[1]?n.f[1].raw=L.cpu[1].update(n):L.fightOpts.training?n.f[1].raw=L.train.dummy==="cpu"?(L.trainCpu||(L.trainCpu=new Ji(n.f[1],1,n.rng))).update(n):Eb(n.f[1],n):n.f[1].raw=i,L.fightOpts.training&&(n.opts.trainGauge=L.train.gauge),n.step(),Cb(n),n.over&&!L.endAt&&(L.endAt=performance.now()),L.endAt&&performance.now()-L.endAt>2200&&(L.endAt=0,Pb())}function Cb(n){for(let e of n.events){let t=e.who!==void 0?(n.f[e.who].x-n.camX())/900:0;e.type==="voice"?Qe.voice(e.who,e.id,e.key,Math.max(-.6,Math.min(.6,t))):e.type==="sfx"?Qe.se(e.key,{pan:Math.max(-.5,Math.min(.5,t))}):e.type==="announce"?e.soft?Qe.sprite("v_announcer","counter","voice",{gain:.6}):setTimeout(()=>Qe.sprite("v_announcer",e.key,"voice"),(e.delay||0)*16):e.type==="blaze"?(Qe.se("blaze"),Qe.sprite("v_announcer","blaze","voice",{gain:.8})):e.type==="super"?Qe.se("super"):e.type}Ea.events(n,n.events),n.events.length=0}function Pb(){let n=L.match,e=n.winner?n.winner.side:-1;if(L.mode==="story"){if(e===0){if(L.story.idx++,L.story.idx>=L.story.order.length){Ap(L.story.me);return}xp(n,!0)}else kb();return}xp(n,!1)}function xp(n,e){Ti("result"),Qe.stopMusic(.5);let t=n.winner,i=t?t.id:n.f[0].id;pe("#result img").src=Gn("por_"+i),pe("#result .nm").textContent=t?an[i].name+" \u306E\u52DD\u3061\uFF01":"\u5F15\u304D\u5206\u3051",pe("#result .qt").textContent=t?"\u300C"+Lb(i)+"\u300D":"",pe("#result .stat").textContent=`\u6700\u5927\u30B3\u30F3\u30DC ${Math.max(...n.stats.maxCombo)}\u3000\u58C1\u30D2\u30C3\u30C8 ${n.stats.wallSplats}\u3000\u76F8\u6BBA ${n.stats.clashes}`,Sr(t&&(e||L.mode==="cpu")&&t.side===1?"lose":"win"),pe("#result .btns").innerHTML=e?'<div class="mi cur" data-r="next">\u6B21\u306E\u8A66\u5408\u3078</div><div class="mi" data-r="title">\u30BF\u30A4\u30C8\u30EB\u3078</div>':'<div class="mi cur" data-r="again">\u3082\u3046\u4E00\u5EA6</div><div class="mi" data-r="select">\u30AD\u30E3\u30E9\u9078\u629E\u3078</div><div class="mi" data-r="title">\u30BF\u30A4\u30C8\u30EB\u3078</div>',Ca(pe("#result"))}var Ib={hinata:"\u3054\u3061\u305D\u3046\u3055\u307E\u3067\u3057\u305F\uFF01 \u6B21\u306F\u8A66\u98DF\u4F1A\u306D\u266A",miyu:"\u3042\u3001\u3042\u306E\u2026\u2026\u75DB\u304F\u306A\u304B\u3063\u305F\u3001\u3067\u3059\u304B\u2026\u2026\uFF1F",ruru:"\u30A4\u30A7\u30FC\u30A4\uFF01 \u308B\u308B\u306E\u30B9\u30C6\u30FC\u30B8\u3001\u6700\u9AD8\u3060\u3063\u305F\u3063\u3057\u3087\uFF1F",akane:"\u4E00\u672C\uFF01 \u2026\u2026\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3057\u305F",yukari:"\u3042\u306A\u305F\u306E\u661F\u3082\u3001\u304D\u308C\u3044\u306B\u5149\u3063\u3066\u3044\u307E\u3057\u305F\u3088\u301C",karen:"\u3044\u3044\u6CF3\u304E\u3063\u3077\u308A\u3060\u3063\u305F\u3088\u3002\u307E\u305F\u4E00\u7DD2\u306B\u30C8\u30EC\u30FC\u30CB\u30F3\u30B0\u3057\u3088\uFF01",reika:"\u7684\u306F\u5916\u3055\u306A\u3044\u3002\u2026\u2026\u305D\u308C\u3060\u3051\u3088",sakura:"\u3054\u304D\u3052\u3093\u3088\u3046\u3002\u5C11\u3057\u3001\u672C\u6C17\u3092\u51FA\u3057\u3059\u304E\u307E\u3057\u305F\u308F\u306D",reiko:"\u3082\u3063\u3068\u935B\u3048\u3066\u304B\u3089\u51FA\u76F4\u3057\u306A\u3055\u3044\u3002\u2026\u2026\u671F\u5F85\u3057\u3066\u3044\u308B\u308F"},Lb=n=>Ib[n];pe("#result").addEventListener("click",n=>{let e=n.target.closest("[data-r]");if(!e)return;let t=e.dataset.r;if(t==="next"&&Ru(),t==="again"){let i=L.match;Pa(i.f[0].id,i.f[1].id,L.fightOpts)}t==="select"&&Aa(L.mode),t==="title"&&Wn()});function kb(){Ti("continue"),Sr("lose");let n=9;pe("#continue .num").textContent=n,Qe.sprite("v_announcer","continue","voice"),pe("#continue img").src=Gn("por_"+L.story.me),clearInterval(L.contTimer),L.contTimer=setInterval(()=>{n--,pe("#continue .num").textContent=Math.max(0,n),n<0&&(clearInterval(L.contTimer),Qe.sprite("v_announcer","gameover","voice"),setTimeout(Wn,1800))},1e3),Ca(pe("#continue"))}pe("#continue").addEventListener("click",n=>{let e=n.target.closest("[data-c]");e&&(clearInterval(L.contTimer),e.dataset.c==="yes"?(L.story.cont++,Ru()):(Qe.sprite("v_announcer","gameover","voice"),setTimeout(Wn,1200)))});function Ap(n){Ti("ending"),Sr("ending");try{let e=JSON.parse(localStorage.getItem("hb_clear")||"{}");e[n]=!0,localStorage.setItem("hb_clear",JSON.stringify(e))}catch{}pe("#ending img.me").src=Gn("por_"+n),L.end={id:n,page:0},Ep()}function Ep(){let n=gc[L.end.id],e=n.pages.length,t=L.end.page>=e,i=t?{bg:n.pages[e-1].bg,text:["\u2500\u2500 \u653E\u8AB2\u5F8C\u30D6\u30EC\u30A4\u30BA \u2500\u2500 \u304A\u3057\u307E\u3044","","\u904A\u3093\u3067\u304F\u308C\u3066\u3001\u3042\u308A\u304C\u3068\u3046\uFF01","","\u30AF\u30EC\u30B8\u30C3\u30C8\u30FB\u7D20\u6750\u306E\u8868\u8A18\u306F\u300C\u8A2D\u5B9A\u300D\u2192\u300C\u7D20\u6750\u3068\u30AF\u30EC\u30B8\u30C3\u30C8\u300D\u306B\u3042\u308A\u307E\u3059\u3002"]}:n.pages[L.end.page],s=kt.img["bg_"+i.bg],r=ki[i.bg]||ki.hinata;pe("#ending .ebg").style.backgroundImage=s?`url("${Gn("bg_"+i.bg)}")`:`linear-gradient(${r.sky[0]}, ${r.sky[1]})`;let a=pe("#ending img.guest"),o=i.who&&i.who!==L.end.id?i.who:null;a.classList.toggle("hide",!o),o&&(a.src=Gn("por_"+o)),pe("#ending .ttl").textContent=n.title,pe("#ending .pg").textContent=t?"\u304A\u3057\u307E\u3044":`${L.end.page+1} / ${e}`,pe("#ending .next").textContent=t?"\u25B6 \u30BF\u30C3\u30D7\uFF0F\u6C7A\u5B9A\u3067\u30BF\u30A4\u30C8\u30EB\u3078":"\u25B6 \u30BF\u30C3\u30D7\uFF0F\u6C7A\u5B9A\u3067\u3064\u304E\u3078";let l=pe("#ending .text");l.innerHTML="",L.end.lines=i.text,L.end.shown=0;let c=()=>{if(L.end.shown<L.end.lines.length){let u=document.createElement("p");u.textContent=L.end.lines[L.end.shown++]||"\xA0",l.appendChild(u)}else clearInterval(L.endTimer)};clearInterval(L.endTimer),c(),L.endTimer=setInterval(c,1100)}function Cu(){if(L.screen!=="ending"||!L.end)return;let n=pe("#ending .text");if(L.end.shown<L.end.lines.length){for(clearInterval(L.endTimer);L.end.shown<L.end.lines.length;){let e=document.createElement("p");e.textContent=L.end.lines[L.end.shown++]||"\xA0",n.appendChild(e)}return}if(L.end.page>=gc[L.end.id].pages.length){clearInterval(L.endTimer),Wn();return}L.end.page++,Qe.se("cursor"),Ep()}pe("#ending").addEventListener("click",n=>{n.target.closest("[data-e]")?(clearInterval(L.endTimer),Wn()):Cu()});function Pu(){Ti("options"),Rp()}function Rp(){let n=L.opt,e=Qe.vol,t=[["CPU\u306E\u5F37\u3055",tc[n.level].name,"level"],["\u30E9\u30A6\u30F3\u30C9",n.rounds+"\u672C\u5148\u53D6","rounds"],["\u6642\u9593",n.time?n.time+"\u79D2":"\u221E","time"],["\u30AD\u30E3\u30E9\u306E\u8868\u793A",n.view3d?"\u7ACB\u4F53\uFF083D\uFF09":"\u30A4\u30E9\u30B9\u30C8\uFF082D\uFF09","view3d"],["BGM\u306E\u97F3\u91CF",Math.round(e.bgm*10),"bgm"],["\u52B9\u679C\u97F3\u306E\u97F3\u91CF",Math.round(e.se*10),"se"],["\u58F0\u306E\u97F3\u91CF",Math.round(e.voice*10),"voice"]];pe("#options .rows").innerHTML=t.map(([i,s,r],a)=>`<div class="mi row ${a===0?"cur":""}" data-k="${r}"><span>${i}</span><b>\u25C0 ${s} \u25B6</b></div>`).join("")+'<div class="mi row" data-k="credits"><span>\u7D20\u6750\u3068\u30AF\u30EC\u30B8\u30C3\u30C8</span><b>\u898B\u308B</b></div><div class="mi row" data-k="back"><span>\u623B\u308B</span><b></b></div>',Ca(pe("#options"))}function Cp(n,e){let t=L.opt;if(n==="level"&&(t.level=(t.level+e+4)%4),n==="rounds"&&(t.rounds=(t.rounds-1+e+3)%3+1),n==="time"){let s=[30,60,99,0];t.time=s[(s.indexOf(t.time)+e+4)%4]}n==="view3d"&&(t.view3d=!t.view3d,kt.view3d=t.view3d);for(let s of["bgm","se","voice"])n===s&&Qe.setVol(s,Math.max(0,Math.min(1,Math.round(Qe.vol[s]*10+e)/10)));yb();let i=wi("#options .mi").findIndex(s=>s.classList.contains("cur"));Rp(),wi("#options .mi").forEach((s,r)=>s.classList.toggle("cur",r===i)),Qe.se("cursor")}pe("#options").addEventListener("click",n=>{let e=n.target.closest("[data-k]");if(!e)return;let t=e.dataset.k;t==="back"?Wn():t==="credits"?Ti("credits"):Cp(t,n.offsetX<e.clientWidth*.6?-1:1)});pe("#credits").addEventListener("click",n=>{n.target.closest("[data-x]")&&Pu()});function xr(n){L.screen==="fight"&&(L.paused=n,pe("#pause").classList.toggle("on",n),pe("#pause .train").classList.toggle("hide",!L.fightOpts.training),n&&(wi("#pause .mi").forEach((e,t)=>e.classList.toggle("cur",t===0)),Ca(pe("#pause")),Eu()))}function Eu(){let n={stand:"\u7ACB\u3064",crouch:"\u3057\u3083\u304C\u3080",jump:"\u30B8\u30E3\u30F3\u30D7",guard:"\u30AC\u30FC\u30C9",cpu:"CPU"};pe('#pause [data-p="dummy"] b').textContent=n[L.train.dummy],pe('#pause [data-p="gauge"] b').textContent=L.train.gauge?"MAX":"\u3075\u3064\u3046"}pe("#pause").addEventListener("click",n=>{let e=n.target.closest("[data-p]");if(!e)return;let t=e.dataset.p;if(t==="resume"&&xr(!1),t==="moves"&&Lp(L.match.f[0].id),t==="title"&&(xr(!1),Wn()),t==="dummy"){let i=["stand","crouch","jump","guard","cpu"];L.train.dummy=i[(i.indexOf(L.train.dummy)+1)%i.length],Eu()}t==="gauge"&&(L.train.gauge=!L.train.gauge,Eu())});var Ra=["\u64CD\u4F5C","\u30B7\u30B9\u30C6\u30E0",..._n.map(n=>n.id)];function Pp(n){L.movesOpen=!0,L.manTab=n??L.manTab??0,pe("#moves").classList.add("on"),Iu()}function Ip(){pe("#moves").classList.remove("on"),L.movesOpen=!1}function Lp(n){Pp(Ra.indexOf(n))}function Iu(){let n=pe("#moves"),e=L.manTab,t=Ra.map((s,r)=>{let a=r===0?"\u64CD\u4F5C":r===1?"\u30B7\u30B9\u30C6\u30E0":an[s].short,o=r>=2?`<img src="${Gn("icon_"+s)}" alt="">`:"";return`<div class="tab ${r===e?"on":""}" data-tab="${r}">${o}<span>${a}</span></div>`}).join(""),i="";if(e===0)i=`<h2>\u64CD\u4F5C</h2>
    <h3>\u30AD\u30FC\u30DC\u30FC\u30C9\uFF081\u4EBA\u3067\u904A\u3076\u6642\uFF09</h3><table>
    <tr><td>\u79FB\u52D5\u30FB\u30B8\u30E3\u30F3\u30D7\u30FB\u3057\u3083\u304C\u3080</td><td class="cmd">\u77E2\u5370\u30AD\u30FC\uFF08\u5F8C\u308D\u3067\u30AC\u30FC\u30C9\u3001\u7A7A\u4E2D\u3067\u3082\u3046\u4E00\u5EA6\u2191\u3067\u4E8C\u6BB5\u30B8\u30E3\u30F3\u30D7\uFF09</td></tr>
    <tr><td>\u30D1\u30F3\u30C1 \u5F31\uFF0F\u4E2D\uFF0F\u5927</td><td class="cmd">Z \uFF0F X \uFF0F C</td></tr><tr><td>\u30AD\u30C3\u30AF \u5F31\uFF0F\u4E2D\uFF0F\u5927</td><td class="cmd">A \uFF0F S \uFF0F D</td></tr>
    <tr><td>\u7C21\u6613\u5FC5\u6BBA\u30DC\u30BF\u30F3</td><td class="cmd">F\uFF08\u2192\u30FB\u2190\u30FB\u2193 \u3068\u4E00\u7DD2\u306B\u62BC\u3059\u3068\u5225\u306E\u6280\uFF09</td></tr>
    <tr><td>\u7C21\u6613\u30B3\u30F3\u30DC\u30DC\u30BF\u30F3</td><td class="cmd">G \u3092\u62BC\u3057\u306A\u304C\u3089\u653B\u6483\u30DC\u30BF\u30F3\u30923\u56DE \u2192 3\u767A\u30B3\u30F3\u30DC \u2192 F \u3067\u5FC5\u6BBA\u6280 \u2192 F\uFF0B\u30D1\u30F3\u30C1\uFF08\u30AD\u30C3\u30AF\uFF09\u3067\u8D85\u5FC5\u6BBA</td></tr>
    <tr><td>\u8D85\u5FC5\u6BBA1\uFF0F\u8D85\u5FC5\u6BBA2</td><td class="cmd">\u30D1\u30F3\u30C12\u3064\uFF0BF \uFF0F \u30AD\u30C3\u30AF2\u3064\uFF0BF\uFF08V\uFF0FB \u30AD\u30FC\u3067\u3082\u51FA\u305B\u308B\uFF09</td></tr>
    <tr><td>\u56DE\u907F</td><td class="cmd">\u30B9\u30DA\u30FC\u30B9</td></tr><tr><td>\u4E00\u6642\u505C\u6B62\u30FB\u8AAC\u660E\u66F8</td><td class="cmd">Esc</td></tr></table>
    <h3>\u30AD\u30FC\u30DC\u30FC\u30C9\uFF082\u4EBA\u3067\u5BFE\u6226\uFF09</h3><table>
    <tr><td>1P</td><td class="cmd">\u79FB\u52D5 WASD\u3000\u30D1\u30F3\u30C1 R T Y\u3000\u30AD\u30C3\u30AF F G H\u3000\u5FC5\u6BBA E\u3000\u30B3\u30F3\u30DC Z\u3000\u56DE\u907F \u30B9\u30DA\u30FC\u30B9\u3000\u8D851/\u8D852 Q/V</td></tr>
    <tr><td>2P</td><td class="cmd">\u79FB\u52D5 \u77E2\u5370\u3000\u30D1\u30F3\u30C1 \u30C6\u30F3\u30AD\u30FC4 5 6\uFF08I O P\uFF09\u3000\u30AD\u30C3\u30AF 1 2 3\uFF08K L ;\uFF09\u3000\u5FC5\u6BBA 7\uFF08U\uFF09\u3000\u30B3\u30F3\u30DC 8\uFF08J\uFF09\u3000\u56DE\u907F 0\uFF08M\uFF09\u3000\u8D851/\u8D852 Enter/+\uFF08, .\uFF09</td></tr></table>
    <h3>\u30B2\u30FC\u30E0\u30D1\u30C3\u30C9</h3><table><tr><td>\u30DC\u30BF\u30F3</td><td class="cmd">\u25A1\u5F31P \u25B3\u4E2DP R1\u5927P \xD7\u5F31K \u25CB\u4E2DK R2\u5927K\u3000L1\u56DE\u907F\u3000L2\u7C21\u6613\u5FC5\u6BBA\u3000R3\u7C21\u6613\u30B3\u30F3\u30DC\u3000L3/\u30BB\u30EC\u30AF\u30C8 \u8D851/\u8D852</td></tr></table>
    <h3>\u30B9\u30DE\u30DB</h3><table><tr><td>\u753B\u9762\u306E\u30DC\u30BF\u30F3</td><td class="cmd">\u5DE6\u306E\u30B9\u30C6\u30A3\u30C3\u30AF\u3067\u79FB\u52D5\u3001\u53F3\u306E6\u3064\u3067\u653B\u6483\u3002\u300C\u5FC5\u6BBA\u300D\u306F\u30B9\u30C6\u30A3\u30C3\u30AF\u306E\u5411\u304D\u3067\u6280\u304C\u5909\u308F\u308B\u3002\u300C\u30B3\u30F3\u30DC\u300D\u3092\u62BC\u3057\u306A\u304C\u3089\u653B\u6483\u30673\u767A\u30B3\u30F3\u30DC\u3002\u300C\u8D851\u300D\u300C\u8D852\u300D\u3067\u8D85\u5FC5\u6BBA</td></tr></table>`;else if(e===1)i=`<h2>\u30B7\u30B9\u30C6\u30E0</h2><table>
    <tr><td>\u5F31\u30FB\u4E2D\u30FB\u5927</td><td class="cmd">\u5F31\uFF1D\u51FA\u304C\u65E9\u304F\u9699\u304C\u5C0F\u3055\u3044\uFF0F\u4E2D\uFF1D\u30EA\u30FC\u30C1\u304C\u9577\u3044\uFF0F\u5927\uFF1D\u9045\u3044\u304C\u5F37\u3044\u3002\u5F31\u2192\u4E2D\u2192\u5927\u2192\u5FC5\u6BBA\u6280\u2192\u8D85\u5FC5\u6BBA \u3068\u3064\u306A\u3052\u3089\u308C\u308B</td></tr>
    <tr><td>\u30EC\u30D0\u30FC\u5165\u308C\u653B\u6483</td><td class="cmd">\u2192\uFF0B\u653B\u6483\uFF1D\u30EA\u30FC\u30C1\u304C\u9577\u304F\u5C11\u3057\u5F37\u3044\uFF08\u51FA\u306F\u5C11\u3057\u9045\u3044\uFF09\u3002\u2192\uFF0B\u4E2D\u306F\u4E2D\u6BB5\uFF08\u7ACB\u3061\u30AC\u30FC\u30C9\u3067\u3057\u304B\u9632\u3052\u306A\u3044\uFF09\u3002\u2190\uFF0B\u653B\u6483\uFF1D\u77ED\u3044\u304C\u901F\u304F\u9699\u304C\u5C11\u306A\u3044\uFF08\u5C11\u3057\u5F31\u3044\uFF09</td></tr>
    <tr><td>\u591A\u6BB5\u30D2\u30C3\u30C8</td><td class="cmd">\u901A\u5E38\u6280\u306F2\u301C3\u56DE\u5F53\u305F\u308B\uFF08\u5927\u30D1\u30F3\u30C1\u306F3\u56DE\uFF09\u3002\u76F8\u6BBA\u3082\u3057\u3084\u3059\u3044</td></tr>
    <tr><td>\u90E8\u6D3B\u306E\u9053\u5177</td><td class="cmd">\u30D1\u30F3\u30C1\u306E\u5F31\u30FB\u4E2D\u30FB\u5927\u3067\u90E8\u6D3B\u306E\u9053\u5177\u3092\u6301\u3061\u66FF\u3048\u3066\u653B\u6483\uFF08\u30EA\u30FC\u30C1\u304C\u9577\u3044\uFF09</td></tr>
    <tr><td>\u81EA\u52D5\u306E\u7A7A\u4E2D\u30B3\u30F3\u30DC</td><td class="cmd">\u2193\uFF0B\u5927P \u3067\u6D6E\u304B\u305B\u305F\u3089\u3001\u5927P \u3092\u9023\u6253\u3067\u7A7A\u4E2D\u30B3\u30F3\u30DC\u3092\u6700\u59273\u56DE</td></tr>
    <tr><td>\u7C21\u6613\u30B3\u30F3\u30DC</td><td class="cmd">\u7C21\u6613\u30B3\u30F3\u30DC\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u306A\u304C\u3089\u653B\u6483\u30923\u56DE \u2192 \u5F31\u30FB\u4E2D\u30FB\u5927\u306E3\u767A \u2192 \u7C21\u6613\u5FC5\u6BBA\u30DC\u30BF\u30F3\u3067\u5FC5\u6BBA\u6280 \u2192 \u7C21\u6613\u5FC5\u6BBA\u30DC\u30BF\u30F3\uFF0B\u30D1\u30F3\u30C1\uFF08\u30AD\u30C3\u30AF\uFF091\u3064\u3067\u8D85\u5FC5\u6BBA1\uFF082\uFF09</td></tr>
    <tr><td>\u4E8C\u6BB5\u30B8\u30E3\u30F3\u30D7</td><td class="cmd">\u7A7A\u4E2D\u3067\u3082\u3046\u4E00\u5EA6 \u2191</td></tr>
    <tr><td>\u7A7A\u4E2D\u30AC\u30FC\u30C9</td><td class="cmd">\u30B8\u30E3\u30F3\u30D7\u4E2D\u306B\u76F8\u624B\u3068\u53CD\u5BFE\u3078\u30EC\u30D0\u30FC\uFF08\u2190\uFF09\u3067\u3001\u7A7A\u4E2D\u3067\u3082\u653B\u6483\u3092\u9632\u3052\u308B\uFF08\u6295\u3052\u30FB\u8D85\u5FC5\u6BBA\u306E\u6F14\u51FA\u306F\u9632\u3052\u306A\u3044\uFF09</td></tr>
    <tr><td>\u7A7A\u4E2D\u53D7\u3051\u8EAB</td><td class="cmd">\u7A7A\u4E2D\u30B3\u30F3\u30DC\u30671\u767A\u3082\u3089\u3063\u305F\u5F8C\u306F\u3001\u653B\u6483\u30DC\u30BF\u30F3\u3067\u53D7\u3051\u8EAB\uFF080.2\u79D2\u7121\u6575\uFF09\u3002\u305D\u306E\u307E\u307E\u53CD\u6483\u3084\u7A7A\u4E2D\u30AC\u30FC\u30C9\u304C\u3067\u304D\u308B</td></tr>
    <tr><td>\u30C0\u30C3\u30B7\u30E5\u653B\u6483 \u2192 \u58C1\u30B3\u30F3\u30DC</td><td class="cmd">\u2192\u2192 \u3067\u8D70\u308A\u3001\u8D70\u308A\u306A\u304C\u3089\u653B\u6483\u3002\u76F8\u624B\u306F\u753B\u9762\u306E\u7AEF\u307E\u3067\u5439\u304D\u98DB\u3093\u3067\u58C1\u306B\u5F53\u305F\u308A\u3001\u8DF3\u306D\u8FD4\u3063\u305F\u3068\u3053\u308D\u306B\u8FFD\u3044\u6253\u3061\u3067\u304D\u308B</td></tr>
    <tr><td>\u7A81\u304D\u4E0A\u3052 \u2192 \u7A7A\u4E2D\u30B3\u30F3\u30DC</td><td class="cmd">\u2193\uFF0B\u5927P \u3067\u76F8\u624B\u3092\u6D6E\u304B\u305B\u3001\u3059\u3050 \u2191 \u3067\u8FFD\u3044\u304B\u3051\u3066\u7A7A\u4E2D\u3067\u5F53\u3066\u653E\u984C</td></tr>
    <tr><td>\u30D0\u30C3\u30AF\u30B9\u30C6\u30C3\u30D7</td><td class="cmd">\u2190\u2190 \u3067\u5F8C\u308D\u3078\u8DF3\u3076\u3002\u51FA\u59CB\u3081\u306F\u7121\u6575</td></tr>
    <tr><td>\u56DE\u907F</td><td class="cmd">\u6253\u6483\u3068\u98DB\u3073\u9053\u5177\u306B\u7121\u6575\u3002\u305F\u3060\u3057\u6295\u3052\u306F\u5F53\u305F\u308B</td></tr>
    <tr><td>\u6295\u3052</td><td class="cmd">\u76F8\u624B\u306E\u8FD1\u304F\u3067 \u2192\uFF0F\u2190 \uFF0B \u5927P</td></tr>
    <tr><td>\u76F8\u6BBA</td><td class="cmd">\u540C\u6642\u306B\u653B\u6483\u304C\u5F53\u305F\u308B\u3068\u4E21\u65B9\u30CE\u30FC\u30C0\u30E1\u30FC\u30B8\u3002\u3059\u3050\u6B21\u306E\u6280\u3092\u51FA\u305B\u308B</td></tr>
    <tr><td>\u30B2\u30FC\u30B8\uFF08120%\uFF09</td><td class="cmd">100%\u3067\u8D85\u5FC5\u6BBA\u3002120%\u3067\u300CBLAZE\u300D\uFF1A\u3057\u3070\u3089\u304F\u653B\u6483\u529B\u30A2\u30C3\u30D7\uFF06\u8D85\u5FC5\u6BBA\u304C\u4F7F\u3044\u653E\u984C</td></tr>
    <tr><td>\u5FC5\u6BBA\u6280\u306E\u51FA\u3057\u65B9</td><td class="cmd">\u30B3\u30DE\u30F3\u30C9\uFF08\u2192\u2192 \u2190\u2190 \u2193\u2193 \u2193\u2192 \u2193\u2190 \uFF0B\u30DC\u30BF\u30F3\uFF09\u304B\u3001\u7C21\u6613\u5FC5\u6BBA\u30DC\u30BF\u30F3\uFF08\u305D\u306E\u307E\u307E\uFF0F\u2192\uFF0F\u2190\uFF0F\u2193 \uFF0B\u5FC5\u6BBA\u30DC\u30BF\u30F3\uFF09</td></tr></table>`;else{let s=Ra[e],r=an[s],a=ka[s].map(o=>`<tr><td>${o.name}</td><td class="cmd">${Gu[o.cmd.slice(0,2)]} \uFF0B ${o.cmd[2]==="P"?"\u30D1\u30F3\u30C1":"\u30AD\u30C3\u30AF"}</td><td class="ez">${Wu[o.ez]}</td></tr>`).join("");i=`<h2>${r.name}\uFF08${r.club}\u30FB${r.grade}\uFF09</h2><table><tr class="hd"><td>\u5FC5\u6BBA\u6280</td><td>\u30B3\u30DE\u30F3\u30C9</td><td>\u7C21\u6613\u5FC5\u6BBA</td></tr>${a}
      <tr class="su"><td>\u8D85\u5FC5\u6BBA1\uFF1A${Na[s].name}</td><td class="cmd" colspan="2">\u30B2\u30FC\u30B8100%\u3067 \u30D1\u30F3\u30C12\u3064\uFF0B\u5FC5\u6BBA\u30DC\u30BF\u30F3\uFF08V\uFF0F\u8D851\uFF09</td></tr>
      <tr class="su"><td>\u8D85\u5FC5\u6BBA2\uFF1A${Da[s].name}</td><td class="cmd" colspan="2">\u30B2\u30FC\u30B8100%\u3067 \u30AD\u30C3\u30AF2\u3064\uFF0B\u5FC5\u6BBA\u30DC\u30BF\u30F3\uFF08B\uFF0F\u8D852\uFF09</td></tr></table>
      <p class="qt">\u90E8\u6D3B\u306E\u9053\u5177\uFF1A\u5F31P ${Zi[s].L[1]}\uFF0F\u4E2DP ${Zi[s].M[1]}\uFF0F\u5927P ${Zi[s].H[1]}</p><p class="qt">\u300C${r.quote}\u300D</p>`}pe(".body",n).innerHTML=`<div class="tabs">${t}</div>${i}`}pe("#moves").addEventListener("click",n=>{let e=n.target.closest("[data-tab]");if(e){L.manTab=+e.dataset.tab,Qe.se("cursor"),Iu();return}n.target.closest(".close")&&Ip()});function Nb(){let n;for(;n=Yl.popMenu();){let{act:e,code:t}=n;if(L.movesOpen){e==="up"||e==="down"?pe("#moves .panel").scrollBy(0,e==="up"?-140:140):e==="left"||e==="right"?(L.manTab=(L.manTab+(e==="left"?-1:1)+Ra.length)%Ra.length,Qe.se("cursor"),Iu()):(e==="ok"||e==="back"||e==="pause"||t==="Escape")&&Ip();continue}if(L.screen==="boot"){e==="ok"&&Np();continue}if(L.screen==="fight"){if(t==="Escape"||t==="Enter"||e==="pause"){xr(!L.paused);continue}L.paused&&(e==="back"?xr(!1):bp(pe("#pause"),e));continue}if(L.screen==="select"){if(t==="Tab")continue;Mb(e,t);continue}if(L.screen==="vs"){e==="ok"&&performance.now()-L.vsAt>900&&(clearTimeout(L.vsTimer),L.vsNext());continue}if(L.screen==="options"&&(e==="left"||e==="right")){let s=pe("#options .mi.cur");if(s&&!["credits","back"].includes(s.dataset.k)){Cp(s.dataset.k,e==="left"?-1:1);continue}}if(L.screen==="options"&&e==="back"){Wn();continue}if(L.screen==="credits"){(e==="ok"||e==="back")&&Pu();continue}if(L.screen==="ending"){e==="ok"?Cu():e==="back"&&(clearInterval(L.endTimer),Wn());continue}if(L.screen==="title"&&e==="back")continue;let i=pe("#"+L.screen);i&&bp(i,e)}}var wa=0,Sp=performance.now();function kp(n){requestAnimationFrame(kp);let e=Math.max(0,Math.min(100,n-Sp));if(Sp=n,Nb(),L.screen==="fight"||L.screen==="result"&&L.match){if(L.screen==="fight"){wa+=e*As.speed;let t=0,i=4*As.speed;for(;wa>=1e3/60&&t<i&&(Rb(),wa-=1e3/60,t++,L.screen==="fight"););t>=i&&(wa=0)}Vt.clearRect(0,0,1280,720),Ea.draw(Vt,L.match,{stage:Ea.stageKey,noHud:L.screen!=="fight"})}else Db(n),wa=0}function Db(n){let e=n/1e3,t=Vt.createLinearGradient(0,0,1280,720);t.addColorStop(0,"#2a0f3a"),t.addColorStop(.5,"#6a1a5a"),t.addColorStop(1,"#ff7a3a"),Vt.fillStyle=t,Vt.fillRect(0,0,1280,720),Vt.save(),Vt.globalCompositeOperation="lighter";for(let i=0;i<40;i++){let s=(i*211+e*(20+i%7*8))%1380-50,r=(i*97+Math.sin(e+i)*30)%720;Vt.fillStyle=`rgba(255,${180+i%3*30},120,${.08+i%5*.03})`,Vt.beginPath(),Vt.arc(s,r,6+i%9*3,0,7),Vt.fill()}Vt.strokeStyle="rgba(255,255,255,0.06)",Vt.lineWidth=2;for(let i=0;i<12;i++){let s=(i*140-e*60)%1580-150;Vt.beginPath(),Vt.moveTo(s,720),Vt.lineTo(s+300,0),Vt.stroke()}Vt.restore()}async function Np(){if(L.booting)return;L.booting=!0,Qe.unlock(),pe("#boot .press").textContent="\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026",await vb(e=>{pe("#boot .bar i").style.width=Math.round(e*100)+"%"}),setTimeout(bb,1500);let n=pe("#title .cast");n.innerHTML="";for(let e of _n){let t=document.createElement("img");t.src=Gn("por_"+e.id),t.style.setProperty("--c",e.color),n.appendChild(t)}Ca(pe("#title")),Qe.sprite("v_announcer","title","voice"),Wn()}pe("#boot").addEventListener("click",Np);pe("#selman").addEventListener("click",n=>{n.stopPropagation(),Lp(_n[L.sel.cur[L.sel.done[0]&&L.mode!=="story"?1:0]].id)});document.addEventListener("visibilitychange",()=>{document.hidden&&L.screen==="fight"&&xr(!0)});$u(pe("#touch"),Yl,null,()=>xr(!L.paused));function Dp(){let n=pe("#stagebox"),e=innerWidth,t=innerHeight,i=t>e*1.05;document.body.classList.toggle("portrait",i);let s=matchMedia("(pointer: coarse)").matches;document.body.classList.toggle("touchy",s);let r=i&&s?Math.min(t*.55,e*9/16):t,a=Math.min(e/1280,r/720);n.style.transform=`scale(${a})`,n.style.left=Math.round((e-1280*a)/2)+"px",n.style.top=i&&s?"0px":Math.round((t-720*a)/2)+"px",document.documentElement.style.setProperty("--gameH",Math.round(720*a)+"px")}addEventListener("resize",Dp);Dp();requestAnimationFrame(kp);
