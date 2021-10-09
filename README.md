# HacktoberFest-2021 🏆

![Techhub-Hacktoberfest2021](https://raw.githubusercontent.com/anjali112-bit/Posters/main/Techhub/estore.png)

#### 🎯 HacktoberFest - The month long festival for developers

- This repository aims to give an introduction as to how the Open Source World functions. Use this project to make your first contribution to an open-source project on GitHub. Practice making your first pull request to a public repository before doing the real thing!

- Make sure to grab some cool swags during Hacktoberfest by getting involved in the open-source community and completing some simple tasks in this project.

- This repository is open to all members of the GitHub community. Any member can contribute to this project without being a collaborator. We encourage first time contributors, and also have interesting tasks for experienced developers.


# <b>What is Hacktoberfest?</b> 😕

A month-long celebration from October 1st to October 31st presented by Digital Ocean and DEV Community collaborated with GitHub to get people involved in Open Source. Create your very first pull request to any public repository on GitHub and contribute to the open-source developer community.

https://hacktoberfest.digitalocean.com/

## Rules ⚓

To earn your Hacktoberfest tee or tree reward, you must register and make four valid pull requests (PRs) between October 1-31 (in any time zone). PRs can be made to participating public repos on GitHub, those that have the Hacktoberfest topic. If a maintainer reports your pull request as spam or behavior not in line with the project’s code of conduct, you will be ineligible to participate. This year, the first 70,000 participants who successfully complete the challenge will be eligible to receive a prize.

- <b>Read the participation details to learn how to earn your Hacktoberfest tee or tree reward. </b>

- <b>Those who have not registered yet for hacktoberfest can get themselves registered <a href="https://hacktoberfest.digitalocean.com/register">HERE</a></b>
<hr>

# How to Setup & Contribute 

<details>
 <summary> click here</summary>
 
 ### 0. Star The Repo :star2:

Star the repo by pressing the topmost-right button to start your wonderful journey.


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
`In your case, you will see`
```sh
$ git remote -V
origin    https://github.com/Your_Username/Hackbook.git (fetch)
origin    https://github.com/Your_Username/Hackbook.git (push)
upstream  https://github.com/ietebitmesra/Hackbook.git (fetch)
upstream  https://github.com/ietebitmesra/Hackbook.git (push)
```

### 4. Sync it :recycle:

Always keep your local copy of the repository updated with the original repository.
Before making any changes and/or in an appropriate interval, run the following commands *carefully* to update your local repository.

```sh
# Fetch all remote repositories and delete any deleted remote branches
$ git fetch --all --prune
# Switch to `master` branch
$ git checkout master
# Reset local `master` branch to match the `upstream` repository's `master` branch
$ git reset --hard upstream/master
# Push changes to your forked `Hackbook` repo
$ git push origin master
```

### 5. Ready Steady Go... :turtle: :rabbit2:

Once you have completed these steps, you are ready to start contributing by checking our `Help Wanted` Issues and creating [pull requests](https://github.com/techhub-community/Hackbook/pulls).

### 6. Create a new branch :bangbang:

Whenever you are going to contribute. Please create a separate branch using command and keep your `master` branch clean (i.e. synced with remote branch).

```sh
# It will create a new branch with name Branch_Name and switch to branch Folder_Name
$ git checkout -b BranchName
```

Create a separate branch for contribution and try to use the same name of the branch as of folder.

To switch to the desired branch

```sh
# To switch from one folder to other
$ git checkout BranchName
```

To add the changes to the branch. Use

```sh
# To add all files to branch Folder_Name
$ git add .
```

Type in a message relevant for the code reviewer using

```sh
# This message get associated with all files you have changed
$ git commit -m 'relevant message'
```

Now, Push your awesome work to your remote repository using

```sh
# To push your work to your remote repository
$ git push -u origin BranchName
```

Finally, go to your repository in the browser and click on `compare and pull requests`.
Then add a title and description to your pull request that explains your precious effor
</details>

# Hackbook

### OCT 8, 2021

Hi hackers!

**Looking for more ways to support the Community? Here are a few ideas:**

👩‍💻 Continue providing feedback on pull requests to help other hackers get their pull request ready to merge. We appreciate your help and love seeing the magic of social coding.

📪 Have patience. Our team is working hard to get through your pull requests and provide everyone with the feedback needed to join the event. GitHub Actions saved our team an enormous amount of time managing reviews this year but, as much as we love our automations, this is still a manual process to ensure the Code of Conduct is followed and the event can be enjoyed by all.

![Techhub-Hackbook](https://raw.githubusercontent.com/anjali112-bit/Posters/main/Techhub/techhub%20HACKBOOK.png)


This repository contains the **Hackbook**. By issuing a pull request to this repository, you can request to be added to the Contributors. 
 


## Disclaimer 👀
Consider that all the information that you add to this repository will be publicly available.

- If you don't feel comfortable with displaying your full name, you can include a short name or nickname instead.

# Who can apply 📝
Anyone who wants to participate in hacktoberfest. 

# How to join the list

Here are two steps to join hackbook. 
1. **Submit a pull request** with your profile information to join the Hackbook and be highlighted in the event.

## 2. Add yourself to Hackbook 🏫

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
---
name: FULLNAME-OR-NICKNAME # No longer than 28 characters
institution: INSTITUTION-NAME 🚩 # no longer than 58 characters
quote: YOUR-SENIOR-QUOTE # no longer than 100 characters, avoid using quotes(") to guarantee the format remains the same.
github_user: YOUR-GITHUB-USERNAME
---
```

_Do not use special characters in the template above._

### Third, submit your Pull Request

Go through the checklist on the pull request template to guarantee your submission is valid. The Techhub team will review your application, approve and merge your submission if everything is correct. Otherwise, you will get notified of the changes requested in the pull request comment section. 
