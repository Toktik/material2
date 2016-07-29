"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var slide_toggle_1 = require('@angular2-material/slide-toggle/slide-toggle');
var SlideToggleDemo = (function () {
    function SlideToggleDemo() {
    }
    SlideToggleDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'switch-demo',
            templateUrl: 'slide-toggle-demo.html',
            styleUrls: ['slide-toggle-demo.css'],
            directives: [slide_toggle_1.MdSlideToggle, forms_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], SlideToggleDemo);
    return SlideToggleDemo;
}());
exports.SlideToggleDemo = SlideToggleDemo;
//# sourceMappingURL=slide-toggle-demo.js.map