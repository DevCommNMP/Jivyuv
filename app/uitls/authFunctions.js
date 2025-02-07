export const checkSession = async () => {
    try {
      const response = await fetch("http://localhost:5000/test-session", {
        credentials: "include", // Important for cookies
      });
  
      if (!response.ok) throw new Error("No active session");
  
      const data = await response.json();
      return data.sessionData; // Return session user data
    } catch (error) {
      return null; // No session found
    }
  };
  