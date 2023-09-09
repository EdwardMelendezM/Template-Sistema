import { Observable } from "rxjs";
// Usada para la programacion reactiva
// El Observable nos permite trabajar con flujos de datos asincronos de manera mas estructurada y eficiente



/**
 * @info
 * Este modulo es util para definir los caso de usos para representar acciones principales y los flujos de negocio
 */
export interface UseCase<S, T> {
  execute(params: S): Observable<T>
}