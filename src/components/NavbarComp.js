import { useContext, useState } from "react";
import NavbarCSS from "./NavbarComp.module.css";
import DashboardContext from "./DashboardContext";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function NavbarComp() {
  const {setIsFormOpened} = useContext(DashboardContext);

  const handleCloseButton = () => {
    setIsFormOpened(false);
  } 

  return (
    <>
    <div className={NavbarCSS["navbar-section"]}>
        <nav className={NavbarCSS["nav-box"]}>
            <div className={NavbarCSS["nav-logo"]}>
            <i style={{color:"white"}} class="fi fi-rr-graduation-cap"></i>
            <h3>Bravy</h3>
            </div>
            <ul className={NavbarCSS["nav-list"]}>
                <li className={NavbarCSS["nav-item"]}>
                <i class="fi fi-rr-house-chimney-window"></i>
                <p>Home</p>
                </li>
                <li className={NavbarCSS["nav-item"]}>
                <i class="fi fi-rr-calendar-lines"></i>
                <p>Schedule</p>
                </li>
                <li className={NavbarCSS["nav-item"]}>
                <i class="fi fi-rr-play-alt"></i>
                <p>Schedule</p>
                </li>
                <li className={NavbarCSS["nav-item"]}>
                <i class="fi fi-rr-poll-h"></i>
                <p>Assignment</p>
                </li>
                <li className={NavbarCSS["nav-item"]}>
                <i class="fi fi-rr-stats"></i>
                <p>Progress</p>
                </li>
                <li className={NavbarCSS["nav-item"]}>
                <i class="fi fi-rr-folder-open"></i>
                <p>Courses</p>
                </li>
                <li className={NavbarCSS["nav-item"]}>
                <i class="fi fi-rr-comment-alt"></i>
                <p>Support</p>
                </li>
            </ul>
        </nav>
        <div className={NavbarCSS["form-box"]}>
          <div className={NavbarCSS["form-content"]}>
          <div className={NavbarCSS["form-header"]}>
            <h3>Form</h3>
            <div className={NavbarCSS["close-button"]} onClick={() => handleCloseButton()}>
            <i class="fi fi-rr-cross-small"></i>
            </div>
          </div>
          <form method="post">
            <Container>
              <Row>
                <Col className={NavbarCSS["form-col"]}>
                <div className={NavbarCSS["input-header"]}>Name:</div>
                <input placeholder="Name"/>
                </Col>
                <Col className={NavbarCSS["form-col"]}>
                <div className={NavbarCSS["input-header"]}>Surname:</div>
                <input placeholder="Surname"/>
                </Col>
              </Row>
              <Row>
                <Col className={NavbarCSS["form-col"]}>
                <div className={NavbarCSS["input-header"]}>Identity Number:</div>
                <input placeholder="Identity"/>
                </Col>
                <Col className={NavbarCSS["form-col"]}>
                <div className={NavbarCSS["input-header"]}>Phone Number:</div>
                <input placeholder="Phone"/>
                </Col>
              </Row>
              <Row>
                <Col className={NavbarCSS["form-col"]}>
                </Col>
                <Col className={NavbarCSS["button-col"]}>
                <Button variant="light">Submit</Button>
                </Col>
              </Row>

            </Container>
          </form>
          </div>
        </div>
    </div>
    </>
  );
}

export default NavbarComp;
