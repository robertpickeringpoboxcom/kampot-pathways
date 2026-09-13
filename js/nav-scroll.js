(function(){
  var n=document.querySelector('.site-nav');
  if(!n)return;
  function f(){n.classList.toggle('scrolled',window.scrollY>80)}
  window.addEventListener('scroll',f,{passive:true});f();
})();
