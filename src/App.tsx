import { JSX, useEffect, useState } from 'react';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ThemeProvider } from './hooks/themeContext';
import HomePage from './Home';
import { Preloader } from './components/Preloader';
import { ToastContainer } from 'react-toastify';
import NavBar from './components/TopNavBar';
import { GlobalContextProvider } from './hooks/GlobalContext';

type RouteType = {
  path: string;
  element: JSX.Element;
  name: string;
};

function App() {
  const router = useLocation();
  const [showPreloader, setShowPreloader] = useState<string>('');

  const publicRoutes: RouteType[] = [
    { path: '/', element: <HomePage />, name: 'Home' },
  ];

  useEffect(() => {
    const handlePreloaderFn = () => setShowPreloader('hidden');

    if (!['/'].includes(router.pathname)) {
      handlePreloaderFn();
    }

    const time = 3200;
    const firstTimeLoad = sessionStorage.getItem('Load') === 'true';

    if (firstTimeLoad) {
      handlePreloaderFn();
    }

    const timer = setTimeout(() => {
      sessionStorage.setItem('Load', 'true');
      handlePreloaderFn();
    }, time);

    return () => clearTimeout(timer);
  }, [router.pathname]);

  return (
    <GlobalContextProvider>
      <ThemeProvider>
        <Preloader visibility={showPreloader} />
        <main className='bg-grey50 dark:bg-grey900 w-screen'>
          <ToastContainer position="top-right" closeOnClick />
          <NavBar />
          <div className='bg-transparent flex-1 lg:mt-20 lg:ml-20 px-4 md:p-6'>
              <Routes>
                {publicRoutes.map((route) => (
                  <Route key={route.name} path={route.path} element={route.element} />
                ))}
              </Routes>
          </div>
        </main>
      </ThemeProvider>
    </GlobalContextProvider>
  );
}

export default App;