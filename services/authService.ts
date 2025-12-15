// services/authService.ts

/**
 * This is a MOCK authentication service.
 * In a real application, you would replace these functions with calls
 * to your backend authentication provider (e.g., Supabase, Firebase, Auth0).
 */

export const login = async (email, password) => {
  console.log("Attempting login with:", email, password);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulate a successful login
  if (email && password) {
    return {
      success: true,
      user: {
        id: 'user-123',
        email: email,
        // In a real scenario, you'd get a session token here
      }
    };
  }

  // Simulate a failed login
  return {
    success: false,
    error: "Invalid email or password."
  };
};

export const signUp = async (email, password) => {
  console.log("Attempting sign up with:", email, password);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Simulate a successful sign up
  if (email && password) {
     return {
      success: true,
      user: {
        id: 'user-new-' + Date.now(),
        email: email,
      }
    };
  }

  // Simulate a failed sign up
  return {
    success: false,
    error: "Could not create account. Please try again."
  };
};

export const logout = async () => {
    console.log("Logging out user.");
    await new Promise(resolve => setTimeout(resolve, 500));
    return { success: true };
}
