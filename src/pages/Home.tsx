import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { calcularIMC, classificarIMC } from '../utils/imc'

export default function Home() {
  const [sexo, setSexo] = useState('')
  const [idade, setIdade] = useState<number | ''>('') 
  const [altura, setAltura] = useState<number | ''>('') 
  const [peso, setPeso] = useState<number | ''>('') 

  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!sexo || idade === '' || peso === '' || altura === '') return

    const alturaNum = altura as number
    const pesoNum = peso as number
    const idadeNum = idade as number

    const imc = calcularIMC(pesoNum, alturaNum)
    const classificacao = classificarIMC(imc, sexo as 'masculino' | 'feminino', idadeNum)
    
    const pesoMinIdeal = parseFloat((18.5 * alturaNum * alturaNum).toFixed(1))
    const pesoMaxIdeal = parseFloat((24.9 * alturaNum * alturaNum).toFixed(1))

    navigate(`/${classificacao}`, {
      state: {
        imc,
        pesoMinIdeal,
        pesoMaxIdeal
      }
    })
  }

  return (
    <div className="container mt-5">
      <h4 className="text-center mb-4 fw-semibold">
        Coloque os seus dados na calculadora e calcule o seu IMC:
      </h4>

      <div className="row align-items-start">
        <div className="col-md-3 d-none d-md-block">
          <h5 className="fw-bold">Calculadora de IMC (e peso ideal)</h5>
          <p>
            A classificação do índice de massa corporal (IMC) pode ajudar a identificar problemas de obesidade ou desnutrição, em crianças, adolescentes, adultos e idosos. Além de calcular o valor de IMC, esta calculadora também indica qual o intervalo de peso ideal que deve ter para garantir uma melhor qualidade de vida. Ter um peso dentro do intervalo de peso ideal ajuda ainda a evitar o aparecimento de várias doenças crônicas, como diabetes e hipertensão.
          </p>
        </div>

        <div className="col-md-6">
          <div
            className="card shadow mx-auto"
            style={{
              maxWidth: '500px',
              boxShadow: '0 4px 12px rgba(144, 238, 144, 0.6)',
            }}
          >
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Calculadora de IMC</h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label d-block">Sexo:</label>
                  <div className="btn-group" role="group">
                    <input
                      type="radio"
                      className="btn-check"
                      name="sexo"
                      id="masculino"
                      value="masculino"
                      checked={sexo === 'masculino'}
                      onChange={e => setSexo(e.target.value)}
                      required
                    />
                    <label className="btn btn-outline-primary" htmlFor="masculino">
                      Masculino
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="sexo"
                      id="feminino"
                      value="feminino"
                      checked={sexo === 'feminino'}
                      onChange={e => setSexo(e.target.value)}
                      required
                    />
                    <label
                      className="btn"
                      htmlFor="feminino"
                      style={{
                        border: '1px solid #f06292',
                        color: sexo === 'feminino' ? 'white' : '#f06292',
                        backgroundColor: sexo === 'feminino' ? '#f06292' : 'transparent',
                      }}
                    >
                      Feminino
                    </label>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Idade:</label>
                  <input
                    type="number"
                    className="form-control"
                    value={idade}
                    onChange={e => setIdade(Number(e.target.value))}
                    required
                    min={1}
                    placeholder="Ex: 25"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Altura (m):</label>
                  <input
                    type="number"
                    className="form-control"
                    step="0.01"
                    value={altura}
                    onChange={e => setAltura(Number(e.target.value))}
                    required
                    min={0.5}
                    placeholder="Ex: 1,75"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Peso (kg):</label>
                  <input
                    type="number"
                    className="form-control"
                    value={peso}
                    onChange={e => setPeso(Number(e.target.value))}
                    required
                    min={1}
                    placeholder="Ex: 70"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-success w-100"
                  style={{
                    boxShadow: '0 4px 6px rgba(0, 128, 0, 0.4)',
                    transition: 'all 0.2s',
                  }}
                  onMouseDown={(e) => {
                    (e.target as HTMLButtonElement).style.transform = 'scale(0.97)'
                  }}
                  onMouseUp={(e) => {
                    (e.target as HTMLButtonElement).style.transform = 'scale(1)'
                  }}
                >
                  Calcular
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-3 d-none d-md-block">
          <h5 className="fw-bold">Como é feito o cálculo de IMC</h5>
          <p>
            O IMC é calculado dividindo o peso (em kg) pela altura ao quadrado (em m), de acordo com a seguinte fórmula: IMC = peso / (altura x altura). O resultado de IMC é dado em kg/m2.
          </p>
        </div>
      </div>
    </div>
  )
}
