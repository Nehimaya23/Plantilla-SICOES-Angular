import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-accordions',
  templateUrl: './accordions.component.html',
  styleUrls: ['./accordions.component.scss']
})
export class AccordionsComponent {

  items = [1, 2, 3, 4];

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  getAccordionBodyText(value: string) {
    const textSample = `
     
    `;
    return this.sanitizer.bypassSecurityTrustHtml(textSample);
  }
}
