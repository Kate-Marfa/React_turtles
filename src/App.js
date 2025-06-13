import AppWrapper from "./AppWrapper";
import AppItem from "./AppItem";
import AppImage from "./AppImage";
import turtles from "./constants";
import getItemDescription from "./utils";

export function App() {
  return (
    <AppWrapper title="React turtles">
      {turtles.map((turtle, index) => (
        <AppItem
          key={index}
          name={turtle.name}
          Image={<AppImage imgUrl={turtle.imgUrl} />}
          description={getItemDescription(turtle.nickName, turtle.weapon)}
        ></AppItem>
      ))}
    </AppWrapper>
  );
}

export default App;


