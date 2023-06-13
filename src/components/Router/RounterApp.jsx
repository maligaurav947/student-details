import React from "react";
import { Route, Routes } from "react-router";
import Home from "./../Home/Home";
import Candidates from "./../Candidate/Candidates";
import AddCandidate from "./../Candidate/AddCand/AddCandidate";
import Syllabus from "../Syllabus/Syllabus";
import Civil from "./../Syllabus/Civil/Civil";
import CivilFirstYear from "./../Syllabus/Civil/CivilFirstYear";
import CivilSecoundYear from "./../Syllabus/Civil/CivilSecoundYear";
import CivilThirdYear from "./../Syllabus/Civil/CivilThirdYear";
import CivilForthYear from "./../Syllabus/Civil/CivilForthYear";
import Computer from "./../Syllabus/Computer/Computer";
import CompFirstYear from "./../Syllabus/Computer/CompFirstYear";
import CompSecoundYear from "./../Syllabus/Computer/CompSecoundYear";
import CompThirdYear from "./../Syllabus/Computer/CompThirdYear";
import CompForthYear from "./../Syllabus/Computer/CompForthYear";
import Mechanical from "../Syllabus/Mechanical/Mechanical";
import MechFirstYear from "./../Syllabus/Mechanical/MechFirstYear";
import MechSecoundYear from "./../Syllabus/Mechanical/MechSecoundYear";
import MechThirdYear from "./../Syllabus/Mechanical/MechThirdYear";
import MechForthYear from "./../Syllabus/Mechanical/MechForthYear";
import Electronics from "./../Syllabus/Electronics/Electronics";
import ElecFirstYear from "./../Syllabus/Electronics/ElecFirstYear";
import ElecSecoundYear from "./../Syllabus/Electronics/ElecSecoundYear";
import ElecThirdYear from "./../Syllabus/Electronics/ElecThirdYear";
import ElecForthYear from "./../Syllabus/Electronics/ElecForthYear";
import View from "./../Candidate/View/View";
import Error from "./../asst/Error";

function RounterApp() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/candidates" element={<Candidates />} />
      <Route path="/add" element={<AddCandidate />} />
      <Route path="/update/:id" element={<AddCandidate />} />
      <Route path="/view/:id" element={<View />} />
      <Route path="/syllabus" element={<Syllabus />} />
      <Route path="/civil" element={<Civil />} />
      <Route path="/civil/first" element={<CivilFirstYear />} />
      <Route path="/civil/secound" element={<CivilSecoundYear />} />
      <Route path="/civil/third" element={<CivilThirdYear />} />
      <Route path="/civil/forth" element={<CivilForthYear />} />
      <Route path="/computer" element={<Computer />} />
      <Route path="/computer/first" element={<CompFirstYear />} />
      <Route path="/computer/secound" element={<CompSecoundYear />} />
      <Route path="/computer/third" element={<CompThirdYear />} />
      <Route path="/computer/forth" element={<CompForthYear />} />
      <Route path="/mechanical" element={<Mechanical />} />
      <Route path="/mechanical/first" element={<MechFirstYear />} />
      <Route path="/mechanical/secound" element={<MechSecoundYear />} />
      <Route path="/mechanical/third" element={<MechThirdYear />} />
      <Route path="/mechanical/forth" element={<MechForthYear />} />
      <Route path="/electronics" element={<Electronics />} />
      <Route path="/electronics/first" element={<ElecFirstYear />} />
      <Route path="/electronics/secound" element={<ElecSecoundYear />} />
      <Route path="/electronics/third" element={<ElecThirdYear />} />
      <Route path="/electronics/forth" element={<ElecForthYear />} />

      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default RounterApp;
