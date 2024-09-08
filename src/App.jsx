import React from "react";
import { Navbar, NavbarMenuToggle ,Image} from "@nextui-org/react";
import myImage from ".././public/portrait photography of a hip hop girl.webp";
import DropdownComponent from "./components/Dropdown";
import FooterDivider from "./components/Footer";
import TableDay from "./components/TableDay";



function App() {


  return (
    <>
      <Navbar>
        <NavbarMenuToggle />
        <h1 className="text-3xl font-bold underline">
          Track-Time!
        </h1>
      </Navbar>
      <Image
        width={500}
        alt="NextUI hero Image"
        src={myImage} />
        <DropdownComponent/>
        <TableDay/>
        <FooterDivider/>
    </>
  )
}

export default App;
