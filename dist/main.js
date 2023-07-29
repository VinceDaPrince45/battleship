/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.title {
    text-align: center;
    margin-top:1em;
}

.start {
    display:flex;
    flex-direction: column;
    justify-items: center;
    justify-content: center;
    gap:1em;
    height:100vh;
}

.grid {
    display:flex;
    flex-direction: column;
    align-items: center;
    width:auto;
}

.middle {
    display:flex;
    flex-direction: row;
    justify-content: center;
    gap:2em;
    align-items: center;
    align-content: center;
}

.ongoing {
    display:flex;
    flex-direction: column;
    justify-items: center;
    justify-content: center;
    gap:1em;
    height:100vh;
}

.opponent.cell:hover {
    background-color: grey;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,sBAAsB;IACtB,qBAAqB;IACrB,uBAAuB;IACvB,OAAO;IACP,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,sBAAsB;IACtB,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,uBAAuB;IACvB,OAAO;IACP,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,sBAAsB;IACtB,qBAAqB;IACrB,uBAAuB;IACvB,OAAO;IACP,YAAY;AAChB;;AAEA;IACI,sBAAsB;AAC1B","sourcesContent":[".title {\n    text-align: center;\n    margin-top:1em;\n}\n\n.start {\n    display:flex;\n    flex-direction: column;\n    justify-items: center;\n    justify-content: center;\n    gap:1em;\n    height:100vh;\n}\n\n.grid {\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    width:auto;\n}\n\n.middle {\n    display:flex;\n    flex-direction: row;\n    justify-content: center;\n    gap:2em;\n    align-items: center;\n    align-content: center;\n}\n\n.ongoing {\n    display:flex;\n    flex-direction: column;\n    justify-items: center;\n    justify-content: center;\n    gap:1em;\n    height:100vh;\n}\n\n.opponent.cell:hover {\n    background-color: grey;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


class Gameboard {
    constructor() {
        this.board = [];
        if (this.board.length == 0) {
            this.init();
        }
    }

    init() {
        for (let i = 0; i < 100; i++) {
            this.board.push({hasShip:false,isShot:false});
        }
    }

    placeShips(ship) {
        ship.position.every((cell) => this.board[cell].hasShip = ship.name);
    }

    receiveAttack(position) {
        this.board[position].isShot = true;
    }

    checkShot(position) {
        return this.board[position].hasShip;
    }

    checkCollision(locationArray) {
        // if oriented on x axis, it will be adjacent numbers or +1 from each other
        // if oriented on y axis, it will be  the adjacent numbers or +10 from each other
        if (locationArray.every((number) => number >= 0 && number <= 99)) {
            const collisions = [9,19,29,39,49,59,69,79,89]
            // determine first if it is x axis oriented or y axis oriented
            // x axis oriented
            let xAxis = [];
            let firstnum = locationArray[0];
            for (let i=0;i<locationArray.length;i++) {
                xAxis.push(firstnum++);
            }
            if (xAxis.every((cell) => locationArray.includes(cell))) {
                // it is x axis
                // run conditionals for x axis collision and run on
                for (const collision of collisions) {
                    if (locationArray.includes(collision)) {
                        let idx = locationArray.indexOf(collision);
                        if (locationArray[idx] !== locationArray[locationArray.length - 1]) {
                            return false;
                        }
                    }
                }
                // check if ships are within those cells
                if (locationArray.every((position) => this.board[position].hasShip == false)) {
                    return true;
                } else return false;
            }
    
            let yAxis = [];
            firstnum = locationArray[0];
            for (let k=0;k<locationArray.length;k++) {
                yAxis.push(firstnum);
                firstnum += 10;
            }
            if (yAxis.every((cell) => locationArray.includes(cell))) {
                // it is y axis
                // run conditionals for y axis collision and run on
                // check if ships are within those cells
                if (locationArray.every((position) => this.board[position].hasShip == false)) {
                    return true;
                } else return false
            }
        } else return false
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);

/***/ }),

/***/ "./src/gamerunner.js":
/*!***************************!*\
  !*** ./src/gamerunner.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computerBoard: () => (/* binding */ computerBoard),
/* harmony export */   startGame: () => (/* binding */ startGame)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ "./src/ship.js");




const body = document.querySelector('body');
let orientation = 'row';
let locationArray;
let idx = 0;
const ships = [{name:'carrier',length:5},{name:'battleship',length:4},{name:'destroyer',length:3}, {name:'sumbarine',length:3}, {name:'patrol boat',length:2}]

function startGame() {
    const playerOne = new _player__WEBPACK_IMPORTED_MODULE_0__["default"]('Player One');
    const playerTwo = new _player__WEBPACK_IMPORTED_MODULE_0__["default"]('Player Two');
    body.classList.add('start');
    makeStartGrid();
    changeShips();
    placeShips(playerOne,playerTwo);
}

