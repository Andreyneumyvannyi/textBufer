let textBlock = document.querySelectorAll(".text");
let modal = document.querySelector(".modal");
let textLabel = document.querySelector(".label");
let btnClose = document.querySelector(".close");

textBlock.forEach((e) => {
  e.addEventListener("click", (elem) => {
    let elemTarget = elem.target;
    copyToClipboard(`#${elemTarget.id}`);

    if (modal.classList[1] === "modal_active") {
      textLabel.innerHTML =
        "Вы скопировали другой текст. Вставить скопированный текст с помощью CTRL+V";
    } else {
      modal.classList.toggle("modal_active");
    }
  });
});

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

btnClose.addEventListener("click", () => {
  modal.classList.toggle("modal_active");
  textLabel.innerHTML =
    "Вы скопировали текст. Вставить скопированный текст с помощью CTRL+V";
});
