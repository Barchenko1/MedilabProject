import { Router, Route, Switch, Link } from 'react-router-dom';
import Header from "../components/Header";
import history from "../utils/history";
import EmployeeCreate from "../components/addEmployeePage/EmployeeCreate";
import EmployeeList from "../components/addEmployeePage/EmployeeList";
import EmployeeEdit from "../components/addEmployeePage/EmployeeEdit";
import PlanSelectionList from "../components/planSelectionPage/PlanSelectionList";
import {
  ADD_EMPLOYEES_PAGE,
  COMPANY_PROFILE_PAGE, CREATE_EMPLOYEE, EDIT_EMPLOYEE, EMPLOYEE_PROFILE_PAGE,
  HOME_PAGE,
  LOGIN_PAGE,
  PLAN_SELECTION_PAGE,
  REGISTRATION_PAGE
} from "../utils/consts";
import LoginPage from "../components/authenticationPage/LoginPage";
import RegistrationPage from "../components/authenticationPage/RegistrationPage";
import CompanyProfilePage from "../components/companyProfilePage/CompanyProfilePage";
import HomePage from "../components/homePage/HomePage";
import Footer from "../components/Footer";
import EmployeeProfilePage from "../components/employeeProfilePage/EmployeeProfilePage";

const App = () => {
  return (
    <div className="ui container">
        <Router history={history}>
          <div>
            <Header />
            <Switch>
              <Route path={LOGIN_PAGE} exact component={LoginPage} />
              <Route path={REGISTRATION_PAGE} exact component={RegistrationPage} />

              <Route path={HOME_PAGE} exact component={HomePage} />
              <Route path={COMPANY_PROFILE_PAGE} exact component={CompanyProfilePage} />

              <Route path={CREATE_EMPLOYEE} exact component={EmployeeCreate} />
              <Route path={EDIT_EMPLOYEE} exact component={EmployeeEdit} />
              <Route path={ADD_EMPLOYEES_PAGE} exact component={EmployeeList} />

              <Route path={PLAN_SELECTION_PAGE} exact component={PlanSelectionList} />

              <Route path={EMPLOYEE_PROFILE_PAGE} exact component={EmployeeProfilePage} />
            </Switch>
            <Footer />
          </div>
        </Router>
    </div>
  );
}

export default App;
