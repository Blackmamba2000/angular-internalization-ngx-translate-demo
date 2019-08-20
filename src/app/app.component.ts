import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'es', 'fr', 'jp']);
    translate.setDefaultLang('en');

    // Gets the default language from the Web Browser your using
    const browserLang = translate.getBrowserCultureLang();

    // Determines if the browser has either English or French languages.
    translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
  }

}
