import { ApolloProvider } from "@apollo/client";
import { client } from "./helpers/graphQLclient";
import Main from "./components/pages/Main";
import "./assets/css/App.css";

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Main />
      </ApolloProvider>
    </div>
  );
}

export default App;
