workflow "Deploy" {
  on = "push"
  resolves = ["FTP Deploy Action"]
}

action "Build Jekyll" {
  uses = "./actions/jekyll"
}

action "FTP Deploy Action" {
  uses = "./actions/ftp-deploy"
  needs = ["Build Jekyll"]
}
