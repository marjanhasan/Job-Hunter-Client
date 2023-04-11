import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="bg-gray-100 h-64 mb-16 text-4xl font-bold tracking-wide flex justify-center items-center">
        Blog
      </div>
      <div className="md:px-24 text-justify">
        <div className="bg-gray-300 w-full py-6 rounded-lg my-5 shadow-lg">
          <h2 className=" pl-6 font-bold text-base mb-3">
            When Do we Use Context API?
          </h2>
          <p className="mx-6 mb-3 h-fit bg-gray-100 px-6 py-3 font-semibold break-words text-base rounded-lg">
            We should use the Context API in React when we need to pass data
            down from a parent component to multiple levels of child components
            without having to pass props through each level. Common scenarios
            include theme customization, user authentication, language
            localization, and global state management.
          </p>
        </div>
        <div className="bg-gray-300 w-full py-6 rounded-lg my-5 shadow-lg">
          <h2 className=" pl-6 font-bold text-base mb-3">
            What is Custom Hook?
          </h2>
          <p className="mx-6 mb-3 h-fit bg-gray-100 px-6 py-3 font-semibold break-words text-base rounded-lg">
            A custom hook in React is a reusable function that allows us to
            extract and share stateful logic between components. It's a way to
            use React hooks to create functions that can be used across
            different components, similar to how you use built-in hooks like
            useState.
          </p>
        </div>
        <div className="bg-gray-300 w-full py-6 rounded-lg my-5 shadow-lg">
          <h2 className=" pl-6 font-bold text-base mb-3">what is useRef?</h2>
          <p className="mx-6 mb-3 h-fit bg-gray-100 px-6 py-3 font-semibold break-words text-base rounded-lg">
            useRef is a React hook that allows us to create a reference to an
            element in the DOM and persist it across renders. It can be used to
            access or modify the properties or methods of DOM elements directly.
            It's commonly used for focusing input fields, playing and pausing
            videos, or triggering animations imperatively.
          </p>
        </div>
        <div className="bg-gray-300 w-full py-6 rounded-lg my-5 shadow-lg">
          <h2 className=" pl-6 font-bold text-base mb-3">What is useMemo?</h2>
          <p className="mx-6 mb-3 h-fit bg-gray-100 px-6 py-3 font-semibold break-words text-base rounded-lg">
            useMemo is a React hook that memoizes a function and its return
            value, and only recomputes it when the inputs change. It can be used
            to optimize expensive calculations or computations by caching the
            result and returning it from cache if the input values are the same.
            This can significantly improve the performance of a React
            application by reducing unnecessary re-renders.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
