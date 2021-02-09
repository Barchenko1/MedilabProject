import { Router, Route, Switch, Link } from 'react-router-dom';
import Header from "../components/Header";
import history from "../utils/history";
import EmployeeCreate from "../components/addEmployeePage/EmployeeCreate";
import EmployeeList from "../components/addEmployeePage/EmployeeList";
import EmployeeEdit from "../components/addEmployeePage/EmployeeEdit";
import PlanSelectionList from "../components/planSelectionPage/PlanSelectionList";

const App = () => {
  return (
    <div>
        <Router history={history}>
          <div>
            <Header />
            <Switch>
              <Route path='/employee/new' exact component={EmployeeCreate} />
              <Route path='/employee/edit/:id' exact component={EmployeeEdit} />
              <Route path='/employees' exact component={EmployeeList} />

              <Route path='/plan-selection' exact component={PlanSelectionList} />
            </Switch>
          </div>
        </Router>
    </div>
  );
}

export default App;
