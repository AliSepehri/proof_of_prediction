import styles from "./Layout.module.css"
import Header from "./Header";
import NavBar from "./NavBar";

const Layout = (props) => {
  return <div>
    <Header />
    <div className={styles["layout-position"]}>
    {props.children}
    </div>
    {/* <NavBar /> */}
  </div>;
}

export default Layout;