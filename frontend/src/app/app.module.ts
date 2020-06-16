import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { HeaderComponent } from './components/header/header.component';
import { TaskviewComponent } from './components/taskview/taskview.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    HeaderComponent,
    TaskviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
