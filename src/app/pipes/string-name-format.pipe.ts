import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'nameFormat'
})

export class StringNameFormatPipe implements PipeTransform {
  transform(str: string): string {
    return str
      .trim()
      .split(" ")
      .map(el => el.charAt(0).toUpperCase() + el.substr(1).toLowerCase())
      .join(" ")
  }
}
