import {NavLink} from 'react-router-dom';

function Vexillophile(props) {

  return (
    <div>
      <h1>Flags of Uncommon Shapes</h1>
      <h2>ON SALE - THIS WEEK ONLY</h2>
      <div className="grid">

        <div>
          <div>
            <h3>Belgium</h3>
            {/*<img src="https://www.countryflags.io/be/flat/64.png" alt="Belgium" />*/}
          </div>
          <div>
            <p>Aspect ratio of 13:15</p>
            <div>
              <input maxLength="2"  name="belgium" value={props.amount.belgium} onChange={props.change}  />
              <button onClick={props.subtract}>Subtract</button>
              <button onClick={props.add}>Add</button>
              <button><NavLink to="/cart">Checkout</NavLink></button>
            </div>
          </div>
        </div>


        <div>
          <div>
            <h3>El Salvador</h3>
            {/*<img src="https://www.countryflags.io/sv/flat/64.png" alt="El Salvador" />*/}
          </div>
          <div>
            <p>Aspect ratio of 189:335</p>
            <div>
              <input maxLength="2"  name="elSalvador" value={props.amount.elSalvador} onChange={props.change}  />
              <button onClick={props.subtract}>Subtract</button>
              <button onClick={props.add}>Add</button>
              <button><NavLink to="/cart">Checkout</NavLink></button>
            </div>
          </div>
        </div>

        <div>
          <div>
            <h3>Monaco</h3>
            {/*<img src="https://www.countryflags.io/mc/shiny/64.png" alt="Monaco" />*/}
          </div>
          <div>
            <p>Aspect ratio of 4:5</p>
            <div>
              <input maxLength="2"  name="monaco" value={props.amount.monaco} onChange={props.change}  />
              <button onClick={props.subtract}>Subtract</button>
              <button onClick={props.add}>Add</button>
              <button><NavLink to="/cart">Checkout</NavLink></button>
            </div>
          </div>
        </div>

        <div>
          <div>
            <h3>Nepal</h3>
            {/*<img src="https://www.countryflags.io/np/flat/64.png" alt="Nepal" />*/}
          </div>
          <div>
            <p>The only national flag that is not rectangular</p>
            <div>
              <input maxLength="2"  name="nepal" value={props.amount.nepal} onChange={props.change}  />
              <button onClick={props.subtract}>Subtract</button>
              <button onClick={props.add}>Add</button>
              <button><NavLink to="/cart">Checkout</NavLink></button>
            </div>
          </div>
        </div>

        <div>
          <div>
            <h3>Niger</h3>
            {/*<img src="https://www.countryflags.io/ne/flat/64.png" alt="Niger" />*/}
          </div>
          <div>
            <p>Aspect ratio of 6:7</p>
            <div>
              <input maxLength="2"  name="niger" value={props.amount.niger} onChange={props.change}  />
              <button onClick={props.subtract}>Subtract</button>
              <button onClick={props.add}>Add</button>
              <button><NavLink to="/cart">Checkout</NavLink></button>
            </div>
          </div>
        </div>

        <div>
          <div>
            <h3>Qatar</h3>
            {/*<img src="https://www.countryflags.io/qa/flat/64.png" alt="Qatar" />*/}
          </div>
          <div>
            <p>The largest aspect ratio of any national flag 11:28</p>
            <div>
              <input maxLength="2"  name="qatar" value={props.amount.qatar} onChange={props.change}  />
              <button onClick={props.subtract}>Subtract</button>
              <button onClick={props.add}>Add</button>
              <button><NavLink to="/cart">Checkout</NavLink></button>
            </div>
          </div>
        </div>

        <div>
          <div>
            <h3>Switzerland</h3>
            {/*<img src="https://www.countryflags.io/ch/flat/64.png" alt="Switzerland" />*/}
          </div>
          <div>
            <p>Aspect ratio of 1:1 (Square-shaped)</p>
            <div>
              <input maxLength="2"  name="switzerland" value={props.amount.switzerland} onChange={props.change}  />
              <button onClick={props.subtract}>Subtract</button>
              <button onClick={props.add}>Add</button>
              <button><NavLink to="/cart">Checkout</NavLink></button>
            </div>
          </div>
        </div>


        <div>
          <div>
            <h3>Togo</h3>
            {/*<img src="https://www.countryflags.io/tg/flat/64.png" alt="Togo" />*/}
          </div>
          <div>
            <p>Aspect ratio close to the golden ratio</p>
            <div>
              <input maxLength="2"  name="togo" value={props.amount.togo} onChange={props.change}  />
              <button onClick={props.subtract}>Subtract</button>
              <button onClick={props.add}>Add</button>
              <button><NavLink to="/cart">Checkout</NavLink></button>
            </div>
          </div>
        </div>

        <div>
          <div>
            <h3>Vatican City</h3>
            {/*<img src="https://www.countryflags.io/va/shiny/64.png" alt="Vatican City" />*/}
          </div>
          <div>
            <p>Aspect ratio of 1:1 (Square-shaped)</p>
            <div>
              <input type="number" value={props.amount.vaticanCity} name="vaticanCity" onChange={props.handleChange}/>
              <button onClick={props.subtract}>Subtract</button>
              <button onClick={props.add}>Add</button>
              <button><NavLink to="/cart">Checkout</NavLink></button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Vexillophile;
