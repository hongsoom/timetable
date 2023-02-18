import '@/styles/globals.css'
import "tailwindcss/tailwind.css";
import type { AppProps } from 'next/app'

const App = ({ Component }: AppProps) => {
  return (
    <div className="bg-purple-50">
      <Component />
    </div>
  );
};

export default App;