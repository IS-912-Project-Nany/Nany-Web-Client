(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+a66":
/*!****************************************************!*\
  !*** ./src/app/categorias/categorias.component.ts ***!
  \****************************************************/
/*! exports provided: CategoriasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasComponent", function() { return CategoriasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_categorias_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/categorias.service */ "Xnfx");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer/footer.component */ "fp1T");







const _c0 = function (a0) { return [a0, "empresas"]; };
function CategoriasComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const categoria_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, categoria_r3._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-color:", categoria_r3.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](categoria_r3.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", categoria_r3.icono, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CategoriasComponent_app_footer_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-footer");
} }
function CategoriasComponent_ngx_spinner_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-spinner", 11);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", true);
} }
class CategoriasComponent {
    constructor(categoriasServices, spinner) {
        this.categoriasServices = categoriasServices;
        this.spinner = spinner;
        // categories = [
        //   {
        //     "nombre":"Comida Rápida",
        //     "icono":"../../assets/img/categories/categoria-comida-rapida.png",
        //     "color":"#92509D",
        //     "empresas": []
        //   },
        //   {
        //     "nombre":"Bebidas",
        //     "icono":"../../assets/img/categories/categoria-bebidas.png",
        //     "color":"#FC0079",
        //     "empresas": []
        //   },
        //   {
        //     "nombre":"Tecnología",
        //     "icono":"../../assets/img/categories/categoria-casa-inteligente.png",
        //     "color":"#4A05DB",
        //     "empresas": []
        //   },
        //   {
        //     "nombre":"Maquillaje",
        //     "icono":"../../assets/img/categories/categoria-maquillaje.png",
        //     "color":"#EFF32B",
        //     "empresas": []
        //   },
        //   {
        //     "nombre":"Zapatos",
        //     "icono":"../../assets/img/categories/categoria-zapatos.png",
        //     "color":"#3DFCA0",
        //     "empresas": []
        //   },
        //   {
        //     "nombre":"Super",
        //     "icono":"../../assets/img/categories/categoria-super.png",
        //     "color":"#A6032F",
        //     "empresas": []
        //   },
        //   {
        //     "nombre":"Moda",
        //     "icono":"../../assets/img/categories/categoria-vestir.png",
        //     "color":"#4A05DB",
        //     "empresas": []
        //   },
        //   {
        //     "nombre":"Hogar",
        //     "icono":"../../assets/img/categories/categoria-hogar.png",
        //     "color":"#11E94E",
        //     "empresas": []
        //   },
        //   {
        //     "nombre":"Ferretería",
        //     "icono":"../../assets/img/categories/categoria-martillo.png",
        //     "color":"#F2B311",
        //     "empresas": []
        //   },
        //   {
        //     "nombre":"Salud",
        //     "icono":"../../assets/img/categories/categoria-medicamento.png",
        //     "color":"#EE809E",
        //     "empresas": []
        //   },
        //   {
        //     "nombre":"Deportes",
        //     "icono":"../../assets/img/categories/categoria-deportes.png",
        //     "color":"#11BDF2",
        //     "empresas": []
        //   },
        //   {
        //     "nombre":"Mascotas",
        //     "icono":"../../assets/img/categories/categoria-mascotas.png",
        //     "color":"#D61104",
        //     "empresas": []
        //   },
        //   {
        //     "nombre":"Papelería",
        //     "icono":"../../assets/img/categories/categoria-papeleria.png",
        //     "color":"#15A034",
        //     "empresas": []
        //   },
        //   {
        //     "nombre":"Joyería y Accesorios",
        //     "icono":"../../assets/img/categories/categoria-joyeria.png",
        //     "color":"#A60382",
        //     "empresas": []
        //   },
        //   {
        //     "nombre":"Niños y Bebes",
        //     "icono":"../../assets/img/categories/categoria-recreo.png",
        //     "color":"#7A04D6",
        //     "empresas": []
        //   },
        //   {
        //     "nombre":"Pastelería",
        //     "icono": "../../assets/img/categories/categoria-pastel.png",
        //     "color":"#F82270",
        //     "empresas": []
        //   }
        // ];
        this.categorias = [];
        this.isLoading = false;
    }
    ngOnInit() {
        this.scrollToTop();
        this.isLoading = true;
        this.categoriasServices.obtenerCategorias().subscribe(result => {
            this.categorias = result;
            this.isLoading = false;
        }, error => {
            console.log(error);
        });
    }
    scrollToTop() {
        window.scrollTo(0, 0);
    }
}
CategoriasComponent.ɵfac = function CategoriasComponent_Factory(t) { return new (t || CategoriasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_categorias_service__WEBPACK_IMPORTED_MODULE_1__["CategoriasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"])); };
CategoriasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoriasComponent, selectors: [["app-categorias"]], decls: 8, vars: 3, consts: [["id", "categoryContainer", 1, "container"], [1, "row"], [1, "text-center", "mt-4"], ["class", "col-6 mr-1 mt-4", 3, "routerLink", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["bdColor", "rgba(255,255,255,0.8)", "size", "large", "color", "#a6032f", "type", "square-jelly-box", 3, "fullScreen", 4, "ngIf"], [1, "col-6", "mr-1", "mt-4", 3, "routerLink"], [1, "card"], [1, "card-body"], [1, "card-title-category"], ["alt", "", 1, "card-body-category", 3, "src"], ["bdColor", "rgba(255,255,255,0.8)", "size", "large", "color", "#a6032f", "type", "square-jelly-box", 3, "fullScreen"]], template: function CategoriasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Elige una categor\u00EDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CategoriasComponent_a_5_Template, 6, 8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CategoriasComponent_app_footer_6_Template, 1, 0, "app-footer", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CategoriasComponent_ngx_spinner_7_Template, 1, 1, "ngx-spinner", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categorias);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.categorias.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerComponent"]], encapsulation: 2 });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Kevin\OneDrive\Documents\Angular\Nany-Web-Client\src\main.ts */"zUnb");


/***/ }),

/***/ "2t2m":
/*!************************************************!*\
  !*** ./src/app/registro/registro.component.ts ***!
  \************************************************/
/*! exports provided: RegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroComponent", function() { return RegistroComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_usuarios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/usuarios.service */ "ESM5");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _services_ciudades_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/ciudades.service */ "fpUm");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "JqCM");










function RegistroComponent_div_13_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Este campo no puede quedar vac\u00EDo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegistroComponent_div_13_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "M\u00E1ximo 30 caracteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegistroComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegistroComponent_div_13_span_1_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RegistroComponent_div_13_span_2_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.nombre.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.nombre.errors.maxlength);
} }
function RegistroComponent_div_18_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Este campo no puede quedar vac\u00EDo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegistroComponent_div_18_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "M\u00E1ximo 30 caracteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegistroComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegistroComponent_div_18_span_1_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RegistroComponent_div_18_span_2_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.apellido.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.apellido.errors.maxlength);
} }
function RegistroComponent_div_24_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Correo Inv\u00E1lido");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegistroComponent_div_24_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Este campo no puede quedar vac\u00EDo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegistroComponent_div_24_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r17.responseRegistro.message);
} }
function RegistroComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegistroComponent_div_24_span_1_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RegistroComponent_div_24_span_2_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, RegistroComponent_div_24_span_3_Template, 2, 1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.correo.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.correo.errors.required && ctx_r2.responseRegistro.code != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.responseRegistro.code == 0);
} }
function RegistroComponent_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " M\u00EDnimo 8 caracteres, incluyendo al menos una mayuscula y un numero");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegistroComponent_div_31_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Este campo no puede quedar vac\u00EDo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegistroComponent_div_31_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "M\u00EDnimo 8 caracteres, una mayuscula y numeros");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegistroComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegistroComponent_div_31_span_1_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RegistroComponent_div_31_span_2_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.password.errors.pattern);
} }
function RegistroComponent_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Las contrase\u00F1as no coinciden.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegistroComponent_option_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ciudad_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", ciudad_r20.idCiudad);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ciudad_r20.ciudad);
} }
function RegistroComponent_div_45_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Este campo no puede quedar vac\u00EDo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegistroComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegistroComponent_div_45_span_1_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.ciudad.errors.required);
} }
function RegistroComponent_div_50_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Este campo no puede quedar vac\u00EDo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegistroComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegistroComponent_div_50_span_1_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.fechaNacimiento.errors.required);
} }
function RegistroComponent_span_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r9.responseRegistro.message);
} }
function RegistroComponent_ngx_spinner_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ngx-spinner", 33);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fullScreen", true);
} }
const _c0 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
class RegistroComponent {
    constructor(usuariosService, cookiesService, ciudadesService, _route) {
        this.usuariosService = usuariosService;
        this.cookiesService = cookiesService;
        this.ciudadesService = ciudadesService;
        this._route = _route;
        this.formRegistro = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(30)]),
            apellido: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(30)]),
            correo: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i),]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)([A-Za-z\d$@$!%*?&]){8,}$/)]),
            ciudad: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            fechaNacimiento: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            genero: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
        });
        this.confirmPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]);
        this.responseRegistro = '';
        this.isLoading = false;
        this.ciudades = [];
    }
    ngOnInit() {
        this.ciudadesService.obtenerCiudades().subscribe(result => {
            this.ciudades = result;
        }, error => {
            console.log(error);
        });
    }
    registrar() {
        this.isLoading = true;
        let ciudadSeleccionada = {};
        this.ciudades.forEach(ciudad => {
            if (this.formRegistro.value.ciudad == ciudad.idCiudad) {
                ciudadSeleccionada.idCiudad = this.formRegistro.value.ciudad;
                ciudadSeleccionada.ciudad = ciudad.ciudad;
            }
        });
        let nuevoUsuario = {
            nombre: this.formRegistro.value.nombre,
            apellido: this.formRegistro.value.apellido,
            correo: this.formRegistro.value.correo,
            password: this.formRegistro.value.password,
            fechaNacimiento: this.formRegistro.value.fechaNacimiento,
            genero: this.formRegistro.value.genero,
            tipoUsuario: { idUsuario: 1, tipo: "cliente" },
            imagen: "../../assets/iconos/user-icon.png",
            ciudad: ciudadSeleccionada,
            ordenes: []
        };
        console.log("Se registrara al usuario:", nuevoUsuario);
        this.usuariosService.registrar(nuevoUsuario).subscribe(result => {
            if (result.code == 0) {
                this.responseRegistro = result;
                this.correo.setValue('');
            }
            else {
                const dateNow = new Date();
                dateNow.setMinutes(dateNow.getMinutes() + 60);
                this.cookiesService.set('nanyUsuarioId', result.usuario._id, dateNow);
                this.cookiesService.set('nanyUsuarioNombre', result.usuario.nombre, dateNow);
                this.cookiesService.set('nanyUsuarioApellido', result.usuario.apellido, dateNow);
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    icon: 'success',
                    title: 'Registro Exitoso',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#A6032F'
                });
                this._route.navigate(['/categorias']);
            }
            console.log(result);
        }, error => {
            console.log(error);
        });
        this.isLoading = true;
    }
    get nombre() {
        return this.formRegistro.get('nombre');
    }
    get apellido() {
        return this.formRegistro.get('apellido');
    }
    get correo() {
        return this.formRegistro.get('correo');
    }
    get password() {
        return this.formRegistro.get('password');
    }
    get ciudad() {
        return this.formRegistro.get('ciudad');
    }
    get fechaNacimiento() {
        return this.formRegistro.get('fechaNacimiento');
    }
    get genero() {
        return this.formRegistro.get('genero');
    }
}
RegistroComponent.ɵfac = function RegistroComponent_Factory(t) { return new (t || RegistroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_usuarios_service__WEBPACK_IMPORTED_MODULE_3__["UsuariosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_ciudades_service__WEBPACK_IMPORTED_MODULE_5__["CiudadesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
RegistroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RegistroComponent, selectors: [["app-registro"]], decls: 77, vars: 44, consts: [[1, "container-fluid"], ["src", "../assets/logos/Logo-Nany-trans-1.png", "id", "logo", "routerLink", "/"], [1, "info"], ["novalidate", "", 1, "needs-validation", 3, "formGroup"], [1, "form-contenedor"], ["type", "text", "formControlName", "nombre", "required", "", 1, "form-control", "inp-form", 3, "ngClass"], ["class", "invalid-feedback login-feedback", 4, "ngIf"], ["type", "text", "formControlName", "apellido", "required", "", 1, "form-control", "inp-form", 3, "ngClass"], [1, "form-links", "register"], ["type", "email", "placeholder", "ejemplo@gmail.com", "formControlName", "correo", "required", "", 1, "form-control", "inp-form", 3, "ngClass"], ["type", "password", "name", "password", "autocomplete", "on", "formControlName", "password", "required", "", 1, "form-control", "inp-form", 3, "ngClass"], [1, "aviso"], [4, "ngIf"], ["type", "password", "name", "confirmPassword", "autocomplete", "on", "required", "", 1, "form-control", "inp-form", 3, "formControl", "ngClass"], [1, "invalid-feedback", "login-feedback"], ["aria-label", "Default select example", "formControlName", "ciudad", "required", "", 1, "form-select", 3, "ngClass"], ["selected", "", "disabled", ""], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "date", "formControlName", "fechaNacimiento", "required", "", 1, "form-control", "inp-form", 3, "ngClass"], [1, "chk-form"], [1, "form-check", "form-check-inline"], ["type", "radio", "formControlName", "genero", "name", "genero", "id", "genderMale", "required", "", 1, "form-check-input", 3, "value"], ["for", "genderMale", 1, "form-check-label"], ["type", "radio", "formControlName", "genero", "name", "genero", "id", "genderFemale", "required", "", 1, "form-check-input", 3, "value"], ["for", "genderFemale", 1, "form-check-label"], [1, "form-check"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", 1, "form-check-input"], ["for", "flexCheckDefault", 1, "form-check-label"], ["type", "button", "id", "btn-login", 1, "btn", "btn-success", 3, "disabled", "click"], [1, "registro-add-response"], ["routerLink", "/login", "id", "registro"], ["bdColor", "rgba(255,255,255,0.8)", "size", "large", "color", "#a6032f", "type", "square-jelly-box", 3, "fullScreen", 4, "ngIf"], [3, "ngValue"], ["bdColor", "rgba(255,255,255,0.8)", "size", "large", "color", "#a6032f", "type", "square-jelly-box", 3, "fullScreen"]], template: function RegistroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Completa tus datos personales para comenzar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Registrarse");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, RegistroComponent_div_13_Template, 3, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Apellido");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, RegistroComponent_div_18_Template, 3, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Correo electr\u00F3nico");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, RegistroComponent_div_24_Template, 4, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, RegistroComponent_span_30_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, RegistroComponent_div_31_Template, 3, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Confirmar contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, RegistroComponent_span_37_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Ciudad");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Seleccione");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, RegistroComponent_option_44_Template, 2, 2, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, RegistroComponent_div_45_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Fecha de nacimiento");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, RegistroComponent_div_50_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "G\u00E9nero");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Masculino");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Femenino");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, " Aceptar t\u00E9rminos y condiciones de uso de nany.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegistroComponent_Template_button_click_68_listener() { return ctx.registrar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "Registrarse");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](71, RegistroComponent_span_71_Template, 2, 1, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "\u00BFYa tienes una cuenta?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "Inicia sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](76, RegistroComponent_ngx_spinner_76_Template, 1, 1, "ngx-spinner", 31);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.formRegistro);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](23, _c0, ctx.nombre.invalid && (ctx.nombre.dirty || ctx.nombre.touched), ctx.nombre.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nombre.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](26, _c0, ctx.apellido.invalid && (ctx.apellido.dirty || ctx.apellido.touched), ctx.apellido.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.apellido.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](29, _c0, ctx.correo.invalid && (ctx.correo.dirty || ctx.correo.touched), ctx.correo.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.correo.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](32, _c0, ctx.password.invalid && (ctx.password.dirty || ctx.password.touched), ctx.password.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.password.invalid || !ctx.password.dirty && !ctx.password.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.password.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.confirmPassword)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](35, _c0, ctx.confirmPassword.value != ctx.password.value && ctx.confirmPassword.touched, ctx.confirmPassword.value == ctx.password.value && ctx.confirmPassword.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.confirmPassword.value != ctx.password.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](38, _c0, ctx.ciudad.invalid && (ctx.ciudad.dirty || ctx.ciudad.touched), ctx.ciudad.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.ciudades);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.ciudad.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](41, _c0, ctx.fechaNacimiento.invalid && (ctx.fechaNacimiento.dirty || ctx.fechaNacimiento.touched), ctx.fechaNacimiento.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.fechaNacimiento.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.formRegistro.invalid || ctx.password.value != ctx.confirmPassword.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.responseRegistro.code == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RadioControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerComponent"]], encapsulation: 2 });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    ROOT_API: ''
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CHqx":
/*!************************************************!*\
  !*** ./src/app/empresas/empresas.component.ts ***!
  \************************************************/
/*! exports provided: EmpresasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpresasComponent", function() { return EmpresasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_empresas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/empresas.service */ "yDh5");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer/footer.component */ "fp1T");







const _c0 = function (a0) { return [a0, "productos"]; };
function EmpresasComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const empresa_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, empresa_r3._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", empresa_r3.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function EmpresasComponent_app_footer_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-footer");
} }
function EmpresasComponent_ngx_spinner_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-spinner", 10);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", true);
} }
class EmpresasComponent {
    constructor(ruta, empresasService, spinner) {
        this.ruta = ruta;
        this.empresasService = empresasService;
        this.spinner = spinner;
        // companies = [
        //   {
        //     name: 'Little Caesars',
        //     logo: '../../assets/img/companies/empresa-little-caesars.svg',
        //   },
        //   {
        //     name: 'Bigos',
        //     logo: '../../assets/img/companies/empresa-bigos.jpg',
        //   },
        //   {
        //     name: 'Pizza Hut',
        //     logo: '../../assets/img/companies/empresa-pizza-hut.svg',
        //   },
        //   {
        //     name: 'Pollo Campero',
        //     logo: '../../assets/img/companies/empresa-Pollo-Capero-logo.png',
        //   },
        //   {
        //     name: 'KFC',
        //     logo: '../../assets/img/companies/empresa-kfc.png',
        //   },
        //   {
        //     name: "Wendy's",
        //     logo: '../../assets/img/companies/empresa-wendys.jpg',
        //   },
        //   {
        //     name: 'Popeyes',
        //     logo: '../../assets/img/companies/empresa-Popeyes.png',
        //   },
        //   {
        //     name: 'McDonalds',
        //     logo: '../../assets/img/companies/empresa-McDonalds.png',
        //   },
        //   {
        //     name: 'Burger King',
        //     logo: '../../assets/img/companies/empresa-Burger-King-Logo.png',
        //   },
        // ];
        this.isLoading = false;
        this.idCategoria = '';
        this.categoria = '';
        this.empresas = [];
        this.ruta.params.subscribe(params => {
            this.idCategoria = params._id;
        });
    }
    ngOnInit() {
        this.isLoading = true;
        this.empresasService.obtenerEmpresas(this.idCategoria).subscribe(result => {
            this.isLoading = false;
            console.log(result);
            this.categoria = result;
            this.empresas = result.empresas;
        }, error => {
            console.log(error);
        });
    }
}
EmpresasComponent.ɵfac = function EmpresasComponent_Factory(t) { return new (t || EmpresasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_empresas_service__WEBPACK_IMPORTED_MODULE_2__["EmpresasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"])); };
EmpresasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmpresasComponent, selectors: [["app-empresas"]], decls: 8, vars: 4, consts: [["id", "companyContainer", 1, "container", "pb-5"], [1, "row"], [1, "text-center", "mt-4"], ["class", "col-6 mr-1 mt-4", 3, "routerLink", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["bdColor", "rgba(255,255,255,0.8)", "size", "large", "color", "#a6032f", "type", "square-jelly-box", 3, "fullScreen", 4, "ngIf"], [1, "col-6", "mr-1", "mt-4", 3, "routerLink"], [1, "card"], [1, "card-body"], ["alt", "", 1, "card-company-landing", 3, "src"], ["bdColor", "rgba(255,255,255,0.8)", "size", "large", "color", "#a6032f", "type", "square-jelly-box", 3, "fullScreen"]], template: function EmpresasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EmpresasComponent_a_5_Template, 4, 4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EmpresasComponent_app_footer_6_Template, 1, 0, "app-footer", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EmpresasComponent_ngx_spinner_7_Template, 1, 1, "ngx-spinner", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Elige la empresa de ", ctx.categoria.nombre, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.empresas);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.empresas.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerComponent"]], encapsulation: 2 });


/***/ }),

/***/ "CMz6":
/*!**************************************************!*\
  !*** ./src/app/productos/productos.component.ts ***!
  \**************************************************/
/*! exports provided: ProductosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosComponent", function() { return ProductosComponent; });
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "twK/");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_productos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/productos.service */ "PnFU");
/* harmony import */ var _services_empresas_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/empresas.service */ "yDh5");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _button_add_producto_button_add_producto_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./button-add-producto/button-add-producto.component */ "Wt93");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../footer/footer.component */ "fp1T");














