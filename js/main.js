// window.onload = function() {
//     // var feed = new Instafeed({
//     //     get: 'user',
//     //     userId:  4978928504,
//     //     target: 'instagram',
// 		//     resolution: 'standard_resolution',
//     //     // tagName: 'awesome',
//     //     clientId: 'bb584ea742d746b4a5920008181d7292'
//     // });
//     // feed.run();
//     console.log("JS Loaded");
//     var feed = new Instafeed({
//         get: 'tagged',
//         tagName: 'awesome',
//         accessToken: '94764.1677ed0.c6256a27eddf41709ddf29af3469a4e5',
//         clientId: 'bb584ea742d746b4a5920008181d7292'
//     });
//     console.log(feed);
//     feed.run();
// }

window.onload = function() {
  console.log("JS loaded");

  $('a').click(function (event) {
    var id = $(this).attr("id");
    // alert(id);
    // $("main").hide();
    var section = "#"+id+"-section";
    console.log(section);
    // $(section).show();
    $(section).siblings().hide();
    $(section).fadeIn('slow');
  });

}
