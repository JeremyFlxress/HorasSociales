import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import NextFromLogin from './components/nextfromlogin';
import ExamSelection from './components/examselection';
import Agreement from './components/terminosdeuso';
import ProctorAuth from './components/proctorauth';
import ExamRequirements from './components/examrequirements';
import ExamInfo from './components/examinfo';
import Agreement2 from './components/terminosdeusopython';
import ProctorAuth2  from './components/proctorauthpython';
import ExamRequirements2 from './components/examenrequirementspython';
import ExamInfo2 from './components/examinfopython2';
import Surveypagepython from './components/surveypython';
import TutorialPython from './components/tutorialpython';
import QuestionPython1 from './components/questions_python/question1';
import AllQuestions from './components/questions_python/allquestions';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} /> 
                <Route path="/exam-setup" element={<NextFromLogin />} />
                <Route path="/exam-selection" element={<ExamSelection/>}/>
                <Route path="/agreement-page" element={<Agreement/>}/>
                <Route path="/proctor-auth" element={<ProctorAuth/>}/>
                <Route path="/exam-requirements" element={<ExamRequirements/>}/>
                <Route path="/exam-info" element={<ExamInfo/>}/>
                <Route path="/agreement-page2" element={<Agreement2/>}/>
                <Route path="/proctor-auth2" element={<ProctorAuth2/>}/>
                <Route path="/examrequirement2" element={<ExamRequirements2/>}/>
                <Route path="/examinfo2" element={<ExamInfo2/>}/>
                <Route path="/surveypython" element={<Surveypagepython/>}/>
                <Route path="/tutorialpython" element={<TutorialPython/>}/>                
                <Route path="/questionpython1" element={<QuestionPython1/>}/>                               
                <Route path="/allquestions" element={<AllQuestions/>}/>                

            </Routes>
        </Router>
    );
}

export default App;
