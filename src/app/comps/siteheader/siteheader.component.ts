import { Component } from '@angular/core';
import { headerData } from 'src/data/headerfooter';

@Component({
  selector: 'app-siteheader',
  templateUrl: './siteheader.component.html',
  styleUrls: ['./siteheader.component.css']
})
export class SiteheaderComponent {
  data = headerData;
}
