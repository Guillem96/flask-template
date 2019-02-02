function post(path, body) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: path,
      type: "POST",
      data: JSON.stringify(body),
      contentType: "application/json",
      dataType: "json",
      success: data => resolve(data),
      error: console.err
    })
  });
}

function uploadText(text) {
  post("/text-upload", { msg: text }).then(handleTextUploadResponse);
}

function handleTextUploadResponse(data) {
  $("#text-res").html(data.message);
}