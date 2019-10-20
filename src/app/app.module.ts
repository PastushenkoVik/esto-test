import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { EmptyPageComponent } from './layout/empty-page/empty-page.component';
import { NavComponent } from './shared/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { BankAccountComponent } from './pages/bank-account/bank-account.component';
import { BusinessAccountComponent } from './pages/business-account/business-account.component';
import { ImprintComponent } from './pages/imprint/imprint.component';
import { LegalDocumentsComponent } from './pages/legal-documents/legal-documents.component';
import { MetalComponent } from './pages/metal/metal.component';
import { PlansComponent } from './pages/plans/plans.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { UpdateCookieSettingsComponent } from './pages/update-cookie-settings/update-cookie-settings.component';
import { YouBankAccountComponent } from './pages/you-bank-account/you-bank-account.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EmptyPageComponent,
    NavComponent,
    HomeComponent,
    BankAccountComponent,
    BusinessAccountComponent,
    ImprintComponent,
    LegalDocumentsComponent,
    MetalComponent,
    PlansComponent,
    PrivacyPolicyComponent,
    UpdateCookieSettingsComponent,
    YouBankAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
