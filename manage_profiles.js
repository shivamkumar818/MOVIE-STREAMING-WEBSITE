document.addEventListener('DOMContentLoaded', function() {
    const userProfilesContainer = document.querySelector('.userProfiles');
    const deleteAllBtn = document.querySelector('.deleteAllBtn');

    // Function to render user profiles and delete buttons
    function renderUserProfiles() {
        // Clear existing content
        userProfilesContainer.innerHTML = '';

        // Render each user profile with a delete button
        users.forEach(user => {
            const userProfileDiv = document.createElement('div');   
            userProfileDiv.classList.add('userProfile');

            const userProfileName = document.createElement('span');
            userProfileName.textContent = user;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('deleteBtn');

            deleteButton.addEventListener('click', function() {
                deleteUserProfile(user);
            });
            
            userProfileDiv.appendChild(userProfileName);
            userProfileDiv.appendChild(deleteButton);

            userProfilesContainer.appendChild(userProfileDiv);
        });
    }

    // Function to delete user profile
    function deleteUserProfile(userName) {
        const index = users.indexOf(userName);
        if (index !== -1) {
            users.splice(index, 1);
            localStorage.setItem('userProfiles', JSON.stringify(users));
            renderUserProfiles(); // Re-render user profiles after deletion
        }
    }

    // Function to delete all user profiles
    function deleteAllUserProfiles() {
        localStorage.removeItem('userProfiles');
        users.length = 0;
        userProfilesContainer.innerHTML = ''; // Clear the user profiles container
    }

    // Event listener for the "Delete All Profiles" button
    deleteAllBtn.addEventListener('click', deleteAllUserProfiles);

    // Initial rendering of user profiles
    renderUserProfiles();
});
