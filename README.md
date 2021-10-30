# HacktoberFest-2021 🏆

[About Hacktoberfest](https://hacktoberfest.digitalocean.com/)

<hr>

# Hackbook

### OCT 8, 2021

Hello hackers!

**Looking for more ways to support the Community? Here are a few ideas:**

👩‍💻 Continue in providing feedback on pull requests to help other hackers get their pull request ready to merge. We appreciate your help and love seeing the magic of social coding.

📪 Have patience. Our team is working hard to get through your pull requests and provide everyone with the feedback needed to join the event. GitHub Actions saved our team an enormous amount of time managing reviews this year but, as much as we love our automations, this is still a manual process to ensure the Code of Conduct is followed and the event can be enjoyed by all.

![Techhub-Hackbook](https://raw.githubusercontent.com/anjali112-bit/Posters/main/Techhub/techhub%20HACKBOOK.png)


This repository contains the **Hackbook**. By issuing a pull request to this repository, you can request to be added to the Contributors. 
 


## Disclaimer 👀
Consider that all the information that you add to this repository will be publicly available.

- If you don't feel comfortable with displaying your full name, you can include a short name or nickname instead.

# How to Setup

### 1. Fork it :fork_and_knife:

You can get your own fork/copy of [Hackbook](https://github.com/techhub-community/Hackbook) by using the <kbd><b>Fork</b></kbd> button on top-right of your screen.



### 2. Clone it :busts_in_silhouette:

`NOTE: commands are to be executed on Linux, Mac, and Windows(using Powershell)`

You need to clone (download) it to local machine using

```sh
$ git clone https://github.com/techhub-community/Hackbook.git
```

> This makes a local copy of the repository in your machine.
Once you have cloned the `Hackbook` repository in Github, move to that folder first using change directory command on Linux, Mac, and Windows(PowerShell to be used).

```sh
# This will change directory to a folder Hackbook
$ cd Hackbook
```

Move to this folder for all other commands.

### 3. Set it up :arrow_up:

Run the following commands to see that *your local copy* has a reference to *your forked remote repository* in Github :octocat:

```sh
$ git remote -v
origin  https://github.com/Your_Username/Hackbook.git (fetch)
origin  https://github.com/Your_Username/Hackbook.git (push)
```

Now, let's add a reference to the original [Hackbook](https://github.com/techhub-community/Hackbook/) repository using

```sh
$ git remote add upstream https://github.com/techhub-community/Hackbook.git
```

> This adds a new remote named ***upstream***.
See the changes using

```sh
$ git remote -v
origin    https://github.com/Your_Username/Hackbook.git (fetch)
origin    https://github.com/Your_Username/Hackbook.git (push)
upstream  https://github.com/Remote_Username/Hackbook.git (fetch)
upstream  https://github.com/Remote_Username/Hacktbook.git (push)
```

# How to join the list

## Add yourself to Hackbook 🏫

Replace `<YOUR-USERNAME>` with your GitHub username in this guide.

### First, create the folder _data/YOUR-USERNAME/ 
Fork this repository, create a new folder inside the `_data` folder, and name it with your username. It should look something like this `_data/<YOUR-USERNAME>/`. Ex.

```
_data/MonaTheOctocat/
```
### Second, add your profile information
Create a markdown file in your folder following the convention `<YOUR-USERNAME>.md`. Ex.

```
_data/MonaTheOctocat/MonaTheOctocat.md
```
Copy the next template into your file, delete the boilerplate data and fill the information with yours.
```
"name": "FULLNAME-OR-NICKNAME", # No longer than 28 characters
"quote": "YOUR-SENIOR-QUOTE", # no longer than 100 characters
"tech_stack": "YOUR-TECH-STACK" # mention any one or two skills only.
```

_Do not use special characters in the template above._

### Third, submit your Pull Request

Go through the checklist on the pull request template to guarantee your submission is valid. The Techhub team will review your application, approve and merge your submission if everything is correct. Otherwise, you will get notified of the changes requested in the pull request comment section. 
