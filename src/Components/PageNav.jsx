import { NavLink } from "react-router-dom";
import Header from "../Pages/Header";

const PageNav = () => {
  return (
    <nav className="bg-slate-100 py-5">

      <div className="flex justify-center gap-4 flex-wrap">

        <NavComponent name="Dashboard" linkTo="/dashboard" emoji="🏠" />
     
        <NavComponent name="Transaction" linkTo="/transaction" emoji="💳" />
      
        <NavComponent name="Report" linkTo="/report" emoji="📊" />
     
        <NavComponent name="Budget" linkTo="/budget" emoji="🎯" />
    
        <NavComponent name="Setting" linkTo="/settings"  />
      </div>
    </nav>
    // <div class="bg-slate-100 py-5">
    //   <div class="flex justify-center gap-4 flex-wrap">
    //     <button class="bg-indigo-600 text-white px-6 py-3 rounded-full shadow font-medium transition">
    //       Dashboard
    //     </button>
    //     <button class="bg-white px-6 py-3 rounded-full shadow font-medium transition hover:bg-indigo-50">
    //       Transactions
    //     </button>
    //     <button class="bg-white px-6 py-3 rounded-full shadow font-medium transition hover:bg-indigo-50">
    //       Reports
    //     </button>
    //     <button class="bg-white px-6 py-3 rounded-full shadow font-medium transition hover:bg-indigo-50">
    //       Budget
    //     </button>
    //     <button class="bg-white px-6 py-3 rounded-full shadow font-medium transition hover:bg-indigo-50">
    //       Settings
    //     </button>
    //   </div>
    // </div>
  );
};

export default PageNav;

// function Button({ emoji, name }) {
//   return (
//     <button className="border-2 border-[#e2e8f0] lg:px-4 cursor-pointer hover:text-[#4f46e5] transition-colors duration-600    hover:border-[#4f46e5] rounded-2xl  px-2 py-1">
//       {emoji}
//       <span className="pl-1">{name}</span>
//     </button>
//   );
// }

function NavComponent({ name, linkTo }) {
  return (
    <NavLink
      to={linkTo}
      className={({ isActive }) =>
        `px-4 py-2 rounded-full shadow font-medium  transition   ${
          isActive
            && "bg-[#4f46e5] text-white "
          
        }`
      }
    >
      <span className="mr-2"></span> {name}
    </NavLink>
  );
}
