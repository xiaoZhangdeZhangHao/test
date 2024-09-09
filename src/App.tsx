
import Chart from './charts/BarChart';
import Routes from './routes'; // 引入路由组件
import { useEffect, useState } from 'react';
function App() {
  const [pageToDisplay, setPageToDisplay] = useState(null);

  useEffect(() => {
    // 设置 userInfo 到 localStorage
    const userInfo = { departmentId: 2 };
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <Routes />
      </main>
    </div>
  );
}

export default App;
