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
- Three breakpoints are specifically optimized with responsive designs(ie, desktop with width>1280px, iPad pro, iPhone X), altough devices with all width should have a decent view.
- [X] 2. [Enhance Cart Functionality](/tasks/02-cart-enhancements.md)
- Added multiple actions, CART_ITEM_REMOVE and CART_ITEM_UPDATE states to support the funtionality of remove and update. Mostly manually debugged/tested, added origQty to product state to keep tracking the maximum amount of quantity for each product that can be set in the shopping cart. 
- [X] 3. [Hook Up Product API](/tasks/03-product-api.md)
- Completed with Axios.

### Some decision Making process:

My priority of working on this project is always focus on the first-phase view of each components(Usually with desktop breakpoint), then add functionality with redux and do some tests. Once it is completed, work more on CSS to support multiple breakpoints and optimize the views (ie, hovers, disable buttons, alerts and etc).

UI Library chosen: Ant Design Library, Native CSS Module
Ant Design is a great library that has the most of the out-of-box component that I can use for this project with responsive designs. 
Most frequently used components: Buttons, Modal, Input, Rows and Cols etc.
With this assessment that I decide to use Native CSS Modules at the beginning, it was tough to deal with overriding properties and meet the design requirement(That I had to use !important couple times). 
In the future when we are using Antd, I think tools like react-app-rewire-antd && react-css-modules with LESS should be a better to deal with these issues.

API was fetched by Axios, which worked a lot better compare to native tool 'fetch'. 
Here is the link of the entire discussion: https://medium.com/@sahilkkrazy/fetch-vs-axios-http-request-c9afa43f804ed

Fonts were imported by Google Fonts, there was no 'helvetica neue' avaliable in Google Fonts so I decide to choose similar one called 'Gothic' just for convinience of this project.

### At the end
By the way altough the entire project is time consuming, I still enjoy the progress especially playing around with Redux :)

