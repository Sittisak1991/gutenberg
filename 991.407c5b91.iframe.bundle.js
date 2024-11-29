/*! For license information please see 991.407c5b91.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[991],{"./node_modules/@ariakit/react-core/esm/__chunks/A3WPL2ZJ.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P$:()=>useToolbarProviderContext,_N:()=>ToolbarScopedContextProvider,wU:()=>useToolbarContext});var _P7GR5CS5_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/P7GR5CS5.js"),ctx=(0,__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/LMDWO4NN.js").B0)([_P7GR5CS5_js__WEBPACK_IMPORTED_MODULE_1__.ws],[_P7GR5CS5_js__WEBPACK_IMPORTED_MODULE_1__.aN]),useToolbarContext=ctx.useContext,useToolbarProviderContext=(ctx.useScopedContext,ctx.useProviderContext),ToolbarScopedContextProvider=(ctx.ContextProvider,ctx.ScopedContextProvider)},"./node_modules/@ariakit/react-core/esm/__chunks/BOLVLGVE.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>ToolbarItem});var _P2CTZE2T_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/P2CTZE2T.js"),_A3WPL2ZJ_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/A3WPL2ZJ.js"),_LMDWO4NN_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/LMDWO4NN.js"),_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js"),useToolbarItem=(0,_LMDWO4NN_js__WEBPACK_IMPORTED_MODULE_0__.ab)((function useToolbarItem2(_a){var _b=_a,{store}=_b,props=(0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__.YG)(_b,["store"]);const context=(0,_A3WPL2ZJ_js__WEBPACK_IMPORTED_MODULE_2__.wU)();return store=store||context,props=(0,_P2CTZE2T_js__WEBPACK_IMPORTED_MODULE_3__.k)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__.IA)({store},props))})),ToolbarItem=(0,_LMDWO4NN_js__WEBPACK_IMPORTED_MODULE_0__.ph)((0,_LMDWO4NN_js__WEBPACK_IMPORTED_MODULE_0__.Rf)((function ToolbarItem2(props){const htmlProps=useToolbarItem(props);return(0,_LMDWO4NN_js__WEBPACK_IMPORTED_MODULE_0__.n)("button",htmlProps)})))},"./packages/block-editor/src/components/alignment-control/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>AlignmentControl,F:()=>AlignmentToolbar});var build_module=__webpack_require__("./packages/i18n/build-module/index.js"),toolbar_group=__webpack_require__("./packages/components/build-module/toolbar/toolbar-group/index.js"),toolbar_dropdown_menu=__webpack_require__("./packages/components/build-module/toolbar/toolbar-dropdown-menu/index.js"),align_left=__webpack_require__("./packages/icons/build-module/library/align-left.js"),align_center=__webpack_require__("./packages/icons/build-module/library/align-center.js"),align_right=__webpack_require__("./packages/icons/build-module/library/align-right.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const DEFAULT_ALIGNMENT_CONTROLS=[{icon:align_left.A,title:(0,build_module.__)("Align text left"),align:"left"},{icon:align_center.A,title:(0,build_module.__)("Align text center"),align:"center"},{icon:align_right.A,title:(0,build_module.__)("Align text right"),align:"right"}],POPOVER_PROPS={placement:"bottom-start"};function AlignmentUI({value,onChange,alignmentControls=DEFAULT_ALIGNMENT_CONTROLS,label=(0,build_module.__)("Align text"),description=(0,build_module.__)("Change text alignment"),isCollapsed=!0,isToolbar}){function applyOrUnset(align){return()=>onChange(value===align?void 0:align)}const activeAlignment=alignmentControls.find((control=>control.align===value));const UIComponent=isToolbar?toolbar_group.A:toolbar_dropdown_menu.A,extraProps=isToolbar?{isCollapsed}:{toggleProps:{description},popoverProps:POPOVER_PROPS};return(0,jsx_runtime.jsx)(UIComponent,{icon:function setIcon(){return activeAlignment?activeAlignment.icon:(0,build_module.V8)()?align_right.A:align_left.A}(),label,controls:alignmentControls.map((control=>{const{align}=control,isActive=value===align;return{...control,isActive,role:isCollapsed?"menuitemradio":void 0,onClick:applyOrUnset(align)}})),...extraProps})}AlignmentUI.displayName="AlignmentUI";const ui=AlignmentUI;AlignmentUI.__docgenInfo={description:"",methods:[],displayName:"AlignmentUI",props:{alignmentControls:{defaultValue:{value:"[\n\t{\n\t\ticon: alignLeft,\n\t\ttitle: __( 'Align text left' ),\n\t\talign: 'left',\n\t},\n\t{\n\t\ticon: alignCenter,\n\t\ttitle: __( 'Align text center' ),\n\t\talign: 'center',\n\t},\n\t{\n\t\ticon: alignRight,\n\t\ttitle: __( 'Align text right' ),\n\t\talign: 'right',\n\t},\n]",computed:!1},required:!1},label:{defaultValue:{value:"__( 'Align text' )",computed:!0},required:!1},description:{defaultValue:{value:"__( 'Change text alignment' )",computed:!0},required:!1},isCollapsed:{defaultValue:{value:"true",computed:!1},required:!1}}};const AlignmentControl=props=>(0,jsx_runtime.jsx)(ui,{...props,isToolbar:!1});AlignmentControl.displayName="AlignmentControl";const AlignmentToolbar=props=>(0,jsx_runtime.jsx)(ui,{...props,isToolbar:!0});AlignmentToolbar.displayName="AlignmentToolbar",AlignmentControl.__docgenInfo={description:"",methods:[],displayName:"AlignmentControl"},AlignmentToolbar.__docgenInfo={description:"",methods:[],displayName:"AlignmentToolbar"}},"./packages/components/build-module/toolbar/toolbar-button/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>toolbar_button});var clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),react=__webpack_require__("./node_modules/react/index.js"),build_module_button=__webpack_require__("./packages/components/build-module/button/index.js"),toolbar_item=__webpack_require__("./packages/components/build-module/toolbar/toolbar-item/index.js"),toolbar_context=__webpack_require__("./packages/components/build-module/toolbar/toolbar-context/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const toolbar_button_container=({children,className})=>(0,jsx_runtime.jsx)("div",{className,children});const toolbar_button=(0,react.forwardRef)((function UnforwardedToolbarButton(props,ref){const{children,className,containerClassName,extraProps,isActive,title,...restProps}=function useDeprecatedProps({isDisabled,...otherProps}){return{disabled:isDisabled,...otherProps}}(props);return(0,react.useContext)(toolbar_context.A)?(0,jsx_runtime.jsx)(toolbar_item.A,{className:(0,clsx.A)("components-toolbar-button",className),...extraProps,...restProps,ref,children:toolbarItemProps=>(0,jsx_runtime.jsx)(build_module_button.Ay,{label:title,isPressed:isActive,...toolbarItemProps,children})}):(0,jsx_runtime.jsx)(toolbar_button_container,{className:containerClassName,children:(0,jsx_runtime.jsx)(build_module_button.Ay,{ref,icon:restProps.icon,label:title,shortcut:restProps.shortcut,"data-subscript":restProps.subscript,onClick:event=>{event.stopPropagation(),restProps.onClick&&restProps.onClick(event)},className:(0,clsx.A)("components-toolbar__control",className),isPressed:isActive,accessibleWhenDisabled:!0,"data-toolbar-item":!0,...extraProps,...restProps,children})})}))},"./packages/components/build-module/toolbar/toolbar-context/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=(0,__webpack_require__("./node_modules/react/index.js").createContext)(void 0)},"./packages/components/build-module/toolbar/toolbar-dropdown-menu/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_toolbar_item__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/build-module/toolbar/toolbar-item/index.js"),_toolbar_context__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/build-module/toolbar/toolbar-context/index.js"),_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/build-module/dropdown-menu/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function ToolbarDropdownMenu(props,ref){return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(_toolbar_context__WEBPACK_IMPORTED_MODULE_2__.A)?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_toolbar_item__WEBPACK_IMPORTED_MODULE_4__.A,{ref,...props.toggleProps,children:toolbarItemProps=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.A,{...props,popoverProps:{...props.popoverProps},toggleProps:toolbarItemProps})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.A,{...props})}))},"./packages/components/build-module/toolbar/toolbar-group/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>toolbar_group});var clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),react=__webpack_require__("./node_modules/react/index.js"),toolbar_button=__webpack_require__("./packages/components/build-module/toolbar/toolbar-button/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const toolbar_group_container=({className,children,...props})=>(0,jsx_runtime.jsx)("div",{className,...props,children});var dropdown_menu=__webpack_require__("./packages/components/build-module/dropdown-menu/index.js"),toolbar_context=__webpack_require__("./packages/components/build-module/toolbar/toolbar-context/index.js"),toolbar_item=__webpack_require__("./packages/components/build-module/toolbar/toolbar-item/index.js");const toolbar_group_collapsed=function ToolbarGroupCollapsed({controls=[],toggleProps,...props}){const renderDropdownMenu=internalToggleProps=>(0,jsx_runtime.jsx)(dropdown_menu.A,{controls,toggleProps:{...internalToggleProps,"data-toolbar-item":!0},...props});return(0,react.useContext)(toolbar_context.A)?(0,jsx_runtime.jsx)(toolbar_item.A,{...toggleProps,children:renderDropdownMenu}):renderDropdownMenu(toggleProps)};const toolbar_group=function ToolbarGroup({controls=[],children,className,isCollapsed,title,...props}){const accessibleToolbarState=(0,react.useContext)(toolbar_context.A);if(!(controls&&controls.length||children))return null;const finalClassName=(0,clsx.A)(accessibleToolbarState?"components-toolbar-group":"components-toolbar",className);let controlSets;return controlSets=function isNestedArray(arr){return Array.isArray(arr)&&Array.isArray(arr[0])}(controls)?controls:[controls],isCollapsed?(0,jsx_runtime.jsx)(toolbar_group_collapsed,{label:title,controls:controlSets,className:finalClassName,children,...props}):(0,jsx_runtime.jsxs)(toolbar_group_container,{className:finalClassName,...props,children:[controlSets?.flatMap(((controlSet,indexOfSet)=>controlSet.map(((control,indexOfControl)=>(0,jsx_runtime.jsx)(toolbar_button.A,{containerClassName:indexOfSet>0&&0===indexOfControl?"has-left-divider":void 0,...control},[indexOfSet,indexOfControl].join()))))),children]})}},"./packages/components/build-module/toolbar/toolbar-item/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _ariakit_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/BOLVLGVE.js"),_wordpress_element__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_toolbar_context__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/build-module/toolbar/toolbar-context/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function ToolbarItem({children,as:Component,...props},ref){const accessibleToolbarStore=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(_toolbar_context__WEBPACK_IMPORTED_MODULE_2__.A),isRenderProp="function"==typeof children;if(!isRenderProp&&!Component)return null;const allProps={...props,ref,"data-toolbar-item":!0};if(!accessibleToolbarStore)return Component?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component,{...allProps,children}):isRenderProp?children(allProps):null;const render=isRenderProp?children:Component&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component,{children});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ariakit_react__WEBPACK_IMPORTED_MODULE_3__.T,{accessibleWhenDisabled:!0,...allProps,store:accessibleToolbarStore,render})}))},"./packages/components/build-module/utils/hooks/use-controlled-value.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>useControlledValue});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useControlledValue({defaultValue,onChange,value:valueProp}){const hasValue=void 0!==valueProp,initialValue=hasValue?valueProp:defaultValue,[state,setState]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue);let setValue;return setValue=hasValue&&"function"==typeof onChange?onChange:hasValue||"function"!=typeof onChange?setState:nextValue=>{onChange(nextValue),setState(nextValue)},[hasValue?valueProp:state,setValue]}},"./packages/components/build-module/visually-hidden/component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>visually_hidden_component});var use_context_system=__webpack_require__("./packages/components/build-module/context/use-context-system.js"),context_connect=__webpack_require__("./packages/components/build-module/context/context-connect.js");const visuallyHidden={border:0,clip:"rect(1px, 1px, 1px, 1px)",WebkitClipPath:"inset( 50% )",clipPath:"inset( 50% )",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",wordWrap:"normal"};var component=__webpack_require__("./packages/components/build-module/view/component.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const visually_hidden_component=(0,context_connect.KZ)((function UnconnectedVisuallyHidden(props,forwardedRef){const{style:styleProp,...contextProps}=(0,use_context_system.A)(props,"VisuallyHidden");return(0,jsx_runtime.jsx)(component.A,{ref:forwardedRef,...contextProps,style:{...visuallyHidden,...styleProp||{}}})}),"VisuallyHidden")},"./packages/compose/build-module/hooks/use-instance-id/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const instanceMap=new WeakMap;const __WEBPACK_DEFAULT_EXPORT__=function useInstanceId(object,prefix,preferredId){return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{if(preferredId)return preferredId;const id=function createId(object){const instances=instanceMap.get(object)||0;return instanceMap.set(object,instances+1),instances}(object);return prefix?`${prefix}-${id}`:id}),[object,preferredId,prefix])}},"./packages/icons/build-module/library/align-center.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.wA,{d:"M7.5 5.5h9V4h-9v1.5Zm-3.5 7h16V11H4v1.5Zm3.5 7h9V18h-9v1.5Z"})})},"./packages/icons/build-module/library/align-left.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.wA,{d:"M13 5.5H4V4h9v1.5Zm7 7H4V11h16v1.5Zm-7 7H4V18h9v1.5Z"})})},"./packages/icons/build-module/library/align-right.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.wA,{d:"M11.111 5.5H20V4h-8.889v1.5ZM4 12.5h16V11H4v1.5Zm7.111 7H20V18h-8.889v1.5Z"})})},"./node_modules/deepmerge/dist/cjs.js":module=>{var isMergeableObject=function isMergeableObject(value){return function isNonNullObject(value){return!!value&&"object"==typeof value}(value)&&!function isSpecial(value){var stringValue=Object.prototype.toString.call(value);return"[object RegExp]"===stringValue||"[object Date]"===stringValue||function isReactElement(value){return value.$$typeof===REACT_ELEMENT_TYPE}(value)}(value)};var REACT_ELEMENT_TYPE="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function cloneUnlessOtherwiseSpecified(value,options){return!1!==options.clone&&options.isMergeableObject(value)?deepmerge(function emptyTarget(val){return Array.isArray(val)?[]:{}}(value),value,options):value}function defaultArrayMerge(target,source,options){return target.concat(source).map((function(element){return cloneUnlessOtherwiseSpecified(element,options)}))}function getKeys(target){return Object.keys(target).concat(function getEnumerableOwnPropertySymbols(target){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(target).filter((function(symbol){return Object.propertyIsEnumerable.call(target,symbol)})):[]}(target))}function propertyIsOnObject(object,property){try{return property in object}catch(_){return!1}}function mergeObject(target,source,options){var destination={};return options.isMergeableObject(target)&&getKeys(target).forEach((function(key){destination[key]=cloneUnlessOtherwiseSpecified(target[key],options)})),getKeys(source).forEach((function(key){(function propertyIsUnsafe(target,key){return propertyIsOnObject(target,key)&&!(Object.hasOwnProperty.call(target,key)&&Object.propertyIsEnumerable.call(target,key))})(target,key)||(propertyIsOnObject(target,key)&&options.isMergeableObject(source[key])?destination[key]=function getMergeFunction(key,options){if(!options.customMerge)return deepmerge;var customMerge=options.customMerge(key);return"function"==typeof customMerge?customMerge:deepmerge}(key,options)(target[key],source[key],options):destination[key]=cloneUnlessOtherwiseSpecified(source[key],options))})),destination}function deepmerge(target,source,options){(options=options||{}).arrayMerge=options.arrayMerge||defaultArrayMerge,options.isMergeableObject=options.isMergeableObject||isMergeableObject,options.cloneUnlessOtherwiseSpecified=cloneUnlessOtherwiseSpecified;var sourceIsArray=Array.isArray(source);return sourceIsArray===Array.isArray(target)?sourceIsArray?options.arrayMerge(target,source,options):mergeObject(target,source,options):cloneUnlessOtherwiseSpecified(source,options)}deepmerge.all=function deepmergeAll(array,options){if(!Array.isArray(array))throw new Error("first argument should be an array");return array.reduce((function(prev,next){return deepmerge(prev,next,options)}),{})};var deepmerge_1=deepmerge;module.exports=deepmerge_1},"./node_modules/fast-deep-equal/es6/index.js":module=>{module.exports=function equal(a,b){if(a===b)return!0;if(a&&b&&"object"==typeof a&&"object"==typeof b){if(a.constructor!==b.constructor)return!1;var length,i,keys;if(Array.isArray(a)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(!equal(a[i],b[i]))return!1;return!0}if(a instanceof Map&&b instanceof Map){if(a.size!==b.size)return!1;for(i of a.entries())if(!b.has(i[0]))return!1;for(i of a.entries())if(!equal(i[1],b.get(i[0])))return!1;return!0}if(a instanceof Set&&b instanceof Set){if(a.size!==b.size)return!1;for(i of a.entries())if(!b.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(a)&&ArrayBuffer.isView(b)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(a[i]!==b[i])return!1;return!0}if(a.constructor===RegExp)return a.source===b.source&&a.flags===b.flags;if(a.valueOf!==Object.prototype.valueOf)return a.valueOf()===b.valueOf();if(a.toString!==Object.prototype.toString)return a.toString()===b.toString();if((length=(keys=Object.keys(a)).length)!==Object.keys(b).length)return!1;for(i=length;0!=i--;)if(!Object.prototype.hasOwnProperty.call(b,keys[i]))return!1;for(i=length;0!=i--;){var key=keys[i];if(!equal(a[key],b[key]))return!1}return!0}return a!=a&&b!=b}},"./node_modules/is-plain-object/dist/is-plain-object.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isObject(o){return"[object Object]"===Object.prototype.toString.call(o)}function isPlainObject(o){var ctor,prot;return!1!==isObject(o)&&(void 0===(ctor=o.constructor)||!1!==isObject(prot=ctor.prototype)&&!1!==prot.hasOwnProperty("isPrototypeOf"))}__webpack_require__.d(__webpack_exports__,{Q:()=>isPlainObject})},"./packages/components/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{UE:()=>arrow,we:()=>useFloating});var _floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js");const arrow=options=>({name:"arrow",options,fn(state){const{element,padding}="function"==typeof options?options(state):options;return element&&function isRef(value){return{}.hasOwnProperty.call(value,"current")}(element)?null!=element.current?(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__.UE)({element:element.current,padding}).fn(state):{}:element?(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__.UE)({element,padding}).fn(state):{}}});var index="undefined"!=typeof document?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect;function deepEqual(a,b){if(a===b)return!0;if(typeof a!=typeof b)return!1;if("function"==typeof a&&a.toString()===b.toString())return!0;let length,i,keys;if(a&&b&&"object"==typeof a){if(Array.isArray(a)){if(length=a.length,length!=b.length)return!1;for(i=length;0!=i--;)if(!deepEqual(a[i],b[i]))return!1;return!0}if(keys=Object.keys(a),length=keys.length,length!==Object.keys(b).length)return!1;for(i=length;0!=i--;)if(!{}.hasOwnProperty.call(b,keys[i]))return!1;for(i=length;0!=i--;){const key=keys[i];if(("_owner"!==key||!a.$$typeof)&&!deepEqual(a[key],b[key]))return!1}return!0}return a!=a&&b!=b}function getDPR(element){if("undefined"==typeof window)return 1;return(element.ownerDocument.defaultView||window).devicePixelRatio||1}function roundByDPR(element,value){const dpr=getDPR(element);return Math.round(value*dpr)/dpr}function useLatestRef(value){const ref=react__WEBPACK_IMPORTED_MODULE_0__.useRef(value);return index((()=>{ref.current=value})),ref}function useFloating(options){void 0===options&&(options={});const{placement="bottom",strategy="absolute",middleware=[],platform,elements:{reference:externalReference,floating:externalFloating}={},transform=!0,whileElementsMounted,open}=options,[data,setData]=react__WEBPACK_IMPORTED_MODULE_0__.useState({x:0,y:0,strategy,placement,middlewareData:{},isPositioned:!1}),[latestMiddleware,setLatestMiddleware]=react__WEBPACK_IMPORTED_MODULE_0__.useState(middleware);deepEqual(latestMiddleware,middleware)||setLatestMiddleware(middleware);const[_reference,_setReference]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),[_floating,_setFloating]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),setReference=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node=>{node!=referenceRef.current&&(referenceRef.current=node,_setReference(node))}),[_setReference]),setFloating=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node=>{node!==floatingRef.current&&(floatingRef.current=node,_setFloating(node))}),[_setFloating]),referenceEl=externalReference||_reference,floatingEl=externalFloating||_floating,referenceRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),floatingRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),dataRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(data),whileElementsMountedRef=useLatestRef(whileElementsMounted),platformRef=useLatestRef(platform),update=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{if(!referenceRef.current||!floatingRef.current)return;const config={placement,strategy,middleware:latestMiddleware};platformRef.current&&(config.platform=platformRef.current),(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__.rD)(referenceRef.current,floatingRef.current,config).then((data=>{const fullData={...data,isPositioned:!0};isMountedRef.current&&!deepEqual(dataRef.current,fullData)&&(dataRef.current=fullData,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync((()=>{setData(fullData)})))}))}),[latestMiddleware,placement,strategy,platformRef]);index((()=>{!1===open&&dataRef.current.isPositioned&&(dataRef.current.isPositioned=!1,setData((data=>({...data,isPositioned:!1}))))}),[open]);const isMountedRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1);index((()=>(isMountedRef.current=!0,()=>{isMountedRef.current=!1})),[]),index((()=>{if(referenceEl&&(referenceRef.current=referenceEl),floatingEl&&(floatingRef.current=floatingEl),referenceEl&&floatingEl){if(whileElementsMountedRef.current)return whileElementsMountedRef.current(referenceEl,floatingEl,update);update()}}),[referenceEl,floatingEl,update,whileElementsMountedRef]);const refs=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({reference:referenceRef,floating:floatingRef,setReference,setFloating})),[setReference,setFloating]),elements=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({reference:referenceEl,floating:floatingEl})),[referenceEl,floatingEl]),floatingStyles=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>{const initialStyles={position:strategy,left:0,top:0};if(!elements.floating)return initialStyles;const x=roundByDPR(elements.floating,data.x),y=roundByDPR(elements.floating,data.y);return transform?{...initialStyles,transform:"translate("+x+"px, "+y+"px)",...getDPR(elements.floating)>=1.5&&{willChange:"transform"}}:{position:strategy,left:x,top:y}}),[strategy,transform,elements.floating,data.x,data.y]);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({...data,update,refs,elements,floatingStyles})),[data,update,refs,elements,floatingStyles])}},"./packages/components/node_modules/uuid/dist/esm-browser/v4.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var getRandomValues;__webpack_require__.d(__webpack_exports__,{A:()=>esm_browser_v4});var rnds8=new Uint8Array(16);function rng(){if(!getRandomValues&&!(getRandomValues="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return getRandomValues(rnds8)}const regex=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const esm_browser_validate=function validate(uuid){return"string"==typeof uuid&&regex.test(uuid)};for(var byteToHex=[],i=0;i<256;++i)byteToHex.push((i+256).toString(16).substr(1));const esm_browser_stringify=function stringify(arr){var offset=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,uuid=(byteToHex[arr[offset+0]]+byteToHex[arr[offset+1]]+byteToHex[arr[offset+2]]+byteToHex[arr[offset+3]]+"-"+byteToHex[arr[offset+4]]+byteToHex[arr[offset+5]]+"-"+byteToHex[arr[offset+6]]+byteToHex[arr[offset+7]]+"-"+byteToHex[arr[offset+8]]+byteToHex[arr[offset+9]]+"-"+byteToHex[arr[offset+10]]+byteToHex[arr[offset+11]]+byteToHex[arr[offset+12]]+byteToHex[arr[offset+13]]+byteToHex[arr[offset+14]]+byteToHex[arr[offset+15]]).toLowerCase();if(!esm_browser_validate(uuid))throw TypeError("Stringified UUID is invalid");return uuid};const esm_browser_v4=function v4(options,buf,offset){var rnds=(options=options||{}).random||(options.rng||rng)();if(rnds[6]=15&rnds[6]|64,rnds[8]=63&rnds[8]|128,buf){offset=offset||0;for(var i=0;i<16;++i)buf[offset+i]=rnds[i];return buf}return esm_browser_stringify(rnds)}}}]);