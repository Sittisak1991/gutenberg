(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){chunkIds=deferred[i][0],fn=deferred[i][1],priority=deferred[i][2];for(var fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({0:"drop-zone-stories-index-story",21:"combobox-control-stories-index-story",100:"angle-picker-control-stories-index-story",137:"form-toggle-stories-index-story",199:"alignment-matrix-control-stories-index-story",377:"components-block-patterns-list-stories-index-story",417:"custom-gradient-picker-stories-index-story",492:"spacer-stories-index-story",532:"slot-fill-stories-index-story",614:"palette-edit-stories-index-story",642:"textarea-control-stories-index-story",664:"components-dimensions-tool-stories-aspect-ratio-tool-story",675:"draggable-stories-index-story",810:"card-stories-index-story",842:"dimension-control-stories-index-story",971:"tokens-typography-mdx",1051:"components-text-decoration-control-stories-index-story",1305:"color-palette-stories-index-story",1469:"icon-stories-index-story-js",1557:"radio-group-stories-index-story",1812:"date-time-stories-date-story",1859:"sandbox-stories-index-story",1861:"components-inserter-stories-index-story",1864:"search-control-stories-index-story",1874:"truncate-stories-index-story",1960:"grid-stories-index-story",2016:"external-link-stories-index-story",2042:"date-time-stories-date-time-story",2065:"navigator-stories-index-story",2285:"gradient-picker-stories-index-story",2363:"color-indicator-stories-index-story",2471:"number-control-stories-index-story",2505:"menu-item-stories-index-story",2553:"range-control-stories-index-story",2591:"animate-stories-index-story",2732:"menu-items-choice-stories-index-story",2735:"tooltip-stories-index-story",2737:"h-stack-stories-index-story",2801:"progress-bar-stories-index-story",3006:"shortcut-stories-index-story",3017:"spinner-stories-index-story",3061:"tokens-elevation-mdx",3261:"docs-introduction-mdx",3299:"components-global-styles-stories-index-story",3363:"components-font-family-stories-index-story",3414:"components-dimensions-tool-stories-scale-tool-story",3510:"docs-components-contributing-mdx",3673:"tokens-color-mdx",3709:"resizable-box-stories-index-story",3932:"responsive-wrapper-stories-index-story",3955:"elevation-stories-index-story",3957:"form-file-upload-stories-index-story",4002:"components-dimensions-tool-stories-width-height-tool-story",4053:"flex-stories-index-story",4328:"duotone-picker-stories-duotone-swatch-story",4356:"toggle-control-stories-index-story",4460:"heading-stories-index-story",4470:"navigable-container-stories-tabbable-container-story",4774:"components-height-control-stories-index-story",4822:"guide-stories-index-story",4917:"icon-stories-index-story-tsx",4989:"tip-stories-index-story",5086:"components-resolution-tool-stories-index-story",5208:"notice-stories-index-story",5209:"divider-stories-index-story",5217:"keyboard-shortcuts-stories-index-story",5257:"confirm-dialog-stories-index-story",5363:"scrollable-stories-index-story",5572:"components-alignment-control-stories-aliginment-toolbar-story",5615:"dropdown-menu-stories-index-story",5649:"modal-stories-index-story",5756:"select-control-stories-index-story",5801:"box-control-stories-index-story",5811:"composite-stories-index-story",5830:"tab-panel-stories-index-story",5902:"components-block-draggable-stories-index-story",5932:"navigable-container-stories-navigable-menu-story",6117:"components-line-height-control-stories-index-story",6124:"panel-stories-index-story",6207:"base-control-stories-index-story",6222:"components-text-alignment-control-stories-index-story",6255:"icon-stories-index-story",6261:"theme-stories-index-story",6349:"menu-stories-index-story",6365:"placeholder-stories-index-story",6389:"snackbar-stories-index-story",6471:"tree-grid-stories-index-story",6482:"input-control-stories-index-story",6483:"v-stack-stories-index-story",6496:"custom-select-control-stories-index-story",6577:"text-stories-index-story",6808:"button-stories-index-story",6846:"border-control-stories-index-story",6887:"toolbar-stories-index-story",6918:"duotone-picker-stories-duotone-picker-story",6939:"radio-control-stories-index-story",7109:"components-dataform-stories-index-story",7118:"navigation-stories-index-story",7183:"tree-select-stories-index-story",7244:"components-block-mover-stories-index-story",7262:"unit-control-stories-index-story",7503:"checkbox-control-stories-index-story",7535:"date-time-stories-time-story",7584:"components-alignment-control-stories-index-story",7586:"border-box-control-stories-index-story",7671:"item-group-stories-index-story",7748:"tabs-stories-index-story",7769:"form-token-field-stories-index-story",7906:"toggle-group-control-stories-index-story",7975:"z-stack-stories-index-story",8037:"text-control-stories-index-story",8097:"components-text-transform-control-stories-index-story",8251:"scroll-lock-stories-index-story",8295:"view-stories-index-story",8429:"components-dataviews-stories-index-story",8577:"foundations-design-language-elevation-mdx",8653:"popover-stories-index-story",8712:"visually-hidden-stories-index-story",8749:"focal-point-picker-stories-index-story",8803:"snackbar-stories-list-story",8843:"composite-legacy-stories-index-story",8947:"custom-select-control-v2-stories-index-story",8956:"components-url-popover-stories-index-story",9035:"surface-stories-index-story",9074:"button-group-stories-index-story",9152:"docs-components-readme-mdx",9242:"foundations-design-language-radius-mdx",9315:"query-controls-stories-index-story",9323:"menu-group-stories-index-story",9324:"color-picker-stories-index-story",9366:"font-size-picker-stories-index-story",9369:"components-dimensions-tool-stories-index-story",9371:"playground-index-story",9383:"dropdown-stories-index-story",9582:"tokens-radius-mdx",9662:"text-highlight-stories-index-story",9788:"disabled-stories-index-story",9826:"circular-option-picker-stories-index-story",9974:"tools-panel-stories-index-story"}[chunkId]||chunkId)+"."+{0:"92d1af2b",21:"274e16a1",97:"4df33c25",100:"d06b6bee",137:"5176991a",174:"bfbae923",199:"ad5736e8",225:"ef12a6b4",286:"bf856fef",377:"86e62ac7",417:"03abde25",492:"0e4375d4",504:"21abd94b",532:"a921dce0",614:"4144c532",642:"0554c281",664:"1d3a39e0",675:"c80f02b7",759:"73ea7d61",801:"037e738a",810:"087b894e",842:"06f9b767",971:"58296f73",979:"b85a811e",991:"407c5b91",1031:"c72b85ee",1051:"2d0c66d0",1062:"856159b5",1100:"b44d9553",1197:"c90416df",1217:"7f0f8f96",1294:"0b00ebb1",1305:"4416d4ba",1361:"1dc4e07a",1469:"9e77eda8",1483:"13379a02",1497:"8dc77301",1554:"e8c085e3",1557:"e4f1dcaa",1648:"37026bdc",1812:"acc15662",1859:"137a9cfe",1861:"8c151113",1864:"d51e3100",1874:"5db72d66",1952:"efa6a88c",1960:"72e2c58a",1961:"bc94ffc1",1989:"5a7d9a28",2016:"7e6d5e6a",2020:"93aa64db",2042:"259a99fc",2062:"98d83fa2",2065:"6bc06e83",2118:"d6e741b3",2214:"a40705e2",2285:"1f7d1ca6",2332:"d71f2898",2363:"ada2d56d",2450:"1a8838a8",2471:"19b7aa5a",2505:"8aeb1a75",2553:"f2624f3f",2591:"90b0b2b3",2599:"6dcccefb",2616:"5129612d",2640:"72f20c78",2672:"7fe09f6b",2732:"7ffa887e",2735:"dcf69532",2737:"f9cf5e65",2801:"a2bfc524",2886:"dd02b9c1",2889:"8f3e988f",3003:"14c283a7",3006:"99cd4ecb",3017:"e4aae143",3061:"05b93efd",3104:"756e4993",3149:"ca51bb0b",3245:"fa721b27",3261:"499105e6",3299:"68de70e7",3363:"c6f66c11",3389:"5f87ed56",3414:"6f23ed67",3484:"62a13000",3510:"c2f2205a",3673:"ce809e21",3709:"aa16757a",3718:"78240c36",3817:"f4023052",3932:"710e3226",3944:"8aeca65b",3955:"ea272d60",3957:"92467095",4002:"65b9e81c",4021:"d08d3856",4053:"c597f43d",4071:"1946fb35",4214:"d57085a6",4280:"e6b43eb2",4328:"359c621c",4356:"9f05625a",4359:"98a2ee15",4393:"a3648b94",4460:"392c676e",4470:"6db6502f",4540:"3414fd2c",4553:"7154387d",4614:"f3552f8a",4703:"4b82343d",4772:"cc797d80",4774:"6936cbe9",4822:"6cecef7f",4917:"d5ad5fd2",4989:"59be6499",4998:"bc80766a",5028:"835e6f91",5086:"bceba18f",5208:"740798d7",5209:"a2daa23b",5217:"3c2f6136",5229:"0469b550",5257:"34e9a15a",5363:"ebbf3fb3",5496:"73b72463",5572:"7809d38c",5615:"aa83eb05",5647:"383ed846",5649:"5eb0d8af",5756:"2c2461b8",5801:"e73a02a8",5811:"ad8ef07c",5830:"782fc46b",5863:"6cf901f8",5902:"ca563b8c",5929:"045f1426",5932:"e745aa47",6025:"7362a8c9",6117:"9b87752c",6124:"d85a8b5f",6207:"5bcf376c",6222:"c2a77016",6255:"4c544079",6261:"4f40149c",6297:"b3a57c39",6329:"bd3a222b",6349:"4d2850ab",6365:"de7607d4",6389:"abdd4cb5",6413:"393d5878",6422:"7c392961",6430:"52da050b",6471:"143a03d7",6482:"8ad57bd5",6483:"82486f1e",6496:"130ea009",6525:"dd5279c6",6577:"79a24f0b",6613:"1d6bc40a",6644:"8610d5f4",6788:"84041f42",6808:"4b306dc6",6846:"ee620227",6887:"82441f0d",6918:"9a810712",6939:"2301c8ca",7005:"d66e089c",7007:"103b9ff7",7081:"f91476c2",7109:"b63f7d44",7118:"9efa33a2",7183:"62885d98",7216:"97de9d9f",7244:"18cac96d",7262:"21ef3856",7307:"007b2ee9",7499:"7c3e9207",7503:"78e2ba84",7506:"e358996d",7535:"5732c3b8",7584:"0d528298",7586:"3a85a1e2",7671:"f14fc725",7748:"0a4f7c4b",7769:"85afa5e0",7798:"cd73bc4b",7906:"9432d449",7975:"2d91b55a",8037:"4acf5893",8097:"04a1ff66",8159:"b1d26dec",8238:"c14aeb46",8251:"a78bf1d3",8295:"f26bb487",8429:"911ab797",8576:"b71a8e3c",8577:"13e56460",8609:"1baf27d0",8653:"6c41212e",8712:"f3393ac0",8746:"4b50112b",8749:"68bc736d",8756:"068403c3",8803:"fbd88562",8836:"182f433b",8843:"cdea7c41",8873:"16229d82",8947:"92eb506b",8956:"d8e02618",8980:"3e7e09bf",9006:"c65ca7a4",9026:"ef5b7c9a",9035:"a1bed75a",9074:"54056006",9130:"9dcb26cb",9152:"6d2c0a27",9212:"7f4bbf53",9235:"1cf5bd84",9242:"5e752da9",9314:"26a61957",9315:"f868c39e",9323:"023f42bf",9324:"4bafef92",9366:"87b0f198",9369:"e5339539",9371:"6a779b76",9383:"c6f5aef2",9442:"dcc390ac",9582:"5f883c34",9603:"574da28c",9614:"016bbb8e",9634:"0a300d18",9662:"857eaeac",9768:"cc6277c3",9788:"8f4093e8",9826:"a535ca92",9929:"a5db8b1b",9974:"78f460da"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="gutenberg:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","gutenberg:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{__webpack_require__.b=document.baseURI||self.location.href;var installedChunks={5354:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(5354!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,chunkIds=data[0],moreModules=data[1],runtime=data[2],i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunkgutenberg=self.webpackChunkgutenberg||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();