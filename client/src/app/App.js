import { Router, Route, Switch, Link } from 'react-router-dom';
import Header from "../components/Header";
import history from "../utils/history";
import EmployeeCreate from "../components/addEmployeePage/EmployeeCreate";
import EmployeeList from "../components/addEmployeePage/EmployeeList";
import EmployeeEdit from "../components/addEmployeePage/EmployeeEdit";
import PlanSelectionList from "../components/planSelectionPage/PlanSelectionList";
import {COMPANY_PROFILE_PAGE, LOGIN_PAGE, PLAN_SELECTION_PAGE, REGISTRATION_PAGE} from "../utils/consts";
import LoginPage from "../components/authenticationPage/LoginPage";
import RegistrationPage from "../components/authenticationPage/RegistrationPage";
import CompanyProfilePage from "../components/companyProfilePage/CompanyProfilePage";

const App = () => {
  return (
    <div className="ui container">
        <Router history={history}>
          <div>
            <Header />
            <Switch>
              <Route path={LOGIN_PAGE} exact component={LoginPage} />
              <Route path={REGISTRATION_PAGE} exact component={RegistrationPage} />

              <Route path={COMPANY_PROFILE_PAGE} exact component={CompanyProfilePage} />

              <Route path='/employee/new' exact component={EmployeeCreate} />
              <Route path='/employee/edit/:id' exact component={EmployeeEdit} />
              <Route path='/employees' exact component={EmployeeList} />

              <Route path={PLAN_SELECTION_PAGE} exact component={PlanSelectionList} />
            </Switch>
          </div>
        </Router>
    </div>
  );
}

export default App;
