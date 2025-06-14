document.addEventListener('DOMContentLoaded', function() {
  // Kiểm tra thiết bị, chỉ cho phép truy cập trên điện thoại
  var isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  if (!isMobile) {
    document.body.innerHTML = '<div style="display:flex;justify-content:center;align-items:center;height:100vh;width:100vw;background:#000;color:#fff;font-size:1.5rem;text-align:center;padding:32px;">Hãy sử dụng điện thoại di động để truy cập vào liên kết. Liên kết này không hỗ trợ trên laptop.</div>';
    return;
  }

  // Xử lý submit form
  const form = document.querySelector('.form');
  const luckywheel = document.getElementById('luckywheel');
  const wrapper = document.getElementById('wrapper');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      let valid = true;
      // Xóa trạng thái lỗi cũ
      form.querySelectorAll('input, select').forEach(el => {
        el.style.borderColor = '#ffffff';
        el.classList.remove('input-error');
      });
      // Validate từng trường
      const nameInput = form.querySelector('.input-name');
      const phoneInput = form.querySelector('.input-phone');
      const productInput = form.querySelector('.input-select');
      const quantityInput = form.querySelector('.input-quantity');
      if (!nameInput.value.trim()) {
        nameInput.style.borderColor = 'red';
        nameInput.classList.add('input-error');
        valid = false;
      }
      if (!phoneInput.value.trim()) {
        phoneInput.style.borderColor = 'red';
        phoneInput.classList.add('input-error');
        valid = false;
      }
      if (!productInput.value.trim()) {
        productInput.style.borderColor = 'red';
        productInput.classList.add('input-error');
        valid = false;
      }
      if (!quantityInput.value.trim()) {
        quantityInput.style.borderColor = 'red';
        quantityInput.classList.add('input-error');
        valid = false;
      }
      if (!valid) return;
      // Nếu hợp lệ, animate form rồi ẩn hoàn toàn, show vòng quay lên trên
      form.style.transition = 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s 0.7s';
      form.style.transform = 'translateY(-180px)';
      form.style.opacity = '0';
      setTimeout(function() {
        form.style.display = 'none';
        if (wrapper) {
          wrapper.style.zIndex = '10';
          wrapper.style.opacity = '1';
        }
      }, 1000); // chờ hiệu ứng xong mới ẩn
    });
  }

  // Các xử lý khác cho quy trình chạy của web có thể thêm vào đây
}); 