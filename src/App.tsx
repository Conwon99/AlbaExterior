import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "@/pages/Home";
import { RoofCleaning } from "@/pages/RoofCleaning";
import { SoftWashing } from "@/pages/SoftWashing";
import { PressureWashing } from "@/pages/PressureWashing";
import { PatioDrivewayCleaning } from "@/pages/PatioDrivewayCleaning";
import { DrivewayCleaning } from "@/pages/DrivewayCleaning";
import { PatioCleaning } from "@/pages/PatioCleaning";
import { GutterCleaning } from "@/pages/GutterCleaning";
import { UPVCCleaning } from "@/pages/UPVCCleaning";
import { ConservatoryCleaning } from "@/pages/ConservatoryCleaning";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roof-cleaning" element={<RoofCleaning />} />
        <Route path="/soft-washing" element={<SoftWashing />} />
        <Route path="/pressure-washing" element={<PressureWashing />} />
        <Route path="/patio-driveway-cleaning" element={<PatioDrivewayCleaning />} />
        <Route path="/driveway-cleaning" element={<DrivewayCleaning />} />
        <Route path="/patio-cleaning" element={<PatioCleaning />} />
        <Route path="/gutter-cleaning" element={<GutterCleaning />} />
        <Route path="/upvc-cleaning" element={<UPVCCleaning />} />
        <Route path="/conservatory-cleaning" element={<ConservatoryCleaning />} />
      </Routes>
    </BrowserRouter>
  );
};
