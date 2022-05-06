$(document).ready(function() {
    $('#article img').each(function() {
      if ($(this).parent().hasClass('fancybox')) return;
      if ($(this).hasClass('nofancybox')) return;
      var alt = this.alt;
      $(this).wrap(
          '<a href="' + ($(this).attr('data-src') == null ? this.src : 
          $(this).attr('data-src')) + '" title="' + alt + '" data-src="'+ this.src +'" class="fancybox" data-fancybox="fancybox-gallery-img"></a>');
    });
    $(this).find('.fancybox').each(function(){
      $(this).attr('rel', 'article');
    });
});