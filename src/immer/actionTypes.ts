import { EndUserDeploymentFormField } from "../components/create-deployment/deploymentCreateInterfaces";
import { GraphQLDeploymentData } from "../components/view-deployments/deploymentViewInterfaces";

/**
 * Action for DeploymentOptions
 */

interface SetUserCount {
  type: "SET_USER_COUNT";
  userCount: number;
  formCounts: number[];
}

interface SetRemoteSetup {
  type: "SET_REMOTE_SETUP";
}

interface SetPrimaryMachine {
  type: "SET_PRIMARY_MACHINE";
  primaryMachine: string;
}

interface SetInitialFormValues {
  type: "SET_INITIAL_FORM_VALUES";
  formValues: EndUserDeploymentFormField[];
}

interface ResetForm {
  type: "RESET";
}

export type DeploymentCreateOptionsAction =
  | SetUserCount
  | SetRemoteSetup
  | SetPrimaryMachine
  | SetInitialFormValues
  | ResetForm;

export type DeploymentCreateOptionsDispatch = (
  action: DeploymentCreateOptionsAction
) => void;

/**
 * Action for DeploymentForms
 */

interface SetEndUser {
  type: "SET_ENDUSER";
  endUser: string;
}

interface SetProduct {
  type: "SET_PRODUCT";
  product: string;
}

interface SetModelType {
  type: "SET_MODEL_TYPE";
  modelType: string;
}

interface SetSerialNumber {
  type: "SET_SERIAL_NUMBER";
  serialNumber: string;
}
// may be moved out
interface SetTechName {
  type: "SET_TECH_NAME";
  techName: string;
}

interface SetTicketNumber {
  type: "SET_TICKET_NUMBER";
  ticketNumber: number;
}

export type DeploymentFormsAction =
  | SetEndUser
  | SetProduct
  | SetModelType
  | SetSerialNumber
  | SetTechName
  | SetTicketNumber;

/**
 * Actions for DeploymentStatus
 */

interface SetPostAttempt {
  type: "SET_POST_ATTEMPT";
}

interface SetPostError {
  type: "SET_POST_ERROR";
}

interface SetPostSuccessful {
  type: "SET_POST_SUCCESSFUL";
}

interface ResetDeploymentCreateStatus {
  type: "RESET_DEPLOYMENT_CREATE_STATUS";
}

export type DeploymentCreateStatusAction =
  | SetPostAttempt
  | SetPostError
  | SetPostSuccessful
  | ResetDeploymentCreateStatus;

/**
 * Actions for DeploymentViewOptions
 */

interface SetDeploymentViewOptions {
  type: "SET_DEPLOYMENT_VIEW_OPTIONS";
  selected: string;
  textToSearch: string;
}

interface ResetDeploymentViewOptions {
  type: "RESET_DEPLOYMENT_VIEW_OPTIONS";
}

export type DeploymentViewOptionsAction =
  | SetDeploymentViewOptions
  | ResetDeploymentViewOptions;

export type DeploymentViewOptionsDispatch = (
  action: DeploymentViewOptionsAction
) => void;

/**
 * Actions for DeploymentViewStatus
 */

interface SetQueryAttempt {
  type: "SET_QUERY_ATTEMPT";
}

interface SetQueryError {
  type: "SET_QUERY_ERROR";
}

interface SetQuerySuccessful {
  type: "SET_QUERY_SUCCESSFUL";
}

interface ResetDeploymentViewStatus {
  type: "RESET_DEPLOYMENT_VIEW_STATUS";
}

export type DeploymentViewStatusAction =
  | SetQueryAttempt
  | SetQueryError
  | SetQuerySuccessful
  | ResetDeploymentViewStatus;

export type DeploymentViewStatusDispatch = (
  action: DeploymentViewStatusAction
) => void;
