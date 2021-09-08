document.addEventListener('DOMContentLoaded', function () {
    var modeSwitch = document.querySelector('.mode-switch');
  
    modeSwitch.addEventListener('click', function () { 
    document.documentElement.classList.toggle('dark');
      modeSwitch.classList.toggle('active');
    });
    
    var listView = document.querySelector('.list-view');
    var gridView = document.querySelector('.grid-view');
    var projectsList = document.querySelector('.project-boxes');
    
    listView.addEventListener('click', function () {
      gridView.classList.remove('active');
      listView.classList.add('active');
      projectsList.classList.remove('jsGridView');
      projectsList.classList.add('jsListView');
    });
    
    gridView.addEventListener('click', function () {
      gridView.classList.add('active');
      listView.classList.remove('active');
      projectsList.classList.remove('jsListView');
      projectsList.classList.add('jsGridView');
    });
    
    document.querySelector('.messages-btn').addEventListener('click', function () {
      document.querySelector('.messages-section').classList.add('show');
    });
    
    document.querySelector('.messages-close').addEventListener('click', function() {
      document.querySelector('.messages-section').classList.remove('show');
    });
  });
  ///modal
const button = document.querySelector(".btn-join");
const modal = document.querySelector(".overlay");
const close = document.querySelector(".btn-white");
button.addEventListener("click",function(){
  modal.style.display="block"
})
close.addEventListener("click",function(){
  modal.style.display="none"
})

document.body.addEventListener("click",function(e){
  if(e.target.classList[0]=="overlay") {
    modal.style.display="none" 
  }
})