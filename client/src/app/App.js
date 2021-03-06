import { Router, Route, Switch, Link } from 'react-router-dom';
import Header from "../components/Header";
import './App.scss';
import history from "../utils/history";
import EmployeeCreate from "../components/addEmployeePage/EmployeeCreate";
import EmployeeList from "../components/addEmployeePage/EmployeeList";
import EmployeeEdit from "../components/addEmployeePage/EmployeeEdit";
import {
  ADD_EMPLOYEES_PAGE,
  ADD_INDIVIDUAL_EMPLOYEE_PAGE,
  COMPANY_PROFILE_PAGE,
  CREATE_EMPLOYEE, CREATE_QUOTE,
  EDIT_EMPLOYEE,
  HOME_PAGE,
  LOGIN_PAGE,
  PLAN_SELECTION_PAGE,
  QUOTE_OVERVIEW,
  QUOTE_SUMMARY,
  REGISTRATION_PAGE,
  USER_PROFILE,
  EDIT_USER_PROFILE
} from "../utils/consts";
import LoginPage from "../components/authenticationPage/LoginPage";
import RegistrationPage from "../components/authenticationPage/RegistrationPage";
import CompanyProfilePage from "../components/companyProfilePage/CompanyProfilePage";
import HomePage from "../components/homePage/HomePage";
import Footer from "../components/Footer";
import QuoteSummaryPage from "../components/quoteSummary/QuoteSummaryPage";
import QuoteOverviewPage from "../components/quoteOverview/QuoteOverviewPage";
import PlanSelectionPage from "../components/planSelectionPage/PlanSelectionPage";
import QuoteCreate from "../components/quotePage/QuoteCreate";
import UserProfilePage from "../components/userProfilePage/UserProfilePage";
import IndividualAddDetailsPage from "../components/addIndividualEmployeePage/IndividualAddDetailsPage";
import EditUserProfile from '../components/userProfilePage/EditUserProfile';

const App = () => {
  return (
      <div className="page_container">
        <Router history={history}>
          <Header />
          <div className="content_wrap">
            <Switch>
              <Route path={LOGIN_PAGE} exact component={LoginPage} />
              <Route path={REGISTRATION_PAGE} exact component={RegistrationPage} />

              <Route path={HOME_PAGE} exact component={HomePage} />

              <Route path={CREATE_QUOTE} exact component={QuoteCreate} />

              <Route path={USER_PROFILE} exact component={UserProfilePage} />
              <Route path={EDIT_USER_PROFILE} exact component={EditUserProfile} />

              <Route path={COMPANY_PROFILE_PAGE} exact component={CompanyProfilePage} />

              <Route path={CREATE_EMPLOYEE} exact component={EmployeeCreate} />
              <Route path={EDIT_EMPLOYEE} exact component={EmployeeEdit} />
              <Route path={ADD_EMPLOYEES_PAGE} exact component={EmployeeList} />

              <Route path={PLAN_SELECTION_PAGE} exact component={PlanSelectionPage} />

              <Route path={QUOTE_SUMMARY} exact component={QuoteSummaryPage} />

              <Route path={QUOTE_OVERVIEW} exact component={QuoteOverviewPage} />

              <Route path={ADD_INDIVIDUAL_EMPLOYEE_PAGE} exact component={IndividualAddDetailsPage} />
            </Switch>
          </div>
          <Footer />
        </Router>
      </div>
  );
}

export default App;