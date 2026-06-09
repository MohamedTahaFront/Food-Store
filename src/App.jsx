import Home from "./components/Home/Home";
import { useContext } from "react";
import { apiContext } from "./context/ApiContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Products from "./components/Products/Products";
import { Toaster } from "sonner";
import Error404 from "./components/Errors/Error404";
import { DotLoader } from "react-spinners";

function App() {
  const { loading } = useContext(apiContext);

  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "products", element: <Products /> },
        { path: "*", element: <Error404 /> }
      ],
    },
  ]);

  if (loading) return <div className="full"><DotLoader color="#cece2b" /></div>;
  return (
    <>
      <Toaster
        richColors
        toastOptions={{ style: { boxShadow: "none", borderWidth: "2px" } }}
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
