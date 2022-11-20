import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandCassComponent } from './band-cass/band-cass.component';
import { BandereceptiponComponent } from './bandereceptipon/bandereceptipon.component';

const routes: Routes = [
  
  { path :"bandrec", component :BandereceptiponComponent},
  { path :"bandCass", component :BandCassComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
