"use client";
const ChangePassword = () => {
  return (
    <>
      <form>
        <div className="bg-white">
          <div className="md:grid md:grid-cols-1">
            {/* Email Field */}
            <div className="md:col-span-2 lg:mt-6 col-span-6 sm:col-span-6">
              <label className="block text-gray-700 font-medium text-sm mb-2">
                Email Address
              </label>
              <input
                type="email"
                value="justin@gmail.com"
                readOnly
                placeholder="Email Address"
                className="w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-2 text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Current Password */}
            <div className="col-span-6 sm:col-span-6 mt-4">
              <label className="block text-gray-700 font-medium text-sm mb-2">
                Current Password
              </label>
              <input
                type="password"
                placeholder="Current Password"
                className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                autoComplete="current-password"
              />
            </div>

            {/* New Password */}
            <div className="col-span-6 sm:col-span-6 mt-4">
              <label className="block text-gray-700 font-medium text-sm mb-2">
                New Password
              </label>
              <input
                type="password"
                placeholder="New Password"
                className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                autoComplete="new-password"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-5 text-right">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-teal-500 px-4 py-2 text-sm font-medium text-white hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              Change Password
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ChangePassword;
