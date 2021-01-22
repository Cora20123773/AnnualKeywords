"use strict";

function _defineProperty(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e
}

function runAsync(r) {
	return new Promise(function(e, t) {
		var n = setTimeout(function() {
			e(), clearTimeout(n)
		}, r)
	})
}
Component({
	externalClasses: ["sol-class"],
	properties: {
		result: {
			type: Array,
			value: []
		}
	},
	data: {
		credits: 50,
		curBet: 1,
		stripHeight: 720,
		alignmentOffset: 100,
		reelSpeed1Delta: 100,
		positioningTime: 200,
		bounceHeight: 200,
		firstReelStopTime: 667,
		secondReelStopTime: 575,
		thirdReelStopTime: 568,
		payoutStopTime: 1500,
		numIconsPerReel: 6,
		timer: [],
		reels: [{
			top: -1345,
			animation: "",
			css: ""
		}, {
			top: -977,
			animation: "",
			css: ""
		}, {
			top: -1101,
			animation: "",
			css: ""
		}]
	},
	methods: {
		start: function() {
			var e = this,
				t = this.data,
				n = t.firstReelStopTime,
				r = t.secondReelStopTime,
				i = t.thirdReelStopTime,
				s = t.result,
				a = t.payoutStopTime;
			this.start_reel_spin(0), this.start_reel_spin(1), this.start_reel_spin(2), runAsync(n).then(function() {
				return e.stop_reel_spin(0, s[0]), runAsync(r)
			}).then(function() {
				return e.stop_reel_spin(1, s[1]), runAsync(i)
			}).then(function() {
				return e.stop_reel_spin(2, s[2]), runAsync(a)
			}).then(function() {
				e.reset_reel_spin(0), e.reset_reel_spin(1), e.reset_reel_spin(2), e.triggerEvent("finish")
			})
		},
		start_reel_spin: function(e) {
			var t = this,
				n = this.data,
				r = n.stripHeight,
				i = n.reelSpeed1Delta,
				s = parseInt(-Math.random() * r * 2);
			this.setData(_defineProperty({}, "reels[".concat(e, "].top"), s)), this.data.timer[e] = setInterval(function() {
				t.setData(_defineProperty({}, "reels[".concat(e, "].top"), t.data.reels[e].top + i)), 0 < t.data.reels[e].top &&
					t.setData(_defineProperty({}, "reels[".concat(e, "].top"), 2 * -r))
			}, 20)
		},
		stop_reel_spin: function(t, e) {
			var n = this,
				r = this.data,
				i = r.stripHeight,
				s = r.numIconsPerReel,
				a = r.alignmentOffset,
				o = r.positioningTime,
				p = r.bounceHeight,
				c = -i - (e - 1) * (i / s) + a;
			clearInterval(this.data.timer[t]), this.setData(_defineProperty({}, "reels[".concat(t, "].top"), c - i));
			var l = wx.createAnimation({
				transformOrigin: "50% 50%",
				duration: o,
				timingFunction: "linear",
				delay: 0
			});
			l.translateY(p).step(), this.setData(_defineProperty({}, "reels[".concat(t, "].animation"), l.export())),
				runAsync(o).then(function() {
					var e;
					l.translateY(0).step({
						duration: 0
					}), n.setData((_defineProperty(e = {}, "reels[".concat(t, "].animation"), l.export()), _defineProperty(e,
						"reels[".concat(t, "].css"), "bounce"), e))
				})
		},
		reset_reel_spin: function(e) {
			this.setData(_defineProperty({}, "reels[".concat(e, "].css"), ""))
		}
	}
});
