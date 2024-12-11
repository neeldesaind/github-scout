window.onload = function () {
    const username = "neeldesaind";
    document.getElementById('profileDiv').classList.add('hidden');
    document.getElementById('errorP').classList.add('hidden');

    const url = `https://api.github.com/users/${username}`;
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            const user = JSON.parse(xhr.responseText);

            document.getElementById('avatar').src = user.avatar_url;
            document.getElementById('name').textContent = user.name || 'Not Available';
            document.getElementById('bio').textContent = user.bio || 'Not Available';
            document.getElementById('company').textContent = user.company || 'Not Available';
            document.getElementById('location').textContent = user.location || 'Not Available';
            document.getElementById('email').textContent = user.email || 'Not Available';
            document.getElementById('repos').textContent = user.public_repos;
            document.getElementById('followers').textContent = user.followers;
            document.getElementById('following').textContent = user.following;
            document.getElementById('created').textContent = new Date(user.created_at).toLocaleDateString() || 'Not Available';
            document.getElementById('updated').textContent = new Date(user.updated_at).toLocaleDateString() || 'Not Available';

            document.getElementById('profileDiv').classList.remove('hidden');
            document.getElementById('errorP').classList.add('hidden');
        } else if (xhr.status === 404) {
            document.getElementById('profileDiv').classList.add('hidden');
            document.getElementById('errorP').textContent = 'User not found. Please check the username.';
            document.getElementById('errorP').classList.remove('hidden');
        } else {
            document.getElementById('profileDiv').classList.add('hidden');
            document.getElementById('errorP').textContent = `Error: ${xhr.status} - ${xhr.statusText}`;
            document.getElementById('errorP').classList.remove('hidden');
        }
    };

    xhr.onerror = function () {
        document.getElementById('profileDiv').classList.add('hidden');
        document.getElementById('errorP').textContent = 'An error occurred while fetching the user data.';
        document.getElementById('errorP').classList.remove('hidden');
    };

    xhr.send();
};
