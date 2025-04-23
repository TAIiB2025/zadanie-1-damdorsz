import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProduktComponent } from './produkt/produkt.component';
import { CommonModule } from '@angular/common';
import { KoszykComponent } from './koszyk/koszyk.component';
import { Product } from './procuct.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,KoszykComponent, ProduktComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taiib_zadanie';
  wartoscKoszyka: number = 0;
  pokazProdukty: boolean = true;

  produkty: Product[] = [
      { nazwa: 'Ananas', cena: 20.00, dataUtworzenia: new Date('2001-09-30'), czyPromocja: true, liczbaWSztukach: 0 },
      { nazwa: 'Sanki', cena: 35.50, dataUtworzenia: new Date('2020-01-01'), czyPromocja: false, liczbaWSztukach: 0 },
      { nazwa: 'Portfel', cena: 45.00, dataUtworzenia: new Date('2018-05-15'), czyPromocja: false, liczbaWSztukach: 0 },
      { nazwa: 'Dinozaur', cena: 60.00, dataUtworzenia: new Date('2017-12-24'), czyPromocja: true, liczbaWSztukach: 0 },
      { nazwa: 'Klej', cena: 29.99, dataUtworzenia: new Date('2023-07-20'), czyPromocja: false, liczbaWSztukach: 0 },
    ];

  aktualizujKoszyk(cena: number) {
    this.wartoscKoszyka += cena;
  }

  przelaczWidocznoscProduktow() {
    this.pokazProdukty = !this.pokazProdukty;
  }

  zerujKoszyk() {
    this.wartoscKoszyka = 0;
    this.produkty.forEach(produkt => produkt.liczbaWSztukach = 0); 
  }
}
