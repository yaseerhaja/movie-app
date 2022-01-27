import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'truncate' })
export class TruncatePipe implements PipeTransform {
  transform(value: string, type: string): string {
    return type === 'less'
      ? value.substring(0, 200)
      : value.substring(0, value.length);
  }
}
