function recordLoader() {
  $.ajax({
    type: "POST",
    url: "functions/news.php",
    data: {
      param: 1
    }
  }).done(function (rec) {
    $('#tblNews').html(rec)
  });
}

function cleaner() {
  $('#txtId').val('')
  $('#news_title').val('')
  $('#news_desc').val('')
}

function loadRecord(newsId) {
  Swal.fire({
  title: 'Are you sure?',
  width: 400,
  text: "This file will be edited permanently!",
  icon: 'question',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, edit it!'
}).then((result) => {
  if (result.isConfirmed) {
    $('#myModal').modal('show')
  }
  $.ajax({
    type: "POST",
    url: "functions/news.php",
    data: {
      paramEdit: 1,
      NewsID: newsId
    }
  }).done(function (rec) {
    var rowEdit = $.parseJSON(rec)
    $('#txtId').val(rowEdit['news_id'])
    $('#news_title').val(rowEdit['news_title'])
    $('#news_desc').val(rowEdit['news_desc'])
  });
})
}

function deleteRecord(newsId) {
  Swal.fire({
  title: 'Are you sure?',
  width: 400,
  text: "Your file will be permanently deleted!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
    $.ajax({
      type: "POST",
      url: "functions/news.php",
      data: {
        paramDelete: 1,
        NewsID: newsId
      }
    }).done(function () {
      Swal.fire({
        position: 'top-right',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        },
        icon: 'success',
        title: 'Success!',
        width: 400,
        text: 'Your file has been deleted!',
        showConfirmButton: false,
        timer: 1300
      })
      recordLoader()
    });
  }
})
}

$(document).ready(function () {
  recordLoader()

 $('#btnNews').click(function () { 
   cleaner()
   $('#myModal').modal('show')
 });

 $('#btnSave').click(function () {
   var id = $('#txtId').val()
   var newsTitle = $('#news_title').val()
   var newsDesc = $('#news_desc').val()
   var data = newsTitle + '^' + newsDesc + '^' + id

   if (newsTitle == '' || newsDesc == '') {
     Swal.fire({
       position: 'top-right',
        showClass: {
        popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        },
       icon: 'error',
       title: 'Error!',
       width: 400,
       text: 'Insufficient Data',
       showConfirmButton: false,
       timer: 1300
     })
   } else {
     $.ajax({
       type: "POST",
       url: "functions/news.php",
       data: {
         upsert: 1,
         Data: data
       }
     }).done(function () {
       $('#myModal').modal('toggle')
       if (id !== '') {
          Swal.fire({
            position: 'top-right',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            },
            icon: 'success',
            title: 'Success!',
            width: 400,
            text: 'Your work has been updated!',
            showConfirmButton: false,
            timer: 1300
          })
       } else {
         Swal.fire({
           position: 'top-right',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          },
           icon: 'success',
           title: 'Success!',
           width: 400,
           text: 'Your work has been saved!',
           showConfirmButton: false,
           timer: 1300
         })
       }
       recordLoader()
     });
   }
 })
});