// src/app/services/produtos.service.ts
import { Injectable } from '@angular/core';

export interface Produto {
  foto: string;
  rotulo: string;
  detalhe: string;
}

@Injectable({
  providedIn: 'root'  // torna o serviço singleton em toda a app
})
export class ProdutosService {

  /** Array fixo de produtos (poderia vir de API futuramente) */
  private readonly produtos: Produto[] = [
    {
      foto: './img/whey.jpg',
      rotulo: 'Whey Protein',
      detalhe: 'Suplemento de proteína concentrada de alto valor biológico.'
    },
    {
      foto: './img/vitamina.jpg',
      rotulo: 'Vitamina A',
      detalhe: 'Auxilia na imunidade e tem ação antioxidante.'
    },
    {
      foto: './img/creatina.jpg',
      rotulo: 'Creatina',
      detalhe: 'Aumenta força e performance em atividades explosivas.'
    }
    // Adicione mais itens se quiser
  ];

  /** Retorna a lista completa de produtos */
  getProdutos(): Produto[] {
    return this.produtos;
  }
}
