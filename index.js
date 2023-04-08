$(document).ready(function () {
  let inputs = $("input");
  let error = $(".error");
  let errorBlank = "Can't be blank";
  let carnotvaild = "Card Not Vaild";
  let cardsuccess = "";
  var button = $('button[type="submit"]');
  var progressimg = $('<img>').attr('src', './images/6.svg').attr('alt', 'In Progress');
    progressimg.css({
        'height':'24px',
        'width':'24px',
        'margin':'0 auto'
    });
  /* ------------------------- FORM SUBMIT VALIDATION ------------------------- */
  $("form").submit(function (e) {
    e.preventDefault();
    button.html(progressimg);
    let messagestart = setTimeout(()=>{
        lengtherr();
        $('#forminput').addClass('hideform');
        $("#messagedata").addClass('showmessage');
        $("#cardfront").css('top','33%');
        
    },1000);
  });
  $('#Reloadbtn').click(function() {
      window.location.reload();
      $("#cardfront").css('top','40%');
  });
  
  
  /* --------------- ON SUBMIT EMPTY ERORR AND OUTPUT VALIDATION -------------- */
  function lengtherr() {
    //var valid = true;
    //CardNo Vaildation
    if ($("#holderNo").val().length < 19 && $("#holderNo").val() !== "") {
      $(error[1]).text(carnotvaild);
      AddinputErr(error, inputs, 1);
      // valid = false;
    } else if ($("#holderNo").val() == "") {
      $(error[1]).text(errorBlank);
      AddinputErr(error, inputs, 1);
      // valid = false;
    } else {
      $(error[1]).text(cardsuccess);
      RemoveinputErr(error, inputs, 1);
      $("#frontCardNo").text($(inputs[1]).val());
    }
    //Name Validation
    if ($("#HolderName").val() == "") {
      $(error[0]).text(errorBlank);
      AddinputErr(error, inputs, 0);
      // valid = false;
    } else {
      $(error[0]).text(cardsuccess);
      RemoveinputErr(error, inputs, 0);
      $("#frontCardName").text($(inputs[0]).val());
    }
    //MM Vaildation
    if ($("#cardexMM").val().length < 2 && $("#holderNo").val() !== "") {
      $(error[2]).text(carnotvaild);
      AddinputErr(error, inputs, 2);
      // valid = false;
    } else if ($("#holderNo").val() == "") {
      $(error[2]).text(errorBlank);
      AddinputErr(error, inputs, 2);
      // valid = false;
    } else {
      $(error[2]).text(cardsuccess);
      RemoveinputErr(error, inputs, 2);
    }
    //YY Validation
    if ($("#cardexYY").val().length < 2 && $("#holderNo").val() !== "") {
      $(error[3]).text(carnotvaild);
      AddinputErr(error, inputs, 3);
      // valid = false;
    } else if ($("#holderNo").val() == "") {
      $(error[3]).text(errorBlank);
      AddinputErr(error, inputs, 3);
      // valid = false;
    } else {
      $(error[3]).text(cardsuccess);
      RemoveinputErr(error, inputs, 3);
      $("#MMYYExpiry").text($(inputs[2]).val() + "/" + $(inputs[3]).val());
    }
    //CVV Vaildation
    if ($("#cardCVV").val().length < 3 && $("#holderNo").val() !== "") {
      $(error[4]).text(carnotvaild);
      AddinputErr(error, inputs, 4);
      // valid = false;
    } else if ($("#holderNo").val() == "") {
      $(error[4]).text(errorBlank);
      AddinputErr(error, inputs, 4);
      // valid = false;
    } else {
      $(error[4]).text(cardsuccess);
      RemoveinputErr(error, inputs, 4);
      $("#backCardCVV").text($(inputs[4]).val());
    }
    
    //return valid;
  }
  /* ------------------- INPUT EMPTY VALIDATION ON FOUCS OUT ------------------ */
  for (let i = 0; i < inputs.length; i++) {
    $(inputs[i]).on("focusout", function () {
      errorval(error, inputs, i);
    });
  }
  /* ------------------------ INPUT ON TYPE VALIDATION ------------------------ */
  $("#holderNo").on("input", function (e) {
    $(this).val(
      $(this)
        .val()
        .replace(/[^0-9]/g, "")
    );
    let value = $(this).val().replace(/\s+/g, "");
    let holderno = "";
    for (i = 0; i < value.length; i++) {
      if (i % 4 == 0 && i > 0) {
        holderno += " ";
      }

      holderno += value[i];
      holderno = holderno.slice(0, 19);
    }
    $(this).val(holderno);
  });
  $("#HolderName").on("input", function (e) {
    let valofname = $(this)
      .val()
      .replace(/[^a-zA-Z\s]/g, "");
    $(this).val(valofname);
    e.preventDefault();
  });
  $("#cardexMM").on("input", function () {
    twodigifun($(this), 0, 2);
  });
  $("#cardexYY").on("input", function () {
    twodigifun($(this), 0, 2);
  });

  $("#cardCVV").on("input", function () {
    twodigifun($(this), 0, 3);
  });

  function twodigifun(e, sp, ep) {
    let value = e.val();
    value = value.slice(sp, ep);
    e.val(value);
  }
  /* ------------------------- INPUT EMPTY VALIDATION ------------------------- */
  function errorval(err, input, index) {
    if ($(input[index]).val() == "") {
      AddinputErr(err, input, index);
    } else {
      RemoveinputErr(err, input, index);
    }
  }

  function RemoveinputErr(e, inp, i) {
    $(e[i]).removeClass("show");
    $(inp[i]).removeClass("err");
  }
  function AddinputErr(e, inp, i) {
    $(e[i]).addClass("show");
    $(inp[i]).addClass("err");
  }
});
