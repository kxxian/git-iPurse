function tableData() {
  $.ajax({
    type: "POST",
    url: "functions/aboutList.php",
    data: {
      param: 1
    }
  }).done(function (rec) {
    $('#tblAboutList').html(rec)
  });
}

function loadRecord(aboutListId) {
  Swal.fire({
  title: 'Are you sure?',
  width: 400,
  text: "Your file will be permanently edited!",
  icon: 'question',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, edit it!'
}).then((result) => {
  if (result.isConfirmed) {
    $('#myModal').modal('show')
  }
})
$.ajax({
  type: "POST",
  url: "functions/aboutList.php",
  data: {
    paramEdit: 1,
    AboutListID: aboutListId
  }
}).done(function (rec) {
  var rowEdit = $.parseJSON(rec)
  $('#txtId').val(rowEdit['aboutList_id'])
  $('#aboutList_num').val(rowEdit['aboutList_num'])
  $('#aboutList_desc').val(rowEdit['aboutList_desc'])
});
}

function deleteRecord(aboutListId) {
  Swal.fire({
  title: 'Are you sure?',
  width: 400,
  text: "Your file will be permanetly deleted!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
   $.ajax({
     type: "POST",
     url: "functions/aboutList.php",
     data: {
       paramDelete: 1,
       AboutListID: aboutListId
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
     tableData()
   });
  }
})
}

function cleaner() {
  $('#txtId').val('')
  $('#aboutList_num').val('')
  $('#aboutList_desc').val('')
}

$(document).ready(function () {
  tableData()

  $('#btnAboutList').click(function () {
    cleaner()
    $('#myModal').modal('show')
  })

  $('#btnSave').click(function () {
    var id = $('#txtId').val()
    var aboutListNum = $('#aboutList_num').val()
    var aboutListDesc = $('#aboutList_desc').val()
    var data = aboutListNum + '^' + aboutListDesc + '^' + id

    if (aboutListNum == '' || aboutListDesc == '') {
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
        url: "functions/aboutList.php",
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
        tableData()
      });
    }
  })
});