"use client";

import "./globals.css";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import { store } from "@/store/store";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
// import './globals.css';

// import Navbar from './components/Navbar';


// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body>
       
//           <Navbar />
//           {children}
     
//       </body>
//     </html>
//   );
// }