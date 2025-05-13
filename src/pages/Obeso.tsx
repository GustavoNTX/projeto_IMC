import { Link } from 'react-router-dom';

export default function Obeso() {
  return (
    <div className="container my-4" style={{ maxWidth: '600px' }}>
      <div className="text-center mb-4">
        <h2 className="fw-bold" style={{ color: '#2c3e50', fontSize: '1.8rem' }}>Resultado:</h2>
        <h3 className="fw-bold mb-3" style={{ color: '#e74c3c', fontSize: '1.5rem' }}>SEU IMC É DE 33,5 KG/M²</h3>
        <p className="lead" style={{ color: '#c0392b' }}>Classificação: OBESIDADE</p>
      </div>

      <div className="row justify-content-center mb-4">
        <div className="col-12">
          <div className="d-flex justify-content-around align-items-center bg-light p-3 rounded">
            <div className="text-center">
              <h4 className="fw-bold" style={{ color: '#2c3e50' }}>IMC</h4>
              <p className="mb-0">30,0 ou mais</p>
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
          <h4 className="fw-bold mb-3" style={{ color: '#e74c3c' }}>OBESIDADE</h4>
          <p className="card-text mb-3">
            De acordo com a Organização Mundial da Saúde, seu IMC está acima do recomendado para a sua altura.
            Para atingir um valor de IMC normal, seu peso deve estar entre <strong>61,5 kg e 82,5 kg</strong>.
          </p>
          <p className="card-text text-muted">
            OBS: O cálculo de IMC não leva em consideração a composição corporal. Por esse motivo, pessoas com muita massa muscular podem apresentar um IMC acima do normal.
          </p>
        </div>
      </div>

      <div className="alert alert-danger text-center mb-4" role="alert" 
           style={{ backgroundColor: '#fdedec', borderLeft: '4px solid #e74c3c' }}>
        <div className="d-flex align-items-center justify-content-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            fill="#e74c3c" 
            className="bi bi-exclamation-triangle-fill me-2" 
            viewBox="0 0 16 16"
          >
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
          </svg>
          <div>
            <h5 className="fw-bold mb-2" style={{ color: '#e74c3c' }}>RECOMENDAÇÃO MÉDICA</h5>
            <p className="mb-0">É importante procurar um médico para fazer uma avaliação detalhada e receber orientações adequadas.</p>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <Link 
          to="/" 
          className="btn btn-lg" 
          style={{ 
            backgroundColor: '#e74c3c', 
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
  );
}