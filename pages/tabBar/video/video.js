// pages/video/video.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        src: ['https://image-1306809819.cos.ap-nanjing.myqcloud.com/video/op1.mp4', 'https://image-1306809819.cos.ap-nanjing.myqcloud.com/video/op.mp4'],
        cur: 'https://image-1306809819.cos.ap-nanjing.myqcloud.com/video/op1.mp4'
    },

    toggle() {
        const a = this.data.src.filter(item => {
            return item !== this.data.cur
        })
        this.setData({
            cur: a[0]
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

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