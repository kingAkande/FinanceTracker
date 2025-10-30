import React from 'react'

const SignUp = () => {
  return (
    <div className="text-center">

  <div
    className="bg-white border-violet-400 rounded-2xl shadow-[0_25px_50px_rgba(0,0,0,0.25)] border-[8px] overflow-hidden mx-auto transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(0,0,0,0.3)] w-[350px] md:w-[689px] lg:w-[900px] min-h-screen"
  >
    <div className="flex flex-col h-full">
      {/* <!-- Header --> */}
      <div className="relative bg-gradient-to-br from-indigo-600 to-violet-600 text-white text-center p-10 overflow-hidden">
        <div className="relative z-10">
          <div className="text-4xl mb-2">💰 FinanceTracker</div>
          <div className="opacity-90 text-base">Start your financial journey today</div>
        </div>
        <div className="absolute top-[-50%] right-[-50%] w-[200px] h-[200px] bg-white/10 rounded-full animate-[float_6s_ease-in-out_infinite]"></div>
      </div>

      {/* <!-- Form --> */}
      <div className="flex-1 flex flex-col justify-center p-10">
        <div className="text-center mb-8">
          <h2 className="text-slate-800 font-bold text-xl mb-1">Create Account</h2>
          <p className="text-slate-500 text-sm">Join thousands managing their finances smarter</p>
        </div>

        <form >
          <div className="grid grid-cols-2  gap-4 mb-5">
            <div>
              <label className="block mb-2  font-medium text-slate-700 text-sm ">First Name</label>
              <input type="text" placeholder="Sulaimon"
                className="w-full border-2 border-slate-200 rounded-lg py-3 px-4 transition-all focus:outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 placeholder:text-slate-400" />
            </div>
            <div>
              <label className="block mb-2 font-medium text-slate-700 text-sm">Last Name</label>
              <input type="text" placeholder="Akande"
                className="w-full border-2 border-slate-200 rounded-lg py-3 px-4 transition-all focus:outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 placeholder:text-slate-400" />
            </div>
          </div>

          <div className="mb-5">
            <label className="block mb-2 font-medium text-slate-700 text-sm ">Email Address</label>
            <input type="email" placeholder="kingakande@gmail.com"
              className="w-full border-2 border-slate-200 rounded-lg py-3 px-4 transition-all focus:outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 placeholder:text-slate-400" />
          </div>

          <div className="mb-5">
            <label className="block mb-2 font-medium text-slate-700 text-sm">Password</label>
            <input type="password" placeholder="Create a strong password"
              className="w-full border-2 border-slate-200 rounded-lg py-3 px-4 transition-all focus:outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 placeholder:text-slate-400" />
            <div className="mt-2 h-1 bg-slate-200 rounded">
              <div className="h-full w-1/3 bg-red-500 rounded transition-all"></div>
            </div>
     
          </div>

          <div className="mb-5">
            <label className="block mb-2 font-medium text-slate-700 text-sm">Confirm Password</label>
            <input type="password" placeholder="Re-enter your password"
              className="w-full border-2 border-slate-200 rounded-lg py-3 px-4 transition-all focus:outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 placeholder:text-slate-400" />
          </div>

          <div className="flex items-start gap-3 mb-6">
            <div className="w-4 h-4 border-2 border-slate-300 rounded cursor-pointer relative peer"></div>
            <p className="text-slate-500 text-sm leading-snug">
              I agree to the
              <a href="#" className="text-indigo-600 font-medium hover:underline">Terms of Service</a> and
              <a href="#" className="text-indigo-600 font-medium hover:underline">Privacy Policy</a>
            </p>
          </div>

          <button type="submit"
            className="w-full bg-gradient-to-br from-indigo-600 to-violet-600 text-white font-semibold rounded-lg py-3 text-base transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(79,70,229,0.3)] active:translate-y-0 mb-5">
            Create Account
          </button>
        </form>

        <div className="flex items-center my-5 text-slate-400 text-sm">
          <div className="flex-1 h-px bg-slate-200"></div>
          <span className="mx-3">or sign up with</span>
          <div className="flex-1 h-px bg-slate-200"></div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <button
            className="flex items-center justify-center gap-2 border-2 border-slate-200 rounded-lg bg-white text-slate-700 font-medium py-3 transition-all hover:bg-slate-50 hover:-translate-y-0.5">
            <div className="w-4 h-4 bg-[#ea4335] rounded-sm"></div>
            <span>Google</span>
          </button>
          <button
            className="flex items-center justify-center gap-2 border-2 border-slate-200 rounded-lg bg-white text-slate-700 font-medium py-3 transition-all hover:bg-slate-50 hover:-translate-y-0.5">
            <div className="w-4 h-4 bg-black rounded-sm"></div>
            <span>Apple</span>
          </button>
        </div>

        <div className="text-center text-slate-500 text-sm">
          Already have an account?
          <a href="#" className="text-indigo-600 font-semibold hover:underline">Sign in</a>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default SignUp