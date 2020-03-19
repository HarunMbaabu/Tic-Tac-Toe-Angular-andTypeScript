/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectorRef, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NbLayoutDirectionService } from '../../services/direction.service';
import { NbComponentStatus } from '../component-status';
/**
 * Toggle is a control representing `on` and `off` states.
 *
 * @stacked-example(Showcase, toggle/toggle-showcase.component)
 *
 * ### Installation
 *
 * Import `NbToggleComponent` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbToggleModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Toggle may have one of the following statuses: `primary`, `success`, `warning`, `danger`, `info`
 *
 * @stacked-example(Colored Toggles, toggle/toggle-status.component)
 *
 * Toggle can be disabled via `disabled` input.
 *
 * @stacked-example(Disabled Toggles, toggle/toggle-disabled.component)
 *
 * Toggle may have a label with following positions: `left`, `right`, `start`, `end` (default)
 *
 * @stacked-example(Toggles With Labels, toggle/toggle-label-position.component.ts)
 *
 * You can set control state via `checked` binding:
 *
 * ```html
 * <nb-toggle [(checked)]="checked"></nb-toggle>
 * ```
 *
 * Or it could be set via reactive forms or ngModel bindings:
 *
 * @stacked-example(Toggle form binding, toggle/toggle-form.component)
 *
 * @styles
 *
 * toggle-height:
 * toggle-width:
 * toggle-border-width:
 * toggle-border-radius:
 * toggle-border-color:
 * toggle-background-color:
 * toggle-outline-width:
 * toggle-outline-color:
 * toggle-switcher-size:
 * toggle-switcher-background-color:
 * toggle-switcher-checkmark-color:
 * toggle-text-color:
 * toggle-text-font-family:
 * toggle-text-font-size:
 * toggle-text-font-weight:
 * toggle-text-line-height:
 * toggle-cursor:
 * toggle-disabled-background-color:
 * toggle-disabled-border-color:
 * toggle-disabled-switcher-checkmark-color:
 * toggle-disabled-text-color:
 * toggle-disabled-cursor:
 * toggle-primary-background-color:
 * toggle-primary-border-color:
 * toggle-primary-checked-background-color:
 * toggle-primary-checked-border-color:
 * toggle-primary-checked-switcher-checkmark-color:
 * toggle-primary-focus-border-color:
 * toggle-primary-hover-background-color:
 * toggle-primary-hover-border-color:
 * toggle-primary-active-background-color:
 * toggle-primary-active-border-color:
 * toggle-success-background-color:
 * toggle-success-border-color:
 * toggle-success-checked-background-color:
 * toggle-success-checked-border-color:
 * toggle-success-checked-switcher-checkmark-color:
 * toggle-success-focus-border-color:
 * toggle-success-hover-background-color:
 * toggle-success-hover-border-color:
 * toggle-success-active-background-color:
 * toggle-success-active-border-color:
 * toggle-info-background-color:
 * toggle-info-border-color:
 * toggle-info-checked-background-color:
 * toggle-info-checked-border-color:
 * toggle-info-checked-switcher-checkmark-color:
 * toggle-info-focus-border-color:
 * toggle-info-hover-background-color:
 * toggle-info-hover-border-color:
 * toggle-info-active-background-color:
 * toggle-info-active-border-color:
 * toggle-warning-background-color:
 * toggle-warning-border-color:
 * toggle-warning-checked-background-color:
 * toggle-warning-checked-border-color:
 * toggle-warning-checked-switcher-checkmark-color:
 * toggle-warning-focus-border-color:
 * toggle-warning-hover-background-color:
 * toggle-warning-hover-border-color:
 * toggle-warning-active-background-color:
 * toggle-warning-active-border-color:
 * toggle-danger-background-color:
 * toggle-danger-border-color:
 * toggle-danger-checked-background-color:
 * toggle-danger-checked-border-color:
 * toggle-danger-checked-switcher-checkmark-color:
 * toggle-danger-focus-border-color:
 * toggle-danger-hover-background-color:
 * toggle-danger-hover-border-color:
 * toggle-danger-active-background-color:
 * toggle-danger-active-border-color:
 */
export declare class NbToggleComponent implements OnInit, OnDestroy, ControlValueAccessor {
    private changeDetector;
    private layoutDirection;
    onChange: any;
    onTouched: any;
    private destroy$;
    /**
     * Toggle checked
     * @type {boolean}
     */
    checked: boolean;
    private _checked;
    /**
     * Controls input disabled state
     */
    disabled: boolean;
    private _disabled;
    /**
     * Toggle status.
     * Possible values are: `primary`, `success`, `warning`, `danger`, `info`
     */
    status: '' | NbComponentStatus;
    /**
     * Toggle label position.
     * Possible values are: `left`, `right`, `start`, `end` (default)
     */
    labelPosition: 'left' | 'right' | 'start' | 'end';
    /**
     * Output when checked state is changed by a user
     * @type EventEmitter<boolean>
     */
    checkedChange: EventEmitter<boolean>;
    readonly primary: boolean;
    readonly success: boolean;
    readonly warning: boolean;
    readonly danger: boolean;
    readonly info: boolean;
    readonly labelLeft: boolean;
    readonly labelRight: boolean;
    readonly labelStart: boolean;
    readonly labelEnd: boolean;
    constructor(changeDetector: ChangeDetectorRef, layoutDirection: NbLayoutDirectionService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    checkState(): string;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    writeValue(val: any): void;
    setDisabledState(val: boolean): void;
    updateValue(event: Event): void;
    onInputClick(event: Event): void;
}
