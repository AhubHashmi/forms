import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Courses from "../screen/admin";
import Course from "../screen/courses";
import Home from "../screen/home";
import Login from "../screen/login";
import Quiz from "../screen/quiz";
import Signup from "../screen/signup";
import StudentList from "../screen/students";
function AppRouter() {
  return (
    <>
      <Router>
        <div>
          <Link to='/'>Home</Link>
          <Link to='signup'>Signup</Link>
          <Link to='login'>Login</Link>
          <Link to='stdlist'>StudentList</Link>
          <Link to='courses'>Courses</Link>
          <Link to='admin'>Admin</Link>
          <Link to='quiz'>Quiz</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="stdlist" element={<StudentList />} />
          <Route path="courses" element={<Course />} />
          <Route path="admin" element={<Courses />} />
          <Route path="quiz" element={<Quiz />} />
        </Routes>
      </Router>
    </>
  );
}
export default AppRouter;
