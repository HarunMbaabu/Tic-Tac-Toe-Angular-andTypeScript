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
var NbCheckboxComponent_1;
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
let NbCheckboxComponent = NbCheckboxComponent_1 = class NbCheckboxComponent {
    constructor(changeDetector) {
        this.changeDetector = changeDetector;
        this.onChange = () => { };
        this.onTouched = () => { };
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
    /**
     * Checkbox value
     * @deprecated
     * @breaking-change Remove @5.0.0
     */
    get value() {
        return this.checked;
    }
    /**
     * @deprecated
     * @breaking-change Remove @5.0.0
     */
    set value(value) {
        console.warn('NbCheckbox: `value` is deprecated and will be removed in 5.0.0. Use `checked` instead.');
        this.checked = value;
    }
    get checked() {
        return this._checked;
    }
    set checked(value) {
        this._checked = value;
    }
    /**
     * Controls input disabled state
     */
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = convertToBoolProperty(value);
    }
    /**
     * Controls checkbox indeterminate state
     */
    get indeterminate() {
        return this._indeterminate;
    }
    set indeterminate(value) {
        this._indeterminate = convertToBoolProperty(value);
    }
    /**
     * Output when checked state is changed by a user
     * @deprecated
     * @breaking-change Remove @5.0.0
     * @type EventEmitter<boolean>
     */
    get valueChange() {
        console.warn('NbCheckbox: `valueChange` is deprecated and will be removed in 5.0.0. Use `checkedChange` instead.');
        return this.checkedChange;
    }
    set valueChange(valueChange) {
        this.checkedChange = valueChange;
    }
    get primary() {
        return this.status === 'primary';
    }
    get success() {
        return this.status === 'success';
    }
    get warning() {
        return this.status === 'warning';
    }
    get danger() {
        return this.status === 'danger';
    }
    get info() {
        return this.status === 'info';
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    writeValue(val) {
        this._checked = val;
        this.changeDetector.detectChanges();
    }
    setDisabledState(val) {
        this.disabled = convertToBoolProperty(val);
    }
    setTouched() {
        this.onTouched();
    }
    updateValueAndIndeterminate(event) {
        const input = event.target;
        this.checked = input.checked;
        this.checkedChange.emit(this.checked);
        this.onChange(this.checked);
        this.indeterminate = input.indeterminate;
    }
};
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
        template: `
    <label class="label">
      <input type="checkbox" class="native-input visually-hidden"
             [disabled]="disabled"
             [checked]="checked"
             (change)="updateValueAndIndeterminate($event)"
             (blur)="setTouched()"
             (click)="$event.stopPropagation()"
             [indeterminate]="indeterminate">
      <span [class.indeterminate]="indeterminate" [class.checked]="checked" class="custom-checkbox">
        <nb-icon *ngIf="indeterminate" icon="minus-bold-outline" pack="nebular-essentials"></nb-icon>
        <nb-icon *ngIf="checked && !indeterminate" icon="checkmark-bold-outline" pack="nebular-essentials"></nb-icon>
      </span>
      <span class="text">
        <ng-content></ng-content>
      </span>
    </label>
  `,
        providers: [{
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => NbCheckboxComponent_1),
                multi: true,
            }],
        styles: [":host .label{position:relative;display:inline-flex;align-items:center;margin:0;min-height:inherit;padding:0.375rem 1.5rem 0.375rem 0}:host .custom-checkbox{flex-shrink:0;transition-duration:0.15s;transition-property:background-color,border,box-shadow;transition-timing-function:ease-in}:host .text{transition:color 0.15s ease-in}[dir=ltr] :host .text{padding-left:.6875rem}[dir=rtl] :host .text{padding-right:.6875rem}\n"]
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef])
], NbCheckboxComponent);
export { NbCheckboxComponent };
//# sourceMappingURL=checkbox.component.js.map