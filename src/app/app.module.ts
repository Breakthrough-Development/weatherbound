import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForecastComponent } from './forecast/forecast.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './forecast/header/header.component';
import { InstructionsComponent } from './main/instructions/instructions.component';

@NgModule({
  declarations: [AppComponent, ForecastComponent, HeaderComponent, InstructionsComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
