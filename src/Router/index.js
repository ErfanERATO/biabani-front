import MainLayout from "../Layouts/main";
import ConnectToUs from "../Page/ConnectToUs";
import MainPage from "../Page/MainPage/index"
import ProductPage from "../Page/ProductsPage";

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
];
