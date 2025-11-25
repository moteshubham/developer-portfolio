import { Link } from 'react-router-dom';

export default function Challenges() {
  const challenges = [
    {
      id: 'todo-kanban',
      title: 'Todo Kanban Board',
      description: 'A drag-and-drop kanban board for managing tasks',
      difficulty: 'Intermediate',
      status: 'Completed',
      link: '/challenges/todo-kanban'
    },
    {
      id: 'pagination',
      title: 'Pagination Component',
      description: 'A reusable pagination component with page navigation',
      difficulty: 'Beginner',
      status: 'In Progress',
      link: '/challenges/pagination'
    },
    {
      id: 'toggle-state',
      title: 'Toggle State Management',
      description: 'Advanced state management with custom hooks',
      difficulty: 'Advanced',
      status: 'Planned',
      link: '/challenges/toggle-state'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-yellow-100 text-yellow-800';
      case 'Planned': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-blue-100 text-blue-800';
      case 'Intermediate': return 'bg-orange-100 text-orange-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-100 mb-4">React Coding Challenges</h1>
          <p className="text-lg text-gray-100">
            A collection of React challenges showcasing different concepts and techniques
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {challenges.map((challenge) => (
            <div key={challenge.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(challenge.status)}`}>
                    {challenge.status}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(challenge.difficulty)}`}>
                    {challenge.difficulty}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {challenge.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm">
                  {challenge.description}
                </p>
                
                <Link
                  to={challenge.link}
                  className={`inline-block w-full text-center py-2 px-4 rounded-md font-medium transition-colors duration-200 ${
                    challenge.status === 'Planned'
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                  onClick={(e) => {
                    if (challenge.status === 'Planned') {
                      e.preventDefault();
                    }
                  }}
                >
                  {challenge.status === 'Planned' ? 'Coming Soon' : 'View Challenge'}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
