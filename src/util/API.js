import axios from "axios";

// Export an object containing methods we'll use for accessing the random user API
const ret = {
  fetchUsers: function () {
    return axios
      .get(
        "https://randomuser.me/api/?results=20&inc=gender,name,dob,picture,email,id&nat=US,GB"
      )
      .then((res) => {
        let users = res.data.results; // name.first, name.last, gender, email, dob.age, picture.thumbnail
        let id = 1;
        users = users.map((user) => {
          return {
            first: user.name.first,
            last: user.name.last,
            gender: user.gender,
            email: user.email,
            age: user.dob.age,
            picture: user.picture.thumbnail,
            id: id++,
          };
        });
        //console.log(users);
        return users;
      });
  },
};
export default ret;
