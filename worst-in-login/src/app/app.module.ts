import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'; 
import { AppComponent } from './app.component';
import {MatInputModule} from '@angular/material/input'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MatCardModule, BrowserAnimationsModule, MatButtonModule, MatInputModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
