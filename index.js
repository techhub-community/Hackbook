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
            if(data.name==null)
            {
                return true;
            }
            var userinfo=data;
            // console.log(userinfo)
            
            $.get('https://api.github.com/repos/techhub-community/Hackbook/contents/data/'+d.name+'/'+d.name+'.md',function(readmedata,status){
                if(readmedata.content==null)
                {
                    return true;
                }
                var qoute=atob(readmedata.content);
                var template =
                "<div class='col-md-3 col-xs-6 col-lg-3' id='author'><div class='container-fluid'>" +
                    "<a class='thumbnail' target='_blank' href='" + userinfo.html_url + "'>" +
                        "<img src='" + userinfo.avatar_url + "' alt='' class='img-responsive'>" +
                    '</a>' +
                    "<div class='caption'>" +
                        '<strong>' + userinfo.login + '</strong>' +
                        '<p>'+qoute+'</p>'+
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