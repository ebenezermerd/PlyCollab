import{j as n,a as c,L as u,R as i,F as x}from"./index-242ca218.js";import{A as w}from"./arrow-right-c900484c.js";const y=()=>n("section",{className:"min-h-screen flex items-center",children:n("div",{className:"container mx-auto px-4 relative z-10",children:c("div",{className:"grid lg:grid-cols-2 gap-12 items-center",children:[c("div",{children:[c("h1",{className:"text-4xl md:text-6xl font-bold mb-6",children:["We are ",n("span",{className:"text-neon-green",children:"DevTeam"})]}),n("p",{className:"text-text-secondary text-lg mb-8",children:"A group of passionate developers creating innovative web solutions for businesses worldwide."}),c("div",{className:"flex gap-4",children:[c(u,{to:"/projects",className:"bg-neon-green text-dark-bg px-6 py-3 rounded-md hover:bg-neon-green/90 transition-colors inline-flex items-center gap-2 no-underline",children:["Our Projects ",n(w,{className:"w-4 h-4"})]}),n(u,{to:"/contact",className:"border border-neon-green text-neon-green px-6 py-3 rounded-md hover:bg-neon-green/10 transition-colors no-underline",children:"Contact Us"})]})]}),n("div",{className:"relative",children:n("img",{src:"/team-photo.png",alt:"DevTeam Group Photo",className:"rounded-lg glass w-full h-auto"})})]})})});var p={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},g=i.createContext&&i.createContext(p),N=["attr","size","title"];function O(e,t){if(e==null)return{};var r=V(e,t),a,l;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(l=0;l<s.length;l++)a=s[l],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function V(e,t){if(e==null)return{};var r={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;r[a]=e[a]}return r}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},m.apply(this,arguments)}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,a)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?f(Object(r),!0).forEach(function(a){j(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}function j(e,t,r){return t=P(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function P(e){var t=H(e,"string");return typeof t=="symbol"?t:t+""}function H(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var a=r.call(e,t||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function z(e){return e&&e.map((t,r)=>i.createElement(t.tag,v({key:r},t.attr),z(t.child)))}function o(e){return t=>i.createElement(S,m({attr:v({},e.attr)},t),z(e.child))}function S(e){var t=r=>{var{attr:a,size:l,title:s}=e,b=O(e,N),d=l||r.size||"1em",h;return r.className&&(h=r.className),e.className&&(h=(h?h+" ":"")+e.className),i.createElement("svg",m({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,a,b,{className:h,style:v(v({color:e.color||r.color},r.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),s&&i.createElement("title",null,s),e.children)};return g!==void 0?i.createElement(g.Consumer,null,r=>t(r)):t(p)}function C(e){return o({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M0 6.925v10.086h3.674v-.51H.53V7.435h4.526v-.51zm18.944 0v.511h4.526V16.5h-3.144v.511H24V6.925zm-7.727-.891v1.453h1.537v-.383H11.71V6.91h.86v-.336h-.86v-.157h1.044v-.383H11.71zm1.765 0v1.453h1.39V7.06h-.897V6.034zm1.551 0v1.453h.493V6.034zm.648 0v.427h.557v1.026h.493V6.461h.558v-.427h-1.051zm1.765 0v1.453h1.537v-.383H17.44V6.91h.86v-.336h-.86v-.157h1.044v-.383H17.44zM11.45 8.225l-3.785.006.015 3.466 1.57 4.01h5.144l-.707-1.77H9.84V10h2.32zm-1.288 2.862v1.77h3.107l-.712-1.77zM6.265 6.034l-.748 1.453h.538l.122-.278h.699l.135.278h.536l-.753-1.453zm1.363 0v1.453h1.39V7.06h-.897V6.034zm1.55 0v1.453h1.39V7.06h-.896V6.034zm-2.65.444l.187.391h-.377zm16.29 1.73l-2.148.003-1.368 3.47-.938-3.467-2.142.003-.92 3.443-1.355-3.44-2.177.004 2.966 7.483h1.633l.938-3.462.934 3.462h1.653zm-16.844.025l-1.845.003-2.946 7.472H3.37l.342-.9h2.333l-.686-1.747h-.955l.635-1.673 1.706 4.32h2.17zm13.091 8.195c-.398.002-.663.14-.805.316a.76.76 0 00.005.91c.603.625 1.574.134 1.632.008v-.622h-.892v.344h.405v.086c-.114.152-.598.143-.722-.053-.124-.225-.038-.374.008-.444.277-.3.753-.062.784.004l.365-.293a1.332 1.332 0 00-.78-.256zm-7.877.01a2.177 2.177 0 00-.269.02c-.293.06-.476.207-.517.346-.128.491.571.567.571.567.623.03.571.098.572.123-.065.136-.42.087-.529.07-.221-.042-.43-.186-.43-.186l-.271.3c.76.482 1.38.226 1.48.17.3-.171.29-.484.192-.621-.076-.093-.307-.207-.535-.232-.204-.048-.604-.011-.558-.141.06-.12.682-.04.845.095l.24-.295c-.233-.168-.517-.22-.791-.216zm-7.085.047l.504 1.397h.505l.278-.854.266.854h.506l.502-1.397h-.497l-.258.866-.297-.866h-.444l-.294.874-.265-.874zm2.693 0v1.397h.502v-.392h.31l.324.392h.591l-.384-.448c.6-.234.334-.927-.234-.95h-.06zm1.89 0v1.397h1.537v-.328H9.18v-.195h.86v-.335h-.86v-.158h1.044v-.381zm3.427 0v.413h.557v.984h.494v-.984h.557v-.413zm1.758 0v1.397h1.39V17.5h-.897v-1.016zm1.562 0v1.397h.493V16.485zm.766 0v1.397h.493v-.804l.772.804h.466v-1.396h-.493v.761l-.716-.761zm-8.904.372h.531c.19-.003.189.286 0 .292h-.53z"},child:[]}]})(e)}function M(e){return o({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"},child:[]}]})(e)}function E(e){return o({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"},child:[]}]})(e)}function D(e){return o({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"},child:[]}]})(e)}function _(e){return o({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"},child:[]}]})(e)}function B(e){return o({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"},child:[]}]})(e)}const T=()=>n("section",{className:"py-20 relative",id:"skills",children:c("div",{className:"container mx-auto px-4 relative z-10",children:[c("h2",{className:"text-3xl font-bold mb-12 text-center",children:["Our ",n("span",{className:"text-neon-green",children:"Skills"})]}),n("div",{className:"grid grid-cols-3 md:grid-cols-6 gap-8",children:[{name:"React",icon:n(_,{className:"w-12 h-12"})},{name:"Node.js",icon:n(E,{className:"w-12 h-12"})},{name:"TypeScript",icon:n(B,{className:"w-12 h-12"})},{name:"Python",icon:n(D,{className:"w-12 h-12"})},{name:"Docker",icon:n(M,{className:"w-12 h-12"})},{name:"AWS",icon:n(C,{className:"w-12 h-12"})}].map((t,r)=>c("div",{className:"flex flex-col items-center",children:[n("div",{className:"text-neon-green mb-2",children:t.icon}),n("p",{className:"text-text-secondary",children:t.name})]},r))})]})}),R=()=>c(x,{children:[n(y,{}),n(T,{})]});export{R as default};