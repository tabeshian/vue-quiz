import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import MyButton from "./MyButton.vue";

describe("MyButton", () => {
  it("renders properly", () => {
    const button = mount(MyButton, { props: { label: "Hello Vitest" } });
    expect(button.text()).toContain("Hello");
  });

  it("renders properly without label", () => {
    const button = mount(MyButton, { props: { label: undefined } });
    expect(button.text()).toContain("default label");
  });
});
