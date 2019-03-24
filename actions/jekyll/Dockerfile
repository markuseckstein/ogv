FROM ruby:2.6
RUN apt-get update -qq && apt-get install -y nodejs default-jre

# Set default locale for the environment
ENV LC_ALL C.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US.UTF-8

LABEL "com.github.actions.name"="Build Jekyll"
LABEL "com.github.actions.description"="Builds a jekyll site"
LABEL "com.github.actions.icon"="globe"
LABEL "com.github.actions.color"="orange"

LABEL "repository"="https://github.com/markuseckstein/ogv/actions/jekyll"

ADD entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]