import { Link } from 'react-router-dom';

export default function Magro() {
  return (
    <div className="container my-4" style={{ maxWidth: '600px' }}>
      <div className="text-center mb-4">
        <h2 className="fw-bold" style={{ color: '#2c3e50', fontSize: '1.8rem' }}>Resultado:</h2>
        <h3 className="fw-bold mb-2" style={{ color: '#e74c3c', fontSize: '1.5rem' }}>SEU IMC É DE 18,5 KG/M²</h3>
        <p className="lead" style={{ color: '#e74c3c' }}>Classificação: MAGREZA</p>
      </div>

      <div className="row justify-content-center mb-4">
        <div className="col-12">
          <div className="d-flex justify-content-around align-items-center bg-light p-3 rounded">
            <div className="text-center">
              <h4 className="fw-bold" style={{ color: '#2c3e50' }}>IMC</h4>
              <p className="mb-0">18,5</p>
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
          <h4 className="fw-bold mb-3" style={{ color: '#e74c3c' }}>MAGREZA</h4>
          <p className="card-text mb-3">
            De acordo com a Organização Mundial da Saúde, seu IMC está abaixo do recomendado para a sua altura.
            Para atingir um valor de IMC normal, seu peso deve estar entre <strong>61,5 kg e 82,5 kg</strong>.
          </p>
          <p className="card-text text-muted">
            OBS: O cálculo de IMC não leva em consideração a composição corporal. Por esse motivo, pessoas com muita massa muscular podem apresentar um IMC acima do normal.
          </p>
        </div>
      </div>

      <div className="alert alert-warning text-center mb-4" role="alert" style={{ backgroundColor: '#f8f9fa', borderLeft: '4px solid #f39c12' }}>
        <div className="d-flex align-items-center justify-content-center">
          <i className="bi bi-exclamation-triangle-fill me-2" style={{ color: '#e74c3c', fontSize: '1.5rem' }}></i>
          <div>
            <h5 className="fw-bold mb-2" style={{ color: '#e74c3c' }}>PROCURE UM MÉDICO</h5>
            <p className="mb-0">O ideal é consultar um nutricionista para fazer uma avaliação detalhada.</p>
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