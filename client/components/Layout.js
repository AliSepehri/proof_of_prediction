import Header from "./Header";
import NavBar from "./NavBar";

const Layout = (props) => {
  return <div>
    <Header />
    {props.children}
    <NavBar />
  </div>;
}

export default Layout;