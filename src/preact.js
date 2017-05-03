import { h, h as createElement } from './h';
import { cloneElement } from './clone-element';
import { Component } from './component';
import { render } from './render';
import { rerender, enqueueRender } from './render-queue';
import options from './options';

export default {
	h,
	createElement,
	cloneElement,
	Component,
	render,
	rerender,
	options,
	enqueueRender
};

export {
	h,
	createElement,
	cloneElement,
	Component,
	render,
	rerender,
	options,
	enqueueRender
};
