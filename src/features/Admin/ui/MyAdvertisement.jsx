import React from 'react'
import Advertisement from "../../../shared/assets/svg/advertisement.svg"
import Bascet from "../../../shared/assets/svg/bascet.svg"
import AboutUs from "../../../shared/assets/svg/aboutus.svg"
import Strelca from "../../../shared/assets/svg/strelca.svg"
import User from "../../../shared/assets/svg/user-2.svg"
import Mesenger from "../../../shared/assets/svg/mesenger.svg"
import Setting from "../../../shared/assets/svg/setting.svg"
import Login from "../../../shared/assets/svg/login-circle.svg"
import Search from "../../../shared/assets/svg/search-1.svg"
import Crop from "../../../shared/assets/svg/crop.svg"
import { GoPlus } from "react-icons/go";


const MyAdvertisement = () => {
    return (
        <div style={{ display: "flex" }}>
            <div style={{ marginLeft: "50px", }}>
                <img src={Bascet} alt="" style={{ position: "absolute" }} />
                <div style={{ width: "214px", height: "285px", position: "relative", top: "200px", left: "30px", display: "grid" }}>
                    <button style={{
                        width: "214px",
                        height: "36px",
                        borderRadius: "8px",
                        padding: "8px 15px 8px 15px",
                        background: "#FFFFFF",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px"
                    }}>
                        <img src={Advertisement} alt="" />
                        <p style={{
                            fontSize: "20px",
                            fontWeight: "500",
                            color: "#18171A",
                            fontFamily: "Lato, sans-serif"
                        }}>Мои рекламы</p>
                    </button>
                    <button style={{
                        width: "214px",
                        height: "36px",
                        borderRadius: "8px",
                        padding: "8px 15px 8px 15px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <img src={AboutUs} alt="" />
                            <p style={{
                                fontSize: "20px",
                                fontWeight: "500",
                                color: "#fff",
                                fontFamily: "Lato, sans-serif"
                            }}>О нас</p>
                        </div>
                        <img src={Strelca} alt="" />
                    </button>
                    <button style={{
                        width: "214px",
                        height: "36px",
                        borderRadius: "8px",
                        padding: "8px 15px 8px 15px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <img src={User} alt="" />
                            <p style={{
                                fontSize: "20px",
                                fontWeight: "500",
                                color: "#fff",
                                fontFamily: "Lato, sans-serif"
                            }}>Пользователи</p>
                        </div>
                        <img src={Strelca} alt="" />
                    </button>
                    <button style={{
                        width: "214px",
                        height: "36px",
                        borderRadius: "8px",
                        padding: "8px 15px 8px 15px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <img src={Mesenger} alt="" />
                            <p style={{
                                fontSize: "20px",
                                fontWeight: "500",
                                color: "#fff",
                                fontFamily: "Lato, sans-serif"
                            }}>Уведомления </p>
                        </div>
                        <img src={Strelca} alt="" />
                    </button>
                    <button style={{
                        width: "214px",
                        height: "36px",
                        borderRadius: "8px",
                        padding: "8px 15px 8px 15px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <img src={Setting} alt="" />
                            <p style={{
                                fontSize: "20px",
                                fontWeight: "500",
                                color: "#fff",
                                fontFamily: "Lato, sans-serif"
                            }}>Настройка</p>
                        </div>
                        <img src={Strelca} alt="" />
                    </button>
                </div>
                <button style={{ position: "relative", margin: "550px 37px 70px 30px ", width: "198px", height: "36px", borderRadius: "8px", padding: "8px 15px 8px 15px", gap: "15px", display: "flex", alignItems: "center" }}>
                    <img src={Login} alt="" />
                    <p style={{
                        color: "#FE0404E5"
                    }}>Выйти</p>
                </button>
            </div>
            <div>
                <div style={{
                    width: "957px",
                    height: "42px",
                    margin: "30px 81px 38px 88px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <div style={{ display: "flex", gap: "15px" }}>
                        <input style={{
                            width: "677px",
                            height: "42px",
                            borderRadius: "30px",
                            background: "#E5E4E9",
                            outline: "none",
                            padding: "11px 475px 11px 22px",
                        }} type="text" />
                        <img src={Search} alt="" style={{ cursor: "pointer" }} />
                    </div>
                    <div>
                        <div style={{ display: "flex", gap: "9px", alignItems: "center" }}>
                            <p style={{
                                fontSize: "12px",
                                fontWeight: "400",
                                color: "#fff",
                                fontFamily: "Comfortaa"
                            }}>Бекенова <br />Сабина</p>
                            <img src={Crop} alt="" />
                        </div>
                    </div>
                </div>
                <div style={{
                    width: "996px",
                    height: "auto",
                    marginTop: "38px",
                    marginLeft: "49px",
                    background: "#0C192E7A",
                    padding:"0px 0px 60px 0px"
                }}>
                    <div style={{ display: "flex", justifyContent: "space-between", margin: "0px 40px 55px 40px", width: "916px", height: "56px", padding: "15px 0px 55px 0px", borderBottom: "1.04px solid #B6B7BC" }}>

                        <p style={{ fontWeight: "700", fontSize: "32px", fontFamily: "Lato", color: "#fff" }}>Мои рекламы</p>
                        <button style={{
                            width: "204px",
                            height: "40px",
                            borderRadius: "8px",
                            background: "#FE0404",
                            color: "#fff"
                        }}>
                            <p style={{ fontWeight: "600", fontSize: "20px", fontFamily: "Comfortaa", display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}><GoPlus />Добавить</p>
                        </button>
                    </div>
                    <div style={{
                        width: '846px',
                        height: '395px',
                        border: '1px solid red',
                        margin: "0px 40px 60px 40px"
                    }}>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MyAdvertisement