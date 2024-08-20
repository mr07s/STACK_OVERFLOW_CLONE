// import React, { useState } from "react";
// import menuline from "../../../assests/menuline.svg";

// import "./Leftbar";
// import { NavLink } from "react-router-dom";
// import Globe from "../../../assests/Globe.png";
// export const Leftbar = () => {
//   const [leftbar, setLeftbar] = useState(0);
//   return (
//     <div>
//       <button className="">
//         <img
//           src={menuline}
//           alt="menuline"
//           width={20}
//           height={70}
//           onClick={() => {
//             setLeftbar(leftbar ? 0 : 1);
//           }}
//         />
//       </button>
//       {leftbar && (
//         <div className="left-sidebar2">
//           <nav className="side-nav">
//             <NavLink to="/" className="side-nav-links" activeClassName="active">
//               <p>Home</p>
//             </NavLink>
//             <div className="side-nav-div">
//               <div>
//                 <p>PUBLIC</p>
//               </div>
//               <NavLink
//                 to="/Questions"
//                 className="side-nav-links"
//                 activeClassName="active"
//               >
//                 <img src={Globe} alt="Globe" />
//                 <p style={{ paddingLeft: "10px" }}>Questions</p>
//               </NavLink>
//               <NavLink
//                 to="/Tags"
//                 className="side-nav-links"
//                 activeClassName="active"
//                 style={{ paddingLeft: "40px" }}
//               >
//                 <p>Tags</p>
//               </NavLink>
//               <NavLink
//                 to="/Users"
//                 className="side-nav-links"
//                 activeClassName="active"
//                 style={{ paddingLeft: "40px" }}
//               >
//                 <p>Users</p>
//               </NavLink>
//             </div>
//           </nav>
//         </div>
//       )}
//     </div>
//   );
// };
