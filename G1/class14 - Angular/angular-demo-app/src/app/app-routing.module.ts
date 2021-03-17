import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DemoComponentComponent } from "./demo-component/demo-component.component";
import { TypeScriptDemoComponent } from "./type-script-demo/type-script-demo.component";

const routes: Routes = [
    {path: '', redirectTo:'demo1', pathMatch:'full'},
    {path: 'demo1', component: TypeScriptDemoComponent},
    {path: 'demo2', component: DemoComponentComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}