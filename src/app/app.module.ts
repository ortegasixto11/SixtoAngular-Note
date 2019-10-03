import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const appRoutes: Routes = [
  // {path:'', component: LugaresComponent},
  // {path:'lugares', component: LugaresComponent},
  // {path:'detalle/:id', component: DetalleComponent},
  // {path:'contacto', component: ContactoComponent},
  // {path:'crear/:id', component: CrearComponent},
  { path: '', component: ListComponent },
  { path: 'create', component: CreateComponent },
  { path: 'edit', component: EditComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
