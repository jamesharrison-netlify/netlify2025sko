@@ -0,0 +1,44 @@
import { Link } from 'react-router-dom';
import { Calendar, MapPin } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col">
      <div
        className="relative h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-6xl font-bold mb-4">Netlify SKO 2025</h1>
            <p className="text-2xl mb-8">
              Join us in the heart of the Rockies for an extraordinary week of innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-6 text-lg mb-8">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <Calendar className="h-6 w-6 mr-2" />
                <span>January 14-17, 2025</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <MapPin className="h-6 w-6 mr-2" />
                <span>Limelight Hotel, Denver</span>
              </div>
            </div>
            <Link
              to="/registration"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
