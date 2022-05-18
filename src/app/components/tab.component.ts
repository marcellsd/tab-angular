import { Component, Input, OnInit } from "@angular/core"
import {TabItens} from "./tabItens.component"

export interface Tab{
    tabsData: {tabName:string; tabText:string}[]
    currentTab: number
}

@Component({
    selector: "app-tab",
    template:`
    <app-tabitens
    [tabsData] = tabsData
    [currentTab] = currentTab
    (onSelection)="select($event)"
    ></app-tabitens>
    `
})

export class TabComponent{
    @Input() tabsData!: {tabName:string; tabText:string}[]
    @Input() currentTab!: number
    tabsNames = this.tabsData.map((tab) => tab.tabName)
    tabsTexts = this.tabsData.map((tab) => tab.tabText)
    
    select(tabIndex: number){
        this.currentTab = tabIndex
    }
    
}