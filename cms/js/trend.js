function RecordLoader(){
  $.ajax({
    type: "POST",
    url: "functions/trend.php",
    data: {
      param: 1
    }
  }).done(function (rec) {
    $('#tblTrend').html(rec)
  })
}

function loadRecord(trendId) {
  Swal.fire({
  title: "Are you sure?",
  width: 400,
  text: "This file will be edited permanently!",
  icon: "question",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, edit it!",
  }).then((result) => {
    if (result.isConfirmed) {
      $('#myModalUpd').modal('show');
    }
  })
  $.ajax({
    type: "POST",
    url: "functions/trend.php",
    data: {
      paramEdit: 1,
      TrendID: trendId
    }
  }).done(function (rec) {
    var rowEdit = $.parseJSON(rec)
    $('#txtId').val(rowEdit['trend_id'])
    $('#trendUpd').val(rowEdit['trend_title'])
  })
}

function deleteRecord(trendId) {
  Swal.fire({
  title: "Are you sure?",
  width: 400,
  text: "This file will be deleted permanently!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      $.ajax({
        type: "POST",
        url: "functions/trend.php",
        data: {
          paramDelete: 1,
          TrendID: trendId
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
          title: 'Deleted!',
          width: 400,
          text: 'Your file has been deleted!',
          showConfirmButton: false,
          timer: 1300
        })
        RecordLoader()
      });
    }
  })
}

function cleaner() {
  $('#trend').val('')
  $('#image').val('')
}

$(document).ready(function () {
  RecordLoader()

  $('#btnTrend').click(function () { 
    cleaner()
    $('#myModal').modal('show')  
  })

  $('#btnTrendUpd').click(function () {
    $('#myModalUpd').modal('show')  
  })

  $('#myForm').on('submit', function (e) {
    e.preventDefault();

    $.ajax({
      type: "POST",
      url: "functions/trend.php",
      data: new FormData(this),
      dataType: "json",
      contentType: false,
      processData: false,
      cache: false
    }) 
  });

   $('#btnSave').click(function () { 
      var trend = $('#trend').val()
      var image = $('#image').val()

      if (trend == '' || image == '') {
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
          $('#myModal').modal('toggle');
          setTimeout(function (){
            RecordLoader()
          }, 500)
      }
    })

    $('#image').change(function () {
      var image = this.files[0]
      var fileType = image.type
      var match = ['image/jpeg', 'image/jpg', 'image/png']

      if (!(fileType == match[0] || fileType == match[1] || fileType == match[2])) {
        Swal.fire({
          position: 'top-right',
          showClass: {
          popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          },
          icon: 'error',
          title: 'Oops...',
          width: 400,
          text: 'Only jpeg, jpg, and png are available file types to upload'
        })

        $('#image').val('')
        return false
      }
    })

    $('#btnUpdate').click(function () { 
      var id = $('#txtId').val()
      var trendUpd = $('#trendUpd').val()
      var data = trendUpd + '^' + id 

      $.ajax({
        type: "POST",
        url: "functions/trend.php",
        data: {
          Data: data,
          paramUpdate: 1
        }
      }).done(function () {
        $('#myModalUpd').modal('toggle');
        Swal.fire({
          position: 'top-right',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          },
          icon: 'success',
          width: 400,
          title: 'Success!',
          text: 'Your work has been updated!',
          showConfirmButton: false,
          timer: 1300
        })
        RecordLoader()
      });
    });
});
