import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import {Ng2BootstrapModule} from 'ng2-bootstrap/ng2-bootstrap'


import {ChildComponent} from './child/child.component';
import {FatherComponent} from './father/father.component'
import { AppComponent } from './app.component';
import { routing, appRoutingProviders} from './app.routing'
import {MainPageViewComponent} from './mainPageView/mainPageView.component';
import { MenuComponent } from './Menu/Menu.component';
import { InvalidPageComponent } from './Pages/InvalidPage/InvalidPage.component';
import { AboutComponent } from './Pages/About/About.component';
import { StoreComponent } from './Pages/Store/Store.component';
import { ProductComponent } from './Pages/Product/Product.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    FatherComponent,
    MainPageViewComponent,
    MenuComponent,
    InvalidPageComponent,
    AboutComponent,
    StoreComponent,
    ProductComponent
],
  imports: [
    BrowserModule,
    Ng2BootstrapModule,
    routing,
    FormsModule,
    HttpModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
