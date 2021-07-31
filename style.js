const swalNext = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger",
  },
  buttonsStyling: false,
});
let option1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve({

      '#1': `<img src="./img/q51.jpg" style="height=100px;width:100px"></img>`,
      '#2': `<img src="./img/q52.jpg" style="height=100px;width:100px"></img>`,
      '#3': `<img src="./img/q53.jpg" style="height=100px;width:100px"></img>`,
      '#4': `<img src="./img/q54.jpg" style="height=100px;width:100px"></img>`
    })
  }, 1000)
});
let option2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve({

      '#1': `<img src="./img/q61.jpg" style="height=100px;width:100px"></img>`,
      '#2': `<img src="./img/q62.jpg" style="height=100px;width:100px"></img>`,
      '#3': `<img src="./img/q63.jpg" style="height=100px;width:100px"></img>`,
      '#4': `<img src="./img/q64.jpg" style="height=100px;width:100px"></img>`
    })
  }, 1000)
});
let option3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      '#1': '麻煩了!',
      '#2': '完蛋了!',
      '#3': '死定了!',
      '#4': '出事了!'
    })
  }, 1000)
});
let option4 = new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      '#1': '阿杰',
      '#2': '阿瑋',
      '#3': '阿嬤',
      '#4': '彬彬'
    })
  }, 1000)
});


document.getElementById("btn").addEventListener('click', gameSet);