const _c0 = ["navbar"];
const _c1 = function () { return ["fas", "star"]; };
function ProductosComponent_fa_icon_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "fa-icon", 27);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c1));
} }
const _c2 = function () { return ["far", "star"]; };
function ProductosComponent_fa_icon_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "fa-icon", 27);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c2));
} }
function ProductosComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "app-button-add-producto", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onChange", function ProductosComponent_div_19_Template_app_button_add_producto_onChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r14.verCantidad($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductosComponent_div_19_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); const producto_r13 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r16.agregarCarrito(producto_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Agregar al Carrito");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductosComponent_div_19_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); const producto_r13 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r17.detalleProductoModal(producto_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Ver Detalles");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const producto_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", producto_r13.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](producto_r13.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("L. ", producto_r13.precio, "");
} }
function ProductosComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r4.empresa.banner, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r4.detalleProducto.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r4.detalleProducto.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx_r4.detalleProducto.nombre, ", ", ctx_r4.detalleProducto.descripcion, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Costo: L. ", ctx_r4.detalleProducto.precio, "");
} }
function ProductosComponent_fa_icon_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "fa-icon", 27);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c1));
} }
function ProductosComponent_fa_icon_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "fa-icon", 27);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c2));
} }
function ProductosComponent_ngx_spinner_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ngx-spinner", 38);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fullScreen", false);
} }
function ProductosComponent_app_footer_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-footer");
} }
class ProductosComponent {
    constructor(library, ruta, _route, productosService, empresasService, cookiesService, spinner) {
        this.ruta = ruta;
        this._route = _route;
        this.productosService = productosService;
        this.empresasService = empresasService;
        this.cookiesService = cookiesService;
        this.spinner = spinner;
        this.idCategoria = '';
        this.idEmpresa = '';
        this.nombreCategoria = '';
        this.empresa = '';
        this.productos = [];
        this.detalleProducto = '';
        this.cantidadProducto = '';
        this.isLoading = false;
        library.addIcons(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faStar"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faStar"]);
        this.ruta.params.subscribe(params => {
            this.idCategoria = params.idCategoria;
            this.idEmpresa = params._id;
        });
    }
    ngOnInit() {
        this.isLoading = true;
        this.spinner.show();
        this.productosService.obtenerProductos(this.idCategoria, this.idEmpresa).subscribe(result => {
            console.log(result);
            this.productos = result;
        }, error => {
            console.log(error);
        });
        this.empresasService.obtenerEmpresa(this.idCategoria, this.idEmpresa).subscribe(result => {
            this.empresa = result.empresas[0];
            this.nombreCategoria = result.nombre;
            this.isLoading = false;
        }, error => {
            console.log(error);
        });
    }
    detalleProductoModal(producto) {
        this.detalleProducto = producto;
    }
    verCantidad(cantidad) {
        this.cantidadProducto = cantidad;
        console.log("Cantidad Producto ", this.cantidadProducto);
    }
    agregarCarrito(producto) {
        if (this.cookiesService.check('nanyUsuarioId')) {
            const localStorage = window.localStorage;
            let productos = [];
            let productoEnviar = {
                nombre: producto.nombre,
                descripcion: producto.descripcion,
                categoria: this.nombreCategoria,
                empresa: this.empresa.nombre,
                imagen: producto.imagen,
                precio: producto.precio,
                isv: producto.isv,
            };
            let detalleProducto = {
                producto: productoEnviar,
                cantidad: this.cantidadProducto
            };
            if (localStorage.getItem('productosCarrito' + this.cookiesService.get('nanyUsuarioNombre')) != undefined) {
                productos = JSON.parse(localStorage.getItem('productosCarrito' + this.cookiesService.get('nanyUsuarioNombre')));
                productos.push(detalleProducto);
                localStorage.setItem('productosCarrito' + this.cookiesService.get('nanyUsuarioNombre'), JSON.stringify(productos));
            }
            else {
                productos.push(detalleProducto);
                localStorage.setItem('productosCarrito' + this.cookiesService.get('nanyUsuarioNombre'), JSON.stringify(productos));
            }
            this.navbarComponent.ngOnInit();
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                icon: 'success',
                title: 'Producto Agregado al carrito',
                text: 'Revisa tu carrito de compras.',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#A6032F'
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                icon: 'info',
                text: 'Inicia sesión para poder agregar al carrito.',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#A6032F'
            });
            this._route.navigate(['/login']);
        }
    }
}
ProductosComponent.ɵfac = function ProductosComponent_Factory(t) { return new (t || ProductosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconLibrary"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_productos_service__WEBPACK_IMPORTED_MODULE_6__["ProductosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_empresas_service__WEBPACK_IMPORTED_MODULE_7__["EmpresasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"])); };
ProductosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ProductosComponent, selectors: [["app-productos"]], viewQuery: function ProductosComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.navbarComponent = _t.first);
    } }, decls: 53, vars: 17, consts: [["navbar", ""], [1, "container"], ["data-bs-toggle", "modal", "data-bs-target", "#modalCompany", 1, "row", "product-company", "pt-2"], [1, "col-4", "product-img-company"], ["alt", "", 3, "src"], [1, "col-8"], ["class", "product-start", 3, "icon", 4, "ngFor", "ngForOf"], ["src", "../../assets/iconos/IconTouch-trans.png", "alt", "", 1, "product-touch-company"], [1, "text-center", "mt-4"], [1, "products-landing"], [1, "row"], ["class", "col-12", 4, "ngFor", "ngForOf"], ["id", "modalProductDetails", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog"], ["class", "modal-content", 4, "ngIf"], ["id", "modalCompany", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-content"], [1, "modal-header-company"], [1, "modal-body"], [1, "text-center"], [1, "text-justify", "mt-4"], [1, "text-initial"], [1, "mr-2"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["bdColor", "rgba(255,255,255,0.8)", "size", "large", "color", "#a6032f", "type", "square-jelly-box", 3, "fullScreen", 4, "ngIf"], [4, "ngIf"], [1, "product-start", 3, "icon"], [1, "col-12"], [1, "carousel-item-bg"], ["alt", "...", 1, "products-carousel-landing", "d-block", 3, "src"], [1, "products-title-landing", "text-center"], [1, "products-price-landing", "text-center"], [3, "onChange"], ["type", "button", 1, "btn-primary", "products-btn-car", 3, "click"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#modalProductDetails", 1, "btn-secondary", "products-btn-details", 3, "click"], [1, "modal-body", "modal-body-product"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "float-center"], ["bdColor", "rgba(255,255,255,0.8)", "size", "large", "color", "#a6032f", "type", "square-jelly-box", 3, "fullScreen"]], template: function ProductosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-navbar", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ProductosComponent_fa_icon_11_Template, 1, 2, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ProductosComponent_fa_icon_12_Template, 1, 2, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, ProductosComponent_div_19_Template, 12, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, ProductosComponent_div_22_Template, 16, 6, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "h4", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Estamos ubicados en: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, " Horario de Atenci\u00F3n: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Calificaci\u00F3n: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, ProductosComponent_fa_icon_46_Template, 1, 2, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](47, ProductosComponent_fa_icon_47_Template, 1, 2, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Cerrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](51, ProductosComponent_ngx_spinner_51_Template, 1, 1, "ngx-spinner", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, ProductosComponent_app_footer_52_Template, 1, 0, "app-footer", 26);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx.empresa.logo, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.empresa.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.empresa.resumen);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", " ".repeat(ctx.empresa.calificacion).split(""));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", " ".repeat(5 - ctx.empresa.calificacion).split(""));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Productos de ", ctx.empresa.nombre, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.productos);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.detalleProducto != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx.empresa.banner, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.empresa.nommbre);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.empresa.descripcion);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.empresa.ubicacion, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.empresa.horario, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", " ".repeat(ctx.empresa.calificacion).split(""));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", " ".repeat(5 - ctx.empresa.calificacion).split(""));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.productos.length != 0);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"], _button_add_producto_button_add_producto_component__WEBPACK_IMPORTED_MODULE_12__["ButtonAddProductoComponent"], ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"]], encapsulation: 2 });


/***/ }),

/***/ "ESM5":
/*!**********************************************!*\
  !*** ./src/app/services/usuarios.service.ts ***!
  \**********************************************/
/*! exports provided: UsuariosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosService", function() { return UsuariosService; });
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.config */ "aR35");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class UsuariosService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    registrar(data) {
        return this.httpClient.post(`${_app_config__WEBPACK_IMPORTED_MODULE_0__["API_BASE_URL"]}/usuarios`, data);
    }
    obtenerUsuario(idUsuario) {
        return this.httpClient.get(`${_app_config__WEBPACK_IMPORTED_MODULE_0__["API_BASE_URL"]}/usuarios/${idUsuario}`);
    }
    actualizarUsuario(idUsuario, data) {
        return this.httpClient.put(`${_app_config__WEBPACK_IMPORTED_MODULE_0__["API_BASE_URL"]}/usuarios/${idUsuario}`, data);
    }
}
UsuariosService.ɵfac = function UsuariosService_Factory(t) { return new (t || UsuariosService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UsuariosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UsuariosService, factory: UsuariosService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "IiZn":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _services_ordenes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/ordenes.service */ "lrdA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../navbar/navbar.component */ "kWWo");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../map/map.component */ "cNoH");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../footer/footer.component */ "fp1T");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "JqCM");












function CheckoutComponent_div_25_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CheckoutComponent_div_25_div_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const i_r14 = ctx.index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r15.eliminarProductoLS(i_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "small", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Precio Unitario:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "small", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "small", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "ISV:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "small", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_div_25_div_2_Template_input_ngModelChange_24_listener($event) { const item_r13 = ctx.$implicit; return item_r13.cantidad = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "h6", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](32, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r13.producto.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r13.producto.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("L. ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](13, 6, item_r13.producto.precio, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("+ L. ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](18, 9, item_r13.producto.isv, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", item_r13.cantidad);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("L. ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](32, 12, (item_r13.producto.precio + item_r13.producto.isv) * item_r13.cantidad, "1.2-2"), "");
} }
function CheckoutComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CheckoutComponent_div_25_div_2_Template, 33, 15, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.productosCarrito);
} }
function CheckoutComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h6", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("L. ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](10, 1, ctx_r1.totalTemp, "1.2-2"), "");
} }
function CheckoutComponent_div_46_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Este campo no puede quedar vac\u00EDo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CheckoutComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CheckoutComponent_div_46_span_1_Template, 2, 0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.destinatario.errors.required);
} }
function CheckoutComponent_div_50_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Este campo no puede quedar vac\u00EDo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CheckoutComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CheckoutComponent_div_50_span_1_Template, 2, 0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.direccion.errors.required);
} }
function CheckoutComponent_tr_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r20.producto.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("X ", item_r20.cantidad, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("L.", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](7, 5, item_r20.producto.precio, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("L.", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](10, 8, item_r20.producto.isv, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("L.", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](13, 11, (item_r20.producto.precio + item_r20.producto.isv) * item_r20.cantidad, "1.2-2"), "");
} }
function CheckoutComponent_div_89_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Este campo no puede quedar vac\u00EDo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CheckoutComponent_div_89_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Tarjeta de Cr\u00E9dito/D\u00E9bito Inv\u00E1lida");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CheckoutComponent_div_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CheckoutComponent_div_89_span_1_Template, 2, 0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CheckoutComponent_div_89_span_2_Template, 2, 0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.numeroTarjeta.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.numeroTarjeta.errors.pattern);
} }
function CheckoutComponent_div_96_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Este campo no puede quedar vac\u00EDo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CheckoutComponent_div_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CheckoutComponent_div_96_span_1_Template, 2, 0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.titular.errors.required);
} }
function CheckoutComponent_div_100_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Este campo no puede quedar vac\u00EDo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CheckoutComponent_div_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CheckoutComponent_div_100_span_1_Template, 2, 0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.fechaExpiracion.errors.required);
} }
function CheckoutComponent_div_104_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Este campo no puede quedar vac\u00EDo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CheckoutComponent_div_104_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Campo solo de 3 d\u00EDgitos");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CheckoutComponent_div_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CheckoutComponent_div_104_span_1_Template, 2, 0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CheckoutComponent_div_104_span_2_Template, 2, 0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.ccv.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.ccv.errors.pattern);
} }
function CheckoutComponent_div_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Numero de Orden");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Fecha y Hora Local:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "N\u00FAmero de Tarjeta");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r9.ordenCompleta.numOrden);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r9.ordenCompleta.fecha);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("L. ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](13, 4, ctx_r9.totalTemp, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r9.ordenCompleta.metodoPago.numeroTarjeta);
} }
function CheckoutComponent_div_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Detalles del Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "hr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "table", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Titular Tarjeta");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Direcci\u00F3n del Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "hr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r10.ordenCompleta.cliente.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r10.ordenCompleta.metodoPago.titular);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r10.ordenCompleta.ubicacionOrden.direccion);
} }
function CheckoutComponent_ngx_spinner_129_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ngx-spinner", 69);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fullScreen", true);
} }
const _c0 = function (a0, a1) { return { "bc-checkout-active": a0, "bc-checkout-disable": a1 }; };
const _c1 = function (a0, a1) { return { "d-block": a0, "d-none": a1 }; };
const _c2 = function () { return []; };
const _c3 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
class CheckoutComponent {
    constructor(cookiesService, ordenesService, _location, _route) {
        this.cookiesService = cookiesService;
        this.ordenesService = ordenesService;
        this._location = _location;
        this._route = _route;
        this.usuario = '';
        this.productosCarrito = [];
        this.localStorage = window.localStorage;
        this.totalTemp = null;
        this.region = 'carrito';
        this.isLoading = false;
        this.ordenCompleta = '';
        this.latitud = '';
        this.longitud = '';
        this.formCheckoutInfo = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            destinatario: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)]),
            direccion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(500)]),
        });
        this.patronTarjeta = /^(?:4\d([\- ])?\d{6}\1\d{5}|(?:4\d{3}|5[1-5]\d{2}|6011)([\- ])?\d{4}\2\d{4}\2\d{4})$/i;
        this.patronCcv = /[0-9]{3}/g;
        this.formCheckoutCredito = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            numeroTarjeta: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.patronTarjeta)]),
            titular: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(500)]),
            ccv: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.patronCcv)]),
            fechaExpiracion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    }
    ngOnInit() {
        if (this.cookiesService.check('nanyUsuarioId')) {
            this.usuario = {
                _id: this.cookiesService.get('nanyUsuarioId'),
                nombre: this.cookiesService.get('nanyUsuarioNombre'),
                apellido: this.cookiesService.get('nanyUsuarioApellido'),
            };
            this.totalTemp = 0;
            let productosLocalStorage = JSON.parse(this.localStorage.getItem('productosCarrito' + this.usuario.nombre));
            if (productosLocalStorage != undefined) {
                if (productosLocalStorage.length != 0) {
                    this.productosCarrito = productosLocalStorage;
                    this.productosCarrito.forEach(item => {
                        this.totalTemp += ((item.producto.precio + item.producto.isv) * item.cantidad);
                    });
                }
            }
            else {
                this.productosCarrito = [];
            }
        }
    }
    eliminarProductoLS(index) {
        console.log('Se eliminara producto con id ', index);
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
            text: "¿Deseas remover este producto de tu carrito de compras?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#A6032F',
            cancelButtonColor: '#808080',
            confirmButtonText: 'Si',
            cancelButtonText: 'No'
        }).then((result) => {
            if (result.isConfirmed) {
                this.productosCarrito.splice(index, 1);
                this.localStorage.setItem('productosCarrito' + this.usuario.nombre, JSON.stringify(this.productosCarrito));
                this.ngOnInit();
            }
        });
    }
    latlong(latlong) {
        console.log(latlong);
        this.latitud = latlong.lat;
        this.longitud = latlong.lng;
    }
    confirmarOrden() {
        this.isLoading = true;
        let orden = {
            numOrden: JSON.stringify(Math.floor(Math.random() * (1000000 - 1) + 1)),
            cliente: this.usuario,
            motorista: '',
            ubicacionOrden: {
                destinatario: this.formCheckoutInfo.value.destinatario,
                direccion: this.formCheckoutInfo.value.direccion,
                latitud: this.latitud,
                longitud: this.longitud
            },
            tipoEstado: {
                idEstado: "0",
                nombreEstado: "Disponible"
            },
            detalleProductos: this.productosCarrito,
            fecha: new Date(),
            metodoPago: {
                numeroTarjeta: this.formCheckoutCredito.value.numeroTarjeta,
                titular: this.formCheckoutCredito.value.titular,
                ccv: this.formCheckoutCredito.value.ccv,
                fechaExpiracion: this.formCheckoutCredito.value.fechaExpiracion
            }
        };
        console.log(orden);
        this.ordenesService.nuevaOrden(orden).subscribe(result => {
            this.ordenCompleta = orden;
            console.log(result);
            this.isLoading = false;
            this.region = 'completa';
            this.scrollToTop(515);
        }, error => {
            console.log(error);
            this.isLoading = false;
        });
    }
    ordenTerminada() {
        this.productosCarrito = [];
        this.ordenCompleta = '';
        this.localStorage.setItem('productosCarrito' + this.usuario.nombre, JSON.stringify(this.productosCarrito));
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
            icon: 'success',
            title: 'Orden Exitosa',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#A6032F'
        });
        this._route.navigate(['/historial']);
    }
    moverCheckout() {
        this.scrollToTop(150);
        this.region = 'checkout';
    }
    regresar() {
        this._location.back();
    }
    get destinatario() {
        return this.formCheckoutInfo.get('destinatario');
    }
    get direccion() {
        return this.formCheckoutInfo.get('direccion');
    }
    get numeroTarjeta() {
        return this.formCheckoutCredito.get('numeroTarjeta');
    }
    get titular() {
        return this.formCheckoutCredito.get('titular');
    }
    get ccv() {
        return this.formCheckoutCredito.get('ccv');
    }
    get fechaExpiracion() {
        return this.formCheckoutCredito.get('fechaExpiracion');
    }
    scrollToTop(y) {
        window.scrollTo(0, y);
    }
}
CheckoutComponent.ɵfac = function CheckoutComponent_Factory(t) { return new (t || CheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_ordenes_service__WEBPACK_IMPORTED_MODULE_4__["OrdenesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
CheckoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CheckoutComponent, selectors: [["app-checkout"]], decls: 131, vars: 66, consts: [[1, "container"], [1, "row"], [1, "bc-checkout-title"], ["src", "../../assets/logos/Logo2-Nany-trans.png", "alt", ""], [1, "bc-body", "bc-checkout-active"], ["id", "btnShoppingCar", "type", "button"], ["for", "btnShoppingCar"], [1, "bc-body", "bc-checkout-disable", 3, "ngClass"], ["id", "ShoopingCarSection", 3, "ngClass"], [1, "title-banner-chck"], ["class", "container", 4, "ngIf"], ["type", "button", 1, "btn-check-continue", "mt-5", 3, "disabled", "click"], ["type", "button", 1, "btn-check-back", "mb-5", 3, "click"], ["id", "CheckoutSection", 3, "ngClass"], [1, "title-checkout"], [1, "header-checkout"], ["novalidate", "", 1, "form-checkout-info", "mt-4", "mb-5", 3, "formGroup"], ["for", "nameReceptorCustomer"], ["type", "text", "formControlName", "destinatario", "id", "nameReceptorCustomer", 3, "ngClass"], ["class", "invalid-feedback checkout-feedback", 4, "ngIf"], ["for", "addressCustomer"], ["id", "addressCustomer", "formControlName", "direccion", "rows", "5", 3, "ngClass"], ["for", ""], [3, "onLatLong"], [1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "invoice-cost"], [1, "title-checkout", "mt-5"], ["novalidate", "", 1, "form-checkout-info", "mt-4", "needs-validation", 3, "formGroup"], ["for", "creditNumber"], ["type", "text", "id", "creditNumber", "formControlName", "numeroTarjeta", "required", "", 3, "ngClass"], ["src", "../../assets/img/empresa-logo-mastercard.svg", "alt", "", "srcset", ""], ["src", "../../assets/img/empresa-Visa-Logo.png", "alt", "", "srcset", ""], ["for", "creditName"], ["type", "text", "id", "creditName", "formControlName", "titular", "required", "", 3, "ngClass"], ["for", "creditDateExp"], ["type", "date", "id", "creditDateExp", "formControlName", "fechaExpiracion", "required", "", 3, "ngClass"], ["for", "creditCCV"], ["type", "text", "id", "creditCCV", "formControlName", "ccv", "required", "", 3, "ngClass"], [1, "footer-check-line"], ["type", "button", 1, "btn-check-back", "mb-5"], ["id", "OrderCompleteSection", 3, "ngClass"], [1, "check-order-header"], ["src", "../../assets/iconos/check-order.png", "alt", ""], [1, "text-center"], ["class", "check-order-resume", 4, "ngIf"], [1, "text-center", "mt-5"], [1, "text-center", "mb-5"], ["type", "button", 1, "btn-check-continue", "mt-4", "mb-5", 3, "click"], ["bdColor", "rgba(255,255,255,0.8)", "size", "large", "color", "#a6032f", "type", "square-jelly-box", 3, "fullScreen", 4, "ngIf"], ["class", "card-item-car mb-3 mt-2", 4, "ngFor", "ngForOf"], [1, "card-item-car", "mb-3", "mt-2"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "card-item-title"], [1, "card-item-description"], [1, "cost-title"], [1, "cost-details"], [1, "card-item-title", "mt-2"], [1, "card-item-quantity"], ["type", "number", "min", "0", 3, "ngModel", "ngModelChange"], [1, "card-item-title", "mt-1"], [1, "cost-total"], [1, "invalid-feedback", "checkout-feedback"], [4, "ngIf"], [1, "invoice-description"], [1, "check-order-resume"], [1, "table", "table-details-small"], [1, "order-description"], ["bdColor", "rgba(255,255,255,0.8)", "size", "large", "color", "#a6032f", "type", "square-jelly-box", 3, "fullScreen"]], template: function CheckoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Carrito de Compras");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Checkout");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Completar Orden");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Carrito de Compras");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, CheckoutComponent_div_25_Template, 3, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Total del Carrito");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, CheckoutComponent_div_29_Template, 11, 4, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CheckoutComponent_Template_button_click_30_listener() { return ctx.moverCheckout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Checkout");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CheckoutComponent_Template_button_click_32_listener() { return ctx.regresar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Seguir Comprando");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Checkout");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Necesitamos saber donde te encuentras");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "hr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "form", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "\u00BFA qui\u00E9n le entregaremos la orden?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](46, CheckoutComponent_div_46_Template, 2, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Direcci\u00F3n exacta de donde te encuentras");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "textarea", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, CheckoutComponent_div_50_Template, 2, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Apunta en el mapa tu ubicaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "app-map", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onLatLong", function CheckoutComponent_Template_app_map_onLatLong_53_listener($event) { return ctx.latlong($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Su Orden");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "hr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "table", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Producto");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Cant");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Precio");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "ISV");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](71, CheckoutComponent_tr_71_Template, 14, 14, "tr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "tfoot");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "Total:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](77, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](78, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](81, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "M\u00E9todo de Pago");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](84, "hr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "form", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "N\u00FAmero de Tarjeta de Cr\u00E9dito/D\u00E9bito");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](88, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](89, CheckoutComponent_div_89_Template, 3, 2, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](90, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](91, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](92, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, "Nombre del Titular");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](95, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](96, CheckoutComponent_div_96_Template, 2, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "Fecha de Expiraci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](99, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](100, CheckoutComponent_div_100_Template, 2, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "CCV");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](103, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](104, CheckoutComponent_div_104_Template, 3, 2, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](105, "hr", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CheckoutComponent_Template_button_click_106_listener() { return ctx.confirmarOrden(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, "Confirmar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, "Regresar al Carrito");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, "Completar Orden");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](115, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "h6", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](117, "Orden completada");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119, "Gracias, su orden se ha recibido");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](120, CheckoutComponent_div_120_Template, 18, 7, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](121, CheckoutComponent_div_121_Template, 21, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "h4", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123, "Su orden arribara lo m\u00E1s pronto posible!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "h5", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125, "Gracias por elegir Nany");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](126, "hr", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CheckoutComponent_Template_button_click_127_listener() { return ctx.ordenTerminada(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, "Listo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](129, CheckoutComponent_ngx_spinner_129_Template, 1, 1, "ngx-spinner", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](130, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](31, _c0, ctx.region == "checkout" || ctx.region == "completa", ctx.region != "checkout" && ctx.region != "completa"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](34, _c0, ctx.region == "completa", ctx.region != "completa"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](37, _c1, ctx.region == "carrito", ctx.region != "carrito"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.productosCarrito != _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](40, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.totalTemp != null && ctx.productosCarrito != _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](41, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.productosCarrito == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](42, _c1, ctx.region == "checkout", ctx.region != "checkout"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.formCheckoutInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](45, _c3, ctx.destinatario.invalid && (ctx.destinatario.dirty || ctx.destinatario.touched), ctx.destinatario.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.destinatario.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](48, _c3, ctx.destinatario.invalid && (ctx.destinatario.dirty || ctx.destinatario.touched), ctx.destinatario.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.direccion.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.productosCarrito);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("L. ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](81, 28, ctx.totalTemp, "1.2-2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.formCheckoutCredito);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](51, _c3, ctx.numeroTarjeta.invalid && (ctx.numeroTarjeta.dirty || ctx.numeroTarjeta.touched), ctx.numeroTarjeta.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.numeroTarjeta.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](54, _c3, ctx.titular.invalid && (ctx.titular.dirty || ctx.titular.touched), ctx.titular.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.titular.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](57, _c3, ctx.fechaExpiracion.invalid && (ctx.fechaExpiracion.dirty || ctx.fechaExpiracion.touched), ctx.fechaExpiracion.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.fechaExpiracion.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](60, _c3, ctx.ccv.invalid && (ctx.ccv.dirty || ctx.ccv.touched), ctx.ccv.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.ccv.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.formCheckoutCredito.invalid || ctx.formCheckoutInfo.value.direccion == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](63, _c1, ctx.region == "completa", ctx.region != "completa"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.ordenCompleta != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.ordenCompleta != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _map_map_component__WEBPACK_IMPORTED_MODULE_8__["MapComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"]], encapsulation: 2 });


/***/ }),

/***/ "PnFU":
/*!***********************************************!*\
  !*** ./src/app/services/productos.service.ts ***!
  \***********************************************/
/*! exports provided: ProductosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosService", function() { return ProductosService; });
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.config */ "aR35");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ProductosService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    obtenerProductos(idCategoria, idEmpresa) {
        return this.httpClient.get(`${_app_config__WEBPACK_IMPORTED_MODULE_0__["API_BASE_URL"]}/categorias/${idCategoria}/empresas/${idEmpresa}/productos`);
    }
}
ProductosService.ɵfac = function ProductosService_Factory(t) { return new (t || ProductosService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ProductosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProductosService, factory: ProductosService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'nany-web-client';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ "Wt93":
/*!********************************************************************************!*\
  !*** ./src/app/productos/button-add-producto/button-add-producto.component.ts ***!
  \********************************************************************************/
/*! exports provided: ButtonAddProductoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonAddProductoComponent", function() { return ButtonAddProductoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class ButtonAddProductoComponent {
    constructor() {
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.counter = 1;
    }
    ngOnInit() {
        this.onChange.emit(this.counter);
    }
    plusProduct() {
        this.counter++;
        this.onChange.emit(this.counter);
    }
    minusProduct() {
        this.counter--;
        this.onChange.emit(this.counter);
    }
}
ButtonAddProductoComponent.ɵfac = function ButtonAddProductoComponent_Factory(t) { return new (t || ButtonAddProductoComponent)(); };
ButtonAddProductoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonAddProductoComponent, selectors: [["app-button-add-producto"]], outputs: { onChange: "onChange" }, decls: 6, vars: 1, consts: [[1, "position-relative"], ["type", "number", "min", "0", "max", "50", 1, "products-qty-landing", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "button-counter-landing", "btn-plus-landing", 3, "click"], ["type", "button", 1, "button-counter-landing", "btn-minus-landing", 3, "click"]], template: function ButtonAddProductoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ButtonAddProductoComponent_Template_input_ngModelChange_1_listener($event) { return ctx.counter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonAddProductoComponent_Template_button_click_2_listener() { return ctx.plusProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonAddProductoComponent_Template_button_click_4_listener() { return ctx.minusProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.counter);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], encapsulation: 2 });


/***/ }),

/***/ "Xnfx":
/*!************************************************!*\
  !*** ./src/app/services/categorias.service.ts ***!
  \************************************************/
/*! exports provided: CategoriasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasService", function() { return CategoriasService; });
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.config */ "aR35");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class CategoriasService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    obtenerCategorias() {
        return this.httpClient.get(`${_app_config__WEBPACK_IMPORTED_MODULE_0__["API_BASE_URL"]}/categorias`);
    }
}
CategoriasService.ɵfac = function CategoriasService_Factory(t) { return new (t || CategoriasService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CategoriasService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CategoriasService, factory: CategoriasService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "mSt+");
/* harmony import */ var _categorias_categorias_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./categorias/categorias.component */ "+a66");
/* harmony import */ var _empresas_empresas_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./empresas/empresas.component */ "CHqx");
/* harmony import */ var _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./perfil/perfil.component */ "nNO8");
/* harmony import */ var _registro_registro_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./registro/registro.component */ "2t2m");
/* harmony import */ var _productos_productos_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./productos/productos.component */ "CMz6");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./checkout/checkout.component */ "IiZn");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./map/map.component */ "cNoH");
/* harmony import */ var _productos_button_add_producto_button_add_producto_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./productos/button-add-producto/button-add-producto.component */ "Wt93");
/* harmony import */ var _historial_historial_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./historial/historial.component */ "v3Ag");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ "fXoL");


 //FontAwesome
 //Cookie Service
 //Ngx Spinner
 //Animations Angular

















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({ providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
        _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_12__["LandingPageComponent"],
        _categorias_categorias_component__WEBPACK_IMPORTED_MODULE_13__["CategoriasComponent"],
        _empresas_empresas_component__WEBPACK_IMPORTED_MODULE_14__["EmpresasComponent"],
        _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_15__["PerfilComponent"],
        _registro_registro_component__WEBPACK_IMPORTED_MODULE_16__["RegistroComponent"],
        _productos_productos_component__WEBPACK_IMPORTED_MODULE_17__["ProductosComponent"],
        _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_18__["CheckoutComponent"],
        _map_map_component__WEBPACK_IMPORTED_MODULE_19__["MapComponent"],
        _productos_button_add_producto_button_add_producto_component__WEBPACK_IMPORTED_MODULE_20__["ButtonAddProductoComponent"],
        _historial_historial_component__WEBPACK_IMPORTED_MODULE_21__["HistorialComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]] }); })();


/***/ }),

/***/ "aR35":
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/*! exports provided: API_BASE_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_BASE_URL", function() { return API_BASE_URL; });
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment.prod */ "cxbk");

const API_BASE_URL = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].ROOT_API /* 'http://localhost:8888'*/;


/***/ }),

/***/ "cNoH":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "4R65");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var leaflet_dist_images_marker_shadow_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet/dist/images/marker-shadow.png */ "4rkx");
/* harmony import */ var leaflet_dist_images_marker_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet/dist/images/marker-icon.png */ "Y5fm");
/* harmony import */ var leaflet_dist_images_marker_icon_2x_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet/dist/images/marker-icon-2x.png */ "WE1v");






