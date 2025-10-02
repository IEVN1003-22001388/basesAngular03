export class CalcularResistencia {
  static calcular(
    banda1: number,
    banda2: number,
    banda3: number,
    tolerancia: number
  ) {
    const base = banda1 * 10 + banda2;
    const valorBase = base * banda3;
    const valorMax = valorBase + valorBase * tolerancia;
    const valorMin = valorBase - valorBase * tolerancia;

    return {
      valorBase,
      valorMax,
      valorMin
    };
  }
}