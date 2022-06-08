import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import LabelCheck from "./LabelCheck";

test("inputs should be initially empty", () => {
  render(<App />);
  const emailInputElement = screen.getByRole("textbox");
  const passwordInputElement = screen.getByLabelText("Password");
  const cPasswordInputElement = screen.getByLabelText(/confirm password/i);
  expect(emailInputElement.value).toBe("");
  expect(passwordInputElement.value).toBe("");
  expect(cPasswordInputElement.value).toBe("");
});

test("should be able to type an email", () => {
  render(<App />);
  const emailInputElement = screen.getByRole("textbox", { name: /email/i });
  userEvent.type(emailInputElement, "selena@gmail.com");

  expect(emailInputElement.value).toBe("selena@gmail.com");
});

test("should be able to type password", () => {
  render(<App />);

  const passwordInputElement = screen.getByLabelText("Password");

  userEvent.type(passwordInputElement, "password");

  expect(passwordInputElement.value).toBe("password");
});
test("should be able to type confirm password", () => {
  render(<App />);

  const cpasswordInputElement = screen.getByLabelText(/confirm password/i);

  userEvent.type(cpasswordInputElement, "cpassword");

  expect(cpasswordInputElement.value).toBe("cpassword");
});

test("should show email error message", () => {
  render(<App />);

  const emailInputElement = screen.getByRole("textbox", { name: /email/i });
  userEvent.type(emailInputElement, "selena");

  const submitButton = screen.getByRole("button");
  userEvent.click(submitButton);

  const emailErrorMessage = screen.getByTestId("error-msg");

  expect(emailErrorMessage).toBeInTheDocument();
});

test("should log img tag", () => {
  render(<App />);

  const imgTag = screen.getByAltText("img-tag");
});

test("if text changes on toggle", () => {
  render(<LabelCheck onLabel="it is on" offLabel="it is off" />);

  const label = screen.getByTestId("label");
  expect(label.textContent).toBe("it is off");

  const input = screen.getByTestId("input");

  userEvent.click(input);

  expect(label.textContent).toBe("it is on");
});
