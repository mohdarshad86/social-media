import './App.css';
import Post from './components/Post';

function App() {


  let posts = ['post1', 'post2', 'post3'];
  return (
    <div className="App">
      {posts.map((post) => (
         <Post post={post} />
      ))}
    </div>
  );
}

export default App;
