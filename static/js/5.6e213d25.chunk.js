(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[5],{111:function(e,t,n){var a={"./boom.mp3":112,"./clap.mp3":113,"./hihat.mp3":114,"./kick.mp3":115,"./openhat.mp3":116,"./ride.mp3":117,"./snare.mp3":118,"./tink.mp3":119,"./tom.mp3":120};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id=111},112:function(e,t,n){e.exports=n.p+"static/media/boom.a94060a5.mp3"},113:function(e,t,n){e.exports=n.p+"static/media/clap.1d4356c2.mp3"},114:function(e,t,n){e.exports=n.p+"static/media/hihat.762ffd4c.mp3"},115:function(e,t,n){e.exports=n.p+"static/media/kick.3a495231.mp3"},116:function(e,t,n){e.exports=n.p+"static/media/openhat.1304bd0f.mp3"},117:function(e,t,n){e.exports=n.p+"static/media/ride.3aa8471f.mp3"},118:function(e,t,n){e.exports=n.p+"static/media/snare.b1f4e084.mp3"},119:function(e,t,n){e.exports=n.p+"static/media/tink.dbd89267.mp3"},120:function(e,t,n){e.exports=n.p+"static/media/tom.db3796bc.mp3"},146:function(e,t,n){"use strict";n.r(t);var a=n(96),r=n(64),c=n(76),o=n(49),i=n(141),l=n(42),s=n(103),m=n.n(s),u=n(27),p=n(6),d=n(105),f=n.n(d),b=n(17),h=n(0),E=n.n(h),g=n(93),v=n(148),j=n(19),O=n(81),y=n(82),k=n(90),w=n(87),x=n(91),D=n(137),S=n(149),P=n(138),N=n(94),C=function(e){function t(){var e,n;Object(O.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(k.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(r)))).state={error:null,info:null},n}return Object(x.a)(t,e),Object(y.a)(t,[{key:"componentDidCatch",value:function(e,t){var n=this.props.onError;if("function"===typeof n)try{n.call(this,e,t?t.componentStack:"")}catch(a){}this.setState({error:e,info:t})}},{key:"render",value:function(){var e=this.state.error,t=this.props.children;return null!==e?E.a.createElement(D.a,{component:"main"},E.a.createElement(g.a,null,E.a.createElement("title",null,[this.props.intl.formatMessage({id:"label.error",defaultMessage:"Something went wrong"}),""].join(" | "))),E.a.createElement(H,null,E.a.createElement(P.a,{id:"label.error",defaultMessage:"Something went wrong"}),E.a.createElement(S.a,{underline:"none",color:"textPrimary",href:"/"},E.a.createElement(P.a,{id:"label.go.home",defaultMessage:"Go Home"})))):t||null}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0,error:e}}}]),t}(h.Component);C=Object(N.c)(C);var F=n(147),H=function(e){var t=e.children,n=e.height,a=void 0===n?"100%":n,r=e.width,c=void 0===r?"100%":r;return E.a.createElement(F.a,{display:"flex",flexDirection:"column",alignContent:"center",alignItems:"center",justifyContent:"center",justifyItems:"center",height:a,width:c,minHeight:"30vh",overflow:"hidden"},t)},M=n(139),I=function(e){return e.locale},L=function(e){var t=e.container,n=e.children,r=e.titles,c=void 0===r?[]:r,o=Object(j.d)(I).locale,i=o.code,l=o.dir;return E.a.createElement(D.a,Object.assign({component:"main"},t),E.a.createElement(g.a,null,E.a.createElement("html",{lang:i}),E.a.createElement("title",null,[].concat(Object(a.a)(c),[""]).filter(Boolean).join(" | ")),E.a.createElement("body",{dir:l}),E.a.createElement("meta",{property:"og:type",content:"website"})),E.a.createElement(F.a,{mt:{sm:8}},E.a.createElement(F.a,{display:"none",displayPrint:"flex",flexDirection:"column",alignItems:"center"},E.a.createElement(M.a,{weight:700},null===c||void 0===c?void 0:c[0])),n))};L.defaultProps={container:{},customDisplayPrint:!1,loading:!1,title:[]};var J=n(77),R=n(85),U=Object(J.a)((function(e){return{root:{backgroundRepeat:"no-repeat",backgroundSize:"cover",width:"100vw",height:"100vh",overflow:"hidden"}}})),A=function(e){var t=e.children,n=U();return E.a.createElement(F.a,{overflow:"hidden",className:n.root},E.a.createElement(D.a,null,E.a.createElement(F.a,null,E.a.createElement(R.a,{to:"/"},"Home"),E.a.createElement(R.a,{to:"/javascript30"},"Javascript30")),t,E.a.createElement(F.a,null,"footer")))},K=n(140),T=function(){var e=Object(K.a)().formatMessage({id:"hello.message",defaultMessage:"Hello"});return E.a.createElement(L,null,E.a.createElement(R.a,{to:"/javascript30"},"Javascript 30 ",e))},z=n(89),B=n(25),G=Object(J.a)({clock:{width:"30rem",height:"30rem",border:"20px solid white",borderRadius:"50%",margin:"50px auto",position:"relative",padding:"2rem",boxShadow:"0 0 0 4px rgba(0,0,0,0.1),inset 0 0 0 3px #EFEFEF,inset 0 0 10px black,0 0 10px rgba(0,0,0,0.2)"},clockFace:{position:"relative",width:"100%",height:"100%",transform:"translateY(-3px)"},hand:{width:"50%",height:"6px",background:"black",position:"absolute",top:"50%",transformOrigin:"100%",transform:"rotate(90deg)",transition:"all 0.05s",transitionTimingFunction:"cubic-bezier(0.1, 2.7, 0.58, 1)"},secondHand:function(e){var t=e.now;return{transform:"rotate(".concat(t.getSeconds()/60*360+90,"deg)")}},minutesHand:function(e){var t=e.now;return{transform:"rotate(".concat(t.getMinutes()/60*360+t.getSeconds()/60*6+90,"deg)")}},hoursHand:function(e){var t=e.now;return{transform:"rotate(".concat(t.getHours()/12*360+t.getMinutes()/60*6+90,"deg)")}}}),_=function(){var e=Object(h.useState)(new Date),t=Object(z.a)(e,2),n=t[0],a=t[1],r=G({now:n});return Object(h.useEffect)((function(){setInterval((function(){a(new Date)}),1e3)}),[]),E.a.createElement(F.a,{className:r.clock},E.a.createElement(F.a,{className:r.clockFace},E.a.createElement(F.a,{className:Object(B.a)(r.hand,r.secondHand)}),E.a.createElement(F.a,{className:Object(B.a)(r.hand,r.minutesHand)}),E.a.createElement(F.a,{className:Object(B.a)(r.hand,r.hoursHand)})))},V=Object(J.a)((function(e){return{sound:{color:"#ffc600"},key:{display:"flex",flexDirection:"column",border:".4rem solid black",borderRadius:".5rem",margin:e.spacing(1),padding:e.spacing(1),transition:"all .07s ease",textAlign:"center",color:"white",background:"rgba(0,0,0,0.4)",textShadow:"0 0 .5rem black",width:"100%"}}})),Y=n(110),q=n.n(Y),Q=function(e){var t=e.sound,a=t.name,r=t.key,c=function(e){var t=Object(h.useState)(new Audio(e)),n=Object(z.a)(t,1)[0],a=Object(h.useState)(!1),r=Object(z.a)(a,2),c=r[0],o=r[1];return Object(h.useEffect)((function(){c?n.play():n.pause()}),[n,c]),Object(h.useEffect)((function(){return n.addEventListener("ended",(function(){return o(!1)})),function(){n.removeEventListener("ended",(function(){return o(!1)}))}}),[n]),[c,function(){n.currentTime=0,o(!c)}]}(function(e){return n(111)("./".concat(e,".mp3"))}(a)),o=Object(z.a)(c,2),i=o[0],l=o[1],s=V({playing:i});return E.a.createElement("div",{onClick:l,className:s.key},E.a.createElement("span",null,r.toUpperCase()),E.a.createElement("span",{className:s.sound},a.toUpperCase()),E.a.createElement(q.a,{handleKeys:[r],onKeyEvent:l}))},W=[{key:"a",name:"clap"},{key:"s",name:"hihat"},{key:"d",name:"kick"},{key:"f",name:"openhat"},{key:"g",name:"boom"},{key:"h",name:"ride"},{key:"j",name:"snare"},{key:"k",name:"tom"},{key:"l",name:"tink"}],X=function(){return E.a.createElement(F.a,{display:"flex",justifyContent:"space-around",alignItems:"center",height:"80vh"},W.map((function(e){return E.a.createElement(Q,{key:e.key,sound:e})})))},Z=n(100),$=n.n(Z),ee=function(e){var t=e.items;return E.a.createElement(E.a.Fragment,null,t.map((function(e){var t=e.name;return E.a.createElement(R.a,{key:t,to:"".concat("/javascript30","/").concat($()(t))},t)})))},te=n(21),ne=[{component:X,name:"Drum Kit"},{component:_,name:"Clock"}],ae=function(e){var t=e.match;return E.a.createElement(te.d,null,E.a.createElement(te.b,{path:t.path,component:function(e){return E.a.createElement(ee,Object.assign({items:ne},e))},exact:!0}),ne.map((function(e){var n=e.component,a=e.name;return E.a.createElement(te.b,{key:a,path:"".concat(t.path,"/").concat($()(a.toLowerCase())),component:n})})),E.a.createElement(te.a,{to:"/notfound"}))},re=function(e){var t=Object(K.a)().formatMessage({id:"label.notfound",defaultMessage:"Not Found"});return E.a.createElement(L,{titles:[t]},E.a.createElement(H,null,E.a.createElement(M.a,{gutterBottom:!0},t)))},ce=function(e){return E.a.createElement(A,null,E.a.createElement(C,null,E.a.createElement(te.d,null,E.a.createElement(te.b,{path:"/",component:T,exact:!0}),E.a.createElement(te.b,{path:"/notfound",component:re}),E.a.createElement(te.b,{path:"/javascript30",component:ae}),E.a.createElement(te.a,{to:"/notfound"}))))},oe=n(20),ie=n(48);function le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var se=function(e){var t=function(e){return{direction:e,typography:{useNextVariants:!0}}}(e);return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?le(Object(n),!0).forEach((function(t){Object(oe.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):le(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},Object(ie.a)(t),{overrides:{}})},me=Object(p.b)({plugins:[].concat(Object(a.a)(Object(o.a)().plugins),[f()()])}),ue=Object(r.a)({productionPrefix:"FREGO"});t.default=function(e){var t=Object(j.d)(I),a=t.locale,r=t.messages,o=a.code,s=a.dir;Object(h.useEffect)((function(){Promise.all([n.e(4),n.e(6)]).then(n.bind(null,142))}),[]);var p=m()(r);return E.a.createElement(v.a,{defaultLocale:b.a.code,key:o,locale:o,messages:p},E.a.createElement(g.b,null,E.a.createElement(i.a,{theme:se(s)},E.a.createElement(c.b,{jss:me,generateClassName:ue},E.a.createElement(l.a,{history:u.a},E.a.createElement(ce,null))))))}}}]);