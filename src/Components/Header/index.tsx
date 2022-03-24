import React, { useState } from "react";
import {
  Container,
  Wrapper,
  UserProfile,
  BoxIcon,
  Box,
  ButtonEye,
  Welcome,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";

interface HeaderProps {}

function Header({}: HeaderProps) {
  const [showBalance, setShowBalance] = useState(false);

  const handleShowBalance = () => {
    setShowBalance(!showBalance);
  };
  return (
    <Container>
      <Wrapper>
        <UserProfile>
          <BoxIcon>
            <Ionicons name="person-outline" color={"#FFF"} size={24} />
          </BoxIcon>
          <Welcome>Olá, Marcos</Welcome>
        </UserProfile>
        <Box>
          <ButtonEye onPress={handleShowBalance}>
            {showBalance ? (
              <Ionicons
                name="eye-outline"
                size={24}
                color={"#FFF"}
                style={{
                  marginRight: 16,
                }}
              />
            ) : (
              <Ionicons
                name="eye-off-outline"
                size={24}
                color={"#FFF"}
                style={{
                  marginRight: 16,
                }}
              />
            )}
          </ButtonEye>
          <Ionicons
            name="help-circle-outline"
            size={24}
            color={"#FFF"}
            style={{
              marginRight: 16,
            }}
          />
          <Ionicons name="mail-outline" size={24} color={"#FFF"} />
        </Box>
      </Wrapper>
    </Container>
  );
}

export default Header;
