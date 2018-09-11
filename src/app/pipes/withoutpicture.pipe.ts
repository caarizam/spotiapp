import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'withoutpicture'
})
export class WithoutpicturePipe implements PipeTransform {

  transform( value: any[] ): any {

    let wimage = 'assets/img/noimage.png';
    if(!value){
      return wimage;
    }
    return (value.length > 0 ) ? value[1].url : wimage;
  }

}
