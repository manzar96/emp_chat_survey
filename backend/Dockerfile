FROM ubuntu:latest

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update
RUN apt-get install -y --no-install-recommends apt-utils
##----------- Install Python 3 -----------#
RUN apt-get install -y software-properties-common

RUN apt-get install -y build-essential python3 python3-dev python3-pip python3-venv

##----------- Install git -----------#
RUN apt-get install git-all -y

##----------- Create virtual env -----------#
RUN python3 -m venv venv_empchat
RUN . venv_empchat/bin/activate


#----------- update pip -----------#
RUN python3 -m pip install pip --upgrade
RUN pip install --upgrade setuptools pip


#----------- restore env -----------#y
ENV DEBIAN_FRONTEND teletype
#----------- copy files inside container -----------#



WORKDIR /backend
COPY . .
RUN pip install -r requirements.txt

ENTRYPOINT ["python3","run.py"]
