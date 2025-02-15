"use client";
const SignUp = () => {

  return (
    <div className="max-w-[400px] mx-auto mt-12 text-center">
      <h2>Sign Up</h2>
      <form>
        <div>
          <input
            placeholder="Enter your email"
            value={email}
            required
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
        </div>
        <div>
          <input
            type="password"
            placeholder="Confirm your password"
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
        </div>
        <button
        className="w-full p-2.5 bg-blue-600 text-white border-none cursor-pointer">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;