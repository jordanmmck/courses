import Home from "./components/Home.vue";

// import User from "./components/user/User.vue";
// import UserStart from "./components/user/UserStart.vue";
import UserDetail from "./components/user/UserDetail.vue";
import UserEdit from "./components/user/UserEdit.vue";

// lazy loading
// the 'user' arg ships them together
const User = (resolve) => {
  require.ensure(
    ["./components/user/User.vue"],
    () => {
      resolve(require("./components/user/User.vue"));
    },
    "user"
  );
};
const UserStart = (resolve) => {
  require.ensure(
    ["./components/user/UserStart.vue"],
    () => {
      resolve(require("./components/user/UserStart.vue"));
    },
    "user"
  );
};

export const routes = [
  { path: "", component: Home, name: "home" },
  {
    path: "/user",
    component: User,
    props: true,
    children: [
      { path: "", component: UserStart },
      {
        path: ":id",
        component: UserDetail,
        // this protects the route ie. we can do a check or something
        beforeEnter: (to, from, next) => {
          next();
        },
      },
      { path: ":id/edit", component: UserEdit, name: "userEdit" },
    ],
  },
  { path: "/users", redirect: "/user" },
  { path: "*", redirect: "/" },
];
