import { useState } from "react";
import AdminApprovalList from "../components/Admin/AdminApprovalList";
import AdminSideMenu from "../components/Admin/AdminSideMenu";
import AdminUserList from "../components/Admin/AdminUserList";
import Title from "../components/Title/Title";
// import ApprovalModal from "../components/Modal/ApprovalModal";

import '../styles/Admin/AdminUser.scss';
import Footer from "../components/Footer";

const AdminUser = () => {

    return(
        <>
            <div className="AdminUserContainer">
                <Title title={"유저 관리"}/>
                <div className="AdminUserListBox">
                    <AdminSideMenu/>
                    <div className="AdminUserList">
                        <AdminUserList/>
                        {/* <div className="AdminUserCreateButton" onClick={()=>setIsApprovalModal(!isApprovalModal)}>승인하기</div> */}
                        <AdminApprovalList/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
};


export default AdminUser;