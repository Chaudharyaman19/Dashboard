import "./css/header.css";
import "./css/table.css";
import {
  FaCalendarAlt,
  FaUser,
  FaChartLine,
  FaTasks,
  FaDesktop,
  FaCloudUploadAlt,
  FaComments,
  FaEnvelope,
  FaPencilAlt,
} from "react-icons/fa";

import "./css/Dashboard.css";

const About = ({ darkMode, toggleDarkMode }) => {
  // Set initial state to false

  // Update body class on darkMode change

  const transactions = [
    {
      title: "Transfer to Paypal",
      amount: "$236",
      date: "07 Jan 2019, 09:12AM",
    },
    {
      title: "Transfer to Stripe",
      amount: "$593",
      date: "07 Jan 2019, 09:12AM",
    },
  ];

  const projects = [
    {
      title: "Admin dashboard design",
      description: "Broadcast web app mockup",
      color: "bg-blue-500",
      icon: <FaDesktop className="text-white" />,
      time: "15 minutes ago",
      tasks: "30 tasks, 5 issues",
    },
    {
      title: "Wordpress Development",
      description: "Upload new design",
      color: "bg-green-500",
      icon: <FaCloudUploadAlt className="text-white" />,
      time: "1 hour ago",
      tasks: "23 tasks, 5 issues",
    },
    {
      title: "Project meeting",
      description: "New project discussion",
      color: "bg-purple-500",
      icon: <FaComments className="text-white" />,
      time: "35 minutes ago",
      tasks: "15 tasks, 2 issues",
    },
    {
      title: "Broadcast Mail",
      description: "Sent release details to team",
      color: "bg-red-500",
      icon: <FaEnvelope className="text-white" />,
      time: "55 minutes ago",
      tasks: "35 tasks, 7 issues",
    },
    {
      title: "UI Design",
      description: "New application planning",
      color: "bg-yellow-500",
      icon: <FaPencilAlt className="text-white" />,
      time: "50 minutes ago",
      tasks: "27 tasks, 4 issues",
    },
  ];
  const orders = [
    {
      name: "Henry Klein",
      orderNo: "02312",
      cost: "$14,500",
      project: "Dashboard",
      payment: "Credit card",
      date: "04 Dec 2019",
      status: "Approved",
      img: "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png",
    },
    {
      name: "Estella Bryan",
      orderNo: "02312",
      cost: "$14,500",
      project: "Website",
      payment: "Cash on delivered",
      date: "04 Dec 2019",
      status: "Pending",
      img: "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png",
    },
    {
      name: "Lucy Abbott",
      orderNo: "02312",
      cost: "$14,500",
      project: "App design",
      payment: "Credit card",
      date: "04 Dec 2019",
      status: "Rejected",
      img: "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png",
    },
    {
      name: "Peter Gill",
      orderNo: "02312",
      cost: "$14,500",
      project: "Development",
      payment: "Online Payment",
      date: "04 Dec 2019",
      status: "Approved",
      img: "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png",
    },
    {
      name: "Sallie Reyes",
      orderNo: "02312",
      cost: "$14,500",
      project: "Website",
      payment: "Credit card",
      date: "04 Dec 2019",
      status: "Approved",
      img: "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png",
    },
  ];

  return (
    <div className="w-full">
      <div>
        {" "}
        <nav className={`navbar ${darkMode ? "" : "navbar-light"}  `}>
          <div className="flex items-center ">
            <input
              type="text"
              placeholder="Search products"
              className={`input ${darkMode ? "input-dark" : "input-light"}`}
            />
          </div>
          <div className="flex items-center space-x-4">
            <button className="button button-green">
              <i className="fas fa-plus mr-2"></i>
              Create New Project
            </button>
            <i className={`fas fa-th ${darkMode ? "icon" : "icon-dark"}`}></i>
            <i
              className={`fas fa-bell ${
                darkMode ? "icon" : "icon-dark"
              } relative`}
            >
              <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
            </i>
            <i
              className={`fas fa-envelope ${
                darkMode ? "icon" : "icon-dark"
              } relative`}
            >
              <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
            </i>
            <div className="relative">
              <button onClick={toggleDarkMode} className="toggle-button">
                <div className="toggle-container">
                  <div
                    className={`toggle-circle ${
                      darkMode ? "toggle-circle-dark" : ""
                    }`}
                  ></div>
                  <i
                    className={`absolute left-1 top-1 text-yellow-500 ${
                      darkMode ? "hidden" : ""
                    } fas fa-sun`}
                  ></i>
                  <i
                    className={`absolute right-1 top-1 text-gray-900 ${
                      darkMode ? "" : "hidden"
                    } fas fa-moon`}
                  ></i>
                </div>
              </button>
            </div>

            {/* Updated Dropdown with Flex Layout */}
            <div className="dropdown">
              <button
                className={`btn dropdown-toggle ${
                  darkMode ? "btn-dark" : "btn-light"
                } flex items-center space-x-2`}
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png"
                  alt="User avatar"
                  className="w-8 h-8 rounded-full"
                />
                <span className={`${darkMode ? "text-white" : "text-black"}`}>
                  Henry Klein
                </span>
              </button>
              <ul
                className={`dropdown-menu ${
                  darkMode ? "dropdown-menu-dark" : "dropdown-menu-light"
                }`}
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <a
                    className={`dropdown-item ${
                      darkMode ? "text-white" : "text-black"
                    }`}
                    href="#"
                  >
                    <i className="fas fa-user mr-2"></i> Profile
                  </a>
                </li>
                <li>
                  <a
                    className={`dropdown-item ${
                      darkMode ? "text-white" : "text-black"
                    }`}
                    href="#"
                  >
                    <i className="fas fa-cog mr-2"></i> Settings
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    className={`dropdown-item text-danger ${
                      darkMode ? "text-white" : "text-black"
                    }`}
                    href="#"
                  >
                    <i className="fas fa-sign-out-alt mr-2"></i> Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="height">
        {" "}
        {/* <div className="dashboard-section">
          <div className="dashboard-card card-today">
            <FaCalendarAlt className="dashboard-icon" />
            <div className="dashboard-info">
              <h3>Today s Date</h3>
              <p>Nov 24, 2024</p>
            </div>
          </div>
          <div className="dashboard-card card-user">
            <FaUser className="dashboard-icon" />
            <div className="dashboard-info">
              <h3>User</h3>
              <p>John Doe</p>
            </div>
          </div>
          <div className="dashboard-card card-progress">
            <FaChartLine className="dashboard-icon" />
            <div className="dashboard-info">
              <h3>Progress</h3>
              <p>75% Completed</p>
            </div>
          </div>
          <div className="dashboard-card card-tasks">
            <FaTasks className="dashboard-icon" />
            <div className="dashboard-info">
              <h3>Tasks</h3>
              <p>3 Pending</p>
            </div>
          </div>
        </div> */}
        <div
          className={`p-8 ${
            darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
          }`}
        >
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Order Status</h1>
            {/* <button
              onClick={toggleDarkMode}
              className="px-4 py-2 rounded-md bg-blue-500 text-white"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button> */}
          </div>

          <div className="table-container">
            <table
              className={`min-w-full ${
                darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
              }`}
            >
              <thead>
                <tr
                  className={`${
                    darkMode
                      ? "bg-gray-800 text-white"
                      : "bg-gray-100 text-black"
                  }`}
                >
                  <th className="py-2 px-4"></th>
                  <th className="py-2 px-4">Client Name</th>
                  <th className="py-2 px-4">Order No</th>
                  <th className="py-2 px-4">Product Cost</th>
                  <th className="py-2 px-4">Project</th>
                  <th className="py-2 px-4">Payment Mode</th>
                  <th className="py-2 px-4">Start Date</th>
                  <th className="py-2 px-4">Payment Stat</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr
                    key={index}
                    className={`border-t ${
                      darkMode ? "hover:bg-black" : "hover:bg-gray-200"
                    }`}
                  >
                    <td className="py-2 px-4">
                      <input type="checkbox" />
                    </td>
                    <td className="py-2 px-4 flex items-center">
                      <img
                        src={order.img}
                        alt={`Profile picture of ${order.name}`}
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      {order.name}
                    </td>
                    <td className="py-2 px-4">{order.orderNo}</td>
                    <td className="py-2 px-4">{order.cost}</td>
                    <td className="py-2 px-4">{order.project}</td>
                    <td className="py-2 px-4">{order.payment}</td>
                    <td className="py-2 px-4">{order.date}</td>
                    <td className="py-2 px-4">
                      <span
                        className={`px-2 py-1 rounded ${
                          order.status === "Approved"
                            ? "bg-green-500"
                            : order.status === "Pending"
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        } text-white`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
                {orders.map((order, index) => (
                  <tr
                    key={index}
                    className={`border-t ${
                      darkMode ? "hover:bg-black" : "hover:bg-gray-200"
                    }`}
                  >
                    <td className="py-2 px-4">
                      <input type="checkbox" />
                    </td>
                    <td className="py-2 px-4 flex items-center">
                      <img
                        src={order.img}
                        alt={`Profile picture of ${order.name}`}
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      {order.name}
                    </td>
                    <td className="py-2 px-4">{order.orderNo}</td>
                    <td className="py-2 px-4">{order.cost}</td>
                    <td className="py-2 px-4">{order.project}</td>
                    <td className="py-2 px-4">{order.payment}</td>
                    <td className="py-2 px-4">{order.date}</td>
                    <td className="py-2 px-4">
                      <span
                        className={`px-2 py-1 rounded ${
                          order.status === "Approved"
                            ? "bg-green-500"
                            : order.status === "Pending"
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        } text-white`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