class MapComponent {
    constructor() {
        this.onLatLong = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    initMap() {
        this.map = leaflet__WEBPACK_IMPORTED_MODULE_1__["map"]('map', {
            center: [14.543867, -86.8395272],
            zoom: 6.0,
        });
        const tiles = leaflet__WEBPACK_IMPORTED_MODULE_1__["tileLayer"]('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            minZoom: 3,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        });
        tiles.addTo(this.map);
        let marker;
        this.map.on('click', (e) => {
            if (marker) {
                this.map.removeLayer(marker);
            }
            marker = leaflet__WEBPACK_IMPORTED_MODULE_1__["marker"]([e.latlng.lat, e.latlng.lng], {
                draggable: false,
                bounceOnAdd: true,
                title: 'Aquí Estoy',
            })
                .addTo(this.map)
                .bindPopup('Aquí Estoy')
                .openPopup();
            this.onLatLong.emit(e.latlng);
        });
    }
    ngAfterViewInit() {
        this.initMap();
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(); };
MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["app-map"]], outputs: { onLatLong: "onLatLong" }, decls: 2, vars: 0, consts: [[1, "map-frame"], ["id", "map"]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".map-frame[_ngcontent-%COMP%] {\n  width: auto;\n  margin-top: 10px;\n}\n\n#map[_ngcontent-%COMP%] {\n  width: auto;\n  margin-top: 10px;\n  height: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1hcC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQUhGOztBQUtBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUZGIiwiZmlsZSI6Im1hcC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4kbGctYnJlYWNrcG9pbnQ6IDk2MHB4XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogJGxnLWJyZWFja3BvaW50KVxyXG4ubWFwLWZyYW1lXHJcbiAgd2lkdGg6IGF1dG9cclxuICBtYXJnaW4tdG9wOiAxMHB4XHJcblxyXG4jbWFwXHJcbiAgd2lkdGg6IGF1dG9cclxuICBtYXJnaW4tdG9wOiAxMHB4XHJcbiAgaGVpZ2h0OiA1MDBweFxyXG4iXX0= */"] });


/***/ }),

/***/ "cxbk":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    ROOT_API: 'https://nany-rest-api.herokuapp.com'
};


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 16, vars: 0, consts: [[1, "icons-footer"], ["src", "../../assets/iconos/facebook.png", "alt", "", 1, "icon-footer"], ["src", "../../assets/iconos/twitter.png", "alt", "", 1, "icon-footer"], ["src", "../../assets/iconos/instagram.png", "alt", "", 1, "icon-footer"], ["src", "../../assets/logos/Logo2-Nany-trans-blanco.png", "alt", "", 1, "logo-footer"], [1, "address-footer"], ["src", "../../assets/logos/logo-footer.png", "alt", "", 1, "logo-car-footer"], [1, "copyright-footer"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "901-947 South Drive, Houston,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " TX 77057, USA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Telephone: +1 555 1234 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Copyright \u00A9 2021 NanyTemplate. All rights reserved. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["footer[_ngcontent-%COMP%] {\n  background: #A6032F;\n  box-shadow: inset 0px 5px 4px rgba(0, 0, 0, 0.35);\n  position: relative;\n}\n\nhr[_ngcontent-%COMP%] {\n  margin-bottom: 3px;\n  width: 90%;\n  border: 1px solid #D27E95;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  z-index: 3;\n}\n\n.icons-footer[_ngcontent-%COMP%] {\n  height: 120px;\n  padding: 10%;\n  width: 100%;\n}\n\n.icon-footer[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border-radius: 20px;\n  margin-left: 15%;\n}\n\n.logo-footer[_ngcontent-%COMP%] {\n  height: 30px;\n  width: auto;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  margin-bottom: 20px;\n}\n\n.address-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #D27E95;\n  margin-bottom: 30px;\n  margin-top: 30px;\n  position: relative;\n  z-index: 3;\n}\n\n.logo-car-footer[_ngcontent-%COMP%] {\n  height: 150px;\n  margin-bottom: 7px;\n  position: absolute;\n  right: 0;\n  margin-left: auto;\n  z-index: 2;\n  width: 30%;\n  display: block;\n  top: 133px;\n}\n\n.copyright-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #817f80;\n  font-size: 13px;\n  margin-bottom: 0;\n  padding-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZvb3Rlci5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsaURBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBRUo7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFFSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUFBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBR0o7O0FBREE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBSUo7O0FBRkE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUFLSjs7QUFIQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBTUoiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyXHJcbiAgICBiYWNrZ3JvdW5kOiAjQTYwMzJGXHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggNXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMzUpXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcclxuICAgIFxyXG5oclxyXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4XHJcbiAgICB3aWR0aDogOTAlXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDI3RTk1XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0b1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcclxuICAgIHotaW5kZXg6IDNcclxuXHJcblxyXG4uaWNvbnMtZm9vdGVyXHJcbiAgICBoZWlnaHQ6IDEyMHB4XHJcbiAgICBwYWRkaW5nOiAxMCVcclxuICAgIHdpZHRoOiAxMDAlXHJcblxyXG5cclxuLmljb24tZm9vdGVyXHJcbiAgICBoZWlnaHQ6IDQwcHhcclxuICAgIHdpZHRoOiA0MHB4XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4XHJcbiAgICBtYXJnaW4tbGVmdDogMTUlXHJcblxyXG4ubG9nby1mb290ZXJcclxuICAgIGhlaWdodDogMzBweFxyXG4gICAgd2lkdGg6IGF1dG9cclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvXHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG9cclxuICAgIGRpc3BsYXk6IGJsb2NrXHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4XHJcblxyXG4uYWRkcmVzcy1mb290ZXJcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAgICBcclxuICAgIGNvbG9yOiAjRDI3RTk1XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcclxuICAgIHotaW5kZXg6IDNcclxuXHJcbi5sb2dvLWNhci1mb290ZXJcclxuICAgIGhlaWdodDogMTUwcHhcclxuICAgIG1hcmdpbi1ib3R0b206IDdweFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlXHJcbiAgICByaWdodDowXHJcbiAgICBtYXJnaW4tbGVmdDogYXV0b1xyXG4gICAgei1pbmRleDogMlxyXG4gICAgd2lkdGg6IDMwJVxyXG4gICAgZGlzcGxheTogYmxvY2tcclxuICAgIHRvcDogMTMzcHhcclxuXHJcbi5jb3B5cmlnaHQtZm9vdGVyXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuICAgIGNvbG9yOiAjODE3ZjgwXHJcbiAgICBmb250LXNpemU6IDEzcHhcclxuICAgIG1hcmdpbi1ib3R0b206IDBcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4Il19 */"] });


/***/ }),

/***/ "fpUm":
/*!**********************************************!*\
  !*** ./src/app/services/ciudades.service.ts ***!
  \**********************************************/
