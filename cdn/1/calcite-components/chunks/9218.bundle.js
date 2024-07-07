/*! For license information please see 9218.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[9218],{3849:(e,t,n)=>{function i(){const e=navigator.userAgentData;return e?.brands?e.brands.map((({brand:e,version:t})=>`${e}/${t}`)).join(" "):navigator.userAgent}n.d(t,{g:()=>i})},9218:(e,t,n)=>{n.r(t),n.d(t,{calcite_inline_editable:()=>h});var i=n(9113),s=n(7146),a=n(2627),l=n(493),c=n(8545),o=n(3213),r=n(8773),d=n(8065);n(8220);const h=class{constructor(e){(0,i.r)(this,e),this.calciteInlineEditableEditCancel=(0,i.c)(this,"calciteInlineEditableEditCancel",6),this.calciteInlineEditableEditConfirm=(0,i.c)(this,"calciteInlineEditableEditConfirm",6),this.calciteInternalInlineEditableEnableEditingChange=(0,i.c)(this,"calciteInternalInlineEditableEnableEditingChange",6),this.mutationObserver=(0,r.c)("mutation",(()=>this.mutationObserverCallback())),this.enableEditing=()=>{this.valuePriorToEditing=this.inputElement?.value,this.editingEnabled=!0,this.inputElement?.setFocus(),this.calciteInternalInlineEditableEnableEditingChange.emit()},this.disableEditing=()=>{this.editingEnabled=!1},this.cancelEditing=()=>{this.inputElement&&(this.inputElement.value=this.valuePriorToEditing),this.disableEditing(),this.enableEditingButton.setFocus(),!this.editingEnabled&&this.shouldEmitCancel&&this.calciteInlineEditableEditCancel.emit()},this.escapeKeyHandler=async e=>{e.defaultPrevented||("Escape"===e.key&&(e.preventDefault(),this.cancelEditing()),"Tab"===e.key&&this.shouldShowControls&&(e.shiftKey||e.target!==this.inputElement||(e.preventDefault(),this.cancelEditingButton.setFocus()),e.shiftKey&&e.target===this.cancelEditingButton&&(e.preventDefault(),this.inputElement?.setFocus())))},this.cancelEditingHandler=async e=>{e.preventDefault(),this.cancelEditing()},this.enableEditingHandler=async e=>{this.disabled||e.target===this.cancelEditingButton||e.target===this.confirmEditingButton||(e.preventDefault(),this.editingEnabled||this.enableEditing())},this.confirmChangesHandler=async e=>{e.preventDefault(),this.calciteInlineEditableEditConfirm.emit();try{this.afterConfirm&&(this.loading=!0,await this.afterConfirm(),this.disableEditing(),this.enableEditingButton.setFocus())}catch(e){}finally{this.loading=!1}},this.disabled=!1,this.editingEnabled=!1,this.loading=!1,this.controls=!1,this.scale=void 0,this.afterConfirm=void 0,this.messages=void 0,this.messageOverrides=void 0,this.defaultMessages=void 0,this.effectiveLocale=void 0}disabledWatcher(e){this.inputElement&&(this.inputElement.disabled=e)}editingEnabledWatcher(e,t){this.inputElement&&(this.inputElement.editingEnabled=e),!e&&t&&(this.shouldEmitCancel=!0)}onMessagesChange(){}connectedCallback(){(0,a.c)(this),(0,l.c)(this),(0,o.c)(this),(0,d.c)(this),this.mutationObserver?.observe(this.el,{childList:!0}),this.mutationObserverCallback()}async componentWillLoad(){(0,c.s)(this),await(0,d.s)(this)}componentDidLoad(){(0,c.a)(this)}disconnectedCallback(){(0,a.d)(this),(0,l.d)(this),(0,o.d)(this),(0,d.d)(this),this.mutationObserver?.disconnect()}componentDidRender(){(0,a.u)(this)}render(){return(0,i.h)(a.I,{disabled:this.disabled},(0,i.h)("div",{class:"wrapper",onClick:this.enableEditingHandler,onKeyDown:this.escapeKeyHandler},(0,i.h)("div",{class:"input-wrapper"},(0,i.h)("slot",null)),(0,i.h)("div",{class:"controls-wrapper"},(0,i.h)("calcite-button",{appearance:"transparent",class:"enable-editing-button",disabled:this.disabled,iconStart:"pencil",kind:"neutral",label:this.messages.enableEditing,onClick:this.enableEditingHandler,scale:this.scale,style:{opacity:this.editingEnabled?"0":"1",width:this.editingEnabled?"0":"inherit"},type:"button",ref:e=>this.enableEditingButton=e}),this.shouldShowControls&&[(0,i.h)("div",{class:"cancel-editing-button-wrapper"},(0,i.h)("calcite-button",{appearance:"transparent",class:"cancel-editing-button",disabled:this.disabled,iconStart:"x",kind:"neutral",label:this.messages.cancelEditing,onClick:this.cancelEditingHandler,scale:this.scale,type:"button",ref:e=>this.cancelEditingButton=e})),(0,i.h)("calcite-button",{appearance:"solid",class:"confirm-changes-button",disabled:this.disabled,iconStart:"check",kind:"brand",label:this.messages.confirmChanges,loading:this.loading,onClick:this.confirmChangesHandler,scale:this.scale,type:"button",ref:e=>this.confirmEditingButton=e})])))}blurHandler(){this.controls||this.disableEditing()}effectiveLocaleChange(){(0,d.u)(this,this.effectiveLocale)}async setFocus(){await(0,c.c)(this),this.el?.focus()}mutationObserverCallback(){this.updateSlottedInput(),this.scale=this.scale||this.inputElement?.scale}onLabelClick(){this.setFocus()}updateSlottedInput(){const e=(0,s.e)(this.el,{matches:"calcite-input"});this.inputElement=e,e&&(this.inputElement.disabled=this.disabled,this.inputElement.label=this.inputElement.label||(0,l.g)(this))}get shouldShowControls(){return this.editingEnabled&&this.controls}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return(0,i.g)(this)}static get watchers(){return{disabled:["disabledWatcher"],editingEnabled:["editingEnabledWatcher"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};h.style=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([scale=s]) .controls-wrapper{block-size:1.5rem}:host([scale=m]) .controls-wrapper{block-size:2rem}:host([scale=l]) .controls-wrapper{block-size:2.75rem}:host(:not([editing-enabled]):not([disabled])) .wrapper:hover{background-color:var(--calcite-color-foreground-2)}.wrapper{box-sizing:border-box;display:flex;justify-content:space-between;background-color:var(--calcite-color-foreground-1);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.wrapper .input-wrapper{flex:1 1 0%}.controls-wrapper{display:flex}:host([disabled]) .cancel-editing-button-wrapper{border-color:var(--calcite-color-border-2)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}"},344:(e,t,n)=>{function i(e){return"l"===e?"m":"s"}async function s(e){await(function(e){return"function"==typeof e.componentOnReady}(e)?e.componentOnReady():new Promise((e=>requestAnimationFrame((()=>e())))))}n.d(t,{c:()=>s,g:()=>i})},2627:(e,t,n)=>{n.d(t,{I:()=>w,c:()=>E,d:()=>m,u:()=>u});var i=n(3849),s=n(9113);const a=/firefox/i.test((0,i.g)()),l=a?new WeakMap:null;function c(){const{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function o(e){const t=e.target;if(a&&!l.get(t))return;const{disabled:n}=t;n&&e.preventDefault()}const r=["mousedown","mouseup","click"];function d(e){const t=e.target;a&&!l.get(t)||t.disabled&&(e.stopImmediatePropagation(),e.preventDefault())}const h={capture:!0};function u(e){if(e.disabled)return e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void b(e);f(e),e.el.removeAttribute("aria-disabled")}function b(e){if(e.el.click=c,a){const t=function(e){return e.el.parentElement||e.el}(e),n=l.get(e.el);return n!==t&&(p(n),l.set(e.el,t)),void g(l.get(e.el))}g(e.el)}function g(e){e&&(e.addEventListener("pointerdown",o,h),r.forEach((t=>e.addEventListener(t,d,h))))}function f(e){if(delete e.el.click,a)return p(l.get(e.el)),void l.delete(e.el);p(e.el)}function p(e){e&&(e.removeEventListener("pointerdown",o,h),r.forEach((t=>e.removeEventListener(t,d,h))))}function E(e){e.disabled&&a&&b(e)}function m(e){a&&f(e)}const v={container:"interaction-container"};function w({disabled:e},t){return(0,s.h)("div",{class:v.container,inert:e},...t)}},493:(e,t,n)=>{n.d(t,{a:()=>k,b:()=>c,c:()=>f,d:()=>p,g:()=>m,l:()=>l});var i=n(7146),s=n(344);const a="calciteInternalLabelClick",l="calciteInternalLabelConnected",c="calciteInternalLabelDisconnected",o="calcite-label",r=new WeakMap,d=new WeakMap,h=new WeakMap,u=new WeakMap,b=new Set,g=e=>{const{id:t}=e,n=t&&(0,i.q)(e,{selector:`${o}[for="${t}"]`});if(n)return n;const s=(0,i.c)(e,o);return!s||function(e,t){let n;const i="custom-element-ancestor-check",s=i=>{i.stopImmediatePropagation();const s=i.composedPath();n=s.slice(s.indexOf(t),s.indexOf(e))};e.addEventListener(i,s,{once:!0}),t.dispatchEvent(new CustomEvent(i,{composed:!0,bubbles:!0})),e.removeEventListener(i,s);return n.filter((n=>n!==t&&n!==e)).filter((e=>e.tagName?.includes("-"))).length>0}(s,e)?null:s};function f(e){if(!e)return;const t=g(e.el);if(d.has(t)&&t===e.labelEl||!t&&b.has(e))return;const n=y.bind(e);if(t){e.labelEl=t;const i=r.get(t)||[];i.push(e),r.set(t,i.sort(E)),d.has(e.labelEl)||(d.set(e.labelEl,v),e.labelEl.addEventListener(a,v)),b.delete(e),document.removeEventListener(l,h.get(e)),u.set(e,n),document.addEventListener(c,n)}else b.has(e)||(n(),document.removeEventListener(c,u.get(e)))}function p(e){if(!e)return;if(b.delete(e),document.removeEventListener(l,h.get(e)),document.removeEventListener(c,u.get(e)),h.delete(e),u.delete(e),!e.labelEl)return;const t=r.get(e.labelEl);1===t.length&&(e.labelEl.removeEventListener(a,d.get(e.labelEl)),d.delete(e.labelEl)),r.set(e.labelEl,t.filter((t=>t!==e)).sort(E)),e.labelEl=null}function E(e,t){return(0,i.k)(e.el,t.el)?-1:1}function m(e){return e.label||e.labelEl?.textContent?.trim()||""}function v(e){const t=e.detail.sourceEvent.target,n=r.get(this),i=n.find((e=>e.el===t));if(n.includes(i))return;const s=n[0];s.disabled||s.onLabelClick(e)}function w(){b.has(this)&&f(this)}function y(){b.add(this);const e=h.get(this)||w.bind(this);h.set(this,e),document.addEventListener(l,e)}async function k(e){if(await(0,s.c)(e),r.has(e))return;const t=e.ownerDocument?.getElementById(e.for);t&&requestAnimationFrame((()=>{for(const e of b)if(e.el===t){f(e);break}}))}},8545:(e,t,n)=>{n.d(t,{a:()=>c,b:()=>o,c:()=>r,s:()=>l});var i=n(9113);const s=new WeakMap,a=new WeakMap;function l(e){a.set(e,new Promise((t=>s.set(e,t))))}function c(e){s.get(e)()}function o(e){return a.get(e)}async function r(e){return await o(e),(0,i.f)(e),new Promise((e=>requestAnimationFrame((()=>e()))))}},8065:(e,t,n)=>{n.d(t,{c:()=>h,d:()=>u,s:()=>o,u:()=>d});var i=n(9113),s=n(3213);const a={};function l(){throw new Error("could not fetch component message bundle")}function c(e){e.messages={...e.defaultMessages,...e.messageOverrides}}async function o(e){e.defaultMessages=await r(e,e.effectiveLocale),c(e)}async function r(e,t){const{el:n}=e,c=n.tagName.toLowerCase().replace("calcite-","");return async function(e,t){const n=`${t}_${e}`;return a[n]||(a[n]=fetch((0,i.a)(`./assets/${t}/t9n/messages_${e}.json`)).then((e=>(e.ok||l(),e.json()))).catch((()=>l()))),a[n]}((0,s.g)(t,"t9n"),c)}async function d(e,t){e.defaultMessages=await r(e,t),c(e)}function h(e){e.onMessagesChange=b}function u(e){e.onMessagesChange=void 0}function b(){c(this)}}}]);