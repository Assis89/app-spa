import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProdutosService, Produto } from '../../services/produtos.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  /** Lista de produtos vinda do service para exibir nos cards */
  produtos: Produto[] = [];

  constructor(private produtosSvc: ProdutosService) {}

  /** Ao iniciar o componente, obtém os produtos uma única vez */
  ngOnInit(): void {
    this.produtos = this.produtosSvc.getProdutos();
  }
}