function gameSet() {
  Swal.fire({
    title: '歡迎挑戰2021台灣迷因',
    confirmButtonText: '出發!',
    cancelButtonText: '唉額我才不要',
    showCancelButton: true,
    allowOutsideClick: false
  }).then(function (result) {
    if (result.dismiss === 'cancel') {
      Swal.fire({
        title: `那就多回去看一點迷因再來挑戰吧`,
        allowOutsideClick: false,
        imageUrl: './img/f1.jpg',
        imageHeight: 300
      });
    }
    else {
      Swal.fire({
        title: `這麼有信心！準備好迎接你的挑戰吧`,
        confirmButtonText: '出發!',
        allowOutsideClick: false,
        imageUrl: './img/t1.jpg',
        imageHeight: 300
      }).then(gamestart);
    }
  });
}
gameSet();
function gamestart() {
  let mission;
  Swal.fire({
    title: `第一題，知名實況主面臨_ _危機，被迫兼差_ _ _辛酸畫面流出`,
    imageUrl: './img/q1.jpg',
    confirmButtonText: '財務/打零工',
    cancelButtonText: '統神/端火鍋',
    showCancelButton: true,
    allowOutsideClick: false,
    imageHeight: 300,
    confirmButtonColor: '#9e9e9e',
    cancelButtonColor: '#9e9e9e'
  }).then((result) => {
    if (result.dismiss === 'cancel') {
      Swal.fire({
        title: "GAME OVER",
        text: `題目沒看清楚吼，是不是看到答案異常興奮?`,
        confirmButtonText: "重新來過",
        allowOutsideClick: false,
        imageUrl: "./img/q1f.jpg",
        imageHeight: 300
      });
    }
    else {
      Swal.fire({ //G
        title: "過關",
        text: "站起來又是一條好漢啊!",
        allowOutsideClick: false,
        imageUrl: './img/q1t.jpg',
        imageHeight: 300
      }).then(() => {
        Swal.fire({
          title: `第二題，十次車禍九次快，一次_ _ _。`,
          imageUrl: './img/q2.jpg',
          confirmButtonText: '喝酒醉',
          cancelButtonText: '英文報告',
          showCancelButton: true,
          allowOutsideClick: false,
          imageHeight: 300,
          confirmButtonColor: '#9e9e9e',
          cancelButtonColor: '#9e9e9e'
        }).then((result) => {
          if (result.dismiss !== 'cancel') {
            Swal.fire({
              title: "GAME OVER",
              text: `看到這張圖片，如果是迷因答案肯定不是這個啦`,
              confirmButtonText: "重新來過",
              allowOutsideClick: false,
              imageUrl: "./img/q2f.jpg",
              imageHeight: 300
            });
          } else {
            Swal.fire({
              title: "過關",
              text: "用生命在拍英文報告真的不簡單",
              allowOutsideClick: false,
              imageUrl: './img/q2t.jpg',
              imageHeight: 300
            }).then(() => {
              Swal.fire({
                title: `第三題，新聞龍捲風中，江博士為我們帶來了_ _ _舞蹈`,
                imageUrl: './img/q3.jpg',
                confirmButtonText: '上帝粒子',
                cancelButtonText: '國民健康',
                showCancelButton: true,
                allowOutsideClick: false,
                imageHeight: 300,
                confirmButtonColor: '#9e9e9e',
                cancelButtonColor: '#9e9e9e'
              }).then((result) => {
                if (result.dismiss === 'cancel') {
                  Swal.fire({
                    title: "GAME OVER",
                    text: `我國博士的程度習得的知識居然不清楚，該去看看影片了吧?`,
                    confirmButtonText: "重新來過",
                    allowOutsideClick: false,
                    imageUrl: "./img/q3f.jpg",
                    imageHeight: 300
                  });
                } else {
                  Swal.fire({
                    title: "過關",
                    text: "這個舞蹈我也是第一次見識到...",
                    allowOutsideClick: false,
                    imageUrl: './img/q3t.jpg',
                    imageHeight: 300
                  }).then(() => {
                    Swal.fire({
                      title: '接下來我們來點更難的',
                      text: '看看你有沒有過人才智的迷因知識',
                      imageUrl: './img/q4.jpg',
                      imageHeight: 300,
                      confirmButtonText: "放馬過來！",
                    }).then((result) => {
                      Swal.fire({
                        title: " 👉 *",
                        imageUrl: "./img/q5.jpg",
                        input: "radio",
                        inputOptions: option1,
                        confirmButtonText: "答題->",
                        inputValidator: (value) => {
                          if (!value) {
                            return "你還沒選喔";
                          } else {
                            let ans1 = value;
                            if (ans1 !== "#4") {
                              Swal.fire({
                                imageUrl: "./img/q5f.jpg",
                                title: `這個是基本常識阿，你可能得回去多看看迷因了`,
                                confirmButtonText: "回家修練->",
                              });
                            } else {
                              Swal.fire({
                                imageUrl: "./img/q5t.jpg",
                                title: `會不會對你來說太簡單了?`,
                                confirmButtonText: "下一關->",
                              }).then(() => {
                                Swal.fire({
                                  title: " 奇怪的知識增加了",
                                  input: "radio",
                                  inputOptions: option2,
                                  confirmButtonText: "答題->",
                                  inputValidator: (value) => {
                                    if (!value) {
                                      return "你還沒選喔";
                                    } else {
                                      let ans2 = value;
                                      if (ans2 !== "#4") {
                                        Swal.fire({
                                          imageUrl: "./img/q5f.jpg",
                                          title: `你是增加了奇怪的姿勢了吧?`,
                                          confirmButtonText: "回家修練->",
                                        });
                                      } else {
                                        Swal.fire({
                                          imageUrl: "./img/q6t.gif",
                                          title: `會不會對你來說太簡單了?`,
                                          confirmButtonText: "下一關->",
                                        }).then(() => {
                                          Swal.fire({
                                            imageUrl: "./img/q7.jpg",
                                            title: `＿ ＿ ＿阿北 (╬ﾟдﾟ)`,
                                            input: "radio",
                                            inputOptions: option3,
                                            confirmButtonText: "答題->",
                                            inputValidator: (value) => {
                                              if (!value) {
                                                return "你還沒選喔";
                                              } else {
                                                let ans3 = value;
                                                if (ans3 !== "#4") {
                                                  Swal.fire({
                                                    imageUrl: "./img/q7f.jpg",
                                                    title: `看來你的阿伯沒問題`,
                                                    confirmButtonText: "回家修練->",
                                                  });
                                                } else {
                                                  Swal.fire({
                                                    imageUrl: "./img/q7t.jpg",
                                                    title: `成功嶺最速傳說`,
                                                    confirmButtonText: "下一關->",
                                                  }).then(() => {
                                                    Swal.fire({
                                                      imageUrl: "./img/q8.jpg",
                                                      title: `請問圖中的紅衣男子叫什麼`,
                                                      input: "radio",
                                                      inputOptions: option4,
                                                      confirmButtonText: "答題->",
                                                      inputValidator: (value) => {
                                                        if (!value) {
                                                          return "你還沒選喔";
                                                        } else {
                                                          let ans4 = value;
                                                          if (ans4 !== "#2") {
                                                            Swal.fire({
                                                              imageUrl: "./img/q8f.jpg",
                                                              title: `看來你也逃不了杰哥(鐵牛)的魔爪了`,
                                                              confirmButtonText: "回家修練->",
                                                            });
                                                          } else {
                                                            Swal.fire({
                                                              imageUrl: "./img/q8t.jpg",
                                                              title: `勇敢站出來抵抗惡勢力`,
                                                              confirmButtonText: "闖關結束",
                                                            }).then(() => {
                                                              Swal.fire({
                                                                imageUrl: "./img/q9.jpg",
                                                                title: `恭喜你挑戰闖關八關成功`,
                                                                title: `看來你離2021的年輕人又近了一點`,
                                                                confirmButtonText: "不要瞎掰好嗎?",
                                                              }).then(()=>{
                                                                finish(1);
                                                              })
                                                            })
                                                          }
                                                        }
                                                      }
                                                    })
                                                  })
                                                }
                                              }
                                            }
                                          })
                                        })
                                      }
                                    }
                                  }
                                })
                              });
                            }
                          }
                        }
                      })
                    })
                  })
                }
              })
            })
          }
        })
      })
    }
  })
}

function finish(e) {
  if (e) {
    document.body.style.backgroundImage = "url('./img/q0.jpg')";
    document.getElementById("btn").removeEventListener("click", gameSet);
    document.getElementById("btn").value = "恭喜過關";
  }
}