/*! exports provided: CiudadesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CiudadesService", function() { return CiudadesService; });
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.config */ "aR35");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class CiudadesService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    obtenerCiudades() {
        return this.httpClient.get(`${_app_config__WEBPACK_IMPORTED_MODULE_0__["API_BASE_URL"]}/ciudades`);
    }
}
CiudadesService.ɵfac = function CiudadesService_Factory(t) { return new (t || CiudadesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CiudadesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CiudadesService, factory: CiudadesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "jT/F":
/*!********************************************!*\
  !*** ./src/app/services/upload.service.ts ***!
  \********************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.config */ "aR35");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class UploadService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    subirImagen(imagen) {
        return this.httpClient.post(`${_app_config__WEBPACK_IMPORTED_MODULE_0__["API_BASE_URL"]}/upload`, imagen);
    }
}
UploadService.ɵfac = function UploadService_Factory(t) { return new (t || UploadService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UploadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UploadService, factory: UploadService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");






function NavbarComponent_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 10);
} }
function NavbarComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.cantidadProductosCarrito);
} }
function NavbarComponent_ul_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Ordena");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Iniciar Sesi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Registrarse");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NavbarComponent_ul_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "fa-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "fa-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Historial de Compras");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_ul_9_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.logOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "fa-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Cerrar Sesi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r3.faUserCircle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r3.usuario.nombre, " ", ctx_r3.usuario.apellido, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r3.faSignOutAlt);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r3.faClipboardList);
} }
class NavbarComponent {
    constructor(cookiesService, _route) {
        this.cookiesService = cookiesService;
        this._route = _route;
        this.faUserCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faUserCircle"];
        this.faSignOutAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faSignOutAlt"];
        this.faClipboardList = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faClipboardList"];
        this.faShoppingCart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faShoppingCart"];
        this.islogged = false;
        this.usuario = '';
        this.cantidadProductosCarrito = 0;
    }
    ngOnInit() {
        if (this.cookiesService.check('nanyUsuarioId')) {
            console.log("Usuario Logeado");
            this.islogged = true;
            this.usuario = {
                _id: this.cookiesService.get('nanyUsuarioId'),
                nombre: this.cookiesService.get('nanyUsuarioNombre'),
                apellido: this.cookiesService.get('nanyUsuarioApellido'),
            };
            let localStorage = window.localStorage;
            let carritoInfo = JSON.parse(localStorage.getItem('productosCarrito' + this.usuario.nombre));
            if (carritoInfo != undefined) {
                if (carritoInfo.length != 0)
                    this.cantidadProductosCarrito = carritoInfo.length;
            }
        }
    }
    logOut() {
        this.cookiesService.delete('nanyUsuarioId');
        this.cookiesService.delete('nanyUsuarioNombre');
        this.cookiesService.delete('nanyUsuarioApellido');
        this.islogged = false;
        this.usuario = '';
        console.log('Cerrar Sesion');
        this._route.navigate(['/']);
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 10, vars: 4, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "container-fluid"], ["src", "../../assets/logos/Logo-Nany-trans-1.png", "routerLink", "/home", "id", "img-logo"], ["class", "fa-shooping", "src", "../../assets/iconos/shopping-cart-icon.png", "routerLink", "/checkout", "alt", "", "srcset", "", 4, "ngIf"], ["class", "span-shooping-qty", 4, "ngIf"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarContent", 1, "collapse", "navbar-collapse"], ["class", "navbar-nav me-auto mb-2 mb-lg-0", "id", "noLoggedDropdown", 4, "ngIf"], ["class", "navbar-nav me-auto mb-2 mb-lg-0", "id", "LoggedDropdown", 4, "ngIf"], ["src", "../../assets/iconos/shopping-cart-icon.png", "routerLink", "/checkout", "alt", "", "srcset", "", 1, "fa-shooping"], [1, "span-shooping-qty"], ["id", "noLoggedDropdown", 1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], ["src", "../../assets/logos/Logo2-Nany-trans-blanco.png", "id", "logoNavbar"], ["type", "button", "routerLink", "/categorias", "id", "btnNoLogged1", 1, "nav-link", "btn", "btn-loggin"], ["type", "button", "routerLink", "/login", "id", "btnNoLogged2", 1, "nav-link", "btn", "btn-loggin", "mt-3"], ["type", "button", "routerLink", "/registro", "id", "btnNoLogged3", 1, "nav-link", "btn", "btn-loggin", "mt-3", "mb-3"], ["id", "LoggedDropdown", 1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], ["src", "../../assets/logos/Logo2-Nany-trans.png", "id", "logoNavbar"], ["type", "button", "routerLink", "/perfil", "id", "btnLogged1", 1, "nav-link", "btn", "btn-loggin"], [1, "fa-dropdown", 3, "icon"], ["type", "button", "routerLink", "/historial", "id", "btnLogged2", 1, "nav-link", "btn", "btn-loggin", "mt-3"], ["type", "button", "id", "btnLogged3", 1, "nav-link", "btn", "btn-loggin", "mt-3", "mb-3", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NavbarComponent_img_3_Template, 1, 0, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NavbarComponent_span_4_Template, 2, 1, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, NavbarComponent_ul_8_Template, 13, 0, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, NavbarComponent_ul_9_Template, 16, 5, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.usuario != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cantidadProductosCarrito != 0 && ctx.usuario != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.usuario == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.usuario != "");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"]], styles: ["@font-face {\n  font-family: \"Roboto\";\n  src: url('Roboto-Regular.ttf');\n}\n@font-face {\n  font-family: \"Raleway\";\n  src: url('Raleway-Bold.ttf');\n}\n@font-face {\n  font-family: \"Raleway-Thin\";\n  src: url('Raleway-Thin.ttf');\n}\n\n\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"Raleway\";\n  font-weight: bold;\n}\nh3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%] {\n  color: #D60451;\n  font-weight: bold;\n  font-size: 22px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #D60451;\n  color: #fff;\n  border-radius: 11px;\n  border: none;\n}\n\n@media (max-width: 960px) {\n  .container-fluid[_ngcontent-%COMP%] {\n    padding-right: 0px !important;\n    padding-left: 0px !important;\n  }\n\n  .carousel-land[_ngcontent-%COMP%] {\n    height: 250px;\n    z-index: 1;\n    position: absolute;\n  }\n\n  .carousel-landing[_ngcontent-%COMP%] {\n    background-attachment: fixed;\n    height: 250px !important;\n    background-repeat: no-repeat;\n  }\n\n  .carousel-info[_ngcontent-%COMP%] {\n    z-index: 2;\n    position: relative;\n    padding-top: 70px;\n    width: 40%;\n    margin-left: 30px;\n  }\n\n  .carousel-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    color: #000;\n    text-align: center;\n    font-size: 1rem;\n    word-wrap: break-word;\n  }\n\n  .carousel-info[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin-top: 15px;\n    margin-left: 10px;\n    height: 30px;\n    width: 112px;\n    font-size: 15px;\n    text-align: center;\n    vertical-align: middle;\n    line-height: 0;\n  }\n\n  #carouselInfo[_ngcontent-%COMP%] {\n    height: 250px;\n  }\n\n  .card-body-category[_ngcontent-%COMP%] {\n    height: 90px;\n    width: 96px;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    margin-top: 15px;\n  }\n\n  .card-landing[_ngcontent-%COMP%] {\n    height: 120px;\n  }\n\n  .card-body-landing[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    line-height: 4;\n    color: #fff;\n    margin-left: 20px;\n    width: 100%;\n  }\n\n  .products-landing[_ngcontent-%COMP%] {\n    background-color: #FBF3F3;\n    position: relative;\n    margin-top: 15px;\n    height: auto;\n  }\n\n  .products-landing[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 20px;\n    margin-top: 50px;\n  }\n\n  .products-landing[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    color: #000000b6;\n    font-size: 13px;\n    text-align: center;\n    margin-top: 5px;\n  }\n\n  .carousel-item-bg[_ngcontent-%COMP%] {\n    margin-top: 30px;\n    background-color: #fff;\n    border-radius: 25px;\n    width: 50%;\n    margin-right: auto;\n    margin-left: auto;\n    height: 170px;\n  }\n\n  .products-carousel-landing[_ngcontent-%COMP%] {\n    width: 100%;\n    box-sizing: border-box;\n    height: 100%;\n  }\n\n  .products-title-landing[_ngcontent-%COMP%] {\n    color: #A6032F;\n    font-size: 1rem;\n    overflow: hidden;\n    word-break: break-word;\n    margin-top: 10px;\n    margin-bottom: 10px;\n  }\n\n  .product-btn-carousel-landing[_ngcontent-%COMP%] {\n    background-color: #A6032F;\n    color: #fff;\n    border-radius: 20px;\n    background-size: 80% 80%;\n  }\n\n  .btn-fix-carousel[_ngcontent-%COMP%] {\n    opacity: 1;\n    width: 25%;\n  }\n\n  .products-price-landing[_ngcontent-%COMP%] {\n    color: #000;\n    font-size: 1.2rem;\n  }\n\n  .products-qty-landing[_ngcontent-%COMP%] {\n    box-sizing: border-box;\n    margin-left: auto;\n    margin-right: auto;\n    display: flex;\n    width: 60%;\n    border-radius: 25px;\n    border: 1px solid #A6032F;\n    margin: 10px auto;\n    height: 50px;\n    text-align: center;\n    font-size: 2.2rem;\n    color: #000;\n  }\n\n  .button-counter-landing[_ngcontent-%COMP%] {\n    background-color: #A6032F;\n    border: none;\n    color: white;\n    border-radius: 50%;\n    height: 50px;\n    width: 50px;\n    font-size: 4rem;\n    line-height: 0;\n    font-family: revert;\n  }\n\n  .btn-minus-landing[_ngcontent-%COMP%], .btn-plus-landing[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0px;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    width: 15%;\n  }\n\n  .btn-minus-landing[_ngcontent-%COMP%] {\n    right: 20%;\n    padding-bottom: 12px;\n    font-size: 4.5rem;\n  }\n\n  .btn-plus-landing[_ngcontent-%COMP%] {\n    left: 20%;\n  }\n\n  .products-btn-landing[_ngcontent-%COMP%] {\n    background-color: #A6032F;\n    margin-left: auto;\n    margin-right: auto;\n    width: 50%;\n    display: block;\n    height: 40px;\n    border-radius: 35px;\n    margin-top: 30px;\n    margin-bottom: 100px;\n  }\n\n  .info-landing[_ngcontent-%COMP%] {\n    position: relative;\n    height: 220px;\n  }\n\n  .info-landing-layout[_ngcontent-%COMP%] {\n    margin-top: -40px;\n    border-radius: 60%;\n    height: 90px;\n    width: 100%;\n    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);\n    position: relative;\n    background: #A6032F;\n  }\n\n  .info-landing-layout2[_ngcontent-%COMP%] {\n    background: #A6032F;\n    position: absolute;\n    height: 170px;\n    z-index: 2;\n    width: 100%;\n    margin-top: 47px;\n  }\n\n  .info-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 63px;\n    width: 63px;\n    margin-left: auto;\n    margin-right: auto;\n    display: flex;\n  }\n\n  .info-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #fff;\n    text-align: center;\n    margin-top: 20px;\n    font-size: 14px;\n  }\n\n  .card-company-landing[_ngcontent-%COMP%] {\n    height: 150px;\n    width: 100%;\n    box-sizing: content-box;\n    display: flex;\n  }\n\n  .card-company-landing[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: auto;\n    width: 70%;\n    box-sizing: border-box;\n    margin: auto;\n  }\n\n  .contact-landing[_ngcontent-%COMP%] {\n    background-color: #FFE9C7;\n    font-size: 1rem;\n    padding-left: 10px;\n    padding-top: 15px;\n    padding-bottom: 10px;\n  }\n\n  .contact-landing[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n  }\n\n  \n  .container-login[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n\n  .form-contents[_ngcontent-%COMP%] {\n    background-color: #D60451;\n    height: 350px;\n    border-top-left-radius: 40%;\n    border-top-right-radius: 40%;\n    color: #fff;\n  }\n\n  .form-contents[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    padding-top: 60px;\n    text-align: center;\n  }\n\n  .form-contents[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: auto;\n    border-radius: 12px;\n    background-color: #FFE9C7;\n  }\n\n  .form-contents[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    margin-top: 30px;\n    margin-bottom: 22px;\n    padding-left: 22px;\n  }\n\n  .form-links[_ngcontent-%COMP%] {\n    background-color: #D60451;\n    height: 200px;\n  }\n\n  .form-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #fff;\n    text-decoration: none;\n    font-size: 13px;\n    padding-left: 22px;\n  }\n\n  .form-links[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    margin-top: 30px;\n    text-align: center;\n    color: #FFF;\n  }\n\n  .login-feedback[_ngcontent-%COMP%] {\n    padding-left: 20px;\n    color: #fff;\n    position: absolute;\n  }\n\n  checkout-feedback[_ngcontent-%COMP%] {\n    color: #D60451;\n  }\n\n  #btn-login[_ngcontent-%COMP%] {\n    border-radius: 20px;\n    background-color: #1A7BDB;\n    border-color: #1A7BDB;\n    color: #FFF;\n    width: 90%;\n    height: 40px;\n    margin-left: 5%;\n    margin-top: 25px;\n  }\n\n  #logo[_ngcontent-%COMP%] {\n    width: 60%;\n    margin-left: auto;\n    margin-right: auto;\n    display: flex;\n    margin-top: 20px;\n    margin-bottom: 20px;\n  }\n\n  #register[_ngcontent-%COMP%] {\n    color: #1A7BDB;\n    text-decoration: none;\n    font-size: 15px;\n    padding: 0;\n    display: flex;\n    margin-right: auto;\n    margin-left: auto;\n    width: 20%;\n  }\n\n  .registro-add-response[_ngcontent-%COMP%] {\n    display: block;\n    color: #FFE9C7;\n    text-align: center;\n    margin-top: 10px;\n  }\n\n  \n  .info[_ngcontent-%COMP%] {\n    padding: 0px 10px;\n  }\n\n  .aviso[_ngcontent-%COMP%] {\n    padding: 5px 20px;\n  }\n\n  .info[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    color: #D60451;\n    text-align: center;\n    margin-top: 10px;\n    margin-bottom: 25px;\n  }\n\n  .form-contenedor[_ngcontent-%COMP%] {\n    background-color: #D60451;\n    height: 320px;\n    border-top-left-radius: 40%;\n    border-top-right-radius: 40%;\n    color: #fff;\n  }\n\n  .form-contenedor[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    margin-top: 28px;\n    margin-bottom: 10px;\n    padding-left: 22px;\n  }\n\n  .form-contenedor[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    padding-top: 60px;\n    text-align: center;\n  }\n\n  .register[_ngcontent-%COMP%] {\n    background-color: #D60451;\n    height: auto;\n    color: #fff;\n  }\n\n  .register[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: auto;\n    border-radius: 12px;\n    background-color: #FFE9C7;\n  }\n\n  .register[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 20px;\n    margin-bottom: 10px;\n    padding-left: 22px;\n  }\n\n  .register[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    margin-top: 28px;\n    margin-bottom: 10px;\n    padding-left: 22px;\n  }\n\n  .register[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    margin-top: 30px;\n    padding: 0;\n    text-align: center;\n    color: #FFF;\n  }\n\n  .inp-form[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: auto;\n    border-radius: 12px;\n    background-color: #FFE9C7;\n  }\n\n  .chk-form[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    padding-left: 22px;\n    padding-right: 10px;\n  }\n\n  #btn-registro[_ngcontent-%COMP%] {\n    border-radius: 20px;\n    background-color: #1A7BDB;\n    border-color: #1A7BDB;\n    color: #FFF;\n    width: 60%;\n    height: 40px;\n    margin-left: 20%;\n    margin-top: 10px;\n    margin-bottom: 25px;\n  }\n\n  #registro[_ngcontent-%COMP%] {\n    color: #11BDF2;\n    text-decoration: none;\n    font-size: 15px;\n    margin-left: auto;\n    margin-right: auto;\n    display: flex;\n    width: -webkit-max-content;\n    width: max-content;\n    padding: 0;\n  }\n\n  \n  #categoryContainer[_ngcontent-%COMP%] {\n    padding-bottom: 50px;\n  }\n\n  .card-title-category[_ngcontent-%COMP%] {\n    color: #fff;\n    text-align: center;\n    font-size: 1.2rem;\n    height: 25px;\n  }\n\n  #categoryContainer[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n    color: #A6032F;\n  }\n\n  #categoryContainer[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.25);\n    border-radius: 20px;\n    width: 95%;\n    margin-left: auto;\n    margin-right: auto;\n    height: 160px;\n  }\n\n  #categoryContainer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    text-decoration: none;\n  }\n\n  \n  #companyContainer[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    color: #D60451;\n  }\n\n  #companyContainer[_ngcontent-%COMP%]   .card-company-landing[_ngcontent-%COMP%] {\n    height: 115px;\n  }\n\n  #companyContainer[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.25);\n    border-radius: 20px;\n    width: 95%;\n    margin-left: auto;\n    margin-right: auto;\n    height: 160px;\n  }\n\n  \n  #profileContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 80px;\n    margin-left: auto;\n    display: block;\n  }\n\n  #profileContainer[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    color: rgba(0, 0, 0, 0.55);\n    margin-bottom: 1px;\n    margin-left: 10px;\n  }\n\n  #profileContainer[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    color: #000;\n    text-align: center;\n    margin: 20px 0px;\n  }\n\n  #profileContainer[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n    margin: 10px 0px;\n    width: 90%;\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  .info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    color: #D60451;\n    text-align: center;\n  }\n\n  .form-content[_ngcontent-%COMP%] {\n    border-top-left-radius: 40%;\n    border-top-right-radius: 40%;\n    color: #fff;\n  }\n\n  .form-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    margin-top: 30px !important;\n    margin-bottom: 5px !important;\n    color: #000 !important;\n    margin-left: 0px !important;\n  }\n\n  .form-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    padding-top: 60px;\n    text-align: center;\n  }\n\n  .form-content[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: auto;\n    border-radius: 12px;\n    background-color: #FFE9C7;\n  }\n\n  .form-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    margin-top: 15px;\n    margin-bottom: 10px;\n    padding-left: 22px;\n  }\n\n  .form-content[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    margin-top: 30px;\n    padding: 0;\n    text-align: center;\n    color: #000000;\n  }\n\n  .input-form[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: auto;\n    border-radius: 12px;\n    background-color: #FFE9C7;\n    border: 2px solid #FFE9C7;\n  }\n\n  .chks-form[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    padding-left: 22px;\n  }\n\n  .chks-form[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {\n    color: #000;\n  }\n\n  #btn-save[_ngcontent-%COMP%] {\n    border-radius: 20px;\n    background-color: #A6032F;\n    border-color: #A6032F;\n    color: #FFF;\n    width: 60%;\n    height: 40px;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    margin-top: 50px;\n    margin-bottom: 15px;\n  }\n\n  #btn-cancel[_ngcontent-%COMP%] {\n    border-radius: 20px;\n    background-color: #525050;\n    border: none;\n    color: #FFF;\n    width: 60%;\n    height: 40px;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    padding-bottom: 20px;\n  }\n\n  \n  #historialContainer[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%], #historial[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n    width: 90%;\n    margin-bottom: 10px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  #historial[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], #historial[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    color: #666363;\n  }\n\n  .img-historial[_ngcontent-%COMP%] {\n    height: 80px;\n    margin-bottom: 10px;\n    width: auto;\n    display: flex;\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  .btn-state-order[_ngcontent-%COMP%] {\n    color: #fff;\n    border-radius: 35px;\n    font-size: 0.7rem;\n    text-align: center;\n    text-overflow: hidden;\n    white-space: nowrap;\n    width: 100%;\n  }\n\n  .btn-onWay[_ngcontent-%COMP%] {\n    background-color: #FF1E1E;\n  }\n\n  .btn-onOrigin[_ngcontent-%COMP%] {\n    background-color: #FFE500;\n  }\n\n  .btn-onDestiny[_ngcontent-%COMP%] {\n    background-color: #FF008A;\n  }\n\n  .btn-delivered[_ngcontent-%COMP%] {\n    background-color: #00EF35;\n  }\n\n  #btn-save-image[_ngcontent-%COMP%] {\n    background-color: #A6032F;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    margin-top: 20px;\n    border: none;\n  }\n\n  .btn-upload-image[_ngcontent-%COMP%] {\n    cursor: pointer;\n    padding: 50px 10px;\n    color: #fff;\n    opacity: 0.9;\n    background: #A6032F;\n    border-radius: 50%;\n    width: 37%;\n    margin-left: auto;\n    margin-right: auto;\n    display: flex;\n    margin-top: 40px;\n  }\n\n  .btn-uploaded-image[_ngcontent-%COMP%] {\n    cursor: pointer;\n    padding: 40px 10px;\n    color: #fff;\n    opacity: 0.9;\n    background: #00BB2D;\n    border-radius: 50%;\n    width: 37%;\n    margin-left: auto;\n    margin-right: auto;\n    display: flex;\n    margin-top: 40px;\n  }\n\n  .check-upload[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n    font-size: 2rem;\n    box-sizing: border-box;\n  }\n\n  .btn-ready-image[_ngcontent-%COMP%] {\n    background-color: #00BB2D;\n  }\n\n  \n  .btn-modal[_ngcontent-%COMP%] {\n    background-color: #A6032F;\n    border-radius: 15px;\n    margin: auto;\n    width: 40%;\n    border-color: #A6032F;\n  }\n\n  .table[_ngcontent-%COMP%] {\n    background-color: #F3F2F0;\n    border-radius: 10px;\n    padding: 10px;\n  }\n\n  .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n  }\n\n  .total-invoice[_ngcontent-%COMP%] {\n    font-size: 0.75rem !important;\n  }\n\n  .total-invoice-number[_ngcontent-%COMP%] {\n    font-size: 0.6rem !important;\n  }\n\n  .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    font-family: \"Roboto\";\n    box-sizing: border-box;\n  }\n\n  tfoot[_ngcontent-%COMP%] {\n    border-color: transparent;\n  }\n\n  .invoice-description[_ngcontent-%COMP%] {\n    word-break: break-word;\n    font-size: 0.6rem !important;\n  }\n\n  .invoice-cost[_ngcontent-%COMP%] {\n    font-size: 0.5rem !important;\n  }\n\n  \n  .product-company[_ngcontent-%COMP%] {\n    margin: 30px 5px;\n    border-radius: 25px;\n    border: 3px solid #92509D;\n    box-sizing: border-box;\n    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.15);\n    text-decoration: none;\n  }\n\n  .product-company[_ngcontent-%COMP%]:active {\n    background-color: #92509D;\n  }\n\n  .product-img-company[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 80%;\n    margin: 10px;\n    height: auto;\n  }\n\n  .product-company[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    margin-bottom: 10px;\n    color: #000;\n  }\n\n  .product-start[_ngcontent-%COMP%] {\n    color: #fCC607;\n  }\n\n  .product-touch-company[_ngcontent-%COMP%] {\n    float: right;\n    background-color: #92509D;\n    width: 15%;\n    margin-bottom: 5px;\n  }\n\n  .products-btn-car[_ngcontent-%COMP%] {\n    background-color: #A6032F;\n    margin-left: auto;\n    margin-right: auto;\n    width: 50%;\n    display: block;\n    height: 40px;\n    border-radius: 35px;\n  }\n\n  .products-btn-details[_ngcontent-%COMP%] {\n    background-color: gray;\n    margin: 10px auto 30px auto;\n    width: 50%;\n    display: block;\n    height: 40px;\n    border-radius: 35px;\n    border: none;\n  }\n\n  \n  .modal-header-company[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n  }\n\n  \n  .modal-body-product[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 40%;\n    height: auto;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n  }\n\n  \n  .bc-checkout-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 30%;\n    margin: 30px auto 10px auto;\n    height: auto;\n    display: block;\n  }\n\n  .bc-checkout-title[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n    color: #D60451;\n    width: 80%;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n  }\n\n  .bc-body[_ngcontent-%COMP%] {\n    margin: 5px auto;\n  }\n\n  .bc-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n    border-radius: 50px;\n    width: 17%;\n    height: 58px;\n    border: none;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  .bc-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-top: 10px;\n    font-weight: bold;\n  }\n\n  .bc-checkout-active[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    background-color: #A6032F;\n    color: #fff;\n  }\n\n  .bc-checkout-disable[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    border: 1px solid #A6032F;\n    color: #000;\n    background-color: transparent;\n  }\n\n  .title-banner-chck[_ngcontent-%COMP%] {\n    background-color: #A6032F;\n    color: #fff;\n    width: 70%;\n    height: 45px;\n    line-height: 3;\n    padding-left: 10%;\n    border-bottom-right-radius: 25px;\n    border-top-right-radius: 25px;\n    margin: 20px 0;\n  }\n\n  .card-item-car[_ngcontent-%COMP%] {\n    background-color: #F3F2F0;\n    padding: 15px;\n    border-radius: 10px;\n    margin-left: auto;\n    margin-right: auto;\n    width: 95%;\n    box-shadow: 2px 3px 2px #00000054;\n  }\n\n  .card-item-car[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n    margin: 10px auto;\n  }\n\n  .card-item-description[_ngcontent-%COMP%] {\n    width: 60%;\n    position: relative;\n    margin-left: auto;\n    font-family: \"Roboto\";\n  }\n\n  .card-item-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: bold;\n    text-align: end;\n    font-size: 0.8rem;\n    color: gray;\n    width: 70%;\n    margin-left: auto;\n  }\n\n  .card-item-title[_ngcontent-%COMP%] {\n    display: flex;\n    position: absolute;\n    width: 50%;\n  }\n\n  .cost-title[_ngcontent-%COMP%] {\n    display: block;\n    text-align: right;\n    font-weight: bolder;\n    margin-bottom: -2px;\n  }\n\n  .cost-details[_ngcontent-%COMP%] {\n    display: block;\n    text-align: right;\n    font-weight: bolder;\n    color: gray;\n  }\n\n  .card-item-quantity[_ngcontent-%COMP%] {\n    width: 100%;\n    position: relative;\n    display: flow-root;\n  }\n\n  .card-item-quantity[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    position: relative;\n    float: right;\n    font-family: \"Roboto\";\n    height: 40px;\n    width: 50%;\n    border-radius: 20px;\n    border: 1px solid gray;\n    text-align: right;\n    padding-right: 10px;\n    display: block;\n    outline: none;\n  }\n\n  .card-item-quantity[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus-visible {\n    border-color: #A6032F;\n    border-radius: 20px;\n  }\n\n  .cost-total[_ngcontent-%COMP%] {\n    color: #000;\n    font-family: \"Roboto\";\n    font-weight: bold;\n    text-align: right;\n    margin-top: 1rem;\n  }\n\n  .btn-check-continue[_ngcontent-%COMP%] {\n    background-color: #A6032F;\n    color: #fff;\n    border: none;\n    border-radius: 25px;\n    width: 70%;\n    margin: 10px auto;\n    display: block;\n    height: 45px;\n    font-size: 1.2rem;\n  }\n\n  .btn-check-continue[_ngcontent-%COMP%]:disabled {\n    background-color: #a6032f85;\n  }\n\n  .btn-check-back[_ngcontent-%COMP%] {\n    background-color: #221E1F;\n    color: #fff;\n    border: none;\n    border-radius: 25px;\n    width: 70%;\n    margin: 10px auto;\n    display: block;\n    height: 45px;\n    font-size: 1.2rem;\n  }\n\n  .header-checkout[_ngcontent-%COMP%] {\n    color: #A6032F;\n    width: 30%;\n    height: 1px !important;\n    opacity: inherit;\n    margin-top: 4px;\n  }\n\n  .title-checkout[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n\n  .form-checkout-info[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    color: #5b5959;\n    font-size: 0.9rem;\n  }\n\n  .form-checkout-info[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    height: 35px;\n  }\n\n  .form-checkout-info[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-checkout-info[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    border-radius: 10px;\n    border: 1px solid #5b595952;\n    margin-top: 10px;\n    margin-bottom: 20px;\n    padding-left: 10px;\n    outline: none;\n    box-sizing: border-box;\n    width: 100%;\n  }\n\n  .form-checkout-info[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus-visible, .form-checkout-info[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus-visible {\n    border: 1px solid #A6032F;\n  }\n\n  .form-checkout-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: auto;\n    height: 20px;\n    display: inline;\n    margin-top: -15px;\n    float: right;\n    margin-right: auto;\n  }\n\n  .footer-check-line[_ngcontent-%COMP%] {\n    color: #A6032F;\n    width: 80%;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    opacity: 1;\n  }\n\n  .table[_ngcontent-%COMP%] {\n    background-color: #F3F2F0;\n    border-radius: 10px;\n    padding: 10px;\n  }\n\n  .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n  }\n\n  .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    font-family: \"Roboto\";\n    box-sizing: border-box;\n  }\n\n  tfoot[_ngcontent-%COMP%] {\n    border-color: transparent;\n  }\n\n  .invoice-description[_ngcontent-%COMP%] {\n    word-break: break-word;\n    font-size: 0.6rem !important;\n  }\n\n  .invoice-cost[_ngcontent-%COMP%] {\n    font-size: 0.5rem !important;\n  }\n\n  .check-order-header[_ngcontent-%COMP%] {\n    color: #A6032F;\n    text-align: center;\n  }\n\n  .check-order-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  .check-order-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n    font-weight: bold;\n    font-family: \"Raleway-Thin\" !important;\n  }\n\n  .check-order-resume[_ngcontent-%COMP%] {\n    margin-top: 40px;\n    border: 1px solid #80808038;\n    border-radius: 10px;\n    padding: 20px;\n    margin-left: 0.8rem;\n    margin-right: 0.8rem;\n  }\n\n  .check-order-resume[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-family: \"Raleway-Thin\" !important;\n  }\n\n  .table-details-small[_ngcontent-%COMP%] {\n    background-color: transparent !important;\n    width: 95%;\n    margin-left: 0.5rem;\n    margin-right: 0.5rem;\n    font-family: \"Raleway\";\n    margin-bottom: 20px;\n  }\n\n  .order-description[_ngcontent-%COMP%] {\n    color: gray;\n    word-break: break-word;\n    text-align: left;\n    margin-bottom: 70px;\n  }\n}\n.navbar-toggler[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  margin-bottom: 5px;\n}\n.navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  font-weight: bold;\n  width: 70%;\n  margin: auto;\n}\n.fa-dropdown[_ngcontent-%COMP%] {\n  float: left;\n  margin-left: 30px;\n  font-size: 1.1rem;\n}\n.fa-shooping[_ngcontent-%COMP%] {\n  width: auto;\n  height: 40px;\n  margin-left: 30%;\n  margin-bottom: 4px;\n}\n.span-shooping-qty[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  margin-right: 19%;\n  margin-bottom: 30px;\n  background-color: #D60451;\n  border-radius: 60px;\n  color: aliceblue;\n  width: 20px;\n  text-align: center;\n  height: 21px;\n  line-height: initial;\n  z-index: 2;\n  top: 5px;\n}\nhr[_ngcontent-%COMP%] {\n  margin: 15px 45px;\n  background-color: white;\n  opacity: 0.5;\n}\n#img-logo[_ngcontent-%COMP%] {\n  height: 40px;\n  margin-left: 5px;\n}\n#logoNavbar[_ngcontent-%COMP%] {\n  height: auto;\n  margin-top: 25px;\n  margin-left: auto;\n  width: 30%;\n  margin-right: auto;\n  display: flex;\n}\n#noLoggedDropdown[_ngcontent-%COMP%] {\n  background: linear-gradient(0.85deg, rgba(166, 3, 47, 0.6) 0.75%, rgba(255, 255, 255, 0) 40.4%, rgba(255, 255, 255, 0) 51.34%), #D60451;\n  background-blend-mode: multiply, normal;\n}\n#LoggedDropdown[_ngcontent-%COMP%] {\n  background: #fff;\n  background-blend-mode: multiply, normal;\n}\n.btn-loggin[_ngcontent-%COMP%] {\n  border-radius: 40px;\n}\n#btnNoLogged1[_ngcontent-%COMP%] {\n  background-color: #FFE9C7;\n  border-color: #FFE9C7;\n  color: #D60451;\n}\n#btnNoLogged2[_ngcontent-%COMP%] {\n  background-color: #1A7BDB;\n  border-color: #1A7BDB;\n  color: #FFF;\n}\n#btnNoLogged3[_ngcontent-%COMP%] {\n  background-color: #11BDF2;\n  border-color: #11BDF2;\n  color: #FFF;\n}\n#btnLogged1[_ngcontent-%COMP%] {\n  background-color: #FFE9C7;\n  border-color: #FFE9C7;\n  color: #D60451;\n}\n#btnLogged2[_ngcontent-%COMP%] {\n  background-color: #A6032F;\n  border-color: #A6032F;\n  color: #FFF;\n}\n#btnLogged3[_ngcontent-%COMP%] {\n  background-color: #8A8282;\n  border-color: #8A8282;\n  color: #FFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzLnNhc3MiLCIuLlxcLi5cXC4uXFxuYXZiYXIuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsYUFBQTtBQUNBO0VBQ0kscUJBQUE7RUFDQSw4QkFBQTtBQ0NKO0FEQ0E7RUFDSSxzQkFBQTtFQUNBLDRCQUFBO0FDQ0o7QURDQTtFQUNJLDJCQUFBO0VBQ0EsNEJBQUE7QUNDSjtBRENBLGNBQUE7QUFPQSxnQkFBQTtBQUlBLHFCQUFBO0FBTUE7RUFDSSxzQkFBQTtFQUNBLGlCQUFBO0FDYko7QURlQTtFQUNJLGNBckJVO0VBc0JWLGlCQUFBO0VBQ0EsZUFBQTtBQ1pKO0FEY0E7RUFDSSx5QkExQlU7RUEyQlYsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ1hKO0FEYUEsd0JBQUE7QUFFQTtFQUNJO0lBQ0ksNkJBQUE7SUFDQSw0QkFBQTtFQ1hOOztFRGFFO0lBQ0ksYUFBQTtJQUNBLFVBQUE7SUFDQSxrQkFBQTtFQ1ZOOztFRFlFO0lBQ0ksNEJBQUE7SUFDQSx3QkFBQTtJQUNBLDRCQUFBO0VDVE47O0VEV0U7SUFDSSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLFVBQUE7SUFDQSxpQkFBQTtFQ1JOOztFRFVFO0lBQ0ksV0FBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLHFCQUFBO0VDUE47O0VEU0U7SUFDSSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxzQkFBQTtJQUNBLGNBQUE7RUNOTjs7RURRRTtJQUNJLGFBQUE7RUNMTjs7RURPRTtJQUNJLFlBQUE7SUFDQSxXQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtFQ0pOOztFRE1FO0lBQ0ksYUFBQTtFQ0hOOztFREtFO0lBQ0ksY0FBQTtJQUNBLFdBQUE7SUFDQSxpQkFBQTtJQUNBLFdBQUE7RUNGTjs7RURJRTtJQUNJLHlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7RUNETjs7RURHRTtJQUNJLGVBQUE7SUFDQSxnQkFBQTtFQ0FOOztFREVFO0lBQ0ksZ0JBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0VDQ047O0VEQ0U7SUFDSSxnQkFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7SUFDQSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGFBQUE7RUNFTjs7RURBRTtJQUNJLFdBQUE7SUFDQSxzQkFBQTtJQUNBLFlBQUE7RUNHTjs7RURERTtJQUNJLGNBekhNO0lBMEhOLGVBQUE7SUFDQSxnQkFBQTtJQUNBLHNCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtFQ0lOOztFREZFO0lBQ0kseUJBaklNO0lBa0lOLFdBQUE7SUFDQSxtQkFBQTtJQUNBLHdCQUFBO0VDS047O0VESEU7SUFDSSxVQUFBO0lBQ0EsVUFBQTtFQ01OOztFREpFO0lBQ0ksV0FBQTtJQUNBLGlCQUFBO0VDT047O0VETEU7SUFDSSxzQkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0lBQ0EsVUFBQTtJQUNBLG1CQUFBO0lBQ0EseUJBQUE7SUFDQSxpQkFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsV0FBQTtFQ1FOOztFRE5FO0lBQ0kseUJBN0pNO0lBOEpOLFlBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7SUFDQSxjQUFBO0lBQ0EsbUJBQUE7RUNTTjs7RURQRTtJQUNJLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0lBQ0EsVUFBQTtFQ1VOOztFRFJFO0lBQ0ksVUFBQTtJQUNBLG9CQUFBO0lBQ0EsaUJBQUE7RUNXTjs7RURURTtJQUNJLFNBQUE7RUNZTjs7RURWRTtJQUNJLHlCQXhMTTtJQXlMTixpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLGNBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtJQUNBLG9CQUFBO0VDYU47O0VEWEU7SUFDSSxrQkFBQTtJQUNBLGFBQUE7RUNjTjs7RURaRTtJQUNJLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGlEQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkE3TU07RUM0Tlo7O0VEYkU7SUFDSSxtQkFoTk07SUFpTk4sa0JBQUE7SUFDQSxhQUFBO0lBQ0EsVUFBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtFQ2dCTjs7RURkRTtJQUNJLFlBQUE7SUFDQSxXQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGFBQUE7RUNpQk47O0VEZkU7SUFDSSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7RUNrQk47O0VEaEJFO0lBQ0ksYUFBQTtJQUNBLFdBQUE7SUFDQSx1QkFBQTtJQUNBLGFBQUE7RUNtQk47O0VEakJFO0lBQ0ksWUFBQTtJQUNBLFVBQUE7SUFDQSxzQkFBQTtJQUNBLFlBQUE7RUNvQk47O0VEbEJFO0lBQ0kseUJBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLG9CQUFBO0VDcUJOOztFRG5CRTtJQUNJLGtCQUFBO0VDc0JOOztFRHBCRSxlQUFBO0VBQ0E7SUFDSSxVQUFBO0VDdUJOOztFRHJCRTtJQUNJLHlCQWhRTTtJQWlRTixhQUFBO0lBQ0EsMkJBQUE7SUFDQSw0QkFBQTtJQUNBLFdBQUE7RUN3Qk47O0VEdEJFO0lBQ0ksaUJBQUE7SUFDQSxrQkFBQTtFQ3lCTjs7RUR2QkU7SUFDSSxVQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQUFBO0lBQ0EseUJBNVFNO0VDc1NaOztFRHhCRTtJQUNJLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtFQzJCTjs7RUR6QkU7SUFDSSx5QkF0Uk07SUF1Uk4sYUFBQTtFQzRCTjs7RUQxQkU7SUFDSSxXQUFBO0lBQ0EscUJBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7RUM2Qk47O0VEM0JFO0lBQ0ksZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7RUM4Qk47O0VENUJFO0lBQ0ksa0JBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7RUMrQk47O0VEN0JFO0lBQ0ssY0ExU0s7RUMwVVo7O0VEOUJFO0lBQ0ksbUJBQUE7SUFDQSx5QkExU007SUEyU04scUJBM1NNO0lBNFNOLFdBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtFQ2lDTjs7RUQvQkU7SUFDSSxVQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGFBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0VDa0NOOztFRGhDRTtJQUNJLGNBM1RNO0lBNFROLHFCQUFBO0lBQ0EsZUFBQTtJQUNBLFVBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLFVBQUE7RUNtQ047O0VEakNFO0lBQ0ksY0FBQTtJQUNBLGNBeFVNO0lBeVVOLGtCQUFBO0lBQ0EsZ0JBQUE7RUNvQ047O0VEbENFLGtCQUFBO0VBQ0E7SUFDSSxpQkFBQTtFQ3FDTjs7RURuQ0U7SUFDSSxpQkFBQTtFQ3NDTjs7RURwQ0U7SUFDSSxjQXRWTTtJQXVWTixrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7RUN1Q047O0VEckNFO0lBQ0kseUJBNVZNO0lBNlZOLGFBQUE7SUFDQSwyQkFBQTtJQUNBLDRCQUFBO0lBQ0EsV0FBQTtFQ3dDTjs7RUR0Q0U7SUFDSSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7RUN5Q047O0VEdkNFO0lBQ0ksaUJBQUE7SUFDQSxrQkFBQTtFQzBDTjs7RUR4Q0U7SUFDSSx5QkE1V007SUE2V04sWUFBQTtJQUNBLFdBQUE7RUMyQ047O0VEekNFO0lBQ0ksVUFBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtJQUNBLHlCQWxYTTtFQzhaWjs7RUQxQ0U7SUFDSSxlQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtFQzZDTjs7RUQzQ0U7SUFDSSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7RUM4Q047O0VENUNFO0lBQ0ksZ0JBQUE7SUFDQSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0VDK0NOOztFRDdDRTtJQUNJLFVBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSx5QkF4WU07RUN3Ylo7O0VEOUNFO0lBQ0ksbUJBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VDaUROOztFRC9DRTtJQUNJLG1CQUFBO0lBQ0EseUJBL1lNO0lBZ1pOLHFCQWhaTTtJQWlaTixXQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7RUNrRE47O0VEaERFO0lBQ0ksY0ExWk07SUEyWk4scUJBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGFBQUE7SUFDQSwwQkFBQTtJQUFBLGtCQUFBO0lBQ0EsVUFBQTtFQ21ETjs7RURqREUsaUJBQUE7RUFDQTtJQUNJLG9CQUFBO0VDb0ROOztFRGxERTtJQUNJLFdBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsWUFBQTtFQ3FETjs7RURuREU7SUFDSSxjQWhiTTtFQ3NlWjs7RURwREU7SUFDSSw0RUFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0VDdUROOztFRHJERTtJQUNJLHFCQUFBO0VDd0ROOztFRHRERSxrQkFBQTtFQUNBO0lBQ0ksY0FoY007RUN5Zlo7O0VEdkRFO0lBQ0ksYUFBQTtFQzBETjs7RUR4REU7SUFDSSw0RUFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0VDMkROOztFRHpERSxrQkFBQTtFQUNBO0lBQ0ksWUFBQTtJQUNBLGlCQUFBO0lBQ0EsY0FBQTtFQzRETjs7RUQxREU7SUFDSSwwQkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7RUM2RE47O0VEM0RFO0lBQ0ksV0FBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7RUM4RE47O0VENURFO0lBQ0ksZ0JBQUE7SUFDQSxVQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFQytETjs7RUQ3REU7SUFDSSxjQXBlTTtJQXFlTixrQkFBQTtFQ2dFTjs7RUQ5REU7SUFDSSwyQkFBQTtJQUNBLDRCQUFBO0lBQ0EsV0FBQTtFQ2lFTjs7RUQvREU7SUFDSSwyQkFBQTtJQUNBLDZCQUFBO0lBQ0Esc0JBQUE7SUFDQSwyQkFBQTtFQ2tFTjs7RURoRUU7SUFDSSxpQkFBQTtJQUNBLGtCQUFBO0VDbUVOOztFRGpFRTtJQUNJLFVBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSx5QkF4Zk07RUM0akJaOztFRGxFRTtJQUNJLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtFQ3FFTjs7RURuRUU7SUFDSSxnQkFBQTtJQUNBLFVBQUE7SUFDQSxrQkFBQTtJQUNBLGNBQUE7RUNzRU47O0VEcEVFO0lBQ0ksVUFBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtJQUNBLHlCQXpnQk07SUEwZ0JOLHlCQUFBO0VDdUVOOztFRHJFRTtJQUNJLG1CQUFBO0lBQ0Esa0JBQUE7RUN3RU47O0VEdEVFO0lBQ0ksV0FBQTtFQ3lFTjs7RUR2RUU7SUFDSSxtQkFBQTtJQUNBLHlCQXRoQk07SUF1aEJOLHFCQXZoQk07SUF3aEJOLFdBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtFQzBFTjs7RUR4RUU7SUFDSSxtQkFBQTtJQUNBLHlCQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0lBQ0Esb0JBQUE7RUMyRU47O0VEekVFLG1CQUFBO0VBQ0E7SUFDSSxVQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VDNEVOOztFRDFFRTtJQUNJLGNBQUE7RUM2RU47O0VEM0VFO0lBQ0ksWUFBQTtJQUNBLG1CQUFBO0lBQ0EsV0FBQTtJQUNBLGFBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VDOEVOOztFRDVFRTtJQUNJLFdBQUE7SUFDQSxtQkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxxQkFBQTtJQUNBLG1CQUFBO0lBQ0EsV0FBQTtFQytFTjs7RUQ3RUU7SUFDSSx5QkEvakJBO0VDK29CTjs7RUQ5RUU7SUFDSSx5QkFqa0JHO0VDa3BCVDs7RUQvRUU7SUFDSSx5QkFua0JJO0VDcXBCVjs7RURoRkU7SUFDSSx5QkFya0JJO0VDd3BCVjs7RURqRkU7SUFDSSx5QkFybEJNO0lBc2xCTixpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtFQ29GTjs7RURsRkU7SUFDSSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQWptQk07SUFrbUJOLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0lBQ0EsZ0JBQUE7RUNxRk47O0VEbkZFO0lBQ0ksZUFBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0lBQ0EsZ0JBQUE7RUNzRk47O0VEcEZFO0lBQ0ksaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxzQkFBQTtFQ3VGTjs7RURyRkU7SUFDSSx5QkFBQTtFQ3dGTjs7RUR2RkUsZ0JBQUE7RUFDQTtJQUNJLHlCQWhvQk07SUFpb0JOLG1CQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7SUFDQSxxQkFwb0JNO0VDOHRCWjs7RUR4RkU7SUFDSSx5QkFBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtFQzJGTjs7RUR6RkU7SUFDSSxpQkFBQTtFQzRGTjs7RUQxRkU7SUFDSSw2QkFBQTtFQzZGTjs7RUQzRkU7SUFDSSw0QkFBQTtFQzhGTjs7RUQ1RkU7SUFDSSxxQkFBQTtJQUNBLHNCQUFBO0VDK0ZOOztFRDdGRTtJQUNJLHlCQUFBO0VDZ0dOOztFRDlGRTtJQUNJLHNCQUFBO0lBQ0EsNEJBQUE7RUNpR047O0VEL0ZFO0lBQ0ksNEJBQUE7RUNrR047O0VEL0ZFLGtCQUFBO0VBQ0E7SUFDSSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EseUJBQUE7SUFDQSxzQkFBQTtJQUNBLDJDQUFBO0lBQ0EscUJBQUE7RUNrR047O0VEaEdFO0lBQ0kseUJBQUE7RUNtR047O0VEakdFO0lBQ0ksVUFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0VDb0dOOztFRGxHRTtJQUNJLGlCQUFBO0lBQ0EsdUJBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsV0FBQTtFQ3FHTjs7RURuR0U7SUFDSSxjQUFBO0VDc0dOOztFRHBHRTtJQUNJLFlBQUE7SUFDQSx5QkFBQTtJQUNBLFVBQUE7SUFDQSxrQkFBQTtFQ3VHTjs7RURyR0U7SUFDSSx5QkFyc0JNO0lBc3NCTixpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLGNBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7RUN3R047O0VEdEdFO0lBQ0ksc0JBQUE7SUFDQSwyQkFBQTtJQUNBLFVBQUE7SUFDQSxjQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQUFBO0lBQ0EsWUFBQTtFQ3lHTjs7RUR2R0UsZ0JBQUE7RUFDQTtJQUNJLFdBQUE7SUFDQSxZQUFBO0VDMEdOOztFRHhHRSxnQkFBQTtFQUNBO0lBQ0ksVUFBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsY0FBQTtFQzJHTjs7RUR6R0Usa0JBQUE7RUFDQTtJQUNJLFVBQUE7SUFDQSwyQkFBQTtJQUNBLFlBQUE7SUFDQSxjQUFBO0VDNEdOOztFRDFHRTtJQUNJLGNBNXVCTTtJQTZ1Qk4sVUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0VDNkdOOztFRDNHRTtJQUNJLGdCQUFBO0VDOEdOOztFRDVHRTtJQUNJLGlCQUFBO0lBQ0EsbUJBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFQytHTjs7RUQ3R0U7SUFDSSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7RUNnSE47O0VEOUdFO0lBQ0kseUJBcHdCTTtJQXF3Qk4sV0FBQTtFQ2lITjs7RUQvR0U7SUFDSSx5QkFBQTtJQUNBLFdBQUE7SUFDQSw2QkFBQTtFQ2tITjs7RURoSEU7SUFDSSx5QkE3d0JNO0lBOHdCTixXQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQ0FBQTtJQUNBLDZCQUFBO0lBQ0EsY0FBQTtFQ21ITjs7RURqSEU7SUFDSSx5QkFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0lBQ0EsaUNBQUE7RUNvSE47O0VEbEhFO0lBQ0ksaUJBQUE7RUNxSE47O0VEbkhFO0lBQ0ksVUFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxxQkFBQTtFQ3NITjs7RURwSEU7SUFDSSxpQkFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtJQUNBLFdBQUE7SUFDQSxVQUFBO0lBQ0EsaUJBQUE7RUN1SE47O0VEckhFO0lBQ0ksYUFBQTtJQUNBLGtCQUFBO0lBQ0EsVUFBQTtFQ3dITjs7RUR0SEU7SUFDSSxjQUFBO0lBQ0EsaUJBQUE7SUFDQSxtQkFBQTtJQUNBLG1CQUFBO0VDeUhOOztFRHZIRTtJQUNJLGNBQUE7SUFDQSxpQkFBQTtJQUNBLG1CQUFBO0lBQ0EsV0FBQTtFQzBITjs7RUR4SEU7SUFDSSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtFQzJITjs7RUR6SEU7SUFDSSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxxQkFBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0lBQ0EsbUJBQUE7SUFDQSxzQkFBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7SUFDQSxjQUFBO0lBQ0EsYUFBQTtFQzRITjs7RUQxSEU7SUFDSSxxQkFyMUJNO0lBczFCTixtQkFBQTtFQzZITjs7RUQzSEU7SUFDSSxXQUFBO0lBQ0EscUJBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7RUM4SE47O0VENUhFO0lBQ0kseUJBaDJCTTtJQWkyQk4sV0FBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtJQUNBLFVBQUE7SUFDQSxpQkFBQTtJQUNBLGNBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7RUMrSE47O0VEN0hFO0lBQ0ksMkJBQUE7RUNnSU47O0VEOUhFO0lBQ0kseUJBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtJQUNBLGlCQUFBO0lBQ0EsY0FBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtFQ2lJTjs7RUQvSEU7SUFDSSxjQXozQk07SUEwM0JOLFVBQUE7SUFDQSxzQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtFQ2tJTjs7RURoSUU7SUFDSSxnQkFBQTtFQ21JTjs7RURqSUU7SUFDSSxjQUFBO0lBQ0EsaUJBQUE7RUNvSU47O0VEbElFO0lBQ0ksWUFBQTtFQ3FJTjs7RURuSUU7SUFDSSxtQkFBQTtJQUNBLDJCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsV0FBQTtFQ3NJTjs7RURwSUU7SUFDSSx5QkFBQTtFQ3VJTjs7RURySUU7SUFDSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFQ3dJTjs7RUR0SUU7SUFDSSxjQS81Qk07SUFnNkJOLFVBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsY0FBQTtJQUNBLFVBQUE7RUN5SU47O0VEdklFO0lBQ0kseUJBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7RUMwSU47O0VEeElFO0lBQ0ksaUJBQUE7RUMySU47O0VEeklFO0lBQ0kscUJBQUE7SUFDQSxzQkFBQTtFQzRJTjs7RUQxSUU7SUFDSSx5QkFBQTtFQzZJTjs7RUQzSUU7SUFDSSxzQkFBQTtJQUNBLDRCQUFBO0VDOElOOztFRDVJRTtJQUNJLDRCQUFBO0VDK0lOOztFRDdJRTtJQUNJLGNBNzdCTTtJQTg3Qk4sa0JBQUE7RUNnSk47O0VEOUlFO0lBQ0ksY0FBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RUNpSk47O0VEL0lFO0lBQ0ksaUJBQUE7SUFDQSxpQkFBQTtJQUNBLHNDQUFBO0VDa0pOOztFRGhKRTtJQUNJLGdCQUFBO0lBQ0EsMkJBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLG9CQUFBO0VDbUpOOztFRGpKRTtJQUNJLHNDQUFBO0VDb0pOOztFRGxKRTtJQUNJLHdDQUFBO0lBQ0EsVUFBQTtJQUNBLG1CQUFBO0lBQ0Esb0JBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0VDcUpOOztFRG5KRTtJQUNJLFdBQUE7SUFDQSxzQkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7RUNzSk47QUFDRjtBQXJvQ0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBdW9DSjtBQXJvQ0E7RUFDSSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBd29DSjtBQXRvQ0E7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQXlvQ0o7QUF2b0NBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBMG9DSjtBQXhvQ0E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUEyb0NKO0FBem9DQTtFQUNJLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBNG9DSjtBQTFvQ0E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUE2b0NKO0FBM29DQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQThvQ0o7QUE1b0NBO0VBQ0ksdUlBQUE7RUFDQSx1Q0FBQTtBQStvQ0o7QUE3b0NBO0VBQ0ksZ0JBQUE7RUFDQSx1Q0FBQTtBQWdwQ0o7QUE5b0NBO0VBQ0ksbUJBQUE7QUFpcENKO0FBL29DQTtFQUNJLHlCRGxEVTtFQ21EVixxQkRuRFU7RUNvRFYsY0R0RFU7QUN3c0NkO0FBaHBDQTtFQUNJLHlCRHJEVTtFQ3NEVixxQkR0RFU7RUN1RFYsV0FBQTtBQW1wQ0o7QUFqcENBO0VBQ0kseUJEM0RVO0VDNERWLHFCRDVEVTtFQzZEVixXQUFBO0FBb3BDSjtBQWxwQ0E7RUFDSSx5QkRqRVU7RUNrRVYscUJEbEVVO0VDbUVWLGNEckVVO0FDMHRDZDtBQW5wQ0E7RUFDSSx5QkR2RVU7RUN3RVYscUJEeEVVO0VDeUVWLFdBQUE7QUFzcENKO0FBcHBDQTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBdXBDSiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKk5hbnkgRm9udHMqL1xyXG5AZm9udC1mYWNlXHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bydcclxuICAgIHNyYzogdXJsKCdhc3NldHMvZm9udHMvUm9ib3RvL1JvYm90by1SZWd1bGFyLnR0ZicpXHJcblxyXG5AZm9udC1mYWNlXHJcbiAgICBmb250LWZhbWlseTogXCJSYWxld2F5XCJcclxuICAgIHNyYzogdXJsKCdhc3NldHMvZm9udHMvUmFsZXdheS9zdGF0aWMvUmFsZXdheS1Cb2xkLnR0ZicpXHJcblxyXG5AZm9udC1mYWNlXHJcbiAgICBmb250LWZhbWlseTogXCJSYWxld2F5LVRoaW5cIlxyXG4gICAgc3JjOiB1cmwoJ2Fzc2V0cy9mb250cy9SYWxld2F5L3N0YXRpYy9SYWxld2F5LVRoaW4udHRmJylcclxuXHJcbi8qTmFueSBDb2xvcnMqL1xyXG4kY29sb3ItcGluazE6ICNENjA0NTFcclxuJGNvbG9yLXBpbmsyOiAjQTYwMzJGXHJcbiRjb2xvci1waW5rMzogI0ZGRTlDN1xyXG4kY29sb3ItYmx1ZTE6ICMxMUJERjJcclxuJGNvbG9yLWJsdWUyOiAjMUE3QkRCXHJcblxyXG4vKlNjcmVlbiBTaXppbmcqL1xyXG4kc20tYnJlYWNrcG9pbnQ6IDU3NnB4XHJcbiRsZy1icmVhY2twb2ludDogOTYwcHhcclxuXHJcbi8qU3RhdGUgT3JkZXIgQ29sb3JzKi9cclxuJG9uV2F5OiAjRkYxRTFFXHJcbiRvbk9yaWdpbjogI0ZGRTUwMFxyXG4kb25EZXN0aW55OiAjRkYwMDhBXHJcbiRkZWxpdmVyZWQ6ICMwMEVGMzVcclxuXHJcbmJvZHlcclxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheSdcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkXHJcblxyXG5oMyxoNFxyXG4gICAgY29sb3I6ICRjb2xvci1waW5rMVxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRcclxuICAgIGZvbnQtc2l6ZTogMjJweFxyXG5cclxuLmJ0bi1wcmltYXJ5XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcGluazFcclxuICAgIGNvbG9yOiAjZmZmXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMXB4XHJcbiAgICBib3JkZXI6IG5vbmVcclxuXHJcbi8qIExhbmRpbmcgUGFnZSBTdHlsZXMgKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAkbGctYnJlYWNrcG9pbnQpXHJcbiAgICAuY29udGFpbmVyLWZsdWlkXHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnRcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50XHJcblxyXG4gICAgLmNhcm91c2VsLWxhbmRcclxuICAgICAgICBoZWlnaHQ6IDI1MHB4XHJcbiAgICAgICAgei1pbmRleDogMVxyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxyXG5cclxuICAgIC5jYXJvdXNlbC1sYW5kaW5nXHJcbiAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZFxyXG4gICAgICAgIGhlaWdodDogMjUwcHggIWltcG9ydGFudFxyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXRcclxuXHJcbiAgICAuY2Fyb3VzZWwtaW5mb1xyXG4gICAgICAgIHotaW5kZXg6IDJcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmVcclxuICAgICAgICBwYWRkaW5nLXRvcDogNzBweFxyXG4gICAgICAgIHdpZHRoOiA0MCVcclxuICAgICAgICBtYXJnaW4tbGVmdDogMzBweFxyXG5cclxuICAgIC5jYXJvdXNlbC1pbmZvIGgxXHJcbiAgICAgICAgY29sb3I6ICMwMDBcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuICAgICAgICBmb250LXNpemU6IDEuMHJlbVxyXG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZFxyXG5cclxuICAgIC5jYXJvdXNlbC1pbmZvIGJ1dHRvblxyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHhcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweFxyXG4gICAgICAgIGhlaWdodDogMzBweFxyXG4gICAgICAgIHdpZHRoOiAxMTJweFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweFxyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcclxuICAgICAgICBsaW5lLWhlaWdodDogMFxyXG5cclxuICAgICNjYXJvdXNlbEluZm9cclxuICAgICAgICBoZWlnaHQ6IDI1MHB4XHJcblxyXG4gICAgLmNhcmQtYm9keS1jYXRlZ29yeVxyXG4gICAgICAgIGhlaWdodDogOTBweFxyXG4gICAgICAgIHdpZHRoOiA5NnB4XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG9cclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG9cclxuICAgICAgICBkaXNwbGF5OiBibG9ja1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHhcclxuXHJcbiAgICAuY2FyZC1sYW5kaW5nXHJcbiAgICAgICAgaGVpZ2h0OiAxMjBweFxyXG5cclxuICAgIC5jYXJkLWJvZHktbGFuZGluZyBoMlxyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0XHJcbiAgICAgICAgY29sb3I6ICNmZmZcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweFxyXG4gICAgICAgIHdpZHRoOiAxMDAlXHJcblxyXG4gICAgLnByb2R1Y3RzLWxhbmRpbmdcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGM0YzXHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweFxyXG4gICAgICAgIGhlaWdodDogYXV0b1xyXG5cclxuICAgIC5wcm9kdWN0cy1sYW5kaW5nIGgzXHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweFxyXG5cclxuICAgIC5wcm9kdWN0cy1sYW5kaW5nIGg0XHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDBiNlxyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweFxyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweFxyXG5cclxuICAgIC5jYXJvdXNlbC1pdGVtLWJnXHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweFxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4XHJcbiAgICAgICAgd2lkdGg6IDUwJVxyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0b1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvXHJcbiAgICAgICAgaGVpZ2h0OiAxNzBweFxyXG5cclxuICAgIC5wcm9kdWN0cy1jYXJvdXNlbC1sYW5kaW5nXHJcbiAgICAgICAgd2lkdGg6IDEwMCVcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlXHJcblxyXG4gICAgLnByb2R1Y3RzLXRpdGxlLWxhbmRpbmdcclxuICAgICAgICBjb2xvcjogJGNvbG9yLXBpbmsyXHJcbiAgICAgICAgZm9udC1zaXplOiAxLjByZW1cclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuXHJcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZFxyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHhcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4XHJcblxyXG4gICAgLnByb2R1Y3QtYnRuLWNhcm91c2VsLWxhbmRpbmdcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcGluazJcclxuICAgICAgICBjb2xvcjogI2ZmZlxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHhcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDgwJSA4MCVcclxuXHJcbiAgICAuYnRuLWZpeC1jYXJvdXNlbFxyXG4gICAgICAgIG9wYWNpdHk6IDFcclxuICAgICAgICB3aWR0aDogMjUlXHJcblxyXG4gICAgLnByb2R1Y3RzLXByaWNlLWxhbmRpbmdcclxuICAgICAgICBjb2xvcjogIzAwMFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtXHJcblxyXG4gICAgLnByb2R1Y3RzLXF0eS1sYW5kaW5nXHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveFxyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvXHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvXHJcbiAgICAgICAgZGlzcGxheTogZmxleFxyXG4gICAgICAgIHdpZHRoOiA2MCVcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLXBpbmsyXHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG9cclxuICAgICAgICBoZWlnaHQ6IDUwcHhcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuICAgICAgICBmb250LXNpemU6IDIuMnJlbVxyXG4gICAgICAgIGNvbG9yOiAjMDAwXHJcblxyXG4gICAgLmJ1dHRvbi1jb3VudGVyLWxhbmRpbmdcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcGluazJcclxuICAgICAgICBib3JkZXI6IG5vbmVcclxuICAgICAgICBjb2xvcjogd2hpdGVcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCVcclxuICAgICAgICBoZWlnaHQ6IDUwcHhcclxuICAgICAgICB3aWR0aDogNTBweFxyXG4gICAgICAgIGZvbnQtc2l6ZTogNC4wcmVtXHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDBcclxuICAgICAgICBmb250LWZhbWlseTogcmV2ZXJ0XHJcblxyXG4gICAgLmJ0bi1taW51cy1sYW5kaW5nLCAuYnRuLXBsdXMtbGFuZGluZ1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxyXG4gICAgICAgIHRvcDogMHB4XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG9cclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG9cclxuICAgICAgICBkaXNwbGF5OiBibG9ja1xyXG4gICAgICAgIHdpZHRoOiAxNSVcclxuXHJcbiAgICAuYnRuLW1pbnVzLWxhbmRpbmdcclxuICAgICAgICByaWdodDogMjAlXHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEycHhcclxuICAgICAgICBmb250LXNpemU6IDQuNXJlbVxyXG5cclxuICAgIC5idG4tcGx1cy1sYW5kaW5nXHJcbiAgICAgICAgbGVmdDogMjAlXHJcblxyXG4gICAgLnByb2R1Y3RzLWJ0bi1sYW5kaW5nXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXBpbmsyXHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG9cclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG9cclxuICAgICAgICB3aWR0aDogNTAlXHJcbiAgICAgICAgZGlzcGxheTogYmxvY2tcclxuICAgICAgICBoZWlnaHQ6IDQwcHhcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzNXB4XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweFxyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4XHJcblxyXG4gICAgLmluZm8tbGFuZGluZ1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG4gICAgICAgIGhlaWdodDogMjIwcHhcclxuXHJcbiAgICAuaW5mby1sYW5kaW5nLWxheW91dFxyXG4gICAgICAgIG1hcmdpbi10b3A6IC00MHB4XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNjAlXHJcbiAgICAgICAgaGVpZ2h0OiA5MHB4XHJcbiAgICAgICAgd2lkdGg6IDEwMCVcclxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwcHggNHB4IDRweCByZ2IoMCAwIDAgLyAyNSUpXHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbiAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yLXBpbmsyXHJcblxyXG4gICAgLmluZm8tbGFuZGluZy1sYXlvdXQyXHJcbiAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yLXBpbmsyXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlXHJcbiAgICAgICAgaGVpZ2h0OiAxNzBweFxyXG4gICAgICAgIHotaW5kZXg6IDJcclxuICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgICAgIG1hcmdpbi10b3A6IDQ3cHhcclxuXHJcbiAgICAuaW5mby1ib3ggaW1nXHJcbiAgICAgICAgaGVpZ2h0OiA2M3B4XHJcbiAgICAgICAgd2lkdGg6IDYzcHhcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0b1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0b1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXhcclxuXHJcbiAgICAuaW5mby1ib3ggcFxyXG4gICAgICAgIGNvbG9yOiAjZmZmXHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweFxyXG5cclxuICAgIC5jYXJkLWNvbXBhbnktbGFuZGluZ1xyXG4gICAgICAgIGhlaWdodDogMTUwcHhcclxuICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94XHJcbiAgICAgICAgZGlzcGxheTogZmxleFxyXG5cclxuICAgIC5jYXJkLWNvbXBhbnktbGFuZGluZyBpbWdcclxuICAgICAgICBoZWlnaHQ6IGF1dG9cclxuICAgICAgICB3aWR0aDogNzAlXHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveFxyXG4gICAgICAgIG1hcmdpbjogYXV0b1xyXG5cclxuICAgIC5jb250YWN0LWxhbmRpbmdcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZFOUM3XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjByZW1cclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHhcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTVweFxyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4XHJcblxyXG4gICAgLmNvbnRhY3QtbGFuZGluZyBoM1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbVxyXG5cclxuICAgIC8qTG9naW4gU3R5bGVzKi9cclxuICAgIC5jb250YWluZXItbG9naW5cclxuICAgICAgICBwYWRkaW5nOiAwXHJcblxyXG4gICAgLmZvcm0tY29udGVudHNcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcGluazFcclxuICAgICAgICBoZWlnaHQ6IDM1MHB4XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNDAlXHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDQwJVxyXG4gICAgICAgIGNvbG9yOiAjZmZmXHJcblxyXG4gICAgLmZvcm0tY29udGVudHMgaDJcclxuICAgICAgICBwYWRkaW5nLXRvcDogNjBweFxyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG5cclxuICAgIC5mb3JtLWNvbnRlbnRzIGlucHV0XHJcbiAgICAgICAgd2lkdGg6IDkwJVxyXG4gICAgICAgIG1hcmdpbjogYXV0b1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHhcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcGluazNcclxuXHJcbiAgICAuZm9ybS1jb250ZW50cyBoNVxyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHhcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMnB4XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMnB4XHJcblxyXG4gICAgLmZvcm0tbGlua3NcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcGluazFcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4XHJcblxyXG4gICAgLmZvcm0tbGlua3MgYVxyXG4gICAgICAgIGNvbG9yOiAjZmZmXHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lXHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMnB4XHJcblxyXG4gICAgLmZvcm0tbGlua3MgaDZcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbiAgICAgICAgY29sb3I6ICNGRkZcclxuICAgIFxyXG4gICAgLmxvZ2luLWZlZWRiYWNrXHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4XHJcbiAgICAgICAgY29sb3I6ICNmZmZcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGVcclxuICAgIFxyXG4gICAgY2hlY2tvdXQtZmVlZGJhY2tcclxuICAgICAgICAgY29sb3I6ICRjb2xvci1waW5rMVxyXG5cclxuICAgICNidG4tbG9naW5cclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsdWUyXHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItYmx1ZTJcclxuICAgICAgICBjb2xvcjogI0ZGRlxyXG4gICAgICAgIHdpZHRoOiA5MCVcclxuICAgICAgICBoZWlnaHQ6IDQwcHhcclxuICAgICAgICBtYXJnaW4tbGVmdDogNSVcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4XHJcblxyXG4gICAgI2xvZ29cclxuICAgICAgICB3aWR0aDogNjAlXHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG9cclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG9cclxuICAgICAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweFxyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHhcclxuXHJcbiAgICAjcmVnaXN0ZXJcclxuICAgICAgICBjb2xvcjogJGNvbG9yLWJsdWUyXHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lXHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4XHJcbiAgICAgICAgcGFkZGluZzogMFxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXhcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG9cclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0b1xyXG4gICAgICAgIHdpZHRoOiAyMCVcclxuICAgIFxyXG4gICAgLnJlZ2lzdHJvLWFkZC1yZXNwb25zZVxyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrXHJcbiAgICAgICAgY29sb3I6ICRjb2xvci1waW5rM1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHhcclxuXHJcbiAgICAvKlJlZ2lzdGVyIFN0eWxlcyovXHJcbiAgICAuaW5mbyBcclxuICAgICAgICBwYWRkaW5nOiAwcHggMTBweFxyXG4gICAgXHJcbiAgICAuYXZpc29cclxuICAgICAgICBwYWRkaW5nOiA1cHggMjBweFxyXG5cclxuICAgIC5pbmZvIGg2XHJcbiAgICAgICAgY29sb3I6ICRjb2xvci1waW5rMVxyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHhcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4XHJcblxyXG4gICAgLmZvcm0tY29udGVuZWRvclxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1waW5rMVxyXG4gICAgICAgIGhlaWdodDogMzIwcHhcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0MCVcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNDAlXHJcbiAgICAgICAgY29sb3I6ICNmZmZcclxuXHJcbiAgICAuZm9ybS1jb250ZW5lZG9yIGg1XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjhweFxyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHhcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIycHhcclxuXHJcbiAgICAuZm9ybS1jb250ZW5lZG9yIGgyXHJcbiAgICAgICAgcGFkZGluZy10b3A6IDYwcHhcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuXHJcbiAgICAucmVnaXN0ZXJcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcGluazFcclxuICAgICAgICBoZWlnaHQ6IGF1dG9cclxuICAgICAgICBjb2xvcjogI2ZmZlxyXG5cclxuICAgIC5yZWdpc3RlciBzZWxlY3RcclxuICAgICAgICB3aWR0aDogOTAlXHJcbiAgICAgICAgbWFyZ2luOiBhdXRvXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweFxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1waW5rM1xyXG4gICAgXHJcbiAgICAucmVnaXN0ZXIgaDJcclxuICAgICAgICBmb250LXNpemU6IDIwcHhcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMnB4XHJcblxyXG4gICAgLnJlZ2lzdGVyIGg1XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjhweFxyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHhcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIycHhcclxuXHJcbiAgICAucmVnaXN0ZXIgaDZcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4XHJcbiAgICAgICAgcGFkZGluZzogMFxyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG4gICAgICAgIGNvbG9yOiAjRkZGXHJcblxyXG4gICAgLmlucC1mb3JtXHJcbiAgICAgICAgd2lkdGg6IDkwJVxyXG4gICAgICAgIG1hcmdpbjogYXV0b1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHhcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcGluazNcclxuXHJcbiAgICAuY2hrLWZvcm1cclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMnB4XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweFxyXG5cclxuICAgICNidG4tcmVnaXN0cm9cclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsdWUyXHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItYmx1ZTJcclxuICAgICAgICBjb2xvcjogI0ZGRlxyXG4gICAgICAgIHdpZHRoOiA2MCVcclxuICAgICAgICBoZWlnaHQ6IDQwcHhcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjAlXHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweFxyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHhcclxuXHJcbiAgICAjcmVnaXN0cm9cclxuICAgICAgICBjb2xvcjogJGNvbG9yLWJsdWUxXHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lXHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG9cclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG9cclxuICAgICAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICAgICAgd2lkdGg6IG1heC1jb250ZW50XHJcbiAgICAgICAgcGFkZGluZzogMFxyXG5cclxuICAgIC8qQ2F0ZWdveSBTdHlsZXMqL1xyXG4gICAgI2NhdGVnb3J5Q29udGFpbmVyXHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHhcclxuXHJcbiAgICAuY2FyZC10aXRsZS1jYXRlZ29yeVxyXG4gICAgICAgIGNvbG9yOiAjZmZmXHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW1cclxuICAgICAgICBoZWlnaHQ6IDI1cHhcclxuXHJcbiAgICAjY2F0ZWdvcnlDb250YWluZXIgaHJcclxuICAgICAgICBjb2xvcjogJGNvbG9yLXBpbmsyXHJcblxyXG4gICAgI2NhdGVnb3J5Q29udGFpbmVyIC5jYXJkXHJcbiAgICAgICAgYm94LXNoYWRvdzogNHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE1KSwgMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KVxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHhcclxuICAgICAgICB3aWR0aDogOTUlXHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG9cclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG9cclxuICAgICAgICBoZWlnaHQ6IDE2MHB4XHJcbiAgICBcclxuICAgICNjYXRlZ29yeUNvbnRhaW5lciBhXHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lXHJcbiAgICAgICAgXHJcbiAgICAvKiBTdHlsZSBDb21wYW55cyovXHJcbiAgICAjY29tcGFueUNvbnRhaW5lciBoNFxyXG4gICAgICAgIGNvbG9yOiAkY29sb3ItcGluazFcclxuXHJcbiAgICAjY29tcGFueUNvbnRhaW5lciAuY2FyZC1jb21wYW55LWxhbmRpbmdcclxuICAgICAgICBoZWlnaHQ6IDExNXB4XHJcblxyXG4gICAgI2NvbXBhbnlDb250YWluZXIgLmNhcmRcclxuICAgICAgICBib3gtc2hhZG93OiA0cHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTUpLCAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweFxyXG4gICAgICAgIHdpZHRoOiA5NSVcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0b1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0b1xyXG4gICAgICAgIGhlaWdodDogMTYwcHhcclxuXHJcbiAgICAvKiBTdHlsZXMgUHJvZmlsZSovXHJcbiAgICAjcHJvZmlsZUNvbnRhaW5lciBpbWdcclxuICAgICAgICBoZWlnaHQ6IDgwcHhcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0b1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrXHJcblxyXG4gICAgI3Byb2ZpbGVDb250YWluZXIgaDVcclxuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU1KVxyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFweFxyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4XHJcblxyXG4gICAgI3Byb2ZpbGVDb250YWluZXIgaDRcclxuICAgICAgICBjb2xvcjogIzAwMFxyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG4gICAgICAgIG1hcmdpbjogMjBweCAwcHhcclxuXHJcbiAgICAjcHJvZmlsZUNvbnRhaW5lciBoclxyXG4gICAgICAgIG1hcmdpbjogMTBweCAwcHhcclxuICAgICAgICB3aWR0aDogOTAlXHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG9cclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG9cclxuXHJcbiAgICAuaW5mbyBoNVxyXG4gICAgICAgIGNvbG9yOiAkY29sb3ItcGluazFcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuXHJcbiAgICAuZm9ybS1jb250ZW50XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNDAlXHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDQwJVxyXG4gICAgICAgIGNvbG9yOiAjZmZmXHJcblxyXG4gICAgLmZvcm0tY29udGVudCBoNVxyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudFxyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50XHJcbiAgICAgICAgY29sb3I6ICMwMDAgIWltcG9ydGFudFxyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudFxyXG5cclxuICAgIC5mb3JtLWNvbnRlbnQgaDJcclxuICAgICAgICBwYWRkaW5nLXRvcDogNjBweFxyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG5cclxuICAgIC5mb3JtLWNvbnRlbnQgc2VsZWN0XHJcbiAgICAgICAgd2lkdGg6IDkwJVxyXG4gICAgICAgIG1hcmdpbjogYXV0b1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHhcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcGluazNcclxuXHJcbiAgICAuZm9ybS1jb250ZW50IGg1XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweFxyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHhcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIycHhcclxuXHJcbiAgICAuZm9ybS1jb250ZW50IGg2XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweFxyXG4gICAgICAgIHBhZGRpbmc6IDBcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuICAgICAgICBjb2xvcjogIzAwMDAwMFxyXG5cclxuICAgIC5pbnB1dC1mb3JtXHJcbiAgICAgICAgd2lkdGg6IDkwJVxyXG4gICAgICAgIG1hcmdpbjogYXV0b1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHhcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcGluazNcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkY29sb3ItcGluazNcclxuXHJcbiAgICAuY2hrcy1mb3JtXHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweFxyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjJweFxyXG5cclxuICAgIC5jaGtzLWZvcm0gLmZvcm0tY2hlY2stbGFiZWxcclxuICAgICAgICBjb2xvcjogIzAwMFxyXG5cclxuICAgICNidG4tc2F2ZVxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHhcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcGluazJcclxuICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvci1waW5rMlxyXG4gICAgICAgIGNvbG9yOiAjRkZGXHJcbiAgICAgICAgd2lkdGg6IDYwJVxyXG4gICAgICAgIGhlaWdodDogNDBweFxyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvXHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvXHJcbiAgICAgICAgZGlzcGxheTogYmxvY2tcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweFxyXG5cclxuICAgICNidG4tY2FuY2VsXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweFxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1MjUwNTBcclxuICAgICAgICBib3JkZXI6IG5vbmVcclxuICAgICAgICBjb2xvcjogI0ZGRlxyXG4gICAgICAgIHdpZHRoOiA2MCVcclxuICAgICAgICBoZWlnaHQ6IDQwcHhcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0b1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0b1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrXHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHhcclxuXHJcbiAgICAvKlN0eWxlcyBIaXN0b3JpYWwqL1xyXG4gICAgI2hpc3RvcmlhbENvbnRhaW5lciBociwgI2hpc3RvcmlhbCBoclxyXG4gICAgICAgIHdpZHRoOiA5MCVcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG9cclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG9cclxuXHJcbiAgICAjaGlzdG9yaWFsIGg1LCAjaGlzdG9yaWFsIGg2XHJcbiAgICAgICAgY29sb3I6ICM2NjYzNjNcclxuXHJcbiAgICAuaW1nLWhpc3RvcmlhbFxyXG4gICAgICAgIGhlaWdodDogODBweFxyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHhcclxuICAgICAgICB3aWR0aDogYXV0b1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXhcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0b1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0b1xyXG5cclxuICAgIC5idG4tc3RhdGUtb3JkZXJcclxuICAgICAgICBjb2xvcjogI2ZmZlxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDM1cHhcclxuICAgICAgICBmb250LXNpemU6IDAuN3JlbVxyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGhpZGRlblxyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXBcclxuICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgXHJcbiAgICAuYnRuLW9uV2F5XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9uV2F5XHJcblxyXG4gICAgLmJ0bi1vbk9yaWdpblxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvbk9yaWdpblxyXG4gICAgICAgXHJcbiAgICAuYnRuLW9uRGVzdGlueVxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvbkRlc3RpbnlcclxuICAgICAgXHJcbiAgICAuYnRuLWRlbGl2ZXJlZFxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkZWxpdmVyZWRcclxuICAgIFxyXG4gICAgI2J0bi1zYXZlLWltYWdlXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXBpbmsyXHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG9cclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG9cclxuICAgICAgICBkaXNwbGF5OiBibG9ja1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHhcclxuICAgICAgICBib3JkZXI6IG5vbmVcclxuXHJcbiAgICAuYnRuLXVwbG9hZC1pbWFnZSBcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXJcclxuICAgICAgICBwYWRkaW5nOiA1MHB4IDEwcHhcclxuICAgICAgICBjb2xvcjogI2ZmZlxyXG4gICAgICAgIG9wYWNpdHk6IDAuOVxyXG4gICAgICAgIGJhY2tncm91bmQ6JGNvbG9yLXBpbmsyXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlXHJcbiAgICAgICAgd2lkdGg6IDM3JVxyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvXHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvXHJcbiAgICAgICAgZGlzcGxheTogZmxleFxyXG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHhcclxuXHJcbiAgICAuYnRuLXVwbG9hZGVkLWltYWdlXHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyXHJcbiAgICAgICAgcGFkZGluZzogNDBweCAxMHB4XHJcbiAgICAgICAgY29sb3I6ICNmZmZcclxuICAgICAgICBvcGFjaXR5OiAwLjlcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDBCQjJEXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlXHJcbiAgICAgICAgd2lkdGg6IDM3JVxyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvXHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvXHJcbiAgICAgICAgZGlzcGxheTogZmxleFxyXG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHhcclxuXHJcbiAgICAuY2hlY2stdXBsb2FkXHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG9cclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG9cclxuICAgICAgICBmb250LXNpemU6IDIuMHJlbVxyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3hcclxuICAgIFxyXG4gICAgLmJ0bi1yZWFkeS1pbWFnZVxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMEJCMkRcclxuICAgIC8qTW9kYWwgSW52b2ljZSovXHJcbiAgICAuYnRuLW1vZGFsXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXBpbmsyXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweFxyXG4gICAgICAgIG1hcmdpbjogYXV0b1xyXG4gICAgICAgIHdpZHRoOiA0MCVcclxuICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvci1waW5rMlxyXG5cclxuICAgIC50YWJsZVxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGM0YyRjBcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4XHJcbiAgICAgICAgcGFkZGluZzogMTBweFxyXG5cclxuICAgIC50YWJsZSB0aFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtXHJcbiAgICBcclxuICAgIC50b3RhbC1pbnZvaWNlXHJcbiAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtICFpbXBvcnRhbnRcclxuXHJcbiAgICAudG90YWwtaW52b2ljZS1udW1iZXJcclxuICAgICAgICBmb250LXNpemU6IDAuNnJlbSAhaW1wb3J0YW50XHJcblxyXG4gICAgLnRhYmxlIHRkXHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nXHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveFxyXG5cclxuICAgIHRmb290XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudFxyXG5cclxuICAgIC5pbnZvaWNlLWRlc2NyaXB0aW9uXHJcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMC42cmVtICFpbXBvcnRhbnRcclxuXHJcbiAgICAuaW52b2ljZS1jb3N0XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjVyZW0gIWltcG9ydGFudFxyXG5cclxuXHJcbiAgICAvKiBTdHlsZXMgUHJvZHVjdCovXHJcbiAgICAucHJvZHVjdC1jb21wYW55XHJcbiAgICAgICAgbWFyZ2luOiAzMHB4IDVweFxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHhcclxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjOTI1MDlEXHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveFxyXG4gICAgICAgIGJveC1zaGFkb3c6IDRweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xNSlcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmVcclxuXHJcbiAgICAucHJvZHVjdC1jb21wYW55OmFjdGl2ZVxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5MjUwOURcclxuXHJcbiAgICAucHJvZHVjdC1pbWctY29tcGFueSBpbWdcclxuICAgICAgICB3aWR0aDogODAlXHJcbiAgICAgICAgbWFyZ2luOiAxMHB4XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvXHJcblxyXG4gICAgLnByb2R1Y3QtY29tcGFueSBwXHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW1cclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpc1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW5cclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4XHJcbiAgICAgICAgY29sb3I6ICMwMDBcclxuXHJcbiAgICAucHJvZHVjdC1zdGFydFxyXG4gICAgICAgIGNvbG9yOiAjZkNDNjA3XHJcblxyXG4gICAgLnByb2R1Y3QtdG91Y2gtY29tcGFueVxyXG4gICAgICAgIGZsb2F0OiByaWdodFxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5MjUwOURcclxuICAgICAgICB3aWR0aDogMTUlXHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4XHJcblxyXG4gICAgLnByb2R1Y3RzLWJ0bi1jYXJcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcGluazJcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0b1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0b1xyXG4gICAgICAgIHdpZHRoOiA1MCVcclxuICAgICAgICBkaXNwbGF5OiBibG9ja1xyXG4gICAgICAgIGhlaWdodDogNDBweFxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDM1cHhcclxuXHJcbiAgICAucHJvZHVjdHMtYnRuLWRldGFpbHNcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG8gMzBweCBhdXRvXHJcbiAgICAgICAgd2lkdGg6IDUwJVxyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrXHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzVweFxyXG4gICAgICAgIGJvcmRlcjogbm9uZVxyXG5cclxuICAgIC8qTW9kYWwgQ29tcGFueSovXHJcbiAgICAubW9kYWwtaGVhZGVyLWNvbXBhbnkgaW1nXHJcbiAgICAgICAgd2lkdGg6IDEwMCVcclxuICAgICAgICBoZWlnaHQ6IGF1dG9cclxuXHJcbiAgICAvKk1vZGFsIFByb2R1Y3QqL1xyXG4gICAgLm1vZGFsLWJvZHktcHJvZHVjdCBpbWdcclxuICAgICAgICB3aWR0aDogNDAlXHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvXHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG9cclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG9cclxuICAgICAgICBkaXNwbGF5OiBibG9ja1xyXG5cclxuICAgIC8qU3R5bGVzIENoZWNrb3V0Ki9cclxuICAgIC5iYy1jaGVja291dC10aXRsZSBpbWdcclxuICAgICAgICB3aWR0aDogMzAlXHJcbiAgICAgICAgbWFyZ2luOiAzMHB4IGF1dG8gMTBweCBhdXRvXHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvXHJcbiAgICAgICAgZGlzcGxheTogYmxvY2tcclxuXHJcbiAgICAuYmMtY2hlY2tvdXQtdGl0bGUgaHJcclxuICAgICAgICBjb2xvcjogJGNvbG9yLXBpbmsxXHJcbiAgICAgICAgd2lkdGg6IDgwJVxyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvXHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvXHJcbiAgICAgICAgZGlzcGxheTogYmxvY2tcclxuXHJcbiAgICAuYmMtYm9keVxyXG4gICAgICAgIG1hcmdpbjogNXB4IGF1dG9cclxuXHJcbiAgICAuYmMtYm9keSBidXR0b25cclxuICAgICAgICBmb250LXNpemU6IDEuNnJlbVxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHhcclxuICAgICAgICB3aWR0aDogMTclXHJcbiAgICAgICAgaGVpZ2h0OiA1OHB4XHJcbiAgICAgICAgYm9yZGVyOiBub25lXHJcbiAgICAgICAgZGlzcGxheTogYmxvY2tcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0b1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0b1xyXG5cclxuICAgIC5iYy1ib2R5IHBcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRcclxuXHJcbiAgICAuYmMtY2hlY2tvdXQtYWN0aXZlIGJ1dHRvblxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1waW5rMlxyXG4gICAgICAgIGNvbG9yOiAjZmZmXHJcblxyXG4gICAgLmJjLWNoZWNrb3V0LWRpc2FibGUgYnV0dG9uXHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLXBpbmsyXHJcbiAgICAgICAgY29sb3I6ICMwMDBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudFxyXG5cclxuICAgIC50aXRsZS1iYW5uZXItY2hja1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1waW5rMlxyXG4gICAgICAgIGNvbG9yOiAjZmZmXHJcbiAgICAgICAgd2lkdGg6IDcwJVxyXG4gICAgICAgIGhlaWdodDogNDVweFxyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzXHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMCVcclxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjVweFxyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IDBcclxuXHJcbiAgICAuY2FyZC1pdGVtLWNhclxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGM0YyRjBcclxuICAgICAgICBwYWRkaW5nOiAxNXB4XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweFxyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvXHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvXHJcbiAgICAgICAgd2lkdGg6IDk1JVxyXG4gICAgICAgIGJveC1zaGFkb3c6IDJweCAzcHggMnB4ICMwMDAwMDA1NFxyXG5cclxuICAgIC5jYXJkLWl0ZW0tY2FyIGhyXHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG9cclxuXHJcbiAgICAuY2FyZC1pdGVtLWRlc2NyaXB0aW9uXHJcbiAgICAgICAgd2lkdGg6IDYwJVxyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvXHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nXHJcblxyXG4gICAgLmNhcmQtaXRlbS1kZXNjcmlwdGlvbiBwXHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRcclxuICAgICAgICB0ZXh0LWFsaWduOiBlbmRcclxuICAgICAgICBmb250LXNpemU6IDAuOHJlbVxyXG4gICAgICAgIGNvbG9yOiBncmF5XHJcbiAgICAgICAgd2lkdGg6IDcwJVxyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvICAgICAgICBcclxuXHJcbiAgICAuY2FyZC1pdGVtLXRpdGxlXHJcbiAgICAgICAgZGlzcGxheTogZmxleFxyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxyXG4gICAgICAgIHdpZHRoOiA1MCVcclxuXHJcbiAgICAuY29zdC10aXRsZVxyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrXHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHRcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyXHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTJweFxyXG5cclxuICAgIC5jb3N0LWRldGFpbHNcclxuICAgICAgICBkaXNwbGF5OiBibG9ja1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlclxyXG4gICAgICAgIGNvbG9yOiBncmF5XHJcblxyXG4gICAgLmNhcmQtaXRlbS1xdWFudGl0eVxyXG4gICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbiAgICAgICAgZGlzcGxheTogZmxvdy1yb290XHJcblxyXG4gICAgLmNhcmQtaXRlbS1xdWFudGl0eSBpbnB1dFxyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG4gICAgICAgIGZsb2F0OiByaWdodFxyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJ1xyXG4gICAgICAgIGhlaWdodDogNDBweFxyXG4gICAgICAgIHdpZHRoOiA1MCVcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JheVxyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweFxyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrXHJcbiAgICAgICAgb3V0bGluZTogbm9uZVxyXG5cclxuICAgIC5jYXJkLWl0ZW0tcXVhbnRpdHkgaW5wdXQ6Zm9jdXMtdmlzaWJsZVxyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLXBpbmsyXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweFxyXG5cclxuICAgIC5jb3N0LXRvdGFsXHJcbiAgICAgICAgY29sb3I6ICMwMDBcclxuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bydcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZFxyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMS4wcmVtXHJcblxyXG4gICAgLmJ0bi1jaGVjay1jb250aW51ZVxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1waW5rMlxyXG4gICAgICAgIGNvbG9yOiAjZmZmXHJcbiAgICAgICAgYm9yZGVyOiBub25lXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweFxyXG4gICAgICAgIHdpZHRoOiA3MCVcclxuICAgICAgICBtYXJnaW46IDEwcHggYXV0b1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrXHJcbiAgICAgICAgaGVpZ2h0OiA0NXB4XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW1cclxuICAgIFxyXG4gICAgLmJ0bi1jaGVjay1jb250aW51ZTpkaXNhYmxlZFxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhNjAzMmY4NVxyXG5cclxuICAgIC5idG4tY2hlY2stYmFja1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjFFMUZcclxuICAgICAgICBjb2xvcjogI2ZmZlxyXG4gICAgICAgIGJvcmRlcjogbm9uZVxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHhcclxuICAgICAgICB3aWR0aDogNzAlXHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG9cclxuICAgICAgICBkaXNwbGF5OiBibG9ja1xyXG4gICAgICAgIGhlaWdodDogNDVweFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtXHJcblxyXG4gICAgLmhlYWRlci1jaGVja291dFxyXG4gICAgICAgIGNvbG9yOiAkY29sb3ItcGluazJcclxuICAgICAgICB3aWR0aDogMzAlXHJcbiAgICAgICAgaGVpZ2h0OiAxcHggIWltcG9ydGFudFxyXG4gICAgICAgIG9wYWNpdHk6IGluaGVyaXRcclxuICAgICAgICBtYXJnaW4tdG9wOiA0cHhcclxuXHJcbiAgICAudGl0bGUtY2hlY2tvdXRcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwXHJcblxyXG4gICAgLmZvcm0tY2hlY2tvdXQtaW5mbyBsYWJlbFxyXG4gICAgICAgIGNvbG9yOiAjNWI1OTU5XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW1cclxuXHJcbiAgICAuZm9ybS1jaGVja291dC1pbmZvIGlucHV0XHJcbiAgICAgICAgaGVpZ2h0OiAzNXB4XHJcblxyXG4gICAgLmZvcm0tY2hlY2tvdXQtaW5mbyBpbnB1dCwgLmZvcm0tY2hlY2tvdXQtaW5mbyB0ZXh0YXJlYVxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHhcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNWI1OTU5NTJcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweFxyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweFxyXG4gICAgICAgIG91dGxpbmU6IG5vbmVcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94XHJcbiAgICAgICAgd2lkdGg6IDEwMCVcclxuXHJcbiAgICAuZm9ybS1jaGVja291dC1pbmZvIGlucHV0OmZvY3VzLXZpc2libGUsIC5mb3JtLWNoZWNrb3V0LWluZm8gdGV4dGFyZWE6Zm9jdXMtdmlzaWJsZVxyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1waW5rMlxyXG5cclxuICAgIC5mb3JtLWNoZWNrb3V0LWluZm8gaW1nXHJcbiAgICAgICAgd2lkdGg6IGF1dG9cclxuICAgICAgICBoZWlnaHQ6IDIwcHhcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmVcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMTVweFxyXG4gICAgICAgIGZsb2F0OiByaWdodFxyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0b1xyXG5cclxuICAgIC5mb290ZXItY2hlY2stbGluZVxyXG4gICAgICAgIGNvbG9yOiAkY29sb3ItcGluazJcclxuICAgICAgICB3aWR0aDogODAlXHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG9cclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG9cclxuICAgICAgICBkaXNwbGF5OiBibG9ja1xyXG4gICAgICAgIG9wYWNpdHk6IDFcclxuXHJcbiAgICAudGFibGVcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNGMkYwXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweFxyXG4gICAgICAgIHBhZGRpbmc6IDEwcHhcclxuXHJcbiAgICAudGFibGUgdGhcclxuICAgICAgICBmb250LXNpemU6IDAuN3JlbVxyXG5cclxuICAgIC50YWJsZSB0ZFxyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJ1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3hcclxuXHJcbiAgICB0Zm9vdFxyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnRcclxuXHJcbiAgICAuaW52b2ljZS1kZXNjcmlwdGlvblxyXG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmRcclxuICAgICAgICBmb250LXNpemU6IDAuNnJlbSAhaW1wb3J0YW50XHJcblxyXG4gICAgLmludm9pY2UtY29zdFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMC41cmVtICFpbXBvcnRhbnRcclxuXHJcbiAgICAuY2hlY2stb3JkZXItaGVhZGVyXHJcbiAgICAgICAgY29sb3I6ICRjb2xvci1waW5rMlxyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG5cclxuICAgIC5jaGVjay1vcmRlci1oZWFkZXIgaW1nXHJcbiAgICAgICAgZGlzcGxheTogYmxvY2tcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0b1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0b1xyXG5cclxuICAgIC5jaGVjay1vcmRlci1oZWFkZXIgcFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtXHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRcclxuICAgICAgICBmb250LWZhbWlseTogXCJSYWxld2F5LVRoaW5cIiAhaW1wb3J0YW50XHJcblxyXG4gICAgLmNoZWNrLW9yZGVyLXJlc3VtZVxyXG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHhcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjODA4MDgwMzhcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4XHJcbiAgICAgICAgcGFkZGluZzogMjBweFxyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjhyZW1cclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuOHJlbVxyXG5cclxuICAgIC5jaGVjay1vcmRlci1yZXN1bWUgbGFiZWxcclxuICAgICAgICBmb250LWZhbWlseTogXCJSYWxld2F5LVRoaW5cIiAhaW1wb3J0YW50XHJcblxyXG4gICAgLnRhYmxlLWRldGFpbHMtc21hbGxcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50XHJcbiAgICAgICAgd2lkdGg6IDk1JVxyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW1cclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbVxyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheSdcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4XHJcbiAgICBcclxuICAgIC5vcmRlci1kZXNjcmlwdGlvblxyXG4gICAgICAgIGNvbG9yOiBncmF5XHJcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZFxyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnRcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA3MHB4XHJcbiIsIi8qTmFueSBGb250cyovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIHNyYzogdXJsKFwiYXNzZXRzL2ZvbnRzL1JvYm90by9Sb2JvdG8tUmVndWxhci50dGZcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiO1xuICBzcmM6IHVybChcImFzc2V0cy9mb250cy9SYWxld2F5L3N0YXRpYy9SYWxld2F5LUJvbGQudHRmXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXktVGhpblwiO1xuICBzcmM6IHVybChcImFzc2V0cy9mb250cy9SYWxld2F5L3N0YXRpYy9SYWxld2F5LVRoaW4udHRmXCIpO1xufVxuLypOYW55IENvbG9ycyovXG4vKlNjcmVlbiBTaXppbmcqL1xuLypTdGF0ZSBPcmRlciBDb2xvcnMqL1xuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmgzLCBoNCB7XG4gIGNvbG9yOiAjRDYwNDUxO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDYwNDUxO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4vKiBMYW5kaW5nIFBhZ2UgU3R5bGVzICovXG5AbWVkaWEgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5jYXJvdXNlbC1sYW5kIHtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIHotaW5kZXg6IDE7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG5cbiAgLmNhcm91c2VsLWxhbmRpbmcge1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgaGVpZ2h0OiAyNTBweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIH1cblxuICAuY2Fyb3VzZWwtaW5mbyB7XG4gICAgei1pbmRleDogMjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy10b3A6IDcwcHg7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgfVxuXG4gIC5jYXJvdXNlbC1pbmZvIGgxIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgfVxuXG4gIC5jYXJvdXNlbC1pbmZvIGJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDExMnB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBsaW5lLWhlaWdodDogMDtcbiAgfVxuXG4gICNjYXJvdXNlbEluZm8ge1xuICAgIGhlaWdodDogMjUwcHg7XG4gIH1cblxuICAuY2FyZC1ib2R5LWNhdGVnb3J5IHtcbiAgICBoZWlnaHQ6IDkwcHg7XG4gICAgd2lkdGg6IDk2cHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gIH1cblxuICAuY2FyZC1sYW5kaW5nIHtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICB9XG5cbiAgLmNhcmQtYm9keS1sYW5kaW5nIGgyIHtcbiAgICBsaW5lLWhlaWdodDogNDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5wcm9kdWN0cy1sYW5kaW5nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGM0YzO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuXG4gIC5wcm9kdWN0cy1sYW5kaW5nIGgzIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgfVxuXG4gIC5wcm9kdWN0cy1sYW5kaW5nIGg0IHtcbiAgICBjb2xvcjogIzAwMDAwMGI2O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICB9XG5cbiAgLmNhcm91c2VsLWl0ZW0tYmcge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIGhlaWdodDogMTcwcHg7XG4gIH1cblxuICAucHJvZHVjdHMtY2Fyb3VzZWwtbGFuZGluZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAucHJvZHVjdHMtdGl0bGUtbGFuZGluZyB7XG4gICAgY29sb3I6ICNBNjAzMkY7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cblxuICAucHJvZHVjdC1idG4tY2Fyb3VzZWwtbGFuZGluZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0E2MDMyRjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogODAlIDgwJTtcbiAgfVxuXG4gIC5idG4tZml4LWNhcm91c2VsIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHdpZHRoOiAyNSU7XG4gIH1cblxuICAucHJvZHVjdHMtcHJpY2UtbGFuZGluZyB7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cblxuICAucHJvZHVjdHMtcXR5LWxhbmRpbmcge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNBNjAzMkY7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIuMnJlbTtcbiAgICBjb2xvcjogIzAwMDtcbiAgfVxuXG4gIC5idXR0b24tY291bnRlci1sYW5kaW5nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTYwMzJGO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgZm9udC1mYW1pbHk6IHJldmVydDtcbiAgfVxuXG4gIC5idG4tbWludXMtbGFuZGluZywgLmJ0bi1wbHVzLWxhbmRpbmcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDE1JTtcbiAgfVxuXG4gIC5idG4tbWludXMtbGFuZGluZyB7XG4gICAgcmlnaHQ6IDIwJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgICBmb250LXNpemU6IDQuNXJlbTtcbiAgfVxuXG4gIC5idG4tcGx1cy1sYW5kaW5nIHtcbiAgICBsZWZ0OiAyMCU7XG4gIH1cblxuICAucHJvZHVjdHMtYnRuLWxhbmRpbmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNBNjAzMkY7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgfVxuXG4gIC5pbmZvLWxhbmRpbmcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDIyMHB4O1xuICB9XG5cbiAgLmluZm8tbGFuZGluZy1sYXlvdXQge1xuICAgIG1hcmdpbi10b3A6IC00MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDYwJTtcbiAgICBoZWlnaHQ6IDkwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZDogI0E2MDMyRjtcbiAgfVxuXG4gIC5pbmZvLWxhbmRpbmctbGF5b3V0MiB7XG4gICAgYmFja2dyb3VuZDogI0E2MDMyRjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxNzBweDtcbiAgICB6LWluZGV4OiAyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDQ3cHg7XG4gIH1cblxuICAuaW5mby1ib3ggaW1nIHtcbiAgICBoZWlnaHQ6IDYzcHg7XG4gICAgd2lkdGg6IDYzcHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICAuaW5mby1ib3ggcCB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cbiAgLmNhcmQtY29tcGFueS1sYW5kaW5nIHtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICAuY2FyZC1jb21wYW55LWxhbmRpbmcgaW1nIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDcwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuXG4gIC5jb250YWN0LWxhbmRpbmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkU5Qzc7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxuXG4gIC5jb250YWN0LWxhbmRpbmcgaDMge1xuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgfVxuXG4gIC8qTG9naW4gU3R5bGVzKi9cbiAgLmNvbnRhaW5lci1sb2dpbiB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIC5mb3JtLWNvbnRlbnRzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDYwNDUxO1xuICAgIGhlaWdodDogMzUwcHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNDAlO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0MCU7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cblxuICAuZm9ybS1jb250ZW50cyBoMiB7XG4gICAgcGFkZGluZy10b3A6IDYwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmZvcm0tY29udGVudHMgaW5wdXQge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRTlDNztcbiAgfVxuXG4gIC5mb3JtLWNvbnRlbnRzIGg1IHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIycHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMnB4O1xuICB9XG5cbiAgLmZvcm0tbGlua3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNENjA0NTE7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgfVxuXG4gIC5mb3JtLWxpbmtzIGEge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMnB4O1xuICB9XG5cbiAgLmZvcm0tbGlua3MgaDYge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjRkZGO1xuICB9XG5cbiAgLmxvZ2luLWZlZWRiYWNrIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG5cbiAgY2hlY2tvdXQtZmVlZGJhY2sge1xuICAgIGNvbG9yOiAjRDYwNDUxO1xuICB9XG5cbiAgI2J0bi1sb2dpbiB7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUE3QkRCO1xuICAgIGJvcmRlci1jb2xvcjogIzFBN0JEQjtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgfVxuXG4gICNsb2dvIHtcbiAgICB3aWR0aDogNjAlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gICNyZWdpc3RlciB7XG4gICAgY29sb3I6ICMxQTdCREI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIHdpZHRoOiAyMCU7XG4gIH1cblxuICAucmVnaXN0cm8tYWRkLXJlc3BvbnNlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogI0ZGRTlDNztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC8qUmVnaXN0ZXIgU3R5bGVzKi9cbiAgLmluZm8ge1xuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICB9XG5cbiAgLmF2aXNvIHtcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcbiAgfVxuXG4gIC5pbmZvIGg2IHtcbiAgICBjb2xvcjogI0Q2MDQ1MTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICB9XG5cbiAgLmZvcm0tY29udGVuZWRvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Q2MDQ1MTtcbiAgICBoZWlnaHQ6IDMyMHB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDQwJTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNDAlO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG5cbiAgLmZvcm0tY29udGVuZWRvciBoNSB7XG4gICAgbWFyZ2luLXRvcDogMjhweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjJweDtcbiAgfVxuXG4gIC5mb3JtLWNvbnRlbmVkb3IgaDIge1xuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5yZWdpc3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Q2MDQ1MTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cblxuICAucmVnaXN0ZXIgc2VsZWN0IHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkU5Qzc7XG4gIH1cblxuICAucmVnaXN0ZXIgaDIge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjJweDtcbiAgfVxuXG4gIC5yZWdpc3RlciBoNSB7XG4gICAgbWFyZ2luLXRvcDogMjhweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjJweDtcbiAgfVxuXG4gIC5yZWdpc3RlciBoNiB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI0ZGRjtcbiAgfVxuXG4gIC5pbnAtZm9ybSB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZFOUM3O1xuICB9XG5cbiAgLmNoay1mb3JtIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjJweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB9XG5cbiAgI2J0bi1yZWdpc3RybyB7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUE3QkRCO1xuICAgIGJvcmRlci1jb2xvcjogIzFBN0JEQjtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICB3aWR0aDogNjAlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgfVxuXG4gICNyZWdpc3RybyB7XG4gICAgY29sb3I6ICMxMUJERjI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIC8qQ2F0ZWdveSBTdHlsZXMqL1xuICAjY2F0ZWdvcnlDb250YWluZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICB9XG5cbiAgLmNhcmQtdGl0bGUtY2F0ZWdvcnkge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gIH1cblxuICAjY2F0ZWdvcnlDb250YWluZXIgaHIge1xuICAgIGNvbG9yOiAjQTYwMzJGO1xuICB9XG5cbiAgI2NhdGVnb3J5Q29udGFpbmVyIC5jYXJkIHtcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTUpLCAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgaGVpZ2h0OiAxNjBweDtcbiAgfVxuXG4gICNjYXRlZ29yeUNvbnRhaW5lciBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuICAvKiBTdHlsZSBDb21wYW55cyovXG4gICNjb21wYW55Q29udGFpbmVyIGg0IHtcbiAgICBjb2xvcjogI0Q2MDQ1MTtcbiAgfVxuXG4gICNjb21wYW55Q29udGFpbmVyIC5jYXJkLWNvbXBhbnktbGFuZGluZyB7XG4gICAgaGVpZ2h0OiAxMTVweDtcbiAgfVxuXG4gICNjb21wYW55Q29udGFpbmVyIC5jYXJkIHtcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTUpLCAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgaGVpZ2h0OiAxNjBweDtcbiAgfVxuXG4gIC8qIFN0eWxlcyBQcm9maWxlKi9cbiAgI3Byb2ZpbGVDb250YWluZXIgaW1nIHtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAjcHJvZmlsZUNvbnRhaW5lciBoNSB7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NSk7XG4gICAgbWFyZ2luLWJvdHRvbTogMXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG5cbiAgI3Byb2ZpbGVDb250YWluZXIgaDQge1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDIwcHggMHB4O1xuICB9XG5cbiAgI3Byb2ZpbGVDb250YWluZXIgaHIge1xuICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIH1cblxuICAuaW5mbyBoNSB7XG4gICAgY29sb3I6ICNENjA0NTE7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmZvcm0tY29udGVudCB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNDAlO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0MCU7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cblxuICAuZm9ybS1jb250ZW50IGg1IHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZm9ybS1jb250ZW50IGgyIHtcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuZm9ybS1jb250ZW50IHNlbGVjdCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZFOUM3O1xuICB9XG5cbiAgLmZvcm0tY29udGVudCBoNSB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjJweDtcbiAgfVxuXG4gIC5mb3JtLWNvbnRlbnQgaDYge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgcGFkZGluZzogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gIH1cblxuICAuaW5wdXQtZm9ybSB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZFOUM3O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNGRkU5Qzc7XG4gIH1cblxuICAuY2hrcy1mb3JtIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjJweDtcbiAgfVxuXG4gIC5jaGtzLWZvcm0gLmZvcm0tY2hlY2stbGFiZWwge1xuICAgIGNvbG9yOiAjMDAwO1xuICB9XG5cbiAgI2J0bi1zYXZlIHtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNBNjAzMkY7XG4gICAgYm9yZGVyLWNvbG9yOiAjQTYwMzJGO1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIHdpZHRoOiA2MCU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIH1cblxuICAjYnRuLWNhbmNlbCB7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI1MDUwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICB3aWR0aDogNjAlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIH1cblxuICAvKlN0eWxlcyBIaXN0b3JpYWwqL1xuICAjaGlzdG9yaWFsQ29udGFpbmVyIGhyLCAjaGlzdG9yaWFsIGhyIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB9XG5cbiAgI2hpc3RvcmlhbCBoNSwgI2hpc3RvcmlhbCBoNiB7XG4gICAgY29sb3I6ICM2NjYzNjM7XG4gIH1cblxuICAuaW1nLWhpc3RvcmlhbCB7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIH1cblxuICAuYnRuLXN0YXRlLW9yZGVyIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LW92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5idG4tb25XYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjFFMUU7XG4gIH1cblxuICAuYnRuLW9uT3JpZ2luIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZFNTAwO1xuICB9XG5cbiAgLmJ0bi1vbkRlc3Rpbnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjAwOEE7XG4gIH1cblxuICAuYnRuLWRlbGl2ZXJlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwRUYzNTtcbiAgfVxuXG4gICNidG4tc2F2ZS1pbWFnZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0E2MDMyRjtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cblxuICAuYnRuLXVwbG9hZC1pbWFnZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDUwcHggMTBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgYmFja2dyb3VuZDogI0E2MDMyRjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDM3JTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICB9XG5cbiAgLmJ0bi11cGxvYWRlZC1pbWFnZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDQwcHggMTBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgYmFja2dyb3VuZDogIzAwQkIyRDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDM3JTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICB9XG5cbiAgLmNoZWNrLXVwbG9hZCB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG5cbiAgLmJ0bi1yZWFkeS1pbWFnZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwQkIyRDtcbiAgfVxuXG4gIC8qTW9kYWwgSW52b2ljZSovXG4gIC5idG4tbW9kYWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNBNjAzMkY7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDQwJTtcbiAgICBib3JkZXItY29sb3I6ICNBNjAzMkY7XG4gIH1cblxuICAudGFibGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGM0YyRjA7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG5cbiAgLnRhYmxlIHRoIHtcbiAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgfVxuXG4gIC50b3RhbC1pbnZvaWNlIHtcbiAgICBmb250LXNpemU6IDAuNzVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC50b3RhbC1pbnZvaWNlLW51bWJlciB7XG4gICAgZm9udC1zaXplOiAwLjZyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC50YWJsZSB0ZCB7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuXG4gIHRmb290IHtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgLmludm9pY2UtZGVzY3JpcHRpb24ge1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgZm9udC1zaXplOiAwLjZyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pbnZvaWNlLWNvc3Qge1xuICAgIGZvbnQtc2l6ZTogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAvKiBTdHlsZXMgUHJvZHVjdCovXG4gIC5wcm9kdWN0LWNvbXBhbnkge1xuICAgIG1hcmdpbjogMzBweCA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjOTI1MDlEO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuICAucHJvZHVjdC1jb21wYW55OmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkyNTA5RDtcbiAgfVxuXG4gIC5wcm9kdWN0LWltZy1jb21wYW55IGltZyB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgLnByb2R1Y3QtY29tcGFueSBwIHtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgY29sb3I6ICMwMDA7XG4gIH1cblxuICAucHJvZHVjdC1zdGFydCB7XG4gICAgY29sb3I6ICNmQ0M2MDc7XG4gIH1cblxuICAucHJvZHVjdC10b3VjaC1jb21wYW55IHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkyNTA5RDtcbiAgICB3aWR0aDogMTUlO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuXG4gIC5wcm9kdWN0cy1idG4tY2FyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTYwMzJGO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICB9XG5cbiAgLnByb2R1Y3RzLWJ0bi1kZXRhaWxzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICAgIG1hcmdpbjogMTBweCBhdXRvIDMwcHggYXV0bztcbiAgICB3aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuXG4gIC8qTW9kYWwgQ29tcGFueSovXG4gIC5tb2RhbC1oZWFkZXItY29tcGFueSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuXG4gIC8qTW9kYWwgUHJvZHVjdCovXG4gIC5tb2RhbC1ib2R5LXByb2R1Y3QgaW1nIHtcbiAgICB3aWR0aDogNDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAvKlN0eWxlcyBDaGVja291dCovXG4gIC5iYy1jaGVja291dC10aXRsZSBpbWcge1xuICAgIHdpZHRoOiAzMCU7XG4gICAgbWFyZ2luOiAzMHB4IGF1dG8gMTBweCBhdXRvO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5iYy1jaGVja291dC10aXRsZSBociB7XG4gICAgY29sb3I6ICNENjA0NTE7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuYmMtYm9keSB7XG4gICAgbWFyZ2luOiA1cHggYXV0bztcbiAgfVxuXG4gIC5iYy1ib2R5IGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICB3aWR0aDogMTclO1xuICAgIGhlaWdodDogNThweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB9XG5cbiAgLmJjLWJvZHkgcCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAuYmMtY2hlY2tvdXQtYWN0aXZlIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0E2MDMyRjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuXG4gIC5iYy1jaGVja291dC1kaXNhYmxlIGJ1dHRvbiB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0E2MDMyRjtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIC50aXRsZS1iYW5uZXItY2hjayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0E2MDMyRjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB3aWR0aDogNzAlO1xuICAgIGhlaWdodDogNDVweDtcbiAgICBsaW5lLWhlaWdodDogMztcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjVweDtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgfVxuXG4gIC5jYXJkLWl0ZW0tY2FyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNGMkYwO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDk1JTtcbiAgICBib3gtc2hhZG93OiAycHggM3B4IDJweCAjMDAwMDAwNTQ7XG4gIH1cblxuICAuY2FyZC1pdGVtLWNhciBociB7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIH1cblxuICAuY2FyZC1pdGVtLWRlc2NyaXB0aW9uIHtcbiAgICB3aWR0aDogNjAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgfVxuXG4gIC5jYXJkLWl0ZW0tZGVzY3JpcHRpb24gcCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGNvbG9yOiBncmF5O1xuICAgIHdpZHRoOiA3MCU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIH1cblxuICAuY2FyZC1pdGVtLXRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNTAlO1xuICB9XG5cbiAgLmNvc3QtdGl0bGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogLTJweDtcbiAgfVxuXG4gIC5jb3N0LWRldGFpbHMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgY29sb3I6IGdyYXk7XG4gIH1cblxuICAuY2FyZC1pdGVtLXF1YW50aXR5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxvdy1yb290O1xuICB9XG5cbiAgLmNhcmQtaXRlbS1xdWFudGl0eSBpbnB1dCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5cbiAgLmNhcmQtaXRlbS1xdWFudGl0eSBpbnB1dDpmb2N1cy12aXNpYmxlIHtcbiAgICBib3JkZXItY29sb3I6ICNBNjAzMkY7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgfVxuXG4gIC5jb3N0LXRvdGFsIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICB9XG5cbiAgLmJ0bi1jaGVjay1jb250aW51ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0E2MDMyRjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICB3aWR0aDogNzAlO1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogNDVweDtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxuXG4gIC5idG4tY2hlY2stY29udGludWU6ZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhNjAzMmY4NTtcbiAgfVxuXG4gIC5idG4tY2hlY2stYmFjayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMUUxRjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICB3aWR0aDogNzAlO1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogNDVweDtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxuXG4gIC5oZWFkZXItY2hlY2tvdXQge1xuICAgIGNvbG9yOiAjQTYwMzJGO1xuICAgIHdpZHRoOiAzMCU7XG4gICAgaGVpZ2h0OiAxcHggIWltcG9ydGFudDtcbiAgICBvcGFjaXR5OiBpbmhlcml0O1xuICAgIG1hcmdpbi10b3A6IDRweDtcbiAgfVxuXG4gIC50aXRsZS1jaGVja291dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuXG4gIC5mb3JtLWNoZWNrb3V0LWluZm8gbGFiZWwge1xuICAgIGNvbG9yOiAjNWI1OTU5O1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICB9XG5cbiAgLmZvcm0tY2hlY2tvdXQtaW5mbyBpbnB1dCB7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICB9XG5cbiAgLmZvcm0tY2hlY2tvdXQtaW5mbyBpbnB1dCwgLmZvcm0tY2hlY2tvdXQtaW5mbyB0ZXh0YXJlYSB7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNWI1OTU5NTI7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuZm9ybS1jaGVja291dC1pbmZvIGlucHV0OmZvY3VzLXZpc2libGUsIC5mb3JtLWNoZWNrb3V0LWluZm8gdGV4dGFyZWE6Zm9jdXMtdmlzaWJsZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0E2MDMyRjtcbiAgfVxuXG4gIC5mb3JtLWNoZWNrb3V0LWluZm8gaW1nIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIG1hcmdpbi10b3A6IC0xNXB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIH1cblxuICAuZm9vdGVyLWNoZWNrLWxpbmUge1xuICAgIGNvbG9yOiAjQTYwMzJGO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICAudGFibGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGM0YyRjA7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG5cbiAgLnRhYmxlIHRoIHtcbiAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgfVxuXG4gIC50YWJsZSB0ZCB7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuXG4gIHRmb290IHtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgLmludm9pY2UtZGVzY3JpcHRpb24ge1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgZm9udC1zaXplOiAwLjZyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pbnZvaWNlLWNvc3Qge1xuICAgIGZvbnQtc2l6ZTogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuY2hlY2stb3JkZXItaGVhZGVyIHtcbiAgICBjb2xvcjogI0E2MDMyRjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuY2hlY2stb3JkZXItaGVhZGVyIGltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB9XG5cbiAgLmNoZWNrLW9yZGVyLWhlYWRlciBwIHtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LWZhbWlseTogXCJSYWxld2F5LVRoaW5cIiAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmNoZWNrLW9yZGVyLXJlc3VtZSB7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODA4MDgwMzg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwLjhyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjhyZW07XG4gIH1cblxuICAuY2hlY2stb3JkZXItcmVzdW1lIGxhYmVsIHtcbiAgICBmb250LWZhbWlseTogXCJSYWxld2F5LVRoaW5cIiAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnRhYmxlLWRldGFpbHMtc21hbGwge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICAgIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG5cbiAgLm9yZGVyLWRlc2NyaXB0aW9uIHtcbiAgICBjb2xvcjogZ3JheTtcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogNzBweDtcbiAgfVxufVxuLm5hdmJhci10b2dnbGVyIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmZhLWRyb3Bkb3duIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cblxuLmZhLXNob29waW5nIHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuXG4uc3Bhbi1zaG9vcGluZy1xdHkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDE5JTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q2MDQ1MTtcbiAgYm9yZGVyLXJhZGl1czogNjBweDtcbiAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgd2lkdGg6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAyMXB4O1xuICBsaW5lLWhlaWdodDogaW5pdGlhbDtcbiAgei1pbmRleDogMjtcbiAgdG9wOiA1cHg7XG59XG5cbmhyIHtcbiAgbWFyZ2luOiAxNXB4IDQ1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbiNpbWctbG9nbyB7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuI2xvZ29OYXZiYXIge1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICB3aWR0aDogMzAlO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbiNub0xvZ2dlZERyb3Bkb3duIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDAuODVkZWcsIHJnYmEoMTY2LCAzLCA0NywgMC42KSAwLjc1JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSA0MC40JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSA1MS4zNCUpLCAjRDYwNDUxO1xuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG11bHRpcGx5LCBub3JtYWw7XG59XG5cbiNMb2dnZWREcm9wZG93biB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogbXVsdGlwbHksIG5vcm1hbDtcbn1cblxuLmJ0bi1sb2dnaW4ge1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xufVxuXG4jYnRuTm9Mb2dnZWQxIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRTlDNztcbiAgYm9yZGVyLWNvbG9yOiAjRkZFOUM3O1xuICBjb2xvcjogI0Q2MDQ1MTtcbn1cblxuI2J0bk5vTG9nZ2VkMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxQTdCREI7XG4gIGJvcmRlci1jb2xvcjogIzFBN0JEQjtcbiAgY29sb3I6ICNGRkY7XG59XG5cbiNidG5Ob0xvZ2dlZDMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTFCREYyO1xuICBib3JkZXItY29sb3I6ICMxMUJERjI7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4jYnRuTG9nZ2VkMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkU5Qzc7XG4gIGJvcmRlci1jb2xvcjogI0ZGRTlDNztcbiAgY29sb3I6ICNENjA0NTE7XG59XG5cbiNidG5Mb2dnZWQyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0E2MDMyRjtcbiAgYm9yZGVyLWNvbG9yOiAjQTYwMzJGO1xuICBjb2xvcjogI0ZGRjtcbn1cblxuI2J0bkxvZ2dlZDMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOEE4MjgyO1xuICBib3JkZXItY29sb3I6ICM4QTgyODI7XG4gIGNvbG9yOiAjRkZGO1xufSJdfQ== */"] });


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.config */ "aR35");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class AuthService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    login(data) {
        return this.httpClient.post(`${_app_config__WEBPACK_IMPORTED_MODULE_0__["API_BASE_URL"]}/auth`, data);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "lrdA":
/*!*********************************************!*\
  !*** ./src/app/services/ordenes.service.ts ***!
  \*********************************************/
/*! exports provided: OrdenesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdenesService", function() { return OrdenesService; });
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.config */ "aR35");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class OrdenesService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    obtenerOrdenes(idUsuario) {
        return this.httpClient.get(`${_app_config__WEBPACK_IMPORTED_MODULE_0__["API_BASE_URL"]}/usuarios/${idUsuario}`);
    }
    nuevaOrden(orden) {
        return this.httpClient.post(`${_app_config__WEBPACK_IMPORTED_MODULE_0__["API_BASE_URL"]}/ordenes`, orden);
    }
}
OrdenesService.ɵfac = function OrdenesService_Factory(t) { return new (t || OrdenesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
OrdenesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OrdenesService, factory: OrdenesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "mSt+":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _services_categorias_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/categorias.service */ "Xnfx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../footer/footer.component */ "fp1T");








function LandingPageComponent_button_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Ordena ya");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LandingPageComponent_button_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Ordena ya");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "active": a0 }; };
function LandingPageComponent_div_77_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LandingPageComponent_div_77_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const producto_r3 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.verProducto(producto_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Agregar al Carrito");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const producto_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, i_r4 == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", producto_r3.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](producto_r3.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("L. ", producto_r3.precio, "");
} }
class LandingPageComponent {
    constructor(cookiesService, categoriasService, _route) {
        this.cookiesService = cookiesService;
        this.categoriasService = categoriasService;
        this._route = _route;
        this.isLogged = false;
        this.categorias = [];
        this.empresas = [];
        this.productosMuestra = [];
    }
    ngOnInit() {
        if (this.cookiesService.check('nanyUsuarioId')) {
            this.isLogged = true;
        }
        this.categoriasService.obtenerCategorias().subscribe(result => {
            this.categorias = result;
            this.categorias.forEach(categoria => {
                if (categoria.empresas.length != 0) {
                    categoria.empresas.forEach(empresa => {
                        if (empresa.productos.length != 0) {
                            empresa.idCategoria = categoria._id;
                            this.empresas.push(empresa);
                            //Asignar Provicional productos
                            empresa.productos.forEach(producto => {
                                producto.idCategoria = categoria._id;
                                producto.idEmpresa = empresa._id;
                                this.productosMuestra.push(producto);
                            });
                        }
                    });
                }
            });
            console.log(this.productosMuestra);
        }, error => {
            console.log(error);
        });
    }
    verProducto(producto) {
        if (this.isLogged) {
            this._route.navigate([`/categorias/${producto.idCategoria}/empresas/${producto.idEmpresa}/productos`]);
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
                icon: 'info',
                text: 'Inicia sesión para poder agregar al carrito.',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#A6032F'
            });
            this._route.navigate(['/login']);
        }
    }
}
LandingPageComponent.ɵfac = function LandingPageComponent_Factory(t) { return new (t || LandingPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_categorias_service__WEBPACK_IMPORTED_MODULE_3__["CategoriasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
LandingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LandingPageComponent, selectors: [["app-landing-page"]], decls: 138, vars: 3, consts: [["id", "carouselInfo", 1, "position-relative"], ["id", "carouselTopinfo", "data-bs-ride", "carousel", 1, "carousel", "carousel-land", "slide"], [1, "carousel-inner"], ["data-bs-interval", "10000", 1, "carousel-item", "active"], ["src", "../assets/img/carousel-comida.jpg", "alt", "...", 1, "d-block", "w-100", "carousel-landing"], ["data-bs-interval", "2000", 1, "carousel-item"], ["src", "../assets/img/carousel-dulces.jpg", "alt", "...", 1, "d-block", "w-100", "carousel-landing"], [1, "carousel-item"], ["src", "../assets/img/carousel-pastillas.jpg", "alt", "...", 1, "d-block", "w-100", "carousel-landing"], ["src", "../assets/img/carousel-ropa.jpg", "alt", "...", 1, "d-block", "w-100", "carousel-landing"], ["type", "button", "data-bs-target", "#carouselTopinfo", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#carouselTopinfo", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "carousel-info"], ["class", "btn btn-primary", "routerLink", "/login", "type", "button", 4, "ngIf"], ["class", "btn btn-primary", "routerLink", "/categorias", "type", "button", 4, "ngIf"], [1, "container", "mt-5"], [1, "row"], [1, "text-center"], [1, "col-12", "col-lg-12", "mt-3", "mb-2"], [1, "card", "card-landing", 2, "background", "rgba(245, 187, 0, 0.5)"], [1, "card-body", "p-2"], [1, "card-body-landing", "d-flex"], ["src", "../assets/img/categories/categoria-comida-rapida.png", "alt", "", 1, "card-body-category"], [1, "text-center", "ps-2"], [1, "card", "card-landing", 2, "background", "rgba(255, 1, 52, 0.81)"], ["src", "../assets/img/categories/categoria-medicamento.png", "alt", "", 1, "card-body-category"], [1, "card", "card-landing", 2, "background", "rgba(253, 75, 45, 0.5)"], ["src", "../assets/img/categories/categoria-vestir.png", "alt", "", 1, "card-body-category"], [1, "card", "card-landing", 2, "background", "rgba(254, 107, 0, 0.6)"], ["src", "../assets/img/categories/categoria-deportes.png", "alt", "", 1, "card-body-category"], [1, "card", "card-landing", 2, "background", "rgba(79, 154, 172, 0.5)"], ["src", "../assets/logos/Logo-Nany-trans-1-Icono.png", "alt", "", 1, "card-body-category"], [1, "products-landing"], [1, "container"], ["id", "carouselExampleIndicators", "data-bs-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators", "mb-5"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "0", "aria-current", "true", "aria-label", "Slide 1", 1, "active"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "1", "aria-label", "Slide 2"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "2", "aria-label", "Slide 3"], ["class", "carousel-item", 3, "ngClass", 4, "ngFor", "ngForOf"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide", "prev", 1, "carousel-control-prev", "btn-fix-carousel"], ["aria-hidden", "true", 1, "carousel-control-prev-icon", "product-btn-carousel-landing"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide", "next", 1, "carousel-control-next", "btn-fix-carousel"], ["aria-hidden", "true", 1, "carousel-control-next-icon", "product-btn-carousel-landing"], [1, "info-landing"], [1, "info-landing-layout"], [1, "info-landing-layout2"], [1, "col-4"], [1, "info-box", "d-block"], ["src", "../assets/iconos/landing-camion-blanco.png", "alt", ""], ["src", "../assets/iconos/landing-fiabilidad-blanco.png", "alt", ""], ["src", "../assets/iconos/landing-mascarilla-medica-blanco.png", "alt", ""], [1, "text-secondary", "mt-4", "text-center", "mb-2"], [1, "col-6", "p-0"], [1, "card-company-landing"], ["src", "../assets/img/companies/empresa-Coca-Cola_logo.svg"], ["src", "../assets/img/companies/empresa-farmacia-siman.png"], ["src", "../assets/img/companies/empresa-pizza-hut.svg"], ["src", "../assets/img/companies/empresa-pepsi-logo.png"], ["src", "../assets/img/companies/empresa-mendels.png"], ["src", "../assets/img/companies/empresa-circle-logo.png"], ["src", "../assets/img/companies/empresa-logo-La-Colonia.jpg"], ["src", "../assets/img/companies/empresa-larach-logo.png"], [1, "contact-landing"], ["routerLink", "/login", "type", "button", 1, "btn", "btn-primary"], ["routerLink", "/categorias", "type", "button", 1, "btn", "btn-primary"], [1, "carousel-item", 3, "ngClass"], [1, "carousel-item-bg"], ["alt", "...", 1, "products-carousel-landing", "d-block", 3, "src"], [1, "products-title-landing", "text-center"], [1, "products-price-landing", "text-center"], ["type", "button", 1, "btn-primary", "products-btn-landing", 3, "click"]], template: function LandingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Realizamos entregas de todo lo que tu necesitas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, LandingPageComponent_button_23_Template, 2, 0, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, LandingPageComponent_button_24_Template, 2, 0, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h3", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Descubre nuestras categorias Tenemos de todo un poco! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "h2", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " Comida Rapida ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "h2", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " Medicamentos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "h2", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Ropa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "h2", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, " Deportes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "h2", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, " Muchas m\u00E1s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "h3", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Los mejores productos a tu alcance");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Los productos mas vendidos en las \u00FAltimas horas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](77, LandingPageComponent_div_77_Template, 9, 6, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Entrega R\u00E1pida");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Seguridad y Confianza");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](103, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Medidas de Bioseguridad");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "h4", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, " Puedes realizar tus compras a estas empresas y m\u00E1s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](112, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](115, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](118, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](121, "img", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](124, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](127, "img", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](130, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](133, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "Escribenos al correo: nany-contact@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](137, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.productosMuestra);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], encapsulation: 2 });


/***/ }),

/***/ "nNO8":
/*!********************************************!*\
  !*** ./src/app/perfil/perfil.component.ts ***!
  \********************************************/
/*! exports provided: PerfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilComponent", function() { return PerfilComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_usuarios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/usuarios.service */ "ESM5");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/upload.service */ "jT/F");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../footer/footer.component */ "fp1T");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "JqCM");











