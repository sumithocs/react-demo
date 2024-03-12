import "./App.css";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import { Greet } from "./components/Greet";
import { Message } from "./components/Message";
import { ClickHandler } from "./components/ClickHandler";
import { ParentComponent } from "./components/ParentComponent";
import { UserGreetings } from "./components/UserGreetings";
import { NameList } from "./components/NameList";
import { StyleSheet } from "./components/StyleSheet";
import { InlineStyleSheet } from "./components/InlineStyleSheet";
import { LoginForm } from "./components/LoginForm";
import { PostList } from "./components/PostList";
import { PostForm } from "./components/PostForm";
import { LargeNameList } from "./components/LargeNameList";

function App() {
  return (
    <div className="App">
      {/* <Greet name="Peter" heroName="Spiderman"/>
      <Greet name="Calrk" heroName="Superman">
        <button>Save the earth</button>
      </Greet>
      <Greet name="Bruce" heroName="Batman">
        <p>Batman's super power is money!</p>
      </Greet> */}
      {/* <Message /> */}
      {/* <ClickHandler /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreetings /> */}
      {/* <NameList /> */}
      {/* <StyleSheet /> */}
      {/* <InlineStyleSheet /> */}
      {/* <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <LoginForm /> */}
      {/* <PostForm />
      <PostList /> */}
      <LargeNameList />
    </div>
  );
}

export default App;
