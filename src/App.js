import "./App.css";
import "./styles/Form.css";
import { useState } from "react";
import postBlob from "./utils/postBlob";
import { createContext } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PostDetails from "./components/PostDetails";

export const AppContext = createContext({});

function App() {
  const [posts, setPosts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    url: "",
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    for (const key in formData) {
      if (!formData[key]) {
        return;
      }
    }
    const url = await postBlob(formData, posts);
    formData.location = url;
    formData.id = posts.length + 1;
    setShowForm(false);
    setPosts([...posts, formData]);
  };

  return (
    <AppContext.Provider
      value={{
        handleChange,
        handleSubmit,
        posts,
        setPosts,
        showForm,
        setShowForm,
      }}
    >
      <div className="App">
        {showForm && <Form />}
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts/:id" element={<PostDetails />} />
            <Route path="/about" element={<h1>This is About Page</h1>} />
          </Routes>
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;

// {
//   id: 0,
//   url: "https://bpb-us-e1.wpmucdn.com/blogs.ntu.edu.sg/dist/3/1028/files/2015/08/van-gogh-museum-20btk7n.jpg",
//   author: "Van Gogh",
//   description: "Random image from Google",
// },
// {
//   id: 1,
//   url: "https://iiif.micr.io/qDCTO/full/300,/0/default.jpg",
//   author: "Van Gogh",
//   description: "Random image from Google",
// },
// {
//   id: 2,
//   url: "https://bpb-us-e1.wpmucdn.com/blogs.ntu.edu.sg/dist/3/1028/files/2015/08/van-gogh-museum-20btk7n.jpg",
//   author: "Van Gogh",
//   description: "Random image from Google",
// },
// {
//   id: 3,
//   url: "https://iiif.micr.io/qDCTO/full/300,/0/default.jpg",
//   author: "Van Gogh",
//   description: "Random image from Google",
// },
// {
//   id: 4,
//   url: "https://bpb-us-e1.wpmucdn.com/blogs.ntu.edu.sg/dist/3/1028/files/2015/08/van-gogh-museum-20btk7n.jpg",
//   author: "Van Gogh",
//   description: "Random image from Google",
// },
// {
//   id: 5,
//   url: "https://iiif.micr.io/qDCTO/full/300,/0/default.jpg",
//   author: "Van Gogh",
//   description: "Random image from Google",
// },
