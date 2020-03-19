/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, HostBinding, forwardRef, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { convertToBoolProperty } from '../helpers';
/**
 * Styled checkbox component
 *
 * @stacked-example(Showcase, checkbox/checkbox-showcase.component)
 *
 * ### Installation
 *
 * Import `NbCheckboxComponent` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbCheckboxModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Can have one of the following statuses: danger, success or warning
 *
 * @stacked-example(Colored Checkboxes, checkbox/checkbox-status.component)
 *
 * Indeterminate state is also supported:
 * @stacked-example(Indeterminate Checkbox, checkbox/checkbox-indeterminate.component)
 *
 * @additional-example(Disabled Checkbox, checkbox/checkbox-disabled.component)
 *
 * @styles
 *
 * checkbox-height:
 * checkbox-width:
 * checkbox-background-color:
 * checkbox-border-color:
 * checkbox-border-style:
 * checkbox-border-width:
 * checkbox-border-radius:
 * checkbox-outline-width:
 * checkbox-outline-color:
 * checkbox-text-color:
 * checkbox-text-font-family:
 * checkbox-text-font-size:
 * checkbox-text-font-weight:
 * checkbox-text-line-height:
 * checkbox-disabled-background-color:
 * checkbox-disabled-border-color:
 * checkbox-disabled-checkmark-color:
 * checkbox-disabled-text-color:
 * checkbox-primary-background-color:
 * checkbox-primary-border-color:
 * checkbox-primary-checked-background-color:
 * checkbox-primary-checked-border-color:
 * checkbox-primary-checked-checkmark-color:
 * checkbox-primary-indeterminate-background-color:
 * checkbox-primary-indeterminate-border-color:
 * checkbox-primary-indeterminate-checkmark-color:
 * checkbox-primary-focus-border-color:
 * checkbox-primary-hover-background-color:
 * checkbox-primary-hover-border-color:
 * checkbox-primary-active-background-color:
 * checkbox-primary-active-border-color:
 * checkbox-success-background-color:
 * checkbox-success-border-color:
 * checkbox-success-checked-background-color:
 * checkbox-success-checked-border-color:
 * checkbox-success-checked-checkmark-color:
 * checkbox-success-indeterminate-background-color:
 * checkbox-success-indeterminate-border-color:
 * checkbox-success-indeterminate-checkmark-color:
 * checkbox-success-focus-border-color:
 * checkbox-success-hover-background-color:
 * checkbox-success-hover-border-color:
 * checkbox-success-active-background-color:
 * checkbox-success-active-border-color:
 * checkbox-warning-background-color:
 * checkbox-warning-border-color:
 * checkbox-warning-checked-background-color:
 * checkbox-warning-checked-border-color:
 * checkbox-warning-checked-checkmark-color:
 * checkbox-warning-indeterminate-background-color:
 * checkbox-warning-indeterminate-border-color:
 * checkbox-warning-indeterminate-checkmark-color:
 * checkbox-warning-focus-border-color:
 * checkbox-warning-hover-background-color:
 * checkbox-warning-hover-border-color:
 * checkbox-warning-active-background-color:
 * checkbox-warning-active-border-color:
 * checkbox-danger-background-color:
 * checkbox-danger-border-color:
 * checkbox-danger-checked-background-color:
 * checkbox-danger-checked-border-color:
 * checkbox-danger-checked-checkmark-color:
 * checkbox-danger-indeterminate-background-color:
 * checkbox-danger-indeterminate-border-color:
 * checkbox-danger-indeterminate-checkmark-color:
 * checkbox-danger-focus-border-color:
 * checkbox-danger-hover-background-color:
 * checkbox-danger-hover-border-color:
 * checkbox-danger-active-background-color:
 * checkbox-danger-active-border-color:
 * checkbox-info-background-color:
 * checkbox-info-border-color:
 * checkbox-info-checked-background-color:
 * checkbox-info-checked-border-color:
 * checkbox-info-checked-checkmark-color:
 * checkbox-info-indeterminate-background-color:
 * checkbox-info-indeterminate-border-color:
 * checkbox-info-indeterminate-checkmark-color:
 * checkbox-info-focus-border-color:
 * checkbox-info-hover-background-color:
 * checkbox-info-hover-border-color:
 * checkbox-info-active-background-color:
 * checkbox-info-active-border-color:
 */
