import { Pipe, PipeTransform } from '@angular/core';
var marked = require('marked')

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false,
  xhtml: false
});

@Pipe({
  name: 'marked'
})
export class MarkedPipe implements PipeTransform {


  transform(value: any, args?: any): any {
    return marked(value);
  }

}
