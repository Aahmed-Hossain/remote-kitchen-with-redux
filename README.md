# Remote Kitchen a SaaS project.

## [Live Link](https://remote-kitchen.vercel.app/)

## Table of Contents

- [Questions Answers](#questions-answers)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Landing Page](#landing-page)
- [Landing page SM](#landing-page-sm)

## Installation
```bash
git clone https://github.com/Aahmed-Hossain/remote-kitchen-with-redux.git
cd remote-kitchen
npm install
npm run dev
```

## Questions Answers

#### Question_1: A project titled, “Alex’s Kitchen” from team "Remote Kitchen" uses Git for version control. Several developers are contributing, with each working on their own branch. The team follows certain conventions. Suppose you need to submit a hotfix. How would you name your branch? After finalizing your work in your designated branch, detail the steps you would take to create a PR and merge it with the production branch.

Answer: I should move forward by following common conventions for bug fixing i'm describing steps by steps.
(I) Create hotfix branch from production branch as the production branch is the base branch by ```bash git checkout -b hotfix ```
(II) After making changes for fixing the issue on the branch I should push the changes to the remote by 
```bash git add .
git commit -m 'chore: jwt auth issue fixes'
git push origin hotfix ```

(III) Then I should create a pull request by checking the fixed issue on local m/c. Then I should move on gitHub for creating a pull request hotfix to production branch
(IV)  Then I should wait for the Review.
(V) If the review approved then I  should update the production branch.

By these steps a bug can be solved in a team project.

#### Question_2: In a Digital Kitchen, we have an array of Menu collections. Each collection is an object of Menu. And contains two properties alongside with various properties of Menu. Which are, menuItems (which is an array of objects. Each object has a unique identifier) and, categories. Categories itself is an array of objects. In each object inside categories, there is one property (an array of int’s) called, menuItemsIds.
Find out the specific items that belongs to each category.
Take a reference from below code snippet,
const dummyArr = [ {
      type: "Vegetarian",
      menuItems: [
        {id: 1, name: "Salad"},
        {id: 2, name: "Veg Burger"},
        {id: 3, name: "Pasta"}
      ],
      category: [{
        name: "Starters",
        menuItems:[1,2]
      }]
    },
    {
      type: "Non-Vegetarian",
      menuItems: [
        {id: 4, name: "Chicken Wings"},
        {id: 5, name: "Beef Burger"},
        {id: 6, name: "Shrimp Pasta"}
      ],
      category: [{
        name: "Main Course",
        menuItems:[4,5]
      }]
    }
]
Discuss the conceptual approach. Explain, how you will resolve this or get the data based on the conditions where id’s are being matched, keeping aside the specifics of coding.

Answer: 
By this dummy data structure a smart approach to categorize menu items within a digital kitchen system.
- An array dummyArr stores multiple Menu collections.
- menuItems: An array of objects representing individual menu items. Each item object has an id for unique identification and a name
- categories: An array of objects representing categories. Each category object has a name and an array named menuItemsIds.
- Function get_category_items: This function iterates through the dummyArr to process each Menu collection.
- For each Menu collection, it loops through the categories array to access individual categories.
- The category's name is retrieved and used as a key to store items in a dictionary named category_items
- An empty list is initialized as the value for the category name key in the category_items dictionary. This list will eventually hold the menu items belonging to that category.
- For each menuItemId in menuItemsIds:
- It searches through the menuItems array of the Menu collection to find a matching id.
- If a match is found (meaning the id of a menu item matches the menuItemId), the menu item object is appended to the list associated with the current category name in the category_items dictionary.
- Output: After processing all Menu collections and their categories, the category_items dictionary stores the final results.  Each key in the dictionary represents a category name.The value corresponding to each key is a list containing the menu items (name and id) that belong to that particular category.





## Tech Stack
- Next.js
- TypeScript
- Redux
- Redux Toolkit
- React-toastify
- Tailwindcss
- Material Ui
- React-hook-form

## Landing page
![xl device-remote kitchen](https://github.com/Aahmed-Hossain/remote-kitchen-with-redux/assets/138388233/678558b7-069e-42cd-a865-e4568333a683)


## Landing page SM
![sm-remote-kitchen](https://github.com/Aahmed-Hossain/remote-kitchen-with-redux/assets/138388233/57240ddd-28a6-4871-ae85-5f3811cd1685)
