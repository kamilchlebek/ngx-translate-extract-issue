import { Component, OnInit } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  test2: string

  constructor(private translateService: TranslateService) {

  }

  ngOnInit() {
    const someDynamicKeyForTranslation = () => 'mykey'
    this.test2 = this.translateService.instant(someDynamicKeyForTranslation()).split('<br>')
  }


}
