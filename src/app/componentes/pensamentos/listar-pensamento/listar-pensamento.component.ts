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

  listaPensamentos : Pensamento[] = [];
  paginaAtual: number = 1;

  constructor(private service: PensamentoService){}

  ngOnInit(): void{
    this.service.listar(this.paginaAtual).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })
  }
}
