import {
  AuthModal,
  Footer,
  HeroCarousel,
  Loader,
  NavbarMenu,
  ServicesInfo,
  TeamInfo,
  TextToOCRHandler,
} from "./components";
import { useAuth } from "./context/AuthProvider";

function App() {
  const { isAuthenticated, isLoading } = useAuth();
  return (
    <div className="App">
      {isLoading && <Loader />}
      <NavbarMenu />
      <HeroCarousel />
      {!isAuthenticated && <AuthModal />}
      {isAuthenticated && <TextToOCRHandler />}
      <ServicesInfo />
      <TeamInfo />
      <Footer />
    </div>
  );
}

export default App;
