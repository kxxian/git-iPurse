function tableData() {
  $.ajax({
    type: "POST",
    url: "functions/members.php",
    data: {
      param: 1
    }
  }).done(function (rec) {
    $('#tblMembers').html(rec)
  });
}

  $(document).ready(function () {
    tableData()

    $('#btnMembers').click(function () {
      $('#myModal').modal('show')
    })
  });