function PerfilComponent_h5_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Masculino");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PerfilComponent_h5_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Femenino");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PerfilComponent_h5_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r2.usuario.ciudad.ciudad, ", HN");
} }
function PerfilComponent_select_27_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ciudad_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", ciudad_r9.idCiudad);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ciudad_r9.ciudad);
} }
function PerfilComponent_select_27_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function PerfilComponent_select_27_Template_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.usuario.ciudad.idCiudad = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PerfilComponent_select_27_option_1_Template, 2, 2, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.usuario.ciudad.idCiudad);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.ciudades);
} }
function PerfilComponent_label_44_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Sube Imagen ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function PerfilComponent_label_44_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.selectImage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PerfilComponent_label_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r5.faCheck);
} }
function PerfilComponent_button_46_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilComponent_button_46_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.onUpload(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Subir Imagen");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PerfilComponent_ngx_spinner_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ngx-spinner", 31);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fullScreen", true);
} }
class PerfilComponent {
    constructor(usuariosService, cookieService, uploadService) {
        this.usuariosService = usuariosService;
        this.cookieService = cookieService;
        this.uploadService = uploadService;
        this.faCheck = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faCheck"];
        this.usuario = '';
        this.file = null;
        this.formData = new FormData();
        this.inputFile = true;
        this.buttonFile = false;
        this.isLoading = false;
        this.ciudades = [
            { idCiudad: 1, ciudad: 'Choluteca' },
            { idCiudad: 2, ciudad: 'Comayagua' },
            { idCiudad: 3, ciudad: 'Gracias' },
            { idCiudad: 4, ciudad: 'Juticalpa' },
            { idCiudad: 5, ciudad: 'La Ceiba' },
            { idCiudad: 6, ciudad: 'La Paz' },
            { idCiudad: 7, ciudad: 'La Esperanza' },
            { idCiudad: 8, ciudad: 'Nacaome' },
            { idCiudad: 9, ciudad: 'Nuevo Ocotepeque' },
            { idCiudad: 10, ciudad: 'Puerto Lempira' },
            { idCiudad: 11, ciudad: 'Roatán' },
            { idCiudad: 12, ciudad: 'San Pedro Sula' },
            { idCiudad: 13, ciudad: 'Santa Bárbara' },
            { idCiudad: 14, ciudad: 'Santa  Rosa de Copán' },
            { idCiudad: 15, ciudad: 'Tegucigalpa' },
            { idCiudad: 16, ciudad: 'Trujillo' },
            { idCiudad: 17, ciudad: 'Yoro' },
            { idCiudad: 18, ciudad: 'Yuscarán' }
        ];
    }
    ngOnInit() {
        if (this.cookieService.check('nanyUsuarioId')) {
            this.isLoading = true;
            this.usuariosService.obtenerUsuario(this.cookieService.get('nanyUsuarioId')).subscribe(result => {
                let fecha = result.fechaNacimiento.split('T');
                result.fechaNacimiento = fecha[0];
                this.usuario = result;
                console.log(result);
                this.isLoading = false;
            }, error => {
                console.log(error);
            });
        }
    }
    selectImage(event) {
        this.file = event.target.files[0];
        this.inputFile = false;
        this.buttonFile = true;
    }
    onUpload() {
        this.isLoading = true;
        this.formData.append("imagen", this.file);
        this.formData.append("folder", 'usuarios');
        this.uploadService.subirImagen(this.formData).subscribe(result => {
            this.usuario.imagen = result.url;
            this.buttonFile = false;
            this.scrollToTop();
            this.obtenerData();
            this.actualizarUsuario();
            console.log(result);
        }, error => {
            console.log(error);
        });
    }
    scrollToTop() {
        window.scrollTo(0, 0);
    }
    obtenerData() {
        let ciudadSeleccionada = {};
        this.ciudades.forEach(ciudad => {
            if (this.usuario.ciudad.idCiudad == ciudad.idCiudad) {
                ciudadSeleccionada.idCiudad = this.usuario.ciudad.idCiudad;
                ciudadSeleccionada.ciudad = ciudad.ciudad;
            }
        });
        let usuarioActualizado = {
            nombre: this.usuario.nombre,
            apellido: this.usuario.apellido,
            correo: this.usuario.correo,
            fechaNacimiento: this.usuario.fechaNacimiento,
            genero: this.usuario.genero,
            ciudad: ciudadSeleccionada,
            imagen: this.usuario.imagen
        };
        console.log(usuarioActualizado);
        return usuarioActualizado;
    }
    actualizarUsuario() {
        this.usuariosService.actualizarUsuario(this.usuario._id, this.obtenerData()).subscribe(result => {
            console.log(result);
            this.isLoading = false;
        }, error => {
            console.log(error);
        });
    }
}
PerfilComponent.ɵfac = function PerfilComponent_Factory(t) { return new (t || PerfilComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_usuarios_service__WEBPACK_IMPORTED_MODULE_2__["UsuariosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_upload_service__WEBPACK_IMPORTED_MODULE_4__["UploadService"])); };
PerfilComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PerfilComponent, selectors: [["app-perfil"]], decls: 53, vars: 19, consts: [["id", "profileContainer", 1, "container", "pb-5"], [1, "row"], [1, "col-5", "mt-5", "mb-4"], ["alt", "", 3, "src"], [1, "col-7", "mt-5"], [4, "ngIf"], [1, "form-content"], ["type", "text", 1, "form-control", "input-form", 3, "ngModel", "ngModelChange"], ["type", "email", 1, "form-control", "input-form", 3, "ngModel", "ngModelChange"], ["class", "form-select", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["type", "date", 1, "form-control", "input-form", 3, "ngModel", "ngModelChange"], [1, "chks-form"], [1, "form-check", "form-check-inline", "mt-2"], ["type", "radio", "name", "check", "id", "inlineCheckbox1", 1, "form-check-input", 3, "value", "ngModel", "ngModelChange"], ["for", "inlineCheckbox1", 1, "form-check-label"], ["type", "radio", "name", "check", "id", "inlineCheckbox2", 1, "form-check-input", 3, "value", "ngModel", "ngModelChange"], ["for", "inlineCheckbox2", 1, "form-check-label"], ["class", "btn-upload-image", 4, "ngIf"], ["class", "btn-uploaded-image", 4, "ngIf"], ["type", "button", "class", "btn btn-success", "id", "btn-save-image", 3, "click", 4, "ngIf"], ["type", "button", "id", "btn-save", 1, "btn", "btn-success", 3, "click"], ["type", "button", "id", "btn-cancel", 1, "btn", "btn-secundary"], ["bdColor", "rgba(255,255,255,0.8)", "size", "large", "color", "#a6032f", "type", "square-jelly-box", 3, "fullScreen", 4, "ngIf"], [1, "form-select", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], [1, "btn-upload-image"], ["type", "file", 1, "d-none", 3, "change"], [1, "btn-uploaded-image"], [1, "check-upload", 3, "icon"], ["type", "button", "id", "btn-save-image", 1, "btn", "btn-success", 3, "click"], ["bdColor", "rgba(255,255,255,0.8)", "size", "large", "color", "#a6032f", "type", "square-jelly-box", 3, "fullScreen"]], template: function PerfilComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, PerfilComponent_h5_8_Template, 2, 0, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, PerfilComponent_h5_9_Template, 2, 0, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, PerfilComponent_h5_10_Template, 2, 1, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Actualiza tu informaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function PerfilComponent_Template_input_ngModelChange_18_listener($event) { return ctx.usuario.nombre = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Apellido");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function PerfilComponent_Template_input_ngModelChange_21_listener($event) { return ctx.usuario.apellido = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Correo electr\u00F3nico");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function PerfilComponent_Template_input_ngModelChange_24_listener($event) { return ctx.usuario.correo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Ciudad");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, PerfilComponent_select_27_Template, 2, 2, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Fecha de nacimiento");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function PerfilComponent_Template_input_ngModelChange_30_listener($event) { return ctx.usuario.fechaNacimiento = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "G\u00E9nero");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function PerfilComponent_Template_input_ngModelChange_35_listener($event) { return ctx.usuario.genero = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Masculino");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function PerfilComponent_Template_input_ngModelChange_39_listener($event) { return ctx.usuario.genero = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Femenino");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Sube una Imagen");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, PerfilComponent_label_44_Template, 3, 0, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, PerfilComponent_label_45_Template, 2, 1, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, PerfilComponent_button_46_Template, 2, 0, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerfilComponent_Template_button_click_47_listener() { return ctx.actualizarUsuario(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, PerfilComponent_ngx_spinner_52_Template, 1, 1, "ngx-spinner", 22);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.usuario.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.usuario.nombre, " ", ctx.usuario.apellido, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.usuario.genero);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.usuario.genero);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.usuario.ciudad);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.usuario.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.usuario.apellido);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.usuario.correo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.usuario.ciudad);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.usuario.fechaNacimiento);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", true)("ngModel", ctx.usuario.genero);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", false)("ngModel", ctx.usuario.genero);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.inputFile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.inputFile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.buttonFile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RadioControlValueAccessor"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_z"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FaIconComponent"], ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerComponent"]], encapsulation: 2 });


/***/ }),

