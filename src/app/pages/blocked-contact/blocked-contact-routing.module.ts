import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockedContactComponent } from './blocked-contact.component';

const routes: Routes = [
  {
    path: '',
    component: BlockedContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlockedContactRoutingModule {}
