import { App } from "../components/App";
import { render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

describe("App component", () => {
  test("Render App and input field without fail", () => {
    render(<App />);
    const rendered = screen
      .getAllByTestId("todo__input")
      .map((el) => el.textContent);
    expect(rendered);
  });

  test("Add new task and possibility to delete new task", () => {
    render(<App />);
    userEvent.type(screen.getByTestId("todo__input"), "Test todo");
    userEvent.click(screen.getByTestId("todo__add"));
    expect(screen.getByText("Test todo")).toBeInTheDocument();

    userEvent.click(screen.getByTestId("todo__close"));
    expect(screen.queryByText("Test todo")).not.toBeInTheDocument();
  });
});
