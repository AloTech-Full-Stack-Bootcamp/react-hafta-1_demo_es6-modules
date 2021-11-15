import axios from "axios";
const getUsers = (isRejected) => {
  return new Promise(async (resolve, reject) => {
    if (isRejected) {
      reject("rejectd  :(");
      //reject(new Error("rejected :("));
    } else {
      const { data } = await axios(
        "https://jsonplaceholder.typicode.com/users"
      );
      resolve(data);
    }
  });
};

//getUsers().then((data) => console.log(data));

const getPost = (id) => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(
      "https://jsonplaceholder.typicode.com/posts/" + id
    );
    resolve(data);
  });
};

//getPost(1).then((data) => console.log(data));
/*
(async () => {
  let users;
  let post;
  try {
    users = await getUsers(true);
  } catch (err) {
    console.log(err);
  }
  
  try {
    post = await getPost(1);
  } catch (err) {
    console.log(err);
  }
  console.log(users);
  console.log(post);
  /* await getUsers()
    .then((data) => console.log("comments loaded", data))
    .catch((e) => console.log(e)); */

/*   await getPost(1)
    .then((data) => console.log("post loaded:", data))
    .catch((e) => console.log(e)); */
//})();
/* 
Promise.all([getUsers(), getPost(1)])
  .then(console.log)
  .catch(console.log);
 */
