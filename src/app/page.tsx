
import Home from '@/app/home/page';

export const dynamic = 'force-static'
export const revalidate = 3600

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
     <Home />
    </div>
  );
};

export default HomePage;
