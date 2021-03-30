
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1 className="text">CALCULATOR</h1>
      </div>
      <div className="cal__body">
        <div className="cal__content">
          <div className="format__cal">
            <p className="inside__font">Enter the numbers</p>
            <div className="input_box">
              <br /><br />
              <input type="text" className="style_input" placeholder="number 1" />
              <br />
              <input type="text" className="style_input" placeholder="number 2" />
              <br />
              <button className="style_button">Sum</button>

              <div>
                <hr className="hr__style" />
              </div>
              <div className="result__show">
                <p className="inside__font">Results</p>
              </div>
              <div>
                <input type="text" placeholder="1523" className="style_input_result" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
