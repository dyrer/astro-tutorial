// Simple test script for the contact form function
const fetch = require('node-fetch');

async function testContactForm() {
  const testData = new URLSearchParams();
  testData.append('name', 'Test User');
  testData.append('email', 'test@example.com');
  testData.append('subject', 'Test Subject');
  testData.append('message', 'This is a test message');

  try {
    const response = await fetch('http://localhost:8888/.netlify/functions/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: testData
    });

    const result = await response.json();
    console.log('Response status:', response.status);
    console.log('Response body:', result);
  } catch (error) {
    console.error('Error testing contact form:', error);
  }
}

// Only run if this file is executed directly
if (require.main === module) {
  testContactForm();
}

module.exports = { testContactForm };

