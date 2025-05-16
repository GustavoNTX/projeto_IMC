import { Link, useLocation } from 'react-router-dom';
import obeso from '../assets/obeso.jpeg';
export default function Obeso() {
  const location = useLocation();
  const { imc, pesoMinIdeal, pesoMaxIdeal } = location.state || {};

  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-4 text-center mb-4 mb-md-0">
          <h4 className="fw-bold" style={{ color: '#e74c3c' }}>
            SEU IMC É DE {imc?.toFixed(1) ?? '--'} KG/M²
          </h4>
          <div className="bg-light border border-danger rounded p-3 mt-3">
            <div className="text-center">
              <h5 className="fw-bold" style={{ color: '#2c3e50' }}>IMC</h5>
              <p className="mb-2">{imc?.toFixed(1) ?? '--'}</p>
              <h5 className="fw-bold" style={{ color: '#2c3e50' }}>PESO IDEAL</h5>
              <p className="mb-0">
                {pesoMinIdeal && pesoMaxIdeal ? `${pesoMinIdeal} - ${pesoMaxIdeal} kg` : '--'}
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body text-center">
              <h4 className="fw-bold mb-3" style={{ color: '#e74c3c' }}>OBESIDADE</h4>
              <p>
                De acordo com a Organização Mundial da Saúde, seu IMC está acima do recomendado para a sua altura.
                Para atingir um valor de IMC normal, seu peso deve estar entre <strong>{pesoMinIdeal} kg e {pesoMaxIdeal} kg</strong>.
              </p>
              <p className="text-muted">
                OBS: O cálculo de IMC não leva em consideração a composição corporal. Por esse motivo, pessoas com muita massa muscular podem apresentar um IMC acima do normal.
              </p>
            </div>
          </div>

          <div
            className="alert alert-danger text-center"
            role="alert"
            style={{ backgroundColor: '#fdedec', borderLeft: '4px solid #e74c3c' }}
          >
            <i className="bi bi-exclamation-triangle-fill me-2" style={{ color: '#e74c3c', fontSize: '1.5rem' }}></i>
            <strong>RECOMENDAÇÃO MÉDICA</strong>
            <p className="mb-0">É importante procurar um médico para fazer uma avaliação detalhada e receber orientações adequadas.</p>
          </div>
        </div>

        <div className="col-md-4 text-center">
          <img
            src={obeso}
            alt="Classificação Obesidade"
            className="img-fluid rounded shadow-sm"
            style={{width: '100%',
              maxWidth: '250px',
              height: 'auto',
              marginTop: '10px',
            }}
          />
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
