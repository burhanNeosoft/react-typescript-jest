# React Component Testing with Jest and TypeScript

This project demonstrates various ways of testing React components using Jest and TypeScript. The focus is on writing robust and maintainable tests to ensure the components behave as expected in different scenarios.

## Testing Strategies

### 1. Unit Testing
Tests the smallest testable parts of a component, such as rendering, props, and state updates.

**Example Component:**
`Counter` renders a count with increment and decrement buttons.

**Test Command:**
```bash
npm test Counter.test.tsx
```

### 2. Integration Testing
Ensures components work together as expected.

**Example Component:**
`App` integrates `Counter` and displays a header.

**Test Command:**
```bash
npm test App.test.tsx
```

### 3. Snapshot Testing
Validates that the rendered output of a component does not change unexpectedly.

**Test Command:**
```bash
npm test CounterSnapshot.test.tsx
```


### 5. Behavior Testing
Simulates real user interactions and ensures the component behaves as expected.

**Test Command:**
```bash
npm test CounterBehavior.test.tsx
```

### 6. Edge Case Testing
Tests how the component handles unusual or invalid inputs.

**Test Command:**
```bash
npm test CounterEdgeCase.test.tsx
```

### 7. Mocking Dependencies
Simulates external dependencies, such as APIs or context.

**Example Component:**
`UserList` fetches and displays a list of users from an API.

**Test Command:**
```bash
npm test UserList.test.tsx
```

## Running All Tests
To run all tests in the project:
```bash
npm test
```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the tests:
   ```bash
   npm test
   ```

## Dependencies
- **React**: A JavaScript library for building user interfaces.
- **Jest**: A testing framework for JavaScript.
- **@testing-library/react**: A library for testing React components.
- **TypeScript**: A typed superset of JavaScript.
- **jest-axe**: A library for accessibility testing.

## Project Structure
```
src/
├── Counter.tsx
├── Counter.test.tsx
├── App.tsx
├── App.test.tsx
├── UserList.tsx
├── UserList.test.tsx
```

## Best Practices
1. Write tests for both common and edge cases.
2. Use `jest.fn()` to mock functions.
3. Test components in isolation and in integration.
4. Run tests frequently during development.
5. Maintain readable and well-structured test files.

---

Feel free to contribute or suggest improvements for this repository!
