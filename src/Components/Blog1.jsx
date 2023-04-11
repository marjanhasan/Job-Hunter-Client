import React from "react";

const Blog = () => {
  return (
    <div className="md:px-24 text-justify">
      <div className="bg-gray-300 w-full py-6 rounded-lg my-5 shadow-lg">
        <h2 className=" pl-6 font-bold text-base mb-3">Props vs state</h2>
        <p className="mx-6 mb-3 h-fit bg-gray-100 px-6 py-3 font-semibold break-words text-base rounded-lg">
          Props are used to pass data from parent component to a child
          component. It is read only, meaning they cannot be changed. It is
          useful for passing data to child components. States are used to manage
          data that can be change within a component.It is can be updated using
          the setState() method.When state is updated, React automatically
          re-renders the components. It is only accessible within function where
          it is declared meaning it cannot be accessed or modified by other
          components.
        </p>
      </div>
      <div className="bg-gray-300 w-full py-6 rounded-lg my-5 shadow-lg">
        <h2 className=" pl-6 font-bold text-base mb-3">
          How does useState work?
        </h2>
        <p className="mx-6 mb-3 h-fit bg-gray-100 px-6 py-3 font-semibold break-words text-base rounded-lg">
          useState is a react hook that allows us to add state to functional
          components.It returns an array and a function.We can use the variable
          and update function in our component. React automatically update
          component when the state value changes.
        </p>
      </div>
      <div className="bg-gray-300 w-full py-6 rounded-lg my-5 shadow-lg">
        <h2 className=" pl-6 font-bold text-base mb-3">
          Purpose of useEffect other than fetching data.
        </h2>
        <p className="mx-6 mb-3 h-fit bg-gray-100 px-6 py-3 font-semibold break-words text-base rounded-lg">
          The useEffect Hook in React is commonly used to fetch data, but it can
          also be used for other purposes. It’s also used for updating the title
          of a page, subscribing to a WebSocket, or cleaning up a component. It
          allows us to perform side effects in a functional component.
        </p>
      </div>
      <div className="bg-gray-300 w-full py-6 rounded-lg my-5 shadow-lg">
        <h2 className=" pl-6 font-bold text-base mb-3">How Does React work?</h2>
        <p className="mx-6 mb-3 h-fit bg-gray-100 px-6 py-3 font-semibold break-words text-base rounded-lg">
          React works by creating a virtual DOM. We create react components
          using a syntax called JSX. When a component is mounted, it create a
          virtual DOM and updates it whenever the state or props of the
          component change.When the virtual DOM is updated, it calculate the
          difference between current virtual DOM tree and previous one.It then
          applies changes to the real DOM, updating only the parts that have
          changed.
        </p>
      </div>
    </div>
  );
};

export default Blog;
