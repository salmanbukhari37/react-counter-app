import React from "react";

// stateless class component
const Navbar = ({ totalCounters }) => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="home">
          Navbar{" "}
          <span className="badge badge-pill badge-primary">
            {totalCounters}
          </span>
        </a>
      </nav>
    </>
  );
};

export default Navbar;

// statefull class component

// class NavigationComponent extends Component {
//   render() {
//     return (
//       <>
//         <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
//           <a className="navbar-brand" href="home">
//             Navbar{" "}
//             <span className="badge badge-pill badge-primary">
//               {this.props.totalCounters}
//             </span>
//           </a>
//         </nav>
//       </>
//     );
//   }
// }

// export default NavigationComponent;
