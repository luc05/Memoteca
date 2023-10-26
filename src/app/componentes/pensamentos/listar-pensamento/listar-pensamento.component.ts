import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent {
  listaPensamentos = [
    {
      conteudo: "Passo informações para componente filho",
      autoria: "Componente pai",
      modelo: "modelo1"
    },
    {
      conteudo: "Minha propriedade é decorada com @Input",
      autoria: "Componente filho",
      modelo: "modelo2"
    },
    {
      conteudo: "Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor " +
      "ut, iaculis quis, sem. Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar. Vestibulum fermentum tortor id mi." +
      "ut, iaculis quis, sem. Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar. Vestibulum fermentum tortor id mi.",
      autoria: "",
      modelo: "modelo3"
    }
    // Ctrl + K + C comentar linhas
    // Ctrl + k + u descomentar
  ];
}
