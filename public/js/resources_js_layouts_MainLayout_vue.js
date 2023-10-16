"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_layouts_MainLayout_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/MainLayout.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/MainLayout.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'components/EssentialLink.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


var linksList = [{
  title: 'Docs',
  caption: 'quasar.dev',
  icon: 'school',
  link: 'https://quasar.dev'
}, {
  title: 'Github',
  caption: 'github.com/quasarframework',
  icon: 'code',
  link: 'https://github.com/quasarframework'
}, {
  title: 'Discord Chat Channel',
  caption: 'chat.quasar.dev',
  icon: 'chat',
  link: 'https://chat.quasar.dev'
}, {
  title: 'Forum',
  caption: 'forum.quasar.dev',
  icon: 'record_voice_over',
  link: 'https://forum.quasar.dev'
}, {
  title: 'Twitter',
  caption: '@quasarframework',
  icon: 'rss_feed',
  link: 'https://twitter.quasar.dev'
}, {
  title: 'Facebook',
  caption: '@QuasarFramework',
  icon: 'public',
  link: 'https://facebook.quasar.dev'
}, {
  title: 'Quasar Awesome',
  caption: 'Community Quasar projects',
  icon: 'favorite',
  link: 'https://awesome.quasar.dev'
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'MainLayout',
  components: {
    EssentialLink: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'components/EssentialLink.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  },
  setup: function setup() {
    var leftDrawerOpen = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    return {
      essentialLinks: linksList,
      leftDrawerOpen: leftDrawerOpen,
      toggleLeftDrawer: function toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      }
    };
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/MainLayout.vue?vue&type=template&id=5a6a1827":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/MainLayout.vue?vue&type=template&id=5a6a1827 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_q_btn = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-btn");
  var _component_q_toolbar_title = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-toolbar-title");
  var _component_q_toolbar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-toolbar");
  var _component_q_header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-header");
  var _component_q_item_label = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-item-label");
  var _component_EssentialLink = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("EssentialLink");
  var _component_q_list = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-list");
  var _component_q_drawer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-drawer");
  var _component_router_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-view");
  var _component_q_page_container = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-page-container");
  var _component_q_layout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("q-layout");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_q_layout, {
    view: "lHh Lpr lFf"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_header, {
        elevated: ""
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_toolbar, null, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_btn, {
                flat: "",
                dense: "",
                round: "",
                icon: "menu",
                "aria-label": "Menu",
                onClick: _ctx.toggleLeftDrawer
              }, null, 8 /* PROPS */, ["onClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_toolbar_title, null, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Quasar App ")];
                }),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Quasar v" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$q.version), 1 /* TEXT */)];
            }),

            _: 1 /* STABLE */
          })];
        }),

        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_drawer, {
        modelValue: _ctx.leftDrawerOpen,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return _ctx.leftDrawerOpen = $event;
        }),
        "show-if-above": "",
        bordered: ""
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_list, null, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_item_label, {
                header: ""
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Essential Links ")];
                }),
                _: 1 /* STABLE */
              }), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.essentialLinks, function (link) {
                return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_EssentialLink, (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
                  key: link.title
                }, link), null, 16 /* FULL_PROPS */);
              }), 128 /* KEYED_FRAGMENT */))];
            }),

            _: 1 /* STABLE */
          })];
        }),

        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_q_page_container, null, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_view)];
        }),
        _: 1 /* STABLE */
      })];
    }),

    _: 1 /* STABLE */
  });
}

/***/ }),

/***/ "./resources/js/layouts/MainLayout.vue":
/*!*********************************************!*\
  !*** ./resources/js/layouts/MainLayout.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MainLayout_vue_vue_type_template_id_5a6a1827__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainLayout.vue?vue&type=template&id=5a6a1827 */ "./resources/js/layouts/MainLayout.vue?vue&type=template&id=5a6a1827");
/* harmony import */ var _MainLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainLayout.vue?vue&type=script&lang=js */ "./resources/js/layouts/MainLayout.vue?vue&type=script&lang=js");
/* harmony import */ var D_laragon_6_www_laravel_quasar_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_laragon_6_www_laravel_quasar_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_MainLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_MainLayout_vue_vue_type_template_id_5a6a1827__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/layouts/MainLayout.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/layouts/MainLayout.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./resources/js/layouts/MainLayout.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MainLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MainLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MainLayout.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/MainLayout.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/layouts/MainLayout.vue?vue&type=template&id=5a6a1827":
/*!***************************************************************************!*\
  !*** ./resources/js/layouts/MainLayout.vue?vue&type=template&id=5a6a1827 ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MainLayout_vue_vue_type_template_id_5a6a1827__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MainLayout_vue_vue_type_template_id_5a6a1827__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MainLayout.vue?vue&type=template&id=5a6a1827 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/MainLayout.vue?vue&type=template&id=5a6a1827");


/***/ })

}]);