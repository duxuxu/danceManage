
const app = getApp()

Page({
    data: {
        app_motto: '扫一扫',
        autoplay: true,
        interval: 3000,
        duration: 1200,
        circular:true//开启无缝衔接周之后不会出现最后一张倒回到第一张的情况
    },
    //事件处理函数
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    onLoad: function () {
        console.log("扫一扫")
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        } else if (this.data.canIUse) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            })
        }

        var that = this;
        var data = {
            "datas": [
                {
                    "id": 1,
                    "url": "/img/banners/01.png"
                },
                {
                    "id": 2,
                    "url": "/img/banners/02.png"
                },
                {
                    "id": 3,
                    "url": "/img/banners/03.png"
                },

            ]
        };
        that.setData({
            lunboData: data.datas
        })
    },
    getUserInfo: function (e) {
        console.log(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    }



})

