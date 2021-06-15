export const LOGIN_PAGE = '/login';
export const REGISTRATION_PAGE = '/registration';
export const MAIN_PAGE = '/';

export const HOME_PAGE = '/medilab';
export const COMPANY_PROFILE_PAGE = '/:quoteId/company-profile/';

export const CREATE_QUOTE = '/quote/new';

export const USER_PROFILE = '/user-profile';
export const EDIT_USER_PROFILE = '/edit-user-profile';

export const ADD_EMPLOYEES_PAGE = '/:quoteId/employees';
export const CREATE_EMPLOYEE = '/:quoteId/employee/new';
export const EDIT_EMPLOYEE = '/:quoteId/employee/edit/:id';

export const PLAN_SELECTION_PAGE = '/:quoteId/plan-selection';

export const QUOTE_SUMMARY = "/quote-summary";

export const QUOTE_OVERVIEW = '/:quoteId/quote-overview';

export const USER_PROFILE_PAGE = '/user-profile';
export const INDIVIDUAL_EMPLOYEE_PROFILE_PAGE = '/individual-profile';
export const ADD_INDIVIDUAL_EMPLOYEE_PAGE = '/add-individual-info';

export const TOKEN = "token";
export const ACCESS_TOKEN = 'accessToken';
export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api';