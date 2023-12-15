// setup.js

// Import any modules or libraries needed for global setup
// For example, you might configure a test environment or set up a mock server

// Configure Jest
beforeAll(() => {
  // Set up any global configurations or environment variables
  // For example, you might configure a test database connection
    
  // Adjust Jest's timeout for all tests (if needed)
  jest.setTimeout(15000); // Set the default timeout to 15 seconds
});
  
// Clean up after all tests
afterAll(() => {
  // Perform any necessary cleanup tasks
  // For example, you might close a test database connection
});
