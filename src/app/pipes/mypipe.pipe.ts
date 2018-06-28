import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(items: any[], term: any): any {
    return term ? items.filter(item => item.name.toLowerCase().indexOf(term.toLowerCase()) !== -1): items;
    
  }

}
