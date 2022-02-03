import "./App.css";
import { Header } from "./components/Header";
import { ServiceContainer } from "./components/ServiceContainer";
import { GetServices } from "./scripts/backend";

export const App = () => {
  return (
    <div className="App">
      <Header />
      {GetServices().map((service) => {
        return <ServiceContainer service={service} />;
      })}
    </div>
  );
};
