import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import Aux from "../../hoc/Aux";

// the Layout component is the responsible
// for the way of our web page structured
const Layout = () => (
    <Aux>
        {/* draw the Header component */}
        <Header />
        {/* draw the Main component */}
        <Main />
        {/* draw the Footer component */}
        <Footer />
    </Aux>
)

export default Layout;