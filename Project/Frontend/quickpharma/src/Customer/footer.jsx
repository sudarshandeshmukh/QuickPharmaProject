import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './footer.css'

function Footer() {
  return (
    <>
    <div className="container-fluid" id="footer" style={{backgroundColor:'slategray'}}>
      <footer className="page-footer container font-small pt-4">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-4 mt-md-0 mt-3">
              <h5>About Us</h5>
              <hr style={{ display: 'inline-block', width: '50%', backgroundColor: 'white' }} />
              <p>This is a project.</p>
            </div>
            <div className="col-md-2"></div>
            <hr className="clearfix w-100 d-md-none pb-3" />
            <div className="col-md-2 mb-md-0 mb-3">
              <h5 className="text-uppercase">Quick Links</h5>
              <hr style={{ display: 'inline-block', width: '50%', backgroundColor: 'white' }} />
              <ul className="list-unstyled">
                <li>
                  <a href="#!">Home</a>
                </li>
                <li>
                  <a href="#!">Blogs</a>
                </li>
                <li>
                  <a href="#!">Notification</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 mb-md-0 mb-3" id="contact">
              <h5 className="text-uppercase">Contact Us</h5>
              <hr style={{ display: 'inline-block', width: '50%', backgroundColor: 'rgba(25, 25, 25, 0.7)' }} />
              <ul className="list-unstyled">
                <li>
                  <FontAwesomeIcon icon={faPhone} /> 123456
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} /> abc@gmail.com
                </li>
                <li>
                  <FontAwesomeIcon icon={faHome} /> GHRCE, Digdoh Hills, Nagpur - 440001
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row py-4" id="end-footer">
          <div className="col-md-12 col-sm-12 text-center">
            <ul>
              <li>
                <a href=""><FontAwesomeIcon icon={['fab', 'google-plus-g']} /></a>
              </li>
              <li>
                <a href=""><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
              </li>
              <li>
                <a href=""><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
              </li>
              <li>
                <a href=""><FontAwesomeIcon icon={['fab', 'youtube']} /></a>
              </li>
              <li>
                <a href=""><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
    <div className="container-fluid" style={{ backgroundColor:'rgba(25, 25, 25, 0.7)'  }}>
      <div className="container">
        <div className="footer-copyright text-center py-3">
          © 2020 Copyright: <a href="https://ghrce.raisoni.net/"> GHRCE </a>
        </div>
      </div>
    </div>
    </>
  );
}

export default Footer;
