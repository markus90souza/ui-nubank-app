import { ReactNode } from "react";

import { Text } from "react-native";
import Header from "../../Components/Header";

import { Container } from "./styles";

interface DashboardProps {}

function Dashboard({}: DashboardProps) {
  return (
    <Container>
      <Header />
    </Container>
  );
}

export { Dashboard };
