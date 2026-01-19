import Swal from "sweetalert2";

export const sweetToast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2500,
  timerProgressBar: true,
  iconColor: "white",
  customClass: {
    popup: "colored-toast",
  },
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});



export const showToast = (icon, title) => {
  Swal.fire({
    toast: true,
    position: "center",
    icon,
    title,
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  });
};