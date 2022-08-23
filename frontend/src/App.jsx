
import 'antd/dist/antd.min.css';
import { BrowserRouter } from 'react-router-dom';
import CustomLayout from './containers/Layout';
import BaseRouter from './routes';

const App =() => {
    return (
      <div className='App'>
        <BrowserRouter>
          <CustomLayout>
            <BaseRouter/>
          </CustomLayout>
        </BrowserRouter>
        
      </div>
    )
  }


export default App;
