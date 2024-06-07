import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatGridListModule, CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

}
