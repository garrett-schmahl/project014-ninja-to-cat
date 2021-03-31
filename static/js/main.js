$("document").ready(function(){
  $("img").click(function(){
    var imageFilePath = $(this).attr("src")
    if(imageFilePath.includes("ninja")){
      imageFilePath = imageFilePath.replace("ninja", "cat")
    }
    else{
      imageFilePath = imageFilePath.replace("cat", "ninja")
    }
    $(this).attr("src", imageFilePath)
  })
})