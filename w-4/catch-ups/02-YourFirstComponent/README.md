# Your first Component

The first component into your React Application will always be the App(), which is inside the src/App.jsx file. It will come pre-created with some text inside it so the page doesn't look empy when you open the app for the first time. In this activity we are going to:

- Clean that component to keep only what we need for our project
- Learn how to write JSX in the return

### Instructions

1. Navigate to the "02-YourFirstComponent" directory.

2. Run the comand "npm install" in the terminal to make sure that all the dependencies of our project are there.

3. Run the comand "npm run dev" in the terminal to create a live server.

4. Open the application on the browser by clicking on the localhost server that will appear in your terminal after step 3.

5. Clean-up the things that you don't need:

   5.1. Delete the .svg files inside "src/assets" and "public".

   5.2. The previouse step will cause your application to crash, so to solve this go to "src/App.jsx" and delete:

   - The imports in line 2 and line 3 (they were importing the logos that were deleted in step 5.1)

   - The jsx code after the return keyword to line 32 -> after this, the only thing remaining in the return of the App() should be whitespace.

6. Now that the code has been cleaned up, you can write tyour first lines in JSX. JSX is similar to HTML. The tags are the same, and visually it looks like HTML. However, in reality, is javascript, and our React App will read it as such. Let's practice our JSX:

   6.1. Write a h1 element with the text "Hello World" right after the return keyword. -> single line returns don't need parenthesis or fragments(<></>) around them.

   6.2. Write a h2 element with the text "Welcome to the class" on the following line to the h1 element. -> this should trigger an error an break your program. Because JSX is read as javascript code, and functions can only return one javascript element, to fix the error you will need to do 2 things:

   - Make sure multiple line returns are wrapped around a fragment(<></>) or a parent tag (eg.: div).

   - Make sure in multiple line returns all tags(including fragments and parent tags) are wrapped around by parenthesis.

   Now, your react app should be showing the h1 and h2 elements in the browser without problems!
