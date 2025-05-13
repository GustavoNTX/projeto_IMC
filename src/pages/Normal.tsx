import { Link } from 'react-router-dom'

export default function Normal() {
  return (
    <div className="container my-4" style={{ maxWidth: '600px' }}>
      <div className="text-center mb-4">
        <h2 className="fw-bold" style={{ color: '#2c3e50', fontSize: '1.8rem' }}>Resultado:</h2>
        <h3 className="fw-bold mb-3" style={{ color: '#2ecc71', fontSize: '1.5rem' }}>SEU IMC É DE 22,0 KG/M²</h3>
        <p className="lead" style={{ color: '#27ae60' }}>Classificação: NORMAL</p>
      </div>

      <div className="row justify-content-center mb-4">
        <div className="col-12">
          <div className="d-flex justify-content-around align-items-center bg-light p-3 rounded">
            <div className="text-center">
              <h4 className="fw-bold" style={{ color: '#2c3e50' }}>IMC</h4>
              <p className="mb-0">18,5 - 24,9</p>
            </div>
            <div className="text-center">
              <h4 className="fw-bold" style={{ color: '#2c3e50' }}>PESO IDEAL</h4>
              <p className="mb-0">61,5 - 82,5 kg</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-4 border-0 shadow-sm">
        <div className="card-body p-4">
          <h4 className="fw-bold mb-3" style={{ color: '#27ae60' }}>NORMAL</h4>
          <p className="card-text mb-3">
            De acordo com a Organização Mundial da Saúde, seu IMC é considerado normal para a sua altura.
            Seu peso pode variar entre <strong>61,5 kg e 82,5 kg</strong> mantendo-se saudável.
          </p>
          <p className="card-text text-muted">
            OBS: O cálculo de IMC não leva em consideração a composição corporal. Por esse motivo, pessoas com muita massa muscular podem apresentar um IMC acima do normal.
          </p>
        </div>
      </div>

      <div className="alert alert-success text-center mb-4" role="alert" 
           style={{ backgroundColor: '#e8f5e9', borderLeft: '4px solid #2ecc71' }}>
        <div className="d-flex align-items-center justify-content-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            fill="#27ae60" 
            className="bi bi-check-circle-fill me-2" 
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
          </svg>
          <div>
            <h5 className="fw-bold mb-2" style={{ color: '#27ae60' }}>PARABÉNS!</h5>
            <p className="mb-0">Você está dentro do peso ideal. Continue cuidando da saúde com alimentação equilibrada e exercícios regulares.</p>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <Link 
          to="/" 
          className="btn btn-lg" 
          style={{ 
            backgroundColor: '#2ecc71', 
            color: 'white',
            padding: '10px 30px',
            borderRadius: '5px',
            textDecoration: 'none'
          }}
        >
          Voltar à Calculadora
        </Link>
      </div>
    </div>
  )
}