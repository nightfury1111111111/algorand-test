import { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";

const useSidebar = () => useContext(SidebarContext);

export default useSidebar;
