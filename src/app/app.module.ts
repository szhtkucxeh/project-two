import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { fatherComponent } from "./father/fatherComponent";
import { ListComponent } from './list/list.component';
import { headComponent } from './head/head.component';
import { ArrComponent } from './arr/arr.component';
import { ChoiceComponent } from './choice/choice.component';
import { AboutComponent } from './about/about.component';
import { ThreeComponent } from './three/three.component';
import { Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: "",component:ArrComponent},
  {path: "live reports",component: ListComponent},
  {path: "about",component: AboutComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    fatherComponent,
    ListComponent,
    headComponent,
    ArrComponent,
    ChoiceComponent,
    AboutComponent,
    ThreeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
