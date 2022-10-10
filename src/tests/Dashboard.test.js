import { render, screen } from '@testing-library/react';
import Dashboard from '../pages/dashboard/Dashboard';

jest.mock("../components/dashboard/taskBreakdown/TaskBreakDown", () => () => <div data-testid="taskbreakdown-component"></div>);
jest.mock("../components/dashboard/chart/Chart", () => () => <div data-testid="chart-component"></div>);
jest.mock("../components/dashboard/tasks/Tasks", () => () => <div data-testid="tasks-component"></div>);
jest.mock("../components/dashboard/schedule/Schedule", () => () => <div data-testid="schedule-component"></div>);

test('renders content of dashboard component', () => {
  const { queryByTestId } = render(<Dashboard />);
  expect(queryByTestId("taskbreakdown-component")).toBeInTheDocument();
  expect(queryByTestId("chart-component")).toBeInTheDocument();
  expect(queryByTestId("tasks-component")).toBeInTheDocument();
  expect(queryByTestId("schedule-component")).toBeInTheDocument();
});
