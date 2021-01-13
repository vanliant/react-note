### React Hooks

---

- #### 组件类的缺点

  - 大型组件很难拆分和重构，也很难测试。
  - 业务逻辑分散在组件的各个方法之中，导致重复逻辑或关联逻辑。
  - 组件类引入了复杂的编程模式，比如 render props 和高阶组件。

- #### 常用Hooks

  - useState()
  - useContext()
  - useReducer()
  - useEffect()



- #### useState()：状态钩子

  - 作用：为函数组件引入状态（state）

  - ```javascript
    import React, { useState } from "react";
    
    export default function  Button()  {
      const  [buttonText, setButtonText] =  useState("Click me,   please");
    
      function handleClick()  {
        return setButtonText("Thanks, been clicked!");
      }
    
      return  <button  onClick={handleClick}>{buttonText}</button>;
    }
    
    ```

    useState()这个函数接受状态的初始值，作为参数，上例的初始值为按钮的文字。该函数返回一个数组，数组的第一个成员是一个变量（上例是buttonText），指向状态的当前值。第二个成员是一个函数，用来更新状态，约定是set前缀加上状态的变量名（上例是setButtonText）

- #### useContext()：共享状态钩子

  - 作用：在组件之间共享状态，可以使用useContext()。

  - ```javascript
    //第一步就是使用 React Context API，在组件外部建立一个 Context。
    const AppContext = React.createContext({});
    //Navbar 组件的代码如下。
    const Navbar = () => {
      const { username } = useContext(AppContext)
    
      return (
        <div className="navbar">
          <p>AwesomeSite</p>
          <p>{username}</p>
        </div>
      )
    }
    //上面代码中，useContext()钩子函数用来引入 Context 对象，从中获取username属性。
    //Message 组件的代码也类似。
    const Messages = () => {
      const { username } = useContext(AppContext)
    
      return (
        <div className="messages">
          <h1>Messages</h1>
          <p>1 message for {username}</p>
          <p className="message">useContext is awesome!</p>
        </div>
      )
    }
    //组件封装代码如下。
    function App() {
      return (
        <AppContext.Provider value={{
          username: 'superawesome'
        }}>
          <div className="App">
            <Navbar />
            <Messages />
          </div>
        </AppContext.Provider>
      );
    }
    //上面代码中，AppContext.Provider提供了一个 Context 对象，这个对象可以被子组件共享。
    
    ```

- #### useReducer()：action 钩子

  - 作用：组件发出 action 与状态管理器通信。状态管理器收到 action 以后，使用 Reducer 函数算出新的状态，Reducer 函数的形式是(state, action) => newState。

  - ```javascript
    import React, { useReducer } from 'react';
     
    function Reducers () {
      const [count,dispatch] = useReducer((state,action) => {
        switch(action.type) {
          case 'add':
            return state+1;
          case 'minus':
            return state-1
          default:
            return state
        }
      },0)
      return (
        <div>
          <div>{count}</div>
          <button onClick={() => {dispatch({type: 'add'})}}>加</button>
          <button onClick={() => {dispatch({type: 'minus'})}}>减</button>
        </div>
      )
    }
    export default Reducers
    ```

    

  - ```javascript
    const myReducer = (state, action) => {
      switch(action.type) {
        case('countUp'):
          return {
            ...state,
            count: state.count + 1
          }
        default:
          return state
      }
    }
    
    function App() {
      const [state, dispatch] = useReducer(myReducer, { count: 0 })
    
      return (
        <div className="App">
          <button onClick={() => dispatch({ type: 'countUp' })}>
            +1
          </button>
          <p>Count: {state.count}</p>
        </div>
      );
    }
    //上面是useReducer()的基本用法，它接受 Reducer 函数和状态的初始值作为参数，返回一个数组。数组的第一个成员是状态的当前值，第二个成员是发送 action 的dispatch函数。
     
    
    ```

- #### useEffect()：副作用钩子

  - 作用：引入具有副作用的操作，最常见的就是向服务器请求数据

  - ```javascript
    const Person = ({ personId }) => {
      const [loading, setLoading] = useState(true);
      const [person, setPerson] = useState({});
    
      useEffect(() => {
        setLoading(true);
        fetch(`https://swapi.co/api/people/${personId}/`)
          .then(response => response.json())
          .then(data => {
            setPerson(data);
            setLoading(false);
          });
      }, [personId]);
    
    //上面用法中，useEffect()接受两个参数。第一个参数是一个函数，异步操作的代码放在里面。第二个参数是一个数组，用于给出 Effect 的依赖项，只要这个数组发生变化，useEffect()就会执行。第二个参数可以省略，这时每次组件渲染时，就会执行useEffect()。
      if (loading === true) {
        return <p>Loading ...</p>;
      }
    
      return (
        <div>
          <p>You're viewing: {person.name}</p>
          <p>Height: {person.height}</p>
          <p>Mass: {person.mass}</p>
        </div>
      );
    };
    
    function App() {
      const [show, setShow] = useState("1");
    
      return (
        <div className="App">
          <Person personId={show} />
          <div>
            Show:
            <button onClick={() => setShow("1")}>Luke</button>
            <button onClick={() => setShow("2")}>C-3PO</button>
          </div>
        </div>
      );
    }
    //上面代码中，每当组件参数personId发生变化，useEffect()就会执行。组件第一次渲染时，useEffect()也会执行。
    
    ```

    可以把 `useEffect` Hook 看做 `componentDidMount`，`componentDidUpdate` 和 `componentWillUnmount` 这三个函数的组合。

    ```javascript
    //class写法
    
    class Example extends Component {
      constructor (props) {
        super(props);
        this.state = {
          count: 0
        }
      }
      componentDidMount() {
        this.id = setInterval(() => {
          this.setState({count: this.state.count + 1})
        }, 1000);
      }
      componentWillUnmount() {
        clearInterval(this.id)
      }
      render() { 
        return <h1>{this.state.count}</h1>;
      }
    }
    ```

    ```javascript
    //hook写法
    
    function Example() {
      const [count, setCount] = useState(0);
    
      useEffect(() => {
        //componentDidMount
        const id = setInterval(() => {
          setCount(c => c + 1);
        }, 1000);
        //compoentWillUnmount
        return () => clearInterval(id);
      }, []);//第二个参数空数组，不执行componentDidUpdate操作，非空数组，执行在更新时执行effect
    
      return <h1>{count}</h1>
    }
    ```

    

