import { Link, useLocation } from 'react-router-dom';
import magreza from '../assets/magreza.jpeg';

export default function Magro() {
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

        <div className="col-md-4 mb-4">
          <div className="bg-light rounded p-3 mb-3">
            <p style={{ color: '#27ae60' }}>
              De acordo com a Organização Mundial da Saúde, seu IMC está abaixo do recomendado para a sua altura.
              Para atingir um valor de IMC normal, seu peso deve estar entre{' '}
              <strong>{pesoMinIdeal} kg e {pesoMaxIdeal} kg</strong>.
            </p>
          </div>

          <div className="text-muted" style={{ fontSize: '0.9rem' }}>
            OBS*: o cálculo de IMC não leva em consideração a composição corporal. Por esse motivo, pessoas com muita massa muscular, como é o caso de alguns atletas, podem apresentar um IMC acima do normal. O ideal é consultar um nutricionista para fazer uma avaliação mais detalhada.
          </div>

          <div
            className="alert alert-warning text-center mt-4"
            role="alert"
            style={{ backgroundColor: '#f8f9fa', borderLeft: '4px solid #f39c12' }}
          >
            <div className="d-flex align-items-center justify-content-center">
              <i className="bi bi-exclamation-triangle-fill me-2" style={{ color: '#e74c3c', fontSize: '1.5rem' }}></i>
              <div>
                <h5 className="fw-bold mb-1" style={{ color: '#e74c3c' }}>PROCURE UM MÉDICO</h5>
                <p className="mb-0">Consulte um nutricionista para uma avaliação detalhada.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-3">
            <Link
              to="/"
              className="btn btn-lg"
              style={{
                backgroundColor: '#e74c3c',
                color: 'white',
                padding: '10px 30px',
                borderRadius: '5px',
                textDecoration: 'none',
              }}
            >
              Calcular Novamente
            </Link>
          </div>
        </div>

        <div className="col-md-4 text-center mb-4">
          <img
            src={magreza}
            alt="Silhueta magreza"
            style={{
              width: '100%',
              maxWidth: '250px',
              height: 'auto',
              marginTop: '10px',
            }}
          />
        </div>
      </div>
    </div>
  );
}
