"use strict";(self["webpackChunktoneapi_webclient"]=self["webpackChunktoneapi_webclient"]||[]).push([[64],{5202:function(e,t,a){var r=a(3862),s=a(4870),i=a(3396);const l={class:"navbar-logo"},n={href:"https://github.com/ToneAPI",target:"_blank"},o=["src"],d=(0,i._)("div",{class:"spacer"},null,-1);function h(e,t,a,r,s,h){const p=(0,i.up)("router-link"),u=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("header",null,[(0,i._)("nav",null,[(0,i._)("div",l,[(0,i._)("a",n,[(0,i._)("img",{src:`${e.publicPath}tone_icon.png`},null,8,o)])]),d,(0,i.Wm)(p,{to:"/servers",class:"navbar-element"},{default:(0,i.w5)((()=>[(0,i.Uk)("Servers (Beta)")])),_:1}),(0,i.Wm)(p,{to:"/",class:"navbar-element"},{default:(0,i.w5)((()=>[(0,i.Uk)("Players")])),_:1})])]),(0,i.Wm)(u)],64)}var p=(0,i.aZ)({data(){return{publicPath:"/ToneAPI_webclient/"}}}),u=a(89);const c=(0,u.Z)(p,[["render",h]]);var m=c,_=a(2483),g=a(7139);const v=e=>((0,i.dD)("data-v-4b16b8f4"),e=e(),(0,i.Cn)(),e),y=v((()=>(0,i._)("div",{id:"filters"},null,-1))),f={class:"serverView"},w={class:"serverList"},b=v((()=>(0,i._)("div",{class:"serverHeaders"},[(0,i._)("span"),(0,i._)("span",null,"Server name"),(0,i._)("span",null,"Map"),(0,i._)("span",null,"Kills"),(0,i._)("span",null,"Max distance"),(0,i._)("span",null,"Average distance"),(0,i._)("span",null,"Players")],-1))),S=["src"],k={key:1};function L(e,t,a,r,s,l){const n=(0,i.up)("VirtualList");return(0,i.wg)(),(0,i.iD)(i.HY,null,[y,(0,i._)("div",f,[(0,i._)("div",w,[b,(0,i.Wm)(n,{list:e.serverList,"row-height":100},{default:(0,i.w5)((t=>[(0,i._)("div",{class:(0,g.C_)("serverRow "+(e.nsServersByName[t.data.name]?"":"offline ")+(e.nsServersByName[t.data.name]?.playerCount?"":"inactive ")+((t.index+1)%2?"odd ":"uneven "))},[(0,i._)("div",null,[(0,i._)("span",null,(0,g.zw)(t.index+1),1)]),(0,i._)("div",null,[(0,i._)("span",null,(0,g.zw)(t.data.name+(e.nsServersByName[t.data.name]?"":" (offline)")),1)]),e.nsServersByName[t.data.name]?((0,i.wg)(),(0,i.iD)("img",{key:0,src:`${e.publicPath}maps/${e.nsServersByName[t.data.name].map}_lobby.png`},null,8,S)):(0,i.kq)("",!0),e.nsServersByName[t.data.name]?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",k)),(0,i._)("div",null,[(0,i._)("span",null,(0,g.zw)(t.data._value.deaths),1)]),(0,i._)("div",null,[(0,i._)("span",null,(0,g.zw)(t.data._value.max_distance),1)]),(0,i._)("div",null,[(0,i._)("span",null,(0,g.zw)(Math.round(100*(t.data._value.total_distance/t.data._value.kills||0))/100),1)]),(0,i._)("div",null,[(0,i._)("span",null,(0,g.zw)(e.nsServersByName[t.data.name]?e.nsServersByName[t.data.name]?.playerCount+"/"+e.nsServersByName[t.data.name]?.maxPlayers:""),1)])],2)])),_:1},8,["list"])])])],64)}a(7658);var x=a(1020),P=a(5130);function H(e){return Object.fromEntries(Object.entries(e).filter((e=>void 0!==e[1]&&null!==e[1])))}function C(e,t){try{return e=H(e),t=H(t),P.deepStrictEqual(e,t),!0}catch{return!1}}let $;const V=(0,x.Q_)("kill",{state:()=>({servers:[],players:[],weapons:[],maps:[],gamemodes:[],hosts:{},nsServers:void 0}),getters:{getPlayerList:e=>t=>e.players.find((e=>C((0,s.SU)(e).filter,t))),getWeaponList:e=>t=>e.weapons.find((e=>C((0,s.SU)(e).filter,t))),getServerList:e=>t=>e.servers.find((e=>C((0,s.SU)(e).filter,t))),getNSServers:e=>e.nsServers},actions:{fetchPlayers(e){e=H(e);let t=this.players.find((t=>C((0,s.SU)(t).filter,e)));return void 0===t&&(t=(0,s.XI)({filter:e,data:{}}),this.players.push(t)),fetch("https://tone.sleepycat.date/v2/client/players?"+new URLSearchParams(e)).then((async e=>{(0,s.SU)(t).data=Object.fromEntries(Object.entries(await e.json()).map((e=>[e[0],(0,s.iH)(e[1])]))),(0,s.oR)(t)})),t},fetchWeapons(e){e=H(e);let t=this.weapons.find((t=>C((0,s.SU)(t).filter,e)));return t||(t=(0,s.XI)({filter:e,data:{}}),this.weapons.push(t)),fetch("https://tone.sleepycat.date/v2/client/weapons?"+new URLSearchParams(e)).then((async e=>{(0,s.SU)(t).data=Object.fromEntries(Object.entries(await e.json()).map((e=>[e[0],(0,s.iH)(e[1])]))),(0,s.oR)(t)})),t},fetchServers(e){e=H(e);let t=this.servers.find((t=>C((0,s.SU)(t).filter,e)));return t||(t=(0,s.XI)({filter:e,data:{}}),this.servers.push(t)),fetch("https://tone.sleepycat.date/v2/client/servers?"+new URLSearchParams(e)).then((async e=>{(0,s.SU)(t).data=Object.fromEntries(Object.entries(await e.json()).map((e=>[e[0],(0,s.iH)(e[1])]))),(0,s.oR)(t)})),t},fetchNSServers(){return fetch("https://northstar.tf/client/servers").then((async e=>{this.nsServers=await e.json()})),clearInterval($),$=setInterval((()=>this.fetchNSServers()),6e4),this.nsServers||[]}}}),W={ref:"vscroll",class:"vscroll"};function D(e,t,a,r,s,l){return(0,i.wg)(),(0,i.iD)("div",{ref:"vlist",class:"vlist",onScroll:t[0]||(t[0]=(...t)=>e.scroll&&e.scroll(...t))},[(0,i._)("div",W,[(0,i._)("div",{style:(0,g.j5)(`padding: ${e.interval[0]*e.$props.rowHeight}px 0px ${Math.max(0,e.list.length*e.$props.rowHeight-e.interval[1]*e.$props.rowHeight)}px;`)},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.visibleList,((t,a)=>(0,i.WI)(e.$slots,"default",{data:t,index:a+e.interval[0]},void 0,!0))),256))],4)],512)],544)}var I=(0,i.aZ)({data(){return{toLoad:10,vlistHeight:10,vIndex:0}},props:{list:{type:Array,default:()=>[]},rowHeight:{type:Number,default:()=>32},highlighted:String},mounted(){this.$props.list&&(this.vlistHeight=this.$refs.vlist?.getBoundingClientRect().height||0,this.toLoad=3*this.visibleCount,this.$props.highlighted&&setTimeout((()=>this.$refs.vlist?.scrollBy({top:this.list.findIndex((e=>e.id===this.$props.highlighted))*this.rowHeight-this.$refs.vlist?.scrollTop-(this.vlistHeight/2-this.$props.rowHeight),behavior:"smooth"})),1))},computed:{interval(){return[Math.min(this.list.length-this.toLoad,this.vIndex),Math.min(this.vIndex+this.toLoad,this.list.length)]},visibleList(){return this.list.slice(this.interval[0],this.interval[1])},visibleCount(){return Math.ceil(this.vlistHeight/this.$props.rowHeight)}},watch:{list(){this.vlistHeight=this.$refs.vlist?.getBoundingClientRect().height||0},highlighted(e){e&&setTimeout((()=>this.$refs.vlist?.scrollBy({top:this.list.findIndex((t=>t.id===e))*this.rowHeight-this.$refs.vlist?.scrollTop-(this.vlistHeight/2-this.$props.rowHeight),behavior:"smooth"})),1)}},methods:{scroll(e){const t=e.target?.scrollTop,a=Math.floor(t/this.$props.rowHeight),r=a<this.vIndex,s=a>this.vIndex+this.visibleCount;if(r?this.vIndex=Math.max(a-this.visibleCount,0):s&&(this.vIndex=Math.min(a,this.list.length-this.toLoad)),s||r){}}}});const U=(0,u.Z)(I,[["render",D],["__scopeId","data-v-4b7b1630"]]);var M=U,O=(0,i.aZ)({name:"ServerView",components:{VirtualList:M},data(){return{store:V(),publicPath:"/ToneAPI_webclient/"}},computed:{servers(){const e=this.store.getServerList({})?.value.data;return e||(0,s.SU)(this.store.fetchServers({})).data},serverList(){const e=Object.entries(this.servers).map((e=>({...e[1],name:e[0]})));return e.sort(((e,t)=>{const a=this.nsServersByName[e.name]?this.nsServersByName[e.name].playerCount?1:0:-1,r=this.nsServersByName[t.name]?this.nsServersByName[t.name].playerCount?1:0:-1;return r-a})),e},nsServers(){const e=this.store.getNSServers;return e||this.store.fetchNSServers()},nsServersByName(){return Object.fromEntries(this.nsServers.map((e=>[e.name,e])))}}});const R=(0,u.Z)(O,[["render",L],["__scopeId","data-v-4b16b8f4"]]);var N=R;const j={id:"filters"},A={class:"multiselect-wrapper"},B=["disabled"],q={class:"multiselect-wrapper"},E=["disabled"],T={class:"multiselect-wrapper"},Z=["disabled"],z={id:"playerView"};function F(e,t,a,r,s,l){const n=(0,i.up)("VueMultiselect"),o=(0,i.up)("PlayerList"),d=(0,i.up)("PlayerChart"),h=(0,i.up)("WeaponChart");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",j,[(0,i._)("span",A,[(0,i.Wm)(n,{selectLabel:"",deselectLabel:"remove",placeholder:"Select server",modelValue:e.model.server,"onUpdate:modelValue":t[0]||(t[0]=t=>e.model.server=t),options:e.sortedServerList,"allow-empty":!0},null,8,["modelValue","options"]),(0,i._)("button",{onClick:t[1]||(t[1]=t=>e.model.server=void 0),disabled:!e.model.server},"X",8,B)]),(0,i._)("span",q,[(0,i.Wm)(n,{selectLabel:"",deselectLabel:"remove",placeholder:"Select weapon",modelValue:e.model.weapon,"onUpdate:modelValue":t[2]||(t[2]=t=>e.model.weapon=t),"custom-label":t=>e.weaponLocale[t]||t,options:e.sortedWeaponList,"allow-empty":!0},null,8,["modelValue","custom-label","options"]),(0,i._)("button",{onClick:t[3]||(t[3]=t=>e.model.weapon=void 0),disabled:!e.model.weapon},"X",8,E)]),(0,i._)("span",T,[(0,i.Wm)(n,{"options-limit":20,selectLabel:"",deselectLabel:"remove",placeholder:"Search player",modelValue:e.playerHighlighted,"onUpdate:modelValue":t[4]||(t[4]=t=>e.playerHighlighted=t),options:e.sortedPlayerList,"allow-empty":!0,"custom-label":e=>e?.username},null,8,["modelValue","options","custom-label"]),(0,i._)("button",{onClick:t[5]||(t[5]=t=>e.playerHighlighted=void 0),disabled:!e.playerHighlighted},"X",8,Z)])]),(0,i._)("div",z,[(0,i.Wm)(o,{filters:e.filters,onHighlightPlayer:e.highlight_player,playerHighlighted:e.playerHighlighted?.id},null,8,["filters","onHighlightPlayer","playerHighlighted"]),(0,i.Wm)(d,{filters:e.filters,onHighlightPlayer:e.highlight_player,playerHighlighted:e.playerHighlighted?.id},null,8,["filters","onHighlightPlayer","playerHighlighted"]),(0,i.Wm)(h,{filters:{player:e.playerHighlighted?.id,...e.filters},playerHighlighted:e.playerHighlighted?.id},null,8,["filters","playerHighlighted"])])],64)}const K={class:"playerHeaders"},X=(0,i._)("span",null,null,-1),G=["onClick"];function Y(e,t,a,r,s,l){const n=(0,i.up)("VirtualList");return(0,i.wg)(),(0,i.iD)("div",{class:"playerTable",onKeydown:t[6]||(t[6]=(...t)=>e.selectNextPlayer&&e.selectNextPlayer(...t)),tabindex:"0"},[(0,i._)("div",K,[X,(0,i._)("span",{onClick:t[0]||(t[0]=t=>e.updateSort("username")),class:(0,g.C_)("username"==e.sortingData.argument?"selected":"")},"Username",2),(0,i._)("span",{onClick:t[1]||(t[1]=t=>e.updateSort("kills")),class:(0,g.C_)("kills"==e.sortingData.argument?"selected":"")},"K",2),(0,i._)("span",{onClick:t[2]||(t[2]=t=>e.updateSort("deaths")),class:(0,g.C_)("deaths"==e.sortingData.argument?"selected":"")},"D",2),(0,i._)("span",{onClick:t[3]||(t[3]=t=>e.updateSort("k/d")),class:(0,g.C_)("k/d"==e.sortingData.argument?"selected":"")},"K/D",2),(0,i._)("span",{onClick:t[4]||(t[4]=t=>e.updateSort("max_distance")),class:(0,g.C_)("max_distance"==e.sortingData.argument?"selected":"")},"Max distance",2),(0,i._)("span",{onClick:t[5]||(t[5]=t=>e.updateSort("avg_distance")),class:(0,g.C_)("avg_distance"==e.sortingData.argument?"selected":"")},"Average distance",2)]),(0,i.Wm)(n,{list:e.playerList,"row-height":32,highlighted:e.playerHighlighted},{default:(0,i.w5)((t=>[(0,i._)("div",{class:(0,g.C_)("playerRow "+(t.data.id===e.playerHighlighted?"selected ":"")+((t.index+1)%2?"odd ":"uneven ")),onClick:a=>e.$emit("highlightPlayer",t.data.id)},[(0,i._)("div",null,[(0,i._)("span",null,(0,g.zw)(t.index+1),1)]),(0,i._)("div",null,[(0,i._)("span",null,(0,g.zw)(t.data.value.username),1)]),(0,i._)("div",null,[(0,i._)("span",null,(0,g.zw)(t.data.value.kills),1)]),(0,i._)("div",null,[(0,i._)("span",null,(0,g.zw)(t.data.value.deaths),1)]),(0,i._)("div",null,[(0,i._)("span",null,(0,g.zw)(Math.round(t.data.value.kills/Math.max(1,t.data.value.deaths)*100)/100),1)]),(0,i._)("div",null,[(0,i._)("span",null,(0,g.zw)(t.data.value.max_distance),1)]),(0,i._)("div",null,[(0,i._)("span",null,(0,g.zw)(Math.round(100*(t.data.value.total_distance/t.data.value.kills||0))/100),1)])],10,G)])),_:1},8,["list","highlighted"])],32)}var J=(0,i.aZ)({components:{VirtualList:M},props:{filters:{type:Object,default:()=>({})},playerHighlighted:String},emits:["highlightPlayer"],data(){return{sortingData:{direction:-1,argument:"kills"},store:V()}},computed:{players(){const{player:e,...t}=this.filters,a=this.store.getPlayerList(t)?.value.data;return a||this.store.fetchPlayers(t).value.data},playerList(){if(!this.players)return[];const e=Object.entries(this.players).map((e=>{const t={},a=new Proxy(e[1],t);return a.id=e[0],a}));new Date;if("username"===this.sortingData.argument){const t=new Intl.Collator("en",{numeric:!0,sensitivity:"base"});e.sort(((e,a)=>{const r=e._rawValue,s=a._rawValue;return t.compare(r.username,s.username)}))}else if("k/d"===this.sortingData.argument)e.sort(((e,t)=>{const a=e._rawValue,r=t._rawValue;return a.kills/Math.max(1,a.deaths)-r.kills/Math.max(1,r.deaths)}));else if("avg_distance"===this.sortingData.argument)e.sort(((e,t)=>{const a=e._rawValue,r=t._rawValue;return(a.total_distance/a.kills||0)-(r.total_distance/r.kills||0)}));else{const t=this.sortingData.argument;e.sort(((e,a)=>{const r=e._rawValue,s=a._rawValue;return r[t]-s[t]}))}return this.sortingData.direction<0&&e.reverse(),e}},watch:{playerHighlighted(e){this.scrollToPlayer(e)},playerList(){this.playerHighlighted&&this.scrollToPlayer(this.playerHighlighted)}},methods:{selectNextPlayer(e){const t={Home:-1/0,End:1/0,PageDown:100,PageUp:-100,ArrowUp:-1,ArrowDown:1,ArrowRight:10,ArrowLeft:-10};if(!this.$props.playerHighlighted)return;if(!Object.keys(t).includes(e.key))return;e.preventDefault();const a=this.playerList.findIndex((e=>e.id===this.$props.playerHighlighted));let r=a+t[e.key];r>=this.playerList.length&&(r=this.playerList.length-1),r<0&&(r=0),this.$emit("highlightPlayer",this.playerList[r].id)},updateSort(e){this.sortingData.argument===e?this.sortingData.direction*=-1:this.sortingData.direction=-1,this.sortingData.argument=e},scrollToPlayer(e){const t=this.$refs["player:"+e];setTimeout((function(){t&&t[0]&&t[0].scrollIntoView({behavior:"smooth",block:"center"})}),10)}}});const Q=(0,u.Z)(J,[["render",Y]]);var ee=Q;const te={class:"playerChart",ref:"container"};function ae(e,t,a,r,s,l){const n=(0,i.up)("Scatter");return(0,i.wg)(),(0,i.iD)("div",te,[(0,i.Wm)(n,{data:e.chart,options:e.chartOptions},null,8,["data","options"])],512)}var re=a(3254),se=a(9152),ie=a(1131),le=a(5866);re.kL.register(re.f$,re.od,re.jn,re.u,re.De,se.Z,ie.Z);var ne=(0,i.aZ)({name:"PlayerChart",props:{filters:Object,playerHighlighted:String},data:()=>({store:V(),refreshColors:0,playerData:[]}),emits:["highlightPlayer"],components:{Scatter:le.bp},mounted(){this.refreshColors++},computed:{playerList(){const e=this.store.getPlayerList(this.filters||{})?.value.data;if(!e)return Object.entries(this.store.fetchPlayers(this.filters||{}).value.data).map((e=>({id:e[0],...(0,s.IU)(e[1].value)})));const t=Object.entries(e).map((e=>({id:e[0],...(0,s.IU)(e[1].value)})));return t.sort(((e,t)=>t.kills-e.kills)),t.slice(0,200)},colors(){this.refreshColors;const e={};if(this.$refs?.container){const t=getComputedStyle(this.$refs.container);e.fg=t.getPropertyValue("--foreground"),e.bg=t.getPropertyValue("--bg-color"),e.orange=t.getPropertyValue("--orange"),e.cyan=t.getPropertyValue("--cyan"),e.currentLine=t.getPropertyValue("--current-line")}else e.fg="#ffffff";return e},chart(){const e=this.playerList.findIndex((e=>e.id===this.$props.playerHighlighted)),t=this.colors.cyan,a=new Array(this.playerList.length).fill(t);a[e]=this.colors.orange;const r=a,s=new Array(this.playerList.length).fill(1);s[e]=20;const i=new Array(this.playerList.length).fill(4);i[e]=30;const l=new Array(this.playerList.length).fill("circle");return l[e]="crossRot",{datasets:[{label:"Players",labels:this.playerList.map((e=>e.id))||[],borderColor:a,backgroundColor:r,pointRadius:s,pointStyle:l,hoverRadius:i,data:this.playerList.map((e=>({y:e.kills,x:e.deaths})))}]}},chartStaticOptions(){return{responsive:!0,maintainAspectRatio:!1,animation:{duration:500},layout:{autoPadding:!1},scales:{y:{title:{text:"Kills",display:!0,color:this.colors.fg},ticks:{color:this.colors.fg}},x:{title:{text:"Deaths",display:!0,color:this.colors.fg},ticks:{color:this.colors.fg}}},onClick:(e,t)=>{this.$emit("highlightPlayer",t.length>0?this.playerList[t[0].index].id:void 0),void 0!==this.store.getPlayerList(this.filters||{})&&(0,s.oR)(this.store.getPlayerList(this.filters||{}))},onHover:(e,t)=>{e.native.target&&(e.native.target.style.cursor=t[0]?"pointer":"default")}}},chartStaticPlugins(){let e=0,t=0;if(this.playerList){const a=Math.max(...this.playerList.map((e=>e.deaths))),r=Math.max(...this.playerList.map((e=>e.kills)));r>a?(e=a,t=a/r*r):(t=r,e=r/a*a)}return{tooltip:{callbacks:{label:e=>{let t;return t=this.playerList?this.playerList[e.dataIndex].username:e.dataset.labels[e.dataIndex],t+=" ("+e.parsed.y+" kills "+e.parsed.x+" deaths)",t}}},annotation:{annotations:{line:{type:"line",yMin:0,xMin:0,yMax:t,xMax:e,borderWidth:2,borderColor:this.colors.orange,borderDash:[1,5]}}},legend:{display:!1}}},chartOptions(){return this.$props.playerHighlighted,{...this.chartStaticOptions,plugins:{...this.chartStaticPlugins,datalabels:{formatter:(e,t)=>this.playerList[t.dataIndex].username,backgroundColor:e=>this.$props.playerHighlighted&&this.$props.playerHighlighted===this.playerList[e.dataIndex].id?this.colors.orange:null,borderColor:this.colors.fg,borderWidth:e=>this.$props.playerHighlighted&&this.$props.playerHighlighted===this.playerList[e.dataIndex].id?1:0,borderRadius:5,display:e=>this.$props.playerHighlighted&&this.$props.playerHighlighted===this.playerList[e.dataIndex].id?"true":"auto",align:-45,anchor:"end",clamp:!0,color:e=>this.$props.playerHighlighted&&this.$props.playerHighlighted===this.playerList[e.dataIndex].id?this.colors.bg:this.colors.fg}}}}}});const oe=(0,u.Z)(ne,[["render",ae],["__scopeId","data-v-77326078"]]);var de=oe;const he={class:"weaponChart",ref:"container"};function pe(e,t,a,r,s,l){const n=(0,i.up)("Doughnut");return(0,i.wg)(),(0,i.iD)("div",he,[(0,i.Wm)(n,{data:e.chart,options:e.chartOptions},null,8,["data","options"])],512)}var ue=JSON.parse('{"rodeo_battery_removal":"Rodeo Battery Removal","human_execution":"Human Execution","melee_pilot_kunai":"Kunai Melee","execution":"Execution","mp_weapon_car":"CAR","mp_weapon_defender":"Charge Rifle","mp_weapon_doubletake":"Double Take","mp_weapon_epg":"EPG-1","mp_weapon_hemlok_smg":"Volt","mp_weapon_lstar":"L-STAR","mp_weapon_r97":"R-97","mp_weapon_rspn101":"R-201","mp_weapon_smart_pistol":"Smart Pistol","mp_weapon_sniper":"Kraber","mp_weapon_vinson":"Flatline","mp_weapon_autopistol":"RE-45 auto","mp_weapon_alternator_smg":"Alternator","mp_weapon_frag_grenade":"Frag Grenade","mp_weapon_g2":"G2","mp_weapon_lmg":"Spitfire","mp_weapon_smr":"Sidewinder SMR","mp_weapon_softball":"Softball","mp_weapon_thermite_grenade":"Firestar","pilot_emptyhanded":"Melee","mp_weapon_mastiff":"Mastiff","mp_weapon_mgl":"MGL","mp_weapon_rspn101_og":"R-101","mp_weapon_wingman":"Wingman","invalid":"invalid","mp_weapon_arc_launcher":"Thunderbolt","mp_weapon_dmr":"DMR","mp_weapon_grenade_electric_smoke":"Electric Smoke","mp_weapon_pulse_lmg":"Cold War","mp_weapon_satchel":"Satchel","mp_weapon_shotgun":"EVA-8 Auto","mp_weapon_shotgun_pistol":"Mozambique","mp_weapon_wingman_n":"Wingman Elite","mp_weapon_grenade_gravity":"Gravity Star","mp_weapon_grenade_sonar":"Pulse Blade","mp_weapon_rocket_launcher":"Archer","outOfBounds":"OutOfBounds","mind_crime":"Mind Crime","mp_weapon_esaw":"Devotion","fall":"Fall","mp_weapon_semipistol":"P2016","mp_weapon_grenade_emp":"Arc Grenade","mp_weapon_hemlok":"Hemlok","melee_pilot_emptyhanded":"Melee","phase_shift":"Phase Shift","damagedef_suicide":"Suicide","damagedef_titan_hotdrop":"Crushed by Titanfall","mp_titanweapon_arc_cannon":"Arc Cannon","mp_weapon_peacekraber":"Peacekraber","damagedef_crush":"Crushed","mp_titanweapon_brute4_quad_rocket":"Quad Rocket Launcher","mp_weapon_turretplasma":"Antititan Turret","mp_titanweapon_xo16_vanguard":"XO-16","mp_titanweapon_sticky_40mm":"40mm Cannon","mp_titanweapon_predator_cannon":"Predator Cannon","mp_titanweapon_leadwall":"Leadwall","mp_titanweapon_sniper":"Plasma Railgun","titan_execution":"Titan Execution","titan_explosion":"Titan Explosion","auto_titan_melee":"Autotitan Melee","mp_titanweapon_vortex_shield_ion":"Vortex Shield","mp_titanweapon_heat_shield":"Heat shield","bubble_shield":"Bubble Shield","mp_titancore_salvo_core":"Salvo Core","mp_titancore_flame_wave":"Flame Wave","mp_titanweapon_flightcore_rockets":"Flight Core","mp_titancore_laser_cannon":"Laser Cannon","mp_titancore_flame_wave_secondary":"Scorched Earth","mp_titanweapon_flame_wall":"Flame Wall","mp_titanweapon_arc_wave":"Arc Wave"}');re.kL.register(re.qi,re.u,re.De,ie.Z);var ce=(0,i.aZ)({name:"WeaponChart",props:{filters:Object,playerHighlighted:String},emits:["highlightPlayer"],components:{Doughnut:le.$I},mounted(){this.refreshColors++},data:()=>({store:V(),refreshColors:0}),computed:{colors(){this.refreshColors;const e={};if(this.$refs.container){const t=getComputedStyle(this.$refs.container);e.fg=t.getPropertyValue("--foreground"),e.bg=t.getPropertyValue("--bg-color"),e.orange=t.getPropertyValue("--orange"),e.cyan=t.getPropertyValue("--cyan"),e.yellow=t.getPropertyValue("--yellow"),e.green=t.getPropertyValue("--green"),e.purple=t.getPropertyValue("--purple"),e.red=t.getPropertyValue("--red"),e.pink=t.getPropertyValue("--pink"),e.currentLine=t.getPropertyValue("--current-line")}else e.fg="#ffffff";return e},chart(){const e=["cyan","green","orange","pink","purple","red","yellow"],t={datasets:[{label:"Weapons",labels:this.sortedWeaponList||[],borderColor:()=>this.colors.fg,backgroundColor:t=>this.colors[e[3*t.dataIndex%e.length]],data:[]}]};return this.sortedWeaponList?(t.datasets[0].data=this.sortedWeaponList.map((e=>this.weapons?this.weapons[e].value.kills:0)),t):t},chartOptions(){this.$props.playerHighlighted;const e={responsive:!0,maintainAspectRatio:!0,animation:{duration:500},layout:{autoPadding:!1},plugins:{datalabels:{formatter:(e,t)=>{const a=this.sortedWeaponList[t.dataIndex];return ue[a]||a},backgroundColor:e=>e.dataset.backgroundColor(e),borderColor:this.colors.fg,borderRadius:25,borderWidth:2,color:this.colors.bg,display:e=>e.dataIndex===e.dataset.labels.length-1||"auto",padding:6},tooltip:{callbacks:{label:e=>{let t;return t=this.sortedWeaponList?this.sortedWeaponList[e.dataIndex]:e.dataset.labels[e.dataIndex],t+=" ("+this.weapons[t].value.kills+" kills)",t}}}}};return e},weapons(){const{weapon:e,...t}=this.filters||{},a=this.store.getWeaponList(t)?.value.data;return a||this.store.fetchWeapons(t).value.data},sortedWeaponList(){if(!this.weapons)return[];const e=Object.keys(this.weapons).filter((e=>this.weapons[e].value.kills>0));return e.sort(((e,t)=>Number(this.weapons[e].value.kills)<Number(this.weapons[t].value.kills)?-1:Number(this.weapons[e].value.kills)>Number(this.weapons[t].value.kills)?1:0)),e}}});const me=(0,u.Z)(ce,[["render",pe],["__scopeId","data-v-54a2c8e6"]]);var _e=me,ge=a(6368),ve=(0,i.aZ)({name:"PlayerView",components:{VueMultiselect:ge.ZP,PlayerList:ee,PlayerChart:de,WeaponChart:_e},data(){return{model:{server:void 0,weapon:void 0},filters:{},store:V(),playerHighlighted:void 0,weaponLocale:ue}},beforeCreate(){let e;this.$route.query.server&&(e=this.$route.query.server?.toString()),this.model={server:e,weapon:this.$route.query.weapon?.toString()}},computed:{servers(){const{server:e,player:t,...a}=this.filters,r=this.store.getServerList(a)?.value.data;return r||(0,s.SU)(this.store.fetchServers(a)).data},groupedServers(){const e=[];return Object.entries(this.servers).forEach((t=>{const a=(0,s.SU)(t[1]);e.find((e=>e.id===a.host))||e.push({id:a.host,servers:[]}),e.find((e=>e.id===a.host))?.servers.push({name:t[0],...a})})),e},weapons(){const{weapon:e,player:t,...a}=this.filters,r=this.store.getWeaponList(a)?.value.data;return r||this.store.fetchWeapons(a).value.data},players(){const{player:e,...t}=this.filters,a=this.store.getPlayerList(t)?.value.data;return a||this.store.fetchPlayers(t).value.data},sortedWeaponList(){if(!this.weapons)return[];const e=Object.keys(this.weapons);return e.sort()},sortedServerList(){if(!this.servers)return[];const e=Object.keys(this.servers);return e.sort()},sortedPlayerList(){if(!this.players)return[];const e=Object.entries(this.players).map((e=>({id:e[0],...e[1]._rawValue})));return e.sort(((e,t)=>e.username<t.username?-1:e.username>t.username?1:0))}},watch:{players(){const e=this.$route.query.player?.toString();e&&this.playerHighlighted?.id!==e&&this.highlight_player(e)},model:{handler(e){this.filters.server=e.server,this.filters.weapon=e.weapon},deep:!0},filters:{handler(e){const{server:t,weapon:a,...r}=this.$route.query;Se.push({query:{...e,...r}})},deep:!0},playerHighlighted(e,t){if(e?.id===t?.id)return;const{player:a,...r}=this.$route.query;Se.push({query:{player:e?.id,...r}})},$route:{handler:function(){this.applyRouteFilters()},immediate:!0}},methods:{highlight_player(e){const t=this.players[e];this.playerHighlighted=t?{id:e,...(0,s.SU)(t)}:void 0},applyRouteFilters(){if(this.playerHighlighted?.id!==this.$route.query.player){const e=this.$route.query.player?.toString();e&&this.highlight_player(e)}this.filters.weapon!==this.$route.query.weapon&&(this.model.weapon=this.$route.query.weapon?.toString()),this.filters.server!==this.$route.query.server&&(this.$route.query.server?this.model.server=this.$route.query.server?.toString():this.model.server=void 0)}}});const ye=(0,u.Z)(ve,[["render",F],["__scopeId","data-v-24065b86"]]);var fe=ye;const we=[{path:"/",name:"home",component:fe},{path:"/servers",name:"servers",component:N}],be=(0,_.p7)({history:(0,_.PO)("/ToneAPI_webclient/"),routes:we});var Se=be;const ke=(0,x.WB)();(0,r.ri)(m).use(ke).use(Se).mount("#app");const Le=V(),xe=new WebSocket("wss://tone.sleepycat.date/v2/client/websocket");function Pe(e){Le.$state.players.filter((t=>(!t.value.filter.server||t.value.filter.server===e.servername)&&(!t.value.filter.weapon||t.value.filter.weapon===e.cause_of_death))).forEach((t=>{t.value.data[e.attacker_id]||(t.value.data[e.attacker_id]=(0,s.iH)({deaths:0,kills:500,max_distance:0,total_distance:0,username:e.attacker_name})),t.value.data[e.victim_id]||(t.value.data[e.victim_id]=(0,s.iH)({deaths:0,kills:0,max_distance:0,total_distance:0,username:e.victim_name})),(0,s.SU)(t.value.data[e.victim_id]).deaths++,(0,s.SU)(t.value.data[e.victim_id]).username=e.victim_name,(0,s.SU)(t.value.data[e.attacker_id]).username=e.attacker_name,e.attacker_id!==e.victim_id&&((0,s.SU)(t.value.data[e.attacker_id]).kills++,(0,s.SU)(t.value.data[e.attacker_id]).total_distance+=e.distance,(0,s.SU)(t.value.data[e.attacker_id]).max_distance=Math.max(e.distance,(0,s.SU)(t.value.data[e.attacker_id]).max_distance))})),Le.$state.weapons.filter((t=>(!t.value.filter.server||t.value.filter.server===e.servername)&&(!t.value.filter.player||t.value.filter.player===e.attacker_id))).forEach((t=>{t.value.data[e.cause_of_death]||(t.value.data[e.cause_of_death]=(0,s.iH)({deaths:0,kills:500,max_distance:0,total_distance:0,deaths_while_equipped:0})),e.attacker_id!==e.victim_id&&((0,s.SU)(t.value.data[e.cause_of_death]).kills++,(0,s.SU)(t.value.data[e.cause_of_death]).total_distance+=e.distance,(0,s.SU)(t.value.data[e.cause_of_death]).max_distance=Math.max(e.distance,(0,s.SU)(t.value.data[e.cause_of_death]).max_distance)),(0,s.SU)(t.value.data[e.cause_of_death]).deaths++})),Le.$state.servers.filter((t=>!t.value.filter.server||t.value.filter.server===e.servername)).forEach((t=>{t.value.data[e.servername]||(t.value.data[e.servername]=(0,s.iH)({deaths:0,kills:500,max_distance:0,total_distance:0,deaths_while_equipped:0,host:e.host})),e.attacker_id!==e.victim_id&&((0,s.SU)(t.value.data[e.servername]).kills++,(0,s.SU)(t.value.data[e.servername]).total_distance+=e.distance,(0,s.SU)(t.value.data[e.servername]).max_distance=Math.max(e.distance,(0,s.SU)(t.value.data[e.servername]).max_distance)),(0,s.SU)(t.value.data[e.servername]).deaths++}))}xe.onmessage=function(e){if("ping"===e.data)return xe.send("pong");const t=JSON.parse(e.data);Pe(t)}}}]);
//# sourceMappingURL=chunk-common.b9422d18.js.map