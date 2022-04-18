import GeneralInformation from "./Components/GeneralInformation";
import EducationalExperience from "./Components/EducationalExperience";
import WorkExperience from "./Components/WorkExperience";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
function App() {
  return (<>
  <GeneralInformation/>
  <EducationalExperience/>
  <WorkExperience/>
  </>   
  );
}

export default App;
