import {
  DeploymentOptions,
  DeploymentForms
} from "../../immer/stateInterfaces";
import {
  DeploymentFormsAction,
  DeploymentOptionsAction
} from "../../immer/actionTypes";

/**
 * Props interface from deploymentOptionsReducer
 */
export interface DeploymentOptionsProps {
  optionsDispatch: React.Dispatch<DeploymentOptionsAction>;
  optionsState: DeploymentOptions;
}

/**
 * Props interface from deploymentFormsReducer
 */
export interface DeploymentFormProps {
  deploymentFormDispatch: React.Dispatch<DeploymentFormsAction>;
  deploymentFormState: DeploymentForms;
}

/**
 * Props interface from both deploymentFormsReducer & deploymentOptionsReducer
 */
export interface CreateDeploymentStateProps {
  optionsProps: DeploymentOptionsProps;
  formsProps: DeploymentFormProps;
}

export interface IndividualDeploymentItem {
  product: string;
  modelType: string;
  serialNumber: string;
}

/**
 * Interface for the form fields that make up a deployment
 */
export interface EndUserDeploymentFormField {
  endUser: string;
  ticketNumber: number | string;
  items: IndividualDeploymentItem[];
}

/**
 * Interface for an array containing all deployments
 */
export interface DeploymentFormValues {
  deployments: EndUserDeploymentFormField[];
}