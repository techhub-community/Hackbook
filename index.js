var users = []
var i = 0

var getData = (function ($) {
  var URL = 'https://api.github.com/repos/techhub-community/Hackbook/contents/data'

  $.get(URL, function (data, status) {
    data.forEach(function (d) {
      if (d.name == null) {
        return true
      }
      
      if (users.indexOf(d.name) == -1) {
        $.get('https://api.github.com/users/'+d.name+'',function(data,status){
//           console.log(data)
//             if(data.name==null)
//             {
//                 return true;
//             }
            var userinfo=data;
            // console.log(userinfo)
            
            $.get('https://api.github.com/repos/techhub-community/Hackbook/contents/data/'+d.name+'/'+d.name+'.md',function(readmedata,status){
                if(readmedata.content==null)
                {
                    return true;
                }
                var inputdata=atob(readmedata.content);
                const obj = JSON.parse('{'+inputdata+'}');
                var template =
                "<div id='project-card'><div>" +
                    "<a target='_blank' href='" + userinfo.html_url + "'>" +
                        "<img src='" + userinfo.avatar_url + "' alt='' id='userimg'>" +
                    '</a>' +
                    "<div>" +
                        '<strong>' + obj["name"] + '</strong>' +
                        '<p>'+obj["quote"]+'<br>'+obj["tech_stack"]+'</p>'+
                        '<p>'+'</p>'+
                    '</div></div></div>'

                $('#contributors').append(template)
                users[i] = d.name                
                i = i + 1
            })
            
        })
      }
    })
  })
})($)
