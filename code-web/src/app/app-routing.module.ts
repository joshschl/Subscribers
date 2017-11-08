import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscribersComponent } from './components/subscribers/subscribers.component';
import { SubscriberEditComponent } from './components/subscriber-edit/subscriber-edit.component';

const routes: Routes = [
  { path: '', component: SubscribersComponent, pathMatch: 'full' },
  { path: 'update/:id', component: SubscriberEditComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
