"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Consumer_IndexPage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Consumer/IndexPage.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Consumer/IndexPage.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'IndexPage',
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var columns = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([{
      label: "#",
      name: "id",
      field: "id",
      sortable: true
    }, {
      label: "First name",
      name: "first_name",
      field: "first_name",
      sortable: true
    }, {
      label: "Last Name",
      name: "last_name",
      field: "last_name",
      sortable: true
    }, {
      label: 'Created',
      field: 'created_at',
      sortable: true,
      align: 'left',
      format: function format(val, row) {
        return moment(val).format("MMMM DD, YYYY (h:mm a)");
      }
    }, {
      label: 'Updated',
      field: 'updated_at',
      sortable: true,
      align: 'left',
      format: function format(val, row) {
        return moment(val).format("MMMM DD, YYYY (h:mm a)");
      }
    }]);
    var rows = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var filter = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var loading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var pagination = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
      sortBy: "id",
      descending: true,
      page: 1,
      rowsPerPage: 10,
      rowsNumber: 10
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      onRequest({
        pagination: pagination.value,
        filter: null
      });
    });

    //  Server Request
    function onRequest(_x) {
      return _onRequest.apply(this, arguments);
    }
    function _onRequest() {
      _onRequest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(props) {
        var _props$pagination, page, rowsPerPage, sortBy, descending, filter, fetchCount, params, _rows$value, _yield$axios$get, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _props$pagination = props.pagination, page = _props$pagination.page, rowsPerPage = _props$pagination.rowsPerPage, sortBy = _props$pagination.sortBy, descending = _props$pagination.descending;
              filter = props.filter; //  Search bar value
              loading.value = true;

              // get all rows if "All" (0) is selected
              fetchCount = rowsPerPage === 0 ? pagination.value.rowsNumber : rowsPerPage;
              params = {
                filter: filter,
                limit: fetchCount == 1 ? -1 : fetchCount,
                sortBy: sortBy,
                orderBy: descending ? "desc" : "asc",
                page: page,
                per_page: rowsPerPage
              };
              _context.prev = 5;
              _context.next = 8;
              return axios.get("/api/consumers");
            case 8:
              _yield$axios$get = _context.sent;
              data = _yield$axios$get.data;
              console.log(data);
              pagination.value.rowsNumber = data.total;

              // clear out existing data and add new
              (_rows$value = rows.value).splice.apply(_rows$value, [0, rows.value.length].concat(_toConsumableArray(data.data)));

              // don't forget to update local pagination object
              pagination.value.page = page;
              pagination.value.rowsPerPage = rowsPerPage;
              pagination.value.sortBy = sortBy;
              pagination.value.descending = descending;
              _context.next = 23;
              break;
            case 19:
              _context.prev = 19;
              _context.t0 = _context["catch"](5);
              $q.notify({
                color: 'negative',
                message: _context.t0.response.statusText,
                icon: 'report_problem',
                position: 'bottom-right'
              });
              loading.value = false;
            case 23:
              // ...and turn of loading indicator
              loading.value = false;
            case 24:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[5, 19]]);
      }));
      return _onRequest.apply(this, arguments);
    }
    var __returned__ = {
      columns: columns,
      rows: rows,
      filter: filter,
      loading: loading,
      pagination: pagination,
      onRequest: onRequest,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Consumer/IndexPage.vue?vue&type=template&id=0dbd7e5e":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Consumer/IndexPage.vue?vue&type=template&id=0dbd7e5e ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "col-auto"
};
var _hoisted_2 = {
  "class": "q-gutter-md",
  style: {
    "font-size": "2em"
  }
};
var _hoisted_3 = {
  "class": "q-gutter-md",
  style: {
    "font-size": "2em"
  }
};
var _hoisted_4 = {
  "class": "row justify-end q-gutter-sm"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_q_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-icon");
  var _component_q_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-input");
  var _component_q_btn = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-btn");
  var _component_q_tooltip = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-tooltip");
  var _component_q_td = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-td");
  var _component_q_item_label = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-item-label");
  var _component_q_item_section = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-item-section");
  var _component_q_item = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-item");
  var _component_q_list = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-list");
  var _component_q_btn_dropdown = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-btn-dropdown");
  var _component_q_inner_loading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-inner-loading");
  var _component_q_table = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-table");
  var _component_q_page = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-page");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_q_page, {
    padding: "",
    "class": "bg-grey-2"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Table "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_table, {
        dark: _ctx.$q.dark.isActive,
        flat: "",
        bordered: "",
        "binary-state-sort": "",
        title: "Consumers",
        "row-key": "id",
        pagination: $setup.pagination,
        "onUpdate:pagination": _cache[1] || (_cache[1] = function ($event) {
          return $setup.pagination = $event;
        }),
        rows: $setup.rows,
        columns: $setup.columns,
        loading: $setup.loading,
        filter: $setup.filter,
        onRequest: $setup.onRequest,
        "rows-per-page-options": [20, 40, 60, 80, 100, 150, 200, 250, 300]
      }, {
        "top-right": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (props) {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_input, {
            outlined: "",
            dense: "",
            ref: "search",
            debounce: "300",
            modelValue: $setup.filter,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
              return $setup.filter = $event;
            }),
            placeholder: "Search",
            "class": "q-ma-xs"
          }, {
            append: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_icon, {
                name: "search"
              })];
            }),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <q-btn\n                        round\n                        size=\"md\"\n                        icon=\"event\"\n                        class=\"q-ml-sm\"\n                        color=\"primary\">\n                        <q-menu ref=\"qDateMenu\" anchor=\"bottom start\" self=\"top left\">\n                            <q-date\n                                range\n                                v-model=\"dateRange.ref\"\n                                @range-end=\"onDateSelect\">\n                            </q-date>\n                        </q-menu>\n                    </q-btn> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_btn, {
            round: "",
            size: "md",
            color: "primary",
            "class": "q-ml-sm",
            icon: "add",
            to: "/consumers/create"
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_btn, {
            flat: "",
            round: "",
            size: "md",
            "class": "q-ml-sm",
            color: "grey-5",
            icon: props.inFullscreen ? 'fullscreen_exit' : 'fullscreen',
            onClick: props.toggleFullscreen
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_tooltip, null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Toggle Fullscreen")];
                }),
                _: 1 /* STABLE */
              })];
            }),

            _: 2 /* DYNAMIC */
          }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["icon", "onClick"])];
        }),
        "body-cell-invoice": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (props) {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_td, {
            props: props
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [props.row.xero_invoice_id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_q_icon, {
                key: 0,
                name: "check_circle",
                color: "positive"
              })) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_q_icon, {
                key: 1,
                name: "warning",
                color: "negative"
              }))])];
            }),
            _: 2 /* DYNAMIC */
          }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["props"])];
        }),
        "body-cell-payment": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (props) {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_td, {
            props: props
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [props.row.payment ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_q_icon, {
                key: 0,
                name: "check_circle",
                color: "positive"
              })) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_q_icon, {
                key: 1,
                name: "warning",
                color: "negative"
              }))])];
            }),
            _: 2 /* DYNAMIC */
          }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["props"])];
        }),
        "body-cell-action": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (props) {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_td, {
            props: props
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_btn_dropdown, {
                flat: "",
                rounded: "",
                color: "primary",
                "dropdown-icon": "more_vert",
                "class": "card-action"
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_list, null, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_item, {
                        clickable: "",
                        onClick: function onClick($event) {
                          return _ctx.onView(props);
                        }
                      }, {
                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_item_section, null, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_item_label, null, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("View")];
                                }),
                                _: 1 /* STABLE */
                              })];
                            }),

                            _: 1 /* STABLE */
                          })];
                        }),

                        _: 2 /* DYNAMIC */
                      }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onClick"]), !props.row.xero_invoice_id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_q_item, {
                        key: 0,
                        clickable: ""
                      }, {
                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_item_section, null, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_item_label, null, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Generate Invoice")];
                                }),
                                _: 1 /* STABLE */
                              })];
                            }),

                            _: 1 /* STABLE */
                          })];
                        }),

                        _: 1 /* STABLE */
                      })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_item, {
                        clickable: ""
                      }, {
                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_item_section, null, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_item_label, null, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Resend Email")];
                                }),
                                _: 1 /* STABLE */
                              })];
                            }),

                            _: 1 /* STABLE */
                          })];
                        }),

                        _: 1 /* STABLE */
                      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_item, {
                        clickable: "",
                        onClick: function onClick($event) {
                          return _ctx.mailTo(props.row);
                        }
                      }, {
                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_item_section, null, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_item_label, null, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Email")];
                                }),
                                _: 1 /* STABLE */
                              })];
                            }),

                            _: 1 /* STABLE */
                          })];
                        }),

                        _: 2 /* DYNAMIC */
                      }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onClick"])];
                    }),
                    _: 2 /* DYNAMIC */
                  }, 1024 /* DYNAMIC_SLOTS */)];
                }),

                _: 2 /* DYNAMIC */
              }, 1024 /* DYNAMIC_SLOTS */)])];
            }),

            _: 2 /* DYNAMIC */
          }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["props"])];
        }),
        loading: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_inner_loading, {
            showing: "",
            color: "primary"
          })];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["dark", "pagination", "rows", "columns", "loading", "filter"])])];
    }),
    _: 1 /* STABLE */
  });
}

