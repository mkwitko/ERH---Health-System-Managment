import { Component, OnInit } from '@angular/core';
import { Lang } from 'src/app/interfaces/langs/lang';
import { GlobalizationService } from 'src/app/services/globalization/globalization.service';

@Component({
  selector: 'app-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.scss'],
})
export class FlagComponent implements OnInit {

  public langs: Lang[];

  constructor(
    private global: GlobalizationService
  )
  {
    this.getLangs();
  }

  ngOnInit() {}

  getLangs(){
    this.langs = [];
    const langRes = this.global.getLangs();
    for(const a of langRes){
      this.langs.push(a);
    }
  }

  changeLang(obj){
    this.global.changeLanguage(obj.value);
  }

}
