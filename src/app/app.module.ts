import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { TabItensComponent } from './components/tabItens.component';
import { TabComponent } from './components/tab.component';
@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    TabItensComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
