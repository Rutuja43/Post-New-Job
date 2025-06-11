import { FaBars, FaBell, FaCommentDots, FaSearch } from 'react-icons/fa';
import './App.css';
import JobHeader from './components/JobHeader';

export default function PostNewJob() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <header className="bg-white flex items-center justify-between px-4 md:px-8 py-3 shadow">
        <div className="flex items-center space-x-4">
          <FaBars className="text-xl cursor-pointer" />
          <div className="relative w-72 hidden md:block">
            <input
              type="text"
              placeholder="Search by name, email, contact or location"
              className="w-full border rounded-full py-2 pl-10 pr-4 text-sm shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <FaSearch className="absolute top-2.5 left-3 text-gray-400" />
          </div>
        </div>

        <div className="flex items-center space-x-5">
          <FaCommentDots className="text-xl text-gray-600 relative">
            <span className="absolute -top-2 -right-2 w-2.5 h-2.5 bg-orange-500 rounded-full"></span>
          </FaCommentDots>
          <FaBell className="text-xl text-gray-600 relative">
            <span className="absolute -top-2 -right-2 w-2.5 h-2.5 bg-orange-500 rounded-full"></span>
          </FaBell>
          <img
            src="/profile.jpg" // replace with the correct path
            alt="User"
            className="w-8 h-8 rounded-full object-cover border border-gray-300"
          />
        </div>
      </header>

      {/* Main Content */}
      <div className="bg-white shadow-lg rounded-2xl max-w-4xl mx-auto mt-6 p-8">
        <JobHeader />
     

        {/* Steps */}
        <h1 className="text-xl mt-8 mb-4 text-left font-bold text-blue-600">Post a New Job</h1>
        <div className="flex justify-center space-x-8 mb-8">
          <div className="text-center">
            <div className="w-10 h-10 bg-blue-500 rounded-full text-white flex items-center justify-center">1</div>
            <p className="text-sm mt-2">Job Details</p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 bg-gray-300 rounded-full text-white flex items-center justify-center">2</div>
            <p className="text-sm mt-2">Payment and Package</p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 bg-gray-300 rounded-full text-white flex items-center justify-center">3</div>
            <p className="text-sm mt-2">Confirmation</p>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-6">
          <h1 className="text-xl mb-4 text-left text-blue-600">Job Details</h1>
          <div>
            <label className="block text-sm font-medium text-gray-700">Job Title</label>
            <input
              type="text"
              placeholder="E.g Senior UI/UX designer"
              className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Add your job description *</label>
            <textarea
              rows={4}
              placeholder="Description"
              className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Job Location</label>
              <input
                type="text"
                placeholder="e.g Pune"
                className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Company Name</label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Application Deadline *</label>
              <input
                type="date"
                className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Job Type</label>
              <select className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Internship</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Required Skills</label>
            <input
              type="text"
              placeholder="Add Skill"
              className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Suggested Skills</label>
            <div className="flex flex-wrap gap-2 mt-1">
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full cursor-pointer">
                + Accounting
              </span>
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full cursor-pointer">
                + Accounting
              </span>
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full cursor-pointer">
                + Accounting
              </span>
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full cursor-pointer">
                + Accounting
              </span>
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full cursor-pointer">
                + Accounting
              </span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Salary</label>
            <input
              type="text"
              placeholder="e.g 20LPA"
              className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Experience</label>
              <input
                type="text"
                placeholder="e.g 5+ year"
                className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Gender</label>
              <input
                type="text"
                placeholder="e.g female"
                className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Industry</label>
            <input
              type="text"
              placeholder="e.g finance"
              className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <h2 className="text-xl mt-8 mb-4 text-left text-blue-600">Address / Location</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Country</label>
              <input
                type="text"
                placeholder="e.g select country"
                className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">State</label>
              <input
                type="text"
                placeholder="e.g select state"
                className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">City</label>
              <input
                type="text"
                placeholder="e.g select city"
                className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Postal Code</label>
              <input
                type="text"
                placeholder="Enter code"
                className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Address</label>
            <textarea
              rows={3}
              placeholder="e.g Add address"
              className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          <div className="text-right mt-6">
            <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Post Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


