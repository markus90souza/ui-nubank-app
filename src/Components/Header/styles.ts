import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 20%;
  background-color: #820ad1;
  justify-content: space-between;
  padding: 40px 24px 8px 24px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Box = styled.View`
  flex-direction: row;
`;

export const UserProfile = styled.View`
  flex-direction: column;
`;

export const BoxIcon = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  background-color: #a750d9;
`;

export const ButtonEye = styled.TouchableOpacity``;

export const Welcome = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  margin-top: 8px;
`;
