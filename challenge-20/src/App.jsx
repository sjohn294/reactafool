// import PortfolioContainer from "./components/PortfolioContainer";
import { useState } from 'react';
import NavTabs from './components/NavTabs'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Resume from './components/pages/Resume'
import MyWork from './components/pages/MyWork';
// const App = () => <PortfolioContainer />;
const App = ()=> {
    const [currentPage, setCurrentPage] = useState('Home');
    const renderPage = () => {
        if(currentPage==='Home'){
          return <About />
        }
        if (currentPage === 'Resume') {
          return <Resume />
        }
        
        if (currentPage === 'Blog') {
          return <MyWork />
        }
        return (
            <Contact />
        )
      };
    
    const handlePageChange = (page) => setCurrentPage(page);
    
    return (
        <>
        <header style= {{border:'1px solid black', width:"100%", textAlign:'center'}}>
            <h1 className="title">Sammy's PJs</h1>
            <NavTabs currentPage={currentPage} handlePageChange= {handlePageChange} />
        </header>
        <main>{renderPage()}</main>
        <footer className='sticky-foot'>
          <p>SammyWammy 2023</p>
      </footer>
        </>
    );
   


}

export default App;

