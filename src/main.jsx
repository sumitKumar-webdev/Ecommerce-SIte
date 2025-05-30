import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {CartPage, HomePage, LoginPage, OrderPage, SignUpPage, UserInfoPage} from './Components/index.js'
import {AboutPage} from './Components/index.js'
import {ContactUsPage} from './Components/index.js'
import {ProductPage} from './Components/index.js'
import {AllProductsPage} from './Components/index.js'
import { ProfilePage } from './Components/index.js'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path: '/',
        index: true,
        element: <HomePage />
      },
      {
        path: 'about',
        element: <AboutPage />
      },
      {
        path: 'product/:productId',
        element: <ProductPage />
      },
      {
        path: 'products/:category',
        element: <AllProductsPage />
      },
      {
        path:'contact',
        element: <ContactUsPage />
      },
      {
        path: 'cart',
        element: <CartPage />
      },
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'userinfo',
        element: <UserInfoPage />
      },
      {
        path: 'signup',
        element: <SignUpPage />
      },
      {
        path: 'order',
        element: <OrderPage />
      },
      {
        path: 'profile',
        element: <ProfilePage />
      }
    ]

  }
])

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
)
