import React from 'react'
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import ReplayRoundedIcon from "@material-ui/icons/ReplayRounded";
import AnnouncementOutlinedIcon from "@material-ui/icons/AnnouncementOutlined";

export default class Menu extends React.Component{
    render(){
        const menuIconStyle = { fontSize: 32 };
        return(
            <ul className="tniMenu">
                            <li tabIndex={0}>
                                <div className="tniMenuItem" id="play">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={32}
                                    height={32}
                                    viewBox="0 0 24 24"
                                    aria-label="Games Icon"
                                    alt="Games Icon"
                                >
                                    <g
                                    fill="none"
                                    stroke={"#000000"}
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit="10"
                                    >
                                    <path d="M3.5 20.5H12.5V23.5H3.5z" />
                                    <path d="M4.472 20.5L2.5 14 6.5 3.417" />
                                    <path d="M10.5 15.5L15.5 15.5 15.5 1.5 6.5 1.5 6.5 14.5 6.632 15.165 9.5 10.5 11 11 10.5 15.5 11.5 17.5 11.5 20.5" />
                                    <path d="M11.062 16.625L18 18.5 21.5 4.985 15.5 3.318" />
                                    </g>
                                    <path fill="none" d="M0 0H24V24H0z" />
                                </svg>
                                <h3>Play</h3>
                                </div>
                            </li>
                            <li tabIndex={0}>
                                <div className="tniMenuItem" id="help">
                                <HelpOutlineIcon style={menuIconStyle} />
                                <h3>Help</h3>
                                </div>
                            </li>
                            <li tabIndex={0} >
                                <div className="tniMenuItem" id="help">
                                    <AnnouncementOutlinedIcon style={menuIconStyle} />
                                    <h3>Announcements</h3>
                                </div>
                            </li>
                            <li tabIndex={0} className="reset">
                                <div className="tniMenuItem" id="reset">
                                    <ReplayRoundedIcon style={menuIconStyle} />
                                    <h3>Reset</h3>
                                </div>
                            </li>
                        </ul>
        )
    }
}