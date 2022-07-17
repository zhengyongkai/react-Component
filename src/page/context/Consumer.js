import { ThemeContext } from './provider';
import './index.css';

function ConsumerPage() {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        return <div className={theme}>123</div>;
      }}
    </ThemeContext.Consumer>
  );
}

export default ConsumerPage;
