import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { TypeScriptDemoComponent } from './type-script-demo/type-script-demo.component';
import { DemoComponentComponent } from './demo-component/demo-component.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { UserService } from './services/user.service';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    TypeScriptDemoComponent,
    DemoComponentComponent,
    UserComponentComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
