import { AfterContentInit, AfterViewInit, ChangeDetectorRef, ComponentRef, ElementRef, EventEmitter, OnDestroy, QueryList } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NbAdjustableConnectedPositionStrategy, NbPosition, NbPositionBuilderService } from '../cdk/overlay/overlay-position';
import { NbOverlayRef, NbPortalDirective, NbScrollStrategy } from '../cdk/overlay/mapping';
import { NbOverlayService } from '../cdk/overlay/overlay-service';
import { NbTriggerStrategy, NbTriggerStrategyBuilderService } from '../cdk/overlay/overlay-trigger';
import { NbFocusKeyManager, NbFocusKeyManagerFactoryService } from '../cdk/a11y/focus-key-manager';
import { NbComponentSize } from '../component-size';
import { NbComponentShape } from '../component-shape';
import { NbComponentStatus } from '../component-status';
import { NbOptionComponent } from './option.component';
export declare type NbSelectAppearance = 'outline' | 'filled' | 'hero';
export declare class NbSelectLabelComponent {
}
/**
 * The `NbSelectComponent` provides a capability to select one of the passed items.
 *
 * @stacked-example(Showcase, select/select-showcase.component)
 *
 * ### Installation
 *
 * Import `NbSelectModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbSelectModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * If you want to use it as the multi-select control you have to mark it as `multiple`.
 * In this case, `nb-select` will work only with arrays - accept arrays and propagate arrays.
 *
 * @stacked-example(Multiple, select/select-multiple.component)
 *
 * Items without values will clean the selection. Both `null` and `undefined` values will also clean the selection.
 *
 * @stacked-example(Clean selection, select/select-clean.component)
 *
 * Select may be bounded using `selected` input:
 *
 * ```html
 * <nb-select [(selected)]="selected"></nb-selected>
 * ```
 *
 * Or you can bind control with form controls or ngModel:
 *
 * @stacked-example(Select form binding, select/select-form.component)
 *
 * Options in the select may be grouped using `nb-option-group` component.
 *
 * @stacked-example(Grouping, select/select-groups.component)
 *
 * Select may have a placeholder that will be shown when nothing selected:
 *
 * @stacked-example(Placeholder, select/select-placeholder.component)
 *
 * You can disable select, options and whole groups.
 *
 * @stacked-example(Disabled select, select/select-disabled.component)
 *
 * Also, the custom label may be provided in select.
 * This custom label will be used for instead placeholder when something selected.
 *
 * @stacked-example(Custom label, select/select-label.component)
 *
 * Default `nb-select` size is `medium` and status color is `primary`.
 * Select is available in multiple colors using `status` property:
 *
 * @stacked-example(Select statuses, select/select-status.component)
 *
 * There are five select sizes:
 *
 * @stacked-example(Select sizes, select/select-sizes.component)
 *
 * And two additional style types - `filled`:
 *
 * @stacked-example(Filled select, select/select-filled.component)
 *
 * and `hero`:
 *
 * @stacked-example(Select colors, select/select-hero.component)
 *
 * Select is available in different shapes, that could be combined with the other properties:
 *
 * @stacked-example(Select shapes, select/select-shapes.component)
 *
 * @additional-example(Interactive, select/select-interactive.component)
 *
 * @styles
 *
 * select-cursor:
 * select-disabled-cursor:
 * select-min-width:
 * select-options-list-max-height:
 * select-options-list-shadow:
 * select-options-list-border-style:
 * select-options-list-border-width:
 * select-outline-width:
 * select-outline-color:
 * select-text-font-family:
 * select-text-font-weight:
 * select-placeholder-text-font-weight:
 * select-option-background-color:
 * select-option-text-color:
 * select-option-selected-background-color:
 * select-option-selected-text-color:
 * select-option-focus-background-color:
 * select-option-focus-text-color:
 * select-option-hover-background-color:
 * select-option-hover-text-color:
 * select-option-disabled-background-color:
 * select-option-disabled-text-color:
 * select-tiny-text-font-size:
 * select-tiny-text-line-height:
 * select-tiny-max-width:
 * select-small-text-font-size:
 * select-small-text-line-height:
 * select-small-max-width:
 * select-medium-text-font-size:
 * select-medium-text-line-height:
 * select-medium-max-width:
 * select-large-text-font-size:
 * select-large-text-line-height:
 * select-large-max-width:
 * select-giant-text-font-size:
 * select-giant-text-line-height:
 * select-giant-max-width:
 * select-rectangle-border-radius:
 * select-semi-round-border-radius:
 * select-round-border-radius:
 * select-outline-background-color:
 * select-outline-border-color:
 * select-outline-border-style:
 * select-outline-border-width:
 * select-outline-icon-color:
 * select-outline-text-color:
 * select-outline-placeholder-text-color:
 * select-outline-focus-border-color:
 * select-outline-hover-border-color:
 * select-outline-disabled-background-color:
 * select-outline-disabled-border-color:
 * select-outline-disabled-icon-color:
 * select-outline-disabled-text-color:
 * select-outline-tiny-padding:
 * select-outline-small-padding:
 * select-outline-medium-padding:
 * select-outline-large-padding:
 * select-outline-giant-padding:
 * select-outline-primary-border-color:
 * select-outline-primary-focus-border-color:
 * select-outline-primary-hover-border-color:
 * select-outline-primary-disabled-border-color:
 * select-outline-success-border-color:
 * select-outline-success-focus-border-color:
 * select-outline-success-hover-border-color:
 * select-outline-success-disabled-border-color:
 * select-outline-info-border-color:
 * select-outline-info-focus-border-color:
 * select-outline-info-hover-border-color:
 * select-outline-info-disabled-border-color:
 * select-outline-warning-border-color:
 * select-outline-warning-focus-border-color:
 * select-outline-warning-hover-border-color:
 * select-outline-warning-disabled-border-color:
 * select-outline-danger-border-color:
 * select-outline-danger-focus-border-color:
 * select-outline-danger-hover-border-color:
 * select-outline-danger-disabled-border-color:
 * select-option-outline-tiny-padding:
 * select-option-outline-small-padding:
 * select-option-outline-medium-padding:
 * select-option-outline-large-padding:
 * select-option-outline-giant-padding:
 * select-open-outline-border-color:
 * select-outline-adjacent-border-color:
 * select-outline-adjacent-border-style:
 * select-outline-adjacent-border-width:
 * select-outline-primary-adjacent-border-color:
 * select-outline-success-adjacent-border-color:
 * select-outline-info-adjacent-border-color:
 * select-outline-warning-adjacent-border-color:
 * select-outline-danger-adjacent-border-color:
 * select-group-option-outline-tiny-start-padding:
 * select-group-option-outline-small-start-padding:
 * select-group-option-outline-medium-start-padding:
 * select-group-option-outline-large-start-padding:
 * select-group-option-outline-giant-start-padding:
 * select-options-list-outline-border-color:
 * select-options-list-outline-primary-border-color:
 * select-options-list-outline-success-border-color:
 * select-options-list-outline-info-border-color:
 * select-options-list-outline-warning-border-color:
 * select-options-list-outline-danger-border-color:
 * select-filled-background-color:
 * select-filled-border-color:
 * select-filled-border-style:
 * select-filled-border-width:
 * select-filled-icon-color:
 * select-filled-text-color:
 * select-filled-placeholder-text-color:
 * select-filled-focus-border-color:
 * select-filled-hover-border-color:
 * select-filled-disabled-background-color:
 * select-filled-disabled-border-color:
 * select-filled-disabled-icon-color:
 * select-filled-disabled-text-color:
 * select-filled-tiny-padding:
 * select-filled-small-padding:
 * select-filled-medium-padding:
 * select-filled-large-padding:
 * select-filled-giant-padding:
 * select-filled-primary-background-color:
 * select-filled-primary-border-color:
 * select-filled-primary-icon-color:
 * select-filled-primary-text-color:
 * select-filled-primary-placeholder-text-color:
 * select-filled-primary-focus-background-color:
 * select-filled-primary-focus-border-color:
 * select-filled-primary-hover-background-color:
 * select-filled-primary-hover-border-color:
 * select-filled-primary-disabled-background-color:
 * select-filled-primary-disabled-border-color:
 * select-filled-primary-disabled-icon-color:
 * select-filled-primary-disabled-text-color:
 * select-filled-success-background-color:
 * select-filled-success-border-color:
 * select-filled-success-icon-color:
 * select-filled-success-text-color:
 * select-filled-success-placeholder-text-color:
 * select-filled-success-focus-background-color:
 * select-filled-success-focus-border-color:
 * select-filled-success-hover-background-color:
 * select-filled-success-hover-border-color:
 * select-filled-success-disabled-background-color:
 * select-filled-success-disabled-border-color:
 * select-filled-success-disabled-icon-color:
 * select-filled-success-disabled-text-color:
 * select-filled-info-background-color:
 * select-filled-info-border-color:
 * select-filled-info-icon-color:
 * select-filled-info-text-color:
 * select-filled-info-placeholder-text-color:
 * select-filled-info-focus-background-color:
 * select-filled-info-focus-border-color:
 * select-filled-info-hover-background-color:
 * select-filled-info-hover-border-color:
 * select-filled-info-disabled-background-color:
 * select-filled-info-disabled-border-color:
 * select-filled-info-disabled-icon-color:
 * select-filled-info-disabled-text-color:
 * select-filled-warning-background-color:
 * select-filled-warning-border-color:
 * select-filled-warning-icon-color:
 * select-filled-warning-text-color:
 * select-filled-warning-placeholder-text-color:
 * select-filled-warning-focus-background-color:
 * select-filled-warning-focus-border-color:
 * select-filled-warning-hover-background-color:
 * select-filled-warning-hover-border-color:
 * select-filled-warning-disabled-background-color:
 * select-filled-warning-disabled-border-color:
 * select-filled-warning-disabled-icon-color:
 * select-filled-warning-disabled-text-color:
 * select-filled-danger-background-color:
 * select-filled-danger-border-color:
 * select-filled-danger-icon-color:
 * select-filled-danger-text-color:
 * select-filled-danger-placeholder-text-color:
 * select-filled-danger-focus-background-color:
 * select-filled-danger-focus-border-color:
 * select-filled-danger-hover-background-color:
 * select-filled-danger-hover-border-color:
 * select-filled-danger-disabled-background-color:
 * select-filled-danger-disabled-border-color:
 * select-filled-danger-disabled-icon-color:
 * select-filled-danger-disabled-text-color:
 * select-option-filled-tiny-padding:
 * select-group-option-filled-tiny-padding-start:
 * select-option-filled-small-padding:
 * select-group-option-filled-small-padding-start:
 * select-option-filled-medium-padding:
 * select-group-option-filled-medium-padding-start:
 * select-option-filled-large-padding:
 * select-group-option-filled-large-padding-start:
 * select-option-filled-giant-padding:
 * select-group-option-filled-giant-padding-start:
 * select-options-list-filled-border-color:
 * select-options-list-filled-primary-border-color:
 * select-options-list-filled-success-border-color:
 * select-options-list-filled-info-border-color:
 * select-options-list-filled-warning-border-color:
 * select-options-list-filled-danger-border-color:
 * select-hero-background-color:
 * select-hero-border-color:
 * select-hero-border-style:
 * select-hero-border-width:
 * select-hero-icon-color:
 * select-hero-text-color:
 * select-hero-placeholder-text-color:
 * select-hero-focus-border-color:
 * select-hero-hover-border-color:
 * select-hero-disabled-background-color:
 * select-hero-disabled-icon-color:
 * select-hero-disabled-text-color:
 * select-hero-tiny-padding:
 * select-hero-small-padding:
 * select-hero-medium-padding:
 * select-hero-large-padding:
 * select-hero-giant-padding:
 * select-hero-primary-left-background-color:
 * select-hero-primary-right-background-color:
 * select-hero-primary-icon-color:
 * select-hero-primary-text-color:
 * select-hero-primary-placeholder-text-color:
 * select-hero-primary-focus-left-background-color:
 * select-hero-primary-focus-right-background-color:
 * select-hero-primary-hover-left-background-color:
 * select-hero-primary-hover-right-background-color:
 * select-hero-primary-disabled-background-color:
 * select-hero-primary-disabled-icon-color:
 * select-hero-primary-disabled-text-color:
 * select-hero-success-left-background-color:
 * select-hero-success-right-background-color:
 * select-hero-success-icon-color:
 * select-hero-success-text-color:
 * select-hero-success-placeholder-text-color:
 * select-hero-success-focus-left-background-color:
 * select-hero-success-focus-right-background-color:
 * select-hero-success-hover-left-background-color:
 * select-hero-success-hover-right-background-color:
 * select-hero-success-disabled-background-color:
 * select-hero-success-disabled-icon-color:
 * select-hero-success-disabled-text-color:
 * select-hero-info-left-background-color:
 * select-hero-info-right-background-color:
 * select-hero-info-icon-color:
 * select-hero-info-text-color:
 * select-hero-info-placeholder-text-color:
 * select-hero-info-focus-left-background-color:
 * select-hero-info-focus-right-background-color:
 * select-hero-info-hover-left-background-color:
 * select-hero-info-hover-right-background-color:
 * select-hero-info-disabled-background-color:
 * select-hero-info-disabled-icon-color:
 * select-hero-info-disabled-text-color:
 * select-hero-warning-left-background-color:
 * select-hero-warning-right-background-color:
 * select-hero-warning-icon-color:
 * select-hero-warning-text-color:
 * select-hero-warning-placeholder-text-color:
 * select-hero-warning-focus-left-background-color:
 * select-hero-warning-focus-right-background-color:
 * select-hero-warning-hover-left-background-color:
 * select-hero-warning-hover-right-background-color:
 * select-hero-warning-disabled-background-color:
 * select-hero-warning-disabled-icon-color:
 * select-hero-warning-disabled-text-color:
 * select-hero-danger-left-background-color:
 * select-hero-danger-right-background-color:
 * select-hero-danger-icon-color:
 * select-hero-danger-text-color:
 * select-hero-danger-placeholder-text-color:
 * select-hero-danger-focus-left-background-color:
 * select-hero-danger-focus-right-background-color:
 * select-hero-danger-hover-left-background-color:
 * select-hero-danger-hover-right-background-color:
 * select-hero-danger-disabled-background-color:
 * select-hero-danger-disabled-icon-color:
 * select-hero-danger-disabled-text-color:
 * select-option-hero-tiny-padding:
 * select-group-option-hero-tiny-padding-start:
 * select-option-hero-small-padding:
 * select-group-option-hero-small-padding-start:
 * select-option-hero-medium-padding:
 * select-group-option-hero-medium-padding-start:
 * select-option-hero-large-padding:
 * select-group-option-hero-large-padding-start:
 * select-option-hero-giant-padding:
 * select-group-option-hero-giant-padding-start:
 * select-options-list-hero-border-color:
 * select-options-list-hero-primary-border-color:
 * select-options-list-hero-success-border-color:
 * select-options-list-hero-info-border-color:
 * select-options-list-hero-warning-border-color:
 * select-options-list-hero-danger-border-color:
 * */
