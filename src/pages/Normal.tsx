import { Link, useLocation } from 'react-router-dom';
import normal from '../assets/normal.jpeg';

export default function Normal() {
  const location = useLocation();
  const { imc, pesoMinIdeal, pesoMaxIdeal } = location.state || {};

  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-4 text-center mb-4 mb-md-0">
          <h4 className="fw-bold" style={{ color: '#2ecc71' }}>
            SEU IMC É DE {imc?.toFixed(1) ?? '--'} KG/M²
          </h4>
          <div className="bg-light border border-success rounded p-3 mt-3">
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
              <h4 className="fw-bold mb-3" style={{ color: '#27ae60' }}>NORMAL</h4>
              <p>
                De acordo com a Organização Mundial da Saúde, seu IMC é considerado normal para a sua altura.
                Seu peso pode variar entre <strong>{pesoMinIdeal} kg e {pesoMaxIdeal} kg</strong> mantendo-se saudável.
              </p>
              <p className="text-muted">
                OBS: O cálculo de IMC não leva em consideração a composição corporal. Por esse motivo, pessoas com muita massa muscular podem apresentar um IMC acima do normal.
              </p>
            </div>
          </div>

          <div
            className="alert alert-success text-center"
            role="alert"
            style={{ backgroundColor: '#e8f5e9', borderLeft: '4px solid #2ecc71' }}
          >
            <i className="bi bi-check-circle-fill me-2" style={{ color: '#27ae60', fontSize: '1.5rem' }}></i>
            <strong>PARABÉNS!</strong>
            <p className="mb-0">Você está dentro do peso ideal. Continue cuidando da saúde com alimentação equilibrada e exercícios regulares.</p>
          </div>
        </div>

        <div className="col-md-4 text-center">
          <img
            src={normal}
            alt="Classificação Normal"
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
  );
}
