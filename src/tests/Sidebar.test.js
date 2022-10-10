import { render } from '@testing-library/react';
import SideBar from '../components/layout/sideBar/SideBar';

jest.mock("../shared/icons/logo", () => () => <div data-testid="logo-component"></div>);
jest.mock("../shared/icons/group1", () => () => <div data-testid="group1-icon"></div>);
jest.mock("../shared/icons/group2", () => () => <div data-testid="group2-icon"></div>);
jest.mock("../shared/icons/group3", () => () => <div data-testid="group3-icon"></div>);
jest.mock("../shared/icons/group4", () => () => <div data-testid="group4-icon"></div>);
jest.mock("../shared/icons/group5", () => () => <div data-testid="group5-icon"></div>);
jest.mock("../shared/icons/group6", () => () => <div data-testid="group6-icon"></div>);

test('renders content of sidebar component', () => {
  const { queryByTestId } = render(<SideBar sidebarToggle={false}/>);
  expect(queryByTestId("logo-component")).toBeInTheDocument();
  expect(queryByTestId("group1-icon")).toBeInTheDocument();
  expect(queryByTestId("group2-icon")).toBeInTheDocument();
  expect(queryByTestId("group3-icon")).toBeInTheDocument();
  expect(queryByTestId("group4-icon")).toBeInTheDocument();
  expect(queryByTestId("group5-icon")).toBeInTheDocument();
  expect(queryByTestId("group6-icon")).toBeInTheDocument();
 
});
