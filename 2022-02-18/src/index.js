import "./styles.css";

const onClickAdd = () => {
    // テキストボックスの値を取得し、初期化する
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    // liタグ生成
    const li = document.createElement("li");
    li.className = "list-row";

    // pタグ生成
    const p = document.createElement("p");
    li.innerText = inputText;

    // liタグの子要素に各要素を設定
    li.appendChild(p);

    // 未完了リストに追加
    document.getElementById("incomplete-list").appendChild(li);
};

document
    .getElementById("add-button")
    .addEventListener("click", () => onClickAdd());
