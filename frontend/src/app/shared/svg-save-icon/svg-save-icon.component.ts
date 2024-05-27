import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-svg-save-icon',
  templateUrl: './svg-save-icon.component.html',
  styleUrls: ['./svg-save-icon.component.css']
})
export class SvgSaveIconComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    // Note that we provide the icon here as a string literal here due to a limitation in
    // Stackblitz. If you want to provide the icon from a URL, you can use:
    // `iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('icon.svg'));`
    iconRegistry.addSvgIconLiteral('save-icon', sanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#30393e"><path d="M796-663.54v435.23q0 27.01-18.65 45.66Q758.7-164 731.69-164H228.31q-27.01 0-45.66-18.65Q164-201.3 164-228.31v-503.38q0-27.01 18.65-45.66Q201.3-796 228.31-796h435.23L796-663.54ZM744-642 642-744H228.31q-5.39 0-8.85 3.46t-3.46 8.85v503.38q0 5.39 3.46 8.85t8.85 3.46h503.38q5.39 0 8.85-3.46t3.46-8.85V-642ZM480-281.23q36.54 0 62.27-25.73Q568-332.69 568-369.23q0-36.54-25.73-62.27-25.73-25.73-62.27-25.73-36.54 0-62.27 25.73Q392-405.77 392-369.23q0 36.54 25.73 62.27 25.73 25.73 62.27 25.73ZM279.39-556.62h304.45v-123.99H279.39v123.99ZM216-629v413-528 115Z"/></svg>`));
  }

  ngOnInit(): void {
  }

}
