import { Component, Input } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent {
  @Input() pensamento: Pensamento = {
    conteudo: "",
    autoria: "",
    modelo: "modelo1",
    favorito: false
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256){
      return "pensamento-g"
    }else{
      return "pensamento-p"
    }
  }

  mudarIconeFavorito(): string {
    debugger
    if(this.pensamento.favorito == false){
      return "inativo"
    }
    return "ativo"
  }
}
