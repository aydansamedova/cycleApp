// import run from '@cycle/rxjs-run'
//  import { of } from "rxjs";
// import { Observable } from 'rx';
import {Info} from './companents/info';
import {Home} from './pages/home';
import { Login } from "./pages/login";
import { Navbar } from "./companents/navbar";

export function App(sources) {
  const navbar = Navbar(sources);
  const login = Login(sources);
  const info = Info(sources);
  const home = Home(sources)

  const sinks = {
    DOM: info.DOM
  };
  return sinks;
}
