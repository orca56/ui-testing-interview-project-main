# UI Testing Interview Project

Welcome to the UI Testing interview project! This project is designed to assess your proficiency with Playwright and TypeScript through a series of deliverables. Each deliverable builds upon the previous one, allowing you to demonstrate your understanding of UI testing using Playwright on our company website: [https://wearecws.com/](https://wearecws.com/).

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js (version 22 or higher)
- pnpm (through Corepack)

You can enable Corepack and install pnpm using the following commands:

```bash
corepack enable
corepack prepare pnpm@latest --activate
```

## Getting Started

1. **Clone the Repository**: Start by cloning this repository to your local machine.

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install Dependencies**: Install the necessary dependencies for Playwright.

   ```bash
   pnpm install
   ```

3. **Run the Tests**: Execute the npm script to run the tests.

   ```
   pnpm test
   ```

## Deliverables

### Deliverable 1: Basic Navigation Test

**Objective**: Write a test that navigates to the homepage of our website and verifies the title.

**Steps**:
- Create a file named `navigation.spec.ts` in the `tests` directory.
- Use Playwright to launch a browser, navigate to `https://wearecws.com/`, and assert that the title of the page is correct.

**Architecture Explanation**: Include a brief explanation of your architectural decisions, such as why you chose specific Playwright methods, how you structured your test, and any design patterns you applied.

**Expected Outcome**: A passing test that confirms the title of the homepage.

### Deliverable 2: Element Interaction Test

**Objective**: Write a test that interacts with a specific element on the homepage.

**Steps**:
- Create a file named `element-interaction.spec.ts` in the `tests` directory.
- Identify a button or link on the homepage (e.g., "Secure you cloud now") and write a test that clicks on it and verifies that the resulting page contains specific text.

**Architecture Explanation**: Provide an explanation of your architectural choices, including how you identified the element, the methods used for interaction, and any considerations for maintainability or readability.

**Expected Outcome**: A passing test that confirms the interaction with the element leads to the expected outcome.

### Deliverable 3: Page Object Model (POM) for Homepage Tiles

**Objective**: Implement the Page Object Model (POM) for testing the tiles on the homepage.

**Steps**:
- Create a file named `homepage-tile.ts` in a new pages directory to define the Page Object for the homepage.
- Write a test named `tile-abstraction.spec.ts` in the tests directory that uses the POM to verify the presence and content of the tiles on the homepage.

**Architecture Explanation**: Describe your architectural decisions regarding the POM implementation, including how you structured the page object, the methods you created for interacting with the tiles, and how this approach improves test maintainability and readability.

**Expected Outcome**: A passing test that confirms the tiles on the homepage are present and contain the expected content, utilizing the POM structure.

### Deliverable 4: Screenshot and Video Recording

**Objective**: Enhance your tests to include screenshots and video recordings.

**Steps**:
- Modify your previous tests to take a screenshot after each test run and record a video of the test execution.
- Save the screenshots and videos in a designated folder within the project.

**Architecture Explanation**: Describe your approach to integrating screenshots and video recordings, including any Playwright configurations you used and how you organized the output files for easy access.

**Expected Outcome**: Screenshots and video recordings are generated for each test run, demonstrating the test execution process.

### Deliverable 5: CI Integration

**Objective**: Set up Continuous Integration (CI) for your tests.

**Steps**:
- Create a configuration file for a CI tool of your choice (e.g., GitHub Actions, Travis CI).
- Ensure that your tests run automatically on each push to the repository.

**Architecture Explanation**: Provide an overview of your CI setup, including why you chose a specific CI tool, how you structured the configuration file, and any best practices you followed to ensure reliable test execution.

**Expected Outcome**: A CI configuration that successfully runs your Playwright tests on each push.

## Submission

Once you have completed all deliverables, please submit your project repository as a zip file or provide a link to the repository. Ensure that your code is well-organized, and include a README file with instructions on how to run your tests.

## Evaluation Criteria

Your submission will be evaluated based on the following criteria:

- Correctness of the tests
- Code quality and organization
- CI