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
            alert('Saved');
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
          alert('Saved');
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

    $.ajax({
      url: 'delMenu.php',
      type: 'post',
      data: {
        'menu_id' : getMenuID,
        'sortID' : sortID
      },
      success: function (data) {
        $(this_class).parent('li').parent('ul').parent('li').remove();
        alert('Deleted');
      },
      //if txt not send
      error : function(xhr, textStatus, errorThrown){
      }
    });

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