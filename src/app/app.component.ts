import { Component } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { Capter, MediaInfo, Subject } from './capter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  subjects: Subject[] = [];
  keyword = "";
  constructor(public http: Http) {
    this.http.get('./assets/subjects.json').subscribe(rtn => {
      this.subjects = rtn.json();

    });
  }

  search(keyword) {
    // alert(keyword);
    this.keyword = keyword;
  }
}
