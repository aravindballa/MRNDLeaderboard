import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "sort"
})
export class SorterPipe implements PipeTransform {
  transform(array: Array<any>, args: any): Array<any> {
    if( array ) {
      const order = this.setOrder(args[0]);
      array.sort((a: any, b: any) => {
        if ( this.calculateTotal(args[1][a].marks) < this.calculateTotal(args[1][b].marks) ) {
          return order;
        } else if ( this.calculateTotal(args[1][a].marks) > this.calculateTotal(args[1][b].marks) ) {
          return -order;
        } else {
          return 0;
        }
      });
    }
    return array;
  }

  private setOrder(args) {
    let order;
    args === 'asc' ? order = 1 : order = -1;
    return order;
  }

  private calculateTotal(marks) {
    let total = 0;
    for(let i=0; i < marks.length; i++) {
      total += marks[i];
    }
    return total;
  }

}
