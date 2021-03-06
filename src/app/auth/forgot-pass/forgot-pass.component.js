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
var authenticator_service_1 = require('../../shared/authenticator.service');
var ForgotPassComponent = (function () {
    function ForgotPassComponent(authenticator) {
        this.authenticator = authenticator;
    }
    ForgotPassComponent.prototype.requestRecover = function () {
        var _this = this;
        this.authenticator.requestRecoverPass(this.email)
            .then(function (msg) {
            _this.successMessage = msg;
            _this.email = "";
        }).catch(function (error) {
            _this.errorMessage = error.message;
        });
    };
    ForgotPassComponent = __decorate([
        core_1.Component({
            selector: 'forgot-pass',
            templateUrl: 'app/auth/forgot-pass/forgot-pass.component.html'
        }), 
        __metadata('design:paramtypes', [authenticator_service_1.Authenticator])
    ], ForgotPassComponent);
    return ForgotPassComponent;
}());
exports.ForgotPassComponent = ForgotPassComponent;
//# sourceMappingURL=forgot-pass.component.js.map