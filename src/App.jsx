import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppShell } from '@mantine/core';
import Header from './components/layout/Header';
import Navigation from './components/layout/Navigation';
import ScanScreen from './components/screens/ScanScreen';
import ResultsScreen from './components/screens/ResultsScreen';
import ComparisonScreen from './components/screens/ComparisonScreen';

function App() {
  return (
    <BrowserRouter>
      <AppShell
        padding="md"
        header={<Header />}
        footer={<Navigation />}
        styles={(theme) => ({
          main: { backgroundColor: theme.colors.gray[0] },
        })}
      >
        <Routes>
          <Route path="/" element={<ScanScreen />} />
          <Route path="/results" element={<ResultsScreen />} />
          <Route path="/comparison" element={<ComparisonScreen />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  );
}

export default App;