var NbCheckboxComponent = /** @class */ (function () {
    function NbCheckboxComponent(changeDetector) {
        this.changeDetector = changeDetector;
        this.onChange = function () { };
        this.onTouched = function () { };
        this._checked = false;
        this._disabled = false;
        /**
         * Checkbox status.
         * Possible values are: `primary`, `success`, `warning`, `danger`, `info`
         */
        this.status = '';
        this._indeterminate = false;
        /**
         * Output when checked state is changed by a user
         * @type EventEmitter<boolean>
         */
        this.checkedChange = new EventEmitter();
    }
    NbCheckboxComponent_1 = NbCheckboxComponent;
    Object.defineProperty(NbCheckboxComponent.prototype, "value", {
        /**
         * Checkbox value
         * @deprecated
         * @breaking-change Remove @5.0.0
         */
        get: function () {
            return this.checked;
        },
        /**
         * @deprecated
         * @breaking-change Remove @5.0.0
         */
        set: function (value) {
            console.warn('NbCheckbox: `value` is deprecated and will be removed in 5.0.0. Use `checked` instead.');
            this.checked = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCheckboxComponent.prototype, "checked", {
        get: function () {
            return this._checked;
        },
        set: function (value) {
            this._checked = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCheckboxComponent.prototype, "disabled", {
        /**
         * Controls input disabled state
         */
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = convertToBoolProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCheckboxComponent.prototype, "indeterminate", {
        /**
         * Controls checkbox indeterminate state
         */
        get: function () {
            return this._indeterminate;
        },
        set: function (value) {
            this._indeterminate = convertToBoolProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCheckboxComponent.prototype, "valueChange", {
        /**
         * Output when checked state is changed by a user
         * @deprecated
         * @breaking-change Remove @5.0.0
         * @type EventEmitter<boolean>
         */
        get: function () {
            console.warn('NbCheckbox: `valueChange` is deprecated and will be removed in 5.0.0. Use `checkedChange` instead.');
            return this.checkedChange;
        },
        set: function (valueChange) {
            this.checkedChange = valueChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCheckboxComponent.prototype, "primary", {
        get: function () {
            return this.status === 'primary';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCheckboxComponent.prototype, "success", {
        get: function () {
            return this.status === 'success';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCheckboxComponent.prototype, "warning", {
        get: function () {
            return this.status === 'warning';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCheckboxComponent.prototype, "danger", {
        get: function () {
            return this.status === 'danger';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCheckboxComponent.prototype, "info", {
        get: function () {
            return this.status === 'info';
        },
        enumerable: true,
        configurable: true
    });
    NbCheckboxComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NbCheckboxComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    NbCheckboxComponent.prototype.writeValue = function (val) {
        this._checked = val;
        this.changeDetector.detectChanges();
    };
    NbCheckboxComponent.prototype.setDisabledState = function (val) {
        this.disabled = convertToBoolProperty(val);
    };
    NbCheckboxComponent.prototype.setTouched = function () {
        this.onTouched();
    };
    NbCheckboxComponent.prototype.updateValueAndIndeterminate = function (event) {
        var input = event.target;
        this.checked = input.checked;
        this.checkedChange.emit(this.checked);
        this.onChange(this.checked);
        this.indeterminate = input.indeterminate;
    };
    var NbCheckboxComponent_1;
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], NbCheckboxComponent.prototype, "value", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], NbCheckboxComponent.prototype, "checked", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], NbCheckboxComponent.prototype, "disabled", null);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NbCheckboxComponent.prototype, "status", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], NbCheckboxComponent.prototype, "indeterminate", null);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter),
        __metadata("design:paramtypes", [EventEmitter])
    ], NbCheckboxComponent.prototype, "valueChange", null);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], NbCheckboxComponent.prototype, "checkedChange", void 0);
    __decorate([
        HostBinding('class.status-primary'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbCheckboxComponent.prototype, "primary", null);
    __decorate([
        HostBinding('class.status-success'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbCheckboxComponent.prototype, "success", null);
    __decorate([
        HostBinding('class.status-warning'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbCheckboxComponent.prototype, "warning", null);
    __decorate([
        HostBinding('class.status-danger'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbCheckboxComponent.prototype, "danger", null);
    __decorate([
        HostBinding('class.status-info'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NbCheckboxComponent.prototype, "info", null);
    NbCheckboxComponent = NbCheckboxComponent_1 = __decorate([
        Component({
            selector: 'nb-checkbox',
            template: "\n    <label class=\"label\">\n      <input type=\"checkbox\" class=\"native-input visually-hidden\"\n             [disabled]=\"disabled\"\n             [checked]=\"checked\"\n             (change)=\"updateValueAndIndeterminate($event)\"\n             (blur)=\"setTouched()\"\n             (click)=\"$event.stopPropagation()\"\n             [indeterminate]=\"indeterminate\">\n      <span [class.indeterminate]=\"indeterminate\" [class.checked]=\"checked\" class=\"custom-checkbox\">\n        <nb-icon *ngIf=\"indeterminate\" icon=\"minus-bold-outline\" pack=\"nebular-essentials\"></nb-icon>\n        <nb-icon *ngIf=\"checked && !indeterminate\" icon=\"checkmark-bold-outline\" pack=\"nebular-essentials\"></nb-icon>\n      </span>\n      <span class=\"text\">\n        <ng-content></ng-content>\n      </span>\n    </label>\n  ",
            providers: [{
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return NbCheckboxComponent_1; }),
                    multi: true,
                }],
            styles: [":host .label{position:relative;display:inline-flex;align-items:center;margin:0;min-height:inherit;padding:0.375rem 1.5rem 0.375rem 0}:host .custom-checkbox{flex-shrink:0;transition-duration:0.15s;transition-property:background-color,border,box-shadow;transition-timing-function:ease-in}:host .text{transition:color 0.15s ease-in}[dir=ltr] :host .text{padding-left:.6875rem}[dir=rtl] :host .text{padding-right:.6875rem}\n"]
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef])
    ], NbCheckboxComponent);
    return NbCheckboxComponent;
}());
export { NbCheckboxComponent };
//# sourceMappingURL=checkbox.component.js.map