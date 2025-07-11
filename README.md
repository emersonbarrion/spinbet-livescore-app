# 🎯 Spinbet Livescore App

A modern, responsive livescore web application built with **Next.js** and **Styled Component**. Spinbet Livescore delivers sports scores with a clean UI and fast performance.

🌐 [Live Demo](https://spinbet-livescore-app.vercel.app/)

🌐 [Live API Demo](https://spinbet-livescore-api.onrender.com/api/v1/livescore)

📦 [GitHub App Repository](https://github.com/emersonbarrion/spinbet-livescore-app)

📦 [GitHub Api Repository](https://github.com/emersonbarrion/spinbet-livescore-api)

---

## 🛠️ Tech Stack

| Stack                | Deployment |
| -------------------- | ---------- |
| Next.js (frontend)   | Vercel     |
| Express.js (backend) | Render.com |

| Stack                 | Code Quality             |
| --------------------- |--------------------------|
| Prettier              | Formatter                |
| ESLint                | Linter                   |
| Typescript            | Type safety              |
| JSCPD                 | Duplicate code detection |
| Jest                  | Unit Testing             |
| React Testing Library | Component Testing        |
| Storybook             | Component Visual Testing |
| Cypress               | End to End Testing       |

Prettier

![prettier.png](readme-screenshots/prettier.png)

Lint and Test

![lint-and-test.png](readme-screenshots/lint-and-test.png)

Code coverage

![code-coverage.png](readme-screenshots/code-coverage.png)

JSCPD

![jscpd.png](readme-screenshots/jscpd.png)

Storybook

![storybook.png](readme-screenshots/storybook.png)

End to End Headless

![e2e-headless.png](readme-screenshots/e2e-headless.png)

End to End

![e2e.png](readme-screenshots/e2e.png)
---

## 🚀 Features

### Functionality

- ⚡ Display list of match with scores
- 🔍 Able to filter match by status
- 📱 Seamless experience across devices

### Performance

- Lighthouse
  ![lighthouse.png](readme-screenshots/lighthouse.png)
- GTmetrix
  ![gtmetrix.png](readme-screenshots/gtmetrix.png)

### Monitoring

- Microsoft Clarity
  ![clarity.png](readme-screenshots/clarity.png)
- Sentry.io - TBA

---

## 📸 Screenshots

![all.png](readme-screenshots/all.png)
![filter.png](readme-screenshots/filter.png)
![responsive.png](readme-screenshots/responsive.png)

---

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/emersonbarrion/spinbet-livescore-app.git
cd spinbet-livescore-app

# Install dependencies
npm install

# Run locally
npm run dev

# Run code quality check - includes format, lint, unit test, component test and jscpd
npm run check

# Run Storybook - app should be running
npm run storybook

# Run E2E - app should be running
npm run e2e

# Run E2E Headless mode
npm run e2e:headless
```
