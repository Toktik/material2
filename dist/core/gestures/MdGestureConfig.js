"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var platform_browser_1 = require('@angular/platform-browser');
/* Adjusts configuration of our gesture library, Hammer. */
var MdGestureConfig = (function (_super) {
    __extends(MdGestureConfig, _super);
    function MdGestureConfig() {
        _super.apply(this, arguments);
        /* List of new event names to add to the gesture support list */
        this.events = [
            'drag',
            'dragstart',
            'dragend',
            'dragright',
            'dragleft',
            'longpress',
            'slide',
            'slidestart',
            'slideend',
            'slideright',
            'slideleft'
        ];
    }
    /*
     * Builds Hammer instance manually to add custom recognizers that match the Material Design spec.
     *
     * Our gesture names come from the Material Design gestures spec:
     * https://www.google.com/design/spec/patterns/gestures.html#gestures-touch-mechanics
     *
     * More information on default recognizers can be found in Hammer docs:
     * http://hammerjs.github.io/recognizer-pan/
     * http://hammerjs.github.io/recognizer-press/
     *
     * TODO: Confirm threshold numbers with Material Design UX Team
     * */
    MdGestureConfig.prototype.buildHammer = function (element) {
        var mc = new Hammer(element);
        // create custom gesture recognizers
        var drag = new Hammer.Pan({ event: 'drag', threshold: 6 });
        var longpress = new Hammer.Press({ event: 'longpress', time: 500 });
        var slide = new Hammer.Pan({ event: 'slide', threshold: 0 });
        // ensure custom recognizers can coexist with the default gestures (i.e. pan, press, swipe)
        // custom recognizers can overwrite default recognizers if they aren't configured to
        // "recognizeWith" others that listen to the same base events.
        var pan = new Hammer.Pan();
        var press = new Hammer.Press();
        var swipe = new Hammer.Swipe();
        drag.recognizeWith(pan);
        drag.recognizeWith(swipe);
        drag.recognizeWith(slide);
        pan.recognizeWith(swipe);
        pan.recognizeWith(slide);
        slide.recognizeWith(swipe);
        longpress.recognizeWith(press);
        // add customized gestures to Hammer manager
        mc.add([drag, pan, swipe, press, longpress, slide]);
        return mc;
    };
    MdGestureConfig = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MdGestureConfig);
    return MdGestureConfig;
}(platform_browser_1.HammerGestureConfig));
exports.MdGestureConfig = MdGestureConfig;
//# sourceMappingURL=MdGestureConfig.js.map