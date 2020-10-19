import { NgModule } from '@angular/core';
import { HighlightDirective } from './highlight.directive';
import { HIGHLIGHT_OPTIONS, HighlightOptions } from './highlight.model';
/**
 * Import every language you wish to highlight here
 * NOTE: The name of each language must match the file name its imported from
 */
import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';
import { HighlightService } from './highlight.service';

/**
 * Import every language you wish to highlight here
 * NOTE: The name of each language must match the file name its imported from
 */
export function hljsLanguages() {
  return [
    { name: 'typescript', func: typescript },
    { name: 'scss', func: scss },
    { name: 'xml', func: xml }
  ];
}

@NgModule({
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        languages: hljsLanguages
      } as HighlightOptions
    },
    HighlightService
  ],
  declarations: [HighlightDirective],
  imports: [],
  exports: [HighlightDirective],
})
export class HighlightModule {
}
