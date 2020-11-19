(this["webpackJsonpcubes-game"]=this["webpackJsonpcubes-game"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(1),c=n.n(i),s=n(8),r=n.n(s),o=(n(20),n(21),n(2)),u=n(4),l=n(5),d=n(7),m=n(6),h=n(3),j="GAME_STATUS",b="POINT_INCREASE",p="TIME_UPDATE",f="GAME_RESET",O="GAME_PLAYER",v="MODAL_OPEN_STATUS",g="CHANGE_MAIN_CONTENT";function y(e){return{type:f,data:e}}n(28);var x=function(e){var t=e.children,n=void 0===t?"Button":t,i=e.onClick,c=void 0===i?function(){}:i,s=e.className,r=void 0===s?"btn btn-primary":s;return Object(a.jsx)("button",{type:"button",className:r,onClick:c,children:n})};n(29);function C(e){return e.isGamePaused?Object(a.jsx)(x,{onClick:e.onStartGame,children:"Unpause"}):e.isGameStarted?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(x,{onClick:e.onPause,children:"Pause"}),Object(a.jsx)(x,{onClick:e.onNewGame,children:"New game"})]}):e.isGameStarted?void 0:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(x,{onClick:e.onStartGame,children:"Start"}),e.isMainContent?Object(a.jsx)(x,{onClick:function(){return e.onMainContent(!1)},children:"Result"}):Object(a.jsx)(x,{onClick:function(){return e.onMainContent(!0)},children:"Game"})]})}var k=function(e){return Object(a.jsx)("div",{className:"control-buttons",children:C(e)})},N=(n(30),function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).interval=null,e}return Object(l.a)(n,[{key:"onStartGame",value:function(){var e=this;this.props.gameStatus({mainContent:!0,isGameStarted:!0,isGamePaused:!1});this.interval||(this.interval=setInterval((function(){return e.tick()}),1e3))}},{key:"onNewGame",value:function(){this.props.gameReset({points:0,timeLeft:60})}},{key:"onPause",value:function(){this.props.gameStatus({isGameStarted:!1,isGamePaused:!0}),this.timerStop()}},{key:"timerStop",value:function(){clearInterval(this.interval),this.interval=null}},{key:"tick",value:function(){this.props.timeLeft<=0?this.clear():this.props.timeUpdate({timeLeft:this.props.timeLeft-1})}},{key:"clear",value:function(){this.props.gameReset({isGameStarted:!1,isGamePaused:!1,timeLeft:60,isModalOpen:!0}),this.timerStop()}},{key:"onMainContent",value:function(e){this.props.changeMainContent({mainContent:e})}},{key:"timeUpdateOutput",value:function(){return this.props.timeLeft>59?"01:00":this.props.timeLeft<10?"00:0".concat(this.props.timeLeft):"00:".concat(this.props.timeLeft)}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)("h1",{children:"Cubes game"}),Object(a.jsxs)("div",{className:"header__game-controls",children:[Object(a.jsx)(k,{onStartGame:function(){return e.onStartGame()},onNewGame:function(){return e.onNewGame()},onPause:function(){return e.onPause()},onMainContent:function(t){return e.onMainContent(t)},isMainContent:this.props.mainContent,isGameStarted:this.props.isGameStarted,isGamePaused:this.props.isGamePaused}),Object(a.jsxs)("div",{className:"header__game-info info",children:[Object(a.jsxs)("div",{className:"info__points",children:[Object(a.jsx)("span",{children:"Points"}),Object(a.jsx)("div",{className:"info__output form-control",children:this.props.points})]}),Object(a.jsxs)("div",{className:"info__time",children:[Object(a.jsx)("span",{children:"Time left"}),Object(a.jsx)("div",{className:"info__output form-control",children:this.timeUpdateOutput()})]})]})]})]})}}]),n}(c.a.Component)),S={gameStatus:function(e){return{type:j,data:e}},gameReset:y,timeUpdate:function(e){return{type:p,data:e}},modalOpenStatus:function(e){return{type:v,data:e}},changeMainContent:function(e){return{type:g,data:e}}},M=Object(h.b)((function(e){return Object(o.a)({},e)}),S)(N),G=(n(31),function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).state={cubes:[]},e.playground=c.a.createRef(),e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.generateCubes();this.setState((function(t){return Object(o.a)(Object(o.a)({},t),{},{cubes:e})}))}},{key:"generateCubes",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6,t=[],n=0;n<e;n++){var a=this.getRgbColorStyle(),i=this.getReactKey(a);t.push({cubeKey:i,cube:this.getCube(a,i)})}return t}},{key:"getReactKey",value:function(e){var t=Object.values(e).reduce((function(e,t){return e+t}),0);return t+this.getRandom(t)}},{key:"getPlaygroundSizes",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:40;return{width:this.playground.current.offsetWidth-e,height:this.playground.current.offsetHeight-e}}},{key:"getCube",value:function(e,t){var n=this,i=e.r,c=e.g,s=e.b,r=this.getPlaygroundSizes(),o=r.width,u=r.height,l={left:this.getRandom(o),top:this.getRandom(u),background:"rgb(".concat(i,", ").concat(c,", ").concat(s,")")};return Object(a.jsx)("div",{className:"cube",style:l,onClick:function(){n.onDeleteCube(t),n.generateNewCubes(),n.score\u0421alculation()}},t)}},{key:"score\u0421alculation",value:function(){this.props.pointIncrease({points:this.props.points+1})}},{key:"onDeleteCube",value:function(e){this.setState((function(t){return Object(o.a)(Object(o.a)({},t),{},{cubes:t.cubes.filter((function(t){return t.cubeKey!==e}))})}))}},{key:"getRgbColorStyle",value:function(){return{r:this.getRandom(255),g:this.getRandom(255),b:this.getRandom(255)}}},{key:"getRandom",value:function(e){return Math.floor(Math.random()*e)}},{key:"getAmountNewCubes",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return Math.floor(Math.random()*t+e)}},{key:"generateNewCubes",value:function(){if(!(this.state.cubes.length>3)){var e=this.getAmountNewCubes(1,3),t=this.generateCubes(e);this.setState((function(e){return Object(o.a)(Object(o.a)({},e),{},{cubes:t.concat(e.cubes)})}))}}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"playground",ref:this.playground,children:this.props.isGameStarted&&this.state.cubes.map((function(e){return e.cube}))})}}]),n}(c.a.Component)),P={pointIncrease:function(e){return{type:b,data:e}}},R=Object(h.b)((function(e){return{isGameStarted:e.isGameStarted,points:e.points}}),P)(G),_=function(e){return JSON.parse(localStorage.getItem(e))},E=(n(32),function(){return Object(a.jsxs)("div",{className:"results",children:[Object(a.jsx)("h2",{children:"results"}),Object(a.jsxs)("table",{className:"table table-bordered",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"#"}),Object(a.jsx)("th",{children:"Nickname"}),Object(a.jsx)("th",{children:"Points"})]})}),Object(a.jsx)("tbody",{children:function(){var e=_("players")||[];return e.sort((function(e,t){return t.points-e.points})),e.map((function(e,t){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{scope:"row",children:t+1}),Object(a.jsx)("td",{children:e.nickname}),Object(a.jsx)("td",{children:e.points})]},"".concat(e.nickname).concat(t))}))}()})]})]})}),w=(n(33),Object(h.b)((function(e){return{mainContent:e.mainContent}}))((function(e){return Object(a.jsx)("div",{className:"main",children:e.mainContent?Object(a.jsx)(R,{}):Object(a.jsx)(E,{})})}))),L=(n(34),function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).onChangeNickname=function(t){var n=t.target.value;e.setState((function(e){return Object(o.a)(Object(o.a)({},e),{},{nickname:n})}))},e.onSavePlayer=function(){e.props.gamePlayer({player:e.state.nickname});var t=_("players")||[],n={nickname:e.state.nickname,points:e.props.points};t.push(n),function(e,t){localStorage.setItem(e,JSON.stringify(t))}("players",t),e.onModalClose()},e.onModalClose=function(){e.props.gameReset({points:0,isModalOpen:!1})},e.state={nickname:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.setState({nickname:this.props.player})}},{key:"render",value:function(){var e=this;return Object(a.jsx)("div",{className:"modal",id:"exampleModalCentered",role:"dialog",children:Object(a.jsx)("div",{className:"modal-dialog modal-dialog-centered",role:"document",children:Object(a.jsxs)("div",{className:"modal-content",children:[Object(a.jsxs)("div",{className:"modal-header",children:[Object(a.jsxs)("h5",{className:"modal-title",id:"exampleModalCenteredLabel",children:["You got ",this.props.points," points."]}),Object(a.jsx)(x,{className:"close",onClick:function(){return e.onModalClose()},children:Object(a.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(a.jsx)("div",{className:"modal-body",children:Object(a.jsx)("form",{children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"formGroupExampleInput",children:"Enter your nickname"}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"formGroupExampleInput",placeholder:"Your nickname",onChange:this.onChangeNickname,value:this.state.nickname})]})})}),Object(a.jsxs)("div",{className:"modal-footer",children:[Object(a.jsx)(x,{className:"btn btn-secondary",onClick:function(){return e.onModalClose()},children:"Close"}),Object(a.jsx)(x,{onClick:function(){return e.onSavePlayer()},children:"Save changes"})]})]})})})}}]),n}(c.a.Component)),A={gameReset:y,gamePlayer:function(e){return{type:O,data:e}}},I=Object(h.b)((function(e){return{points:e.points,player:e.player}}),A)(L);var T=Object(h.b)((function(e){return{isModalOpen:e.isModalOpen}}),null)((function(e){return Object(a.jsxs)("div",{className:"App container",children:[e.isModalOpen&&Object(a.jsx)(I,{}),Object(a.jsx)(M,{}),Object(a.jsx)(w,{})]})})),U=n(9),D={isGameStarted:!1,isGamePaused:!1,points:0,timeLeft:60,player:"",isModalOpen:!1,mainContent:!0},J=Object(U.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(o.a)(Object(o.a)({},e),{},{timeLeft:t.data.timeLeft});case b:return Object(o.a)(Object(o.a)({},e),{},{points:t.data.points});case j:case f:return Object(o.a)(Object(o.a)({},e),t.data);case O:return Object(o.a)(Object(o.a)({},e),{},{player:t.data.player});case v:return Object(o.a)(Object(o.a)({},e),{},{isModalOpen:t.data.isModalOpen});case g:return Object(o.a)(Object(o.a)({},e),{},{mainContent:t.data.mainContent});default:return e}})),K=Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(h.a,{store:J,children:Object(a.jsx)(T,{})})});r.a.render(K,document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.1387b7aa.chunk.js.map