import { Outlet, Link } from "react-router-dom"
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import Container from "../../Components/Container/Container"

function Home() {
    return (
        <main>
            <Header />
                <Link to={"new"}>Aqui</Link>
                <Container>
                    <Outlet />
                </Container>
            <Footer />
        </main>
    )
}

export default Home