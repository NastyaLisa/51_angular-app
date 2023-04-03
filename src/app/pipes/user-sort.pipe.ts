import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userSort'
})
export class UserSortPipe implements PipeTransform {

  transform(users: any[]): any[] {
    if (!users || users.length <= 1) {
      return users;
    }

    return users.sort((a: any, b: any) => {
      return a.name.localeCompare(b.name);
    });

  }
}
