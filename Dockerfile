FROM ubuntu:20.10

RUN apt update && apt upgrade -y

RUN apt update && apt install -y python3 python3-venv python3-pip
RUN pip3 install black

RUN apt update && apt install -y curl

RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt update && apt install -y nodejs

RUN apt update && apt install -y git

RUN useradd -ms /bin/bash bacchilu
USER bacchilu

RUN git config --global user.email "bacchilu@gmail.com"
RUN git config --global user.name "Luca Bacchi"

WORKDIR /home/bacchilu

RUN ln -s /usr/share/bash-completion/completions/git git-autocomplete
RUN /bin/bash -c "source git-autocomplete"
