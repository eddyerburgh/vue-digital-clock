import { mount } from 'avoriaz';
import { expect } from 'chai';
import sinon from 'sinon';
import Clock from '../../../Clock';

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
    expect(wrapper.find('.hour')[0].text()).to.equal('21');
  });

  it('renders current hour with padded 0', () => {
    clock = sinon.useFakeTimers(new Date(2016, 2, 15).getTime());
    clock.tick(3 * hours);
    const wrapper = mount(Clock);
    expect(wrapper.find('.hour')[0].text()).to.equal('03');
  });

  it('renders current minutes', () => {
    clock = sinon.useFakeTimers(new Date(2016, 2, 15).getTime());
    clock.tick(30 * minutes);
    const wrapper = mount(Clock);
    expect(wrapper.find('.minutes')[0].text()).to.equal('30');
  });

  it('renders current minutes with padded 0', () => {
    clock = sinon.useFakeTimers(new Date(2016, 2, 15).getTime());
    clock.tick(3 * minutes);
    const wrapper = mount(Clock);
    expect(wrapper.find('.minutes')[0].text()).to.equal('03');
  });

  it('Updates minutes when changed', () => {
    clock = sinon.useFakeTimers(new Date(2016, 2, 15).getTime());
    clock.tick(3 * minutes);
    const wrapper = mount(Clock);
    expect(wrapper.find('.minutes')[0].text()).to.equal('03');
    clock.tick(4 * minutes);
    setTimeout(() => expect(wrapper.find('.minutes')[0].text()).to.equal('04'), 1000)
  });
});
