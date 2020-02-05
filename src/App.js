import React,{useEffect,useState} from 'react';
import './App.css';
import {Route,Switch,withRouter} from 'react-router-dom';
import {Navbar} from './components/Navbar';
import {Home} from './components/Home';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/analytics';
import 'firebase/storage';
import { scrollToTop } from './utils/utils';
import { Contact } from './components/Contact';
import { AdminContainer } from './containers/AdminContainer';


let isMobile  = window.innerWidth<789;

const firebaseConfig = {
  apiKey: "AIzaSyDGNSPjJw_dt1MCU3qEPtdeuVmYsOsso7o",
  authDomain: "braindance.firebaseapp.com",
  databaseURL: "https://braindance.firebaseio.com",
  projectId: "braindance",
  storageBucket: "braindance.appspot.com",
  messagingSenderId: "1007364492657",
  appId: "1:1007364492657:web:68b595267d2797c28a3ad0",
  measurementId: "G-11HNEL58SP"
};


firebase.initializeApp(firebaseConfig);
firebase.analytics();


const db = firebase.firestore();
const storage = firebase.storage();

export {
  storage,db,firebase
}



function App(props) {
  const [posts,setPosts] = useState(undefined);


  useEffect(()=>{
    props.history.listen((e)=>{
      // let path = e.pathname;
      // if(path !== '/horarios/jesus_maria' && path !== '/horarios/san_borja' && path !== '/horarios/zarate' && path !== '/horarios/surco'){
        scrollToTop();
      // }
    });
  },[props.history]);


  useEffect(()=>{
    fillPosts();
  },[]);



  const fillPosts =()=>{
    let postsObject = {};
    let postsRef = db.collection('posts');
    postsRef.get()
    .then(snapshot => {
        snapshot.forEach(doc => {
        // list.push(<PostLink key={doc.id} id={doc.id} url={doc.data().url} text={doc.data().text} />);
        postsObject[doc.id] = {
          url: doc.data().url,
          text: doc.data().text,
          header: doc.data().header
        }
        });
        setPosts(postsObject);
    })
    .catch(err => {
        console.log('Error getting documents', err);
    });}

  return (
    <div className="App">
        <Navbar isMobile={isMobile}/>
        <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route path="/contact" exact>
              <Contact/>
            </Route>
            <Route path="/admin" exact>
              <AdminContainer fillPosts={fillPosts} posts={posts}  />
            </Route>
        </Switch>
        {/* <Footer/> */}
    </div>
  );
}

export default withRouter(App);
