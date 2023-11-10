import { AboutScreen } from "./routes/AboutScreen"
import { HomeScreen } from "./routes/HomeScreen"
import {ContactScreen} from "./routes/ContactScreen"
import {LoginScreen} from "./routes/LoginScreen"
import { Navbar } from "./routes/components/Navbar"
import { Navigate, Route, Routes } from "react-router-dom"
import { UsuarioProvider } from "./routes/context/UsuarioProvider"
export const App = () => {
  return (
    <UsuarioProvider>
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element = {<HomeScreen></HomeScreen>}></Route>
          <Route path="/login" element = {<LoginScreen></LoginScreen>}></Route>
          <Route path="/about" element = {<AboutScreen></AboutScreen>}></Route>
          <Route path="/contact" element = {<ContactScreen></ContactScreen>}></Route>
          <Route path="/" element = {<Navigate to = "/"></Navigate>}></Route>
        </Routes>
    </UsuarioProvider>
  )
}
