import {afterEach, describe, expect, it, vi } from 'vitest';
// import { render } from 'vitest-browser-svelte';
import MyModal from './MyModal.svelte';
import {cleanup, fireEvent, render, screen, waitFor} from '@testing-library/svelte';
import {tick} from "svelte";

vi.mock('svelte/transition', () => ({
    fade: () => ({delay: 0, duration: 0})
}))

const mockMissingProps = () => {
    Element.prototype.animate = vi.fn().mockImplementation(()=> ({
        cancel: () => Promise.resolve(undefined)
    }))

    HTMLDialogElement.prototype.showModal = vi.fn().mockImplementation(() => {
        Promise.resolve();
    })
    HTMLDialogElement.prototype.close = vi.fn().mockImplementation(() => {
        Promise.resolve();
    })
}

describe('MyModal.svelte', () => {
  it('should not show modal by default', async () => {
    const { queryByRole } = render(MyModal);
    const dialog = queryByRole('dialog');
    await expect.element(dialog).not.toBeInTheDocument();
  });

  it('should show modal when isModalOpen is true', async () => {
    const { queryByRole } = render(MyModal, { props: { isModalOpen: true } });
    const dialog = queryByRole('dialog');
    await expect.element(dialog).toBeInTheDocument();
  });

  it('should have correct modal title', async () => {
    const { getByText } = render(MyModal, { props: { isModalOpen: true } });
    const title = getByText('My Modal');
    await expect.element(title).toBeInTheDocument();
    const button = getByText('Do Something');
    await expect.element(button).toBeInTheDocument();
  });

  it('should have "Do Something" button in footer', async () => {
    const { getByText } = render(MyModal, { props: { isModalOpen: true } });
    const button = getByText('Do Something');
    await expect.element(button).toBeInTheDocument();
  });

  it('should close modal after clicking "Do Something" with fake Timers', async () => {
    mockMissingProps();
    vi.useFakeTimers();
    const { getByText, queryByRole } = render(MyModal, { props: { isModalOpen: true } });

    const button = getByText('Do Something');
    await fireEvent.click(button);

    vi.advanceTimersByTime(1000);

    const dialog = queryByRole('dialog');
    await expect.element(dialog).not.toBeInTheDocument();

    vi.useRealTimers();
  }, 5000 );

/*
  it('should close modal after clicking "Do Something" with Real Timers', async () => {
        mockMissingProps();
        const { getByText, queryByRole } = render(MyModal, { props: { isModalOpen: true } });

        const button = getByText('Do Something');
        await fireEvent.click(button);

        await tick();

        const dialog = queryByRole('dialog');
        await expect.element(dialog).not.toBeInTheDocument();

  }/!*, 5000*!/ );
*/


    afterEach(() => {
      debugger;
      vi.resetAllMocks();
      cleanup();
  })
});