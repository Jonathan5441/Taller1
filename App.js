import { NavigationContainer } from "@react-navigation/native";
import { AppNavigation } from "./src/navigation/appNavigation";
import { initFirebase } from "./src/utils/firebase";

const App=()=>{
  return(
    <>
    <NavigationContainer>
      <AppNavigation/>
    </NavigationContainer>
    </>
  );
};

export default App;
