(function () {
    var apiIcon = document.getElementById('api-icon');
    apiIcon.onclick = function () {
        hlayer.alert({
            text: '点击“确定”更换图标',
            icon: 1,
            confirmCb: function () {
                hlayer.alert({
                    text: '点击“确定”更换图标',
                    icon: 2,
                    confirmCb: function () {
                        hlayer.alert({
                            text: '点击“确定”更换图标',
                            icon: 3,
                            confirmCb: function () {
                                hlayer.alert({
                                    text: '点击“确定”更换图标',
                                    icon: 4,
                                    confirmCb: function () {
                                        hlayer.alert({
                                            text: '点击“确定”更换图标',
                                            icon: 5,
                                            confirmCb: function () {
                                                hlayer.alert({
                                                    text: '点击“确定”更换图标',
                                                    icon: 6,
                                                    confirmCb: function () {
                                                        hlayer.alert({
                                                            text: '点击“确定”更换图标',
                                                            icon: 7,
                                                            confirmCb: function () {
                                                                hlayer.alert({
                                                                    text: '点击“确定”更换图标',
                                                                    icon: 8,
                                                                    confirmCb: 'close'
                                                                })
                                                            }
                                                        })
                                                    }
                                                })
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
    var apiAnimate = document.getElementById('api-animate');
    apiAnimate.onclick = function () {
        hlayer.alert({
            animateType: 1,
            text: '我从下面来哦',
            confirmCb: function () {
                hlayer.alert({
                    animateType: 2,
                    text: '我从天上来的哦',
                    confirmCb: function () {
                        hlayer.alert({
                            animateType: 3,
                            text: '哦哦，我可以变大变小哦',
                            confirmCb: function () {
                                hlayer.alert({
                                    animateType: 4,
                                    text: '我翻个跟斗10万8千里',
                                    confirmCb: function () {
                                        hlayer.alert({
                                            animateType: 5,
                                            text: '我绕个弯过来',
                                            confirmCb: 'close'
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
    var apiPosition = document.getElementById('api-position');
    apiPosition.onclick = function () {
        hlayer.alert({
            position: 0,
            text: '猜猜我下次在哪里出现',
            confirmCb: function () {
                hlayer.alert({
                    position: 1,
                    text: '猜猜我下次在哪里出现',
                    confirmCb: function () {
                        hlayer.alert({
                            position: 2,
                            text: '猜猜我下次在哪里出现',
                            confirmCb: function () {
                                hlayer.alert({
                                    position: 3,
                                    text: '猜猜我下次在哪里出现',
                                    confirmCb: function () {
                                        hlayer.alert({
                                            position: 4,
                                            text: '猜猜我下次在哪里出现',
                                            confirmCb: function () {
                                                hlayer.alert({
                                                    position: 5,
                                                    text: '猜猜我下次在哪里出现',
                                                    confirmCb: function () {
                                                        hlayer.alert({
                                                            position: 6,
                                                            text: '猜猜我下次在哪里出现',
                                                            confirmCb: 'close'
                                                        })
                                                    }
                                                })
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
    var apiMsg = document.getElementById('api-msg');
    apiMsg.onclick = function () {
        hlayer.msg({
            text: '又是一个好苗子',
            icon: 4
        })
    }
    var apiAlertAsk = document.getElementById('api-alert-ask');
    apiAlertAsk.onclick = function () {
        hlayer.alert({
            icon: 3,
            text: '你觉得你帅吗',
            btn: ['帅', '很帅'],
            animateType: 9,
            btnCb: [function () {
                hlayer.msg({text: '我也这么觉得'})
            }, function () {
                hlayer.msg({text: '你真是倾国倾城呐！'})
            }]
        })
    }
    var apiAlertWarn = document.getElementById('api-alert-warn');
    apiAlertWarn.onclick = function () {
        hlayer.alert({
            text: '上课再玩手机，就送你去编程',
            icon: 7,
            confirmCb: 'close'
        })
    }
    var apiAlertLoad = document.getElementById('api-loading');
    apiAlertLoad.onclick = function () {
        hlayer.loading({
            time: 3000
        })
    }
    var apiAlertLoad2 = document.getElementById('api-loading2');
    apiAlertLoad2.onclick = function () {
        hlayer.loading({
            time: 2000,
            loadingType: 4,
            animateType: 3
        })
    }
    var apiIframe = document.getElementById('api-iframe');
    apiIframe.onclick = function () {
        var a = hlayer.iframe({
            title: '百度一下你就知道',
            url: 'file:///D:/digipower-h5/%E9%A1%B9%E7%9B%AE%E6%BA%90%E7%A0%81/%E6%97%A7%E7%B3%BB%E7%BB%9F%E6%8F%92%E4%BB%B6%E6%94%B9%E9%80%A0/Hlayer/index.html'
        })
        console.log(a)
    }
    var apiPhoto = document.getElementById('api-photo');
    apiPhoto.onclick = function () {
        hlayer.photo({
            animateType: 5,
            position: 0,
            shadow: false,
            photos: [{img: './assets/img/jay/1.jpg', text: '不能说的秘密'}, {img: './assets/img/jay/2.jpg', text: '你永远是我眼中的苹果'}, {
                img: './assets/img/jay/3.jpg',
                text: '最美的不是下雨天'
            }, {img: './assets/img/jay/4.jpg', text: '你不要在消失了'}, {img: './assets/img/jay/5.jpg', text: '遇见你已经是不可思议了'}]
        })
    };
    var apiPhotoRandom = document.getElementById('api-photo-random');
    apiPhotoRandom.onclick = function () {
        hlayer.photo({
            animateType: 'random',
            position: 'random',
            autoPlay: true,
            playTime: 5000,
            shadow: false,
            photos: [{img: './assets/img/moon/1.jpg', text: '秦时明月之百步飞剑'}, {img: './assets/img/moon/2.jpg', text: '秦时明月之夜尽天明'}, {
                img: './assets/img/moon/3.jpg',
                text: '秦时明月之诸子百家'
            }, {img: './assets/img/moon/4.jpg', text: '秦时明月之万里长城'}, {img: './assets/img/moon/5.jpg', text: '秦时明月之君临天下'}]
            
        })
    }
    var apiPromptText = document.getElementById('api-prompt-text');
    apiPromptText.onclick = function () {
        hlayer.prompt({
            formType: 1,
            text: '试着填入信息',
            icon: 1,
            confirmCb: function (value) {
                if (value) {
                    hlayer.msg({text: value})
                }
            }
        })
    }
    var apiPromptPassword = document.getElementById('api-prompt-password');
    apiPromptPassword.onclick = function () {
        hlayer.prompt({
            formType: 2,
            text: '请输入你的密码：',
            icon: 1,
            confirmCb: function (value) {
                if (value) {
                    hlayer.msg({text: '你的密码是：' + value})
                }
            }
        })
    }
    var apiPromptTextarea = document.getElementById('api-prompt-textarea');
    apiPromptTextarea.onclick = function () {
        hlayer.prompt({
            formType: 3,
            text: '写一首诗吧：',
            icon: 1,
            shadow: false,
            height: '200px',
            width: '350px',
            confirmCb: function (value) {
                if (value) {
                    hlayer.msg({text: '好诗，肯定是体育老师教的'})
                } else {
                    hlayer.msg({text: '语文和我一样！'})
                }
            }
        })
    }
    var apiTips = document.getElementById('api-tips');
    apiTips.onclick = function () {
        hlayer.tips({
            text: '你很棒棒哦',
            tipsCon: 'api-tips',
            time: 4000,
            contentBg: '#169FE6',
            contentColor: '#fff',
            tipsPosition: 'right',
            animateType: 5
        })
    }
    var apiIframeVedio = document.getElementById('api-prompt-vedio');
    apiIframeVedio.onclick = function () {
        hlayer.iframe({
            title: '送给宅男们的福利',
            url: 'http://player.youku.com/embed/XMTc2OTI3ODUyNA=='
        })
    }
    var apiPromptRadio = document.getElementById('api-prompt-radio');
    apiPromptRadio.onclick = function () {
        hlayer.prompt({
            formType: 4,
            height: '240px',
            text: '你的性别是：',
            options: {
                name: 'sex',
                inputs: ['男', '女', '保密']
            },
            position: 0,
            confirmCb: function (data) {
                hlayer.alert({
                    text: '你的性别是' + data.value,
                    confirmCb: 'close'
                })
            }
        })
    }
    var apiPromptCheckbox = document.getElementById('api-prompt-checkbox');
    apiPromptCheckbox.onclick = function () {
        hlayer.prompt({
            formType: 5,
            text: '你了解的学校有：',
            options: {
                name: 'school',
                inputs: ['中山大学', '大山中学', '南方某高校']
            },
            height: '240px',
            width: '300px',
            position: 0,
            confirmCb: function (data) {
                if (!data) {
                    return;
                }
                var text = '你选的是';
                if (data.length > 0) {
                    data.forEach(function (ele, i) {
                        text = text + ele.value;
                        if (i !== data.length - 1) {
                            text += '、';
                        }
                    })
                } else {
                    text = text + data.value;
                }
                hlayer.msg({
                    text: text
                })
            }
        })
    }
    var apiPromptQues = document.getElementById('api-prompt-ques');
    apiPromptQues.onclick = function () {
        hlayer.loading({
            loadingType: 1,
            loadingColor: '#d8527f',
            time: 500
        });
        setTimeout(ques, 500);
    }
    var apiRender = document.getElementById('api-render');
    apiRender.onclick = function () {
        hlayer.render({
            title: '自定义渲染内容窗体',
            content: $('<div><code>我是jquery渲染出来的</code></div>')
        });
    }
    var fastRender = document.getElementById('fast-render');
    fastRender.onclick = function () {
        hlayer.render({
            title: '自定义渲染内容窗体',
            content: '<p>我是HTML字符串</p>'
        });
    }
    function ques() {
        hlayer.prompt({
            title: '调查问卷示例',
            formType: 4,
            text: '你的性别：',
            options: {name: 'sex', inputs: ['汉纸', '妹纸']},
            height: '250px',
            width: '400px',
            allowEmpty: false,
            confirmCb: function (data) {
                if (data) {
                    hlayer.prompt({
                        title: '调查问卷示例',
                        formType: 5,
                        allowEmpty: false,
                        text: '你的兴趣是：',
                        options: {name: 'interesting', inputs: ['设计', '摄影', 'Coding', '打机', '我选择睡觉']},
                        height: '270px',
                        width: '400px',
                        confirmCb: function (data) {
                            if (data) {
                                hlayer.prompt({
                                    title: '调查问卷示例',
                                    formType: 4,
                                    allowEmpty: false,
                                    text: '你觉得HLayer.js如何：',
                                    options: {name: 'how', inputs: ['渣渣', '酷炫']},
                                    height: '250px',
                                    width: '400px',
                                    confirmCb: function (data) {
                                        if (data) {
                                            hlayer.prompt({
                                                title: '调查问卷示例',
                                                formType: 4,
                                                allowEmpty: false,
                                                text: '你觉得作者帅吗：',
                                                options: {name: 'author', inputs: ['帅', '很帅', '没见过，但肯定很帅']},
                                                height: '250px',
                                                width: '400px',
                                                confirmCb: function (data) {
                                                    if (data) {
                                                        hlayer.prompt({
                                                            title: '调查问卷示例',
                                                            formType: 3,
                                                            allowEmpty: true,
                                                            text: '你还有啥想说的吗：',
                                                            height: '250px',
                                                            width: '400px',
                                                            confirmCb: function (data) {
                                                                hlayer.msg({
                                                                    text: '感谢您的填写',
                                                                    icon: 1,
                                                                    time: 2000
                                                                })
                                                            }
                                                        })
                                                    }
                                                }
                                            })
                                        }
                                    }
                                })
                            }
                        }
                    })
                }
            }
        });
    }
    
    var apiAudio = document.getElementById('api-audio');
    apiAudio.onclick = function () {
        hlayer.music({
            title: '周杰伦—晴天',
            url: './assets/nice.mp3',
            width: 400,
            photos: './assets/img/music.jpg'
        })
    }
    var fastMsg = document.getElementById('fast-msg');
    fastMsg.onclick = function () {
        hlayer.msg();
    };
    var fastAlert = document.getElementById('fast-alert');
    fastAlert.onclick = function () {
        hlayer.alert();
    };
    var fastLoading = document.getElementById('fast-loading');
    fastLoading.onclick = function () {
        hlayer.loading();
    };
    var fastIframe = document.getElementById('fast-iframe');
    fastIframe.onclick = function () {
        hlayer.iframe();
    };
    var fastPrompt = document.getElementById('fast-prompt');
    fastPrompt.onclick = function () {
        hlayer.prompt();
    };
    var fastAlertTitle = document.getElementById('fast-alert-title');
    fastAlertTitle.onclick = function () {
        hlayer.alert({
            title: '我是配置信息'
        });
    };
    var fastTipsText = document.getElementById('fast-tips-text');
    fastTipsText.onclick = function () {
        hlayer.tips({
            text: '你真是太聪明了',
            tipsCon: 'fast-tips-text'
        });
    };
    var fastAlertIcon1 = document.getElementById('fast-alert-icon1');
    fastAlertIcon1.onclick = function () {
        hlayer.alert({
            text: '疯狂提示中',
            icon: 1
        });
    };
    var fastAlertIcon8 = document.getElementById('fast-alert-icon8');
    fastAlertIcon8.onclick = function () {
        hlayer.alert({
            text: '真是一个好听的名字',
            icon: 8
        });
    };
    
    var fastTipsAnimate3 = document.getElementById('fast-tips-animate3');
    fastTipsAnimate3.onclick = function () {
        hlayer.tips({
            tipsCon: 'fast-tips-animate3',
            animateType: 3,
            text: '小tips'
        });
    };
    var fastTipsAnimate5 = document.getElementById('fast-tips-animate5');
    fastTipsAnimate5.onclick = function () {
        hlayer.tips({
            tipsCon: 'fast-tips-animate5',
            animateType: 5,
            text: '我是萌萌哒'
        });
    };
    var fastPromtPosition0 = document.getElementById('fast-prompt-position0');
    fastPromtPosition0.onclick = function () {
        hlayer.prompt({
            position: 0
        });
    };
    var fastalertPosition6 = document.getElementById('fast-alert-position6');
    fastalertPosition6.onclick = function () {
        hlayer.alert({
            position: 6
        });
    };
    var fastAlertPositionRandom = document.getElementById('fast-alert-position-random');
    fastAlertPositionRandom.onclick = function () {
        hlayer.msg({
            text: '位置随机的提示框',
            position: 'random'
        });
    };
    var fastTipsTop = document.getElementById('fast-tips-top');
    fastTipsTop.onclick = function () {
        hlayer.tips({
            tipsCon: 'fast-tips-top',
            tipsPosition: 'top',
            text: '尼玛，竟然从上面出来'
        });
    };
    var fastMsgText = document.getElementById('fast-msg-text');
    fastMsgText.onclick = function () {
        hlayer.msg({
            text: '疯狂提示中'
        });
    };
    var fastAlertText = document.getElementById('fast-alert-text');
    fastAlertText.onclick = function () {
        hlayer.alert({
            text: '真是一个好听的名字'
        });
    };
    var fastPhotoTime2 = document.getElementById('fast-photo-time2');
    fastPhotoTime2.onclick = function () {
        hlayer.photo({
            photos: [{
                img: './assets/img/2.jpg',
                text: '不能说的秘密'
            }],
            time: 2000
        });
    };
    var fastMsgTime2 = document.getElementById('fast-msg-time2');
    fastMsgTime2.onclick = function () {
        hlayer.msg({
            text: '被你发现了',
            shadow: false
        });
    };
    var fastLoadingType2 = document.getElementById('fast-loading-type2');
    fastLoadingType2.onclick = function () {
        hlayer.loading({
            loadingType: 2
        });
    }
    var fastIframeGoogle = document.getElementById('fast-iframe-google');
    fastIframeGoogle.onclick = function () {
        hlayer.iframe({
            url: 'https://www.google.com',
            width: '1200px',
            height: '500px'
        });
    }
    var fastPromptArea = document.getElementById('fast-prompt-area');
    fastPromptArea.onclick = function () {
        hlayer.prompt({
            formType: 3,
            width: '500px',
            height: '350px'
        });
    }
})()