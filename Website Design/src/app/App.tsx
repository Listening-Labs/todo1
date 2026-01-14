import { NavigationProvider, useNavigation } from "@/app/components/Navigation";
import { Header } from "@/app/components/Header";
import { HomePage } from "@/app/components/HomePage";
import { BoardPage } from "@/app/components/BoardPage";
import { AIChatPage } from "@/app/components/AIChatPage";
import { DiscordPage } from "@/app/components/DiscordPage";

function AppContent() {
  const { currentPage } = useNavigation();

  return (
    <div className="min-h-screen bg-black">
      <Header currentPage={currentPage === "/board" ? "board" : currentPage === "/ai-chat" ? "ai-chat" : currentPage === "/discord" ? "discord" : undefined} />
      
      {currentPage === "/" && <HomePage />}
      {currentPage === "/board" && <BoardPage />}
      {currentPage === "/ai-chat" && <AIChatPage />}
      {currentPage === "/discord" && <DiscordPage />}
    </div>
  );
}

export default function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}
