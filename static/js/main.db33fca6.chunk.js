(this.webpackJsonpautumn=this.webpackJsonpautumn||[]).push([[0],{82:function(e,n,t){e.exports=t(96)},95:function(e,n,t){},96:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(11),i=t.n(c),u=t(20),l=t(45),o=t(43),s=t(62),m=t(63),p=t(73),d=t(72),f=t(14),h=t(136),b=t(132),v=t(133),g=t(131),j=t(64),E=t.n(j),O=t(65),x=t.n(O),y=t(135),w=function(e){return r.a.createElement(y.a,{fullWidth:e.item.fullWidth,label:e.item.label,margin:"dense",multiline:e.item.multiline,required:e.item.required,rows:e.item.rows,value:e.item.value,type:e.item.type,onChange:e.item.onChange})},k=function(e){var n=Object(a.useState)(""),t=Object(f.a)(n,2),c=t[0],i=t[1],u={fullWidth:!1,label:"\u30ad\u30fc\u30ef\u30fc\u30c9\u5165\u529b",multiline:!1,required:!1,rows:1,value:c,type:"text",onChange:Object(a.useCallback)((function(e){i(e.currentTarget.value)}),[i])};return r.a.createElement("div",null,r.a.createElement(w,{item:u}),r.a.createElement(g.a,null,r.a.createElement(E.a,null)),r.a.createElement(g.a,null,r.a.createElement(x.a,null)))},C=Object(h.a)({root:{flexGrow:1},menuBar:{backgroundColor:"#fff",color:"#444",marginBottom:"150px"},toolBar:{margin:"0 auto",maxWidth:1024,width:"100%",height:"80px"},iconButtons:{margin:"0 0 0 auto"}}),S=function(){var e=C(),n=Object(a.useState)(!1),t=Object(f.a)(n,2),c=t[0],i=t[1],u=Object(a.useCallback)((function(e){("keydown"!==e.type||"Tab"!==e.key&&"Shift"!==e.key)&&i(!c)}),[i,c]);return r.a.createElement("div",{className:e.root},r.a.createElement(b.a,{position:"fixed",className:e.menuBar},r.a.createElement(v.a,{className:e.toolBar},r.a.createElement("h2",null,"My Youtube"),r.a.createElement("div",{className:e.iconButtons},r.a.createElement(k,{handleDrawerToggle:u})))))},N=t(10),A=t(49),I=t.n(A),T=t(66),R="SEND_CHANNEL",L="SEND_CHANNEL_DATA",q="INCREMENT",B="DECREMENT",D="COUNT_RESET",V=t(6),G=t(7);function U(){var e=Object(V.a)(["\n    margin: 0;\n    padding-top: 5px;\n    margin-right: 20px;\n"]);return U=function(){return e},e}function _(){var e=Object(V.a)(["\n    margin: 0 0 5px;\n    font-size: 20px;\n"]);return _=function(){return e},e}var z=G.a.h3(_()),J=G.a.p(U()),M=t(47);function K(){var e=Object(V.a)(["\n    width: 950px;\n    height: 534px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n"]);return K=function(){return e},e}function Y(){var e=Object(V.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0,0,0,0.4);\n    z-index: 999999;\n"]);return Y=function(){return e},e}function Z(){var e=Object(V.a)(["\n    width: 100%;\n"]);return Z=function(){return e},e}function F(){var e=Object(V.a)(["\n    width: 32%;\n"]);return F=function(){return e},e}function Q(){var e=Object(V.a)(["\n    display: flex;\n    justify-content: space-between;\n"]);return Q=function(){return e},e}function W(){var e=Object(V.a)(["\n    padding: 20px 0 50px;\n"]);return W=function(){return e},e}function H(){var e=Object(V.a)(["\n    border-radius: 50%;\n    overflow: hidden;\n    width: 120px;\n    margin-right: 20px;\n"]);return H=function(){return e},e}function X(){var e=Object(V.a)(["\n    display: flex;\n"]);return X=function(){return e},e}function P(){var e=Object(V.a)(["\n    color: black;\n    text-decoration: none;\n    display: flex;\n    align-items: center;\n"]);return P=function(){return e},e}function $(){var e=Object(V.a)(["\n    border-bottom: 1px solid black;\n"]);return $=function(){return e},e}function ee(){var e=Object(V.a)(["\n    max-width: 1024px;\n    margin: 0 auto;\n    padding-top: 20px;\n"]);return ee=function(){return e},e}var ne=G.a.div(ee()),te=G.a.div($()),ae=Object(G.a)(M.a)(P()),re=G.a.div(X()),ce=G.a.img(H()),ie=G.a.div(W()),ue=G.a.div(Q()),le=G.a.div(F()),oe=G.a.img(Z()),se=G.a.div(Y()),me=G.a.iframe(K()),pe=function(e){var n=Object(u.d)(),t=e.channel,a=function(e){var t;n((t=e.id,console.log(t),{type:R,payload:t}));var a,r={title:e.snippet.title,image:e.snippet.thumbnails.high.url,startTime:e.snippet.publishedAt,count:e.statistics.viewCount,registration:e.statistics.subscriberCount,description:e.snippet.description};n((a=r,console.log(a),{type:L,payload:a}))};return console.log(e),r.a.createElement(te,null,t.map((function(e,n){return r.a.createElement(ae,{to:"/my-youtube/channel",key:n,onClick:function(){return a(e)}},r.a.createElement("div",null,r.a.createElement(ce,{src:e.snippet.thumbnails.medium.url,alt:""})),r.a.createElement("div",null,r.a.createElement(z,null,e.snippet.title),r.a.createElement(re,null,r.a.createElement(J,null,"\u30c1\u30e3\u30f3\u30cd\u30eb\u767b\u9332\u8005\u6570\uff1a",e.statistics.subscriberCount,"\u4eba"),r.a.createElement(J,null,"\u6295\u7a3f\u52d5\u753b\u6570\uff1a",e.statistics.videoCount),r.a.createElement(J,null,"\u30c1\u30e3\u30f3\u30cd\u30eb\u958b\u59cb\u65e5\uff1a",e.snippet.publishedAt.slice(0,4),"/",e.snippet.publishedAt.slice(5,7),"/",e.snippet.publishedAt.slice(8,10)))))})))},de=function(e){console.log(e);var n=e.videoId,t="https://www.youtube.com/embed/".concat(n);return r.a.createElement(se,{onClick:function(){return e.VideoImageClick("cancel")}},r.a.createElement(me,{src:t}))},fe=function(e){console.log(e.video);var n=e.video,t=Object(a.useState)(!1),c=Object(f.a)(t,2),i=c[0],u=c[1],l=Object(a.useState)(""),o=Object(f.a)(l,2),s=o[0],m=o[1],p=function(e){m(e),u(!i)};return r.a.createElement(ie,null,r.a.createElement(ue,null,n.map((function(e,n){return r.a.createElement(le,{key:n,onClick:function(){return p(e.id.videoId)}},r.a.createElement(oe,{src:e.snippet.thumbnails.high.url}),r.a.createElement("div",null,e.snippet.title))}))),i?r.a.createElement(de,{anchor:i,VideoImageClick:p,videoId:s}):r.a.createElement("div",null))},he=function(){var e=Object(a.useState)([]),n=Object(f.a)(e,2),t=n[0],c=n[1],i=Object(a.useState)([]),l=Object(f.a)(i,2),o=l[0],s=l[1],m=Object(a.useState)([]),p=Object(f.a)(m,2),d=p[0],h=p[1],b=Object(a.useState)([]),v=Object(f.a)(b,2),g=v[0],j=v[1],E=Object(a.useState)([]),O=Object(f.a)(E,2),x=O[0],y=O[1],w=Object(a.useState)([]),k=Object(f.a)(w,2),C=k[0],S=k[1],N=[{id:"UC1uZYgOfncA-Gnk0GsLVK5A",genre:"music",name:"Unison Square Garden"},{id:"UCpGpA7mSYmNJjLiJxKso5QA",genre:"comedy",name:"\u971c\u964d\u308a\u660e\u661f"},{id:"UCDhjThxt99rkGcjcEreyOQg",genre:"study",name:"\u674e\u59c9\u59b9"},{id:"UC-bOAxx-YOsviSmqh8COR0w",genre:"study",name:"\u30c8\u30e9\u30cf\u30c3\u30af"},{id:"UCti6dG0zSAetLGGYcgNML4Q",genre:"study",name:"\u3057\u307e\u3076\u30fc"},{id:"UC3-1iYGHfR43q_b974vUNYg",genre:"study",name:"\u30d5\u30a7\u30eb\u30df\u7814\u7a76\u6240"},{id:"UCFkncXKwLRtA2MFdXOv34yQ",genre:"game",name:"Nephrite"}];Object(a.useEffect)((function(){for(var e=[],n=[],t=0;t<3;t++){var a=Math.floor(Math.random()*N.length);e[t]=N[a],N.splice(a,1),n=e.map((function(e){return e.id}))}var r="https://www.googleapis.com/youtube/v3/channels?key=AIzaSyA5pSnsK73ZJycRlduNL_bxjNqhud95Vag&part=snippet,statistics&id=".concat(n[0],"&id=").concat(n[1],"&id=").concat(n[2]),i=["https://www.googleapis.com/youtube/v3/search?key=AIzaSyA5pSnsK73ZJycRlduNL_bxjNqhud95Vag&part=id,snippet&channelId=".concat(n[0],"&maxResults=3&order=date"),"https://www.googleapis.com/youtube/v3/search?key=AIzaSyA5pSnsK73ZJycRlduNL_bxjNqhud95Vag&part=id,snippet&channelId=".concat(n[1],"&maxResults=3&order=date"),"https://www.googleapis.com/youtube/v3/search?key=AIzaSyA5pSnsK73ZJycRlduNL_bxjNqhud95Vag&part=id,snippet&channelId=".concat(n[2],"&maxResults=3&order=date")],u=function(e,n,t){i.map((function(a){fetch(a).then((function(e){return e.json()})).then((function(a){void 0!==e&&void 0!==n&&void 0!==t&&(a.items[0].snippet.channelTitle===e[0].snippet.title?j(a.items):a.items[0].snippet.channelTitle===n[0].snippet.title?y(a.items):a.items[0].snippet.channelTitle===t[0].snippet.title&&S(a.items))}))}))};(function(){var e=Object(T.a)(I.a.mark((function e(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(r).then((function(e){return e.json()})).then((function(e){var n=[e.items[0]],t=[e.items[1]],a=[e.items[2]];c(n),s(t),h(a),u(n,t,a)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);Object(u.e)((function(e){return e.counter})),Object(u.d)();return r.a.createElement(ne,null,r.a.createElement(pe,{channel:t}),r.a.createElement(fe,{video:g}),r.a.createElement(pe,{channel:o}),r.a.createElement(fe,{video:x}),r.a.createElement(pe,{channel:d}),r.a.createElement(fe,{video:C}))};function be(){var e=Object(V.a)(["\n    margin: 5px 0;\n    padding: 10px 0;\n"]);return be=function(){return e},e}function ve(){var e=Object(V.a)(["\n    padding: 0;\n    margin-bottom: 0;\n"]);return ve=function(){return e},e}function ge(){var e=Object(V.a)(["\n    list-style: none;\n    padding: 0 0 0 20px;\n    margin: 0;\n"]);return ge=function(){return e},e}function je(){var e=Object(V.a)(["\n    width: 90%;\n    margin: 0 auto;\n"]);return je=function(){return e},e}function Ee(){var e=Object(V.a)(["\n    margin: 20px 0;\n"]);return Ee=function(){return e},e}function Oe(){var e=Object(V.a)(["\n    margin: 5px 0;\n    padding-left: 20px;\n    overflow: hidden;\n    white-space: pre-wrap;\n"]);return Oe=function(){return e},e}function xe(){var e=Object(V.a)(["\n    width: 54%;\n"]);return xe=function(){return e},e}function ye(){var e=Object(V.a)(["\n    width: 45%;\n"]);return ye=function(){return e},e}function we(){var e=Object(V.a)(["\n    height: 68vh;\n    overflow: scroll;\n"]);return we=function(){return e},e}function ke(){var e=Object(V.a)(["\n    width: 600px;\n    height: auto;\n    padding: 10px;\n    white-space: pre-wrap;\n"]);return ke=function(){return e},e}function Ce(){var e=Object(V.a)(["\n    width: 120px;\n    border-radius: 50%;\n"]);return Ce=function(){return e},e}function Se(){var e=Object(V.a)(["\n    display: flex;\n    align-items: center;\n    border-bottom: 1px solid black;\n    padding-bottom: 10px;\n"]);return Se=function(){return e},e}function Ne(){var e=Object(V.a)(["\n    width: 20%;\n    border-left: 1px solid rgba(0,0,0,0.2);\n    position: fixed;\n    top: 80px;\n    right: 0;\n    height: 100vh;\n"]);return Ne=function(){return e},e}function Ae(){var e=Object(V.a)(["\n    width: 90%;\n    max-width: 922px;\n    padding-top: 20px;\n"]);return Ae=function(){return e},e}function Ie(){var e=Object(V.a)(["\n    margin: 5px 0;\n    padding-left: 20px;\n"]);return Ie=function(){return e},e}function Te(){var e=Object(V.a)(["\n    margin: 5px 0;\n    padding-left: 20px;\n"]);return Te=function(){return e},e}function Re(){var e=Object(V.a)(["\n    display: flex;\n    max-width: 1024px;\n    margin: 0 auto;\n"]);return Re=function(){return e},e}var Le=G.a.div(Re()),qe=G.a.h3(Te()),Be=G.a.p(Ie()),De=G.a.div(Ae()),Ve=G.a.div(Ne()),Ge=G.a.div(Se()),Ue=G.a.img(Ce()),_e=G.a.div(ke()),ze=G.a.div(we()),Je=G.a.img(ye()),Me=G.a.div(xe()),Ke=G.a.p(Oe()),Ye=Object(G.a)(Le)(Ee()),Ze=G.a.div(je()),Fe=G.a.ul(ge()),Qe=G.a.h4(ve()),We=G.a.li(be()),He=t(134),Xe=t(71),Pe=Object(h.a)((function(e){return{ButtonStyle:{color:"black",fontSize:"16px",padding:"5px 0 5px 20px"}}})),$e=function(e){var n=Pe(),t=e.channelItem,a=r.a.useState(null),c=Object(f.a)(a,2),i=c[0],u=c[1];console.log(t);var l=function(){u(null)};return r.a.createElement(Ge,null,r.a.createElement("div",null,r.a.createElement(Ue,{src:t.image,alt:"image"})),r.a.createElement("div",null,r.a.createElement(qe,null,t.title),r.a.createElement(Le,null,r.a.createElement(Be,null,"\u767b\u9332\u8005\u6570\uff1a",t.registration),r.a.createElement(Be,null,"\u6295\u7a3f\u52d5\u753b\u6570\uff1a",t.count),r.a.createElement(Be,null,"\u30c1\u30e3\u30f3\u30cd\u30eb\u958b\u59cb\u65e5\uff1a",t.startTime.slice(0,4),"/",t.startTime.slice(5,7),"/",t.startTime.slice(8,10))),r.a.createElement(He.a,{className:n.ButtonStyle,"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){u(e.currentTarget)}},"\u8a73\u7d30\u3092\u307f\u308b"),r.a.createElement(Xe.a,{id:"simple-menu",anchorEl:i,keepMounted:!0,open:Boolean(i),onClose:l},r.a.createElement(_e,{onClick:l},t.description))))},en=function(e){console.log(e);var n=e.videoItem,t=Object(a.useState)(!1),c=Object(f.a)(t,2),i=c[0],u=c[1],l=Object(a.useState)(""),o=Object(f.a)(l,2),s=o[0],m=o[1],p=function(e){m(e),u(!i)};return r.a.createElement(ze,null,n.map((function(e,n){return r.a.createElement(Ye,{key:n},r.a.createElement(Je,{src:e.snippet.thumbnails.high.url,alt:"\u52d5\u753b\u753b\u50cf",onClick:function(){return p(e.id.videoId)}}),r.a.createElement(Me,null,r.a.createElement(qe,null,e.snippet.title),r.a.createElement(Be,null,"\u52d5\u753b\u6295\u7a3f\u65e5\uff1a",e.snippet.publishTime.slice(0,4),"/",e.snippet.publishTime.slice(5,7),"/",e.snippet.publishTime.slice(8,10)),r.a.createElement(Be,null,"\u52d5\u753b\u8a73\u7d30\u25bd"),r.a.createElement(Ke,null,e.snippet.description)))})),i?r.a.createElement(de,{anchor:i,VideoImageClick:p,videoId:s}):r.a.createElement("div",null))},nn=function(e){e.videoItem,e.setChannelVideoList;var n=new Date,t=n.getFullYear(),a=n.getMonth(),c=n.getDay();console.log("".concat(t,"-").concat(a,"-").concat(c));var i=[{name:"\u6295\u7a3f\u304c\u65b0\u3057\u3044\u9806",func:function(){console.log("new")}},{name:"\u6295\u7a3f\u304c\u53e4\u3044\u9806",func:function(){console.log("old")}},{name:"\u518d\u751f\u6642\u9593\u304c\u9577\u3044\u9806",func:function(){console.log("long")}},{name:"\u518d\u751f\u6642\u9593\u304c\u77ed\u3044\u9806",func:function(){console.log("short")}},{name:"\u518d\u751f\u56de\u6570\u304c\u591a\u3044\u9806",func:function(){console.log("many")}},{name:"\u518d\u751f\u56de\u6570\u304c\u5c11\u306a\u3044\u9806",func:function(){console.log("little")}}];return r.a.createElement(Ze,null,r.a.createElement(Qe,null,"\u52d5\u753b\u3092\u4e26\u3079\u66ff\u3048\u308b\u25bd"),r.a.createElement(Fe,null,i.map((function(e,n){return r.a.createElement(We,{key:n,onClick:function(){return e.func()}},e.name)}))))},tn=function(){Object(u.d)();var e=Object(u.e)((function(e){return e.channel.channel})),n=Object(u.e)((function(e){return e.channel.channelData})),t=Object(a.useState)([]),c=Object(f.a)(t,2),i=c[0],l=c[1],o="https://www.googleapis.com/youtube/v3/search?key=AIzaSyA5pSnsK73ZJycRlduNL_bxjNqhud95Vag&part=id,snippet&channelId=".concat(e,"&maxResults=5&order=date");return console.log(e),console.log(n),Object(a.useEffect)((function(){var e=[];fetch(o).then((function(e){return e.json()})).then((function(n){n.items.map((function(n){e.push(n)})),l(e)}))}),[]),console.log(i),r.a.createElement(Le,null,r.a.createElement(De,null,r.a.createElement($e,{channelItem:n}),r.a.createElement(en,{videoItem:i})),r.a.createElement(Ve,null,r.a.createElement(nn,{videoItem:i,setChannelVideoList:l})))},an=function(){return r.a.createElement(N.c,null,r.a.createElement(N.a,{exact:!0,path:"/my-youtube",component:he}),r.a.createElement(N.a,{exact:!0,path:"/my-youtube/channel",component:tn}))},rn=(t(95),function(e){Object(p.a)(t,e);var n=Object(d.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return a.createElement(a.Fragment,null,a.createElement(S,null),a.createElement("main",{className:"main"},a.createElement(an,null)))}}]),t}(a.Component)),cn=t(33),un=t(60),ln={value:0},on=t(39),sn={channel:"",channelData:{title:"",image:"",startTime:"",count:0,registration:0,description:""}},mn=t(70),pn=o.a(),dn=Object(cn.c)({router:Object(l.b)(pn),counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ln,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case q:return{value:e.value+1};case B:return{value:0===e.value?0:e.value-1};case D:return{value:0};default:return e}},channel:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:sn,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case R:return Object(on.a)(Object(on.a)({},e),{},{channel:n.payload});case L:return Object(on.a)(Object(on.a)({},e),{},{channelData:n.payload});default:return e}}}),fn=Object(cn.a)(Object(un.a)(pn),mn.a),hn=Object(cn.d)(dn,fn),bn=o.a();i.a.render(r.a.createElement(u.a,{store:hn},r.a.createElement(l.a,{history:bn},r.a.createElement(rn,null))),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.db33fca6.chunk.js.map