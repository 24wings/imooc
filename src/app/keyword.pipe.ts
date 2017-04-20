import { Pipe, PipeTransform } from '@angular/core';
import { Capter, MediaInfo, Subject } from './capter';

@Pipe({
  name: 'keyword'
})
export class KeywordPipe implements PipeTransform {

  transform(subjects: Subject[], keyword: string): any {
    return subjects.filter(subject => subject.title.toUpperCase().indexOf(keyword.toUpperCase()) !== -1);

  }

}
