import React, { useState } from 'react';
import socketIOClient from 'socket.io-client';

const Tips = () => {
  const [objectServer, setObjectServer] = useState({});
  const serverURL = 'http://localhost:4000';

  const socket = socketIOClient(serverURL);
  socket.on('infoEvent', (object) => {
    setObjectServer(object);
  });

  const [email, setEmail] = useState(null);
  const [status, setStatus] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    setStatus(true);

    /*
    fetch('localhost:3001', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(email),
    })
      .then((response) => response.json())
      .then((json) => json);
    */
  }

  return (
    <div className="div-tips">
      {!status && (
        <form className="form-main-page animeLeft" onSubmit={handleSubmit}>
          <h1 className="title-main-page">Registrar Informações</h1>

          <label for="email">
            <span className="span-main-page">
              Confime seu email para receber informações do produto:
            </span>
          </label>
          <input
            className="input-main-page"
            type="email"
            required
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <button className="button-main-page">Enviar</button>
        </form>
      )}

      {status && (
        <div className="container-card-div-tips">
          <div className="animeLeft">
            <div className="div-card-tips">
              <h1>Teste</h1>
              <h3 className="h3-tips">Teste</h3>

              <div className="div-number-tips">
                <p className="number-tips">2.320</p>
                <p className="number-porcent-tips">→ 0.110 (4.966%)</p>
              </div>

              <div className="div-info-tips">
                <p>
                  <strong>Open:</strong> 2.230
                </p>
                <p>
                  <strong>Market CAP:</strong> 93.8M
                </p>
                <p>
                  <strong>High:</strong> 2.325
                </p>
                <p>
                  <strong>P/E ratio:</strong> 20.10
                </p>
                <p>
                  <strong>Low:</strong> 2.215
                </p>
                <p>
                  <strong>Dividend Yeld:</strong> 1.67%
                </p>
              </div>
            </div>
          </div>

          <div className="animeLeft">
            <div className="div-card-tips">
              <h1>Teste</h1>
              <h3 className="h3-tips">Teste</h3>

              <div className="div-number-tips">
                <p className="number-tips">2.320</p>
                <p className="number-porcent-tips">→ 0.110 (4.966%)</p>
              </div>

              <div className="div-info-tips">
                <p>
                  <strong>Open:</strong> 2.230
                </p>
                <p>
                  <strong>Market CAP:</strong> 93.8M
                </p>
                <p>
                  <strong>High:</strong> 2.325
                </p>
                <p>
                  <strong>P/E ratio:</strong> 20.10
                </p>
                <p>
                  <strong>Low:</strong> 2.215
                </p>
                <p>
                  <strong>Dividend Yeld:</strong> 1.67%
                </p>
              </div>
            </div>
          </div>

          <div className="animeLeft">
            <div className="div-card-tips">
              <h1>Teste</h1>
              <h3 className="h3-tips">Teste</h3>

              <div className="div-number-tips">
                <p className="number-tips">2.320</p>
                <p className="number-porcent-tips">→ 0.110 (4.966%)</p>
              </div>

              <div className="div-info-tips">
                <p>
                  <strong>Open:</strong> 2.230
                </p>
                <p>
                  <strong>Market CAP:</strong> 93.8M
                </p>
                <p>
                  <strong>High:</strong> 2.325
                </p>
                <p>
                  <strong>P/E ratio:</strong> 20.10
                </p>
                <p>
                  <strong>Low:</strong> 2.215
                </p>
                <p>
                  <strong>Dividend Yeld:</strong> 1.67%
                </p>
              </div>
            </div>
          </div>

          <div className="animeLeft">
            <div className="div-card-tips">
              <h1>Teste</h1>
              <h3 className="h3-tips">Teste</h3>

              <div className="div-number-tips">
                <p className="number-tips">2.320</p>
                <p className="number-porcent-tips">→ 0.110 (4.966%)</p>
              </div>

              <div className="div-info-tips">
                <p>
                  <strong>Open:</strong> 2.230
                </p>
                <p>
                  <strong>Market CAP:</strong> 93.8M
                </p>
                <p>
                  <strong>High:</strong> 2.325
                </p>
                <p>
                  <strong>P/E ratio:</strong> 20.10
                </p>
                <p>
                  <strong>Low:</strong> 2.215
                </p>
                <p>
                  <strong>Dividend Yeld:</strong> 1.67%
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tips;
