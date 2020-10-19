import { Pipe, PipeTransform } from '@angular/core';
import { DateTime } from 'luxon';

@Pipe({
  name: 'relativeDateTime'
})
export class RelativeDateTimePipe implements PipeTransform {

  transform(value: DateTime | null, ...args: any[]): any {
    return value ? value.toRelative() : null;
  }

}
