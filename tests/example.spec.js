// @ts-check
import { test, expect } from '@playwright/test';

const baseURL = 'http://localhost:5173';

test.describe('Portfolio Navigation', () => {
  test('should navigate to Profile page by default', async ({ page }) => {
    await page.goto(`${baseURL}/`);
    await expect(page).toHaveURL(`${baseURL}/myPortfolio/profile`);
    await expect(page.locator('h1')).toContainText('Kian Manalastas');
  });

  test('should navigate to Profile page', async ({ page }) => {
    await page.goto(`${baseURL}/myPortfolio/profile`);
    await expect(page.locator('h1')).toContainText('Kian Manalastas');
    await expect(page.locator('.tagline')).toContainText('UI/UX Designer | FrontEnd Developer');
  });

  test('should navigate to Showcase page', async ({ page }) => {
    await page.goto(`${baseURL}/myPortfolio/showcase`);
    await expect(page.locator('h1')).toContainText('My Showcase');
    await expect(page.locator('.project-card')).toHaveCount(6); // Assuming 6 projects
  });

  test('should navigate to Contact page', async ({ page }) => {
    await page.goto(`${baseURL}/myPortfolio/contact`);
    await expect(page.locator('h1')).toContainText("Let's Connect");
    await expect(page.locator('.contact-item')).toHaveCount(7); // 7 contact methods
  });

  test('should navigate to Creative page', async ({ page }) => {
    await page.goto(`${baseURL}/myPortfolio/creative`);
    await expect(page.locator('h1')).toContainText('Creative Works');
  });
});

test.describe('Sidebar Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${baseURL}/myPortfolio/profile`);
  });

  test('should navigate via sidebar links', async ({ page }) => {
    // Click Showcase
    await page.getByRole('link', { name: 'Showcase' }).click();
    await expect(page).toHaveURL(`${baseURL}/myPortfolio/showcase`);

    // Click Contact
    await page.getByRole('link', { name: 'Contact' }).click();
    await expect(page).toHaveURL(`${baseURL}/myPortfolio/contact`);

    // Click Creative
    await page.getByRole('link', { name: 'Creative' }).click();
    await expect(page).toHaveURL(`${baseURL}/myPortfolio/creative`);

    // Click Profile
    await page.getByRole('link', { name: 'Profile' }).click();
    await expect(page).toHaveURL(`${baseURL}/myPortfolio/profile`);
  });
});

test.describe('Profile Page Content', () => {
  test('should display profile information correctly', async ({ page }) => {
    await page.goto(`${baseURL}/myPortfolio/profile`);

    // Check header
    await expect(page.locator('h1')).toContainText('Kian Manalastas');
    await expect(page.locator('.tagline')).toContainText('UI/UX Designer | FrontEnd Developer');

    // Check profile photo
    await expect(page.locator('.profile-photo')).toBeVisible();

    // Check download resume button
    await expect(page.locator('.download-btn a')).toHaveAttribute('download');

    // Check bio
    await expect(page.locator('.bio')).toContainText('Highly motivated and detail-oriented');

    // Check details grid
    await expect(page.locator('.details-grid')).toContainText('Location: Metro Manila, Philippines');
    await expect(page.locator('.details-grid')).toContainText('Email: kian.manalastas11@gmail.com');
    await expect(page.locator('.details-grid')).toContainText('Core Skill: Vue.JS');
  });
});

test.describe('Showcase Page Content', () => {
  test('should display projects correctly', async ({ page }) => {
    await page.goto(`${baseURL}/myPortfolio/showcase`);

    // Check project titles
    await expect(page.locator('text=PharmAssist')).toBeVisible();
    await expect(page.locator('text=Tips&Eats')).toBeVisible();

    // Check project links
    const pharmAssistLink = page.locator('a[href*="PharmAssist"]');
    await expect(pharmAssistLink).toHaveAttribute('href', 'https://github.com/ris0u/PharmAssist');

    // Check project images
    await expect(page.locator('.project-card img').first()).toBeVisible();
  });
});

test.describe('Contact Page Content', () => {
  test('should display contact information correctly', async ({ page }) => {
    await page.goto(`${baseURL}/myPortfolio/contact`);

    // Check contact items
    await expect(page.locator('text=Email')).toBeVisible();
    await expect(page.locator('text=Phone')).toBeVisible();
    await expect(page.locator('text=LinkedIn')).toBeVisible();
    await expect(page.locator('text=Github')).toBeVisible();

    // Check links
    await expect(page.locator('a[href*="linkedin.com"]')).toHaveAttribute('href', 'https://www.linkedin.com/in/kian-manalastas-7824331a1/');
    await expect(page.locator('a[href*="github.com"]')).toHaveAttribute('href', 'https://github.com/ris0u');
  });
});

test.describe('Responsive Design', () => {
  test('should work on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(`${baseURL}/myPortfolio/profile`);

    await expect(page.locator('h1')).toContainText('Kian Manalastas');
    // Sidebar should still be functional
    await page.getByRole('link', { name: 'Contact' }).click();
    await expect(page).toHaveURL(`${baseURL}/myPortfolio/contact`);
  });
});
