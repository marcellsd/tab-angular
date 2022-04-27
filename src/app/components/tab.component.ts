import { Component } from "@angular/core"
import { TabItens} from "./tabItens.component"

@Component({
    selector: "app-tab",
    template:`
    <app-tabitens
    [tabNames] = "tabNamesL"
    [tabTexts] = "tabTextL"
    [currentTab] = currentTab
    (onSelection)="select($event)"
    ></app-tabitens>
    `
})

export class TabComponent{
    tabsData = [{
        tabName: 'tab 1',
        tabText: 'Texto do primeiro tab'
    },
    {
        tabName: 'tab 2',
        tabText: 'Texto do segundo tab'
    },
    {
        tabName: 'tab 3',
        tabText: 'Texto do terceiro tab'
    },
    {
        tabName: 'tab 4',
        tabText: 'Texto do quarto tab'
    },
    ]
     tabNamesL = this.tabsData.map((tab) => tab.tabName)
     tabTextL = this.tabsData.map((tab) => tab.tabText)
     
     currentTab = 0

     select(tabIndex: number){
         this.currentTab = tabIndex
     }
}