function makeStartGrid() {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    for (let i = 9; i >= 0; i--) {
        // make rows
        const row = document.createElement('div');
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.classList.add('start');
            if (i == 0) {
                cell.setAttribute('id',j.toString());
            } else cell.setAttribute('id',i.toString() + j.toString());
            cell.style.cssText = 'height: 3em; width: 3em; border: 1px solid black';
            row.appendChild(cell);
        }
        row.style.cssText = 'display:flex;flex-direction:row';
        grid.appendChild(row);
    }
    body.appendChild(grid);
}

function changeShips() {
    const name = document.createElement('div');
    name.classList.add('shipname');
    name.style.cssText = 'text-align:center';
    body.appendChild(name);

    const changeOrientation = document.createElement('button');
    changeOrientation.textContent = 'Change orientation';
    changeOrientation.style.cssText = 'margin-left:auto;margin-right:auto';
    body.appendChild(changeOrientation);

    // change orientation
    changeOrientation.addEventListener('click', () => {
        if (orientation == 'row') {
            orientation = 'column';
        } else if (orientation == 'column') orientation = 'row';
    })
}

function placeShips(playerOne,playerTwo) {
    let shipName = ships[idx].name;
    document.querySelector('.shipname').textContent = `Place ${shipName}`;
    document.querySelector('.grid').addEventListener('click', (e) => {
        if (playerOne.gameboard.checkCollision(locationArray)) {
            // initialize ship and add to player container
            for (const number of locationArray) {
                document.getElementById(`${number.toString()}`).style.backgroundColor = 'green';
            }
            let ship = new _ship__WEBPACK_IMPORTED_MODULE_2__["default"](shipName,locationArray.map((cell) => +cell));
            playerOne.ships.push(ship);
            playerOne.gameboard.placeShips(ship);
            if (idx + 1 == ships.length) {
                // run code to play actual game
                // set up computer board
                runGame(playerOne,playerTwo);
            } else {
                shipName = ships[++idx].name;
                document.querySelector('.shipname').textContent = `Place ${shipName}`;
            }
        }
    })

    const cells = document.querySelectorAll('.cell')
    document.querySelector('.grid').addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('cell')) {
            // change all cells to white
            for (const cell of cells) {
                cell.style.backgroundColor = 'white'
            }
            // if there are ships in player gameboard, display chosen boat areas
            if (playerOne.ships.length !== 0) {
                for (const singleShip of playerOne.ships) {
                    singleShip.position.forEach((position) => {
                        document.getElementById(position.toString()).style.backgroundColor = 'green'
                    })
                }
            }
            // look at length of ship
            let lengthShip = ships[idx].length;
            let location = +e.target.getAttribute('id');
            // look at orientation
            locationArray = [];
            if (orientation == 'row') {
                for (let i = location; i < location+lengthShip; i++) {
                    locationArray.push(i);
                }
                if (playerOne.gameboard.checkCollision(locationArray)) {
                    for (const number of locationArray) {
                        document.getElementById(`${number.toString()}`).style.backgroundColor = 'grey';
                    }
                } else {
                    e.target.style.backgroundColor = 'red';
                }
            } else if (orientation == 'column') {
                for (let i = 0;i<lengthShip;i++) {
                    locationArray.push(location);
                    location += 10;
                }
                if (playerOne.gameboard.checkCollision(locationArray)) {
                    // highlight row around it green
                    for (const number of locationArray) {
                        document.getElementById(`${number.toString()}`).style.backgroundColor = 'grey';
                    }
                } else {
                    // highlight red
                    e.target.style.backgroundColor = 'red';
                }
            }
        }
    })

}

function computerBoard(player) {
    idx = 0;
    for (const item of ships) {
        // find position
        let positionArray = [];
        let initialPosition = Math.floor(Math.random() * (99 - 0 + 1) + 0);
        // choose random orientation
        let randomBool = Math. random() > 0.5; 
        // if true, row / if false, column
        if (randomBool) {
            for (let i = initialPosition;i<initialPosition + item.length;i++) {
                positionArray.push(i);
            }
        } else {
            for (let i = 0;i<item.length;i++) {
                positionArray.push(initialPosition);
                initialPosition += 10;
            }
        }
        while (!player.gameboard.checkCollision(positionArray)) {
            positionArray = [];
            initialPosition = Math.floor(Math.random() * (99 - 0 + 1) + 0);
            randomBool = Math. random() > 0.5; 
            if (randomBool) {
                for (let i = initialPosition;i<initialPosition + item.length;i++) {
                    positionArray.push(i);
                }
            } else {
                for (let i = 0;i<item.length;i++) {
                    positionArray.push(initialPosition);
                    initialPosition += 10;
                }
            }
        }
        let ship = new _ship__WEBPACK_IMPORTED_MODULE_2__["default"](item.name,positionArray);
        player.ships.push(ship);
        player.gameboard.placeShips(ship);
    }
}

