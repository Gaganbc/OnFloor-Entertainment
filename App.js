import './App.css';
import Navbar from './Component/Navbar';
import Contact from './Component/Contact';
import  Home  from './Component/Home'; 
import Myprofile from './Component/Myprofile';
import  Record  from './Component/Record';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Signup from './Component/Signup';
import Login from './Component/Login';
import Adminlogin from './Component/Adminlogin';
import Forgotpassword from './Component/Forgotpassword';
import Welcome from './Component/Welcome';
import Mainpage from './Component/Mainpage';
import Classes from './Component/Classes';
import Viewdetails from './Component/viewdetails';
import Democlass from './Component/Democlass';
import Slotbookingdone from './Component/Slotbookingdone';
import Admission  from './Component/Admission';
import Payment  from './Component/Payment';
import Thankyou from './Component/Thankyou';
import Otp from './Component/Otp';
import Resetpassword  from './Component/Resetpassword';
import Adminuserdetails from './Component/Adminuserdetails';
import Update from './Component/update';
import Adminhomepage  from './Component/Adminhomepage';
import Addclasses from './Component/Addclasses';
import Adminclassavail from './Component/Adminclassavail';
import { Admindemoclass } from './Component/Admindemoclass';
import { Adminregistration } from './Component/Adminregistration';
import Updateclass from './Component/updateclass';
import Admincont from './Component/admincont';
import Aboutus from './Component/Aboutus';
import Google from './Component/google';
import Adminpay from './Component/adminpay';
import Userpay from './Component/userpay';



function App() {
  return (
    <BrowserRouter>
    <div>
    <Navbar/>
  
     <Routes>
     <Route path='/home' element= {<Home></Home>}></Route>
     <Route path='/Contact' element={<Contact></Contact>}></Route>
     <Route path='/Myprofile' element={<Myprofile></Myprofile>}></Route>
     <Route path='/Record' element={<Record></Record>}></Route>
     <Route path='/Signup' element={<Signup></Signup>}></Route>
     <Route path='/' element={<Welcome></Welcome>}></Route>
     <Route path='/Login' element={<Login></Login>}></Route>
     <Route path='/Adminlogin' element={<Adminlogin></Adminlogin>}></Route>
     <Route path='/Forgotpassword' element={<Forgotpassword></Forgotpassword>}></Route>
     <Route path='/Mainpage' element={<Mainpage></Mainpage>}></Route>
     <Route path='/Classes' element={<Classes></Classes>}></Route>
     <Route path='/Viewdetails' element={<Viewdetails></Viewdetails>}></Route>
     <Route path='/Democlass' element={<Democlass></Democlass>}></Route>
     <Route path='/Slotbookingdone' element={<Slotbookingdone></Slotbookingdone>}></Route>
     <Route path='/Admission' element={<Admission></Admission>}></Route>
     <Route path='/Payment' element={<Payment></Payment>}></Route>
     <Route path='/Thankyou' element={<Thankyou></Thankyou>}></Route>
     <Route path='/Otp' element={<Otp></Otp>}></Route>
     <Route path='/Resetpassword' element={<Resetpassword></Resetpassword>}></Route>
     <Route path='/Adminuserdetails' element={<Adminuserdetails></Adminuserdetails>}></Route>
     <Route path='/Adminhomepage' element={<Adminhomepage></Adminhomepage>}></Route>
     <Route path='/Adminclassavail' element={<Adminclassavail></Adminclassavail>}></Route>
     <Route path='/Addclasses' element={<Addclasses></Addclasses>}></Route>
     <Route path='/Aboutus' element={<Aboutus></Aboutus>}></Route>
     <Route path='/Admindemoclass' element={<Admindemoclass></Admindemoclass>}></Route>
     <Route path='/Adminregistration' element={<Adminregistration></Adminregistration>}></Route>
     <Route path='/Myprofile' element={<Myprofile></Myprofile>}></Route>
     <Route path='/google' element={<Google></Google>}></Route>
     <Route path={`/update/:id`} element={<Update></Update>}></Route>
     <Route path={`/updateclass/:id`} element={<Updateclass></Updateclass>}></Route>
     <Route path='/admincont' element={<Admincont></Admincont>}></Route>
     <Route path='/adminpay' element={<Adminpay></Adminpay>}></Route>
     <Route path='/userpay' element={<Userpay></Userpay>}></Route>




     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
