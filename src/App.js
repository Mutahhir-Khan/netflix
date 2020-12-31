import Jumbotron from "./Components/Jumbotron/index";
import jumboData from "./Fixtures/jumbo.json"

function App() {
  return (
    <div>
      <Jumbotron.Container>
        {jumboData.map((item) => (
          <Jumbotron key={item.id} direction={item.direction}>
            {/* this gonna on left side */}
            <Jumbotron.Pane>
              <Jumbotron.Title>{item.title}</Jumbotron.Title>
              <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle> {/* -->  same as passing the props */} 
            </Jumbotron.Pane>
            {/* this gonna be on right */}
            <Jumbotron.Pane>
              <Jumbotron.Image src={item.image} alt={item.alt} />
            </Jumbotron.Pane>

          </Jumbotron>
        ))}
      </Jumbotron.Container>
    </div>
  );
}

export default App;
