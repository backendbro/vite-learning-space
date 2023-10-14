import Heading from "./components/Heading"
import { Section } from "./components/Sections"
import Counter from "./components/counter"
import List from "./components/List"


function App() {
  

  return (
    <>
    <Heading title={"Hello"}/>
    <Section> Hello world </Section>

    <Counter>{(num: number) => <>Current Count: {num}</>}</Counter>


    <List 
      items = {["Coffee", "Tacos", "Mango", "Fanta"]}
      render = {(item:string) => <span className="bpld">{item}</span>}
    />
    </>
    )
}

export default App