import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = "http://localhost:3000/pensamentos"

  constructor(private http: HttpClient) { }

  listar(pagina: number, filtro: string, filtroMensagem: string = "", favoritos: boolean): Observable<Pensamento[]> {
    const itensPorPagina = 2;
    let params = new HttpParams()
      .set("_page", pagina)
      .set("_limit", itensPorPagina)

    if (filtro.trim().length > 2) {
      params = params.set("q", filtro)
    }
    if(filtroMensagem.trim().length > 2){
      params = params.set("conteudo", filtroMensagem)
    }
    if(favoritos == true){
      params = params.set("favorito", favoritos)
    }
    return this.http.get<Pensamento[]>(this.API, { params })
  }

  obterTotalDePensamentosNaBase(): Observable<Pensamento[]> {
    return this.http.get<Pensamento[]>(this.API)
  }

  criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API, pensamento)
  }
  excluir(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`
    return this.http.delete<Pensamento>(url)
  }
  editar(pensamento: Pensamento): Observable<Pensamento> {
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<Pensamento>(url, pensamento)
  }
  mudarFavorito(pensamento: Pensamento): Observable<Pensamento>{
    pensamento.favorito = !pensamento.favorito
    return this.editar(pensamento)
  }
  buscarPorId(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`
    return this.http.get<Pensamento>(url)
  }
}
