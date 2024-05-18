import { Container } from "react-bootstrap";

function Sobre() {
    return (
        <Container className = "d-flex flex-column align-items-center justify-content-between mt-10" style={{height:"20vw"}}>
            <h1>Sobre:</h1>
            <p className="fs-2">Tudo que você precisa saber é que esse é o melhor estoque fictício já concebido!</p>
        </Container>
    )
}

export default Sobre;