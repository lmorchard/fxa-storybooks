(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{165:function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_lmorchard_devel_fxa_packages_fxa_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(269),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),react_transition_group__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(270);__webpack_require__(613);__webpack_exports__.a=function Survey(_ref){var surveyURL=_ref.surveyURL,_ref$surveyComplete=_ref.surveyComplete,surveyComplete=void 0!==_ref$surveyComplete&&_ref$surveyComplete,_useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),_useState2=Object(_home_lmorchard_devel_fxa_packages_fxa_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),inProp=_useState2[0],setInProp=_useState2[1],surveyCompleteElement=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"survey-complete-msg","data-testid":"survey-complete-msg"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",{className:"emoji"},"✅ 👍 💖"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",null,"Thank you for your input."),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",{className:"small"},"This survey will close automatically.")),iframe=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("iframe",{className:"survey-iframe",src:surveyURL,frameBorder:"0",onLoad:function onLoad(){return setInProp(!0)},width:"320",height:"360","data-testid":"survey-iframe"});return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_2__.a,{in:inProp,timeout:200,classNames:"survey-inner"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section",{className:"survey-component","data-testid":"survey-component","aria-hidden":"true"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_2__.a,{in:inProp,timeout:100,classNames:"button-inner"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{className:"survey-control",onClick:function onClick(){return setInProp(!inProp)}})),surveyComplete?surveyCompleteElement:iframe))}},267:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);__webpack_exports__.a=function AppErrorDialog(_ref){_ref.error.message;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",{"data-testid":"error-loading-app"},"General application error"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Something went wrong. Please try again later."))}},268:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);__webpack_exports__.a=function LinkExternal(_ref){var className=_ref.className,href=_ref.href,children=_ref.children;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",Object.assign({"data-testid":"link-external",target:"_blank",rel:"noopener noreferrer"},{className:className},{href:href}),children)}},272:function(module,exports,__webpack_require__){__webpack_require__(273),__webpack_require__(419),module.exports=__webpack_require__(420)},337:function(module,exports){},420:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(47);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(609)],module)}.call(this,__webpack_require__(94)(module))},609:function(module,exports,__webpack_require__){var map={"./components/AppErrorDialog/index.stories.tsx":610,"./components/LinkExternal/index.stories.tsx":611,"./components/Survey/index.stories.tsx":612};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=609},610:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(47),_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(267);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("components/AppErrorDialog",module).add("basic",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_2__.a,{error:new Error("Uh oh!")})}))}.call(this,__webpack_require__(94)(module))},611:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(47),_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(268);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("components/LinkExternal",module).add("basic",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_2__.a,{href:"https://mozilla.org"},"Keep the internet open and accessible to all.")}))}.call(this,__webpack_require__(94)(module))},612:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(47),_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(165),surveyURL="https://www.surveygizmo.com/s3/5541940/pizza";Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("components/Survey",module).add("default",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_2__.a,{surveyURL:surveyURL})})).add("complete",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_2__.a,Object.assign({surveyURL:surveyURL},{surveyComplete:!0}))}))}.call(this,__webpack_require__(94)(module))},613:function(module,exports,__webpack_require__){var api=__webpack_require__(614),content=__webpack_require__(615);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},615:function(module,exports,__webpack_require__){var ___CSS_LOADER_API_IMPORT___=__webpack_require__(616),___CSS_LOADER_GET_URL_IMPORT___=__webpack_require__(617),___CSS_LOADER_URL_IMPORT_0___=__webpack_require__(618);exports=___CSS_LOADER_API_IMPORT___(!1);var ___CSS_LOADER_URL_REPLACEMENT_0___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);exports.push([module.i,".survey-component{align-items:flex-end;background:#f9f9fa;border-radius:4px 4px 0 0;bottom:-360px;box-shadow:0 12px 18px 2px rgba(34,0,51,.04),0 6px 22px 4px rgba(7,48,114,.12),0 6px 10px -4px rgba(14,13,26,.12);display:flex;flex-direction:column;height:400px;overflow:hidden;position:fixed;right:10%;transition:bottom 250ms ease-out;width:320px}.survey-control{align-items:center;background:50% no-repeat url("+___CSS_LOADER_URL_REPLACEMENT_0___+");background-color:transparent;border:0;cursor:pointer;display:flex;height:40px;justify-content:center;margin:0;padding:0;width:40px}.survey-control:focus{box-shadow:none}.survey-control:hover{background:50% no-repeat url("+___CSS_LOADER_URL_REPLACEMENT_0___+");background-color:rgba(12,12,13,.05)}.survey-control:active{background:50% no-repeat url("+___CSS_LOADER_URL_REPLACEMENT_0___+");background-color:rgba(12,12,13,.1)}.survey-complete-msg{align-items:center;background:#fff;display:flex;flex-direction:column;height:360px;justify-content:center;width:100%}.survey-complete-msg p{margin:5px}.survey-complete-msg .emoji{font-size:2.4em;margin:0}.survey-complete-msg .small{clear:both;color:#737373;font-size:14px;line-height:1.5;margin:6px 0 24px}.survey-complete-msg,.survey-iframe{box-shadow:0 -1px 0 rgba(12,12,13,.1)}.survey-inner-enter{bottom:-360px}.survey-inner-enter-active{bottom:0;transition:bottom 250ms ease-out;transition-duration:250ms}.survey-inner-enter-done{bottom:0}.survey-inner-exit{bottom:0}.survey-inner-exit-active{bottom:-360px;transition:bottom 250ms ease-out;transition-duration:250ms}.button-inner-enter,.button-inner-exit-done{transform:rotate(180deg)}.button-inner-exit,.button-inner-enter-done,.button-inner-enter-active{transform:rotate(0deg)}",""]),module.exports=exports},618:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/chevron.0a25d57b.svg"}},[[272,1,2]]]);
//# sourceMappingURL=main.56a835df2a98a62393ed.bundle.js.map