function runGame(playerOne,playerTwo) {
    body.classList.remove('start')
    clearBody();
    computerBoard(playerTwo);
    createTwoGrids();
    displayOwnShips(playerOne);

    document.querySelector('.secondgrid').addEventListener('click', (e) => {
        attack(e,playerOne,playerTwo);
    })
}

function clearBody() {
    body.removeChild(document.querySelector('.grid'));
    body.removeChild(document.querySelector('.shipname'));
    body.removeChild(document.querySelector('button'));
}

function createTwoGrids() {
    const gridContainer = document.createElement('div');

    const firstGrid = document.createElement('div');
    firstGrid.classList.add('owngrid');
    for (let i = 9; i >= 0; i--) {
        // make rows
        const row = document.createElement('div');
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.classList.add('own');
            if (i == 0) {
                cell.setAttribute('id',j.toString());
            } else cell.setAttribute('id',i.toString() + j.toString());
            cell.style.cssText = 'height: 2.5em; width: 2.5em; border: 1px solid black';
            row.appendChild(cell);
        }
        row.style.cssText = 'display:flex;flex-direction:row';
        firstGrid.appendChild(row);
    }
    gridContainer.appendChild(firstGrid);

    const secondGrid = document.createElement('div');
    secondGrid.classList.add('secondgrid');
    for (let i = 9; i >= 0; i--) {
        // make rows
        const row = document.createElement('div');
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.classList.add('opponent');
            if (i == 0) {
                cell.setAttribute('id',j.toString());
            } else cell.setAttribute('id',i.toString() + j.toString());
            cell.style.cssText = 'height: 2.5em; width: 2.5em; border: 1px solid black';
            row.appendChild(cell);
        }
        row.style.cssText = 'display:flex;flex-direction:row';
        secondGrid.appendChild(row);
    }
    gridContainer.appendChild(secondGrid);

    gridContainer.classList.add('middle');
    
    const status = document.createElement('div');
    status.classList.add('status');
    status.style.textAlign = 'center'

    body.classList.add('ongoing');
    body.append(gridContainer,status);

}

function displayOwnShips(player) {
    let playerBoard = player.gameboard.board;
    for (const position of playerBoard) {
        let index = playerBoard.indexOf(position);
        if (position.hasShip !== false) {
            document.getElementById(index.toString()).style.backgroundColor = 'green';
        }
    }
}

function attack(e,firstPlayer,secondPlayer) {
    let position = e.target.getAttribute('id');
    if (secondPlayer.receiveShot(position)) {
        secondPlayer.gameboard.receiveAttack(position);
        if (secondPlayer.gameboard.checkShot(position)) {
            e.target.style.backgroundColor = 'green';
            document.querySelector('.status').textContent = 'hit a ship';
        } else {
            e.target.style.backgroundColor = 'red';
            document.querySelector('.status').textContent = 'hit nothing';
        }
    } else {
        document.querySelector('.status').textContent = 'already hit'
    }
}

function checkWinner() {

}



/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");


class Player {
    constructor(name) {
        this.name = name;
        this.ships = [];
        this.gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }

