import React, { useState } from 'react';
import bg from "../Assets/bg.jpg";

const Faculty = () => {
    const [user, setUser] = useState({
        firstName: 'Tim',
        lastName: 'Cook',
        phoneNumber: '(408) 996-1010',
        email: 'tcook@apple.com',
        city: 'New York',
        country: 'America',
    });

    const [company, setCompany] = useState({
        companyName: 'Apple',
        position: 'CEO',
        department: 'Management',
    });

    const [notifications, setNotifications] = useState({
        emailNotifications: true,
        pushNotifications: false,
        smsNotifications: false,
    });

    const [activeTab, setActiveTab] = useState('account'); // Track which tab is active

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleCompanyChange = (e) => {
        const { name, value } = e.target;
        setCompany({ ...company, [name]: value });
    };

    const handleNotificationChange = (e) => {
        const { name, checked } = e.target;
        setNotifications({ ...notifications, [name]: checked });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Profile updated successfully');
        // Logic for form submission or API request goes here
    };

    return (
        <div className="container mx-auto mt-12">
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/3 px-4">
                    <div className="bg-white shadow-md rounded-lg p-6 text-center">
                        <img
                            src="https://sourcesofinsight.com/wp-content/uploads/2011/06/Steve-Jobs-2-768x512.jpg"
                            alt="User Profile"
                            className="rounded-full object-cover mx-auto mb-4 w-28 h-28"
                        />
                        <h3 className="text-xl font-semibold">{user.firstName} {user.lastName}</h3>
                        <p className="text-gray-500">CEO of Apple</p>
                        <hr className="my-4" />
                        <p>Opportunities applied: <span className="text-blue-500">32</span></p>
                        <p>Opportunities won: <span className="text-green-500">26</span></p>
                        <p>Current opportunities: <span className="text-yellow-500">6</span></p>
                        <a href="https://domain.com/user" className="inline-block mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg">
                            View Public Profile
                        </a>
                    </div>
                </div>

                <div className="w-full md:w-2/3 px-4 mt-8 md:mt-0">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <div className="tabs">
                            <button 
                                className={`mr-4 ${activeTab === 'account' ? 'text-blue-500' : 'text-gray-500'}`}
                                onClick={() => setActiveTab('account')}>
                                Account Settings
                            </button>
                            <button 
                                className={`mr-4 ${activeTab === 'company' ? 'text-blue-500' : 'text-gray-500'}`}
                                onClick={() => setActiveTab('company')}>
                                Company Settings
                            </button>
                            <button 
                                className={`mr-4  ${activeTab === 'notifications' ? 'text-blue-500' : 'text-gray-500'}`}
                                onClick={() => setActiveTab('notifications')}>
                                Notifications
                            </button>
                            <button 
                                className={`${activeTab === 'asd' ? 'text-blue-500' : 'text-gray-500'}`}
                                onClick={() => setActiveTab('asd')}>
                                asd
                            </button>
                        </div>

                        <hr className="my-4" />

                        {/* Conditionally Render Forms */}
                        {activeTab === 'account' && (
                            <form onSubmit={handleSubmit}>
                                <h5 className="text-lg font-semibold mb-4">Account Settings</h5>
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={user.firstName}
                                            onChange={handleInputChange}
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={user.lastName}
                                            onChange={handleInputChange}
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={user.lastName}
                                            onChange={handleInputChange}
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        />
                                    </div>
                                </div>
                                {/* Add more account fields if needed */}
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Update Account
                                </button>
                            </form>
                        )}

                        {activeTab === 'company' && (
                            <form onSubmit={handleSubmit}>
                                <h5 className="text-lg font-semibold mb-4">Company Settings</h5>
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Company Name
                                        </label>
                                        <input
                                            type="text"
                                            name="companyName"
                                            value={company.companyName}
                                            onChange={handleCompanyChange}
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Position
                                        </label>
                                        <input
                                            type="text"
                                            name="position"
                                            value={company.position}
                                            onChange={handleCompanyChange}
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        />
                                    </div>
                                </div>
                                {/* Add more company fields if needed */}
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Update Company
                                </button>
                            </form>
                        )}

                        {activeTab === 'notifications' && (
                            <form onSubmit={handleSubmit}>
                                <h5 className="text-lg font-semibold mb-4">Notification Settings</h5>
                                <div className="mb-4">
                                    <label className="block text-gray-700">
                                        <input
                                            type="checkbox"
                                            name="emailNotifications"
                                            checked={notifications.emailNotifications}
                                            onChange={handleNotificationChange}
                                            className="mr-2 leading-tight"
                                        />
                                        Email Notifications
                                    </label>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">
                                        <input
                                            type="checkbox"
                                            name="pushNotifications"
                                            checked={notifications.pushNotifications}
                                            onChange={handleNotificationChange}
                                            className="mr-2 leading-tight"
                                        />
                                        Push Notifications
                                    </label>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">
                                        <input
                                            type="checkbox"
                                            name="smsNotifications"
                                            checked={notifications.smsNotifications}
                                            onChange={handleNotificationChange}
                                            className="mr-2 leading-tight"
                                        />
                                        SMS Notifications
                                    </label>
                                </div>
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Update Notifications
                                </button>
                            </form>
                        )}
                        {activeTab === 'asd' && (
                            <form onSubmit={handleSubmit}>
                                <h5 className="text-lg font-semibold mb-4">asd Settings</h5>
                                <div className="mb-4">
                                    <label className="block text-gray-700">
                                        <input
                                            type="checkbox"
                                            name="emailNotifications"
                                            checked={notifications.emailNotifications}
                                            onChange={handleNotificationChange}
                                            className="mr-2 leading-tight"
                                        />
                                        Email Notifications
                                    </label>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">
                                        <input
                                            type="checkbox"
                                            name="pushNotifications"
                                            checked={notifications.pushNotifications}
                                            onChange={handleNotificationChange}
                                            className="mr-2 leading-tight"
                                        />
                                        Push Notifications
                                    </label>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">
                                        <input
                                            type="checkbox"
                                            name="smsNotifications"
                                            checked={notifications.smsNotifications}
                                            onChange={handleNotificationChange}
                                            className="mr-2 leading-tight"
                                        />
                                        SMS Notifications
                                    </label>
                                </div>
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Update Notifications
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faculty;
