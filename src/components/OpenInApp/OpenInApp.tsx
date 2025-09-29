import type React from "react";
import { OpenInApp } from "./OpenInApp.styles";
import { GoArrowUpRight } from "react-icons/go";

const OpenInAppComponent: React.FC = () => {
    return <OpenInApp>Open in App <GoArrowUpRight style={{ marginLeft: "5px" }}/></OpenInApp>;
}

export default OpenInAppComponent;