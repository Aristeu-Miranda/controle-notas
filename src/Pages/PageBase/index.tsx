import { Outlet} from "react-router-dom"
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import Container from "../../Components/Container/Container"


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