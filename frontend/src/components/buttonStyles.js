import styled from 'styled-components';
import { Button } from '@mui/material';

export const RedButton = styled(Button)`
  && {
    background-color: #f00;
    color: white;
    margin-left: 4px;
    &:hover {
      background-color: #eb7979;
      border-color: #f26767;
      box-shadow: none;
    }
  }
`;

export const BlackButton = styled(Button)`
  && {
    background-color: #4ecb4a;
    color: white;
    margin-left: 4px;
    &:hover {
      background-color: #3cbcc3;
      border-color: #212020;
      box-shadow: none;
    }
  }
`;

export const DarkRedButton = styled(Button)`
  && {
    background-color: #650909;
    color: white;
    &:hover {
      background-color:#3cbcc3;
      border-color: #f26767;
      box-shadow: none;
    }
  }
`;

export const BlueButton = styled(Button)`
  && {
    background-color: #4ecb4a;
    color: #fff;
    &:hover {
      background-color: #3cbcc3;
    }
  }
`;

export const PurpleButton = styled(Button)`
  && {
    background-color: #4ecb4a;
    color: #fff;
    &:hover {
      background-color: #3cbcc3;
    }
  }
`;

export const LightPurpleButton = styled(Button)`
  && {
    background-color: #4ecb4a;
    color: white;
    &:hover {
      background-color:#3cbcc3 ;
    }
  }
`;

export const GreenButton = styled(Button)`
  && {
    background-color: #4ecb4a;
    color: #fff;
    &:hover {
      background-color: #3cbcc3;
    }
  }
`;

export const BrownButton = styled(Button)`
  && {
    background-color: #2c1006;
    color: white;
    &:hover {
      background-color: #3cbcc3;
      border-color: #40220c;
      box-shadow: none;
    }
  }
`;

export const IndigoButton = styled(Button)`
  && {
    background-color: #2f2b80;
    color: white;
    &:hover {
      background-color: #3cbcc3;
      border-color: #473d90;
      box-shadow: none;
    }
  }
`;
