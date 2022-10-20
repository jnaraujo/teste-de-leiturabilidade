import { mount } from "cypress/react";
import { describe, it } from "vitest";
import TextEditor from "../../../src/components/TextEditor";

function wrapWithTheme(fn, children, options) {
  const wrapper = fn(
    <ThemeProvider theme={theme}>{children}</ThemeProvider>,
    options
  );

  return wrapper[fn.name]({
    context: wrapper.instance().getChildContext(),
  });
}

describe("TextEditor.cy.ts", () => {
  it("mounts", () => {
    mount(<TextEditor html="" />);
  });
});
