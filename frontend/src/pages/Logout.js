import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authLogout } from '../redux/userRelated/userSlice';
import styled from 'styled-components';

const Logout = () => {
    const currentUser = useSelector(state => state.user.currentUser);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(authLogout());
        navigate('/');
    };

    const handleCancel = () => {
        navigate(-1);
    };

    return (
        <LogoutContainer>
            <h1>{currentUser.name}</h1>
            <LogoutMessage>Are you sure you want to log out?</LogoutMessage>
             <DisplayDiv>
             <LogoutButtonLogout onClick={handleLogout}>Log Out</LogoutButtonLogout>
             <LogoutButtonCancel onClick={handleCancel}>Cancel</LogoutButtonCancel>
             </DisplayDiv>
           
        </LogoutContainer>
    );
};

export default Logout;

const LogoutContainer = styled.div`
   width:70%;
   margin:auto;
   margin-top:100px;
  padding: 20px;
  border-radius:20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #4ecb4a;
  color: white;
`;

const DisplayDiv = styled.div`
width:40%,
margin:auto;
display:flex;
`

const LogoutMessage = styled.p`
  margin-bottom: 20px;
  font-size: 16px;
  text-align: center;
`;

const LogoutButton = styled.button`
  padding: 10px 20px;
  margin-top: 10px;
  margin:5px;
  border-radius:4px;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  border:none;

  &:hover {
    color: #fff;
    background-color: #333;
  }
`;

const LogoutButtonLogout = styled(LogoutButton)`
  background-color: #ea0606;
`;

const LogoutButtonCancel = styled(LogoutButton)`
  background-color: rgb(99, 60, 99);
`;
