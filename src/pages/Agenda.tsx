import { Sun, Moon } from 'lucide-react';
import { FC } from 'react';

interface Event {
  time: string;
  title: string;
  description: string;
  icon: JSX.Element;
}

interface ScheduleDay {
  date: string;
  image: string;
  events: Event[];
}

const schedule: ScheduleDay[] = [
  {
    date: "Tuesday, January 14, 2025 - Arrival Day",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80",
    events: [
      {
        time: "2:00 PM - 6:00 PM",
        title: "Check-in & Registration",
        description: "Arrive at Limelight Hotel and collect your conference materials",
        icon: <Sun className="h-6 w-6 text-blue-600" />,
      },
      {
        time: "7:00 PM - 9:00 PM",
        title: "Welcome Reception",
        description: "Network with fellow Netlifiers over cocktails and mountain-inspired hors d'oeuvres",
        icon: <Moon className="h-6 w-6 text-blue-600" />,
      },
    ],
  },
  {
    date: "Wednesday, January 15, 2025 - Day 1",
    image: "https://images.unsplash.com/photo-1520962880247-cfaf541c8724?auto=format&fit=crop&q=80",
    events: [
      {
        time: "8:00 AM - 5:00 PM",
        title: "TBD",
        description: "Agenda to be announced",
        icon: <Sun className="h-6 w-6 text-blue-600" />,
      }
    ],
  },
  {
    date: "Thursday, January 16, 2025 - Day 2",
    image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&q=80",
    events: [
      {
        time: "8:00 AM - 5:00 PM",
        title: "TBD",
        description: "Agenda to be announced",
        icon: <Sun className="h-6 w-6 text-blue-600" />,
      }
    ],
  },
  {
    date: "Friday, January 17, 2025 - Departure Day",
    image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80",
    events: [
      {
        time: "Until 11:00 AM",
        title: "Hotel Check-out",
        description: "Complete check-out and prepare for departure",
        icon: <Sun className="h-6 w-6 text-blue-600" />,
      },
    ],
  },
];

const AgendaDay: FC<{ day: ScheduleDay }> = ({ day }) => (
  <div className="bg-white rounded-lg shadow-xl overflow-hidden">
    <div className="relative h-64">
      <img src={day.image} alt={day.date} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
        <div className="p-8 text-white">
          <h3 className="text-2xl font-bold">{day.date}</h3>
        </div>
      </div>
    </div>
    <div className="p-8 lodge-bg-pattern">
      <div className="space-y-6">
        {day.events.map((event, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="bg-blue-50 p-2 rounded-lg">
              {event.icon}
            </div>
            <div>
              <p className="text-sm font-semibold text-blue-600 mb-1">{event.time}</p>
              <h4 className="text-lg font-semibold text-gray-900 mb-1">{event.title}</h4>
              <p className="text-gray-600">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Agenda: FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-blue-900 mb-4">Event Agenda</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Four days of inspiration, collaboration, and celebration in the majestic Rocky Mountains
        </p>
      </div>
      <div className="space-y-8">
        {schedule.map((day, index) => (
          <AgendaDay key={index} day={day} />
        ))}
      </div>
    </div>
  );
};

export default Agenda;