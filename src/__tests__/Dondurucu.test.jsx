import { beforeEach, expect, test } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Dondurucu from '../components/Dondurucu';

beforeEach(() => {
  render(<Dondurucu />);
});

test('Butonda Gizle yazısı ile başlıyor.', () => {
  expect(screen.getByText(/Gizle/i)).toBeDefined();
});

test('Butona tıklanınca buton yazısı Göster oluyor', async () => {
  fireEvent.click(screen.getByText(/Gizle/i));
  expect(await screen.findByText(/Göster/i, undefined, {
      timeout: 250,
    })).toBeDefined();
});

test('Butona tıklanınca buton yazısı Göster oluyor', async () => {
  fireEvent.click(screen.getByText(/Gizle/i));
  expect(await screen.findByText(/Göster/i, undefined, {
      timeout: 250,
    })).toBeDefined();
});

test('Butona tıklanınca buton yazısı Göster oluyor', async () => {
  fireEvent.click(screen.getByText(/Gizle/i));
  expect(screen.queryByText('--|--')).toBe(null);
});
