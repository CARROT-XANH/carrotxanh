	/*-------------------------------------------------------------------------------
	  Gửi đến trang tính biểu mẫu
	-------------------------------------------------------------------------------*/

<div>
  <script src="js/jquery.min.js"></script>
  <script>
    $(document).ready(function() {
      $('#contact-form').submit(function(e) {
        e.preventDefault();
        var $form = $(this);
        var url = 'https://docs.google.com/forms/d/e/1-8RbXAtbV8JShj51ewhfIvEIGbmjNRX_JUxEBm3lAw0/formResponse'; // Thay thế FORM_ID bằng ID của Trang tính Google

        $.ajax({
          url: url,
          method: 'POST',
          dataType: 'xml',
          data: $form.serialize(),
          success: function() {
            alert('Đã gửi tin nhắn thành công!');
            $form.trigger('reset');
          },
          error: function() {
            alert('Có lỗi xảy ra, vui lòng thử lại sau!');
          }
        });
      });
    });
  </script>
</div>
