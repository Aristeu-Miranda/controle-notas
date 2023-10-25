import { Outlet} from "react-router-dom"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Container from "../../components/Container/Container"


function PageBase() {

    return (
        <main>
            <Header />
            <Container>
                    <Outlet />
            </Container>
            <Footer />
        </main>
    )
}

export default PageBase