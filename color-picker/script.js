const text = document.querySelector("#colorText");
const color = document.querySelector("#colorPicker");

// カラーピッカーを操作した時の一連の操作（colorBg関数）
const colorBg = () => {
  // 選択した色をbodyの背景色に設定
  document.body.style.backgroundColor = color.value;

  
  if (color.value === "#ffffff") {
    // 条件1：選んだ色が白なら、カラーコードをテキストとして表示して、(white)を追加
    text.textContent = `カラーコード：${color.value} (white)`;
  } else if (color.value === "#000000") {
    // 条件2：選んだ色が黒なら、カラーコードをテキストとして表示して、(black)を追加
    text.textContent = `カラーコード：${color.value} (black)`;
  } else {
    // その他：カラーコードをテキストとして表示
    text.textContent = `カラーコード：${color.value}`;
  }
};

// カラーピッカーが変更されたら、colorBg関数を発動
color.addEventListener("input", colorBg);