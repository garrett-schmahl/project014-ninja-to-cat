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

//better way to do it would be to give the img tag an alternate source and swap that in.