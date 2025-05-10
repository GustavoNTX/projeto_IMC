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

    // Verificação básica
    if (!sexo || idade === '' || peso === '' || altura === '') return

    const imc = calcularIMC(peso, altura)
    const classificacao = classificarIMC(imc, sexo as 'masculino' | 'feminino', idade as number)

    navigate(`/${classificacao}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Calculadora de IMC</h1>

      <label>
        Sexo:
        <select value={sexo} onChange={e => setSexo(e.target.value)} required>
          <option value="">Selecione</option>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
        </select>
      </label>

      <label>
        Idade:
        <input
          type="number"
          value={idade}
          onChange={e => setIdade(Number(e.target.value))}
          required
          min={1}
        />
      </label>

      <label>
        Altura (m):
        <input
          type="number"
          step="0.01"
          value={altura}
          onChange={e => setAltura(Number(e.target.value))}
          required
          min={0.5}
        />
      </label>

      <label>
        Peso (kg):
        <input
          type="number"
          value={peso}
          onChange={e => setPeso(Number(e.target.value))}
          required
          min={1}
        />
      </label>

      <button type="submit">Calcular</button>
    </form>
  )
}
