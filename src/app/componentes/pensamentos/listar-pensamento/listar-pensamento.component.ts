import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
// Ctrl + K + C comentar linhas
// Ctrl + k + u descomentar
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;
  totDePensamentosNaBase: number = 0;
  mostrarBotaoCarregarMaisPensamentos: boolean = true;
  filtro: string = "";

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })
    this.verificarSeTodosPensamentosJaEstaoSendoExibidos()
  }

  carregarMaisPensamentos() {
    this.service.listar(++this.paginaAtual, this.filtro)
      .subscribe(listaPensamentos => {
        this.listaPensamentos.push(...listaPensamentos);
        if (!listaPensamentos.length) {
          this.haMaisPensamentos = false
        }
        this.verificarSeTodosPensamentosJaEstaoSendoExibidos();
      })
  }

  private verificarSeTodosPensamentosJaEstaoSendoExibidos() {
    this.service.obterTotalDePensamentosNaBase().subscribe((listaTotPensamentos) => {
      this.totDePensamentosNaBase = listaTotPensamentos.length;
      this.mostrarBotaoCarregarMaisPensamentos = this.totDePensamentosNaBase > this.listaPensamentos.length ? true : false;
    });
  }

  pesquisarPensamentos() {
    var paginaAtual = 1;
    this.haMaisPensamentos = true;
    this.service.listar(paginaAtual, this.filtro).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })
  }
}
