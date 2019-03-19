# Work & Co Web Code Assessment, completed by Chris Huang(@ThisZW)

This is a copy of the [Redux Shopping Cart Example](https://github.com/reactjs/redux/tree/master/examples/shopping-cart).

To install dependencies, use the package manager [Yarn](https://yarnpkg.com/en/):

```
yarn
```

To start a development server:

```
yarn start
```

## Goals/Tasks

- [X] 1. [Implement Responsive Design](/tasks/01-responsive-design.md)
- [X] 2. [Enhance Cart Functionality](/tasks/02-cart-enhancements.md)
- [X] 3. [Hook Up Product API](/tasks/03-product-api.md)

### Some decision Making process:

My priority of working on this project is always focus on the first-phase view of each components(Usually with desktop breakpoint), then add functionality with redux and do some tests. Once it is completed, work more on CSS to support multiple breakpoints and optimize the views (ie, hovers, disable buttons, alerts and etc).

UI Library chosen: Ant Design Library, Native CSS Module
Ant Design is a great library that has the most of the out-of-box component that I can use for this project with responsive designs. The pain point was that it was tough to override some css properties to meet design requirement with Native CSS Modules (That I had to use !important couple times). In the future of designing using Antd, I think tools like webpack config override && react-css-modules with Less should be a better set of CSS tools to deal with these issues.

API was fetched by Axios, which worked a lot better compare to native tool 'fetch'. 
Here is the link of the entire discussion: https://medium.com/@sahilkkrazy/fetch-vs-axios-http-request-c9afa43f804ed

Fonts were imported by Google Fonts, there was no 'helvetica neue' avaliable in Google Fonts so I decide to choose similar one called 'Gothic' just for convinience of this project.

### At the end
By the way altough the entire project is time consuming, I still enjoy the progress especially playing around with Redux :)

