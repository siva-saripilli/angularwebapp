import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Router, NavigationEnd } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
import { filter } from 'rxjs/operators';
import { getHtmlTagDefinition } from '@angular/compiler';

declare var gtag;

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule
  ],
  bootstrap: [AppComponent],
  providers: [
    {provide: 'googleTagManagerId', useValue: 'GTM-N9VTKV5'}
  ]
})
export class AppModule { 
  title = 'analytics';
  constructor(router: Router){
    const navEndEvents = router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    );
    navEndEvents.subscribe((event: NavigationEnd) =>{
      gtag('config', 'UA-164007327-1', {
        'page_path': event.urlAfterRedirects
      });
    });
  }
}