    receiveShot(location) {
        if (this.gameboard.board[location].isShot == false) {
            return true;
        } else return false;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


class Ship {
  constructor(name,position) {
      this.name = name; // string
      this.position = position; // array of positions
      this.hits = []; // counter for hits
      this.sunk = false;
  }

  hit(location) {
      this.hits.push(location);
      this.isSunk();
  }

  isSunk() {
    if (this.position.every((cell) => this.hits.includes(cell))) {
        this.sunk = true;
    }
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gamerunner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gamerunner */ "./src/gamerunner.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



(0,_gamerunner__WEBPACK_IMPORTED_MODULE_0__.startGame)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUVBQWUsTUFBTTs7Ozs7Ozs7Ozs7Ozs7OztBQ2RyQjtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLGdDQUFnQztBQUNoQyxzQkFBc0I7QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlFQUFlLElBQUk7Ozs7OztVQ3ZCbkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBeUM7QUFDckI7O0FBRXBCLHNEQUFTLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZXJ1bm5lci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDoxZW07XG59XG5cbi5zdGFydCB7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDoxZW07XG4gICAgaGVpZ2h0OjEwMHZoO1xufVxuXG4uZ3JpZCB7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDphdXRvO1xufVxuXG4ubWlkZGxlIHtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6MmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4ub25nb2luZyB7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDoxZW07XG4gICAgaGVpZ2h0OjEwMHZoO1xufVxuXG4ub3Bwb25lbnQuY2VsbDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixPQUFPO0lBQ1AsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLE9BQU87SUFDUCxtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLE9BQU87SUFDUCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi50aXRsZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDoxZW07XFxufVxcblxcbi5zdGFydCB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOjFlbTtcXG4gICAgaGVpZ2h0OjEwMHZoO1xcbn1cXG5cXG4uZ3JpZCB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6YXV0bztcXG59XFxuXFxuLm1pZGRsZSB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDoyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm9uZ29pbmcge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDoxZW07XFxuICAgIGhlaWdodDoxMDB2aDtcXG59XFxuXFxuLm9wcG9uZW50LmNlbGw6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXG5cbmNsYXNzIEdhbWVib2FyZCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBbXTtcbiAgICAgICAgaWYgKHRoaXMuYm9hcmQubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5ib2FyZC5wdXNoKHtoYXNTaGlwOmZhbHNlLGlzU2hvdDpmYWxzZX0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGxhY2VTaGlwcyhzaGlwKSB7XG4gICAgICAgIHNoaXAucG9zaXRpb24uZXZlcnkoKGNlbGwpID0+IHRoaXMuYm9hcmRbY2VsbF0uaGFzU2hpcCA9IHNoaXAubmFtZSk7XG4gICAgfVxuXG4gICAgcmVjZWl2ZUF0dGFjayhwb3NpdGlvbikge1xuICAgICAgICB0aGlzLmJvYXJkW3Bvc2l0aW9uXS5pc1Nob3QgPSB0cnVlO1xuICAgIH1cblxuICAgIGNoZWNrU2hvdChwb3NpdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZFtwb3NpdGlvbl0uaGFzU2hpcDtcbiAgICB9XG5cbiAgICBjaGVja0NvbGxpc2lvbihsb2NhdGlvbkFycmF5KSB7XG4gICAgICAgIC8vIGlmIG9yaWVudGVkIG9uIHggYXhpcywgaXQgd2lsbCBiZSBhZGphY2VudCBudW1iZXJzIG9yICsxIGZyb20gZWFjaCBvdGhlclxuICAgICAgICAvLyBpZiBvcmllbnRlZCBvbiB5IGF4aXMsIGl0IHdpbGwgYmUgIHRoZSBhZGphY2VudCBudW1iZXJzIG9yICsxMCBmcm9tIGVhY2ggb3RoZXJcbiAgICAgICAgaWYgKGxvY2F0aW9uQXJyYXkuZXZlcnkoKG51bWJlcikgPT4gbnVtYmVyID49IDAgJiYgbnVtYmVyIDw9IDk5KSkge1xuICAgICAgICAgICAgY29uc3QgY29sbGlzaW9ucyA9IFs5LDE5LDI5LDM5LDQ5LDU5LDY5LDc5LDg5XVxuICAgICAgICAgICAgLy8gZGV0ZXJtaW5lIGZpcnN0IGlmIGl0IGlzIHggYXhpcyBvcmllbnRlZCBvciB5IGF4aXMgb3JpZW50ZWRcbiAgICAgICAgICAgIC8vIHggYXhpcyBvcmllbnRlZFxuICAgICAgICAgICAgbGV0IHhBeGlzID0gW107XG4gICAgICAgICAgICBsZXQgZmlyc3RudW0gPSBsb2NhdGlvbkFycmF5WzBdO1xuICAgICAgICAgICAgZm9yIChsZXQgaT0wO2k8bG9jYXRpb25BcnJheS5sZW5ndGg7aSsrKSB7XG4gICAgICAgICAgICAgICAgeEF4aXMucHVzaChmaXJzdG51bSsrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh4QXhpcy5ldmVyeSgoY2VsbCkgPT4gbG9jYXRpb25BcnJheS5pbmNsdWRlcyhjZWxsKSkpIHtcbiAgICAgICAgICAgICAgICAvLyBpdCBpcyB4IGF4aXNcbiAgICAgICAgICAgICAgICAvLyBydW4gY29uZGl0aW9uYWxzIGZvciB4IGF4aXMgY29sbGlzaW9uIGFuZCBydW4gb25cbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGNvbGxpc2lvbiBvZiBjb2xsaXNpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbkFycmF5LmluY2x1ZGVzKGNvbGxpc2lvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpZHggPSBsb2NhdGlvbkFycmF5LmluZGV4T2YoY29sbGlzaW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbkFycmF5W2lkeF0gIT09IGxvY2F0aW9uQXJyYXlbbG9jYXRpb25BcnJheS5sZW5ndGggLSAxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBzaGlwcyBhcmUgd2l0aGluIHRob3NlIGNlbGxzXG4gICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9uQXJyYXkuZXZlcnkoKHBvc2l0aW9uKSA9PiB0aGlzLmJvYXJkW3Bvc2l0aW9uXS5oYXNTaGlwID09IGZhbHNlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgbGV0IHlBeGlzID0gW107XG4gICAgICAgICAgICBmaXJzdG51bSA9IGxvY2F0aW9uQXJyYXlbMF07XG4gICAgICAgICAgICBmb3IgKGxldCBrPTA7azxsb2NhdGlvbkFycmF5Lmxlbmd0aDtrKyspIHtcbiAgICAgICAgICAgICAgICB5QXhpcy5wdXNoKGZpcnN0bnVtKTtcbiAgICAgICAgICAgICAgICBmaXJzdG51bSArPSAxMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh5QXhpcy5ldmVyeSgoY2VsbCkgPT4gbG9jYXRpb25BcnJheS5pbmNsdWRlcyhjZWxsKSkpIHtcbiAgICAgICAgICAgICAgICAvLyBpdCBpcyB5IGF4aXNcbiAgICAgICAgICAgICAgICAvLyBydW4gY29uZGl0aW9uYWxzIGZvciB5IGF4aXMgY29sbGlzaW9uIGFuZCBydW4gb25cbiAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBzaGlwcyBhcmUgd2l0aGluIHRob3NlIGNlbGxzXG4gICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9uQXJyYXkuZXZlcnkoKHBvc2l0aW9uKSA9PiB0aGlzLmJvYXJkW3Bvc2l0aW9uXS5oYXNTaGlwID09IGZhbHNlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSByZXR1cm4gZmFsc2VcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDsiLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZCc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xubGV0IG9yaWVudGF0aW9uID0gJ3Jvdyc7XG5sZXQgbG9jYXRpb25BcnJheTtcbmxldCBpZHggPSAwO1xuY29uc3Qgc2hpcHMgPSBbe25hbWU6J2NhcnJpZXInLGxlbmd0aDo1fSx7bmFtZTonYmF0dGxlc2hpcCcsbGVuZ3RoOjR9LHtuYW1lOidkZXN0cm95ZXInLGxlbmd0aDozfSwge25hbWU6J3N1bWJhcmluZScsbGVuZ3RoOjN9LCB7bmFtZToncGF0cm9sIGJvYXQnLGxlbmd0aDoyfV1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgICBjb25zdCBwbGF5ZXJPbmUgPSBuZXcgUGxheWVyKCdQbGF5ZXIgT25lJyk7XG4gICAgY29uc3QgcGxheWVyVHdvID0gbmV3IFBsYXllcignUGxheWVyIFR3bycpO1xuICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnc3RhcnQnKTtcbiAgICBtYWtlU3RhcnRHcmlkKCk7XG4gICAgY2hhbmdlU2hpcHMoKTtcbiAgICBwbGFjZVNoaXBzKHBsYXllck9uZSxwbGF5ZXJUd28pO1xufVxuXG5mdW5jdGlvbiBtYWtlU3RhcnRHcmlkKCkge1xuICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2dyaWQnKTtcbiAgICBmb3IgKGxldCBpID0gOTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgLy8gbWFrZSByb3dzXG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzdGFydCcpO1xuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdpZCcsai50b1N0cmluZygpKTtcbiAgICAgICAgICAgIH0gZWxzZSBjZWxsLnNldEF0dHJpYnV0ZSgnaWQnLGkudG9TdHJpbmcoKSArIGoudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICBjZWxsLnN0eWxlLmNzc1RleHQgPSAnaGVpZ2h0OiAzZW07IHdpZHRoOiAzZW07IGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrJztcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgICAgfVxuICAgICAgICByb3cuc3R5bGUuY3NzVGV4dCA9ICdkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93JztcbiAgICAgICAgZ3JpZC5hcHBlbmRDaGlsZChyb3cpO1xuICAgIH1cbiAgICBib2R5LmFwcGVuZENoaWxkKGdyaWQpO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VTaGlwcygpIHtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmFtZS5jbGFzc0xpc3QuYWRkKCdzaGlwbmFtZScpO1xuICAgIG5hbWUuc3R5bGUuY3NzVGV4dCA9ICd0ZXh0LWFsaWduOmNlbnRlcic7XG4gICAgYm9keS5hcHBlbmRDaGlsZChuYW1lKTtcblxuICAgIGNvbnN0IGNoYW5nZU9yaWVudGF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2hhbmdlT3JpZW50YXRpb24udGV4dENvbnRlbnQgPSAnQ2hhbmdlIG9yaWVudGF0aW9uJztcbiAgICBjaGFuZ2VPcmllbnRhdGlvbi5zdHlsZS5jc3NUZXh0ID0gJ21hcmdpbi1sZWZ0OmF1dG87bWFyZ2luLXJpZ2h0OmF1dG8nO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY2hhbmdlT3JpZW50YXRpb24pO1xuXG4gICAgLy8gY2hhbmdlIG9yaWVudGF0aW9uXG4gICAgY2hhbmdlT3JpZW50YXRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChvcmllbnRhdGlvbiA9PSAncm93Jykge1xuICAgICAgICAgICAgb3JpZW50YXRpb24gPSAnY29sdW1uJztcbiAgICAgICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PSAnY29sdW1uJykgb3JpZW50YXRpb24gPSAncm93JztcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBwbGFjZVNoaXBzKHBsYXllck9uZSxwbGF5ZXJUd28pIHtcbiAgICBsZXQgc2hpcE5hbWUgPSBzaGlwc1tpZHhdLm5hbWU7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXBuYW1lJykudGV4dENvbnRlbnQgPSBgUGxhY2UgJHtzaGlwTmFtZX1gO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAocGxheWVyT25lLmdhbWVib2FyZC5jaGVja0NvbGxpc2lvbihsb2NhdGlvbkFycmF5KSkge1xuICAgICAgICAgICAgLy8gaW5pdGlhbGl6ZSBzaGlwIGFuZCBhZGQgdG8gcGxheWVyIGNvbnRhaW5lclxuICAgICAgICAgICAgZm9yIChjb25zdCBudW1iZXIgb2YgbG9jYXRpb25BcnJheSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke251bWJlci50b1N0cmluZygpfWApLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgc2hpcCA9IG5ldyBTaGlwKHNoaXBOYW1lLGxvY2F0aW9uQXJyYXkubWFwKChjZWxsKSA9PiArY2VsbCkpO1xuICAgICAgICAgICAgcGxheWVyT25lLnNoaXBzLnB1c2goc2hpcCk7XG4gICAgICAgICAgICBwbGF5ZXJPbmUuZ2FtZWJvYXJkLnBsYWNlU2hpcHMoc2hpcCk7XG4gICAgICAgICAgICBpZiAoaWR4ICsgMSA9PSBzaGlwcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAvLyBydW4gY29kZSB0byBwbGF5IGFjdHVhbCBnYW1lXG4gICAgICAgICAgICAgICAgLy8gc2V0IHVwIGNvbXB1dGVyIGJvYXJkXG4gICAgICAgICAgICAgICAgcnVuR2FtZShwbGF5ZXJPbmUscGxheWVyVHdvKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2hpcE5hbWUgPSBzaGlwc1srK2lkeF0ubmFtZTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcG5hbWUnKS50ZXh0Q29udGVudCA9IGBQbGFjZSAke3NoaXBOYW1lfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyaWQnKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjZWxsJykpIHtcbiAgICAgICAgICAgIC8vIGNoYW5nZSBhbGwgY2VsbHMgdG8gd2hpdGVcbiAgICAgICAgICAgIGZvciAoY29uc3QgY2VsbCBvZiBjZWxscykge1xuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYgdGhlcmUgYXJlIHNoaXBzIGluIHBsYXllciBnYW1lYm9hcmQsIGRpc3BsYXkgY2hvc2VuIGJvYXQgYXJlYXNcbiAgICAgICAgICAgIGlmIChwbGF5ZXJPbmUuc2hpcHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBzaW5nbGVTaGlwIG9mIHBsYXllck9uZS5zaGlwcykge1xuICAgICAgICAgICAgICAgICAgICBzaW5nbGVTaGlwLnBvc2l0aW9uLmZvckVhY2goKHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwb3NpdGlvbi50b1N0cmluZygpKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbG9vayBhdCBsZW5ndGggb2Ygc2hpcFxuICAgICAgICAgICAgbGV0IGxlbmd0aFNoaXAgPSBzaGlwc1tpZHhdLmxlbmd0aDtcbiAgICAgICAgICAgIGxldCBsb2NhdGlvbiA9ICtlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgICAgICAvLyBsb29rIGF0IG9yaWVudGF0aW9uXG4gICAgICAgICAgICBsb2NhdGlvbkFycmF5ID0gW107XG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT0gJ3JvdycpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gbG9jYXRpb247IGkgPCBsb2NhdGlvbitsZW5ndGhTaGlwOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25BcnJheS5wdXNoKGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocGxheWVyT25lLmdhbWVib2FyZC5jaGVja0NvbGxpc2lvbihsb2NhdGlvbkFycmF5KSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG51bWJlciBvZiBsb2NhdGlvbkFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtudW1iZXIudG9TdHJpbmcoKX1gKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JleSc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09ICdjb2x1bW4nKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7aTxsZW5ndGhTaGlwO2krKykge1xuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbkFycmF5LnB1c2gobG9jYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbiArPSAxMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHBsYXllck9uZS5nYW1lYm9hcmQuY2hlY2tDb2xsaXNpb24obG9jYXRpb25BcnJheSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaGlnaGxpZ2h0IHJvdyBhcm91bmQgaXQgZ3JlZW5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBudW1iZXIgb2YgbG9jYXRpb25BcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7bnVtYmVyLnRvU3RyaW5nKCl9YCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZXknO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaGlnaGxpZ2h0IHJlZFxuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlckJvYXJkKHBsYXllcikge1xuICAgIGlkeCA9IDA7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHNoaXBzKSB7XG4gICAgICAgIC8vIGZpbmQgcG9zaXRpb25cbiAgICAgICAgbGV0IHBvc2l0aW9uQXJyYXkgPSBbXTtcbiAgICAgICAgbGV0IGluaXRpYWxQb3NpdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg5OSAtIDAgKyAxKSArIDApO1xuICAgICAgICAvLyBjaG9vc2UgcmFuZG9tIG9yaWVudGF0aW9uXG4gICAgICAgIGxldCByYW5kb21Cb29sID0gTWF0aC4gcmFuZG9tKCkgPiAwLjU7IFxuICAgICAgICAvLyBpZiB0cnVlLCByb3cgLyBpZiBmYWxzZSwgY29sdW1uXG4gICAgICAgIGlmIChyYW5kb21Cb29sKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gaW5pdGlhbFBvc2l0aW9uO2k8aW5pdGlhbFBvc2l0aW9uICsgaXRlbS5sZW5ndGg7aSsrKSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb25BcnJheS5wdXNoKGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7aTxpdGVtLmxlbmd0aDtpKyspIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbkFycmF5LnB1c2goaW5pdGlhbFBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICBpbml0aWFsUG9zaXRpb24gKz0gMTA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKCFwbGF5ZXIuZ2FtZWJvYXJkLmNoZWNrQ29sbGlzaW9uKHBvc2l0aW9uQXJyYXkpKSB7XG4gICAgICAgICAgICBwb3NpdGlvbkFycmF5ID0gW107XG4gICAgICAgICAgICBpbml0aWFsUG9zaXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoOTkgLSAwICsgMSkgKyAwKTtcbiAgICAgICAgICAgIHJhbmRvbUJvb2wgPSBNYXRoLiByYW5kb20oKSA+IDAuNTsgXG4gICAgICAgICAgICBpZiAocmFuZG9tQm9vbCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBpbml0aWFsUG9zaXRpb247aTxpbml0aWFsUG9zaXRpb24gKyBpdGVtLmxlbmd0aDtpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25BcnJheS5wdXNoKGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7aTxpdGVtLmxlbmd0aDtpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25BcnJheS5wdXNoKGluaXRpYWxQb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxQb3NpdGlvbiArPSAxMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNoaXAgPSBuZXcgU2hpcChpdGVtLm5hbWUscG9zaXRpb25BcnJheSk7XG4gICAgICAgIHBsYXllci5zaGlwcy5wdXNoKHNoaXApO1xuICAgICAgICBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcHMoc2hpcCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBydW5HYW1lKHBsYXllck9uZSxwbGF5ZXJUd28pIHtcbiAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXJ0JylcbiAgICBjbGVhckJvZHkoKTtcbiAgICBjb21wdXRlckJvYXJkKHBsYXllclR3byk7XG4gICAgY3JlYXRlVHdvR3JpZHMoKTtcbiAgICBkaXNwbGF5T3duU2hpcHMocGxheWVyT25lKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWNvbmRncmlkJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBhdHRhY2soZSxwbGF5ZXJPbmUscGxheWVyVHdvKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBjbGVhckJvZHkoKSB7XG4gICAgYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JpZCcpKTtcbiAgICBib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwbmFtZScpKTtcbiAgICBib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVHdvR3JpZHMoKSB7XG4gICAgY29uc3QgZ3JpZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgZmlyc3RHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZmlyc3RHcmlkLmNsYXNzTGlzdC5hZGQoJ293bmdyaWQnKTtcbiAgICBmb3IgKGxldCBpID0gOTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgLy8gbWFrZSByb3dzXG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdvd24nKTtcbiAgICAgICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnaWQnLGoudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICB9IGVsc2UgY2VsbC5zZXRBdHRyaWJ1dGUoJ2lkJyxpLnRvU3RyaW5nKCkgKyBqLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgY2VsbC5zdHlsZS5jc3NUZXh0ID0gJ2hlaWdodDogMi41ZW07IHdpZHRoOiAyLjVlbTsgYm9yZGVyOiAxcHggc29saWQgYmxhY2snO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgICB9XG4gICAgICAgIHJvdy5zdHlsZS5jc3NUZXh0ID0gJ2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3cnO1xuICAgICAgICBmaXJzdEdyaWQuYXBwZW5kQ2hpbGQocm93KTtcbiAgICB9XG4gICAgZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChmaXJzdEdyaWQpO1xuXG4gICAgY29uc3Qgc2Vjb25kR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlY29uZEdyaWQuY2xhc3NMaXN0LmFkZCgnc2Vjb25kZ3JpZCcpO1xuICAgIGZvciAobGV0IGkgPSA5OyBpID49IDA7IGktLSkge1xuICAgICAgICAvLyBtYWtlIHJvd3NcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ29wcG9uZW50Jyk7XG4gICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2lkJyxqLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgfSBlbHNlIGNlbGwuc2V0QXR0cmlidXRlKCdpZCcsaS50b1N0cmluZygpICsgai50b1N0cmluZygpKTtcbiAgICAgICAgICAgIGNlbGwuc3R5bGUuY3NzVGV4dCA9ICdoZWlnaHQ6IDIuNWVtOyB3aWR0aDogMi41ZW07IGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrJztcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgICAgfVxuICAgICAgICByb3cuc3R5bGUuY3NzVGV4dCA9ICdkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93JztcbiAgICAgICAgc2Vjb25kR3JpZC5hcHBlbmRDaGlsZChyb3cpO1xuICAgIH1cbiAgICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlY29uZEdyaWQpO1xuXG4gICAgZ3JpZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtaWRkbGUnKTtcbiAgICBcbiAgICBjb25zdCBzdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdGF0dXMuY2xhc3NMaXN0LmFkZCgnc3RhdHVzJyk7XG4gICAgc3RhdHVzLnN0eWxlLnRleHRBbGlnbiA9ICdjZW50ZXInXG5cbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ29uZ29pbmcnKTtcbiAgICBib2R5LmFwcGVuZChncmlkQ29udGFpbmVyLHN0YXR1cyk7XG5cbn1cblxuZnVuY3Rpb24gZGlzcGxheU93blNoaXBzKHBsYXllcikge1xuICAgIGxldCBwbGF5ZXJCb2FyZCA9IHBsYXllci5nYW1lYm9hcmQuYm9hcmQ7XG4gICAgZm9yIChjb25zdCBwb3NpdGlvbiBvZiBwbGF5ZXJCb2FyZCkge1xuICAgICAgICBsZXQgaW5kZXggPSBwbGF5ZXJCb2FyZC5pbmRleE9mKHBvc2l0aW9uKTtcbiAgICAgICAgaWYgKHBvc2l0aW9uLmhhc1NoaXAgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbmRleC50b1N0cmluZygpKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBhdHRhY2soZSxmaXJzdFBsYXllcixzZWNvbmRQbGF5ZXIpIHtcbiAgICBsZXQgcG9zaXRpb24gPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgaWYgKHNlY29uZFBsYXllci5yZWNlaXZlU2hvdChwb3NpdGlvbikpIHtcbiAgICAgICAgc2Vjb25kUGxheWVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHBvc2l0aW9uKTtcbiAgICAgICAgaWYgKHNlY29uZFBsYXllci5nYW1lYm9hcmQuY2hlY2tTaG90KHBvc2l0aW9uKSkge1xuICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJztcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0dXMnKS50ZXh0Q29udGVudCA9ICdoaXQgYSBzaGlwJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXR1cycpLnRleHRDb250ZW50ID0gJ2hpdCBub3RoaW5nJztcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0dXMnKS50ZXh0Q29udGVudCA9ICdhbHJlYWR5IGhpdCdcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrV2lubmVyKCkge1xuXG59XG5cbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5cbmNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnNoaXBzID0gW107XG4gICAgICAgIHRoaXMuZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIH1cblxuICAgIHJlY2VpdmVTaG90KGxvY2F0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLmdhbWVib2FyZC5ib2FyZFtsb2NhdGlvbl0uaXNTaG90ID09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjsiLCJcblxuY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUscG9zaXRpb24pIHtcbiAgICAgIHRoaXMubmFtZSA9IG5hbWU7IC8vIHN0cmluZ1xuICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uOyAvLyBhcnJheSBvZiBwb3NpdGlvbnNcbiAgICAgIHRoaXMuaGl0cyA9IFtdOyAvLyBjb3VudGVyIGZvciBoaXRzXG4gICAgICB0aGlzLnN1bmsgPSBmYWxzZTtcbiAgfVxuXG4gIGhpdChsb2NhdGlvbikge1xuICAgICAgdGhpcy5oaXRzLnB1c2gobG9jYXRpb24pO1xuICAgICAgdGhpcy5pc1N1bmsoKTtcbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICBpZiAodGhpcy5wb3NpdGlvbi5ldmVyeSgoY2VsbCkgPT4gdGhpcy5oaXRzLmluY2x1ZGVzKGNlbGwpKSkge1xuICAgICAgICB0aGlzLnN1bmsgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgc3RhcnRHYW1lIH0gZnJvbSBcIi4vZ2FtZXJ1bm5lclwiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcydcblxuc3RhcnRHYW1lKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9