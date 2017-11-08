//Angular Components
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

//3rd Part Components
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

//App Components
import { AppComponent } from './app.component';
import { SubscribersComponent } from './components/subscribers/subscribers.component';
import { SubscriberEditComponent } from './components/subscriber-edit/subscriber-edit.component';
import { SubscribersRowDetailComponent } from './components/subscribers-row-detail/subscribers-row-detail.component'

//App Services
import { SubscriberService } from './services/subscriber.service';

//Routing
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    SubscribersComponent,
    SubscriberEditComponent,
    SubscribersRowDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxDatatableModule,
    NgbModule.forRoot()
  ],
  providers: [ SubscriberService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
