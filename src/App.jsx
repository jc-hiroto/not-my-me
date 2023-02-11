import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import HomeContainer from "@/containers/HomeContainer";
import NotFoundContainer from "@/containers/NotFoundContainer";
import RedirectContainer from "@/containers/redirectContainer";
import ResumeDownloadContainer from "@/containers/resumeDownloadContainer";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route
          path="/resume"
          element={
            <ResumeDownloadContainer url="https://github.com/weitude/me/raw/main/public/chia_wei_lin_resume.pdf" />
          }
        />
        <Route
          path="/linkedin"
          element={
            <RedirectContainer
              title="LinkedIn"
              url="https://linkedin.com/in/ericcwlin"
            />
          }
        />
        <Route
          path="/github"
          element={
            <RedirectContainer
              title="GitHub"
              url="https://github.com/weitude"
            />
          }
        />
        <Route
          path="/instagram"
          element={
            <RedirectContainer
              title="Instagram"
              url="https://www.instagram.com/5a.0401/"
            />
          }
        />
        <Route path="/404" element={<NotFoundContainer />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