export declare class NbSelectComponent<T> implements AfterViewInit, AfterContentInit, OnDestroy, ControlValueAccessor {
    protected document: any;
    protected overlay: NbOverlayService;
    protected hostRef: ElementRef<HTMLElement>;
    protected positionBuilder: NbPositionBuilderService;
    protected triggerStrategyBuilder: NbTriggerStrategyBuilderService;
    protected cd: ChangeDetectorRef;
    protected focusKeyManagerFactoryService: NbFocusKeyManagerFactoryService<NbOptionComponent<T>>;
    /**
     * Select size, available sizes:
     * `tiny`, `small`, `medium` (default), `large`, `giant`
     */
    size: NbComponentSize;
    /**
     * Select status (adds specific styles):
     * `primary`, `info`, `success`, `warning`, `danger`
     */
    status: '' | NbComponentStatus;
    /**
     * Select shapes: `rectangle` (default), `round`, `semi-round`
     */
    shape: NbComponentShape;
    /**
     * Select appearances: `outline` (default), `filled`, `hero`
     */
    appearance: NbSelectAppearance;
    /**
     * Adds `outline` styles
     */
    outline: boolean;
    /**
     * Adds `filled` styles
     */
    filled: boolean;
    /**
     * Adds `hero` styles
     */
    hero: boolean;
    /**
     * Disables the select
     */
    disabled: boolean;
    protected _disabled: boolean;
    /**
     * If set element will fill its container
     */
    fullWidth: boolean;
    protected _fullWidth: boolean;
    /**
     * Renders select placeholder if nothing selected.
     * */
    placeholder: string;
    /**
     * Accepts selected item or array of selected items.
     * */
    selected: T | T[];
    /**
     * Gives capability just write `multiple` over the element.
     * */
    multiple: boolean;
    protected _multiple: boolean;
    /**
     * Will be emitted when selected value changes.
     * */
    selectedChange: EventEmitter<T | T[]>;
    /**
     * List of `NbOptionComponent`'s components passed as content.
     * TODO maybe it would be better provide wrapper
     * */
    options: QueryList<NbOptionComponent<T>>;
    /**
     * Custom select label, will be rendered instead of default enumeration with coma.
     * */
    customLabel: any;
    /**
     * NbCard with options content.
     * */
    portal: NbPortalDirective;
    button: ElementRef<HTMLButtonElement>;
    /**
     * Determines is select opened.
     * */
    readonly isOpen: boolean;
    /**
     * List of selected options.
     * */
    selectionModel: NbOptionComponent<T>[];
    positionStrategy: NbAdjustableConnectedPositionStrategy;
    /**
     * Current overlay position because of we have to toggle overlayPosition
     * in [ngClass] direction and this directive can use only string.
     */
    overlayPosition: NbPosition;
    protected ref: NbOverlayRef;
    protected triggerStrategy: NbTriggerStrategy;
    protected alive: boolean;
    protected keyManager: NbFocusKeyManager<NbOptionComponent<T>>;
    /**
     * If a user assigns value before content nb-options's rendered the value will be putted in this variable.
     * And then applied after content rendered.
     * Only the last value will be applied.
     * */
    protected queue: T | T[];
    /**
     * Function passed through control value accessor to propagate changes.
     * */
    protected onChange: Function;
    protected onTouched: Function;
    constructor(document: any, overlay: NbOverlayService, hostRef: ElementRef<HTMLElement>, positionBuilder: NbPositionBuilderService, triggerStrategyBuilder: NbTriggerStrategyBuilderService, cd: ChangeDetectorRef, focusKeyManagerFactoryService: NbFocusKeyManagerFactoryService<NbOptionComponent<T>>);
    /**
     * Determines is select hidden.
     * */
    readonly isHidden: boolean;
    /**
     * Returns width of the select button.
     * */
    readonly hostWidth: number;
    readonly selectButtonClasses: string[];
    readonly optionsListClasses: string[];
    /**
     * Content rendered in the label.
     * */
    readonly selectionView: any;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    show(): void;
    hide(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: T | T[]): void;
    /**
     * Selects option or clear all selected options if value is null.
     * */
    protected handleOptionClick(option: NbOptionComponent<T>): void;
    /**
     * Deselect all selected options.
     * */
    protected reset(): void;
    /**
     * Determines how to select option as multiple or single.
     * */
    protected selectOption(option: NbOptionComponent<T>): void;
    /**
     * Select single option.
     * */
    protected handleSingleSelect(option: NbOptionComponent<T>): void;
    /**
     * Select for multiple options.
     * */
    protected handleMultipleSelect(option: NbOptionComponent<T>): void;
    protected attachToOverlay(): void;
    protected setActiveOption(): void;
    protected createOverlay(): void;
    protected createKeyManager(): void;
    protected createPositionStrategy(): NbAdjustableConnectedPositionStrategy;
    protected createScrollStrategy(): NbScrollStrategy;
    protected createTriggerStrategy(): NbTriggerStrategy;
    protected subscribeOnTriggers(): void;
    protected subscribeOnPositionChange(): void;
    protected subscribeOnOptionClick(): void;
    protected subscribeOnOverlayKeys(): void;
    protected getContainer(): ComponentRef<any>;
    /**
     * Propagate selected value.
     * */
    protected emitSelected(selected: T | T[]): void;
    /**
     * Set selected value in model.
     * */
    protected setSelection(value: T | T[]): void;
    /**
     * Selects value.
     * */
    protected selectValue(value: T): void;
    /**
     * Sets touched if focus moved outside of button and overlay,
     * ignoring the case when focus moved to options overlay.
     */
    trySetTouched(): void;
    protected isClickedWithinComponent($event: Event): boolean;
    readonly tiny: boolean;
    readonly small: boolean;
    readonly medium: boolean;
    readonly large: boolean;
    readonly giant: boolean;
    readonly primary: boolean;
    readonly info: boolean;
    readonly success: boolean;
    readonly warning: boolean;
    readonly danger: boolean;
    readonly rectangle: boolean;
    readonly round: boolean;
    readonly semiRound: boolean;
}
