import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TypeScriptDemoComponent } from './type-script-demo/type-script-demo.component';
import { DemoComponentComponent } from './demo-component/demo-component.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    TypeScriptDemoComponent,
    DemoComponentComponent,
    UserComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
