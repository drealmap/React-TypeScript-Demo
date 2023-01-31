import "./App.css";
import { Button } from "./components/Button";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Box } from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { UserContextProvider } from "./components/context/UserContext";
// import { User } from "./components/state/User";
import { User } from "./components/context/User";
import { List } from "./components/generics/List";
import { RandomNumbers } from "./components/restriction/RandomNumbers";
import { CustomButton } from "./components/html/Button";
import { Input2 } from "./components/html/Input";

function App() {
  const personName = {
    first: "Bruce",
    last: "Michael",
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Dianas",
    },
  ];

  return (
    <div className="App">
      <Greet name="Michael" isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />

      <Oscar>
        <Heading>Placeholder</Heading>
      </Oscar>

      <Button
        handleClick={(event, id) => {
          console.log("Button Clicked", event, id);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
      {/* <User /> */}

      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>

      <UserContextProvider>
        <User />
      </UserContextProvider>

      <List
        items={["Batman", "Superwoman", "Wonderwoman"]}
        onClick={(item) => console.log(item)}
      />
      <List
        items={[1, 2, 3, 'false']}
        onClick={(item) => console.log(item)}
      />
      <RandomNumbers value={10} isPositive />

      <CustomButton variant="primary" onClick={() => console.log('clicked')}>Primary Button</CustomButton>
      <Input2 placeholder="" />
    </div>
  );
}

export default App;
