import React from 'react'
import './Sidebar.css'
import SidebarChannel from './SidebarChannel'
import { BsChevronDown, BsPlus } from 'react-icons/bs'
import { MdSignalCellularAlt, MdCall, MdInfoOutline } from 'react-icons/md'
import { Avatar } from '@mui/material'
import MicIcon from '@mui/icons-material/Mic';
import HeadsetIcon from '@mui/icons-material/Headset';
import SettingsIcon from '@mui/icons-material/Settings';

function Sidebar() {
    return (
        <div className='sidebar'>
            <h2>I am the sidebar</h2>

            <div className='sidebar__top'>
                <h3>BAYC</h3>
                <BsChevronDown/>
            </div>

            <div className='sidebar__channels'>
                <div className='sidebar__channelsHeader'>
                    <div className='sidebar__header'>
                        <BsChevronDown/>
                        <h4>Text Channels</h4>
                    </div>
                    <BsPlus className='sidebar__addChannel'/>
                </div>
                <div className='sidebar__channelsList'>
                    <SidebarChannel/>
                    <SidebarChannel/>
                    <SidebarChannel/>
                    <SidebarChannel/>

                </div>
            </div>

            <div className='sidebar__voice'>
                <MdSignalCellularAlt className="sidebar__voiceIcon"/>

                <div className='sidebar__voiceInfo'>
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>

                <div className='sidebar__voiceIcons'>
                    <MdInfoOutline/>
                    <MdCall />
                </div>

            </div>

            <div className='sidebar__profile'>
                <Avatar />
                <div className='siddebar_profileInfo'>
                    <h3>@jwarshack</h3>
                    <p>#thisIsMyID</p>
                </div>

                <div className='sidebar__profileIcons'>
                    <MicIcon/>
                    <HeadsetIcon/>
                    <SettingsIcon/>

                </div>
            </div>


            
        </div>
    )
}

export default Sidebar
