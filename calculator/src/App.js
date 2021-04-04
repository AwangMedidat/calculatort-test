import './App.css';
import React,{useState} from 'react'
import Swal from 'sweetalert2'

function App() {

  const [result, setResult] = useState(0)
  const [check1, setCheck1] = useState(false)
  const [number, setNumber] = useState({
    number1: 0,
    number2: 0,
    number3: 0
  })
  
  const changeNumber = (evt) => {
    setNumber({ ...number, [evt.target.name]: evt.target.value });
  }

  const changeCheck1 = (evt) => {
    console.log(evt.target.name)
    setCheck1(true)
  }

      const hitung = (e) => {
        e.preventDefault()
        console.log(check1, 'ini btn')
        // setCheck1(false)
        if (check1){
          if (e.target.name === 'plus'){
            console.log(number.number2)
            setResult({result: Number(number.number1) + Number(number.number2) + Number(number.number3)})
            setCheck1(false)
          } else if (e.target.name === 'minus') {
            setResult({result: Number(number.number1) - Number(number.number2) - Number(number.number3)})
            setCheck1(false)
          } else if (e.target.name === 'multiple') {
            setResult({result: Number(number.number1) * Number(number.number2) * Number(number.number3)})
            setCheck1(false)
          } else  {
            setResult({result: Number(number.number1) / Number(number.number2) / Number(number.number3)})
            setCheck1(false)
          }
        } else if (!check1) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Cannot be Count'
          })
        }
  }

  return (
    <div>
      <div className="container" style={{ width: '30rem', marginTop: '100px' }}>
        <h1 style={{ paddingBottom: '30px', textAlign: 'center', color: 'white' }}>Calculator Test</h1>
        <div className="card" style={{backgroundColor: 'grey'}}>
          <div className="card-body">
            <form>
              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline">
                    <input type="text" id="form3Example1" className="form-control" placeholder="First Number" style={{width: '350px'}} onChange={changeNumber} name="number1"/>
                  </div>
                </div>
                <div className="col">
                  <div className="form-check">
                    <input
                      style={{width: '35px', height: '35px'}}
                      className="form-check-input"
                      type="checkbox"
                      value={check1}
                      name="check1"
                      id="form1Example3"
                      onChange={changeCheck1}
                    />
                  </div>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline">
                    <input type="text" id="form3Example1" className="form-control" placeholder="Second Number" style={{width: '350px'}} onChange={changeNumber} name="number2"/>
                  </div>
                </div>
                <div className="col">
                  <div className="form-check">
                    <input
                      style={{width: '35px', height: '35px'}}
                      className="form-check-input"
                      type="checkbox"
                      value={check1}
                      name="check2"
                      id="form1Example3"
                      onChange={changeCheck1}
                    />
                  </div>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline">
                    <input type="text" id="form3Example1" className="form-control" placeholder="Third Number" style={{width: '350px'}} onChange={changeNumber} name="number3"/>
                  </div>
                </div>
                <div className="col">
                  <div className="form-check">
                    <input
                      style={{width: '35px', height: '35px'}}
                      className="form-check-input"
                      type="checkbox"
                      value={check1}
                      name="check3"
                      id="form1Example3"
                      onChange={changeCheck1}
                    />
                  </div>
                </div>
              </div>
              <center> 
              <button type="submit" className="btn btn-primary" name="plus" style={{margin: '10px', width: '70px', height: '40px', borderRadius: '15px'}} onClick={hitung}>+</button>
              <button type="submit" className="btn btn-danger" name="minus" style={{margin: '10px', width: '70px', height: '40px', borderRadius: '15px'}} onClick={hitung}>-</button>
              <button type="submit" className="btn btn-warning" name="multiple" style={{margin: '10px', width: '70px', height: '40px', borderRadius: '15px'}} onClick={hitung}>x</button>
              <button type="submit" className="btn btn-success" name="divided" style={{margin: '10px', width: '70px', height: '40px', borderRadius: '15px'}} onClick={hitung}>/</button>
              </center>
              <hr size="10"></hr>
              <h3>Hasil: {JSON.stringify(result.result)}</h3>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
