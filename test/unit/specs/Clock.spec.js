const mount = require('avoriaz').mount;
const expect = require('chai').expect;
const sinon = require('sinon');
const Clock = require('../../../Clock');


const seconds = (1000);
const minutes = (60 * seconds);
const hours = (60 * minutes);

describe('Clock.vue', () => {
  let clock;

  it('renders a time element', () => {
    expect(mount(Clock).is('time')).to.equal(true);
  });

  it('renders current hour in 24 hour format', () => {
    clock = sinon.useFakeTimers(new Date(2016, 2, 15).getTime());
    clock.tick(21 * hours);
    const wrapper = mount(Clock);
    expect(wrapper.find('.clock__hour')[0].text()).to.contain('21');
  });

  it('renders current hour with padded 0', () => {
    clock = sinon.useFakeTimers(new Date(2016, 2, 15).getTime());
    clock.tick(3 * hours);
    const wrapper = mount(Clock);
    expect(wrapper.find('.clock__hour')[0].text()).to.contain('03');
  });

  it('Updates hours when changed', () => {
    clock = sinon.useFakeTimers(new Date(2016, 2, 15).getTime());
    clock.tick(13 * hours);
    const wrapper = mount(Clock);
    expect(wrapper.find('.clock__hour')[0].text()).to.contain('13');
    clock.tick(14 * hours);
    setTimeout(() => expect(wrapper.find('.clock__hour')[0].text()).to.contain('14'), 1000);
  });

  it('renders current minutes', () => {
    clock = sinon.useFakeTimers(new Date(2016, 2, 15).getTime());
    clock.tick(30 * minutes);
    const wrapper = mount(Clock);
    expect(wrapper.find('.clock__minutes')[0].text()).to.contain('30');
  });

  it('renders current minutes with padded 0', () => {
    clock = sinon.useFakeTimers(new Date(2016, 2, 15).getTime());
    clock.tick(3 * minutes);
    const wrapper = mount(Clock);
    expect(wrapper.find('.clock__minutes')[0].text()).to.contain('03');
  });

  it('Updates minutes when changed', () => {
    clock = sinon.useFakeTimers(new Date(2016, 2, 15).getTime());
    clock.tick(3 * minutes);
    const wrapper = mount(Clock);
    expect(wrapper.find('.clock__minutes')[0].text()).to.contain('03');
    clock.tick(4 * minutes);
    setTimeout(() => expect(wrapper.find('.clock__minutes')[0].text()).to.contain('04'), 1000);
  });

  it('displays colon when not passed blink prop and seconds are even', () => {
    clock = sinon.useFakeTimers(new Date(2016, 2, 15).getTime());
    clock.tick(seconds * 2);
    const wrapper = mount(Clock);
    expect(wrapper.text()).to.contain(':');
  });

  it('displays colon when not passed blink prop and seconds are odd', () => {
    clock = sinon.useFakeTimers(new Date(2016, 2, 15).getTime());
    clock.tick(seconds);
    const wrapper = mount(Clock);
    expect(wrapper.text()).to.contain(':');
  });

  it('displays colon when passed blink prop and seconds are even', () => {
    clock = sinon.useFakeTimers(new Date(2016, 2, 15).getTime());
    clock.tick(seconds * 2);
    const wrapper = mount(Clock, { propsData: { blink: true } });
    expect(wrapper.text()).to.contain(':');
  });

  it('does not display colon when passed blink prop and seconds are odd', () => {
    clock = sinon.useFakeTimers(new Date(2016, 2, 15).getTime());
    clock.tick(seconds);
    const wrapper = mount(Clock, { propsData: { blink: true } });
    expect(wrapper.text()).to.not.contain(':');
  });

  it('Calls clear input with vm.ticker when component is destroyed', () => {
    const stub = sinon.stub();
    window.clearInterval = stub;
    const wrapper = mount(Clock);
    const ticker = wrapper.vm.ticker;
    wrapper.destroy();
    expect(stub.args[0][0]).to.equal(ticker);
  });
});
