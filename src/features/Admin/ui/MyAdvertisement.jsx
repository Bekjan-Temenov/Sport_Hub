import React from 'react'
import Advertisement from "../../../shared/assets/svg/advertisement.svg"
import Bascet from "../../../shared/assets/svg/bascet.svg"
import AboutUs from "../../../shared/assets/svg/aboutus.svg"
import Strelca from "../../../shared/assets/svg/strelca.svg"
import User from "../../../shared/assets/svg/user-2.svg"
import Mesenger from "../../../shared/assets/svg/mesenger.svg"
import Setting from "../../../shared/assets/svg/setting.svg"
import Login from "../../../shared/assets/svg/login-circle.svg"


const MyAdvertisement = () => {
    return (
        <div>
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
                <button style={{ position: "relative", margin: "550px 37px 70px 30px " , width:"198px", height:"36px", borderRadius:"8px" , padding:"8px 15px 8px 15px", gap:"15px", display:"flex", alignItems:"center"}}>
                    <img src={Login} alt="" />
                    <p style={{
                        color: "#FE0404E5"
                    }}>Выйти</p>
                </button>
            </div>
        </div>
    )
}

export default MyAdvertisement