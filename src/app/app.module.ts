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
import { ContentSectionComponent } from './shared/content-section/content-section.component';
import { OptionsListComponent } from './components/options-list/options-list.component';
import { OptionItemComponent } from './components/options-list/option-item/option-item.component';
import { ButtonComponent } from './shared/button/button.component';
import { AccountComponent } from './pages/account/account.component';
import { CardsSelectComponent } from './components/cards-select/cards-select.component';
import { CardsSliderComponent } from './components/cards-select/cards-slider/cards-slider.component';
import { DotComponent } from './components/cards-select/cards-slider/dot/dot.component';
import { PlansBusinessComponent } from './pages/plans-business/plans-business.component';
import { TabsLinkComponent } from './components/tabs-link/tabs-link.component';
import { ButtonsBlockComponent } from './layout/header/buttons-block/buttons-block.component';

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
    ContentSectionComponent,
    OptionsListComponent,
    OptionItemComponent,
    ButtonComponent,
    AccountComponent,
    CardsSelectComponent,
    CardsSliderComponent,
    DotComponent,
    PlansBusinessComponent,
    TabsLinkComponent,
    ButtonsBlockComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
