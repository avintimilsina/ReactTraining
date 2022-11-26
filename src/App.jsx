import Weather from "./components/Weather";
import { Outlet, Link, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/weather'>Weather</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/posts' element={<Post />} />
          <Route path='/weather' element={<Weather />} />
        </Route>
        <Route path='/weather' element={<Weather />} />
      </Routes>
    </div>
  );
}
function Home() {
  return (
    <>
      <div>Header</div>
      <div>Sidebar</div>
      <Outlet />
      <div>Footer</div>
    </>
  );
}

function Post() {
  return <div>My posts</div>;
}
