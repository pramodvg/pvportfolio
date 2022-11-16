import React from 'react'
import Toolitem from './Toolitem'
const navItemsList = [
    { lable: "Home", mlink: "/pvportfolio" },
    { lable: "About", mlink: "/pvportfolio/about" },
    { lable: "Service", mlink: "/pvportfolio/service" },
    { lable: "Portfolio", mlink: "/pvportfolio/portfolio" },
    { lable: "Contact", mlink: "/pvportfolio/contact" },
];
export default function ToolbarItem() {
    return (
        navItemsList.map(data => {
            return <Toolitem key={data.lable} lable={data.lable} mLink={data.mlink} />
        })
    )
}
