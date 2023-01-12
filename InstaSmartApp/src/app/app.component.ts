import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { IProduct } from './products/product';
import { CartitemService } from './shared/cartitem.service';
import { getCartitems } from './state/carts/cart.selectors';
import { State } from './state/carts/cart.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InstaSmartApp';


}
