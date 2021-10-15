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

    if (r.status === 200) {
      return r.json();
    } else {
      return r.json();
    }
  } catch (e) {
    return e.message;
  }
};

const container = document.querySelector("#contributors");

for (let i = 0; i < 16; i++) {
  container.innerHTML += `<div class="card-blank">
  <div class="card-blank-avatar"></div>
  <div class="card-blank-github-btn"><div class="github-icon"></div></div>
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
      if (response.message) {
        return (container.innerHTML = `<div class="error-message"> <img src="./assests/server_down.svg" alt="down" /><h3>${response.message}</h3></dv>`);
      }

      response.sort().forEach(async (user) => {
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

        container.innerHTML += `<div class="contributor-card">
      <div class="card-avatar">
      <img src="${avatar_url}" alt="user-avatar"/></div>
      <a class="github-btn" href="https://github.com/${name}"><i class="fab fa-github"></i></a>
      <div class="card-details">
      
          <h3 class="contributor_name">${obj.name}</h3>
          <p>${obj.quote}</p>
          <p>${obj.tech_stack}</p>
          
      </div>
  </div>`;
      });
    })
    .catch((e) => {
      console.log("error", e);
    });
}, 5000);

//https://api.github.com/repos/techhub-community/Hackbook/contents/data

// hamburger

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".mobile-nav");
document.body.addEventListener("click", (e) => {
  const target = e.target;

  const target_class = target.classList;
  if (target_class.contains("hamburger") || target_class.contains("fa-bars")) {
    nav.classList.toggle("mobile-nav-enable");
  } else {
    nav.classList.remove("mobile-nav-enable");
  }
});

// add a shadow class to navbar on scroll

document.addEventListener("scroll", (e) => {
  const scrollvalue = document.documentElement.scrollTop;

  if (scrollvalue > 35) {
    document.querySelector(".header").classList.add("header-shadow");
  } else {
    document.querySelector(".header").classList.remove("header-shadow");
  }
});

document.addEventListener("scroll", (e) => {
  const scrollvalue = document.documentElement.scrollTop;

  if (scrollvalue > 250) {
    document.querySelector(".goto").classList.add("goto-enable");
  } else {
    document.querySelector(".goto").classList.remove("goto-enable");
  }
});

// get discord data

const getDiscord = async () => {
  try {
    const r = await axios.get(
      "https://discordapp.com/api/guilds/814219041614594078/widget.json"
    );
    return r.data;
  } catch (e) {
    return e.message;
  }
};

getDiscord()
  .then((discord_data) => {
    const { members, instant_invite } = discord_data;
    document.querySelector(".discord_btn").setAttribute("href", instant_invite);

    console.log(members);
    const online_members = members.filter(
      (member) => member.status === "online" || member.status === "idle"
    );

    const humans = online_members
      .filter((online_member) => {
        return (
          online_member.username !== "community-manager" &&
          online_member.username !== "poll-helper" &&
          online_member.username !== "IndianMemer" &&
          online_member.username !== "Dank Memer" &&
          online_member.username !== "MEE6" &&
          online_member.username !== "Hydra"
        );
      })
      .sort();

    console.log("Humans ", humans);
    humans.slice(0, 3).forEach((user) => {
      document.querySelector(
        ".online-avatars"
      ).innerHTML += `<div class="online-avatar">
    <img src="${user.avatar_url}" alt="user-avatar" />
    </div>`;
    });
    document.querySelector(
      ".online-avatars"
    ).innerHTML += `<div class="online-avatar">
    +${humans.length - 3}
    </div>`;

    document.querySelector(".discord-count").textContent = humans.length;
  })
  .catch((e) => {
    console.log(e);
  });
