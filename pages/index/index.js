// index.js
// 获取应用实例
const app = getApp()

Page({
    data: {
        shuju: [{
                id: 1,
                name: '会员卡',
                url: '/icons/huiyuanka.png'
            },
            {
                id: 2,
                name: '定位',
                url: '/icons/dingwei.png'
            },
            {
                id: 3,
                name: '评论',
                url: '/icons/pinglun.png'
            },
            {
                id: 4,
                name: '图片',
                url: '/icons/tupian.png'
            },
            {
                id: 5,
                name: '用户',
                url: '/icons/yonghu.png'
            },
            {
                id: 6,
                name: '游戏',
                url: '/icons/youxi.png'
            },
            {
                id: 7,
                name: '喜欢',
                url: '/icons/zanping.png'
            },
            {
                id: 8,
                name: '资讯',
                url: '/icons/zixun.png'
            },
            {
                id: 9,
                name: '播放',
                url: '/icons/bofang.png'
            }
        ]
    },
    // 事件处理函数
    go(e) {
        const index = e.currentTarget?.dataset?.id
        switch (index) {
            case 1: {
                wx.navigateTo({
                    url: '/pages/list/list',
                })
                break;
            }
            case 2: {
                wx.navigateTo({
                    url: '/pages/dingwei/dingwei',
                })
                break
            }
            case 3: {
                wx.navigateTo({
                    url: '/pages/comment/comment',
                })
                break
            }
            case 4: {
                wx.switchTab({
                    url: '/pages/tabBar/setu/setu',
                })
                break
            }
            case 5: {
                wx.navigateTo({
                    url: '/pages/user/user',
                })
                break
            }
            case 6: {
                wx.navigateTo({
                    url: '/pages/game/game',
                })
                break
            }
            case 7: {
                wx.navigateTo({
                    url: '/pages/like/like',
                })
                break
            }
            case 8: {
                wx.navigateTo({
                    url: '/pages/zixun/zixun',
                })
                break
            }
            case 9: {
                wx.switchTab({
                    url: '/pages/tabBar/video/video',
                })
                break
            }
        }
    },
    onLoad() {
        if (wx.getUserProfile) {
            this.setData({
                canIUseGetUserProfile: true
            })
        }
    },
    getUserProfile(e) {
        // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
        wx.getUserProfile({
            desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
            success: (res) => {
                console.log(res)
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        })
    },
    getUserInfo(e) {
        // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
        console.log(e)
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    }
})