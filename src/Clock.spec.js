import { mount } from "avoriaz";
import sinon from "sinon";
import Clock from "./Clock.vue";

const seconds = 1000;
const minutes = 60 * seconds;
const hours = 60 * minutes;

describe("Clock.vue", () => {
  let clock;

  beforeEach(() => {
    clock = sinon.useFakeTimers(new Date(2016, 2, 15).getTime());
  });

  it("renders a time element", () => {
    expect(mount(Clock).is("time")).toBe(true);
  });

  it("renders current hour in 24 hour format", () => {
    clock.tick(21 * hours);
    const wrapper = mount(Clock);
    expect(wrapper.find(".clock__hour")[0].text()).toContain("21");
  });

  it("renders current hour with padded 0", () => {
    clock.tick(3 * hours);
    const wrapper = mount(Clock);
    expect(wrapper.find(".clock__hour")[0].text()).toContain("03");
  });

  it("Updates hours when changed", () => {
    clock.tick(13 * hours);
    const wrapper = mount(Clock);
    expect(wrapper.find(".clock__hour")[0].text()).toContain("13");
    clock.tick(3 * hours);
    wrapper.update();
    expect(wrapper.find(".clock__hour")[0].text()).toContain("16");
  });

  it("renders current minutes", () => {
    clock.tick(30 * minutes);
    const wrapper = mount(Clock);
    expect(wrapper.find(".clock__minutes")[0].text()).toContain("30");
  });

  it("renders current minutes with padded 0", () => {
    clock.tick(3 * minutes);
    const wrapper = mount(Clock);
    expect(wrapper.find(".clock__minutes")[0].text()).toContain("03");
  });

  it("updates minutes when changed", () => {
    clock.tick(3 * minutes);
    const wrapper = mount(Clock);
    expect(wrapper.find(".clock__minutes")[0].text()).toContain("03");
    clock.tick(3 * minutes);
    wrapper.update();
    expect(wrapper.find(".clock__minutes")[0].text()).toContain("06");
  });

  it("renders current seconds with padded 0 if props displaySeconds is true", () => {
    clock.tick(5 * seconds);
    const wrapper = mount(Clock, { propsData: { displaySeconds: true } });
    expect(wrapper.find(".clock__seconds")[0].text()).toContain("05");
  });

  it("updates seconds when changed if props displaySeconds is true", () => {
    clock.tick(3 * seconds);
    const wrapper = mount(Clock, { propsData: { displaySeconds: true } });
    expect(wrapper.find(".clock__seconds")[0].text()).toContain("03");
    clock.tick(2 * seconds);
    wrapper.update();
    expect(wrapper.find(".clock__seconds")[0].text()).toContain("05");
  });

  it("does not render seconds with if props displaySeconds is undefined", () => {
    clock.tick(5 * seconds);
    const wrapper = mount(Clock);
    expect(wrapper.find(".clock__seconds").length).toBe(0);
  });

  it("displays colon when not passed blink prop and seconds are even", () => {
    clock.tick(seconds * 2);
    const wrapper = mount(Clock);
    expect(wrapper.text()).toContain(":");
  });

  it("displays colon when not passed blink prop and seconds are odd", () => {
    clock.tick(seconds * 3);
    const wrapper = mount(Clock);
    expect(wrapper.text()).toContain(":");
  });

  it("displays colon when passed blink prop and seconds are even", () => {
    clock.tick(seconds * 2);
    const wrapper = mount(Clock, { propsData: { blink: true } });
    expect(wrapper.text()).toContain(":");
  });

  it("does not display colon when passed blink prop and seconds are even", () => {
    clock.tick(seconds * 3);
    const wrapper = mount(Clock, { propsData: { blink: true } });
    expect(wrapper.find(".clock__colon")[0].html()).toContain(
      '<span class="clock__colon" style="visibility: hidden;">:</span>'
    );
  });

  it("displays second colon when passed blink and displaySeconds props and seconds are even", () => {
    clock.tick(seconds * 2);
    const wrapper = mount(Clock, {
      propsData: { blink: true, displaySeconds: true }
    });
    expect(wrapper.find("span")[3].text()).toContain(":");
  });

  it("does not display second colon when passed blink and displaySeconds props and seconds are odd", () => {
    clock.tick(seconds * 3);
    const wrapper = mount(Clock, {
      propsData: { blink: true, displaySeconds: true }
    });
    expect(wrapper.find(".clock__colon")[1].html()).toContain(
      '<span class="clock__colon" style="visibility: hidden;">:</span>'
    );
  });

  it("does not display colon when passed blink prop and seconds are even", () => {
    clock.tick(seconds * 3);
    const wrapper = mount(Clock, { propsData: { blink: true } });
    expect(wrapper.find(".clock__colon")[0].html()).toContain(
      '<span class="clock__colon" style="visibility: hidden;">:</span>'
    );
  });

  it("Calls clear input with vm.ticker when component is destroyed", () => {
    const stub = jest.fn();
    window.clearInterval = stub;
    const wrapper = mount(Clock);
    const ticker = wrapper.vm.ticker;
    wrapper.destroy();
    expect(stub).toHaveBeenCalledWith(ticker);
  });

  it("should not display second colon by default", () => {
    const wrapper = mount(Clock);
    expect((wrapper.text().match(/:/g) || []).length).toBe(1);
  });

  it('renders an ante-meridiem time with "am" when in twelveHour mode', () => {
    clock.tick(7 * hours);
    const wrapper = mount(Clock, { propsData: { twelveHour: true } });
    expect(wrapper.find(".clock__hour")[0].text()).toContain("07");
    expect(wrapper.find(".clock__ampm")[0].text()).toContain("am");
  });

  it('renders a post-meridiem time with "pm" when in twelveHour mode', () => {
    clock.tick(21 * hours);
    const wrapper = mount(Clock, { propsData: { twelveHour: true } });
    expect(wrapper.find(".clock__hour")[0].text()).toContain("09");
    expect(wrapper.find(".clock__ampm")[0].text()).toContain("pm");
  });
});
