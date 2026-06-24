import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import OurMission from './Pages/OurMission'
import OurVision from './Pages/OurVision'
import Director from './Pages/Director'
import Teachers from './Pages/Teachers'
import ComputerCourse from './Pages/ComputerCourse'
import ProgrammingCourse from './Pages/ProgrammingCourse'
import TutionCourse from './Pages/TutionCourse'
import CheckAttendance from './Pages/CheckAttendance'
import MarksheetVerification from './Pages/MarksheetVerification'
import Result from './Pages/Result'
import AdmitCard from './Pages/AdmitCard'
import ICard from './Pages/ICard'
import JanSewaKendra from './Pages/JanSewaKendra'
import Csc from './Pages/Csc'
import Banking from './Pages/Banking'
import Library from './Pages/Library'
import ComputerForm from './Pages/ComputerForm'
import ComptitionForm from './Pages/ComptitionForm'
import ScholarshipFrom from './Pages/ScholarshipFrom'
import TuitionForm from './Pages/TuitionForm'
import CheckFormStatus from './Pages/CheckFormStatus'
import ImageGallery from './Pages/ImageGallery'
import VideoGallery from './Pages/VideoGallery'
import ContacUs from './Pages/ContacUs'
import AdmissionEnquiry from './Pages/AdmissionEnquiry'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="our-mission" element={<OurMission />} />
      <Route path="our-vision" element={<OurVision />} />
      <Route path="director-message" element={<Director />} />
      <Route path="teachers" element={<Teachers />} />
      <Route path="computer-course" element={<ComputerCourse />} />
      <Route path="programming-course" element={<ProgrammingCourse />} />
      <Route path="tution-classes" element={<TutionCourse />} />
      <Route path="check-attendance" element={<CheckAttendance />} />
      <Route path="marksheet-verification" element={<MarksheetVerification />} />
      <Route path="result" element={<Result />} />
      <Route path="admit-card" element={<AdmitCard />} />
      <Route path="i-card" element={<ICard />} />
      <Route path="jan-sewa-kendra" element={<JanSewaKendra />} />
      <Route path="csc" element={<Csc />} />
      <Route path="banking" element={<Banking />} />
      <Route path="library" element={<Library />} />
      <Route path="computer-form" element={<ComputerForm />} />
      <Route path="competition-form" element={<ComptitionForm />} />
      <Route path="scholarship-form" element={<ScholarshipFrom />} />
      <Route path="tuition-form" element={<TuitionForm/>} />
      <Route path="check-form-status" element={<CheckFormStatus/>} />
      <Route path="image-gallery" element={<ImageGallery/>} />
      <Route path="video-gallery" element={<VideoGallery/>} />
      <Route path="contact-us" element={<ContacUs/>} />
      <Route path="admission-enquiry" element={<AdmissionEnquiry/>} />






    </Routes>
  )
}

export default App

