import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { ContainerComponent } from './home/container/container.component';
import { MydirectiveDirective } from './directives/mydirective.directive';
import { MypipePipe } from './pipes/mypipe.pipe';
import { DashboardComponent } from './home/container/dashboard/dashboard.component';
import { DetailComponent } from './home/container/detail/detail.component';
import { ParametreComponent } from './home/container/parametre/parametre.component';
import { NotfoundComponent } from './home/container/notfound/notfound.component';
import { PocComponent } from './home/container/poc/poc.component';
import { LoginComponent } from './home/container/login/login.component';
import { InscriptionComponent } from './home/container/inscription/inscription.component';
import { DetaiCatComponent } from './home/container/detai-cat/detai-cat.component';
import {ProduitserviceService} from './services/produitservice.service';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, "./assets/i18n/", ".json");
}


const appRoute : Routes = [
  {path:"",component:DashboardComponent},
  {path:"detail/:id",component:DetailComponent},
  {path:"detailcat/:id",component:DetaiCatComponent},
  {path:"parametre",component:ParametreComponent},
  {path:"poc",component:PocComponent},
  {path:"login",component:LoginComponent},
  {path:"inscription",component:InscriptionComponent},
  {path:"**",component:NotfoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    ContainerComponent,
    MydirectiveDirective,
    MypipePipe,
    DashboardComponent,
    DetailComponent,
    ParametreComponent,
    NotfoundComponent,
    PocComponent,
    LoginComponent,
    InscriptionComponent,
    DetaiCatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoute),
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })

  ],
  providers: [ProduitserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
