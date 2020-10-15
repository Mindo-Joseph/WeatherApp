/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box;\\n}\\nbody {\\n  font-family: \\\"Poppins\\\", sans-serif;\\n}\\np {\\n  font-weight: 600;\\n}\\n#content {\\n  display: flex;\\n  margin: 30px auto;\\n  width: 95%;\\n  height: 50%;\\n  border-radius: 40px;\\n  box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25),\\n    -5px -5px 30px 7px rgba(0, 0, 0, 0.22);\\n  cursor: pointer;\\n  transition: 0.4s;\\n}\\n.details-section {\\n  flex: 60%;\\n}\\n.details-section,\\n.image-section {\\n  padding: 2em 1em;\\n}\\n.date-search-section {\\n  display: flex;\\n  justify-content: space-evenly;\\n}\\n.date {\\n  color: #000;\\n  font-size: 2em;\\n}\\n.search {\\n  border: 1px solid #c4c4c4;\\n  width: 200px;\\n  overflow-x: hidden;\\n  display: flex;\\n  border-radius: 50px;\\n  font-size: 18px;\\n  position: relative;\\n  left: 10%;\\n}\\n.search input {\\n  width: 300px;\\n  height: 65px;\\n  border: none;\\n  padding: 8px 20px;\\n  outline: none;\\n  font-size: 18px;\\n}\\n\\n.current-weather {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.other-details {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.other-details p {\\n  margin-right: 1em;\\n  margin-top: 1.5em;\\n}\\n.temp-display {\\n  color: #e8960a;\\n  font-size: 3em;\\n}\\n\\n.weekly-forecast {\\n  display: flex;\\n}\\n.image-section {\\n  padding: 1em;\\n}\\n.image {\\n  height: 400px;\\n}\\n.toggle-btn {\\n  display: inline-block;\\n  vertical-align: middle;\\n  white-space: nowrap;\\n  margin-left: 35%;\\n  cursor: pointer;\\n  margin: 0.25rem 0;\\n  padding: 0.5rem 1rem;\\n  border: 1px solid #1e6bd6;\\n  border-radius: 5px;\\n  background: #1e6bd6;\\n  color: white;\\n  font-weight: 600;\\n  text-decoration: none;\\n  font-family: sans-serif;\\n  font-size: 0.95rem;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://WeatherApp/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://WeatherApp/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/img/sideImage.jpeg":
/*!********************************!*\
  !*** ./src/img/sideImage.jpeg ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"44c94e7d5698b0bfcf0a308fa6f30c11.jpeg\");\n\n//# sourceURL=webpack://WeatherApp/./src/img/sideImage.jpeg?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://WeatherApp/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.nc, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://WeatherApp/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/apirequest.js":
/*!***************************!*\
  !*** ./src/apirequest.js ***!
  \***************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fToC [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fetchCoordinates [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getCurrentLocationWeather [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getCurrentPosition [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCurrentLocationWeather\": () => /* binding */ getCurrentLocationWeather,\n/* harmony export */   \"getCurrentPosition\": () => /* binding */ getCurrentPosition,\n/* harmony export */   \"fetchCoordinates\": () => /* binding */ fetchCoordinates,\n/* harmony export */   \"fToC\": () => /* binding */ fToC,\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst openWeatherApiCity = 'https://api.openweathermap.org/data/2.5/weather?q=';\nconst openWeatherApiCord = 'https://api.openweathermap.org/data/2.5/weather?lat=';\nconst getWeather = async (cityname) => {\n  const response = await fetch(`${openWeatherApiCity}${cityname}&units=imperial&appid=${\"e31da000d7ecf6961e3fd3b12cbd70dd\"}`);\n  const weatherData = await response.json();\n  return weatherData;\n};\nconst getCurrentLocationWeather = async (lat, long) => {\n  const response = await fetch(`${openWeatherApiCord}${lat}&lon=${long}&appid=${\"e31da000d7ecf6961e3fd3b12cbd70dd\"}`);\n  const currentLocationData = await response.json();\n  return currentLocationData;\n};\n\nfunction getCurrentPosition(options = {}) {\n  return new Promise((resolve, reject) => {\n    navigator.geolocation.getCurrentPosition(resolve, reject, options);\n  });\n}\nconst fetchCoordinates = async () => {\n  const response = await getCurrentPosition();\n  return { response };\n};\nconst fToC = (farenheight) => Math.floor((farenheight - 32) * (5 / 9));\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeather);\n\n\n//# sourceURL=webpack://WeatherApp/./src/apirequest.js?");

/***/ }),

/***/ "./src/frontend.js":
/*!*************************!*\
  !*** ./src/frontend.js ***!
  \*************************/
