
/**
 * @info
 * Esto usa tipos genericos
 * Mapper se utiliza para garantizar que cada capa no dependa directamente de los detalles de implementacion de cada capa
 */
export abstract class Mapper<I, O>{
  abstract mapFrom(params: I): O;
  abstract mapTo(params: O): I
}