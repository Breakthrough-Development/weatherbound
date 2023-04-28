import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForecastComponent } from './main/forecast/forecast.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { InstructionsComponent } from './main/instructions/instructions.component';
import { FooterComponent } from './footer/footer.component';
import { SettingsComponent } from './main/settings/settings.component';
import { SettingsTogglerComponent } from './main/settings/settings-toggler/settings-toggler.component';
import { WeatherIconComponent } from './header/svg/weather-icon/weather-icon.component';
import { SearchComponent } from './main/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ForecastComponent,
    HeaderComponent,
    InstructionsComponent,
    FooterComponent,
    SettingsComponent,
    SettingsTogglerComponent,
    WeatherIconComponent,
    SearchComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