/*! namespace exports */
/*! export detailSection [provided] [no usage info] [missing usage info prevents renaming] */
/*! export imageSection [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"detailSection\": () => /* binding */ detailSection,\n/* harmony export */   \"imageSection\": () => /* binding */ imageSection\n/* harmony export */ });\n/* harmony import */ var _apirequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apirequest */ \"./src/apirequest.js\");\n/* harmony import */ var _img_sideImage_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/sideImage.jpeg */ \"./src/img/sideImage.jpeg\");\n/* eslint-disable no-param-reassign */\n\n\n\nconst toggleTemp = (obj, node) => {\n  const tempCelcius = (0,_apirequest__WEBPACK_IMPORTED_MODULE_1__.fToC)(obj.main.temp);\n  if (node.textContent.endsWith('F')) {\n    node.textContent = `${tempCelcius} C`;\n  } else {\n    node.textContent = `${obj.main.temp} F`;\n  }\n};\n\nconst addDataToPage = (obj) => {\n  const imageLink = 'http://openweathermap.org/img/wn/';\n  const details = document.querySelector('.details-section');\n  const currentWeather = document.createElement('div');\n  currentWeather.className = 'current-weather';\n  const tempDisplay = document.createElement('div');\n  tempDisplay.className = 'temp-display';\n  tempDisplay.textContent = `${obj.main.temp} F`;\n  const toggleButton = document.createElement('button');\n  toggleButton.textContent = 'Celcius/Farenheight';\n  toggleButton.className = 'toggle-btn';\n  toggleButton.addEventListener('click', () => {\n    toggleTemp(obj, tempDisplay);\n  });\n\n  const weatherIcon = document.createElement('img');\n  weatherIcon.className = 'weather-icon';\n  weatherIcon.src = `${imageLink}${obj.weather[0].icon}@2x.png`;\n\n  const otherDetails = document.createElement('div');\n  otherDetails.className = 'other-details';\n  const cityName = document.createElement('p');\n  cityName.textContent = `City: ${obj.name}`;\n  const weatherDescription = document.createElement('p');\n  weatherDescription.textContent = `Description: ${obj.weather[0].description}`;\n  const humidity = document.createElement('p');\n  humidity.textContent = `Humidity: ${obj.main.humidity}`;\n  const winspeed = document.createElement('p');\n  winspeed.textContent = `Wind ${obj.wind.speed} MPH`;\n  otherDetails.appendChild(cityName);\n  otherDetails.appendChild(weatherDescription);\n  otherDetails.appendChild(humidity);\n  otherDetails.appendChild(winspeed);\n  currentWeather.appendChild(tempDisplay);\n  currentWeather.appendChild(weatherIcon);\n\n  details.appendChild(currentWeather);\n  details.appendChild(toggleButton);\n  details.appendChild(otherDetails);\n};\nconst detailSection = () => {\n  const details = document.createElement('div');\n  details.className = 'details-section';\n  const dateAndSearchSection = document.createElement('div');\n  dateAndSearchSection.className = 'date-search-section';\n  const date = document.createElement('div');\n  date.className = 'date';\n  date.textContent = new Date().toDateString();\n  const searchContainer = document.createElement('div');\n  searchContainer.className = 'search';\n  const search = document.createElement('input');\n  search.required = 'true';\n  search.setAttribute('type', 'text');\n  search.setAttribute('placeholder', 'Location');\n  searchContainer.appendChild(search);\n  dateAndSearchSection.appendChild(date);\n  dateAndSearchSection.appendChild(searchContainer);\n  details.appendChild(dateAndSearchSection);\n  search.addEventListener('keypress', (e) => {\n    if (e.key === 'Enter') {\n      const detail = document.querySelector('.details-section');\n      if (detail.hasChildNodes()) {\n        while (detail.children[1]) {\n          detail.removeChild(detail.lastChild);\n        }\n        (0,_apirequest__WEBPACK_IMPORTED_MODULE_1__.default)(search.value).then((data) => addDataToPage(data));\n      }\n    }\n  });\n\n  const coordinates = (0,_apirequest__WEBPACK_IMPORTED_MODULE_1__.fetchCoordinates)();\n  // eslint-disable-next-line max-len\n  coordinates.then((data) => (0,_apirequest__WEBPACK_IMPORTED_MODULE_1__.getCurrentLocationWeather)(data.response.coords.latitude, data.response.coords.longitude)\n    .then((weather) => addDataToPage(weather)));\n  const getContentDiv = document.querySelector('#content');\n  getContentDiv.appendChild(details);\n};\nconst imageSection = () => {\n  const imageDiv = document.createElement('div');\n  imageDiv.className = 'image-section';\n  const image = new Image();\n  image.src = _img_sideImage_jpeg__WEBPACK_IMPORTED_MODULE_0__.default;\n  image.className = 'image';\n  imageDiv.appendChild(image);\n  const getContentDiv = document.querySelector('#content');\n  getContentDiv.appendChild(imageDiv);\n};\n\n\n\n//# sourceURL=webpack://WeatherApp/./src/frontend.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _frontend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./frontend */ \"./src/frontend.js\");\n/* harmony import */ var _apirequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apirequest */ \"./src/apirequest.js\");\n\n\n\n\n(0,_frontend__WEBPACK_IMPORTED_MODULE_1__.detailSection)();\n(0,_frontend__WEBPACK_IMPORTED_MODULE_1__.imageSection)();\n(0,_apirequest__WEBPACK_IMPORTED_MODULE_2__.default)('Nairobi');\n\n\n//# sourceURL=webpack://WeatherApp/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;