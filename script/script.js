$(document).ready(function(){

// $('img').addClass('animated bounceIn')
// .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//   $(this).removeClass()
// })

$('button').on('click', function(e){
  $('img').removeClass()
  .addClass('animated bounceIn')
  .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  $('img').removeClass()
});
})


  // function testAnim(x) {
  //   $('#animationSandbox').removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  //     $(this).removeClass();
  //   });
  // };

  // $(document).ready(function(){
  //   $('.js--triggerAnimation').click(function(e){
  //     e.preventDefault();
  //     var anim = $('.js--animations').val();
  //     testAnim(anim);
  //   });

  //   $('.js--animations').change(function(){
  //     var anim = $(this).val();
  //     testAnim(anim);
  //   });
  // });




})
