async function fetchGitHubProfile() {
    const username = document.getElementById('searchInput').value;
    if (!username) {
        alert('Please enter a GitHub username');
        return;
    }

    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
            alert('User not found');
            return;
        }

        const user = await response.json();
        displayProfile(user);
        fetchRepositories(username);
    } catch (error) {
        console.error('Error fetching GitHub profile:', error);
    }
}

function displayProfile(user) {
    document.getElementById('profileImage').src = user.avatar_url;
    document.getElementById('profileName').textContent = user.name || 'No Name Provided';
    document.getElementById('profileBio').textContent = user.bio || 'No bio available.';
    document.getElementById('followers').textContent = user.followers;
    document.getElementById('following').textContent = user.following;
    document.getElementById('repos').textContent = user.public_repos;
    document.getElementById('profileCard').classList.remove('hidden');
}

async function fetchRepositories(username) {
    const reposContainer = document.getElementById('reposList');
    reposContainer.innerHTML = ''; // Clear previous repos
    try {
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=created`);
        const repos = await reposResponse.json();
        repos.slice(0, 5).forEach(repo => {
            const repoElement = document.createElement('span');
            repoElement.textContent = repo.name;
            reposContainer.appendChild(repoElement);
        });
    } catch (error) {
        console.error('Error fetching repositories:', error);
    }
}
