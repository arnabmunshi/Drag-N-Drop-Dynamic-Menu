$(function() {
    $( "#sortable" ).sortable({
      handle: ".fa-bars",
      opacity: 0.5,
      revert: true,
      scroll: false,
      tolerance: "pointer",
      update: function(event, ui){
        var menuOrder = $(this).sortable('toArray').toString();
        // $("#save").text(menuOrder);
        $.ajax({
          url:  'updateOrder.php',
          type: 'POST',
          data: ({
            'sorted' : menuOrder
          }),
          //return the time
          success : function(data){
            $('.savedAlert .savedAlert-body span').text('This order has been saved.');
            saveAlert();
          },
          //if txt not send
          error : function(xhr, textStatus, errorThrown){
          }
        });
      }
    });
  });

$(document).ready(function(){
  $('body').on('click','.fa-pencil-square-o',function(e) {
    var getElemet = $(this).parent('li').parent('ul').children('li:nth-child(2)');
    $(getElemet).addClass('editable').attr('contenteditable','true').focus();
    $(this).attr('title', 'Save');
    $(this).addClass('fa-floppy-o').removeClass('fa-pencil-square-o');
  });
});

$(document).ready(function(){
  $('body').on('click','.fa-floppy-o',function(e) {
    var getElemet = $(this).parent('li').parent('ul').children('li:nth-child(2)');
    var getVal = $(getElemet).text();
    var getMenuID = $(this).parent('li').parent('ul').parent('li').attr('id');
    $(getElemet).removeAttr('contenteditable');

    var this_class = $(this);

    $.ajax({
      url: 'updateMenu.php',
      type: 'post',
      data: {
        'menu_name' : getVal,
        'menu_id' : getMenuID
      },
      success: function (data) {
          $('.savedAlert .savedAlert-body span').text('Menu name has been saved.');
          saveAlert();
          $(this_class).attr('title', 'Edit');
          $(this_class).addClass('fa-pencil-square-o').removeClass('fa-floppy-o');
          $(getElemet).removeClass('editable');
      },
      //if txt not send
      error : function(xhr, textStatus, errorThrown){
      }
    });

  });
});

$(document).ready(function(){
  $('body').on('click','.fa-trash-o',function(e) {
    var getMenuID = $(this).parent('li').parent('ul').parent('li').attr('id');
    var this_class = $(this);

    var sortID = '';
    $('.drag-it').each(function(){
      if($(this).attr('id') != getMenuID)
        sortID = sortID + $(this).attr('id') + ',';
    })

    $('.delAlert').attr({
      'menu-id' : getMenuID,
      'sort-id' : sortID
    });

    delAlert();

  });
});

$(document).ready(function(){
  $('body').on('click','.add-menu',function(e) {
    $.ajax({
      url:  'createMenu.php',
      type: 'GET',
      //return the time
      success : function(menu_id){
        var str = '<li class="drag-it" id='+menu_id+'>';
        str = str + '<ul class="menu">';
        str = str + '<li><i class="fa fa-bars" title="Drag and Move"></i></li>';
        str = str + '<li>Menu Name</li>';
        str = str + '<li><i class="fa fa-pencil-square-o" title="Edit"></i></li>';
        str = str + '<li><i class="fa fa-trash-o" title="Delete"></i></li>';
        str = str + '</ul></li>';
        $(str).insertBefore(".add-hear");
      },
      //if txt not send
      error : function(xhr, textStatus, errorThrown){
      }
    });
  });
});

function saveAlert() {
  $('.savedAlert, .whiteLayer').removeClass('animated fadeOut');

  var winWidth = window.innerWidth;
  var winHeight = window.innerHeight;

  var dialogboxheight = $('.savedAlert').css('height');
  // Slpite 500px to 500
  dialogboxheight = dialogboxheight.split('px');
  // Convert 500 string to 500 integer
  dialogboxheight = parseInt(dialogboxheight[0]);

  var CSSleft = (winWidth/2) - (500/2);
  var CSStop = (winHeight/2) - (dialogboxheight/2);

  $('.savedAlert').css({
    'left' : CSSleft,
    'top' : CSStop,
    'display' : 'block'
  });

  $('.whiteLayer').css({
    'display' : 'block'
  });

  setTimeout(function(){
    $('.savedAlert, .whiteLayer').addClass('animated fadeOut');

    /* --------------------------------------------------
    | This setTimeout function will start after 1 second because
    | the animated fadeOut class perform for 1 second.
    -------------------------------------------------- */
    setTimeout(function(){
      $('.savedAlert, .whiteLayer').css({
        'display' : 'none'
      });
    },1000);

  },3000);
}

function delAlert() {
  $('.delAlert, .whiteLayer').removeClass('animated fadeOut');

  var winWidth = window.innerWidth;
  var winHeight = window.innerHeight;

  var dialogboxheight = $('.delAlert').css('height');
  // Slpite 500px to 500
  dialogboxheight = dialogboxheight.split('px');
  // Convert 500 string to 500 integer
  dialogboxheight = parseInt(dialogboxheight[0]);

  var CSSleft = (winWidth/2) - (500/2);
  var CSStop = (winHeight/2) - (dialogboxheight/2);

  $('.delAlert').css({
    'left' : CSSleft,
    'top' : CSStop,
    'display' : 'block'
  });

  $('.whiteLayer').css({
    'display' : 'block'
  });

  var r = $(document).ready(function(){
    $('body').on('click','.del-btn',function(e) {
      $('.delAlert, .whiteLayer').css({
        'display' : 'none'
      });
      r = 1;
    });
  });
}

$(document).ready(function(){
  $('body').on('click','.cancel-btn',function(e) {
    $('.delAlert, .whiteLayer').css({
      'display' : 'none'
    }).removeAttr('menu-id').removeAttr('sort-id');
  });
});

$(document).ready(function(){
  $('body').on('click','.del-btn',function(e) {

    var getMenuID = $(this).closest('.delAlert').attr('menu-id');
    var sortID = $(this).closest('.delAlert').attr('sort-id');

    $.ajax({
      url: 'delMenu.php',
      type: 'post',
      data: {
        'menu_id' : getMenuID,
        'sortID' : sortID
      },
      success: function (data) {
        $('.drag-it#'+getMenuID).remove();
        $('.delAlert, .whiteLayer').css({
          'display' : 'none'
        }).removeAttr('menu-id').removeAttr('sort-id');
      },
      //if txt not send
      error : function(xhr, textStatus, errorThrown){
      }
    });

  });
});