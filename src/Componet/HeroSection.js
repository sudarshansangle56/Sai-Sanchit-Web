// import React, { useEffect, useRef, useState } from "react";
// import * as p5 from "p5";
// import { Link } from "react-router-dom";

// const HeroSection = () => {
//   const vantaRef = useRef(null);
//   const vantaEffect = useRef(null);
//   const [isVantaLoaded, setIsVantaLoaded] = useState(false);

//   useEffect(() => {
//     // Delay loading Vanta.js for smoother performance
//     const loadVantaEffect = () => {
//       import("vanta/dist/vanta.trunk.min").then((VANTA) => {
//         if (!vantaEffect.current && vantaRef.current) {
//           vantaEffect.current = VANTA.default({
//             el: vantaRef.current, // Attach to the div
//             p5: p5, // Required for TRUNK effect
//             mouseControls: true,
//             touchControls: true,
//             gyroControls: false,
//             minHeight: 100.0,
//             minWidth: 100.0,
//             scale: 1.0,
//             scaleMobile: 1.0,
//             spacing: 7.0,
//             backgroundAlpha: 0.0, // Reduces unnecessary rendering
//             fpsLimit: 30, // Optimizes performance
//           });
//           setIsVantaLoaded(true);
//         }
//       });
//     };

//     if ("requestIdleCallback" in window) {
//       requestIdleCallback(loadVantaEffect); // Load when the browser is idle
//     } else {
//       setTimeout(loadVantaEffect, 1000); // Fallback for older browsers
//     }

//     // Cleanup function
//     return () => {
//       if (vantaEffect.current) {
//         vantaEffect.current.destroy();
//         vantaEffect.current = null;
//       }
//     };
//   }, []);

//   return (
//     <div className="part1okd" ref={vantaRef}>
//       <div className="part2okd">
//         <div className="headline">
//           <div className="img32">
//             <h1 className="title">
//               Welcome to Sai Sanchit <br />
//               <span>Tiffin</span> Home<br />
//             </h1>
//           </div>

//           <div className="para">
//             <p>Your Delicious Destination!</p>
//           </div>
//           <p>
//             Relish nutritious, balanced meals delivered to your Kopergaon
//             doorstep. Enjoy 'Ghar ka khana' with its comforting touch,
//             customized to your preferences.{" "}
//             <span>Ab shuru karein sehatmand khaane ka anand,</span> jaise
//             aap chahein, wherever you are in Kopergaon.
//           </p>
//           <Link to="/About">
//             <button>About us</button>
//           </Link>
//         </div>
//         <div className="partimg"></div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
