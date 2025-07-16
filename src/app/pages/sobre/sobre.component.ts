import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit, OnDestroy {
  private intervalId: any;
  imagens: string[] = ['/img/whey.jpg', '/img/creatina.jpg', '/img/vitamina.jpg'];
  imagemAtual = 0;

  ngOnInit(): void {
    this.iniciarCarrossel();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private iniciarCarrossel(): void {
    this.intervalId = setInterval(() => {
      this.imagemAtual = (this.imagemAtual + 1) % this.imagens.length;
    }, 3000);
  }

  get imagemExibida(): string {
    return this.imagens[this.imagemAtual];
  }
}
