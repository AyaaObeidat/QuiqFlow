async function fetchUserData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const usersData = await response.json();
      return usersData;
    } catch (error) {
      console.log('Error fetching user data:', error);
      return null;
    }
  }
  
  async function printUsersData() {
    try {
      const usersData = await fetchUserData();
  
      if (usersData) {
        console.log('Fetched Users:', usersData);
      } else {
        console.log('No user data to display.');
      }
  
    } catch (error) {
      console.log('Unexpected error:', error);
    }
  }
  
  printUsersData();
  