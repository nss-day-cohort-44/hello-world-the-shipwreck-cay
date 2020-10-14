# Directions

## Clone repository
Navigate to workspace directory in the terminal, then enter the following command:
git clone git@github.com:nss-day-cohort-44/hello-world-the-shipwreck-cay.git

## Checkout branch
Before making any changes, checkout your own branch with the following code:
git checkout -b "name of branch"

Note: your branch name should be in the following format: (your initials) - appropriateNameForModuleYouAreWorkingon
For example, if my initials are MC and I am working on the Greek subdirectories, I could name it: mc-addingGreekSubDir

## Pushing up to github and creating pull request
At regular intervals (for example, after writing a piece of code, testing and finding that it works) you shoudld save your work locally by commiting your changes. Do this with the following commands in the terminal (before each step, run the command 'git status' to ensure you are only affecting the desired files):
git add --all
git commit -m "" (inside the quotation marks give a brief explanation of any changes made since last commit)

Once you are ready to upload your changes to github:
Run a git status in the terminal to ensure all changes have been saved local, then:
git push origin (name of your current branch)

Once you have done this, you can navigate to the repository on github and create a pull request. In the comments explain what you changed and how reviewers can verify your work. Invite at least two teammembers to review.

## Reviewing teammembers pull requests
In order to review to review a team members pull request, follow the instructions in their notes. In general, first steps should be:
git fetch --all
git checkout (name of the teammembers branch)

## What to do if the request is denied
If a teammate denies your request, discuss what changes need to be made, make and then commit those changes, then repeat the steps for pushing your branch.

## Merging pull request
If your request is approved by two teammates, navigate to your pull request and merge it to the main.
After merging to main, delete the branch on github (there will be a button for this after merging)
Then do so locally with the following commands:
git checkout main
git pull origin main
git branch -d (name of branch you are deleting)
Notify all teammates that their is a new Main branch
## Updating Main branch
If you have received notification that a teammate has updated the main branch, at some point before making your next pull request:
commit all changes
git checkout main
git pull origin main
git checkout (the branch you are working on)
git merge master

after these steps you can push your branch to github and make your own request

## How we will celebrate success
After successful completion on the project, teammates will congratulate each other and express what they think each person did well.