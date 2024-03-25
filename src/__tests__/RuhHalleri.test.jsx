import { beforeEach, expect, test } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import RuhHalleri from '../components/RuhHalleri';

beforeEach(() => {
  render(<RuhHalleri />);
});

test('"Nasıl hissettiğimi bilmiyorum :-|" yazısı ile başlıyor.', () => {
  expect(screen.getByText(/Nasıl hissettiğimi bilmiyorum/i)).toBeDefined();
});

test('İlk başlangıçta yazı rengi crimson.', () => {
  const element = screen.getByText(/Nasıl hissettiğimi bilmiyorum/i);
  expect(getComputedStyle(element).color).toBe('rgb(220, 20, 60)');
});

test('Mutlu Et butonuna tıklanınca metin "Oldukça mutlu :)" oluyor', async () => {
  fireEvent.click(screen.getByText(/Mutlu Et/i));
  expect(await screen.findByText(/Oldukça mutlu/i, undefined, {
      timeout: 250,
    })).toBeDefined();
});

test('Mutlu Et butonuna tıklanınca metin rengi royal blue oluyor', async () => {
  fireEvent.click(screen.getByText(/Mutlu Et/i));
  const element = await screen.findByText(/Oldukça mutlu/i, undefined, {
      timeout: 250,
    });
  expect(getComputedStyle(element).color).toBe('rgb(65, 105, 225)');
});

test('Üz butonuna tıklanınca metin "Oldukça üzgün :(" oluyor', async () => {
  fireEvent.click(screen.getByText(/Üz/i));
  expect(await screen.findByText(/Oldukça üzgün/i, undefined, {
      timeout: 250,
    })).toBeDefined();
});

test('Üz butonuna tıklanınca metin rengi crimson oluyor', async () => {
  fireEvent.click(screen.getByText(/Üz/i));
  const element = await screen.findByText(/Oldukça üzgün/i, undefined, {
      timeout: 250,
    });
  expect(getComputedStyle(element).color).toBe('rgb(220, 20, 60)');
});

test('Reset butona tıklanınca metin "Nasıl hissettiğimi bilmiyorum :-|" oluyor', async () => {
  fireEvent.click(screen.getByText(/Reset/i));
  expect(
    await screen.findByText(/Nasıl hissettiğimi bilmiyorum/i, undefined, {
      timeout: 250,
    })
  ).toBeDefined();
});

test('Reset butonuna tıklanınca metin rengi crimson oluyor', async () => {
  fireEvent.click(screen.getByText(/Reset/i));
  const element = await screen.findByText(/Nasıl hissettiğimi bilmiyorum/i, undefined, {
      timeout: 250,
    });
  expect(getComputedStyle(element).color).toBe('rgb(220, 20, 60)');
});
