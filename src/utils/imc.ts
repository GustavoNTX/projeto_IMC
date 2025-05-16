export function calcularIMC(peso: number, altura: number): number {
  if (peso <= 0 || altura <= 0) return 0
  const imc = peso / (altura * altura)
  return parseFloat(imc.toFixed(2))
}

type Sexo = 'masculino' | 'feminino'

export function classificarIMC(imc: number, sexo: Sexo, idade: number): 'magro' | 'normal' | 'obeso' {
  let limiteMagro = 0
  let limiteNormal = 0

  if (sexo === 'masculino') {
    if (idade <= 24) {
      limiteMagro = 20
      limiteNormal = 25
    } else if (idade <= 34) {
      limiteMagro = 21
      limiteNormal = 26
    } else if (idade <= 44) {
      limiteMagro = 22
      limiteNormal = 27
    } else {
      limiteMagro = 23
      limiteNormal = 28
    }
  } else if (sexo === 'feminino') {
    if (idade <= 24) {
      limiteMagro = 19
      limiteNormal = 24
    } else if (idade <= 34) {
      limiteMagro = 20
      limiteNormal = 25
    } else if (idade <= 44) {
      limiteMagro = 21
      limiteNormal = 26
    } else {
      limiteMagro = 22
      limiteNormal = 27
    }
  }

  if (imc < limiteMagro) return 'magro'
  if (imc <= limiteNormal) return 'normal'
  return 'obeso'
}