/***/ }),

/***/ "./resources/js/pages/Consumer/IndexPage.vue":
/*!***************************************************!*\
  !*** ./resources/js/pages/Consumer/IndexPage.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IndexPage_vue_vue_type_template_id_0dbd7e5e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexPage.vue?vue&type=template&id=0dbd7e5e */ "./resources/js/pages/Consumer/IndexPage.vue?vue&type=template&id=0dbd7e5e");
/* harmony import */ var _IndexPage_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexPage.vue?vue&type=script&setup=true&lang=js */ "./resources/js/pages/Consumer/IndexPage.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var D_laragon_6_www_laravel_quasar_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_laragon_6_www_laravel_quasar_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_IndexPage_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_IndexPage_vue_vue_type_template_id_0dbd7e5e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/pages/Consumer/IndexPage.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/Consumer/IndexPage.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/pages/Consumer/IndexPage.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexPage_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexPage_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./IndexPage.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Consumer/IndexPage.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/Consumer/IndexPage.vue?vue&type=template&id=0dbd7e5e":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/Consumer/IndexPage.vue?vue&type=template&id=0dbd7e5e ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexPage_vue_vue_type_template_id_0dbd7e5e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexPage_vue_vue_type_template_id_0dbd7e5e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./IndexPage.vue?vue&type=template&id=0dbd7e5e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Consumer/IndexPage.vue?vue&type=template&id=0dbd7e5e");


/***/ })

}]);