/*
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
import { Component, HostBinding, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { NbPosition } from '../cdk/overlay/overlay-position';
/**
 * Tooltip container.
 * Renders provided tooltip inside.
 *
 * @styles
 *
 * tooltip-background-color:
 * tooltip-border-color:
 * tooltip-border-style:
 * tooltip-border-width:
 * tooltip-border-radius:
 * tooltip-padding:
 * tooltip-text-color:
 * tooltip-text-font-family:
 * tooltip-text-font-size:
 * tooltip-text-font-weight:
 * tooltip-text-line-height:
 * tooltip-max-width:
 * tooltip-primary-background-color:
 * tooltip-primary-text-color:
 * tooltip-info-background-color:
 * tooltip-info-text-color:
 * tooltip-success-background-color:
 * tooltip-success-text-color:
 * tooltip-warning-background-color:
 * tooltip-warning-text-color:
 * tooltip-danger-background-color:
 * tooltip-danger-text-color:
 * tooltip-shadow:
 */
let NbTooltipComponent = class NbTooltipComponent {
    /**
     * Tooltip container.
     * Renders provided tooltip inside.
     *
     * @styles
     *
     * tooltip-background-color:
     * tooltip-border-color:
     * tooltip-border-style:
     * tooltip-border-width:
     * tooltip-border-radius:
     * tooltip-padding:
     * tooltip-text-color:
     * tooltip-text-font-family:
     * tooltip-text-font-size:
     * tooltip-text-font-weight:
     * tooltip-text-line-height:
     * tooltip-max-width:
     * tooltip-primary-background-color:
     * tooltip-primary-text-color:
     * tooltip-info-background-color:
     * tooltip-info-text-color:
     * tooltip-success-background-color:
     * tooltip-success-text-color:
     * tooltip-warning-background-color:
     * tooltip-warning-text-color:
     * tooltip-danger-background-color:
     * tooltip-danger-text-color:
     * tooltip-shadow:
     */
    constructor() {
        /**
         * Popover position relatively host element.
         * */
        this.position = NbPosition.TOP;
        this.context = {};
    }
    get binding() {
        return `${this.position} ${this.statusClass}`;
    }
    get show() {
        return true;
    }
    get statusClass() {
        return this.context.status ? `status-${this.context.status}` : '';
    }
    /**
     * The method is empty since we don't need to do anything additionally
     * render is handled by change detection
     */
    renderContent() { }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], NbTooltipComponent.prototype, "content", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], NbTooltipComponent.prototype, "position", void 0);
__decorate([
    HostBinding('class'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], NbTooltipComponent.prototype, "binding", null);
__decorate([
    HostBinding('@showTooltip'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], NbTooltipComponent.prototype, "show", null);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NbTooltipComponent.prototype, "context", void 0);
NbTooltipComponent = __decorate([
    Component({
        selector: 'nb-tooltip',
        template: `
    <span class="arrow"></span>
    <div class="content">
      <nb-icon *ngIf="context?.icon" [config]="context.icon"></nb-icon>
      <span *ngIf="content">{{ content }}</span>
    </div>
  `,
        animations: [
            trigger('showTooltip', [
                state('in', style({ opacity: 1 })),
                transition('void => *', [
                    style({ opacity: 0 }),
                    animate(100),
                ]),
                transition('* => void', [
                    animate(100, style({ opacity: 0 })),
                ]),
            ]),
        ],
        styles: [":host{z-index:10000}:host .content{display:flex;align-items:center}:host.right .content{flex-direction:row-reverse}:host .arrow{position:absolute;width:0;height:0}:host nb-icon{font-size:1.1em;min-width:1em}:host nb-icon+span{margin-left:0.5rem}:host.right nb-icon+span{margin-right:0.5rem}:host .arrow{border-left:6px solid transparent;border-right:6px solid transparent}:host.bottom .arrow{top:-6px;left:calc(50% - 6px)}:host.left .arrow{right:-8px;top:calc(50% - 2.4px);transform:rotate(90deg)}:host.top .arrow{bottom:-6px;left:calc(50% - 6px);transform:rotate(180deg)}:host.right .arrow{left:-8px;top:calc(50% - 2.4px);transform:rotate(270deg)}\n"]
    })
], NbTooltipComponent);
export { NbTooltipComponent };
//# sourceMappingURL=tooltip.component.js.map