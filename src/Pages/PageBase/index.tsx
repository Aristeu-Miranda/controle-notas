import { Outlet} from "react-router-dom"
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import Container from "../../Components/Container/Container"
import { useContext } from "react";
import { UserContext } from "../../Contexts/User/UserContext";

function PageBase() {
    const { user, setUser }: any = useContext(UserContext);

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