import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="row">
        <div className="left-header col-md-6 col-sm-12"><h4>Company name</h4></div>

        <div className="right-header d-f col-md-6 d-flex justify-content-end">
          <ul className="d-flex justify-content-end">
            <li><a href="#" className="p-3 text-dark">Features</a></li>
            <li><a href="#" className="p-3 text-dark">Enterprise</a></li>
            <li><a href="#" className="p-3 text-dark">Support</a></li>
            <li><a href="#" className="p-3 text-dark">Pricing</a></li>
            <a href="#"><button className="btn btn-outline-primary">Sign up</button></a>
          </ul>
        </div>
      </header>

      <section>
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 className="container-title">Pricing</h1>
            <p className="lead">
            Quickly build an effective pricing table for your potential 
            customers <br /> with this Bootstrap example. It's built with default 
            Bootstrap <br /> components and utilities with little customization.
            </p>
        </div>
      </section>
      <div className="container d-flex justify-content-between">
        <div className="card-deck mb-3 text-center">
          <div className="card mb-4 box-shadow">
            <div className="card-header p-3 h4">
              Free
            </div>
            <div className="card-body">
              <div className="card-title d-flex justify-content-center align-items-end">
                <h1>$0</h1><h2 className="text-muted">/mo</h2>
              </div>
              <ul className="list-unstyled mt-3 mb-4">
                <li>10 users included</li>
                <li>2 GB of storage</li>
                <li>Email support</li>
                <li>Help center access</li>
              </ul>
              <button className="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
            </div>
          </div>
        </div>

        <div className="card-deck mb-3 text-center">
          <div className="card mb-4 box-shadow">
            <div className="card-header p-3 h4">
              Pro
            </div>
            <div className="card-body">
              <div className="card-title d-flex justify-content-center align-items-end">
                <h1>$15</h1><h2 className="text-muted">/mo</h2>
              </div>
              <ul className="list-unstyled mt-3 mb-4">
                <li>20 users included</li>
                <li>10 GB of storage</li>
                <li>Priority email support</li>
                <li>Help center access</li>
              </ul>
              <button className="btn btn-lg btn-block btn-primary">Get started</button>
            </div>
          </div>
        </div>

        <div className="card-deck mb-3 text-center">
          <div className="card mb-4 box-shadow">
            <div className="card-header p-3 h4">
              Enterprice
            </div>
            <div className="card-body">
              <div className="card-title d-flex justify-content-center align-items-end">
                <h1>$29</h1><h2 className="text-muted">/mo</h2>
              </div>
              <ul className="list-unstyled mt-3 mb-4">
                <li>30 users included</li>
                <li>15 GB of storage</li>
                <li>Phone and email support</li>
                <li>Help center access</li>
              </ul>
              <button className="btn btn-lg btn-block btn-primary">Contact us</button>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="pt-4 my-md-5 pt-md-5 border-top footer">
        <div className="row">
          <div className="col-12 col-md">
            <img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"className="mb-2" />
            <small className="d-block mb-3 text-muted">© 2017-2018</small>
          </div>

          <div className="col-6 col-md">
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
            <li><a class="text-muted" href="#">Cool stuff</a></li>
              <li><a class="text-muted" href="#">Random feature</a></li>
              <li><a class="text-muted" href="#">Team feature</a></li>
              <li><a class="text-muted" href="#">Stuff for developers</a></li>
              <li><a class="text-muted" href="#">Another one</a></li>
              <li><a class="text-muted" href="#">Last time</a></li>
            </ul>
          </div>
          
          <div class="col-6 col-md">
            <h5>Resources</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="#">Resource</a></li>
              <li><a class="text-muted" href="#">Resource name</a></li>
              <li><a class="text-muted" href="#">Another resource</a></li>
              <li><a class="text-muted" href="#">Final resource</a></li>
            </ul>
          </div>
          
          <div class="col-6 col-md">
            <h5>About</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="#">Team</a></li>
              <li><a class="text-muted" href="#">Locations</a></li>
              <li><a class="text-muted" href="#">Privacy</a></li>
              <li><a class="text-muted" href="#">Terms</a></li>
            </ul>
          </div>

        </div>
      </footer>

    </div>
  );
}

export default App;
