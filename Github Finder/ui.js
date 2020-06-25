class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }
  showProfile(user) {
    this.profile.innerHTML = `
                <div class="card card-body mb-3">
                <div class="row">
                <div class="col-md-3">
                    <img src="${user.avatar_url}" alt="avatar" class="img-fluid mb-3">
                    <a href="${user.html_url}" class="btn mb-4 btn-primary btn-block">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary">Public Repos : ${user.public_repos} </span>
                    <span class="badge badge-secondary">Public Gists : ${user.public_gists} </span>
                    <span class="badge badge-success">Followers : ${user.followers} </span>
                    <span class="badge badge-info">Following : ${user.following} </span>
                    <br> <br>
                    <ul class="list-group">
                    <li class="list-group-item">Company : ${user.company} </li>
                    <li class="list-group-item">Website/Blog : ${user.blog} </li>
                    <li class="list-group-item">Location : ${user.location} </li>
                    <li class="list-group-item">Member Since : ${user.created_at} </li>
                    </ul>
                </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
        `;
  }

  showRepos(repos) {
    let output = "";
    repos.forEach((repo) => {
      output += `
            <div class = "card card-body mb-3">
                <div class="row">
                    <div class="col-md-6">
                        <a href=${repo.html_url} target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary">Public Stars : ${repo.stargazers_count} </span>
                        <span class="badge badge-secondary">Watchers : ${repo.watchers_count} </span>
                        <span class="badge badge-success">Forks : ${repo.forks_count} </span>
                    </div>
                </div>
            </div>
        `;
    });
    document.getElementById("repos").innerHTML = output;
  }

  showAlert(msg, className) {
    this.clearAlert();
    const div = document.createElement("div");
    div.textContent = msg;
    div.className = className;
    const searchContainer = document.querySelector(".searchContainer");
    const search = document.querySelector(".search");
    searchContainer.insertBefore(div, search);
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  clearAlert() {
    const alert = document.querySelector(".alert");
    if (alert) {
      alert.remove();
    }
  }

  clearProfile() {
    this.profile.innerHTML = "";
  }
}
