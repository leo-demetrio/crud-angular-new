import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NotFoundComponent } from "./components/404/not-found.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";

@NgModule({
    declarations: [
        NavBarComponent,
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '**', component: NotFoundComponent
            },
        ])
    ],
    exports: [
        NavBarComponent
    ]
})

export class CoreModule {

}