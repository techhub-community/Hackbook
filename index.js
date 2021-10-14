// var users = [];
// var i = 0;

// var getData = (function ($) {
//   var URL =
//     "https://api.github.com/repos/techhub-community/Hackbook/contents/data";

//   $.get(URL, function (data, status) {
//     data.forEach(function (d) {
//       if (d.name == null) {
//         return true;
//       }

//       if (users.indexOf(d.name) == -1) {
//         $.get(
//           "https://api.github.com/users/" + d.name + "",
//           function (data, status) {
//             //           console.log(data)
//             if (data.name == null) {
//               return true;
//             }
//             var userinfo = data;
//             // console.log(userinfo)

//             $.get(
//               "https://api.github.com/repos/techhub-community/Hackbook/contents/data/" +
//                 d.name +
//                 "/" +
//                 d.name +
//                 ".md",
//               function (readmedata, status) {
//                 if (readmedata.content == null) {
//                   return true;
//                 }
//                 var inputdata = atob(readmedata.content);
//                 const obj = JSON.parse("{" + inputdata + "}");
//                 var template =
//                   "<div id='project-card'><div>" +
//                   "<a target='_blank' href='" +
//                   userinfo.html_url +
//                   "'>" +
//                   "<img src='" +
//                   userinfo.avatar_url +
//                   "' alt='' id='userimg'>" +
//                   "</a>" +
//                   "<div>" +
//                   "<strong>" +
//                   obj["name"] +
//                   "</strong>" +
//                   "<p>" +
//                   obj["quote"] +
//                   "<br>" +
//                   obj["tech_stack"] +
//                   "</p>" +
//                   "<p>" +
//                   "</p>" +
//                   "</div></div></div>";

//                 $("#contributors").append(template);
//                 users[i] = d.name;
//                 i = i + 1;
//               }
//             );
//           }
//         );
//       }
//     });
//   });
// })($);

const getContributors = async () => {
  try {
    const r = await fetch(
      "https://api.github.com/repos/techhub-community/Hackbook/contents/data"
    );
    return r.json();
  } catch (e) {
    return e.message;
  }
};

const container = document.querySelector("#contributors");

for (let i = 0; i < 16; i++) {
  container.innerHTML += `<div class="card-blank">
  <div class="card-blank-avatar"></div>
  <div class="card-blank-detail">
      <div class="card-blank-name"></div>
      <div class="card-blank-quote"></div>
      <div class="card-blank-stack"></div>
  </div>
</div>`;
}

setTimeout(() => {
  container.innerHTML = "";
  getContributors()
    .then((response) => {
      console.log(response);

      response.forEach(async (user) => {
        const { name } = user;

        const user_info = await axios.get(
          `https://api.github.com/users/${name}`
        );

        const { avatar_url } = user_info.data;
        const user_content = await axios.get(
          `https://api.github.com/repos/techhub-community/Hackbook/contents/data/${name}/${name}.md`
        );
        var inputdata = atob(user_content.data.content);

        const obj = JSON.parse("{" + inputdata + "}");

        console.log(obj);
        container.innerHTML += `<div class="contributor-card">
      <div class="card-avatar">
      <img src="${avatar_url}" alt="user-avatar"/></div>
      <a class="github-btn">View on Github</a>
      <div class="card-details">
      
          <h3 class="contributor_name">${obj.name}</h3>
          <p>${obj.quote}</p>
          <p>${obj.tech_stack}</p>
          
      </div>
  </div>`;
      });
    })
    .catch((e) => {
      console.log(e);
    });
}, 5000);

//https://api.github.com/repos/techhub-community/Hackbook/contents/data
