workflow "Deploy" {
  on = "push"
  resolves = ["FTP Deploy Action"]
}

action "Build Jekyll" {
  uses = "markuseckstein/github_actions/jekyll@master"
}

action "FTP Deploy Action" {
  uses = "markuseckstein/github_actions/ftp-deploy@master"
  needs = ["Build Jekyll"]
  secrets = ["FTP_SERVER", "FTP_USERNAME", "FTP_PASSWORD", "REMOTE_DIR", "LOCAL_DIR"]
}
