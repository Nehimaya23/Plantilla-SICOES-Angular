import { Component } from '@angular/core';

import { navItems } from './_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent {

  public navItems = navItems;

  constructor() {}
}


// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './default-layout2.component.html',
//   styleUrls: ['./default-layout2.component.scss'],
// })
// export class DefaultLayout2Component {

//   public navItems = navItems;

//   constructor() {}
// }
