// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする

hantei();

let kk=document.querySelector('span#kaisu');
let aa=document.querySelector('span#answer');
let pi=document.querySelector('p#result');
kk.textContent=kaisu;

if(kaisu>1&&answer===kotae){
  pi.textContent="答えは "+kotae+" でした．すでにゲームは終わっています";
}else if(kaisu>3){
  pi.textContent="答えは "+kotae+" でした．すでにゲームは終わっています";
}else if(answer===kotae){
    pi.textContent="正解です．おめでとう!";
}else if(answer<kotae){
    pi.textContent="まちがい．答えはもっと大きいですよ";
}else{
    pi.textContent="まちがい．答えはもっと小さいですよ";
}
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let yoso = 4;
  kaisu=kaisu+1;
  // 課題3-1: 正解判定する
  
  if(kaisu>1&&yoso===kotae){
    console.log("答えは "+kotae+" でした．すでにゲームは終わっています");
  }else if(kaisu>3){
    console.log("答えは "+kotae+" でした．すでにゲームは終わっています");
  }else if(yoso===kotae){
        console.log("正解です．おめでとう!");
  }else if(yoso<kotae){
        console.log("まちがい．答えはもっと大きいですよ");
  }else{
        console.log("まちがい．答えはもっと小さいですよ");
  }
  
  // kotae と yoso が一致するかどうか調べて結果を出力

  // 課題3-1における出力先はコンソール
}