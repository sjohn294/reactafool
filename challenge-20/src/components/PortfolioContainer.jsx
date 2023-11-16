import { useState } from 'react';
import NavTabs from './NavTabs';
// import Resume from './pages/Resume'
// import About from './pages/About';
// import MyWork from './pages/MyWork';
// import Contact from './pages/Contact';

export default function PortfolioContainer() {
  

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if(currentPage==='Home'){
      return <h2>Home</h2>
    }
    if (currentPage === 'Resume') {
      return <h2>Resume</h2>
    }
    if (currentPage === 'About') {
      return <h2>About</h2>
    }
    if (currentPage === 'Blog') {
      return <h2>work</h2>;
    }
    return (
      <h2>Contact</h2>
    )
  };


  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>{renderPage()}</main>
    </div>
  );
}
