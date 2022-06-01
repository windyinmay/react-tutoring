// import "./packages/react-router-dom/examples/Animation/styles.css";

// import React from "react";
// import {
//   TransitionGroup,
//   CSSTransition
// } from "react-transition-group";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Redirect,
//   useLocation,
//   useParams
// } from "react-router-dom";
// import CQuestions from '../../components/CQuestions'
// import JsQuestions from '../../components/JsQuestions'
// import PythonQuestions from '../../components/PythonQuestions'

// export default function Main() {
   
//     return (
//         <Router>
//       <Switch>
//         <Route exact path="/">
//           <Redirect to="/main-page" />
//         </Route>
//         <Route path="*">
//           <SwitchViews/>
//         </Route>
//       </Switch>
//     </Router>
//   );
// }

// function SwitchViews() {
//     let location = useLocation();

//     return (
//         <div>
//             <ul>
//                 <NavLink to="/js-questions-from-stack-overflow">Js Questions</NavLink>
//                 <NavLink to="/python-questions-from-stack-overflow">Python Questions</NavLink>
//                 <NavLink to="/C-questions-from-stack-overflow">C Questions</NavLink>
//             </ul>

//             <div>
//                 <TransitionGroup>
//                     <CSSTransition
//                         key={location.pathname}
//                         classNames='fade'
//                         timeout={300}
//                     >
//                         <Switch location={location}>
//                             <Route path='/js-questions-from-stack-overflow' children={<JsQuestions />} />
//                             <Route path='/python-questions-from-stack-overflow' children={<PythonQuestions />} />
//                             <Route path='/C-questions-from-stack-overflow' children={<CQuestions />} />
//                         </Switch>
//                     </CSSTransition>
//                 </TransitionGroup>
//             </div>
//         </div>
//     );
// };

// function NavLink(props) {
//     return (
//       <li>
//         <Link {...props} style={{ color: "inherit" }} />
//       </li>
//     );
// }


 //implement switch views
 //tried but got errors
    // const introduction = () => {
    //         return <p>Introduction</p>
    //     }
    // const [selectedTab, setSelectedTab] = useState('');
    // const SelectedTab = () => {
    //         switch (selectedTab) {
    //             case 'JsQuestions':
    //                 return <JsQuestions />
    //             case 'PythonQuestions':
    //                 return <PythonQuestions />
    //             default:
    //                 return introduction();
                    
    //         }
    //     }
    