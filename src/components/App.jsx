import { Component } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { Section } from "./Section/Section";

export class App extends Component {
   state = {
  contacts: [],
  name: ''
   } 
   render() {
      return (
         <div>
            <GlobalStyle />
            


            <Section title = 'Phonebook'></Section>
      </div>)
      
   }
};
