// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする

let b1=document.querySelector('#kaito');
b1.addEventListener('click', hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let yoso = document.querySelector('input[name="seisu"]');
  let seisu2 =yoso.value;
  let seisu3=Math.floor(seisu2);
  kaisu=kaisu+1;
  // 課題3-1: 正解判定する

let kk=document.querySelector('span#kaisu');
let aa=document.querySelector('span#answer');
let pi=document.querySelector('p#result');
kk.textContent=kaisu;
aa.textContent=seisu2;
if(kaisu<3){
  if(seisu3===kotae){
    if(kaisu>=2){
      pi.textContent="答えは "+kotae+" でした．すでにゲームは終わっています";
    }else{
    pi.textContent="正解です．おめでとう!";
    }
  }else if(seisu3<kotae){
      pi.textContent="まちがい．答えはもっと大きいですよ";
  }else{
      pi.textContent="まちがい．答えはもっと小さいですよ";
  }
}else if(kaisu===3){
  if(seisu3===kotae){
    pi.textContent="正解です．おめでとう!";
  }else if(seisu3<kotae){
    pi.textContent="まちがい．答えはもっと大きいですよ";
  }else if(seisu3>kotae){
    pi.textContent="まちがい．答えはもっと小さいですよ";
  }else{
    pi.textContent="答えは "+kotae+" でした．すでにゲームは終わっています";
  }
}

  // kotae と yoso が一致するかどうか調べて結果を出力

  // 課題3-1における出力先はコンソール
}