import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser'
var marked = require('marked')

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});

@Pipe({
  name: 'marked'
})



export class MarkedPipe implements PipeTransform {
 
  constructor(protected _sanitizer: DomSanitizer) {

	}

  transform(value: any, args?: any): any {
    return this._sanitizer.bypassSecurityTrustHtml(marked(value));
  }

}
