import {useState} from "react";
import React from 'react'
import './header.scss'
import Dropdown from "@/pages/Header/Dropdown";
import {homeData} from "@/data/homeNavData";

const Header=()=>{


    return(
        <div className={'wrapper'}>
            <div className={'header-wrapper'}>
                <div className={'header-upper'}>
                    <div className={'title-wrapper'}>
                        <p className={'title'}>House Rent</p>
                    </div>
                    <div className={'header-btn-wrapper'}>
                        <p className={'contact-phone'}>CALL US - 01623 030020</p>
                        <button>LOGIN / REGISTER</button>
                        <button>search</button>
                        <button>|||</button>
                    </div>
                </div>
                <div className={'divider'} />
                <div className={'header-lower'}>
                    <nav className={'nav-wrapper'}>
                        <ul className={'nav-items'}>
                            <li>
                                <a href="">Home</a>
                                {/*<Dropdown />*/}
                                <ul className={'nav-sub-items'}>{
                                    homeData.map(item=>{
                                        return <li key={item.id} className={'nav-details'}>{item.name}</li>
                                    })
                                }</ul>
                            </li>
                            <li><a href="">Booking</a></li>
                            <li>
                                <a href="">House</a>
                                <ul className={'nav-sub-items'}>{
                                    homeData.map(item=>{
                                        return <li key={item.id} className={'nav-details'}>{item.name}</li>
                                    })
                                }</ul>
                            </li>
                            <li>
                                <a href="">Pages</a>
                                <ul className={'nav-sub-items'}>{
                                    homeData.map(item=>{
                                        return <li key={item.id} className={'nav-details'}>{item.name}</li>
                                    })
                                }</ul>
                            </li>
                            <li>
                                <a href="">About</a>
                            </li>
                            <li>
                                <a href="">Blog</a>
                                <ul className={'nav-sub-items'}>{
                                    homeData.map(item=>{
                                        return <li key={item.id} className={'nav-details'}>{item.name}</li>
                                    })
                                }</ul>
                            </li>
                            <li>
                                <a href="">Contact</a>
                            </li>
                        </ul>
                    </nav>
                    <div className={'vertical-divider'} />
                    <div className={'booking-btn'}>
                        <button>BOOKING</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header