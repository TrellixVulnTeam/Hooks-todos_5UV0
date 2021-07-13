import React, {  } from "react";
import Home from "./containers/home/Home";

import todoList from "./store/todolists";
import { observer } from "mobx-react";
// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Home store={todoList} />
//       </div>
//     )
//   }
// }
const App = observer((props) => {
  return (
    <div>
      <Home store={todoList} />
    </div>
  );
});

export default App;