/***/ "v3Ag":
/*!**************************************************!*\
  !*** ./src/app/historial/historial.component.ts ***!
  \**************************************************/
/*! exports provided: HistorialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorialComponent", function() { return HistorialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _services_ordenes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/ordenes.service */ "lrdA");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer/footer.component */ "fp1T");







const _c0 = function (a0, a1, a2, a3, a4) { return { "btn-primary": a0, "btn-onWay": a1, "btn-onOrigin": a2, "btn-onDestiny": a3, "btn-delivered": a4 }; };
function HistorialComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HistorialComponent_div_5_Template_a_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const i_r5 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.verDetalleOrden(i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const orden_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](3, 8, orden_r4.fecha, "dd-MM-yyyy hh:mm:ss a", "+0530"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](orden_r4.detalleProductos[0].producto.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Comprador: ", orden_r4.cliente.nombre, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total de Factura: L. ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 12, orden_r4.factura.total, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Destino: ", orden_r4.ubicacionOrden.direccion, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", orden_r4.detalleProductos[0].producto.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](15, _c0, orden_r4.tipoEstado.idEstado == "0", orden_r4.tipoEstado.idEstado == "1", orden_r4.tipoEstado.idEstado == "2", orden_r4.tipoEstado.idEstado == "3", orden_r4.tipoEstado.idEstado == "4"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](orden_r4.tipoEstado.nombreEstado);
} }
function HistorialComponent_ngx_spinner_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-spinner", 16);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", false);
} }
function HistorialComponent_div_9_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9.producto.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("X", item_r9.cantidad, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("L.", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 5, item_r9.producto.precio, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("L.", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 8, item_r9.producto.isv, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("L.", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 11, (item_r9.producto.precio + item_r9.producto.isv) * item_r9.cantidad, "1.2-2"), "");
} }
function HistorialComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Factura");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Producto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Precio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "ISV");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HistorialComponent_div_9_tr_20_Template, 14, 14, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tfoot");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Subtotal:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Costo Envio:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Total:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.ordenDetalle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("L.", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](30, 4, ctx_r2.factura.subtotal, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("L.", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](39, 7, ctx_r2.factura.costoEnvio, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("L.", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](48, 10, ctx_r2.factura.total, "1.2-2"), "");
} }
function HistorialComponent_app_footer_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-footer");
} }
class HistorialComponent {
    constructor(cookiesService, ordenesService, spinner) {
        this.cookiesService = cookiesService;
        this.ordenesService = ordenesService;
        this.spinner = spinner;
        this.ordenes = [];
        this.ordenDetalle = '';
        this.factura = '';
        this.isLoading = false;
    }
    ngOnInit() {
        if (this.cookiesService.check('nanyUsuarioId')) {
            this.isLoading = true;
            this.ordenesService
                .obtenerOrdenes(this.cookiesService.get('nanyUsuarioId'))
                .subscribe((result) => {
                console.log(result);
                result.ordenes.sort((a, b) => {
                    a = new Date(a.fecha);
                    b = new Date(b.fecha);
                    return a > b ? -1 : a < b ? 1 : 0;
                });
                console.log(result.ordenes);
                result.ordenes.forEach(orden => {
                    if (orden.tipoEstado.idEstado == '0') {
                        orden.tipoEstado.nombreEstado = 'En Proceso';
                    }
                    ;
                });
                this.ordenes = result.ordenes;
                this.isLoading = false;
            }, (error) => {
                console.log(error);
            });
        }
    }
    verDetalleOrden(index) {
        this.ordenDetalle = this.ordenes[index].detalleProductos;
        this.factura = this.ordenes[index].factura;
    }
}
HistorialComponent.ɵfac = function HistorialComponent_Factory(t) { return new (t || HistorialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ordenes_service__WEBPACK_IMPORTED_MODULE_2__["OrdenesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"])); };
HistorialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HistorialComponent, selectors: [["app-historial"]], decls: 11, vars: 4, consts: [["id", "historialContainer", 1, "container", "pb-5"], [1, "text-center", "my-4"], ["id", "historial"], ["class", "row", 4, "ngFor", "ngForOf"], ["bdColor", "rgba(255,255,255,0.8)", "size", "large", "color", "#a6032f", "type", "square-jelly-box", 3, "fullScreen", 4, "ngIf"], ["id", "modalInvoice", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog"], ["class", "modal-content", 4, "ngIf"], [4, "ngIf"], [1, "row"], [1, "text-initial", "mt-2"], [1, "col-8", "mt-2"], [1, "col-4", "mb-2"], ["data-bs-toggle", "modal", "data-bs-target", "#modalInvoice", 1, "col-4", "mb-2", 3, "click"], ["alt", "", 1, "d-block", "img-historial", 3, "src"], ["type", "button", 1, "d-block", "btn", "btn-state-order", 3, "ngClass"], ["bdColor", "rgba(255,255,255,0.8)", "size", "large", "color", "#a6032f", "type", "square-jelly-box", 3, "fullScreen"], [1, "modal-content"], [1, "modal-header"], ["src", "../assets/logos/Logo-Nany-trans-1.png", "id", "logo"], [1, "modal-body", "container"], [1, "text-center"], [1, "table", "mt-3"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "pb-0"], [1, "invoice-cost", "pb-0"], [1, "py-0"], [1, "invoice-cost", "py-0"], [1, "pb-2"], [1, "py-0", "total-invoice"], [1, "total-invoice-number", "py-0"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "btn-modal"], [1, "invoice-description"], [1, "invoice-cost"]], template: function HistorialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Mis compras realizadas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HistorialComponent_div_5_Template, 21, 21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HistorialComponent_ngx_spinner_6_Template, 1, 1, "ngx-spinner", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HistorialComponent_div_9_Template, 52, 13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HistorialComponent_app_footer_10_Template, 1, 0, "app-footer", 8);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ordenes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ordenDetalle != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ordenes.length != 0);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"]], encapsulation: 2 });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "mSt+");
/* harmony import */ var _categorias_categorias_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categorias/categorias.component */ "+a66");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkout/checkout.component */ "IiZn");
/* harmony import */ var _empresas_empresas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./empresas/empresas.component */ "CHqx");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _productos_productos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./productos/productos.component */ "CMz6");
/* harmony import */ var _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./perfil/perfil.component */ "nNO8");
/* harmony import */ var _registro_registro_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./registro/registro.component */ "2t2m");
/* harmony import */ var _historial_historial_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./historial/historial.component */ "v3Ag");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");












