(function(){"use strict";var e={270:function(e,t,r){var a=r(3862),i=r(3396);const s=(0,i.uE)('<div class="navbar-element">TONE API</div><div class="navbar-element github-link"><a href="https://github.com/Legonzaur/Tone_WebClient">Github</a></div><div class="navbar-element github-link"><a href="https://github.com/Legonzaur/ToneAPI_servermod">Northstar Server Mod</a></div><div class="spacer"></div>',4);function l(e,t,r,a,l,n){const o=(0,i.up)("router-link"),p=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("header",null,[(0,i._)("nav",null,[s,(0,i.Wm)(o,{to:"/",class:"navbar-element"},{default:(0,i.w5)((()=>[(0,i.Uk)("Players")])),_:1})])]),(0,i.Wm)(p)],64)}var n=(0,i.aZ)({}),o=r(89);const p=(0,o.Z)(n,[["render",l]]);var h=p,d=r(2483);const u={id:"filters"},c={class:"multiselect-wrapper"},g=["disabled"],m={class:"multiselect-wrapper"},y=["disabled"],_={class:"multiselect-wrapper"},f=["disabled"],v={id:"playerView"};function w(e,t,r,a,s,l){const n=(0,i.up)("VueMultiselect"),o=(0,i.up)("PlayerList"),p=(0,i.up)("PlayerChart"),h=(0,i.up)("WeaponChart");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",u,[(0,i._)("span",c,[(0,i.Wm)(n,{selectLabel:"",deselectLabel:"remove",placeholder:"Select server",modelValue:e.model.server,"onUpdate:modelValue":t[0]||(t[0]=t=>e.model.server=t),options:e.groupedServers,"group-values":"servers",group_label:"id","group-select":!1,"allow-empty":!0,multiple:!1,"custom-label":e=>e.name,"track-by":"name",label:"name"},null,8,["modelValue","options","custom-label"]),(0,i._)("button",{onClick:t[1]||(t[1]=t=>e.model.server=void 0),disabled:!e.model.server},"X",8,g)]),(0,i._)("span",m,[(0,i.Wm)(n,{selectLabel:"",deselectLabel:"remove",placeholder:"Select weapon",modelValue:e.model.weapon,"onUpdate:modelValue":t[2]||(t[2]=t=>e.model.weapon=t),"custom-label":t=>e.weaponLocale[t]||t,options:e.sortedWeaponList,"allow-empty":!0},null,8,["modelValue","custom-label","options"]),(0,i._)("button",{onClick:t[3]||(t[3]=t=>e.model.weapon=void 0),disabled:!e.model.weapon},"X",8,y)]),(0,i._)("span",_,[(0,i.Wm)(n,{"options-limit":20,selectLabel:"",deselectLabel:"remove",placeholder:"Search player",modelValue:e.playerHighlighted,"onUpdate:modelValue":t[4]||(t[4]=t=>e.playerHighlighted=t),options:e.sortedPlayerList,"allow-empty":!0,"custom-label":e=>e?.username},null,8,["modelValue","options","custom-label"]),(0,i._)("button",{onClick:t[5]||(t[5]=t=>e.playerHighlighted=void 0),disabled:!e.playerHighlighted},"X",8,f)])]),(0,i._)("div",v,[(0,i.Wm)(o,{filters:e.filters,onHighlightPlayer:e.highlight_player,playerHighlighted:e.playerHighlighted?.id},null,8,["filters","onHighlightPlayer","playerHighlighted"]),(0,i.Wm)(p,{filters:e.filters,onHighlightPlayer:e.highlight_player,playerHighlighted:e.playerHighlighted?.id},null,8,["filters","onHighlightPlayer","playerHighlighted"]),(0,i.Wm)(h,{filters:{player:e.playerHighlighted?.id,...e.filters},playerHighlighted:e.playerHighlighted?.id},null,8,["filters","playerHighlighted"])])],64)}r(7658);var b=r(1020),k=r(5130),L=r(4870);function P(e){return Object.fromEntries(Object.entries(e).filter((e=>void 0!==e[1]&&null!==e[1])))}function x(e,t){try{return e=P(e),t=P(t),k.deepStrictEqual(e,t),!0}catch{return!1}}const S=(0,b.Q_)("kill",{state:()=>({servers:[],players:[],weapons:[],maps:[],gamemodes:[],hosts:{}}),getters:{getPlayerList:e=>t=>e.players.find((e=>x((0,L.SU)(e).filter,t))),getWeaponList:e=>t=>e.weapons.find((e=>x((0,L.SU)(e).filter,t))),getServerList:e=>t=>e.servers.find((e=>x((0,L.SU)(e).filter,t)))},actions:{fetchPlayers(e){e=P(e);let t=this.players.find((t=>x((0,L.SU)(t).filter,e)));return void 0===t&&(t=(0,L.XI)({filter:e,data:{}}),this.players.push(t)),fetch("https://tone.sleepycat.date/v2/client/players?"+new URLSearchParams(e)).then((async e=>{(0,L.SU)(t).data=Object.fromEntries(Object.entries(await e.json()).map((e=>[e[0],(0,L.iH)(e[1])]))),(0,L.oR)(t)})),t},fetchWeapons(e){e=P(e);let t=this.weapons.find((t=>x((0,L.SU)(t).filter,e)));return t||(t=(0,L.XI)({filter:e,data:{}}),this.weapons.push(t)),fetch("https://tone.sleepycat.date/v2/client/weapons?"+new URLSearchParams(e)).then((async e=>{(0,L.SU)(t).data=Object.fromEntries(Object.entries(await e.json()).map((e=>[e[0],(0,L.iH)(e[1])]))),(0,L.oR)(t)})),t},fetchServers(e){e=P(e);let t=this.servers.find((t=>x((0,L.SU)(t).filter,e)));return t||(t=(0,L.XI)({filter:e,data:{}}),this.servers.push(t)),fetch("https://tone.sleepycat.date/v2/client/servers?"+new URLSearchParams(e)).then((async e=>{(0,L.SU)(t).data=Object.fromEntries(Object.entries(await e.json()).map((e=>[e[0],(0,L.iH)(e[1])]))),(0,L.oR)(t)})),t}}});var C=r(7139);const H={class:"playerHeaders"},O=(0,i._)("span",null,null,-1);function V(e,t,r,a,s,l){const n=(0,i.up)("VirtualList");return(0,i.wg)(),(0,i.iD)("div",{class:"playerTable",onKeydown:t[7]||(t[7]=(...t)=>e.selectNextPlayer&&e.selectNextPlayer(...t)),tabindex:"0"},[(0,i._)("div",H,[O,(0,i._)("span",{onClick:t[0]||(t[0]=t=>e.updateSort("username")),class:(0,C.C_)("username"==e.sortingData.argument?"selected":"")},"Username",2),(0,i._)("span",{onClick:t[1]||(t[1]=t=>e.updateSort("kills")),class:(0,C.C_)("kills"==e.sortingData.argument?"selected":"")},"K",2),(0,i._)("span",{onClick:t[2]||(t[2]=t=>e.updateSort("deaths")),class:(0,C.C_)("deaths"==e.sortingData.argument?"selected":"")},"D",2),(0,i._)("span",{onClick:t[3]||(t[3]=t=>e.updateSort("k/d")),class:(0,C.C_)("k/d"==e.sortingData.argument?"selected":"")},"K/D",2),(0,i._)("span",{onClick:t[4]||(t[4]=t=>e.updateSort("max_distance")),class:(0,C.C_)("max_distance"==e.sortingData.argument?"selected":"")},"max distance",2),(0,i._)("span",{onClick:t[5]||(t[5]=t=>e.updateSort("avg_distance")),class:(0,C.C_)("avg_distance"==e.sortingData.argument?"selected":"")},"average distance",2)]),(0,i.Wm)(n,{list:e.playerList,"row-height":32,onHighlightPlayer:t[6]||(t[6]=t=>e.$emit("highlightPlayer",t)),highlighted:e.playerHighlighted},null,8,["list","highlighted"])],32)}const $=["onClick"];function D(e,t,r,a,s,l){return(0,i.wg)(),(0,i.iD)("div",{ref:"vlist",class:"vlist",onScroll:t[0]||(t[0]=(...t)=>e.scroll&&e.scroll(...t))},[(0,i._)("div",{ref:"vscroll",class:"vscroll",style:(0,C.j5)(`padding: ${e.vIndex*e.$props.rowHeight}px 0px ${e.list.length*e.$props.rowHeight-e.vIndex*e.$props.rowHeight}px;`)},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.visibleList,((t,r)=>((0,i.wg)(),(0,i.iD)("div",{class:(0,C.C_)("playerRow "+(t.id===e.$props.highlighted?"selected":"")),key:t.id,onClick:r=>e.$emit("highlightPlayer",t.id),ref_for:!0,ref:"player:"+t.id},[(0,i._)("div",null,[(0,i._)("span",null,(0,C.zw)(r+1+e.vIndex),1)]),(0,i._)("div",null,[(0,i._)("span",null,(0,C.zw)(t.value.username),1)]),(0,i._)("div",null,[(0,i._)("span",null,(0,C.zw)(t.value.kills),1)]),(0,i._)("div",null,[(0,i._)("span",null,(0,C.zw)(t.value.deaths),1)]),(0,i._)("div",null,[(0,i._)("span",null,(0,C.zw)(Math.round(t.value.kills/Math.max(1,t.value.deaths)*100)/100),1)]),(0,i._)("div",null,[(0,i._)("span",null,(0,C.zw)(t.value.max_distance),1)]),(0,i._)("div",null,[(0,i._)("span",null,(0,C.zw)(Math.round(100*(t.value.total_distance/t.value.kills||0))/100),1)])],10,$)))),128))],4)],544)}var W=(0,i.aZ)({data(){return{toLoad:10,vlistHeight:0,vIndex:0}},props:{list:{type:Array,default:()=>[]},rowHeight:{type:Number,default:()=>32},highlighted:String},emits:["highlightPlayer"],computed:{visibleList(){return this.list.slice(Math.max(this.vIndex,0),Math.min(this.vIndex+3*this.visibleCount,this.list.length))},visibleCount(){return Math.ceil(this.vlistHeight/this.$props.rowHeight)}},watch:{list(){this.vlistHeight=this.$refs.vlist?.getBoundingClientRect().height||0},highlighted(e){e&&setTimeout((()=>this.$refs.vlist?.scrollBy({top:this.list.findIndex((t=>t.id===e))*this.rowHeight-this.$refs.vlist?.scrollTop-(this.vlistHeight/2-this.$props.rowHeight),behavior:"smooth"})),1)}},methods:{scroll(e){const t=e.target?.scrollTop,r=Math.round(t/this.$props.rowHeight),a=Math.max(0,r-this.visibleCount)<this.vIndex,i=Math.min(this.list.length,r+this.visibleCount)>this.vIndex+2*this.visibleCount;a?this.vIndex=Math.max(0,4*Math.floor((r-this.visibleCount)/4)):i&&(this.vIndex=Math.max(0,4*Math.floor(r/4)))}}});const I=(0,o.Z)(W,[["render",D],["__scopeId","data-v-96db01e6"]]);var M=I,j=(0,i.aZ)({components:{VirtualList:M},props:{filters:{type:Object,default:()=>({})},playerHighlighted:String},emits:["highlightPlayer"],data(){return{sortingData:{direction:-1,argument:"kills"},store:S()}},computed:{players(){const{player:e,...t}=this.filters,r=this.store.getPlayerList(t)?.value.data;return r||this.store.fetchPlayers(t).value.data},playerList(){if(!this.players)return[];const e=Object.entries(this.players).map((e=>{const t={},r=new Proxy(e[1],t);return r.id=e[0],r})),t=new Date;if("username"===this.sortingData.argument){const t=new Intl.Collator("en",{numeric:!0,sensitivity:"base"});e.sort(((e,r)=>{const a=e._rawValue,i=r._rawValue;return t.compare(a.username,i.username)}))}else if("k/d"===this.sortingData.argument)e.sort(((e,t)=>{const r=e._rawValue,a=t._rawValue;return r.kills/Math.max(1,r.deaths)-a.kills/Math.max(1,a.deaths)}));else if("avg_distance"===this.sortingData.argument)e.sort(((e,t)=>{const r=e._rawValue,a=t._rawValue;return(r.total_distance/r.kills||0)-(a.total_distance/a.kills||0)}));else{const t=this.sortingData.argument;e.sort(((e,r)=>{const a=e._rawValue,i=r._rawValue;return a[t]-i[t]}))}return console.log("Sorting the player object took + "+((new Date).getTime()-t.getTime())+"ms"),this.sortingData.direction<0&&e.reverse(),e}},watch:{playerHighlighted(e){this.scrollToPlayer(e)},playerList(){this.playerHighlighted&&this.scrollToPlayer(this.playerHighlighted)}},updated(){},methods:{selectNextPlayer(e){const t={Home:-1/0,End:1/0,PageDown:100,PageUp:-100,ArrowUp:-1,ArrowDown:1,ArrowRight:10,ArrowLeft:-10};if(!this.$props.playerHighlighted)return;if(!Object.keys(t).includes(e.key))return;e.preventDefault();const r=this.playerList.findIndex((e=>e.id===this.$props.playerHighlighted));let a=r+t[e.key];a>=this.playerList.length&&(a=this.playerList.length-1),a<0&&(a=0),this.$emit("highlightPlayer",this.playerList[a].id)},updateSort(e){this.sortingData.argument===e?this.sortingData.direction*=-1:this.sortingData.direction=-1,this.sortingData.argument=e},scrollToPlayer(e){const t=this.$refs["player:"+e];setTimeout((function(){t&&t[0]&&t[0].scrollIntoView({behavior:"smooth",block:"center"})}),10)}}});const R=(0,o.Z)(j,[["render",V]]);var A=R;const U={class:"playerChart",ref:"container"};function T(e,t,r,a,s,l){const n=(0,i.up)("Scatter");return(0,i.wg)(),(0,i.iD)("div",U,[(0,i.Wm)(n,{data:e.chart,options:e.chartOptions},null,8,["data","options"])],512)}var E=r(3254),q=r(9152),Z=r(1131),N=r(5866);E.kL.register(E.f$,E.od,E.jn,E.u,E.De,q.Z,Z.Z);var z=(0,i.aZ)({name:"PlayerChart",props:{filters:Object,playerHighlighted:String},data:()=>({store:S(),refreshColors:0,playerData:[]}),emits:["highlightPlayer"],components:{Scatter:N.bp},mounted(){this.refreshColors++},computed:{playerList(){const e=this.store.getPlayerList(this.filters||{})?.value.data;if(!e)return Object.entries(this.store.fetchPlayers(this.filters||{}).value.data).map((e=>({id:e[0],...(0,L.IU)(e[1].value)})));const t=Object.entries(e).map((e=>({id:e[0],...(0,L.IU)(e[1].value)})));return t.sort(((e,t)=>t.kills-e.kills)),t.slice(0,200)},colors(){this.refreshColors;const e={};if(this.$refs.container){const t=getComputedStyle(this.$refs.container);e.fg=t.getPropertyValue("--foreground"),e.bg=t.getPropertyValue("--bg-color"),e.orange=t.getPropertyValue("--orange"),e.cyan=t.getPropertyValue("--cyan"),e.currentLine=t.getPropertyValue("--current-line")}else e.fg="#ffffff";return e},chart(){const e=this.playerList.findIndex((e=>e.id===this.$props.playerHighlighted)),t=this.colors.cyan,r=new Array(this.playerList.length).fill(t);r[e]=this.colors.orange;const a=r,i=new Array(this.playerList.length).fill(1);i[e]=20;const s=new Array(this.playerList.length).fill(4);s[e]=30;const l=new Array(this.playerList.length).fill("circle");return l[e]="crossRot",{datasets:[{label:"Players",labels:this.playerList.map((e=>e.id))||[],borderColor:r,backgroundColor:a,pointRadius:i,pointStyle:l,hoverRadius:s,data:this.playerList.map((e=>({y:e.kills,x:e.deaths})))}]}},chartStaticOptions(){return{responsive:!0,maintainAspectRatio:!1,animation:{duration:500},layout:{autoPadding:!1},scales:{y:{title:{text:"Kills",display:!0,color:this.colors.fg},ticks:{color:this.colors.fg}},x:{title:{text:"Deaths",display:!0,color:this.colors.fg},ticks:{color:this.colors.fg}}},onClick:(e,t)=>{this.$emit("highlightPlayer",t.length>0?this.playerList[t[0].index].id:void 0),void 0!==this.store.getPlayerList(this.filters||{})&&(0,L.oR)(this.store.getPlayerList(this.filters||{}))},onHover:(e,t)=>{e.native.target&&(e.native.target.style.cursor=t[0]?"pointer":"default")}}},chartStaticPlugins(){let e=0,t=0;if(this.playerList){const r=Math.max(...this.playerList.map((e=>e.deaths))),a=Math.max(...this.playerList.map((e=>e.kills)));a>r?(e=r,t=r/a*a):(t=a,e=a/r*r)}return{tooltip:{callbacks:{label:e=>{let t;return t=this.playerList?this.playerList[e.dataIndex].username:e.dataset.labels[e.dataIndex],t+=" ("+e.parsed.y+" kills "+e.parsed.x+" deaths)",t}}},annotation:{annotations:{line:{type:"line",yMin:0,xMin:0,yMax:t,xMax:e,borderWidth:2,borderColor:this.colors.orange,borderDash:[1,5]}}},legend:{display:!1}}},chartOptions(){return this.$props.playerHighlighted,{...this.chartStaticOptions,plugins:{...this.chartStaticPlugins,datalabels:{formatter:(e,t)=>this.playerList[t.dataIndex].username,backgroundColor:e=>this.$props.playerHighlighted&&this.$props.playerHighlighted===this.playerList[e.dataIndex].id?this.colors.orange:null,borderColor:this.colors.fg,borderWidth:e=>this.$props.playerHighlighted&&this.$props.playerHighlighted===this.playerList[e.dataIndex].id?1:0,borderRadius:5,display:e=>this.$props.playerHighlighted&&this.$props.playerHighlighted===this.playerList[e.dataIndex].id?"true":"auto",align:-45,anchor:"end",clamp:!0,color:e=>this.$props.playerHighlighted&&this.$props.playerHighlighted===this.playerList[e.dataIndex].id?this.colors.bg:this.colors.fg}}}}}});const B=(0,o.Z)(z,[["render",T],["__scopeId","data-v-e83d63ce"]]);var F=B;const G={class:"weaponChart",ref:"container"};function K(e,t,r,a,s,l){const n=(0,i.up)("Doughnut");return(0,i.wg)(),(0,i.iD)("div",G,[(0,i.Wm)(n,{data:e.chart,options:e.chartOptions},null,8,["data","options"])],512)}var X=JSON.parse('{"rodeo_battery_removal":"Rodeo Battery Removal","human_execution":"Human Execution","melee_pilot_kunai":"Kunai Melee","execution":"Execution","mp_weapon_car":"CAR","mp_weapon_defender":"Charge Rifle","mp_weapon_doubletake":"Double Take","mp_weapon_epg":"EPG-1","mp_weapon_hemlok_smg":"Volt","mp_weapon_lstar":"L-STAR","mp_weapon_r97":"R-97","mp_weapon_rspn101":"R-201","mp_weapon_smart_pistol":"Smart Pistol","mp_weapon_sniper":"Kraber","mp_weapon_vinson":"Flatline","mp_weapon_autopistol":"RE-45 auto","mp_weapon_alternator_smg":"Alternator","mp_weapon_frag_grenade":"Frag Grenade","mp_weapon_g2":"G2","mp_weapon_lmg":"Spitfire","mp_weapon_smr":"Sidewinder SMR","mp_weapon_softball":"Softball","mp_weapon_thermite_grenade":"Firestar","pilot_emptyhanded":"Melee","mp_weapon_mastiff":"Mastiff","mp_weapon_mgl":"MGL","mp_weapon_rspn101_og":"R-101","mp_weapon_wingman":"Wingman","invalid":"invalid","mp_weapon_arc_launcher":"Thunderbolt","mp_weapon_dmr":"DMR","mp_weapon_grenade_electric_smoke":"Electric Smoke","mp_weapon_pulse_lmg":"Cold War","mp_weapon_satchel":"Satchel","mp_weapon_shotgun":"EVA-8 Auto","mp_weapon_shotgun_pistol":"Mozambique","mp_weapon_wingman_n":"Wingman Elite","mp_weapon_grenade_gravity":"Gravity Star","mp_weapon_grenade_sonar":"Pulse Blade","mp_weapon_rocket_launcher":"Archer","outOfBounds":"OutOfBounds","mind_crime":"Mind Crime","mp_weapon_esaw":"Devotion","fall":"Fall","mp_weapon_semipistol":"P2016","mp_weapon_grenade_emp":"Arc Grenade","mp_weapon_hemlok":"Hemlok","melee_pilot_emptyhanded":"Melee","phase_shift":"Phase Shift","damagedef_suicide":"Suicide","damagedef_titan_hotdrop":"Crushed by Titanfall","mp_titanweapon_arc_cannon":"Arc Cannon","mp_weapon_peacekraber":"Peacekraber","damagedef_crush":"Crushed","mp_titanweapon_brute4_quad_rocket":"Quad Rocket Launcher","mp_weapon_turretplasma":"Antititan Turret","mp_titanweapon_xo16_vanguard":"XO-16","mp_titanweapon_sticky_40mm":"40mm Cannon","mp_titanweapon_predator_cannon":"Predator Cannon","mp_titanweapon_leadwall":"Leadwall","mp_titanweapon_sniper":"Plasma Railgun","titan_execution":"Titan Execution","titan_explosion":"Titan Explosion","auto_titan_melee":"Autotitan Melee","mp_titanweapon_vortex_shield_ion":"Vortex Shield","mp_titanweapon_heat_shield":"Heat shield","bubble_shield":"Bubble Shield","mp_titancore_salvo_core":"Salvo Core","mp_titancore_flame_wave":"Flame Wave","mp_titanweapon_flightcore_rockets":"Flight Core","mp_titancore_laser_cannon":"Laser Cannon","mp_titancore_flame_wave_secondary":"Scorched Earth","mp_titanweapon_flame_wall":"Flame Wall","mp_titanweapon_arc_wave":"Arc Wave"}');E.kL.register(E.qi,E.u,E.De,Z.Z);var Y=(0,i.aZ)({name:"WeaponChart",props:{filters:Object,playerHighlighted:String},emits:["highlightPlayer"],components:{Doughnut:N.$I},mounted(){this.refreshColors++},data:()=>({store:S(),refreshColors:0}),computed:{colors(){this.refreshColors;const e={};if(this.$refs.container){const t=getComputedStyle(this.$refs.container);e.fg=t.getPropertyValue("--foreground"),e.bg=t.getPropertyValue("--bg-color"),e.orange=t.getPropertyValue("--orange"),e.cyan=t.getPropertyValue("--cyan"),e.yellow=t.getPropertyValue("--yellow"),e.green=t.getPropertyValue("--green"),e.purple=t.getPropertyValue("--purple"),e.red=t.getPropertyValue("--red"),e.pink=t.getPropertyValue("--pink"),e.currentLine=t.getPropertyValue("--current-line")}else e.fg="#ffffff";return e},chart(){const e=["cyan","green","orange","pink","purple","red","yellow"],t={datasets:[{label:"Weapons",labels:this.sortedWeaponList||[],borderColor:()=>this.colors.fg,backgroundColor:t=>this.colors[e[3*t.dataIndex%e.length]],data:[]}]};return this.sortedWeaponList?(t.datasets[0].data=this.sortedWeaponList.map((e=>this.weapons?this.weapons[e].value.kills:0)),t):t},chartOptions(){this.$props.playerHighlighted;const e={responsive:!0,maintainAspectRatio:!0,animation:{duration:500},layout:{autoPadding:!1},plugins:{datalabels:{formatter:(e,t)=>{const r=this.sortedWeaponList[t.dataIndex];return X[r]||r},backgroundColor:e=>e.dataset.backgroundColor(e),borderColor:this.colors.fg,borderRadius:25,borderWidth:2,color:this.colors.bg,display:e=>e.dataIndex===e.dataset.labels.length-1||"auto",padding:6},tooltip:{callbacks:{label:e=>{let t;return t=this.sortedWeaponList?this.sortedWeaponList[e.dataIndex]:e.dataset.labels[e.dataIndex],t+=" ("+this.weapons[t].value.kills+" kills)",t}}}}};return e},weapons(){const{weapon:e,...t}=this.filters||{},r=this.store.getWeaponList(t)?.value.data;return r||this.store.fetchWeapons(t).value.data},sortedWeaponList(){if(!this.weapons)return[];const e=Object.keys(this.weapons).filter((e=>this.weapons[e].value.kills>0));return e.sort(((e,t)=>Number(this.weapons[e].value.kills)<Number(this.weapons[t].value.kills)?-1:Number(this.weapons[e].value.kills)>Number(this.weapons[t].value.kills)?1:0)),e}}});const Q=(0,o.Z)(Y,[["render",K],["__scopeId","data-v-54a2c8e6"]]);var J=Q,ee=r(6368),te=(0,i.aZ)({name:"PlayerView",components:{VueMultiselect:ee.ZP,PlayerList:A,PlayerChart:F,WeaponChart:J},data(){return{model:{server:void 0,weapon:void 0},filters:{},store:S(),playerHighlighted:void 0,weaponLocale:X}},created(){let e;this.$route.query.server&&(e={name:this.$route.query.server?.toString()}),this.model={server:e,weapon:this.$route.query.weapon?.toString()}},computed:{servers(){const{server:e,player:t,...r}=this.filters,a=this.store.getServerList(r)?.value.data;return a||(0,L.SU)(this.store.fetchServers(r)).data},groupedServers(){const e=[];return Object.entries(this.servers).forEach((t=>{const r=(0,L.SU)(t[1]);e.find((e=>e.id===r.host+"sfdsdfsd"))||e.push({id:r.host+"sfdsdfsd",servers:[]}),e.find((e=>e.id===r.host+"sfdsdfsd"))?.servers.push({name:t[0],...r})})),e},weapons(){const{weapon:e,player:t,...r}=this.filters,a=this.store.getWeaponList(r)?.value.data;return a||this.store.fetchWeapons(r).value.data},players(){const{player:e,...t}=this.filters,r=this.store.getPlayerList(t)?.value.data;return r||this.store.fetchPlayers(t).value.data},sortedWeaponList(){if(!this.weapons)return[];const e=Object.keys(this.weapons);return e.sort()},sortedServerList(){if(!this.servers)return[];const e=Object.keys(this.servers);return e.sort()},sortedPlayerList(){if(!this.players)return[];const e=Object.entries(this.players).map((e=>({id:e[0],...e[1]._rawValue})));return e.sort(((e,t)=>e.username<t.username?-1:e.username>t.username?1:0))}},watch:{players(){const e=this.$route.query.player?.toString();e&&this.playerHighlighted?.id!==e&&this.highlight_player(e)},model:{handler(e){this.filters.server=e.server?.name,this.filters.weapon=e.weapon},deep:!0},filters:{handler(e){const{server:t,weapon:r,...a}=this.$route.query;le.push({query:{...e,...a}})},deep:!0},playerHighlighted(e,t){if(e?.id===t?.id)return;const{player:r,...a}=this.$route.query;le.push({query:{player:e?.id,...a}})},$route(e){if(this.playerHighlighted?.id!==e.query.player){const t=e.query.player?.toString();t&&this.highlight_player(t)}this.filters.weapon!==e.query.weapon&&(this.model.weapon=e.query.weapon),this.filters.server!==e.query.server&&(e.query.server?this.model.server={name:e.query.server}:this.model.server=void 0)}},methods:{highlight_player(e){const t=this.players[e];this.playerHighlighted=t?{id:e,...(0,L.SU)(t)}:void 0}}});const re=(0,o.Z)(te,[["render",w],["__scopeId","data-v-1aa0e63c"]]);var ae=re;const ie=[{path:"/",name:"home",component:ae}],se=(0,d.p7)({history:(0,d.PO)("/ToneAPI_webclient/"),routes:ie});var le=se;const ne=(0,b.WB)();(0,a.ri)(h).use(ne).use(le).mount("#app");S()}},t={};function r(a){var i=t[a];if(void 0!==i)return i.exports;var s=t[a]={exports:{}};return e[a](s,s.exports,r),s.exports}r.m=e,function(){var e=[];r.O=function(t,a,i,s){if(!a){var l=1/0;for(h=0;h<e.length;h++){a=e[h][0],i=e[h][1],s=e[h][2];for(var n=!0,o=0;o<a.length;o++)(!1&s||l>=s)&&Object.keys(r.O).every((function(e){return r.O[e](a[o])}))?a.splice(o--,1):(n=!1,s<l&&(l=s));if(n){e.splice(h--,1);var p=i();void 0!==p&&(t=p)}}return t}s=s||0;for(var h=e.length;h>0&&e[h-1][2]>s;h--)e[h]=e[h-1];e[h]=[a,i,s]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,a){var i,s,l=a[0],n=a[1],o=a[2],p=0;if(l.some((function(t){return 0!==e[t]}))){for(i in n)r.o(n,i)&&(r.m[i]=n[i]);if(o)var h=o(r)}for(t&&t(a);p<l.length;p++)s=l[p],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(h)},a=self["webpackChunktoneapi_webclient"]=self["webpackChunktoneapi_webclient"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(270)}));a=r.O(a)})();
//# sourceMappingURL=app.258534e5.js.map