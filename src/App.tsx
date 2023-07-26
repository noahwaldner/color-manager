import { Route, useLocation } from "wouter";
import { Overview } from "./pages/Overview";
import { DetailView } from "./pages/DetailView";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { styled } from "styled-components";
import { AddColor } from "./pages/AddColor";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyles } from "./style/themes";
import { BackToHome } from "./components/BackToHome";

const App = () => {
  const [location] = useLocation();
  
  return (
    <Container>
      <HelmetProvider>
        <Helmet>
          <title>Color Library</title>
          <meta name="description" content="A giant Library of colors" />
        </Helmet>
        <GlobalStyles theme={"light"} />
        <ToastContainer />

        <Content>
          <BackToHome visible={location !== "/"} />
          <Route path="/add" component={AddColor} />
          <Route path="/" component={Overview} />
          <Route path="/color/:id" component={DetailView} />
        </Content>
      </HelmetProvider>
    </Container>
  );
};

const Container = styled.div`
  background-color: #bfbfbf;
  min-height: 100vh;
  font-family: "Roboto", sans-serif;
`;
const Content = styled.div`
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export default App;
