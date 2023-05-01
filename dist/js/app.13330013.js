(function(){"use strict";var e={3224:function(e,t,a){var r=a(3862),s=a(3396);const i=(0,s.uE)('<div class="navbar-element">TONE API</div><div class="navbar-element github-link"><a href="https://github.com/Legonzaur/Tone_WebClient">Github</a></div><div class="navbar-element github-link"><a href="https://github.com/Legonzaur/ToneAPI_servermod">Northstar Server Mod</a></div><div class="spacer"></div>',4);function l(e,t,a,r,l,n){const o=(0,s.up)("router-link"),p=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("header",null,[(0,s._)("nav",null,[i,(0,s.Wm)(o,{to:"/",class:"navbar-element"},{default:(0,s.w5)((()=>[(0,s.Uk)("Players")])),_:1})])]),(0,s.Wm)(p)],64)}a(7658);var n=a(1020),o=a(5130),p=a(4870);function d(e){return Object.fromEntries(Object.entries(e).filter((e=>void 0!==e[1]&&null!==e[1])))}function h(e,t){try{return e=d(e),t=d(t),o.deepStrictEqual(e,t),!0}catch{return!1}}const u=(0,n.Q_)("kill",{state:()=>({servers:[],players:[],weapons:[],maps:[],gamemodes:[],hosts:{}}),getters:{getPlayerList:e=>t=>e.players.find((e=>h(e.value.filter,t))),getWeaponList:e=>t=>e.weapons.find((e=>h(e.value.filter,t))),getServerList:e=>t=>e.servers.find((e=>h(e.value.filter,t)))},actions:{fetchPlayers(e){e=d(e);let t=this.players.find((t=>h(t.value.filter,e)));return void 0===t&&(t=(0,p.iH)({filter:e,data:{}}),this.players.push(t)),fetch("https://tone.sleepycat.date/v2/client/players?"+new URLSearchParams(e)).then((async e=>{t.value.data=await e.json()})),t},fetchWeapons(e){e=d(e);let t=this.weapons.find((t=>h(t.value.filter,e)));return t||(t=(0,p.iH)({filter:e,data:{}}),this.weapons.push(t)),fetch("https://tone.sleepycat.date/v2/client/weapons?"+new URLSearchParams(e)).then((async e=>{t.value.data=await e.json()})),t},fetchServers(e){e=d(e);let t=this.servers.find((t=>h(t.value.filter,e)));return t||(t=(0,p.iH)({filter:e,data:{}}),this.servers.push(t)),fetch("https://tone.sleepycat.date/v2/client/servers?"+new URLSearchParams(e)).then((async e=>{t.value.data=await e.json()})),t}}});var c=(0,s.aZ)({setup(e,t){const a=u();a.fetchPlayers({}),a.fetchServers({}),a.fetchWeapons({})}}),g=a(89);const m=(0,g.Z)(c,[["render",l]]);var _=m,y=a(2483);const f={id:"filters"},v={class:"multiselect-wrapper"},w=["disabled"],b={class:"multiselect-wrapper"},k=["disabled"],P={class:"multiselect-wrapper"},L=["disabled"],C={id:"playerView"};function S(e,t,a,r,i,l){const n=(0,s.up)("VueMultiselect"),o=(0,s.up)("PlayerList"),p=(0,s.up)("PlayerChart"),d=(0,s.up)("WeaponChart");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",f,[(0,s._)("span",v,[(0,s.Wm)(n,{selectLabel:"",deselectLabel:"remove",placeholder:"Select server",modelValue:e.model.server,"onUpdate:modelValue":t[0]||(t[0]=t=>e.model.server=t),options:e.groupedServers,"group-values":"servers",group_label:"id","group-select":!1,"allow-empty":!0,multiple:!1,"custom-label":e=>e.name,"track-by":"name",label:"name"},null,8,["modelValue","options","custom-label"]),(0,s._)("button",{onClick:t[1]||(t[1]=t=>e.model.server=void 0),disabled:!e.model.server},"X",8,w)]),(0,s._)("span",b,[(0,s.Wm)(n,{selectLabel:"",deselectLabel:"remove",placeholder:"Select weapon",modelValue:e.model.weapon,"onUpdate:modelValue":t[2]||(t[2]=t=>e.model.weapon=t),"custom-label":t=>e.weaponLocale[t]||t,options:e.sortedWeaponList,"allow-empty":!0},null,8,["modelValue","custom-label","options"]),(0,s._)("button",{onClick:t[3]||(t[3]=t=>e.model.weapon=void 0),disabled:!e.model.weapon},"X",8,k)]),(0,s._)("span",P,[(0,s.Wm)(n,{"options-limit":20,selectLabel:"",deselectLabel:"remove",placeholder:"Search player",modelValue:e.playerHighlighted,"onUpdate:modelValue":t[4]||(t[4]=t=>e.playerHighlighted=t),options:e.sortedPlayerList,"allow-empty":!0,"custom-label":e=>e?.username},null,8,["modelValue","options","custom-label"]),(0,s._)("button",{onClick:t[5]||(t[5]=t=>e.playerHighlighted=void 0),disabled:!e.playerHighlighted},"X",8,L)])]),(0,s._)("div",C,[(0,s.Wm)(o,{filters:e.filters,onHighlightPlayer:e.highlight_player,playerHighlighted:e.playerHighlighted?.id},null,8,["filters","onHighlightPlayer","playerHighlighted"]),(0,s.Wm)(p,{filters:e.filters,onHighlightPlayer:e.highlight_player,playerHighlighted:e.playerHighlighted?.id},null,8,["filters","onHighlightPlayer","playerHighlighted"]),(0,s.Wm)(d,{filters:{player:e.playerHighlighted?.id,...e.filters},playerHighlighted:e.playerHighlighted?.id},null,8,["filters","playerHighlighted"])])],64)}var H=a(7139);const x=e=>((0,s.dD)("data-v-36f90a94"),e=e(),(0,s.Cn)(),e),W={class:"playerHeaders"},D=x((()=>(0,s._)("span",null,null,-1))),O=["onClick"];function V(e,t,a,r,i,l){return(0,s.wg)(),(0,s.iD)("div",{class:"playerTable",onKeydown:t[6]||(t[6]=(...t)=>e.selectNextPlayer&&e.selectNextPlayer(...t)),tabindex:"0"},[(0,s._)("div",W,[D,(0,s._)("span",{onClick:t[0]||(t[0]=t=>e.updateSort("username")),class:(0,H.C_)("username"==e.sortingData.argument?"selected":"")},"Username",2),(0,s._)("span",{onClick:t[1]||(t[1]=t=>e.updateSort("kills")),class:(0,H.C_)("kills"==e.sortingData.argument?"selected":"")},"K",2),(0,s._)("span",{onClick:t[2]||(t[2]=t=>e.updateSort("deaths")),class:(0,H.C_)("deaths"==e.sortingData.argument?"selected":"")},"D",2),(0,s._)("span",{onClick:t[3]||(t[3]=t=>e.updateSort("k/d")),class:(0,H.C_)("k/d"==e.sortingData.argument?"selected":"")},"K/D",2),(0,s._)("span",{onClick:t[4]||(t[4]=t=>e.updateSort("max_distance")),class:(0,H.C_)("max_distance"==e.sortingData.argument?"selected":"")},"max distance",2),(0,s._)("span",{onClick:t[5]||(t[5]=t=>e.updateSort("avg_distance")),class:(0,H.C_)("avg_distance"==e.sortingData.argument?"selected":"")},"average distance",2)]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.playerList,((t,a)=>((0,s.wg)(),(0,s.iD)("div",{class:(0,H.C_)("playerRow "+(t.id===e.$props.playerHighlighted?"selected":"")),key:t.id,onClick:a=>e.$emit("highlightPlayer",t.id),ref_for:!0,ref:"player:"+t.id},[(0,s._)("div",null,[(0,s._)("span",null,(0,H.zw)(a+1),1)]),(0,s._)("div",null,[(0,s._)("span",null,(0,H.zw)(t.username),1)]),(0,s._)("div",null,[(0,s._)("span",null,(0,H.zw)(t.kills),1)]),(0,s._)("div",null,[(0,s._)("span",null,(0,H.zw)(t.deaths),1)]),(0,s._)("div",null,[(0,s._)("span",null,(0,H.zw)(Math.round(t.kills/Math.max(1,t.deaths)*100)/100),1)]),(0,s._)("div",null,[(0,s._)("span",null,(0,H.zw)(t.max_distance),1)]),(0,s._)("div",null,[(0,s._)("span",null,(0,H.zw)(Math.round(100*(t.total_distance/t.kills||0))/100),1)])],10,O)))),128))],32)}var $=(0,s.aZ)({props:{filters:{type:Object,default:()=>({})},playerHighlighted:String},emits:["highlightPlayer"],data(){return{sortingData:{direction:-1,argument:"kills"},store:u()}},computed:{players(){const{player:e,...t}=this.filters,a=this.store.getPlayerList(t)?.value.data;return a||this.store.fetchPlayers(t).value.data},playerList(){if(!this.players)return[];let e=Object.entries(this.players).map((e=>({id:e[0],...e[1]})));if("username"===this.sortingData.argument){const t=new Intl.Collator("en",{numeric:!0,sensitivity:"base"});e.sort(((e,a)=>t.compare(e.username,a.username)))}else if("k/d"===this.sortingData.argument)e.sort(((e,t)=>e.kills/Math.max(1,e.deaths)-t.kills/Math.max(1,t.deaths)));else if("avg_distance"===this.sortingData.argument)e.sort(((e,t)=>(e.total_distance/e.kills||0)-(t.total_distance/t.kills||0)));else{const t=this.sortingData.argument;e.sort(((e,a)=>e[t]-a[t]))}return this.sortingData.direction<0&&e.reverse(),e=e.slice(0,500),e}},watch:{playerHighlighted(e){console.log("newVal");const t=this.$refs["player:"+e];setTimeout((function(){t&&t[0]&&t[0].scrollIntoView({behavior:"smooth",block:"center"})}),0)}},updated(){const e=this.$refs["player:"+this.$props.playerHighlighted];e&&e[0]&&e[0].scrollIntoView({behavior:"smooth",block:"center"})},methods:{selectNextPlayer(e){const t={Home:-1/0,End:1/0,PageDown:100,PageUp:-100,ArrowUp:-1,ArrowDown:1,ArrowRight:10,ArrowLeft:-10};if(!this.$props.playerHighlighted)return;if(!Object.keys(t).includes(e.key))return;e.preventDefault();const a=this.playerList.findIndex((e=>e.id===this.$props.playerHighlighted));let r=a+t[e.key];r>=this.playerList.length&&(r=this.playerList.length-1),r<0&&(r=0),this.$emit("highlightPlayer",this.playerList[r].id)},updateSort(e){this.sortingData.argument===e?this.sortingData.direction*=-1:this.sortingData.direction=-1,this.sortingData.argument=e}}});const I=(0,g.Z)($,[["render",V],["__scopeId","data-v-36f90a94"]]);var M=I;const R={class:"playerChart",ref:"container"};function j(e,t,a,r,i,l){const n=(0,s.up)("Scatter");return(0,s.wg)(),(0,s.iD)("div",R,[(0,s.Wm)(n,{data:e.chart,options:e.chartOptions},null,8,["data","options"])],512)}var A=a(3254),q=a(9152),E=a(1131),T=a(5866);A.kL.register(A.f$,A.od,A.jn,A.u,A.De,q.Z,E.Z);var Z=(0,s.aZ)({name:"PlayerChart",props:{filters:Object,playerHighlighted:String},data:()=>({store:u(),refreshColors:0,playerData:[]}),emits:["highlightPlayer"],components:{Scatter:T.bp},mounted(){this.refreshColors++},computed:{playerList(){const e=this.store.getPlayerList(this.filters||{})?.value.data;if(!e)return Object.entries(this.store.fetchPlayers(this.filters||{}).value.data).map((e=>({id:e[0],...e[1]})));const t=Object.entries(e).map((e=>({id:e[0],...e[1]})));return t.sort(((e,t)=>t.kills-e.kills)),t.slice(0,200)},colors(){this.refreshColors;const e={};if(this.$refs.container){const t=getComputedStyle(this.$refs.container);e.fg=t.getPropertyValue("--foreground"),e.bg=t.getPropertyValue("--bg-color"),e.orange=t.getPropertyValue("--orange"),e.cyan=t.getPropertyValue("--cyan"),e.currentLine=t.getPropertyValue("--current-line")}else e.fg="#ffffff";return e},chart(){const e=this.playerList.findIndex((e=>e.id===this.$props.playerHighlighted)),t=this.colors.cyan,a=new Array(this.playerList.length).fill(t);a[e]=this.colors.orange;const r=a,s=new Array(this.playerList.length).fill(1);s[e]=20;const i=new Array(this.playerList.length).fill(4);i[e]=30;const l=new Array(this.playerList.length).fill("circle");return l[e]="crossRot",{datasets:[{label:"Players",labels:this.playerList.map((e=>e.id))||[],borderColor:a,backgroundColor:r,pointRadius:s,pointStyle:l,hoverRadius:i,data:this.playerList.map((e=>({y:e.kills,x:e.deaths})))}]}},chartStaticOptions(){return{responsive:!0,maintainAspectRatio:!1,animation:{duration:500},layout:{autoPadding:!1},scales:{y:{title:{text:"Kills",display:!0,color:this.colors.fg},ticks:{color:this.colors.fg}},x:{title:{text:"Deaths",display:!0,color:this.colors.fg},ticks:{color:this.colors.fg}}},onClick:(e,t)=>{this.$emit("highlightPlayer",t.length>0?this.playerList[t[0].index].id:void 0)},onHover:(e,t)=>{e.native.target&&(e.native.target.style.cursor=t[0]?"pointer":"default")}}},chartStaticPlugins(){let e=0,t=0;if(this.playerList){const a=Math.max(...this.playerList.map((e=>e.deaths))),r=Math.max(...this.playerList.map((e=>e.kills)));r>a?(e=a,t=a/r*r):(t=r,e=r/a*a)}return{tooltip:{callbacks:{label:e=>{let t;return t=this.playerList?this.playerList[e.dataIndex].username:e.dataset.labels[e.dataIndex],t+=" ("+e.parsed.y+" kills "+e.parsed.x+" deaths)",t}}},annotation:{annotations:{line:{type:"line",yMin:0,xMin:0,yMax:t,xMax:e,borderWidth:2,borderColor:this.colors.orange,borderDash:[1,5]}}},legend:{display:!1}}},chartOptions(){return this.$props.playerHighlighted,{...this.chartStaticOptions,plugins:{...this.chartStaticPlugins,datalabels:{formatter:(e,t)=>this.playerList[t.dataIndex].username,backgroundColor:e=>this.$props.playerHighlighted&&this.$props.playerHighlighted===this.playerList[e.dataIndex].id?this.colors.orange:null,borderColor:this.colors.fg,borderWidth:e=>this.$props.playerHighlighted&&this.$props.playerHighlighted===this.playerList[e.dataIndex].id?1:0,borderRadius:5,display:e=>this.$props.playerHighlighted&&this.$props.playerHighlighted===this.playerList[e.dataIndex].id?"true":"auto",align:-45,anchor:"end",clamp:!0,color:e=>this.$props.playerHighlighted&&this.$props.playerHighlighted===this.playerList[e.dataIndex].id?this.colors.bg:this.colors.fg}}}}}});const z=(0,g.Z)(Z,[["render",j],["__scopeId","data-v-1e99590c"]]);var N=z;const U={class:"weaponChart",ref:"container"};function F(e,t,a,r,i,l){const n=(0,s.up)("Doughnut");return(0,s.wg)(),(0,s.iD)("div",U,[(0,s.Wm)(n,{data:e.chart,options:e.chartOptions},null,8,["data","options"])],512)}var G=JSON.parse('{"rodeo_battery_removal":"Rodeo Battery Removal","human_execution":"Human Execution","melee_pilot_kunai":"Kunai Melee","execution":"Execution","mp_weapon_car":"CAR","mp_weapon_defender":"Charge Rifle","mp_weapon_doubletake":"Double Take","mp_weapon_epg":"EPG-1","mp_weapon_hemlok_smg":"Volt","mp_weapon_lstar":"L-STAR","mp_weapon_r97":"R-97","mp_weapon_rspn101":"R-201","mp_weapon_smart_pistol":"Smart Pistol","mp_weapon_sniper":"Kraber","mp_weapon_vinson":"Flatline","mp_weapon_autopistol":"RE-45 auto","mp_weapon_alternator_smg":"Alternator","mp_weapon_frag_grenade":"Frag Grenade","mp_weapon_g2":"G2","mp_weapon_lmg":"Spitfire","mp_weapon_smr":"Sidewinder SMR","mp_weapon_softball":"Softball","mp_weapon_thermite_grenade":"Firestar","pilot_emptyhanded":"Melee","mp_weapon_mastiff":"Mastiff","mp_weapon_mgl":"MGL","mp_weapon_rspn101_og":"R-101","mp_weapon_wingman":"Wingman","invalid":"invalid","mp_weapon_arc_launcher":"Thunderbolt","mp_weapon_dmr":"DMR","mp_weapon_grenade_electric_smoke":"Electric Smoke","mp_weapon_pulse_lmg":"Cold War","mp_weapon_satchel":"Satchel","mp_weapon_shotgun":"EVA-8 Auto","mp_weapon_shotgun_pistol":"Mozambique","mp_weapon_wingman_n":"Wingman Elite","mp_weapon_grenade_gravity":"Gravity Star","mp_weapon_grenade_sonar":"Pulse Blade","mp_weapon_rocket_launcher":"Archer","outOfBounds":"OutOfBounds","mind_crime":"Mind Crime","mp_weapon_esaw":"Devotion","fall":"Fall","mp_weapon_semipistol":"P2016","mp_weapon_grenade_emp":"Arc Grenade","mp_weapon_hemlok":"Hemlok","melee_pilot_emptyhanded":"Melee","phase_shift":"Phase Shift","damagedef_suicide":"Suicide","damagedef_titan_hotdrop":"Crushed by Titanfall","mp_titanweapon_arc_cannon":"Arc Cannon","mp_weapon_peacekraber":"Peacekraber","damagedef_crush":"Crushed","mp_titanweapon_brute4_quad_rocket":"Quad Rocket Launcher","mp_weapon_turretplasma":"Antititan Turret","mp_titanweapon_xo16_vanguard":"XO-16","mp_titanweapon_sticky_40mm":"40mm Cannon","mp_titanweapon_predator_cannon":"Predator Cannon","mp_titanweapon_leadwall":"Leadwall","mp_titanweapon_sniper":"Plasma Railgun","titan_execution":"Titan Execution","titan_explosion":"Titan Explosion","auto_titan_melee":"Autotitan Melee","mp_titanweapon_vortex_shield_ion":"Vortex Shield","mp_titanweapon_heat_shield":"Heat shield","bubble_shield":"Bubble Shield","mp_titancore_salvo_core":"Salvo Core","mp_titancore_flame_wave":"Flame Wave","mp_titanweapon_flightcore_rockets":"Flight Core","mp_titancore_laser_cannon":"Laser Cannon","mp_titancore_flame_wave_secondary":"Scorched Earth","mp_titanweapon_flame_wall":"Flame Wall","mp_titanweapon_arc_wave":"Arc Wave"}');A.kL.register(A.qi,A.u,A.De,E.Z);var K=(0,s.aZ)({name:"PlayerChart",props:{filters:Object,playerHighlighted:String},emits:["highlightPlayer"],components:{Doughnut:T.$I},mounted(){this.refreshColors++},data:()=>({store:u(),refreshColors:0}),computed:{colors(){this.refreshColors;const e={};if(this.$refs.container){const t=getComputedStyle(this.$refs.container);e.fg=t.getPropertyValue("--foreground"),e.bg=t.getPropertyValue("--bg-color"),e.orange=t.getPropertyValue("--orange"),e.cyan=t.getPropertyValue("--cyan"),e.yellow=t.getPropertyValue("--yellow"),e.green=t.getPropertyValue("--green"),e.purple=t.getPropertyValue("--purple"),e.red=t.getPropertyValue("--red"),e.pink=t.getPropertyValue("--pink"),e.currentLine=t.getPropertyValue("--current-line")}else e.fg="#ffffff";return e},chart(){const e=["cyan","green","orange","pink","purple","red","yellow"],t={datasets:[{label:"Weapons",labels:this.sortedWeaponList||[],borderColor:()=>this.colors.fg,backgroundColor:t=>this.colors[e[3*t.dataIndex%e.length]],data:[]}]};return this.sortedWeaponList?(t.datasets[0].data=this.sortedWeaponList.map((e=>this.weapons?this.weapons[e].kills:0)),t):t},chartOptions(){this.$props.playerHighlighted;const e={responsive:!0,maintainAspectRatio:!0,animation:{duration:500},layout:{autoPadding:!1},plugins:{datalabels:{formatter:(e,t)=>{const a=this.sortedWeaponList[t.dataIndex];return G[a]||a},backgroundColor:e=>e.dataset.backgroundColor(e),borderColor:this.colors.fg,borderRadius:25,borderWidth:2,color:this.colors.bg,display:e=>e.dataIndex===e.dataset.labels.length-1||"auto",padding:6},tooltip:{callbacks:{label:e=>{let t;return t=this.sortedWeaponList?this.sortedWeaponList[e.dataIndex]:e.dataset.labels[e.dataIndex],t+=" ("+this.weapons[t].kills+" kills)",t}}}}};return e},weapons(){const{weapon:e,...t}=this.filters||{},a=this.store.getWeaponList(t)?.value.data;return a||this.store.fetchWeapons(t).value.data},sortedWeaponList(){if(!this.weapons)return[];const e=Object.keys(this.weapons);return e.sort(((e,t)=>Number(this.weapons[e].kills)<Number(this.weapons[t].kills)?-1:Number(this.weapons[e].kills)>Number(this.weapons[t].kills)?1:0)),e}}});const B=(0,g.Z)(K,[["render",F],["__scopeId","data-v-53c5074f"]]);var X=B,Y=a(6368),Q=(0,s.aZ)({name:"PlayerView",components:{VueMultiselect:Y.ZP,PlayerList:M,PlayerChart:N,WeaponChart:X},data(){return{model:{server:void 0,weapon:void 0},filters:{},store:u(),playerHighlighted:void 0,weaponLocale:G}},created(){let e;this.$route.query.server&&(e={name:this.$route.query.server?.toString()}),this.model={server:e,weapon:this.$route.query.weapon?.toString()}},computed:{servers(){const{server:e,player:t,...a}=this.filters,r=this.store.getServerList(a)?.value.data;return r||this.store.fetchServers(a).value.data},groupedServers(){const e=[];return Object.entries(this.servers).forEach((t=>{e.find((e=>e.id===t[1].host+"sfdsdfsd"))||e.push({id:t[1].host+"sfdsdfsd",servers:[]}),e.find((e=>e.id===t[1].host+"sfdsdfsd"))?.servers.push({name:t[0],...t[1]})})),e},weapons(){const{weapon:e,player:t,...a}=this.filters,r=this.store.getWeaponList(a)?.value.data;return r||this.store.fetchWeapons(a).value.data},players(){const{player:e,...t}=this.filters,a=this.store.getPlayerList(t)?.value.data;return a||this.store.fetchPlayers(t).value.data},sortedWeaponList(){if(!this.weapons)return[];const e=Object.keys(this.weapons);return e.sort()},sortedServerList(){if(!this.servers)return[];const e=Object.keys(this.servers);return e.sort()},sortedPlayerList(){if(!this.players)return[];const e=Object.entries(this.players).map((e=>({id:e[0],...e[1]})));return e.sort(((e,t)=>e.username<t.username?-1:e.username>t.username?1:0))}},watch:{players(){const e=this.$route.query.player?.toString();e&&this.playerHighlighted?.id!==e&&this.highlight_player(e)},model:{handler(e){this.filters.server=e.server?.name,this.filters.weapon=e.weapon},deep:!0},filters:{handler(e){const{server:t,weapon:a,...r}=this.$route.query;re.push({query:{...e,...r}}).then((e=>{console.log(e)}))},deep:!0},playerHighlighted(e,t){if(e?.id===t?.id)return;const{player:a,...r}=this.$route.query;re.push({query:{player:e?.id,...r}}).then((e=>{console.log(e)}))},$route(e){if(this.playerHighlighted?.id!==e.query.player){const t=e.query.player?.toString();t&&this.highlight_player(t)}this.filters.weapon!==e.query.weapon&&(this.model.weapon=e.query.weapon),this.filters.server!==e.query.server&&(e.query.server?this.model.server={name:e.query.server}:this.model.server=void 0)}},methods:{highlight_player(e){const t=this.players[e];this.playerHighlighted=t?{id:e,...t}:void 0}}});const J=(0,g.Z)(Q,[["render",S],["__scopeId","data-v-403860c3"]]);var ee=J;const te=[{path:"/",name:"home",component:ee}],ae=(0,y.p7)({history:(0,y.PO)("/ToneAPI_webclient/"),routes:te});var re=ae;const se=(0,n.WB)();(0,r.ri)(_).use(se).use(re).mount("#app")}},t={};function a(r){var s=t[r];if(void 0!==s)return s.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,a),i.exports}a.m=e,function(){var e=[];a.O=function(t,r,s,i){if(!r){var l=1/0;for(d=0;d<e.length;d++){r=e[d][0],s=e[d][1],i=e[d][2];for(var n=!0,o=0;o<r.length;o++)(!1&i||l>=i)&&Object.keys(a.O).every((function(e){return a.O[e](r[o])}))?r.splice(o--,1):(n=!1,i<l&&(l=i));if(n){e.splice(d--,1);var p=s();void 0!==p&&(t=p)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[r,s,i]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var s,i,l=r[0],n=r[1],o=r[2],p=0;if(l.some((function(t){return 0!==e[t]}))){for(s in n)a.o(n,s)&&(a.m[s]=n[s]);if(o)var d=o(a)}for(t&&t(r);p<l.length;p++)i=l[p],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(d)},r=self["webpackChunktoneapi_webclient"]=self["webpackChunktoneapi_webclient"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(3224)}));r=a.O(r)})();
//# sourceMappingURL=app.13330013.js.map