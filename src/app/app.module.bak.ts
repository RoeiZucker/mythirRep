import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FatherComponent } from './father/father.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    FatherComponent,
    ChildComponent,,
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
