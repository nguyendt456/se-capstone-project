import { useContext } from "react";
import { NavLink } from "react-router-dom";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HomeIcon from "@mui/icons-material/Home";
import { ContextDataType, GlobalContext } from "./root";
import GroupAddIcon from '@mui/icons-material/GroupAdd';

const Navbar = () => {
    const { vehicleMainMenuHook }: ContextDataType = useContext(GlobalContext);
    return (
        <nav>
            <ul>
                <div className="navbar flex flex-col inline">
                    <div className="flex flex-col gap-5">
                        <li className="nav-item">
                            <NavLink className="navlink" to="/">
                                <HomeIcon
                                    sx={{
                                        display: "inline",
                                        width: "25px",
                                        height: "25px",
                                    }}
                                />
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                onClick={() =>
                                    vehicleMainMenuHook.setDataHook(true)
                                }
                                className="navlink"
                                to="/assigntask"
                            >
                                <GroupAddIcon
                                    sx={{
                                        display: "inline",
                                        width: "25px",
                                        height: "25px",
                                    }}
                                />
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                onClick={() =>
                                    vehicleMainMenuHook.setDataHook(true)
                                }
                                className="navlink"
                                to="/vehicle"
                            >
                                <LocalShippingIcon
                                    sx={{
                                        display: "inline",
                                        width: "25px",
                                        height: "25px",
                                    }}
                                />
                            </NavLink>
                        </li>
                    </div>
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;
