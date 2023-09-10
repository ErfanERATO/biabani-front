import MainLayout from "../Layouts/main";
import ConnectToUs from "../Page/ConnectToUs";
import MainPage from "../Page/MainPage/index"
import ProductPage from "../Page/Products/list";
// import SingleProduct from "../Page/SingleProduct";

export default [
  {
    path: "/",
    component: MainPage,
    layout: MainLayout,
  },
  {
    path: "/products",
    component: ProductPage,
    layout: MainLayout,
  },
  {
    path: "/connect-us",
    component: ConnectToUs,
    layout: MainLayout,
  },
  // {
  //   path: "/product/:slug",
  //   component: SingleProduct,
  //   layout: MainLayout,
  // },

];
