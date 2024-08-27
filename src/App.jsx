import Router from "./shared/Router";
import { PokemonProvider } from "./contexts/PokemonContext";

const App = () => {
  return (
    <PokemonProvider>
      <Router />
    </PokemonProvider>
  );
};

export default App;
