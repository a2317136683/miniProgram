// pages/list/list.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        colorList: [],
        isLoading: false
    },
    getColor() {
        // 请求开始开启loading
        wx.showLoading({
            title: '数据加载中',
        })
        wx.request({
            url: 'https://www.escook.cn/api/color',
            method: 'get',
            success: ({
                data: {
                    data
                }
            }) => {
                this.setData({
                    colorList: [...this.data.colorList, ...data]
                })
            },
            complete: () => {
                // 请求完成后关闭loading
                wx.hideLoading()
                this.setData({
                    isLoading: false
                })
            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getColor()
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {
        console.log(55555);
        wx.stopPullDownRefresh()
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
        if (!this.data.isLoading) {
            this.setData({
                isLoading: true
            })
            this.getColor()
        }
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})