import { AlertCircle, Calendar, Hotel, Plane } from 'lucide-react';

const Travel = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-blue-900 mb-4">Travel Information</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Everything you need to know about getting to and staying at SKO 2025
        </p>
      </div>

      <div className="mb-12 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
        <div className="flex items-start">
          <AlertCircle className="h-6 w-6 text-yellow-400 mr-3 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-yellow-800">Important Deadline</h3>
            <p className="text-yellow-700">
              Please register and book your travel by November 20th, 2024
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12 bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="relative h-64">
          <img
            src="https://www.limelighthotels.com/wp-content/uploads/2023/03/Snowmass_Exterior_Winter-scaled.jpg"
            alt="Limelight Hotel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Limelight Hotel</h2>
              <p className="text-lg">Denver, Colorado</p>
            </div>
          </div>
        </div>
        <div className="p-8 lodge-bg-pattern">
          <div className="flex items-start gap-6">
            <Hotel className="h-6 w-6 text-blue-600 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-3">Hotel Details</h3>
              <p className="text-gray-600 mb-4">
                Experience luxury and comfort at the Limelight Hotel, nestled in the heart of Denver
                with breathtaking views of the Rocky Mountains.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Room and tax covered for the duration of SKO</li>
                <li>• Check-in: January 14, 2025</li>
                <li>• Check-out: January 17, 2025</li>
                <li>• Any deviation from these dates requires VP approval</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-xl p-8 lodge-bg-pattern">
          <div className="flex items-start gap-6">
            <Plane className="h-6 w-6 text-blue-600 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-3">Booking Your Flight</h3>
              <p className="text-gray-600 mb-4">Book your travel through Navan with these details:</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Destination: Denver International Airport (DEN)</li>
                <li>• Arrival: Tuesday, January 14, 2025</li>
                <li>• Departure: Friday, January 17, 2025</li>
                <li>• Do not book rental car (transportation provided)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 lodge-bg-pattern">
          <div className="flex items-start gap-6">
            <Calendar className="h-6 w-6 text-blue-600 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-3">Important Notes</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Airport transfers will be provided</li>
                <li>• Use #sko-2025 for all questions</li>
                <li>• Meals are provided during the event</li>
                <li>• Pack warm clothes for Denver weather</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travel;