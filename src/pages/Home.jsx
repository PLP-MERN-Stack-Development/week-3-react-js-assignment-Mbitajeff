import Button from '../components/Button';
import Card from '../components/Card';

function Home() {
  return (
    <div>
      <h1 className="text-2xl md:text-4xl font-bold text-purple-700 dark:text-purple-300 mb-4 transition-colors">Welcome to the Unique Week 3 React App!</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-6 text-base md:text-lg transition-colors">This is the Home page. Tailwind CSS is working 🎉</p>
      <Card className="animate-fade-in max-w-2xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" className="transition-transform hover:scale-105">Primary Button</Button>
          <Button variant="secondary" className="transition-transform hover:scale-105">Secondary Button</Button>
          <Button variant="danger" className="transition-transform hover:scale-105">Danger Button</Button>
        </div>
      </Card>
    </div>
  );
}

export default Home; 