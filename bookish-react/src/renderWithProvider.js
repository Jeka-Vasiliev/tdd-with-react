import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createBooksStore } from "./store";
import { MemoryRouter, Route, Routes } from "react-router-dom";

export function renderWithProvider(component, routerParams = { path: "/" }) {
  const { path, ...rest } = routerParams;
  render(
    <Provider store={createBooksStore()}>
      <MemoryRouter {...rest}>
        <Routes>
          <Route path={path} element={component}></Route>
        </Routes>
      </MemoryRouter>
    </Provider>,
  );
}
