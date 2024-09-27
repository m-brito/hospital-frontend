import React from "react";
import { TabContainer, TabButton } from "./styles";

interface TabsProps {
  selectedTab: "info" | "exams";
  setSelectedTab: (tab: "info" | "exams") => void;
}

const Tabs: React.FC<TabsProps> = ({ selectedTab, setSelectedTab }) => {
  return (
    <TabContainer>
      <TabButton onClick={() => setSelectedTab("info")} $isActive={selectedTab === "info"}>
        Informações da Consulta
      </TabButton>
      <TabButton onClick={() => setSelectedTab("exams")} $isActive={selectedTab === "exams"}>
        Exames
      </TabButton>
    </TabContainer>
  );
};

export default Tabs;
