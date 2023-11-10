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
  filtroMensagem: string = "";
  favoritos: boolean = false;
  listaFavoritos: Pensamento[] = [];
  titulo: string = "Meu Mural"

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro, this.filtroMensagem, this.favoritos).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })
    this.verificarSeTodosPensamentosJaEstaoSendoExibidos()
  }

  carregarMaisPensamentos() {
    this.service.listar(++this.paginaAtual, this.filtro, this.filtroMensagem, this.favoritos)
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
    this.titulo = "Meu Mural";
    this.mostrarBotaoCarregarMaisPensamentos = true;
    this.paginaAtual = 1;
    this.haMaisPensamentos = true;
    this.favoritos = false;
    this.service.listar(this.paginaAtual, this.filtro, this.filtroMensagem, this.favoritos).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })
  }

  pesquisarPorMensagem(){
    this.paginaAtual = 1;
    this.mostrarBotaoCarregarMaisPensamentos = true;
    this.haMaisPensamentos = true;
    this.service.listar(this.paginaAtual, this.filtro, this.filtroMensagem, this.favoritos).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })
  }
  filtrarFavoritos(){
    this.titulo = "Meu Mural de Favoritos";
    var paginaAtual = 1;
    this.paginaAtual = paginaAtual;
    this.haMaisPensamentos = true;
    this.mostrarBotaoCarregarMaisPensamentos = true;
    this.favoritos = true;
    this.service.listar(paginaAtual, this.filtro, this.filtroMensagem, this.favoritos).subscribe((listaPensamentosFavoritos) => {
      this.listaPensamentos = listaPensamentosFavoritos
      this.listaFavoritos = listaPensamentosFavoritos
    })
  }
}