const routes = [
    { path: '', component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_1__["LandingPageComponent"] },
    { path: 'categorias', component: _categorias_categorias_component__WEBPACK_IMPORTED_MODULE_2__["CategoriasComponent"] },
    { path: 'checkout', component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_3__["CheckoutComponent"] },
    { path: 'categorias/:_id/empresas', component: _empresas_empresas_component__WEBPACK_IMPORTED_MODULE_4__["EmpresasComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'categorias/:idCategoria/empresas/:_id/productos', component: _productos_productos_component__WEBPACK_IMPORTED_MODULE_6__["ProductosComponent"] },
    { path: 'perfil', component: _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_7__["PerfilComponent"] },
    { path: 'historial', component: _historial_historial_component__WEBPACK_IMPORTED_MODULE_9__["HistorialComponent"] },
    { path: 'registro', component: _registro_registro_component__WEBPACK_IMPORTED_MODULE_8__["RegistroComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function LoginComponent_div_10_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Correo Inv\u00E1lido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_div_10_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Este campo no puede quedar vac\u00EDo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_div_10_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.responseLoggin.message);
} }
function LoginComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_div_10_span_1_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LoginComponent_div_10_span_2_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LoginComponent_div_10_span_3_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.correo.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.correo.errors.required && ctx_r0.responseLoggin.code != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.responseLoggin.code == 0);
} }
function LoginComponent_div_15_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Este campo no puede quedar vac\u00EDo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_div_15_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "M\u00EDnimo 8 caracteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_div_15_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r9.responseLoggin.message);
} }
function LoginComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_div_15_span_1_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LoginComponent_div_15_span_2_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LoginComponent_div_15_span_3_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.password.errors.required && ctx_r1.responseLoggin.code != 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.password.errors.minlength && ctx_r1.responseLoggin.code != 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.responseLoggin.code == 2);
} }
function LoginComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.responseLoggin.message);
} }
function LoginComponent_ngx_spinner_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ngx-spinner", 15);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fullScreen", true);
} }
const _c0 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
class LoginComponent {
    constructor(authService, cookiesService, spinner, _route) {
        this.authService = authService;
        this.cookiesService = cookiesService;
        this.spinner = spinner;
        this._route = _route;
        this.formLogin = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            correo: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i),
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(8),
            ]),
        });
        this.isLoading = false;
        this.responseLoggin = '';
    }
    ngOnInit() {
        this.spinner.show();
    }
    login() {
        this.isLoading = true;
        console.log('El usuario a autenticar:', this.formLogin);
        this.authService.login(this.formLogin.value).subscribe((result) => {
            if (result.code == 1) {
                const dateNow = new Date();
                dateNow.setMinutes(dateNow.getMinutes() + 60);
                this.cookiesService.set('nanyUsuarioId', result.usuario._id, dateNow);
                this.cookiesService.set('nanyUsuarioNombre', result.usuario.nombre, dateNow);
                this.cookiesService.set('nanyUsuarioApellido', result.usuario.apellido, dateNow);
                console.log('Logeado con exito');
                this._route.navigate(['/categorias']);
            }
            else if (result.code == 2) {
                // Contrasenia Incorrecta
                this.responseLoggin = result;
                this.password.setValue('');
            }
            else {
                // Correo Incorrecto
                this.responseLoggin = result;
                this.correo.setValue('');
            }
            this.isLoading = false;
            console.log(result.message);
        }, (error) => {
            console.log(error);
        });
    }
    get correo() {
        return this.formLogin.get('correo');
    }
    get password() {
        return this.formLogin.get('password');
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 25, vars: 13, consts: [[1, "container-fluid", "container-login"], ["src", "../assets/logos/Logo-Nany-trans-1.png", "routerLink", "/", "id", "logo"], ["novalidate", "", 1, "needs-validation", 3, "formGroup"], [1, "form-contents"], ["type", "email", "placeholder", "ejemplo@gmail.com", "formControlName", "correo", "required", "", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback login-feedback", 4, "ngIf"], ["type", "password", "name", "password", "autocomplete", "on", "formControlName", "password", "required", "", 1, "form-control", 3, "ngClass"], [1, "form-links", "pt-2"], ["type", "button", "id", "btn-login", 1, "btn", "btn-success", 3, "disabled", "click"], ["class", "response-loggin", 4, "ngIf"], ["href", "", "routerLink", "/registro", "id", "register"], ["bdColor", "rgba(255,255,255,0.8)", "size", "large", "color", "#a6032f", "type", "square-jelly-box", 3, "fullScreen", 4, "ngIf"], [1, "invalid-feedback", "login-feedback"], [4, "ngIf"], [1, "response-loggin"], ["bdColor", "rgba(255,255,255,0.8)", "size", "large", "color", "#a6032f", "type", "square-jelly-box", 3, "fullScreen"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Inicio de Sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Correo electr\u00F3nico");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, LoginComponent_div_10_Template, 4, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, LoginComponent_div_15_Template, 4, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_17_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Iniciar sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, LoginComponent_div_19_Template, 3, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\u00BFAun no tienes una cuenta?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Registrate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, LoginComponent_ngx_spinner_24_Template, 1, 1, "ngx-spinner", 11);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](7, _c0, ctx.correo.invalid && (ctx.correo.dirty || ctx.correo.touched), ctx.correo.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.correo.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](10, _c0, ctx.password.invalid && (ctx.password.dirty || ctx.password.touched), ctx.password.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.password.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.formLogin.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerComponent"]], encapsulation: 2 });


/***/ }),

/***/ "yDh5":
/*!**********************************************!*\
  !*** ./src/app/services/empresas.service.ts ***!
  \**********************************************/
/*! exports provided: EmpresasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpresasService", function() { return EmpresasService; });
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.config */ "aR35");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class EmpresasService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    obtenerEmpresas(idCategoria) {
        return this.httpClient.get(`${_app_config__WEBPACK_IMPORTED_MODULE_0__["API_BASE_URL"]}/categorias/${idCategoria}/empresas`);
    }
    obtenerEmpresa(idCategoria, idEmpresa) {
        return this.httpClient.get(`${_app_config__WEBPACK_IMPORTED_MODULE_0__["API_BASE_URL"]}/categorias/${idCategoria}/empresas/${idEmpresa}`);
    }
}
EmpresasService.ɵfac = function EmpresasService_Factory(t) { return new (t || EmpresasService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
EmpresasService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EmpresasService, factory: EmpresasService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map