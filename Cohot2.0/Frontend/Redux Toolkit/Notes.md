1. Need of Redux: 

- React is used to build optmized and scalabel UI/Frontend 

- State mananement in react was not good it required lots of code because parents-children components in prop drilling and in context api we have to make different context for each features like auth-> auth.context, post-> post.context, etc

- 2015:- Prop drilling is the only way to do state management there is no context api at that time, Redux was introduced at this time for 1. Centralization of data and state management but it also has some cons like 1. syntax is diffcult, 2. long boilderplate, 3. setup required lot of time. 

This proplems are removed in "Redux Toolkit" 

2. Redux Toolkit(RTK) Architecture: 

- Reder image "rtk_arch"

- Redux storage: It is basically a storage where state is stored with its initial values

- Reducer is a function that change the state in Redux store and since state is change is changed in redux store it will reflect in whoe UI, Smmary is reducers update the state(value) in redux store 

3. Writing Code:

- Slices:- They manage the state of different features such as like, post, add to cart, etc

- useDispatch(): It will dispatch actions to the redux store

- useSelector: It used to read data from the redux store or showing data from store on UI

- Create store and reducers
- Wrap Parent with <Provider store={store}><App /><Provider>, so that whole UI can access this store
- Create Slice
