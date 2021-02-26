import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Home from "../../pages/Home";
import { useToast } from "../../hooks/Toast";

const toastMock = () => ({
  useToast: () => ({
    addToast: jest.fn,
  }),
});

jest.mock("../../hooks/Toast.tsx", () => toastMock);

// const localStorageMock = () => ({
//   getItem: jest.fn(),
//   setItem: jest.fn(),
//   clear: jest.fn(),
// });

// Object.defineProperty(window, "localStorage", {
//   value: localStorageMock,
// });

describe("Home", () => {
  // it("should be able to get user informations on localStorage", () => {
  //   localStorage.setItem(
  //     "@GitHubFinder:user",
  //     JSON.stringify({ name: "test-localStorage" })
  //   );

  //   expect(localStorage.setItem).toBeCalledWith("@GitHubFinder:user");
  // });

  it("should not be able to search for user not defined", () => {
    const { getByText } = render(<Home />);

    const submitButton = getByText("Search");

    fireEvent.click(submitButton);

    // expect(toastMock).toHaveBeenCalledWith(
    //   expect.objectContaining({ type: "error" })
    expect(toastMock().useToast().addToast()).toHaveBeenCalled();
  });
});
