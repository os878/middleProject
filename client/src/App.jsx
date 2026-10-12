import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./common/Layout"
import TasksList from "./tasks/TasksList"
import AddTask from "./tasks/AddTask"
import AddArticle from "./articles/AddArticle"
import ArticlesList from "./articles/ArticlesList"
import UsersList from "./users/UsersList"
import AddUser from "./users/AddUser"
import AlbumsList from "./albums/AlbumsList"
import AddAlbum from "./albums/AddAlbum"
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<h1>home page</h1>} />
            <Route path="/tasks" element={<TasksList />} />
            <Route path="/article" element={<ArticlesList />} />
            <Route path="/users" element={<UsersList />} />
            <Route path="/user" element={<UsersList />} />
            <Route path="/albums" element={<AlbumsList />} />
            <Route path="/tasks/add" element={<AddTask />} />
            <Route path="/article/add" element={<AddArticle />} />
            <Route path="/users/add" element={<AddUser />} />
            <Route path="/albums/add" element={<AddAlbum />} />

          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
