### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router? React Router enables you to view different components of an app based on the URL in the address bar which React Router has the ability to change.

- What is a single page application? A single-page application is one in which loads a single HTML page which changes dynamically based on user interactions, causing state changes, components rendered with different props, etc.

- What are some differences between client side and server side routing? Server-side routing involves the use of a server to handle navigation and requests through different endpoints of a web application. Client-side routing (CSR), however, involves using the browser to handle navigating through the application. Unlike server-side, CSR does not refresh the entire web page. Instead, it dynamically loads the necessary modules to update the view of the UI without refreshing the page.

- What are two ways of handling redirects with React Router? When would you use each? One can redirect a user to a homepage or another actual endpoint with Redirect (deprecated; Navigate is used now). This is used when a user navigates to a nonexistent endpoint. The other way is with the History API (useHistory). This keeps track of the session history for React Router. useHistory comes with a 'push' method that pushes a new path onto the history stack and redirects the user to that path. It is useful in cases where a user submits a form, a nonexistent path was entered or even upon logging out.

- What are two different ways to handle page-not-found user experiences using React Router? One way to handle a page-not-found with React Router is to create a Route to handle all possible non-matching routes with <Route path="*"  element={<Homepage /> } /> This will redirect a user to the Homepage component whenever a nonexistent path is entered into the URL. Another way to handle a page-not-found experience is to create a component that handles those nonexistent paths. It can be simple just to let the user know this path does not exist and a link to go back to a path that matches.

- How do you grab URL parameters from within a component using React Router? with useParams. This hook returns an object with key/value pairs from the current URL which is found using the React Router. It also stores information on the URL parameters.

- What is context in React? When would you use it? context in React is an object. When React renders a component that subscribes to this context object it will read the current context value from the closest matching Provider above it in the tree. We use context to avoid Prop Drilling, it causes our code to be less repititive. It is useful for global themes and other shared data.

- Describe some differences between class-based components and function
  components in React.

    Function components use hooks like useState and useEffect while class-based components do not.

    Class-based components employ the use of keywords 'this' and 'bind' since they are classes while function components do not.

    Class-based components use instance methods that make up the component lifecycle. Some of these methods include: constructor, render, componentDidMount, componentDidUnMount, etc. Functional components can use achieve the same effect with the use of hooks.



- What are some of the problems that hooks were designed to solve?  Some of the problems hooks were designed to solve include: Repeating code and logic in the lifecycle of a component, sharing logic among components and class-based components often had code that was harder to write tests for.