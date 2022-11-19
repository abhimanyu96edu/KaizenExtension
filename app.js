window.onclick = (e) => {
  var count = 0;
  var value;
  var imageSrc;
  var buttonTitle, popupButtonText;

  if (e.target.tagName === "BUTTON") {
    value = e.target.getAttribute("id").slice(4, 5);
    imageSrc = "card" + value + "-img";
    imageSrc = document.getElementById(imageSrc);
    imageSrc = imageSrc.getAttribute("src");
    titleSrc = "card" + value + "-text";
    titleSrc = document.getElementById(titleSrc);
    buttonTitle = titleSrc.innerText;
    popupButtonText = e.target.getAttribute("title");

    if (value === "1") {
      count++;
      sendUserData(buttonTitle, count, imageSrc, popupButtonText);
    } else if (value === "2") {
      count++;
      sendUserData(buttonTitle, count, imageSrc, popupButtonText);
    } else if (value === "3") {
      count++;
      sendUserData(buttonTitle, count, imageSrc, popupButtonText);
    } else if (value === "4") {
      count++;
      sendUserData(buttonTitle, count, imageSrc, popupButtonText);
    } else if (value === "5") {
      count++;
      sendUserData(buttonTitle, count, imageSrc, popupButtonText);
    } else if (value === "6") {
      count++;
      sendUserData(buttonTitle, count, imageSrc, popupButtonText);
    }
  }
};

const sendUserData = (title, count, image, popupButtonText) => {
  chrome.runtime.sendMessage(
    {
      command: "post",
      data: {
        title: title,
        count: count,
        imageSrc: image,
        popupButtonText: popupButtonText,
      },
    },
    (response) => {
      console.log(response.data);
    }
  );
};
