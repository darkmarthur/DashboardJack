import { MzInputModule, MzValidationModule, MzButtonModule, MzSidenavModule, MzIconMdiModule } from 'ngx-materialize';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MzInputModule,
    MzButtonModule,
    MzValidationModule,
    MzSidenavModule,
    MzIconMdiModule
  ],
  exports: [
    MzInputModule,
    MzButtonModule,
    MzValidationModule,
    MzSidenavModule,
    MzIconMdiModule
  ],
})
export class CustomMaterializeModule { }
