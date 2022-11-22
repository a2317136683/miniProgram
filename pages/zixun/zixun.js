// pages/zixun/zixun.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        src: '',
        srcList: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    Getpic() {
        wx.showLoading({
            title: '图片加载中',
        })
        wx.request({
            url: 'https://iw233.cn/API/Random.php?type=json',
            success: ({
                data
            }) => {
                this.setData({
                    src: data.pic
                })
            },
            complete: () => {
                wx.hideLoading()
            }
        })
    },

    onLoad(options) {
        this.Getpic()
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
        this.Getpic()
        wx.stopPullDownRefresh()
    },
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})