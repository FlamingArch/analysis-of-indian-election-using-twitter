import { Button } from "./Supporting/Button";
import SectionCard from "./Supporting/SectionCard";
import SectionControls from "./Supporting/SectionControls";
import { SectionHeading } from "./Supporting/SectionHeading";
import TopBar from "./TopBar";

function App() {
  return (
    <div className="w-screen min-h-screen bg-white">
      <TopBar />
      <div className="h-16"></div>
      <SectionCard>
        <SectionHeading>Parties</SectionHeading>
        Run Sentiment Analysis on tweets mentioning Top Political Parties.
        <SectionControls>
          <Button>Run</Button>
        </SectionControls>
      </SectionCard>
      <SectionCard>
        <SectionHeading>Leaders</SectionHeading>
        Run Sentiment Analysis on tweets mentioning Top Political Leaders.
        <SectionControls>
          <Button>Run</Button>
        </SectionControls>
      </SectionCard>
      <SectionCard>
        <SectionHeading>Controversies</SectionHeading>
        Run Sentiment Analysis on tweets mentioning Top Political Controversies.
        <SectionControls>
          <Button>Run</Button>
        </SectionControls>
      </SectionCard>
    </div>
  );
}

export default App;
