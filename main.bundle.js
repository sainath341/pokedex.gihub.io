webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-pokemon-search></app-pokemon-search>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pokemon_search_pokemon_search_component__ = __webpack_require__("../../../../../src/app/pokemon-search/pokemon-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_pokeapi_service__ = __webpack_require__("../../../../../src/app/services/pokeapi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__capitalize_pipe__ = __webpack_require__("../../../../../src/app/capitalize.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppModule = (function () {
    function AppModule(_pokeapiService) {
        this._pokeapiService = _pokeapiService;
    }
    AppModule.prototype.ngOnInit = function () {
    };
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__pokemon_search_pokemon_search_component__["a" /* PokemonSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_7__capitalize_pipe__["a" /* CapitalizePipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_pokeapi_service__["a" /* PokeapiService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__services_pokeapi_service__["a" /* PokeapiService */]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/capitalize.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitalizePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizePipe = (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (value) {
        if (!value)
            return value;
        return value.split(/\b/g).map(function (word) { return titleCaseWord(word); }).join('');
    };
    CapitalizePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Pipe */])({
            name: 'capitalize'
        })
    ], CapitalizePipe);
    return CapitalizePipe;
}());

function titleCaseWord(word) {
    if (!word)
        return word;
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
}


/***/ }),

/***/ "../../../../../src/app/pokemon-search/pokemon-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header {\r\n\tposition: relative;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\tbackground: -webkit-linear-gradient(left, #f3f2ee, #dcc369);\r\n\tpadding: 10px;\r\n\twidth: 100%;\r\n\theight: auto;\r\n\ttop: 0;\r\n\tz-index: 100;\r\n}\r\n\r\nform {\r\n\twidth: 100%;\r\n\tmargin-left: 30px;\r\n\tmargin-top: 5px;\r\n\tfloat: right;\r\n}\r\n\r\nform input {\r\n\twidth: 80%;\r\n\tpadding: 15px;\r\n\tborder: none;\r\n\tfont-size: 18px;\r\n\tborder-radius: 5px 0 0 5px;\r\n}\r\n\r\nform button {\r\n\twidth: auto;\r\n\theight: auto;\r\n\tpadding: 15px;\r\n\tborder: none;\r\n\tfont-size: 18px;\r\n\tbackground: #bfc406;\r\n\tcolor: white;\r\n\tborder-radius: 0 5px 5px 0;\r\n\tcursor: pointer;\r\n\tposition: absolute;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n\tform {\r\n\t\tmargin: 0;\r\n\t}\r\n\tinput {\r\n\t\twidth: 100%;\r\n\t\tborder-radius: 5px;\r\n\t\tpadding: 10px;\r\n\t}\r\n\tform button {\r\n\t\tborder-radius: 5px;\r\n\t\twidth: 80%;\r\n\t\tposition: static;\r\n\t\tmargin-top: 5px;\r\n\t}\r\n}\r\n\r\n.container {\r\n\tmargin: 0 auto;\r\n\tpadding: 32px 15px;\r\n\tmax-width: 800px;\r\n\twidth: 100%;\r\n\tposition: relative;\r\n\tmin-height: 250px;\r\n\tbox-sizing: content-box;\r\n}\r\n\r\n#top .image {\r\n\tfont-size: 160%;\r\n\ttext-align: center;\r\n}\r\n\r\n#top .image em {\r\n\tfont-size: 100%\r\n}\r\n\r\n#top img,\r\n#top .moves {\r\n\tborder-bottom: solid 1px darkolivegreen;\r\n}\r\n\r\n#pokemons {\r\n\tmargin: 0 auto;\r\n\tpadding: 32px 15px;\r\n\twidth: 95%;\r\n\tposition: relative;\r\n\theight: 0 auto;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\nsection .pokes {\r\n\tmargin: 0 auto;\r\n\tpadding: 32px 15px;\r\n\tdisplay: block;\r\n}\r\n\r\nheader img {\r\n\tmax-width: 40%;\r\n\tmin-width: 40%;\r\n\theight: auto;\r\n}\r\n\r\n.type h3,\r\n.type p,\r\n.height h3,\r\n.height p,\r\n.weight h3,\r\n.weight p,\r\n.habitat h3,\r\n.habitat p,\r\n.shape h3,\r\n.shape p,\r\n.abilities h3,\r\n.abilities p,\r\n.moves h3,\r\n.moves p {\r\n\tclear: both;\r\n\tdisplay: inline;\r\n\tvertical-align: top;\r\n}\r\n\r\n.type h4,\r\n.height h4,\r\n.weight h4,\r\n.abilities h4 {\r\n\tclear: both;\r\n\tdisplay: inline;\r\n\tvertical-align: top;\r\n}\r\n\r\n.type ul,\r\n.abilities ul,\r\n.moves ul {\r\n\tlist-style-type: none;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tdisplay: inline;\r\n}\r\n\r\n.type li,\r\n.abilities li,\r\n.moves li {\r\n\tdisplay: inline;\r\n\tpadding: 0 5px;\r\n\ttext-decoration: none;\r\n\tfloat: flex;\r\n}\r\n\r\n.disc,\r\n.none {\r\n\tclear: both;\r\n}\r\n\r\n#pokemons {\r\n\tclear: all;\r\n\tposition: relative;\r\n}\r\n\r\n#pokemons .poke-list{\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tlist-style: none;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-ms-flex-flow: row wrap;\r\n\t-webkit-box-orient: horizontal;\r\n\t-webkit-box-direction: normal;\r\n\t        flex-flow: row wrap\r\n}\r\n\r\n.pokebox {\r\n\tmargin: 0 auto;\r\n}\r\n.pokebox button{\r\n\tposition: relative;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\topacity: 0.5;\r\n\tbackground: black;\r\n\tcolor:white;\r\n\tborder-radius: 10px;\r\n}\r\n\r\n.pokebox button:hover{\r\n\topacity: 1;\r\n\r\n}\r\n.poke-item {\r\n\tborder: solid 1px black;\r\n\tmargin: 5px;\r\n\tborder-radius: 15px;\r\n}\r\n\r\n.poke-list {\r\n\tpadding-left: 35px;\r\n}\r\n\r\n#pokemons li {\r\n\tpadding-bottom: 35px;\r\n\ttext-align: center;\r\n}\r\n\r\n.box {\r\n\tpadding-left: 20px;\r\n\twidth: 300px;\r\n\theight: 360px;\r\n}\r\n\r\n@media screen and (min-width:300px) {\r\n\t#pokemons .poke-list .poke-item {\r\n\t\tfont-size: 100%;\r\n\t\twidth: 100%;\r\n\t\ttext-align: center;\r\n\t}\r\n}\r\n\r\n@media screen and (min-width:600px) {\r\n\t#pokemons .poke-list .poke-item {\r\n\t\twidth: 45%\r\n\t}\r\n}\r\n\r\n@media screen and (min-width:900px) {\r\n\t#pokemons .poke-list .poke-item {\r\n\t\twidth: 28%\r\n\t}\r\n}\r\n\r\n@media screen and (min-width:1200px) {\r\n\t#pokemons .poke-list .poke-item {\r\n\t\twidth: 23%\r\n\t}\r\n}\r\n\r\nbutton a {\r\n\tcursor: pointer;\r\n}\r\n\r\n.box button {\r\n\tposition: relative;\r\n\t/* bottom: 5px;\r\n\tright: 2em; */\r\n}\r\n\r\nbutton.left {\r\n\tbottom: 82px;\r\n\tleft: 0;\r\n\tpadding: 10px;\r\n\topacity: 0.8;\r\n}\r\n\r\nbutton.right {\r\n\tfloat: right;\r\n\tbottom: 82px;\r\n\tright: 0;\r\n\tpadding: 10px;\r\n\topacity: 0.8;\r\n}\r\n\r\nbutton:hover {\r\n\topacity: 1;\r\n}\r\n\r\nfooter {\r\n\tposition: static;\r\n\tbottom: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tz-index: 100;\r\n\tpadding-top: 1.2em;\r\n\tbackground-color: #333;\r\n\tcolor: white;\r\n\ttext-align: center;\r\n\tfont-size: 50%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pokemon-search/pokemon-search.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <div>\n    <img src=\"../assets/pokédex.png\" alt=\"logo pokédex\">\n  </div>\n  <form>\n    <input type=\"text\" #input (keyup.enter)=\"searchPokemon(input.value)\" placeholder=\"Enter pokémon name\">\n    <button (click)=\"searchPokemon(input.value)\">Search</button>\n  </form>\n</header>\n<section class=\"container\" id=\"top\">\n  <!-- 1 -->\n  <div class=\"image\">\n    <h1 [style.color]=\"getStyle(type)\">{{searchedData.name | capitalize}}\n      <em>#{{searchedData.id}}</em>\n    </h1>\n    <img src=\"{{imageUrl}}\" alt=\"{{searchedData.name}}\">\n  </div>\n  <!-- 2 -->\n  <div class=\"type\">\n    <h3>Type:</h3>\n    <ul *ngFor=\"let type of types\">\n      <li>\n        <p>{{type.type.name | capitalize}}</p>\n      </li>\n    </ul>\n  </div>\n  <div class=\"height\">\n    <h3>Height:</h3>\n    <p>\n      {{searchedData.height/10}} <em>m</em>\n    </p>\n  </div>\n  <div class=\"weight\">\n    <h3>Weight:</h3>\n    <p>{{searchedData.weight/10}}\n      <em>kg</em> {{(searchedData.weight/10)*2.205 | number}}\n      <em>lbs</em>.\n    </p>\n  </div>\n  <!-- 3 -->\n  <div>\n    <!-- 3a -->\n    <div class=\"habitat\">\n      <h3>Habitat:</h3>\n      <p>{{habitat | capitalize}}</p>\n    </div>\n    <!-- 3b -->\n    <div class=\"shape\">\n      <h3>Shape:</h3>\n      <p>{{shape | capitalize}}</p>\n    </div>\n  </div>\n  <!-- 4 -->\n  <div class=\"abilities\">\n    <h3>Abilities:</h3>\n    <ul *ngFor=\"let ability of abilities\">\n      <li>\n        <p>{{ability.ability.name | capitalize}}</p>\n      </li>\n    </ul>\n  </div>\n  <div class=\"disc\">\n    <h3>Discription:</h3>\n    <p>{{entryDesc}}</p>\n  </div>\n  <br>\n  <div class=\"moves\">\n    <h3>Moves:</h3>\n    <ul *ngFor=\"let move of moves\">\n      <li>\n        <p>{{move.move.name}},</p>\n      </li>\n    </ul>\n  </div>\n</section>\n<section class=\"pokes\">\n  <div id=\"pokemons\">\n    <h1 class=\"title\">\n      Pokémon List\n    </h1>\n    <ol class=\"poke-list\">\n      <li *ngFor=\"let list of nameList\" data-type=\"{{list.types[0].type.name}}\" class=\"poke-item\">\n        <div class=\"box\" [style.border.color]=\"getStyle(list.types[0].type.name)\">\n          <div class=\"col-left\">\n            <h3 class=\"poke-name\">{{list.name | capitalize }} #{{list.id}} </h3>\n            <a (click)=\"pokeDetails(list.name)\">\n              <img lsclass=\"poke-image\" src=\"{{list.sprites.front_default}}\" alt=\"{{list.name}}\">\n            </a>\n          </div>\n          <div class=\"pokebox\" [style.color]=\"getStyle(list.types[0].type.name)\">\n            <div class=\"type\">\n              <h4>Type : </h4>\n              <ul *ngFor=\"let type of list.types\">\n                <li>\n                  <p>{{type.type.name | capitalize}}</p>\n                </li>\n              </ul>\n            </div>\n            <div class=\"height\">\n              <h4>Height :</h4>\n              <p>{{list.height/10}} m </p>\n            </div>\n            <div class=\"weight\">\n              <h4>Weight :</h4>\n              <p>{{list.weight/10}} kg</p>\n            </div>\n            <div class=\"abilities\">\n              <h4>Abilities</h4>\n              <ul *ngFor=\"let ablity of list.abilities\" class=\"ability\">\n                <li>{{ablity.ability.name}}</li>\n              </ul>\n            </div>\n            <a href=\"#top\">\n              <button (click)=\"pokeDetails(list.name)\" id=\"top\">Read more</button>\n            </a>\n          </div>\n        </div>\n      </li>\n    </ol>\n  </div>\n  <section>\n    <button class=\"left\" (click)=\"prevPage()\">\n      Prev page\n    </button>\n    <button class=\"right\" (click)=\"nextPage()\">\n      next page\n    </button>\n  </section>\n</section>\n<footer>\n  <p>&copy; 2017 Sainath Reddy</p>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/pokemon-search/pokemon-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PokemonSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_pokeapi_service__ = __webpack_require__("../../../../../src/app/services/pokeapi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PokemonSearchComponent = (function () {
    function PokemonSearchComponent(_pokeapiService) {
        this._pokeapiService = _pokeapiService;
        this.searchedData = {};
        this.offset = 0;
    }
    PokemonSearchComponent.prototype.searchPokemon = function (query) {
        var _this = this;
        console.log(query);
        return this._pokeapiService.getPokemon(query).subscribe(function (data) {
            console.log(data);
            _this.searchedData = data;
            if (data.id <= 9) {
                _this.picID = "00" + data.id;
            }
            else if (data.id <= 99) {
                _this.picID = "0" + data.id;
            }
            else {
                _this.picID = data.id;
            }
            _this.imageUrl = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" + _this.picID + ".png";
            // console.log(this.imageUrl);
            _this.imgData = _this.searchedData.sprites.front_default;
            _this.abilities = _this.searchedData.abilities;
            _this.types = _this.searchedData.types;
            _this.moves = _this.searchedData.moves;
            // console.log(this.abilities)
            _this.type = (_this.types[0].type.name);
            _this.description(data.species.url);
        }, function (error) { return console.log(error); }, function () {
            // console.log("Request complete");
        });
    };
    PokemonSearchComponent.prototype.description = function (data) {
        var _this = this;
        this._pokeapiService.getPokeData(data).subscribe(function (data) {
            // console.log(data);
            // this.desc = data;
            _this.shape = data.shape.name;
            if (data.habitat == null) {
                _this.habitat = "none";
            }
            else {
                _this.habitat = data.habitat.name;
            }
            ;
            var entries = data.flavor_text_entries;
            for (var i = 0; i < entries.length; i++) {
                var entry = entries[i];
                if (entry.language.name === 'en') {
                    _this.entryDesc = entry.flavor_text;
                    break;
                }
            }
        });
    };
    PokemonSearchComponent.prototype.defaultPage = function () {
        var _this = this;
        return this._pokeapiService.defaultPage(this.offset).subscribe(function (data) {
            _this.showPokemons(data);
            // console.log(data);
        }, function (error) { return console.log(error); });
    };
    PokemonSearchComponent.prototype.showPokemons = function (pokeList) {
        var _this = this;
        var nameList = [];
        pokeList.results.map(function (data) {
            // console.log(data);
            // nameList.push(data.url)
            _this._pokeapiService.getPokeData(data.url).subscribe(function (data) {
                nameList.push(data);
            });
        });
        this.nameList = nameList;
        // console.log(this.nameList)
        // console.log(this.names)
    };
    PokemonSearchComponent.prototype.getStyle = function (type) {
        if (type == "poison") {
            return "#A040A0";
        }
        else if (type == "grass") {
            return "#78C850";
        }
        else if (type == "fire") {
            return "#F08030";
        }
        else if (type == "flying") {
            return "#A890F0";
        }
        else if (type == "water") {
            return "#6890F0";
        }
        else if (type == "bug") {
            return "#A8B820";
        }
        else if (type == "normal") {
            return "#A8A878";
        }
        else if (type == "dark") {
            return "#705848";
        }
        else if (type == "electric") {
            return "#F8D030";
        }
        else if (type == "psychic") {
            return "#F85888";
        }
        else if (type == "ground") {
            return "#E0C068";
        }
        else if (type == "ice") {
            return "#98D8D8";
        }
        else if (type == "steel") {
            return "#B8B8D0";
        }
        else if (type == "fairly") {
            return "#EE99AC";
        }
        else if (type == "rock") {
            return "#B8A038";
        }
        else if (type == "fighting") {
            return "#C03028";
        }
        else if (type == "dragon") {
            return "#7038F8";
        }
        else if (type == "ghost") {
            return "#705898";
        }
    };
    PokemonSearchComponent.prototype.pokeDetails = function (name) {
        // console.log(name);
        this.searchPokemon(name);
    };
    PokemonSearchComponent.prototype.nextPage = function () {
        this.offset += 20;
        var pageData = this.defaultPage();
        this.showPokemons(pageData);
    };
    PokemonSearchComponent.prototype.prevPage = function () {
        this.offset -= 20;
        this.defaultPage();
    };
    PokemonSearchComponent.prototype.ngOnInit = function () {
        this.defaultPage();
        if (this.query == undefined) {
            this.query = Math.floor(Math.random() * (800 - 1 + 1) + 1);
        }
        ;
        this.searchPokemon(this.query);
        $('#top').click(function () {
            $("html,body").animate({ scrollTop: 0 }, "slow");
            return false;
        });
    };
    PokemonSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-pokemon-search',
            template: __webpack_require__("../../../../../src/app/pokemon-search/pokemon-search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pokemon-search/pokemon-search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_pokeapi_service__["a" /* PokeapiService */]])
    ], PokemonSearchComponent);
    return PokemonSearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/pokeapi.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PokeapiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PokeapiService = (function () {
    function PokeapiService(_http) {
        this._http = _http;
        this.pokeURL = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].POKE_API_URL;
        this.descURL = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].DESC_API_URL;
    }
    PokeapiService.prototype.getPokemon = function (poke) {
        return this._http.get(this.pokeURL + poke).map(function (res) { return res.json(); });
    };
    PokeapiService.prototype.getPokeData = function (url) {
        return this._http.get(url).map(function (res) { return res.json(); });
    };
    PokeapiService.prototype.defaultPage = function (offset) {
        return this._http.get(this.pokeURL + '?limit=20&offset=' + offset).map(function (res) { return res.json(); });
    };
    PokeapiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], PokeapiService);
    return PokeapiService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: true,
    POKE_API_URL: 'https://pokeapi.co/api/v2/pokemon/',
    DESC_API_URL: 'https://pokeapi.co/api/v2/pokemon-species/'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map