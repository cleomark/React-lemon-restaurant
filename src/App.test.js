import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/Booking/BookingForm";
import { initializeTimes, updateTimes, state } from "./components/Reservation";
import { fetchAPI } from "./API";
import { useNavigate } from "react-router-dom";

const mockedUsedNavigate = jest.fn();

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Occasion");
  expect(headingElement).toBeInTheDocument();
});

test("initializeTimes validate that it returns expected value", () => {
  const expectedResult = { availableTimes: fetchAPI(new Date()) };
  const result = initializeTimes();
  expect(result).toEqual(expectedResult);
});

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

test("updateTimes", () => {
  const selectedDate = new Date("2022-06-01");
  const availableTimes = updateTimes(selectedDate);

  expect(Array.isArray(availableTimes)).toBe(true);
  expect(availableTimes).toEqual([
    "17:00",
    "17:30",
    "18:00",
    "20:00",
    "21:00",
    "23:30",
  ]);
});

describe("BookingForm", () => {
  test("Renders DATE input with correct attributes", () => {
    render(<BookingForm />);
    const dateInput = screen.getByLabelText("Choose date");
    expect(dateInput).toBeInTheDocument();
    expect(dateInput.getAttribute("type")).toBe("date");
  });

  test("Renders the TIME input field with correct attributes", () => {
    render(<BookingForm />);
    const timeInput = screen.getByLabelText("Choose time");
    expect(timeInput).toBeInTheDocument();
    expect(timeInput.getAttribute("id")).toBe("res-time");
  });

  test("Renders GUESTS input with correct attributes", () => {
    render(<BookingForm />);
    const guestsInput = screen.getByLabelText("Number of guests");
    expect(guestsInput).toBeInTheDocument();
    expect(guestsInput.getAttribute("type")).toBe("number");
    expect(guestsInput.getAttribute("min")).toBe("1");
    expect(guestsInput.getAttribute("max")).toBe("10");
  });

  test("Renders the OCCASION input field with correct attributes", () => {
    render(<BookingForm />);
    const occasionInput = screen.getByLabelText("Occasion");
    expect(occasionInput).toBeInTheDocument();
    expect(occasionInput.getAttribute("id")).toBe("occasion");
  });

  test("Input GUESTS should have input-error class if > 10 or < 0", () => {
    render(<BookingForm />);
    const guestsInput = screen.getByPlaceholderText("1");
    fireEvent.change(guestsInput, { target: { value: 11 } });
    expect(guestsInput).toHaveClass("input-error");
  });
});
