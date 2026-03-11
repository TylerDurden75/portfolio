import { Fragment, lazy, Suspense } from "react";
import MenuBox from "../MenuBox/MenuBox";

const LogoComponent = lazy(() => import("../../subComponents/LogoComponent"));
const SoundBar = lazy(() => import("../../subComponents/SoundBar"));

/**
 * Header commun : Logo (TJ), menu principal, et SoundBar (platine).
 * À utiliser sur chaque page à la place de rendre les trois composants séparément.
 *
 * @param {Object} props
 * @param {"light"|"dark"} [props.theme="dark"] - Thème pour le logo
 * @param {boolean} [props.showMenu=true] - Afficher le MenuBox (navigation)
 */
const Header = ({ theme = "dark", showMenu = true }) => {
  return (
    <Fragment>
      <Suspense fallback={null}>
        <LogoComponent theme={theme} />
        {showMenu && <MenuBox />}
        <SoundBar />
      </Suspense>
    </Fragment>
  );
};

export default Header;
