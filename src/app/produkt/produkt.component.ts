import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../procuct.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produkt',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produkt.component.html',
  styleUrl: './produkt.component.css'
})
export class ProduktComponent {
  @Input() produkty: Product[] = [];
  @Output() dodanoDoKoszyka = new EventEmitter<number>();
  
  dodajDoKoszyka(produkt: Product) {
    produkt.liczbaWSztukach! += 1;
    this.dodanoDoKoszyka.emit(produkt.cena);
  }
}
