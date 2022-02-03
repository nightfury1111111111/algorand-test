import { useContext } from "react";
import { LayoutContext } from "../contexts/LayoutContext";

const useLayout = () => useContext(LayoutContext);

export default useLayout;
